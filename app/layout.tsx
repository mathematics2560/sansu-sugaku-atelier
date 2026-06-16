import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "算数・数学のアトリエ | 無料の算数・数学学習サイト",
  description:
    "小学生の算数から大学数学まで、動画とプリントで無料で学べる算数・数学の学習サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className={`${noto.className} antialiased min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
