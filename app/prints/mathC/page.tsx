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
        filename: "mathC_0_orientation.pdf",
      },
    ],
  },
  {
    num: "第1章",
    title: "平面上のベクトル",
    prints: [
      {
        id: "01",
        title: "ベクトルとは",
        desc: "ベクトルの向きと大きさ、等しいベクトル・逆ベクトル・零ベクトルを学ぶプリントです。",
        filename: "mathC_1_No01.pdf",
      },
      {
        id: "02",
        title: "ベクトルの演算",
        desc: "ベクトルの加法・減法・実数倍と、平行条件、ベクトルの分解を学ぶプリントです。",
        filename: "mathC_1_No02.pdf",
      },
      {
        id: "03",
        title: "ベクトルの成分",
        desc: "ベクトルの成分表示と、成分を使った大きさ・平行条件を学ぶプリントです。",
        filename: "mathC_1_No03.pdf",
      },
      {
        id: "04",
        title: "内積",
        desc: "ベクトルの内積の定義と、2つのベクトルのなす角の求め方を学ぶプリントです。",
        filename: "mathC_1_No04.pdf",
      },
      {
        id: "05",
        title: "内積と成分",
        desc: "成分を使った内積の計算と、ベクトルの垂直条件を学ぶプリントです。",
        filename: "mathC_1_No05.pdf",
      },
      {
        id: "06",
        title: "内積の性質",
        desc: "内積の性質を使ったベクトルの大きさの計算と、三角形の面積を学ぶプリントです。",
        filename: "mathC_1_No06.pdf",
      },
      {
        id: "07",
        title: "位置ベクトル",
        desc: "位置ベクトルを使った内分点・外分点と、三角形の重心を学ぶプリントです。",
        filename: "mathC_1_No07.pdf",
      },
      {
        id: "08",
        title: "位置ベクトルと図形",
        desc: "3点が一直線上にある条件と、交点の位置ベクトルの求め方を学ぶプリントです。",
        filename: "mathC_1_No08.pdf",
      },
      {
        id: "09",
        title: "ベクトル方程式①",
        desc: "直線のベクトル方程式と、法線ベクトルを使った直線の表し方を学ぶプリントです。",
        filename: "mathC_1_No09.pdf",
      },
      {
        id: "10",
        title: "ベクトル方程式②",
        desc: "円のベクトル方程式と、条件を満たす点の存在範囲を学ぶプリントです。",
        filename: "mathC_1_No10.pdf",
      },
    ],
  },
  {
    num: "第2章",
    title: "空間のベクトル",
    prints: [
      {
        id: "01",
        title: "空間の座標",
        desc: "空間の座標と座標平面、対称な点、2点間の距離を学ぶプリントです。",
        filename: "mathC_2_No01.pdf",
      },
      {
        id: "02",
        title: "空間のベクトルと成分",
        desc: "空間のベクトルの成分表示と大きさ、3つのベクトルによる分解を学ぶプリントです。",
        filename: "mathC_2_No02.pdf",
      },
      {
        id: "03",
        title: "空間のベクトルの内積",
        desc: "空間のベクトルの内積となす角、垂直なベクトルの求め方を学ぶプリントです。",
        filename: "mathC_2_No03.pdf",
      },
      {
        id: "04",
        title: "空間の位置ベクトル",
        desc: "空間の内分点・外分点と、4点が同じ平面上にある条件を学ぶプリントです。",
        filename: "mathC_2_No04.pdf",
      },
      {
        id: "05",
        title: "空間図形への応用",
        desc: "ベクトルを使った直線と平面の交点や、平面への垂線の求め方を学ぶプリントです。",
        filename: "mathC_2_No05.pdf",
      },
      {
        id: "06",
        title: "球面の方程式",
        desc: "中心と半径から求める球面の方程式と、座標平面との交わりを学ぶプリントです。",
        filename: "mathC_2_No06.pdf",
      },
      {
        id: "07",
        title: "平面と直線の方程式（発展）",
        desc: "法線ベクトルを使った平面の方程式と、空間の直線の方程式を学ぶプリントです。",
        filename: "mathC_2_No07.pdf",
      },
    ],
  },
  {
    num: "第3章",
    title: "複素数平面",
    prints: [
      {
        id: "01",
        title: "複素数平面",
        desc: "複素数を平面上の点として表す方法と、共役な複素数・絶対値を学ぶプリントです。",
        filename: "mathC_3_No01.pdf",
      },
      {
        id: "02",
        title: "和・差・実数倍の意味",
        desc: "複素数の和・差・実数倍とベクトルとの対応、2点間の距離を学ぶプリントです。",
        filename: "mathC_3_No02.pdf",
      },
      {
        id: "03",
        title: "極形式",
        desc: "複素数の偏角と極形式、極形式を使ったかけ算・わり算を学ぶプリントです。",
        filename: "mathC_3_No03.pdf",
      },
      {
        id: "04",
        title: "回転",
        desc: "複素数を使った点の回転と、回転と拡大の組み合わせを学ぶプリントです。",
        filename: "mathC_3_No04.pdf",
      },
      {
        id: "05",
        title: "ド・モアブルの定理",
        desc: "ド・モアブルの定理 (cosθ+i sinθ)^n と、複素数の累乗の計算を学ぶプリントです。",
        filename: "mathC_3_No05.pdf",
      },
      {
        id: "06",
        title: "1のn乗根",
        desc: "方程式 z^n=a の解き方と、1のn乗根と正多角形の関係を学ぶプリントです。",
        filename: "mathC_3_No06.pdf",
      },
      {
        id: "07",
        title: "複素数と図形①",
        desc: "複素数平面上の内分点・外分点と、円や垂直二等分線を表す方程式を学ぶプリントです。",
        filename: "mathC_3_No07.pdf",
      },
      {
        id: "08",
        title: "複素数と図形②",
        desc: "複素数を使ったなす角、3点が一直線上・垂直になる条件、三角形の形を学ぶプリントです。",
        filename: "mathC_3_No08.pdf",
      },
    ],
  },
  {
    num: "第4章",
    title: "平面上の曲線",
    prints: [
      {
        id: "01",
        title: "放物線",
        desc: "焦点と準線から定まる放物線と、その標準形を学ぶプリントです。",
        filename: "mathC_4_No01.pdf",
      },
      {
        id: "02",
        title: "楕円",
        desc: "楕円の焦点と長軸・短軸、円の拡大・縮小としての楕円を学ぶプリントです。",
        filename: "mathC_4_No02.pdf",
      },
      {
        id: "03",
        title: "双曲線",
        desc: "双曲線の焦点と漸近線を学ぶプリントです。",
        filename: "mathC_4_No03.pdf",
      },
      {
        id: "04",
        title: "2次曲線の平行移動",
        desc: "2次曲線の平行移動と、一般形から標準形への変形を学ぶプリントです。",
        filename: "mathC_4_No04.pdf",
      },
      {
        id: "05",
        title: "2次曲線と直線",
        desc: "2次曲線と直線の共有点、接線、弦の中点の求め方を学ぶプリントです。",
        filename: "mathC_4_No05.pdf",
      },
      {
        id: "06",
        title: "媒介変数表示",
        desc: "円・楕円の媒介変数表示と、サイクロイドを学ぶプリントです。",
        filename: "mathC_4_No06.pdf",
      },
      {
        id: "07",
        title: "極座標",
        desc: "極座標の意味と、極座標と直交座標の変換を学ぶプリントです。",
        filename: "mathC_4_No07.pdf",
      },
      {
        id: "08",
        title: "極方程式",
        desc: "直線・円の極方程式と、極方程式で表された2次曲線を学ぶプリントです。",
        filename: "mathC_4_No08.pdf",
      },
    ],
  },
  {
    num: "第5章",
    title: "数学的な表現の工夫",
    prints: [
      {
        id: "01",
        title: "図・表・グラフによる表現",
        desc: "パレート図やバブルチャートなど、データに合った表し方の選び方を学ぶプリントです。",
        filename: "mathC_5_No01.pdf",
      },
      {
        id: "02",
        title: "行列による表現",
        desc: "行列の和・実数倍・積（2×2まで）と、表を行列で表す方法を学ぶプリントです。",
        filename: "mathC_5_No02.pdf",
      },
      {
        id: "03",
        title: "離散グラフによる表現",
        desc: "頂点と辺からなる離散グラフと、一筆書き・最短経路を学ぶプリントです。",
        filename: "mathC_5_No03.pdf",
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
            <PrintCard key={i} p={p} downloadBase="/prints/mathC" id={printAnchorId(chapter, i)} />
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

export default function MathCPage() {
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
              <span className="text-gray-800 font-medium">高校数学C</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">高校数学</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">高校数学C</h1>
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
