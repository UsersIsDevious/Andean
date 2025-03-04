"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useSignalR } from "@/lib/useSignalR";
import CreateLobbyButton from "@/components/CreateLobbyButton";
import StartApexButton from "@/components/StartApexButton";

export default function HomePage() {
  const { createLobby, startApex, lobbyResponse, apexResponse, isLobbyLoading, isApexLoading } = useSignalR();
  const data = useSelector((state: RootState) => state.data.value);

  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Control Panel</h1>
      
      <CreateLobbyButton 
        createLobby={createLobby} 
        lobbyResponse={lobbyResponse} 
        isLoading={isLobbyLoading} 
      />

      <StartApexButton 
        startApex={startApex} 
        apexResponse={apexResponse} 
        isApexLoading={isApexLoading} 
      />

      <h1 className="text-2xl font-bold mt-6">リアルタイムデータ</h1>
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
