
/**
 * 3次元ベクトルを表すクラス
 * @class
 */
class Vector3 {
    /**
     * @constructor
     * @param {number} [x=0] - X座標の値
     * @param {number} [y=0] - Y座標の値
     * @param {number} [z=0] - Z座標の値
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
/**
 * @class Item
 * @description プレイヤーが保有するアイテムを表すクラス
 */
class Item {
    /**
     * @param {string} name アイテムの名前
     * @param {number} level アイテムのレベル
     * @param {number} quantity アイテムの保有数
     */
    constructor(name, level, quantity) {
        this.name = name;       // string: アイテムの名前
        this.level = level;     // number: アイテムのレベル
        this.quantity = quantity; // number: アイテムの保有数
    }

    /**
     * アイテムの詳細を返す
     * @returns {Object} アイテムのステータス
     */
    getItemStatus() {
        return {
            name: this.name,
            level: this.level,
            quantity: this.quantity
        };
    }
}

/**
 * @class Inventory
 * @description プレイヤーが持つインベントリを表すクラス
 */
class Inventory {
    constructor() {
        this.items = []; // Array<Item>: アイテムのリスト
    }

    /**
     * インベントリにアイテムを追加する
     * @param {Item} item 追加するアイテム
     */
    addItem(item) {
        this.items.push(item);
    }

    /**
     * インベントリ内のアイテムを取得する
     * @param {string} itemName 取得するアイテムの名前
     * @returns {Item|undefined} 見つかったアイテム、またはundefined
     */
    getItem(itemName) {
        return this.items.find(item => item.name === itemName);
    }

    /**
     * インベントリのステータスを返す
     * @returns {Array<Object>} インベントリ内のアイテムのステータス
     */
    getInventoryStatus() {
        return this.items.map(item => item.getItemStatus());
    }
}

// Playerクラスの定義
/**
 * @class Player
 * @description プレイヤーを表すクラス。インベントリとゲーム内でのステータスを保持する。
 */
class Player {
    /**
     * @constructor
     * @param {string} name - プレイヤー名
     * @param {number} teamId - チームID (uint32)
     * @param {Vector3} pos - プレイヤーの位置
     * @param {number} angles - プレイヤーの視角
     * @param {number} currentHealth - 現在の体力 (uint32)
     * @param {number} maxHealth - 最大体力 (uint32)
     * @param {number} shieldHealth - 現在のシールド体力 (uint32)
     * @param {number} shieldMaxHealth - 最大シールド体力 (uint32)
     * @param {string} nucleusHash - プレイヤーの識別用ハッシュ
     * @param {string} hardwareName - 使用ハードウェア名
     * @param {string} teamName - チーム名
     * @param {number} squadIndex - 分隊番号 (uint32)
     * @param {string} character - キャラクター名
     * @param {string} skin - キャラクタースキン名
     * @param {string} mainWeapon - メインウェポン
     * @param {string} subWeapon - サブウェポン
     * @param {Inventory} inventory - インベントリー
     * @param {number} kills - キル数
     * @param {number} killAssists - キルアシスト数
     * @param {number} downs - ダウンさせた数
     * @param {number} damageDealt - 敵に与えたダメージ総数
     * @param {number} damageReceived - くらったダメージ総数
     * 
     */
    constructor(name, teamId, nucleusHash, hardwareName) {
        this.name = name;
        this.teamId = teamId;
        this.pos = new Vector3();
        this.angles = 0;
        this.currentHealth = 0;
        this.maxHealth = 0;
        this.shieldHealth = 0;
        this.shieldMaxHealth = 0;
        this.nucleusHash = nucleusHash;
        this.hardwareName = hardwareName;
        this.teamName = 0;
        this.squadIndex = 0;
        this.character = "";
        this.skin = "";
        this.inventory = new Inventory();    // インベントリーを追加
        this.kills = 0;                     // キル数
        this.killAssists = 0;               // キルアシスト数
        this.downs = 0;                     // ダウンさせた数
        this.damageDealt = 0;               // 敵に与えたダメージ総数
        this.damageReceived = 0;            // くらったダメージ総数
        this.isAlive = true;
    }

    /**
     * プレイヤーの生存状態を変更するメソッド
     * @param {boolean} status プレイヤーが生きている場合はtrue、死んでいる場合はfalse
     */
    setAliveStatus(status) {
        this.isAlive = status;
        console.log(`${this.name} is now ${status ? 'alive' : 'dead'}.`);
    }

