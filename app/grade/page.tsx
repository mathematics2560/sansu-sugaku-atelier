import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "学年から探す | 算数・数学のアトリエ",
};

const GRADES = [
  { icon: "✏️", label: "小学生の算数", sub: "1〜6年生", bg: "bg-green-50", border: "border-green-200", iconBg: "bg-green-100", text: "text-green-700", href: null },
  { icon: "📐", label: "中学生の数学", sub: "中1〜中3", bg: "bg-blue-50", border: "border-blue-200", iconBg: "bg-blue-100", text: "text-blue-700", href: "/grade/middle" },
  { icon: "📈", label: "高校数学", sub: "数学Ⅰ・A・Ⅱ・B・Ⅲ・C", bg: "bg-orange-50", border: "border-orange-200", iconBg: "bg-orange-100", text: "text-orange-700", href: "/grade/high-school" },
  { icon: "🎓", label: "大学数学", sub: "線形代数・解析学ほか", bg: "bg-purple-50", border: "border-purple-200", iconBg: "bg-purple-100", text: "text-purple-700", href: null },
];

export default function GradePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-blue-600 transition-colors">ホーム</Link>
              <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-800 font-medium">学年から探す</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">学年から探す</h1>
            <p className="text-gray-500 text-sm sm:text-base">学年・レベルを選んでください</p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {GRADES.map((g) => {
              const inner = (
                <>
                  <div className={`w-12 h-12 ${g.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                    {g.icon}
                  </div>
                  <h2 className={`font-black text-lg ${g.text} mb-1`}>{g.label}</h2>
                  <p className="text-xs text-gray-500 mb-3">{g.sub}</p>
                  {g.href ? (
                    <span className={`flex items-center gap-1 text-sm font-bold ${g.text}`}>
                      <span>プリントを見る</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-xs font-bold bg-gray-100 text-gray-400 px-2.5 py-1 rounded-full">
                      準備中
                    </span>
                  )}
                </>
              );

              return g.href ? (
                <Link
                  key={g.label}
                  href={g.href}
                  className={`group rounded-2xl border ${g.border} ${g.bg} p-6 hover:shadow-md transition-all duration-200`}
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={g.label}
                  className={`rounded-2xl border ${g.border} ${g.bg} p-6 opacity-60 cursor-not-allowed`}
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
