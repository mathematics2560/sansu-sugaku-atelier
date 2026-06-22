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
    title: "正の数・負の数",
    prints: [
      {
        id: "01",
        title: "正の数・負の数の意味",
        desc: "0より小さい数（負の数）の存在を知り、正の数・負の数の意味と、自然数・整数などの数の仲間分けを学ぶプリントです。",
        filename: "1_正の数・負の数_No.1.pdf",
      },
      {
        id: "02",
        title: "絶対値と数の大小",
        desc: "数直線上での正負の数の位置と絶対値の意味を理解し、不等号を使って数の大小を表せるようになるプリントです。",
        filename: "1_正の数・負の数_No.2.pdf",
      },
      {
        id: "03",
        title: "正の数・負の数の加法・減法",
        desc: "正負の数のたし算・ひき算のしくみを学び、減法を加法に直す方法と、項を使った式の整理のしかたを練習するプリントです。",
        filename: "1_正の数・負の数_No.3.pdf",
      },
      {
        id: "04",
        title: "正の数・負の数の乗法・除法",
        desc: "正負の数のかけ算・わり算の符号のルールと、逆数を使った除法の計算方法を練習するプリントです。",
        filename: "1_正の数・負の数_No.4.pdf",
      },
      {
        id: "05",
        title: "指数と四則計算",
        desc: "累乗（指数）の意味と正負の数の累乗の計算方法、カッコの中→累乗→乗除→加減という四則計算の正しい順序を学ぶプリントです。",
        filename: "1_正の数・負の数_No.5.pdf",
      },
      {
        id: "06",
        title: "数の範囲",
        desc: "四則計算の結果がもとの数の範囲（自然数・整数・数全体）に収まるかどうかを判断し、数の集合の広がりを理解するプリントです。",
        filename: "1_正の数・負の数_No.6.pdf",
      },
      {
        id: "07",
        title: "素数と素因数分解",
        desc: "素数の意味と見分け方を学び、自然数を素数だけのかけ算で表す素因数分解ができるようになるプリントです。",
        filename: "1_正の数・負の数_No.7.pdf",
      },
    ],
  },
  {
    num: "第2章",
    title: "文字の式",
    prints: [],
  },
  {
    num: "第3章",
    title: "方程式",
    prints: [],
  },
  {
    num: "第4章",
    title: "変化と対応",
    prints: [],
  },
  {
    num: "第5章",
    title: "平面図形",
    prints: [],
  },
  {
    num: "第6章",
    title: "空間図形",
    prints: [],
  },
  {
    num: "第7章",
    title: "データの活用",
    prints: [],
  },
];

const TOTAL_PRINTS = CHAPTERS.reduce((sum, ch) => sum + ch.prints.length, 0);

function chapterAnchorId(chapter: Chapter): string {
  return `chapter-${chapter.num.replace(/[^0-9]/g, "")}`;
}

function PrintCard({ p }: { p: Print }) {
  const downloadHref = `/prints/chu1/${p.filename}`;

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
    <section id={chapterAnchorId(chapter)} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="bg-blue-100 text-blue-700 text-xs font-black px-2.5 py-1 rounded-full">
            {chapter.num}
          </span>
          <h2 className="text-xl font-black text-gray-900">{chapter.title}</h2>
        </div>
        <div className="h-px flex-1 border-t border-gray-200" />
      </div>
      {chapter.prints.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {chapter.prints.map((p, i) => (
            <PrintCard key={i} p={p} />
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

export default function Chu1Page() {
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
              <span className="text-gray-800 font-medium">中学1年生</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">中学生の数学</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">中学1年生</h1>
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
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-blue-300 hover:shadow-sm transition-all duration-150"
              >
                <span className="text-xs font-black bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
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
