using System;
using System.Collections.Generic;

namespace AndeanClass
{
    /// <summary>
    /// 統計情報を管理するクラス
    /// </summary>
    public class Statistics
    {
        /// <summary>
        /// 合計数
        /// </summary>
        public uint Total { get; private set; }

        /// <summary>
        /// 武器別の統計情報
        /// </summary>
        public Dictionary<string, uint> Weapons { get; private set; }

        /// <summary>
        /// プレイヤー別の統計情報
        /// </summary>
        public Dictionary<string, uint> Players { get; private set; }

        /// <summary>
        /// レジェンド別の統計情報
        /// </summary>
        public Dictionary<string, uint> Legends { get; private set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        public Statistics()
        {
            Total = 0;
            Weapons = new Dictionary<string, uint>();
            Players = new Dictionary<string, uint>();
            Legends = new Dictionary<string, uint>();
        }

        /// <summary>
        /// 合計数に指定した数値を加算する
        /// </summary>
        /// <param name="amount">加算する数値</param>
        public void AddToTotal(uint amount)
        {
            Total += amount;
        }

        /// <summary>
        /// 武器の使用回数に指定した数値を加算する
        /// </summary>
        /// <param name="weaponId">武器のID</param>
        /// <param name="amount">加算する数値</param>
        public void AddWeaponUsage(string weaponId, uint amount)
        {
            if (!Weapons.ContainsKey(weaponId))
            {
                Weapons[weaponId] = 0;
            }
            Weapons[weaponId] += amount;
        }

        /// <summary>
        /// プレイヤーの統計情報に指定した数値を加算する
        /// </summary>
        /// <param name="playerId">プレイヤーのID</param>
        /// <param name="amount">加算する数値</param>
        public void AddPlayerStat(string playerId, uint amount)
        {
            if (!Players.ContainsKey(playerId))
            {
                Players[playerId] = 0;
            }
            Players[playerId] += amount;
        }

        /// <summary>
        /// レジェンドの統計情報に指定した数値を加算する
        /// </summary>
        /// <param name="legendName">レジェンドの名前</param>
        /// <param name="amount">加算する数値</param>
        public void AddLegendStat(string legendName, uint amount)
        {
            if (!Legends.ContainsKey(legendName))
            {
                Legends[legendName] = 0;
            }
            Legends[legendName] += amount;
        }

        /// <summary>
        /// 一度に統計情報を更新する
        /// </summary>
        /// <param name="amount">加算する数値</param>
        /// <param name="weaponId">武器のID</param>
        /// <param name="playerId">プレイヤーのID</param>
        /// <param name="legendName">レジェンドの名前</param>
        /// <returns>更新後の Statistics インスタンス</returns>
        public Statistics UpdateStatistics(uint amount, string weaponId, string playerId, string legendName)
        {
            AddToTotal(amount);
            AddWeaponUsage(weaponId, amount);
            AddPlayerStat(playerId, amount);
            AddLegendStat(legendName, amount);
            return this;
        }

        /// <summary>
        /// 統計情報をリセットする
        /// </summary>
        /// <returns>リセット後の Statistics インスタンス</returns>
        public Statistics Reset()
        {
            Total = 0;
            Weapons.Clear();
            Players.Clear();
            Legends.Clear();
            return this;
        }
    }
}
