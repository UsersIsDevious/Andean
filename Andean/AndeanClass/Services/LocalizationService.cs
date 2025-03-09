using Andean.AndeanClass;
using Andean.Utilities;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace Andean.AndeanClass.Services
{
    public class LocalizationService
    {
        private static LocalizationService? _instance;
        private static readonly object _lock = new object();

        /// <summary>
        /// 前処理済みのローカライズデータ
        /// </summary>
        public LocalizedDataModel LocalizedData { get; private set; }

        // プライベートコンストラクタ
        public LocalizationService(IConfiguration configuration, FileReadService fileReadService)
        {
            // 設定から言語コードを取得（存在しなければ "en" をデフォルトとする）
            string langCode = configuration["Localization:Language"] ?? "en";
            string filePath = $"config/languages/{langCode}.json";

            // JSONファイルを前処理してデータモデルを作成
            // FileReadService を DI で受け取り、LocalizationDataProcessor を作成
            var processor = new LocalizationDataProcessor(filePath, fileReadService);
            // 非同期メソッドを同期的に待機（ブロッキング）
            LocalizedData = processor.ProcessAsync().GetAwaiter().GetResult();
        }

        /// <summary>
        /// シングルトンインスタンスを取得（初回呼び出し時に初期化）
        /// </summary>
        /// <param name="configuration">設定情報。初回のみ使用されます。</param>
        /// <returns>LocalizationManager のインスタンス</returns>
        public static LocalizationService GetInstance(IConfiguration configuration, FileReadService fileReadService)
        {
            if (_instance == null)
            {
                lock (_lock)
                {
                    if (_instance == null)
                    {
                        _instance = new LocalizationService(configuration, fileReadService);
                    }
                }
            }
            return _instance;
        }

        /// <summary>
        /// 指定した type（"weapons_label", "associate_weapons_label", "items_label"）と value を元に、
        /// 前処理済みの入れ替えデータから元のキーを取得して返却します。
        /// </summary>
        /// <param name="type">対象のデータタイプ</param>
        /// <param name="value">逆転済みデータ内の値</param>
        /// <returns>対応する元のキー</returns>
        /// <exception cref="ArgumentException">未対応の type が指定された場合</exception>
        /// <exception cref="KeyNotFoundException">指定の value が見つからなかった場合</exception>
        /// <exception cref="Exception">その他のエラー発生時</exception>
        public string GetOriginalKey(string type, string value)
        {
            try
            {
                switch (type)
                {
                    case "weapons_label":
                        if (LocalizedData.WeaponsLabelSwapped != null &&
                            LocalizedData.WeaponsLabelSwapped.TryGetValue(value, out var originalKey1))
                        {
                            return originalKey1;
                        }
                        else
                        {
                            throw new KeyNotFoundException($"value '{value}' が weapons_label に存在しません。");
                        }

                    case "associate_weapons_label":
                        if (LocalizedData.AssociateWeaponsLabelSwapped != null &&
                            LocalizedData.AssociateWeaponsLabelSwapped.TryGetValue(value, out var originalKey2))
                        {
                            return originalKey2;
                        }
                        else
                        {
                            throw new KeyNotFoundException($"value '{value}' が associate_weapons_label に存在しません。");
                        }

                    case "items_label":
                        if (LocalizedData.ItemsLabelSwapped != null &&
                            LocalizedData.ItemsLabelSwapped.TryGetValue(value, out var originalKey3))
                        {
                            return originalKey3;
                        }
                        else
                        {
                            throw new KeyNotFoundException($"value '{value}' が items_label に存在しません。");
                        }

                    default:
                        throw new ArgumentException($"未対応の type: {type}");
                }
            }
            catch (Exception ex)
            {
                // 必要に応じてエラーログの出力などを実施
                throw new Exception($"type '{type}' と value '{value}' のキー取得中にエラーが発生しました: {ex.Message}", ex);
            }
        }
    }
}
