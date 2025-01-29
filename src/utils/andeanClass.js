/**
 * @class Vector3
 * @description 3次元ベクトルを表すクラス
 */
class Vector3 {
  /**
   * @constructor
   * @param {number} [x=0] - X座標の値
   * @param {number} [y=0] - Y座標の値
   * @param {number} [z=0] - Z座標の値
   * @return {Vector3}
   * @memberof Vector3
   */
  constructor(x = 0, y = 0, z = 0) {
    /**
     * X座標
     * @type {number}
     */
    this.x = x;
    /**
     * Y座標
     * @type {number}
     */
    this.y = y;
    /**
     * Z座標
     * @type {number}
     */
    this.z = z;
    return this;
  }
  /**
   * 座標を計算、更新する関数
   * @param {number} newX - 新しいx座標
   * @param {number} newY - 新しいy座標
   * @param {number} newZ - 新しいz座標
   * @param {number} mapOffset - 座標オフセット
   * @return {Vector3}
   * @memberof Vector3
   */
  updateValues(newX, newY, newZ, mapOffset) {
    this.x = (newX + mapOffset[0]) / mapOffset[2] + 2048;
    this.y = (newY + mapOffset[1]) / mapOffset[2] + 2048;
    this.z = newZ / mapOffset[2];
    return this;
  }
}
/**
 * @class Item
 * @description プレイヤーが保有するアイテムを表すクラス
 */
class Item {
  /**
   * @constructor
   * @param {string} name - アイテムの名前
   * @param {number} level - アイテムのレベル
   * @param {number} quantity - アイテムの保有数
   * @return {Item}
   * @memberof Item
   */
  constructor(name, level, quantity) {
    /**
     * アイテム名
     * @type {string}
     */
    this.name = name;
    /**
     * アイテムレベル
     * @type {number}
     */
    this.level = level;
    /**
     * アイテムの保有数
     * @type {number}
     */
    this.quantity = quantity;
    return this;
  }

  /**
   * アイテムの個数を変更する
   * @param {number} newQuantity - 新しい個数
   * @return {Item}
   * @memberof Item
   */
  setQuantity(newQuantity) {
    this.quantity = newQuantity;
    return this;
  }

  /**
   * アイテムの詳細を返す
   * @return {Item} アイテムのステータス
   * @memberof Item
   */
  getItemStatus() {
    return this;
  }
}

/**
 * @class Weapon
 * @description 武器に関するクラス
 */
class Weapon {
  /**
   * Creates an instance of Weapon.
   * @constructor
   * @param {string} id - 内部の武器名
   * @param {string} label - 表示されている武器名
   * @param {number} level - 武器のレベル
   * @return {weapon}
   * @memberof Weapon
   */
  constructor(id, label, level) {
    /**
     * @type {string} Id - 内部の武器名
     */
    this.Id = id;
    /**
     * @type {string} label - 表示されている武器名
     */
    this.label = label;
    /**
     * @type {number} level - 武器のレベル
     */
    this.level = level;
    /**
     * @type {number} maxMagazine - AmmoUsedで使用された最大の弾数を格納
     */
    this.maxMagazine = 0;
    return this;
  }

  /**
   * AmmoUsedで使用された最大の弾数を返す
   * @return {number} AmmoUsedで使用された最大の弾数
   * @memberof Weapon
   */
  getMaxMagazine() {
    return {
      maxMagazine: this.maxMagazine,
    };
  }
}

/**
 * @class Inventory
 * @description プレイヤーが持つインベントリを表すクラス
 */
class Inventory {
  /**
   * Creates an instance of Inventory.
   * @constructor
   * @return {Inventory}
   * @memberof Inventory
   */
  constructor() {
    /**
     * @type {item} items - アイテムの保有数
     */
    this.items = []; // Array<Item>: アイテムのリスト
    /**
     * @type {Weapon} weapons - アイテムの保有数
     */
    this.weapons = [];
    return this;
  }

  /**
   * インベントリにアイテムを追加する
   * @param {Item} item 追加するアイテム
   * @return {Inventory}
   * @memberof Inventory
   */
  addItem(item) {
    this.items.push(item);
    return this;
  }

  /**
   * インベントリに武器を追加する
   * @param {Weapon} weapon 追加するアイテム
   * @return {Inventory}
   * @memberof Inventory
   */
  addWeapon(weapon) {
    this.weapons.push(weapon);
    return this;
  }

  /**
   * アイテムを所持しているか確認し、なければ追加、あれば所持数を更新する
   * @param {string} itemName アイテムの名前
   * @param {number} quantity 追加または更新するアイテムの個数
   * @param {number} level アイテムのレベル
   * @return {Inventory}
   * @memberof Inventory
   */
  addOrUpdateItem(_itemName, quantity, level) {
    const itemName = _itemName.split(" (")[0];
    const existingItem = this.getItem(itemName, level);
    if (existingItem) {
      // 同じ名前とレベルのアイテムが既に存在する場合は、所持数を更新
      let newQuantity = existingItem.quantity + quantity;
      //もし所持数が0を下回ったら
      if (newQuantity < 0) {
        const item = this.removeItem(itemName, level);
        return item;
      }
      existingItem.setQuantity(newQuantity);
      // console.log(`${itemName} (Level ${level}) now has a total quantity of ${existingItem.quantity}.`);
    } else {
      // アイテムが存在しない場合は、新規追加
      const newItem = new Item(itemName, level, quantity);
      this.addItem(newItem);
      // console.log(`${itemName} (Level ${level}) has been added with a quantity of ${quantity}.`);
    }
    return this;
  }

  /**
   * アイテムを所持しているか確認し、なければ追加、あれば所持数を更新する
   * @param {string} weaponId 武器の名前
   * @param {string} weaponLabel 武器の名前
   * @param {number} level 武器のレベル
   * @param {number} [maxMagazine = 0] マガジンの最大サイズ
   * @return {Inventory}
   * @memberof Inventory
   */
  addOrUpdateWeapon(weaponId, _weaponLabel, level, ammoUsed = 0) {
    const weaponLabel = _weaponLabel.split(" (")[0];
    const existingWeapon = this.getWeapon(weaponLabel, level);
    if (existingWeapon) {
      // ammoUsedで使用された最大の弾数を更新したかったが、現状は未実装
      // 理由: ammoUsedに武器名が入っていないため、実装不可
      // if (existingWeapon.maxMagazine < ammoUsed) {
      //   existingWeapon.maxMagazine = ammoUsed;
      // }
    } else {
      // アイテムが存在しない場合は、新規追加
      const newWeapon = new Weapon(weaponId, weaponLabel, level);
      this.addWeapon(newWeapon);
      // console.log(`${weaponLabel} (Level ${level}) has been added.`);
    }
    return this;
  }

