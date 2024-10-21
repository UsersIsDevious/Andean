const ControlPanel = ({
    outerRadius, setOuterRadius, outerXOffset, setOuterXOffset, outerYOffset, setOuterYOffset,
    innerRadius, setInnerRadius, innerXOffset, setInnerXOffset, innerYOffset, setInnerYOffset, addMarker
  }) => {
    return (
      <div style={{ marginBottom: '20px' }}>
        <h2>Outer Radius: {outerRadius} pixels</h2>
        <input type="range" min="100" max="2000" step="10" value={outerRadius} onChange={(e) => setOuterRadius(Number(e.target.value))} />
  
        <h2>Outer Circle X Offset: {outerXOffset} px</h2>
        <input type="range" min="0" max="4096" step="10" value={outerXOffset} onChange={(e) => setOuterXOffset(Number(e.target.value))} />
  
        <h2>Outer Circle Y Offset: {outerYOffset} px</h2>
        <input type="range" min="0" max="4096" step="10" value={outerYOffset} onChange={(e) => setOuterYOffset(Number(e.target.value))} />
  
        <h2>Inner Radius: {innerRadius} pixels</h2>
        <input type="range" min="50" max="1000" step="10" value={innerRadius} onChange={(e) => setInnerRadius(Number(e.target.value))} />
  
        <h2>Inner Circle X Offset: {innerXOffset} px</h2>
        <input type="range" min="0" max="4096" step="10" value={innerXOffset} onChange={(e) => setInnerXOffset(Number(e.target.value))} />
  
        <h2>Inner Circle Y Offset: {innerYOffset} px</h2>
        <input type="range" min="0" max="4096" step="10" value={innerYOffset} onChange={(e) => setInnerYOffset(Number(e.target.value))} />
  
        <button onClick={addMarker}>Add Marker</button>
      </div>
    );
  };
  
  export default ControlPanel;
  