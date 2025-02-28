using System;
using System.Collections.Generic;
using System.Linq;

namespace Andean.AndeanClass
{
    /// <summary>
    /// プレイヤーが持つインベントリを表すクラス
    /// </summary>
    public class Inventory
    {
        /// <summary>
        /// アイテムのリスト
        /// </summary>
        public List<Item> Items { get; private set; }

        /// <summary>
        /// 武器のリスト
        /// </summary>
        public List<Weapon> Weapons { get; private set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        public Inventory()
        {
            Items = new List<Item>();
            Weapons = new List<Weapon>();
        }

        /// <summary>
        /// インベントリにアイテムを追加する
        /// </summary>
        /// <param name="item">追加するアイテム</param>
        /// <returns>更新後の Inventory インスタンス</returns>
        public Inventory AddItem(Item item)
        {
            Items.Add(item);
            return this;
        }

        /// <summary>
        /// インベントリに武器を追加する
        /// </summary>
        /// <param name="weapon">追加する武器</param>
        /// <returns>更新後の Inventory インスタンス</returns>
        public Inventory AddWeapon(Weapon weapon)
        {
            Weapons.Add(weapon);
            return this;
        }

        /// <summary>
        /// アイテムを所持しているか確認し、なければ新規追加、あれば所持数を更新する
        /// </summary>
        /// <param name="itemName">アイテムの名前</param>
        /// <param name="quantity">追加または更新する個数</param>
        /// <param name="level">アイテムのレベル</param>
        /// <returns>更新後の Inventory インスタンス</returns>
        public Inventory AddOrUpdateItem(string itemName, int quantity, int level)
        {
            var existingItem = GetItem(itemName, level);
            if (existingItem != null)
            {
                int newQuantity = existingItem.Quantity + quantity;
                // 所持数が0未満になった場合は、アイテムを削除する
                if (newQuantity < 0)
                {
                    RemoveItem(itemName, level);
                }
                else
                {
                    existingItem.SetQuantity(newQuantity);
                }
            }
            else
            {
                var newItem = new Item(itemName, level, quantity);
                AddItem(newItem);
            }
            return this;
        }

        /// <summary>
        /// 武器を所持しているか確認し、なければ新規追加、あれば（必要に応じて更新）する
        /// </summary>
        /// <param name="weaponId">内部の武器名</param>
        /// <param name="_weaponLabel">表示される武器名（" (" が含まれている場合は、その前の部分を使用）</param>
        /// <param name="level">武器のレベル</param>
        /// <param name="ammoUsed">使用された弾数（現状は未使用）</param>
        /// <returns>更新後の Inventory インスタンス</returns>
        public Inventory AddOrUpdateWeapon(string weaponId, string _weaponLabel, int level, int ammoUsed = 0)
        {
            // 表示名の " (" 以前の部分を抽出
            string weaponLabel = _weaponLabel.Split(new string[] { " (" }, StringSplitOptions.None)[0];

            var existingWeapon = GetWeapon(weaponLabel, level);
            if (existingWeapon != null)
            {
                // 必要に応じて ammoUsed を用いた更新処理を追加可能
                // if(existingWeapon.MaxMagazine < ammoUsed)
                // {
                //     existingWeapon.MaxMagazine = ammoUsed;
                // }
            }
            else
            {
                var newWeapon = new Weapon(weaponId, weaponLabel, level);
                AddWeapon(newWeapon);
            }
            return this;
        }

        /// <summary>
        /// インベントリから指定アイテムを削除する
        /// </summary>
        /// <param name="itemName">削除するアイテムの名前</param>
        /// <param name="level">削除するアイテムのレベル</param>
        /// <returns>削除された Item インスタンス、存在しない場合は null</returns>
        public Item RemoveItem(string itemName, int level)
        {
            int index = Items.FindIndex(item => item.Name == itemName && item.Level == level);
            if (index != -1)
            {
                var removedItem = Items[index];
                Items.RemoveAt(index);
                return removedItem;
            }
            return null;
        }

        /// <summary>
        /// インベントリから指定武器を削除する
        /// </summary>
        /// <param name="weaponLabel">削除する武器の表示名</param>
        /// <param name="level">削除する武器のレベル</param>
        /// <returns>削除された Weapon インスタンス、存在しない場合は null</returns>
        public Weapon RemoveWeapon(string weaponLabel, int level)
        {
            int index = Weapons.FindIndex(weapon => weapon.Label == weaponLabel && weapon.Level == level);
            if (index != -1)
            {
                var removedWeapon = Weapons[index];
                Weapons.RemoveAt(index);
                return removedWeapon;
            }
            return null;
        }

        /// <summary>
        /// インベントリ内のアイテムを取得する（名前とレベルで検索）
        /// </summary>
        /// <param name="itemName">取得するアイテムの名前</param>
        /// <param name="level">取得するアイテムのレベル</param>
        /// <returns>見つかった Item インスタンス、存在しない場合は null</returns>
        public Item GetItem(string itemName, int level)
        {
            return Items.Find(item => item.Name == itemName && item.Level == level);
        }

        /// <summary>
        /// インベントリ内の武器を取得する（表示名とレベルで検索）
        /// </summary>
        /// <param name="weaponLabel">取得する武器の表示名</param>
        /// <param name="level">取得する武器のレベル</param>
        /// <returns>見つかった Weapon インスタンス、存在しない場合は null</returns>
        public Weapon GetWeapon(string weaponLabel, int level)
        {
            return Weapons.Find(weapon => weapon.Label == weaponLabel && weapon.Level == level);
        }

        /// <summary>
        /// インベントリを空にする（アイテムのみクリア）
        /// </summary>
        public void ClearInventory()
        {
            Items.Clear();
        }

        /// <summary>
        /// インベントリのステータスを返す（各アイテムの詳細を取得）
        /// </summary>
        /// <returns>インベントリ内のアイテムのリスト</returns>
        public List<Item> GetInventoryStatus()
        {
            // 各 Item の GetItemStatus() は Item 自身を返す実装とする
            return Items.Select(item => item.GetItemStatus()).ToList();
        }
    }
}
