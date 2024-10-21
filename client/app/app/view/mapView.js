"use client"; // クライアントコンポーネントを宣言
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

const Map = dynamic(() => import('@/components/ring_2/ringMap'), { ssr: false });

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
            <div>
                <Map />
            </div>
        </>
    );
}