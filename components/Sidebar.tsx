"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { parts } from "../lib/partsData";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-96 shrink-0 border-r border-gray-200 bg-slate-50 h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">
          QA Automation
        </h2>

        <p className="text-sm text-gray-500 mb-8">
          Complete SDET Handbook
        </p>

        <nav className="space-y-1">
          {parts.map((part) => {
            const isActive =
              pathname === `/chapter/${part.slug}`;

            return (
              <Link
                key={part.slug}
                href={`/chapter/${part.slug}`}
                className={`block rounded-lg px-4 py-3 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <span className="block">
                  Part {String(part.part).padStart(2, "0")}
                </span>

                <span className="text-xs opacity-90">
                  {part.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}