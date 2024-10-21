const MarkerList = ({ markers, createCustomIcon, removeMarker }) => {
    return (
      <>
        {markers.map(marker => (
          <Marker
            key={marker.id}
            position={[marker.y, marker.x]}
            icon={createCustomIcon(marker.rotation, marker.imageUrl, marker.text)}
          />
        ))}
      </>
    );
  };
  
  export default MarkerList;
  