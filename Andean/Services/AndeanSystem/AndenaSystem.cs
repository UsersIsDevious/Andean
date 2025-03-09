using Microsoft.AspNetCore.Mvc;

namespace Andean
{
    public abstract class AndeanSystem
    {
        // サブクラスに実装を強制する
        public abstract void Update();

    }

    public interface IAndeanWebUI
    {
        Task NotifyShutdown(string message = "System is shutting down.");
    }

    public abstract class AndeanWebUI
    {
        public abstract void NotifyShutdown();
    }
}