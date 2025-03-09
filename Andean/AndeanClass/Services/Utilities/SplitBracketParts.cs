using System;
using System.Text.RegularExpressions;

namespace Andean.AndeanClass.Utilities
{
    public class SplitBracketParts
    {
        /// <summary>
        /// 括弧で囲まれた部分とそうでない部分で分割する
        /// </summary>
        /// <param name="input">対象の文字列</param>
        /// <returns>見つかった場合は2要素の配列、見つからなかった場合はnullを返す</returns>
        public string[]? ReturnSplitBracketParts(string input)
        {
            try
            {
                if (string.IsNullOrEmpty(input))
                    return null;

                // 正規表現パターン:
                // ^(.*?)\s*[\(（](.*?)[\)）]$
                // → 最初のグループ：括弧前の部分（任意の文字列）
                //   空白の後に「(」または「（」が続き、
                //   次のグループ：括弧内の部分（任意の文字列）
                //   最後に「)」または「）」で終わる
                var match = Regex.Match(input, @"^(.*?)\s*[\(（](.*?)[\)）]$");
                if (match.Success)
                {
                    return new string[]
                    {
                    match.Groups[1].Value.Trim(),
                    match.Groups[2].Value.Trim()
                    };
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[SPLIT BRACKET PARTS] Input: {input} Error: {ex}");
                return null;
            }
        }
    }
}