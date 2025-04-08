using AndeanSystems;
using Rtech.Liveapi;
using System.Text.Json;
using Newtonsoft.Json.Linq;
using AndeanWebUI.Services;
using AndeanClass.Services.Utilities;
using static AndeanClass.Controllers.AndeanClassController;
using Newtonsoft.Json;

namespace AndeanClass.Services
{
    public static class MatchService
    {

        // 共通の初期化処理：Initメッセージに応じたCustomMatch生成
        public static void CreateCustomMatch(Init initMsg)
        {
            // Unix時間をDateTimeに変換
            long unixTimeSeconds = (long)initMsg.Timestamp;
            long unixTimeMillis = unixTimeSeconds * 1000;
            DateTime date = DateTimeOffset.FromUnixTimeMilliseconds(unixTimeMillis).LocalDateTime;
            string formattedDate = date.ToString("yyyy-MM-dd-HH-mm-ss");

            // CustomMatchを生成
            _match = new CustomMatch(formattedDate);
            _match.SetGameVersion(initMsg.GameVersion);
            Console.WriteLine($"[MatchService] CustomMatch 初期化完了：{formattedDate}");
        }

        // 共通のマッチセットアップ処理
        public static void ConfigureMatchSetup(MatchSetup matchSetupMsg)
        {
            ArgumentNullException.ThrowIfNull(_match);

            // マッチセットアップメッセージから必要な情報を取得
            var startingLoadout = matchSetupMsg.StartingLoadout;
            var weapons = startingLoadout.Weapons;
            var equipment = startingLoadout.Equipment;
            var datacenter = matchSetupMsg.Datacenter;

            // 武器情報の処理
            if (weapons != null && weapons.Count != 0)
            {
                foreach (var weapon in weapons)
                {
                    string weaponLabel = weapon.Item;
                    var splitWeaponName = ItemUtilities.ReturnSplitBracketParts(weaponLabel);
                    string name = splitWeaponName != null ? splitWeaponName[0] : weaponLabel;
                    string? weaponId = ItemUtilities.ReturnItemId("Weapon", name);
                    if (weaponId != null)
                    {
                        name = weaponId;
                    }
                    _match.StartingLoadout.AddOrUpdateWeapon(name, weaponLabel, ItemUtilities.ReturnLevel(weaponLabel));
                }
            }

            // 装備品情報の処理
            if (equipment != null && equipment.Count != 0)
            {
                foreach (var eq in equipment)
                {
                    var splitItemName = ItemUtilities.ReturnSplitBracketParts(eq.Item);
                    string name = splitItemName != null ? splitItemName[0] : eq.Item;
                    string? itemId = ItemUtilities.ReturnItemId("Item", name);
                    if (itemId != null)
                    {
                        name = itemId;
                    }
                    _match.StartingLoadout.AddOrUpdateItem(name, (uint)eq.Quantity, ItemUtilities.ReturnLevel(eq.Item));
                }
            }

            // マッチの基本設定を更新
            _match.SetMatchSetup(matchSetupMsg.Map,
                                matchSetupMsg.PlaylistName,
                                matchSetupMsg.PlaylistDesc,
                                matchSetupMsg.AimAssistOn,
                                matchSetupMsg.AnonymousMode,
                                matchSetupMsg.ServerId);

            // データセンター情報を更新
            _match.Datacenter.Update(datacenter.Timestamp,
                                    datacenter.Category,
                                    datacenter.Name);

            // マップ情報を含めたマッチ名を設定
            _match.SetMatchName($"{_match.MatchName}-{matchSetupMsg.Map}");

            // プレイリスト名から最大プレイヤー数とチーム数を設定
            var playlistName = ItemUtilities.ReturnSplitBracketParts(matchSetupMsg.PlaylistName);
            if (playlistName == null)
            {
                _match.SetMaxPlayersAndTeams(matchSetupMsg.PlaylistName);
            }
            else
            {
                _match.SetMaxPlayersAndTeams(playlistName[0], playlistName[1]);
            }
        }

