using Andean.ApexLiveAPI.Services;
using AndeanWebUI.Services;
using ApexLiveAPI.Services;
using ApexLiveAPI.Request;
using Newtonsoft.Json.Linq;
using Rtech.Liveapi;
using System.Diagnostics.Eventing.Reader;
using System.Text.Json;
using AndeanSystems;

namespace AndeanClass.Controllers
{
    public static partial class AndeanClassController
    {
        public static void ProcessCustomMatch_LobbyPlayers(CustomMatch_LobbyPlayers customMatch_LobbyPlayersMsg)
        {
            lock (_lock)
            {
                // ロビー参加状態の設定（例外処理付き）
                try
                {
                    ControlPanelHubService.SetLiveAPIStatus(StringPool.Get("LobbyJoin"), StringPool.Get("InLobby")).Wait();
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"[ProcessCustomMatch] Error setting live API status: {ex.Message}");
                    // 必要に応じて処理中断の検討（ここではログ出力後、継続）
                }

                // チームのリネーム状況を保存
                Dictionary<string, bool> teamRename = new Dictionary<string, bool>();

                // ロビーID、チーム情報、プレイヤー情報の初期化
                _lobby.LobbyId = customMatch_LobbyPlayersMsg.PlayerToken;
                _lobby.Teams = new Dictionary<uint, Team>();
                _lobby.Players = new Dictionary<string, Player>();
                LobbyData.PlayerNames = new Dictionary<string, Player>();

                // CSVデータの取得
                var csvData = LobbyData.CsvData?.Original.Teams;
                var diffCSVData = LobbyData.CsvData?.Diff.Teams;

                // --- 1. チーム情報の処理 ---
                foreach (var msg_team in customMatch_LobbyPlayersMsg.Teams)
                {
                    string teamId = msg_team.Id.ToString();
                    string teamName = msg_team.Name;

                    // チームをロビーに追加し、スポーンポイントを設定
                    Team team = _lobby.AddTeam(msg_team.Id, teamName);
                    team.SetSpawnPoint(msg_team.SpawnPoint);

                    // CSVデータが存在する場合、チーム名の差分チェックを実施
                    if (csvData != null &&
                        csvData.TryGetValue(teamId, out CsvDataElement? csvEntry) &&
                        csvEntry != null &&
                        !string.IsNullOrEmpty(csvEntry.TeamName))
                    {
                        bool difference = csvEntry.TeamName != teamName;
                        teamRename[teamId] = difference;
                        UpdateCopyCsvData(diffCSVData, teamId, csvEntry, difference);
                    }
                }

                // --- 2. プレイヤー情報の処理 ---
                foreach (var msg_player in customMatch_LobbyPlayersMsg.Players)
                {
                    var teamId = msg_player.TeamId;
                    var playerName = msg_player.Name;
                    Player player = new Player(playerName, teamId, msg_player.NucleusHash, msg_player.HardwareName);
                    _lobby.AddPlayer(player);

                    // 重複チェック：既に存在する場合はログ出力
                    if (LobbyData.PlayerNames.ContainsKey(playerName))
                    {
                        Console.WriteLine($"[APPLY CSV DATA] Duplicate player name: {playerName}");
                        LobbyData.PlayerNames.Remove(playerName);
                    }
                    else
                    {
                        LobbyData.PlayerNames[playerName] = player;
                    }
                }

                // --- 3. CSV内プレイヤー情報の処理 ---
                if (csvData != null && diffCSVData != null && ControlPanelHubService.AutoMovementLobbyPlayersEnabled)
                {
                    foreach (var kvp in csvData)
                    {
                        string teamId = kvp.Key;
                        var csvEntry = kvp.Value;
                        if (csvEntry == null || csvEntry.Players == null)
                            continue;

                        Dictionary<string, string> alreadySetPlayers = new Dictionary<string, string>();

                        // CSV内のプレイヤー情報と現在のロビー内のデータを比較して差分を判定
                        bool differenceFound = false;
                        foreach (var playerName in csvEntry.Players)
                        {
                            if (LobbyData.PlayerNames.TryGetValue(playerName, out Player? LobbyPlayer) && LobbyPlayer != null)
                            {
                                if (LobbyPlayer == null)
                                {
                                    // Console.WriteLine($"[APPLY CSV DATA] Player not found in lobby: {playerName}");
                                }
                                else if (LobbyPlayer.TeamId.ToString() == "0" && LobbyPlayer.TeamId.ToString() != teamId)
                                {
                                    differenceFound = true;
                                }
                                else
                                {
                                    alreadySetPlayers[teamId] = LobbyPlayer.Name;
                                }
                            }
                            else
                            {
                                // Console.WriteLine($"[APPLY CSV DATA] Player not found in CSV: {playerName}");
                            }
                        }

                        if (teamRename.TryGetValue(teamId, out bool renameNeeded) && renameNeeded)
                        {
                            differenceFound = true;
                        }

                        var returnCSVData = UpdateCopyCsvData(diffCSVData, teamId, csvEntry, differenceFound);

                        foreach (var setPlayer in alreadySetPlayers)
                        {
                            string teamId_str = setPlayer.Key;
                            string alreadySetPlayerName = setPlayer.Value;

                            if (returnCSVData != null && returnCSVData.TryGetValue(teamId_str, out CsvDataElement? diffEntry) && diffEntry != null)
                                diffEntry.Players.Remove(alreadySetPlayerName);
                        }
                    }
                }

                // --- 4. LobbyData のチェックと更新不要判定 ---
                if (LobbyData == null || !LobbyData.IsUpdateNeededLobbyPlayers(customMatch_LobbyPlayersMsg))
                    return;

                // --- 5. ロビー情報の生成 ---
                Dictionary<string, LobbyPlayersInfo> data = new Dictionary<string, LobbyPlayersInfo>();
                foreach (var teamEntry in _lobby.Teams)
                {
                    var teamId = teamEntry.Key;
                    var team = _lobby.GetTeam(teamId);
                    if (team == null)
                        continue;

                    var players = new List<LobbyPlayer>();
                    for (int i = 0; i < team.Players.Count; i++)
                    {
                        var player = _lobby.GetPlayer(team.Players[i]);
                        if (player != null)
                        {
                            players.Add(new LobbyPlayer(i, player.NucleusHash, player.HardwareName, player.Name));
                        }
                    }
                    data[teamId.ToString()] = new LobbyPlayersInfo(team.TeamName, team.TeamImg, team.SpawnPoint, players);
                }

                LobbyData.SetLobbyInfo(data);
            }
        }

