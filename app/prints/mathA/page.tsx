import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Print, PrintCard } from "@/components/PrintCard";
import { ChapterSummary, ChapterSummaryCard } from "@/components/ChapterSummaryCard";

type Chapter = {
  num: string;
  title: string;
  prints: Print[];
  summary?: ChapterSummary;
};

const CHAPTERS: Chapter[] = [
  {
    num: "第1章",
    title: "場合の数",
    prints: [
      {
        id: "01",
        title: "集合・要素・共通部分・和集合",
        desc: "集合の表し方、要素の記号（∈, ∉）、共通部分（∩）と和集合（∪）の基礎を練習するプリントです。",
        filename: "1_場合の数_No.1.pdf",
      },
      {
        id: "02",
        title: "部分集合・補集合・ド・モルガン・集合の個数",
        desc: "部分集合（⊂）、補集合、ド・モルガンの法則、n(A∪B) の包除原理を練習するプリントです。",
        filename: "1_場合の数_No.2.pdf",
      },
      {
        id: "03",
        title: "樹形図・和の法則・積の法則",
        desc: "樹形図を使った数え上げと、和の法則・積の法則の使い分けを練習するプリントです。",
        filename: "1_場合の数_No.3.pdf",
      },
      {
        id: "04",
        title: "順列（P）",
        desc: "nPr の意味と計算方法、代表的な順列問題を収録したプリントです。",
        filename: "1_場合の数_No.4.pdf",
      },
      {
        id: "05",
        title: "円順列・重複順列",
        desc: "円順列と重複順列の公式・考え方を整理した練習プリントです。",
        filename: "1_場合の数_No.5.pdf",
      },
      {
        id: "06",
        title: "組合せ（C）",
        desc: "nCr の意味と計算方法、順列との違いを整理した練習プリントです。",
        filename: "1_場合の数_No.6.pdf",
      },
      {
        id: "07",
        title: "同じものを含む順列・重複組合せ",
        desc: "同じものを含む順列の計算と、重複組合せ（H）の考え方を学ぶプリントです。",
        filename: "1_場合の数_No.7.pdf",
      },
    ],
    summary: {
      filename: "1_場合の数.pdf",
    },
  },
  {
    num: "第2章",
    title: "確率",
    prints: [
      {
        id: "01",
        title: "確率の定義と基本性質",
        desc: "確率の意味・「同様に確からしい」の考え方・確率の基本性質を整理した基礎プリントです。",
        filename: "2_確率_No.1.pdf",
      },
      {
        id: "02",
        title: "余事象・排反事象・独立試行",
        desc: "余事象の確率、排反事象の加法定理、独立な試行の確率を練習するプリントです。",
        filename: "2_確率_No.2.pdf",
      },
      {
        id: "03",
        title: "反復試行の確率",
        desc: "反復試行の確率（二項確率）の公式と代表的な問題を収録したプリントです。",
        filename: "2_確率_No.3.pdf",
      },
      {
        id: "04",
        title: "条件付き確率",
        desc: "P(B|A) の意味と計算、樹形図を使った整理方法を学ぶプリントです。",
        filename: "2_確率_No.4.pdf",
      },
      {
        id: "05",
        title: "期待値",
        desc: "確率変数の期待値の意味と計算方法を学ぶプリントです。",
        filename: "2_確率_No.5.pdf",
      },
    ],
    summary: {
      filename: "2_確率.pdf",
    },
  },
  {
    num: "第3章",
    title: "図形の性質",
    prints: [
      {
        id: "01",
        title: "線分の内分・外分と角の二等分線",
        desc: "線分の内分・外分の定義、平行線と線分の比、内角・外角の二等分線と比の定理を学ぶプリントです。",
        filename: "3_図形の性質_No.1.pdf",
      },
      {
        id: "02",
        title: "三角形の五心（外心・内心・垂心・重心・傍心）",
        desc: "三角形の外心・内心・垂心・重心・傍心の定義と性質を整理したプリントです。",
        filename: "3_図形の性質_No.2.pdf",
      },
      {
        id: "03",
        title: "メネラウスの定理・チェバの定理",
        desc: "メネラウスの定理とチェバの定理の公式と、辺の比を求める応用問題を収録したプリントです。",
        filename: "3_図形の性質_No.3.pdf",
      },
      {
        id: "04",
        title: "接弦定理・方べきの定理",
        desc: "接弦定理の証明と方べきの定理（3パターン）の公式・応用問題を扱うプリントです。",
        filename: "3_図形の性質_No.4.pdf",
      },
      {
        id: "05",
        title: "正多面体とオイラーの多面体定理",
        desc: "正多面体5種類の性質と、オイラーの多面体定理（v−e+f=2）を学ぶプリントです。",
        filename: "3_図形の性質_No.5.pdf",
      },
    ],
    summary: {
      filename: "3_図形の性質.pdf",
    },
  },
  {
    num: "第4章",
    title: "数学と人間の活動",
    prints: [
      {
        id: "01",
        title: "約数・倍数・素因数分解",
        desc: "約数と倍数の定義、倍数の判定法、素因数分解、約数の個数・総和・総積の公式を学ぶプリントです。",
        filename: "4_数学と人間の活動_No.1.pdf",
      },
      {
        id: "02",
        title: "最大公約数・最小公倍数・整数の割り算",
        desc: "最大公約数・最小公倍数の求め方と、整数の割り算（a=bq+r）・余りの考え方を学ぶプリントです。",
        filename: "4_数学と人間の活動_No.2.pdf",
      },
      {
        id: "03",
        title: "合同式（mod）",
        desc: "合同式の定義・性質（加減乗累乗）と、余りの計算への活用を練習するプリントです。",
        filename: "4_数学と人間の活動_No.3.pdf",
      },
      {
        id: "04",
        title: "ユークリッドの互除法",
        desc: "ユークリッドの互除法による最大公約数の計算と、1次不定方程式の特殊解の求め方を学ぶプリントです。",
        filename: "4_数学と人間の活動_No.4.pdf",
      },
      {
        id: "05",
        title: "1次不定方程式",
        desc: "ax+by=c の形の整数解の求め方を、特殊解と一般解の流れで学ぶプリントです。",
        filename: "4_数学と人間の活動_No.5.pdf",
      },
      {
        id: "06",
        title: "n進法",
        desc: "n進法の仕組みと、2進法・3進法・5進法・8進法と10進法の相互変換を練習するプリントです。",
        filename: "4_数学と人間の活動_No.6.pdf",
      },
    ],
    summary: {
      filename: "4_数学と人間の活動.pdf",
    },
  },
];

