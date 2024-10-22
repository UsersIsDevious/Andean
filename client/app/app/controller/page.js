"use client";
import RootLayout from '@/app/layout';
import dynamic from 'next/dynamic';
import ApiButton from "@/components/request/ApiButton";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Buttons = dynamic(() => import('../../../components/request/buttons'), { ssr: false });
const Inputs = dynamic(() => import('../../../components/request/inputs'), { ssr: false })

export default function Home() {

  return (
    <>
      <RootLayout title="Andean | controller">
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="switcher">Viewスイッチ</TabsTrigger>
            <TabsTrigger value="inGame">ゲームコントロール</TabsTrigger>
            <TabsTrigger value="config">設定</TabsTrigger>
          </TabsList>
          <TabsContent value="switcher">
            <Card>
              <ApiButton
                apiEndpoint="/api/view"
                buttonText="送信する"
                // icon={CheckCircleIcon}  // 任意のアイコン
                className="custom-button"
                successDuration={3000}  // 実行済みの表示時間を3秒に設定
              />
            </Card>
          </TabsContent>
          <TabsContent value="inGame">
            <div className="grid grid-cols-2 gap-4">
              <Buttons />
              <Inputs />
            </div>
          </TabsContent>
          <TabsContent value="config">Make changes to your account here.</TabsContent>
        </Tabs>
      </RootLayout>
    </>
  );
}