  /**
   * インベントリから指定アイテムを削除
   * @param {string} itemName
   * @param {number} level
   * @return {Item|undefined}
   * @memberof Inventory
   */
  removeItem(itemName, level) {
    // 条件に合致する要素のインデックスを取得
    const index = this.items.findIndex(
      (item) => item.name === itemName && item.level === level
    );
    // 要素が見つかった場合、その要素を削除
    if (index !== -1) {
      const item = this.items.splice(index, 1); // 指定されたインデックスの要素を1つ削除
      return item; // 削除成功
    }
    return undefined; // 要素が見つからなかった場合
  }

  /**
   * @param {string} weaponId
   * @param {number} level
   * @return {Weapon|undefined}
   * @memberof Inventory
   */
  removeWeapon(weaponId, level) {
    // 条件に合致する要素のインデックスを取得
    const index = this.weapons.findIndex(
      (weapon) => weapon.name === weaponId && weapon.level === level
    );
    // 要素が見つかった場合、その要素を削除
    if (index !== -1) {
      const weapon = this.weapons.splice(index, 1); // 指定されたインデックスの要素を1つ削除
      return weapon; // 削除成功
    }
    return undefined; // 要素が見つからなかった場合
  }

  /**
   * インベントリ内のアイテムを取得する
   * 名前とレベルの両方で一致するアイテムを検索する
   * @param {string} itemName 取得するアイテムの名前
   * @param {number} level 取得するアイテムのレベル
   * @return {Item|undefined} 見つかったアイテム、またはundefined
   * @memberof Inventory
   */
  getItem(itemName, level) {
    return this.items.find(
      (item) => item.name === itemName && item.level === level
    );
  }

  /**
   * インベントリ内の武器を取得する
   * 名前とレベルの両方で一致する武器を検索する
   * @param {string} weaponId 取得する武器の名前
   * @param {number} level 取得する武器のレベル
   * @return {Weapon|undefined} 見つかった武器、またはundefined
   * @memberof Inventory
   */
  getWeapon(weaponId, level) {
    return this.weapons.find(
      (weapon) => weapon.name === weaponId && weapon.level === level
    );
  }

  /**
   * インベントリを空にする関数
   * @memberof Inventory
   */
  clearInventory() {
    this.items = []; // 配列を空にする
  }

  /**
   * インベントリのステータスを返す
   * @return {Array<Object>} インベントリ内のアイテムのステータス
   * @memberof Inventory
   */
  getInventoryStatus() {
    return this.items.map((item) => item.getItemStatus());
  }
}

/**
 * @class Statistics
 */
class Statistics {
  /**
   * Creates an instance of Statistics.
   * @return {Statistics}
   * @memberof Statistics
   */
  constructor() {
    /**
     * 合計数
     * @type {number}
     */
    this.total = 0; // 合計
    /**
     * Statistics by weapon.
     * @type {Object.<string, number>}
     */
    this.weapons = {};
    /**
     * Statistics by player.
     * @type {Object.<string, number>}
     */
    this.players = {};
    /**
     * Statistics by legend.
     * @type {Object.<string, number>}
     */
    this.legends = {};
    return this;
  }

  /**
   * Adds a amount to the total.
   * @param {number} amount - The number to add to the total.
   * @memberof Statistics
   */
  addToTotal(amount) {
    this.total += amount;
  }

  /**
   * Records a weapon's usage.
   * @param {string} weaponId - The ID of the weapon.
   * @param {number} amount - The number to add for the weapon.
   * @memberof Statistics
   */
  addWeaponUsage(weaponId, amount) {
    if (!this.weapons[weaponId]) {
      this.weapons[weaponId] = 0;
    }
    this.weapons[weaponId] += amount;
  }

  /**
   * Records a player's statistics.
   * @param {string} playerId - The nucleusHash of the player.
   * @param {number} amount - The number to add for the player.
   * @memberof Statistics
   */
  addPlayerStat(playerId, amount) {
    if (!this.players[playerId]) {
      this.players[playerId] = 0;
    }
    this.players[playerId] += amount;
  }

  /**
   * Records a legend's statistics.
   * @param {string} legendName - The name of the legend.
   * @param {number} amount - The number to add for the legend.
   * @memberof Statistics
   */
  addLegendStat(legendName, amount) {
    if (!this.legends[legendName]) {
      this.legends[legendName] = 0;
    }
    this.legends[legendName] += amount;
  }

  /**
   * Updates the statistics for a given amount, weapon, player, and legend in one call.
   * @param {number} amount - The number to add to the statistics.
   * @param {string} weaponId - The ID or name of the weapon to update.
   * @param {string} playerId - The ID or name of the player to update.
   * @param {string} legendName - The name of the legend to update.
   * @return {Statistics} The updated instance of the Statistics class.
   * @memberof Statistics
   */
  updateStatistics(amount, weaponId, playerId, legendName) {
    this.addToTotal(amount);
    this.addWeaponUsage(weaponId, amount);
    this.addPlayerStat(playerId, amount);
    this.addLegendStat(legendName, amount);
  }

  /**
   * Resets all statistics.
   * @return {Statistics}
   * @memberof Statistics
   */
  reset() {
    this.total = 0;
    this.weapons = {};
    this.players = {};
    this.legends = {};
    return this;
  }
}

/**
 * @class Player
 * @description プレイヤーを表すクラス。インベントリとゲーム内でのステータスを保持する。
 */