    /**
     * プレイヤーの生存状態を返すメソッド
     * @returns {boolean} status プレイヤーが生きている場合はtrue、死んでいる場合はfalse
     */
    getAliveStatus(status) {
        return this.isAlive
    }

    /**
     * プレイヤーのステータスをオブジェクトとして返す
     * @returns {Object} プレイヤーのステータス情報
     */
    getStatus() {
        return {
            name: this.name,
            teamId: this.teamId,
            pos: { x: this.pos.x, y: this.pos.y, z: this.pos.z },
            angles: { x: this.angles.x, y: this.angles.y, z: this.angles.z },
            currentHealth: this.currentHealth,
            maxHealth: this.maxHealth,
            shieldHealth: this.shieldHealth,
            shieldMaxHealth: this.shieldMaxHealth,
            nucleusHash: this.nucleusHash,
            hardwareName: this.hardwareName,
            teamName: this.teamName,
            squadIndex: this.squadIndex,
            character: this.character,
            skin: this.skin
        };
    }

    /**
     * キル数を増加させるメソッド
     * @param {number} amount 増加させるキル数
     */
    addKill(amount = 1) {
        this.kills += amount;
    }

    /**
     * キルアシスト数を増加させるメソッド
     * @param {number} amount 増加させるキルアシスト数
     */
    addKillAssist(amount = 1) {
        this.killAssists += amount;
    }

    /**
     * ダウンさせた数を増加させるメソッド
     * @param {number} amount 増加させるダウン数
     */
    addDown(amount = 1) {
        this.downs += amount;
    }

    /**
     * 敵に与えたダメージを増加させるメソッド
     * @param {number} amount 増加させるダメージ量
     */
    addDamageDealt(amount) {
        this.damageDealt += amount;
    }

    /**
     * くらったダメージを増加させるメソッド
     * @param {number} amount 増加させるダメージ量
     */
    addDamageReceived(amount) {
        this.damageReceived += amount;
    }

    /**
     * プレイヤーのステータスを表示するメソッド
     */
    printStatus() {
        console.log(`${this.name} (Team: ${this.teamName}, Squad: ${this.squadIndex})`);
        console.log(`Health: ${this.currentHealth}/${this.maxHealth}, Shield: ${this.shieldHealth}/${this.shieldMaxHealth}`);
        console.log(`Position: (${this.pos.x}, ${this.pos.y}, ${this.pos.z}), Angles: (${this.angles.x}, ${this.angles.y}, ${this.angles.z})`);
    }

    /**
     * メインウェポンを変更する関数
     * @param {string} newMainWeapon - 新しいメインウェポン
     */
    changeMainWeapon(newMainWeapon) {
        this.mainWeapon = newMainWeapon;
        console.log(`${this.name} has changed main weapon to: ${this.mainWeapon}`);
    }

    /**
     * サブウェポンを変更する関数
     * @param {string} newSubWeapon - 新しいサブウェポン
     */
    changeSubWeapon(newSubWeapon) {
        this.subWeapon = newSubWeapon;
        console.log(`${this.name} has changed sub weapon to: ${this.subWeapon}`);
    }

    /**
     * メインとサブウェポンを同時に変更する関数
     * @param {string} newMainWeapon - 新しいメインウェポン
     * @param {string} newSubWeapon - 新しいサブウェポン
     */
    changeWeapons(newMainWeapon, newSubWeapon) {
        this.mainWeapon = newMainWeapon;
        this.subWeapon = newSubWeapon;
        console.log(`${this.name} has changed main weapon to: ${this.mainWeapon} and sub weapon to: ${this.subWeapon}`);
    }

    /**
     * プレイヤーにアイテムを追加する
     * @param {Item} item 追加するアイテム
     */
    addItemToInventory(item) {
        this.inventory.addItem(item);
    }

    /**
     * プレイヤーのインベントリのステータスを取得する
     * @returns {Array<Object>} インベントリ内のアイテムのステータス
     */
    getInventoryStatus() {
        return this.inventory.getInventoryStatus();
    }
}
// Datacenterクラスの定義
/**
 * データセンターを表すクラス
 * @class
 */
class Datacenter {
    /**
     * @constructor
     * @param {number} timestamp - タイムスタンプ (uint64)
     * @param {string} category - カテゴリー名
     * @param {string} name - データセンター名
     */
    constructor(timestamp, category, name) {
        this.timestamp = timestamp;
        this.category = category;
        this.name = name;
    }

