using System.Text.Json;
using AndeanSystems;
using AndeanWebUI.Services;
using ApexLiveAPI.Request;
using Microsoft.Extensions.WebEncoders.Testing;
using System.Threading.Tasks;
using static AndeanClass.Controllers.AndeanClassController;

namespace AndeanClass.Controllers
{
    public class AndeanClassUpdateController : AndeanSystem
    {
        public async override Task Update()

        {
            long now = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

            if (ControlPanelHubService.IsMatch == true && _match != null)
            {
                if (ControlPanelHubService.ObserverSwitchEnabled && _match.State == StringPool.Get("Playing"))
                    await GetPlayerStatus(_match);

                _updateTime = (double)now / 1000 - _match.StartTimeStamp;

                // 新たなPacketオブジェクトを生成し、_packetListに追加
                packetList[_updateTime] = new Packet(_updateTime);
            }
            else
            {
                if (ControlPanelHubService.IsLaunched)
                {
                    if (now - LobbyData.LastRequestTime > 3000)
                    {
                        LobbyData.LastRequestTime = now;
                        using (var cts = new CancellationTokenSource(TimeSpan.FromSeconds(1)))
                        {
                            await Request.GetLobbyPlayersAsync(cts.Token);
                            await Request.GetMatchSettingsAsync(cts.Token);
                            await Request.GetLegendBanStatusAsync(cts.Token);
                        }
                        await ApplyCSVDataAsync(LobbyData.CsvData?.Diff.Teams ?? new Dictionary<string, CsvDataElement>());

                        // diffCSVData をクリア（もしくは null を代入）
                        LobbyData.CsvData?.Diff.Teams?.Clear();
                    }

                    if (now - LobbyData.LastCsvApplyTime > 100)
                    {
                        LobbyData.LastCsvApplyTime = now;
                        if (LobbyData.CsvData?.Diff.Teams.Count > 0)
                        {
                            using (var cts = new CancellationTokenSource(TimeSpan.FromSeconds(1)))
                            {
                                await Request.GetLobbyPlayersAsync(cts.Token);
                                await Request.GetMatchSettingsAsync(cts.Token);
                            }
                            await ApplyCSVDataAsync(LobbyData.CsvData?.Diff.Teams ?? new Dictionary<string, CsvDataElement>());

                            // diffCSVData をクリア（もしくは null を代入）
                            LobbyData.CsvData?.Diff.Teams?.Clear();

                            LobbyData.PlayerNames.Clear();
                        }
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
        /// プレイヤーが "death" またはオンラインでなければ次のプレイヤーへスキップする。
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
                    var cts = new CancellationTokenSource(TimeSpan.FromMilliseconds(250));
                    await Request.ChangeCameraAsync("name", StringPool.Get(player.Name), cts.Token, false);
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

                if (alreadyRequested || ControlPanelHubService.AutoMovementLobbyPlayersEnabled) break;

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
