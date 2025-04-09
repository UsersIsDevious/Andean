using System.Collections.Concurrent;

namespace AndeanSystems
{
    public static class StringPool
    {
        // すでに Intern 済み文字列を保持（辞書にすることでスレッドセーフな共通化）
        private static readonly ConcurrentDictionary<string, string> _internedStrings = new();

        /// <summary>
        /// 渡された文字列を自動的に Intern（共有インスタンス）として返します。
        /// </summary>
        public static string Get(string? input)
        {
            if (input == null)
                return string.Empty;

            // 既に intern 済みであればそれを返す
            return _internedStrings.GetOrAdd(input, s => string.Intern(s));
        }

        /// <summary>
        /// プールの現在の文字列数を取得（診断用）
        /// </summary>
        public static int Count => _internedStrings.Count;

        /// <summary>
        /// プールをクリアする（大量登録時のリセットなどに）
        /// </summary>
        public static void Clear()
        {
            _internedStrings.Clear();
        }
    }

}
