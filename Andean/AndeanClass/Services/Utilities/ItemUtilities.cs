using System.Text.RegularExpressions;

namespace Andean.AndeanClass.Services.Utilities
{
    public static class ItemUtilities
    {
        /// <summary>
        /// アイテム名からレベルをチェックする
        /// </summary>
        /// <param name="name">アイテム名</param>
        /// <returns>レベル。該当部分が見つからなければ1を返す</returns>
        public static int ReturnLevel(string name)
        {
            var Language = LocalizationService.LocalizedData;

            // 例: 正規表現パターン: \(Level (\d+)\)
            string pattern = $@"\({Language.Item["level_label"]} (\d+)\)";
            Match match = Regex.Match(name, pattern);

            if (!match.Success)
            {
                return 1;
            }
            else
            {
                if (int.TryParse(match.Groups[1].Value, out int level))
                {
                    return level;
                }
                return 1;
            }
        }

        /// <summary>
        /// 括弧で囲まれた部分とそうでない部分で分割する
        /// </summary>
        /// <param name="input">対象の文字列</param>
        /// <returns>見つかった場合は2要素の配列、見つからなかった場合はnullを返す</returns>
        public static string[]? ReturnSplitBracketParts(string input)
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

        /// <summary>
        /// アイテム名からゲーム内IDをチェックする
        /// </summary>
        /// <param name="type">アイテムのタイプを指定する Weapon or Item</param>
        /// <param name="name">アイテム名</param>
        /// <returns>ゲーム内ID。見つからなければ null を返す</returns>
        public static string? ReturnItemId(string type, string name)
        {
            string? result;
            switch (type)
            {
                case "Weapon":
                    result = LocalizationService.GetOriginalKey("weapons_label", name);
                    break;
                case "Item":
                    result = LocalizationService.GetOriginalKey("items_label", name);
                    break;
                default:
                    Console.WriteLine($"[GET ITEM ID] Invalid type: {type}");
                    return null;
            }
            if (result == null)
            {
                Console.WriteLine($"[GET ITEM ID] ID not found. TYPE: {type} NAME: {name}");
            }

            return result;
        }
    }
}
