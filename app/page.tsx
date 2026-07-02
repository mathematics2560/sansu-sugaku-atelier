import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import newsData from "@/data/news.json";

function getTagColor(tag: string): string {
  switch (tag) {
    case "NEW":     return "bg-green-100 text-green-700";
    case "プリント": return "bg-orange-100 text-orange-700";
    case "動画":    return "bg-blue-100 text-blue-700";
    default:        return "bg-gray-100 text-gray-600";
  }
}

const GRADES = [
  {
    active: false,
    icon: "✏️",
    label: "小学生の算数",
    sub: "1〜6年生",
    desc: "たし算・ひき算から分数・割合・図形まで、算数の基礎をていねいに学ぼう",
    bg: "bg-green-50",
    border: "border-green-200",
    iconBg: "bg-green-100",
    text: "text-green-700",
    href: "/grade/elementary",
  },
  {
    active: true,
    icon: "📐",
    label: "中学生の数学",
    sub: "中1〜中3",
    desc: "方程式・関数・図形の証明など、中学数学の全範囲をわかりやすく解説",
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    text: "text-blue-700",
    href: "/grade/middle",
  },
  {
    active: true,
    icon: "📈",
    label: "高校数学",
    sub: "数学Ⅰ・A・Ⅱ・B・Ⅲ・C",
    desc: "三角関数・微分積分・ベクトル・数列まで高校数学を完全網羅",
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "bg-orange-100",
    text: "text-orange-700",
    href: "/grade/high-school",
  },
  {
    active: false,
    icon: "🎓",
    label: "大学数学",
    sub: "線形代数・解析学ほか",
    desc: "線形代数・微分方程式・複素解析など、大学数学を基礎から丁寧に学ぶ",
    bg: "bg-purple-50",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    text: "text-purple-700",
    href: "/grade/university",
  },
];

const POPULAR_UNITS = [
  { label: "正の数・負の数", grade: "中1", gc: "bg-blue-100 text-blue-700", href: "/prints/chu1#chapter-1" },
  { label: "数と式", grade: "数Ⅰ", gc: "bg-orange-100 text-orange-700", href: "/prints/math1#chapter-1" },
  { label: "集合と命題", grade: "数Ⅰ", gc: "bg-orange-100 text-orange-700", href: "/prints/math1#chapter-2" },
  { label: "2次関数", grade: "数Ⅰ", gc: "bg-orange-100 text-orange-700", href: "/prints/math1#chapter-3" },
  { label: "図形と計量", grade: "数Ⅰ", gc: "bg-orange-100 text-orange-700", href: "/prints/math1#chapter-4" },
  { label: "データの分析", grade: "数Ⅰ", gc: "bg-orange-100 text-orange-700", href: "/prints/math1#chapter-5" },
  { label: "場合の数", grade: "数A", gc: "bg-teal-100 text-teal-700", href: "/prints/mathA#chapter-1" },
  { label: "確率", grade: "数A", gc: "bg-teal-100 text-teal-700", href: "/prints/mathA#chapter-2" },
  { label: "図形の性質", grade: "数A", gc: "bg-teal-100 text-teal-700", href: "/prints/mathA#chapter-3" },
  { label: "数学と人間の活動", grade: "数A", gc: "bg-teal-100 text-teal-700", href: "/prints/mathA#chapter-4" },
  { label: "式と証明", grade: "数Ⅱ", gc: "bg-indigo-100 text-indigo-700", href: "/prints/math2#chapter-1" },
  { label: "複素数と方程式", grade: "数Ⅱ", gc: "bg-indigo-100 text-indigo-700", href: "/prints/math2#chapter-2" },
  { label: "図形と方程式", grade: "数Ⅱ", gc: "bg-indigo-100 text-indigo-700", href: "/prints/math2#chapter-3" },
  { label: "三角関数", grade: "数Ⅱ", gc: "bg-indigo-100 text-indigo-700", href: "/prints/math2#chapter-4" },
  { label: "指数関数と対数関数", grade: "数Ⅱ", gc: "bg-indigo-100 text-indigo-700", href: "/prints/math2#chapter-5" },
];

const FEATURES = [
  {
    icon: "🎥",
    title: "わかりやすい動画授業",
    desc: "各単元を丁寧に解説した動画を無料で視聴できます。難しい概念も順を追って説明するので、初めての方でも安心して学べます。",
    topBorder: "border-t-4 border-blue-500",
    iconBg: "bg-blue-50",
  },
  {
    icon: "📄",
    title: "オリジナルの無料プリント",
    desc: "動画に対応したオリジナルプリントをPDFで無料ダウンロード。繰り返し印刷して、手を動かしながら定着させられます。",
    topBorder: "border-t-4 border-orange-400",
    iconBg: "bg-orange-50",
  },
  {
    icon: "🔄",
    title: "つまずいた場所から、もう一度。",
    desc: "「ここからわからなくなった」という場所に戻って学び直せるよう、単元を細かく分けて体系的に構成しています。",
    topBorder: "border-t-4 border-green-500",
    iconBg: "bg-green-50",
  },
];


