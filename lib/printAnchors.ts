export function chapterAnchorId(chapter: { num: string }): string {
  return `chapter-${chapter.num.replace(/[^0-9]/g, "")}`;
}

export function printAnchorId(chapter: { num: string }, index: number): string {
  return `${chapterAnchorId(chapter)}-${index}`;
}
