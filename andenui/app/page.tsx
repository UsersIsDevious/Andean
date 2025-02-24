"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useSignalR } from "@/lib/useSignalR";
import CreateLobbyButton from "@/components/CreateLobbyButton";

export default function HomePage() {
  const { createLobby, lobbyResponse, isLoading } = useSignalR(); // ここで SignalR を 1 回だけ呼ぶ
  const data = useSelector((state: RootState) => state.data.value);

  return (
    <main className="p-4">
      <CreateLobbyButton 
        createLobby={createLobby} 
        lobbyResponse={lobbyResponse} 
        isLoading={isLoading} 
      />
      <h1 className="text-2xl font-bold">リアルタイムデータ</h1>
      <ul className="mt-4 space-y-2">
        {data.map((item, index) => (
          <li key={index} className="border p-2 rounded-lg">
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </main>
  );
}
