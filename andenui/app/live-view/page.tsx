"use client";

import { useLiveViewSignalR } from "@/lib/hooks/useLiveViewSignalR";

export default function LiveViewPage() {
  const { messages } = useLiveViewSignalR();

  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Live View</h1>

      <h1 className="text-2xl font-bold mt-6">リアルタイムデータ</h1>
      <ul className="mt-4 space-y-2">
        {messages.map((msg, index) => (
          <li key={index} className="border p-2 rounded-lg">
            {typeof msg === "object" ? JSON.stringify(msg, null, 2) : msg}
          </li>
        ))}
      </ul>
    </main>
  );
}
