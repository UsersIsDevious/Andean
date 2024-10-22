import '../styles/globals.css';

export default function RootLayout({ children, title }) {
  return (
    <html lang="ja">
      <head>
        <title>{title || 'Andean'}</title>
        <meta name="description" content="Created by UID" />
      </head>
      <body>{children}</body>
    </html>
  );
}