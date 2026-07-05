export type ChapterSummary = {
  desc?: string;
  filename?: string;
  videoUrl?: string;
};

export function ChapterSummaryCard({
  chapterTitle,
  summary,
  downloadBase,
}: {
  chapterTitle: string;
  summary: ChapterSummary;
  downloadBase: string;
}) {
  const hasVideo = !!summary.videoUrl;
  const hasPrint = !!summary.filename;

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl shadow-sm p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
      <div className="flex items-center gap-4 flex-1">
        <span className="shrink-0 w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <div>
          <p className="text-xs font-black text-indigo-100 tracking-wide mb-0.5">章末まとめ</p>
          <h3 className="font-black text-white text-base sm:text-lg leading-snug">{chapterTitle}のまとめ</h3>
          {summary.desc && <p className="text-sm text-indigo-100 mt-1 leading-relaxed">{summary.desc}</p>}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
        {hasVideo ? (
          <a
            href={summary.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white hover:bg-indigo-50 text-indigo-700 text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>動画を見る</span>
          </a>
        ) : (
          <div
            className="flex items-center justify-center gap-2 bg-white/10 text-indigo-100/70 text-sm font-bold px-5 py-2.5 rounded-full"
            aria-disabled="true"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>動画を見る（準備中）</span>
          </div>
        )}

        {hasPrint ? (
          <a
            href={`${downloadBase}/${summary.filename}`}
            download={summary.filename}
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>プリントをダウンロード</span>
          </a>
        ) : (
          <div
            className="flex items-center justify-center gap-2 bg-white/10 text-indigo-100/70 text-sm font-bold px-5 py-2.5 rounded-full"
            aria-disabled="true"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>プリントをダウンロード（準備中）</span>
          </div>
        )}
      </div>
    </div>
  );
}