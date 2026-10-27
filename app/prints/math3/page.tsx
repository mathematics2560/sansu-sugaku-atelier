import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Print, PrintCard } from "@/components/PrintCard";
import { chapterAnchorId, printAnchorId } from "@/lib/printAnchors";

export type Chapter = {
  num: string;
  title: string;
  prints: Print[];
};

export const CHAPTERS: Chapter[] = [
  {
    num: "",
    title: "オリエンテーション",
    prints: [
      {
        id: "00",
        title: "表紙とオリエンテーション",
        desc: "この教材の構成と進め方を紹介するオリエンテーションプリントです。",
        filename: "math3_0_orientation.pdf",
      },
    ],
  },
  {
    num: "第1章",
    title: "関数",
    prints: [
      {
        id: "01",
        title: "分数関数",
        desc: "y=k/(x−p)+q の形の分数関数のグラフの描き方と、漸近線の求め方を学ぶプリントです。",
        filename: "math3_1_No01.pdf",
      },
      {
        id: "02",
        title: "無理関数",
        desc: "y=√(ax+b) の形の無理関数のグラフの描き方と、定義域の求め方を学ぶプリントです。",
        filename: "math3_1_No02.pdf",
      },
      {
        id: "03",
        title: "グラフを使った方程式・不等式",
        desc: "グラフを利用して分数方程式・無理方程式を解く方法と、共有点の個数の求め方を学ぶプリントです。",
        filename: "math3_1_No03.pdf",
      },
      {
        id: "04",
        title: "逆関数",
        desc: "逆関数の求め方と、元の関数のグラフと y=x に関して対称になることを学ぶプリントです。",
        filename: "math3_1_No04.pdf",
      },
      {
        id: "05",
        title: "合成関数",
        desc: "合成関数 (g∘f)(x) の意味と、合成する順番に注意した計算方法を学ぶプリントです。",
        filename: "math3_1_No05.pdf",
      },
    ],
  },
  {
    num: "第2章",
    title: "極限",
    prints: [],
  },
  {
    num: "第3章",
    title: "微分法",
    prints: [],
  },
  {
    num: "第4章",
    title: "微分法の応用",
    prints: [],
  },
  {
    num: "第5章",
    title: "積分法",
    prints: [],
  },
  {
    num: "第6章",
    title: "積分法の応用",
    prints: [],
  },
];

const TOTAL_PRINTS = CHAPTERS.reduce((sum, ch) => sum + ch.prints.length, 0);

function ChapterSection({ chapter }: { chapter: Chapter }) {
  return (
    <section id={chapterAnchorId(chapter)} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-2">
          {chapter.num && (
            <span className="bg-orange-100 text-orange-700 text-xs font-black px-2.5 py-1 rounded-full">
              {chapter.num}
            </span>
          )}
          <h2 className="text-xl font-black text-gray-900">{chapter.title}</h2>
        </div>
        <div className="h-px flex-1 border-t border-gray-200" />
      </div>
      {chapter.prints.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {chapter.prints.map((p, i) => (
            <PrintCard key={i} p={p} downloadBase="/prints/math3" id={printAnchorId(chapter, i)} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded-2xl py-10">
          <span className="text-sm font-bold bg-white text-gray-400 border border-gray-200 px-4 py-1.5 rounded-full">
            準備中
          </span>
        </div>
      )}
    </section>
  );
}

export default function Math3Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        {/* Page header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-5 flex-wrap">
              <Link href="/" className="hover:text-blue-600 transition-colors">ホーム</Link>
              <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/prints" className="hover:text-blue-600 transition-colors">コンテンツ一覧</Link>
              <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-800 font-medium">高校数学Ⅲ</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">高校数学</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">高校数学Ⅲ</h1>
            <p className="text-gray-500 text-sm">
              全 {CHAPTERS.length - 1} 章収録・プリント {TOTAL_PRINTS} 枚
            </p>
          </div>
        </div>

        {/* Terms notice */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
            <p className="text-sm text-amber-800">
              プリントをご利用の前に、利用規約をご確認ください。
            </p>
            <Link
              href="/terms-of-use"
              className="shrink-0 inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
            >
              利用規約を見る
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Unit navigation */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pt-6">
          <div className="flex flex-wrap gap-2.5">
            {CHAPTERS.map((chapter) => (
              <a
                key={chapter.num || chapter.title}
                href={`#${chapterAnchorId(chapter)}`}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-orange-300 hover:shadow-sm transition-all duration-150"
              >
                {chapter.num && (
                  <span className="text-xs font-black bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                    {chapter.num}
                  </span>
                )}
                <span className="text-sm font-medium text-gray-700">{chapter.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Chapters */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 space-y-12">
          {CHAPTERS.map((chapter) => (
            <ChapterSection key={chapter.num || chapter.title} chapter={chapter} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
