import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "自己紹介 | 算数・数学のアトリエ",
};

const BIO_PARAGRAPHS = [
  "こんにちは！算数・数学のアトリエで講師を務める佐藤大智です！",
  "……といっても、企画も運営も僕一人でやっています（笑）。このホームページも自分で作りました（笑）。",
  "数学って、ちゃんと向き合えばすごくおもしろいのに、「わからない」が積み重なって嫌いになってしまう人が多いと思うんです。塾で授業をしていたときも、ずっとそれがもったいないなと感じていました。",
  "「だったら、誰でもアクセスできる場所に、わかりやすい教材を置こう」——そんな思いから、このサイトとYouTubeを始めました。",
  "僕自身、中学生のときにいじめにあって不登校になりました。今も躁鬱病を抱えていて、決して健康とは言えません。そんな僕がマイペースに社会に貢献できることは何か——と考えたときに、このアトリエが生まれました。",
  "現在は中学数学・高校数学を中心にコンテンツを公開していますが、今後は小学校算数や大学数学にも広げていきたいと思っています。",
  "「ここに来れば大丈夫」と思ってもらえる場所を目指して、コツコツ作り続けていきます。よろしくお願いします！ ぜひYouTubeも覗いてみてください！",
];

export default function AboutPage() {
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
              <span className="text-gray-800 font-medium">自己紹介</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">自己紹介</h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-10">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10">
            {/* Profile header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm p-1.5">
                <Image
                  src="/images/logo.png"
                  alt="算数・数学のアトリエ"
                  width={1254}
                  height={1254}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="font-black text-gray-900 text-lg leading-tight">佐藤 大智</h2>
                <span className="inline-block mt-1 text-xs font-bold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">
                  算数・数学のアトリエ 講師
                </span>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              {BIO_PARAGRAPHS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* YouTube link */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href="https://www.youtube.com/@mathematics.256"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-sm"
              >
                <span>🎥</span>
                <span>YouTubeチャンネルを見る</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
