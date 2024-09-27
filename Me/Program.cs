using System;
using System.Net;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json;  // JSON シリアライザーの参照
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
                    //Console.WriteLine($"Received Protobuf message: {incoming}");

                    // `gameMessage` の `TypeUrl` を取得して適切な関数を呼び出す
                    if (incoming.GameMessage != null)
                    {
                        switch (incoming.GameMessage.TypeUrl)
                        {
                            //IntermediaryMessages
                            case "type.googleapis.com/rtech.liveapi.Init":
                                var Init_Message = incoming.GameMessage.Unpack<Init>();
                                await SendTo(Init_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.Vector3":
                                var Vector3_Message = incoming.GameMessage.Unpack<Vector3>();
                                await SendTo(Vector3_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.Player":
                                var Player_Message = incoming.GameMessage.Unpack<Player>();
                                await SendTo(Player_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.CustomMatch_LobbyPlayer":
                                var CustomMatch_LobbyPlayer_Message = incoming.GameMessage.Unpack<CustomMatch_LobbyPlayer>();
                                await SendTo(CustomMatch_LobbyPlayer_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.Datacenter":
                                var Datacenter_Message = incoming.GameMessage.Unpack<Datacenter>();
                                await SendTo(Datacenter_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.Version":
                                var Version_Message = incoming.GameMessage.Unpack<Rtech.Liveapi.Version>();
                                await SendTo(Version_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.InventoryItem":
                                var InventoryItem_Message = incoming.GameMessage.Unpack<InventoryItem>();
                                await SendTo(InventoryItem_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.LoadoutConfiguration":
                                var LoadoutConfiguration_Message = incoming.GameMessage.Unpack<LoadoutConfiguration>();
                                await SendTo(LoadoutConfiguration_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.CustomMatch_LobbyPlayers":
                                var CustomMatch_LobbyPlayers_Message = incoming.GameMessage.Unpack<CustomMatch_LobbyPlayers>();
                                await SendTo(CustomMatch_LobbyPlayers_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.RequestStatus":
                                var RequestStatus_Message = incoming.GameMessage.Unpack<RequestStatus>();
                                await SendTo(RequestStatus_Message);
                                break;

                            //MatchInformation

                            case "type.googleapis.com/rtech.liveapi.MatchSetup":
                                var MatchSetup_Message = incoming.GameMessage.Unpack<MatchSetup>();
                                await SendTo(MatchSetup_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.GameStateChanged":
                                var GameStateChanged_Message = incoming.GameMessage.Unpack<GameStateChanged>();
                                await SendTo(GameStateChanged_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.CharacterSelected":
                                var CharacterSelected_Message = incoming.GameMessage.Unpack<CharacterSelected>();
                                await SendTo(CharacterSelected_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.MatchStateEnd":
                                var MatchStateEnd_Message = incoming.GameMessage.Unpack<MatchStateEnd>();
                                await SendTo(MatchStateEnd_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.RingStartClosing":
                                var RingStartClosing_Message = incoming.GameMessage.Unpack<RingStartClosing>();
                                await SendTo(RingStartClosing_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.RingFinishedClosing":
                                var RingFinishedClosing_Message = incoming.GameMessage.Unpack<RingFinishedClosing>();
                                await SendTo(RingFinishedClosing_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.PlayerConnected":
                                var PlayerConnected_Message = incoming.GameMessage.Unpack<PlayerConnected>();
                                await SendTo(PlayerConnected_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.PlayerDisconnected":
                                var PlayerDisconnected_Message = incoming.GameMessage.Unpack<PlayerDisconnected>();
                                await SendTo(PlayerDisconnected_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.PlayerStatChanged":
                                var PlayerStatChanged_Message = incoming.GameMessage.Unpack<PlayerStatChanged>();
                                await SendTo(PlayerStatChanged_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.PlayerUpgradeTierChanged":
                                var PlayerUpgradeTierChanged_Message = incoming.GameMessage.Unpack<PlayerUpgradeTierChanged>();
                                await SendTo(PlayerUpgradeTierChanged_Message);
                                break;


                            //CombatEvents

                            case "type.googleapis.com/rtech.liveapi.PlayerDamaged":
                                var PlayerDamaged_Message = incoming.GameMessage.Unpack<PlayerDamaged>();
                                await SendTo(PlayerDamaged_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.PlayerKilled":
                                var PlayerKilled_Message = incoming.GameMessage.Unpack<PlayerKilled>();
                                await SendTo(PlayerKilled_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.PlayerDowned":
                                var PlayerDowned_Message = incoming.GameMessage.Unpack<PlayerDowned>();
                                await SendTo(PlayerDowned_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.PlayerAssist":
                                var PlayerAssist_Message = incoming.GameMessage.Unpack<PlayerAssist>();
                                await SendTo(PlayerAssist_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.SquadEliminated":
                                var SquadEliminated_Message = incoming.GameMessage.Unpack<SquadEliminated>();
                                await SendTo(SquadEliminated_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.GibraltarShieldAbsorbed":
                                var GibraltarShieldAbsorbed_Message = incoming.GameMessage.Unpack<GibraltarShieldAbsorbed>();
                                await SendTo(GibraltarShieldAbsorbed_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.RevenantForgedShadowDamaged":
                                var RevenantForgedShadowDamaged_Message = incoming.GameMessage.Unpack<RevenantForgedShadowDamaged>();
                                await SendTo(RevenantForgedShadowDamaged_Message);
                                break;

                            //InteractionEvents

                            case "type.googleapis.com/rtech.liveapi.PlayerRespawnTeam":
                                var PlayerRespawnTeam_Message = incoming.GameMessage.Unpack<PlayerRespawnTeam>();
                                await SendTo(PlayerRespawnTeam_Message);
                                break;
                            
                            case "type.googleapis.com/rtech.liveapi.PlayerRevive":
                                var PlayerRevive_Message = incoming.GameMessage.Unpack<PlayerRevive>();
                                await SendTo(PlayerRevive_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.ArenasItemSelected":
                                var ArenasItemSelected_Message = incoming.GameMessage.Unpack<ArenasItemSelected>();
                                await SendTo(ArenasItemSelected_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.ArenasItemDeselected":
                                var ArenasItemDeselected_Message = incoming.GameMessage.Unpack<ArenasItemDeselected>();
                                await SendTo(ArenasItemDeselected_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.InventoryPickUp":
                                var InventoryPickUp_Message = incoming.GameMessage.Unpack<InventoryPickUp>();
                                await SendTo(InventoryPickUp_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.InventoryDrop":
                                var InventoryDrop_Message = incoming.GameMessage.Unpack<InventoryDrop>();
                                await SendTo(InventoryDrop_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.InventoryUse":
                                var InventoryUse_Message = incoming.GameMessage.Unpack<InventoryUse>();
                                await SendTo(InventoryUse_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.BannerCollected":
                                var BannerCollected_Message = incoming.GameMessage.Unpack<BannerCollected>();
                                await SendTo(BannerCollected_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.PlayerAbilityUsed":
                                var PlayerAbilityUsed_Message = incoming.GameMessage.Unpack<PlayerAbilityUsed>();
                                await SendTo(PlayerAbilityUsed_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.LegendUpgradeSelected":
                                var LegendUpgradeSelected_Message = incoming.GameMessage.Unpack<LegendUpgradeSelected>();
                                await SendTo(LegendUpgradeSelected_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.ZiplineUsed":
                                var ZiplineUsed_Message = incoming.GameMessage.Unpack<ZiplineUsed>();
                                await SendTo(ZiplineUsed_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.GrenadeThrown":
                                var GrenadeThrown_Message = incoming.GameMessage.Unpack<GrenadeThrown>();
                                await SendTo(GrenadeThrown_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.BlackMarketAction":
                                var BlackMarketAction_Message = incoming.GameMessage.Unpack<BlackMarketAction>();
                                await SendTo(BlackMarketAction_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.WraithPortal":
                                var WraithPortal_Message = incoming.GameMessage.Unpack<WraithPortal>();
                                await SendTo(WraithPortal_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.WarpGateUsed":
                                var WarpGateUsed_Message = incoming.GameMessage.Unpack<WarpGateUsed>();
                                await SendTo(WarpGateUsed_Message);
                                break;
                                
                            case "type.googleapis.com/rtech.liveapi.AmmoUsed":
                                var AmmoUsed_Message = incoming.GameMessage.Unpack<AmmoUsed>();
                                await SendTo(AmmoUsed_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.WeaponSwitched":
                                var WeaponSwitched_Message = incoming.GameMessage.Unpack<WeaponSwitched>();
                                await SendTo(WeaponSwitched_Message);
                                break;

                            //ObserverEvents

                            case "type.googleapis.com/rtech.liveapi.ObserverSwitched":
                                var ObserverSwitched_Message = incoming.GameMessage.Unpack<ObserverSwitched>();
                                await SendTo(ObserverSwitched_Message);
                                break;

                            case "type.googleapis.com/rtech.liveapi.ObserverAnnotation":
                                var ObserverAnnotation_Message = incoming.GameMessage.Unpack<ObserverAnnotation>();
                                await SendTo(ObserverAnnotation_Message);
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

    // ---- メッセージを JSON に変換し、指定のポート (9238) に送信する関数 ----
    private static async Task SendTo<T>(T message) where T : IMessage<T>
    {
        try
        {
            // WebSocket クライアントを作成し、ポート 9238 の WebSocket サーバーに接続
            using (ClientWebSocket client = new ClientWebSocket())
            {
                Uri uri = new Uri("ws://127.0.0.1:9238");
                await client.ConnectAsync(uri, CancellationToken.None);
                Console.WriteLine("Connected to WebSocket client on port 9238.");

                // メッセージを JSON 形式に変換
                string jsonMessage = JsonConvert.SerializeObject(message);
                Console.WriteLine($"Sending JSON message to port 9238: {jsonMessage}");

                // JSON メッセージをバイナリ形式に変換して送信
                var encodedMessage = Encoding.UTF8.GetBytes(jsonMessage);
                await client.SendAsync(new ArraySegment<byte>(encodedMessage, 0, encodedMessage.Length), WebSocketMessageType.Text, true, CancellationToken.None);

                Console.WriteLine("Message sent successfully.");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error sending message to port 9238: {ex.Message}");
        }
    }

    static async Task Main(string[] args)
    {
        Console.WriteLine("Starting WebSocket server...");
        await StartWebSocketServer();
    }
}
