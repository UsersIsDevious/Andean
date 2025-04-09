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
        public CsvDataTeam Original { get; set; }

        /// <summary>
        /// CSVデータのコピーを保持する辞書
        /// </summary>
        /// <remarks>オリジナルのデータを変更せずに、コピーを操作するために使用される</remarks>
        public CsvDataTeam Diff { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="original">オリジナルのCSVデータ</param>
        public CsvData(CsvDataTeam original)
        {
            Original = original;
            Diff = new CsvDataTeam(original.Teams.ToDictionary(
                kvp => kvp.Key,
                kvp => new CsvDataElement(kvp.Value.TeamName, kvp.Value.LogoUrl, new List<string>(kvp.Value.Players))
            ));
        }
    }

    /// <summary>
    /// CSVデータのチーム情報を保持するクラス
    /// <remarks>各チームの情報は、TeamIdをキーにして、CsvDataElementを値として保持される</remarks>
    /// </summary>
    public class CsvDataTeam
    {
        public Dictionary<string, CsvDataElement> Teams { get; set; } = new Dictionary<string, CsvDataElement>();

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <remarks>CSVデータの要素を保持するクラス</remarks>
        public CsvDataTeam(Dictionary<string, CsvDataElement> teams)
        {
            Teams = teams;
        }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="teamId">チームID</param>
        /// <param name="csvDataElement">CSVデータの要素</param>
        /// <remarks>各要素は、チーム名、ロゴURL、プレイヤーのリストを保持する</remarks>
        public CsvDataTeam(string teamId, CsvDataElement csvDataElement)
        {
            Teams[teamId] = csvDataElement;
        }
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

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="teamName">チーム名</param>
        /// <param name="logoUrl">ロゴURL</param>
        /// <param name="players">プレイヤーのリスト</param>
        /// <remarks>各要素は、プレイヤー名を保持する</remarks>
        public CsvDataElement(string teamName, string logoUrl, List<string>? players = null)
        {
            if (players == null)
            {
                players = new List<string>();
            }

            TeamName = teamName;
            LogoUrl = logoUrl;
            Players = players;
        }
    }
}
