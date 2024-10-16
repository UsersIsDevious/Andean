'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { CRS } from 'leaflet';
import DonutPolygon from './DonutPolygon'; // ドーナツ型ポリゴンコンポーネントをインポート
import { imageUrl, imageBounds, initialCenter, minZoom } from './config'; // 画像設定と座標系をインポート

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const ImageOverlay = dynamic(() => import('react-leaflet').then(mod => mod.ImageOverlay), { ssr: false });

const ringMap = () => {
  const [outerRadius, setOuterRadius] = useState(500); // 外側の円の半径
  const [innerRadius, setInnerRadius] = useState(200);  // 内側の円の半径
  const [outerXOffset, setOuterXOffset] = useState(2048); // 外側の円のX軸オフセット
  const [outerYOffset, setOuterYOffset] = useState(2048); // 外側の円のY軸オフセット
  const [innerXOffset, setInnerXOffset] = useState(2048); // 内側の円のX軸オフセット
  const [innerYOffset, setInnerYOffset] = useState(2048); // 内側の円のY軸オフセット

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
        center={initialCenter} // 画像の中心座標
        zoom={minZoom} // 最小ズームを初期ズームに設定
        minZoom={minZoom} // 画像全体が見える最小ズームレベル
        maxZoom={2} // ズームインはある程度制限
        zoomSnap={0.1} // スナップを細かく調整
        crs={CRS.Simple} // カスタム座標系
        style={{ height: '1024px', width: '1024px' }} // マップのサイズを1024pxに設定
        maxBounds={imageBounds} // 画像の範囲を制限
      >
        <ImageOverlay url={imageUrl} bounds={imageBounds} />
        <DonutPolygon
          outerXOffset={outerXOffset}
          outerYOffset={outerYOffset}
          outerRadius={outerRadius}
          innerXOffset={innerXOffset}
          innerYOffset={innerYOffset}
          innerRadius={innerRadius}
        />
      </MapContainer>
    </div>
  );
};

export default ringMap;
