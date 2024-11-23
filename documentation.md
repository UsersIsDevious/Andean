## Classes

<dl>
<dt><a href="#Vector3">Vector3</a></dt>
<dd></dd>
<dt><a href="#Item">Item</a></dt>
<dd></dd>
<dt><a href="#Weapon">Weapon</a></dt>
<dd></dd>
<dt><a href="#Inventory">Inventory</a></dt>
<dd></dd>
<dt><a href="#Player">Player</a></dt>
<dd></dd>
<dt><a href="#Datacenter">Datacenter</a></dt>
<dd></dd>
<dt><a href="#Version">Version</a></dt>
<dd></dd>
<dt><a href="#CustomMatch">CustomMatch</a></dt>
<dd></dd>
<dt><a href="#Event">Event</a></dt>
<dd></dd>
<dt><a href="#Ring">Ring</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#match">match</a> : <code><a href="#CustomMatch">CustomMatch</a></code></dt>
<dd><p>メッセージを分析し、要素を抽出する。</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#intervalId">intervalId</a> : <code>*</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#startApexLegends">startApexLegends()</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#updatePlayer">updatePlayer(json, player, characterSelected, mapName)</a></dt>
<dd><p>Playerクラスのオブジェクトを更新する</p>
</dd>
<dt><a href="#processUpdatePlayer">processUpdatePlayer(msg, match, [characterSelected])</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#checkItemLevel">checkItemLevel(name)</a></dt>
<dd><p>アイテム名からレベルをチェックする</p>
</dd>
<dt><a href="#checkShieldPenetrator">checkShieldPenetrator(perpetrator)</a> ⇒ <code>boolean</code></dt>
<dd><p>シールド貫通武器かどうかのチェック</p>
</dd>
<dt><a href="#getPlayerStatus">getPlayerStatus(match)</a></dt>
<dd></dd>
<dt><a href="#update">update()</a></dt>
<dd></dd>
<dt><a href="#handleMessage">handleMessage(message, messageType, ws)</a></dt>
<dd><p>メッセージを処理する</p>
</dd>
<dt><a href="#handleApiRequest">handleApiRequest(req, res)</a></dt>
<dd><p>API 用のエンドポイントを処理する関数</p>
</dd>
<dt><a href="#handleNotify">handleNotify(req, res)</a></dt>
<dd><p>ボタンが押された時に色をクライアントに送信するエンドポイント</p>
</dd>
<dt><a href="#stopServer">stopServer(req, res)</a></dt>
<dd><p>サーバーを停止するエンドポイント</p>
</dd>
<dt><a href="#startGame">startGame(req, res)</a></dt>
<dd><p>ゲームを起動するエンドポイント</p>
</dd>
<dt><a href="#sseEndpoint">sseEndpoint(req, res)</a></dt>
<dd><p>SSE クライアント接続用のエンドポイント</p>
</dd>
<dt><a href="#sendClients">sendClients(message)</a></dt>
<dd><p>クライアントにデータを送信する関数</p>
</dd>
<dt><a href="#closeAllClients">closeAllClients()</a></dt>
<dd><p>全てのクライアント接続を閉じる関数</p>
</dd>
<dt><a href="#configureServer">configureServer()</a></dt>
<dd><p>サーバーのミドルウェアとルート設定を行う関数</p>
</dd>
<dt><a href="#startServer">startServer()</a> ⇒ <code>Object</code></dt>
<dd><p>HTTP サーバーを起動する関数</p>
</dd>
<dt><a href="#stopServer">stopServer()</a> ⇒ <code>Promise</code></dt>
<dd><p>HTTP サーバーを停止する関数</p>
</dd>
<dt><a href="#serialized_request">serialized_request(request)</a></dt>
<dd><p>シリアライズされたリクエストをWebSocket経由でクライアントに送信</p>
</dd>
<dt><a href="#change_camera">change_camera(type, value)</a></dt>
<dd><p>カメラを指定されたターゲットに変更</p>
</dd>
<dt><a href="#pause_toggle">pause_toggle()</a></dt>
<dd><p>ポーズの切り替え</p>
</dd>
<dt><a href="#create_lobby">create_lobby()</a></dt>
<dd><p>カスタムマッチロビーを作成</p>
</dd>
<dt><a href="#join_lobby">join_lobby(token)</a></dt>
<dd><p>カスタムマッチロビーに参加</p>
</dd>
<dt><a href="#leave_lobby">leave_lobby()</a></dt>
<dd><p>カスタムマッチロビーから退出</p>
</dd>
<dt><a href="#set_ready">set_ready(ready)</a></dt>
<dd><p>試合の準備完了状態を設定</p>
</dd>
<dt><a href="#set_matchmaking">set_matchmaking(matchmaking)</a></dt>
<dd><p>マッチメイキングの有効/無効を設定</p>
</dd>
<dt><a href="#set_team">set_team(teamId)</a></dt>
<dd><p>チームを設定</p>
</dd>
<dt><a href="#kick_player">kick_player(playerId)</a></dt>
<dd><p>プレイヤーをキック</p>
</dd>
<dt><a href="#set_settings">set_settings(matchName, adminChat, teamRename, selfAssign, aimAssist, anonMode)</a></dt>
<dd><p>試合設定を適用</p>
</dd>
<dt><a href="#send_chat">send_chat(message)</a></dt>
<dd><p>チャットメッセージを送信</p>
</dd>
<dt><a href="#get_lobby_players">get_lobby_players()</a></dt>
<dd><p>ロビープレイヤー情報を取得</p>
</dd>
<dt><a href="#set_team_name">set_team_name(teamId, name)</a></dt>
<dd><p>チーム名を設定</p>
</dd>
<dt><a href="#get_match_settings">get_match_settings()</a></dt>
<dd><p>試合設定を取得</p>
</dd>
<dt><a href="#set_spawn_point">set_spawn_point(teamId, landmark)</a></dt>
<dd><p>チーム名を設定</p>
</dd>
<dt><a href="#apexLiveApiCall">apexLiveApiCall(req, res)</a></dt>
<dd><p>API エンドポイント用の処理関数</p>
</dd>
<dt><a href="#sendMapInitialization">sendMapInitialization(matchName, match)</a></dt>
<dd><p>マップ初期化のメッセージを送信する関数</p>
</dd>
<dt><a href="#sendPlayerPositionUpdate">sendPlayerPositionUpdate(match)</a></dt>
<dd><p>プレイヤーの座標変更のメッセージを送信する関数</p>
</dd>
<dt><a href="#sendRingUpdate">sendRingUpdate(match)</a></dt>
<dd><p>リングに関する情報のリストを送信</p>
</dd>
<dt><a href="#send">send(match)</a></dt>
<dd><p>メッセージを送信する関数</p>
</dd>
<dt><a href="#logMessage">logMessage(message, [type])</a></dt>
<dd><p>指定されたメッセージをコンソールに出力します。</p>
</dd>
<dt><a href="#ensureFolderExists">ensureFolderExists(folder)</a></dt>
<dd><p>指定されたフォルダが存在しない場合は作成します</p>
</dd>
<dt><a href="#saveData">saveData(_class, filename)</a></dt>
<dd><p>JSONファイルにデータを蓄積し、保存します。
既存のデータがある場合は、それに新しいデータを追加してから保存されます。</p>
</dd>
<dt><a href="#registerOnServersStarted">registerOnServersStarted(callback)</a></dt>
<dd><p>サーバーが全て立ち上がった時に呼ばれるコールバックを登録する関数</p>
</dd>
<dt><a href="#getServerList">getServerList()</a> ⇒ <code>Object</code></dt>
<dd><p>サーバーリストを取得する関数</p>
</dd>
<dt><a href="#startAllServers">startAllServers(httpServer, websocketServer)</a> ⇒ <code>Object</code></dt>
<dd><p>サーバー（HTTP, WebSocket）の起動を管理する関数</p>
</dd>
<dt><a href="#saveLog">saveLog(message, [logFileName])</a></dt>
<dd><p>指定したメッセージをログファイルに保存する関数</p>
</dd>
<dt><a href="#readConfig">readConfig([configPath])</a> ⇒ <code>Object</code> | <code>null</code></dt>
<dd><p>config.json を読み込む関数</p>
</dd>
<dt><a href="#runCommand">runCommand(command)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>任意のコマンドを実行する関数</p>
</dd>
<dt><a href="#runPowerShellCommand">runPowerShellCommand(command)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>PowerShell コマンドを実行する関数</p>
</dd>
<dt><a href="#runRegularCommand">runRegularCommand(command)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>通常のシェルコマンドを実行する関数</p>
</dd>
<dt><a href="#shutdownServers">shutdownServers()</a></dt>
<dd><p>全サーバーと SSE クライアントの接続をクローズしてアプリケーションを終了する関数</p>
</dd>
</dl>

