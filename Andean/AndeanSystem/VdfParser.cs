using System.Text;
using Newtonsoft.Json;
using System.Text.Json;
using System.Text.Unicode;
using System.Text.Encodings.Web;

namespace AndeanSystems
{
    public static class VdfParser
    {
        // JObjectを使うことで、動的なプロパティアクセスが可能となる
        public static JObject Playlists_r5 { get; private set; } = new JObject();

        /// <summary>
        /// VDF形式の文字列をパースして、JObjectを返します。
        /// </summary>
        /// <param name="content">VDF形式のテキスト</param>
        /// <returns>解析結果のJObject</returns>
        public static async Task<JObject> ParseVdf(string content)
        {
            try
            {
                // パーサーを生成してファイル内容をパースする
                Parser parser = new Parser(content);
                var parsedData = parser.Parse();

                // JSON形式に変換（整形出力）
                var options = new JsonSerializerOptions
                {
                    WriteIndented = true,
                    // すべての Unicode 文字をそのまま出力するためのエンコーダーを指定
                    Encoder = JavaScriptEncoder.Create(UnicodeRanges.All)
                };
                string json = System.Text.Json.JsonSerializer.Serialize(parsedData, options);

                // 特定のUnicodeエスケープシーケンスを実際の文字に置換
                json = json.Replace("\\u00A0", "\u00A0");
                json = json.Replace("\\u0060", "\u0060");
                json = json.Replace("\\u003C", "\u003C");
                json = json.Replace("\\u003E", "\u003E");
                json = json.Replace("\\u0027", "\u0027");

                await FileOutputService.WriteToFileAsync("output", "playlists_r5.json", json, FileWriteMode.Overwrite);

                // JSON文字列を JObject に変換する
                return JObject.Parse(json);
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine("パースに失敗しました: " + ex.Message);
                return null;
            }
        }
    }

    /// <summary>
    /// カスタム設定ファイル形式をパースしてDictionaryに変換するクラス
    /// 
    /// ・KEY VALUE のような単純なペア（値が複数単語の場合はダブルクォーテーションで囲む）や
    /// ・KEY { ... } のような入れ子のブロック
    /// を解析します。
    /// 
    /// また、ダブルクォーテーションで囲まれた値については以下のルールで処理します。
    /// ・ "A, B, C" → 改行や余分な空白・タブがあればそれを1つの半角スペースに変換して "A, B, C" として認識
    /// ・ "A B C" → 改行や余分な空白・タブがあればそれを1つの半角スペースに変換して "A B C" として認識
    /// ・ 改行を含む " 
    ///   A
    ///   B
    ///   C
    ///   " → 改行および余分な空白・タブをスキップして "A B C" にする
    /// ・ KEY "" は空文字とする
    /// 
    /// さらに、同一ブロック内で同じキーが重複している場合は、
    /// 既存のキーを「キー_0」に、追加するキーを「キー_1」「キー_2」…とリネームして格納します。
    /// </summary>
    public class Parser
    {
        private readonly string text;
        private int index;

        public Parser(string text)
        {
            this.text = text;
            this.index = 0;
        }

        /// <summary>
        /// ファイル全体をパースして最上位のDictionaryを返す
        /// </summary>
        public Dictionary<string, object> Parse()
        {
            Dictionary<string, object> root = new Dictionary<string, object>();
            // 重複キー用のカウンタを管理するディクショナリ
            Dictionary<string, int> keyCount = new Dictionary<string, int>();

            while (index < text.Length)
            {
                SkipWhitespaceAndComments();
                if (index >= text.Length) break;

                // キーを読み取る（ダブルクォーテーション付きの場合も含む）
                string key = ReadToken();
                if (string.IsNullOrEmpty(key)) break;

                SkipWhitespaceAndComments();

                // 次がブロック開始の場合は入れ子オブジェクトとする
                if (Peek() == '{')
                {
                    Consume(); // '{' を消費
                    var obj = ParseObject();
                    AddKey(root, keyCount, key, obj);
                }
                else
                {
                    // 単一の値の場合
                    string value = ReadToken();
                    AddKey(root, keyCount, key, value);
                }
            }

            return root;
        }

