using System;
using System.Collections.Generic;
using Andean.AndeanClass;
using Rtech.Liveapi;

namespace Andean.AndeanClass.Services
{
    public class LobbyService : ILobbyService
    {
        // ロビーはシングルトン的に初期化して保持する例
        private readonly CustomMatch _lobby = new CustomMatch("lobby");

        public void HandleLobbyPlayers(CustomMatch_LobbyPlayers lobbyPlayersMsg)
        {
            _lobby.SetLobbyId(lobbyPlayersMsg.PlayerToken);
            _lobby.ClearPlayers();
            _lobby.ClearTeams();

            // チーム情報の更新
            foreach (var teamMsg in lobbyPlayersMsg.Teams)
            {
                string teamName = teamMsg.Name;
                Team team = new Team(teamName);
                team.SetSpawnPoint(teamMsg.SpawnPoint);
                _lobby.AddTeam((int)teamMsg.Id, teamName);
            }

            // プレイヤー情報の更新（重複チェックなどの処理を含む）
            Dictionary<string, Dictionary<string, object>> playerNames = new Dictionary<string, Dictionary<string, object>>();
            foreach (var playerMsg in lobbyPlayersMsg.Players)
            {
                string name = playerMsg.Name;
                int teamId = (int)playerMsg.TeamId;
                string nucleusHash = playerMsg.NucleusHash;
                AndeanClass.Player player = new AndeanClass.Player(name, teamId, nucleusHash, playerMsg.HardwareName);

                if (playerNames.TryGetValue(name, out Dictionary<string, object>? value))
                {
                    _lobby.RemovePlayer((string)value["nucleusHash"]);
                    playerNames[name]["duplicate"] = true;
                }
                else
                {
                    _lobby.AddPlayer(player);
                    var dict = new Dictionary<string, object> { { "nucleusHash", nucleusHash }, { "duplicate", false } };
                    playerNames.Add(name, dict);
                }
            }
            Console.WriteLine("[LobbyService] ロビー情報の更新完了。");
        }
    }
}
