import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "単元から探す | 算数・数学のアトリエ",
  description: "数学の系統別に単元を探せます。",
};

type TopicItem = {
  label: string;
  grades: string;
  href: string | null;
};

type TopicCategory = {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  topBorder: string;
  iconBg: string;
  iconText: string;
  items: TopicItem[];
};

const CATEGORIES: TopicCategory[] = [
  {
    icon: "🔢",
    title: "数と式",
    subtitle: "代数",
    description: "数や式の性質、計算について学ぶ単元です。",
    topBorder: "border-t-4 border-blue-500",
    iconBg: "bg-blue-100",
    iconText: "text-blue-700",
    items: [
      { label: "多項式・数と式", grades: "数Ⅰ", href: "/prints/math1" },
      { label: "正の数・負の数", grades: "中1", href: null },
      { label: "文字と式", grades: "中1", href: null },
      { label: "式の計算", grades: "中1・中2", href: null },
      { label: "分数", grades: "小6・中1", href: null },
      { label: "小数", grades: "小4・小5", href: null },
    ],
  },
  {
    icon: "📐",
    title: "図形",
    subtitle: "幾何",
    description: "図形の性質や関係を学ぶ単元です。",
    topBorder: "border-t-4 border-green-500",
    iconBg: "bg-green-100",
    iconText: "text-green-700",
    items: [
      { label: "平面図形", grades: "小5〜中3", href: null },
      { label: "空間図形", grades: "中1〜中3", href: null },
      { label: "三角比", grades: "数Ⅱ", href: null },
      { label: "ベクトル", grades: "数B", href: null },
      { label: "座標幾何", grades: "数Ⅱ", href: null },
    ],
  },
  {
    icon: "📈",
    title: "変化と関係",
    subtitle: "解析",
    description: "関数や変化のようす、関係性を学ぶ単元です。",
    topBorder: "border-t-4 border-orange-400",
    iconBg: "bg-orange-100",
    iconText: "text-orange-700",
    items: [
      { label: "比例・反比例", grades: "小6・中1", href: null },
      { label: "一次関数", grades: "中2・数Ⅰ", href: null },
      { label: "二次関数", grades: "中3・数Ⅰ", href: null },
      { label: "指数関数", grades: "数Ⅱ", href: null },
      { label: "対数関数", grades: "数Ⅱ", href: null },
      { label: "微分法", grades: "数Ⅲ・大学", href: null },
    ],
  },
  {
    icon: "📊",
    title: "データと確からしさ",
    subtitle: "",
    description: "データの活用や確率について学ぶ単元です。",
    topBorder: "border-t-4 border-teal-500",
    iconBg: "bg-teal-100",
    iconText: "text-teal-700",
    items: [
      { label: "場合の数", grades: "中1・中3・数A", href: null },
      { label: "確率", grades: "中3・数A", href: null },
      { label: "データの活用", grades: "中1・中2", href: null },
      { label: "確率分布", grades: "数B・大学", href: null },
      { label: "統計的な推測", grades: "数Ⅲ・大学", href: null },
    ],
  },
  {
    icon: "🔬",
    title: "論証",
    subtitle: "",
    description: "論理的に考え、証明する力を育てる単元です。",
    topBorder: "border-t-4 border-purple-500",
    iconBg: "bg-purple-100",
    iconText: "text-purple-700",
    items: [
      { label: "命題と証明", grades: "数Ⅰ", href: null },
      { label: "図形の証明", grades: "中2〜数Ⅰ", href: null },
      { label: "不等式の証明", grades: "数Ⅰ・数Ⅱ", href: null },
      { label: "数学的帰納法", grades: "数B", href: null },
      { label: "証明の考え方", grades: "数Ⅰ・数Ⅱ・大学", href: null },
    ],
  },
  {
    icon: "🎯",
    title: "その他",
    subtitle: "",
    description: "上記以外のさまざまな内容を扱う単元です。",
    topBorder: "border-t-4 border-gray-400",
    iconBg: "bg-gray-100",
    iconText: "text-gray-700",
    items: [
      { label: "数列", grades: "数B", href: null },
      { label: "行列・行列式", grades: "数Ⅱ・数Ⅲ", href: null },
      { label: "複素数平面", grades: "数Ⅱ", href: null },
      { label: "微分方程式", grades: "数Ⅲ・大学", href: null },
      { label: "集合と論理", grades: "数Ⅰ・大学", href: null },
    ],
  },
];

