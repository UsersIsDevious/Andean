"use client";

import { useOverlayControlSignalR } from "@/lib/hooks/useOverlayControlSignalR";

export default function OverlayControlPage() {
  const { controlCommands } = useOverlayControlSignalR();

  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Overlay Control Panel</h1>

      <h1 className="text-2xl font-bold mt-6">コントロールデータ</h1>
      <ul className="mt-4 space-y-2">
        {controlCommands.map((command, index) => (
          <li key={index} className="border p-2 rounded-lg">
            {typeof command === "object" ? JSON.stringify(command, null, 2) : command}
          </li>
        ))}
      </ul>
    </main>
  );
}
