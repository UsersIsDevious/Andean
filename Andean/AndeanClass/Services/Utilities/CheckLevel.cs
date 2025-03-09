using System;
using System.Text.RegularExpressions;
using Andean.AndeanClass.Services;

namespace Andean.AndeanClass.Utilities
{
    public class CheckLevel
    {
        private readonly LocalizationService _localizationService;

        public CheckLevel(LocalizationService localizationService)
        {
            _localizationService = localizationService;
        }
        /// <summary>
        /// アイテム名からレベルをチェックする
        /// </summary>
        /// <param name="name">アイテム名</param>
        /// <returns>レベル。該当部分が見つからなければ1を返す</returns>
        public int ReturnLevel(string name)
        {
            var Language = _localizationService.LocalizedData;

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
    }
}