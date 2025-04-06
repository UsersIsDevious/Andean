using AndeanSystems;

namespace ApexLiveAPI.Services
{
    public static class ApexPlaylistService
    {

        /// <summary>
        /// 設定ファイルに指定された apexlegends.path 配下の r2/playlists_r5.txt を読み込み、
        /// VDF 形式をパースして、ログ出力およびメタデータとして返します。
        /// </summary>
        /// <returns>パース結果のメタデータ</returns>
        public static async Task<Dictionary<string, object>> GetPlaylistMetadataAsync()
        {
            // apexlegends.path と "r2/playlists_r5.txt" を組み合わせてファイルパスを作成
            string filePath = Path.Combine(ConfigService.Config.ApexLegends.Path, "r2", "playlists_r5.txt");

            // ファイル内容を読み込む（例外処理は FileReadService 内で対応）
            string fileContent = await FileReadService.ReadFileAsync(filePath);

            // VDF 形式の内容をパースして Dictionary として取得
            Dictionary<string, object> playlists_r5 = await VdfParser.ParseVdf(fileContent);

            return playlists_r5;
        }
    }
}