class Player {
  /**
   * Creates an instance of Player.
   * @constructor
   * @param {string} name - プレイヤー名
   * @param {number} teamId - チームID (uint32)
   * @param {string} nucleusHash - プレイヤーの識別用ハッシュ
   * @param {string} hardwareName - 使用ハードウェア名
   * @memberof Player
   */
  constructor(name, teamId, nucleusHash, hardwareName) {
    /**
     * プレイヤー名
     * @type {string}
     */
    this.name = name;

    /**
     * チームID (uint32)
     * @type {number}
     */
    this.teamId = teamId;

    /**
     * プレイヤーの識別用ハッシュ
     * @type {string}
     */
    this.nucleusHash = nucleusHash;

    /**
     * 使用ハードウェア名
     * @type {string}
     */
    this.hardwareName = hardwareName;

    /**
     * プレイヤーの位置 (3次元ベクトル)
     * @type {Vector3}
     */
    this.pos = new Vector3();

    /**
     * APEX座標プレイヤーの位置 (3次元ベクトル)
     * @type {Vector3}
     */
    this.original_pos = new Vector3();

    /**
     * プレイヤーの視角
     * @type {number}
     */
    this.angles = 0;

    /**
     * 現在の体力 (uint32)
     * @type {number}
     */
    this.currentHealth = 0;

    /**
     * 最大体力 (uint32)
     * @type {number}
     */
    this.maxHealth = 0;

    /**
     * 現在のシールド体力 (uint32)
     * @type {number}
     */
    this.shieldHealth = 0;

    /**
     * 最大シールド体力 (uint32)
     * @type {number}
     */
    this.shieldMaxHealth = 0;

    /**
     * チーム名
     * @type {string}
     */
    this.teamName = "";

    /**
     * 分隊番号 (uint32)
     * @type {number}
     */
    this.squadIndex = -1;

    /**
     * キャラクター名
     * @type {string}
     */
    this.legend = "";

    /**
     * キャラクタースキン名
     * @type {string}
     */
    this.skin = "";

    /**
     * プレーヤーのインベントリー
     * @type {Inventory}
     */
    this.inventory = new Inventory();

    /**
     * キル数
     * @type {Statistics}
     */
    this.kills = new Statistics();

    /**
     * キルさせられた数
     * @type {Statistics}
     */
    this.killsReceived = new Statistics();

    /**
     * キルアシスト数
     * @type {Statistics}
     */
    this.killAssists = new Statistics();

    /**
     * キルアシストさせられた数
     * @type {Statistics}
     */
    this.killAssistsReceived = new Statistics();

    /**
     * ダウンさせた数
     * @type {Statistics}
     */
    this.downs = new Statistics();

    /**
     * ダウンさせられた数
     * @type {Statistics}
     */
    this.downsReceived = new Statistics();

    /**
     * 敵に与えたダメージ詳細
     * @type {Statistics}
     */
    this.damageDealt = new Statistics();

    /**
     * 敵から受けたダメージ詳細
     * @type {Statistics}
     */
    this.damageReceived = new Statistics();

    /**
     * プレイヤーの状態
     * @type {string}
     */
    this.status = "alive";

    /**
     * 接続状態
     * @type {boolean}
     */
    this.isOnline = true;

    /**
     * プレイヤーのレベル情報
     * @type {object}
     * @property {string} now - 現在レベル
     * @property {object} "0" - レベル情報
     */
    this.level = {
      now: "0",
      0: {},
    };

    /**
     * 所持している武器のリスト
     * @type {Array<object>}
     */
    this.weaponList = [];

    /**
     * 今手に持っている武器
     * @type {string}
     */
    this.inHand = "mp_weapon_melee_survival";

    /**
     * プレイヤーがアビリティを使用した回数
     * @type {number}
     */
    this.abilityUseCount = {};

    /**
     * アルティメットを使用した回数
     * @type {number}
     */
    this.ultimateUseCount = {};

    /**
     * ジップラインを使用した回数
     * @type {number}
     */
    this.ziplineUseCount = 0;

    /**
     * 種類ごとのグレネードを使用した回数
     * @type {object}
     */
    this.grenadeUseCount = {};

    /**
     * ブラックマーケットを使用した回数
     * @type {number}
     */
    this.blackMarket = {
      useCount: 0,
      items: {}
    };

    /**
     * レイスのポータルを使用した回数
     * @type {number}
     */
    this.wraithPortalUseCount = 0;

    /**
     * アルティメットのチャージ状態
     * @type {boolean}
     */
    this.ultimateCharged = false;

    /**
     * レヴナントのフォージドシャドウが受けたダメージの合計を保持
     * @type {number}
     */
    this.forgedShadowDamaged = 0;

    /**
     * ワープゲートを使用した回数
     * @type {number}
     */
    this.warpGateUseCount = 0;

    /**
     * ジブラルタルのシールドが吸収したダメージの合計を保持
     * @type {number}
     */
    this.gibraltarShieldAbsorbed = 0;
  }

  /**
   * プレイヤーの位置と角度を更新する関数
   * @param {number} x 新しいx座標
   * @param {number} y 新しいy座標
   * @param {number} z 新しいz座標
   * @param {number} newAngles 新しい角度
   * @param {Object} mapOffset
   * @memberof Player
   */
  updatePositionAndAngles(x, y, z, newAngles, mapOffset) {
    this.pos.updateValues(x, y, z, mapOffset);
    this.angles = newAngles * -1 + 45;
  }

  /**
   * プレイヤーの体力とシールドを更新する関数
   * @param {number} newCurrentHealth 新しい現在の体力
   * @param {number} newMaxHealth 新しい最大体力
   * @param {number} newShieldHealth 新しいシールドの体力
   * @param {number} newShieldMaxHealth 新しい最大シールド体力
   * @memberof Player
   */
  updateHealthAndShields(
    newCurrentHealth,
    newMaxHealth,
    newShieldHealth,
    newShieldMaxHealth
  ) {
    this.currentHealth = newCurrentHealth;
    this.maxHealth = newMaxHealth;
    this.shieldHealth = newShieldHealth;
    this.shieldMaxHealth = newShieldMaxHealth;
  }

  /**
   * プレイヤーのチーム情報、キャラクター、スキンを更新する関数
   * @param {string} newLegend 新しいキャラクター
   * @param {string} newSkin 新しいスキン
   * @memberof Player
   */
  updateLegend(newLegend, newSkin) {
    this.legend = newLegend;
    this.skin = newSkin;
  }

  /**
   * プレイヤーのステータスを変更するメソッド
   * @param {string} status プレイヤーが生きている場合は"alive"、ダウン中は"down"、死んでいる場合は"death"、部隊壊滅時は"eliminated"
   * @memberof Player
   */
  setStatus(status) {
    this.status = status;
  }

  /**
   * プレイヤーの生存状態を変更するメソッド
   * @param {boolean} status プレイヤーが接続している場合はtrue、切断している場合はfalse
   * @memberof Player
   */
  setOnlineStatus(status) {
    this.isOnline = status;
  }

  /**
   * チーム名を変更するメソッド
   * @param {String} teamName チーム名を入力してチーム名を変更
   * @memberof Player
   */
  setTeamName(teamName) {
    this.teamName = teamName;
  }

  /**
   * チーム内のインデックスを変更するメソッド
   * @param {number} index 変更する値を入力して、その値に変更する
   * @memberof Player
   */
  setSquadIndex(index) {
    this.squadIndex = index;
  }

  /**
   * プレイヤーの生存状態を返すメソッド
   * @return {boolean} status プレイヤーが生きている場合は"alive"、死んでいる場合は"death"、ダウン時は"down"、部隊壊滅時は"eliminated"
   * @memberof Player
   */
  getStatus() {
    return this.status;
  }

  /**
   * プレイヤーの接続状態を返すメソッド
   * @return {boolean} status プレイヤーが接続している場合はtrue、切断している場合はfalse
   * @memberof Player
   */
  getOnlineStatus() {
    return this.isOnline;
  }

  /**
   * キルした数を設定するメソッド
   * @param {string} perpetrator - 攻撃に使用したもの (例: 武器名、スキル名)
   * @param {string} victim - 攻撃受けたプレイヤーの（nucleushash）
   * @param {string} legend - 攻撃を受けたプレイヤーのレジェンド名
   * @memberof Player
   */
  setKills(perpetrator, victim, legend) {
    this.kills.updateStatistics(1, perpetrator, victim, legend);
  }

