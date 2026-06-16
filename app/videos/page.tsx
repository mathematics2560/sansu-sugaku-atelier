import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "動画一覧 | 算数・数学のアトリエ",
  description: "算数・数学のアトリエの動画授業一覧です。YouTubeで無料公開しています。",
};

export default function VideosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        {/* Page header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-blue-600 transition-colors">ホーム</Link>
              <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-800 font-medium">動画一覧</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">動画一覧</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              算数・数学のアトリエの動画授業です。YouTubeで無料公開しています。
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12">
          {/* YouTube CTA */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
              🎬
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">
              YouTubeで動画を無料公開中
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
              動画は順次追加予定です。<br className="hidden sm:block" />
              YouTubeチャンネルでご覧ください。
            </p>
            <a
              href="https://www.youtube.com/@mathematics.256/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-sm text-sm sm:text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-2.75 12.64 12.64 0 00-8.45 0A4.83 4.83 0 013.6 6.69 28.06 28.06 0 003 12a28.06 28.06 0 00.6 5.31 4.83 4.83 0 003.77 2.75 12.64 12.64 0 008.45 0 4.83 4.83 0 003.77-2.75A28.06 28.06 0 0021 12a28.06 28.06 0 00-.41-5.31zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
              <span>YouTubeチャンネルを見る</span>
            </a>
            <p className="mt-4 text-xs text-gray-400">
              外部サイト（YouTube）に移動します
            </p>
          </div>

          {/* Coming soon notice */}
          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-blue-700 text-sm font-medium">
              🚀 このページには今後、埋め込み動画プレイヤーを追加予定です。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
