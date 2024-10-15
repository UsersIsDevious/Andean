import React, { useEffect, useState } from 'react';

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  useEffect(() => {
    // SSEの設定
    const eventSource = new EventSource('/events');

    // サーバーからのメッセージを受け取る
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.color) {
          setBackgroundColor(data.color);
        }
      } catch (error) {
        console.error('Invalid message data', error);
      }
    };

    // コンポーネントがアンマウントされた時にSSE接続を閉じる
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div style={{ backgroundColor, height: '100vh', width: '100%' }}>
      <h1 style={{ color: '#fff' }}>背景色がサーバーのメッセージで変わります！</h1>
    </div>
  );
};

export default BackgroundChanger;
