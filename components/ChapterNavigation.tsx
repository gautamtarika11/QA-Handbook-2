import Link from "next/link";

interface Chapter {
  title: string;
  chapter: number;
  slug: string;
}

interface Props {
  previous: Chapter | null;
  next: Chapter | null;
}

export default function ChapterNavigation({
  previous,
  next,
}: Props) {
  return (
    <div className="mt-16 flex justify-between border-t pt-6">
      <div>
        {previous && (
          <Link
            href={`/chapter/${previous.slug}`}
            className="block rounded border px-4 py-3 hover:bg-gray-50"
          >
            ← Chapter {previous.chapter}: {previous.title}
          </Link>
        )}
      </div>

      <div>
        {next && (
          <Link
            href={`/chapter/${next.slug}`}
            className="block rounded border px-4 py-3 hover:bg-gray-50"
          >
            Chapter {next.chapter}: {next.title} →
          </Link>
        )}
      </div>
    </div>
  );
}