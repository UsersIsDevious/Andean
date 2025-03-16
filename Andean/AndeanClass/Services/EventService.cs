using Andean.AndeanClass.Models;
using Rtech.Liveapi;

namespace AndeanClass.Services
{
    /// <summary>
    /// イベントデータ生成に関するユーティリティクラス
    /// </summary>
    public static class EventService
    {
        /// <summary>
        /// 空のイベントデータ辞書を生成して返します。
        /// </summary>
        /// <returns>キーが文字列、値がオブジェクトの辞書</returns>
        public static Dictionary<string, object> CreateEventData()
        {
            var eventData = new Dictionary<string, object>();
            return eventData;
        }

        /// <summary>
        /// 指定したプレイヤーの情報を基に、イベント用のプレイヤーオブジェクト (EventPlayer) を生成して返します。
        /// </summary>
        /// <param name="player">プレイヤー情報</param>
        /// <returns>生成された EventPlayer オブジェクト</returns>
        public static EventPlayer CreateEventDataForPlayer(Player player)
        {
            return new EventPlayer(
                player.NucleusHash,
                new[] { player.Pos.X, player.Pos.Y, player.Pos.Z },
                new[] { player.CurrentHealth, player.MaxHealth, player.ShieldHealth, player.ShieldMaxHealth },
                player.Angles
            );
        }

        /// <summary>
        /// 攻撃者と被攻撃者のプレイヤー情報、および使用武器情報を基にイベントデータの辞書を生成して返します。
        /// </summary>
        /// <param name="attacker">攻撃者のプレイヤー情報</param>
        /// <param name="victim">被攻撃者のプレイヤー情報</param>
        /// <param name="weapon">使用された武器の名前</param>
        /// <returns>生成されたイベントデータ辞書</returns>
        public static Dictionary<string, object> CreateEventDataForInteraction(Player attacker, Player victim, string weapon)
        {
            var eventData = new Dictionary<string, object>
            {
                ["weapon"] = weapon,
                ["attacker"] = CreateEventDataForPlayer(attacker),
                ["victim"] = CreateEventDataForPlayer(victim)
            };

            return eventData;
        }
    }
}
