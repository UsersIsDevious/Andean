export const createCircleCoords = (centerX, centerY, radius, numPoints = 256) => {
    const angleStep = (2 * Math.PI) / numPoints;
    const coordinates = [];
    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      coordinates.push([y, x]); // [y, x] = [lat, lng] の順に
    }
    return coordinates;
  };
  