  /**
   * 敵からキルされた数を設定するメソッド
   * @param {string} perpetrator - 攻撃に使用したもの (例: 武器名、スキル名)
   * @param {string} awardedto - 攻撃したプレイヤーの（nucleushash）
   * @param {string} legend - 攻撃をしたプレイヤーのレジェンド名
   * @memberof Player
   */
  setKillsReceived(perpetrator, awardedto, legend) {
    this.killsReceived.updateStatistics(1, perpetrator, awardedto, legend);
  }

  /**
   * キルアシスト数を設定するメソッド
   * @param {string} perpetrator - 攻撃に使用したもの (例: 武器名、スキル名)
   * @param {string} victim - 攻撃受けたプレイヤーの（nucleushash）
   * @param {string} legend - 攻撃を受けたプレイヤーのレジェンド名
   * @memberof Player
   */
  setKillAssists(perpetrator, victim, legend) {
    this.killAssists.updateStatistics(1, perpetrator, victim, legend);
  }

  /**
   * 敵からキルアシストされた数を設定するメソッド
   * @param {string} perpetrator - 攻撃に使用したもの (例: 武器名、スキル名)
   * @param {string} awardedto - 攻撃したプレイヤーの（nucleushash）
   * @param {string} legend - 攻撃をしたプレイヤーのレジェンド名
   * @memberof Player
   */
  setKillAssistsReceived(perpetrator, awardedto, legend) {
    this.killAssistsReceived.updateStatistics(1, perpetrator, awardedto, legend);
  }

  /**
   * ダウンさせた数を設定するメソッド
   * @param {string} perpetrator - 攻撃に使用したもの (例: 武器名、スキル名)
   * @param {string} victim - 攻撃受けたプレイヤーの（nucleushash）
   * @param {string} legend - 攻撃を受けたプレイヤーのレジェンド名
   * @memberof Player
   */
  setDowns(perpetrator, victim, legend) {
    this.downs.updateStatistics(1, perpetrator, victim, legend);
  }

  /**
   * 敵からダウンさせられた数を設定するメソッド
   * @param {string} perpetrator - 攻撃に使用したもの (例: 武器名、スキル名)
   * @param {string} awardedto - 攻撃したプレイヤーの（nucleushash）
   * @param {string} legend - 攻撃をしたプレイヤーのレジェンド名
   * @memberof Player
   */
  setDownsReceived(perpetrator, awardedto, legend) {
    this.downsReceived.updateStatistics(1, perpetrator, awardedto, legend);
  }

  /**
   * 敵に与えたダメージを増加させるメソッド
   * @param {number} amount - 増加させるダメージ量
   * @param {string} perpetrator - 攻撃に使用したもの (例: 武器名、スキル名)
   * @param {string} victim - 攻撃受けたプレイヤーの（nucleushash）
   * @param {string} legend - 攻撃を受けたプレイヤーのレジェンド名
   * @memberof Player
   */
  addDamageDealt(amount, perpetrator, victim, legend) {
    this.damageDealt.updateStatistics(amount, perpetrator, victim, legend);
  }

  /**
   * プレイヤーが受けたダメージを増加させ、体力やシールドの状態を更新するメソッド
   * @param {number} amount - 増加させるダメージ量
   * @param {string} perpetrator - 攻撃に使用されたもの
   * @param {string} attacker - 攻撃したプレイヤーの（nucleushash）
   * @param {string} legend - 攻撃を行ったプレイヤーのレジェンド名
   * @param {boolean} [penetrator=false] - 攻撃がシールドを貫通する場合はtrue、デフォルトはfalse
   * @memberof Player
   */
  addDamageReceived(amount, perpetrator, attacker, legend, penetrator = false) {
    // 統計情報を更新する
    // 受けたダメージ、攻撃手段、攻撃者の識別子とレジェンド名を記録
    this.damageReceived.updateStatistics(amount, perpetrator, attacker, legend);

    if (["Unknown by RevenantForgedShadowDamaged", "Unknown by GibraltarShieldAbsorbed"].includes(perpetrator)) {
      // 更新後の体力・シールド状態を返す
      return [
        this.resultHealth,
        this.maxHealth,
        this.shieldHealth,
        this.shieldMaxHealth,
      ];
    }

    // シールドを貫通する攻撃の場合
    if (penetrator) {
      // 現在の体力からダメージを引いた結果を計算
      let resultHealth = this.currentHealth - amount;

      // 体力が0未満になる場合は0に制限
      if (resultHealth < 0) {
        resultHealth = 0;
      }

      // シールドはそのままで体力だけを更新する
      this.updateHealthAndShields(
        resultHealth,
        this.maxHealth,
        this.shieldHealth,
        this.shieldMaxHealth
      );

      // 更新後の体力・シールド状態を返す
      return [
        resultHealth,
        this.maxHealth,
        this.shieldHealth,
        this.shieldMaxHealth,
      ];
    }

    // シールドを貫通しない通常の攻撃の場合
    // シールドからダメージ量を引いた結果を計算
    let resultShield = this.shieldHealth - amount;

    // 現在の体力を変数に保持（シールドが破壊された場合に調整する）
    let resultHealth = this.currentHealth;

    // シールドが0未満の場合、残りのダメージを体力に適用
    if (resultShield < 0) {
      resultHealth += resultShield; // resultShieldが負の場合、体力に減少分を反映
      resultShield = 0; // シールドは0にリセット
    }

    // 体力が0未満になる場合は0に制限
    if (resultHealth < 0) {
      resultHealth = 0;
    }

    // 体力とシールドの状態を更新する
    this.updateHealthAndShields(
      resultHealth,
      this.maxHealth,
      resultShield,
      this.shieldMaxHealth
    );

    // 更新後の体力・シールド状態を返す
    return [resultHealth, this.maxHealth, resultShield, this.shieldMaxHealth];
  }

  /**
   * プレイヤーのアビリティ使用回数を増加させるメソッド
   * @param {string} abilityId - 使用したアビリティの名前
   * @memberof Player
   */
  addAbilityUseCount(abilityId) {
    if (!this.abilityUseCount[abilityId]) {
      this.abilityUseCount[abilityId] = 0;
    }
    this.abilityUseCount[abilityId]++;
  }

  /**
   * プレイヤーのアルティメット使用回数を増加させるメソッド
   * @param {string} ultimateId - 使用したアルティメットの名前
   * @memberof Player
   */
  addUltimateUseCount(ultimateId) {
    if (!this.ultimateUseCount[ultimateId]) {
      this.ultimateUseCount[ultimateId] = 0;
    }
    this.ultimateUseCount[ultimateId]++;
  }

  /**
   * プレイヤーのジップライン使用回数を増加させるメソッド
   * @memberof Player
   */
  addZiplineUseCount() {
    this.ziplineUseCount++;
  }

