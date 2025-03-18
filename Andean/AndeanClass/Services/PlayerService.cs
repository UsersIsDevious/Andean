using Google.Protobuf.WellKnownTypes;
using System.Xml.Linq;
using System.Xml;
using System;
using AndeanClass.Controllers;
using AndeanClass;
using Rtech.Liveapi;

namespace AndeanClass.Services
{
    public class PlayerService
    {
        /// <summary>
        /// プレイヤーのインスタンスが存在するかどうかをチェックし、存在しなければ新規作成してマッチに追加します。
        /// 取得または作成したプレイヤーのインスタンスを返します。
        /// </summary>
        /// <param name="PlayerMsg">プレイヤー情報を含む動的オブジェクト。プロパティ: nucleushash, name, teamid, hardwarename, teamname</param>
        /// <param name="match">CustomMatch のインスタンス</param>
        /// <returns>取得または新規作成された Player インスタンス</returns>
        public static Player CheckPlayerInstance(CustomMatch match , Rtech.Liveapi.Player PlayerMsg)
        {
            // msg_player の nucleushash を取得
            string nucleusHash = PlayerMsg.NucleusHash;

            // 既存のプレイヤーがいるか確認
            Player player = match.GetPlayer(nucleusHash);

            // 存在しない場合、新規に作成してマッチに追加
            if (player == null)
            {
                player = new Player(
                    PlayerMsg.Name,
                    PlayerMsg.TeamId,
                    nucleusHash,
                    PlayerMsg.HardwareName
                );
                match.AddPlayer(player, PlayerMsg.TeamName);
            }

            // 取得または新規作成したプレイヤーを返す
            return player;
        }

        public static Player addDamageReceived(Player player, bool penetrator = false)
        {

            return player;
        }


        //Player link
        //Field Name  Type Tag Description
        //name    string	1	The player’s name.
        //teamId  uint32  2	The player’s team ID.
        //pos Vector3	3	The player’s position.
        //angles Vector3	4	The player’s viewing angles.
        //currentHealth uint32	5	The player’s current health. x
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
        public static Player CreateOrUpdatePlayer(CustomMatch customMatch , Rtech.Liveapi.Player player)
        {
            Player _player = CheckPlayerInstance(customMatch , player);

            // 位置情報と角度の更新
            // json.pos.x, json.pos.y, json.pos.z, json.angles.y を利用
            _player.UpdatePositionAndAngles(
                player.Pos.X,
                player.Pos.Y,
                player.Pos.Z,
                player.Angles.Y,
                customMatch.MapOffset);

            // 体力とシールドの更新
            _player.UpdateHealthAndShields(
                player.CurrentHealth,
                player.MaxHealth,
                player.ShieldHealth,
                player.ShieldMaxHealth);

            // チーム名、スカッドインデックス、キャラクター（レジェンド）とスキンの更新
            _player.SetTeamName(player.TeamName);
            _player.SetSquadIndex((int)player.SquadIndex);

            var character = LocalizationService.GetOriginalKey("legend_label", player.Character);
            _player.UpdateLegend(character, player.Skin);

            // 必要に応じて、他のプロパティも同様に更新可能

            return _player;
        }
    }
}
