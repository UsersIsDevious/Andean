using System.Text.Json;
using AndeanSystems;
using AndeanWebUI.Services;
using ApexLiveAPI.Request;
<<<<<<< Updated upstream
using Microsoft.Extensions.WebEncoders.Testing;
=======
using System.Threading.Tasks;
>>>>>>> Stashed changes
using static AndeanClass.Controllers.AndeanClassController;

namespace AndeanClass.Controllers
{
    public class AndeanClassUpdateController : AndeanSystem
    {
        private static long test = 0;

        public override void Update()
        {
            long now = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

            if (ControlPanelHubService.IsMatch == true)
            {
                if (ControlPanelHubService.ObserverSwitchEnabled)
                    GetPlayerStatus(_match);

                // 新たなPacketオブジェクトを生成し、_packetListに追加
                _packetList[now] = new Packet((double)now / 1000 - _match.StartTimeStamp);

                _updateTime = now;
            }
            else
            {
                if (ControlPanelHubService.IsLaunched)
                {
                    if (now - LobbyData.LastRequestTime > 3000)
                    {
                        LobbyData.LastRequestTime = now;
                        var cts = new CancellationTokenSource(TimeSpan.FromSeconds(1));
                        Request.GetLobbyPlayersAsync(cts.Token).Wait();
                        Request.GetMatchSettingsAsync(cts.Token).Wait();
                        ApplyCSVDataAsync(LobbyData.CsvData?.Diff.Teams ?? new Dictionary<string, CsvDataElement>()).Wait();
                    }

                    if (now - LobbyData.LastCsvApplyTime > 100)
                    {
                        LobbyData.LastCsvApplyTime = now;
                        if (LobbyData.CsvData?.Diff.Teams.Count > 0)
                        {
                            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(1));
                            Request.GetLobbyPlayersAsync(cts.Token).Wait();
                            Request.GetMatchSettingsAsync(cts.Token).Wait();
                            ApplyCSVDataAsync(LobbyData.CsvData?.Diff.Teams ?? new Dictionary<string, CsvDataElement>()).Wait();
                        }
                    }

                    if (LobbyData.LobbyPlayersLastPollTime - now > 10000 && LobbyData.MatchSettingsLastPollTime - now > 10000)
                    {
                        ControlPanelHubService.SetLiveAPIStatus("LobbyLeave", "Waiting for JoinLobby").Wait();
                    }
                }
            }
        }


        /// <summary>
        /// プレイヤーの状態を取得し、カメラを切り替えるメソッド
        /// </summary>
        /// <param name="match">CustomMatchのインスタンス</param>
        /// <returns>非同期タスク</returns>
        /// <remarks>
        /// プレイヤーの状態を取得し、"alive" または "down" の場合にカメラを切り替える。
        /// プレイヤーが "death" またはオンラインでない場合は、次のプレイヤーへスキップする。
        /// チームが壊滅している場合は、次のチームへスキップする。
        /// </remarks>
        public async Task GetPlayerStatus(CustomMatch match)
        {
            // match.teams の全てのチームを列挙
            foreach (Team team in match.Teams.Values)
            {
                // チームの最初のプレイヤーIDからプレイヤー情報を取得
                Player? player = match.GetPlayer(team.Players[0]);
                // チームにプレイヤーが存在しない、またはプレイヤー情報が取得できなかった場合、またはチームが壊滅していた場合次のチームへ
                if (team.Players.Count == 0 || player == null || player.GetStatus() == "eliminated")
                {
                    continue;
                }

                for (int i = 0; i < team.Players.Count; i++)
                {
                    // プレイヤーの状態が "death"、またはオンラインでなければ次のメンバーへ
                    if (player.GetStatus() == "death" || !player.GetOnlineStatus())
                    {
                        continue;
                    }

                    // カメラをプレイヤー名に基づいて切り替え
                    var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
<<<<<<< Updated upstream
                    Request.ChangeCameraAsync("name", player.Name, cts.Token, false).Wait();
=======
                    await Request.ChangeCameraAsync("name", StringPool.Get(player.Name), cts.Token, false);
>>>>>>> Stashed changes
                }
            }
        }

        /// <summary>
        /// lobbyにCSVデータを反映する
        /// </summary>
        /// <param name="diff">LobbyPlayersとCSVデータの差を格納した（キー：teamId、値：CSVData）</param>
        public static async Task<bool> ApplyCSVDataAsync(Dictionary<string, CsvDataElement> diff)
        {
            bool alreadyRequested = false;

            if (diff == null || diff.Count == 0)
            {
                Console.WriteLine("[ApplyCSVData] No differences found.");
                return false;
            }

            var teamCsv = diff.FirstOrDefault();

            if (!int.TryParse(teamCsv.Key, out int teamId))
            {
                Console.WriteLine($"[ApplyCSVData] Invalid teamId: {teamCsv.Key}");
                return false;
            }
            string csvTeamName = teamCsv.Value.TeamName;

            if (LobbyData.LobbyPlayersResponse?.Teams[teamId].Name != csvTeamName)
            {
                // チーム名の更新（using ブロックと例外処理付き）
                try
                {
                    using (var cts = new CancellationTokenSource(TimeSpan.FromMilliseconds(250)))
                    {
                        await Request.SetTeamNameAsync(teamId, csvTeamName, cts.Token);
                        alreadyRequested = true;
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"[ApplyCSVData] Error setting team name for team {teamId}: {ex.Message}");
                }
            }

            // CSVデータに登録されている各プレイヤーに対するチーム更新処理
            foreach (var playerName in teamCsv.Value.Players)
            {
                if (!LobbyData.PlayerNames.TryGetValue(playerName, out Player? player))
                {
                    Console.WriteLine($"[ApplyCSVData] Player not found: {playerName}");
                    continue;
                }

                if (alreadyRequested) break;

                try
                {
                    using (var cts2 = new CancellationTokenSource(TimeSpan.FromMilliseconds(250)))
                    {
                        alreadyRequested = true;
                        await Request.SetTeamAsync(teamId, player.HardwareName, player.NucleusHash, cts2.Token);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"[ApplyCSVData] Error setting team for player {playerName} in team {teamId}: {ex.Message}");
                }
            }
            
            return true;
        }
    }
}
