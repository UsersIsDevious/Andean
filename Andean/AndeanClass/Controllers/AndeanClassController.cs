using Microsoft.AspNetCore.Mvc;
using Andean.AndeanClass.Services;
using AndeanClass;
using Rtech.Liveapi;
using Andean.Config;
using AndeanClass.Services;
using Microsoft.Extensions.Options;
using System.Text.RegularExpressions;

namespace AndeanClass.Controllers
{
    public partial class AndeanClassController
    {
        private readonly object _lock = new object();
        private readonly IOptionsMonitor<AppConfig> _configOptions;

        /// <summary>
        /// ロビー情報
        /// </summary>
        private CustomMatch _lobby;
        /// <summary>
        /// マッチ情報
        /// </summary>
        private CustomMatch _match;
        /// <summary>
        /// パケット情報
        /// </summary>
        private Packet _packet;
        /// <summary>
        /// ロビーかどうかのフラグ
        /// </summary>
        private bool _isLobby = true;
        /// <summary>
        /// チーム順位のリスト
        /// </summary>
        private List<uint> _teamRanking;
        /// <summary>
        /// リング後処理用のEventsリスト
        /// </summary>
        private List<(string, Event)> _ringEvents;
        /// <summary>
        /// configファイルの情報
        /// </summary>
        private AppConfig config;
        /// <summary>
        /// player以外の攻撃の際用のworldプレーヤー
        /// </summary>
        private Player WorldPlayer = new Player("World", 99, "World", "World").SetLegend("World");



        public AndeanClassController(IOptionsMonitor<AppConfig> configOptions)
        {
            _configOptions = configOptions;
            config = _configOptions.CurrentValue;
        }

        public void InitializeLobby(Init initMsg)
        {
            lock (_lock)
            {
                _lobby = MatchService.CreateCustomMatch(initMsg);
            }
        }

       
        public void InitializeMatch(Init initMsg)
        {
            lock (_lock)
            {
                _match = MatchService.CreateCustomMatch(initMsg);
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

                MatchService.ConfigureMatchSetup(matchSetupMsg, _match);
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

                MatchService.UpdateGameStatus(gameStateChangedMsg, _match, config, _teamRanking, _ringEvents);
            }
        }
        
        // ゲーム終了時の処理
        public void ProcessMatchEnd(MatchStateEnd matchStateEndMsg)
          {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

               MatchService.ProcessGameEnd(matchStateEndMsg, _match);
            }
        }

        // チーム壊滅時の処理
        public void ProcessSquadEliminated(SquadEliminated squadEliminatedMsg)
          {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                MatchService.ProcessTeamEliminated(squadEliminatedMsg, _match, _teamRanking);
            }
        }
        // リング収縮開始メッセージの処理
        public void ProcessRingStart(RingStartClosing ringStartClosingMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
                MatchService.ProcessRingStartClosing(ringStartClosingMsg, _match, _ringEvents);
            }
        }

        // リング収縮終了メッセージの処理
        public void ProcessRingFinished(RingFinishedClosing ringFinishedClosingMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
                MatchService.ProcessRingFinishedClosing(ringFinishedClosingMsg, _match, _ringEvents);
            }
        }
    }
}
