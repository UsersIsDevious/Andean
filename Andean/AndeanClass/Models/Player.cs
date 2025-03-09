using System;
using System.Collections.Generic;
using System.Linq;

namespace AndeanClass
{
    /// <summary>
    /// プレイヤーを表すクラス。インベントリとゲーム内でのステータスを保持する。
    /// </summary>
    public class Player
    {
        // 基本情報
        public string Name { get; set; }
        public int TeamId { get; set; } // uint32相当。必要に応じて uint を使用可能
        public string NucleusHash { get; set; }
        public string HardwareName { get; set; }

        // 位置情報
        public Vector3 Pos { get; set; }
        public Vector3 OriginalPos { get; set; }
        public double Angles { get; set; }

        // 体力・シールド
        public int CurrentHealth { get; set; }
        public int MaxHealth { get; set; }
        public int ShieldHealth { get; set; }
        public int ShieldMaxHealth { get; set; }

        // チーム・キャラクター情報
        public string TeamName { get; set; }
        public int SquadIndex { get; set; }
        public string Legend { get; set; }
        public string Skin { get; set; }

        // インベントリおよび統計
        public Inventory Inventory { get; set; }
        public Statistics Kills { get; set; }
        public Statistics KillsReceived { get; set; }
        public Statistics KillAssists { get; set; }
        public Statistics KillAssistsReceived { get; set; }
        public Statistics Downs { get; set; }
        public Statistics DownsReceived { get; set; }
        public Statistics DamageDealt { get; set; }
        public Statistics DamageReceived { get; set; }

        // 状態
        public string Status { get; set; }
        public bool IsOnline { get; set; }

        // レベル情報 (例: { "now": "0", "0": {} })
        public Dictionary<string, object> Level { get; set; }

        // 武器情報
        public List<object> WeaponList { get; set; }
        public string InHand { get; set; }

