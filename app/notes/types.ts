export type Lang = "ja" | "en";

export type LocalizedText = {
  ja: string;
  en: string;
};

export type NoteTag = {
  ja: string;
  en: string;
};

export type Note = {
  title: LocalizedText;
  date: string;
  desc: LocalizedText;
  tags: NoteTag[];
  pdfJa?: string;
  pdfEn?: string;
};
