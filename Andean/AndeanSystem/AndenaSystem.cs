namespace AndeanSystems
{
    public abstract class AndeanSystem
    {
        public AndeanSystem()
        {
            // 登録時にStartを1回呼ぶ（必要ならば）
            UpdateManager.Register(this);
            Start();
        }

        /// <summary>
        /// ゲーム開始時に1回だけ実行される処理
        /// </summary>
        public virtual void Start() { }

        /// <summary>
        /// 60FPSで実行される処理
        /// </summary>
        public virtual void Update() { }
    }

}