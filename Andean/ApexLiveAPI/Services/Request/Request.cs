using Rtech.Liveapi;
using Google.Protobuf;
using Andean.WebsocketServer;
using AndeanSystems; // StringPool用
using System;
using System.Threading;
using System.Threading.Tasks;

namespace ApexLiveAPI.Request
{
    public static class Request
    {
        /// <summary>
        /// 共通のリクエスト送信処理
        /// </summary>
        private static async Task SendRequestAsync(Rtech.Liveapi.Request req, CancellationToken cancellationToken, bool ack = true)
        {
            req.WithAck = ack;
            byte[] requestBytes = req.ToByteArray();

            try
            {
                WebSocketServer.SendMessageViaAuthorizedClient(requestBytes, cancellationToken);
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"[WebSocketError] {ex}");
            }
        }

        /// <summary>
        /// カメラ変更リクエストを送信
        /// type: "poi" または "name"
        /// value: POI の場合は文字列でキー、name の場合はプレイヤー名
        /// </summary>
        public static async Task ChangeCameraAsync(string type, string value, CancellationToken cancellationToken, bool ack = true)
        {
            var req = new Rtech.Liveapi.Request();
            var changeCamera = new ChangeCamera();

            if (type.Equals("poi", StringComparison.OrdinalIgnoreCase))
            {
                if (Enum.TryParse<PlayerOfInterest>(value, true, out var poiValue))
                {
                    changeCamera.Poi = poiValue;
                }
                else
                {
                    Console.WriteLine($"Invalid POI value: {value}");
                }
            }
            else if (type.Equals("name", StringComparison.OrdinalIgnoreCase))
            {
                changeCamera.Name = StringPool.Get(value);
            }

            req.ChangeCam = changeCamera;
            await SendRequestAsync(req, cancellationToken, ack);
        }

        /// <summary>
        /// ポーズ切り替えリクエストを送信
        /// preTimer: ポーズ前のタイマー値
        /// </summary>
        public static async Task PauseToggleAsync(double preTimer, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.PauseToggle = new PauseToggle
            {
                PreTimer = (float)preTimer
            };
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// カスタムマッチロビー作成リクエストを送信
        /// </summary>
        public static async Task CreateLobbyAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchCreateLobby = new CustomMatch_CreateLobby();
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// カスタムマッチロビー参加リクエストを送信
        /// token: ロビー参加トークン
        /// </summary>
        public static async Task JoinLobbyAsync(string token, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchJoinLobby = new CustomMatch_JoinLobby
            {
                RoleToken = StringPool.Get(token)
            };
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// カスタムマッチロビー退出リクエストを送信
        /// </summary>
        public static async Task LeaveLobbyAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchLeaveLobby = new CustomMatch_LeaveLobby();
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// 試合の準備完了状態を設定するリクエスト
        /// </summary>
        public static async Task SetReadyAsync(bool ready, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchSetReady = new CustomMatch_SetReady
            {
                IsReady = ready
            };
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// マッチメイキングの有効/無効を設定するリクエスト
        /// </summary>
        public static async Task SetMatchmakingAsync(bool matchmaking, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchSetMatchmaking = new CustomMatch_SetMatchmaking
            {
                Enabled = matchmaking
            };
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// チームを設定するリクエスト
        /// </summary>
        public static async Task SetTeamAsync(int teamId, string targetHardwareName, string targetNucleushash, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchSetTeam = new CustomMatch_SetTeam
            {
                TeamId = teamId,
                TargetHardwareName = StringPool.Get(targetHardwareName),
                TargetNucleusHash = StringPool.Get(targetNucleushash)
            };
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// プレイヤーをキックするリクエスト
        /// </summary>
        public static async Task KickPlayerAsync(string targetHardwareName, string targetNucleushash, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchKickPlayer = new CustomMatch_KickPlayer
            {
                TargetHardwareName = StringPool.Get(targetHardwareName),
                TargetNucleusHash = StringPool.Get(targetNucleushash)
            };
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// 試合設定を適用するリクエスト
        /// </summary>
        public static async Task SetSettingsAsync(string playlistName, bool adminChat, bool teamRename, bool selfAssign, bool aimAssist, bool anonMode, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchSetSettings = new CustomMatch_SetSettings
            {
                PlaylistName = StringPool.Get(playlistName),
                AdminChat = adminChat,
                TeamRename = teamRename,
                SelfAssign = selfAssign,
                AimAssist = aimAssist,
                AnonMode = anonMode
            };
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// チャットメッセージを送信するリクエスト
        /// </summary>
        public static async Task SendChatAsync(string message, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchSendChat = new CustomMatch_SendChat
            {
                Text = StringPool.Get(message)
            };
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// ロビープレイヤー情報を取得するリクエスト
        /// </summary>
        public static async Task GetLobbyPlayersAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchGetLobbyPlayers = new CustomMatch_GetLobbyPlayers();
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// チーム名を設定するリクエスト
        /// </summary>
        public static async Task SetTeamNameAsync(int teamId, string teamName, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchSetTeamName = new CustomMatch_SetTeamName
            {
                TeamId = teamId,
                TeamName = StringPool.Get(teamName)
            };
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// 試合設定を取得するリクエスト
        /// </summary>
        public static async Task GetMatchSettingsAsync(CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchGetSettings = new CustomMatch_GetSettings();
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// スポーンポイントを設定するリクエスト
        /// </summary>
        public static async Task SetSpawnPointAsync(int teamId, int spawnPoint, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchSetSpawnPoint = new CustomMatch_SetSpawnPoint
            {
                TeamId = teamId,
                SpawnPoint = spawnPoint
            };
            await SendRequestAsync(req, cancellationToken);
        }

        /// <summary>
        /// エンドリング除外を設定するリクエスト
        /// </summary>
        public static async Task SetEndRingExclusionAsync(int exclusion, CancellationToken cancellationToken)
        {
            var req = new Rtech.Liveapi.Request();
            req.CustomMatchSetEndRingExclusion = new CustomMatch_SetEndRingExclusion
            {
                SectionToExclude = (MapRegion)exclusion
            };
            await SendRequestAsync(req, cancellationToken);
        }
    }
}
