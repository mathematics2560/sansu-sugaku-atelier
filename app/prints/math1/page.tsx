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
  available: boolean;
  prints?: Print[];
};

const CHAPTERS: Chapter[] = [
  {
    num: "第1章",
    title: "数と式",
    available: true,
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
        desc: "乗法公式（展開公式）と因数分解の基本パターンを一覧で整理したプリントです。",
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
        desc: "たすきがけをスムーズに行うためのコツと、追加の練習問題を収録した補足プリントです。",
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
        desc: "絶対値の定義と計算、平方根の四則演算、分母の有理化をまとめた練習プリントです。",
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
    available: false,
  },
  {
    num: "第3章",
    title: "2次関数",
    available: false,
  },
  {
    num: "第4章",
    title: "図形と計量",
    available: false,
  },
  {
    num: "第5章",
    title: "データの分析",
    available: false,
  },
];

function PrintCard({ p }: { p: Print }) {
  const downloadHref = `/prints/${p.filename}`;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      {/* Badge row */}
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

      {/* Title */}
      <h3 className="font-black text-gray-900 text-base leading-snug mb-3">{p.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{p.desc}</p>

      {/* Download */}
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
      {/* Chapter header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="bg-orange-100 text-orange-700 text-xs font-black px-2.5 py-1 rounded-full">
            {chapter.num}
          </span>
          <h2 className="text-xl font-black text-gray-900">{chapter.title}</h2>
        </div>
        {!chapter.available && (
          <span className="text-xs font-bold bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
            準備中
          </span>
        )}
        <div className="h-px flex-1 border-t border-gray-200" />
      </div>

      {/* Content */}
      {chapter.available && chapter.prints ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {chapter.prints.map((p, i) => (
            <PrintCard key={i} p={p} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
          <p className="text-gray-400 text-sm font-medium">準備中です。しばらくお待ちください。</p>
        </div>
      )}
    </section>
  );
}

export default function Math1Page() {
  const totalPrints = CHAPTERS[0].prints?.length ?? 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        {/* Page header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            {/* Breadcrumb */}
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
              全 {CHAPTERS.length} 章収録・第1章プリント {totalPrints} 本
            </p>
          </div>
        </div>

        {/* Chapters */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 space-y-12">
          {CHAPTERS.map((chapter) => (
            <ChapterSection key={chapter.num} chapter={chapter} />
          ))}

          <p className="text-center text-xs text-gray-400">
            ※ PDFファイルは
            <code className="mx-1 bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">
              public/prints/
            </code>
            フォルダに配置してください。
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
