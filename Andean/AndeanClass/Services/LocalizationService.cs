using AndeanClass;
using Andean.Utilities;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using Andean.Config;

namespace AndeanClass.Services
{
    public static class LocalizationService
    {
        private static readonly object _lock = new object();

        /// <summary>
        /// 前処理済みのローカライズデータ
        /// </summary>
        public static LocalizedDataModel LocalizedData { get; private set; }

        // プライベートコンストラクタ
        static LocalizationService()
        {
            // 設定から言語コードを取得（存在しなければ "en" をデフォルトとする）
            string langCode = ConfigService.Config.Language ?? "en";
            string filePath = $"config/languages/{langCode}.json";

            var processor = new LocalizationDataProcessor(filePath);
            // 非同期メソッドを同期的に待機（ブロッキング）
            LocalizedData = processor.ProcessAsync().GetAwaiter().GetResult();
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
        public static string GetOriginalKey(string type, string value)
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
            catch (System.Exception ex)
            {
                // エラーログ出力などを適宜実施
                throw new System.Exception($"type '{type}' と value '{value}' のキー取得中にエラーが発生しました: {ex.Message}", ex);
            }
        }

        /// <summary>
        /// レジェンドのアップグレードで左右どちらを選択したかを取得します。
        /// </summary>
        /// <param name="legendName">対象のレジェンド名</param>
        /// <param name="level">対象のレジェンドのレベル</param>
        /// <param name="upgradeName">対象のアップグレード名</param>
        /// <param name="upgradeDesc">対象のアップグレードの説明</param>
        /// <returns>対象のレジェンドのアップグレード関連ローカライズデータ</returns>
        /// <exception cref="KeyNotFoundException">指定のレジェンド名が見つからなかった場合</exception>
        /// <exception cref="Exception">その他のエラー発生時</exception>
        public static string GetLegendUpgradeSide(string legendName, string level, string upgradeName, string upgradeDesc)
        {
            try
            {
                if (LocalizedData.Legends != null &&
                    LocalizedData.Legends.TryGetValue(legendName, out var legend))
                {
                    if (legend.Upgrade != null &&
                        legend.Upgrade.TryGetValue(level, out var upgrades))
                    {
                        var left = upgrades.Left;
                        var right = upgrades.Right;

                        if (left != null && left.Name == upgradeName && left.Description == upgradeDesc)
                        {
                            return "left";
                        }
                        else if (right != null && right.Name == upgradeName && right.Description == upgradeDesc)
                        {
                            return "right";
                        }
                        else
                        {
                            throw new KeyNotFoundException($"upgradeName '{upgradeName}' が見つかりません。");
                        }
                    }
                    else
                    {
                        throw new KeyNotFoundException($"level '{level}' が見つかりません。");
                    }
                }
                else
                {
                    throw new KeyNotFoundException($"legendName '{legendName}' が見つかりません。");
                }
            }
            catch (System.Exception ex)
            {
                // エラーログ出力などを適宜実施
                throw new System.Exception($"レジェンド '{legendName}' のレベル '{level}' アップグレード '{upgradeName}' : '{upgradeDesc}' のサイド取得中にエラーが発生しました: {ex.Message}", ex);
            }
        }
    }
}
