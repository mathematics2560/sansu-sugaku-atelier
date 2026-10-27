import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Print } from "@/components/PrintCard";

export type Chapter = {
  num: string;
  title: string;
  prints: Print[];
};

// プリントをリニューアル中のため、一時的に非公開にしています。
export const CHAPTERS: Chapter[] = [];

export default function MathAPage() {
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
              <span className="text-gray-800 font-medium">高校数学A</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">高校数学</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">高校数学A</h1>
            <p className="text-gray-500 text-sm">準備中</p>
          </div>
        </div>

        {/* Renewal notice */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 rounded-2xl py-16 px-6 text-center">
            <span className="text-sm font-bold bg-gray-100 text-gray-400 px-4 py-1.5 rounded-full">
              準備中
            </span>
            <p className="text-gray-500 text-sm max-w-md">
              プリントをリニューアル中です。近日中に新しいプリントを公開します。
            </p>
            <Link href="/prints" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
              コンテンツ一覧に戻る
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