const POPULAR_UNITS = [
  { label: "二次方程式の解き方", grade: "中3", gc: "bg-blue-100 text-blue-700" },
  { label: "分数のたし算・ひき算", grade: "小4", gc: "bg-green-100 text-green-700" },
  { label: "二次関数とグラフ", grade: "高1", gc: "bg-orange-100 text-orange-700" },
  { label: "行列の基本", grade: "大学", gc: "bg-purple-100 text-purple-700" },
  { label: "三角比の定義", grade: "高1", gc: "bg-orange-100 text-orange-700" },
  { label: "連立方程式", grade: "中2", gc: "bg-blue-100 text-blue-700" },
  { label: "面積と体積", grade: "小6", gc: "bg-green-100 text-green-700" },
  { label: "数列・等差数列", grade: "高2", gc: "bg-orange-100 text-orange-700" },
  { label: "展開と因数分解", grade: "中3", gc: "bg-blue-100 text-blue-700" },
  { label: "ベクトルの基本", grade: "高2", gc: "bg-orange-100 text-orange-700" },
];

function CategoryCard({ cat }: { cat: TopicCategory }) {
  const hasAvailable = cat.items.some((item) => item.href !== null);

  return (
    <div className={`bg-white rounded-2xl border border-gray-200 ${cat.topBorder} shadow-sm p-6`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-11 h-11 rounded-xl ${cat.iconBg} flex items-center justify-center text-2xl shrink-0`}>
          {cat.icon}
        </div>
        <div>
          <h2 className="font-black text-gray-900 text-lg leading-tight">
            {cat.title}
            {cat.subtitle && (
              <span className="text-sm font-medium text-gray-400 ml-1.5">（{cat.subtitle}）</span>
            )}
          </h2>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{cat.description}</p>

      {/* Items list */}
      <ul className="space-y-2">
        {cat.items.map((item) =>
          item.href ? (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-sm font-bold text-blue-700 truncate">{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    {item.grades}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </li>
          ) : (
            <li key={item.label}>
              <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl opacity-50">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                  <span className="text-sm text-gray-500 truncate">{item.label}</span>
                </div>
                <span className="text-xs font-medium bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full shrink-0">
                  {item.grades}
                </span>
              </div>
            </li>
          )
        )}
      </ul>

      {!hasAvailable && (
        <div className="mt-4 text-center">
          <span className="text-xs font-bold bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
            準備中です
          </span>
        </div>
      )}
    </div>
  );
}

export default function TopicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        {/* Page header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-blue-600 transition-colors">ホーム</Link>
              <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-800 font-medium">単元から探す</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">単元から探す</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              数学の系統別に単元を探せます。気になるテーマから学習を始めよう。
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 space-y-12">
          {/* Search bar */}
          <div className="relative max-w-lg">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
            </svg>
            <input
              type="text"
              placeholder="単元を検索..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              readOnly
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
              準備中
            </span>
          </div>

          {/* Category cards */}
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-6">系統から探す</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {CATEGORIES.map((cat) => (
                <CategoryCard key={cat.title} cat={cat} />
              ))}
            </div>
          </div>

          {/* Popular units */}
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-5">人気の単元</h2>
            <div className="flex flex-wrap gap-2.5">
              {POPULAR_UNITS.map((u) => (
                <Link
                  key={u.label}
                  href="#"
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-blue-300 hover:shadow-sm transition-all duration-150 group"
                >
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${u.gc}`}>{u.grade}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{u.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