  /**
   * プレイヤーのグレネード使用回数を増加させるメソッド
   * @param {string} grenadeId - 使用したグレネードの名前
   * @memberof Player
   */
  addGrenadeUseCount(grenadeId) {
    if (!this.grenadeUseCount[grenadeId]) {
      this.grenadeUseCount[grenadeId] = 0;
    }
    this.grenadeUseCount[grenadeId]++;
  }

  /**
   * プレイヤーのブラックマーケット使用回数を増加させるメソッド
   * @param {string} itemId - 使用したアイテムの名前
   * @memberof Player
   */
  addBlackMarketUseCount(itemId) {
    if (!this.blackMarket.items[itemId]) {
      this.blackMarket.items[itemId] = 0;
    }
    this.blackMarket.items[itemId]++;
    this.blackMarket.useCount++;
  }

  /**
   * プレイヤーのレイスのポータル使用回数を増加させるメソッド
   * @memberof Player
   */
  addWraithPortalUseCount() {
    this.wraithPortalUseCount++;
  }

  /**
   * プレイヤーのアルティメットチャージ状態を変更するメソッド
   * @param {boolean} status アルティメットがチャージされている場合はtrue、チャージされていない場合はfalse
   * @memberof Player
   */
  setUltimateCharged(status) {
    this.ultimateCharged = status;
  }

  /**
   * プレイヤーのアルティメットチャージ状態を取得するメソッド
   * @return {boolean} アルティメットがチャージされている場合はtrue、チャージされていない場合はfalseを返す
   * @memberof Player
   */
  getUltimateCharged() {
    return this.ultimateCharged;
  }

  /**
   * プレイヤーのレヴナントのフォージドシャドウが受けたダメージを増加させるメソッド
   * @param {number} amount - 増加させるダメージ量
   * @memberof Player
   */
  addForgedShadowDamaged(amount) {
    this.forgedShadowDamaged.total += amount;
  }

  /**
   * プレイヤーのワープゲート使用回数を増加させるメソッド
   * @memberof Player
   */
  addWarpGateUseCount() {
    this.warpGateUseCount++;
  }

  /**
   * プレイヤーのジブラルタルのシールドが吸収したダメージを増加させるメソッド
   * @param {number} amount - 増加させるダメージ量
   * @memberof Player
   */
  addGibraltarShieldAbsorbed(amount) {
    this.gibraltarShieldAbsorbed += amount;
  }
}

/**
 * @class Datacenter
 * @description データセンターを表すクラス
 */
class Datacenter {
  /**
   * Creates an instance of Datacenter.
   * @constructor
   * @memberof Datacenter
   */
  constructor() {
    /**
     * @type {number} timestamp　- タイムスタンプ (uint64)
     */
    this.timestamp = 0;
    /**
     * @type {string} category - カテゴリー名
     */
    this.category = "";
    /**
     * @type {string} name - データセンター名
     */
    this.name = "";
  }
  /**
   * @param {number} timestamp　- タイムスタンプ (uint64)
   * @param {string} category - カテゴリー名
   * @param {string} name - データセンター名
   * @return {Datacenter}
   * @memberof Datacenter
   */
  update(timestamp, category, name) {
    this.timestamp = timestamp;
    this.category = category;
    this.name = name;
    return this;
  }

  /**
   * データセンターのステータスをオブジェクトとして返す
   * @return {Object} データセンターのステータス情報
   * @memberof Datacenter
   */
  getStatus() {
    return {
      timestamp: this.timestamp,
      category: this.category,
      name: this.name,
    };
  }
}

/**
 * バージョン情報を表すクラス
 * @class Version
 */
class Version {
  /**
   * @constructor
   * @param {number} major_num - メジャーバージョン番号 (uint32)
   * @param {number} minor_num - マイナーバージョン番号 (uint32)
   * @param {number} build_stamp - ビルドスタンプ (uint32)
   * @param {string} revision - リビジョン情報
   * @memberof Version
   */
  constructor(major_num, minor_num, build_stamp, revision) {
    /**
     * @type {number} major_num - メジャーバージョン番号 (uint32)
     */
    this.major_num = major_num;
    /**
     * @type {number} minor_num - マイナーバージョン番号 (uint32)
     */
    this.minor_num = minor_num;
    /**
     * @type {number} build_stamp - ビルドスタンプ (uint32)
     */
    this.build_stamp = build_stamp;
    /**
     * @type {string} revision - リビジョン情報
     */
    this.revision = revision;
  }

  /**
   * バージョンのステータスをオブジェクトとして返す
   * @return {Object} バージョンのステータス情報
   * @memberof Version
   */
  getStatus() {
    return {
      major_num: this.major_num,
      minor_num: this.minor_num,
      build_stamp: this.build_stamp,
      revision: this.revision,
    };
  }

  /**
   * バージョンの詳細を表示するメソッド
   * @memberof Version
   */
  printDetails() {
    console.log(`Version: ${this.major_num}.${this.minor_num}`);
    console.log(`Build Stamp: ${this.build_stamp}`);
    console.log(`Revision: ${this.revision}`);
  }
}

/**
 * カスタムマッチを管理するクラス
 * @class CustomMatch
 */
class CustomMatch {
  /**
   * @constructor
   * @param {string} matchName - マッチ名
   * @memberof CustomMatch
   */
  constructor(matchName) {
    /**
     * マッチ名
     * @type {string}
     */
    this.matchName = matchName;
    /**
     * スタートタイムスタンプ
     * @type {number}
     */
    this.startTimeStamp = 0;
    /**
     * エンドタイムスタンプ
     * @type {number}
     */
    this.endTimeStamp = 0;
    /**
     * プレイヤーの連想配列 (最大60人)
     * キーはプレイヤーID、値はPlayerクラスのインスタンス
     * @type {Object<string, Player>}
     */
    this.players = {};
    /**
     * チームの連想配列
     * キーはteamId、値はTeamクラスを保存
     * @type {Object<Team>}
     */
    this.teams = {};
    /**
     * 最大プレイヤー数
     * @type {number}
     */
    this.maxPlayers = 60;
    /**
     * 最大チーム数
     * @type {number}
     */
    this.maxTeams = 20;
    /**
     * 現在の状態
     * gameStateChangedを格納
     * @type {string}
     */
    this.state = "";
    /**
     * マップ名
     * @type {string}
     */
    this.mapName = "";
    /**
     * プレイリスト名
     * 例: World's Edge（リングなし）
     * @type {string}
     */
    this.playlistName = "";
    /**
     * プレイリストの説明
     * 例: 最後の1部隊になるまで戦い抜け
     * @type {string}
     */
    this.playlistDesc = "";
    /**
     * Datacenterのインスタンス
     * @type {Datacenter}
     */
    this.datacenter = new Datacenter();
    /**
     * エイムアシストの設定値
     * @type {boolean}
     */
    this.aimassiston = true;
    /**
     * 匿名モードの設定
     * @type {boolean}
     */
    this.anonymousMode = false;
    /**
     * サーバーID
     * @type {string}
     */
    this.serverId = "";
    /**
     * 初期配布アイテムを管理するInventoryのインスタンス
     * @type {Inventory}
     */
    this.startingLoadout = new Inventory();
    /**
     * イベントリスト
     * @type {Array<Event>}
     */
    this.eventLists = [];
    /**
     * パケットリスト
     * @type {Array<Packet>}
     */
    this.packetLists = {};
    /**
     * リングデータの配列
     * 各要素はRingクラスのインスタンス
     * @type {Array<Ring>}
     */
    this.rings = [];
    /**
     * マップのオフセット
     * @type {Array<number>}
     */
    this.mapOffset = [0, 0, 1];
    /**
     * スコア設定の保存
     * @type {Object}
     */
    this.scoreSettings = {};
  }

