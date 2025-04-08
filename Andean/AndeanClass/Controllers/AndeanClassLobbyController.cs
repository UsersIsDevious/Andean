using Andean.ApexLiveAPI.Services;
using ApexLiveAPI.Services;
using Newtonsoft.Json.Linq;
using Rtech.Liveapi;
using System.Text.Json;

namespace AndeanClass.Controllers
{
    public static partial class AndeanClassController
    {
        public static void ProcessCustomMatch_LobbyPlayers(CustomMatch_LobbyPlayers customMatch_LobbyPlayersMsg)
        {
            lock (_lock)
            {
                // ロビーIDの設定
                _lobby.LobbyId = customMatch_LobbyPlayersMsg.PlayerToken;

                // プレイヤー名情報の初期化（キー：プレイヤー名、値：Player型のインスタンス）
                var playerNames = new Dictionary<string, Player>();

                // チームおよびプレイヤー情報の初期化
                _lobby.Teams = new Dictionary<uint, Team>();
                _lobby.Players = new Dictionary<string, Player>();

                // CSVデータの取得
                Dictionary<string, CsvDataElement>? csvData = _csvData?.Original.Teams;
                Dictionary<string, CsvDataElement>? copyCSVData = _csvData?.Copy.Teams;

                // チームリストの処理
                for (int i = 0; i < customMatch_LobbyPlayersMsg.Teams.Count; i++)
                {
                    var msg_team = customMatch_LobbyPlayersMsg.Teams[i];
                    var teamId = msg_team.Id.ToString();
                    var teamName = msg_team.Name;
                    var team = _lobby.AddTeam(msg_team.Id, teamName);
                    team.SetSpawnPoint(msg_team.SpawnPoint);

                    if (csvData != null
                        && csvData.ContainsKey(teamId)
                        && csvData[teamId] != null
                        && !string.IsNullOrEmpty(csvData[teamId].TeamName)
                        && csvData[teamId].TeamName != teamName
                        && (copyCSVData != null && !copyCSVData.ContainsKey(teamId)))
                    {
                        var deserialized = JsonSerializer.Deserialize<CsvDataElement>(
                            JsonSerializer.Serialize(csvData[teamId])
                        );
                        if (deserialized != null)
                        {
                            copyCSVData[teamId] = deserialized;
                        }
                    }
                }

                // プレイヤーリストの処理
                for (int i = 0; i < customMatch_LobbyPlayersMsg.Players.Count; i++)
                {
                    var msg_player = customMatch_LobbyPlayersMsg.Players[i];
                    var teamId = msg_player.TeamId;
                    var playerName = msg_player.Name;
                    Player player = new Player(playerName, teamId, msg_player.NucleusHash, msg_player.HardwareName);
                    _lobby.AddPlayer(player);

                    if (playerNames.ContainsKey(playerName))
                    {
                        Console.WriteLine($"[APPLY CSV DATA] Duplicate player name: {playerName}");
                        playerNames.Remove(playerName);
                    }
                    else
                    {
                        playerNames[playerName] = player;
                    }
                }

                // CSVデータの処理
                if (csvData != null)
                {
                    foreach (var kvp in csvData)
                    {
                        string teamId = kvp.Key;
                        var csvEntry = kvp.Value;
                        if (csvEntry != null && csvEntry.Players != null)
                        {
                            foreach (var playerName in csvEntry.Players)
                            {
                                if (playerNames.ContainsKey(playerName) && playerNames[playerName].TeamId != uint.Parse(teamId) && copyCSVData != null && !copyCSVData.ContainsKey(teamId))
                                {
                                    var deserialized = JsonSerializer.Deserialize<CsvDataElement>(
                                        JsonSerializer.Serialize(csvEntry)
                                    );
                                    if (deserialized != null)
                                    {
                                        copyCSVData[teamId] = deserialized;
                                    }
                                }
                                else if (!playerNames.ContainsKey(playerName))
                                {
                                    Console.WriteLine($"[APPLY CSV DATA] PlayerName: {playerName} is not in the _lobby or duplicate player name");
                                }
                            }
                        }
                    }
                }

                // ロビー情報データの作成
                JObject data = new JObject();
                foreach (var teamEntry in _lobby.Teams)
                {
                    var teamId = teamEntry.Key;
                    var team = _lobby.GetTeam(teamId);
                    if (team == null)
                        continue;
                    var teamName = team.TeamName;
                    var logoUrl = team.TeamImg;
                    var spawnPoint = team.SpawnPoint;
                    var players = new List<object>();

                    for (int i = 0; i < team.Players.Count; i++)
                    {
                        var player = _lobby.GetPlayer(team.Players[i]);
                        if (player == null)
                            continue;

                        players.Add(new
                        {
                            index = i,
                            id = player.NucleusHash,
                            name = player.Name
                        });
                    }

                    data[teamId.ToString()] = new JObject
                    {
                        ["name"] = teamName,
                        ["logoUrl"] = logoUrl,
                        ["spawnPoint"] = spawnPoint,
                        ["players"] = JArray.FromObject(players)
                    };
                }

                _waitMessages["CustomMatch_LobbyPlayers"] = data;
            }
        }

        public static void ProcessCustomMatch_SetSettings(CustomMatch_SetSettings customMatch_SetSettingsMsg)
        {
            lock (_lock)
            {
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
                    Console.WriteLine($"[CustomMatch_SetSettings] Playlist {playlistName} not found in PlaylistsData");
                    return;
                }

                JObject data = new JObject
                {
                    ["playlistName"] = playlistName,
                };
                
                foreach (var category in playlist_r5.Categories)
                {
                    foreach (var entry in category.Value.Entries)
                    {
                        if (entry.Key == playlistName)
                        {
                            // 各設定情報を取得
                            data["maxPlayers"] = entry.Value.MaxPlayers;
                            data["maxTeams"] = entry.Value.MaxTeams;
                            data["mapName"] = entry.Value.MapName;
                            data["map"] = entry.Value.Map;

                            // ロビー情報を更新
                            _lobby.SetPlaylistInfo(
                                playlistName,
                                uint.TryParse(entry.Value.MaxPlayers, out var maxPlayers) ? maxPlayers : 60,
                                uint.TryParse(entry.Value.MaxTeams, out var maxTeams) ? maxTeams : 20,
                                category.Key,
                                entry.Value.Map ?? "",
                                entry.Value.MapName ?? ""
                            );
                        }
                    }
                }

                // 待ち受けメッセージに設定情報を追加
                _waitMessages["CustomMatch_SetSettings"] = data;
            }
        }
    }
}
