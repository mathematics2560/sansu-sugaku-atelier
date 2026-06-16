import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "お問い合わせ | 算数・数学のアトリエ",
};

export default function ContactPage() {
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
              <span className="text-gray-800 font-medium">お問い合わせ</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">お問い合わせ</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              ご質問・ご要望などはこちらからお気軽にどうぞ。
            </p>
          </div>
        </div>

        {/* Form area */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
          {/* FAQ notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 mb-8 flex items-start gap-3">
            <span className="text-blue-500 mt-0.5 shrink-0">💡</span>
            <p className="text-sm text-blue-700 leading-relaxed">
              お問い合わせの前に、
              <Link href="/faq" className="font-bold underline hover:no-underline">
                よくある質問
              </Link>
              もご確認ください。解決策が見つかるかもしれません。
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 sm:p-9">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
