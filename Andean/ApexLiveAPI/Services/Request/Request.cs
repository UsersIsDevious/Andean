using Google.Protobuf;
using Rtech.Liveapi; // Request, CustomMatch_CreateLobby, CustomMatch_JoinLobby, etc.
using Andean.WebsocketServer;

namespace ApexLiveAPI.Request
{
    public class Request
    {
        private readonly WebSocketServer _wsServer;
        private readonly ILogger<Request> _logger;

        public Request(WebSocketServer wsServer, ILogger<Request> logger)
        {
            _wsServer = wsServer;
            _logger = logger;
        }

        /// <summary>
        /// 共通のリクエスト送信処理
        /// </summary>
        private async Task<Response?> SendRequestAsync(Rtech.Liveapi.Request req, CancellationToken cancellationToken)
        {
            req.WithAck = true;
            byte[] requestBytes = req.ToByteArray();

            try
            {
                byte[] responseBytes = await _wsServer.SendRequestViaAuthorizedClientAsync(requestBytes, cancellationToken);
                var response = Response.Parser.ParseFrom(responseBytes);
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error sending request via authorized WebSocket client");
                return null;
            }
        }

        /// <summary>
        /// カメラ変更リクエストを送信
        /// type: "poi" または "name"
        /// value: POI の場合は文字列でキー、name の場合はプレイヤー名
        /// </summary>
        public async Task<Response?> ChangeCameraAsync(string type, string value, CancellationToken cancellationToken)
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
                    _logger.LogWarning("Invalid POI value: {Value}", value);
                }
            }
            else if (type.Equals("name", StringComparison.OrdinalIgnoreCase))
            {
                changeCamera.Name = value;
            }

            req.ChangeCam = changeCamera;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// ポーズ切り替えリクエストを送信
        /// preTimer: ポーズ前のタイマー値
        /// </summary>
        public async Task<Response?> PauseToggleAsync(double preTimer, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var pauseToggle = new PauseToggle
            {
                PreTimer = (float)preTimer
            };
            req.PauseToggle = pauseToggle;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// カスタムマッチロビー作成リクエストを送信
        /// </summary>
        public async Task<Response?> CreateLobbyAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var createLobby = new CustomMatch_CreateLobby();
            req.CustomMatchCreateLobby = createLobby;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// カスタムマッチロビー参加リクエストを送信
        /// token: ロビー参加トークン
        /// </summary>
        public async Task<Response?> JoinLobbyAsync(string token, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var joinLobby = new CustomMatch_JoinLobby();
            joinLobby.RoleToken = token;
            req.CustomMatchJoinLobby = joinLobby;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// カスタムマッチロビー退出リクエストを送信
        /// </summary>
        public async Task<Response?> LeaveLobbyAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var leaveLobby = new CustomMatch_LeaveLobby();
            req.CustomMatchLeaveLobby = leaveLobby;
            return await SendRequestAsync(req, cancellationToken);
        }
        /// <summary>
        /// 試合の準備完了状態を設定するリクエスト
        /// </summary>
        public async Task<Response?> SetReadyAsync(bool ready, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var setReady = new CustomMatch_SetReady
            {
                IsReady = ready // 自動生成コードのプロパティに合わせる
            };
            req.CustomMatchSetReady = setReady;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// マッチメイキングの有効/無効を設定するリクエスト
        /// </summary>
        public async Task<Response?> SetMatchmakingAsync(bool matchmaking, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var setMatchmaking = new CustomMatch_SetMatchmaking
            {
                Enabled = matchmaking
            };
            req.CustomMatchSetMatchmaking = setMatchmaking;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// チームを設定するリクエスト
        /// </summary>
        public async Task<Response?> SetTeamAsync(int teamId, string targetHardwareName, string targetNucleushash, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var setTeam = new CustomMatch_SetTeam
            {
                TeamId = teamId,
                TargetHardwareName = targetHardwareName,
                TargetNucleusHash = targetNucleushash
            };
            req.CustomMatchSetTeam = setTeam;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// プレイヤーをキックするリクエスト
        /// </summary>
        public async Task<Response?> KickPlayerAsync(string targetHardwareName, string targetNucleushash, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var kickPlayer = new CustomMatch_KickPlayer
            {
                TargetHardwareName = targetHardwareName,
                TargetNucleusHash = targetNucleushash
            };
            req.CustomMatchKickPlayer = kickPlayer;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// 試合設定を適用するリクエスト
        /// </summary>
        public async Task<Response?> SetSettingsAsync(string playlistName, bool adminChat, bool teamRename, bool selfAssign, bool aimAssist, bool anonMode, CancellationToken cancellationToken)
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
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// チャットメッセージを送信するリクエスト
        /// </summary>
        public async Task<Response?> SendChatAsync(string message, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var sendChat = new CustomMatch_SendChat
            {
                Text = message
            };
            req.CustomMatchSendChat = sendChat;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// ロビープレイヤー情報を取得するリクエスト
        /// </summary>
        public async Task<Response?> GetLobbyPlayersAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var getLobbyPlayers = new CustomMatch_GetLobbyPlayers();
            req.CustomMatchGetLobbyPlayers = getLobbyPlayers;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// チーム名を設定するリクエスト
        /// </summary>
        public async Task<Response?> SetTeamNameAsync(int teamId, string teamName, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var setTeamName = new CustomMatch_SetTeamName
            {
                TeamId = teamId,
                TeamName = teamName
            };
            req.CustomMatchSetTeamName = setTeamName;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// 試合設定を取得するリクエスト
        /// </summary>
        public async Task<Response?> GetMatchSettingsAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var getSettings = new CustomMatch_GetSettings();
            req.CustomMatchGetSettings = getSettings;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// スポーンポイントを設定するリクエスト
        /// </summary>
        public async Task<Response?> SetSpawnPointAsync(int teamId, int spawnPoint, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var setSpawnPoint = new CustomMatch_SetSpawnPoint
            {
                TeamId = teamId,
                SpawnPoint = spawnPoint
            };
            req.CustomMatchSetSpawnPoint = setSpawnPoint;
            return await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// エンドリング除外を設定するリクエスト
        /// </summary>
        public async Task<Response?> SetEndRingExclusionAsync(int exclusion, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            var endRingExclusion = new CustomMatch_SetEndRingExclusion
            {
                SectionToExclude = (MapRegion)exclusion
            };
            req.CustomMatchSetEndRingExclusion = endRingExclusion;
            return await SendRequestAsync(req, cancellationToken);
        }
    }
}