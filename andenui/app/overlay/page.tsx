"use client";

import { useOverlaySignalR } from "@/lib/hooks/useOverlaySignalR";

export default function OverlayPage() {
  const { overlayData } = useOverlaySignalR();

  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Overlay</h1>

      <h1 className="text-2xl font-bold mt-6">リアルタイムデータ</h1>
      <ul className="mt-4 space-y-2">
        {overlayData.map((data, index) => (
          <li key={index} className="border p-2 rounded-lg">
            {typeof data === "object" ? JSON.stringify(data, null, 2) : data}
          </li>
        ))}
      </ul>
    </main>
  );
}
