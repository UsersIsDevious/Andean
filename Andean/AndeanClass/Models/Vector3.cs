namespace AndeanClass
{
    /// <summary>
    /// 3次元ベクトルを表すクラス
    /// </summary>
    public class Vector3
    {
        /// <summary>
        /// X座標
        /// </summary>
        public double X { get; set; }

        /// <summary>
        /// Y座標
        /// </summary>
        public double Y { get; set; }

        /// <summary>
        /// Z座標
        /// </summary>
        public double Z { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="x">X座標の値（デフォルトは 0）</param>
        /// <param name="y">Y座標の値（デフォルトは 0）</param>
        /// <param name="z">Z座標の値（デフォルトは 0）</param>
        public Vector3(double x = 0, double y = 0, double z = 0)
        {
            X = x;
            Y = y;
            Z = z;
        }

        /// <summary>
        /// 座標を計算、更新するメソッド
        /// </summary>
        /// <param name="newX">新しいX座標</param>
        /// <param name="newY">新しいY座標</param>
        /// <param name="newZ">新しいZ座標</param>
        /// <param name="mapOffset">
        /// 座標オフセット。配列の要素は以下の通り:
        /// [0] - X軸方向のオフセット,
        /// [1] - Y軸方向のオフセット,
        /// [2] - 割合（倍率）
        /// </param>
        /// <returns>更新後の Vector3 インスタンス</returns>
        /// <exception cref="ArgumentException">mapOffset が null または要素数が 3 未満の場合にスローされます</exception>
        public Vector3 UpdateValues(double newX, double newY, double newZ, double[] mapOffset)
        {
            if (mapOffset == null || mapOffset.Length < 3)
            {
                throw new ArgumentException("mapOffset は少なくとも 3 つの要素を持つ必要があります。", nameof(mapOffset));
            }

            X = (newX + mapOffset[0]) / mapOffset[2] + 2048;
            Y = (newY + mapOffset[1]) / mapOffset[2] + 2048;
            Z = newZ / mapOffset[2];
            return this;
        }

    }
}
