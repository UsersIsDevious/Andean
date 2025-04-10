using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AndeanSystems
{

    public static class UpdateManager
    {
        // 登録された更新システムのリスト
        private static List<AndeanSystem> updateSystems = new List<AndeanSystem>();

        // 非同期ループを管理する CancellationTokenSource と Task
        private static CancellationTokenSource? _cts = null;
        private static Task? _updateTask = null;

        // 16ms ごと（約60FPS）のフレーム間隔
        private const int frameInterval = 16;
        private static readonly object lockObj = new object();

        /// <summary>
        /// 更新システムを登録します。
        /// </summary>
        public static void Register(AndeanSystem system)
        {
            lock (lockObj)
            {
                if (!updateSystems.Contains(system))
                {
                    updateSystems.Add(system);
                }
            }
        }

        /// <summary>
        /// 不要になったシステムを登録解除します。
        /// </summary>
        public static void Unregister(AndeanSystem system)
        {
            lock (lockObj)
            {
                if (updateSystems.Contains(system))
                {
                    updateSystems.Remove(system);
                }
            }
        }

        /// <summary>
        /// 非同期更新ループを開始します。
        /// </summary>
        public static void StartLoop()
        {
            // すでにループが動作中なら何もしない
            if (_cts != null && !_cts.IsCancellationRequested)
                return;

            _cts = new CancellationTokenSource();
            _updateTask = LoopAsync(_cts.Token);
        }

        /// <summary>
        /// 非同期更新ループ。各フレームごとに登録システムの Update() を呼び出し、
        /// 残り時間分を await Task.Delay でスリープします。
        /// </summary>
        private static async Task LoopAsync(CancellationToken token)
        {
            while (!token.IsCancellationRequested)
            {
                DateTime frameStart = DateTime.UtcNow;

                List<Task> tasks;
                lock (lockObj)
                {
                    // 登録されている各システムの Update() を非同期に呼び出しリストに格納
                    tasks = updateSystems.Select(system => system.Update()).ToList();
                }

                try
                {
                    // 全システムの Update() の完了を待つ
                    await Task.WhenAll(tasks);
                }
                catch (Exception ex)
                {
                    // 個々の Update 内で例外が発生してもループを継続するためにログ出力
                    Console.WriteLine($"UpdateManager: Exception in Update loop: {ex}");
                }

                // 1フレームの処理時間を測定し、残りの時間だけ待機
                TimeSpan elapsed = DateTime.UtcNow - frameStart;
                int sleepTime = frameInterval - (int)elapsed.TotalMilliseconds;
                if (sleepTime > 0)
                {
                    try
                    {
                        await Task.Delay(sleepTime, token);
                    }
                    catch (TaskCanceledException)
                    {
                        // キャンセルされればループ終了
                        break;
                    }
                }
            }
        }

        /// <summary>
        /// 更新ループを停止し、完了するのを待機します。
        /// </summary>
        public static async Task StopLoop()
        {
            if (_cts != null)
            {
                _cts.Cancel();
                try
                {
                    if (_updateTask != null)
                        await _updateTask;
                }
                catch (TaskCanceledException)
                {
                    // タスクキャンセル例外は無視
                }
                finally
                {
                    _cts.Dispose();
                    _cts = null;
                    _updateTask = null;
                }
            }
        }
    }
}
