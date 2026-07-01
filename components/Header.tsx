"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/grade", label: "学年から探す" },
  { href: "/topics", label: "単元から探す" },
  { href: "/prints", label: "コンテンツ一覧" },
  { href: "/how-to-learn", label: "学び方" },
  { href: "/faq", label: "よくある質問" },
  { href: "/news", label: "お知らせ" },
  { href: "/about", label: "自己紹介" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/images/logo.png"
              alt="算数・数学のアトリエ"
              width={1254}
              height={1254}
              priority
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Badge + Hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm select-none">
              <span>🎁</span>
              <span>動画もプリントも全部無料</span>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="メニューを開く"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="xl:hidden border-t border-gray-100 py-3 pb-4">
            <div className="flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-4 py-2.5 rounded-xl mb-3 sm:hidden">
              <span>🎁</span>
              <span>動画もプリントも全部無料</span>
            </div>
            <nav className="flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2.5 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
