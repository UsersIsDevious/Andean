using System;
using System.Collections.Generic;
using System.Linq; // LINQ を使用
using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;
using Rtech.Liveapi; // protoc により生成された名前空間

namespace Andean.Services.Message
{
    public static class MessageTypeRegistry
    {
        // 各メッセージ型に対して、空のインスタンスを生成する関数を登録
        private static readonly Dictionary<string, object> _messageParsers = new()
        {
            { "type.googleapis.com/rtech.liveapi.Init", new Func<IMessage>(() => new Init()) },
            { "type.googleapis.com/rtech.liveapi.Vector3", new Func<IMessage>(() => new Vector3()) },
            { "type.googleapis.com/rtech.liveapi.Player", new Func<IMessage>(() => new Player()) },
            { "type.googleapis.com/rtech.liveapi.CustomMatch_LobbyPlayer", new Func<IMessage>(() => new CustomMatch_LobbyPlayer()) },
            { "type.googleapis.com/rtech.liveapi.Datacenter", new Func<IMessage>(() => new Datacenter()) },
            { "type.googleapis.com/rtech.liveapi.Version", new Func<IMessage>(() => new Rtech.Liveapi.Version()) },
            { "type.googleapis.com/rtech.liveapi.InventoryItem", new Func<IMessage>(() => new InventoryItem()) },
            { "type.googleapis.com/rtech.liveapi.LoadoutConfiguration", new Func<IMessage>(() => new LoadoutConfiguration()) },
            { "type.googleapis.com/rtech.liveapi.CustomMatch_LobbyPlayers", new Func<IMessage>(() => new CustomMatch_LobbyPlayers()) },
            { "type.googleapis.com/rtech.liveapi.RequestStatus", new Func<IMessage>(() => new RequestStatus()) },
            { "type.googleapis.com/rtech.liveapi.Response", new Func<IMessage>(() => new Response()) },
            { "type.googleapis.com/rtech.liveapi.MatchSetup", new Func<IMessage>(() => new MatchSetup()) },
            { "type.googleapis.com/rtech.liveapi.GameStateChanged", new Func<IMessage>(() => new GameStateChanged()) },
            { "type.googleapis.com/rtech.liveapi.CharacterSelected", new Func<IMessage>(() => new CharacterSelected()) },
            { "type.googleapis.com/rtech.liveapi.MatchStateEnd", new Func<IMessage>(() => new MatchStateEnd()) },
            { "type.googleapis.com/rtech.liveapi.RingStartClosing", new Func<IMessage>(() => new RingStartClosing()) },
            { "type.googleapis.com/rtech.liveapi.RingFinishedClosing", new Func<IMessage>(() => new RingFinishedClosing()) },
            { "type.googleapis.com/rtech.liveapi.PlayerConnected", new Func<IMessage>(() => new PlayerConnected()) },
            { "type.googleapis.com/rtech.liveapi.PlayerDisconnected", new Func<IMessage>(() => new PlayerDisconnected()) },
            { "type.googleapis.com/rtech.liveapi.PlayerStatChanged", new Func<IMessage>(() => new PlayerStatChanged()) },
            { "type.googleapis.com/rtech.liveapi.PlayerUltimateCharged", new Func<IMessage>(() => new PlayerUltimateCharged()) },
            { "type.googleapis.com/rtech.liveapi.PlayerUpgradeTierChanged", new Func<IMessage>(() => new PlayerUpgradeTierChanged()) },
            { "type.googleapis.com/rtech.liveapi.PlayerDamaged", new Func<IMessage>(() => new PlayerDamaged()) },
            { "type.googleapis.com/rtech.liveapi.PlayerKilled", new Func<IMessage>(() => new PlayerKilled()) },
            { "type.googleapis.com/rtech.liveapi.PlayerDowned", new Func<IMessage>(() => new PlayerDowned()) },
            { "type.googleapis.com/rtech.liveapi.PlayerAssist", new Func<IMessage>(() => new PlayerAssist()) },
            { "type.googleapis.com/rtech.liveapi.SquadEliminated", new Func<IMessage>(() => new SquadEliminated()) },
            { "type.googleapis.com/rtech.liveapi.GibraltarShieldAbsorbed", new Func<IMessage>(() => new GibraltarShieldAbsorbed()) },
            { "type.googleapis.com/rtech.liveapi.RevenantForgedShadowDamaged", new Func<IMessage>(() => new RevenantForgedShadowDamaged()) },
            { "type.googleapis.com/rtech.liveapi.ChangeCamera", new Func<IMessage>(() => new ChangeCamera()) },
            { "type.googleapis.com/rtech.liveapi.PauseToggle", new Func<IMessage>(() => new PauseToggle()) },
            { "type.googleapis.com/rtech.liveapi.CustomMatch_SetSettings", new Func<IMessage>(() => new CustomMatch_SetSettings()) },
            { "type.googleapis.com/rtech.liveapi.PlayerRespawnTeam", new Func<IMessage>(() => new PlayerRespawnTeam()) },
            { "type.googleapis.com/rtech.liveapi.PlayerRevive", new Func<IMessage>(() => new PlayerRevive()) },
            { "type.googleapis.com/rtech.liveapi.ArenasItemSelected", new Func<IMessage>(() => new ArenasItemSelected()) },
            { "type.googleapis.com/rtech.liveapi.ArenasItemDeselected", new Func<IMessage>(() => new ArenasItemDeselected()) },
            { "type.googleapis.com/rtech.liveapi.InventoryPickUp", new Func<IMessage>(() => new InventoryPickUp()) },
            { "type.googleapis.com/rtech.liveapi.InventoryDrop", new Func<IMessage>(() => new InventoryDrop()) },
            { "type.googleapis.com/rtech.liveapi.InventoryUse", new Func<IMessage>(() => new InventoryUse()) },
            { "type.googleapis.com/rtech.liveapi.BannerCollected", new Func<IMessage>(() => new BannerCollected()) },
            { "type.googleapis.com/rtech.liveapi.PlayerAbilityUsed", new Func<IMessage>(() => new PlayerAbilityUsed()) },
            { "type.googleapis.com/rtech.liveapi.LegendUpgradeSelected", new Func<IMessage>(() => new LegendUpgradeSelected()) },
            { "type.googleapis.com/rtech.liveapi.ZiplineUsed", new Func<IMessage>(() => new ZiplineUsed()) },
            { "type.googleapis.com/rtech.liveapi.GrenadeThrown", new Func<IMessage>(() => new GrenadeThrown()) },
            { "type.googleapis.com/rtech.liveapi.BlackMarketAction", new Func<IMessage>(() => new BlackMarketAction()) },
            { "type.googleapis.com/rtech.liveapi.WraithPortal", new Func<IMessage>(() => new WraithPortal()) },
            { "type.googleapis.com/rtech.liveapi.WarpGateUsed", new Func<IMessage>(() => new WarpGateUsed()) },
            { "type.googleapis.com/rtech.liveapi.AmmoUsed", new Func<IMessage>(() => new AmmoUsed()) },
            { "type.googleapis.com/rtech.liveapi.WeaponSwitched", new Func<IMessage>(() => new WeaponSwitched()) },
            { "type.googleapis.com/rtech.liveapi.ObserverSwitched", new Func<IMessage>(() => new ObserverSwitched()) },
            { "type.googleapis.com/rtech.liveapi.ObserverAnnotation", new Func<IMessage>(() => new ObserverAnnotation()) }
        };

