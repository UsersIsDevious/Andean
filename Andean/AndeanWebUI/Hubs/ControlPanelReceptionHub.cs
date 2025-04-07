using AndeanSystems;
using System.Text.Json;
using AndeanWebUI.Models;
using ApexLiveAPI.Request;
using ApexLiveAPI.Services;
using Microsoft.AspNetCore.SignalR;
using static AndeanWebUI.Services.ControlPanelHubService;
using static AndeanSystems.CommandExecutionService;
using static AndeanSystems.ConfigService;
using static AndeanSystems.SystemShutdownService;


namespace AndeanWebUI.Hubs
{
    public partial class ControlPanelHub : Hub, IAndeanWebUI
    {
        /// <summary>
        /// ユーザーから StartApex メッセージを受け取ったら、config.json の設定に基づいて
        /// Apex を起動し、その結果をサーバー側の状態に保持した上で全クライアントへブロードキャストします。
        /// </summary>
        public async Task StartApex()
        {
            // リクエスト受信確認を即座に送信
            await Clients.Caller.SendAsync("RequestReceived", "StartApex", "リクエストを受信しました");

            try
            {
                var config = _config;

                Dictionary<string, object> playlists_r5 = await ApexPlaylistService.GetPlaylistMetadataAsync();

                string command = "";
                string option = $"{config.ApexLegends.Api_Option} {config.ApexLegends.Option} +cl_liveapi_ws_servers \"ws://127.0.0.1:{config.ApexLegends.Api_Port}\"";
                if (config.ApexLegends.Game_Lancher == "EA")
                {
                    command = $"\"{config.ApexLegends.Path}\\ApexLauncher.exe\" {option}";
                }
                else if (config.ApexLegends.Game_Lancher == "Steam")
                {
                    string? steamPath = await GetSteamPath.GetSteamPathAsync();
                    if (steamPath == null)
                    {
                        LastApexResponse = "Error: Steam path not found or Steam not installed.";
                        await BroadcastStatus();
                        return;
                    }
                    else
                    {
                        //steamPath = steamPath.Replace("/", "\\");  // パスの区切り文字を統一
                        command = "\"" + steamPath + "\\Steam.exe\" -applaunch 1172470 " + option;
                    }
                }
                Console.WriteLine(command);
                string result = await ExecuteCommandAsync(command, CommandMode.CommandPrompt);
                LastApexResponse = result;
            }
            catch (Exception ex)
            {
                LastApexResponse = $"Error: {ex.Message}";
                Console.WriteLine(LastApexResponse);
            }

            LobbyJoinButtonEnabled = false;
            await BroadcastStatus();
        }
        /// <summary>
        /// クライアントから送信された JSON（CSV データを含む）を受け取り、ログ出力や必要な処理を行います。
        /// </summary>
        /// <param name="jsonData">CSV データを含む JSON</param>
        public async Task ReadCSV(object jsonData)
        {
            // jsonData を文字列に変換
            string jsonString = jsonData?.ToString() ?? string.Empty;
            Console.WriteLine($"[ReadCSV] Received CSV JSON data: {jsonString}");

            // 必要に応じて、ここで CSV パースや変換処理を行い、メタデータとして利用することができます。
            // 例：VdfParser を利用して処理する場合など
            // var parsedData = VdfParser.ParseVdf(jsonString);

            // 今回は、受け取った内容をそのままクライアントに確認用のレスポンスとして返す
            await Clients.Caller.SendAsync("CSVReadResponse", "CSV data received: " + jsonString);
        }

        /// <summary>
        /// コンフィグの変更リクエストを受け付け、指定されたセクションの更新を行います。
        /// </summary>
        /// <param name="sectionKey">更新対象のセクションキー（例："apexlegends", "score_setting" など）</param>
        /// <param name="newData">新しい設定内容（JSON 形式の文字列）</param>
        /// <param name="mode">更新モード（"overwrite", "append", "jsonAppend"）</param>
        public async Task UpdateConfig(string sectionKey, string newData, string mode)
        {
            // 更新モードの判定（小文字で統一）
            mode = mode.ToLowerInvariant();

            // セクションの更新処理を実施
            // ここでは、更新内容は newData に JSON 形式の値が入っている前提とする
            try
            {
                switch (sectionKey.ToLowerInvariant())
                {
                    case "apexlegends":
                        {
                            var options = new JsonSerializerOptions
                            {
                                PropertyNameCaseInsensitive = true
                            };
                            var newApex = JsonSerializer.Deserialize<ApexLegendsConfig>(newData, options);
                            if (newApex != null)
                            {
                                // mode に応じた更新方法は、ConfigService.UpdateConfigSectionAsync 内で処理することも可能
                                await UpdateConfigSectionAsync("apexlegends", newApex);
                            }
                            break;
                        }
                    case "penetrator":
                        {
                            var options = new JsonSerializerOptions
                            {
                                PropertyNameCaseInsensitive = true
                            };
                            var newPenetrator = JsonSerializer.Deserialize<List<string>>(newData, options);
                            if (newPenetrator != null)
                            {
                                await UpdateConfigSectionAsync("penetrator", newPenetrator);
                            }
                            break;
                        }
                    case "output":
                        await UpdateConfigSectionAsync("output", newData);
                        break;
                    case "language":
                        await UpdateConfigSectionAsync("language", newData);
                        break;
                    case "log_dir":
                        await UpdateConfigSectionAsync("log_dir", newData);
                        break;
                    case "data_fps":
                        await UpdateConfigSectionAsync("data_fps", newData);
                        break;
                    case "score_setting":
                        {
                            Console.WriteLine(newData);
                            var options = new JsonSerializerOptions
                            {
                                PropertyNameCaseInsensitive = true
                            };

                            var newScore = JsonSerializer.Deserialize<ScoreSettingConfig>(newData, options);
                            if (newScore != null)
                            {
                                await UpdateConfigSectionAsync("score_setting", newScore);
                            }
                            break;
                        }
                    default:
                        await Clients.Caller.SendAsync("ConfigUpdateResponse", $"Unknown section: {sectionKey}");
                        return;
                }

                await Clients.Caller.SendAsync("ConfigUpdateResponse", "Config update successful.");
            }
            catch (Exception ex)
            {
                await Clients.Caller.SendAsync("ConfigUpdateResponse", $"Config update failed: {ex.Message}");
            }

            await BroadcastStatus();
        }
        /// <summary>
        /// クライアントから "Shutdown" イベントを受信した場合に、サーバー側で ShutdownAsync を実行します。
        /// </summary>
        public async Task Shutdown()
        {
            // クライアントからシャットダウン要求があったことをログ出力
            Console.WriteLine("Shutdown command received from client.");

            // 実際のシャットダウン処理を実行するメソッドを呼び出す
            await ShutdownAsync();
        }

