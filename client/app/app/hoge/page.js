import RootLayout from '@/app/layout';

export const metadata = {
  title: 'Hoge Page - Andean',
  description: 'This is the Hoge page description',
};

export default function Home() {
  return (
    <RootLayout title="Andean | Hoge">
      <div>
        <h1>Hello from /app/hoge!</h1>
      </div>
    </RootLayout>
  );
}