  /**
   *
   * @memberof CustomMatch
   */
  refreshEventLists() {
    this.eventLists = [];
    return this;
  }

  /**
   * ringsの末尾に新しい要素を追加します。
   * ringsが3を超える場合、先頭の要素を削除します。
   * @param {Ring} ring - 追加する要素
   * @memberof CustomMatch
   */
  addRingElement(ring) {
    // 配列の長さが指定の制限を超える場合は先頭の要素を削除
    // if (this.rings.length > 3) {
    //     this.rings.shift();
    // }
    // 新しい要素を末尾に追加
    this.rings.push(ring);

    switch (ring.category) {
      case "ringStartClosing":
        this.state = `RingStartClosing_Stage_${ring.stage}`;
        break;
      case "ringFinishedClosing":
        this.state = `RingFinishedClosing_Stage_${ring.stage}`;
        break;
      default:
        console.warn("[CustomMatch.addRingElement] Recived unknown message");
        break;
    }
  }

  /**
   * eventListsの末尾に新しい要素を追加します。
   * @param {Event} event - 追加する要素
   * @memberof CustomMatch
   */
  addEventElement(event) {
    // 新しい要素を末尾に追加
    this.eventLists.push(event);
  }

  /**
   * packetListsの末尾に新しい要素を追加します。
   * @param {Packet} packetWeb - 追加する要素
   * @memberof CustomMatch
   */
  addPacketElement(time, packetWeb) {
    // 新しい要素を末尾に追加
    this.packetLists[time] = packetWeb;
  }

  /**
   * プレイヤーを追加するメソッド
   * @param {Player} player 追加するプレイヤー
   * @param {string} teamName チーム名
   * @memberof CustomMatch
   */
  addPlayer(player, teamName="") {
    if (Object.keys(this.players).length >= this.maxPlayers) {
      //console.log("Cannot add more players, the match is full.");
    } else if (this.players[player.nucleusHash]) {
      //console.log(`Player with nucleusHash ${player.nucleusHash} is already in the match.`);
    } else {
      this.players[player.nucleusHash] = player;
      //console.log(`${player.name} has joined the match.`);

      // チームにプレイヤーを追加
      if (!this.teams[player.teamId]) {
        // チームが存在しない場合は新しく作成する
        this.teams[player.teamId] = new Team(teamName);
      }
      this.teams[player.teamId].addPlayer(player.nucleusHash);
    }
  }

  /**
   * チームを追加するメソッド
   * @param {number} teamId チームID
   * @param {string} teamName チーム名
   */
  addTeam(teamId, teamName) {
    if (!this.teams[teamId]) {
      this.teams[teamId] = new Team(teamName);
    }
  }

  /**
   * ゲームステータスを設定するメソッド
   * @param {String} state ゲームステータス
   * @memberof CustomMatch
   */
  setState(state) {
    this.state = state;
  }

  /**
   * スコア設定を更新するメソッド
   * @param {Object} scoreSettings スコア設定
   * @memberof CustomMatch
   */
  setScoreSettings(scoreSettings) {
    this.scoreSettings = scoreSettings;
  }

  /**
   * 最大プレイヤー数と最大チーム数を設定するメソッド
   * @param {string} name - プレイリストの名前
   * @param {string} description - プレイリストの説明
   */
  setMaxPlayersAndTeams(name, description = null) {
    switch (name) {
      case "Duos":
        this.maxPlayers = 60;
        this.maxTeams = 30;
        break;
      case "Team Deathmatch":
        this.maxPlayers = 12;
        this.maxTeams = 4;
        break;
      case "Gun Run":
        this.maxPlayers = 12;
        this.maxTeams = 4;
        break;
      case "Control":
        this.maxPlayers = 18;
        this.maxTeams = 6;
        break;
      case "Big Team Deathmatch":
        this.maxPlayers = 24;
        this.maxTeams = 8;
        break;
      case "Lockdown":
        this.maxPlayers = 12;
        this.maxTeams = 4;
        break;
      default:
        this.maxPlayers = 60;
        this.maxTeams = 20;
        break;
    }
  }

  /**
   * マッチ開始時刻を設定するメソッド
   * @param {String} timestamp ゲームステータス
   * @memberof CustomMatch
   */
  setStartTimeStamp(timestamp) {
    this.startTimeStamp = timestamp;
  }

  /**
   * マッチ終了時刻を設定するメソッド
   * @param {String} timestamp ゲームステータス
   * @memberof CustomMatch
   */
  setEndTimeStamp(timestamp) {
    this.endTimeStamp = timestamp;
  }

  /**
   * マッチセットアップ情報を設定するメソッド
   * @param {String} mapName マップ名
   * @param {String} playlistName
   * @param {String} playlistDesc
   * @param {Boolean} aimassiston
   * @param {Boolean} anonymousMode
   * @param {String} serverId
   * @memberof CustomMatch
   */
  setMatchSetup(
    mapName,
    playlistName,
    playlistDesc,
    aimassiston,
    anonymousMode,
    serverId
  ) {
    this.mapName = mapName;
    this.playlistName = playlistName;
    this.playlistDesc = playlistDesc;
    this.aimassiston = aimassiston;
    this.anonymousMode = anonymousMode;
    this.serverId = serverId;
    switch (mapName) {
      case "mp_rr_canyonlands_hu":
        this.mapOffset = [-3419, -2926, 20];
        break;
      case "mp_rr_desertlands_hu":
        this.mapOffset = [0, 1, 22];
        break;
      case "mp_rr_district":
        this.mapOffset = [0, 0, 21];
        break;
      case "mp_rr_district_halloween":
        this.mapOffset = [0, 0, 21];
        break;
      case "mp_rr_divided_moon_mu1":
        this.mapOffset = [1992, -492, 21];
        break;
      case "mp_rr_freedm_skulltown":
        this.mapOffset = [1886, 294, 5];
        break;
      case "mp_rr_olympus_mu2":
        this.mapOffset = [6968, -2969, 22];
        break;
      case "mp_rr_tropic_island_mu2":
        this.mapOffset = [-594, -939, 25];
        break;
      default:
        this.mapOffset = [0, 0, 1];
        console.warn("[AndeanClass.CustomMatch.setMatchSetup] Unknown map");
        break;
    }
  }

