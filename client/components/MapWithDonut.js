'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { CRS, DivIcon } from 'leaflet';

// React Leaflet のコンポーネントをダイナミックインポート
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const ImageOverlay = dynamic(() => import('react-leaflet').then(mod => mod.ImageOverlay), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

// プレーヤークラス
class Player {
  constructor(id, x, y, rotation, imageUrl, name) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.imageUrl = imageUrl;
    this.name = name;
  }

  // プレーヤーの座標や回転を更新するメソッド
  updatePosition(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
  }
}

// マップクラス
class GameMap {
  constructor(imageUrl, bounds) {
    this.imageUrl = imageUrl;
    this.bounds = bounds;
  }

  // マップ情報を更新するメソッド
  updateMap(imageUrl, bounds) {
    this.imageUrl = imageUrl;
    this.bounds = bounds;
  }
}

const WebSocketGame = () => {
  const [players, setPlayers] = useState([]);
  const [gameMap, setGameMap] = useState(null);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // WebSocketの接続を初期化
    const socket = new WebSocket('ws://localhost:8888');
    setWs(socket);

    // WebSocketのメッセージ受信
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      handleServerMessage(data);
    };

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };
  

    // WebSocket切断時の処理
    socket.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      //socket.close(); // クリーンアップ時にWebSocket接続を閉じる
    };
  }, []);

  // サーバーからのメッセージを処理
  const handleServerMessage = (data) => {
    if (data.type === 'init') {
      // Initメッセージの処理：マップ情報とプレーヤー数を受け取る
      const { mapImageUrl, mapBounds, players: serverPlayers } = data;
      
      // マップ情報を更新
      const newMap = new GameMap(mapImageUrl, mapBounds);
      setGameMap(newMap);

      // プレーヤーの作成
      const newPlayers = serverPlayers.map(playerInfo => new Player(
        playerInfo.id,
        playerInfo.x,
        playerInfo.y,
        playerInfo.rotation,
        playerInfo.imageUrl,
        playerInfo.name
      ));
      setPlayers(newPlayers);
    } else if (data.type === 'Update') {
      // プレーヤー位置更新の処理
      const { id, x, y, rotation } = data;
      setPlayers((prevPlayers) =>
        prevPlayers.map(player =>
          player.id === id ? { ...player, x, y, rotation } : player
        )
      );
    }
  };

  // カスタム DOM 要素用の DivIcon（画像とテキストを表示）
  const createCustomIcon = (rotation, imageUrl, name) => {
    return new DivIcon({
      html: `
        <div style="text-align: center; transform: rotate(${rotation}deg);">
          <img src="${imageUrl}" alt="Icon" style="width: 50px; height: 50px; display: block; margin: 0 auto;" />
          <p style="margin: 0;">${name}</p>
        </div>`,
      className: '',
      iconSize: [50, 70], // アイコンのサイズを適切に設定
      iconAnchor: [25, 35], // 中心に配置
    });
  };

  return (
    <div>
      {/* マップとプレーヤーの表示 */}
      {gameMap && (
        <MapContainer
          center={[2048, 2048]} // 初期座標を適切に設定
          zoom={-2} // 初期ズーム
          minZoom={-2} // 最小ズーム
          maxZoom={2} // 最大ズーム
          zoomSnap={0.1} // スナップ
          crs={CRS.Simple} // ピクセル座標系を使用
          style={{ height: '1024px', width: '1024px' }} // マップの表示サイズ
          maxBounds={gameMap.bounds} // マップの範囲を制限
        >
          <ImageOverlay url={gameMap.imageUrl} bounds={gameMap.bounds} />
          {/* プレーヤーのレンダリング */}
          {players.map(player => (
            <Marker
              key={player.id}
              position={[player.y, player.x]}
              icon={createCustomIcon(player.rotation, player.imageUrl, player.name)}
            />
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default WebSocketGame;
