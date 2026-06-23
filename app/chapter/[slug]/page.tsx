import { getChapterBySlug } from "../../../lib/chapters";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChapterNavigation from "../../../components/ChapterNavigation";
import { getChapterNavigation } from "../../../lib/chapterNavigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeBlock from "../../../components/codeBlock";

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
  <main className="flex-1 px-12 py-10">
  <article className="prose mx-auto max-w-3xl">
    <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{
    code(props) {
      const { children, className } = props;

      const match = /language-(\w+)/.exec(
        className || ""
      );

      return (
        <CodeBlock
          code={String(children).replace(/\n$/, "")}
          language={match?.[1]}
        />
      );
    },
  }}
>
  {chapter.content}
</ReactMarkdown>

    <ChapterNavigation
      previous={navigation.previous}
      next={navigation.next}
    />
  </article>
  </main>
) ;
}