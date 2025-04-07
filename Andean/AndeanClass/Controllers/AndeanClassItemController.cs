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

                string _itemName = Msg.Item;
                int quantity = Msg.Quantity;

                Dictionary<string, object> eventData = ItemUtilities.InventoryOperation(_player, _itemName, quantity);
                Event _event = new Event(Msg.Timestamp, Msg.Category, eventData);

                _match.AddEventElement(_event);
                _packetList[_updateTime].AddEvent(_event);
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

                string _itemName = Msg.Item;
                int quantity = -Msg.Quantity;

                Dictionary<string, object> eventData = ItemUtilities.InventoryOperation(_player, _itemName, quantity);
                eventData["extradataList"] = Msg.ExtraData;
                Event _event = new Event(Msg.Timestamp, Msg.Category, eventData);

                _match.AddEventElement(_event);
                _packetList[_updateTime].AddEvent(_event);
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

                string _itemName = Msg.Item;
                int quantity = -Msg.Quantity;

                // アイテムラベルとレベルを配列で取得
                string[]? _itemData = ItemUtilities.ReturnSplitBracketParts(_itemName);
                // アイテムラベルを取得
                // アイテムラベルがnullの場合は、分割前のアイテム名をそのまま使用
                string _itemLabel = (_itemData != null) ? _itemData[0] : _itemName;
                // アイテムor武器のIDを取得
                string? _itemId = ItemUtilities.ReturnItemId("Item", _itemLabel);

                uint healHealth = 0;
                uint rechargeShield = 0;

                if (_itemId != null)
                {
                    uint healthShortage = _player.MaxHealth - _player.CurrentHealth;
                    uint shieldShortage = _player.ShieldMaxHealth - _player.ShieldHealth;
                    switch (_itemId)
                    {
                        case "health_pickup_combo_small":
                            healHealth = (25 < shieldShortage)? 25 : shieldShortage;
                            break;
                        case "health_pickup_combo_large":
                            rechargeShield = shieldShortage;
                            break;
                        case "health_pickup_health_small":
                            healHealth = (25 < healthShortage) ? 25 : healthShortage;
                            break;
                        case "health_pickup_health_large":
                            rechargeShield = healthShortage;
                            break;
                        case "health_pickup_combo_full":
                            healHealth = healthShortage;
                            rechargeShield = shieldShortage;
                            break;
                        default:
                            break;
                    }
                }
                _player.UpdateHealthAndShields(_player.CurrentHealth + healHealth, _player.MaxHealth, _player.ShieldHealth + rechargeShield, _player.ShieldMaxHealth);
                _player.AddTotalPlayerHealing(healHealth, rechargeShield);
                _match.GetTeam(_player.TeamId).AddTotalTeamHealing(healHealth, rechargeShield);

                Dictionary<string, object> eventData = ItemUtilities.InventoryOperation(_player, _itemName, quantity);
                Event _event = new Event(Msg.Timestamp, Msg.Category, eventData);

                _match.AddEventElement(_event);
                _packetList[_updateTime].AddEvent(_event);
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
