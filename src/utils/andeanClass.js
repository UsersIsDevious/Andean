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
        this.z = newZ;
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
            maxMagazine: this.maxMagazine
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
         * @type {number} weapons - アイテムの保有数
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
    addOrUpdateItem(itemName, quantity, level) {
        const existingItem = this.getItem(itemName, level);
        if (existingItem) {
            // 同じ名前とレベルのアイテムが既に存在する場合は、所持数を更新
            const newQuantity = existingItem.quantity + quantity;
            existingItem.setQuantity(newQuantity);
            console.log(`${itemName} (Level ${level}) now has a total quantity of ${existingItem.quantity}.`);
        } else {
            // アイテムが存在しない場合は、新規追加
            const newItem = new Item(itemName, level, quantity);
            this.addItem(newItem);
            console.log(`${itemName} (Level ${level}) has been added with a quantity of ${quantity}.`);
        }
        return this;
    }

    /**
     * アイテムを所持しているか確認し、なければ追加、あれば所持数を更新する
     * @param {string} weaponLabel アイテムの名前
     * @param {number} level アイテムのレベル
     * @param {number} maxMagazine マガジンの最大サイズ
     * @return {Inventory}
     * @memberof Inventory
     */
    addOrUpdateWeapon(weaponLabel, level, maxMagazine) {
        const existingItem = this.getWeapon(weaponLabel, level);
        if (existingItem) {
            // 同じ名前とレベルのアイテムが既に存在する場合は、所持数を更新
            const newQuantity = existingItem.quantity + quantity;
            existingItem.setQuantity(newQuantity);
            console.log(`${itemName} (Level ${level}) now has a total quantity of ${existingItem.quantity}.`);
        } else {
            // アイテムが存在しない場合は、新規追加
            const newItem = new Item(itemName, level, quantity);
            this.addItem(newItem);
            console.log(`${itemName} (Level ${level}) has been added with a quantity of ${quantity}.`);
        }
        return this;
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
        return this.items.find(item => item.name === itemName && item.level === level);
    }

    /**
     * インベントリ内の武器を取得する
     * 名前とレベルの両方で一致する武器を検索する
     * @param {string} weaponId 取得する武器の名前
     * @param {number} level 取得する武器のレベル
     * @return {Item|undefined} 見つかった武器、またはundefined
     * @memberof Inventory
     */
    getWeapon(weaponId, level) {
        return this.items.find(weapon => weapon.name === weaponId && weapon.level === level);
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
        return this.items.map(item => item.getItemStatus());
    }
}

/**
 * @class Statistics
 */
