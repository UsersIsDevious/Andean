using System;
using Andean.AndeanClass;
using Andean.AndeanClass.Utilities;
using AndeanClass;
using Rtech.Liveapi;

namespace Andean.AndeanClass.Services
{
    public class MatchService
    {
        private readonly SplitBracketParts _splitBracketParts;
        private readonly CheckLevel _checkLevel;
        private readonly GetItemId _getItemId;

        public MatchService(SplitBracketParts splitBracketParts, CheckLevel checkLevel, GetItemId getItemId)
        {
            _splitBracketParts = splitBracketParts;
            _checkLevel = checkLevel;
            _getItemId = getItemId;
        }

        // 共通の初期化処理：Initメッセージに応じたCustomMatch生成
        public CustomMatch CreateCustomMatch(Init initMsg)
        {
            // Unix時間をDateTimeに変換
            long unixTimeSeconds = (long)initMsg.Timestamp;
            long unixTimeMillis = unixTimeSeconds * 1000;
            DateTime date = DateTimeOffset.FromUnixTimeMilliseconds(unixTimeMillis).LocalDateTime;
            string formattedDate = date.ToString("yyyy-MM-dd-HH-mm-ss");

            // CustomMatchを生成
            CustomMatch match = new CustomMatch(formattedDate);
            match.SetGameVersion(initMsg.GameVersion);
            Console.WriteLine($"[MatchService] CustomMatch 初期化完了：{formattedDate}");
            return match;
        }

        // 共通のマッチセットアップ処理
        public void ConfigureMatchSetup(MatchSetup matchSetupMsg, CustomMatch match)
        {
            if (match == null)
                throw new ArgumentNullException(nameof(match));

            // マッチセットアップメッセージから必要な情報を取得
            var startingLoadout = matchSetupMsg.StartingLoadout;
            var weapons = startingLoadout.Weapons;
            var equipment = startingLoadout.Equipment;
            var datacenter = matchSetupMsg.Datacenter;

            // 武器情報の処理
            if (weapons != null && weapons.Count != 0)
            {
                foreach (var weapon in weapons)
                {
                    string weaponLabel = weapon.Item;
                    var splitWeaponName = _splitBracketParts.ReturnSplitBracketParts(weaponLabel);
                    string name = splitWeaponName != null ? splitWeaponName[0] : weaponLabel;
                    string? weaponId = _getItemId.ReturnItemId("Weapon", name);
                    if (weaponId != null)
                    {
                        name = weaponId;
                    }
                    match.StartingLoadout.AddOrUpdateWeapon(name, weaponLabel, _checkLevel.ReturnLevel(weaponLabel));
                }
            }

            // 装備品情報の処理
            if (equipment != null && equipment.Count != 0)
            {
                foreach (var eq in equipment)
                {
                    var splitItemName = _splitBracketParts.ReturnSplitBracketParts(eq.Item);
                    string name = splitItemName != null ? splitItemName[0] : eq.Item;
                    string? itemId = _getItemId.ReturnItemId("Item", name);
                    if (itemId != null)
                    {
                        name = itemId;
                    }
                    match.StartingLoadout.AddOrUpdateItem(name, eq.Quantity, _checkLevel.ReturnLevel(eq.Item));
                }
            }

            // マッチの基本設定を更新
            match.SetMatchSetup(matchSetupMsg.Map,
                                matchSetupMsg.PlaylistName,
                                matchSetupMsg.PlaylistDesc,
                                matchSetupMsg.AimAssistOn,
                                matchSetupMsg.AnonymousMode,
                                matchSetupMsg.ServerId);

            // データセンター情報を更新
            match.Datacenter.Update(datacenter.Timestamp,
                                    datacenter.Category,
                                    datacenter.Name);

            // マップ情報を含めたマッチ名を設定
            match.SetMatchName($"{match.MatchName}-{matchSetupMsg.Map}");

            // プレイリスト名から最大プレイヤー数とチーム数を設定
            var playlistName = _splitBracketParts.ReturnSplitBracketParts(matchSetupMsg.PlaylistName);
            if (playlistName == null)
            {
                match.SetMaxPlayersAndTeams(matchSetupMsg.PlaylistName);
            }
            else
            {
                match.SetMaxPlayersAndTeams(playlistName[0], playlistName[1]);
            }
        }

    }
}
