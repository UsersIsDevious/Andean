using Andean.AndeanClass.Services.Utilities;
using AndeanClass.Services;

namespace AndeanClass.Controllers
{
    public partial class AndeanClassController
    {
        public void ProcessArenasItemSelected(Rtech.Liveapi.ArenasItemSelected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
            }
        }
        public void ProcessArenasItemDeselected(Rtech.Liveapi.ArenasItemDeselected Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
            }
        }
        public void ProcessInventoryPickUp(Rtech.Liveapi.InventoryPickUp Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
            }
        }
        public void ProcessInventoryDrop(Rtech.Liveapi.InventoryDrop Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
            }
        }
        public void ProcessInventoryUse(Rtech.Liveapi.InventoryUse Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
            }
        }
        public void ProcessGrenadeThrown(Rtech.Liveapi.GrenadeThrown Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
            }
        }
        public void ProcessBlackMarketAction(Rtech.Liveapi.BlackMarketAction Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

            }
        }

        public void ProcessAmmoUsed(Rtech.Liveapi.AmmoUsed Msg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
                Player player = PlayerService.CreateOrUpdatePlayer(_match, Msg.Player);

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
