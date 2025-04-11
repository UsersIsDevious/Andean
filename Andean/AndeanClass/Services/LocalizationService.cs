using AndeanSystems;

namespace AndeanClass.Services
{
    public static class LocalizationService
    {
        private static readonly object _lock = new object();

        private static string directoryPath = "config/languages"; // localizeディレクトリのパス

        private static readonly AppConfig _config = ConfigService.Config;

        /// <summary>
        /// 前処理済みのローカライズデータ
        /// </summary>
        public static LocalizedDataModel LocalizedData { get; private set; }

        // プライベートコンストラクタ
        static LocalizationService()
        {
            // 設定から言語コードを取得（存在しなければ "en" をデフォルトとする）
            string langCode = string.IsNullOrWhiteSpace(ConfigService.Config.Language) ? "en" : ConfigService.Config.Language;
            string filePath = $"{directoryPath}/{langCode}.json";

            var processor = new LocalizationDataProcessor(filePath);
            // 非同期メソッドを同期的に待機（ブロッキング）
            LocalizedData = processor.ProcessAsync().GetAwaiter().GetResult();
            //Console.WriteLine(JsonSerializer.Serialize(LocalizedData, new JsonSerializerOptions
            //{
            //    WriteIndented = true // ← 見やすい整形
            //}));
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
        public static string? GetOriginalKey(string type, string value)
        {
            try
            {
                switch (type)
                {
                    case "weapons_label":
                        if (LocalizedData.WeaponsLabelSwapped != null &&
                            LocalizedData.WeaponsLabelSwapped.TryGetValue(value, out var weapoonId))
                        {
                            return weapoonId;
                        }
                        else
                        {
                            throw new KeyNotFoundException($"value '{value}' が weapons_label に存在しません。");
                        }

                    case "associate_weapons_label":
                        if (LocalizedData.AssociateWeaponsLabelSwapped != null &&
                            LocalizedData.AssociateWeaponsLabelSwapped.TryGetValue(value, out var associateWeaponId))
                        {
                            return associateWeaponId;
                        }
                        else
                        {
                            throw new KeyNotFoundException($"value '{value}' が associate_weapons_label に存在しません。");
                        }

                    case "items_label":
                        if (LocalizedData.ItemsLabelSwapped != null &&
                            LocalizedData.ItemsLabelSwapped.TryGetValue(value, out var itemId))
                        {
                            return itemId;
                        }
                        else
                        {
                            throw new KeyNotFoundException($"value '{value}' が items_label に存在しません。");
                        }

                    case "legends_label":
                        if (LocalizedData.Legends != null)
                        {
                            foreach (var legend in LocalizedData.Legends)
                            {
                                if (legend.Value.Name == value)
                                {
                                    return legend.Key;
                                }
                            }
                            throw new KeyNotFoundException($"value '{value}' が legends_label に存在しません。");
                        }
                        else
                        {
                            throw new KeyNotFoundException($"value '{value}' が legends_label に存在しません。");
                        }

                    default:
                        throw new ArgumentException($"未対応の type: {type}");
                }
            }
            catch (System.Exception ex)
            {
                // エラーログ出力などを適宜実施
                // throw new System.Exception($"type '{type}' と value '{value}' のキー取得中にエラーが発生しました: {ex.Message}", ex);
                // 非同期にファイルへ追記（ファイルは config.Log_Dir フォルダ配下に作成）
                Task.Run(() => FileOutputService.WriteToFileAsync(_config.Log_Dir, "GetOriginalKey_Exception.txt", $"Type '{type}' と Value '{value}' のキー取得中にエラーが発生しました: {ex.Message}{Environment.NewLine}", FileWriteMode.Append)).Wait();
                return null;
            }
        }

        /// <summary>
        /// 使用された武器が貫通武器かどうかをConfig.Penetratorの設定に基づいて判定します。
        /// </summary>
        /// <param name="weaponName">武器ID</param>
        /// <returns>貫通武器かどうか</returns>
        public static bool CheckShieldPenetrator(string weaponName)
        {
            return ConfigService.Config.Penetrator.Contains(weaponName);
        }

        /// <summary>
        /// レジェンドのアビリティ名を取得します。
        /// </summary>
        /// <param name="legendName">対象のレジェンドID</param>
        /// <param name="type">対象アビリティの種別</param>
        /// <param name="abilityName">アビリティ名</param>
        /// <returns>対象のレジェンドのローカライズされたアビリティ名</returns>
        /// <exception cref="KeyNotFoundException">指定のレジェンドIDが見つからなかった場合</exception>
        /// <exception cref="Exception">その他のエラー発生時</exception>
        public static string? GetLegendAbilityName(string legendName, string type, string abilityName)
        {
            try
            {
                if (LocalizedData.Legends != null)
                {
                    if (GetOriginalKey("legends_label", legendName) == null)
                    {
                        throw new KeyNotFoundException($"LegendID '{legendName}' が見つかりません。");
                    }

                    var legend = LocalizedData.Legends[legendName];

                    string result = type switch
                    {
                        "Passive" => legend.Passive,
                        "Tactical" => legend.Tactical,
                        "Ultimate" => legend.Ultimate,
                        _ => throw new KeyNotFoundException($"未対応の type: {type}"),
                    };

                    if (result == abilityName)
                    {
                        return result;
                    }
                    else
                    {
                        throw new KeyNotFoundException($"abilityName '{abilityName}' が見つかりません。");
                    }
                }
                else
                {
                    throw new KeyNotFoundException($"LegendID '{legendName}' が見つかりません。");
                }
            }
            catch (System.Exception ex)
            {
                // エラーログ出力などを適宜実施
                // throw new System.Exception($"レジェンド '{legendId}' のアビリティ名取得中にエラーが発生しました: {ex.Message}", ex);
                // 非同期にファイルへ追記（ファイルは config.Log_Dir フォルダ配下に作成）
                Task.Run(() => FileOutputService.WriteToFileAsync(_config.Log_Dir, "GetLegendAbilityName_Exception.txt", $"レジェンド '{legendName}' のアビリティ名取得中にエラーが発生しました: {ex.Message}{Environment.NewLine}", FileWriteMode.Append)).Wait();
                return null;
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
        public static string? GetLegendUpgradeSide(string legendName, string level, string upgradeName, string upgradeDesc)
        {
            try
            {
                if (LocalizedData.Legends != null)
                {
                    if (GetOriginalKey("legends_label", legendName) == null)
                    {
                        throw new KeyNotFoundException($"legendName '{legendName}' が見つかりません。");
                    }

                    var legend = LocalizedData.Legends[legendName];

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
                // throw new System.Exception($"レジェンド '{legendName}' のレベル '{level}' アップグレード '{upgradeName}' : '{upgradeDesc}' のサイド取得中にエラーが発生しました: {ex.Message}", ex);
                // 非同期にファイルへ追記（ファイルは config.Log_Dir フォルダ配下に作成）
                Task.Run(() => FileOutputService.WriteToFileAsync(_config.Log_Dir, "GetLegendUpgradeSide_Exception.txt", $"レジェンド '{legendName}' のレベル '{level}' アップグレード '{upgradeName}' : '{upgradeDesc}' のサイド取得中にエラーが発生しました: {ex.Message}{Environment.NewLine}", FileWriteMode.Append)).Wait();
                return null;
            }
        }

        public static List<string> GetSupportedLanguageCodes()
        {

            if (!Directory.Exists(directoryPath))
            {
                // ディレクトリが存在しない場合は空リストを返却
                return new List<string>();
            }

            var files = Directory.GetFiles(directoryPath, "*.json");

            var languageCodes = files
                .Select(path => Path.GetFileNameWithoutExtension(path))
                .Where(code => !string.IsNullOrWhiteSpace(code))
                .Distinct()
                .OrderBy(code => code)
                .ToList();

            return languageCodes;
        }
    }
}
