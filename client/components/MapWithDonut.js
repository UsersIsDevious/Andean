'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { CRS, DivIcon } from 'leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const ImageOverlay = dynamic(() => import('react-leaflet').then(mod => mod.ImageOverlay), { ssr: false });
const Polygon = dynamic(() => import('react-leaflet').then(mod => mod.Polygon), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

// 円の座標をピクセルベースで生成する関数
const createCircleCoords = (centerX, centerY, radius, numPoints = 64) => {
  const angleStep = (2 * Math.PI) / numPoints;
  const coordinates = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = i * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    coordinates.push([y, x]); // [y, x] = [lat, lng] の順に
  }
  return coordinates;
};

const DonutPolygonMap = () => {
  // 外側の円のパラメータ
  const [outerRadius, setOuterRadius] = useState(500); // 初期半径
  const [outerXOffset, setOuterXOffset] = useState(2048); // 初期Xオフセット
  const [outerYOffset, setOuterYOffset] = useState(2048); // 初期Yオフセット

  // 内側の円のパラメータ
  const [innerRadius, setInnerRadius] = useState(200); // 初期半径
  const [innerXOffset, setInnerXOffset] = useState(2048); // 初期Xオフセット
  const [innerYOffset, setInnerYOffset] = useState(2048); // 初期Yオフセット

  // マーカーのリスト (動的に増減)
  const [markers, setMarkers] = useState([]);

  const [donutPolygon, setDonutPolygon] = useState(null);

  // 円の座標を生成
  useEffect(() => {
    const outerCircleCoords = createCircleCoords(outerXOffset, outerYOffset, outerRadius);
    const innerCircleCoords = createCircleCoords(innerXOffset, innerYOffset, innerRadius);
    const donutCoords = [outerCircleCoords, innerCircleCoords];
    setDonutPolygon(donutCoords);
  }, [outerRadius, innerRadius, outerXOffset, outerYOffset, innerXOffset, innerYOffset]);

  // マーカー追加
  const addMarker = () => {
    setMarkers([
      ...markers,
      { id: markers.length, x: 2048, y: 2048, rotation: 0, imageUrl: '/path/to/your/image.png', text: 'Sample Text' }, // デフォルトの位置と回転角度で追加
    ]);
  };

  // マーカー削除
  const removeMarker = (id) => {
    setMarkers(markers.filter(marker => marker.id !== id));
  };

  // 4096×4096の画像URL（適切なパスに置き換えてください）
  const imageUrl = '/img/brokenMoon.png';

  // 画像の範囲 (4096×4096)
  const imageBounds = [[0, 0], [4096, 4096]];

  // 画像全体が映るように最小ズームを計算
  const minZoom = Math.log2(1024 / 4096); // 約 -2

  // カスタム DOM 要素用の DivIcon（画像とテキストを表示）
  const createCustomIcon = (rotation, imageUrl, text) => {
    return new DivIcon({
      html: `
        <div style="text-align: center; transform: rotate(${rotation}deg);">
          <img src="${imageUrl}" alt="Icon" style="width: 50px; height: 50px; display: block; margin: 0 auto;" />
          <p style="margin: 0;">${text}</p>
        </div>`,
      className: '',
      iconSize: [50, 70], // アイコンのサイズを適切に設定
      iconAnchor: [25, 35], // 中心に配置
    });
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h2>Outer Radius: {outerRadius} pixels</h2>
        <input
          type="range"
          min="100"
          max="2000"
          step="10"
          value={outerRadius}
          onChange={(e) => setOuterRadius(Number(e.target.value))}
        />

        <h2>Outer Circle X Offset: {outerXOffset} px</h2>
        <input
          type="range"
          min="0"
          max="4096"
          step="10"
          value={outerXOffset}
          onChange={(e) => setOuterXOffset(Number(e.target.value))}
        />

        <h2>Outer Circle Y Offset: {outerYOffset} px</h2>
        <input
          type="range"
          min="0"
          max="4096"
          step="10"
          value={outerYOffset}
          onChange={(e) => setOuterYOffset(Number(e.target.value))}
        />

        <h2>Inner Radius: {innerRadius} pixels</h2>
        <input
          type="range"
          min="50"
          max="1000"
          step="10"
          value={innerRadius}
          onChange={(e) => setInnerRadius(Number(e.target.value))}
        />

        <h2>Inner Circle X Offset: {innerXOffset} px</h2>
        <input
          type="range"
          min="0"
          max="4096"
          step="10"
          value={innerXOffset}
          onChange={(e) => setInnerXOffset(Number(e.target.value))}
        />

        <h2>Inner Circle Y Offset: {innerYOffset} px</h2>
        <input
          type="range"
          min="0"
          max="4096"
          step="10"
          value={innerYOffset}
          onChange={(e) => setInnerYOffset(Number(e.target.value))}
        />

        {/* マーカー追加ボタン */}
        <button onClick={addMarker}>Add Marker</button>

        {/* マーカーのスライダーコントロール */}
        {markers.map((marker, index) => (
          <div key={marker.id}>
            <h3>Marker {marker.id}</h3>
            <p>X Position: {marker.x}</p>
            <input
              type="range"
              min="0"
              max="4096"
              step="10"
              value={marker.x}
              onChange={(e) => {
                const newMarkers = markers.map(m => m.id === marker.id ? { ...m, x: Number(e.target.value) } : m);
                setMarkers(newMarkers);
              }}
            />
            <p>Y Position: {marker.y}</p>
            <input
              type="range"
              min="0"
              max="4096"
              step="10"
              value={marker.y}
              onChange={(e) => {
                const newMarkers = markers.map(m => m.id === marker.id ? { ...m, y: Number(e.target.value) } : m);
                setMarkers(newMarkers);
              }}
            />
            <p>Rotation: {marker.rotation}°</p>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={marker.rotation}
              onChange={(e) => {
                const newMarkers = markers.map(m => m.id === marker.id ? { ...m, rotation: Number(e.target.value) } : m);
                setMarkers(newMarkers);
              }}
            />
            <button onClick={() => removeMarker(marker.id)}>Remove Marker</button>
          </div>
        ))}
      </div>

      {/* Leaflet マップ */}
      <MapContainer
        center={[2048, 2048]} // 画像の中心座標
        zoom={minZoom} // 最小ズームを初期ズームに設定
        minZoom={minZoom} // 画像全体が見える最小ズームレベル
        maxZoom={2} // ズームインはある程度制限
        zoomSnap={0.1} // スナップを細かく調整
        crs={CRS.Simple} // カスタム座標系
        style={{ height: '1024px', width: '1024px' }} // マップのサイズを1024pxに設定
        maxBounds={imageBounds} // 画像の範囲を制限
      >
        <ImageOverlay url={imageUrl} bounds={imageBounds} />
        {donutPolygon && <Polygon positions={donutPolygon} color="blue" />}
        {/* マーカーのレンダリング */}
        {markers.map(marker => (
          <Marker
            key={marker.id}
            position={[marker.y, marker.x]}
            icon={createCustomIcon(marker.rotation, marker.imageUrl, marker.text)}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default DonutPolygonMap;
