// UpdateManager.cs
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;

namespace AndeanSystems
{
    public static class UpdateManager
    {
        private static List<AndeanSystem> updatables = new List<AndeanSystem>();
        private static bool running = false;
        private static int intervalMs = 16; // 約60FPS

        public static void Register(AndeanSystem u)
        {
            if (!updatables.Contains(u))
                updatables.Add(u);
        }

        public static void Unregister(AndeanSystem u)
        {
            if (updatables.Contains(u))
                updatables.Remove(u);
        }

        public static void Start()
        {
            if (running) return;
            running = true;

            Thread updateThread = new Thread(() =>
            {
                while (running)
                {
                    foreach (var u in updatables.ToArray()) // 安全なイテレーション
                    {
                        try
                        {
                            u.Update();
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine($"Update error: {ex.Message}");
                        }
                    }
                    Thread.Sleep(intervalMs);
                }
            });

            updateThread.IsBackground = true;
            updateThread.Start();
        }

        public static void Stop()
        {
            running = false;
        }
    }
}
