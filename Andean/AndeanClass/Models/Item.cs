namespace Andean.AndeanClass
{
    /// <summary>
    /// プレイヤーが保有するアイテムを表すクラス
    /// </summary>
    public class Item
    {
        /// <summary>
        /// アイテム名
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// アイテムレベル
        /// </summary>
        public int Level { get; set; }

        /// <summary>
        /// アイテムの保有数
        /// </summary>
        public int Quantity { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="name">アイテムの名前</param>
        /// <param name="level">アイテムのレベル</param>
        /// <param name="quantity">アイテムの保有数</param>
        public Item(string name, int level, int quantity)
        {
            Name = name;
            Level = level;
            Quantity = quantity;
        }

        /// <summary>
        /// アイテムの個数を変更する
        /// </summary>
        /// <param name="newQuantity">新しい個数</param>
        /// <returns>更新後の Item インスタンス</returns>
        public Item SetQuantity(int newQuantity)
        {
            Quantity = newQuantity;
            return this;
        }

        /// <summary>
        /// アイテムの詳細を返す
        /// </summary>
        /// <returns>アイテムのステータス</returns>
        public Item GetItemStatus()
        {
            return this;
        }
    }
}
