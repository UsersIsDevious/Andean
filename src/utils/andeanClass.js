// Vector3クラスの定義 (x, y, z座標を持つ)
class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

// Playerクラスの定義
class Player {
    constructor(name, teamId, pos, angles, currentHealth, maxHealth, shieldHealth, shieldMaxHealth, nucleusHash, hardwareName, teamName, squadIndex, character, skin) {
        this.name = name;                    // string
        this.teamId = teamId;                // uint32
        this.pos = pos;                      // Vector3
        this.angles = angles;                // Vector3
        this.currentHealth = currentHealth;  // uint32
        this.maxHealth = maxHealth;          // uint32
        this.shieldHealth = shieldHealth;    // uint32
        this.shieldMaxHealth = shieldMaxHealth; // uint32
        this.nucleusHash = nucleusHash;      // string
        this.hardwareName = hardwareName;    // string
        this.teamName = teamName;            // string
        this.squadIndex = squadIndex;        // uint32
        this.character = character;          // string
        this.skin = skin;                    // string
        this.mainWeapon = mainWeapon;        // string
        this.subWeapon = subWeapon;          // string
    }
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
            skin: this.skin,
            mainWeapon: this.mainWeapon,
            subWeapon: this.subWeapon
        };
    }

    // プレイヤーのステータスを表示するメソッド
    printStatus() {
        console.log(`${this.name} (Team: ${this.teamName}, Squad: ${this.squadIndex})`);
        console.log(`Health: ${this.currentHealth}/${this.maxHealth}, Shield: ${this.shieldHealth}/${this.shieldMaxHealth}`);
        console.log(`Position: (${this.pos.x}, ${this.pos.y}, ${this.pos.z}), Angles: (${this.angles.x}, ${this.angles.y}, ${this.angles.z})`);
    }
    // メインウェポンを変更する関数
    changeMainWeapon(newMainWeapon) {
        this.mainWeapon = newMainWeapon;
        console.log(`${this.name} has changed main weapon to: ${this.mainWeapon}`);
    }

    // サブウェポンを変更する関数
    changeSubWeapon(newSubWeapon) {
        this.subWeapon = newSubWeapon;
        console.log(`${this.name} has changed sub weapon to: ${this.subWeapon}`);
    }

    // 両方のウェポンを変更する関数
    changeWeapons(newMainWeapon, newSubWeapon) {
        this.mainWeapon = newMainWeapon;
        this.subWeapon = newSubWeapon;
        console.log(`${this.name} has changed main weapon to: ${this.mainWeapon} and sub weapon to: ${this.subWeapon}`);
    }
}

// Vector3のインスタンス作成
const playerPosition = new Vector3(10, 20, 30);
const playerAngles = new Vector3(90, 0, 0);
// プレイヤーのステータスをオブジェクトとして取得
const playerStatus = player.getStatus();
// Playerのインスタンス作成
const player = new Player(
    "JohnDoe", 1, playerPosition, playerAngles, 100, 100, 50, 50,
    "abc123", "Alienware", "TeamAlpha", 1, "Warrior", "GoldenArmor"
);