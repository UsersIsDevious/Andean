using System;
using Andean.AndeanClass;
using Andean.AndeanClass.Utilities;
using Rtech.Liveapi;

namespace Andean.AndeanClass.Services
{
    public class MatchService : IMatchService
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
                    // 武器ラベルから実際の武器名を抽出
                    string weaponLabel = weapon.Item;
                    var splitWeaponName = _splitBracketParts.ReturnSplitBracketParts(weaponLabel);
                    string name;
                    if (splitWeaponName == null)
                    {
                        name = weaponLabel;
                    }
                    else
                    {
                        name = splitWeaponName[0];
                    }

                    // 武器IDの取得と名前の置き換え
                    string? weaponId = _getItemId.ReturnItemId("Weapon", name);
                    if (weaponId != null)
                    {
                        name = weaponId;
                    }
                    
                    // マッチの開始装備に武器情報を追加または更新
                    match.StartingLoadout.AddOrUpdateWeapon(name, weaponLabel, _checkLevel.ReturnLevel(weaponLabel));
                }
            }

            // 装備品情報の処理
            if (equipment != null && equipment.Count != 0)
            {
                foreach (var eq in equipment)
                {
                    // 装備品名から実際の装備品名を抽出
                    var splitItemName = _splitBracketParts.ReturnSplitBracketParts(eq.Item);
                    string name;
                    if (splitItemName == null)
                    {
                        name = eq.Item;
                    }
                    else
                    {
                        name = splitItemName[0];
                    }

                    // 装備品IDの取得と名前の置き換え
                    string? itemId = _getItemId.ReturnItemId("Item", name);
                    if (itemId != null)
                    {
                        name = itemId;
                    }
                    
                    // マッチの開始装備に装備品情報を追加または更新
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
