"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button'; // shadcn/ui の Button コンポーネントをインポート
import { Input } from '@/components/ui/input';   // shadcn/ui の Input コンポーネントをインポート
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {
  const [token, setToken] = useState('');

  // ロビー作成または参加
  const handleStartLobby = async () => {
    if (token === "") {
      await fetch('/api/create_lobby', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      await fetch('/api/join_lobby', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
    }
  };

  // // サーバー停止
  // const handleStopServer = () => {
  //   fetch('/stopServer', { method: 'POST' })
  //     .then(response => {
  //       if (response.ok) window.close();
  //       else alert('サーバーの停止に失敗しました。');
  //     })
  //     .catch(error => {
  //       console.error('サーバー停止リクエストに失敗しました:', error);
  //       alert('サーバーの停止に失敗しました。');
  //     });
  // };

  // // ゲーム開始
  // const handleStartGame = () => {
  //   fetch('/startGame', { method: 'POST' })
  //     .then(response => {
  //       if (!response.ok) alert('ゲームを起動に失敗しました。');
  //     })
  //     .catch(error => {
  //       console.error('ゲーム起動リクエストに失敗しました:', error);
  //       alert('ゲームを起動に失敗しました。');
  //     });
  // };

  // カメラを変更
  const handleChangeCamera = async () => {
    await fetch('/api/change_camera', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetType: 'poi', targetValue: 'NEXT' }),
    });
  };

  // ポーズ切り替え
  const handlePauseToggle = async () => {
    await fetch('/api/pause_toggle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ preTimer: 5 }),
    });
  };

  // // 準備完了
  // const handleSetReady = async () => {
  //   await fetch('/api/set_ready', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ ready: true }),
  //   });
  // };

  // // マッチメイキング設定
  // const handleSetMatchmaking = async () => {
  //   await fetch('/api/set_matchmaking', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ enabled: true }),
  //   });
  // };

  // チーム設定
  const handleSetTeam = async () => {
    await fetch('/api/set_team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        teamId: 2,
        targetHardwareName: "PC_STEAM",
        targetNucleushash: "bf1cf745d561bf844de867bb0042aee2",
      }),
    });
  };

  // プレイヤーをキック
  const handleKickPlayer = async () => {
    await fetch('/api/kick_player', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        targetHardwareName: "PC",
        targetNucleushash: "ee7daf86d19170f8f9e73a0d80c700a2",
      }),
    });
  };

  // 試合設定を適用
  const handleSetSettings = async () => {
    await fetch('/api/set_settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        matchName: "TEST 1",
        adminChat: true,
        teamRename: true,
        selfAssign: true,
        aimAssist: false,
        anonMode: false,
      }),
    });
  };

  // チャット送信
  const handleSendChat = async () => {
    const message = "Hello, this is a test message";
    await fetch('/api/send_chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
  };

  // チーム名設定
  const handleSetTeamName = async () => {
    await fetch('/api/set_team_name', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teamId: 2, teamName: "Team Alpha" }),
    });
  };

  return (
    <div className="p-6">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {/* <Input
          id="tokenInput"
          placeholder="Enter lobby token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="mb-4"
        />
        <Button
          onClick={handleStartLobby}
          className="w-full"
        >
          ロビー作成or参加
        </Button> */}
        {/* <Button
          onClick={handleStopServer}
          className="w-full"
        >
          停止
        </Button>
        <Button
          onClick={handleStartGame}
          className="w-full"
        >
          Start Game
        </Button> */}
        <Button
          onClick={handleChangeCamera}
          className="w-full"
        >
          カメラを変更
        </Button>
        {/* <Button
          onClick={handlePauseToggle}
          className="w-full"
        >
          ポーズ切り替え
        </Button> */}
        {/* <Button
          onClick={handleSetReady}
          className="w-full"
        >
          準備完了
        </Button>
        <Button
          onClick={handleSetMatchmaking}
          className="w-full"
        >
          マッチメイキング設定
        </Button> */}
        <Button
          onClick={handleSetTeam}
          className="w-full"
        >
          チーム設定
        </Button>
        <Button
          onClick={handleKickPlayer}
          className="w-full"
        >
          プレイヤーをキック
        </Button>
        <Button
          onClick={handleSetSettings}
          className="w-full"
        >
          試合設定を適用
        </Button>
        <Button
          onClick={handleSendChat}
          className="w-full"
        >
          チャット送信
        </Button>
        <Button
          onClick={handleSetTeamName}
          className="w-full"
        >
          チーム名設定
        </Button>
      </div>
    </div>
  );
}