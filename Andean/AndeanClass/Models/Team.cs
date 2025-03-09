using System;
using System.Collections.Generic;
using System.Linq;

namespace AndeanClass
{

    /// <summary>
    /// チームを表すクラス
    /// </summary>
    public class Team
    {
        /// <summary>
        /// チーム名
        /// </summary>
        public string TeamName { get; set; }

        /// <summary>
        /// プレイヤーリスト（各要素はプレイヤーの識別子（nucleusHash））
        /// </summary>
        public List<string> Players { get; set; }

        /// <summary>
        /// チームを壊滅させたプレイヤーの nucleusHash
        /// </summary>
        public string DestroyerId { get; set; }

        /// <summary>
        /// チームの最後の死亡プレイヤーの nucleusHash
        /// </summary>
        public string LastDeath { get; set; }

        /// <summary>
        /// チームの画像URL
        /// </summary>
        public string TeamImg { get; set; }

        /// <summary>
        /// チームのスポーンポイント
        /// </summary>
        public int SpawnPoint { get; set; }

        /// <summary>
        /// チームの最終順位
        /// </summary>
        public int Rank { get; set; }

        /// <summary>
        /// チームのスコア
        /// </summary>
        public int Score { get; set; }

        /// <summary>
        /// チーム全体でダウンさせた数
        /// </summary>
        public int TotalDowns { get; set; }

        /// <summary>
        /// チームの合計キル数
        /// </summary>
        public int TotalKills { get; set; }

        /// <summary>
        /// チームの合計アシスト数
        /// </summary>
        public int TotalKillAssists { get; set; }

        /// <summary>
        /// チームの合計ダメージ量
        /// </summary>
        public double TotalDamageDealt { get; set; }

        /// <summary>
        /// チーム全体で受けたダメージ量
        /// </summary>
        public double TotalDamageRecived { get; set; }

        /// <summary>
        /// チームの合計回復量
        /// </summary>
        public double TotalHealing { get; set; }

        /// <summary>
        /// チームの合計リバイブ数
        /// </summary>
        public int TotalRevives { get; set; }

        /// <summary>
        /// チームの合計リスポーン数
        /// </summary>
        public int TotalRespawns { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="teamName">チーム名</param>
        /// <param name="rank">初期順位（デフォルトは 0）</param>
        public Team(string teamName, int rank = 0)
        {
            TeamName = teamName;
            Players = new List<string>();
            DestroyerId = "";
            LastDeath = "";
            TeamImg = "";
            SpawnPoint = 0;
            Rank = rank;
            Score = 0;
            TotalDowns = 0;
            TotalKills = 0;
            TotalKillAssists = 0;
            TotalDamageDealt = 0;
            TotalDamageRecived = 0;
            TotalHealing = 0;
            TotalRevives = 0;
            TotalRespawns = 0;
        }

        /// <summary>
        /// プレイヤーを追加するメソッド
        /// </summary>
        /// <param name="nucleusHash">追加するプレイヤーの nucleusHash</param>
        public void AddPlayer(string nucleusHash)
        {
            Players.Add(nucleusHash);
        }

        /// <summary>
        /// プレイヤーを削除するメソッド
        /// </summary>
        /// <param name="nucleusHash">削除するプレイヤーの nucleusHash</param>
        public void RemovePlayer(string nucleusHash)
        {
            Players.Remove(nucleusHash);
        }

        /// <summary>
        /// チームの残り人数を取得するメソッド
        /// (引数 match は CustomMatch クラスのインスタンスで、各プレイヤーの状態を取得可能なものとする)
        /// </summary>
        /// <param name="match">CustomMatch のインスタンス</param>
        /// <returns>チームの残り人数</returns>
        public int GetPlayerCount(CustomMatch match)
        {
            return Players.Count(nucleusHash =>
            {
                var player = match.GetPlayer(nucleusHash);
                if (player != null)
                {
                    // プレイヤーの状態が "alive" または "down" の場合、カウント対象とする
                    string status = player.GetStatus();
                    return status == "alive" || status == "down";
                }
                return false;
            });
        }

        /// <summary>
        /// チームを壊滅させたプレイヤーの nucleusHash を設定するメソッド
        /// </summary>
        /// <param name="nucleusHash">設定する nucleusHash</param>
        public void SetDestroyerId(string nucleusHash)
        {
            DestroyerId = nucleusHash;
        }

        /// <summary>
        /// チームの最後の死亡プレイヤーの nucleusHash を設定するメソッド
        /// </summary>
        /// <param name="nucleusHash">設定する nucleusHash</param>
        public void SetLastDeath(string nucleusHash)
        {
            LastDeath = nucleusHash;
        }

        public void SetSpawnPoint(int spawnPoint)
        {
            SpawnPoint = spawnPoint;
        }

        /// <summary>
        /// チームの画像URL を設定するメソッド
        /// </summary>
        /// <param name="url">画像URL</param>
        public void SetTeamImg(string url)
        {
            TeamImg = url;
        }

        /// <summary>
        /// チーム名を変更するメソッド
        /// </summary>
        /// <param name="newTeamName">新しいチーム名</param>
        public void SetTeamName(string newTeamName)
        {
            TeamName = newTeamName;
        }

        /// <summary>
        /// チームの順位を設定するメソッド
        /// </summary>
        /// <param name="rank">順位</param>
        public void SetRank(int rank)
        {
            Rank = rank;
        }

        /// <summary>
        /// チームのスコアを設定するメソッド
        /// </summary>
        /// <param name="score">スコア</param>
        public void SetScore(int score)
        {
            Score = score;
        }

        /// <summary>
        /// チームの合計ダウン数を増加させるメソッド
        /// </summary>
        public void AddTotalDowns()
        {
            TotalDowns++;
        }

        /// <summary>
        /// チームの合計キル数を増加させるメソッド
        /// </summary>
        public void AddTotalKills()
        {
            TotalKills++;
        }

        /// <summary>
        /// チームの合計アシスト数を増加させるメソッド
        /// </summary>
        public void AddTotalKillAssists()
        {
            TotalKillAssists++;
        }

        /// <summary>
        /// チームの合計ダメージ量を増加させるメソッド
        /// </summary>
        /// <param name="amount">増加させるダメージ量</param>
        public void AddTotalDamageDealt(double amount)
        {
            TotalDamageDealt += amount;
        }

        /// <summary>
        /// チーム全体で受けたダメージ量を増加させるメソッド
        /// </summary>
        /// <param name="amount">増加させるダメージ量</param>
        public void AddTotalDamageRecived(double amount)
        {
            TotalDamageRecived += amount;
        }

        /// <summary>
        /// チームの合計回復量を増加させるメソッド
        /// </summary>
        /// <param name="amount">増加させる回復量</param>
        public void AddTotalHealing(double amount)
        {
            TotalHealing += amount;
        }

        /// <summary>
        /// チームの合計リバイブ数を増加させるメソッド
        /// </summary>
        public void AddTotalRevives()
        {
            TotalRevives++;
        }

        /// <summary>
        /// チームの合計リスポーン数を増加させるメソッド
        /// </summary>
        public void AddTotalRespawns()
        {
            TotalRespawns++;
        }
    }
}
