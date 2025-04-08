using AndeanSystems;

public static class UpdateManager
{
    private static List<AndeanSystem> updateSystems = new List<AndeanSystem>();
    private static Thread updateThread;
    private static bool running = false;
    private const int frameInterval = 16; // 約16msで60FPS
    private static object lockObj = new object();

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

    public static void StartLoop()
    {
        if (running) return;
        running = true;
        // バックグラウンドスレッドとして起動（メインスレッドを占有しない）
        updateThread = new Thread(Loop)
        {
            IsBackground = true
        };
        updateThread.Start();
    }

    private static void Loop()
    {
        while (running)
        {
            DateTime frameStart = DateTime.UtcNow;

            // 登録されている各システムのUpdateを呼び出す
            lock (lockObj)
            {
                foreach (var system in updateSystems)
                {
                    system.Update();
                }
            }

            // フレーム内にかかった時間を計測し、残りの時間だけスリープ
            TimeSpan elapsed = DateTime.UtcNow - frameStart;
            int sleepTime = frameInterval - (int)elapsed.TotalMilliseconds;
            if (sleepTime > 0)
            {
                Thread.Sleep(sleepTime);
            }
        }
    }

    public static void StopLoop()
    {
        running = false;
        updateThread?.Join();
    }
}
