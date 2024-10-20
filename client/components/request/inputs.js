"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';  
import { Input } from '@/components/ui/input';  
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PowerIcon, UsersIcon, Cog6ToothIcon, CheckIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [token, setToken] = useState(''); 
  const [targetType, setTargetType] = useState('poi');
  const [targetValue, setTargetValue] = useState('NEXT');
  const [preTimer, setPreTimer] = useState(5);
  const [handleSetTeam_teamId, setHandleSetTeam_teamId] = useState(2);
  const [handleSetTeam_targetHardwareName, setHandleSetTeam_targetHardwareName] = useState('');
  const [handleSetTeam_targetNucleushash, setHandleSetTeam_targetNucleushash] = useState('');
  const [handleKickPlayer_targetHardwareName, setHandleKickPlayer_targetHardwareName] = useState('');
  const [handleKickPlayer_targetNucleushash, setHandleKickPlayer_targetNucleushash] = useState('');
  const [matchName, setMatchName] = useState('des_hu_cm');
  const [adminChat, setAdminChat] = useState(false);
  const [teamRename, setTeamRename] = useState(true);
  const [selfAssign, setSelfAssign] = useState(true);
  const [aimAssist, setAimAssist] = useState(false);
  const [anonMode, setAnonMode] = useState(false);
  const [message, setMessage] = useState("Hello, this is a test message");
  const [handleSetTeamName_teamId, setHandleSetTeamName_teamId] = useState(2);
  const [teamName, setTeamName] = useState("Team Alpha");
  const [handleSetSpawnPoint_teamId, setHandleSetSpawnPoint_teamId] = useState(2);
  const [landmark, setLandmark] = useState(1);

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
        teamId: handleSetTeam_teamId + 1,
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
        matchName: matchName,
        adminChat: adminChat,
        teamRename: teamRename,
        selfAssign: selfAssign,
        aimAssist: aimAssist,
        anonMode: anonMode,
      }),
    });
  };

  // チャット送信
  const handleSendChat = async () => {
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
      body: JSON.stringify({ teamId: handleSetTeamName_teamId + 1, teamName: teamName }),
    });
  };

  // スポーンポイント設定
  const handleSetSpawnPoint = async () => {
    await fetch('/api/set_spawn_point', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teamId: handleSetSpawnPoint_teamId + 1, landmark: landmark }),
    });
  };

  return (
    <div className="flex h-full w-full items-center justify-center p-4 bg-black text-white">
        <Card className="w-full h-full flex-1 bg-black">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">コントロール</CardTitle> 
            </CardHeader>
            <CardContent className="h-full">
                <div className="grid grid-cols-1 gap-4 h-full">
                
                {/* ロビー */}
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="tokenInput"
                    placeholder="Enter lobby token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Button onClick={handleStartLobby} className="bg-white text-black">
                    <PowerIcon className="mr-2 h-5 w-5" /> ロビー作成or参加
                  </Button>
                </div>

                {/* TargetType & TargetValue */}
                <div className="grid grid-cols-3 gap-2">
                  <Select onValueChange={(value) => setTargetType(value)}>
                    <SelectTrigger className="w-full bg-gray-700 text-white">
                      <SelectValue value={targetType} placeholder="POI" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 text-white">
                      <SelectItem value="poi">POI</SelectItem>
                      <SelectItem value="name">NAME</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input
                    id="targetValueInput"
                    placeholder="Enter target value"
                    value={targetValue}
                    onChange={(e) => setTargetValue(e.target.value)}
                    className="mb-4 text-white bg-gray-700"
                  />

                  <Button onClick={handleChangeCamera} className="bg-white text-black">
                    <Cog6ToothIcon className="mr-2 h-5 w-5" /> カメラを変更
                  </Button>
                </div>

                {/* PreTimer */}
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="preTimerInput"
                    inputMode="numeric"
                    placeholder="Enter pre-timer (secound)"
                    value={preTimer}
                    onChange={(e) => {
                      const onlyNumberRegex = new RegExp(/^[0-9]*$/); // 数値ならture
                      if (onlyNumberRegex.test(e.target.value)) {
                        setPreTimer(e.target.value);; // 数値を反映する
                      }
                    }}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Button onClick={handlePauseToggle} className="bg-white text-black">
                    <Cog6ToothIcon className="mr-2 h-5 w-5" /> ポーズ切り替え
                  </Button>
                </div>

                {/* Handle Set Team */}
                <div className="grid grid-cols-4 gap-2">
                  <Input
                    id="handleSetTeamInput"
                    inputMode="numeric"
                    placeholder="Enter team ID"
                    value={handleSetTeam_teamId}
                    onChange={(e) => {
                      const onlyNumberRegex = new RegExp(/^[0-9]*$/); // 数値ならture
                      if (onlyNumberRegex.test(e.target.value)) {
                        setHandleSetTeam_teamId(e.target.value); // 数値を反映する
                      }
                    }}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Input
                    id="targetHardwareNameInput"
                    placeholder="Enter hardware name"
                    value={handleSetTeam_targetHardwareName}
                    onChange={(e) => setHandleSetTeam_targetHardwareName(e.target.value)}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Input
                    id="targetNucleushashInput"
                    placeholder="Enter nucleushash"
                    value={handleSetTeam_targetNucleushash}
                    onChange={(e) => setHandleSetTeam_targetNucleushash(e.target.value)}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Button onClick={handleSetTeam} className="bg-white text-black">
                    <UsersIcon className="mr-2 h-5 w-5" /> チーム設定
                  </Button>
                </div>

                {/* Kick Player */}
                <div className="grid grid-cols-3 gap-2">
                  <Input
                    id="kickPlayerHardwareNameInput"
                    placeholder="Enter hardware name"
                    value={handleKickPlayer_targetHardwareName}
                    onChange={(e) => setHandleKickPlayer_targetHardwareName(e.target.value)}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Input
                    id="kickPlayerNucleushashInput"
                    placeholder="Enter nucleushash"
                    value={handleKickPlayer_targetNucleushash}
                    onChange={(e) => setHandleKickPlayer_targetNucleushash(e.target.value)}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Button onClick={handleKickPlayer} className="bg-white text-black">
                    <CheckIcon className="mr-2 h-5 w-5" /> プレイヤーキック
                  </Button>
                </div>

                {/* 試合設定適用 */}
                <div className="grid grid-cols-3 gap-2">
                  <Input
                    id="matchNameInput"
                    placeholder="Enter match name"
                    value={matchName}
                    onChange={(e) => setMatchName(e.target.value)}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <div className="grid grid-cols-1 gap-2 text-white">
                    <Input
                      id="adminChatInput"
                      type="checkbox"
                      checked={adminChat}
                      onChange={(e) => setAdminChat(e.target.checked)}
                      className="mb-4"
                    /> 管理者チャット
                    <Input
                      id="teamRenameInput"
                      type="checkbox"
                      checked={teamRename}
                      onChange={(e) => setTeamRename(e.target.checked)}
                      className="mb-4"
                    /> チーム名変更
                    <Input
                      id="selfAssignInput"
                      type="checkbox"
                      checked={selfAssign}
                      onChange={(e) => setSelfAssign(e.target.checked)}
                      className="mb-4"
                    /> 自己割当
                    <Input
                      id="aimAssistInput"
                      type="checkbox"
                      checked={aimAssist}
                      onChange={(e) => setAimAssist(e.target.checked)}
                      className="mb-4"
                    /> エイムアシスト
                    <Input
                      id="anonModeInput"
                      type="checkbox"
                      checked={anonMode}
                      onChange={(e) => setAnonMode(e.target.checked)}
                      className="mb-4"
                    /> 匿名モード
                  </div>
                  <Button onClick={handleSetSettings} className="bg-white text-black">
                    <Cog6ToothIcon className="mr-2 h-5 w-5" /> 試合設定適用
                  </Button>
                </div>

                {/* チャット送信 */}
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="messageInput"
                    placeholder="Enter message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Button onClick={handleSendChat} className="bg-white text-black">
                    <CheckIcon className="mr-2 h-5 w-5" /> チャット送信
                  </Button>
                </div>

                {/* チーム名設定 */}
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="handleSetTeamInput"
                    inputMode="numeric"
                    placeholder="Enter team ID"
                    value={handleSetTeamName_teamId}
                    onChange={(e) => {
                      const onlyNumberRegex = new RegExp(/^[0-9]*$/); // 数値ならture
                      if (onlyNumberRegex.test(e.target.value)) {
                        setHandleSetTeamName_teamId(e.target.value); // 数値を反映する
                      }
                    }}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Input
                    id="teamNameInput"
                    placeholder="Enter team name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Button onClick={handleSetTeamName} className="bg-white text-black">
                    <CheckIcon className="mr-2 h-5 w-5" /> チーム名設定
                  </Button>
                </div>

                {/* スポーンポイント */}
                <div className="grid grid-cols-3 gap-2">
                  <Input
                    id="teamIdInput"
                    inputMode="numeric"
                    placeholder="Enter team ID"
                    value={handleSetSpawnPoint_teamId}
                    onChange={(e) => {
                      const onlyNumberRegex = new RegExp(/^[0-9]*$/); // 数値ならture
                      if (onlyNumberRegex.test(e.target.value)) {
                        setHandleSetSpawnPoint_teamId(e.target.value); // 数値を反映する
                      }
                    }}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Input
                    id="landmarkInput"
                    placeholder="Enter landmark"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    className="mb-4 text-white bg-gray-700"
                  />
                  <Button onClick={handleSetSpawnPoint} className="bg-white text-black">
                    <Cog6ToothIcon className="mr-2 h-5 w-5" /> スポーンポイント設定
                  </Button>
                </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
