using System;
using System.Net;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Rtech.Liveapi;  // Protobuf 生成されたクラスの名前空間
using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;

class Program
{
    public static async Task StartWebSocketServer()
    {
        HttpListener listener = new HttpListener();
        listener.Prefixes.Add("http://127.0.0.1:7777/");
        listener.Start();
        Console.WriteLine("WebSocket server started on ws://127.0.0.1:7777");

        while (true)
        {
            var context = await listener.GetContextAsync();
            if (context.Request.IsWebSocketRequest)
            {
                var wsContext = await context.AcceptWebSocketAsync(null);
                Console.WriteLine("WebSocket connection established.");
                await HandleWebSocket(wsContext.WebSocket);
            }
        }
    }

    private static async Task HandleWebSocket(WebSocket webSocket)
    {
        Console.WriteLine("Client connected.");
        var buffer = new byte[1024 * 4];

        while (webSocket.State == WebSocketState.Open)
        {
            var result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

            if (result.MessageType == WebSocketMessageType.Text || result.MessageType == WebSocketMessageType.Binary)
            {
                try
                {
                    // Protobuf メッセージをデシリアライズ
                    var incoming = LiveAPIEvent.Parser.ParseFrom(buffer.AsMemory(0, result.Count).ToArray());
                    Console.WriteLine($"Received Protobuf message: {incoming}");

                    // `gameMessage` の `TypeUrl` を取得して適切な関数を呼び出す
                    if (incoming.GameMessage != null)
                    {
                        switch (incoming.GameMessage.TypeUrl)
                        {
                            case "type.googleapis.com/rtech.liveapi.WeaponSwitched":
                                HandleWeaponSwitched(incoming.GameMessage.Unpack<WeaponSwitched>());
                                break;

                            case "type.googleapis.com/rtech.liveapi.AmmoUsed":
                                HandleAmmoUsed(incoming.GameMessage.Unpack<AmmoUsed>());
                                break;

                            case "type.googleapis.com/rtech.liveapi.PlayerAbilityUsed":
                                HandlePlayerAbilityUsed(incoming.GameMessage.Unpack<PlayerAbilityUsed>());
                                break;

                            case "type.googleapis.com/rtech.liveapi.PlayerDamaged":
                                HandlePlayerDamaged(incoming.GameMessage.Unpack<PlayerDamaged>());
                                break;

                            case "type.googleapis.com/rtech.liveapi.SquadEliminated":
                                HandleSquadEliminated(incoming.GameMessage.Unpack<SquadEliminated>());
                                break;

                            case "type.googleapis.com/rtech.liveapi.PlayerDisconnected":
                                HandlePlayerDisconnected(incoming.GameMessage.Unpack<PlayerDisconnected>());
                                break;

                            default:
                                Console.WriteLine($"Unknown message type received: {incoming.GameMessage.TypeUrl}");
                                break;
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error parsing message: {ex.Message}");
                }
            }

            if (result.MessageType == WebSocketMessageType.Close)
            {
                await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", CancellationToken.None);
                Console.WriteLine("WebSocket connection closed.");
            }
        }
    }

    // ---- 各メッセージの処理関数を定義 ----

    private static void HandleWeaponSwitched(WeaponSwitched message)
    {
        Console.WriteLine("Parsed WeaponSwitched Message:");
        Console.WriteLine($"Timestamp: {message.Timestamp}");
        Console.WriteLine($"Player: {message.Player}");
        Console.WriteLine($"Previous Weapon: {message.PreviousWeapon}");
        Console.WriteLine($"Current Weapon: {message.CurrentWeapon}");
    }

    private static void HandleAmmoUsed(AmmoUsed message)
    {
        Console.WriteLine("Parsed AmmoUsed Message:");
        Console.WriteLine($"Timestamp: {message.Timestamp}");
        Console.WriteLine($"Player: {message.Player}");
        Console.WriteLine($"Ammo Type: {message.AmmoType}");
        Console.WriteLine($"Remaining Ammo: {message.RemainingAmmo}");
    }

    private static void HandlePlayerAbilityUsed(PlayerAbilityUsed message)
    {
        Console.WriteLine("Parsed PlayerAbilityUsed Message:");
        Console.WriteLine($"Timestamp: {message.Timestamp}");
        Console.WriteLine($"Player: {message.Player}");
        Console.WriteLine($"Ability: {message.Ability}");
    }

    private static void HandlePlayerDamaged(PlayerDamaged message)
    {
        Console.WriteLine("Parsed PlayerDamaged Message:");
        Console.WriteLine($"Timestamp: {message.Timestamp}");
        Console.WriteLine($"Player: {message.Player}");
        Console.WriteLine($"Damage: {message.Damage}");
    }

    private static void HandleSquadEliminated(SquadEliminated message)
    {
        Console.WriteLine("Parsed SquadEliminated Message:");
        Console.WriteLine($"Timestamp: {message.Timestamp}");
        Console.WriteLine($"Squad: {message.Squad}");
    }

    private static void HandlePlayerDisconnected(PlayerDisconnected message)
    {
        Console.WriteLine("Parsed PlayerDisconnected Message:");
        Console.WriteLine($"Timestamp: {message.Timestamp}");
        Console.WriteLine($"Player: {message.Player}");
    }

    static async Task Main(string[] args)
    {
        Console.WriteLine("Starting WebSocket server...");
        await StartWebSocketServer();
    }
}
