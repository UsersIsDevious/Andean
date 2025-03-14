// UpdateManager.cs
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;

namespace AndeanSystem
{
    // IHostedService を実装してバックグラウンドで更新処理を行う
    public class UpdateManager : IHostedService
    {
        // DI により、AndeanSystem を継承した全オブジェクトを受け取る
        private readonly IEnumerable<AndeanSystem> _updatables;
        private CancellationTokenSource _cts;

        public UpdateManager(IEnumerable<AndeanSystem> updatables)
        {
            _updatables = updatables;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _cts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
            // 別スレッドで更新ループを開始（60FPS = 約16.67ms毎）
            Task.Run(() => UpdateLoop(_cts.Token));
            return Task.CompletedTask;
        }

        private async Task UpdateLoop(CancellationToken token)
        {
            const int targetFPS = 60;
            const int frameDelay = 1000 / targetFPS; // 約16ms

            while (!token.IsCancellationRequested)
            {
                var frameStart = DateTime.UtcNow;

                // 登録されたすべての更新対象の Update() を呼び出す
                foreach (var updatable in _updatables)
                {
                    updatable.Update();
                }

                // 1フレーム分の処理時間を計測し、残り時間分待機
                var elapsed = (DateTime.UtcNow - frameStart).TotalMilliseconds;
                var delay = frameDelay - (int)elapsed;
                if (delay > 0)
                {
                    await Task.Delay(delay, token);
                }
            }
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _cts.Cancel();
            return Task.CompletedTask;
        }
    }
}
