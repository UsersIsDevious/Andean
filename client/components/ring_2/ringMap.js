'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CRS, DivIcon } from 'leaflet';
import ControlPanel from './ControlPanel';
import MarkerList from './MarkerList';
import { createCircleCoords } from './utils';
import Home from '../request/buttons';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const ImageOverlay = dynamic(() => import('react-leaflet').then(mod => mod.ImageOverlay), { ssr: false });
const Polygon = dynamic(() => import('react-leaflet').then(mod => mod.Polygon), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

const Home = ({ mapData }) => {
  const [outerRadius, setOuterRadius] = useState(500);
  const [outerXOffset, setOuterXOffset] = useState(2048);
  const [outerYOffset, setOuterYOffset] = useState(2048);
  const [innerRadius, setInnerRadius] = useState(200);
  const [innerXOffset, setInnerXOffset] = useState(2048);
  const [innerYOffset, setInnerYOffset] = useState(2048);
  const [markers, setMarkers] = useState([]);
  const [donutPolygon, setDonutPolygon] = useState(null);

  useEffect(() => {
    if (mapData) {
      // WebSocketからのデータで状態を更新する
      setOuterRadius(mapData.outerRadius || outerRadius);
      setOuterXOffset(mapData.outerXOffset || outerXOffset);
      setOuterYOffset(mapData.outerYOffset || outerYOffset);
      setInnerRadius(mapData.innerRadius || innerRadius);
      setInnerXOffset(mapData.innerXOffset || innerXOffset);
      setInnerYOffset(mapData.innerYOffset || innerYOffset);
      setMarkers(mapData.markers || markers);
    }
  }, [mapData]);

  useEffect(() => {
    const outerCircleCoords = createCircleCoords(outerXOffset, outerYOffset, outerRadius);
    const innerCircleCoords = createCircleCoords(innerXOffset, innerYOffset, innerRadius);
    setDonutPolygon([outerCircleCoords, innerCircleCoords]);
  }, [outerRadius, outerXOffset, outerYOffset, innerRadius, innerXOffset, innerYOffset]);

  const addMarker = () => {
    setMarkers([
      ...markers,
      { id: markers.length, x: 2048, y: 2048, rotation: 0, imageUrl: '/path/to/your/image.png', text: 'Sample Text' },
    ]);
  };

  const removeMarker = (id) => {
    setMarkers(markers.filter(marker => marker.id !== id));
  };

  const imageUrl = '/path/to/your/image.png';
  const imageBounds = [[0, 0], [4096, 4096]];
  const minZoom = Math.log2(1024 / 4096);

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
        addMarker={addMarker}
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
        <ImageOverlay url={imageUrl} bounds={imageBounds} />
        {donutPolygon && <Polygon positions={donutPolygon} color="blue" />}
        <MarkerList markers={markers} createCustomIcon={createCustomIcon} removeMarker={removeMarker} />
      </MapContainer>
    </div>
  );
};

export default Home;
