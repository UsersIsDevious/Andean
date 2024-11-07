import { useState, useEffect } from 'react';
import { MapContainer, Marker, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { createCircleCoords } from './utils';
import L from 'leaflet';
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import ControlPanel from '@/components/ring_2/ControlPanel';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});
import { FaLocationArrow } from 'react-icons/fa'; // アイコンのインポート
import ReactDOMServer from 'react-dom/server'; // カスタム DivIcon のため

const Polygon = dynamic(() => import('react-leaflet').then(mod => mod.Polygon), { ssr: false });

const MapComponent = ({ webSocketData }) => {
  const [players, setPlayers] = useState({}); // プレイヤーを id で管理
  const [mapImage, setMapImage] = useState('/default-map-image.jpg'); // 初期マップ画像
  const [outerRadius, setOuterRadius] = useState(4000);
  const [outerXOffset, setOuterXOffset] = useState(2048);
  const [outerYOffset, setOuterYOffset] = useState(2048);
  const [innerRadius, setInnerRadius] = useState(2000);
  const [innerXOffset, setInnerXOffset] = useState(2048);
  const [innerYOffset, setInnerYOffset] = useState(2048);
  const [donutPolygon, setDonutPolygon] = useState(null);
  const mapSize = 4096;
  const mapOrigin = mapSize / 2;
  const bounds = [[0, 0], [mapSize, mapSize]];

  const [imageUrl, setImageUrl] = useState('/default-image.png'); // 初期値

  const [ringStage, setRingStage] = useState(-1);
  const [ringStatus, setRingStatus] = useState("idle");
  const [ringTimestamp, setRingTimestamp] = useState(-1);
  const [ringEndTimestamp, setRingEndTimestamp] = useState(-1);
  const [currentRadius, setCurrentRadius] = useState(-1);
  const [nextRadius, setNextRadius] = useState(-1);
  const [currentCenter, setCurrentCenter] = useState(null);
  const [nextCenter, setNextCenter] = useState(null);

  useEffect(() => {
    const outerCircleCoords = createCircleCoords(outerXOffset, outerYOffset, outerRadius);
    const innerCircleCoords = createCircleCoords(innerXOffset, innerYOffset, innerRadius);
    setDonutPolygon([outerCircleCoords, innerCircleCoords]);
  }, [outerRadius, outerXOffset, outerYOffset, innerRadius, innerXOffset, innerYOffset]);

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

      case 'player_update':
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

      case 'ring_update':  // 新たな可能性として、一ラウンド分遅れている可能性が出てきた。例えばラウンド2のringStartClosing時にラウンド1のringStartClosing情報が降ってきているなど。
        const rings = webSocketData.rings;
        const msg = rings[rings.length - 1];
        setRingStatus(rings.ringStatus);
        setRingStage(msg.stage);
        setRingTimestamp(msg.timestamp);
        setRingEndTimestamp(msg.endTimestamp);
        switch (ringStatus) {
          case "active":
            setCurrentRadius(msg.currentRadius);
            setNextRadius(msg.endRadius);  // 次のリングの収縮が始まるまで、次リングの半径はわからない。
            setCurrentCenter(msg.center);  // 縮小を開始した円の中心
            break;
          case "idle":
            setNextCenter(msg.center);  // 縮小後の円の中心
            break;
          default:
            console.log("[RINGS_UPDATE] Recived unknown message");
            break;
        }
        break;
      default:
        console.log('Unknown WebSocket data type');
    }
  }, [webSocketData]); // players を依存配列から外す

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'w') {
        setInnerYOffset((prevValue) => prevValue + 1);
      } else if (event.key === 's') {
        setInnerYOffset((prevValue) => prevValue - 1);
      } else if (event.key === 'd') {
        setInnerXOffset((prevValue) => prevValue + 1);
      } else if (event.key === 'a') {
        setInnerXOffset((prevValue) => prevValue - 1);
      } else if (event.key === 'e') {
        setInnerRadius((prevValue) => prevValue + 1);
      } else if (event.key === 'q') {
        setInnerRadius((prevValue) => prevValue - 1);
      }
    };

    // キー押下イベントのリスナーを追加
    window.addEventListener('keydown', handleKeyDown);

    // クリーンアップでリスナーを削除
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // チームに応じてアイコンの色を決定する関数
  const getTeamColor = (team) => {
    switch (team) {
      case 1: // オブザーバー
        return '#808080';
      case 2:
        return '#068395';
      case 3:
        return '#1B4769';
      case 4:
        return '#1F54CD';
      case 5:
        return '#442A60';
      case 6:
        return '#6E2C6F';
      case 7:
        return '#AD2D77';
      case 8:
        return '#B01C51';
      case 9:
        return '#C3000B';
      case 10:
        return '#C54320';
      case 11:
        return '#781E13';
      case 12:
        return '#9F3B0D';
      case 13:
        return '#774B00';
      case 14:
        return '#CC7913';
      case 15:
        return '#967D00';
      case 16:
        return '#85930A';
      case 17:
        return '#495803';
      case 18:
        return '#709743';
      case 19:
        return '#398934';
      case 20:
        return '#2F5A1A';
      case 21:
        return '#007458';
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

  const handleInputChange = (e) => {
    setImageUrl(e.target.value); // ユーザーが入力した値をimageUrlに設定
  };

  return (
    <div className="relative w-[1024px] h-[1024px]">
      <div className="absolute z-0">
        <MapContainer
          center={[mapOrigin, mapOrigin]} // マップの中心
          zoom={Math.log2(1024 / mapSize)} 
          minZoom={Math.log2(1024 / mapSize)}
          maxZoom={2}
          maxBounds={bounds}
          style={{ height: '1024px', width: '1024px' }}
          crs={L.CRS.Simple}
        >
          <ImageOverlay url={mapImage} bounds={bounds} />
          {donutPolygon && <Polygon positions={donutPolygon} color="orange" />}
          {Object.keys(players).map((playerId) => (
            <Marker
              key={playerId}
              position={[players[playerId].lat, players[playerId].lng]}
              icon={createCustomIcon(players[playerId])} // カスタムアイコンを適用
            />
          ))}
        </MapContainer>
      </div>
      <img src={imageUrl}
        className="absolute top-0 left-0 w-[100%] h-[100%] opacity-50 z-20 pointer-events-none"
        alt="Semi-transparent overlay" />
      <div className="absolute left-[1040px]">
        <ControlPanel
          outerRadius={outerRadius}
          setOuterRadius={setOuterRadius}
          outerXOffset={outerXOffset}
          setOuterXOffset={setOuterXOffset}
          outerYOffset={outerYOffset}
          setOuterYOffset={setOuterYOffset}
          innerRadius={innerRadius}
          setInnerRadius={setInnerRadius}
          innerXOffset={innerXOffset}
          setInnerXOffset={setInnerXOffset}
          innerYOffset={innerYOffset}
          setInnerYOffset={setInnerYOffset}
        />
        <input
          type="text"
          placeholder="画像URLを入力してください"
          onChange={handleInputChange}
          style={{ width: '300px', padding: '8px', marginBottom: '20px' }}
        />
      </div>
    </div>
  );
};

export default MapComponent;
