using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Andean.Services;
using Andean.ApexLiveAPI.Request;

namespace Andean.Hubs
{
    public class LobbyHub : Hub
    {
        private readonly Request _lobbyRequestService;

        public LobbyHub(Request lobbyRequestService)
        {
            _lobbyRequestService = lobbyRequestService;
        }

        // SignalR クライアントから呼び出される create_lobby メソッド
        public async Task CreateLobby()
        {
            // タイムアウト付きでリクエストを送信
            using var cts = new System.Threading.CancellationTokenSource(TimeSpan.FromSeconds(10));
            var response = await _lobbyRequestService.CreateLobbyAsync(cts.Token);
            if (response != null)
            {
                await Clients.Caller.SendAsync("LobbyResponse", response.ToString());
            }
            else
            {
                await Clients.Caller.SendAsync("LobbyResponse", "Error or timeout in creating lobby.");
            }
        }

        // 今後、set_team, send_chat, set_team_name, get_lobby_players などのメソッドを実装可能
    }
}
