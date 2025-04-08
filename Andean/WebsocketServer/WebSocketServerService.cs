using System.Net;
using System.Net.WebSockets;
using System.Collections.Concurrent;
using Rtech.Liveapi; // protoc により生成された型群
using ApexLiveAPI.Message;
using Andean.WebsocketServer.Controllers;
using AndeanWebUI.Services;

namespace Andean.WebsocketServer
{
    public static class WebSocketServer
    {
        private static readonly HttpListener _httpListener;
        private const int Port = 7777;

        // 認定済みクライアントの情報（最初の Init イベントで認定）
        private static string? _authorizedClientId = null;
        private static WebSocket? _authorizedClient = null;
        private static readonly object _authLock = new object();

        // 送信処理専用のキューとワーカー
        private static readonly BlockingCollection<OutgoingMessage> _sendQueue = new BlockingCollection<OutgoingMessage>();

        static WebSocketServer()
        {
            _httpListener = new HttpListener();
            _httpListener.Prefixes.Add($"http://127.0.0.1:{Port}/");
            _httpListener.Prefixes.Add($"http://localhost:{Port}/");

            // 送信専用ワーカーを開始
            Task.Factory.StartNew(ProcessSendQueue, TaskCreationOptions.LongRunning);
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
                    _ = HandleClientAsync(wsContext.WebSocket);  // 受信専用ワーカーを起動
                }
                else
                {
                    context.Response.StatusCode = 400;
                    context.Response.Close();
                }
            }
        }

        /// <summary>
        /// 認定済みクライアントへメッセージを送信する（返答は不要、投げっぱなし）。
        /// </summary>
        public static void SendMessageViaAuthorizedClient(byte[] messageBytes, CancellationToken cancellationToken)
        {
            WebSocket? client;
            lock (_authLock)
            {
                client = _authorizedClient;
            }
            if (client == null || client.State != WebSocketState.Open)
            {
                Console.Error.WriteLine("No authorized client is connected.");
                return;
            }

            var outgoingMessage = new OutgoingMessage(client, messageBytes, WebSocketMessageType.Binary, true, cancellationToken);
            _sendQueue.Add(outgoingMessage);
        }

        /// <summary>
        /// クライアントからの受信処理を行うワーカー
        /// </summary>
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

                        if (incomingEvent.GameMessage == null)
                        {
                            Console.WriteLine("⚠️ Received message with null GameMessage. Skipping.");
                            continue;
                        }

                        bool isInit = incomingEvent.GameMessage.TypeUrl.Equals("type.googleapis.com/rtech.liveapi.Init");

                        // 初回 Init イベントにより認定済みクライアントを設定
                        lock (_authLock)
                        {
                            if (_authorizedClient == null && isInit)
                            {
                                _authorizedClient = webSocket;
                                _authorizedClientId = clientId;
                                Console.WriteLine($"✅ Client {clientId} is set as the authorized client (Init received).");
                            }
                        }

                        // 認定済みクライアント以外は無視
                        bool isAuthorized;
                        lock (_authLock)
                        {
                            isAuthorized = clientId == _authorizedClientId;
                        }
                        if (!isAuthorized)
                        {
                            Console.WriteLine($"⚠️ Client {clientId} is not authorized. Ignoring message.");
                            continue;
                        }

                        // 通常イベントとして処理（別途処理ワーカーへ委譲）
                        var parsedMessage = Message.ParseMessage(incomingEvent.GameMessage);
                        if (parsedMessage != null)
                        {
                            StatisticsProcessor.EnqueueMessage(clientId, parsedMessage);
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
                        ControlPanelHubService.SetLiveAPIStatus("Disconnect", "Disconnected from Apex Legends.").Wait();
                        Console.WriteLine($"🔄 Authorized client {clientId} disconnected. Waiting for next Init event...");
                    }
                }
            }
        }

        /// <summary>
        /// 送信専用ワーカー。キューに追加されたメッセージを取り出して SendAsync で送信する。
        /// 投げっぱなしのため、送信完了の待機は行いません。
        /// </summary>
        private static async void ProcessSendQueue()
        {
            foreach (var outgoingMessage in _sendQueue.GetConsumingEnumerable())
            {
                try
                {
                    await outgoingMessage.Client.SendAsync(
                        new ArraySegment<byte>(outgoingMessage.Data),
                        outgoingMessage.MessageType,
                        outgoingMessage.EndOfMessage,
                        outgoingMessage.CancellationToken);
                }
                catch (Exception ex)
                {
                    Console.Error.WriteLine($"❌ Send error: {ex}");
                }
            }
        }
    }

    /// <summary>
    /// 送信するメッセージを表すクラス
    /// </summary>
    public class OutgoingMessage
    {
        public WebSocket Client { get; }
        public byte[] Data { get; }
        public WebSocketMessageType MessageType { get; }
        public bool EndOfMessage { get; }
        public CancellationToken CancellationToken { get; }

        public OutgoingMessage(WebSocket client, byte[] data, WebSocketMessageType messageType, bool endOfMessage, CancellationToken cancellationToken)
        {
            Client = client;
            Data = data;
            MessageType = messageType;
            EndOfMessage = endOfMessage;
            CancellationToken = cancellationToken;
        }
    }
}
