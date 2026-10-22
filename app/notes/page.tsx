import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotesBrowser from "./NotesBrowser";
import notesData from "@/data/notes.json";
import type { Note } from "./types";

export const metadata = {
  title: "研究ノート | 算数・数学のアトリエ",
  description: "数学・数学教育をはじめ、関心のある分野について綴る研究ノートです。",
};

const NOTES = notesData as Note[];

export default function NotesPage() {
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
              <span className="text-gray-800 font-medium">研究ノート</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">研究ノート</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              数学・数学教育をはじめ、関心のある分野について綴る研究ノートです。
            </p>
          </div>
        </div>

        {/* Notes */}
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-10">
          <NotesBrowser notes={NOTES} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
