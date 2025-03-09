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
        /// アイテム名からゲーム内IDをチェックする
        /// </summary>
        /// <param name="type">アイテムのタイプを指定する Weapon or Item</param>
        /// <param name="name">アイテム名</param>
        /// <returns>ゲーム内ID。見つからなければ null を返す</returns>
        public string? ReturnItemId(string type, string name)
        {
            string? result;
            switch (type)
            {
                case "Weapon":
                    result = _localizationService.GetOriginalKey("weapons_label", name);
                    break;
                case "Item":
                    result = _localizationService.GetOriginalKey("items_label", name);
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