        /// <summary>
        /// CSVデータとロビー情報の比較結果に基づき、CopyCsvDataへのエントリの追加または削除を行う共通メソッド
        /// </summary>
        /// <param name="copyCSVData">更新対象のCopyCSVDataディクショナリ</param>
        /// <param name="teamId">対象のチームID（文字列）</param>
        /// <param name="csvEntry">比較対象のCSVデータエントリ</param>
        /// <param name="differenceFound">差分が存在する場合は true、一致している場合は false</param>
        private static Dictionary<string, CsvDataElement>? UpdateCopyCsvData(Dictionary<string, CsvDataElement>? copyCSVData, string teamId, CsvDataElement csvEntry, bool differenceFound)
        {
            if (copyCSVData == null)
            {
                Console.WriteLine("[UpdateCopyCsvData] CopyCSVData is null.");
                return null;
            }

            if (differenceFound)
            {
                // 差分がある場合、未登録なら追加
                if (!copyCSVData.ContainsKey(teamId))
                {
                    var clonedCsv = CloneCsvDataElement(csvEntry);
                    if (clonedCsv != null)
                        copyCSVData[teamId] = clonedCsv;
                }

                return copyCSVData;
            }
            else
            {
                // 一致している場合、既に登録されていれば削除
                if (copyCSVData.ContainsKey(teamId))
                    copyCSVData.Remove(teamId);

                return copyCSVData;
            }
        }

        /// <summary>
        /// CsvDataElementをディープコピーするヘルパーメソッド
        /// </summary>
        /// <param name="element">コピー対象のCsvDataElement</param>
        /// <returns>ディープコピーされたCsvDataElement、またはコピーに失敗した場合は null</returns>
        private static CsvDataElement? CloneCsvDataElement(CsvDataElement element)
        {
            return element.Clone();
        }

