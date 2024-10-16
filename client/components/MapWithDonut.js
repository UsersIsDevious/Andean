'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import * as turf from '@turf/turf';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Polygon = dynamic(() => import('react-leaflet').then(mod => mod.Polygon), { ssr: false });

const DonutPolygonMap = () => {
  const [outerRadius, setOuterRadius] = useState(100); // 外側の円の半径
  const [innerRadius, setInnerRadius] = useState(50);  // 内側の円の半径
  const [outerXOffset, setOuterXOffset] = useState(0); // 外側の円のX軸オフセット
  const [outerYOffset, setOuterYOffset] = useState(0); // 外側の円のY軸オフセット
  const [innerXOffset, setInnerXOffset] = useState(0); // 内側の円のX軸オフセット
  const [innerYOffset, setInnerYOffset] = useState(0); // 内側の円のY軸オフセット
  const [donutPolygon, setDonutPolygon] = useState(null);

  useEffect(() => {
    const outerCenter = turf.point([outerXOffset, outerYOffset]); // 外側の円の中心
    const innerCenter = turf.point([innerXOffset, innerYOffset]); // 内側の円の中心

    // 外側の円と内側の円を作成
    const outerCircle = turf.circle(outerCenter, outerRadius, { units: 'kilometers' });
    const innerCircle = turf.circle(innerCenter, innerRadius, { units: 'kilometers' });

    // ドーナツ型ポリゴンを手動で作成
    const donut = turf.polygon([outerCircle.geometry.coordinates[0], innerCircle.geometry.coordinates[0]]);

    // ポリゴン座標をLeaflet用に変換
    const coordinates = donut.geometry.coordinates.map(ring =>
      ring.map(coord => [coord[1], coord[0]])
    );

    setDonutPolygon(coordinates);
  }, [outerRadius, innerRadius, outerXOffset, outerYOffset, innerXOffset, innerYOffset]); // 状態が変更されるたびにポリゴンを再計算

  return (
    <div>
      <h2>Outer Radius: {outerRadius} km</h2>
      <input
        type="range"
        min="50"
        max="200"
        step="0.1"
        value={outerRadius}
        onChange={(e) => setOuterRadius(Number(e.target.value))}
      />
      <h2>Outer Circle X Offset: {outerXOffset} km</h2>
      <input
        type="range"
        min="-10"
        max="10"
        step="0.1"
        value={outerXOffset}
        onChange={(e) => setOuterXOffset(Number(e.target.value))}
      />
      <h2>Outer Circle Y Offset: {outerYOffset} km</h2>
      <input
        type="range"
        min="-10"
        max="10"
        step="0.1"
        value={outerYOffset}
        onChange={(e) => setOuterYOffset(Number(e.target.value))}
      />

      <h2>Inner Radius: {innerRadius} km</h2>
      <input
        type="range"
        min="10"
        max="100"
        step="0.1"
        value={innerRadius}
        onChange={(e) => setInnerRadius(Number(e.target.value))}
      />
      <h2>Inner Circle X Offset: {innerXOffset} km</h2>
      <input
        type="range"
        min="-10"
        max="10"
        step="0.1"
        value={innerXOffset}
        onChange={(e) => setInnerXOffset(Number(e.target.value))}
      />
      <h2>Inner Circle Y Offset: {innerYOffset} km</h2>
      <input
        type="range"
        min="-10"
        max="10"
        step="0.1"
        value={innerYOffset}
        onChange={(e) => setInnerYOffset(Number(e.target.value))}
      />

      <MapContainer center={[0, 0]} zoom={4} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {donutPolygon && <Polygon positions={donutPolygon} color="blue" />}
      </MapContainer>
    </div>
  );
};

export default DonutPolygonMap;
