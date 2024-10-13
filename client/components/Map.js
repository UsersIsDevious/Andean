// components/Map.js
import { useEffect } from 'react';

export default function Map({ zoomLevel }) {
  useEffect(() => {
    // Leaflet が読み込まれているか確認してからマップを初期化
    if (typeof window !== 'undefined' && window.L) {
      const mapImage = {
        url: 'brokenMoon.png',
        width: 4096,
        height: 4096,
      };

      const mapBounds = window.L.latLngBounds(
        [0, 0], // 左上の位置
        [mapImage.height, mapImage.width] // 右下の位置
      );

      const map = window.L.map('map', {
        crs: window.L.CRS.Simple,
        center: [mapImage.height / 2, mapImage.width / 2],
        minZoom: -3,
        maxZoom: zoomLevel,
        maxBounds: mapBounds.pad(0),
      });

      window.L.imageOverlay(mapImage.url, mapBounds).addTo(map);
      map.fitBounds(mapBounds);

      // コンポーネントがアンマウントされた時にマップをクリーンアップ
      return () => {
        map.remove();
      };
    }
  }, [zoomLevel]);

  return <div id="map" style={{ height: '90vh', width: '60vw', margin: 'auto' }} />;
}
