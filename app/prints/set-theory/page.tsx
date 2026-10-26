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
        filename: "集合論_0_表紙とオリエンテーション.pdf",
      },
    ],
  },
  {
    num: "第1章",
    title: "集合と論理",
    prints: [
      {
        id: "01",
        title: "集合の定義と演算",
        desc: "集合の定義と、和集合・共通部分・補集合などの基本演算を学ぶプリントです。",
        filename: "集合論_1_1_集合の定義と演算.pdf",
      },
      {
        id: "02",
        title: "論理記号",
        desc: "∀・∃などの論理記号の意味と、命題の表し方を学ぶプリントです。",
        filename: "集合論_1_2_論理記号.pdf",
      },
    ],
  },
  {
    num: "第2章",
    title: "写像",
    prints: [
      {
        id: "01",
        title: "写像の定義",
        desc: "写像の定義と、定義域・値域・像などの基本用語を学ぶプリントです。",
        filename: "集合論_2_1_写像の定義.pdf",
      },
      {
        id: "02",
        title: "全射・単射・全単射",
        desc: "全射・単射・全単射の定義と、それぞれの判定方法を学ぶプリントです。",
        filename: "集合論_2_2_全射・単射・全単射.pdf",
      },
      {
        id: "03",
        title: "合成写像と逆写像",
        desc: "合成写像の定義と、逆写像が存在する条件を学ぶプリントです。",
        filename: "集合論_2_3_合成写像と逆写像.pdf",
      },
    ],
  },
  {
    num: "第3章",
    title: "濃度",
    prints: [
      {
        id: "01",
        title: "可算集合",
        desc: "可算集合の定義と、自然数・整数・有理数が可算集合であることを学ぶプリントです。",
        filename: "集合論_3_1_可算集合.pdf",
      },
      {
        id: "02",
        title: "非可算集合",
        desc: "非可算集合の定義と、実数全体が非可算集合であることを学ぶプリントです。",
        filename: "集合論_3_2_非可算集合.pdf",
      },
      {
        id: "03",
        title: "カントールの対角線論法",
        desc: "カントールの対角線論法による非可算性の証明方法を学ぶプリントです。",
        filename: "集合論_3_3_カントールの対角線論法.pdf",
      },
    ],
  },
  {
    num: "第4章",
    title: "順序集合",
    prints: [
      {
        id: "01",
        title: "順序関係",
        desc: "順序関係の定義と、全順序・半順序の違いを学ぶプリントです。",
        filename: "集合論_4_1_順序関係.pdf",
      },
      {
        id: "02",
        title: "ツォルンの補題",
        desc: "ツォルンの補題の内容と、その利用方法を学ぶプリントです。",
        filename: "集合論_4_2_ツォルンの補題.pdf",
      },
      {
        id: "03",
        title: "選択公理",
        desc: "選択公理の内容と、ツォルンの補題との関係を学ぶプリントです。",
        filename: "集合論_4_3_選択公理.pdf",
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
          <PrintCard key={i} p={p} downloadBase="/prints/Set Theory" id={printAnchorId(chapter, i)} />
        ))}
      </div>
    </section>
  );
}

export default function SetTheoryPage() {
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
              <span className="text-gray-800 font-medium">集合論</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-full">大学数学</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">集合論</h1>
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
