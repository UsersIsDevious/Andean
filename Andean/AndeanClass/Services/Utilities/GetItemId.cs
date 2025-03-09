using System;
using System.Text.RegularExpressions;
using Andean.AndeanClass.Services;

namespace Andean.AndeanClass.Utilities
{
    public class GetItemId
    {
        private readonly LocalizationService _localizationService;

        public GetItemId(LocalizationService localizationService)
        {
            _localizationService = localizationService;
        }

        /// <summary>
        /// 武器名からゲーム内IDをチェックする
        /// </summary>
        /// <param name="name">武器名</param>
        /// <returns>ゲーム内ID。見つからなければ null を返す</returns>
        public string? ReturnItemId(string name)
        {
            string? result = _localizationService.GetOriginalKey("items_label", name);

            if (result == null)
            {
                Console.WriteLine($"[GET WEAPON ID] Weapon ID not found: {name}");
            }

            return result;
        }
    }
}