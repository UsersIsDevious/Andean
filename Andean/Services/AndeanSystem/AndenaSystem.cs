using Microsoft.AspNetCore.Mvc;

namespace Andean
{
    public abstract class AndeanSystem
    {
        // サブクラスに実装を強制する
        public abstract void Update();

    }
}