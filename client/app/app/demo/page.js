"use client"
import RootLayout from '@/app/layout';
//import { Badge } from "../../../components/badge"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ApiButton, { TogglingApiButton } from '@/components/request/ApiButton';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import PlayerInfo from '@/components/player/player';

const player = {
    name: "プレイヤー1",
    characterName: "レイス",
    characterImage: "/path/to/image.jpg", // 実際の画像のパスに変更
    kills: 5,
    assists: 3,
    knockdowns: 2,
    revives: 1,
    damageDealt: 1500,
    damageReceived: 1000,
    lastUpdated: "2024-10-23",
  };
export default function Home() {
    return (
        <>
            <RootLayout title="Andean | demo">
                <div>
                    <h1>Hello from /app/demo!</h1>
                </div>
                <Button>Click me</Button>
                <Badge>Badge</Badge>
                <div>
                    <h1>APIリクエストボタン</h1>

                    {/* 通常のApiButton */}
                    <ApiButton
                        apiEndpoint="/api/send-request"
                        buttonText="送信する"
                        // icon={CheckCircleIcon}  // 任意のアイコン
                        className="custom-button"
                        successDuration={3000}  // 実行済みの表示時間を3秒に設定
                    />

                    {/* true/false 状態を持つTogglingApiButton */}
                    <TogglingApiButton
                        apiEndpoint="/api/toggle-state"
                        trueText="有効"   // trueの時のテキスト
                        falseText="無効"  // falseの時のテキスト
                        trueIcon={CheckCircleIcon}  // trueの時のアイコン
                        falseIcon={XCircleIcon}     // falseの時のアイコン
                        initialState={false}  // 初期状態をfalseに設定
                        className="custom-button"
                    />
                </div>
                <PlayerInfo player={player} />
            </RootLayout >
        </>
    );
};
