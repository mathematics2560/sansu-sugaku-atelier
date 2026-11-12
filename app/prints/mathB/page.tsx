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
        filename: "mathB_0_orientation.pdf",
      },
    ],
  },
  {
    num: "第1章",
    title: "数列",
    prints: [
      {
        id: "01",
        title: "数列と一般項",
        desc: "数列の項・初項・末項の意味と、一般項を推測する方法を学ぶプリントです。",
        filename: "mathB_1_No01.pdf",
      },
      {
        id: "02",
        title: "等差数列",
        desc: "等差数列の一般項の求め方と、等差中項を学ぶプリントです。",
        filename: "mathB_1_No02.pdf",
      },
      {
        id: "03",
        title: "等差数列の和",
        desc: "等差数列の和の公式と、和の最大値の求め方を学ぶプリントです。",
        filename: "mathB_1_No03.pdf",
      },
      {
        id: "04",
        title: "等比数列",
        desc: "等比数列の一般項の求め方と、等比中項を学ぶプリントです。",
        filename: "mathB_1_No04.pdf",
      },
      {
        id: "05",
        title: "等比数列の和",
        desc: "等比数列の和の公式と r=1 の場合分け、積立ての問題を学ぶプリントです。",
        filename: "mathB_1_No05.pdf",
      },
      {
        id: "06",
        title: "Σ記号",
        desc: "Σ記号の意味と Σk・Σk²・Σk³ の公式、Σの性質を学ぶプリントです。",
        filename: "mathB_1_No06.pdf",
      },
      {
        id: "07",
        title: "いろいろな数列の和",
        desc: "部分分数分解を使った和と、(等差)×(等比) の形の数列の和を学ぶプリントです。",
        filename: "mathB_1_No07.pdf",
      },
      {
        id: "08",
        title: "階差数列",
        desc: "階差数列から一般項を求める方法と、n=1 の確認の大切さを学ぶプリントです。",
        filename: "mathB_1_No08.pdf",
      },
      {
        id: "09",
        title: "和と一般項",
        desc: "a_n=S_n−S_(n−1) を使って和から一般項を求める方法を学ぶプリントです。",
        filename: "mathB_1_No09.pdf",
      },
      {
        id: "10",
        title: "群数列",
        desc: "数列を群に分けて考える方法と、第n群の最初の項の求め方を学ぶプリントです。",
        filename: "mathB_1_No10.pdf",
      },
      {
        id: "11",
        title: "漸化式①",
        desc: "等差型・等比型・階差型の漸化式の解き方を学ぶプリントです。",
        filename: "mathB_1_No11.pdf",
      },
      {
        id: "12",
        title: "漸化式②",
        desc: "a_(n+1)=pa_n+q 型の漸化式を、特性方程式を使って解く方法を学ぶプリントです。",
        filename: "mathB_1_No12.pdf",
      },
      {
        id: "13",
        title: "数学的帰納法",
        desc: "数学的帰納法による等式・不等式・整数の性質の証明を学ぶプリントです。",
        filename: "mathB_1_No13.pdf",
      },
    ],
  },
  {
    num: "第2章",
    title: "統計的な推測",
    prints: [
      {
        id: "01",
        title: "確率変数と確率分布",
        desc: "確率変数の意味と、確率分布表の作り方を学ぶプリントです。",
        filename: "mathB_2_No01.pdf",
      },
      {
        id: "02",
        title: "期待値と分散",
        desc: "期待値 E(X)・分散 V(X)・標準偏差 σ(X) と、V(X)=E(X²)−{E(X)}² を学ぶプリントです。",
        filename: "mathB_2_No02.pdf",
      },
      {
        id: "03",
        title: "aX+b の期待値と分散",
        desc: "確率変数を aX+b に変換したときの期待値・分散の式と使い方を学ぶプリントです。",
        filename: "mathB_2_No03.pdf",
      },
      {
        id: "04",
        title: "確率変数の和と積",
        desc: "E(X+Y) と、X・Y が独立なときの E(XY)・V(X+Y) を学ぶプリントです。",
        filename: "mathB_2_No04.pdf",
      },
      {
        id: "05",
        title: "二項分布",
        desc: "二項分布 B(n,p) と、その期待値 np・分散 np(1−p) を学ぶプリントです。",
        filename: "mathB_2_No05.pdf",
      },
      {
        id: "06",
        title: "正規分布",
        desc: "連続型確率変数と正規分布、標準化と正規分布表の使い方を学ぶプリントです。",
        filename: "mathB_2_No06.pdf",
      },
      {
        id: "07",
        title: "二項分布の正規近似",
        desc: "n が大きいときに二項分布を正規分布で近似して計算する方法を学ぶプリントです。",
        filename: "mathB_2_No07.pdf",
      },
      {
        id: "08",
        title: "母集団と標本",
        desc: "標本調査の考え方と、標本平均の期待値・標準偏差、大数の法則を学ぶプリントです。",
        filename: "mathB_2_No08.pdf",
      },
      {
        id: "09",
        title: "推定",
        desc: "母平均・母比率の信頼区間（95%）の求め方を学ぶプリントです。",
        filename: "mathB_2_No09.pdf",
      },
      {
        id: "10",
        title: "仮説検定",
        desc: "帰無仮説と有意水準、両側検定・片側検定の進め方を学ぶプリントです。",
        filename: "mathB_2_No10.pdf",
      },
    ],
  },
  {
    num: "第3章",
    title: "数学と社会生活",
    prints: [
      {
        id: "01",
        title: "数学的な問題解決の流れ",
        desc: "現実の問題を式で表すモデル化と、得られた結果の解釈を学ぶプリントです。",
        filename: "mathB_3_No01.pdf",
      },
      {
        id: "02",
        title: "データにもとづく予測",
        desc: "散布図に近似する直線・曲線を当てはめて、将来を予測する方法を学ぶプリントです。",
        filename: "mathB_3_No02.pdf",
      },
      {
        id: "03",
        title: "社会の中の数学",
        desc: "議席の配分や割引の比較、待ち行列など、社会の中で使われる数学を学ぶプリントです。",
        filename: "mathB_3_No03.pdf",
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
            <PrintCard key={i} p={p} downloadBase="/prints/mathB" id={printAnchorId(chapter, i)} />
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

export default function MathBPage() {
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
              <span className="text-gray-800 font-medium">高校数学B</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">高校数学</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">高校数学B</h1>
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
