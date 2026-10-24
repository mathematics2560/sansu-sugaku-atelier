"use client";

import { useMemo, useState } from "react";
import type { Lang, Note, NoteTag } from "./types";

const STRINGS = {
  all: { ja: "すべて", en: "All" },
  empty: {
    ja: "研究ノートを公開したら、ここに掲載します。",
    en: "Notes will appear here once published.",
  },
  noTagResults: {
    ja: (tag: string) => `#${tag} のノートはまだありません。`,
    en: (tag: string) => `No notes tagged "#${tag}" yet.`,
  },
  showAll: { ja: "すべてのノートを表示する", en: "Show all notes" },
  pdfJa: { ja: "PDFを見る（日本語）", en: "View PDF (Japanese)" },
  pdfEn: { ja: "PDFを見る（English）", en: "View PDF (English)" },
  comingSoon: { ja: "準備中", en: "Coming soon" },
};

function parseDate(date: string): number {
  return new Date(date.replace(/\./g, "-")).getTime();
}

function TagChip({
  tag,
  lang,
  active,
  onClick,
}: {
  tag: NoteTag;
  lang: Lang;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
        active
          ? "bg-blue-600 border-blue-600 text-white"
          : "bg-white border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600"
      }`}
    >
      #{tag[lang]}
    </button>
  );
}

function NoteCard({
  note,
  lang,
  activeTag,
  onTagClick,
}: {
  note: Note;
  lang: Lang;
  activeTag: string | null;
  onTagClick: (tag: string) => void;
}) {
  return (
    <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-2 mb-2.5">
        <span className="text-xs text-gray-400 tabular-nums">{note.date}</span>
      </div>
      <h2 className="font-black text-gray-900 text-base sm:text-lg leading-snug mb-2.5">
        {note.title[lang]}
      </h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{note.desc[lang]}</p>

      {(note.pdfJa || note.pdfEn) && (
        <div className="flex flex-wrap gap-2 mb-4">
          {note.pdfJa ? (
            <a
              href={`/notes/${note.pdfJa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-bold px-4 py-2 rounded-full transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>{STRINGS.pdfJa[lang]}</span>
            </a>
          ) : null}

          {note.pdfEn ? (
            <a
              href={`/notes/${note.pdfEn}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-bold px-4 py-2 rounded-full transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>{STRINGS.pdfEn[lang]}</span>
            </a>
          ) : (
            <div
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-400 text-sm font-bold px-4 py-2 rounded-full"
              aria-disabled="true"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>
                {STRINGS.pdfEn[lang]}（{STRINGS.comingSoon[lang]}）
              </span>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <TagChip
            key={tag.ja}
            tag={tag}
            lang={lang}
            active={activeTag === tag.ja}
            onClick={() => onTagClick(tag.ja)}
          />
        ))}
      </div>
    </article>
  );
}

export default function NotesBrowser({ notes, lang }: { notes: Note[]; lang: Lang }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const sortedNotes = useMemo(
    () => [...notes].sort((a, b) => parseDate(b.date) - parseDate(a.date)),
    [notes]
  );

  const allTags = useMemo(() => {
    const seen = new Map<string, NoteTag>();
    for (const note of sortedNotes) {
      for (const tag of note.tags) {
        if (!seen.has(tag.ja)) seen.set(tag.ja, tag);
      }
    }
    return [...seen.values()];
  }, [sortedNotes]);

  const filteredNotes = useMemo(
    () =>
      activeTag ? sortedNotes.filter((note) => note.tags.some((tag) => tag.ja === activeTag)) : sortedNotes,
    [sortedNotes, activeTag]
  );

  if (sortedNotes.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm py-16 px-6 text-center">
        <p className="text-sm text-gray-500">{STRINGS.empty[lang]}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tag filter bar */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          aria-pressed={activeTag === null}
          className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
            activeTag === null
              ? "bg-gray-900 border-gray-900 text-white"
              : "bg-white border-gray-200 text-gray-600 hover:border-gray-400"
          }`}
        >
          {STRINGS.all[lang]}
        </button>
        {allTags.map((tag) => (
          <TagChip
            key={tag.ja}
            tag={tag}
            lang={lang}
            active={activeTag === tag.ja}
            onClick={() => setActiveTag(tag.ja)}
          />
        ))}
      </div>

      {/* Notes list */}
      {filteredNotes.length > 0 ? (
        <div className="space-y-4">
          {filteredNotes.map((note, i) => (
            <NoteCard key={i} note={note} lang={lang} activeTag={activeTag} onTagClick={setActiveTag} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm py-16 px-6 text-center">
          <p className="text-sm text-gray-500 mb-4">
            {activeTag
              ? STRINGS.noTagResults[lang](
                  allTags.find((tag) => tag.ja === activeTag)?.[lang] ?? activeTag
                )
              : ""}
          </p>
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className="text-sm font-bold text-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded"
          >
            {STRINGS.showAll[lang]}
          </button>
        </div>
      )}
    </div>
  );
}
