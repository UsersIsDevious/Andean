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
    public static partial class AndeanClassController
    {
        private static readonly object _lock = new object();
        private static readonly IOptionsMonitor<AppConfig> _configOptions;

        /// <summary>
        /// ロビー情報
        /// </summary>
        private static CustomMatch _lobby;
        /// <summary>
        /// マッチ情報
        /// </summary>
        private static CustomMatch _match;
        /// <summary>
        /// ロビーかどうかのフラグ
        /// </summary>
        private static bool _isLobby = true;
        /// <summary>
        /// チーム順位のリスト
        /// </summary>
        private static List<uint> _teamRanking;
        /// <summary>
        /// リング後処理用のEventsリスト
        /// </summary>
        private static List<(string, Event)> _ringEvents;
        /// <summary>
        /// configファイルの情報
        /// </summary>
        private static AppConfig config = ConfigService.Config;
        /// <summary>
        /// player以外の攻撃の際用のworldプレーヤー
        /// </summary>
        private static Player WorldPlayer = new Player("World", 99, "World", "World").SetLegend("World");


        public static void InitializeLobby(Init initMsg)
        {
            lock (_lock)
            {
                _lobby = MatchService.CreateCustomMatch(initMsg);
            }
        }

       
        public static void InitializeMatch(Init initMsg)
        {
            lock (_lock)
            {
                _match = MatchService.CreateCustomMatch(initMsg);
                // マッチが初期化されたらロビーから抜ける
                _isLobby = false;
            }
        }

        // マッチセットアップメッセージの処理
        public static void ProcessMatchSetup(MatchSetup matchSetupMsg)
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
        public static void ProcessGameStatus(GameStateChanged gameStateChangedMsg)
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
        
    }
}
