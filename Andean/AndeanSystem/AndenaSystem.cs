using Microsoft.AspNetCore.Mvc;

namespace AndeanSystem
{
    public abstract class AndeanSystem
    {
        // サブクラスに実装を強制する
        public abstract void Update();

    }
}