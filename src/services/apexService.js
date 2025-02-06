const apexCommon = require('./apexCommon');
const app = require('../app');

/**
 * API エンドポイント用の処理関数
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
async function apexLiveApiCall(req, res) {
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
      console.log("[PAUSE_TOGGLE] PRETIMER: " + req.body.preTimer);
      // ポーズの開始/終了
      apexCommon.pause_toggle(req.body.preTimer);
      res.json({ operation: 'pause_toggle', preTimer: req.body.preTimer });
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
      console.log("[SET_MATCHMAKING] MATCHMAKING: " + req.body.matchmaking);
      // マッチメイキングを設定
      apexCommon.set_matchmaking(req.body.matchmaking);
      res.json({ operation: 'set_matchmaking', matchmaking: req.body.matchmaking });
      break;

    case 'set_team':
      console.log("[SET_TEAM] TEAM_ID: " + req.body.teamId + "  TARGET_HARDWARE_NAME: " + req.body.targetHardwareName + "  TARGET_NUCLEUS_HASH: " + req.body.targetNucleushash);
      // チームの設定
      apexCommon.set_team(req.body.teamId, req.body.targetHardwareName, req.body.targetNucleushash);
      res.json({ success: true });
      break;

    case 'kick_player':
      console.log(`[KICK_PLAYER] TARGET_HARDWARE_NAME: ${req.body.targetHardwareName}  TARGET_NUCLEUS_HASH: ${req.body.targetNucleushash}`);
      // プレイヤーをキック
      apexCommon.kick_player(req.body.targetHardwareName, req.body.targetNucleushash);
      res.json({ success: true });
      break;

    case 'set_settings':
      console.log(`[SET_SETTINGS] MATCH_NAME: ${req.body.matchName}  ADMIN_CHAT: ${req.body.adminChat}  TEAM_RENAME: ${req.body.teamRename}  SELF_ASSIGN: ${req.body.selfAssign}  AIM_ASSIST: ${req.body.aimAssist}  ANON_MODE: ${req.body.anonMode}`);
      // 試合設定を適用
      apexCommon.set_settings(req.body.matchName, req.body.adminChat, req.body.teamRename, req.body.selfAssign, req.body.aimAssist, req.body.anonMode);
      res.json({ success: true });
      break;

    case 'send_chat':
      console.log("[SEND_CHAT] MESSAGE: " + req.body.message);
      // チャットメッセージを送信
      apexCommon.send_chat(req.body.message);
      res.json({ success: true });
      break;

    case 'get_lobby_players': {
      // console.log("[GET_LOBBY_PLAYERS] Fetching players in lobby");
      // ロビーにいるプレイヤーを取得
      apexCommon.get_lobby_players();
      const result = app.readLobbyMessage("CustomMatch_LobbyPlayers");
      if (result !== null) {
        res.status(200).send({ success: true, result: result });
      } else {
        res.status(504).send({ success: false, result: null });
      }
      break;
    }
    case 'set_team_name':
      console.log("[SET_TEAM_NAME] TEAM_ID: " + req.body.teamId + " NAME: " + req.body.teamName);
      // チーム名を設定
      apexCommon.set_team_name(req.body.teamId, req.body.teamName);
      res.status(200).send({ success: true });
      break;

    case 'get_match_settings': {
      // console.log("[GET_MATCH_SETTINGS] Fetching match settings");
      // 試合設定を取得
      apexCommon.get_match_settings();
      const result = app.readLobbyMessage("CustomMatch_SetSettings");
      if (result !== null) {
        res.status(200).send({ success: true, result: result });
      } else {
        res.status(504).send({ success: false, result: null });
      }
      break;
    }
    case 'set_spawn_point':
      console.log(`[SET_SPAWN_POINT] TEAMID: ${req.body.teamId}  LANDMARK: ${req.body.landmark}`);
      // チームごとにスポーンポイントを設定
      apexCommon.set_spawn_point(req.body.teamId, req.body.landmark);
      res.json({ success: true });
      break;

    case 'set_end_ring_exclusion':
      console.log(`[SET_END_RING_EXCLUSION] EXCLUSION: ${req.body.exclusion}`);
      // エンドリングエクスクルージョンを設定
      apexCommon.set_end_ring_exclusion(req.body.exclusion);
      res.json({ success: true });
      break;

    default:
      // デフォルトのレスポンス
      res.json({ message: 'APIエンドポイントにアクセスしました。', query: req.query });
      break;
  }
}

module.exports = { apexLiveApiCall };
