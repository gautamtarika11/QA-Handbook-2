import Link from "next/link";
import { parts } from "../lib/partsData";

export default function Home() {
  return (
    <div className="flex-1 p-10">
      <div className="max-w-5xl">
        <h1 className="text-5xl font-bold mb-4">
          QA Automation & SDET Master Handbook
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Complete roadmap from Manual Tester to Senior SDET and QA Architect.
        </p>

        <div className="grid gap-3">
          {parts.map((part) => (
            <Link
              key={part.slug}
              href={`/chapter/${part.slug}`}
              className="rounded border p-4 hover:bg-gray-50"
            >
              Part {String(part.part).padStart(2, "0")} — {part.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}