using AndeanSystems;
using ApexLiveAPI.Request;
using static AndeanClass.Controllers.AndeanClassController;
using Newtonsoft.Json.Linq;

namespace AndeanClass.Controllers
{
    public class AndeanClassUpdateController : AndeanSystem
    {
        private readonly Request _request;

        public AndeanClassUpdateController(
            Request request
            )
        {
            _request = request;
        }

        public void Update()
        {
            if (_match.State == "Playing")
            {
                GetPlayerStatus(_match).Wait();

                _updateTime = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

                // 新たなPacketオブジェクトを生成し、_packetListに追加
                _packetList[_updateTime] = new Packet(_updateTime / 1000 - (long)_match.StartTimeStamp);
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

            Console.WriteLine("[GET PLAYER STATUS] Start"); // デバッグ用ログ

            // match.teams の全てのチームを列挙
            foreach (Team team in match.Teams.Values)
            {
                // チームの最初のプレイヤーIDからプレイヤー情報を取得
                Player player = match.GetPlayer(team.Players[0]);

                Console.WriteLine($"[GET PLAYER STATUS] Team ID: {player.TeamId}, Player ID: {player.NucleusHash}"); // デバッグ用ログ

                // チームにプレイヤーが存在しない、またはチームが壊滅していた場合次のチームへ
                if (team.Players.Count == 0 || player.GetStatus() == "eliminated")
                {
                    Console.WriteLine($"[GET PLAYER STATUS] Team ID: {player.TeamId} is eliminated."); // デバッグ用ログ
                    continue;
                }   

                for (int i = 0; i < team.Players.Count; i++)
                {
                    // プレイヤーの状態が "death"、またはオンラインでなければ次のメンバーへ
                    if (player.GetStatus() == "death" || !player.GetOnlineStatus())
                    {
                        Console.WriteLine($"[GET PLAYER STATUS] Player ID: {player.NucleusHash} is dead or offline."); // デバッグ用ログ
                        continue;
                    }
                        
                    // カメラをプレイヤー名に基づいて切り替え
                    var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
                    await _request.ChangeCameraAsync("name", player.Name, cts.Token);

                    Console.WriteLine($"[GET PLAYER STATUS] Camera changed to Player ID: {player.NucleusHash}"); // デバッグ用ログ
                }
            }

            Console.WriteLine("[GET PLAYER STATUS] End"); // デバッグ用ログ
        }

        /// <summary>
        /// lobbyにCSVデータを反映する
        /// </summary>
        /// <param name="lobby">ロビー（CustomMatchのインスタンス）</param>
        /// <param name="copyCSVData">CSVデータ（キー：teamId、値：CSVData）</param>
        /// <returns>反映に成功した場合はtrue、CSVデータが空の場合はfalse</returns>
        public static bool ApplyCSVData(CustomMatch lobby, Dictionary<int, CsvDataTeam> copyCSVData)
        {
            // CSVデータが空の場合は何もせずfalseを返す
            if (copyCSVData.Count == 0)
            {
                return false;
            }

            return false; // いったんここまで書いた。続けるときはこの行を削除すること。

            // // 辞書の最初のキー（teamId）を取得
            // int teamId = copyCSVData.Keys.First();

            // if (GlobalData.isPlayerSet.Success)
            // {
            //     // チーム情報を取得
            //     Team team = lobby.GetTeam(teamId);
            //     if (team != null)
            //     {
            //         // チーム名が異なる場合、チーム名を設定する
            //         if (copyCSVData[teamId].TeamName != team.TeamName)
            //         {
            //             ApexCommon.SetTeamName(teamId, copyCSVData[teamId].TeamName);
            //         }
            //         // チームのロゴを設定する
            //         team.SetTeamImg(copyCSVData[teamId].LogoUrl);
            //     }
            //     // 該当のCSVデータを削除する
            //     copyCSVData.Remove(teamId);
            //     GlobalData.isPlayerSet.Success = false;
            //     GlobalData.isPlayerSet.Index = 0;
            // }
            // else
            // {
            //     // 現在のチームのプレイヤーリストから、指定されたインデックスのプレイヤー名を取得
            //     CSVData csvData = copyCSVData[teamId];
            //     // インデックスが範囲内か確認
            //     if (GlobalData.isPlayerSet.Index < csvData.Players.Count)
            //     {
            //         string playerName = csvData.Players[GlobalData.isPlayerSet.Index];
            //         if (GlobalData.PlayerNames.ContainsKey(playerName))
            //         {
            //             Player player = GlobalData.PlayerNames[playerName];
            //             // チーム0のプレイヤーリストに対象プレイヤーのnucleusHashが含まれていれば処理を実行
            //             Team team0 = lobby.GetTeam(0);
            //             if (team0 != null && team0.Players.Contains(player.NucleusHash))
            //             {
            //                 ApexCommon.SetTeam(teamId, player.HardwareName, player.NucleusHash);
            //             }
            //         }
            //         else if (playerName == null)
            //         {
            //             Console.WriteLine($"[APPLY CSV DATA] Player is empty, TEAM_ID: {teamId - 1}");
            //         }
            //         else
            //         {
            //             Console.WriteLine($"[APPLY CSV DATA] Player not found, TEAM_ID: {teamId - 1} PLAYER_NAME: {playerName}");
            //         }

            //         // CSVのプレイヤーリストの末尾に達していれば、次はチーム設定へ切り替える
            //         if (GlobalData.isPlayerSet.Index >= csvData.Players.Count - 1)
            //         {
            //             GlobalData.isPlayerSet.Success = true;
            //         }
            //         else
            //         {
            //             GlobalData.isPlayerSet.Index++;
            //         }
            //     }
            //     else
            //     {
            //         Console.WriteLine($"[APPLY CSV DATA] Index out of range for TEAM_ID: {teamId}");
            //     }
            // }
            // return true;
        }
    }
}