        // 使用回数など
        public Dictionary<string, int> AbilityUseCount { get; set; }
        public Dictionary<string, int> UltimateUseCount { get; set; }
        public int ZiplineUseCount { get; set; }
        public Dictionary<string, int> GrenadeUseCount { get; set; }
        public BlackMarket BlackMarket { get; set; }
        public int WraithPortalUseCount { get; set; }
        public bool UltimateCharged { get; set; }
        public int ForgedShadowDamaged { get; set; }
        public int WarpGateUseCount { get; set; }
        public int GibraltarShieldAbsorbed { get; set; }
        public int BannerCollectedCount { get; set; }
        public bool CanRevive { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="name">プレイヤー名</param>
        /// <param name="teamId">チームID</param>
        /// <param name="nucleusHash">プレイヤーの識別用ハッシュ</param>
        /// <param name="hardwareName">使用ハードウェア名</param>
        public Player(string name, int teamId, string nucleusHash, string hardwareName)
        {
            Name = name;
            TeamId = teamId;
            NucleusHash = nucleusHash;
            HardwareName = hardwareName;

            Pos = new Vector3();
            OriginalPos = new Vector3();
            Angles = 0;

            CurrentHealth = 0;
            MaxHealth = 0;
            ShieldHealth = 0;
            ShieldMaxHealth = 0;

            TeamName = string.Empty;
            SquadIndex = -1;
            Legend = string.Empty;
            Skin = string.Empty;

            Inventory = new Inventory();
            Kills = new Statistics();
            KillsReceived = new Statistics();
            KillAssists = new Statistics();
            KillAssistsReceived = new Statistics();
            Downs = new Statistics();
            DownsReceived = new Statistics();
            DamageDealt = new Statistics();
            DamageReceived = new Statistics();

            Status = "alive";
            IsOnline = true;

            Level = new Dictionary<string, object>
            {
                { "now", "0" },
                { "0", new object() } // 詳細なレベル情報が必要な場合は適宜実装
            };

            WeaponList = new List<object>();
            InHand = "mp_weapon_melee_survival";

            AbilityUseCount = new Dictionary<string, int>();
            UltimateUseCount = new Dictionary<string, int>();
            ZiplineUseCount = 0;
            GrenadeUseCount = new Dictionary<string, int>();
            BlackMarket = new BlackMarket();
            WraithPortalUseCount = 0;
            UltimateCharged = false;
            ForgedShadowDamaged = 0;
            WarpGateUseCount = 0;
            GibraltarShieldAbsorbed = 0;
            BannerCollectedCount = 0;
            CanRevive = false;
        }

        /// <summary>
        /// プレイヤーの位置と角度を更新する
        /// </summary>
        /// <param name="x">新しいx座標</param>
        /// <param name="y">新しいy座標</param>
        /// <param name="z">新しいz座標</param>
        /// <param name="newAngles">新しい角度</param>
        /// <param name="mapOffset">座標オフセット (要素数3のdouble配列)</param>
        public void UpdatePositionAndAngles(double x, double y, double z, double newAngles, double[] mapOffset)
        {
            Pos.UpdateValues(x, y, z, mapOffset);
            Angles = newAngles * -1 + 45;
        }

        /// <summary>
        /// プレイヤーの体力とシールドを更新する
        /// </summary>
        public void UpdateHealthAndShields(int newCurrentHealth, int newMaxHealth, int newShieldHealth, int newShieldMaxHealth)
        {
            CurrentHealth = newCurrentHealth;
            MaxHealth = newMaxHealth;
            ShieldHealth = newShieldHealth;
            ShieldMaxHealth = newShieldMaxHealth;
        }

        /// <summary>
        /// プレイヤーのキャラクターとスキンを更新する
        /// </summary>
        public void UpdateLegend(string newLegend, string newSkin)
        {
            Legend = newLegend;
            Skin = newSkin;
        }

        /// <summary>
        /// プレイヤーのステータスを変更する
        /// </summary>
        public void SetStatus(string status)
        {
            Status = status;
        }

        /// <summary>
        /// プレイヤーの接続状態を変更する
        /// </summary>
        public void SetOnlineStatus(bool status)
        {
            IsOnline = status;
        }

        /// <summary>
        /// チーム名を変更する
        /// </summary>
        public void SetTeamName(string teamName)
        {
            TeamName = teamName;
        }

        /// <summary>
        /// チーム内のインデックスを設定する
        /// </summary>
        public void SetSquadIndex(int index)
        {
            SquadIndex = index;
        }

        /// <summary>
        /// プレイヤーの生存状態を取得する
        /// </summary>
        public string GetStatus() => Status;

        /// <summary>
        /// プレイヤーの接続状態を取得する
        /// </summary>
        public bool GetOnlineStatus() => IsOnline;

        /// <summary>
        /// キル数を更新する
        /// </summary>
        public void SetKills(string perpetrator, string victim, string legend)
        {
            Kills.UpdateStatistics(1, perpetrator, victim, legend);
        }

        /// <summary>
        /// キルされた数を更新する
        /// </summary>
        public void SetKillsReceived(string perpetrator, string awardedTo, string legend)
        {
            KillsReceived.UpdateStatistics(1, perpetrator, awardedTo, legend);
        }

        /// <summary>
        /// キルアシスト数を更新する
        /// </summary>
        public void SetKillAssists(string perpetrator, string victim, string legend)
        {
            KillAssists.UpdateStatistics(1, perpetrator, victim, legend);
        }

        /// <summary>
        /// キルアシストされた数を更新する
        /// </summary>
        public void SetKillAssistsReceived(string perpetrator, string awardedTo, string legend)
        {
            KillAssistsReceived.UpdateStatistics(1, perpetrator, awardedTo, legend);
        }

        /// <summary>
        /// ダウン数を更新する
        /// </summary>
        public void SetDowns(string perpetrator, string victim, string legend)
        {
            Downs.UpdateStatistics(1, perpetrator, victim, legend);
        }

        /// <summary>
        /// ダウンされた数を更新する
        /// </summary>
        public void SetDownsReceived(string perpetrator, string awardedTo, string legend)
        {
            DownsReceived.UpdateStatistics(1, perpetrator, awardedTo, legend);
        }

        /// <summary>
        /// 敵に与えたダメージを加算する
        /// </summary>
        public void AddDamageDealt(int amount, string perpetrator, string victim, string legend)
        {
            DamageDealt.UpdateStatistics(amount, perpetrator, victim, legend);
        }

        /// <summary>
        /// 敵から受けたダメージを加算し、体力とシールドを更新する
        /// </summary>
        /// <returns>
        /// 更新後の (currentHealth, maxHealth, shieldHealth, shieldMaxHealth) のタプル
        /// </returns>
        public (int, int, int, int) AddDamageReceived(int amount, string perpetrator, string attacker, string legend, bool penetrator = false)
        {
            DamageReceived.UpdateStatistics(amount, perpetrator, attacker, legend);

            // 特定の攻撃手段の場合は体力等をそのまま返す
            if (perpetrator == "Unknown by RevenantForgedShadowDamaged" ||
                perpetrator == "Unknown by GibraltarShieldAbsorbed")
            {
                return (CurrentHealth, MaxHealth, ShieldHealth, ShieldMaxHealth);
            }

            if (penetrator)
            {
                int resultHealth = CurrentHealth - amount;
                if (resultHealth < 0)
                    resultHealth = 0;
                UpdateHealthAndShields(resultHealth, MaxHealth, ShieldHealth, ShieldMaxHealth);
                return (resultHealth, MaxHealth, ShieldHealth, ShieldMaxHealth);
            }
            else
            {
                int resultShield = ShieldHealth - amount;
                int resultHealth = CurrentHealth;
                if (resultShield < 0)
                {
                    resultHealth += resultShield; // resultShield は負の値
                    resultShield = 0;
                }
                if (resultHealth < 0)
                    resultHealth = 0;
                UpdateHealthAndShields(resultHealth, MaxHealth, resultShield, ShieldMaxHealth);
                return (resultHealth, MaxHealth, resultShield, ShieldMaxHealth);
            }
        }

        /// <summary>
        /// プレイヤーのアビリティ使用回数を加算する
        /// </summary>
        public void AddAbilityUseCount(string abilityId)
        {
            if (!AbilityUseCount.ContainsKey(abilityId))
                AbilityUseCount[abilityId] = 0;
            AbilityUseCount[abilityId]++;
        }

        /// <summary>
        /// プレイヤーのアルティメット使用回数を加算する
        /// </summary>
        public void AddUltimateUseCount(string ultimateId)
        {
            if (!UltimateUseCount.ContainsKey(ultimateId))
                UltimateUseCount[ultimateId] = 0;
            UltimateUseCount[ultimateId]++;
        }

        /// <summary>
        /// プレイヤーのジップライン使用回数を加算する
        /// </summary>
        public void AddZiplineUseCount()
        {
            ZiplineUseCount++;
        }

        /// <summary>
        /// プレイヤーのグレネード使用回数を加算する
        /// </summary>
        public void AddGrenadeUseCount(string grenadeId)
        {
            if (!GrenadeUseCount.ContainsKey(grenadeId))
                GrenadeUseCount[grenadeId] = 0;
            GrenadeUseCount[grenadeId]++;
        }

        /// <summary>
        /// プレイヤーのブラックマーケット使用回数を加算する
        /// </summary>
        public void AddBlackMarketUseCount(string itemId)
        {
            if (!BlackMarket.Items.ContainsKey(itemId))
                BlackMarket.Items[itemId] = 0;
            BlackMarket.Items[itemId]++;
            BlackMarket.UseCount++;
        }

        /// <summary>
        /// プレイヤーのレイスのポータル使用回数を加算する
        /// </summary>
        public void AddWraithPortalUseCount()
        {
            WraithPortalUseCount++;
        }

        /// <summary>
        /// プレイヤーのアルティメットチャージ状態を設定する
        /// </summary>
        public void SetUltimateCharged(bool status)
        {
            UltimateCharged = status;
        }

        /// <summary>
        /// プレイヤーのアルティメットチャージ状態を取得する
        /// </summary>
        public bool GetUltimateCharged() => UltimateCharged;

        /// <summary>
        /// レヴナントのフォージドシャドウが受けたダメージを加算する
        /// </summary>
        public void AddForgedShadowDamaged(int amount)
        {
            ForgedShadowDamaged += amount;
        }

        /// <summary>
        /// ワープゲート使用回数を加算する
        /// </summary>
        public void AddWarpGateUseCount()
        {
            WarpGateUseCount++;
        }

        /// <summary>
        /// ジブラルタルのシールドが吸収したダメージを加算する
        /// </summary>
        public void AddGibraltarShieldAbsorbed(int amount)
        {
            GibraltarShieldAbsorbed += amount;
        }

        /// <summary>
        /// バナー回収回数を加算する
        /// </summary>
        public void AddBannerCollectedCount()
        {
            BannerCollectedCount++;
        }

        /// <summary>
        /// プレイヤーの蘇生可能状態を設定する
        /// </summary>
        public void SetCanRevive(bool status)
        {
            CanRevive = status;
        }
    }

    /// <summary>
    /// ブラックマーケットの統計情報を保持するクラス
    /// </summary>
    public class BlackMarket
    {
        /// <summary>
        /// 使用回数
        /// </summary>
        public int UseCount { get; set; }
        /// <summary>
        /// アイテムごとの使用回数
        /// </summary>
        public Dictionary<string, int> Items { get; set; }

        public BlackMarket()
        {
            UseCount = 0;
            Items = new Dictionary<string, int>();
        }
    }
}
