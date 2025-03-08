using System;
using Andean.AndeanClass;
using Andean.AndeanClass.Utilities;
using Rtech.Liveapi;

namespace Andean.AndeanClass.Services
{
    public class MatchService : IMatchService
    {
        public void HandleInitMessage(Init initMsg)
        {
            // 例えば、platform が空の場合にマッチを初期化する
            if (string.IsNullOrEmpty(initMsg.Platform))
            {
                long unixTimeSeconds = (long)initMsg.Timestamp;
                long unixTimeMillis = unixTimeSeconds * 1000;
                DateTime date = DateTimeOffset.FromUnixTimeMilliseconds(unixTimeMillis).LocalDateTime;
                string formattedDate = date.ToString("yyyy-MM-dd-HH-mm-ss");

                CustomMatch match = new CustomMatch(formattedDate);
                match.SetGameVersion(initMsg.GameVersion);
                Console.WriteLine($"[MatchService] CustomMatch 初期化完了：{formattedDate}");
                // 必要な処理（DB登録やキャッシュ保存など）を追加
            }
            else
            {
                Console.WriteLine("[MatchService] Platform 指定あり: readPlaylists_r5() を実行します。");
            }
        }

        
        public void HandleMatchSetup(MatchSetup matchSetupMsg, CustomMatch match)
        {
            var startingLoadout = matchSetupMsg.StartingLoadout;
            var weapons = startingLoadout.Weapons;
            var equipment = startingLoadout.Equipment;
            var datacenter = matchSetupMsg.Datacenter;

            if (weapons != null && weapons.Count != 0)
            {
                foreach (var weapon in weapons)
                {
                    var splitWeaponName = SplitBracketParts.ReturnSplitBracketParts(weapon.Item);
                    string weaponLabel = weapon.Item;
                    string weaponId = GetWeaponId(weaponLabel);
                    string name = "";
                    if (splitWeaponName == null)
                    {
                        name = weaponId;
                    }
                    else
                    {
                        name = splitWeaponName[0];
                    }
                    match.StartingLoadout.AddOrUpdateWeapon(name, weaponLabel, CheckItemLevel(weaponLabel));
                }
            }

            if (equipment != null && equipment.Count != 0)
            {
                foreach (var eq in equipment)
                {
                    var splitItemName = SplitBracketParts.ReturnSplitBracketParts(eq.Item);
                    if (splitItemName == null)
                    {
                        match.StartingLoadout.AddOrUpdateItem(eq.Item, eq.Quantity, CheckItemLevel(eq.Item));
                    }
                    else
                    {
                        match.StartingLoadout.AddOrUpdateItem(splitItemName[0], eq.Quantity, CheckItemLevel(eq.Item));
                    }
                }
            }

            match.SetMatchSetup(matchSetupMsg.Map,
                                matchSetupMsg.PlaylistName,
                                matchSetupMsg.PlaylistDesc,
                                matchSetupMsg.AimAssistOn,
                                matchSetupMsg.AnonymousMode,
                                matchSetupMsg.ServerId);

            match.Datacenter.Update(datacenter.Timestamp,
                                    datacenter.Category,
                                    datacenter.Name);

            match.SetMatchName($"{match.MatchName}-{matchSetupMsg.Map}");

            var playlistName = SplitBracketParts.ReturnSplitBracketParts(matchSetupMsg.PlaylistName);
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
