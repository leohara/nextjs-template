// src/app/layout.tsx
import './globals.css'; // 後で作成するグローバルCSSをインポート

export const metadata = {
  title: 'My Manual Next.js App',
  description: 'A Next.js app setup without create-next-app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