        // ロビー作成時に取得した結果を状態として保持し、全クライアントへブロードキャスト
        public async Task joinLobby(string lobbyInfo = null)
        {
            // リクエスト受信確認を即座に送信
            await Clients.Caller.SendAsync("RequestReceived", "JoinLobby", "リクエストを受信しました");

            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Rtech.Liveapi.Response response;
            // オプションの引数 lobbyInfo が渡された場合の処理（必要に応じて）
            if (!string.IsNullOrEmpty(lobbyInfo))
            {
                Request.JoinLobbyAsync(lobbyInfo, cts.Token);
                Console.WriteLine($"Received lobby info: {lobbyInfo}");
            }
            else
            {
                Request.CreateLobbyAsync(cts.Token);
            }
            

            LobbyJoinButtonEnabled = false;
            LeaveLobbyButtonEnabled = true;
            IsLobbyJoined = true;

            //@conecone　よろしく💛
            // LastLobbyResponse = response != null ? response.ToString() : "Error or timeout in creating lobby.";
            Console.WriteLine($"ControlPanelStateService.LobbyJoinButtonEnabled:{LobbyJoinButtonEnabled}");
            Console.WriteLine($"leaveLobbyButtonEnabled:{LeaveLobbyButtonEnabled}");
            await BroadcastStatus();
        }

        public async Task leaveLobby()
        {
            // リクエスト受信確認を即座に送信
            await Clients.Caller.SendAsync("RequestReceived", "LeaveLobby", "リクエストを受信しました");

            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Request.LeaveLobbyAsync(cts.Token);
            LobbyJoinButtonEnabled = true;
            LeaveLobbyButtonEnabled = false;
            IsLobbyJoined = false;
            await BroadcastStatus();
        }

        public async Task setReady()
        {
            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            //await Request.SetReadyAsync(cts.Token);
            await BroadcastStatus();
        }
        public async Task setTeam(int teamId, string targetHardwareName, string targetNucleushash)
        {
            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Request.SetTeamAsync(teamId, targetHardwareName, targetNucleushash, cts.Token);
            await BroadcastStatus();
        }
        public async Task setTeamName(int teamId, string teamName)
        {
            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Request.SetTeamNameAsync(teamId, teamName, cts.Token);
            await BroadcastStatus();
        }
        public async Task setSpawnPoint(int teamId, int spawnPoint)
        {
            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Request.SetSpawnPointAsync(teamId, spawnPoint, cts.Token);
            await BroadcastStatus();
        }
        public async Task changeCamera(string type, string value)
        {
            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Request.ChangeCameraAsync(type, value, cts.Token);
            await BroadcastStatus();
        }
        public async Task sendChat(string message)
        {
            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Request.SendChatAsync(message, cts.Token);
            await BroadcastStatus();
        }
        public async Task kickPlayer(string targetHardwareName, string targetNucleushash)
        {
            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Request.KickPlayerAsync(targetHardwareName, targetNucleushash, cts.Token);
            await BroadcastStatus();
        }
        public async Task setSettings(string matchName, bool adminChat, bool teamRename, bool selfAssign, bool aimAssist, bool anonMode)
        {
            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Request.SetSettingsAsync(matchName, adminChat, teamRename, selfAssign, aimAssist, anonMode, cts.Token);
            await BroadcastStatus();
        }
        public async Task setEndRingExclusion(int exclusion)
        {
            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Request.SetEndRingExclusionAsync(exclusion, cts.Token);
            await BroadcastStatus();
        }
        public async Task setMatchmaking(bool matchmaking)
        {
            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Request.SetMatchmakingAsync(matchmaking, cts.Token);
            await BroadcastStatus();
        }
        public async Task pauseToggle(double preTimer = 0)
        {
            var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            Request.PauseToggleAsync(preTimer, cts.Token);
            await BroadcastStatus();
        }
    }
}
