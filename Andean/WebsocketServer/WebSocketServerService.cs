using System.Net;
using System.Net.WebSockets;
using System.Collections.Concurrent;
using Rtech.Liveapi; // protoc により生成された型群
using ApexLiveAPI.Message;
using Andean.WebsocketServer.Controllers;
using AndeanWebUI.Services;
using AndeanSystems; // StringPool を使うため

namespace Andean.WebsocketServer
{
    public static class WebSocketServer
    {
        private static readonly HttpListener _httpListener;
        private const int Port = 7777;

        private static string? _authorizedClientId = null;
        private static WebSocket? _authorizedClient = null;
        private static readonly object _authLock = new object();

        private static readonly BlockingCollection<OutgoingMessage> _sendQueue = new();

        static WebSocketServer()
        {
            _httpListener = new HttpListener();
            _httpListener.Prefixes.Add($"http://127.0.0.1:{Port}/");
            _httpListener.Prefixes.Add($"http://localhost:{Port}/");

            Task.Factory.StartNew(ProcessSendQueue, TaskCreationOptions.LongRunning);
        }

        public static async Task StartAsync()
        {
            _httpListener.Start();
            Console.WriteLine($"\u2705 WebSocket Server is listening on ws://127.0.0.1:{Port}/ and ws://localhost:{Port}/");

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

        private static async Task HandleClientAsync(WebSocket webSocket)
        {
            var clientId = StringPool.Get(Guid.NewGuid().ToString());
            Console.WriteLine($"\ud83d\udcf1 WebSocket client {clientId} connected.");

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
                            Console.WriteLine("\u26a0\ufe0f Received message with null GameMessage. Skipping.");
                            continue;
                        }

                        string typeUrl = StringPool.Get(incomingEvent.GameMessage.TypeUrl);
                        bool isInit = typeUrl.Equals("type.googleapis.com/rtech.liveapi.Init");

                        lock (_authLock)
                        {
                            if (_authorizedClient == null && isInit)
                            {
                                _authorizedClient = webSocket;
                                _authorizedClientId = clientId;
                                Console.WriteLine($"\u2705 Client {clientId} is set as the authorized client (Init received).");
                            }
                        }

                        bool isAuthorized;
                        lock (_authLock)
                        {
                            isAuthorized = clientId == _authorizedClientId;
                        }

                        if (!isAuthorized)
                        {
                            Console.WriteLine($"\u26a0\ufe0f Client {clientId} is not authorized. Ignoring message.");
                            continue;
                        }

                        var parsedMessage = Message.ParseMessage(incomingEvent.GameMessage);
                        if (parsedMessage != null)
                        {
                            StatisticsProcessor.EnqueueMessage(clientId, parsedMessage);
                        }
                        else
                        {
                            Console.WriteLine($"\u26a0\ufe0f Unknown message type: {typeUrl}");
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.Error.WriteLine($"\u274c WebSocket error from {clientId}: {ex}");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"\u274c WebSocket error from {clientId}: {ex}");
            }
            finally
            {
                await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", CancellationToken.None);
                Console.WriteLine($"\ud83d\udd0c WebSocket client {clientId} disconnected.");

                lock (_authLock)
                {
                    if (clientId == _authorizedClientId)
                    {
                        _authorizedClient = null;
                        _authorizedClientId = null;
                        ControlPanelHubService.SetLiveAPIStatus("Disconnect", "Disconnected from Apex Legends.").Wait();
                        Console.WriteLine($"\ud83d\udd04 Authorized client {clientId} disconnected. Waiting for next Init event...");
                    }
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
                    Console.Error.WriteLine($"\u274c Send error: {ex}");
                }
            }
        }
    }

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
