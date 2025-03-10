using Microsoft.AspNetCore.Mvc;
using Andean.AndeanClass.Services;
using AndeanClass;
using Rtech.Liveapi;
using Andean.Config;

namespace Andean.AndeanClass.Controllers
{
    public class AndeanClassController
    {
        private readonly MatchService _matchService;
        private readonly object _lock = new object();
        private readonly ConfigService _configService;
        private CustomMatch _lobby;
        private CustomMatch _match;

        public AndeanClassController(MatchService matchService, ConfigService configService)
        {
            _matchService = matchService;
            _configService = configService;
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
        public void ProcessMatchSetup(MatchSetup matchSetupMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                _matchService.ConfigureMatchSetup(matchSetupMsg, _match);
            }
        }
    }
}
