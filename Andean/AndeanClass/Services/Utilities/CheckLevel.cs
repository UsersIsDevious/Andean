using System;
using System.Text.RegularExpressions;

namespace Andean.AndeanClass.Utilities
{
    public static class CheckLevel
    {
        /// <summary>
    /// アイテム名からレベルをチェックする
    /// </summary>
    /// <param name="name">アイテム名</param>
    /// <returns>レベル。該当部分が見つからなければ1を返す</returns>
    public static int ReturnCheckLevel(string name)
    {
        // 例: 正規表現パターン: \(Level (\d+)\)
        string pattern = $@"\({Language.Item.LevelLabel} (\d+)\)";
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
    }
}