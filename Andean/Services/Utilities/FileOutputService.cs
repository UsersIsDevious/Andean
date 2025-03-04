using System.IO;
using Newtonsoft.Json.Linq;  // JSON操作に Newtonsoft.Json を利用する場合

namespace Andean.AndeanClass.Services.Utilities
{
    public enum FileWriteMode
    {
        Overwrite,  // 上書きモード
        Append,     // 追記モード
        JsonAppend  // JSON 追記モード（既存の JSON 配列に新しいオブジェクトを追加）
    }

    public class FileOutputService
    {
        /// <summary>
        /// 指定されたパスとファイル名に対し、内容をモードに応じて書き込みます。
        /// </summary>
        /// <param name="path">出力先ディレクトリのパス</param>
        /// <param name="fileName">出力するファイル名</param>
        /// <param name="content">書き込む内容</param>
        /// <param name="mode">書き込みモード (Overwrite, Append, JsonAppend)</param>
        public void WriteToFile(string path, string fileName, string content, FileWriteMode mode)
        {
            // 出力先のディレクトリが存在しなければ作成
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            string fullPath = Path.Combine(path, fileName);

            switch (mode)
            {
                case FileWriteMode.Overwrite:
                    File.WriteAllText(fullPath, content);
                    break;

                case FileWriteMode.Append:
                    File.AppendAllText(fullPath, content);
                    break;

                case FileWriteMode.JsonAppend:
                    // JSON追記モードの場合、ファイルが存在していれば既存の JSON 配列に追加、なければ新たに JSON 配列を作成
                    if (File.Exists(fullPath))
                    {
                        var existingJson = File.ReadAllText(fullPath);
                        JArray jsonArray;
                        try
                        {
                            jsonArray = JArray.Parse(existingJson);
                        }
                        catch
                        {
                            jsonArray = new JArray();
                        }
                        var newObj = JObject.Parse(content);
                        jsonArray.Add(newObj);
                        File.WriteAllText(fullPath, jsonArray.ToString());
                    }
                    else
                    {
                        var jsonArray = new JArray();
                        var newObj = JObject.Parse(content);
                        jsonArray.Add(newObj);
                        File.WriteAllText(fullPath, jsonArray.ToString());
                    }
                    break;

                default:
                    throw new System.ArgumentException("Unknown FileWriteMode");
            }
        }
    }
}
