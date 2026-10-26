import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Print, PrintCard } from "@/components/PrintCard";
import { chapterAnchorId, printAnchorId } from "@/lib/printAnchors";

export type Chapter = {
  num: string;
  title: string;
  prints: Print[];
};

export const CHAPTERS: Chapter[] = [
  {
    num: "第1章",
    title: "なかまづくりとかず",
    prints: [
      {
        id: "01",
        title: "5までのかず",
        desc: "1から5までの数をものの数と結びつけて数え、正しく数字で表す練習をするプリントです。",
        filename: "小1算数_1_No1_5までのかず.pdf",
      },
      {
        id: "02",
        title: "10までのかず",
        desc: "6から10までの数をものの数と結びつけて数え、数字で表す練習をするプリントです。",
        filename: "小1算数_1_No2_10までのかず.pdf",
      },
      {
        id: "03",
        title: "なんばんめ",
        desc: "「前から3番目」のように、順番を表す言葉と数の関係を学ぶプリントです。",
        filename: "小1算数_1_No3_なんばんめ.pdf",
      },
    ],
  },
  {
    num: "第2章",
    title: "いくつといくつ",
    prints: [
      {
        id: "01",
        title: "10までのぶんかい",
        desc: "10までの数を「いくつといくつ」に分けたり合わせたりする練習をするプリントです。",
        filename: "小1算数_2_No1_10までのぶんかい.pdf",
      },
      {
        id: "02",
        title: "0というかず",
        desc: "「ない」ことを表す数である0の意味と使い方を学ぶプリントです。",
        filename: "小1算数_2_No2_0というかず.pdf",
      },
    ],
  },
  {
    num: "第3章",
    title: "たしざん（1）",
    prints: [
      {
        id: "01",
        title: "あわせていくつ",
        desc: "2つの数を合わせる場面を、たしざんの式に表して計算する練習をするプリントです。",
        filename: "小1算数_3_No1_あわせていくつ.pdf",
      },
      {
        id: "02",
        title: "ふえるといくつ",
        desc: "数が増える場面を、たしざんの式に表して計算する練習をするプリントです。",
        filename: "小1算数_3_No2_ふえるといくつ.pdf",
      },
      {
        id: "03",
        title: "0のたしざん",
        desc: "0が関わるたしざんの意味と計算の仕方を学ぶプリントです。",
        filename: "小1算数_3_No3_0のたしざん.pdf",
      },
    ],
  },
  {
    num: "第4章",
    title: "ひきざん（1）",
    prints: [
      {
        id: "01",
        title: "のこりはいくつ",
        desc: "ものが減って残る場面を、ひきざんの式に表して計算する練習をするプリントです。",
        filename: "小1算数_4_No1_のこりはいくつ.pdf",
      },
      {
        id: "02",
        title: "ちがいはいくつ",
        desc: "2つの数の違いを求める場面を、ひきざんの式に表して計算する練習をするプリントです。",
        filename: "小1算数_4_No2_ちがいはいくつ.pdf",
      },
      {
        id: "03",
        title: "0のひきざん",
        desc: "0が関わるひきざんの意味と計算の仕方を学ぶプリントです。",
        filename: "小1算数_4_No3_0のひきざん.pdf",
      },
    ],
  },
  {
    num: "第5章",
    title: "かずしらべ",
    prints: [
      {
        id: "01",
        title: "かずのせいり",
        desc: "身の回りのものの数を種類ごとに整理して、表やグラフのもとになる考え方を学ぶプリントです。",
        filename: "小1算数_5_No1_かずのせいり.pdf",
      },
    ],
  },
  {
    num: "第6章",
    title: "20までのかず",
    prints: [
      {
        id: "01",
        title: "20までのかず、10といくつ",
        desc: "11から20までの数を「10といくつ」という見方で理解する練習をするプリントです。",
        filename: "小1算数_6_No1_10といくつ.pdf",
      },
      {
        id: "02",
        title: "かずのならびかた",
        desc: "20までの数の並び方や大小関係を、数の線を使って理解するプリントです。",
        filename: "小1算数_6_No2_かずのならびかた.pdf",
      },
      {
        id: "03",
        title: "20までのかずのけいさん",
        desc: "20までの数を使ったたしざん・ひきざんの計算を練習するプリントです。",
        filename: "小1算数_6_No3_20までのけいさん.pdf",
      },
      {
        id: "04",
        title: "おなじかずずつ",
        desc: "同じ数ずつまとめて数える見方を学ぶプリントです。",
        filename: "小1算数_6_No4_おなじかずずつ.pdf",
      },
    ],
  },
  {
    num: "第7章",
    title: "3つのかずのけいさん",
    prints: [
      {
        id: "01",
        title: "3つのかずのたしざん・ひきざん",
        desc: "3つの数が出てくる場面を、1つの式に表して順番に計算する練習をするプリントです。",
        filename: "小1算数_7_No1_たしざん・ひきざん.pdf",
      },
    ],
  },
  {
    num: "第8章",
    title: "たしざん（2）",
    prints: [
      {
        id: "01",
        title: "8・7をたすけいさん",
        desc: "8や7をたす、繰り上がりのあるたしざんの計算方法を学ぶプリントです。",
        filename: "小1算数_8_No1_8・7をたすけいさん.pdf",
      },
      {
        id: "02",
        title: "9をたすけいさん",
        desc: "9をたす、繰り上がりのあるたしざんの計算方法を学ぶプリントです。",
        filename: "小1算数_8_No2_9をたすけいさん.pdf",
      },
      {
        id: "03",
        title: "くりあがりのれんしゅう",
        desc: "繰り上がりのあるたしざんを、いろいろな数の組み合わせで練習するプリントです。",
        filename: "小1算数_8_No3_くりあがりのれんしゅう.pdf",
      },
    ],
  },
  {
    num: "第9章",
    title: "ひきざん（2）",
    prints: [
      {
        id: "01",
        title: "9をひくけいさん",
        desc: "9をひく、繰り下がりのあるひきざんの計算方法を学ぶプリントです。",
        filename: "小1算数_9_No1_9をひくけいさん.pdf",
      },
      {
        id: "02",
        title: "8・7をひくけいさん",
        desc: "8や7をひく、繰り下がりのあるひきざんの計算方法を学ぶプリントです。",
        filename: "小1算数_9_No2_8・7をひくけいさん.pdf",
      },
      {
        id: "03",
        title: "くりさがりのれんしゅう",
        desc: "繰り下がりのあるひきざんを、いろいろな数の組み合わせで練習するプリントです。",
        filename: "小1算数_9_No3_くりさがりのれんしゅう.pdf",
      },
    ],
  },
  {
    num: "第10章",
    title: "おおきいかず",
    prints: [
      {
        id: "01",
        title: "かずのかきかた",
        desc: "大きな数を、10のまとまりに注目して数えたり書いたりする練習をするプリントです。",
        filename: "小1算数_10_No1_かずのかきかた.pdf",
      },
      {
        id: "02",
        title: "100までのかず",
        desc: "100までの数の仕組みと、数の並び方・大小関係を学ぶプリントです。",
        filename: "小1算数_10_No2_100までのかず.pdf",
      },
      {
        id: "03",
        title: "100をこえるかず",
        desc: "100を超える数の表し方と数え方を学ぶプリントです。",
        filename: "小1算数_10_No3_100をこえるかず.pdf",
      },
      {
        id: "04",
        title: "100までのかずのけいさん",
        desc: "100までの数を使った、何十+何十や何十-何十などの計算を練習するプリントです。",
        filename: "小1算数_10_No4_100までのけいさん.pdf",
      },
    ],
  },
  {
    num: "第11章",
    title: "おおきさくらべ",
    prints: [
      {
        id: "01",
        title: "ながさくらべ",
        desc: "ものの長さを直接比べたり、他のものを使って比べたりする方法を学ぶプリントです。",
        filename: "小1算数_11_No1_ながさくらべ.pdf",
      },
      {
        id: "02",
        title: "かさくらべ",
        desc: "入れ物に入る水などの量（かさ）を比べる方法を学ぶプリントです。",
        filename: "小1算数_11_No2_かさくらべ.pdf",
      },
      {
        id: "03",
        title: "ひろさくらべ",
        desc: "面の広さを重ねたり、マスの数を数えたりして比べる方法を学ぶプリントです。",
        filename: "小1算数_11_No3_ひろさくらべ.pdf",
      },
    ],
  },
  {
    num: "第12章",
    title: "とけい",
    prints: [
      {
        id: "01",
        title: "なんじ・なんじはん",
        desc: "時計の長い針・短い針を見て、「何時」「何時半」を読む練習をするプリントです。",
        filename: "小1算数_12_No1_なんじ・なんじはん.pdf",
      },
      {
        id: "02",
        title: "なんじなんぷん",
        desc: "時計を見て「何時何分」まで読む練習をするプリントです。",
        filename: "小1算数_12_No2_なんじなんぷん.pdf",
      },
    ],
  },
  {
    num: "第13章",
    title: "かたち",
    prints: [
      {
        id: "01",
        title: "いろいろなかたち",
        desc: "身の回りにある箱や筒、ボールなどの形の特徴をとらえて、仲間分けする練習をするプリントです。",
        filename: "小1算数_13_No1_いろいろなかたち.pdf",
      },
      {
        id: "02",
        title: "かたちづくり",
        desc: "色板や棒などを使って、いろいろな形を作ったり分解したりする練習をするプリントです。",
        filename: "小1算数_13_No2_かたちづくり.pdf",
      },
    ],
  },
  {
    num: "第14章",
    title: "ずをつかってかんがえよう",
    prints: [
      {
        id: "01",
        title: "ものとひとのかず",
        desc: "ものの数と人の数の関係を、図に表して考える練習をするプリントです。",
        filename: "小1算数_14_No1_ものとひとのかず.pdf",
      },
      {
        id: "02",
        title: "おおいほうすくないほう",
        desc: "2つの数量を図に表し、どちらが多いか少ないかを考える練習をするプリントです。",
        filename: "小1算数_14_No2_おおいほうすくないほう.pdf",
      },
    ],
  },
];

const TOTAL_PRINTS = CHAPTERS.reduce((sum, ch) => sum + ch.prints.length, 0);

function ChapterSection({ chapter }: { chapter: Chapter }) {
  return (
    <section id={chapterAnchorId(chapter)} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="bg-green-100 text-green-700 text-xs font-black px-2.5 py-1 rounded-full">
            {chapter.num}
          </span>
          <h2 className="text-xl font-black text-gray-900">{chapter.title}</h2>
        </div>
        <div className="h-px flex-1 border-t border-gray-200" />
      </div>
      {chapter.prints.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {chapter.prints.map((p, i) => (
            <PrintCard key={i} p={p} downloadBase="/prints/syo1" id={printAnchorId(chapter, i)} />
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

export default function Syo1Page() {
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
              <Link href="/prints" className="hover:text-blue-600 transition-colors">コンテンツ一覧</Link>
              <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-800 font-medium">小学1年生</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">小学生の算数</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">小学1年生</h1>
            <p className="text-gray-500 text-sm">
              全 {CHAPTERS.length} 章収録・プリント {TOTAL_PRINTS} 枚
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
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-green-300 hover:shadow-sm transition-all duration-150"
              >
                <span className="text-xs font-black bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
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
