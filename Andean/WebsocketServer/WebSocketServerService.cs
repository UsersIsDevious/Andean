using System.Net;
using System.Net.WebSockets;
using Rtech.Liveapi; // protoc により生成された型群
using ApexLiveAPI.Message;
using Andean.WebsocketServer.Controllers;


namespace Andean.WebsocketServer
{
    public static class WebSocketServer
    {
        private static readonly HttpListener _httpListener;
        private const int Port = 7777;

        // 認定済みクライアントの情報（最初に Init イベントを送信したクライアントを記録）
        private static string? _authorizedClientId = null;
        private static WebSocket? _authorizedClient = null;
        private static readonly object _authLock = new object();

        // リクエスト送受信用の TaskCompletionSource とロック
        private static TaskCompletionSource<byte[]>? _requestTcs = null;
        private static readonly object _requestLock = new object();

        static WebSocketServer() { 
            _httpListener = new HttpListener();
            _httpListener.Prefixes.Add($"http://127.0.0.1:{Port}/");
            _httpListener.Prefixes.Add($"http://localhost:{Port}/");
        }

        public static async Task StartAsync()
        {
            _httpListener.Start();
            Console.WriteLine($"✅ WebSocket Server is listening on ws://127.0.0.1:{Port}/ and ws://localhost:{Port}/");

            while (true)
            {
                var context = await _httpListener.GetContextAsync();
                if (context.Request.IsWebSocketRequest)
                {
                    var wsContext = await context.AcceptWebSocketAsync(null);
                    _ = HandleClientAsync(wsContext.WebSocket);
                }
                else
                {
                    context.Response.StatusCode = 400;
                    context.Response.Close();
                }
            }
        }

        /// <summary>
        /// 認定済みクライアントを用いてリクエストを送信し、応答を受信する
        /// </summary>
        public static async Task<byte[]> SendRequestViaAuthorizedClientAsync(byte[] requestBytes, CancellationToken cancellationToken)
        {
            WebSocket? client;
            lock (_authLock)
            {
                client = _authorizedClient;
            }
            if (client == null || client.State != WebSocketState.Open)
            {
                throw new Exception("No authorized client is connected.");
            }

            // 排他してリクエスト送信用 TCS を設定
            lock (_requestLock)
            {
                if (_requestTcs != null)
                    throw new InvalidOperationException("A request is already in progress.");
                _requestTcs = new TaskCompletionSource<byte[]>();
            }

            try
            {
                // リクエスト送信
                await client.SendAsync(new ArraySegment<byte>(requestBytes), WebSocketMessageType.Binary, true, cancellationToken);
                // タイムアウト付きで応答を待機
                using (var cts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken))
                {
                    cts.CancelAfter(TimeSpan.FromSeconds(10));
                    return await _requestTcs.Task.WaitAsync(cts.Token);
                }
            }
            finally
            {
                lock (_requestLock)
                {
                    _requestTcs = null;
                }
            }
        }

        private static async Task HandleClientAsync(WebSocket webSocket)
        {
            var clientId = Guid.NewGuid().ToString();
            Console.WriteLine($"📡 WebSocket client {clientId} connected.");

            var buffer = new byte[2048];

            try
            {
                while (webSocket.State == WebSocketState.Open)
                {
                    var result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                    if (result.MessageType == WebSocketMessageType.Close)
                        break;

                    try
                    {
                        var incomingEvent = LiveAPIEvent.Parser.ParseFrom(buffer, 0, result.Count);
                        Console.WriteLine($"📩 Raw Protobuf message received: {incomingEvent.GameMessage?.TypeUrl}");

                        if (incomingEvent.GameMessage == null)
                        {
                            Console.WriteLine("⚠️ Received message with null GameMessage. Skipping.");
                            continue;
                        }

                        bool isInit = incomingEvent.GameMessage.TypeUrl.Equals("type.googleapis.com/rtech.liveapi.Init");

                        // 認定済みクライアントの設定（最初の Init イベントで認定）
                        lock (_authLock)
                        {
                            if (_authorizedClient == null && isInit)
                            {
                                _authorizedClient = webSocket;
                                _authorizedClientId = clientId;
                                Console.WriteLine($"✅ Client {clientId} is set as the authorized client (Init received).");
                            }
                        }

                        // ここでリクエスト応答の待ち状態か確認
                        bool isAuthorized;
                        lock (_authLock)
                        {
                            isAuthorized = clientId == _authorizedClientId;
                        }
                        if (isAuthorized)
                        {
                            bool handledAsResponse = false;
                            // リクエスト送信待ちの場合、応答として TCS を完了させる
                            lock (_requestLock)
                            {
                                if (_requestTcs != null)
                                {
                                    byte[] responseBytes = new byte[result.Count];
                                    Array.Copy(buffer, responseBytes, result.Count);
                                    _requestTcs.SetResult(responseBytes);
                                    handledAsResponse = true;
                                }
                            }
                            if (handledAsResponse)
                                continue;
                        }
                        else
                        {
                            Console.WriteLine("⚠️ Client {ClientId} is not authorized. Ignoring message.", clientId);
                            continue;
                        }

                        // 通常のイベントとして処理
                        var parsedMessage = Message.ParseMessage(incomingEvent.GameMessage);
                        if (parsedMessage != null)
                        {
                            // _logger.LogInformation("🎯 Decoded Message from authorized client {ClientId}: {Message}", clientId, parsedMessage);
                            StatisticsProcessor.EnqueueMessage(clientId,parsedMessage);

                            var jsonMessage = new
                            {
                                Type = incomingEvent.GameMessage.TypeUrl,
                                Data = parsedMessage.ToString()
                            };

                            //await _hubContext.Clients.All.SendAsync("ReceiveMessage", jsonMessage);
                        }
                        else
                        {
                            Console.WriteLine($"⚠️ Unknown message type: {incomingEvent.GameMessage.TypeUrl}");
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.Error.WriteLine($"❌ WebSocket error from {clientId}: {ex}");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"❌ WebSocket error from {clientId}: {ex}");
            }
            finally
            {
                await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", CancellationToken.None);
                Console.WriteLine($"🔌 WebSocket client {clientId} disconnected.");
                lock (_authLock)
                {
                    if (clientId == _authorizedClientId)
                    {
                        _authorizedClient = null;
                        _authorizedClientId = null;
                        Console.WriteLine($"🔄 Authorized client {clientId} disconnected. Waiting for next Init event...");
                    }
                }
            }
        }
    }
}