<a name="Vector3"></a>

## Vector3
**Kind**: global class  

* [Vector3](#Vector3)
    * [new Vector3()](#new_Vector3_new)
    * _instance_
        * [.x](#Vector3+x)
        * [.y](#Vector3+y)
        * [.z](#Vector3+z)
        * [.updateValues(newX, newY, newZ, mapOffset)](#Vector3+updateValues) ⇒ [<code>Vector3</code>](#Vector3)
    * _static_
        * [.Vector3](#Vector3.Vector3)
            * [new Vector3([x], [y], [z])](#new_Vector3.Vector3_new)

<a name="new_Vector3_new"></a>

### new Vector3()
3次元ベクトルを表すクラス

<a name="Vector3+x"></a>

### vector3.x
**Kind**: instance property of [<code>Vector3</code>](#Vector3)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X座標の値 |

<a name="Vector3+y"></a>

### vector3.y
**Kind**: instance property of [<code>Vector3</code>](#Vector3)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | Y座標の値 |

<a name="Vector3+z"></a>

### vector3.z
**Kind**: instance property of [<code>Vector3</code>](#Vector3)  

| Param | Type | Description |
| --- | --- | --- |
| z | <code>number</code> | Z座標の値 |

<a name="Vector3+updateValues"></a>

### vector3.updateValues(newX, newY, newZ, mapOffset) ⇒ [<code>Vector3</code>](#Vector3)
座標を更新する関数

**Kind**: instance method of [<code>Vector3</code>](#Vector3)  

| Param | Type | Description |
| --- | --- | --- |
| newX | <code>number</code> | 新しいx座標 |
| newY | <code>number</code> | 新しいy座標 |
| newZ | <code>number</code> | 新しいz座標 |
| mapOffset | <code>number</code> | 座標オフセット |

<a name="Vector3.Vector3"></a>

### Vector3.Vector3
**Kind**: static class of [<code>Vector3</code>](#Vector3)  
<a name="new_Vector3.Vector3_new"></a>

#### new Vector3([x], [y], [z])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>number</code> | <code>0</code> | X座標の値 |
| [y] | <code>number</code> | <code>0</code> | Y座標の値 |
| [z] | <code>number</code> | <code>0</code> | Z座標の値 |

<a name="Item"></a>

## Item
**Kind**: global class  

* [Item](#Item)
    * [new Item()](#new_Item_new)
    * _instance_
        * [.name](#Item+name)
        * [.level](#Item+level)
        * [.quantity](#Item+quantity)
        * [.setQuantity(newQuantity)](#Item+setQuantity) ⇒ [<code>Item</code>](#Item)
        * [.getItemStatus()](#Item+getItemStatus) ⇒ [<code>Item</code>](#Item)
    * _static_
        * [.Item](#Item.Item)
            * [new Item(name, level, quantity)](#new_Item.Item_new)

<a name="new_Item_new"></a>

### new Item()
プレイヤーが保有するアイテムを表すクラス

<a name="Item+name"></a>

### item.name
**Kind**: instance property of [<code>Item</code>](#Item)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | アイテムの名前 |

<a name="Item+level"></a>

### item.level
**Kind**: instance property of [<code>Item</code>](#Item)  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>number</code> | アイテムのレベル |

<a name="Item+quantity"></a>

### item.quantity
**Kind**: instance property of [<code>Item</code>](#Item)  

| Param | Type | Description |
| --- | --- | --- |
| quantity | <code>number</code> | アイテムの保有数 |

<a name="Item+setQuantity"></a>

### item.setQuantity(newQuantity) ⇒ [<code>Item</code>](#Item)
アイテムの個数を変更する

**Kind**: instance method of [<code>Item</code>](#Item)  

| Param | Type | Description |
| --- | --- | --- |
| newQuantity | <code>number</code> | 新しい個数 |

<a name="Item+getItemStatus"></a>

### item.getItemStatus() ⇒ [<code>Item</code>](#Item)
アイテムの詳細を返す

**Kind**: instance method of [<code>Item</code>](#Item)  
**Returns**: [<code>Item</code>](#Item) - アイテムのステータス  
<a name="Item.Item"></a>

### Item.Item
**Kind**: static class of [<code>Item</code>](#Item)  
<a name="new_Item.Item_new"></a>

#### new Item(name, level, quantity)

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | アイテムの名前 |
| level | <code>number</code> | アイテムのレベル |
| quantity | <code>number</code> | アイテムの保有数 |

<a name="Weapon"></a>

## Weapon
**Kind**: global class  

* [Weapon](#Weapon)
    * [new Weapon()](#new_Weapon_new)
    * _instance_
        * [.Id](#Weapon+Id)
        * [.label](#Weapon+label)
        * [.level](#Weapon+level)
        * [.maxMagazine](#Weapon+maxMagazine)
        * [.getMaxMagazine()](#Weapon+getMaxMagazine) ⇒ <code>number</code>
    * _static_
        * [.Weapon](#Weapon.Weapon)
            * [new Weapon(id, label, level)](#new_Weapon.Weapon_new)

<a name="new_Weapon_new"></a>

### new Weapon()
武器に関するクラス

<a name="Weapon+Id"></a>

### weapon.Id
**Kind**: instance property of [<code>Weapon</code>](#Weapon)  

| Param | Type | Description |
| --- | --- | --- |
| Id | <code>string</code> | 内部の武器名 |

<a name="Weapon+label"></a>

### weapon.label
**Kind**: instance property of [<code>Weapon</code>](#Weapon)  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | 表示されている武器名 |

<a name="Weapon+level"></a>

### weapon.level
**Kind**: instance property of [<code>Weapon</code>](#Weapon)  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>number</code> | 武器のレベル |

<a name="Weapon+maxMagazine"></a>

### weapon.maxMagazine
**Kind**: instance property of [<code>Weapon</code>](#Weapon)  

| Param | Type | Description |
| --- | --- | --- |
| maxMagazine | <code>number</code> | AmmoUsedで使用された最大の弾数を格納 |

<a name="Weapon+getMaxMagazine"></a>

### weapon.getMaxMagazine() ⇒ <code>number</code>
AmmoUsedで使用された最大の弾数を返す

**Kind**: instance method of [<code>Weapon</code>](#Weapon)  
**Returns**: <code>number</code> - AmmoUsedで使用された最大の弾数  
<a name="Weapon.Weapon"></a>

### Weapon.Weapon
**Kind**: static class of [<code>Weapon</code>](#Weapon)  
<a name="new_Weapon.Weapon_new"></a>

#### new Weapon(id, label, level)
Creates an instance of Weapon.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | 内部の武器名 |
| label | <code>string</code> | 表示されている武器名 |
| level | <code>number</code> | 武器のレベル |

<a name="Inventory"></a>

## Inventory
**Kind**: global class  

* [Inventory](#Inventory)
    * [new Inventory()](#new_Inventory_new)
    * _instance_
        * [.items](#Inventory+items)
        * [.weapons](#Inventory+weapons)
        * [.addItem(item)](#Inventory+addItem) ⇒ [<code>Inventory</code>](#Inventory)
        * [.addWeapon(weapon)](#Inventory+addWeapon) ⇒ [<code>Inventory</code>](#Inventory)
        * [.addOrUpdateItem(itemName, quantity, level)](#Inventory+addOrUpdateItem) ⇒ [<code>Inventory</code>](#Inventory)
        * [.addOrUpdateWeapon(weaponLabel, level, maxMagazine)](#Inventory+addOrUpdateWeapon) ⇒ [<code>Inventory</code>](#Inventory)
        * [.getItem(itemName, level)](#Inventory+getItem) ⇒ [<code>Item</code>](#Item) \| <code>undefined</code>
        * [.getWeapon(weaponId, level)](#Inventory+getWeapon) ⇒ [<code>Item</code>](#Item) \| <code>undefined</code>
        * [.clearInventory()](#Inventory+clearInventory)
        * [.getInventoryStatus()](#Inventory+getInventoryStatus) ⇒ <code>Array.&lt;Object&gt;</code>
    * _static_
        * [.Inventory](#Inventory.Inventory)
            * [new Inventory()](#new_Inventory.Inventory_new)

<a name="new_Inventory_new"></a>

### new Inventory()
プレイヤーが持つインベントリを表すクラス

<a name="Inventory+items"></a>

### inventory.items
**Kind**: instance property of [<code>Inventory</code>](#Inventory)  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>item</code> | アイテムの保有数 |

<a name="Inventory+weapons"></a>

### inventory.weapons
**Kind**: instance property of [<code>Inventory</code>](#Inventory)  

| Param | Type | Description |
| --- | --- | --- |
| weapons | <code>number</code> | アイテムの保有数 |

<a name="Inventory+addItem"></a>

### inventory.addItem(item) ⇒ [<code>Inventory</code>](#Inventory)
インベントリにアイテムを追加する

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>Item</code>](#Item) | 追加するアイテム |

<a name="Inventory+addWeapon"></a>

### inventory.addWeapon(weapon) ⇒ [<code>Inventory</code>](#Inventory)
インベントリに武器を追加する

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  

| Param | Type | Description |
| --- | --- | --- |
| weapon | [<code>Weapon</code>](#Weapon) | 追加するアイテム |

<a name="Inventory+addOrUpdateItem"></a>

### inventory.addOrUpdateItem(itemName, quantity, level) ⇒ [<code>Inventory</code>](#Inventory)
アイテムを所持しているか確認し、なければ追加、あれば所持数を更新する

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  

| Param | Type | Description |
| --- | --- | --- |
| itemName | <code>string</code> | アイテムの名前 |
| quantity | <code>number</code> | 追加または更新するアイテムの個数 |
| level | <code>number</code> | アイテムのレベル |

<a name="Inventory+addOrUpdateWeapon"></a>

### inventory.addOrUpdateWeapon(weaponLabel, level, maxMagazine) ⇒ [<code>Inventory</code>](#Inventory)
アイテムを所持しているか確認し、なければ追加、あれば所持数を更新する

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  

| Param | Type | Description |
| --- | --- | --- |
| weaponLabel | <code>string</code> | アイテムの名前 |
| level | <code>number</code> | アイテムのレベル |
| maxMagazine | <code>number</code> | マガジンの最大サイズ |

<a name="Inventory+getItem"></a>

### inventory.getItem(itemName, level) ⇒ [<code>Item</code>](#Item) \| <code>undefined</code>
インベントリ内のアイテムを取得する名前とレベルの両方で一致するアイテムを検索する

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  
**Returns**: [<code>Item</code>](#Item) \| <code>undefined</code> - 見つかったアイテム、またはundefined  

| Param | Type | Description |
| --- | --- | --- |
| itemName | <code>string</code> | 取得するアイテムの名前 |
| level | <code>number</code> | 取得するアイテムのレベル |

<a name="Inventory+getWeapon"></a>

### inventory.getWeapon(weaponId, level) ⇒ [<code>Item</code>](#Item) \| <code>undefined</code>
インベントリ内の武器を取得する名前とレベルの両方で一致する武器を検索する

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  
**Returns**: [<code>Item</code>](#Item) \| <code>undefined</code> - 見つかった武器、またはundefined  

| Param | Type | Description |
| --- | --- | --- |
| weaponId | <code>string</code> | 取得する武器の名前 |
| level | <code>number</code> | 取得する武器のレベル |

<a name="Inventory+clearInventory"></a>

### inventory.clearInventory()
インベントリを空にする関数

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  
<a name="Inventory+getInventoryStatus"></a>

### inventory.getInventoryStatus() ⇒ <code>Array.&lt;Object&gt;</code>
インベントリのステータスを返す

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  
**Returns**: <code>Array.&lt;Object&gt;</code> - インベントリ内のアイテムのステータス  
<a name="Inventory.Inventory"></a>

### Inventory.Inventory
**Kind**: static class of [<code>Inventory</code>](#Inventory)  
<a name="new_Inventory.Inventory_new"></a>

#### new Inventory()
Creates an instance of Inventory.

<a name="Player"></a>

## Player
**Kind**: global class  

* [Player](#Player)
    * [new Player()](#new_Player_new)
    * _instance_
        * [.name](#Player+name)
        * [.teamId](#Player+teamId)
        * [.nucleusHash](#Player+nucleusHash)
        * [.hardwareName](#Player+hardwareName)
        * [.pos](#Player+pos)
        * [.angles](#Player+angles)
        * [.currentHealth](#Player+currentHealth)
        * [.maxHealth](#Player+maxHealth)
        * [.shieldHealth](#Player+shieldHealth)
        * [.shieldMaxHealth](#Player+shieldMaxHealth)
        * [.teamName](#Player+teamName)
        * [.squadIndex](#Player+squadIndex)
        * [.character](#Player+character)
        * [.skin](#Player+skin)
        * [.inventory](#Player+inventory)
        * [.kills](#Player+kills)
        * [.killAssists](#Player+killAssists)
        * [.downs](#Player+downs)
        * [.damageDealt](#Player+damageDealt)
        * [.damageReceived](#Player+damageReceived)
        * [.isAlive](#Player+isAlive)
        * [.isOnline](#Player+isOnline)
        * [.level](#Player+level)
        * [.weaponList](#Player+weaponList)
        * [.updatePositionAndAngles(x, y, z, newAngles, mapOffset)](#Player+updatePositionAndAngles)
        * [.updateHealthAndShields(newCurrentHealth, newMaxHealth, newShieldHealth, newShieldMaxHealth)](#Player+updateHealthAndShields)
        * [.updateCharacter(newCharacter, newSkin)](#Player+updateCharacter)
        * [.setAliveStatus(status)](#Player+setAliveStatus)
        * [.setOnlineStatus(status)](#Player+setOnlineStatus)
        * [.setTeamName(teamName)](#Player+setTeamName)
        * [.setSquadIndex(index)](#Player+setSquadIndex)
        * [.getAliveStatus()](#Player+getAliveStatus) ⇒ <code>boolean</code>
        * [.getOnlineStatus()](#Player+getOnlineStatus) ⇒ <code>boolean</code>
        * [.setKill(amount)](#Player+setKill)
        * [.setKillAssist(amount)](#Player+setKillAssist)
        * [.setDown(amount)](#Player+setDown)
        * [.addDamageDealt(perpetrator, amount)](#Player+addDamageDealt)
        * [.addDamageReceived(perpetrator, amount, [penetrator])](#Player+addDamageReceived)
    * _static_
        * [.Player](#Player.Player)
            * [new Player(name, teamId, nucleusHash, hardwareName)](#new_Player.Player_new)

<a name="new_Player_new"></a>

### new Player()
プレイヤーを表すクラス。インベントリとゲーム内でのステータスを保持する。

<a name="Player+name"></a>

### player.name
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | プレイヤー名 |

<a name="Player+teamId"></a>

### player.teamId
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| teamId | <code>number</code> | チームID (uint32) |

<a name="Player+nucleusHash"></a>

### player.nucleusHash
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| nucleusHash | <code>string</code> | プレイヤーの識別用ハッシュ |

<a name="Player+hardwareName"></a>

### player.hardwareName
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| hardwareName | <code>string</code> | 使用ハードウェア名 |

<a name="Player+pos"></a>

### player.pos
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| pos | [<code>Vector3</code>](#Vector3) | プレイヤーの位置 |

<a name="Player+angles"></a>

### player.angles
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| angles | <code>number</code> | プレイヤーの視角 |

<a name="Player+currentHealth"></a>

### player.currentHealth
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| currentHealth | <code>number</code> | 現在の体力 (uint32) |

<a name="Player+maxHealth"></a>

### player.maxHealth
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| maxHealth | <code>number</code> | 最大体力 (uint32) |

<a name="Player+shieldHealth"></a>

### player.shieldHealth
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| shieldHealth | <code>number</code> | 現在のシールド体力 (uint32) |

<a name="Player+shieldMaxHealth"></a>

### player.shieldMaxHealth
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| shieldMaxHealth | <code>number</code> | 最大シールド体力 (uint32) |

<a name="Player+teamName"></a>

### player.teamName
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| teamName | <code>string</code> | チーム名 |

<a name="Player+squadIndex"></a>

### player.squadIndex
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| squadIndex | <code>number</code> | 分隊番号 (uint32) |

<a name="Player+character"></a>

### player.character
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| character | <code>string</code> | キャラクター名 |

<a name="Player+skin"></a>

### player.skin
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| skin | <code>string</code> | キャラクタースキン名 |

<a name="Player+inventory"></a>

### player.inventory
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| inventory | [<code>Inventory</code>](#Inventory) | プレーヤーのインベントリー |

<a name="Player+kills"></a>

### player.kills
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| kills | <code>number</code> | キル数 |

<a name="Player+killAssists"></a>

### player.killAssists
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| killAssists | <code>number</code> | キルアシスト数 |

<a name="Player+downs"></a>

### player.downs
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| downs | <code>number</code> | ダウンさせた数 |

<a name="Player+damageDealt"></a>

### player.damageDealt
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| damageDealt | <code>object</code> | 敵に与えたダメージ詳細 |

<a name="Player+damageReceived"></a>

### player.damageReceived
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| damageReceived | <code>object</code> | くらったダメージ詳細 |

<a name="Player+isAlive"></a>

### player.isAlive
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| isAlive | <code>Boolean</code> | 生存状態 |

<a name="Player+isOnline"></a>

### player.isOnline
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| isOnline | <code>Boolean</code> | 接続状態 |

<a name="Player+level"></a>

### player.level
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>number</code> | プレイヤーのレベル |

<a name="Player+weaponList"></a>

### player.weaponList
**Kind**: instance property of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| weaponList | <code>object</code> | 所持している武器のリスト |

<a name="Player+updatePositionAndAngles"></a>

### player.updatePositionAndAngles(x, y, z, newAngles, mapOffset)
プレイヤーの位置と角度を更新する関数

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | 新しいx座標 |
| y | <code>number</code> | 新しいy座標 |
| z | <code>number</code> | 新しいz座標 |
| newAngles | <code>number</code> | 新しい角度 |
| mapOffset | <code>Object</code> |  |

<a name="Player+updateHealthAndShields"></a>

### player.updateHealthAndShields(newCurrentHealth, newMaxHealth, newShieldHealth, newShieldMaxHealth)
プレイヤーの体力とシールドを更新する関数

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| newCurrentHealth | <code>number</code> | 新しい現在の体力 |
| newMaxHealth | <code>number</code> | 新しい最大体力 |
| newShieldHealth | <code>number</code> | 新しいシールドの体力 |
| newShieldMaxHealth | <code>number</code> | 新しい最大シールド体力 |

<a name="Player+updateCharacter"></a>

### player.updateCharacter(newCharacter, newSkin)
プレイヤーのチーム情報、キャラクター、スキンを更新する関数

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| newCharacter | <code>string</code> | 新しいキャラクター |
| newSkin | <code>string</code> | 新しいスキン |

<a name="Player+setAliveStatus"></a>

### player.setAliveStatus(status)
プレイヤーの生存状態を変更するメソッド

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>boolean</code> | プレイヤーが生きている場合はtrue、死んでいる場合はfalse |

<a name="Player+setOnlineStatus"></a>

### player.setOnlineStatus(status)
プレイヤーの生存状態を変更するメソッド

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>boolean</code> | プレイヤーが接続している場合はtrue、切断している場合はfalse |

<a name="Player+setTeamName"></a>

### player.setTeamName(teamName)
チーム名を変更するメソッド

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| teamName | <code>String</code> | チーム名を入力してチーム名を変更 |

<a name="Player+setSquadIndex"></a>

### player.setSquadIndex(index)
チーム内のインデックスを変更するメソッド

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | 変更する値を入力して、その値に変更する |

<a name="Player+getAliveStatus"></a>

### player.getAliveStatus() ⇒ <code>boolean</code>
プレイヤーの生存状態を返すメソッド

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: <code>boolean</code> - status プレイヤーが生きている場合はtrue、死んでいる場合はfalse  
<a name="Player+getOnlineStatus"></a>

### player.getOnlineStatus() ⇒ <code>boolean</code>
プレイヤーの接続状態を返すメソッド

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: <code>boolean</code> - status プレイヤーが接続している場合はtrue、切断している場合はfalse  
<a name="Player+setKill"></a>

### player.setKill(amount)
キル数を設定するメソッド

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>number</code> | 設定するキル数 |

<a name="Player+setKillAssist"></a>

### player.setKillAssist(amount)
キルアシスト数を設定するメソッド

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>number</code> | 設定するキルアシスト数 |

<a name="Player+setDown"></a>

### player.setDown(amount)
ダウンさせた数を設定するメソッド

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>number</code> | 設定するダウン数 |

<a name="Player+addDamageDealt"></a>

### player.addDamageDealt(perpetrator, amount)
敵に与えたダメージを増加させるメソッド

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| perpetrator | <code>string</code> | 攻撃に使用したもの |
| amount | <code>number</code> | 増加させるダメージ量 |

<a name="Player+addDamageReceived"></a>

### player.addDamageReceived(perpetrator, amount, [penetrator])
受けたダメージを増加させるメソッド

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| perpetrator | <code>string</code> |  | 攻撃に使用されたもの |
| amount | <code>number</code> |  | 増加させるダメージ量 |
| [penetrator] | <code>boolean</code> | <code>false</code> | シールド貫通武器かどうか |

<a name="Player.Player"></a>

### Player.Player
**Kind**: static class of [<code>Player</code>](#Player)  
<a name="new_Player.Player_new"></a>

#### new Player(name, teamId, nucleusHash, hardwareName)
Creates an instance of Player.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | プレイヤー名 |
| teamId | <code>number</code> | チームID (uint32) |
| nucleusHash | <code>string</code> | プレイヤーの識別用ハッシュ |
| hardwareName | <code>string</code> | 使用ハードウェア名 |

<a name="Datacenter"></a>

## Datacenter
**Kind**: global class  

* [Datacenter](#Datacenter)
    * [new Datacenter()](#new_Datacenter_new)
    * _instance_
        * [.timestamp](#Datacenter+timestamp)
        * [.category](#Datacenter+category)
        * [.name](#Datacenter+name)
        * [.update(timestamp, category, name)](#Datacenter+update) ⇒ [<code>Datacenter</code>](#Datacenter)
        * [.getStatus()](#Datacenter+getStatus) ⇒ <code>Object</code>
    * _static_
        * [.Datacenter](#Datacenter.Datacenter)
            * [new Datacenter()](#new_Datacenter.Datacenter_new)

<a name="new_Datacenter_new"></a>

### new Datacenter()
データセンターを表すクラス

<a name="Datacenter+timestamp"></a>

### datacenter.timestamp
**Kind**: instance property of [<code>Datacenter</code>](#Datacenter)  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>number</code> | - タイムスタンプ (uint64) |

<a name="Datacenter+category"></a>

### datacenter.category
**Kind**: instance property of [<code>Datacenter</code>](#Datacenter)  

| Param | Type | Description |
| --- | --- | --- |
| category | <code>string</code> | カテゴリー名 |

<a name="Datacenter+name"></a>

### datacenter.name
**Kind**: instance property of [<code>Datacenter</code>](#Datacenter)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | データセンター名 |

<a name="Datacenter+update"></a>

### datacenter.update(timestamp, category, name) ⇒ [<code>Datacenter</code>](#Datacenter)
**Kind**: instance method of [<code>Datacenter</code>](#Datacenter)  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>\*</code> | - タイムスタンプ (uint64) |
| category | <code>\*</code> | カテゴリー名 |
| name | <code>\*</code> | データセンター名 |

<a name="Datacenter+getStatus"></a>

### datacenter.getStatus() ⇒ <code>Object</code>
データセンターのステータスをオブジェクトとして返す

**Kind**: instance method of [<code>Datacenter</code>](#Datacenter)  
**Returns**: <code>Object</code> - データセンターのステータス情報  
<a name="Datacenter.Datacenter"></a>

### Datacenter.Datacenter
**Kind**: static class of [<code>Datacenter</code>](#Datacenter)  
<a name="new_Datacenter.Datacenter_new"></a>

#### new Datacenter()
Creates an instance of Datacenter.

<a name="Version"></a>

## Version
**Kind**: global class  

* [Version](#Version)
    * [new Version()](#new_Version_new)
    * _instance_
        * [.getStatus()](#Version+getStatus) ⇒ <code>Object</code>
        * [.printDetails()](#Version+printDetails)
    * _static_
        * [.Version](#Version.Version)
            * [new Version(major_num, minor_num, build_stamp, revision)](#new_Version.Version_new)

<a name="new_Version_new"></a>

### new Version()
バージョン情報を表すクラス

<a name="Version+getStatus"></a>

### version.getStatus() ⇒ <code>Object</code>
バージョンのステータスをオブジェクトとして返す

**Kind**: instance method of [<code>Version</code>](#Version)  
**Returns**: <code>Object</code> - バージョンのステータス情報  
<a name="Version+printDetails"></a>

### version.printDetails()
バージョンの詳細を表示するメソッド

**Kind**: instance method of [<code>Version</code>](#Version)  
<a name="Version.Version"></a>

### Version.Version
**Kind**: static class of [<code>Version</code>](#Version)  
<a name="new_Version.Version_new"></a>

#### new Version(major_num, minor_num, build_stamp, revision)

| Param | Type | Description |
| --- | --- | --- |
| major_num | <code>number</code> | メジャーバージョン番号 (uint32) |
| minor_num | <code>number</code> | マイナーバージョン番号 (uint32) |
| build_stamp | <code>number</code> | ビルドスタンプ (uint32) |
| revision | <code>string</code> | リビジョン情報 |

<a name="CustomMatch"></a>

## CustomMatch
**Kind**: global class  

* [CustomMatch](#CustomMatch)
    * [new CustomMatch()](#new_CustomMatch_new)
    * _instance_
        * [.datacenter](#CustomMatch+datacenter)
        * [.refreshEventLists()](#CustomMatch+refreshEventLists)
        * [.addRingElement(ring)](#CustomMatch+addRingElement)
        * [.addEventElement(event)](#CustomMatch+addEventElement)
        * [.addPlayer(player)](#CustomMatch+addPlayer)
        * [.setState(state)](#CustomMatch+setState)
        * [.setStartTimeStamp(timestamp)](#CustomMatch+setStartTimeStamp)
        * [.setEndTimeStamp(timestamp)](#CustomMatch+setEndTimeStamp)
        * [.setMatchSetup(mapName, playlistName, playlistDesc, aimassiston, anonymousMode, serverId)](#CustomMatch+setMatchSetup)
        * [.removePlayer(nucleusHash)](#CustomMatch+removePlayer)
        * [.getPlayerCount()](#CustomMatch+getPlayerCount) ⇒ <code>number</code>
        * [.getPlayer(nucleusHash)](#CustomMatch+getPlayer) ⇒ [<code>Player</code>](#Player) \| <code>null</code>
        * [.getMatchStatus()](#CustomMatch+getMatchStatus) ⇒ <code>Object</code>
    * _static_
        * [.CustomMatch](#CustomMatch.CustomMatch)
            * [new CustomMatch(matchName)](#new_CustomMatch.CustomMatch_new)

<a name="new_CustomMatch_new"></a>

### new CustomMatch()
カスタムマッチを管理するクラス

<a name="CustomMatch+datacenter"></a>

### customMatch.datacenter
**Kind**: instance property of [<code>CustomMatch</code>](#CustomMatch)  
<a name="CustomMatch+refreshEventLists"></a>

### customMatch.refreshEventLists()
**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  
<a name="CustomMatch+addRingElement"></a>

### customMatch.addRingElement(ring)
ringsの末尾に新しい要素を追加します。ringsが3を超える場合、先頭の要素を削除します。

**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  

| Param | Type | Description |
| --- | --- | --- |
| ring | [<code>Ring</code>](#Ring) | 追加する要素 |

<a name="CustomMatch+addEventElement"></a>

### customMatch.addEventElement(event)
eventListsの末尾に新しい要素を追加します。

**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  

| Param | Type | Description |
| --- | --- | --- |
| event | [<code>Event</code>](#Event) | 追加する要素 |

<a name="CustomMatch+addPlayer"></a>

### customMatch.addPlayer(player)
プレイヤーを追加するメソッド

**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  

| Param | Type | Description |
| --- | --- | --- |
| player | [<code>Player</code>](#Player) | 追加するプレイヤー |

<a name="CustomMatch+setState"></a>

### customMatch.setState(state)
ゲームステータスを設定するメソッド

**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>String</code> | ゲームステータス |

<a name="CustomMatch+setStartTimeStamp"></a>

### customMatch.setStartTimeStamp(timestamp)
マッチ開始時刻を設定するメソッド

**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>String</code> | ゲームステータス |

<a name="CustomMatch+setEndTimeStamp"></a>

### customMatch.setEndTimeStamp(timestamp)
マッチ終了時刻を設定するメソッド

**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>String</code> | ゲームステータス |

<a name="CustomMatch+setMatchSetup"></a>

### customMatch.setMatchSetup(mapName, playlistName, playlistDesc, aimassiston, anonymousMode, serverId)
マッチセットアップ情報を設定するメソッド

**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  

| Param | Type | Description |
| --- | --- | --- |
| mapName | <code>String</code> | マップ名 |
| playlistName | <code>String</code> |  |
| playlistDesc | <code>String</code> |  |
| aimassiston | <code>Boolean</code> |  |
| anonymousMode | <code>Boolean</code> |  |
| serverId | <code>String</code> |  |

<a name="CustomMatch+removePlayer"></a>

### customMatch.removePlayer(nucleusHash)
プレイヤーを削除するメソッド

**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  

| Param | Type | Description |
| --- | --- | --- |
| nucleusHash | <code>string</code> | プレイヤーのnucleusHash |

<a name="CustomMatch+getPlayerCount"></a>

### customMatch.getPlayerCount() ⇒ <code>number</code>
現在のプレイヤー数を返す

**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  
**Returns**: <code>number</code> - 現在のプレイヤー数  
<a name="CustomMatch+getPlayer"></a>

### customMatch.getPlayer(nucleusHash) ⇒ [<code>Player</code>](#Player) \| <code>null</code>
特定のプレイヤーを取得するメソッド

**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  
**Returns**: [<code>Player</code>](#Player) \| <code>null</code> - 見つかったプレイヤーのステータス、見つからなければnull  

| Param | Type | Description |
| --- | --- | --- |
| nucleusHash | <code>string</code> | プレイヤーのnucleusHash |

<a name="CustomMatch+getMatchStatus"></a>

### customMatch.getMatchStatus() ⇒ <code>Object</code>
マッチのステータスを取得するメソッド

**Kind**: instance method of [<code>CustomMatch</code>](#CustomMatch)  
**Returns**: <code>Object</code> - マッチのステータスとプレイヤーリスト  
<a name="CustomMatch.CustomMatch"></a>

### CustomMatch.CustomMatch
**Kind**: static class of [<code>CustomMatch</code>](#CustomMatch)  
<a name="new_CustomMatch.CustomMatch_new"></a>

#### new CustomMatch(matchName)

| Param | Type | Description |
| --- | --- | --- |
| matchName | <code>string</code> | マッチ名 |

<a name="Event"></a>

## Event
**Kind**: global class  

* [Event](#Event)
    * [new Event(timestamp, category, nucleusHash, data)](#new_Event_new)
    * [.Event](#Event.Event)
        * [new Event(_timestamp, _category, _nucleusHash, _data)](#new_Event.Event_new)

<a name="new_Event_new"></a>

### new Event(timestamp, category, nucleusHash, data)
Eventに関するクラス


| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>number</code> | イベント発生時のタイムスタンプ |
| category | <code>string</code> | イベントの種類 |
| nucleusHash | <code>string</code> | プレイヤーのIDかチームのID |
| data | <code>object</code> | 受信したメッセージやクラスオブジェクトなどを入れる |

<a name="Event.Event"></a>

### Event.Event
**Kind**: static class of [<code>Event</code>](#Event)  
<a name="new_Event.Event_new"></a>

#### new Event(_timestamp, _category, _nucleusHash, _data)
Eventクラスの初期化


| Param | Type | Description |
| --- | --- | --- |
| _timestamp | <code>number</code> | イベント発生時のタイムスタンプ |
| _category | <code>string</code> | イベントの種類 |
| _nucleusHash | <code>string</code> | プレイヤーID or チームID |
| _data | <code>object</code> | 受信したメッセージやクラスオブジェクトなどを入れる |

<a name="Ring"></a>

## Ring
**Kind**: global class  

* [Ring](#Ring)
    * [new Ring(timestamp, endtimestamp, category, stage, center, currentradius, shrinkduration, endradius)](#new_Ring_new)
    * _instance_
        * [.updateRing(_timestamp, _category, _currentRadius, _shrinkduration, _endradius, _mapOffset)](#Ring+updateRing)
    * _static_
        * [.Ring](#Ring.Ring)
            * [new Ring(_timestamp, _category, _stage, _center, _currentradius, _shrinkduration, _mapOffset)](#new_Ring.Ring_new)

<a name="new_Ring_new"></a>

### new Ring(timestamp, endtimestamp, category, stage, center, currentradius, shrinkduration, endradius)
Ringに関するクラス


| Param | Type |
| --- | --- |
| timestamp | <code>number</code> | 
| endtimestamp | <code>number</code> | 
| category | <code>String</code> | 
| stage | <code>number</code> | 
| center | [<code>Vector3</code>](#Vector3) | 
| currentradius | <code>number</code> | 
| shrinkduration | <code>number</code> | 
| endradius | <code>number</code> | 

<a name="Ring+updateRing"></a>

### ring.updateRing(_timestamp, _category, _currentRadius, _shrinkduration, _endradius, _mapOffset)
リングオブジェクトを更新する関数

**Kind**: instance method of [<code>Ring</code>](#Ring)  

| Param | Type |
| --- | --- |
| _timestamp | <code>number</code> | 
| _category | <code>string</code> | 
| _currentRadius | <code>number</code> | 
| _shrinkduration | <code>number</code> | 
| _endradius | <code>number</code> | 
| _mapOffset | <code>object</code> | 

<a name="Ring.Ring"></a>

### Ring.Ring
**Kind**: static class of [<code>Ring</code>](#Ring)  
<a name="new_Ring.Ring_new"></a>

#### new Ring(_timestamp, _category, _stage, _center, _currentradius, _shrinkduration, _mapOffset)
リングの初期化を行う


| Param | Type |
| --- | --- |
| _timestamp | <code>number</code> | 
| _category | <code>String</code> | 
| _stage | <code>number</code> | 
| _center | <code>Object</code> | 
| _currentradius | <code>number</code> | 
| _shrinkduration | <code>number</code> | 
| _mapOffset | <code>Object</code> | 

<a name="match"></a>

## match : [<code>CustomMatch</code>](#CustomMatch)
メッセージを分析し、要素を抽出する。

**Kind**: global variable  

| Param | Type |
| --- | --- |
| category | <code>String</code> | 
| msg | <code>Object</code> | 

<a name="intervalId"></a>

## intervalId : <code>\*</code>
**Kind**: global constant  
<a name="startApexLegends"></a>

## startApexLegends() ⇒ <code>\*</code>
**Kind**: global function  
<a name="updatePlayer"></a>

## updatePlayer(json, player, characterSelected, mapName)
Playerクラスのオブジェクトを更新する

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| json | <code>Object</code> |  | 
| player | [<code>Player</code>](#Player) |  | 
| characterSelected | <code>Boolean</code> | <code>false</code> | 
| mapName | <code>String</code> |  | 

<a name="processUpdatePlayer"></a>

## processUpdatePlayer(msg, match, [characterSelected]) ⇒ <code>\*</code>
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| msg | <code>\*</code> |  | 
| match | <code>\*</code> |  | 
| [characterSelected] | <code>boolean</code> | <code>false</code> | 

<a name="checkItemLevel"></a>

## checkItemLevel(name)
アイテム名からレベルをチェックする

**Kind**: global function  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="checkShieldPenetrator"></a>

## checkShieldPenetrator(perpetrator) ⇒ <code>boolean</code>
シールド貫通武器かどうかのチェック

**Kind**: global function  

| Param | Type |
| --- | --- |
| perpetrator | <code>string</code> | 

<a name="getPlayerStatus"></a>

## getPlayerStatus(match)
**Kind**: global function  

| Param | Type |
| --- | --- |
| match | <code>\*</code> | 

<a name="update"></a>

## update()
**Kind**: global function  
<a name="handleMessage"></a>

## handleMessage(message, messageType, ws)
メッセージを処理する

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>Object</code> | デコードされたメッセージオブジェクト |
| messageType | <code>string</code> | メッセージの種類 |
| ws | <code>WebSocket</code> | 送信元のWebSocketインスタンス |

<a name="handleApiRequest"></a>

## handleApiRequest(req, res)
API 用のエンドポイントを処理する関数

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Request</code> | HTTP リクエストオブジェクト |
| res | <code>Response</code> | HTTP レスポンスオブジェクト |

<a name="handleNotify"></a>

## handleNotify(req, res)
ボタンが押された時に色をクライアントに送信するエンドポイント

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Request</code> | クライアントのリクエストオブジェクト |
| res | <code>Response</code> | クライアントに対するレスポンスオブジェクト |

<a name="stopServer"></a>

## stopServer(req, res)
サーバーを停止するエンドポイント

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Request</code> | クライアントのリクエストオブジェクト |
| res | <code>Response</code> | クライアントに対するレスポンスオブジェクト |

<a name="startGame"></a>

## startGame(req, res)
ゲームを起動するエンドポイント

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Request</code> | クライアントのリクエストオブジェクト |
| res | <code>Response</code> | クライアントに対するレスポンスオブジェクト |

<a name="sseEndpoint"></a>

## sseEndpoint(req, res)
SSE クライアント接続用のエンドポイント

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Request</code> | クライアントのリクエストオブジェクト |
| res | <code>Response</code> | クライアントに対するレスポンスオブジェクト |

<a name="sendClients"></a>

## sendClients(message)
クライアントにデータを送信する関数

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | 送信するメッセージ内容 |

<a name="closeAllClients"></a>

## closeAllClients()
全てのクライアント接続を閉じる関数

**Kind**: global function  
<a name="configureServer"></a>

## configureServer()
サーバーのミドルウェアとルート設定を行う関数

**Kind**: global function  
<a name="startServer"></a>

## startServer() ⇒ <code>Object</code>
HTTP サーバーを起動する関数

**Kind**: global function  
**Returns**: <code>Object</code> - - HTTP サーバーインスタンス  
<a name="stopServer"></a>

## stopServer() ⇒ <code>Promise</code>
HTTP サーバーを停止する関数

**Kind**: global function  
**Returns**: <code>Promise</code> - - HTTP サーバーの停止を表す Promise  
<a name="serialized_request"></a>

## serialized\_request(request)
シリアライズされたリクエストをWebSocket経由でクライアントに送信

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>Request</code> | リクエストオブジェクト |

<a name="change_camera"></a>

## change\_camera(type, value)
カメラを指定されたターゲットに変更

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | 'poi'または'name'を指定 |
| value | <code>string</code> | PlayerOfInterestのタイプまたはプレイヤー名 |

<a name="pause_toggle"></a>

## pause\_toggle()
ポーズの切り替え

**Kind**: global function  
<a name="create_lobby"></a>

## create\_lobby()
カスタムマッチロビーを作成

**Kind**: global function  
<a name="join_lobby"></a>

## join\_lobby(token)
カスタムマッチロビーに参加

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | ロビー参加のためのトークン |

<a name="leave_lobby"></a>

## leave\_lobby()
カスタムマッチロビーから退出

**Kind**: global function  
<a name="set_ready"></a>

## set\_ready(ready)
試合の準備完了状態を設定

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ready | <code>boolean</code> | trueで準備完了、falseで準備未完了を設定 |

<a name="set_matchmaking"></a>

## set\_matchmaking(matchmaking)
マッチメイキングの有効/無効を設定

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| matchmaking | <code>boolean</code> | trueでマッチメイキング有効、falseで無効 |

<a name="set_team"></a>

## set\_team(teamId)
チームを設定

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| teamId | <code>number</code> | 設定するチームID |

<a name="kick_player"></a>

## kick\_player(playerId)
プレイヤーをキック

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| playerId | <code>number</code> | キックするプレイヤーのID |

<a name="set_settings"></a>

## set\_settings(matchName, adminChat, teamRename, selfAssign, aimAssist, anonMode)
試合設定を適用

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| matchName | <code>String</code> | 現在のマッチプレイリスト名を指定 |
| adminChat | <code>boolean</code> | チャットを管理者のみに制限 |
| teamRename | <code>boolean</code> | チーム名の変更をプレイヤーに許可する |
| selfAssign | <code>boolean</code> | チーム変更をプレイヤーに許可する |
| aimAssist | <code>boolean</code> | すべてのプレイヤーはPCエイムアシスト値を使用する |
| anonMode | <code>boolean</code> | 他のプレイヤーに対し名前を非表示 |

<a name="send_chat"></a>

## send\_chat(message)
チャットメッセージを送信

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | 送信するメッセージ |

<a name="get_lobby_players"></a>

## get\_lobby\_players()
ロビープレイヤー情報を取得

**Kind**: global function  
<a name="set_team_name"></a>

## set\_team\_name(teamId, name)
チーム名を設定

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| teamId | <code>number</code> | チームID |
| name | <code>string</code> | 設定するチーム名 |

<a name="get_match_settings"></a>

## get\_match\_settings()
試合設定を取得

**Kind**: global function  
<a name="set_spawn_point"></a>

## set\_spawn\_point(teamId, landmark)
チーム名を設定

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| teamId | <code>number</code> | チームID |
| landmark | <code>number</code> | 設定するランドマークの番号 |

<a name="apexLiveApiCall"></a>

## apexLiveApiCall(req, res)
API エンドポイント用の処理関数

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Request</code> | クライアントのリクエストオブジェクト |
| res | <code>Response</code> | クライアントに対するレスポンスオブジェクト |

<a name="sendMapInitialization"></a>

## sendMapInitialization(matchName, match)
マップ初期化のメッセージを送信する関数

**Kind**: global function  

| Param | Type |
| --- | --- |
| matchName | <code>String</code> | 
| match | [<code>CustomMatch</code>](#CustomMatch) | 

<a name="sendPlayerPositionUpdate"></a>

## sendPlayerPositionUpdate(match)
プレイヤーの座標変更のメッセージを送信する関数

**Kind**: global function  

| Param | Type |
| --- | --- |
| match | [<code>CustomMatch</code>](#CustomMatch) | 

<a name="sendRingUpdate"></a>

## sendRingUpdate(match)
リングに関する情報のリストを送信

**Kind**: global function  

| Param | Type |
| --- | --- |
| match | [<code>CustomMatch</code>](#CustomMatch) | 

<a name="send"></a>

## send(match)
メッセージを送信する関数

**Kind**: global function  

| Param | Type |
| --- | --- |
| match | [<code>CustomMatch</code>](#CustomMatch) | 

<a name="logMessage"></a>

## logMessage(message, [type])
指定されたメッセージをコンソールに出力します。

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> |  | 出力するメッセージ。 |
| [type] | <code>string</code> | <code>&quot;\&quot;normal\&quot;&quot;</code> | メッセージのタイプ ("normal", "error", "warning"など)。 |

<a name="ensureFolderExists"></a>

## ensureFolderExists(folder)
指定されたフォルダが存在しない場合は作成します

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| folder | <code>string</code> | 作成したいフォルダのName |

<a name="saveData"></a>

## saveData(_class, filename)
JSONファイルにデータを蓄積し、保存します。既存のデータがある場合は、それに新しいデータを追加してから保存されます。

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| _class | <code>Object</code> | 新しく保存するデータオブジェクト |
| filename | <code>string</code> | ファイル名 |
| newData.class | <code>string</code> | クラス名 |

<a name="registerOnServersStarted"></a>

## registerOnServersStarted(callback)
サーバーが全て立ち上がった時に呼ばれるコールバックを登録する関数

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | サーバーが立ち上がった際に実行したい関数 |

<a name="getServerList"></a>

## getServerList() ⇒ <code>Object</code>
サーバーリストを取得する関数

**Kind**: global function  
**Returns**: <code>Object</code> - - 現在のサーバーリスト  
<a name="startAllServers"></a>

## startAllServers(httpServer, websocketServer) ⇒ <code>Object</code>
サーバー（HTTP, WebSocket）の起動を管理する関数

**Kind**: global function  
**Returns**: <code>Object</code> - - 起動したサーバーのインスタンス  

| Param | Type | Description |
| --- | --- | --- |
| httpServer | <code>Object</code> | HTTPサーバーのインスタンス |
| websocketServer | <code>Object</code> | WebSocketサーバーのインスタンス |

<a name="saveLog"></a>

## saveLog(message, [logFileName])
指定したメッセージをログファイルに保存する関数

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> |  | 保存するログメッセージ |
| [logFileName] | <code>string</code> | <code>&quot;&#x27;app.log&#x27;&quot;</code> | 保存先のログファイル名（省略可能、デフォルトは 'app.log'） |

<a name="readConfig"></a>

## readConfig([configPath]) ⇒ <code>Object</code> \| <code>null</code>
config.json を読み込む関数

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>null</code> - - 読み込んだ設定内容（エラー時は null を返す）  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [configPath] | <code>string</code> | <code>&quot;&#x27;../config/config.json&#x27;&quot;</code> | 設定ファイルのパス（デフォルトパスを設定） |

<a name="runCommand"></a>

## runCommand(command) ⇒ <code>Promise.&lt;string&gt;</code>
任意のコマンドを実行する関数

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - コマンドの出力を返すPromise  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>string</code> | 実行したいコマンド |

<a name="runPowerShellCommand"></a>

## runPowerShellCommand(command) ⇒ <code>Promise.&lt;string&gt;</code>
PowerShell コマンドを実行する関数

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - コマンドの出力を返すPromise  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>string</code> | 実行したいPowerShellコマンド |

<a name="runRegularCommand"></a>

## runRegularCommand(command) ⇒ <code>Promise.&lt;string&gt;</code>
通常のシェルコマンドを実行する関数

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - コマンドの出力を返すPromise  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>string</code> | 実行したいコマンド |

<a name="shutdownServers"></a>

## shutdownServers()
全サーバーと SSE クライアントの接続をクローズしてアプリケーションを終了する関数

**Kind**: global function  
