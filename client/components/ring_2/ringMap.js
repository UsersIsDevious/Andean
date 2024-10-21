'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CRS, DivIcon } from 'leaflet';
import { FaLocationArrow } from 'react-icons/fa';
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
  // チームに応じた色のクラスを返す関数
  const getTeamColorClass = (team) => {
    switch (team) {
      case 'red':
        return 'text-red-500'; // Tailwindのクラスを使用
      case 'blue':
        return 'text-blue-500';
      case 'green':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  // プレイヤーアイコンをカスタマイズする関数
  const createCustomIcon = (rotation, team) => {
    const teamColorClass = getTeamColorClass(team); // チームの色クラスを取得
    return new DivIcon({
      html: `
        <div class="flex items-center justify-center transform rotate-${rotation}" style="width: 50px; height: 50px;">
          <FaLocationArrow class="w-8 h-8 ${teamColorClass}" />
        </div>
      `,
      className: '', // カスタムクラスの設定
      iconSize: [50, 50],
      iconAnchor: [25, 25], // マーカーの中心をアンカーに設定
    });
  };

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
            ? { ...marker, x: player.x, y: player.y, rotation: player.rotation, team: player.team }
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
        <MarkerList markers={markers} createCustomIcon={(rotation, team) => createCustomIcon(rotation, team)} />
      </MapContainer>
    </div>
  );
};

export default DonutPolygonMap;
