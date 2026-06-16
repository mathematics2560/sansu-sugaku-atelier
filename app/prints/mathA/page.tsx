import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Print = {
  id: string;
  supplement?: boolean;
  title: string;
  desc: string;
  filename: string;
};

type Chapter = {
  num: string;
  title: string;
  prints: Print[];
};

const CHAPTERS: Chapter[] = [
  {
    num: "第1章",
    title: "場合の数",
    prints: [
      {
        id: "01",
        title: "集合の要素の個数と包除原理",
        desc: "n(A∪B)=n(A)+n(B)-n(A∩B) の公式と、3集合への拡張を練習するプリントです。",
        filename: "1_場合の数_No.1.pdf",
      },
      {
        id: "02",
        title: "樹形図と場合の数",
        desc: "樹形図を使った場合の数の数え方の基礎と、代表的な問題を収録したプリントです。",
        filename: "1_場合の数_No.2.pdf",
      },
      {
        id: "03",
        title: "和の法則・積の法則",
        desc: "場合の数の2つの基本法則（和の法則・積の法則）の使い方を練習するプリントです。",
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
        title: "組合せ（C）",
        desc: "nCr の意味と計算方法、順列との違いを整理した練習プリントです。",
        filename: "1_場合の数_No.5.pdf",
      },
      {
        id: "06",
        title: "重複順列・円順列・数珠順列",
        desc: "特殊な並べ方の公式と計算手順を扱うプリントです。",
        filename: "1_場合の数_No.6.pdf",
      },
      {
        id: "07",
        title: "組合せの応用・二項定理",
        desc: "選び方の応用問題と (a+b)ⁿ の展開（二項定理）を学ぶプリントです。",
        filename: "1_場合の数_No.7.pdf",
      },
    ],
  },
  {
    num: "第2章",
    title: "確率",
    prints: [
      {
        id: "01",
        title: "確率の定義と基本性質",
        desc: "確率の意味・同様に確からしい・確率の基本性質を整理した基礎プリントです。",
        filename: "2_確率_No.1.pdf",
      },
      {
        id: "02",
        title: "確率の加法定理",
        desc: "排反事象と P(A∪B)=P(A)+P(B)-P(A∩B) の公式を練習するプリントです。",
        filename: "2_確率_No.2.pdf",
      },
      {
        id: "03",
        title: "余事象の確率",
        desc: "「少なくとも1つ」などの問題で余事象を利用する解法を練習するプリントです。",
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
        title: "独立な試行と反復試行の確率",
        desc: "試行の独立性と二項確率の公式を使った反復試行問題を収録したプリントです。",
        filename: "2_確率_No.5.pdf",
      },
    ],
  },
  {
    num: "第3章",
    title: "図形の性質",
    prints: [
      {
        id: "01",
        title: "三角形の五心（内心・外心・重心ほか）",
        desc: "三角形の内心・外心・重心・垂心・傍心の性質を整理したプリントです。",
        filename: "3_図形の性質_No.1.pdf",
      },
      {
        id: "02",
        title: "チェバの定理・メネラウスの定理",
        desc: "三角形の辺の比に関する2つの定理の証明と応用問題を収録したプリントです。",
        filename: "3_図形の性質_No.2.pdf",
      },
      {
        id: "03",
        title: "円の性質（弧・弦・接線）",
        desc: "円に関する基本定理（弦・弧・接線・円周角）と角度の問題を扱うプリントです。",
        filename: "3_図形の性質_No.3.pdf",
      },
      {
        id: "04",
        title: "円に内接する四角形・接線の性質",
        desc: "円と四角形・接線に関する定理の応用を練習するプリントです。",
        filename: "3_図形の性質_No.4.pdf",
      },
      {
        id: "05",
        title: "空間図形の基礎",
        desc: "直線・平面の位置関係、多面体の性質を整理した練習プリントです。",
        filename: "3_図形の性質_No.5.pdf",
      },
    ],
  },
  {
    num: "第4章",
    title: "数学と人間の活動",
    prints: [
      {
        id: "01",
        title: "約数・倍数・素因数分解",
        desc: "整数の基本事項と素因数分解の方法を整理した基礎プリントです。",
        filename: "4_数学と人間の活動_No.1.pdf",
      },
      {
        id: "02",
        title: "最大公約数・最小公倍数",
        desc: "GCD・LCMの求め方とユークリッドの互除法を練習するプリントです。",
        filename: "4_数学と人間の活動_No.2.pdf",
      },
      {
        id: "03",
        title: "整数の割り算と余り（mod）",
        desc: "整数の除法の原理と余りを使った問題の解法を学ぶプリントです。",
        filename: "4_数学と人間の活動_No.3.pdf",
      },
      {
        id: "04",
        title: "n進法",
        desc: "2進法・8進法・16進法への変換と計算を練習するプリントです。",
        filename: "4_数学と人間の活動_No.4.pdf",
      },
      {
        id: "05",
        title: "1次不定方程式",
        desc: "ax+by=c の形の整数解の求め方をユークリッドの互除法と組み合わせて学ぶプリントです。",
        filename: "4_数学と人間の活動_No.5.pdf",
      },
      {
        id: "06",
        title: "記数法と整数の応用",
        desc: "日常生活に活かされる整数の理論（ISBN・バーコード等）の応用問題を収録しています。",
        filename: "4_数学と人間の活動_No.6.pdf",
      },
    ],
  },
];

const TOTAL_PRINTS = CHAPTERS.reduce((sum, ch) => sum + ch.prints.length, 0);

function PrintCard({ p }: { p: Print }) {
  const downloadHref = `/prints/mathA/${p.filename}`;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <span
          className={`text-xs font-black px-3 py-1 rounded-full ${
            p.supplement ? "bg-amber-100 text-amber-700" : "bg-blue-600 text-white"
          }`}
        >
          #{p.id}
        </span>
        {p.supplement && (
          <span className="text-xs font-bold bg-amber-50 text-amber-600 border border-amber-200 px-2.5 py-0.5 rounded-full">
            補足
          </span>
        )}
      </div>

      <h3 className="font-black text-gray-900 text-base leading-snug mb-3">{p.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{p.desc}</p>

      <a
        href={downloadHref}
        download={p.filename}
        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
      >
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span>プリントをダウンロード</span>
      </a>
    </div>
  );
}

function ChapterSection({ chapter }: { chapter: Chapter }) {
  return (
    <section>
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
          <PrintCard key={i} p={p} />
        ))}
      </div>
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
              <Link href="/prints" className="hover:text-blue-600 transition-colors">プリント一覧</Link>
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