        /// <summary>
        /// { } 内のオブジェクトをパースする
        /// </summary>
        private Dictionary<string, object> ParseObject()
        {
            Dictionary<string, object> dict = new Dictionary<string, object>();
            // 各ブロックごとに重複キー用のカウンタを初期化
            Dictionary<string, int> keyCount = new Dictionary<string, int>();

            while (index < text.Length)
            {
                SkipWhitespaceAndComments();
                if (index >= text.Length) break;

                // ブロック終了を検出
                if (Peek() == '}')
                {
                    Consume(); // '}' を消費
                    break;
                }

                // キーを読み取る
                string key = ReadToken();
                SkipWhitespaceAndComments();

                // 値がブロックの場合
                if (index < text.Length && Peek() == '{')
                {
                    Consume(); // '{' を消費
                    var obj = ParseObject();
                    AddKey(dict, keyCount, key, obj);
                }
                else
                {
                    // 単一の値の場合
                    string value = ReadToken();
                    AddKey(dict, keyCount, key, value);
                }
            }

            return dict;
        }

        /// <summary>
        /// 現在の位置の文字を参照する
        /// </summary>
        private char Peek()
        {
            return text[index];
        }

        /// <summary>
        /// 現在の文字を返し、次に進む
        /// </summary>
        private char Consume()
        {
            return text[index++];
        }

        /// <summary>
        /// 空白文字およびコメント（"//"）をスキップする
        /// </summary>
        private void SkipWhitespaceAndComments()
        {
            while (index < text.Length)
            {
                // 空白文字（スペース、タブ、改行など）をスキップ
                if (char.IsWhiteSpace(text[index]))
                {
                    index++;
                    continue;
                }
                // コメント行（"//"）の場合、行末までスキップ
                if (text[index] == '/' && index + 1 < text.Length && text[index + 1] == '/')
                {
                    while (index < text.Length && text[index] != '\n')
                    {
                        index++;
                    }
                    continue;
                }
                break;
            }
        }

        /// <summary>
        /// トークンを読み取る（キーや値）
        /// </summary>
        private string ReadToken()
        {
            SkipWhitespaceAndComments();
            if (index >= text.Length)
                return null;

            // ダブルクォーテーションの場合は、特殊な処理で読み取る
            if (text[index] == '"')
            {
                return ReadQuotedToken();
            }
            else
            {
                // 空白やブレース、コメント開始までを読み取る
                StringBuilder sb = new StringBuilder();
                while (index < text.Length && !char.IsWhiteSpace(text[index]) &&
                       text[index] != '{' && text[index] != '}')
                {
                    sb.Append(text[index]);
                    index++;
                }
                return sb.ToString();
            }
        }

        /// <summary>
        /// ダブルクォーテーションで囲まれた文字列トークンを読み取る
        /// ・複数行の場合は改行を1つの半角スペースに変換し、改行直後の余分な空白（スペース、タブ）をスキップ
        /// ・一行の場合も連続するスペースやタブを1つの半角スペースにまとめる
        /// </summary>
        private string ReadQuotedToken()
        {
            // 最初のダブルクォーテーションを消費
            Consume();
            StringBuilder sb = new StringBuilder();
            bool lastWasSpace = false;

            while (index < text.Length)
            {
                char c = Consume();
                if (c == '"')
                {
                    // 終了ダブルクォーテーションが見つかった場合
                    break;
                }
                else if (c == '\n' || c == '\r')
                {
                    // 改行の場合は1つの半角スペースに変換
                    if (!lastWasSpace)
                    {
                        sb.Append(' ');
                        lastWasSpace = true;
                    }
                    // 改行直後のスペースやタブをスキップ
                    while (index < text.Length && (text[index] == ' ' || text[index] == '\t'))
                    {
                        index++;
                    }
                }
                else if (c == ' ' || c == '\t')
                {
                    // 連続するスペースやタブは1つの半角スペースにまとめる
                    if (!lastWasSpace)
                    {
                        sb.Append(' ');
                        lastWasSpace = true;
                    }
                    // その後の連続するスペースやタブをスキップ
                    while (index < text.Length && (text[index] == ' ' || text[index] == '\t'))
                    {
                        index++;
                    }
                }
                else
                {
                    sb.Append(c);
                    lastWasSpace = false;
                }
            }

            return sb.ToString().Trim();
        }

        /// <summary>
        /// 重複キーがある場合は、既存のキーを「キー_0」、追加のキーを「キー_1」「キー_2」…とする
        /// </summary>
        private void AddKey(Dictionary<string, object> dict, Dictionary<string, int> keyCount, string key, object value)
        {
            if (!keyCount.ContainsKey(key))
            {
                keyCount[key] = 0;
                dict.Add(key, value);
            }
            else
            {
                keyCount[key]++;
                int duplicateIndex = keyCount[key];
                // 初回の重複の場合、既存のキーをリネーム
                if (duplicateIndex == 1)
                {
                    var oldValue = dict[key];
                    dict.Remove(key);
                    dict.Add($"{key}_0", oldValue);
                }
                dict.Add($"{key}_{duplicateIndex}", value);
            }
        }
    }
}
