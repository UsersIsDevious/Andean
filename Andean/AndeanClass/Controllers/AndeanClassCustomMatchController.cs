using AndeanClass.Services;
using Rtech.Liveapi;

namespace AndeanClass.Controllers
{
    public static partial class AndeanClassController
    {
        public static void ProcessObserverSwitched(ObserverSwitched observerSwitchedMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                if (_packetList.Count == 0)
                {
                    return;
                }

                Packet packet = _packetList[_updateTime];

                var targetPlayerList = observerSwitchedMsg.TargetTeam;
                Dictionary<string, int> keepedIds = new Dictionary<string, int>();
                // _packetList[_updateTime].dataの各要素のidをキーとしてインデックスを保持する
                for (int i = 0; i < packet.Data.Count; i++)
                {
                    // _packetList[_updateTime].data[i].idの型がstringであると仮定
                    keepedIds[packet.Data[i].id] = i;
                }

                for (int i = 0; i < targetPlayerList.Count; i++)
                {
                    var _msgTarget = targetPlayerList[i];

                    // AndeanのPlayerクラスに追加する
                    Player _player = PlayerService.CreateOrUpdatePlayer(_match, _msgTarget);

                    // 追加するdataを作成する
                    var data = EventService.CreateEventDataForPlayer(_player);

                    // AndeanのPacketクラスに追加する
                    if (!keepedIds.ContainsKey(_msgTarget.NucleusHash))
                    {
                        packet.AddData(data);
                    }
                    else
                    {
                        packet.UpdateData(keepedIds[_msgTarget.NucleusHash], data);
                    }
                }
            }
        }
    }
}
