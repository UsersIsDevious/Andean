"use client"
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// MapComponent を動的にインポートし、SSR を無効化
const MapWithNoSSR = dynamic(() => import('./map'), {
  ssr: false,
});

const HomePage = () => {
  const [webSocketData, setWebSocketData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8888'); // WebSocket サーバーの URL を指定
    ws.onmessage = (message) => {
      const data = JSON.parse(message.data);
      setWebSocketData(data); // WebSocket データを更新
    };

    return () => {
      ws.close(); // コンポーネントがアンマウントされたら WebSocket を閉じる
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Controlled Map</h1>
      {/* WebSocket からのデータを MapComponent に渡す */}
      <MapWithNoSSR webSocketData={webSocketData} />
    </div>
  );
};

export default HomePage;