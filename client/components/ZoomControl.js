// components/ZoomControl.js
import { useState } from 'react';

export default function ZoomControl({ onZoomChange }) {
  const [zoomLevel, setZoomLevel] = useState(5);

  const handleZoomChange = (event) => {
    const newZoomLevel = event.target.value;
    setZoomLevel(newZoomLevel);
    onZoomChange(newZoomLevel);
  };

  return (
    <div id="setMaxZoom">
      <input
        type="range"
        id="setMaxZoomRange"
        name="setMaxZoom"
        min="0"
        max="10"
        value={zoomLevel}
        step="1"
        onChange={handleZoomChange}
      />
      <label id="setMaxZoomRangeText">最大ズームレベル : {zoomLevel}</label>
    </div>
  );
}
