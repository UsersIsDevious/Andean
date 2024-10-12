const apexCommon = require('./apexCommon')

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
  
      case 'create_lobby':
        console.log(req.body.token)
        // カスタムマッチのロビーを作成
        apexCommon.create_lobby(req);
        res.json({data:"Make match lobby!!"});
        break;
  
      case 'get_players':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case '/get_data/{type}':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'get_data':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'schedule_autostart':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'change_camera':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'pause_toggle':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'set_ready':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'set_matchmaking':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'set_team':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'kick_player':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'set_settings':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'send_chat':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'get_player_names':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'get_hardware_names':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'get_nucleus_hashes':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      default:
        // デフォルトのレスポンス
        res.json({ message: 'APIエンドポイントにアクセスしました。', query: queryParam });
        break;
    }
}

module.exports = { apexLiveApiCall };