'use client';  // クライアントサイドでのみ実行することを明示

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const LeafletDonutMap = () => {
  useEffect(() => {
    // Leaflet と Turf.js をクライアントサイドで読み込む
    const L = require('leaflet');
    const turf = require('@turf/turf');

    // 地図の初期化
    const map = L.map('map').setView([35.681236, 139.767125], 13);

    // OpenStreetMap タイルレイヤーの追加
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // 中心座標
    const center = [139.767125, 35.681236]; // [経度, 緯度] の順

    // 外側の円を作成（10キロメートル半径）
    const outerCircle = turf.circle(center, 10, {
      steps: 64,
      units: 'kilometers',
    });

    // 内側の円を作成（0.3キロメートル半径）
    const innerCircle = turf.circle(center, 0.3, {
      steps: 64,
      units: 'kilometers',
    });

    // outerCircle と innerCircle が Polygon か確認
    if (outerCircle.geometry.type === 'Polygon' && innerCircle.geometry.type === 'Polygon') {
      // 外側の円から内側の円を差し引いてドーナツ型を作成
      const donut = turf.difference(outerCircle, innerCircle);

      if (donut) {
        // GeoJSON レイヤーとして地図に追加
        L.geoJSON(donut, {
          style: {
            color: 'red',
            fillColor: 'red',
            fillOpacity: 0.3,
            weight: 2,
          },
        }).addTo(map);
      } else {
        console.error('Difference operation failed: donut is null');
      }
    } else {
      console.error('Invalid features: outerCircle or innerCircle is not a Polygon');
    }
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }} />;
};

export default dynamic(() => Promise.resolve(LeafletDonutMap), { ssr: false });
