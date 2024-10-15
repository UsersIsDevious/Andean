import '../styles/globals.css';
export const metadata = {
  title: 'Andean',
  description: 'Create by UID',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
