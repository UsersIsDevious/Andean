"use client"; // クライアントコンポーネントを宣言
import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import ColorButton from '../../../components/ColorButton';
import ZoomControl from '../../../components/ZoomControl';


const LeafletMap = dynamic(() => import('../../../components/LeafletMap'), { ssr: false });
const MapWithDonut = dynamic(() => import('@/components/MapWithDonut'), { ssr: false });
const Map = dynamic(() => import('@/components/ring/ringMap'), { ssr: false });

export default function Home() {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // クライアントサイドに到達したことを確認
  }, []);

  if (!isMounted) {
    return <p>Loading map...</p>; // クライアントサイドがまだ初期化されていない場合の処理
  }

  return (
    <>
      <h1>Leaflet Map Example</h1>
      <div>
        <ColorButton />
        <MapWithDonut /> {/* LeafletMapコンポーネントを表示 */}
        <Map />
      </div>
    </>
  );
}