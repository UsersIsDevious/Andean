using System;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using Andean.Config;
using Andean.Utilities;

namespace Andean.Config
{
    /// <summary>
    /// Config/config.json の内容を取得・更新するサービス
    /// </summary>
    public class ConfigService
    {
        private readonly IConfiguration _configuration;
        private readonly FileOutputService _fileOutputService;
        private readonly string _configFilePath;

        public ConfigService(IConfiguration configuration, FileOutputService fileOutputService)
        {
            _configuration = configuration;
            _fileOutputService = fileOutputService;
            // 設定ファイルのパス（プロジェクトルートからの相対パス）
            _configFilePath = Path.Combine("Config", "config.json");
        }

        /// <summary>
        /// IConfiguration を利用して、config.json の内容を AppConfig 型にバインドして取得します。
        /// (reloadOnChange により自動更新済みの値を取得可能)
        /// </summary>
        public Task<AppConfig> GetConfigAsync()
        {
            // IConfiguration はすでに読み込まれているので、Task.FromResult でラップして返す
            return Task.FromResult(_configuration.Get<AppConfig>());
        }

        /// <summary>
        /// 指定された AppConfig オブジェクトを JSON にシリアライズし、config.json に上書き保存します。
        /// FileOutputService の WriteToFileAsync を利用します。
        /// </summary>
        /// <param name="config">更新する AppConfig オブジェクト</param>
        public async Task UpdateConfigAsync(AppConfig config)
        {
            var options = new JsonSerializerOptions { WriteIndented = true };
            string json = JsonSerializer.Serialize(config, options);
            await _fileOutputService.WriteToFileAsync("Config", "config.json", json, FileWriteMode.Overwrite);
        }

        /// <summary>
        /// 指定されたセクションのみを更新して config.json を上書き保存します。
        /// セクションキーは小文字で指定してください（例："apexlegends", "penetrator", "output", "language", "log_dir", "data_fps", "score_setting"）。
        /// </summary>
        /// <typeparam name="T">更新するセクションの型</typeparam>
        /// <param name="sectionKey">更新対象のセクションキー</param>
        /// <param name="newSection">新しい値</param>
        public async Task UpdateConfigSectionAsync<T>(string sectionKey, T newSection)
        {
            // IConfiguration 経由で現在の設定を取得
            AppConfig config = _configuration.Get<AppConfig>();

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

            await UpdateConfigAsync(config);
        }
    }
}
