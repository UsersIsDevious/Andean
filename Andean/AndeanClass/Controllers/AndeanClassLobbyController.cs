using Andean.AndeanClass.Services.Utilities;
using AndeanClass.Services;
using Rtech.Liveapi;
using System.Text.Json;
using Andean.Utilities;
using Newtonsoft.Json.Linq;

namespace AndeanClass.Controllers
{
    public partial class AndeanClassController
    {
        public void ProcessCustomMatch_LobbyPlayers(CustomMatch_LobbyPlayers customMatch_LobbyPlayersMsg)
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
                var csvData = _csvData.Original.Teams;
                var copyCSVData = _csvData.Copy.Teams;

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
                        && !copyCSVData.ContainsKey(teamId))
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
                                if (playerNames.ContainsKey(playerName) && playerNames[playerName].TeamId != uint.Parse(teamId) && !copyCSVData.ContainsKey(teamId))
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
                var data = new Dictionary<string, object>();
                foreach (var teamEntry in _lobby.Teams)
                {
                    var teamId = teamEntry.Key;
                    var team = _lobby.GetTeam(teamId);
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

                    data[teamId.ToString()] = new
                    {
                        name = teamName,
                        logoUrl = logoUrl,
                        spawnPoint = spawnPoint,
                        players = players
                    };
                }

                _waitMessages["CustomMatch_LobbyPlayers"] = data;
            }
        }

        public void ProcessCustomMatch_SetSettings(CustomMatch_SetSettings customMatch_SetSettingsMsg)
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

                JToken playlists = VdfParser.Playlists_r5["playlists"]["Playlists"];
                if (playlists[playlistName] == null)
                {
                    Console.WriteLine($"[CustomMatch_SetSettings] Playlist {playlistName} does not exist");
                    return;
                }

                var playlist = playlists[playlistName];

                // inherit の取得
                if (playlist == null || playlist["inherit"] == null)
                {
                    Console.WriteLine($"[CustomMatch_SetSettings] Playlist {playlistName} does not have inherit");
                    return;
                }
                
                string inherit = playlist["inherit"].ToString();

                // 現在のプレイリストに max_teams が存在しない場合、継承元を辿る
                if (playlist["vars"]["max_teams"] == null)
                {
                    // playlists にはキーが存在する前提で、継承チェーンを辿る
                    while (playlists[inherit] != null &&
                           playlists[inherit]["vars"] != null &&
                           playlists[inherit]["vars"]["max_teams"] != null)
                    {
                        inherit = playlists[inherit]["inherit"].ToString();
                        if (playlists["inherit"] == null)
                        {
                            Console.WriteLine($"[CustomMatch_SetSettings] Playlist {playlistName} does not have max_teams");
                            break;
                        }
                    }
                }

                // 継承先のプレイリスト（基本プレイリスト）を取得
                var basePlaylist = playlists[inherit];
                var maxTeams = basePlaylist["vars"]["max_teams"];
                var maxPlayers = basePlaylist["vars"]["max_players"];

                // basePlaylist.include 内から "map" を含むキーを探す
                string mapName = "";
                foreach (var key in basePlaylist.include.Keys)
                {
                    if (key.Contains("map"))
                    {
                        mapName = key;
                    }
                }

                // プレイリスト内の Includes から map オブジェクトを取得
                object mapObj = null;
                if (playlists_r5.playlists.Includes.ContainsKey(mapName))
                {
                    mapObj = playlists_r5.playlists.Includes[mapName];
                }

                string map = null;
                if (mapObj != null)
                {
                    // mapObj.gamemodes.survival.maps が Dictionary<string, object> であると仮定
                    var maps = mapObj.gamemodes.survival.maps as Dictionary<string, object>;
                    if (maps != null && maps.Count > 0)
                    {
                        map = maps.Keys.First();
                    }
                }

                // gamemodeVars から、値が playlistName と一致するキーを取得
                string gamemodeKey = gamemodeVars.FirstOrDefault(kvp => kvp.Value == playlistName).Key;

                // 正規表現で gamemodeKey 内の数字部分を抽出
                var matchResult = Regex.Match(gamemodeKey, @"\D*(\d+)");
                string gamemodeNum = matchResult.Success ? matchResult.Groups[1].Value : "";

                // キーを組み立てて gamemode を取得
                string keyName = $"custom_match_playlist_category_{gamemodeNum}_name";
                string gamemode = gamemodeVars.ContainsKey(keyName) ? gamemodeVars[keyName] : "";
                if (gamemode.Contains("#"))
                {
                    gamemode = gamemode.Replace("#", "");
                }

                // customMatch_SetSettingsMsg を data として利用し、各設定情報を追加
                // ※ customMatch_SetSettingsMsg は Dictionary<string, object> または dynamic であると仮定
                var data = customMatch_SetSettingsMsg;
                data["maxPlayers"] = maxPlayers;
                data["maxTeams"] = maxTeams;
                data["gamemode"] = gamemode;
                data["map"] = map;

                // 待ち受けメッセージに設定情報を追加
                waitMessages["CustomMatch_SetSettings"] = data;

                // ロビー情報を更新
                lobby.maxPlayers = maxPlayers;
                lobby.maxTeams = maxTeams;
                lobby.mapName = map;
            }
        }
    }
}
