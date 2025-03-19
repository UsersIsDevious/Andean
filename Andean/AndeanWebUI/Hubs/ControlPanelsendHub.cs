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
using Andean.AndeanWebUI.Models;
using Andean.AndeanWebUI.Services;
using Andean.ApexLiveAPI.Message;
using AndeanClass;
using AndeanSystem;

namespace Andean.AndeanWebUI.Hubs
{
    public partial class ControlPanelHub : Hub ,IAndeanWebUI
    {
        private readonly ApexPlaylistService _apexPlaylistService;
        private readonly Request _request;
        private readonly AppConfig _config = ConfigService.Config;
        private readonly SystemShutdownService _shutdownService;


        private Dictionary<string, LobbyPlayerSection> lobbyPlayers = new Dictionary<string, LobbyPlayerSection>();
        private LobbySettings lobbySettings = new LobbySettings();

        // サーバー側で全てのステータスを保持する（各クライアントで状態が異なることを防ぐ）
        private static string sharedData = "Initial Data";
        private static List<string> selectedDataKeys = new List<string>();
        private static string lastLobbyResponse = "";
        private static string lastApexResponse = "";

        public ControlPanelHub(
            ApexPlaylistService apexPlaylistService,
            IOptionsMonitor<AppConfig> configOptions,
            SystemShutdownService shutdownService,
            Request request
            )
        {
            _apexPlaylistService = apexPlaylistService;
            _shutdownService = shutdownService;
            _request = request;
        }

        // CustomMatch から取得したデータを更新するメソッド
        public async Task UpdateLobbyFromCustomMatch(CustomMatch customMatch)
        {
            lobbyPlayers = LobbyDataConverter.ConvertLobbyPlayers(customMatch);
            lobbySettings = LobbyDataConverter.ConvertLobbySettings(customMatch);
            await BroadcastStatus();
        }

        //以下接続系処理

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
                AppConfig = _config,
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

       
        // ロビープレーヤー情報の更新
        //public async Task UpdateLobbyPlayers(Dictionary<string, LobbyPlayer> newLobbyPlayers)
        //{
        //    lobbyPlayers = newLobbyPlayers;
        //    await BroadcastStatus();
        //}

        // ロビー設定の更新
        public async Task UpdateLobbySettings(LobbySettings newLobbySettings)
        {
            lobbySettings = newLobbySettings;
            await BroadcastStatus();
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
