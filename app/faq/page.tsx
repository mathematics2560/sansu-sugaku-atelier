import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "よくある質問 | 算数・数学のアトリエ",
};

type QA = {
  q: string;
  a: React.ReactNode;
};

type FaqCategory = {
  title: string;
  items: QA[];
};

const CATEGORIES: FaqCategory[] = [
  {
    title: "サービス全般",
    items: [
      {
        q: "「算数・数学のアトリエ」ってなんですか？",
        a: "算数・数学のアトリエは、現在、高校数学を中心とした無料の学習プラットフォームです。プリント教材・YouTube動画・Webサイトを通じて、誰でもいつでも学べる環境を提供しています。今後、中学数学や小学算数にも対応範囲を広げていく予定です。",
      },
      {
        q: "誰が運営していますか？",
        a: "愛知教育大学で数学教育を専門に学ぶ大学生が、個人で企画・制作・運営しています。教員免許取得課程で培った授業設計や教材開発のスキルを活かし、すべてのコンテンツを一人で作っています。",
      },
      {
        q: "対象は誰ですか？",
        a: "主に高校生（数学Ⅰ・数学Aなど）を対象としていますが、中学生向けのコンテンツも順次追加予定です。学び直しをしたい社会人の方や、お子さんの学習をサポートしたい保護者の方にもご利用いただけます。",
      },
    ],
  },
  {
    title: "プリント教材について",
    items: [
      {
        q: "プリントは無料ですか？",
        a: "はい、すべてのプリント教材は無料でダウンロード・印刷してご利用いただけます。会員登録も不要です。",
      },
      {
        q: "どんなプリントがありますか？",
        a: "現在、数学Ⅰ（全単元）・数学A（全単元）・数学Ⅱ（一部単元）のプリントを公開しています。各プリントは単元・トピックごとに分かれており、基礎から演習まで段階的に取り組めます。今後も対応科目・単元を順次拡大していく予定です。",
      },
      {
        q: "プリントのダウンロード方法を教えてください。",
        a: "サイト内の「プリント一覧」ページから、学年・単元を選んで該当のプリントをクリックすると、PDFファイルがダウンロードされます。ご家庭のプリンターやコンビニのネットプリントなどで印刷してお使いください。",
      },
      {
        q: "プリントの解答・解説はありますか？",
        a: "現在は問題プリントのみの公開となっています。解答・解説の追加は今後検討しています。",
      },
      {
        q: "学校や塾で使ってもいいですか？",
        a: (
          <>
            <p className="mb-3">
              はい、教育目的であればご自由にお使いください。再配布や販売はご遠慮いただいていますが、授業・補習・宿題などでの活用は大歓迎です。
            </p>
            <p>
              ただし、法人・学校など団体でご利用いただく場合は、
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-bold">「お問い合わせ」</Link>
              ページより使用した旨をお伝えいただけますと幸いです。
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "動画・YouTubeについて",
    items: [
      {
        q: "YouTube動画はどんな内容ですか？",
        a: "高校数学の各単元を、板書スタイルでわかりやすく解説する動画を配信しています。教科書の流れに沿いつつ、つまずきやすいポイントを丁寧にフォローする構成です。",
      },
      {
        q: "動画の更新頻度はどのくらいですか？",
        a: "週3回（17時公開）を目標に配信しています。最新の公開スケジュールはYouTubeチャンネルまたはXでご確認ください。",
      },
      {
        q: "プリントと動画はセットで使えますか？",
        a: "はい、プリントと動画は同じ単元構成で作られているので、動画で理解→プリントで演習、という流れで効果的に学習できます。",
      },
    ],
  },
  {
    title: "料金・応援について",
    items: [
      {
        q: "本当に全部無料なんですか？",
        a: "はい。現在公開しているプリント教材・YouTube動画・Webサイトのコンテンツはすべて無料です。「誰もが無料で質の高い数学教育にアクセスできること」が、算数・数学のアトリエの基本理念です。ただし、今後は一部有料のコンテンツやサービスを追加する可能性があります。無料コンテンツが有料に変わることはありませんので、安心してご利用ください。",
      },
      {
        q: "応援する方法はありますか？",
        a: (
          <>
            <p className="mb-3">noteのメンバーシップで活動をご支援いただけます。</p>
            <ul className="space-y-1.5 list-none mb-3">
              {[
                "ありがとうプラン（月額300円）：感謝の気持ちで応援したい方向け",
                "しっかり応援プラン（月額500円）：より積極的に応援したい方向け",
                "全力応援プラン（月額3,000円）：月次の活動レポート＋エンドロールにお名前を掲載",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-500 font-bold shrink-0">・</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>メンバーシップの有無にかかわらず、すべてのコンテンツを同じようにご利用いただけます。</p>
          </>
        ),
      },
    ],
  },
  {
    title: "その他",
    items: [
      {
        q: "お問い合わせはどこからできますか？",
        a: (
          <>
            サイト内の<Link href="/contact" className="text-blue-600 hover:text-blue-700 font-bold">「お問い合わせ」</Link>
            ページにフォームがあります。教材の内容に関するご質問、誤りのご指摘、ご要望など、お気軽にお送りください。
          </>
        ),
      },
      {
        q: "今後追加予定のコンテンツはありますか？",
        a: "中学1年生の数学をはじめ、数学Ⅱの残り単元・数学Bなど、対応範囲を順次拡大していく予定です。リクエストがあればお問い合わせフォームからお気軽にお寄せください。",
      },
      {
        q: "SNSアカウントはありますか？",
        a: "X（旧Twitter）とYouTubeチャンネルを運営しています。最新の動画公開情報やお知らせはそちらでもご確認いただけます。",
      },
    ],
  },
];

export default function FaqPage() {
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
              <span className="text-gray-800 font-medium">よくある質問</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">よくある質問</h1>
            <p className="text-gray-500 text-sm">最終更新日：2026年6月18日</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-10 space-y-10">
          {CATEGORIES.map((cat) => (
            <section key={cat.title}>
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-lg font-black text-gray-900">{cat.title}</h2>
                <div className="h-px flex-1 border-t border-gray-200" />
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm divide-y divide-gray-100">
                {cat.items.map((item) => (
                  <div key={item.q} className="p-6 sm:p-7">
                    <h3 className="flex items-start gap-2 font-black text-gray-900 text-sm sm:text-base leading-relaxed mb-2.5">
                      <span className="shrink-0 text-blue-600">Q.</span>
                      <span>{item.q}</span>
                    </h3>
                    <div className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                      <span className="shrink-0 text-orange-500 font-bold">A.</span>
                      <div>{item.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="pt-2 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              質問が解決しなかった方はこちら
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
