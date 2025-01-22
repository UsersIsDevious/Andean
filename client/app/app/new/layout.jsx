import "./globals.css"

export const metadata = {
  title: "Control Panel",
  description: "Game Control Panel",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

