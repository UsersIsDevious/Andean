"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';  
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { PowerIcon, PlayIcon, UsersIcon, Cog6ToothIcon, CheckIcon, NoSymbolIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/solid';

export default function Home() {
    const [executed, setExecuted] = useState({});
    const [ready, setReady] = useState(false);
    const [matchmaking, setMatchmaking] = useState(false);
    const [readyText, setReadyText] = useState('未準備');
    const [matchmakingText, setMatchmakingText] = useState('マッチメイキング停止');
    const [readyVariant, setReadyVariant] = useState('false');
    const [matchmakingVariant, setMatchmakingVariant] = useState('false');

    const triggerTemporaryChange = (buttonKey, duration = 3000) => {
        setExecuted(prevState => ({
            ...prevState,
            [buttonKey]: true
        }));

        setTimeout(() => {
            setExecuted(prevState => ({
                ...prevState,
                [buttonKey]: false
            }));
        }, duration);
    };

    const handleStopServer = () => {
        triggerTemporaryChange('stopServer');
        fetch('/stopServer', { method: 'POST' })
        .then(response => {
            if (response.ok) window.close();
            else alert('サーバーの停止に失敗しました。');
        })
        .catch(error => {
            console.error('サーバー停止リクエストに失敗しました:', error);
            alert('サーバーの停止に失敗しました。');
        });
    };

    const handleStartGame = () => {
        triggerTemporaryChange('startGame');
        fetch('/startGame', { method: 'POST' })
        .then(response => {
            if (!response.ok) alert('ゲームを起動に失敗しました。');
        })
        .catch(error => {
            console.error('ゲーム起動リクエストに失敗しました:', error);
            alert('ゲームを起動に失敗しました。');
        });
    };

    const handleGetLobbyPlayers = async () => {
        triggerTemporaryChange('getLobbyPlayers');
        await fetch('/api/get_lobby_players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        });
    };

    const handleGetMatchSettings = async () => {
        triggerTemporaryChange('getMatchSettings');
        await fetch('/api/get_match_settings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
    };

    const handleSetReady = async () => {
        if (ready === false) {
            setReady(true);
            setReadyText('準備完了');
            setReadyVariant('true');
        } else {
            setReady(false);
            setReadyText('未準備');
            setReadyVariant('false');
        }
        await fetch('/api/set_ready', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ready: !ready }),
        });
    };

    const handleSetMatchmaking = async () => {
        if (matchmaking === false) {
            setMatchmaking(true);
            setMatchmakingText('マッチメイキング中・・・');
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
    <div className="flex h-full w-full items-center justify-center p-4 bg-black text-white">
        <Card className="w-full h-full flex-1 bg-black">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">コントロール</CardTitle> 
            </CardHeader>
            <CardContent className="h-full">
                <div className="grid grid-cols-1 gap-4 h-full">
                    {/* サーバーシャットダウン */}
                    <Button
                        onClick={handleStopServer}
                        className="h-full flex-1 bg-white text-black border border-black hover:bg-gray-200"
                        style={{ borderWidth: "1px" }}
                    >
                        {executed['stopServer'] ? (
                            <>実行済み <CheckIcon className="ml-2 h-5 w-5" /></>
                        ) : (
                            <>
                                <PowerIcon className="mr-2 h-5 w-5" /> サーバーシャットダウン
                            </>
                        )}
                    </Button>

                    {/* ゲーム起動 */}
                    <Button
                        onClick={handleStartGame}
                        className="h-full flex-1 bg-white text-black border border-black hover:bg-gray-200"
                        style={{ borderWidth: "1px" }}
                    >
                        {executed['startGame'] ? (
                            <>実行済み <CheckIcon className="ml-2 h-5 w-5" /></>
                        ) : (
                            <>
                                <PlayIcon className="mr-2 h-5 w-5" /> ゲーム起動
                            </>
                        )}
                    </Button>

                    {/* ロビープレイヤー取得 */}
                    <Button
                        onClick={handleGetLobbyPlayers}
                        className="h-full flex-1 bg-white text-black border border-black hover:bg-gray-200"
                        style={{ borderWidth: "1px" }}
                    >
                        {executed['getLobbyPlayers'] ? (
                            <>実行済み <CheckIcon className="ml-2 h-5 w-5" /></>
                        ) : (
                            <>
                                <UsersIcon className="mr-2 h-5 w-5" /> ロビープレイヤー取得
                            </>
                        )}
                    </Button>

                    {/* 試合設定取得 */}
                    <Button
                        onClick={handleGetMatchSettings}
                        className="h-full flex-1 bg-white text-black border border-black hover:bg-gray-200"
                        style={{ borderWidth: "1px" }}
                    >
                        {executed['getMatchSettings'] ? (
                            <>実行済み <CheckIcon className="ml-2 h-5 w-5" /></>
                        ) : (
                            <>
                                <Cog6ToothIcon className="mr-2 h-5 w-5" /> 試合設定取得
                            </>
                        )}
                    </Button>

                    {/* 準備完了 */}
                    <Button
                        variant={readyVariant}
                        onClick={handleSetReady}
                        className={`h-full flex-1 bg-white text-black border border-black hover:bg-gray-200`}
                        style={{ borderWidth: "1px" }}
                    >
                        {ready ? <CheckIcon className="mr-2 h-5 w-5 text-green-600" /> : <NoSymbolIcon className="mr-2 h-5 w-5 text-red-600" />} {readyText}
                    </Button>

                    {/* マッチメイキング */}
                    <Button
                        variant={matchmakingVariant}
                        onClick={handleSetMatchmaking}
                        className={`h-full flex-1 bg-white text-black border border-black hover:bg-gray-200`}
                        style={{ borderWidth: "1px" }}
                    >
                        <ArrowsRightLeftIcon className={`mr-2 h-5 w-5 ${matchmaking ? 'text-green-600' : 'text-red-600'}`} /> {matchmakingText}
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
