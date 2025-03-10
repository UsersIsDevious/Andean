using System;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using Andean.Config;
using Andean.Utilities;
using Microsoft.Extensions.Primitives;

namespace Andean.Config
{
    /// <summary>
    /// Config/config.json の内容を取得・更新するサービス
    /// </summary>
    public class ConfigService
    {
        // <summary>
        /// 最新の設定値が格納されるプロパティ
        /// </summary>
        public static AppConfig Config { get; private set; }
        private static IConfigurationRoot _configuration;
        private static readonly string _configFilePath = Path.Combine("config", "config.json");


        public ConfigService()
        {
            _configuration = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile(_configFilePath, optional: true, reloadOnChange: true)
               .Build();

            LoadConfig();

            // 設定ファイルの変更を監視して再読み込み（reloadOnChange 相当）
            ChangeToken.OnChange(() => _configuration.GetReloadToken(), LoadConfig);
        }

        // _configuration から AppConfig を取得して Config プロパティを更新
        private static void LoadConfig()
        {
            Config = _configuration.Get<AppConfig>();
        }

        /// <summary>
        /// 指定された AppConfig オブジェクトを JSON にシリアライズし、config/config.json に上書き保存します。
        /// 保存後、設定ファイルの再読み込みを実施して Config を更新します。
        /// </summary>
        /// <param name="config">更新する AppConfig オブジェクト</param>
        public static async Task UpdateConfigAsync(AppConfig config)
        {
            var options = new JsonSerializerOptions { WriteIndented = true };
            string json = JsonSerializer.Serialize(config, options);
            await FileOutputService.WriteToFileAsync("Config", "config.json", json, FileWriteMode.Overwrite);
            // 保存後、再読み込みして最新値を反映（※reloadOnChange による自動更新が働かない場合の対策）
            _configuration.Reload();
            LoadConfig();
        }



        /// <summary>
        /// 指定されたセクションのみを更新して config/config.json を上書き保存します。
        /// セクションキーは小文字で指定してください（例："apexlegends", "penetrator", "output", "language", "log_dir", "data_fps", "score_setting"）。
        /// </summary>
        /// <typeparam name="T">更新するセクションの型</typeparam>
        /// <param name="sectionKey">更新対象のセクションキー</param>
        /// <param name="newSection">新しい値</param>
        public static async Task UpdateConfigSectionAsync<T>(string sectionKey, T newSection)
        {
            // 現在の設定を取得（ここでは Config プロパティにキャッシュされている内容を利用）
            AppConfig config = Config;

            // セクションキーに応じた更新処理（必要に応じて他のセクションも追加）
            switch (sectionKey.ToLowerInvariant())
            {
                case "apexlegends":
                    config.ApexLegends = newSection as ApexLegendsConfig;
                    break;
                case "penetrator":
                    config.Penetrator = newSection as System.Collections.Generic.List<string>;
                    break;
                case "output":
                    config.Output = newSection as string;
                    break;
                case "language":
                    config.Language = newSection as string;
                    break;
                case "log_dir":
                    config.Log_Dir = newSection as string;
                    break;
                case "data_fps":
                    config.Data_Fps = Convert.ToInt32(newSection);
                    break;
                case "score_setting":
                    config.Score_Setting = newSection as ScoreSettingConfig;
                    break;
                default:
                    throw new ArgumentException($"Unknown config section: {sectionKey}");
            }

            // 更新後、ファイルに書き出し＆再読み込み
            await UpdateConfigAsync(config);
        }
    }
}
