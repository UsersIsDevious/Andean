using AndeanClass.Services;
using AndeanClass;
using Andean.Config;
using Andean.AndeanClass.Services.Utilities;
using System.Collections.Generic;

namespace AndeanClass.Controllers
{
    public partial class AndeanClassController
    {

        public void ProcessCharacterSelected(Rtech.Liveapi.CharacterSelected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                _eventData["character"] = _player.Legend;

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }

        public void ProcessPlayerConnected(Rtech.Liveapi.PlayerConnected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                _match.AddTeam(Msg.Player.TeamId,Msg.Player.TeamName);

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);

                _player.SetOnlineStatus(true);

                //Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(player).Get();

                //Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                //_match.AddEventElement(_event);
            }
        }
        public void ProcessPlayerDisconnected(Rtech.Liveapi.PlayerDisconnected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);

                _player.SetOnlineStatus(false);

                //Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(player).Get();

                //Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                //_match.AddEventElement(_event);
            }
        }
        public void ProcessPlayerStatChanged(Rtech.Liveapi.PlayerStatChanged Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);

                //Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(player).Get();

                //Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                //_match.AddEventElement(_event);
            }
        }
        public void ProcessPlayerUltimateCharged(Rtech.Liveapi.PlayerUltimateCharged Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);
                _player.SetUltimateCharged(true);


                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                _eventData["linkedentity"] = Msg.LinkedEntity;

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public void ProcessPlayerUpgradeTierChanged(Rtech.Liveapi.PlayerUpgradeTierChanged Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);
                _player.SetUpgradeLevel(Msg.Level);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        //(@_#_@)途中まで作成未完成 @ConeCone ヨロ！
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
                _match.AddEventElement(_event);

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
                    _awardedto = PlayerService.CreateOrUpdatePlayer(_match, AwardedTo);
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
        public void ProcessGibraltarShieldAbsorbed(Rtech.Liveapi.GibraltarShieldAbsorbed Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Event _event;


                //KillPointが入るplayer(Msg)
                Rtech.Liveapi.Player Attacker = Msg.Attacker;
                //被害者側
                Player _victim = PlayerService.CreateOrUpdatePlayer(_match, Msg.Victim);
                _victim.AddGibraltarShieldAbsorbed(Msg.DamageInflicted);

                // 攻撃者側
                Player _attacker;

                /**
                 * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
                 * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
                */
                if (Attacker.NucleusHash != "")
                {
                    _attacker = PlayerService.CreateOrUpdatePlayer(_match, Attacker);
                }
                else
                {
                    _attacker = WorldPlayer;
                }

                // (@_#_@) シールド貫通武器かの判定が武器が取れない為未実装　@ConeCone
                _victim.AddDamageReceived(Msg.DamageInflicted, "Unknown by GibraltarShieldAbsorbed",_attacker.NucleusHash,_attacker.Legend);

                _attacker.AddDamageDealt(Msg.DamageInflicted, "Unknown by GibraltarShieldAbsorbed", _victim.NucleusHash, _victim.Legend);

                // (@_#_@) チームの合計に含めるべき？　@ConeCone
                //_match.GetTeam(_attacker.TeamId).AddTotalKills();

                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_attacker, _victim);
                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);

                _match.AddEventElement(_event);
            }
        }
        public void ProcessRevenantForgedShadowDamaged(Rtech.Liveapi.RevenantForgedShadowDamaged Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
                Event _event;


                //KillPointが入るplayer(Msg)
                Rtech.Liveapi.Player Attacker = Msg.Attacker;
                //被害者側
                Player _victim = PlayerService.CreateOrUpdatePlayer(_match, Msg.Victim);
                _victim.AddGibraltarShieldAbsorbed(Msg.DamageInflicted);

                // 攻撃者側
                Player _attacker;

                /**
                 * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
                 * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
                */
                if (Attacker.NucleusHash != "")
                {
                    _attacker = PlayerService.CreateOrUpdatePlayer(_match, Attacker);
                }
                else
                {
                    _attacker = WorldPlayer;
                }

                // (@_#_@) シールド貫通武器かの判定が武器が取れない為未実装　@ConeCone
                _victim.AddDamageReceived(Msg.DamageInflicted, "Unknown by RevenantForgedShadowDamaged", _attacker.NucleusHash, _attacker.Legend);

                _attacker.AddDamageDealt(Msg.DamageInflicted, "Unknown by RevenantForgedShadowDamaged", _victim.NucleusHash, _victim.Legend);

                // (@_#_@) チームの合計に含めるべき？　@ConeCone
                //_match.GetTeam(_attacker.TeamId).AddTotalKills();

                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_attacker, _victim);
                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);

                _match.AddEventElement(_event);
            }
        }
        public void ProcessPlayerRespawnTeam(Rtech.Liveapi.PlayerRespawnTeam Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);
                List<Dictionary<string,object>> _respawnedTeammates = new List<Dictionary<string, object>>();

                foreach (Rtech.Liveapi.Player RespawnPlayer in Msg.RespawnedTeammates)
                {
                    Player _respawnPlayer = PlayerService.CreateOrUpdatePlayer(_match,RespawnPlayer);
                    _respawnPlayer.SetStatus("alive");
                    _respawnedTeammates.Add(EventService.CreateEventDataForPlayer(_respawnPlayer).Get());
                    _match.GetTeam(_respawnPlayer.TeamId).AddTotalRespawns();
                }
                
                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                _eventData["respawnedteammatesList"] = _respawnedTeammates;

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public void ProcessPlayerRevive(Rtech.Liveapi.PlayerRevive Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);
                Player _revived = PlayerService.CreateOrUpdatePlayer(_match,Msg.Revived);

                _revived.SetStatus("alive");
                _revived.SetCanRevive(false);
                _match.GetTeam(_revived.TeamId).AddTotalRevives();

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                _eventData["revived"] = EventService.CreateEventDataForPlayer(_revived).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        //(@_#_@)途中まで作成未完成 @ConeCone ヨロ！
        public void ProcessLegendUpgradeSelected(Rtech.Liveapi.LegendUpgradeSelected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);
                //(@_#_@) selectedに何入れれば良いか分からんかった @ConeCone ヨロ！
                _player.SetNewLevel(Msg.Level, Msg.UpgradeName, Msg.UpgradeDesc, "何かが入るらしい");

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                _eventData["character"] = _player.Legend;
                _eventData["level"] = Msg.Level;
                //_eventData["selected"] = selected?


                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public void ProcessZiplineUsed(Rtech.Liveapi.ZiplineUsed Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);

                _player.AddZiplineUseCount();

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                
                _eventData["linkedentity"] = Msg.LinkedEntity;
                
                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public void ProcessWraithPortal(Rtech.Liveapi.WraithPortal Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);

                _player.AddWraithPortalUseCount();

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public void ProcessWarpGateUsed(Rtech.Liveapi.WarpGateUsed Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);

                _player.AddWarpGateUseCount();

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public void ProcessWeaponSwitched(Rtech.Liveapi.WeaponSwitched Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);
                _player.InHand = Msg.NewWeapon;

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                _eventData["oldweapon"] = Msg.OldWeapon;
                _eventData["newweapon"] = Msg.NewWeapon;

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public void ProcessPlayerAbilityUsed(Rtech.Liveapi.PlayerAbilityUsed Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);

                string[]? abilityType = ItemUtilities.ReturnSplitBracketParts(Msg.LinkedEntity);
                

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                //_eventData["linkedentity"] = linkedentity ?;
                //_eventData["character"] = character ?;

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
    }
}
