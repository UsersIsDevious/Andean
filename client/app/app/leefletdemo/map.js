"use client"
import { useState, useEffect } from 'react';
import { MapContainer, Marker, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = ({ webSocketData }) => {
  const [markers, setMarkers] = useState([]);
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
      case 'movePlayer':
        // プレーヤーの位置を更新する (lat, lng を WebSocket データから取得)
        const { lat, lng } = webSocketData;
        setMarkers([{ lat, lng }]);
        break;
      default:
        console.log('Unknown WebSocket data type');
    }
  }, [webSocketData]);

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
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]} />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
