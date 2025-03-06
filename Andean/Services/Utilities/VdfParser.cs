using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Andean.Utilities
{
    public static class VdfParser
    {
        /// <summary>
        /// VDF形式の文字列をパースして、ネストされたDictionaryを返します。
        /// </summary>
        /// <param name="content">VDF形式のテキスト</param>
        /// <returns>解析結果のDictionary</returns>
        public static Dictionary<string, object> ParseVdf(string content)
        {
            var root = new Dictionary<string, object>();
            var stack = new Stack<Dictionary<string, object>>();
            stack.Push(root);

            // 現在、次のブロックに割り当てるキーを保持
            string currentKey = null;

            using (StringReader reader = new StringReader(content))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    // 前後の空白を削除
                    line = line.Trim();

                    // 空行や // で始まるコメント行はスキップ
                    if (string.IsNullOrEmpty(line) || line.StartsWith("//"))
                        continue;

                    // ブロックの開始
                    if (line == "{")
                    {
                        if (currentKey != null)
                        {
                            var newDict = new Dictionary<string, object>();
                            // 現在のキーに新しい辞書を割り当てる
                            stack.Peek()[currentKey] = newDict;
                            // 新たな辞書をスタックに追加して、ネストレベルを上げる
                            stack.Push(newDict);
                            currentKey = null;
                        }
                        continue;
                    }

                    // ブロックの終了
                    if (line == "}")
                    {
                        if (stack.Count > 1)
                            stack.Pop();
                        continue;
                    }

                    // 行をトークンに分割（引用符で囲まれた部分はそのまま）
                    var tokens = SplitLinePreservingQuotes(line);
                    if (tokens.Length == 0)
                        continue;

                    if (tokens.Length == 1)
                    {
                        // トークンが1つの場合、次にブロックが来る（例：キーのみ指定）
                        currentKey = tokens[0];
                    }
                    else
                    {
                        // 複数トークンの場合は、最初をキー、残りを値とする
                        string key = tokens[0];
                        // 複数トークンの場合、2番目以降を結合して値とする
                        string value = string.Join(" ", tokens.Skip(1));
                        // 両端の引用符を削除（あれば）
                        value = value.Trim('"');
                        stack.Peek()[key] = value;
                    }
                }
            }
            return root;
        }

        /// <summary>
        /// 引用符で囲まれた部分を保持しつつ、空白で分割します。
        /// </summary>
        /// <param name="input">分割対象の文字列</param>
        /// <returns>分割されたトークンの配列</returns>
        public static string[] SplitLinePreservingQuotes(string input)
        {
            // 正規表現: "..." または 非空白の連続
            var pattern = "\"([^\"]*)\"|(\\S+)";
            var matches = Regex.Matches(input, pattern);
            List<string> tokens = new List<string>();
            foreach (Match match in matches)
            {
                if (match.Groups[1].Success)
                    tokens.Add(match.Groups[1].Value);
                else if (match.Groups[2].Success)
                    tokens.Add(match.Groups[2].Value);
            }
            return tokens.ToArray();
        }
    }
}
