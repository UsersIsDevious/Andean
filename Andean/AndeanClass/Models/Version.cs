using System;

namespace AndeanClass
{
    /// <summary>
    /// バージョン情報を表すクラス
    /// </summary>
    public class Version
    {
        /// <summary>
        /// メジャーバージョン番号 (uint32)
        /// </summary>
        public uint MajorNum { get; private set; }

        /// <summary>
        /// マイナーバージョン番号 (uint32)
        /// </summary>
        public uint MinorNum { get; private set; }

        /// <summary>
        /// ビルドスタンプ (uint32)
        /// </summary>
        public uint BuildStamp { get; private set; }

        /// <summary>
        /// リビジョン情報
        /// </summary>
        public string Revision { get; private set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="major_num">メジャーバージョン番号 (uint32)</param>
        /// <param name="minor_num">マイナーバージョン番号 (uint32)</param>
        /// <param name="build_stamp">ビルドスタンプ (uint32)</param>
        /// <param name="revision">リビジョン情報</param>
        public Version(uint major_num, uint minor_num, uint build_stamp, string revision)
        {
            MajorNum = major_num;
            MinorNum = minor_num;
            BuildStamp = build_stamp;
            Revision = revision;
        }

        /// <summary>
        /// バージョンのステータスをオブジェクトとして返す
        /// </summary>
        /// <returns>バージョンのステータス情報を含むオブジェクト</returns>
        public object GetStatus()
        {
            return new
            {
                major_num = MajorNum,
                minor_num = MinorNum,
                build_stamp = BuildStamp,
                revision = Revision
            };
        }

        /// <summary>
        /// バージョンの詳細を表示するメソッド
        /// </summary>
        public void PrintDetails()
        {
            Console.WriteLine($"Version: {MajorNum}.{MinorNum}");
            Console.WriteLine($"Build Stamp: {BuildStamp}");
            Console.WriteLine($"Revision: {Revision}");
        }
    }
}
