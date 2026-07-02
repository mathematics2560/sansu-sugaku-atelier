import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopicsBrowser from "./TopicsBrowser";
import type { TopicCategory } from "./types";

export const metadata = {
  title: "単元から探す | 算数・数学のアトリエ",
  description: "数学の系統別に単元を探せます。",
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
      { label: "多項式・数と式", grades: "数Ⅰ", href: "/prints/math1#chapter-1" },
      { label: "複素数と方程式", grades: "数Ⅱ", href: "/prints/math2#chapter-2" },
      { label: "整数の性質", grades: "数A", href: "/prints/mathA#chapter-4" },
      { label: "正の数・負の数", grades: "中1", href: "/prints/chu1#chapter-1" },
      { label: "文字と式", grades: "中1", href: "/prints/chu1#chapter-2" },
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
      { label: "平面図形", grades: "小5〜中3", href: "/prints/chu1#chapter-5" },
      { label: "空間図形", grades: "中1〜中3", href: "/prints/chu1#chapter-6" },
      { label: "三角比", grades: "数Ⅰ", href: "/prints/math1#chapter-4" },
      { label: "座標幾何（図形と方程式）", grades: "数Ⅱ", href: "/prints/math2#chapter-3" },
      { label: "ベクトル", grades: "数C", href: null },
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
      { label: "比例・反比例", grades: "小6・中1", href: "/prints/chu1#chapter-4" },
      { label: "一次関数", grades: "中2・数Ⅰ", href: null },
      { label: "二次関数", grades: "中3・数Ⅰ", href: "/prints/math1#chapter-3" },
      { label: "三角関数", grades: "数Ⅱ", href: "/prints/math2#chapter-4" },
      { label: "指数関数", grades: "数Ⅱ", href: "/prints/math2#chapter-5" },
      { label: "対数関数", grades: "数Ⅱ", href: "/prints/math2#chapter-5" },
      { label: "微分法", grades: "数Ⅱ・数Ⅲ", href: null },
      { label: "積分法", grades: "数Ⅱ・数Ⅲ", href: null },
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
      { label: "場合の数", grades: "中1・中3・数A", href: "/prints/mathA#chapter-1" },
      { label: "確率", grades: "中3・数A", href: "/prints/mathA#chapter-2" },
      { label: "データの活用・データの分析", grades: "中1・中2・数Ⅰ", href: "/prints/math1#chapter-5" },
      { label: "確率分布", grades: "数B", href: null },
      { label: "統計的な推測", grades: "数B・大学", href: null },
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
      { label: "命題と証明", grades: "数Ⅰ", href: "/prints/math1#chapter-2" },
      { label: "図形の証明（図形の性質）", grades: "中2・中3・数A", href: "/prints/mathA#chapter-3" },
      { label: "等式・不等式の証明", grades: "数Ⅱ", href: "/prints/math2#chapter-1" },
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
      { label: "複素数平面", grades: "数C", href: null },
      { label: "平面上の曲線", grades: "数C", href: null },
      { label: "行列・行列式", grades: "数C・大学", href: null },
      { label: "微分方程式", grades: "数Ⅲ・大学", href: null },
      { label: "集合と論理", grades: "数Ⅰ・大学", href: "/prints/math1#chapter-2" },
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
          <TopicsBrowser categories={CATEGORIES} popularUnits={POPULAR_UNITS} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
