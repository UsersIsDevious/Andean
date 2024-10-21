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

const DonutPolygonMap = ({ mapData, playerData }) => {
  const [outerRadius, setOuterRadius] = useState(500);
  const [outerXOffset, setOuterXOffset] = useState(2048);
  const [outerYOffset, setOuterYOffset] = useState(2048);
  const [innerRadius, setInnerRadius] = useState(200);
  const [innerXOffset, setInnerXOffset] = useState(2048);
  const [innerYOffset, setInnerYOffset] = useState(2048);
  const [markers, setMarkers] = useState([]);
  const [donutPolygon, setDonutPolygon] = useState(null);
  const [imageUrl, setImageUrl] = useState('/img/brokenMoon.png'); // 初期画像

  // マップ初期化データの適用
  useEffect(() => {
    if (mapData) {
      setOuterRadius(mapData.outerRadius || outerRadius);
      setOuterXOffset(mapData.outerXOffset || outerXOffset);
      setOuterYOffset(mapData.outerYOffset || outerYOffset);
      setInnerRadius(mapData.innerRadius || innerRadius);
      setInnerXOffset(mapData.innerXOffset || innerXOffset);
      setInnerYOffset(mapData.innerYOffset || innerYOffset);
      setImageUrl(mapData.imageUrl || imageUrl); // 画像のURLを設定
      setMarkers(mapData.markers || markers); // 初期マーカーの設定
    }
  }, [mapData]);

  // プレイヤーデータの更新
  useEffect(() => {
    if (playerData) {
      setMarkers((prevMarkers) =>
        prevMarkers.map((marker) => {
          const player = playerData.find(p => p.id === marker.id);
          return player
            ? { ...marker, x: player.x, y: player.y, rotation: player.rotation }
            : marker;
        })
      );
    }
  }, [playerData]);

  useEffect(() => {
    const outerCircleCoords = createCircleCoords(outerXOffset, outerYOffset, outerRadius);
    const innerCircleCoords = createCircleCoords(innerXOffset, innerYOffset, innerRadius);
    setDonutPolygon([outerCircleCoords, innerCircleCoords]);
  }, [outerRadius, outerXOffset, outerYOffset, innerRadius, innerXOffset, innerYOffset]);

  const createCustomIcon = (rotation, imageUrl, text) => {
    return new DivIcon({
      html: `
        <div style="text-align: center; transform: rotate(${rotation}deg);">
          <img src="${imageUrl}" alt="Icon" style="width: 50px; height: 50px;" />
          <p>${text}</p>
        </div>`,
      className: '',
      iconSize: [50, 70],
      iconAnchor: [25, 35],
    });
  };

  const imageBounds = [[0, 0], [4096, 4096]];
  const minZoom = Math.log2(1024 / 4096);

  return (
    <div>
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
        <ImageOverlay url={imageUrl} bounds={imageBounds} />
        {donutPolygon && <Polygon positions={donutPolygon} color="blue" />}
        <MarkerList markers={markers} createCustomIcon={createCustomIcon} />
      </MapContainer>
    </div>
  );
};

export default DonutPolygonMap;
