"use client";

import { useSignalR } from "@/lib/useSignalR";

export default function OverlayPage() {
  const { messages } = useSignalR("https://localhost:7109/OverlayHub");

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Overlay Page</h1>
      <ul className="mt-4 space-y-2">
        {messages.map((msg, index) => (
          <li key={index} className="border p-2 rounded-lg">
            {msg}
          </li>
        ))}
      </ul>
    </main>
  );
}
