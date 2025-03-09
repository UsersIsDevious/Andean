using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Andean.ApexLiveAPI.Request;
using Andean.ApexLiveAPI.Services;
using Andean.WebsocketServer.Controllers;
using Andean.Utilities;
using Andean.Config;
using Microsoft.Extensions.Options;
using Andean;
using Andean.ApexLiveAPI.Message;

namespace Andean.Hubs
{
    public class ControlPanelHub : Hub ,IAndeanWebUI
    {
        private readonly ApexPlaylistService _apexPlaylistService;
        private readonly StatisticsProcessor _statisticsProcessor;
        private readonly Request _lobbyRequestService;
        private readonly CommandExecutionService _commandExecutionService;
        private readonly GetSteamPath _getSteamPath;
        private readonly IOptionsMonitor<AppConfig> _configOptions;
        private readonly ConfigService _configService;
        private readonly SystemShutdownService _shutdownService;

        // サーバー側で全てのステータスを保持する（各クライアントで状態が異なることを防ぐ）
        private static string sharedData = "Initial Data";
        private static List<string> selectedDataKeys = new List<string>();
        private static string lastLobbyResponse = "";
        private static string lastApexResponse = "";

        public ControlPanelHub(
            ApexPlaylistService apexPlaylistService,
            StatisticsProcessor statisticsProcessor,
            Request lobbyRequestService,
            CommandExecutionService commandExecutionService,
            GetSteamPath getSteamPath,
            IOptionsMonitor<AppConfig> configOptions,
            ConfigService configService,
            SystemShutdownService shutdownService
            )
        {
            _apexPlaylistService = apexPlaylistService;
            _statisticsProcessor = statisticsProcessor;
            _lobbyRequestService = lobbyRequestService;
            _commandExecutionService = commandExecutionService;
            _getSteamPath = getSteamPath;
            _configOptions = configOptions;
            _configService = configService;
            _shutdownService = shutdownService;
        }

        // クライアント接続時に、サーバー側で保持している全ステータスを送信
        public override async Task OnConnectedAsync()
        {
            await Clients.Caller.SendAsync("ReceiveStatus", GetCurrentStatus());
            await base.OnConnectedAsync();
        }

        // 現在の全ステータスを集約して返す
        private object GetCurrentStatus()
        {
            return new
            {
                SharedData = sharedData,
                SelectedDataKeys = selectedDataKeys,
                AppConfig = _configOptions.CurrentValue,
                LastLobbyResponse = lastLobbyResponse,
                LastApexResponse = lastApexResponse
            };
        }

        // 全クライアントへ現在のステータスをブロードキャストする
        private async Task BroadcastStatus()
        {
            await Clients.All.SendAsync("ReceiveStatus", GetCurrentStatus());
        }

        // 共有データ更新時はサーバー側の状態を更新し、全クライアントへブロードキャスト
        public async Task UpdateData(string newData)
        {
            sharedData = newData;
            await BroadcastStatus();
        }

        // 共有データのリセット時
        public async Task ResetData()
        {
            sharedData = "Initial Data";
            await BroadcastStatus();
        }

        // 選択データ更新時
        public async Task UpdateSelectedData(List<string> newSelectedKeys)
        {
            selectedDataKeys = newSelectedKeys;
            await BroadcastStatus();
        }

        // ロビー作成時に取得した結果を状態として保持し、全クライアントへブロードキャスト
        public async Task CreateLobby()
        {
            using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            var response = await _lobbyRequestService.CreateLobbyAsync(cts.Token);
            lastLobbyResponse = response != null ? response.ToString() : "Error or timeout in creating lobby.";
            await BroadcastStatus();
        }

        /// <summary>
        /// ユーザーから StartApex メッセージを受け取ったら、config.json の設定に基づいて
        /// Apex を起動し、その結果をサーバー側の状態に保持した上で全クライアントへブロードキャストします。
        /// </summary>
        public async Task StartApex()
        {
            try
            {
                var config = _configOptions.CurrentValue;

                Dictionary<string, object> playlists_r5 = await _apexPlaylistService.GetPlaylistMetadataAsync();

                string command = "";
                string option = $"{config.ApexLegends.Api_Option} {config.ApexLegends.Option} +cl_liveapi_ws_servers \"ws://127.0.0.1:{config.ApexLegends.Api_Port}\"";
                if (config.ApexLegends.Game_Lancher == "EA")
                {
                    command = $"{config.ApexLegends.Path}\\r5apex.exe {option}";
                }
                else if (config.ApexLegends.Game_Lancher == "Steam")
                {
                    string? steamPath = await _getSteamPath.GetSteamPathAsync();
                    if (steamPath == null)
                    {
                        lastApexResponse = "Error: Steam path not found or Steam not installed.";
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
                string result = await _commandExecutionService.ExecuteCommandAsync(command, CommandMode.CommandPrompt);
                lastApexResponse = result;
            }
            catch (System.Exception ex)
            {
                lastApexResponse = $"Error: {ex.Message}";
                Console.WriteLine(lastApexResponse);
            }
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
            // 現在の全設定を取得
            AppConfig config = await _configService.GetConfigAsync();

            // セクションの更新処理を実施
            // ここでは、更新内容は newData に JSON 形式の値が入っている前提とする
            try
            {
                switch (sectionKey.ToLowerInvariant())
                {
                    case "apexlegends":
                        var newApex = System.Text.Json.JsonSerializer.Deserialize<ApexLegendsConfig>(newData);
                        if (newApex != null)
                        {
                            // mode に応じた更新方法は、ConfigService.UpdateConfigSectionAsync 内で処理することも可能
                            await _configService.UpdateConfigSectionAsync("apexlegends", newApex);
                        }
                        break;
                    case "penetrator":
                        var newPenetrator = System.Text.Json.JsonSerializer.Deserialize<List<string>>(newData);
                        if (newPenetrator != null)
                        {
                            await _configService.UpdateConfigSectionAsync("penetrator", newPenetrator);
                        }
                        break;
                    case "output":
                        await _configService.UpdateConfigSectionAsync("output", newData);
                        break;
                    case "language":
                        await _configService.UpdateConfigSectionAsync("language", newData);
                        break;
                    case "log_dir":
                        await _configService.UpdateConfigSectionAsync("log_dir", newData);
                        break;
                    case "data_fps":
                        await _configService.UpdateConfigSectionAsync("data_fps", newData);
                        break;
                    case "score_setting":
                        var newScore = System.Text.Json.JsonSerializer.Deserialize<ScoreSettingConfig>(newData);
                        if (newScore != null)
                        {
                            await _configService.UpdateConfigSectionAsync("score_setting", newScore);
                        }
                        break;
                    default:
                        await Clients.Caller.SendAsync("ConfigUpdateResponse", $"Unknown section: {sectionKey}");
                        return;
                }

                await Clients.Caller.SendAsync("ConfigUpdateResponse", "Config update successful.");
            }
            catch (System.Exception ex)
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
            await _shutdownService.ShutdownAsync(new SystemShutdownService.ShutdownOptions { DelaySeconds = 3 });
        }
        /// <summary>
        /// システムシャットダウンをクライアントに通知するメソッド
        /// </summary>
        public virtual async Task NotifyShutdown(string message = "System is shutting down.")
        {
            // 全クライアントに "ShutdownNotification" イベントとして通知を送信
            await Clients.All.SendAsync("ShutdownNotification", message);
        }

    }
}
