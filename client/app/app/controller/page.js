"use client";
import dynamic from 'next/dynamic';

const Buttons = dynamic(() => import('../../../components/request/buttons'), { ssr: false });
const Inputs = dynamic(() => import('../../../components/request/inputs'), { ssr: false })

export default function Home() {

  return (
    <div className="grid grid-cols-2 gap-4">
      <Buttons />
      <Inputs />
    </div>
  );
}