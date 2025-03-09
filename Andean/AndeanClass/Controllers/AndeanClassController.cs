using Microsoft.AspNetCore.Mvc;
using Andean.AndeanClass.Services;
using AndeanClass;
using Rtech.Liveapi;

namespace Andean.AndeanClass.Controllers
{
    public class AndeanClassController
    {
        private readonly MatchService _matchService;
        private readonly object _lock = new object();
        private CustomMatch _lobby;
        private CustomMatch _match;

        public AndeanClassController(MatchService matchService)
        {
            _matchService = matchService;
        }

        public void InitializeLobby(Init initMsg)
        {
            lock (_lock)
            {
                _lobby = _matchService.CreateCustomMatch(initMsg);
            }
        }

       
        public void InitializeMatch(Init initMsg)
        {
            lock (_lock)
            {
                _match = _matchService.CreateCustomMatch(initMsg);
            }
        }

        // マッチセットアップメッセージの処理（ロビーまたはマッチに対して共通処理）
        // isLobbyがtrueならロビー、falseならマッチを対象とする
        public void ProcessMatchSetup(MatchSetup matchSetupMsg, bool isLobby = true)
        {
            lock (_lock)
            {
                CustomMatch targetMatch = isLobby ? _lobby : _match;
                if (targetMatch == null)
                {
                    throw new InvalidOperationException("対象のCustomMatchが初期化されていません。");
                }

                _matchService.ConfigureMatchSetup(matchSetupMsg, targetMatch);
            }
        }
    }
}
