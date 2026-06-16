import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Category = {
  label: string;
  href: string | null;
};

type Group = {
  name: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  categories: Category[];
};

const GROUPS: Group[] = [
  {
    name: "小学生",
    color: "border-green-200",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    categories: [
      { label: "小学1年生", href: null },
      { label: "小学2年生", href: null },
      { label: "小学3年生", href: null },
      { label: "小学4年生", href: null },
      { label: "小学5年生", href: null },
      { label: "小学6年生", href: null },
    ],
  },
  {
    name: "中学生",
    color: "border-blue-200",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    categories: [
      { label: "中学1年生", href: null },
      { label: "中学2年生", href: null },
      { label: "中学3年生", href: null },
    ],
  },
  {
    name: "高校数学",
    color: "border-orange-200",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-700",
    categories: [
      { label: "高校数学Ⅰ", href: "/prints/math1" },
      { label: "高校数学A", href: null },
      { label: "高校数学Ⅱ", href: null },
      { label: "高校数学B", href: null },
      { label: "高校数学Ⅲ", href: null },
      { label: "高校数学C", href: null },
    ],
  },
  {
    name: "大学数学",
    color: "border-purple-200",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    categories: [
      { label: "線形代数", href: null },
      { label: "解析学", href: null },
      { label: "集合論", href: null },
      { label: "群論", href: null },
    ],
  },
];

function CategoryCard({ cat, badgeBg, badgeText }: { cat: Category; badgeBg: string; badgeText: string }) {
  if (cat.href) {
    return (
      <Link
        href={cat.href}
        className="group relative flex flex-col items-center justify-center gap-2 bg-white border-2 border-blue-500 rounded-2xl px-5 py-5 shadow-sm hover:shadow-md hover:bg-blue-50 hover:border-blue-600 transition-all duration-200 text-center"
      >
        <span className="font-black text-blue-700 text-base leading-snug">{cat.label}</span>
        <span className="text-xs font-bold text-blue-500 flex items-center gap-0.5">
          <span>プリントを見る</span>
          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-5 cursor-not-allowed opacity-60 text-center">
      <span className="font-bold text-gray-500 text-base leading-snug">{cat.label}</span>
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeBg} ${badgeText} opacity-70`}>
        準備中
      </span>
    </div>
  );
}

export default function PrintsPage() {
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
              <span className="text-gray-800 font-medium">プリント一覧</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">プリント一覧</h1>
            <p className="text-gray-500 text-sm">科目を選んでプリントをダウンロードできます</p>
          </div>
        </div>

        {/* Groups */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 space-y-10">
          {GROUPS.map((group) => (
            <section key={group.name}>
              <div className="flex items-center gap-3 mb-5">
                <span className={`inline-block text-xs font-black px-3 py-1.5 rounded-full ${group.badgeBg} ${group.badgeText}`}>
                  {group.name}
                </span>
                <div className={`h-px flex-1 border-t ${group.color}`} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {group.categories.map((cat) => (
                  <CategoryCard
                    key={cat.label}
                    cat={cat}
                    badgeBg={group.badgeBg}
                    badgeText={group.badgeText}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
