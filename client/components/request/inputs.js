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

export default function Home() {
  const [token, setToken] = useState('');
  const [targetType, setTargetType] = useState('poi');
  const [targetValue, setTargetValue] = useState('NEXT');
  const [preTimer, setPreTimer] = useState(5);
  const [handleSetTeam_teamId, setHandleSetTeam_teamId] = useState();
  const [handleSetTeam_targetHardwareName, setHandleSetTeam_targetHardwareName] = useState('');
  const [handleSetTeam_targetNucleushash, setHandleSetTeam_targetNucleushash] = useState('');
  const [handleKickPlayer_targetHardwareName, setHandleKickPlayer_targetHardwareName] = useState('')
  const [handleKickPlayer_targetNucleushash, setHandleKickPlayer_targetNucleushash] = useState('')

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
        body: JSON.stringify({ token: token }),
      });
    }
  };

  // カメラを変更
  const handleChangeCamera = async () => {
    await fetch('/api/change_camera', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetType: targetType, targetValue: targetValue }),
    });
  };

  // ポーズ切り替え
  const handlePauseToggle = async () => {
    await fetch('/api/pause_toggle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ preTimer: preTimer }),
    });
  };

  // チーム設定
  const handleSetTeam = async () => {
    await fetch('/api/set_team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        teamId: handleSetTeam_teamId,
        targetHardwareName: handleSetTeam_targetHardwareName,
        targetNucleushash: handleSetTeam_targetNucleushash,
      }),
    });
  };

  // プレイヤーをキック
  const handleKickPlayer = async () => {
    await fetch('/api/kick_player', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        targetHardwareName: handleKickPlayer_targetHardwareName,
        targetNucleushash: handleKickPlayer_targetNucleushash,
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
        <Input
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
        </Button>
        <Button
          onClick={handleChangeCamera}
          className="w-full"
        >
          カメラを変更
        </Button>
        <Button
          onClick={handlePauseToggle}
          className="w-full"
        >
          ポーズ切り替え
        </Button>
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