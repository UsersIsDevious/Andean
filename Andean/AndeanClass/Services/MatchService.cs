using System;
using Andean.AndeanClass;
using Rtech.Liveapi;

namespace Andean.AndeanClass.Services
{
    public class MatchService : IMatchService
    {
        public void HandleInitMessage(Init initMsg)
        {
            // 例えば、platform が空の場合にマッチを初期化する
            if (string.IsNullOrEmpty(initMsg.Platform))
            {
                long unixTimeSeconds = (long)initMsg.Timestamp;
                long unixTimeMillis = unixTimeSeconds * 1000;
                DateTime date = DateTimeOffset.FromUnixTimeMilliseconds(unixTimeMillis).LocalDateTime;
                string formattedDate = date.ToString("yyyy-MM-dd-HH-mm-ss");

                CustomMatch match = new CustomMatch(formattedDate);
                match.SetGameVersion(initMsg.GameVersion);
                Console.WriteLine($"[MatchService] CustomMatch 初期化完了：{formattedDate}");
                // 必要な処理（DB登録やキャッシュ保存など）を追加
            }
            else
            {
                Console.WriteLine("[MatchService] Platform 指定あり: readPlaylists_r5() を実行します。");
            }
        }
    }
}