const TOTAL_PRINTS = CHAPTERS.reduce((sum, ch) => sum + ch.prints.length, 0);

function chapterAnchorId(chapter: Chapter): string {
  return `chapter-${chapter.num.replace(/[^0-9]/g, "")}`;
}

function ChapterSection({ chapter }: { chapter: Chapter }) {
  return (
    <section id={chapterAnchorId(chapter)} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="bg-orange-100 text-orange-700 text-xs font-black px-2.5 py-1 rounded-full">
            {chapter.num}
          </span>
          <h2 className="text-xl font-black text-gray-900">{chapter.title}</h2>
        </div>
        <div className="h-px flex-1 border-t border-gray-200" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {chapter.prints.map((p, i) => (
          <PrintCard key={i} p={p} downloadBase="/prints/mathA" />
        ))}
      </div>
      {chapter.summary && (
        <div className="mt-4 sm:mt-5">
          <ChapterSummaryCard
            chapterTitle={chapter.title}
            summary={chapter.summary}
            downloadBase="/prints/mathA"
          />
        </div>
      )}
    </section>
  );
}

export default function MathAPage() {
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
              <span className="text-gray-800 font-medium">高校数学A</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">高校数学</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">高校数学A</h1>
            <p className="text-gray-500 text-sm">
              全 {CHAPTERS.length} 章収録・プリント {TOTAL_PRINTS} 枚
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
                key={chapter.num}
                href={`#${chapterAnchorId(chapter)}`}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-orange-300 hover:shadow-sm transition-all duration-150"
              >
                <span className="text-xs font-black bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                  {chapter.num}
                </span>
                <span className="text-sm font-medium text-gray-700">{chapter.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Chapters */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 space-y-12">
          {CHAPTERS.map((chapter) => (
            <ChapterSection key={chapter.num} chapter={chapter} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
