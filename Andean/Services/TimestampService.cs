using Andean.Hubs;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Andean.Services
{
    public class TimestampService
    {
        private readonly IHubContext<ControlPanelHub> _hubContext;
        private readonly ILogger<TimestampService> _logger; // 🚀 ログ用
        private Timer? _timer;
        private readonly object _lock = new();

        public TimestampService(IHubContext<ControlPanelHub> hubContext, ILogger<TimestampService> logger)
        {
            _hubContext = hubContext;
            _logger = logger; // 🚀 ログ機能を初期化
            StartTimer();
        }

        private void StartTimer()
        {
            lock (_lock)
            {
                if (_timer == null)
                {
                    _logger.LogInformation("⏳ タイマー開始...");

                    _timer = new Timer(async _ =>
                    {
                        try
                        {
                            //_logger.LogInformation("📡 送信準備...");
                            var timestamp = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss");

                            await _hubContext.Clients.All.SendAsync("ReceiveMessage", $"Current UTC Time: {timestamp}");
                            //_logger.LogInformation("✅ メッセージ送信完了: {Timestamp}", timestamp);
                        }
                        catch (Exception ex)
                        {
                            _logger.LogError(ex, "❌ メッセージ送信エラー");
                        }
                    }, null, TimeSpan.Zero, TimeSpan.FromSeconds(5)); // 5秒ごとに送信
                }
            }
        }
    }
}