        public static async void UpdateGameStatus(GameStateChanged gameStateChangedMsg)
        {
            ArgumentNullException.ThrowIfNull(_match);

            // _match の state を設定する
            _match.SetState(gameStateChangedMsg.State);

            // ControlPanelHubService にゲーム状態を送信する
            ControlPanelHubService.SetLiveAPIStatus("Playing", gameStateChangedMsg.State).Wait();

            if (gameStateChangedMsg.State == "Prematch")
            {
                // teamRanking と _ringEvents を初期化
                _teamRanking.Clear();
                _ringEvents.Clear();

                // _match.MaxTeams + 1 から 2 まで逆順に処理
                for (uint i = _match.MaxTeams + 1; i >= 2; i--)
                {
                    Team? team = _match.GetTeam(i);
                    // チーム内のプレイヤーがいない場合、ranks に追加
                    if (team != null && team.Players.Count == 0)
                    {
                        _teamRanking.Add(i);
                    }
                }
            }

            if (gameStateChangedMsg.State == "Playing")
            {
                // 開始タイムスタンプを設定
                _match.SetStartTimeStamp(gameStateChangedMsg.Timestamp);
            }

            if (gameStateChangedMsg.State == "Postmatch")
            {
                ControlPanelHubService.SetLiveAPIStatus("LobbyJoin", "InLobby").Wait();

                // Packetを確認し、整形して保存する
                foreach (var packet in _packetList.OrderBy(kvp => kvp.Key).Select(kvp => kvp.Value))
                {
                    // パケットを更新する
                    if ((packet.Data.Count + packet.Events.Count) != 0 && packet.T > 2)
                    {
                        // packet.tが整数かどうかをチェック
                        // if (packet.T % 1 == 0)
                        // {
                        //     if (packet.Events.Count != 0)
                        //     {
                        //         // 最初のイベントのtimestampから試合開始時刻を引く
                        //         packet.T = packet.Events[0].Timestamp - _match.StartTimeStamp;
                        //         CheckPacketData(packet, _playerData);
                        //         _match.AddPacketElement(packet.T.ToString(), (JObject)packet.ToJson());
                        //     }
                        //     else
                        //     {
                        //         Console.WriteLine("[UPDATE] Packet is skipped");
                        //     }
                        // }
                        // else
                        // {
                        //     CheckPacketData(packet, _playerData);
                        //     _match.AddPacketElement(packet.T.ToString(), (JObject)packet.ToJson());
                        // }

                        MatchUtilities.CheckPacketData(packet, _playerData);
                        _match.AddPacketElement(packet.T.ToString(), packet.ToShortPacket());
                    }
                }

                // _ringEvents を 2 つずつ処理する
                for (int i = 0; i < _ringEvents.Count; i += 2)
                {
                    if ((i + 1) != _ringEvents.Count)
                    {
                        // startRing, startRing_t, endRing を取得
                        Event startRing = _ringEvents[i].Item2;
                        string startRing_t = _ringEvents[i].Item1;
                        Event endRing = _ringEvents[i + 1].Item2;

                        if (startRing.Category == "ringStartClosing" &&
                            endRing.Category == "ringFinishedClosing" &&
                            startRing.Data["Stage"] == endRing.Data["Stage"])
                        {
                            // matchBase.PacketLists[startRing_t].Events 内の "ringStartClosing" イベントを検索し、endCenter を設定
                            if (_match.PacketLists.TryGetValue(startRing_t, out ShortPacket? packet))
                            {
                                JObject? packetJson = (JObject?)JsonConvert.SerializeObject(packet);

                                if (packetJson["Events"] != null)
                                {
                                    JToken? eventToken = packetJson["Events"]?.FirstOrDefault(e => (string)e["Category"] == "ringStartClosing");
                                    if (eventToken != null)
                                    {
                                        // endRing.Data.Center のコピーを endCenter に設定（配列のコピー）
                                        eventToken["endCenter"] = JArray.FromObject((double[])((double[])endRing.Data["Center"]).Clone());
                                    }
                                }
                            }
                        }
                    }
                }

                // _match.Teams 内の各チームについて処理
                foreach (var kvp in _match.Teams)
                {
                    uint id = kvp.Key;
                    // ranks に含まれておらず、かつ id が 0, 1 でない場合
                    if (!_teamRanking.Contains(id) && id != 0 && id != 1)
                    {
                        _teamRanking.Add(id);
                    }
                }

                // ranks リストに基づいて各チームのランクを設定する
                // 必要に応じて ranks をソート（ここでは昇順と仮定）
                for (int i = 0; i < _teamRanking.Count; i++)
                {
                    Team team = _match.GetTeam(_teamRanking[i]);
                    team.SetRank((uint)(_teamRanking.Count - i));
                }

                // 更新内容を保存
                await FileOutputService.WriteToFileAsync(config.Output, $"{_match.MatchName}.json", System.Text.Json.JsonSerializer.Serialize(_match, new JsonSerializerOptions { WriteIndented = true }), FileWriteMode.Overwrite);
            }
        }


        public static void ProcessGameEnd(MatchStateEnd matchStateEndMsg)
        {
            ArgumentNullException.ThrowIfNull(_match);

            List<uint> _winnerTeams = new List<uint>();

            // プレイヤーの更新
            for (int i = 0; i < matchStateEndMsg.Winners.Count; i++)
            {
                var _MsgPlayer = matchStateEndMsg.Winners[i];

                PlayerService.CreateOrUpdatePlayer(_match, _MsgPlayer);

                if (!_winnerTeams.Contains(_MsgPlayer.TeamId))
                {
                    _winnerTeams.Add(_MsgPlayer.TeamId);
                }
            }

            // ゲーム終了時のタイムスタンプを設定
            _match.SetEndTimeStamp(matchStateEndMsg.Timestamp);

            // マッチの状態を更新
            _match.SetState(matchStateEndMsg.State);

            // イベントデータを作成
            Dictionary<string, object> _eventData = new Dictionary<string, object>
            {
                { "winnerTeams", _winnerTeams },
                { "state", matchStateEndMsg.State }
            };

            Event _event = new Event(matchStateEndMsg.Timestamp, matchStateEndMsg.Category, _eventData);
            _match.AddEventElement(_event);
            _packetList[_updateTime].AddEvent(_event);
        }

