import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "プリント利用規約 | 算数・数学のアトリエ",
};

export default function TermsOfUsePage() {
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
              <span className="text-gray-800 font-medium">プリント利用規約</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">プリント利用規約</h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-10">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10 space-y-8 text-sm leading-relaxed text-gray-700">

            <p>
              本教材をご利用いただきありがとうございます。<br />
              本教材をダウンロード、閲覧、印刷または利用した時点で、本規約に同意したものとみなします。<br />
              本教材（PDF、動画、画像等を含む）の著作権は「算数・数学のアトリエ」に帰属します。
            </p>

            <section>
              <h2 className="text-base font-black text-gray-900 mb-3 pb-2 border-b border-gray-200">
                利用できること
              </h2>
              <ul className="space-y-1.5 list-none">
                {[
                  "個人の学習目的での利用",
                  "学校・塾・家庭教師等での授業利用",
                  "印刷しての利用",
                  "学習指導のための一部引用",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-500 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 mb-3 pb-2 border-b border-gray-200">
                禁止事項
              </h2>
              <p className="mb-3 text-gray-600">以下の行為を禁止します。</p>
              <ul className="space-y-1.5 list-none">
                {[
                  "教材の全部または一部を無断で再配布すること",
                  "教材の全部または一部をインターネット上に掲載すること",
                  "教材の全部または一部を販売すること",
                  "教材を改変し、自作教材として配布すること",
                  "著作権表示を削除すること",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-500 font-bold shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 mb-3 pb-2 border-b border-gray-200">
                SNS等への掲載について
              </h2>
              <ul className="space-y-1.5 list-none">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-500 font-bold shrink-0">・</span>
                  <span>教材の表紙や一部ページを紹介目的で掲載することは可能です。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-500 font-bold shrink-0">・</span>
                  <span>その際は「算数・数学のアトリエ」の名称または掲載元を明記してください。</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 mb-3 pb-2 border-b border-gray-200">
                免責事項
              </h2>
              <ul className="space-y-1.5 list-none">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-500 font-bold shrink-0">・</span>
                  <span>本教材の内容については正確性の確保に努めていますが、利用により生じた損害等については責任を負いかねます。</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 mb-3 pb-2 border-b border-gray-200">
                規約の変更
              </h2>
              <ul className="space-y-1.5 list-none">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-500 font-bold shrink-0">・</span>
                  <span>本規約は予告なく変更される場合があります。</span>
                </li>
              </ul>
            </section>

            <div className="pt-4 border-t border-gray-100 text-center">
              <Link
                href="/prints"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                コンテンツ一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