class Statistics {
    /**
     * Creates an instance of Statistics.
     * @property {number} total - 合計ダメージ
     * @property {Object.<string, number>} [weaponName] - ダメージ詳細 (例: 武器やスキル)
     * @return this
     * @memberof Statistics
     */
    constructor() {
        this.total = 0; // 合計ダメージ
        /**
         * @type {object}
         * @property {number} total - 合計ダメージ
         */
        this.weapons = {}; // 攻撃手段ごとのダメージは動的に追加される
        /**
         * @type {object}
         * @property {number} total - 合計ダメージ
         */
        this.players = {};
        /**
         * @type {object}
         * @property {number} total - 合計ダメージ
         */
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
         * キルアシスト数
         * @type {Statistics}
         */
        this.killAssists = new Statistics();

        /**
         * ダウンさせた数
         * @type {Statistics}
         */
        this.downs = new Statistics();

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
         * 生存状態
         * @type {boolean}
         */
        this.isAlive = true;

        /**
         * 接続状態
         * @type {boolean}
         */
        this.isOnline = true;

        /**
         * プレイヤーのレベル情報
         * @type {object}
         * @property {number} now - 現在レベル
         * @property {object} 0 - レベル情報
         */
        this.level = {
            now: 0,
            0: {}
        };

        /**
         * 所持している武器のリスト
         * @type {Array<object>}
         */
        this.weaponList = [];
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
        this.pos.updateValues(x, y, z, mapOffset)
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
    updateHealthAndShields(newCurrentHealth, newMaxHealth, newShieldHealth, newShieldMaxHealth) {
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
     * プレイヤーの生存状態を変更するメソッド
     * @param {boolean} status プレイヤーが生きている場合はtrue、死んでいる場合はfalse
     * @memberof Player
     */
    setAliveStatus(status) {
        this.isAlive = status;
    }

    /**
     * プレイヤーの生存状態を変更するメソッド
     * @param {boolean} status プレイヤーが接続している場合はtrue、切断している場合はfalse
     * @memberof Player
     */
    setOnlineStatus(status) {
        this.isAlive = status;
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
     * @return {boolean} status プレイヤーが生きている場合はtrue、死んでいる場合はfalse
     * @memberof Player
     */
    getAliveStatus() {
        return this.isAlive;
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
     * キル数を設定するメソッド
     * @param {number} amount 設定するキル数
     * @memberof Player
     */
    setKill(amount) {
        this.kills = amount;
    }

    /**
     * キルアシスト数を設定するメソッド
     * @param {number} amount 設定するキルアシスト数
     * @memberof Player
     */
    setKillAssist(amount) {
        this.killAssists = amount;
    }

    /**
     * ダウンさせた数を設定するメソッド
     * @param {number} amount 設定するダウン数
     * @memberof Player
     */
    setDown(amount) {
        this.downs = amount;
    }

    /**
    * 敵に与えたダメージを増加させるメソッド
    * @param {string} perpetrator - 攻撃に使用したもの (例: 武器名、スキル名)
    * @param {number} amount - 増加させるダメージ量
    * @memberof Player
    */
    addDamageDealt(perpetrator, amount) {
        // 入力値のチェック
        if (typeof perpetrator !== 'string') {
            throw new TypeError('perpetrator は文字列である必要があります');
        }
        if (typeof amount !== 'number' || amount < 0) {
            throw new TypeError('amount は0以上の数値である必要があります');
        }

        // ダメージ記録の初期化
        if (!(perpetrator in this.damageDealt)) {
            this.damageDealt[perpetrator] = 0;
        }

        // ダメージを加算
        this.damageDealt[perpetrator] += amount;

        // 合計ダメージを加算
        if (!('total' in this.damageDealt)) {
            this.damageDealt['total'] = 0;
        }
        this.damageDealt['total'] += amount;
    }

    /**
     * 受けたダメージを増加させるメソッド
     * @param {number} amount - 増加させるダメージ量
     * @param {string} perpetrator - 攻撃に使用されたもの
     * @param {string} attacker - 攻撃したプレイヤーのnucleushash
     * @param {string} legend - 攻撃を行ったプレイヤーのレジェンド名
     * @param {boolean} [penetrator=false] - シールド貫通武器かどうか
     * @memberof Player
     */
    addDamageReceived(amount, perpetrator, attacker, legend, penetrator = false) {
        if (!perpetrator in this.damageReceived.weapons) {
            this.damageReceived[perpetrator] = 0;
        }
        if (!attacker in this.damageReceived.players) {
            this.damageReceived[perpetrator] = 0;
        }
        if (!legend in this.damageReceived.legends) {
            this.damageReceived[perpetrator] = 0;
        }
        this.damageReceived.weapons[perpetrator] += amount;
        this.damageReceived.players[attacker] += amount;
        this.damageReceived.legends[legend] += amount;
        this.damageReceived[total] += amount;

        if (penetrator) {
            const resultHealth = this.currentHealth - amount;
            if (resultHealth < 0) { resultHealth = 0; }
            this.updateHealthAndShields(resultHealth, this.maxHealth, this.shieldHealth, this.shieldMaxHealth);
            return [resultHealth, this.maxHealth, this.shieldHealth, this.shieldMaxHealth];
        }

        const resultShield = this.shieldHealth - amount;
        const resultHealth = amount - this.shieldHealth;

        if (resultShield < 0) { resultShield = 0; }
        if (resultHealth < 0) { resultHealth = 0; }

        this.updateHealthAndShields(resultHealth, this.maxHealth, resultShield, this.shieldMaxHealth)
        return [resultHealth, this.maxHealth, resultShield, this.shieldMaxHealth];
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
            name: this.name
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
            revision: this.revision
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
        this.startTimeStamp = "";
        /**
         * エンドタイムスタンプ
         * @type {number} 
         */
        this.endTimeStamp = "";
        /**
         * プレイヤーの連想配列 (最大60人)
         * キーはプレイヤーID、値はPlayerクラスのインスタンス
         * @type {Object<string, Player>}
         */
        this.players = {};
        /**
         * チームの連想配列
         * キーはteamId、値はnucleusHashを保存
         * @type {Object<string,string>} 
         */
        this.teams = {};
        /**
         * 最大プレイヤー数
         * @type {number}
         */
        this.maxPlayers = 60;
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
         * リングデータの配列
         * 各要素はRingクラスのインスタンス
         * @type {Array<Ring>}
         */
        this.rings = [];
        /**
         * マップのオフセット
         * @type {Array<number>}
         */
        this.mapOffset = [0, 0, 1]
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
                console.log("[CustomMatch.addRingElement] Recived unknown message");
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
    * プレイヤーを追加するメソッド
    * @param {Player} player 追加するプレイヤー
    * @memberof CustomMatch
    */
    addPlayer(player) {
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
                this.teams[player.teamId] = [];
            }
            this.teams[player.teamId].push(player.nucleusHash);
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
    setMatchSetup(mapName, playlistName, playlistDesc, aimassiston, anonymousMode, serverId) {
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
                console.log("[AndeanClass.CustomMatch.setMatchSetup] Unknown map");
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
        const player = this.players[nucleusHash];
        if (player) {
            return player;
        } else {
            // console.log(`Player with nucleusHash ${nucleusHash} not found.`);
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
            players: Object.values(this.players).map(player => player.getStatus())
        };
    }
}

/**
 * Eventに関するクラス
 * @class Event
 * @param {number} timestamp - イベント発生時のタイムスタンプ
 * @param {string} category - イベントの種類
 * @param {string} nucleusHash - プレイヤーのIDかチームのID
 * @param {object} data - 受信したメッセージやクラスオブジェクトなどを入れる
 */
class Event {
    /**
     * Eventクラスの初期化
     * @constructor
     * @param {number} _timestamp - イベント発生時のタイムスタンプ
     * @param {string} _category - イベントの種類
     * @param {string} _target - プレイヤーID or チームID
     * @param {object} _data - 受信したメッセージやクラスオブジェクトなどを入れる
     * @return {Event}
     * @memberof Event
     */
    constructor(_timestamp, _category, _target, _data) {
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
         * プレイヤーID or チームID
         * @type {string}
         */
        this.target = _target;
        /**
         * 受信したメッセージやクラスオブジェクトなどを入れる
         * @type {object}
         */
        this.data = _data;
        return this;
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
    constructor(_timestamp, _category, _stage, _center, _currentRadius, _shrinkduration, _mapOffset) {
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
        this.center = new Vector3().updateValues(_center.x, _center.y, _center.z, _mapOffset)
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
    updateRing(_timestamp, _category, _currentRadius, _shrinkduration, _endradius, _mapOffset) {
        this.timestamp = _timestamp;
        this.category = _category;
        this.currentRadius = _currentRadius / _mapOffset[2];
        this.endradius = _endradius;
        this.shrinkduration = _shrinkduration;
        this.endTimestamp = this.timestamp + this.shrinkduration;
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
    Ring
};
