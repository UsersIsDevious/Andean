using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Andean.Utilities
{
    /// <summary>
    /// コマンド実行モードの種類
    /// </summary>
    public enum CommandMode
    {
        CommandPrompt,
        PowerShell
    }

    public class CommandExecutionService
    {
        /// <summary>
        /// 指定されたコマンドを指定されたモードで非同期実行します。
        /// </summary>
        /// <param name="command">実行するコマンド文字列</param>
        /// <param name="mode">実行モード（CommandPrompt または PowerShell）</param>
        /// <returns>コマンドの標準出力の結果</returns>
        public async Task<string> ExecuteCommandAsync(string command, CommandMode mode)
        {
            // 使用するシェルと引数の設定
            string shell;
            string shellArgs;

            switch (mode)
            {
                case CommandMode.PowerShell:
                    shell = "powershell.exe";
                    // -NoProfile を指定して、プロファイルの読み込みを避ける
                    shellArgs = $"-NoProfile -Command \"{command}\"";
                    break;
                case CommandMode.CommandPrompt:
                default:
                    shell = "cmd.exe";
                    // /c オプションでコマンド実行後に終了
                    shellArgs = $"/c \"{command}\"";
                    break;
            }

            // ProcessStartInfo の設定
            ProcessStartInfo psi = new ProcessStartInfo
            {
                FileName = shell,
                Arguments = shellArgs,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            };

            using (Process process = new Process { StartInfo = psi })
            {
                process.Start();

                // 非同期で標準出力と標準エラーを読み取る
                string output = await process.StandardOutput.ReadToEndAsync();
                string error = await process.StandardError.ReadToEndAsync();

                process.WaitForExit();

                if (!string.IsNullOrEmpty(error))
                {
                    throw new Exception($"Command execution error: {error}");
                }

                return output;
            }
        }
    }
}
