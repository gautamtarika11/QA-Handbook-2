import { getChapterBySlug } from "../../../lib/chapters";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChapterNavigation from "../../../components/ChapterNavigation";
import { getChapterNavigation } from "../../../lib/chapterNavigation";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const chapter = getChapterBySlug(slug);
  const navigation = getChapterNavigation(slug);

  if (!chapter) {
    return (
      <main className="p-8">
        <h1>Chapter not found</h1>
      </main>
    );
  }

  return (
    <main className="flex-1 p-10">
    <article className="prose max-w-4xl"></article>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {chapter.content}
      </ReactMarkdown>
      <ChapterNavigation
    previous={navigation.previous}
    next={navigation.next}
  />
    </main>
  );
}