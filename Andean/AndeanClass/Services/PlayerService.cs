using Google.Protobuf.WellKnownTypes;
using System.Xml.Linq;
using System.Xml;
using System;
using Andean.AndeanClass.Controllers;
using AndeanClass;
using Rtech.Liveapi;

namespace AndeanClass.Services
{
    public class PlayerService
    {
        //Player link
        //Field Name  Type Tag Description
        //name    string	1	The player’s name.
        //teamId  uint32  2	The player’s team ID.
        //pos Vector3	3	The player’s position.
        //angles Vector3	4	The player’s viewing angles.
        //currentHealth uint32	5	The player’s current health.
        //maxHealth uint32	6	The player’s maximum health.
        //shieldHealth uint32	7	The player’s current shield health.
        //shieldMaxHealth uint32	8	The player’s maximum shield health.
        //nucleusHash string  9	Unique identifier for the player.
        //hardwareName    string  10	The name of the player’s hardware.
        //teamName    string  11	The name of the player’s team.
        //squadIndex uint32	12	The player’s squad index.
        //character   string  13	The character the player has selected.
        //skin    string  14	The skin the player has selected for the character.

        /// <summary>
        /// 渡されたデータから Player オブジェクトを新規作成または更新します。
        /// 既存の Player インスタンスが null なら新規作成し、存在すれば更新を行います。
        /// </summary>
        /// <param name="data">フィールドが全て揃ったデータ</param>
        /// <param name="player">更新対象の Player。新規作成の場合は null を渡す</param>
        /// <returns>新規作成または更新後の Player オブジェクト</returns>
        public static Player CreateOrUpdatePlayer(CustomMatch customMatch, Player player = null)
        {
            var players = customMatch.Players;
            // 必須フィールドの抽出
            string name = players["name"].ToString();
            int teamId = Convert.ToInt32(players["teamId"]);
            string nucleusHash = players["nucleusHash"].ToString();
            string hardwareName = players["hardwareName"].ToString();

            if (player == null)
            {
                // 新規作成：コンストラクタで必須フィールドを設定
                player = new Player(name, teamId, nucleusHash, hardwareName);
            }
            else
            {
                // 既存の場合、必要に応じて基本情報も更新
                player.Name = name;
                player.TeamId = teamId;
                player.NucleusHash = nucleusHash;
                player.HardwareName = hardwareName;
            }

            // 位置情報と角度の更新
            // data["pos"] と data["angles"] は "x,y,z" 形式の文字列であると仮定
            Vector3 pos = ParseVector3(players["pos"]);
            Vector3 anglesVector = ParseVector3(players["angles"]);
            // ここでは anglesVector の大きさを角度として利用する例です
            double newAngle = CalculateMagnitude(anglesVector);
            // mapOffset の値は環境に合わせて設定。ここではデフォルト値として {0, 0, 1} を使用
            double[] defaultMapOffset = new double[] { 0, 0, 1 };
            player.UpdatePositionAndAngles(pos.X, pos.Y, pos.Z, newAngle, defaultMapOffset);

            // 体力とシールドの更新
            int currentHealth = Convert.ToInt32(players["currentHealth"]);
            int maxHealth = Convert.ToInt32(players["maxHealth"]);
            int shieldHealth = Convert.ToInt32(players["shieldHealth"]);
            int shieldMaxHealth = Convert.ToInt32(players["shieldMaxHealth"]);
            player.UpdateHealthAndShields(currentHealth, maxHealth, shieldHealth, shieldMaxHealth);

            // チーム名、スカッドインデックス、キャラクター（レジェンド）とスキンの更新
            player.SetTeamName(players["teamName"].ToString());
            player.SetSquadIndex(Convert.ToInt32(players["squadIndex"]));
            player.UpdateLegend(players["character"].ToString(), players["skin"].ToString());

            // 必要に応じて、他のプロパティも同様に更新可能

            return player;
        }

        /// <summary>
        /// "x,y,z" 形式の文字列から Vector3 への変換を行います。
        /// </summary>
        private static Vector3 ParseVector3(object data)
        {
            string[] parts = data.ToString().Split(',');
            if (parts.Length == 3)
            {
                double x = double.Parse(parts[0]);
                double y = double.Parse(parts[1]);
                double z = double.Parse(parts[2]);
                return new Vector3(x, y, z);
            }
            return new Vector3();
        }

        /// <summary>
        /// Vector3 の大きさ（ノルム）を計算します。
        /// </summary>
        private static double CalculateMagnitude(Vector3 v)
        {
            return Math.Sqrt(v.X * v.X + v.Y * v.Y + v.Z * v.Z);
        }
    }
}
