export type Print = {
  id: string;
  supplement?: boolean;
  title: string;
  desc: string;
  filename?: string;
  videoUrl?: string;
};

export function PrintCard({ p, downloadBase }: { p: Print; downloadBase: string }) {
  const hasPrint = !!p.filename;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <span
          className={`text-xs font-black px-3 py-1 rounded-full ${
            p.supplement ? "bg-amber-100 text-amber-700" : "bg-blue-600 text-white"
          }`}
        >
          #{p.id}
        </span>
        {p.supplement && (
          <span className="text-xs font-bold bg-amber-50 text-amber-600 border border-amber-200 px-2.5 py-0.5 rounded-full">
            補足
          </span>
        )}
      </div>

      <h3 className="font-black text-gray-900 text-base leading-snug mb-3">{p.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{p.desc}</p>

      <div className="flex flex-col gap-2">
        {p.videoUrl ? (
          <a
            href={p.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2.5 rounded-full transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>動画を見る</span>
          </a>
        ) : (
          <div
            className="flex items-center justify-center gap-2 bg-gray-100 text-gray-400 text-sm font-bold px-4 py-2.5 rounded-full"
            aria-disabled="true"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>動画を見る</span>
          </div>
        )}

        {hasPrint && (
          <a
            href={`${downloadBase}/${p.filename}`}
            download={p.filename}
            className="flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-bold px-4 py-2.5 rounded-full transition-colors"
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
        )}
      </div>
    </div>
  );
}