using Microsoft.AspNetCore.Mvc;
using Andean.AndeanClass.Services;

namespace Andean.AndeanClass.Controllers
{
    public class AndeanClassController : Controller
    {
        private readonly IMatchService _matchService;
        private readonly ILobbyService _lobbyService;

        public AndeanClassController(IMatchService matchService, ILobbyService lobbyService)
        {
            _matchService = matchService;
            _lobbyService = lobbyService;
        }

        // 例: マッチ初期化の操作（WebSocket からの Init メッセージ処理結果に応じて呼び出す）
        public IActionResult CreateMatch(string identifier, string gameVersion)
        {
            // ここで _matchService を使った処理を実施（本来は StatisticsProcessor 経由で処理された内容に基づく）
            _matchService.HandleInitMessage(new Rtech.Liveapi.Init { Timestamp = (ulong)DateTimeOffset.Now.ToUnixTimeSeconds(), GameVersion = gameVersion });
            return Ok("Match created");
        }

        // 例: ロビー情報の操作
        public IActionResult UpdateLobby(/*必要なパラメータ*/)
        {
            // ここでは _lobbyService を使った処理を呼び出す
            return Ok("Lobby updated");
        }
    }
}
