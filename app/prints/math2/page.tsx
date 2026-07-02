import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Print, PrintCard } from "@/components/PrintCard";

type Chapter = {
  num: string;
  title: string;
  prints: Print[];
};

const CHAPTERS: Chapter[] = [
  {
    num: "第1章",
    title: "式と証明",
    prints: [
      {
        id: "01",
        title: "パスカルの三角形・二項定理",
        desc: "パスカルの三角形の仕組みと、二項定理・多項定理の公式・考え方を学ぶプリントです。",
        filename: "1_式と証明_No.1.pdf",
      },
      {
        id: "02",
        title: "多項式の割り算",
        desc: "整式の除法の仕組みと、降べきの順に整えて計算する筆算の手順を練習するプリントです。",
        filename: "1_式と証明_No.2.pdf",
      },
      {
        id: "03",
        title: "分数式の計算",
        desc: "分数式の約分・四則演算と、繁分数式を簡単にする2つの解法を学ぶプリントです。",
        filename: "1_式と証明_No.3.pdf",
      },
      {
        id: "04",
        title: "恒等式",
        desc: "恒等式の意味と、係数比較法・数値代入法を使った未知の係数の求め方を練習するプリントです。",
        filename: "1_式と証明_No.4.pdf",
      },
      {
        id: "05",
        title: "等式・不等式の証明、相加相乗平均",
        desc: "等式・不等式の証明方法と、比例式、相加相乗平均の関係を学ぶプリントです。",
        filename: "1_式と証明_No.5.pdf",
      },
    ],
  },
  {
    num: "第2章",
    title: "複素数と方程式",
    prints: [
      {
        id: "01",
        title: "虚数単位と複素数の基本",
        desc: "虚数単位iの定義、複素数の分類（実数・虚数・純虚数）、複素数の加法・減法・乗法を学ぶプリントです。",
        filename: "2_複素数と方程式_No.1.pdf",
      },
      {
        id: "02",
        title: "共役な複素数・虚数解と判別式",
        desc: "共役な複素数を使った分母の実数化、負の数の平方根、判別式による解の種類の判定を学ぶプリントです。",
        filename: "2_複素数と方程式_No.2.pdf",
      },
      {
        id: "03",
        title: "解と係数の関係・対称式",
        desc: "2次方程式の解と係数の関係、基本対称式を利用した値の求め方を練習するプリントです。",
        filename: "2_複素数と方程式_No.3.pdf",
      },
      {
        id: "04",
        title: "剰余定理・因数定理",
        desc: "剰余定理を使った余りの求め方と、因数定理を利用した因数分解の手順を学ぶプリントです。",
        filename: "2_複素数と方程式_No.4.pdf",
      },
      {
        id: "05",
        title: "高次方程式・1の3乗根（ω）",
        desc: "因数定理を利用した高次方程式の解法と、1の3乗根ωの性質を学ぶプリントです。",
        filename: "2_複素数と方程式_No.5.pdf",
      },
    ],
  },
  {
    num: "第3章",
    title: "図形と方程式",
    prints: [
      {
        id: "01",
        title: "2点間の距離・内分点と外分点・重心の座標",
        desc: "2点間の距離の公式、内分点・外分点の座標、三角形の重心の座標の求め方を学ぶプリントです。",
        filename: "3_図形と方程式_No.1.pdf",
      },
      {
        id: "02",
        title: "直線の方程式・2直線の平行と垂直",
        desc: "座標平面上の直線の方程式の表し方と、2直線が平行・垂直になるときの傾きの関係を学ぶプリントです。",
        filename: "3_図形と方程式_No.2.pdf",
      },
      {
        id: "03",
        title: "2直線の交点を通る直線・点と直線の距離",
        desc: "2直線の交点を通る直線の方程式の作り方と、点と直線の距離の公式を学ぶプリントです。",
        filename: "3_図形と方程式_No.3.pdf",
      },
      {
        id: "04",
        title: "円の方程式",
        desc: "円の方程式の基本形・一般形と、平方完成を用いた変形、円と直線の共有点の求め方を学ぶプリントです。",
        filename: "3_図形と方程式_No.4.pdf",
      },
      {
        id: "05",
        title: "円と直線の位置関係・円の接線",
        desc: "判別式や中心と直線の距離を使った円と直線の位置関係の判定と、円の接線の方程式を学ぶプリントです。",
        filename: "3_図形と方程式_No.5.pdf",
      },
      {
        id: "06",
        title: "2つの円の位置関係",
        desc: "2つの円の半径と中心間の距離の関係から、外接・内接・交わる・交点を持たない位置関係を判定するプリントです。",
        filename: "3_図形と方程式_No.6.pdf",
      },
      {
        id: "07",
        title: "軌跡",
        desc: "軌跡の求め方のステップと、文字を消去して関係式を導く手順を練習するプリントです。",
        filename: "3_図形と方程式_No.7.pdf",
      },
      {
        id: "08",
        title: "領域",
        desc: "不等式が表す領域（直線・円の内側・外側）の図示と、連立不等式の表す領域の求め方を学ぶプリントです。",
        filename: "3_図形と方程式_No.8.pdf",
      },
      {
        id: "09",
        title: "線形計画法",
        desc: "領域を図示し、最大値・最小値を求める線形計画法の考え方とステップを学ぶプリントです。",
        filename: "3_図形と方程式_No.9.pdf",
      },
    ],
  },
  {
    num: "第4章",
    title: "三角関数",
    prints: [
      {
        id: "01",
        title: "一般角と弧度法",
        desc: "一般角の考え方と、弧度法（ラジアン）による角度の表し方、扇形の弧の長さ・面積の公式を学ぶプリントです。",
        filename: "4_三角関数_No.1.pdf",
      },
      {
        id: "02",
        title: "三角関数の定義と変換",
        desc: "単位円を用いた三角関数の定義、三角比の基本公式、θ+π/2やπ−θなどの角の変換を学ぶプリントです。",
        filename: "4_三角関数_No.2.pdf",
      },
      {
        id: "03",
        title: "三角関数のグラフ",
        desc: "sin・cos・tanのグラフの形と、奇関数・偶関数の性質、グラフの拡大・平行移動・縮小を学ぶプリントです。",
        filename: "4_三角関数_No.3.pdf",
      },
      {
        id: "04",
        title: "三角関数の応用（方程式・不等式・最大最小）",
        desc: "単位円を用いた三角関数の方程式・不等式の解法と、置き換えを利用した最大値・最小値の求め方を学ぶプリントです。",
        filename: "4_三角関数_No.4.pdf",
      },
      {
        id: "05",
        title: "加法定理",
        desc: "sin・cos・tanの加法定理の公式と、有名角の足し算・引き算を利用した値の求め方を学ぶプリントです。",
        filename: "4_三角関数_No.5.pdf",
      },
      {
        id: "05",
        supplement: true,
        title: "加法定理の証明",
        desc: "単位円上の2点間の距離を利用して、cos・sin・tanの加法定理を証明する補足プリントです。",
        filename: "4_三角関数_No.5補足.pdf",
      },
      {
        id: "06",
        title: "2倍角の公式・半角の公式",
        desc: "加法定理から導かれる2倍角の公式と、その変形による半角の公式の成り立ちを学ぶプリントです。",
        filename: "4_三角関数_No.6.pdf",
      },
      {
        id: "07",
        title: "積和の公式・和積の公式",
        desc: "加法定理を組み合わせて積を和に、和を積に変形する積和の公式・和積の公式の導出方法を学ぶプリントです。",
        filename: "4_三角関数_No.7.pdf",
      },
      {
        id: "08",
        title: "三角関数の合成",
        desc: "a sinθ+b cosθをr sin(θ+α)の形に変形する三角関数の合成の手順と、最大値・最小値への応用を学ぶプリントです。",
        filename: "4_三角関数_No.8.pdf",
      },
    ],
  },
  {
    num: "第5章",
    title: "指数関数と対数関数",
    prints: [
      {
        id: "01",
        title: "指数の拡張（累乗根・有理数の指数）",
        desc: "累乗根の定義と計算、有理数乗・実数乗への指数の拡張と指数法則を学ぶプリントです。",
        filename: "5_指数関数と対数関数_No.1.pdf",
      },
      {
        id: "02",
        title: "指数関数とグラフ",
        desc: "指数関数 y=aˣ の定義・グラフの形・単調性を学び、大小比較や方程式・不等式への応用を練習するプリントです。",
        filename: "5_指数関数と対数関数_No.2.pdf",
      },
      {
        id: "03",
        title: "対数の定義と性質",
        desc: "対数 logₐM の定義と底・真数の条件、対数の4つの基本性質と底の変換公式を学ぶプリントです。",
        filename: "5_指数関数と対数関数_No.3.pdf",
      },
      {
        id: "04",
        title: "対数関数とグラフ",
        desc: "対数関数 y=logₐx のグラフと単調性、大小比較・方程式・不等式を解く手順を練習するプリントです。",
        filename: "5_指数関数と対数関数_No.4.pdf",
      },
      {
        id: "05",
        title: "常用対数と桁数・小数部分",
        desc: "常用対数を使った整数の桁数・最高位の数字の求め方と、log の小数部分に関する問題を練習するプリントです。",
        filename: "5_指数関数と対数関数_No.5.pdf",
      },
    ],
  },
  {
    num: "第6章",
    title: "微分法と積分法",
    prints: [],
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
      {chapter.prints.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {chapter.prints.map((p, i) => (
            <PrintCard key={i} p={p} downloadBase="/prints/math2" />
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

export default function Math2Page() {
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
              <span className="text-gray-800 font-medium">高校数学Ⅱ</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">高校数学</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">高校数学Ⅱ</h1>
            <p className="text-gray-500 text-sm">
              全 {CHAPTERS.length} 章収録・プリント {TOTAL_PRINTS > 0 ? `${TOTAL_PRINTS} 枚` : "準備中"}
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
