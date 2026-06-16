import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/grade", label: "学年から探す" },
  { href: "/topics", label: "単元から探す" },
  { href: "/prints", label: "プリント一覧" },
  { href: "/how-to-learn", label: "学び方" },
  { href: "/faq", label: "よくある質問" },
  { href: "/news", label: "お知らせ" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/privacy", label: "プライバシーポリシー" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between">
          {/* Brand */}
          <div className="shrink-0">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
                <span className="text-white font-black text-base select-none">数</span>
              </div>
              <span className="font-black text-white text-base">算数・数学のアトリエ</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              小学生の算数から大学数学まで、<br />
              動画とプリントで無料で学べる<br />
              算数・数学の学習サイトです。
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              <span>🎁</span>
              <span>動画もプリントも全部無料</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">サイトマップ</h3>
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-600">
          © 算数・数学のアトリエ All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
