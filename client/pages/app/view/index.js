// pages/index.js
import { useState } from 'react';
import dynamic from 'next/dynamic';
import ColorButton from '../../../components/ColorButton';
import ZoomControl from '../../../components/ZoomControl';

const Map = dynamic(() => import('../../../components/Map'), { ssr: false });

export default function Home() {
  const [zoomLevel, setZoomLevel] = useState(5);

  const handleZoomChange = (newZoomLevel) => {
    setZoomLevel(newZoomLevel);
  };

  return (
    <div>
      <ColorButton />
      <ZoomControl onZoomChange={handleZoomChange} />
      <Map zoomLevel={zoomLevel} />
    </div>
  );
}
