// Vector3クラスの定義 (x, y, z座標を持つ)
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

// Playerクラスの定義
/**
 * プレイヤー情報を保持するクラス
 * @class
 */
class Player {
    /**
     * @constructor
     * @param {string} name - プレイヤー名
     * @param {number} teamId - チームID (uint32)
     * @param {Vector3} pos - プレイヤーの位置
     * @param {Vector3} angles - プレイヤーの視角
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
     */
    constructor(name, teamId, pos, angles, currentHealth, maxHealth, shieldHealth, shieldMaxHealth, nucleusHash, hardwareName, teamName, squadIndex, character, skin) {
        this.name = name;
        this.teamId = teamId;
        this.pos = pos;
        this.angles = angles;
        this.currentHealth = currentHealth;
        this.maxHealth = maxHealth;
        this.shieldHealth = shieldHealth;
        this.shieldMaxHealth = shieldMaxHealth;
        this.nucleusHash = nucleusHash;
        this.hardwareName = hardwareName;
        this.teamName = teamName;
        this.squadIndex = squadIndex;
        this.character = character;
        this.skin = skin;
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
        this.players = [];  // プレイヤーのリスト (最大60人)
        this.maxPlayers = 60;
    }

    /**
     * プレイヤーを追加するメソッド
     * @param {Player} player - 追加するプレイヤー
     */
    addPlayer(player) {
        if (this.players.length >= this.maxPlayers) {
            console.log("Cannot add more players, the match is full.");
        } else {
            this.players.push(player);
            console.log(`${player.name} has joined the match.`);
        }
    }

    /**
     * プレイヤーを削除するメソッド
     * @param {string} playerName - 削除するプレイヤーの名前
     */
    removePlayer(playerName) {
        const index = this.players.findIndex(p => p.name === playerName);
        if (index !== -1) {
            const removedPlayer = this.players.splice(index, 1)[0];
            console.log(`${removedPlayer.name} has been removed from the match.`);
        } else {
            console.log(`Player ${playerName} not found in the match.`);
        }
    }

    /**
     * 現在のプレイヤー数を返すメソッド
     * @returns {number} 現在のプレイヤー数
     */
    getPlayerCount() {
        return this.players.length;
    }

    /**
     * マッチのステータスを取得するメソッド
     * @returns {Object} マッチのステータス情報
     */
    getMatchStatus() {
        return {
            matchName: this.matchName,
            playerCount: this.players.length,
            maxPlayers: this.maxPlayers,
            players: this.players.map(player => player.getStatus())
        };
    }
}

// Vector3のインスタンス作成
const playerPosition = new Vector3(10, 20, 30);
const playerAngles = new Vector3(90, 0, 0);

// Playerのインスタンス作成
/**
 * プレイヤーオブジェクトを生成し、ステータスを取得する例
 */
const player = new Player(
    "JohnDoe", 1, playerPosition, playerAngles, 100, 100, 50, 50,
    "abc123", "Alienware", "TeamAlpha", 1, "Warrior", "GoldenArmor"
);

// プレイヤーのステータスをオブジェクトとして取得
const playerStatus = player.getStatus();