  /**
   * プレイヤーを削除するメソッド
   * @param {string} nucleusHash プレイヤーのnucleusHash
   * @memberof CustomMatch
   */
  removePlayer(nucleusHash) {
    if (this.players[nucleusHash]) {
      const removedPlayer = this.players[nucleusHash];
      delete this.players[nucleusHash];
      return `${removedPlayer.name} has been removed from the match.`;
    } else {
      return `Player with nucleusHash ${nucleusHash} not found in the match.`;
    }
  }

  /**
   * 現在のプレイヤー数を返す
   * @return {number} 現在のプレイヤー数
   * @memberof CustomMatch
   */
  getPlayerCount() {
    return Object.keys(this.players).length;
  }

  /**
   * 特定のプレイヤーを取得するメソッド
   * @param {string} nucleusHash プレイヤーのnucleusHash
   * @return {Player|null} 見つかったプレイヤーのステータス、見つからなければnull
   * @memberof CustomMatch
   */
  getPlayer(nucleusHash) {
    if (this.players[nucleusHash]) {
      return this.players[nucleusHash];
    } else {
      // console.log(`Player with nucleusHash ${nucleusHash} not found.`);
      return null;
    }
  }

  /**
   * 特定のチームを取得するメソッド
   * @param {number} teamId 
   * @returns {Team|null} 見つかったチームインスタンス、見つからなければnull
   */
  getTeam(teamId) {
    if (this.teams[teamId]) {
      return this.teams[teamId];
    } else {
      return null;
    }
  }

  /**
   * マッチのステータスを取得するメソッド
   * @return {Object} マッチのステータスとプレイヤーリスト
   * @memberof CustomMatch
   */
  getMatchStatus() {
    return {
      matchName: this.matchName,
      startTimeStamp: this.startTimeStamp,
      endTimeStamp: this.endTimeStamp,
      gameState: this.gameState,
      mapName: this.mapName,
      playlistName: this.playlistName,
      playlistDesc: this.playlistDesc,
      datacenter: this.datacenter,
      aimassiston: this.aimassiston,
      anonymousMode: this.anonymousMode,
      serverId: this.serverId,
      startingLoadout: this.startingLoadout,
      maxPlayers: this.maxPlayers,
      playerCount: this.getPlayerCount(),
      teams: this.teams,
      players: Object.values(this.players).map((player) => player.getStatus()),
    };
  }
}

/**
 * Eventに関するクラス
 * @class Event
 * @param {number} timestamp - イベント発生時のタイムスタンプ
 * @param {string} category - イベントの種類
 * @param {object} data - 受信したメッセージやクラスオブジェクトなどを入れる
 */
class Event {
  /**
   * Eventクラスの初期化
   * @constructor
   * @param {number} _timestamp - イベント発生時のタイムスタンプ
   * @param {string} _category - イベントの種類
   * @param {object} _data - 受信したメッセージやクラスオブジェクトなどを入れる
   * @return {Event}
   * @memberof Event
   */
  constructor(_timestamp, _category, _data) {
    /**
     * イベント発生時のタイムスタンプ
     * @type {number}
     */
    this.timestamp = _timestamp;
    /**
     * イベントの種類
     * @type {string}
     */
    this.category = _category;
    /**
     * 受信したメッセージやクラスオブジェクトなどを入れる
     * @type {object}
     */
    this.data = _data;
    return this;
  }
}


/**
 * メッセージパケット化するクラス
 * @class Packet
 * @param {number} t マッチ開始からの経過秒数
 * @param {Array<Object>} data 各エンティティのデータ配列
 * @param {Array<Event>} events イベントの配列
 */
class Packet {
  /**
   * @constructor
   * @param {number} t マッチ開始からの経過秒数
   * @param {Array<Object>} data 各エンティティのデータ配列
   * @param {Array<Event>} events イベントの配列
   * @memberof Packet
   */
  constructor(t, data = [], events = []) {
    /**
     * @type {number} マッチ開始からの経過秒数
     */
    this.t = t;

    /**
     * @type {Array<Object>} 各エンティティのデータ配列
     * @property {string} id エンティティのID
     * @property {Array<number>} pos エンティティの位置情報 [x, y, z]
     * @property {Array<number>} hp エンティティの体力情報 [maxHP, currentHP, armor, shield]
     * @memberof Packet
     */
    this.data = data;

    /**
     * @type {Array<Event>} イベントの配列
     * @property {string} category イベント名
     * @memberof Packet
     */
    this.events = events;
  }

  /**
   * パケットをJSON形式に変換する
   * @returns {Object} JSONオブジェクト
   * @memberof Packet
   */
  toJSON() {
    return {
      t: this.t,
      data: this.data,
      events: this.events.map((event) => ({
        category: event.category,
        ...event.data,
      })),
    };
  }

  /**
   * データを追加する
   * @param {Object} entityData 追加するエンティティ情報
   * @memberof Packet
   */
  addData(entityData) {
    this.data.push(entityData);
  }

  /**
   * データを更新する
   * @param {number} index 更新するデータのインデックス
   * @param {Object} entityData 更新するエンティティ情報
   * @memberof Packet
   */
  updateData(index, entityData) {
    this.data[index] = entityData;
  }

  /**
   * イベントを追加する
   * @param {Event} event 追加するイベント
   * @memberof Packet
   */
  addEvent(event) {
    this.events.push(event);
  }
}

/**
 * Ringに関するクラス
 * @class Ring
 * @param {number} timestamp
 * @param {number} endtimestamp
 * @param {String} category
 * @param {number} stage
 * @param {Vector3} center
 * @param {number} currentradius
 * @param {number} shrinkduration
 * @param {number} endradius
 */
class Ring {
  /**
   * リングの初期化を行う
   * @constructor
   * @param {number} _timestamp
   * @param {String} _category
   * @param {number} _stage
   * @param {Object} _center
   * @param {number} _currentradius
   * @param {number} _shrinkduration
   * @param {Object} _mapOffset
   * @memberof Ring
   */
  constructor(
    _timestamp,
    _category,
    _stage,
    _center,
    _currentRadius,
    _shrinkduration,
    _mapOffset
  ) {
    /**
     *
     * @type {number}
     */
    this.timestamp = _timestamp;
    /**
     *
     * @type {string}
     */
    this.category = _category;
    /**
     *
     * @type {number}
     */
    this.stage = _stage;
    /**
     *
     * @type {number}
     */
    this.currentRadius = _currentRadius / _mapOffset[2];
    /**
     *
     * @type {number}
     */
    this.shrinkduration = _shrinkduration;
    /**
     *
     * @type {number}
     */
    this.endTimestamp = this.timestamp + this.shrinkduration;
    /**
     *
     * @type {Vector3}
     */
    this.center = new Vector3().updateValues(
      _center.x,
      _center.y,
      _center.z,
      _mapOffset
    );
  }

