import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import newsData from "@/data/news.json";

export const metadata = {
  title: "お知らせ | 算数・数学のアトリエ",
};

function getTagColor(tag: string): string {
  switch (tag) {
    case "NEW":     return "bg-green-100 text-green-700";
    case "プリント": return "bg-orange-100 text-orange-700";
    case "動画":    return "bg-blue-100 text-blue-700";
    default:        return "bg-gray-100 text-gray-600";
  }
}

export default function NewsPage() {
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
              <span className="text-gray-800 font-medium">お知らせ</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">お知らせ</h1>
            <p className="text-gray-500 text-sm">全 {newsData.length} 件</p>
          </div>
        </div>

        {/* News list */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
            {newsData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-6 py-5"
              >
                <span className="text-sm text-gray-400 shrink-0 tabular-nums">{item.date}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 w-fit ${getTagColor(item.tag)}`}>
                  {item.tag}
                </span>
                <span className="text-sm text-gray-700 font-medium">{item.title}</span>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
