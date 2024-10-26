const MarkerList = ({ markers, createCustomIcon }) => {
  return (
    <>
      {markers.map(marker => (
        <div key={marker.id} style={{ position: 'absolute', left: marker.x, top: marker.y }}>
          {createCustomIcon(marker.rotation, marker.team)}
        </div>
      ))}
    </>
  );
};

export default MarkerList;
