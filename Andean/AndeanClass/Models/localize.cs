using Andean.Utilities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.Json;

namespace AndeanClass
{
    // Legendに関するモデルクラス
    public class Legend
    {
        public string Name { get; set; }
        public string Passive { get; set; }
        public string Tactical { get; set; }
        public string Ultimate { get; set; }
        public Dictionary<string, LegendUpgrade> Upgrade { get; set; }
    }

    public class LegendUpgrade
    {
        public UpgradeSide Left { get; set; }
        public UpgradeSide Right { get; set; }
    }

    public class UpgradeSide
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }

    // 処理済みローカライズデータを保持するモデル
    public class LocalizedDataModel
    {
        // そのままのデータ（例："item"）
        public Dictionary<string, string> Item { get; set; }
        // レジェンドデータ（例："legends_label"）
        public Dictionary<string, Legend> Legends { get; set; }

        // キーと値が入れ替わったデータ
        public Dictionary<string, string> WeaponsLabelSwapped { get; set; }
        public Dictionary<string, string> AssociateWeaponsLabelSwapped { get; set; }
        public Dictionary<string, string> ItemsLabelSwapped { get; set; }
    }

    // JSONファイルを前処理するクラス
    public class LocalizationDataProcessor
    {
        private readonly string _filePath;
        private readonly FileReadService _fileReadService;

        public LocalizationDataProcessor(string filePath, FileReadService fileReadService)
        {
            _filePath = filePath;
            _fileReadService = fileReadService;
        }

        public async Task<LocalizedDataModel> ProcessAsync()
        {
            if (!File.Exists(_filePath))
                throw new FileNotFoundException($"Language file not found: {_filePath}");

            string jsonContent = await _fileReadService.ReadFileAsync(_filePath, Encoding.UTF8, throwIfNotFound: true);
            // JSON全体をDictionary<string, JsonElement>として読み込む
            var rawData = JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(jsonContent);
            var model = new LocalizedDataModel();

            // "item" はそのまま読み込む
            if (rawData.ContainsKey("item"))
            {
                model.Item = JsonSerializer.Deserialize<Dictionary<string, string>>(rawData["item"].GetRawText());
            }
            else
            {
                model.Item = new Dictionary<string, string>();
            }

            // "legends_label" はそのまま読み込む
            if (rawData.ContainsKey("legends_label"))
            {
                model.Legends = JsonSerializer.Deserialize<Dictionary<string, Legend>>(rawData["legends_label"].GetRawText());
            }
            else
            {
                model.Legends = new Dictionary<string, Legend>();
            }

            // "weapons_label" のキーと値を入れ替える
            if (rawData.ContainsKey("weapons_label"))
            {
                var originalWeapons = JsonSerializer.Deserialize<Dictionary<string, string>>(rawData["weapons_label"].GetRawText());
                model.WeaponsLabelSwapped = SwapDictionary(originalWeapons);
            }
            else
            {
                model.WeaponsLabelSwapped = new Dictionary<string, string>();
            }

            // "associate_weapons_label" のキーと値を入れ替える
            if (rawData.ContainsKey("associate_weapons_label"))
            {
                var originalAssociateWeapons = JsonSerializer.Deserialize<Dictionary<string, string>>(rawData["associate_weapons_label"].GetRawText());
                model.AssociateWeaponsLabelSwapped = SwapDictionary(originalAssociateWeapons);
            }
            else
            {
                model.AssociateWeaponsLabelSwapped = new Dictionary<string, string>();
            }

            // "items_label" のキーと値を入れ替える
            if (rawData.ContainsKey("items_label"))
            {
                var originalItemsLabel = JsonSerializer.Deserialize<Dictionary<string, string>>(rawData["items_label"].GetRawText());
                model.ItemsLabelSwapped = SwapDictionary(originalItemsLabel);
            }
            else
            {
                model.ItemsLabelSwapped = new Dictionary<string, string>();
            }

            return model;
        }

        // キーと値を入れ替えるヘルパーメソッド
        private Dictionary<string, string> SwapDictionary(Dictionary<string, string> original)
        {
            var swapped = new Dictionary<string, string>();
            foreach (var kv in original)
            {
                // ※ 重複する値が存在する場合、上書きやエラーへの対策が必要です
                swapped[kv.Value] = kv.Key;
            }
            return swapped;
        }
    }
}
