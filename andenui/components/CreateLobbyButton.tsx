"use client";

import { Button } from "@/components/ui/button";

interface CreateLobbyButtonProps {
  createLobby: () => void;
  lobbyResponse: string | null;
  isLoading: boolean;
}

export default function CreateLobbyButton({ createLobby, lobbyResponse, isLoading }: CreateLobbyButtonProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Button onClick={createLobby} disabled={isLoading} className="w-40">
        {isLoading ? "Creating..." : "Create Lobby"}
      </Button>
      {lobbyResponse && (
        <div className="text-center p-4 border rounded-md">
          <p className="font-semibold">Lobby Response:</p>
          <p>{lobbyResponse}</p>
        </div>
      )}
    </div>
  );
}
