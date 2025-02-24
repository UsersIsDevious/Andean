using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace Andean.Models
{
    public class LocalizationService
    {
        private readonly IConfiguration _configuration;
        private Dictionary<string, object> _translations;

        public LocalizationService(IConfiguration configuration)
        {
            _configuration = configuration;
            LoadLanguage("en"); // 初期値は英語
        }

        /// 言語ファイルをロードする
        public void LoadLanguage(string langCode)
        {
            string filePath = $"config/languages/{langCode}.json";
            if (!File.Exists(filePath))
                throw new FileNotFoundException($"Language file not found: {filePath}");

            string jsonContent = File.ReadAllText(filePath);
            _translations = JsonSerializer.Deserialize<Dictionary<string, object>>(jsonContent) ?? new();
        }

        /// 指定したキーの翻訳を取得
        public string Translate(string key)
        {
            var keys = key.Split('.'); // "weapons_label.mp_weapon_3030" のようなネスト対応
            object current = _translations;

            foreach (var k in keys)
            {
                if (current is Dictionary<string, object> dict && dict.TryGetValue(k, out var next))
                {
                    current = next;
                }
                else
                {
                    return key; // 翻訳が見つからない場合はキーを返す
                }
            }

            return current.ToString();
        }
    }
}
