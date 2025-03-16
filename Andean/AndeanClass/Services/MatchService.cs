using System;
using Andean.AndeanClass;
using Andean.AndeanClass.Services.Utilities;
using Andean.Config;
using Andean.Utilities;
using AndeanClass;
using Rtech.Liveapi;

namespace AndeanClass.Services
{
    public static class MatchService
    {

        // 共通の初期化処理：Initメッセージに応じたCustomMatch生成
        public static CustomMatch CreateCustomMatch(Init initMsg)
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
        public static void ConfigureMatchSetup(MatchSetup matchSetupMsg, CustomMatch match)
        {
            ArgumentNullException.ThrowIfNull(match);

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
                    var splitWeaponName = ItemUtilities.ReturnSplitBracketParts(weaponLabel);
                    string name = splitWeaponName != null ? splitWeaponName[0] : weaponLabel;
                    string? weaponId = ItemUtilities.ReturnItemId("Weapon", name);
                    if (weaponId != null)
                    {
                        name = weaponId;
                    }
                    match.StartingLoadout.AddOrUpdateWeapon(name, weaponLabel, ItemUtilities.ReturnLevel(weaponLabel));
                }
            }

            // 装備品情報の処理
            if (equipment != null && equipment.Count != 0)
            {
                foreach (var eq in equipment)
                {
                    var splitItemName = ItemUtilities.ReturnSplitBracketParts(eq.Item);
                    string name = splitItemName != null ? splitItemName[0] : eq.Item;
                    string? itemId = ItemUtilities.ReturnItemId("Item", name);
                    if (itemId != null)
                    {
                        name = itemId;
                    }
                    match.StartingLoadout.AddOrUpdateItem(name, (uint)eq.Quantity, ItemUtilities.ReturnLevel(eq.Item));
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
            var playlistName = ItemUtilities.ReturnSplitBracketParts(matchSetupMsg.PlaylistName);
            if (playlistName == null)
            {
                match.SetMaxPlayersAndTeams(matchSetupMsg.PlaylistName);
            }
            else
            {
                match.SetMaxPlayersAndTeams(playlistName[0], playlistName[1]);
            }
        }

        public static async void UpdateGameStatus(GameStateChanged gameStateChangedMsg, CustomMatch match, AppConfig config, List<uint> teamRanking, List<(string, Event)> ringEvents)
        {
            ArgumentNullException.ThrowIfNull(match);

            // match の state を設定する
            match.SetState(gameStateChangedMsg.State);

            if (gameStateChangedMsg.State == "Prematch")
            {
                // teamRanking と ringEvents を初期化
                teamRanking.Clear();
                ringEvents.Clear();

                // match.MaxTeams + 1 から 2 まで逆順に処理
                for (uint i = match.MaxTeams + 1; i >= 2; i--)
                {
                    Team team = match.GetTeam(i);
                    // チーム内のプレイヤーがいない場合、ranks に追加
                    if (team.Players.Count == 0)
                    {
                        teamRanking.Add(i);
                    }
                }
            }

            if (gameStateChangedMsg.State == "Playing")
            {
                // 開始タイムスタンプを設定
                match.SetStartTimeStamp(gameStateChangedMsg.Timestamp);
            }

            if (gameStateChangedMsg.State == "Postmatch")
            {
                // ringEvents を 2 つずつ処理する
                for (int i = 0; i < ringEvents.Count; i += 2)
                {
                    if ((i + 1) != ringEvents.Count)
                    {
                        // startRing, startRing_t, endRing を取得
                        Event startRing = ringEvents[i].Item2;
                        string startRing_t = ringEvents[i].Item1;
                        Event endRing = ringEvents[i + 1].Item2;

                        if (startRing.Category == "ringStartClosing" &&
                            endRing.Category == "ringFinishedClosing" &&
                            startRing.Data["Stage"] == endRing.Data["Stage"])
                        {
                            // matchBase.PacketLists[startRing_t].Events 内の "ringStartClosing" イベントを検索し、endCenter を設定
                            if (match.PacketLists.TryGetValue(startRing_t, out Packet? packet))
                            {
                                if (packet.Events != null)
                                {
                                    Event? startRingEvent = packet.Events.FirstOrDefault(e => e.Category == "ringStartClosing");
                                    if (startRingEvent != null)
                                    {
                                        // endRing.Data.Center のコピーを endCenter に設定（配列のコピー）
                                        startRingEvent.Data["endCenter"] = (double[])((double[])endRing.Data["Center"]).Clone();
                                    }
                                }
                            }
                        }
                    }
                }

                // match.Teams 内の各チームについて処理
                foreach (var kvp in match.Teams)
                {
                    uint id = kvp.Key;
                    // ranks に含まれておらず、かつ id が 0, 1 でない場合
                    if (!teamRanking.Contains(id) && id != 0 && id != 1)
                    {
                        teamRanking.Add(id);
                    }
                }

                // ranks リストに基づいて各チームのランクを設定する
                // 必要に応じて ranks をソート（ここでは昇順と仮定）
                teamRanking.Sort();
                for (int i = 0; i < teamRanking.Count; i++)
                {
                    Team team = match.GetTeam(teamRanking[i]);
                    team.SetRank((uint)(teamRanking.Count - i));
                }

                // 更新内容を保存
                await FileOutputService.WriteToFileAsync(config.Output, $"{match.MatchName}", match.ToString(), FileWriteMode.Overwrite);
            }
        }
    }
}
