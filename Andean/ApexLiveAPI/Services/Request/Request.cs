using Rtech.Liveapi; // Request, CustomMatch_CreateLobby, CustomMatch_JoinLobby, etc.
using Google.Protobuf;
using Andean.WebsocketServer;

namespace ApexLiveAPI.Request
{
    public static class Request
    {

        /// <summary>
        /// 共通のリクエスト送信処理
        /// </summary>
        private static void SendRequestAsync(Rtech.Liveapi.Request req, CancellationToken cancellationToken, bool ack = true)
        {
            req.WithAck = ack;
            byte[] requestBytes = req.ToByteArray();

            try
            {
                // 返答待ちではなく、単に送信キューに追加して送信する
                WebSocketServer.SendMessageViaAuthorizedClient(requestBytes, cancellationToken);
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine("Error sending request via authorized WebSocket client", ex);
            }
        }


        /// <summary>
        /// カメラ変更リクエストを送信
        /// type: "poi" または "name"
        /// value: POI の場合は文字列でキー、name の場合はプレイヤー名
        /// </summary>
        public static async void ChangeCameraAsync(string type, string value, CancellationToken cancellationToken, bool ack = true)
        {
            var req = new Rtech.Liveapi.Request();
            var changeCamera = new ChangeCamera();

            if (type.Equals("poi", StringComparison.OrdinalIgnoreCase))
            {
                // ここで PlayerOfInterest 型の値を取得
                if (Enum.TryParse<PlayerOfInterest>(value, true, out var poiValue))
                {
                    // changeCamera.Poi の型が Rtech.Liveapi.PlayerOfInterest と仮定
                    changeCamera.Poi = poiValue;
                }
                else
                {
                    Console.WriteLine(value, "Invalid POI value: {Value}");
                }
            }
            else if (type.Equals("name", StringComparison.OrdinalIgnoreCase))
            {
                changeCamera.Name = value;
            }

            req.ChangeCam = changeCamera;
            SendRequestAsync(req, cancellationToken, ack);
        }

        /// <summary>
        /// ポーズ切り替えリクエストを送信
        /// preTimer: ポーズ前のタイマー値
        /// </summary>
        public static async void PauseToggleAsync(double preTimer, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var pauseToggle = new PauseToggle
            {
                PreTimer = (float)preTimer
            };
            req.PauseToggle = pauseToggle;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// カスタムマッチロビー作成リクエストを送信
        /// </summary>
        public static async void CreateLobbyAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var createLobby = new CustomMatch_CreateLobby();
            req.CustomMatchCreateLobby = createLobby;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// カスタムマッチロビー参加リクエストを送信
        /// token: ロビー参加トークン
        /// </summary>
        public static async void JoinLobbyAsync(string token, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var joinLobby = new CustomMatch_JoinLobby();
            joinLobby.RoleToken = token;
            req.CustomMatchJoinLobby = joinLobby;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// カスタムマッチロビー退出リクエストを送信
        /// </summary>
        public static async void LeaveLobbyAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var leaveLobby = new CustomMatch_LeaveLobby();
            req.CustomMatchLeaveLobby = leaveLobby;
            SendRequestAsync(req, cancellationToken);
        }
        /// <summary>
        /// 試合の準備完了状態を設定するリクエスト
        /// </summary>
        public static async void SetReadyAsync(bool ready, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var setReady = new CustomMatch_SetReady
            {
                IsReady = ready // 自動生成コードのプロパティに合わせる
            };
            req.CustomMatchSetReady = setReady;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// マッチメイキングの有効/無効を設定するリクエスト
        /// </summary>
        public static async void SetMatchmakingAsync(bool matchmaking, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var setMatchmaking = new CustomMatch_SetMatchmaking
            {
                Enabled = matchmaking
            };
            req.CustomMatchSetMatchmaking = setMatchmaking;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// チームを設定するリクエスト
        /// </summary>
        public static async void SetTeamAsync(int teamId, string targetHardwareName, string targetNucleushash, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var setTeam = new CustomMatch_SetTeam
            {
                TeamId = teamId,
                TargetHardwareName = targetHardwareName,
                TargetNucleusHash = targetNucleushash
            };
            req.CustomMatchSetTeam = setTeam;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// プレイヤーをキックするリクエスト
        /// </summary>
        public static async void KickPlayerAsync(string targetHardwareName, string targetNucleushash, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var kickPlayer = new CustomMatch_KickPlayer
            {
                TargetHardwareName = targetHardwareName,
                TargetNucleusHash = targetNucleushash
            };
            req.CustomMatchKickPlayer = kickPlayer;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// 試合設定を適用するリクエスト
        /// </summary>
        public static async void SetSettingsAsync(string playlistName, bool adminChat, bool teamRename, bool selfAssign, bool aimAssist, bool anonMode, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var setSettings = new CustomMatch_SetSettings
            {
                PlaylistName = playlistName,
                AdminChat = adminChat,
                TeamRename = teamRename,
                SelfAssign = selfAssign,
                AimAssist = aimAssist,
                AnonMode = anonMode
            };
            req.CustomMatchSetSettings = setSettings;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// チャットメッセージを送信するリクエスト
        /// </summary>
        public static async void SendChatAsync(string message, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var sendChat = new CustomMatch_SendChat
            {
                Text = message
            };
            req.CustomMatchSendChat = sendChat;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// ロビープレイヤー情報を取得するリクエスト
        /// </summary>
        public static async void GetLobbyPlayersAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var getLobbyPlayers = new CustomMatch_GetLobbyPlayers();
            req.CustomMatchGetLobbyPlayers = getLobbyPlayers;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// チーム名を設定するリクエスト
        /// </summary>
        public static async void SetTeamNameAsync(int teamId, string teamName, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var setTeamName = new CustomMatch_SetTeamName
            {
                TeamId = teamId,
                TeamName = teamName
            };
            req.CustomMatchSetTeamName = setTeamName;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// 試合設定を取得するリクエスト
        /// </summary>
        public static async void GetMatchSettingsAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var getSettings = new CustomMatch_GetSettings();
            req.CustomMatchGetSettings = getSettings;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// スポーンポイントを設定するリクエスト
        /// </summary>
        public static async void SetSpawnPointAsync(int teamId, int spawnPoint, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var setSpawnPoint = new CustomMatch_SetSpawnPoint
            {
                TeamId = teamId,
                SpawnPoint = spawnPoint
            };
            req.CustomMatchSetSpawnPoint = setSpawnPoint;
            SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// エンドリング除外を設定するリクエスト
        /// </summary>
        public static async void SetEndRingExclusionAsync(int exclusion, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var endRingExclusion = new CustomMatch_SetEndRingExclusion
            {
                SectionToExclude = (MapRegion)exclusion
            };
            req.CustomMatchSetEndRingExclusion = endRingExclusion;
            SendRequestAsync(req, cancellationToken);
        }
    }
}