  /**
   * リングオブジェクトを更新する関数
   * @param {number} _timestamp
   * @param {string} _category
   * @param {number} _currentRadius
   * @param {number} _shrinkduration
   * @param {number} _endradius
   * @param {object} _mapOffset
   * @memberof Ring
   */
  updateRing(
    _timestamp,
    _category,
    _currentRadius,
    _shrinkduration,
    _endradius,
    _mapOffset
  ) {
    this.timestamp = _timestamp;
    this.category = _category;
    this.currentRadius = _currentRadius / _mapOffset[2];
    this.endradius = _endradius;
    this.shrinkduration = _shrinkduration;
    this.endTimestamp = this.timestamp + this.shrinkduration;
  }
}


/**
 * チームを表すクラス
 * @class Team
 * @param {string} teamName チーム名
 */
class Team {
  /**
   * @constructor
   * @param {string} teamName チーム名
   * @memberof Team
   */
  constructor(teamName, rank = 0) {
    /**
     * チーム名
     * @type {string}
     */
    this.teamName = teamName;
    /**
     * プレイヤーリスト
     * @type {Array<string>}
     */
    this.players = [];
    /**
     * チームを壊滅させたプレイヤーのnucleusHash
     * @type {string}
     */
    this.destroyerId = "";
    /**
     * チームの最後の死亡プレイヤーのnucleusHash
     * @type {string}
     */
    this.lastDeath = "";
    /**
     * チームの画像URL
     * @type {string}
     */
    this.teamImg = "";
    /**
     * チームの最終順位
     * @type {number}
     */
    this.rank = rank;
    /**
     * チームのスコア
     * @type {number}
     */
    this.score = 0;
    /**
     * チームの全体でダウンさせた数
     * @type {number}
     */
    this.totalDowns = 0;
    /**
     * チームの合計キル数
     * @type {number}
     */
    this.totalKills = 0;
    /**
     * チームの合計アシスト数
     * @type {number}
     */
    this.totalKillAssists = 0;
    /**
     * チームの合計ダメージ量
     * @type {number}
     */
    this.totalDamageDealt = 0;
    /**
     * チーム全体で受けたダメージ量
     * @type {number}
     */
    this.totalDamageRecived = 0;
    /**
     * チームの合計回復量
     * @type {number}
     */
    this.totalHealing = 0;
    /**
     * チームの合計リバイブ数
     * @type {number}
     */
    this.totalRevives = 0;
    /**
     * チームの合計リスポーン数
     * @type {number}
     */
    this.totalRespawns = 0;
  }

  /**
   * プレイヤーを追加するメソッド
   * @param {string} nucleusHash 追加するプレイヤーのnucleusHash
   * @memberof Team
   */
  addPlayer(nucleusHash) {
    this.players.push(nucleusHash);
  }

  /**
   * プレイヤーを削除するメソッド
   * @param {string} nucleusHash 削除するプレイヤーのnucleusHash
   * @memberof Team
   */
  removePlayer(nucleusHash) {
    const index = this.players.indexOf(nucleusHash);
    if (index > -1) {
      this.players.splice(index, 1);
    }
  }

  /**
   * チームの残り人数を取得するメソッド
   * @param {CustomMatch} match CustomMatchクラスのインスタンス
   * @return {number} チームの残り人数
   * @memberof Team
   */
  getPlayerCount(match) {
    return this.players.filter((nucleusHash) => ["alive", "down"].includes(match.getPlayer(nucleusHash).getStatus())).length;
  }
    
  /**
   * チームを壊滅させたプレイヤーのnucleusHashを設定するメソッド
   * @param {string} nucleusHash チームを壊滅させたプレイヤーのnucleusHash
   */
  setDestroyerId(nucleusHash) {
    this.destroyerId = nucleusHash;
  }

  /**
   * チームの最後の死亡プレイヤーのnucleusHashを設定するメソッド
   * @param {string} nucleusHash チームの最後の死亡プレイヤーのnucleusHash
   */
  setLastDeath(nucleusHash) {
    this.lastDeath = nucleusHash;
  }

  /**
   * チームの画像URLを設定するメソッド
   * @param {string} url チームの画像URL
   */
  setTeamImg(url) {
    this.teamImg = url;
  }

  /**
   * チーム名を変更するメソッド
   * @param {string} newTeamName 新しいチーム名
   */
  setTeamName(newTeamName) {
    this.teamName = newTeamName;
  }

  /**
   * チームの順位を設定するメソッド
   * @param {number} rank - 順位
   * @memberof Team
   */
  setRank(rank) {
    this.rank = rank;
  }

  /**
   * チームのスコアを設定するメソッド
   * @param {number} score スコア
   * @memberof Team
   */
  setScore(score) {
    this.score = score;
  }

  /**
   * チームの合計ダウン数を増加させるメソッド
   * @memberof Team
   */
  addTotalDowns() {
    this.totalDowns++;
  }

  /**
   * チームの合計キル数を増加させるメソッド
   * @memberof Team
   */
  addTotalKills() {
    this.totalKills++;
  }

  /**
   * チームの合計アシスト数を増加させるメソッド
   * @memberof Team
   */
  addTotalKillAssists() {
    this.totalKillAssists++;
  }

  /**
   * チームの合計ダメージ量を増加させるメソッド
   * @param {number} amount 増加させるダメージ量
   * @memberof Team
   */
  addTotalDamageDealt(amount) {
    this.totalDamageDealt += amount;
  }

  /**
   * チーム全体で受けたダメージ量を増加させるメソッド
   * @param {number} amount 増加させるダメージ量
   * @memberof Team
   */
  addTotalDamageRecived(amount) {
    this.totalDamageRecived += amount;
  }

  /**
   * チームの合計回復量を増加させるメソッド
   * @param {number} amount 増加させる回復量
   * @memberof Team
   */
  addTotalHealing(amount) {
    this.totalHealing += amount;
  }

  /**
   * チームの合計リバイブ数を増加させるメソッド
   * @memberof Team
   */
  addTotalRevives() {
    this.totalRevives++;
  }

  /**
   * チームの合計リスポーン数を増加させるメソッド
   * @memberof Team
   */
  addTotalRespawns() {
    this.totalRespawns++;
  }
}

module.exports = {
  Vector3,
  Item,
  Inventory,
  Player,
  Datacenter,
  Version,
  CustomMatch,
  Weapon,
  Event,
  Packet,
  Ring,
  Team
};
