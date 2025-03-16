using AndeanClass.Services;
using AndeanClass;

namespace AndeanClass.Controllers
{
    public partial class AndeanClassController
    {
        //途中まで作成未完成
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

                Player _attacker = PlayerService.CreateOrUpdatePlayer(_match, PlayerDamagedMsg.Attacker);
                Player _victim = PlayerService.CreateOrUpdatePlayer(_match, PlayerDamagedMsg.Victim);

                Dictionary<string, object> _eventData = EventService.CreateEventDataForInteraction(_attacker, _victim, _weaponName);

                Event _event = new Event(PlayerDamagedMsg.Timestamp, PlayerDamagedMsg.Category, _eventData);
                //MatchService.ConfigureMatchSetup(PlayerKilledMsg, _match);
            }
        }
        //
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
