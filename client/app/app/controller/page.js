"use client";
import dynamic from 'next/dynamic';

const Buttons = dynamic(() => import('../../../components/request/buttons'), { ssr: false });

export default function Home() {

  return (
    <Buttons />
  );
}