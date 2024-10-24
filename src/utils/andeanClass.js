const fs = require('fs');
const path = require('path');

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
    /**
     * 座標を更新する関数
     * @param {number} newX 新しいx座標
     * @param {number} newY 新しいy座標
     * @param {number} newZ 新しいz座標
     */
    updateValues(newX, newY, newZ) {
        this.x = newX;
        this.y = newY;
        this.z = newZ;
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
     * アイテムの個数を変更する
     * @param {number} newQuantity 新しい個数
     */
    setQuantity(newQuantity) {
        this.quantity = newQuantity;
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
     * アイテムを所持しているか確認し、なければ追加、あれば所持数を更新する
     * @param {string} itemName アイテムの名前
     * @param {number} quantity 追加または更新するアイテムの個数
     * @param {number} level アイテムのレベル
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
    }

    /**
     * インベントリ内のアイテムを取得する
     * 名前とレベルの両方で一致するアイテムを検索する
     * @param {string} itemName 取得するアイテムの名前
     * @param {number} level 取得するアイテムのレベル
     * @returns {Item|undefined} 見つかったアイテム、またはundefined
     */
    getItem(itemName, level) {
        return this.items.find(item => item.name === itemName && item.level === level);
    }

    /**
     * インベントリを空にする関数
     */
    clearInventory() {
        this.items = []; // 配列を空にする
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
     * @param {Boolean} isAlive - 生存状態
     * @param {Boolean} isOnline - 接続状態
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
        this.teamName = "";
        this.squadIndex = -1;
        this.character = "";
        this.skin = "";
        this.inventory = new Inventory();    // インベントリーを追加
        this.kills = 0;                     // キル数
        this.killAssists = 0;               // キルアシスト数
        this.downs = 0;                     // ダウンさせた数
        this.damageDealt = 0;               // 敵に与えたダメージ総数
        this.damageReceived = 0;            // くらったダメージ総数
        this.isAlive = true;
        this.isOnline = true;
        this.weaponList = {};
    }


    /**
     * プレイヤーの位置と角度を更新する関数
     * @param {number} x 新しいx座標
     * @param {number} y 新しいy座標
     * @param {number} z 新しいz座標
     * @param {number} newAngles 新しい角度
     */
    updatePositionAndAngles(x, y, z, newAngles) {
        this.pos.updateValues(x, y, z)
        this.angles = newAngles;
    }

    /**
     * プレイヤーの体力とシールドを更新する関数
     * @param {number} newCurrentHealth 新しい現在の体力
     * @param {number} newMaxHealth 新しい最大体力
     * @param {number} newShieldHealth 新しいシールドの体力
     * @param {number} newShieldMaxHealth 新しい最大シールド体力
     */
    updateHealthAndShields(newCurrentHealth, newMaxHealth, newShieldHealth, newShieldMaxHealth) {
        this.currentHealth = newCurrentHealth;
        this.maxHealth = newMaxHealth;
        this.shieldHealth = newShieldHealth;
        this.shieldMaxHealth = newShieldMaxHealth;
    }

    /**
     * プレイヤーのチーム情報、キャラクター、スキンを更新する関数
     * @param {string} newCharacter 新しいキャラクター
     * @param {string} newSkin 新しいスキン
     */
    updateCharacter(newCharacter, newSkin) {
        this.character = newCharacter;
        this.skin = newSkin;
    }

    /**
     * プレイヤーの生存状態を変更するメソッド
     * @param {boolean} status プレイヤーが生きている場合はtrue、死んでいる場合はfalse
     */
    setAliveStatus(status) {
        this.isAlive = status;
    }

    /**
     * プレイヤーの生存状態を変更するメソッド
     * @param {boolean} status プレイヤーが接続している場合はtrue、切断している場合はfalse
     */
    setOnlineStatus(status) {
        this.isAlive = status;
    }

    /**
     * チーム名を変更するメソッド
     * @param {String} teamName チーム名を入力してチーム名を変更
     */
    setTeamName(teamName) {
        this.teamName = teamName;
    }

    /**
     * チーム内のインデックスを変更するメソッド
     * @param {number} index 変更する値を入力して、その値に変更する
     */
    setSquadIndex(index) {
        this.squadIndex = index;
    }

    /**
     * プレイヤーの生存状態を返すメソッド
     * @returns {boolean} status プレイヤーが生きている場合はtrue、死んでいる場合はfalse
     */
    getAliveStatus() {
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
     * 武器リストに武器を追加
     * @param {Weapon} weapon 武器インスタンス
     */
    addWeapon(weapon) {
        this.weaponList[weapon.name] = weapon;
    }

    /**
     * 武器リストにから武器を削除
     * @param {String} name 内部の武器名
     */
    removeWeapon(name) {
        delete this.weaponList[name];
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
 * @param {number} timestamp - タイムスタンプ (uint64)
 * @param {string} category - カテゴリー名
 * @param {string} name - データセンター名
 */
class Datacenter {
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
        this.startTimeStamp = "";
        this.endTimeStamp = "";
        this.players = {};  // プレイヤーのリスト (最大60人) 連想配列に変更　チームにnucleusHashのみ保存
        this.teams = {};    // チームの連想配列 (teamIdをキーにする)
        this.maxPlayers = 60;
        this.gameState = "";  // gameStateChangedを格納
        this.mapName = "";  // マップ名を格納
        this.playlistName = "";  // マッチ名を格納 (例) World's Edge（リングなし）
        this.playlistDesc = "";  // マッチ説明を格納 (例) 最後の1部隊になるまで戦い抜け
        this.datacenter = {};  // Datacenterクラスをのオブジェクトを格納
        this.aimassiston = true;  // エイムアシストの設定値を格納
        this.anonymousMode = false;  // 匿名モードの設定値を格納
        this.serverId = "";  // サーバーIDを格納
        this.startingLoadout = new Inventory();  // 初期配布のアイテムを追加するInventoryインスタンスを作成
        this.startLogging();
    }

    /**
    * プレイヤーを追加するメソッド
    * @param {Player} player 追加するプレイヤー
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
     */
    setGameState(state) {
        this.gameState = state;
    }

    /**
     * マッチセットアップ情報を設定するメソッド
     * @param {String} mapName マップ名
     * @param {String} playlistName 
     * @param {String} playlistDesc
     * @param {Datacenter} datacenter
     * @param {Boolean} aimassiston
     * @param {Boolean} anonymousMode
     * @param {String} serverId
     */
    setMatchSetup(mapName, playlistName, playlistDesc, datacenter, aimassiston, anonymousMode, serverId) {
        this.mapName = mapName;
        this.playlistName = playlistName;
        this.playlistDesc = playlistDesc;
        this.datacenter = datacenter;
        this.aimassiston = aimassiston;
        this.anonymousMode = anonymousMode;
        this.serverId = serverId;
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
     * @returns {Player|null} 見つかったプレイヤーのステータス、見つからなければnull
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

    startLogging() {
        this.logTimer = setInterval(() => {
          this.writeLog();
        }, this.logInterval);
    }

    writeLog() {
        const logData = this.getInfo();
    
        // 既存のログファイルを読み込み、データを追記して保存
        fs.readFile(path.join(__dirname, `../../output/${this.matchName}_${this.startTimeStamp}.json`), 'utf8', (err, data) => {
          let logs = [];
    
          if (!err && data) {
            // 既存のJSONデータをパースしてログリストに追加
            logs = JSON.parse(data);
          }
    
          // 新しいログデータを追加
          logs.push(logData);
    
          // JSON形式でファイルに書き込む
          fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), (err) => {
            if (err) {
              console.error('ログファイルへの書き込みエラー:', err);
            } else {
              console.log('JSON形式でログにデータが記載されました');
            }
          });
        });
      }
}

// Weaponクラスの定義
/**
 * 武器に関するクラス
 * @param {number} name - 内部の武器名
 * @param {number} level - 武器のレベル
 */
class Weapon {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.maxMagazine = 0; // AmmoUsedで使用された最大の弾数を格納
    }

    /**
     * AmmoUsedで使用された最大の弾数を返す
     * @returns {number} AmmoUsedで使用された最大の弾数
     */
    getMaxMagazine() {
        return {
            maxMagazine: this.maxMagazine
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
    CustomMatch,
    Weapon
};
