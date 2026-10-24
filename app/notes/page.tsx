import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotesPageClient from "./NotesPageClient";
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
        <NotesPageClient notes={NOTES} />
      </main>

      <Footer />
    </div>
  );
}
