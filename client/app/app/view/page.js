"use client";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
// 事前にインポート可能なコンポーネントを登録しておく
const components = {
  mapView: dynamic(() => import('@/app/app/view/mapView')),
  test: dynamic(() => import('@/app/app/view/test')),
};
const Home = () => {
  const [componentName, setComponentName] = useState('DefaultComponent'); // 初期値としてデフォルトコンポーネント
  const [messageType, setMessageType] = useState(null); // WebSocketからのtype
  const [mapData, setMapData] = useState({}); // mapの情報を保持するstate

  useEffect(() => {
    // WebSocket接続を開始
    const socket = new WebSocket('ws://localhost:8888');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      // WebSocketのメッセージタイプが"rendering"の場合のみコンポーネントを更新
      if (data.type === 'rendering' && components[data.componentName]) {
        setComponentName(data.componentName); // 受け取ったデータに基づいて表示するコンポーネントを変更
      }

      // typeが"dataupdate"の場合、mapの情報を操作
      if (data.type === 'dataupdate') {
        setMapData(data.mapData);
      }

      // メッセージのtypeも保持
      setMessageType(data.type);
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
    <div>
      {isMapComponent ? (
        <ComponentToRender mapData={mapData} /> // mapDataを渡す
      ) : (
        <ComponentToRender /> // mapDataは渡さない
      )}
    </div>
  );
};

export default Home;