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
    title: "数と式",
    prints: [
      {
        id: "01",
        title: "単項式・多項式・降べきの順・指数法則",
        desc: "多項式の基本的な用語・表し方と、指数法則の確認問題を収録したプリントです。",
        filename: "1_数と式_No.1.pdf",
      },
      {
        id: "02",
        title: "展開・因数分解の公式",
        desc: "中学で習った展開・因数分解を復習し、高校で新たに学ぶ公式（3乗の展開、3変数の2乗、3乗の和・差の因数分解など）を整理したプリントです。",
        filename: "1_数と式_No.2.pdf",
      },
      {
        id: "03",
        title: "たすきがけ",
        desc: "たすきがけによる因数分解の手順をわかりやすく解説し、練習問題を収録しています。",
        filename: "1_数と式_No.3.pdf",
      },
      {
        id: "03",
        supplement: true,
        title: "たすきがけのコツ",
        desc: "式の符号から括弧内の符号を判定する方法や、不要なパターンを消去するテクニックなど、たすきがけを効率よく行うコツを解説した補足プリントです。",
        filename: "1_数と式_No.3補足.pdf",
      },
      {
        id: "04",
        title: "実数・循環小数",
        desc: "有理数・無理数の分類、循環小数の表し方と有理数への変換方法を学ぶプリントです。",
        filename: "1_数と式_No.4.pdf",
      },
      {
        id: "05",
        title: "絶対値・平方根・分母の有理化",
        desc: "絶対値の定義と計算、平方根の性質（√a²=|a|）、分母の有理化をまとめた練習プリントです。",
        filename: "1_数と式_No.5.pdf",
      },
      {
        id: "06",
        title: "2重根号",
        desc: "2重根号（√の中に√がある式）の外し方と変形の問題を集めたプリントです。",
        filename: "1_数と式_No.6.pdf",
      },
      {
        id: "07",
        title: "対称式",
        desc: "対称式の性質と、基本対称式を使った計算・変形問題を収録したプリントです。",
        filename: "1_数と式_No.7.pdf",
      },
      {
        id: "08",
        title: "1次不等式",
        desc: "1次不等式の解き方の手順と、数直線への表し方を練習するプリントです。",
        filename: "1_数と式_No.8.pdf",
      },
      {
        id: "09",
        title: "連立不等式",
        desc: "2つ以上の不等式を同時に解く「連立不等式」の解法を段階的に練習するプリントです。",
        filename: "1_数と式_No.9.pdf",
      },
      {
        id: "10",
        title: "絶対値を含む方程式",
        desc: "| |を含む方程式を場合分けで解く手順を整理した練習プリントです。",
        filename: "1_数と式_No.10.pdf",
      },
      {
        id: "11",
        title: "絶対値を含む不等式",
        desc: "| |を含む不等式の解法と、解の表し方に関する注意点をまとめたプリントです。",
        filename: "1_数と式_No.11.pdf",
      },
    ],
  },
  {
    num: "第2章",
    title: "集合と命題",
    prints: [
      {
        id: "01",
        title: "集合の表し方・要素と集合",
        desc: "集合・要素の定義と∈・∉の記号、要素の列挙法と条件記法による集合の表し方を学ぶ基礎プリントです。",
        filename: "2_集合と命題_No.1.pdf",
      },
      {
        id: "02",
        title: "部分集合・共通部分・和集合・補集合・ド・モルガンの法則",
        desc: "部分集合・空集合の概念から、共通部分(∩)・和集合(∪)・補集合の計算、ド・モルガンの法則までを整理したプリントです。",
        filename: "2_集合と命題_No.2.pdf",
      },
      {
        id: "03",
        title: "命題と真偽・十分条件・必要条件",
        desc: "命題の定義と真偽の判定、p⇒qの意味、十分条件・必要条件の判定方法を学ぶプリントです。",
        filename: "2_集合と命題_No.3.pdf",
      },
      {
        id: "03",
        supplement: true,
        title: "十分条件・必要条件の理解と条件の否定",
        desc: "十分条件・必要条件の意味をより深く理解し、条件の否定やド・モルガンの法則（条件版）を学ぶ補足プリントです。",
        filename: "2_集合と命題_No.3補足.pdf",
      },
      {
        id: "04",
        title: "命題の逆・裏・対偶",
        desc: "命題の逆・裏・対偶の定義と、真理値表を用いて命題と対偶の真偽が一致することを理解するプリントです。",
        filename: "2_集合と命題_No.4.pdf",
      },
      {
        id: "05",
        title: "背理法",
        desc: "背理法を使った証明の手順と、典型的な証明問題を収録したプリントです。",
        filename: "2_集合と命題_No.5.pdf",
      },
    ],
  },
  {
    num: "第3章",
    title: "2次関数",
    prints: [
      {
        id: "01",
        title: "関数の定義・定義域と値域・1次関数",
        desc: "関数の定義やf(x)の表し方、定義域・値域、座標平面の象限、1次関数とグラフの復習を扱う導入プリントです。",
        filename: "3_2次関数_No.1.pdf",
      },
      {
        id: "02",
        title: "y=ax²のグラフと平行移動",
        desc: "y=ax²の復習から始め、グラフの平行移動の方法を学び、y=a(x-p)²+qの頂点と軸の方程式を理解するプリントです。",
        filename: "3_2次関数_No.2.pdf",
      },
      {
        id: "03",
        title: "平方完成",
        desc: "y=ax²+bx+cをy=a(x-p)²+qの形に変形する平方完成の手順を学び、グラフの軸と頂点を求める練習プリントです。",
        filename: "3_2次関数_No.3.pdf",
      },
      {
        id: "04",
        title: "対称移動と2次関数の表し方",
        desc: "x軸・y軸・原点に関する対称移動の方法と、2次関数の3つの表し方（標準形・一般形・因数分解形）を学ぶプリントです。",
        filename: "3_2次関数_No.4.pdf",
      },
      {
        id: "05",
        title: "2次関数の最大値・最小値（軸が動くタイプ）",
        desc: "2次関数の最大値・最小値の基本（定義域の制限あり・なし）から、軸が動くタイプの場合分けまでを扱うプリントです。",
        filename: "3_2次関数_No.5.pdf",
      },
      {
        id: "06",
        title: "2次関数の最大値・最小値（定義域が動くタイプ）",
        desc: "定義域が変化する場合の2次関数の最大値・最小値を、場合分けで求める方法を学ぶプリントです。",
        filename: "3_2次関数_No.6.pdf",
      },
      {
        id: "07",
        title: "判別式と放物線の共有点",
        desc: "判別式D=b²-4acによる2次方程式の解の個数の判定と、放物線とx軸・直線の共有点の求め方を学ぶプリントです。",
        filename: "3_2次関数_No.7.pdf",
      },
      {
        id: "08",
        title: "2次不等式",
        desc: "2次不等式をグラフを利用して解く方法と、2次不等式の連立についての練習プリントです。",
        filename: "3_2次関数_No.8.pdf",
      },
    ],
  },
  {
    num: "第4章",
    title: "図形と計量",
    prints: [
      {
        id: "01",
        title: "三角比の定義（sin・cos・tan）",
        desc: "直角三角形における三角比の定義と、特殊角の値を学ぶ基礎プリントです。",
        filename: "4_図形と計量_No.1.pdf",
      },
      {
        id: "02",
        title: "三角比の拡張・変換・基本公式",
        desc: "単位円を用いた三角比の拡張（0°〜180°）、90°-θ・180°-θの変換、sin²θ+cos²θ=1などの基本公式を学ぶプリントです。",
        filename: "4_図形と計量_No.2.pdf",
      },
      {
        id: "03",
        title: "三角比の方程式・不等式",
        desc: "sinθ=kやcosθ>kのような三角比が絡んだ方程式・不等式を、単位円を使って解く方法を学ぶプリントです。",
        filename: "4_図形と計量_No.3.pdf",
      },
      {
        id: "04",
        title: "正弦定理と余弦定理",
        desc: "正弦定理（a/sinA=2R）と余弦定理（a²=b²+c²-2bc cosA）の公式と、辺・角・外接円の半径を求める応用問題を扱うプリントです。",
        filename: "4_図形と計量_No.4.pdf",
      },
      {
        id: "05",
        title: "三角形の面積と内接円",
        desc: "三角形の面積公式S=(1/2)bc sinAと内接円の半径を用いた面積公式、有名な三角形（辺と角の関係）を学ぶプリントです。",
        filename: "4_図形と計量_No.5.pdf",
      },
    ],
  },
  {
    num: "第5章",
    title: "データの分析",
    prints: [
      {
        id: "01",
        title: "データの代表値（平均値・中央値・最頻値）",
        desc: "平均値・中央値・最頻値の求め方と、計算を楽にする仮平均の手法を学ぶ基礎プリントです。",
        filename: "5_データの分析_No.1.pdf",
      },
      {
        id: "02",
        title: "四分位数と箱ひげ図",
        desc: "四分位数・四分位範囲の求め方と箱ひげ図の作成・読み取り方、外れ値の考え方を学ぶプリントです。",
        filename: "5_データの分析_No.2.pdf",
      },
      {
        id: "03",
        title: "分散と標準偏差",
        desc: "データの散らばりを表す分散・標準偏差の計算手順を段階的に練習するプリントです。",
        filename: "5_データの分析_No.3.pdf",
      },
      {
        id: "04",
        title: "分散の公式と変量の変換",
        desc: "分散の計算公式s²=x²̄-(x̄)²の導出と、y=ax+bによる変量の変換が平均値・分散・標準偏差に与える影響を学ぶプリントです。",
        filename: "5_データの分析_No.4.pdf",
      },
      {
        id: "05",
        title: "散布図・相関関係・共分散",
        desc: "2変数の関係を散布図で表す方法と、正・負・無相関の判断、共分散の定義と計算を学ぶプリントです。",
        filename: "5_データの分析_No.5.pdf",
      },
      {
        id: "06",
        title: "相関係数",
        desc: "相関係数の計算式と、値の意味・解釈の方法を整理した練習プリントです。",
        filename: "5_データの分析_No.6.pdf",
      },
      {
        id: "07",
        title: "仮説検定の考え方",
        desc: "仮説の設定・基準となる確率の決定・データからの判定という仮説検定の流れを、コイン投げの例で学ぶプリントです。",
        filename: "5_データの分析_No.7.pdf",
      },
    ],
  },
];

const TOTAL_PRINTS = CHAPTERS.reduce((sum, ch) => sum + ch.prints.length, 0);

function PrintCard({ p }: { p: Print }) {
  const downloadHref = `/prints/math1/${p.filename}`;

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

export default function Math1Page() {
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
              <span className="text-gray-800 font-medium">高校数学Ⅰ</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">高校数学</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">高校数学Ⅰ</h1>
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
