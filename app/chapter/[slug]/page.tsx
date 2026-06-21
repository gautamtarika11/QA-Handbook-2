import Link from "next/link";
import { getAllChapters, Chapter } from "../../../lib/getAllChapters";

export default function Home() {
  const chapters = getAllChapters();

  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-4">
        QA Automation Handbook
      </h1>

      <p className="mb-8">
        Complete roadmap from Manual Tester to SDET
      </p>

      <div className="space-y-3">
        {chapters.map((chapter: Chapter) => (
          <div key={chapter.slug}>
            <Link
              href={`/chapter/${chapter.slug}`}
              className="text-blue-600 hover:underline"
            >
              Chapter {chapter.chapter}: {chapter.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}