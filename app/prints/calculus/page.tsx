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
        filename: "微分積分_0_表紙とオリエンテーション.pdf",
      },
    ],
  },
  {
    num: "第1章",
    title: "1変数微分",
    prints: [
      {
        id: "01",
        title: "関数の極限",
        desc: "関数の極限の定義と、極限値を求める基本的な計算方法を学ぶプリントです。",
        filename: "微分積分_1_1_関数の極限.pdf",
      },
      {
        id: "02",
        title: "微分の定義",
        desc: "導関数の定義（極限による定義）と、微分可能性の意味を学ぶプリントです。",
        filename: "微分積分_1_2_微分の定義.pdf",
      },
      {
        id: "03",
        title: "微分の計算",
        desc: "積の微分・商の微分・合成関数の微分など、微分の計算規則を練習するプリントです。",
        filename: "微分積分_1_3_微分の計算.pdf",
      },
      {
        id: "04",
        title: "平均値の定理",
        desc: "ロルの定理・平均値の定理の内容と、その応用を学ぶプリントです。",
        filename: "微分積分_1_4_平均値の定理.pdf",
      },
      {
        id: "05",
        title: "テイラー展開",
        desc: "テイラー展開・マクローリン展開の考え方と、関数の近似への応用を学ぶプリントです。",
        filename: "微分積分_1_5_テイラー展開.pdf",
      },
    ],
  },
  {
    num: "第2章",
    title: "1変数積分",
    prints: [
      {
        id: "01",
        title: "不定積分",
        desc: "不定積分の定義と、基本的な関数の不定積分を求める練習をするプリントです。",
        filename: "微分積分_2_1_不定積分.pdf",
      },
      {
        id: "02",
        title: "定積分",
        desc: "定積分の定義と、微分積分学の基本定理を学ぶプリントです。",
        filename: "微分積分_2_2_定積分.pdf",
      },
      {
        id: "03",
        title: "置換積分と部分積分",
        desc: "置換積分法・部分積分法による積分計算を練習するプリントです。",
        filename: "微分積分_2_3_置換積分と部分積分.pdf",
      },
      {
        id: "04",
        title: "広義積分",
        desc: "積分区間が無限または被積分関数が発散する場合の広義積分を学ぶプリントです。",
        filename: "微分積分_2_4_広義積分.pdf",
      },
    ],
  },
  {
    num: "第3章",
    title: "偏微分",
    prints: [
      {
        id: "01",
        title: "多変数関数と偏微分",
        desc: "多変数関数の定義と、偏微分の意味・計算方法を学ぶプリントです。",
        filename: "微分積分_3_1_多変数関数と偏微分.pdf",
      },
      {
        id: "02",
        title: "全微分",
        desc: "全微分の定義と、偏微分との関係を学ぶプリントです。",
        filename: "微分積分_3_2_全微分.pdf",
      },
      {
        id: "03",
        title: "合成関数の偏微分",
        desc: "合成関数の偏微分（連鎖律）の計算方法を練習するプリントです。",
        filename: "微分積分_3_3_合成関数の偏微分.pdf",
      },
      {
        id: "04",
        title: "テイラー展開（多変数）",
        desc: "多変数関数のテイラー展開の考え方を学ぶプリントです。",
        filename: "微分積分_3_4_テイラー展開（多変数）.pdf",
      },
      {
        id: "05",
        title: "極値問題",
        desc: "多変数関数の極値の求め方と、ヘッセ行列を用いた判定方法を学ぶプリントです。",
        filename: "微分積分_3_5_極値問題.pdf",
      },
    ],
  },
  {
    num: "第4章",
    title: "重積分",
    prints: [
      {
        id: "01",
        title: "二重積分",
        desc: "二重積分の定義と、長方形領域における計算方法を学ぶプリントです。",
        filename: "微分積分_4_1_二重積分.pdf",
      },
      {
        id: "02",
        title: "累次積分",
        desc: "累次積分による二重積分の計算と、積分順序の交換を練習するプリントです。",
        filename: "微分積分_4_2_累次積分.pdf",
      },
      {
        id: "03",
        title: "変数変換",
        desc: "重積分における変数変換（ヤコビアン）の考え方を学ぶプリントです。",
        filename: "微分積分_4_3_変数変換.pdf",
      },
      {
        id: "04",
        title: "三重積分",
        desc: "三重積分の定義と計算方法を学ぶプリントです。",
        filename: "微分積分_4_4_三重積分.pdf",
      },
    ],
  },
];

const TOTAL_PRINTS = CHAPTERS.reduce((sum, ch) => sum + ch.prints.length, 0);

function ChapterSection({ chapter }: { chapter: Chapter }) {
  return (
    <section id={chapterAnchorId(chapter)} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-2">
          {chapter.num && (
            <span className="bg-purple-100 text-purple-700 text-xs font-black px-2.5 py-1 rounded-full">
              {chapter.num}
            </span>
          )}
          <h2 className="text-xl font-black text-gray-900">{chapter.title}</h2>
        </div>
        <div className="h-px flex-1 border-t border-gray-200" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {chapter.prints.map((p, i) => (
          <PrintCard key={i} p={p} downloadBase="/prints/Calculus" id={printAnchorId(chapter, i)} />
        ))}
      </div>
    </section>
  );
}

export default function CalculusPage() {
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
              <span className="text-gray-800 font-medium">微分積分</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-full">大学数学</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">微分積分</h1>
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
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-purple-300 hover:shadow-sm transition-all duration-150"
              >
                {chapter.num && (
                  <span className="text-xs font-black bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
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
