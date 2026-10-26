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
        filename: "線形代数_0_表紙とオリエンテーション.pdf",
      },
    ],
  },
  {
    num: "第1章",
    title: "行列",
    prints: [
      {
        id: "01",
        title: "行列の定義と演算",
        desc: "行列の定義と、加法・スカラー倍などの基本演算を学ぶプリントです。",
        filename: "線形代数_1_1_行列の定義と演算.pdf",
      },
      {
        id: "02",
        title: "行列の積",
        desc: "行列の積の定義と計算方法、性質を練習するプリントです。",
        filename: "線形代数_1_2_行列の積.pdf",
      },
      {
        id: "03",
        title: "逆行列",
        desc: "逆行列の定義と求め方、正則行列の性質を学ぶプリントです。",
        filename: "線形代数_1_3_逆行列.pdf",
      },
      {
        id: "04",
        title: "行基本変形",
        desc: "行基本変形の手順と、それを用いた行列の簡約化を練習するプリントです。",
        filename: "線形代数_1_4_行基本変形.pdf",
      },
      {
        id: "05",
        title: "行列のランク",
        desc: "行列のランク（階数）の定義と求め方を学ぶプリントです。",
        filename: "線形代数_1_5_行列のランク.pdf",
      },
    ],
  },
  {
    num: "第2章",
    title: "連立一次方程式",
    prints: [
      {
        id: "01",
        title: "掃き出し法",
        desc: "掃き出し法（ガウスの消去法）による連立一次方程式の解法を練習するプリントです。",
        filename: "線形代数_2_1_掃き出し法.pdf",
      },
      {
        id: "02",
        title: "解の構造",
        desc: "連立一次方程式の解の構造（特殊解と一般解）を学ぶプリントです。",
        filename: "線形代数_2_2_解の構造.pdf",
      },
      {
        id: "03",
        title: "同次方程式と非同次方程式",
        desc: "同次方程式・非同次方程式の違いと、解の関係を整理するプリントです。",
        filename: "線形代数_2_3_同次方程式と非同次方程式.pdf",
      },
    ],
  },
  {
    num: "第3章",
    title: "行列式",
    prints: [
      {
        id: "01",
        title: "行列式の定義",
        desc: "行列式の定義と、2次・3次の行列式の計算方法を学ぶプリントです。",
        filename: "線形代数_3_1_行列式の定義.pdf",
      },
      {
        id: "02",
        title: "行列式の性質",
        desc: "行列式の基本性質（多重線形性・交代性など）を整理するプリントです。",
        filename: "線形代数_3_2_行列式の性質.pdf",
      },
      {
        id: "03",
        title: "余因子展開",
        desc: "余因子展開による行列式の計算方法を練習するプリントです。",
        filename: "線形代数_3_3_余因子展開.pdf",
      },
      {
        id: "04",
        title: "クラメルの公式",
        desc: "クラメルの公式を用いた連立一次方程式の解法を学ぶプリントです。",
        filename: "線形代数_3_4_クラメルの公式.pdf",
      },
    ],
  },
  {
    num: "第4章",
    title: "ベクトル空間",
    prints: [
      {
        id: "01",
        title: "ベクトル空間の定義",
        desc: "ベクトル空間の定義と公理、代表的な例を学ぶプリントです。",
        filename: "線形代数_4_1_ベクトル空間の定義.pdf",
      },
      {
        id: "02",
        title: "1次独立と1次従属",
        desc: "ベクトルの1次独立・1次従属の判定方法を練習するプリントです。",
        filename: "線形代数_4_2_1次独立と1次従属.pdf",
      },
      {
        id: "03",
        title: "基底と次元",
        desc: "ベクトル空間の基底と次元の定義、求め方を学ぶプリントです。",
        filename: "線形代数_4_3_基底と次元.pdf",
      },
      {
        id: "04",
        title: "部分空間",
        desc: "部分空間の定義と判定条件、代表的な例を学ぶプリントです。",
        filename: "線形代数_4_4_部分空間.pdf",
      },
    ],
  },
  {
    num: "第5章",
    title: "線形写像",
    prints: [
      {
        id: "01",
        title: "線形写像の定義",
        desc: "線形写像の定義と基本性質を学ぶプリントです。",
        filename: "線形代数_5_1_線形写像の定義.pdf",
      },
      {
        id: "02",
        title: "核と像",
        desc: "線形写像の核（カーネル）と像の定義、求め方を学ぶプリントです。",
        filename: "線形代数_5_2_核と像.pdf",
      },
      {
        id: "03",
        title: "次元定理",
        desc: "次元定理（核の次元＋像の次元＝定義域の次元）を学ぶプリントです。",
        filename: "線形代数_5_3_次元定理.pdf",
      },
      {
        id: "04",
        title: "表現行列",
        desc: "線形写像を行列で表す「表現行列」の求め方を練習するプリントです。",
        filename: "線形代数_5_4_表現行列.pdf",
      },
      {
        id: "05",
        title: "基底の変換",
        desc: "基底の変換と、それに伴う表現行列の変化を学ぶプリントです。",
        filename: "線形代数_5_5_基底の変換.pdf",
      },
    ],
  },
  {
    num: "第6章",
    title: "固有値・固有ベクトル",
    prints: [
      {
        id: "01",
        title: "固有値と固有ベクトル",
        desc: "固有値・固有ベクトルの定義と意味を学ぶプリントです。",
        filename: "線形代数_6_1_固有値と固有ベクトル.pdf",
      },
      {
        id: "02",
        title: "固有方程式",
        desc: "固有方程式（特性方程式）を用いた固有値の求め方を練習するプリントです。",
        filename: "線形代数_6_2_固有方程式.pdf",
      },
      {
        id: "03",
        title: "対角化",
        desc: "行列の対角化の手順と、対角化可能となる条件を学ぶプリントです。",
        filename: "線形代数_6_3_対角化.pdf",
      },
      {
        id: "04",
        title: "対角化の応用",
        desc: "対角化を利用した行列のべき乗の計算など、応用問題を扱うプリントです。",
        filename: "線形代数_6_4_対角化の応用.pdf",
      },
      {
        id: "05",
        title: "ジョルダン標準形（発展）",
        desc: "対角化できない行列に対するジョルダン標準形の考え方を学ぶ発展プリントです。",
        filename: "線形代数_6_5_ジョルダン標準形（発展）.pdf",
      },
    ],
  },
  {
    num: "第7章",
    title: "内積空間",
    prints: [
      {
        id: "01",
        title: "内積の定義",
        desc: "内積の定義と公理、ノルムとの関係を学ぶプリントです。",
        filename: "線形代数_7_1_内積の定義.pdf",
      },
      {
        id: "02",
        title: "正規直交基底",
        desc: "正規直交基底の定義と性質を学ぶプリントです。",
        filename: "線形代数_7_2_正規直交基底.pdf",
      },
      {
        id: "03",
        title: "グラム・シュミットの直交化",
        desc: "グラム・シュミットの直交化法による正規直交基底の作り方を練習するプリントです。",
        filename: "線形代数_7_3_グラム・シュミットの直交化.pdf",
      },
      {
        id: "04",
        title: "直交補空間と射影",
        desc: "直交補空間の定義と、ベクトルの直交射影の求め方を学ぶプリントです。",
        filename: "線形代数_7_4_直交補空間と射影.pdf",
      },
      {
        id: "05",
        title: "対称行列の対角化",
        desc: "実対称行列が直交行列によって対角化できることを学ぶプリントです。",
        filename: "線形代数_7_5_対称行列の対角化.pdf",
      },
      {
        id: "06",
        title: "特異値分解（発展）",
        desc: "特異値分解（SVD）の考え方と応用を学ぶ発展プリントです。",
        filename: "線形代数_7_6_特異値分解（発展）.pdf",
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
          <PrintCard key={i} p={p} downloadBase="/prints/Linear Algebra" id={printAnchorId(chapter, i)} />
        ))}
      </div>
    </section>
  );
}

export default function LinearAlgebraPage() {
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
              <span className="text-gray-800 font-medium">線形代数</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-full">大学数学</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">線形代数</h1>
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
