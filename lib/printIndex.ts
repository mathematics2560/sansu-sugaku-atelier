import type { Print } from "@/components/PrintCard";
import type { ChapterSummary } from "@/components/ChapterSummaryCard";
import { chapterAnchorId, printAnchorId } from "@/lib/printAnchors";

import { CHAPTERS as SYO1_CHAPTERS } from "@/app/prints/syo1/page";
import { CHAPTERS as CHU1_CHAPTERS } from "@/app/prints/chu1/page";
import { CHAPTERS as MATH1_CHAPTERS } from "@/app/prints/math1/page";
import { CHAPTERS as MATHA_CHAPTERS } from "@/app/prints/mathA/page";
import { CHAPTERS as MATH2_CHAPTERS } from "@/app/prints/math2/page";
import { CHAPTERS as LINEAR_ALGEBRA_CHAPTERS } from "@/app/prints/linear-algebra/page";
import { CHAPTERS as CALCULUS_CHAPTERS } from "@/app/prints/calculus/page";
import { CHAPTERS as SET_THEORY_CHAPTERS } from "@/app/prints/set-theory/page";

type IndexableChapter = {
  num: string;
  title: string;
  prints: Print[];
  summary?: ChapterSummary;
};

export type PrintSearchEntry = {
  subjectSlug: string;
  subjectLabel: string;
  badgeClass: string;
  chapterNum: string;
  chapterTitle: string;
  kind: "print" | "summary";
  displayId: string;
  title: string;
  desc: string;
  supplement?: boolean;
  href: string;
};

type Subject = {
  slug: string;
  label: string;
  badgeClass: string;
  chapters: IndexableChapter[];
};

const SUBJECTS: Subject[] = [
  { slug: "syo1", label: "小学1年生", badgeClass: "bg-green-100 text-green-700", chapters: SYO1_CHAPTERS },
  { slug: "chu1", label: "中学1年生", badgeClass: "bg-blue-100 text-blue-700", chapters: CHU1_CHAPTERS },
  { slug: "math1", label: "数学Ⅰ", badgeClass: "bg-orange-100 text-orange-700", chapters: MATH1_CHAPTERS },
  { slug: "mathA", label: "数学A", badgeClass: "bg-orange-100 text-orange-700", chapters: MATHA_CHAPTERS },
  { slug: "math2", label: "数学Ⅱ", badgeClass: "bg-orange-100 text-orange-700", chapters: MATH2_CHAPTERS },
  { slug: "linear-algebra", label: "線形代数", badgeClass: "bg-purple-100 text-purple-700", chapters: LINEAR_ALGEBRA_CHAPTERS },
  { slug: "calculus", label: "微分積分", badgeClass: "bg-purple-100 text-purple-700", chapters: CALCULUS_CHAPTERS },
  { slug: "set-theory", label: "集合論", badgeClass: "bg-purple-100 text-purple-700", chapters: SET_THEORY_CHAPTERS },
];

function buildEntries(subject: Subject): PrintSearchEntry[] {
  const entries: PrintSearchEntry[] = [];

  for (const chapter of subject.chapters) {
    const chAnchor = chapterAnchorId(chapter);

    chapter.prints.forEach((p, i) => {
      entries.push({
        subjectSlug: subject.slug,
        subjectLabel: subject.label,
        badgeClass: subject.badgeClass,
        chapterNum: chapter.num,
        chapterTitle: chapter.title,
        kind: "print",
        displayId: `#${p.id}`,
        title: p.title,
        desc: p.desc,
        supplement: p.supplement,
        href: `/prints/${subject.slug}#${printAnchorId(chapter, i)}`,
      });
    });

    if (chapter.summary?.filename) {
      entries.push({
        subjectSlug: subject.slug,
        subjectLabel: subject.label,
        badgeClass: subject.badgeClass,
        chapterNum: chapter.num,
        chapterTitle: chapter.title,
        kind: "summary",
        displayId: "まとめ",
        title: `${chapter.title}のまとめ`,
        desc: chapter.summary.desc ?? "",
        href: `/prints/${subject.slug}#${chAnchor}`,
      });
    }
  }

  return entries;
}

export const PRINT_INDEX: PrintSearchEntry[] = SUBJECTS.flatMap(buildEntries);
