export function chapterAnchorId(chapter: { num: string; title: string }): string {
  const digits = chapter.num.replace(/[^0-9]/g, "");
  if (digits) return `chapter-${digits}`;
  // Chapters without a number (e.g. an orientation chapter) fall back to a title-based anchor.
  return `chapter-${chapter.title.replace(/\s+/g, "-")}`;
}

export function printAnchorId(chapter: { num: string; title: string }, index: number): string {
  return `${chapterAnchorId(chapter)}-${index}`;
}
