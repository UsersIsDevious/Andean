import { Polygon } from 'react-leaflet';
import { createCircleCoords } from './geometry';

const DonutPolygon = ({ outerXOffset, outerYOffset, outerRadius, innerXOffset, innerYOffset, innerRadius }) => {
  // 外側と内側の円の座標を生成
  const outerCircleCoords = createCircleCoords(outerXOffset, outerYOffset, outerRadius);
  const innerCircleCoords = createCircleCoords(innerXOffset, innerYOffset, innerRadius);

  // ドーナツ型ポリゴンを生成
  const donutCoords = [outerCircleCoords, innerCircleCoords];

  return <Polygon positions={donutCoords} color="blue" />;
};

export default DonutPolygon;
