using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Andean.Config;
using Andean.Utilities;

namespace Andean.ApexLiveAPI.Services
{
    public class ApexPlaylistService
    {
        private readonly ConfigService _configService;
        private readonly FileReadService _fileReadService;

        public ApexPlaylistService(ConfigService configService, FileReadService fileReadService)
        {
            _configService = configService;
            _fileReadService = fileReadService;
        }

        /// <summary>
        /// 設定ファイルに指定された apexlegends.path 配下の r2/playlists_r5.txt を読み込み、
        /// VDF 形式をパースして、ログ出力およびメタデータとして返します。
        /// </summary>
        /// <returns>パース結果のメタデータ</returns>
        public async Task<Dictionary<string, object>> GetPlaylistMetadataAsync()
        {
            // 設定を取得
            AppConfig config = await _configService.GetConfigAsync();

            // apexlegends.path と "r2/playlists_r5.txt" を組み合わせてファイルパスを作成
            string filePath = Path.Combine(config.ApexLegends.Path, "r2", "playlists_r5.txt");

            // ファイル内容を読み込む（例外処理は FileReadService 内で対応）
            string fileContent = await _fileReadService.ReadFileAsync(filePath);

            // VDF 形式の内容をパースして Dictionary として取得
            Dictionary<string, object> metadata = VdfParser.ParseVdf(fileContent);

            // ログに出力（ここでは Console に出力していますが、必要に応じてロガーを利用）
            Console.WriteLine("=== Apex Playlist Metadata ===");
            Console.WriteLine(fileContent);
            Console.WriteLine("=== End Metadata ===");

            return metadata;
        }
    }
}
