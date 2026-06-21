"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { parts } from "../lib/partsData";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-80 shrink-0 border-r bg-gray-50 min-h-screen overflow-y-auto">
      <div className="sticky top-0 p-6">
        <h2 className="text-2xl font-bold mb-6">
          QA Automation Handbook
        </h2>

        <nav className="space-y-1">
          {parts.map((part) => {
            const isActive =
              pathname === `/chapter/${part.slug}`;

            return (
              <Link
                key={part.slug}
                href={`/chapter/${part.slug}`}
                className={`block rounded-md px-3 py-2 text-sm transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "hover:bg-gray-200"
                }`}
              >
                Part {String(part.part).padStart(2, "0")} — {part.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}