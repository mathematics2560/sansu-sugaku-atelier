import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "中学生の数学 | 算数・数学のアトリエ",
};

type Subject = {
  label: string;
  href: string | null;
};

const SUBJECTS: Subject[] = [
  { label: "中学1年生", href: "/prints/chu1" },
  { label: "中学2年生", href: null },
  { label: "中学3年生", href: null },
];

export default function MiddleSchoolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        {/* Page header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4 flex-wrap">
              <Link href="/" className="hover:text-blue-600 transition-colors">ホーム</Link>
              <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/grade" className="hover:text-blue-600 transition-colors">学年から探す</Link>
              <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-800 font-medium">中学生の数学</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">中学生の数学</h1>
            <p className="text-gray-500 text-sm sm:text-base">学年を選んでください</p>
          </div>
        </div>

        {/* Subject cards */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SUBJECTS.map((s) =>
              s.href ? (
                <Link
                  key={s.label}
                  href={s.href}
                  className="group flex flex-col items-center justify-center gap-2 bg-white border-2 border-blue-400 rounded-2xl px-4 py-8 shadow-sm hover:shadow-md hover:bg-blue-50 hover:border-blue-500 transition-all duration-200 text-center"
                >
                  <span className="font-black text-blue-700 text-xl">{s.label}</span>
                  <span className="text-xs font-bold text-blue-500 flex items-center gap-0.5">
                    <span>プリントを見る</span>
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ) : (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-8 cursor-not-allowed opacity-50 text-center"
                >
                  <span className="font-bold text-gray-500 text-xl">{s.label}</span>
                  <span className="text-xs font-bold bg-gray-100 text-gray-400 px-2.5 py-1 rounded-full">
                    準備中
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
