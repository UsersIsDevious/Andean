using System.Text.RegularExpressions;

namespace Andean.Utilities
{
    public static class GetSteamPath
    {

        public static async Task<string?> GetSteamPathAsync()
        {
            try
            {
                // レジストリからSteamPathを取得するコマンド
                string command = "reg query \"HKCU\\Software\\Valve\\Steam\" /v SteamPath";
                string output = await CommandExecutionService.ExecuteCommandAsync(command, CommandMode.CommandPrompt);

                // 出力例:
                // HKEY_CURRENT_USER\Software\Valve\Steam
                //    SteamPath    REG_SZ    C:\Program Files (x86)\Steam
                string[] lines = output.Split('\n');
                foreach (string line in lines)
                {
                    if (line.Contains("SteamPath"))
                    {
                        // 連続する空白で区切られているため、Regex.Splitでパーツに分割
                        string[] parts = Regex.Split(line.Trim(), @"\s{2,}");
                        if (parts.Length >= 3)
                        {
                            return parts[2];  // Steamのインストール先パスを返す
                        }
                    }
                }
                return null;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine("Steamパスの取得に失敗しました: " + ex);
                return null;
            }
        }
    }
}
