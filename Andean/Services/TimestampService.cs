using Microsoft.AspNetCore.SignalR;
using AndeanWebUI.Hubs;
using AndeanSystems;

namespace AndeanClass.Services
{
    // TimestampService は BaseClass を継承し、Update() を実装する
    public class TimestampService : AndeanSystem
    {
        private readonly IHubContext<ControlPanelHub> _hubContext;
        private readonly ILogger<TimestampService> _logger;
        private DateTime _lastSentTime = DateTime.MinValue;
        private readonly TimeSpan _interval = TimeSpan.FromSeconds(5);

        public TimestampService(IHubContext<ControlPanelHub> hubContext, ILogger<TimestampService> logger)
        {
            _hubContext = hubContext;
            _logger = logger;
            _logger.LogInformation("TimestampService initialized using Update method.");
        }

        // Update() は UpdateManager により 60FPS (約16ms毎) で呼ばれる
        public void Update()
        {
            // 前回送信から _interval 経過しているかチェック
            if (DateTime.UtcNow - _lastSentTime >= _interval)
            {
                _lastSentTime = DateTime.UtcNow;
                try
                {
                    var timestamp = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss");
                    // 非同期送信（Update() は同期メソッドなので fire-and-forget で実行）
                    _hubContext.Clients.All.SendAsync("ReceiveMessage", $"Current UTC Time: {timestamp}");
                    _logger.LogInformation("Sent timestamp: {Timestamp}", timestamp);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error sending timestamp.");
                }
            }
        }
    }
}
