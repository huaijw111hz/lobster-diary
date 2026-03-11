import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // 仅在Server Component中导入

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lobster Diary',
  description: 'Your Diary App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