        public static void ProcessTeamEliminated(SquadEliminated squadEliminatedMsg)
        {
            ArgumentNullException.ThrowIfNull(_match);

            var _MsgPlayers = squadEliminatedMsg.Players;
            var _teamId = _MsgPlayers[0].TeamId;
            Team _team = _match.GetTeam(_teamId);

            foreach (var msg_player in _MsgPlayers)
            {
                Player _player = PlayerService.CreateOrUpdatePlayer(_match, msg_player);
                _player.SetStatus("eliminated");
            }

            // ランキングにチームIDが含まれていない場合、追加
            if (!_teamRanking.Contains(_teamId))
            {
                _teamRanking.Add(_teamId);
            }

            // イベントデータを作成
            Dictionary<string, object> _eventData = new Dictionary<string, object>
            {
                { "teamId", _teamId },
                { "lastPlayer", _team.LastDeath },
                { "destroyer", _team.DestroyerId }
            };
            Event _event = new Event(squadEliminatedMsg.Timestamp, squadEliminatedMsg.Category, _eventData);
            _match.AddEventElement(_event);
            _packetList[_updateTime].AddEvent(_event);
        }
        public static void ProcessRingStartClosing(RingStartClosing ringStartClosingMsg)
        {
            ArgumentNullException.ThrowIfNull(_match);

            // AndeanのRingクラスに追加する
            var rings = _match.Rings;
            if (rings.Count == 0)
            {
                _match.AddRingElement(new Ring(
                    ringStartClosingMsg.Timestamp,
                    ringStartClosingMsg.Category,
                    ringStartClosingMsg.Stage,
                    ringStartClosingMsg.Center,
                    ringStartClosingMsg.CurrentRadius,
                    ringStartClosingMsg.ShrinkDuration,
                    _match.MapOffset
                ));
            }
            rings[rings.Count - 1].UpdateRing(
                ringStartClosingMsg.Timestamp,
                ringStartClosingMsg.Category,
                ringStartClosingMsg.CurrentRadius,
                ringStartClosingMsg.ShrinkDuration,
                ringStartClosingMsg.EndRadius,
                _match.MapOffset
            );

            // AndeanのEventクラスに追加する

            Dictionary<string, object> _eventData = new Dictionary<string, object>
            {
                ["stage"] = ringStartClosingMsg.Stage,
                ["startCenter"] = new double[] {
                    (ringStartClosingMsg.Center.X + _match.MapOffset[0]) / _match.MapOffset[2],
                    (ringStartClosingMsg.Center.Y + _match.MapOffset[1]) / _match.MapOffset[2],
                    ringStartClosingMsg.Center.Z / _match.MapOffset[2]
                },
                ["currentradius"] = ringStartClosingMsg.CurrentRadius,
                ["endradius"] = ringStartClosingMsg.EndRadius,
                ["shrinkduration"] = ringStartClosingMsg.ShrinkDuration,
            };

            Event _event = new Event(ringStartClosingMsg.Timestamp, ringStartClosingMsg.Category, _eventData);
            _match.AddEventElement(_event);

            Packet packet = _packetList[_updateTime];

            // AndeanのPacketクラスに追加する
            packet.AddEvent(_event);

            // リングイベントが発生した時間を記録する
            _ringEvents.Add((packet.T.ToString(), _event));
        }

        public static void ProcessRingFinishedClosing(RingFinishedClosing ringFinishedClosingMsg)
        {
            ArgumentNullException.ThrowIfNull(_match);

            // AndeanのRingクラスに追加する
            _match.AddRingElement(new Ring(
                ringFinishedClosingMsg.Timestamp,
                ringFinishedClosingMsg.Category,
                ringFinishedClosingMsg.Stage,
                ringFinishedClosingMsg.Center,
                ringFinishedClosingMsg.CurrentRadius,
                ringFinishedClosingMsg.ShrinkDuration,
                _match.MapOffset
            ));

            // AndeanのEventクラスに追加する

            Dictionary<string, object> _eventData = new Dictionary<string, object>
            {
                ["stage"] = ringFinishedClosingMsg.Stage,
                ["startCenter"] = new double[] {
                    (ringFinishedClosingMsg.Center.X + _match.MapOffset[0]) / _match.MapOffset[2],
                    (ringFinishedClosingMsg.Center.Y + _match.MapOffset[1]) / _match.MapOffset[2],
                    ringFinishedClosingMsg.Center.Z / _match.MapOffset[2]
                },
                ["currentradius"] = ringFinishedClosingMsg.CurrentRadius,
                ["shrinkduration"] = ringFinishedClosingMsg.ShrinkDuration,
            };

            Event _event = new Event(ringFinishedClosingMsg.Timestamp, ringFinishedClosingMsg.Category, _eventData);
            _match.AddEventElement(_event);

            Packet packet = _packetList[_updateTime];

            // AndeanのPacketクラスに追加する
            packet.AddEvent(_event);

            // リングイベントが発生した時間を記録する
            _ringEvents.Add((packet.T.ToString(), _event));
        }
    }
}
