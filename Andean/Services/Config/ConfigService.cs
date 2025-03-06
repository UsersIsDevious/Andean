using System;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using Andean;

namespace Andean.Config
{
    /// <summary>
    /// Config/config.json の内容を取得・更新するサービス
    /// </summary>
    public class ConfigService
    {
        // 設定ファイルのパス（プロジェクトルートからの相対パス）
        private readonly string _configFilePath = Path.Combine("Config", "config.json");

        /// <summary>
        /// config.json の内容を AppConfig 型にデシリアライズして取得します。
        /// </summary>
        /// <returns>AppConfig のインスタンス</returns>
        public async Task<AppConfig> GetConfigAsync()
        {
            if (!File.Exists(_configFilePath))
            {
                throw new FileNotFoundException("Configuration file not found.", _configFilePath);
            }

            string json = await File.ReadAllTextAsync(_configFilePath);
            return JsonSerializer.Deserialize<AppConfig>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
        }

        /// <summary>
        /// 指定された AppConfig オブジェクトを JSON にシリアライズして config.json に上書き保存します。
        /// </summary>
        /// <param name="config">保存する AppConfig オブジェクト</param>
        public async Task UpdateConfigAsync(AppConfig config)
        {
            var options = new JsonSerializerOptions { WriteIndented = true };
            string json = JsonSerializer.Serialize(config, options);
            await File.WriteAllTextAsync(_configFilePath, json);
        }
    }
}