        /// <summary>
        /// Any 型の gameMessage を @type に応じた Protobuf メッセージへデシリアライズします。
        /// </summary>
        /// <param name="gameMessage">Any 型のメッセージ</param>
        /// <returns>デシリアライズされた IMessage、未対応の場合は null</returns>
        public static IMessage? ParseMessage(Any gameMessage)
        {
            if (_messageParsers.TryGetValue(gameMessage.TypeUrl, out var parserObj))
            {
                if (parserObj is Func<IMessage> parserFunc)
                {
                    // まず空のインスタンスを生成
                    IMessage instance = parserFunc();
                    // その型を取得
                    System.Type messageType = instance.GetType();
                    // MessageParser は各型に静的に定義されているので、リフレクションで Parser プロパティを取得する
                    var parserProperty = messageType.GetProperty("Parser");
                    if (parserProperty != null)
                    {
                        var parser = parserProperty.GetValue(null);
                        // Unpack<T>() のオーバーロードが複数あるため、パラメーターが0個のものを選ぶ
                        var unpackMethod = typeof(Any)
                            .GetMethods()
                            .FirstOrDefault(m => m.Name == nameof(Any.Unpack) && m.GetParameters().Length == 0);
                        if (unpackMethod != null)
                        {
                            var genericMethod = unpackMethod.MakeGenericMethod(messageType);
                            return (IMessage?)genericMethod.Invoke(gameMessage, null);
                        }
                    }
                }
            }
            Console.WriteLine($"⚠️ Unknown message type received: {gameMessage.TypeUrl}");
            return null;
        }
    }
}
