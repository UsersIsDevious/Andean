import { useState, useEffect } from 'react';
import { MapContainer, Marker, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});
import { FaLocationArrow } from 'react-icons/fa'; // アイコンのインポート
import ReactDOMServer from 'react-dom/server'; // カスタム DivIcon のため

const MapComponent = ({ webSocketData }) => {
    const [players, setPlayers] = useState({}); // プレイヤーを id で管理
    const [mapImage, setMapImage] = useState('/default-map-image.jpg'); // 初期マップ画像
    const bounds = [[0, 0], [4096, 4096]];
  
    useEffect(() => {
      if (!webSocketData) return;
  
      // WebSocket データの type によって動作を切り替える
      switch (webSocketData.type) {
        case 'map_init':
          // マップ画像を置き換える
          setMapImage(webSocketData.mapImageUrl);
          
          // プレイヤーを初期化して人数分のマーカーを作成
          const initialPlayers = {};
          webSocketData.players.forEach((player) => {
            initialPlayers[player.id] = {
              lat: player.lat,
              lng: player.lng,
              name: player.name,
              team: player.team,
              rotation: player.rotation, // rotation 情報を追加
            };
          });
          setPlayers(initialPlayers);
          break;
  
        case 'map_update':
          // プレイヤーの座標変更や削除
          const updatedPlayers = { ...players };
          webSocketData.updates.forEach((update) => {
            if (update.action === 'move') {
              // 座標の変更
              if (updatedPlayers[update.id]) {
                updatedPlayers[update.id].lat = update.lat;
                updatedPlayers[update.id].lng = update.lng;
                updatedPlayers[update.id].rotation = update.rotation; // rotation を更新
              }
            } else if (update.action === 'remove') {
              // プレイヤーの削除
              delete updatedPlayers[update.id];
            }
          });
          setPlayers(updatedPlayers);
          break;
  
        default:
          console.log('Unknown WebSocket data type');
      }
    }, [webSocketData]); // players を依存配列から外す
  
    // チームに応じてアイコンの色を決定する関数
    const getTeamColor = (team) => {
      switch (team) {
        case 'red':
          return 'red';
        case 'blue':
          return 'blue';
        case 'green':
          return 'green';
        case 'yellow':
          return 'yellow';
        default:
          return 'gray'; // デフォルトの色
      }
    };
  
    // カスタム DivIcon を作成
    const createCustomIcon = (player) => {
      const color = getTeamColor(player.team); // チームに応じた色を取得
      const rotation = player.rotation || 0; // rotation 情報を取得
      const iconHtml = ReactDOMServer.renderToString(
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <FaLocationArrow
            style={{
              color: color,
              fontSize: '24px',
              transform: `rotate(${rotation}deg)`, // 回転を適用
              transition: 'transform 0.3s ease',
            }}
          />
          <span style={{ color: 'black', fontSize: '14px', fontWeight: 'bold' }}>{player.name}</span>
        </div>
      );
  
      return L.divIcon({
        className: 'custom-icon',
        html: iconHtml,
        iconAnchor: [12, 24], // アイコンのアンカーを設定 (アイコンの中央下に合わせる)
      });
    };
  
    return (
      <div>
        <MapContainer
          center={[2048, 2048]} // マップの中心
          zoom={Math.log2(1024 / 4096)} // 1024x1024 表示に最適なズーム
          minZoom={Math.log2(1024 / 4096)}
          maxZoom={2}
          maxBounds={bounds}
          style={{ height: '1024px', width: '1024px' }}
          crs={L.CRS.Simple}
        >
          <ImageOverlay url={mapImage} bounds={bounds} />
          {Object.keys(players).map((playerId) => (
            <Marker
              key={playerId}
              position={[players[playerId].lat, players[playerId].lng]}
              icon={createCustomIcon(players[playerId])} // カスタムアイコンを適用
            />
          ))}
        </MapContainer>
      </div>
    );
  };
  
  export default MapComponent;
  