const apexCommon = require('./apexCommon');

/**
 * API エンドポイント用の処理関数
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function apexLiveApiCall(req, res) {
  // リクエストのクエリパラメーターを取得（例：/API?param=value）
  const operation = req.params.operation;

  // リクエストされたパラメーターに応じた処理を実行
  switch (operation) {
    case 'status':
      // クライアントに現在のサーバーステータスを返す
      res.json({ status: 'Server is running', clientsCount: clients.length });
      break;

    case 'clients':
      // 現在接続中のクライアント数を返す
      res.json({ clientsCount: clients.length });
      break;

    case 'change_camera':
      console.log("[CHANGE_CAMERA] TYPE: " + req.body.targetType + "  VALUE: " + req.body.targetValue);
      // カメラを変更
      apexCommon.change_camera(req.body.targetType, req.body.targetValue);
      res.json({ operation: 'change_camera', targetType: req.body.targetType, targetValue: req.body.targetValue });
      break;

    case 'pause_toggle':
      console.log("[PAUSE_TOGGLE] Pause game");
      // ポーズの開始/終了
      apexCommon.toggle_pause();
      res.json({ operation: 'pause_toggle', message: "Pause toggled" });
      break;

    case 'create_lobby':
      console.log("[CREATE_LOBBY] Make match lobby");
      // カスタムマッチのロビーを作成
      apexCommon.create_lobby();
      res.json({ operation: 'create_lobby', message: "Lobby created" });
      break;

    case 'join_lobby':
      console.log("[JOIN_LOBBY] TOKEN: " + req.body.token);
      // カスタムマッチのロビーに参加
      apexCommon.join_lobby(req.body.token);
      res.json({ operation: 'join_lobby', token: req.body.token });
      break;

    case 'leave_lobby':
      console.log("[LEAVE_LOBBY] Leave lobby");
      // ロビーを退出
      apexCommon.leave_lobby();
      res.json({ operation: 'leave_lobby', message: "Lobby left" });
      break;

    case 'set_ready':
      console.log("[SET_READY] READY: " + req.body.ready);
      // 準備状態を変更
      apexCommon.set_ready(req.body.ready);
      res.json({ operation: 'set_ready', ready: req.body.ready });
      break;

    case 'set_matchmaking':
      console.log("[SET_MATCHMAKING] ENABLED: " + req.body.enabled);
      // マッチメイキングを設定
      apexCommon.set_matchmaking(req.body.enabled);
      res.json({ operation: 'set_matchmaking', enabled: req.body.enabled });
      break;

    case 'set_team':
      console.log("[SET_TEAM] TEAM_ID: " + req.body.teamId);
      // チームの設定
      apexCommon.set_team(req.body.teamId);
      res.json({ operation: 'set_team', teamId: req.body.teamId });
      break;

    case 'kick_player':
      console.log("[KICK_PLAYER] PLAYER_ID: " + req.body.playerId);
      // プレイヤーをキック
      apexCommon.kick_player(req.body.playerId);
      res.json({ operation: 'kick_player', playerId: req.body.playerId });
      break;

    case 'set_settings':
      console.log("[SET_SETTINGS] SETTINGS: " + JSON.stringify(req.body.settings));
      // 試合設定を適用
      apexCommon.set_settings(req.body.settings);
      res.json({ operation: 'set_settings', settings: req.body.settings });
      break;

    case 'send_chat':
      console.log("[SEND_CHAT] MESSAGE: " + req.body.message);
      // チャットメッセージを送信
      apexCommon.send_chat(req.body.message);
      res.json({ operation: 'send_chat', message: req.body.message });
      break;

    case 'get_lobby_players':
      console.log("[GET_LOBBY_PLAYERS] Fetching players in lobby");
      // ロビープレイヤー情報の取得
      apexCommon.get_lobby_players();
      res.json({ operation: 'get_lobby_players', message: "Lobby players fetched" });
      break;

    case 'set_team_name':
      console.log("[SET_TEAM_NAME] TEAM_ID: " + req.body.teamId + " NAME: " + req.body.name);
      // チーム名を設定
      apexCommon.set_team_name(req.body.teamId, req.body.name);
      res.json({ operation: 'set_team_name', teamId: req.body.teamId, name: req.body.name });
      break;

    case 'get_match_settings':
      console.log("[GET_MATCH_SETTINGS] Fetching match settings");
      // 試合設定を取得
      apexCommon.get_match_settings();
      res.json({ operation: 'get_match_settings', message: "Match settings fetched" });
      break;

    default:
      // デフォルトのレスポンス
      res.json({ message: 'APIエンドポイントにアクセスしました。', query: req.query });
      break;
  }
}

module.exports = { apexLiveApiCall };
