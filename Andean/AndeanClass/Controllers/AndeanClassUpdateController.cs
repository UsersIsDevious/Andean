using AndeanSystems;
using AndeanWebUI.Services;
using ApexLiveAPI.Request;
using static AndeanClass.Controllers.AndeanClassController;

namespace AndeanClass.Controllers
{
    public class AndeanClassUpdateController : AndeanSystem
    {
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
                if (ControlPanelHubService.IsLaunched && now - LobbyData.LastRequestTime > 500)
                {
                    LobbyData.LastRequestTime = now;
                    var cts = new CancellationTokenSource(TimeSpan.FromSeconds(1));
                    Request.GetLobbyPlayersAsync(cts.Token).Wait();
                    Request.GetMatchSettingsAsync(cts.Token).Wait();

                    if (LobbyData.LobbyPlayersLastPollTime - now > 3000 && LobbyData.MatchSettingsLastPollTime - now > 3000)
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
        public void GetPlayerStatus(CustomMatch match)
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
                    Request.ChangeCameraAsync("name", player.Name, cts.Token, false).Wait();
                }
            }
        }
    }
}
