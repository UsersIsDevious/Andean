const common = require('../utils/common');
const { CustomMatch } = require('../utils/andeanClass')


/**
 * マップ初期化のメッセージを送信する関数
 * @param {String} matchName 
 * @param {CustomMatch} match
 */
function sendMapInitialization(mapName, match) {
  let message = {
    type: 'map_init',
    matchName: "Test Match",
    mapImageUrl: '/img/mapName.png',
    players: []
  };

  message.mapImageUrl = `/img/${mapName}.png`
  for (const playerId in match.players) {
    message.players.push(
      {
        id: match.getPlayer(playerId).nucleusHash,
        name: match.getPlayer(playerId).name,
        team: match.getPlayer(playerId).teamId,
        lat: match.getPlayer(playerId).pos.x,
        lng: match.getPlayer(playerId).pos.y,
        rotation: match.getPlayer(playerId).angles
      }
    )
  }
    
  send(match,message);
}

/**
 * プレイヤーの座標変更のメッセージを送信する関数
 * @param {CustomMatch} match 
 */
function sendPlayerPositionUpdate(match) {
  let message = {
    type: 'map_update',
    updates: []
  };

  for (const playerId in match.players) {
    message.updates.push(
      {
        id: match.getPlayer(playerId).nucleusHash,
        action: 'move',
        lat: match.getPlayer(playerId).pos.x,
        lng: match.getPlayer(playerId).pos.y,
        rotation: match.getPlayer(playerId).angles
      }
    )
  }
  send(match,message);
}

async function send(match, message){
  common.saveData(match.matchName, match)
  await common.getServerList().websocketServer_web.broadcastToAllClients(JSON.stringify(message));
}

module.exports = { sendMapInitialization, sendPlayerPositionUpdate }