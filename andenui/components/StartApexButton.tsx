"use client";

import { Button } from "@/components/ui/button";

interface StartApexButtonProps {
  startApex: () => void;
  apexResponse: string | null;
  isApexLoading: boolean;
}

export default function StartApexButton({ startApex, apexResponse, isApexLoading }: StartApexButtonProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Button onClick={startApex} disabled={isApexLoading} className="w-40 bg-blue-500 hover:bg-blue-600">
        {isApexLoading ? "Starting..." : "Start Apex"}
      </Button>
      {apexResponse && (
        <div className="text-center p-4 border rounded-md">
          <p className="font-semibold">Apex Response:</p>
          <p>{apexResponse}</p>
        </div>
      )}
    </div>
  );
}
