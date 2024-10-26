"use client";
import RootLayout from '@/app/layout';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
// 事前にインポート可能なコンポーネントを登録しておく
const components = {
  mapView: dynamic(() => import('@/app/app/view/mapView')),
  test: dynamic(() => import('@/app/app/view/test')),
};
const Home = () => {
  const [componentName, setComponentName] = useState('DefaultComponent'); // 初期値としてデフォルトコンポーネント
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // WebSocket接続を開始
    const socket = new WebSocket('ws://localhost:8888');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data)

      // WebSocketのメッセージタイプが"rendering"の場合のみコンポーネントを更新
      if (data.type === 'rendering' && components[data.componentName]) {
        setComponentName(data.componentName); // 受け取ったデータに基づいて表示するコンポーネントを変更
      }

      // マップの初期化（muchiniの場合）
      if (data.type === 'muchini') {
        setComponentName('MapComponent'); // マップ表示用コンポーネントを表示
        setMessage(data);
      }
    };

    // クリーンアップ
    return () => {
      socket.close();
    };
  }, []);

  // コンポーネントを動的に選択する
  const ComponentToRender = components[componentName] || components['mapView'];

  // mapDataを必要とするコンポーネントかどうか確認
  const isMapComponent = componentName === 'MapComponent';

  return (
    <>
      <RootLayout title="Andean | view">
        <div>
          {isMapComponent ? (
            <ComponentToRender message={message}  /> // mapDataを渡す
          ) : (
            <ComponentToRender /> // mapDataは渡さない
          )}
        </div>
      </RootLayout>
    </>
  );
};

export default Home;