using Rtech.Liveapi;
using AndeanClass.Services;
using AndeanClass.Services.Utilities;
using static AndeanClass.Services.PlayerService;

namespace AndeanClass.Controllers
{
    public static partial class AndeanClassController
    {
        public static void ProcessCharacterSelected(Rtech.Liveapi.CharacterSelected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                _eventData["character"] = LocalizationService.GetOriginalKey("legend_label", _player.Legend);

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }

        public static void ProcessPlayerConnected(Rtech.Liveapi.PlayerConnected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                _match.AddTeam(Msg.Player.TeamId, Msg.Player.TeamName);

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);

                _player.SetOnlineStatus(true);

                //Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(player).Get();

                //Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                //_match.AddEventElement(_event);
            }
        }
        public static void ProcessPlayerDisconnected(Rtech.Liveapi.PlayerDisconnected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);

                _player.SetOnlineStatus(false);

                //Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(player).Get();

                //Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                //_match.AddEventElement(_event);
            }
        }
        public static void ProcessPlayerStatChanged(Rtech.Liveapi.PlayerStatChanged Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);

                //Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(player).Get();

                //Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                //_match.AddEventElement(_event);
            }
        }
        public static void ProcessPlayerUltimateCharged(Rtech.Liveapi.PlayerUltimateCharged Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);
                _player.SetUltimateCharged(true);


                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                _eventData["linkedentity"] = Msg.LinkedEntity;

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public static void ProcessPlayerUpgradeTierChanged(Rtech.Liveapi.PlayerUpgradeTierChanged Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);
                _player.SetUpgradeLevel(Msg.Level);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public static void ProcessPlayerDamaged(Rtech.Liveapi.PlayerDamaged Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
                Event _event;
                string _weaponName = LocalizationService.GetOriginalKey("weapons_label", Msg.Weapon);
                bool penetrator = LocalizationService.CheckShieldPenetrator(_weaponName);
                uint _damageInflicted = Msg.DamageInflicted;

                Player _attacker;
                /**
                 * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
                 * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
                */
                if (Msg.Attacker.NucleusHash != "")
                {
                    _attacker = CreateOrUpdatePlayer(_match, Msg.Attacker);
                }
                else
                {
                    _attacker = WorldPlayer;
                }

                Player _victim = CreateOrUpdatePlayer(_match, Msg.Victim);

                // 攻撃者側の処理
                _attacker.AddDamageDealt(_damageInflicted, _weaponName, _victim.NucleusHash, _victim.Legend);
                _match.GetTeam(_attacker.TeamId).AddTotalDamageDealt(_damageInflicted);

                // 被害者側の処理
                _victim.AddDamageReceived(_damageInflicted, _weaponName, _attacker.NucleusHash, _attacker.Legend, LocalizationService.CheckShieldPenetrator(_weaponName));
                _match.GetTeam(_victim.TeamId).AddTotalDamageReceived(_damageInflicted);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_attacker, _victim, _weaponName);
                _eventData["damageinflicted"] = _damageInflicted;

                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);

                // packetへの追加は行っていないため、修正必須 @nitiyou
                // AddEventElementのタイミングでpacketへ自動追加してもいいと思う
            }
        }
      
        public static void ProcessPlayerKilled(Rtech.Liveapi.PlayerKilled Msg)
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
                Player _victim = CreateOrUpdatePlayer(_match, Msg.Victim);
                
                _victim.SetStatus("death");

                // 攻撃者
                Player _awardedto;

                /**
                 * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
                 * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
                */
                if (AwardedTo.NucleusHash != "")
                {
                    _awardedto = CreateOrUpdatePlayer(_match, AwardedTo);
                }
                else
                {
                    _awardedto = WorldPlayer;
                }

                // 攻撃者側の処理
                _awardedto.SetKills(_weaponName, _victim.NucleusHash, _victim.Legend);
                _match.GetTeam(_awardedto.TeamId).AddTotalKills();

                // 被害者側の処理
                _victim.SetKillsReceived(_weaponName, _awardedto.NucleusHash, _awardedto.Legend);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_awardedto, _victim, _weaponName);
                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);

                _match.AddEventElement(_event);
            }
        }
      
        public static void ProcessPlayerDowned(Rtech.Liveapi.PlayerDowned Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Event _event;
                string _weaponName = LocalizationService.GetOriginalKey("weapons_label", Msg.Weapon);

                // 攻撃者
                Player _attacker;

                Rtech.Liveapi.Player Attacker = Msg.Attacker;

                // 被害者
                Player _victim = CreateOrUpdatePlayer(_match, Msg.Victim);
              
                /**
                 * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
                 * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
                */
                if (Attacker.NucleusHash != "")
                {
                    _attacker = CreateOrUpdatePlayer(_match, Msg.Attacker);
                }
                else
                {
                    _attacker = WorldPlayer;
                }

                // 攻撃者側の処理
                _attacker.SetDowns(_weaponName, _victim.NucleusHash, _victim.Legend);
                _match.GetTeam(_attacker.TeamId).AddTotalDowns();

                // 被害者側の処理
                _victim.SetDownsReceived(_weaponName, _attacker.NucleusHash, _attacker.Legend);
                _victim.SetStatus("down");

                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_attacker, _victim, _weaponName);

                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);

                _match.AddEventElement(_event);
            }
        }
      
        public static void ProcessPlayerAssist(Rtech.Liveapi.PlayerAssist Msg)
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

                Player _victim = CreateOrUpdatePlayer(_match, Msg.Victim);

                Player _assistant;
                /**
                 * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
                 * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
                */
                if (Assistant.NucleusHash != "")
                {
                    _assistant = CreateOrUpdatePlayer(_match, Msg.Assistant);
                }
                else
                {
                    _assistant = WorldPlayer;
                }

                // 攻撃者側の処理
                _assistant.SetKillAssists(_weaponName, _victim.NucleusHash, _victim.Legend);
                _match.GetTeam(_assistant.TeamId).AddTotalKillAssists();

                // 被害者側の処理
                _victim.SetKillAssistsReceived(_weaponName, _assistant.NucleusHash, _assistant.Legend);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_assistant, _victim, _weaponName);

                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);

                _match.AddEventElement(_event);
            }
        }
        public static void ProcessGibraltarShieldAbsorbed(Rtech.Liveapi.GibraltarShieldAbsorbed Msg)
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
                Player _victim = CreateOrUpdatePlayer(_match, Msg.Victim);
                _victim.AddGibraltarShieldAbsorbed(Msg.DamageInflicted);

                // 攻撃者側
                Player _attacker;

                /**
                 * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
                 * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
                */
                if (Attacker.NucleusHash != "")
                {
                    _attacker = CreateOrUpdatePlayer(_match, Attacker);
                }
                else
                {
                    _attacker = WorldPlayer;
                }

                // (@_#_@) シールド貫通武器かの判定が武器が取れない為未実装　@ConeCone
                // -> そもそもシールドに対してのみ攻撃しているから、シールド貫通武器の判定は不要
                _victim.AddDamageReceived(Msg.DamageInflicted, "Unknown by GibraltarShieldAbsorbed", _attacker.NucleusHash, _attacker.Legend);
                _attacker.AddDamageDealt(Msg.DamageInflicted, "Unknown by GibraltarShieldAbsorbed", _victim.NucleusHash, _victim.Legend);

                // チームの合計に加算
                _match.GetTeam(_attacker.TeamId).AddTotalDamageDealt(Msg.DamageInflicted);
                _match.GetTeam(_victim.TeamId).AddTotalDamageReceived(Msg.DamageInflicted);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_attacker, _victim);
                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);

                _match.AddEventElement(_event);
            }
        }
      
        public static void ProcessRevenantForgedShadowDamaged(Rtech.Liveapi.RevenantForgedShadowDamaged Msg)
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
                Player _victim = CreateOrUpdatePlayer(_match, Msg.Victim);
                _victim.AddGibraltarShieldAbsorbed(Msg.DamageInflicted);

                // 攻撃者側
                Player _attacker;

                /**
                 * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
                 * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
                */
                if (Attacker.NucleusHash != "")
                {
                    _attacker = CreateOrUpdatePlayer(_match, Attacker);
                }
                else
                {
                    _attacker = WorldPlayer;
                }

                // (@_#_@) シールド貫通武器かの判定が武器が取れない為未実装　@ConeCone
                // -> そもそもシールドに対してのみ攻撃しているから、シールド貫通武器の判定は不要
                _victim.AddDamageReceived(Msg.DamageInflicted, "Unknown by RevenantForgedShadowDamaged", _attacker.NucleusHash, _attacker.Legend);
                _attacker.AddDamageDealt(Msg.DamageInflicted, "Unknown by RevenantForgedShadowDamaged", _victim.NucleusHash, _victim.Legend);

                // チームの合計に加算
                _match.GetTeam(_attacker.TeamId).AddTotalDamageDealt(Msg.DamageInflicted);
                _match.GetTeam(_victim.TeamId).AddTotalDamageReceived(Msg.DamageInflicted);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_attacker, _victim);
                _event = new Event(Msg.Timestamp, Msg.Category, _eventData);

                _match.AddEventElement(_event);
            }
        }
      
        public static void ProcessPlayerRespawnTeam(Rtech.Liveapi.PlayerRespawnTeam Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
              
                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);
                List<Dictionary<string, object>> _respawnedTeammates = new List<Dictionary<string, object>>();

                foreach (Rtech.Liveapi.Player RespawnPlayer in Msg.RespawnedTeammates)
                {
                    Player _respawnPlayer = CreateOrUpdatePlayer(_match, RespawnPlayer);
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
      
        public static void ProcessPlayerRevive(Rtech.Liveapi.PlayerRevive Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);
                Player _revived = CreateOrUpdatePlayer(_match, Msg.Revived);

                _revived.SetStatus("alive");
                _revived.SetCanRevive(false);
                _match.GetTeam(_revived.TeamId).AddTotalRevives();

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                _eventData["revived"] = EventService.CreateEventDataForPlayer(_revived).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public static void ProcessLegendUpgradeSelected(Rtech.Liveapi.LegendUpgradeSelected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);
                //_player.SetNewLevel(Msg.Level, Msg.UpgradeName, Msg.UpgradeDesc, "何かが入るらしい");

                string upgradeName = Msg.UpgradeName;
                string upgradeDesc = Msg.UpgradeDesc;

                // selectedにはローカライズ用に、左右どちらのアップグレードが選択されたかが入る
                string selected = LocalizationService.GetLegendUpgradeSide(Msg.Player.Character, Msg.Level.ToString(), upgradeName, upgradeDesc);
                _player.SetNewLevel(Msg.Level, upgradeName, upgradeDesc, selected);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                _eventData["character"] = _player.Legend;
                _eventData["level"] = Msg.Level;
                _eventData["selected"] = selected;

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
      
        public static void ProcessZiplineUsed(Rtech.Liveapi.ZiplineUsed Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);

                _player.AddZiplineUseCount();

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                _eventData["linkedentity"] = Msg.LinkedEntity;

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
      
        public static void ProcessWraithPortal(Rtech.Liveapi.WraithPortal Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);

                _player.AddWraithPortalUseCount();

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public static void ProcessWarpGateUsed(Rtech.Liveapi.WarpGateUsed Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);

                _player.AddWarpGateUseCount();

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public static void ProcessWeaponSwitched(Rtech.Liveapi.WeaponSwitched Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);
                _player.InHand = Msg.NewWeapon;

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                _eventData["oldweapon"] = Msg.OldWeapon;
                _eventData["newweapon"] = Msg.NewWeapon;

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public static void ProcessPlayerAbilityUsed(Rtech.Liveapi.PlayerAbilityUsed Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);

                string[]? ability = ItemUtilities.ReturnSplitBracketParts(Msg.LinkedEntity);
                if (ability == null)
                {
                    throw new InvalidOperationException("LinkedEntityが不正です。");
                }

                string character = _player.Legend;
                string abilityType = ability[0];
                string abilityName = LocalizationService.GetLegendAbilityName(character, abilityType, ability[1]);

                if (abilityType == "Ultimate")
                {
                    _player.AddUltimateUseCount(abilityName);
                    _player.SetUltimateCharged(false);
                }
                else if (abilityType == "Tactical")
                {
                    _player.AddAbilityUseCount(abilityName);
                }

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                _eventData["linkedentity"] = abilityType;
                _eventData["character"] = character;

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }

        public static void ProcessBannerCollected(BannerCollected bannerCollectedMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                // プレイヤーインスタンスの作成または更新
                Player _player = CreateOrUpdatePlayer(_match, bannerCollectedMsg.Player);
                Player _collecter = CreateOrUpdatePlayer(_match, bannerCollectedMsg.Collected);

                // 統計データの更新
                _collecter.AddBannerCollectedCount();
                _player.SetCanRevive(true);

                // イベントデータの作成
                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                _eventData["collected"] = EventService.CreateEventDataForPlayer(_collecter).Get();
                var eventObj = new Event(bannerCollectedMsg.Timestamp, bannerCollectedMsg.Category, _eventData);

                // イベントデータの追加
                _match.AddEventElement(eventObj);
            }
        }
    }
}
