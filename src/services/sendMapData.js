const common = require('./utils/common');

// マップ初期化のメッセージを送信する関数
function sendMapInitialization() {
    const message = {
      type: 'muchini',
      mapData: {
        imageUrl: '/img/olympus.png',
        outerRadius: 500,
        outerXOffset: 2048,
        outerYOffset: 2048,
        innerRadius: 200,
        innerXOffset: 2048,
        innerYOffset: 2048,
        markers: [
          {
            id: 1,
            x: 1000,
            y: 1000,
            rotation: 45,
            imageUrl: '/path/to/marker/image.png',
            text: 'Player 1'
          },
          {
            id: 2,
            x: 1500,
            y: 1500,
            rotation: 90,
            imageUrl: '/path/to/marker/image.png',
            text: 'Player 2'
          }
        ]
      }
    };
    
    common.getServerList().websocketServer_web.broadcastToAllClients(JSON.stringify(message));
  }
  
  // プレイヤーの座標変更のメッセージを送信する関数
  function sendPlayerPositionUpdate() {
    const message = {
      type: 'dataupdate',
      playerData: [
        {
          id: 1,
          x: 1200,
          y: 1300,
          rotation: 90
        },
        {
          id: 2,
          x: 1600,
          y: 1700,
          rotation: 180
        }
      ]
    };
    
    common.getServerList().websocketServer_web.broadcastToAllClients(JSON.stringify(message));
  }
  