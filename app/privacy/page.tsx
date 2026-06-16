import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "プライバシーポリシー | 算数・数学のアトリエ",
};

const SECTIONS = [
  {
    title: "個人情報の取得について",
    body: "当サイトでは、お問い合わせの際に氏名、メールアドレスなどの個人情報をご提供いただく場合があります。",
  },
  {
    title: "個人情報の利用目的",
    body: "取得した個人情報は、お問い合わせへの対応のみに使用いたします。",
  },
  {
    title: "個人情報の第三者提供",
    body: "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "個人情報の管理",
    body: "取得した個人情報は適切に管理し、不正アクセス・漏洩等の防止に努めます。",
  },
  {
    title: "アクセス解析ツールについて",
    body: "当サイトでは、Googleアナリティクスを使用しています。Googleアナリティクスはデータ収集のためにCookieを使用しますが、個人を特定する情報は含まれません。詳しくはGoogleのプライバシーポリシーをご確認ください。",
  },
  {
    title: "お問い合わせ",
    body: null,
    custom: true,
  },
];

export default function PrivacyPage() {
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
              <span className="text-gray-800 font-medium">プライバシーポリシー</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">プライバシーポリシー</h1>
            <p className="text-gray-500 text-sm">
              運営者：算数・数学のアトリエ
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-7 sm:px-10 py-9 space-y-8">
            {SECTIONS.map((section, i) => (
              <section key={i}>
                <h2 className="flex items-center gap-2.5 font-black text-gray-900 text-base sm:text-lg mb-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                  {section.title}
                </h2>
                {section.custom ? (
                  <p className="text-gray-600 text-sm leading-loose pl-9">
                    個人情報の取り扱いに関するお問い合わせは、
                    <Link href="/contact" className="text-blue-600 hover:underline">
                      お問い合わせページ
                    </Link>
                    よりご連絡ください。
                  </p>
                ) : (
                  <p className="text-gray-600 text-sm leading-loose pl-9">{section.body}</p>
                )}
              </section>
            ))}

            <div className="pt-6 border-t border-gray-100 text-xs text-gray-400">
              制定日：2026年6月16日
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
