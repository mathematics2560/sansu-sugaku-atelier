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
    prints: [
      {
        id: "01",
        title: "数列の極限",
        desc: "数列の収束・発散の意味と、極限の性質を使った計算を学ぶプリントです。",
        filename: "math3_2_No01.pdf",
      },
      {
        id: "02",
        title: "数列の極限の計算",
        desc: "∞/∞ や ∞−∞ の形の極限の求め方と、はさみうちの原理を学ぶプリントです。",
        filename: "math3_2_No02.pdf",
      },
      {
        id: "03",
        title: "無限等比数列",
        desc: "r^n の極限を r の値で場合分けして求める方法を学ぶプリントです。",
        filename: "math3_2_No03.pdf",
      },
      {
        id: "04",
        title: "無限級数",
        desc: "部分和を使った無限級数の収束・発散の判定と、発散する級数を学ぶプリントです。",
        filename: "math3_2_No04.pdf",
      },
      {
        id: "05",
        title: "無限等比級数",
        desc: "無限等比級数の収束条件と和の求め方、循環小数や図形への応用を学ぶプリントです。",
        filename: "math3_2_No05.pdf",
      },
      {
        id: "06",
        title: "関数の極限",
        desc: "x→a や片側極限、x→±∞ のときの関数の極限の求め方を学ぶプリントです。",
        filename: "math3_2_No06.pdf",
      },
      {
        id: "07",
        title: "三角関数・指数関数の極限",
        desc: "sinx/x→1 を使った極限の計算と、e の定義を学ぶプリントです。",
        filename: "math3_2_No07.pdf",
      },
      {
        id: "08",
        title: "関数の連続性",
        desc: "関数の連続の定義と、中間値の定理の使い方を学ぶプリントです。",
        filename: "math3_2_No08.pdf",
      },
    ],
  },
  {
    num: "第3章",
    title: "微分法",
    prints: [
      {
        id: "01",
        title: "微分可能性と導関数",
        desc: "導関数の定義と、微分可能ならば連続であることを学ぶプリントです。",
        filename: "math3_3_No01.pdf",
      },
      {
        id: "02",
        title: "積・商の微分",
        desc: "積の微分・商の微分の公式とその使い方を学ぶプリントです。",
        filename: "math3_3_No02.pdf",
      },
      {
        id: "03",
        title: "合成関数の微分",
        desc: "外側と内側に分けて考える合成関数の微分と、逆関数の微分を学ぶプリントです。",
        filename: "math3_3_No03.pdf",
      },
      {
        id: "04",
        title: "三角関数の導関数",
        desc: "sin・cos・tan の導関数と、それらを含む関数の微分を学ぶプリントです。",
        filename: "math3_3_No04.pdf",
      },
      {
        id: "05",
        title: "指数・対数関数の導関数",
        desc: "e^x、log x、a^x の導関数と、絶対値つきの対数の微分を学ぶプリントです。",
        filename: "math3_3_No05.pdf",
      },
      {
        id: "06",
        title: "対数微分法",
        desc: "両辺の対数をとって微分する対数微分法と、x^α の微分を学ぶプリントです。",
        filename: "math3_3_No06.pdf",
      },
      {
        id: "07",
        title: "高次導関数",
        desc: "第2次導関数・第n次導関数の求め方を学ぶプリントです。",
        filename: "math3_3_No07.pdf",
      },
      {
        id: "08",
        title: "媒介変数・陰関数の微分",
        desc: "媒介変数表示や陰関数で表された関数の dy/dx の求め方を学ぶプリントです。",
        filename: "math3_3_No08.pdf",
      },
    ],
  },
  {
    num: "第4章",
    title: "微分法の応用",
    prints: [
      {
        id: "01",
        title: "接線と法線",
        desc: "接線・法線の方程式の求め方と、媒介変数表示・陰関数の曲線の接線を学ぶプリントです。",
        filename: "math3_4_No01.pdf",
      },
      {
        id: "02",
        title: "平均値の定理",
        desc: "平均値の定理の意味と、不等式の証明への応用を学ぶプリントです。",
        filename: "math3_4_No02.pdf",
      },
      {
        id: "03",
        title: "関数の増減と極値",
        desc: "増減表を使った極値の求め方と、微分可能でない点での極値を学ぶプリントです。",
        filename: "math3_4_No03.pdf",
      },
      {
        id: "04",
        title: "グラフの凹凸と変曲点",
        desc: "第2次導関数によるグラフの凹凸・変曲点の調べ方と、極値の判定を学ぶプリントです。",
        filename: "math3_4_No04.pdf",
      },
      {
        id: "05",
        title: "グラフのかき方",
        desc: "漸近線や対称性、増減と凹凸の表を使ったグラフのかき方を学ぶプリントです。",
        filename: "math3_4_No05.pdf",
      },
      {
        id: "06",
        title: "最大・最小",
        desc: "いろいろな関数の最大値・最小値の求め方と、文章題への応用を学ぶプリントです。",
        filename: "math3_4_No06.pdf",
      },
      {
        id: "07",
        title: "方程式・不等式への応用",
        desc: "微分を使った実数解の個数の調べ方と、不等式の証明を学ぶプリントです。",
        filename: "math3_4_No07.pdf",
      },
      {
        id: "08",
        title: "速度・加速度と近似式",
        desc: "直線上・平面上の運動の速度・加速度と、1次近似式を学ぶプリントです。",
        filename: "math3_4_No08.pdf",
      },
    ],
  },
  {
    num: "第5章",
    title: "積分法",
    prints: [
      {
        id: "01",
        title: "不定積分の基本",
        desc: "x^α、1/x、三角関数、指数関数の不定積分の基本公式を学ぶプリントです。",
        filename: "math3_5_No01.pdf",
      },
      {
        id: "02",
        title: "置換積分法",
        desc: "t=g(x) とおく置換積分法と、f'(x)/f(x) の形の積分を学ぶプリントです。",
        filename: "math3_5_No02.pdf",
      },
      {
        id: "03",
        title: "部分積分法",
        desc: "どちらを微分するかの選び方と、log x の積分など部分積分法を学ぶプリントです。",
        filename: "math3_5_No03.pdf",
      },
      {
        id: "04",
        title: "いろいろな関数の不定積分",
        desc: "部分分数分解を使った分数関数の積分と、三角関数の次数下げを学ぶプリントです。",
        filename: "math3_5_No04.pdf",
      },
      {
        id: "05",
        title: "定積分の計算",
        desc: "定積分の置換積分と、x=a sinθ とおき換える積分を学ぶプリントです。",
        filename: "math3_5_No05.pdf",
      },
      {
        id: "06",
        title: "定積分の部分積分と偶奇",
        desc: "定積分の部分積分と、偶関数・奇関数の性質を使った計算を学ぶプリントです。",
        filename: "math3_5_No06.pdf",
      },
      {
        id: "07",
        title: "定積分で表された関数",
        desc: "定積分で表された関数の微分と、定数とおいて解く方法を学ぶプリントです。",
        filename: "math3_5_No07.pdf",
      },
      {
        id: "08",
        title: "区分求積法と定積分の不等式",
        desc: "和の極限を定積分で表す区分求積法と、定積分を使った不等式の証明を学ぶプリントです。",
        filename: "math3_5_No08.pdf",
      },
    ],
  },
  {
    num: "第6章",
    title: "積分法の応用",
    prints: [
      {
        id: "01",
        title: "面積①",
        desc: "曲線とx軸で囲まれた部分や、2曲線の間の面積の求め方を学ぶプリントです。",
        filename: "math3_6_No01.pdf",
      },
      {
        id: "02",
        title: "面積②",
        desc: "y軸方向に積分して求める面積と、媒介変数表示の曲線で囲まれた面積を学ぶプリントです。",
        filename: "math3_6_No02.pdf",
      },
      {
        id: "03",
        title: "体積",
        desc: "断面積を積分して立体の体積を求める方法を学ぶプリントです。",
        filename: "math3_6_No03.pdf",
      },
      {
        id: "04",
        title: "回転体の体積",
        desc: "x軸・y軸のまわりに回転してできる立体の体積の求め方を学ぶプリントです。",
        filename: "math3_6_No04.pdf",
      },
      {
        id: "05",
        title: "曲線の長さ",
        desc: "媒介変数表示の曲線や y=f(x) の曲線の長さの求め方を学ぶプリントです。",
        filename: "math3_6_No05.pdf",
      },
      {
        id: "06",
        title: "速度と道のり",
        desc: "速度を積分して位置の変化量と道のりを求める方法を学ぶプリントです。",
        filename: "math3_6_No06.pdf",
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
