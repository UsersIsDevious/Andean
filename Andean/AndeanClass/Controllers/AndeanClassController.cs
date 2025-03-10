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

        /// <summary>
        /// ロビー情報
        /// </summary>
        private CustomMatch _lobby;
        /// <summary>
        /// マッチ情報
        /// </summary>
        private CustomMatch _match;
        /// <summary>
        /// ロビーかどうかのフラグ
        /// </summary>
        private bool _isLobby = true;
        /// <summary>
        /// チーム順位のリスト
        /// </summary>
        private List<int> _teamRanking;
        /// <summary>
        /// リング後処理用のEventsリスト
        /// </summary>
        private List<(string, Event)> _ringEvents;

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
                // マッチが初期化されたらロビーから抜ける
                _isLobby = false;
            }
        }

        // マッチセットアップメッセージの処理
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

        // ゲームステータスメッセージの処理
        public void ProcessGameStatus(GameStateChanged gameStateChangedMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                // Postmatchの場合はロビーに戻る
                if (gameStateChangedMsg.State == "Postmatch") _isLobby = true;

                _matchService.UpdateGameStatus(gameStateChangedMsg, _match, _teamRanking, _ringEvents);
            }
        }
    }
}
