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
    public class AndeanClassController
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
        /// <summary>
        /// configファイルの情報
        /// </summary>
        private AppConfig config;



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
        public void ProcessPlayerDamaged(Rtech.Liveapi.PlayerDamaged PlayerDamagedMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
                
                string _weaponName = LocalizationService.GetOriginalKey("weapons_label", PlayerDamagedMsg.Weapon);
                int _damageInflicted = (int)PlayerDamagedMsg.DamageInflicted;

                Player _attacker = PlayerService.CreateOrUpdatePlayer(_match,PlayerDamagedMsg.Attacker);
                Player _victim = PlayerService.CreateOrUpdatePlayer(_match,PlayerDamagedMsg.Victim);
                
                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_attacker, _victim, _weaponName);

                Event _event = new Event(PlayerDamagedMsg.Timestamp, PlayerDamagedMsg.Category, _eventData);
                //MatchService.ConfigureMatchSetup(PlayerKilledMsg, _match);
            }
        }
        public void ProcessPlayerKilled(Rtech.Liveapi.PlayerKilled PlayerKilledMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                //MatchService.ConfigureMatchSetup(PlayerKilledMsg, _match);
            }
        }
    }
}