    /**
     * データセンターのステータスをオブジェクトとして返す
     * @returns {Object} データセンターのステータス情報
     */
    getStatus() {
        return {
            timestamp: this.timestamp,
            category: this.category,
            name: this.name
        };
    }

    /**
     * データセンターの詳細を表示するメソッド
     */
    printDetails() {
        console.log(`Timestamp: ${this.timestamp}`);
        console.log(`Category: ${this.category}`);
        console.log(`Datacenter Name: ${this.name}`);
    }
}

// Versionクラスの定義
/**
 * バージョン情報を表すクラス
 * @class
 */
class Version {
    /**
     * @constructor
     * @param {number} major_num - メジャーバージョン番号 (uint32)
     * @param {number} minor_num - マイナーバージョン番号 (uint32)
     * @param {number} build_stamp - ビルドスタンプ (uint32)
     * @param {string} revision - リビジョン情報
     */
    constructor(major_num, minor_num, build_stamp, revision) {
        this.major_num = major_num;
        this.minor_num = minor_num;
        this.build_stamp = build_stamp;
        this.revision = revision;
    }

    /**
     * バージョンのステータスをオブジェクトとして返す
     * @returns {Object} バージョンのステータス情報
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
     */
    printDetails() {
        console.log(`Version: ${this.major_num}.${this.minor_num}`);
        console.log(`Build Stamp: ${this.build_stamp}`);
        console.log(`Revision: ${this.revision}`);
    }
}

// CustomMatchクラスの定義
/**
 * カスタムマッチを管理するクラス
 * @class
 */
class CustomMatch {
    /**
     * @constructor
     * @param {string} matchName - マッチ名
     */
    constructor(matchName) {
        this.matchName = matchName;
        this.players = {};  // プレイヤーのリスト (最大60人) 連想配列に変更　チームにnucleusHashのみ保存
        this.teams = {};    // チームの連想配列 (teamIdをキーにする)
        this.maxPlayers = 60;
    }

    /**
    * プレイヤーを追加するメソッド
    * @param {Player} player 追加するプレイヤー
    */
    addPlayer(player) {
        if (Object.keys(this.players).length >= this.maxPlayers) {
            console.log("Cannot add more players, the match is full.");
        } else if (this.players[player.nucleusHash]) {
            console.log(`Player with nucleusHash ${player.nucleusHash} is already in the match.`);
        } else {
            this.players[player.nucleusHash] = player;
            console.log(`${player.name} has joined the match.`);

            // チームにプレイヤーを追加
            if (!this.teams[player.teamId]) {
                // チームが存在しない場合は新しく作成する
                this.teams[player.teamId] = new Team(player.teamName, player.teamId);
            }
            this.teams[player.teamId].addPlayer(player.nucleusHash);
        }
    }

    /**
     * プレイヤーを削除するメソッド
     * @param {string} nucleusHash プレイヤーのnucleusHash
     */
    removePlayer(nucleusHash) {
        if (this.players[nucleusHash]) {
            const removedPlayer = this.players[nucleusHash];
            delete this.players[nucleusHash];
            console.log(`${removedPlayer.name} has been removed from the match.`);
        } else {
            console.log(`Player with nucleusHash ${nucleusHash} not found in the match.`);
        }
    }

    /**
     * 現在のプレイヤー数を返す
     * @returns {number} 現在のプレイヤー数
     */
    getPlayerCount() {
        return Object.keys(this.players).length;
    }

    /**
     * 特定のプレイヤーを取得するメソッド
     * @param {string} nucleusHash プレイヤーのnucleusHash
     * @returns {Object|null} 見つかったプレイヤーのステータス、見つからなければnull
     */
    getPlayer(nucleusHash) {
        const player = this.players[nucleusHash];
        if (player) {
            return player;
        } else {
            console.log(`Player with nucleusHash ${nucleusHash} not found.`);
            return null;
        }
    }

    /**
     * マッチのステータスを取得するメソッド
     * @returns {Object} マッチのステータスとプレイヤーリスト
     */
    getMatchStatus() {
        return {
            matchName: this.matchName,
            playerCount: this.getPlayerCount(),
            maxPlayers: this.maxPlayers,
            players: Object.values(this.players).map(player => player.getStatus())
        };
    }
}

module.exports = {
    Vector3,
    Item,
    Inventory,
    Player,
    Datacenter,
    Version,
    CustomMatch
};
