'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { CRS } from 'leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const ImageOverlay = dynamic(() => import('react-leaflet').then(mod => mod.ImageOverlay), { ssr: false });
const Polygon = dynamic(() => import('react-leaflet').then(mod => mod.Polygon), { ssr: false });

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
  const [outerRadius, setOuterRadius] = useState(500); // 外側の円の半径
  const [innerRadius, setInnerRadius] = useState(200);  // 内側の円の半径
  const [outerXOffset, setOuterXOffset] = useState(2048); // 外側の円のX軸オフセット
  const [outerYOffset, setOuterYOffset] = useState(2048); // 外側の円のY軸オフセット
  const [innerXOffset, setInnerXOffset] = useState(2048); // 内側の円のX軸オフセット
  const [innerYOffset, setInnerYOffset] = useState(2048); // 内側の円のY軸オフセット
  const [donutPolygon, setDonutPolygon] = useState(null);

  useEffect(() => {
    // 外側の円の座標
    const outerCircleCoords = createCircleCoords(outerXOffset, outerYOffset, outerRadius);
    // 内側の円の座標
    const innerCircleCoords = createCircleCoords(innerXOffset, innerYOffset, innerRadius);
    
    // ドーナツ型ポリゴンを作成
    const donutCoords = [outerCircleCoords, innerCircleCoords];
    setDonutPolygon(donutCoords);
  }, [outerRadius, innerRadius, outerXOffset, outerYOffset, innerXOffset, innerYOffset]);

  // 4096×4096の画像URL
  const imageUrl = '/img/brokenMoon.png';

  // 画像の範囲 (4096×4096)
  const imageBounds = [[0, 0], [4096, 4096]];

  // 画像全体が映るように最小ズームを計算
  const minZoom = Math.log2(1024 / 4096); // 1024pxのコンテナに4096pxの画像全体を収めるためのズームレベル

  return (
    <div>
      <h2>Outer Radius: {outerRadius} meters</h2>
      <input
        type="range"
        min="100"
        max="2000"
        step="10"
        value={outerRadius}
        onChange={(e) => setOuterRadius(Number(e.target.value))}
      />
      <h2>Outer Circle X Offset: {outerXOffset} meters</h2>
      <input
        type="range"
        min="0"
        max="4096"
        step="10"
        value={outerXOffset}
        onChange={(e) => setOuterXOffset(Number(e.target.value))}
      />
      <h2>Outer Circle Y Offset: {outerYOffset} meters</h2>
      <input
        type="range"
        min="0"
        max="4096"
        step="10"
        value={outerYOffset}
        onChange={(e) => setOuterYOffset(Number(e.target.value))}
      />

      <h2>Inner Radius: {innerRadius} meters</h2>
      <input
        type="range"
        min="50"
        max="1000"
        step="10"
        value={innerRadius}
        onChange={(e) => setInnerRadius(Number(e.target.value))}
      />
      <h2>Inner Circle X Offset: {innerXOffset} meters</h2>
      <input
        type="range"
        min="0"
        max="4096"
        step="10"
        value={innerXOffset}
        onChange={(e) => setInnerXOffset(Number(e.target.value))}
      />
      <h2>Inner Circle Y Offset: {innerYOffset} meters</h2>
      <input
        type="range"
        min="0"
        max="4096"
        step="10"
        value={innerYOffset}
        onChange={(e) => setInnerYOffset(Number(e.target.value))}
      />

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
      </MapContainer>
    </div>
  );
};

export default DonutPolygonMap;
