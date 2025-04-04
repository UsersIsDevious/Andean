using Andean.AndeanClass.Services.Utilities;
using AndeanClass.Services;
using Rtech.Liveapi;
using System.Text.Json;

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
    }
}
