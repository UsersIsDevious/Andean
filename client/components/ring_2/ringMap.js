'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CRS, DivIcon } from 'leaflet';
import ControlPanel from './ControlPanel';
import MarkerList from './MarkerList';
import { createCircleCoords } from './utils';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const ImageOverlay = dynamic(() => import('react-leaflet').then(mod => mod.ImageOverlay), { ssr: false });
const Polygon = dynamic(() => import('react-leaflet').then(mod => mod.Polygon), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});
const DonutPolygonMap = ({ message }) => {
  const [outerRadius, setOuterRadius] = useState(500);
  const [outerXOffset, setOuterXOffset] = useState(2048);
  const [outerYOffset, setOuterYOffset] = useState(2048);
  const [innerRadius, setInnerRadius] = useState(200);
  const [innerXOffset, setInnerXOffset] = useState(2048);
  const [innerYOffset, setInnerYOffset] = useState(2048);
  const [markers, setMarkers] = useState([]);
  const [donutPolygon, setDonutPolygon] = useState(null);
  const [imageUrl, setImageUrl] = useState('/path/to/your/default/image.png');

  useEffect(() => {
    const outerCircleCoords = createCircleCoords(outerXOffset, outerYOffset, outerRadius);
    const innerCircleCoords = createCircleCoords(innerXOffset, innerYOffset, innerRadius);
    setDonutPolygon([outerCircleCoords, innerCircleCoords]);
  }, [outerRadius, outerXOffset, outerYOffset, innerRadius, innerXOffset, innerYOffset]);

  // WebSocketから受信したメッセージに基づいて処理を行う
  useEffect(() => {
    if (message) {
      if (message.type === 'map') {
        setImageUrl(message.mapImageUrl);
      } else if (message.type === 'playerUpdate') {
        setMarkers(message.players);
      } else if (message.type === 'addpin') {
        // `addpin`メッセージを受け取った場合、指定された位置にマーカーを追加
        const { x, y } = message; // x, y座標が含まれていると仮定
        addPinMarker(x, y);
      }
    }
  }, [message]);

  const addPinMarker = (x, y) => {
    setMarkers((prevMarkers) => [
      ...prevMarkers,
      { id: prevMarkers.length, x: x, y: y, rotation: 0, imageUrl: '', text: '' } // 標準マーカー
    ]);
  };

  const removeMarker = (id) => {
    setMarkers(markers.filter(marker => marker.id !== id));
  };

  const imageBounds = [[0, 0], [4096, 4096]];  // 画像の座標系に合わせた範囲
  const minZoom = Math.log2(1024 / 4096);

  const createCustomIcon = (rotation, imageUrl, text) => {
    return new DivIcon({
      html: `
        <div style="text-align: center; transform: rotate(${rotation}deg);">
          <div style="width: 20px; height: 20px; background-color: red; border-radius: 50%;"></div>
          <p>${text}</p>
        </div>`,
      className: '',
      iconSize: [20, 20], // アイコンのサイズを適切に設定
      iconAnchor: [10, 10], // 中心に配置
    });
  };

  return (
    <div>
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
      <MapContainer
        center={[2048, 2048]}
        zoom={minZoom}
        minZoom={minZoom}
        maxZoom={2}
        zoomSnap={0.1}
        crs={CRS.Simple}
        style={{ height: '1024px', width: '1024px' }}
        maxBounds={imageBounds}
      >
        <Marker position={[1024, 1024]}>
        </Marker>
        <ImageOverlay url={imageUrl} bounds={imageBounds} />
        {donutPolygon && <Polygon positions={donutPolygon} color="blue" />}
        {/* マーカーの描画 */}
        {markers.map(marker => (
          <Marker
            key={marker.id}
            position={[marker.y, marker.x]} // Leafletの座標系に合わせて[x, y]形式
            icon={createCustomIcon(marker.rotation, marker.imageUrl, marker.text)}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default DonutPolygonMap;
