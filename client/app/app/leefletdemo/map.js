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
        case 'updateMap':
          // マップ画像を置き換える
          setMapImage(webSocketData.mapImageUrl);
          break;
        case 'movePlayers':
          // 複数のプレイヤーの位置を更新する (players データに id をキーとして保存)
          const updatedPlayers = { ...players };
          webSocketData.players.forEach((player) => {
            updatedPlayers[player.id] = {
              lat: player.lat,
              lng: player.lng,
              name: player.name,
              team: player.team,
              rotation: player.rotation, // 回転角度を追加
            };
          });
          setPlayers(updatedPlayers);
          break;
        default:
          console.log('Unknown WebSocket data type');
      }
    }, [webSocketData]);
  
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
      const rotationStyle = {
        transform: `rotate(${player.rotation}deg)`, // 回転スタイルを適用
        transition: 'transform 0.3s ease', // 回転のアニメーションを設定
      };
  
      return L.divIcon({
        className: 'custom-icon',
        html: ReactDOMServer.renderToString(
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <FaLocationArrow style={{ color: color, fontSize: '24px', ...rotationStyle }} />
            <span style={{ color: 'black', fontSize: '14px', fontWeight: 'bold' }}>{player.name}</span>
          </div>
        ),
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