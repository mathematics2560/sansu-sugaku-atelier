"use client";

import { useState } from "react";
import Link from "next/link";
import NotesBrowser from "./NotesBrowser";
import type { Lang, Note } from "./types";

const STRINGS = {
  home: { ja: "ホーム", en: "Home" },
  breadcrumb: { ja: "研究ノート", en: "Research Notes" },
  title: { ja: "研究ノート", en: "Research Notes" },
  lead: {
    ja: "数学・数学教育をはじめ、関心のある分野について綴る研究ノートです。",
    en: "Notes on topics I'm interested in, including mathematics and mathematics education.",
  },
  disclaimer: {
    ja: "ここに掲載しているノートは、個人が興味の範囲で書いている未査読の文章です。学術的な査読や検証を受けたものではないため、内容の正確性は保証されません。あくまで個人の研究記録・考察としてお読みください。",
    en: "The notes published here are unreviewed personal writings, shared out of personal interest. They have not undergone academic peer review or verification, so their accuracy is not guaranteed. Please read them as personal research records and reflections.",
  },
};

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full p-1 shrink-0">
      {(["ja", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          aria-pressed={lang === l}
          className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
            lang === l ? "bg-blue-600 text-white" : "text-gray-500 hover:text-blue-600"
          }`}
        >
          {l === "ja" ? "日本語" : "English"}
        </button>
      ))}
    </div>
  );
}

export default function NotesPageClient({ notes }: { notes: Note[] }) {
  const [lang, setLang] = useState<Lang>("ja");

  return (
    <>
      {/* Page header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              {STRINGS.home[lang]}
            </Link>
            <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-800 font-medium">{STRINGS.breadcrumb[lang]}</span>
          </nav>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">{STRINGS.title[lang]}</h1>
              <p className="text-gray-500 text-sm sm:text-base">{STRINGS.lead[lang]}</p>
            </div>
            <LangToggle lang={lang} onChange={setLang} />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 pt-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
          <p className="text-sm text-amber-800 leading-relaxed">{STRINGS.disclaimer[lang]}</p>
        </div>
      </div>

      {/* Notes */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-10">
        <NotesBrowser notes={notes} lang={lang} />
      </div>
    </>
  );
}
