"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-6 flex flex-col items-center space-y-4">
      <h1 className="text-3xl font-bold">SignalR Control Panel</h1>
      <p className="text-gray-600">各ページへ移動して SignalR を確認してください。</p>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <Link href="/control-panel">
          <div className="p-4 border rounded-lg bg-blue-500 text-white text-center hover:bg-blue-600 cursor-pointer">
            Control Panel
          </div>
        </Link>
        <Link href="/live-view">
          <div className="p-4 border rounded-lg bg-green-500 text-white text-center hover:bg-green-600 cursor-pointer">
            Live View
          </div>
        </Link>
        <Link href="/overlay">
          <div className="p-4 border rounded-lg bg-purple-500 text-white text-center hover:bg-purple-600 cursor-pointer">
            Overlay
          </div>
        </Link>
        <Link href="/overlay-control">
          <div className="p-4 border rounded-lg bg-red-500 text-white text-center hover:bg-red-600 cursor-pointer">
            Overlay Control Panel
          </div>
        </Link>
      </div>
    </main>
  );
}
