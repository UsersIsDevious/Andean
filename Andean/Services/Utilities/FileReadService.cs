using System.Text;

namespace Andean.Utilities
{
    public static class FileReadService
    {
        /// <summary>
        /// 指定されたパスのファイルを非同期に読み込みます。
        /// </summary>
        /// <param name="filePath">読み込み対象のファイルのパス</param>
        /// <param name="encoding">ファイルのエンコーディング（指定がなければ UTF8 を使用）</param>
        /// <param name="throwIfNotFound">ファイルが存在しない場合、例外をスローするか（true: スロー、false: 空文字列を返す）</param>
        /// <param name="cancellationToken">キャンセル用の CancellationToken</param>
        /// <returns>ファイルの内容（文字列）</returns>
        public static async Task<string> ReadFileAsync(string filePath, Encoding? encoding = null, bool throwIfNotFound = true, CancellationToken cancellationToken = default)
        {
            if (!File.Exists(filePath))
            {
                if (throwIfNotFound)
                    throw new FileNotFoundException("ファイルが見つかりません。", filePath);
                else
                    return string.Empty;
            }

            encoding ??= Encoding.UTF8;

            using (StreamReader reader = new StreamReader(filePath, encoding))
            {
                return await reader.ReadToEndAsync().ConfigureAwait(false);
            }
        }
    }
}
