import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "学び方 | 算数・数学のアトリエ",
};

export default function HowToLearnPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4 py-20 max-w-sm">
          <div className="text-6xl mb-6">🚧</div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">学び方</h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            このページは現在準備中です。<br />しばらくお待ちください。
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-sm text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ホームに戻る
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
