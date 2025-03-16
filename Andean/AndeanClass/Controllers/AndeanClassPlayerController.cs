using AndeanClass.Services;
using AndeanClass;

namespace AndeanClass.Controllers
{
    public partial class AndeanClassController
    {
        //途中まで作成未完成 @ConeCone ヨロ！
        public void ProcessPlayerDamaged(Rtech.Liveapi.PlayerDamaged Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
                Event _event;
                string _weaponName = LocalizationService.GetOriginalKey("weapons_label", Msg.Weapon);
                int _damageInflicted = (int)Msg.DamageInflicted;

                Player _attacker = PlayerService.CreateOrUpdatePlayer(_match, Msg.Attacker);
                Player _victim = PlayerService.CreateOrUpdatePlayer(_match, Msg.Victim);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_attacker, _victim, _weaponName);

                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                //MatchService.ConfigureMatchSetup(PlayerKilledMsg, _match);
            }
        }
        public void ProcessPlayerKilled(Rtech.Liveapi.PlayerKilled Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Event _event;

                string _weaponName = LocalizationService.GetOriginalKey("weapons_label", Msg.Weapon);
                
                //KillPointが入るplayer(Msg)
                Rtech.Liveapi.Player AwardedTo = Msg.AwardedTo;
                //被害者側
                Player _victim = PlayerService.CreateOrUpdatePlayer(_match, Msg.Victim);
                _victim.SetStatus("death");

                // 攻撃者側
                Player _awardedto;

                /**
                 * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
                 * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
                */
                if (AwardedTo.NucleusHash != "")
                {
                    _awardedto = PlayerService.CreateOrUpdatePlayer(_match, Msg.AwardedTo);
                }
                else
                {
                    _awardedto = WorldPlayer;
                }

                _victim.SetKillsReceived(_weaponName, AwardedTo.NucleusHash, AwardedTo.Character);

                _awardedto.SetKills(_weaponName, _victim.NucleusHash, _victim.Legend);
                
                _match.GetTeam(_awardedto.TeamId).AddTotalKills();
                
                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_awardedto, _victim, _weaponName);
                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                
                _match.AddEventElement(_event);
            }
        }
        public void ProcessPlayerDowned(Rtech.Liveapi.PlayerDowned Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Event _event;
                string _weaponName = LocalizationService.GetOriginalKey("weapons_label", Msg.Weapon);

                // 攻撃者側
                Player _attacker;

                Rtech.Liveapi.Player Attacker = Msg.Attacker;

                Player _victim = PlayerService.CreateOrUpdatePlayer(_match, Msg.Victim);
                /**
                 * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
                 * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
                */
                if (Attacker.NucleusHash != "")
                {
                    _attacker = PlayerService.CreateOrUpdatePlayer(_match, Msg.Attacker);
                }
                else
                {
                    _attacker = WorldPlayer;
                }
                _attacker.SetDowns(_weaponName, _victim.NucleusHash, _victim.Legend);
                _victim.SetDownsReceived(_weaponName,_attacker.NucleusHash,_attacker.Legend);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_attacker, _victim, _weaponName);

                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);

                _match.AddEventElement(_event);
            }
        }
        public void ProcessPlayerAssist(Rtech.Liveapi.PlayerAssist Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
                Event _event;
                string _weaponName = LocalizationService.GetOriginalKey("weapons_label", Msg.Weapon);

                //AssistantPointが入るplayer(Msg)
                Rtech.Liveapi.Player Assistant = Msg.Assistant;

                Player _victim = PlayerService.CreateOrUpdatePlayer(_match, Msg.Victim);

                Player _assistant;
                /**
                 * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
                 * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
                */
                if (Assistant.NucleusHash != "")
                {
                    _assistant = PlayerService.CreateOrUpdatePlayer(_match, Msg.Assistant);
                }
                else
                {
                    _assistant = WorldPlayer;
                }

                _victim.SetKillAssistsReceived(_weaponName, _assistant.NucleusHash, _assistant.Legend);
                _assistant.SetKillAssists(_weaponName, _victim.NucleusHash, _victim.Legend);

                _match.GetTeam(_victim.TeamId).AddTotalKillAssists();



                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_assistant, _victim, _weaponName);

                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);

                _match.AddEventElement(_event);
            }
        }

    }
}
