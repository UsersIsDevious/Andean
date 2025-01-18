'use client'

import { useState, useEffect, useCallback } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle, XCircle, Play, Pause, Clock, Send } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import { GradientButton } from "../ui/GradientButton"
import { SettingInput } from "../ui/SettingInput"
import { TOTAL_TEAMS } from '../../../config/constants'
import Cookies from 'js-cookie'
import { GradientCard } from '../common/GradientCard'
import { AdminOnlySection } from '../common/AdminOnlySection'

export default function MatchManagement() {
  const { toast } = useToast();
  
  if (!toast) {
    console.error('Toast object is null or undefined');
    return null; 
  }

  const [killPoints, setKillPoints] = useState(1)
  const [maxKills, setMaxKills] = useState(20)
  const [rankPoints, setRankPoints] = useState(Array(TOTAL_TEAMS).fill(0))
  const [lobbyId, setLobbyId] = useState("")
  const [matchmaking, setMatchmaking] = useState(false)
  const [matchmakingText, setMatchmakingText] = useState('マッチメイキング開始')
  const [matchmakingVariant, setMatchmakingVariant] = useState('false')
  const [pauseTimer, setPauseTimer] = useState(5)
  const [isPaused, setIsPaused] = useState(false)
  const [ready, setReady] = useState(false); // Added state for ready status

  const handleRankPointChange = (index, value) => {
    const newRankPoints = [...rankPoints];
    newRankPoints[index] = value;
    setRankPoints(newRankPoints);
  }

  const handleCreateJoinLobby = async () => {
    try {
      if (lobbyId === "") {
        const response = await fetch('/api/create_lobby', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setLobbyId(data.token);
          toast({
            title: "ロビー作成成功",
            description: `新しいロビーが作成されました。ロビーID: ${data.token}`,
          });
        } else {
          throw new Error('Failed to create lobby');
        }
      } else {
        const response = await fetch('/api/join_lobby', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: lobbyId }),
        });
        if (response.ok) {
          toast({
            title: "ロビー参加成功",
            description: `ロビーID: ${lobbyId} に参加しました。`,
          });
        } else {
          throw new Error('Failed to join lobby');
        }
      }
      handleGetMatchSettings();
    } catch (error) {
      console.error('Error creating/joining lobby:', error);
      toast({
        title: "エラー",
        description: "ロビーの作成または参加中にエラーが発生しました。",
        variant: "destructive",
      });
    }
  };

  const handleGetMatchSettings = useCallback(async () => {
    try {
      const response = await fetch('/api/get_match_settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        setKillPoints(data.killPoints ?? 1);
        setMaxKills(data.maxKills ?? 20);
        setRankPoints(data.rankPoints ?? Array(TOTAL_TEAMS).fill(0));
        setLobbyId(data.lobbyId ?? "");
        setReady(data.ready ?? false); // Update ready status
      } else {
        throw new Error('Failed to fetch match settings');
      }
    } catch (error) {
      console.error('Error fetching match settings:', error);
      toast({
        title: "エラー",
        description: "試合設定の取得中にエラーが発生しました。",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    handleGetMatchSettings();
    const interval = setInterval(handleGetMatchSettings, 1000);
    return () => clearInterval(interval);
  }, [handleGetMatchSettings, toast]);

  useEffect(() => {
    Cookies.set('lobbyId', lobbyId, { expires: 7 })
  }, [lobbyId])

  const handleSetMatchmaking = async () => {
    try {
      setMatchmakingText('処理中...');
      const response = await fetch('/api/set_matchmaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matchmaking: !matchmaking }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.setMatchmaking) {
          setMatchmaking(true);
          setMatchmakingText('マッチメイキング停止');
          setMatchmakingVariant('true');
        } else {
          setMatchmaking(false);
          setMatchmakingText('マッチメイキング開始');
          setMatchmakingVariant('false');
        }
      } else {
        throw new Error('Failed to set matchmaking');
      }
    } catch (error) {
      console.error('Error setting matchmaking:', error);
      toast({
        title: "エラー",
        description: "マッチメイキングの設定中にエラーが発生しました。",
        variant: "destructive",
      });
      setMatchmakingText(matchmaking ? 'マッチメイキング停止' : 'マッチメイキング開始');
    }
  };

  const handleSetReady = async () => {
    try {
      const response = await fetch('/api/set_ready', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ready: true }),
      });
      if (response.ok) {
        const data = await response.json();
        toast({
          title: "準備ステータス",
          description: data.message || "準備ステータスが切り替えられました。",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error setting ready status:', error);
      toast({
        title: "エラー",
        description: `準備状態の設定中にエラーが発生しました: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const handlePauseToggle = async () => {
    try {
      const response = await fetch('/api/pause_toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preTimer: pauseTimer }),
      });
      if (response.ok) {
        setIsPaused(!isPaused);
        toast({
          title: isPaused ? "ゲーム再開" : "ゲームポーズ",
          description: isPaused ? "ゲームが再開されました。" : `${pauseTimer}秒後にゲームがポーズされます。`,
        });
      } else {
        throw new Error('Failed to toggle pause');
      }
    } catch (error) {
      console.error('Error toggling pause:', error);
      toast({
        title: "エラー",
        description: "ゲームポーズの切り替え中にエラーが発生しました。",
        variant: "destructive",
      });
    }
  };

  return (
    <GradientCard title="マッチ管理">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <GradientButton
              onClick={handleSetReady}
              fromColor="blue-500"
              toColor="indigo-500"
              hoverFromColor="blue-600"
              hoverToColor="indigo-600"
              icon={Send}
              className="w-full h-full min-h-[60px] text-lg font-semibold"
            >
              準備ステータスの切り替え
            </GradientButton>
          </div>
        </div>

        <AdminOnlySection>
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-1">
              <GradientButton
                onClick={handleSetMatchmaking}
                fromColor={matchmakingVariant === 'true' ? "red-500" : "blue-500"}
                toColor={matchmakingVariant === 'true' ? "pink-500" : "indigo-500"}
                hoverFromColor={matchmakingVariant === 'true' ? "red-600" : "blue-600"}
                hoverToColor={matchmakingVariant === 'true' ? "pink-600" : "indigo-600"}
                icon={matchmakingVariant === 'true' ? Pause : Play}
                className="w-full h-full min-h-[60px] text-lg font-semibold"
              >
                {matchmakingText}
              </GradientButton>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-grow flex items-center space-x-2">
                <Label htmlFor="pauseTimer" className="text-gray-300 whitespace-nowrap">ポーズまでの猶予時間（秒）</Label>
                <Input
                  id="pauseTimer"
                  type="number"
                  min="0"
                  value={pauseTimer}
                  onChange={(e) => setPauseTimer(Number(e.target.value))}
                  className="w-20 bg-white/10 border-none text-white"
                />
              </div>
              <GradientButton
                onClick={handlePauseToggle}
                fromColor={isPaused ? "green-500" : "red-500"}
                toColor={isPaused ? "emerald-500" : "pink-500"}
                hoverFromColor={isPaused ? "green-600" : "red-600"}
                hoverToColor={isPaused ? "emerald-600" : "pink-600"}
                icon={Clock}
                className="h-full min-h-[40px] text-sm font-semibold whitespace-nowrap"
              >
                {isPaused ? "ゲーム再開" : "ゲームポーズ"}
              </GradientButton>
            </div>
          </div>
        </AdminOnlySection>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-300">ロビー管理</h3>
        <div className="flex space-x-2">
          <Input
            placeholder="ロビーIDを入力またはロビー作成"
            value={lobbyId}
            onChange={(e) => setLobbyId(e.target.value)}
            className="flex-grow bg-white/10 border-none text-white placeholder-gray-400"
          />
          <GradientButton
            onClick={handleCreateJoinLobby}
            fromColor="purple-500"
            toColor="indigo-500"
            hoverFromColor="purple-600"
            hoverToColor="indigo-600"
          >
            {lobbyId === "" ? "ロビー作成" : "ロビー参加"}
          </GradientButton>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-300">マッチ設定</h3>

        <div className="grid grid-cols-2 gap-4">
          <SettingInput
            id="killPoints"
            label="1キルあたりのポイント"
            value={killPoints}
            onChange={setKillPoints}
            type="number"
            min={0}
          />
          <SettingInput
            id="maxKills"
            label="上限キル数"
            value={maxKills}
            onChange={setMaxKills}
            type="number"
            min={0}
          />
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-300">順位ポイント設定</h4>
          <ScrollArea className="h-[300px] w-full border border-gray-700 rounded-md p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
              {rankPoints.map((points, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Label htmlFor={`rank-${index + 1}`} className="w-14 text-gray-300">{index + 1}位:</Label>
                  <Input 
                    type="number" 
                    id={`rank-${index + 1}`}
                    value={points} 
                    onChange={(e) => handleRankPointChange(index, Number(e.target.value))}
                    min={0}
                    className="w-20 bg-white/10 border-none text-white"
                  />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </GradientCard>
  )
}

