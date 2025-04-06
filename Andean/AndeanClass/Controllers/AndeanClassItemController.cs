using AndeanClass.Services;
using AndeanClass.Services.Utilities;
using static AndeanClass.Services.PlayerService;


namespace AndeanClass.Controllers
{
    public static partial class AndeanClassController
    {
        public static void ProcessArenasItemSelected(Rtech.Liveapi.ArenasItemSelected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
            }
        }
        public static void ProcessArenasItemDeselected(Rtech.Liveapi.ArenasItemDeselected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
            }
        }
        public static void ProcessInventoryPickUp(Rtech.Liveapi.InventoryPickUp Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);
                

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();
                
                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public static void ProcessInventoryDrop(Rtech.Liveapi.InventoryDrop Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);


                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public static void ProcessInventoryUse(Rtech.Liveapi.InventoryUse Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);


                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public static void ProcessGrenadeThrown(Rtech.Liveapi.GrenadeThrown Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);


                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);
            }
        }
        public static void ProcessBlackMarketAction(Rtech.Liveapi.BlackMarketAction Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                Player _player = CreateOrUpdatePlayer(_match, Msg.Player);


                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(_player).Get();

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);
                _match.AddEventElement(_event);

            }
        }

        public static void ProcessAmmoUsed(Rtech.Liveapi.AmmoUsed Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
                Player player = CreateOrUpdatePlayer(_match, Msg.Player);

                string AmmoType = Msg.AmmoType;
                uint AmountUsed = Msg.AmountUsed;

                player.Inventory.AddOrUpdateItem(AmmoType, -(AmountUsed), ItemUtilities.ReturnLevel(AmmoType));

                Dictionary<string, object> _eventData = EventService.CreateEventDataForPlayer(player).Get();

                _eventData["ammotype"] = AmmoType;
                _eventData["amountused"] = AmountUsed;
                _eventData["oldammocount"] = Msg.OldAmmoCount;
                _eventData["newammocount"] = Msg.NewAmmoCount;

                Event _event = new Event(Msg.Timestamp, Msg.Category, _eventData);

                _match.AddEventElement(_event);
            }
        }
    }
}
