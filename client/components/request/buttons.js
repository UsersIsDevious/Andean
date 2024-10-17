"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button'; // shadcn/ui の Button コンポーネントをインポート

export default function Home() {
    const [ready, setReady] = useState(false);
    const [matchmaking, setMatchmaking] = useState(false);
    const [readyText, setReadyText] = useState('未準備');
    const [matchmakingText, setMatchmakingText] = useState('マッチメイキング停止')
    const [readyVariant, setReadyVariant] = useState('false')
    const [matchmakingVariant, setMatchmakingVariant] = useState('false')

    // ロビープレイヤー取得
    const handleGetLobbyPlayers = async () => {
        await fetch('/api/get_lobby_players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        });
    };

    // 試合設定の取得
    const handleGetMatchSettings = async () => {
        await fetch('/api/get_match_settings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
    };

    // 準備完了
    const handleSetReady = async () => {
        if (ready === false) {
            setReady(true);
            setReadyText('準備完了');
            setReadyVariant('true');
        } else {
            setReady(false);
            setReadyText('キャンセル');
            setReadyVariant('false');
        }
        await fetch('/api/set_ready', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ready: !ready }),
        });
    };

    // マッチメイキング設定
    const handleSetMatchmaking = async () => {
        if (matchmaking === false) {
            setMatchmaking(true);
            setMatchmakingText('マッチメイキング開始');
            setMatchmakingVariant('true');
        } else {
            setMatchmaking(false);
            setMatchmakingText('マッチメイキング停止');
            setMatchmakingVariant('false');
        }
        await fetch('/api/set_matchmaking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ matchmaking: !matchmaking }),
        });
    };

  return (
    <div>
        <div className="grid grid-cols-1 gap-1">
            <Button
                onClick={handleGetLobbyPlayers}
                className="w-full"
            >
                ロビープレイヤー取得
            </Button>
            <Button
                onClick={handleGetMatchSettings}
                className="w-full"
            >
                試合設定取得
            </Button>
            <Button
                variant={readyVariant}
                onClick={handleSetReady}
                className="w-full"
            >
                {readyText}
            </Button>
            <Button
                variant={matchmakingVariant}
                onClick={handleSetMatchmaking}
                className="w-full"
            >
                {matchmakingText}
            </Button>
        </div>
    </div>
  );
}