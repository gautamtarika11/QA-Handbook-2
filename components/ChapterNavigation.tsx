import Link from "next/link";
import { Part } from "../lib/partsData";

interface Props {
  previous: Part | null;
  next: Part | null;
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
            ← Part {previous.part}: {previous.title}
          </Link>
        )}
      </div>

      <div>
        {next && (
          <Link
            href={`/chapter/${next.slug}`}
            className="block rounded border px-4 py-3 hover:bg-gray-50"
          >
            Part {next.part}: {next.title} →
          </Link>
        )}
      </div>
    </div>
  );
}