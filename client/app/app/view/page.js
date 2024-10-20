"use client";
import { useEffect, useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8888');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'rendering') {
        if (containerRef.current) {
          containerRef.current.innerHTML = data.html;
        }
      } else {
        console.log('Other message type received:', data);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Client Rendering</h1>
      <div ref={containerRef} />
    </div>
  );
}
