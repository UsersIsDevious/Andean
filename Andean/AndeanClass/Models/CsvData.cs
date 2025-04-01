namespace AndeanClass
{
    /// <summary>
    /// CSVデータを保持するクラス
    /// </summary>
    /// <remarks>CSVデータは、オリジナルとコピーの2つのセクションに分かれています。</remarks>
    public class CsvData
    {
        /// <summary>
        /// CSVデータのオリジナルを保持する辞書
        /// </summary>
        public CsvDataTeam Original { get; set; } = new CsvDataTeam();

        /// <summary>
        /// CSVデータのコピーを保持する辞書
        /// </summary>
        /// <remarks>オリジナルのデータを変更せずに、コピーを操作するために使用される</remarks>
        public CsvDataTeam Copy { get; set; } = new CsvDataTeam();
    }

    /// <summary>
    /// CSVデータのチーム情報を保持するクラス
    /// <remarks>各チームの情報は、TeamIdをキーにして、CsvDataElementを値として保持される</remarks>
    /// </summary>
    public class CsvDataTeam
    {
        public Dictionary<string, CsvDataElement> Teams { get; set; } = new Dictionary<string, CsvDataElement>();
    }

    /// <summary>
    /// CSVデータの要素を保持するクラス
    /// <remarks>各要素は、チーム名、ロゴURL、プレイヤーのリストを保持する</remarks>
    /// </summary>
    public class CsvDataElement
    {
        /// <summary>
        /// チーム名
        /// </summary>
        public string TeamName { get; set; } = string.Empty;

        /// <summary>
        /// ロゴURL
        /// </summary>
        public string LogoUrl { get; set; } = string.Empty;

        /// <summary>
        /// プレイヤーのリスト
        /// </summary>
        /// <remarks>各要素は、プレイヤー名を保持する</remarks>
        public List<string> Players { get; set; } = new List<string>();
    }
}