        public static void ProcessCustomMatch_SetSettings(CustomMatch_SetSettings customMatch_SetSettingsMsg)
        {
            lock (_lock)
            {
                // 情報が来た時点でロビーにいるとみなす
                ControlPanelHubService.SetLiveAPIStatus(StringPool.Get("LobbyJoin"), StringPool.Get("InLobby")).Wait();

                // 情報を更新
                LobbyData.IsUpdateNeededMatchSettings(customMatch_SetSettingsMsg);

                LobbySettings lobbySettings = new LobbySettings(customMatch_SetSettingsMsg);

                // プレイリスト名を取得
                var playlistName = customMatch_SetSettingsMsg.PlaylistName;
                if (string.IsNullOrEmpty(playlistName))
                {
                    Console.WriteLine($"[CustomMatch_SetSettings] Playlist {playlistName} does not exist");
                    return;
                }

                PlaylistResult? playlist_r5 = ApexPlaylistService.PlaylistsData;
                if (playlist_r5 == null)
                {
                    Console.WriteLine($"[CustomMatch_SetSettings] PlaylistsData is null, fetching metadata...");

                    ApexPlaylistService.GetPlaylistMetadataAsync().Wait();

                    playlist_r5 = ApexPlaylistService.PlaylistsData;

                    if (ApexPlaylistService.PlaylistsData == null || playlist_r5 == null)
                    {
                        Console.WriteLine($"[CustomMatch_SetSettings] PlaylistsData is still null after fetching metadata");
                        return;
                    }
                }
                
                // デバッグ用
                // プレイリストデータをJSON形式で表示
                // Console.WriteLine($"[CustomMatch_SetSettings] PlaylistsData {JsonSerializer.Serialize(playlist_r5, new JsonSerializerOptions { WriteIndented = true })}");

                bool variantFound = false;
                string? categoryKey = null;
                string? entryName = null;
                string? entryKey = null;
                PlaylistEntry? entryValue = null;
                string? variantKey = null;
                string? variantName = null;
                PlaylistEntry? variantValue = null;

                foreach (var category in playlist_r5.Categories)
                {
                    foreach (var entry in category.Value.Entries)
                    {
                        if (entry.Key == playlistName)
                        {
                            categoryKey = category.Key;
                            entryKey = entry.Key;
                            entryName = entry.Value.Name ?? entry.Value.MapName ?? string.Empty;
                            entryValue = entry.Value;
                            break;
                        }

                        if (entry.Value.Variants != null)
                        {
                            foreach (var subEntry in entry.Value.Variants)
                            {
                                if (subEntry.Key == playlistName)
                                {
                                    variantFound = true;
                                    categoryKey = category.Key;
                                    entryKey = entry.Key;
                                    entryName = entry.Value.Name ?? entry.Value.MapName ?? string.Empty;
                                    entryValue = entry.Value;
                                    variantKey = subEntry.Key;
                                    variantName = subEntry.Value.Name ?? subEntry.Value.MapName;
                                    variantValue = subEntry.Value;
                                    break;
                                }
                            }
                        }
                    }
                }

                if (string.IsNullOrEmpty(categoryKey) || string.IsNullOrEmpty(entryKey) || string.IsNullOrEmpty(entryName) || entryValue == null)
                {
                    Console.WriteLine($"[CustomMatch_SetSettings] Playlist {playlistName} not found in PlaylistsData");
                    return;
                }

                uint maxPlayers = (variantValue != null && variantValue.MaxPlayers != null) ? uint.Parse(variantValue.MaxPlayers) : (entryValue != null && entryValue.MaxPlayers != null ? uint.Parse(entryValue.MaxPlayers) : 60);
                uint maxTeams = (variantValue != null && variantValue.MaxTeams != null) ? uint.Parse(variantValue.MaxTeams) : (entryValue != null && entryValue.MaxTeams != null ? uint.Parse(entryValue.MaxTeams) : 20);
                string mapId = (variantFound && variantValue != null && variantValue.Map != null) ? variantValue.Map : ((entryValue != null && entryValue.Map != null) ? entryValue.Map : string.Empty);
                string mapName = variantName ?? entryName;

                lobbySettings.SetSettings(
                    maxPlayers,
                    maxTeams,
                    categoryKey,
                    entryKey,
                    variantKey,
                    mapId,
                    variantFound,
                    new Gamemode(playlist_r5.Categories)
                );

                // ロビー情報を更新
                _lobby.SetPlaylistInfo(
                    playlistName,
                    maxPlayers,
                    maxTeams,
                    categoryKey,
                    mapId,
                    mapName,
                    customMatch_SetSettingsMsg.AdminChat,
                    customMatch_SetSettingsMsg.TeamRename,
                    customMatch_SetSettingsMsg.SelfAssign,
                    customMatch_SetSettingsMsg.AimAssist,
                    customMatch_SetSettingsMsg.AnonMode
                );

                LobbyData.SetMatchSettings(lobbySettings);
            }
        }

        public static void ProcessCustomMatch_LegenddBanStatus(CustomMatch_LegendBanStatus customMatch_LegendBanStatusMsg)
        {
            lock (_lock)
            {
                // 情報が来た時点でロビーにいるとみなす
                ControlPanelHubService.SetLiveAPIStatus(StringPool.Get("LobbyJoin"), StringPool.Get("InLobby")).Wait();

                // 情報を更新
                LobbyData.IsUpdateNeededLegendBanStatus(customMatch_LegendBanStatusMsg);

                foreach (var legend in customMatch_LegendBanStatusMsg.Legends)
                {
                    string Reference = legend.Reference;
                    bool isBanned = legend.Banned;

                    LobbyData.SetLegendBanStatus(Reference, isBanned);
                    _lobby.SetLegendBanStatus(Reference, isBanned);
                }
            }
        }
    }
}