const HERO_STATS = [
  { icon: "🎥", num: "21本", label: "動画コンテンツ", solid: true },
  { icon: "📄", num: "101枚", label: "無料プリント", solid: false },
  { icon: "📚", num: "中1・高校Ⅰ・A・Ⅱ", label: "対応コンテンツ", solid: false },
  { icon: "✅", num: "完全無料", label: "登録不要", solid: true, green: true },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ── ヒーロー ── */}
        <section className="bg-gradient-to-br from-white via-blue-50/40 to-blue-100/60 border-b border-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left: text */}
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-5">
                  <span>✅</span>
                  <span>動画もプリントも全部無料</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
                  算数・数学を<br />
                  <span className="text-blue-600">最初からていねいに。</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  小学校から大学数学まで、すべての単元をわかりやすく解説。
                  つまずいた場所から、もう一度やり直せる学びの場をつくりました。
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/grade"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-sm"
                  >
                    <span>📚</span>
                    <span>学年から探す</span>
                  </Link>
                  <Link
                    href="/prints"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-bold px-6 py-3.5 rounded-xl border border-gray-200 transition-colors shadow-sm"
                  >
                    <span>📄</span>
                    <span>プリント一覧を見る</span>
                  </Link>
                </div>
              </div>

              {/* Right: stats grid */}
              <div className="shrink-0 w-full max-w-xs sm:max-w-sm">
                <div className="grid grid-cols-2 gap-3">
                  {HERO_STATS.map((s) => (
                    <div
                      key={s.label}
                      className={`rounded-2xl p-5 shadow-sm ${
                        s.green
                          ? "bg-green-600 text-white"
                          : s.solid
                          ? "bg-blue-600 text-white"
                          : "bg-white border border-gray-200 text-gray-800"
                      }`}
                    >
                      <div className="text-2xl mb-2">{s.icon}</div>
                      <div className="font-black text-lg leading-tight">{s.num}</div>
                      <div className={`text-xs mt-0.5 ${s.solid || s.green ? "text-white/80" : "text-gray-500"}`}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 学年カテゴリ ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">学年から探す</h2>
              <p className="text-gray-500 text-sm sm:text-base">
                あなたの学年・レベルに合わせた学習コンテンツを探せます
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {GRADES.map((g) =>
                g.active ? (
                  <Link
                    key={g.label}
                    href={g.href}
                    className={`group rounded-2xl border ${g.border} ${g.bg} p-6 hover:shadow-md transition-all duration-200`}
                  >
                    <div className={`w-12 h-12 ${g.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      {g.icon}
                    </div>
                    <h3 className={`font-black text-lg ${g.text} mb-1`}>{g.label}</h3>
                    <p className="text-xs text-gray-500 mb-3">{g.sub}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{g.desc}</p>
                    <div className={`flex items-center gap-1 text-sm font-bold ${g.text}`}>
                      <span>学習する</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={g.label}
                    className={`rounded-2xl border ${g.border} ${g.bg} p-6 opacity-50 cursor-not-allowed`}
                  >
                    <div className={`w-12 h-12 ${g.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                      {g.icon}
                    </div>
                    <h3 className={`font-black text-lg ${g.text} mb-1`}>{g.label}</h3>
                    <p className="text-xs text-gray-500 mb-3">{g.sub}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{g.desc}</p>
                    <span className="text-xs font-bold bg-white/80 text-gray-500 px-2.5 py-1 rounded-full">
                      準備中
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── 人気の単元・テーマ ── */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="flex items-start sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">人気の単元・テーマ</h2>
                <p className="text-gray-500 text-sm">よく学ばれている単元をピックアップしました</p>
              </div>
              <Link
                href="/topics"
                className="shrink-0 flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>すべて見る</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {POPULAR_UNITS.map((u) => (
                <Link
                  key={u.label}
                  href={u.href}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-blue-300 hover:shadow-sm transition-all duration-150 group"
                >
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${u.gc}`}>{u.grade}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                    {u.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3つの特徴 ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                算数・数学のアトリエの3つの特徴
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                ひとりで学べる、すべてのコンテンツが無料
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className={`rounded-2xl bg-white border border-gray-200 ${f.topBorder} shadow-sm p-7`}
                >
                  <div className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center text-3xl mb-5`}>
                    {f.icon}
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-3">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── お知らせ ── */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-2xl font-black text-gray-900">お知らせ</h2>
              <Link
                href="/news"
                className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>もっと見る</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
              {newsData.slice(0, 3).map((item, i) => (
                <Link
                  key={i}
                  href="/news"
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm text-gray-400 shrink-0 tabular-nums">{item.date}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${getTagColor(item.tag)}`}>
                    {item.tag}
                  </span>
                  <span className="text-sm text-gray-700 font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
