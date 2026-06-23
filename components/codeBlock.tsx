"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({
  code,
  language,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="relative my-6">
      <button
        onClick={copyCode}
        className="absolute right-3 top-3 rounded bg-slate-700 px-3 py-1 text-xs text-white hover:bg-slate-600"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {language && (
        <div className="rounded-t-lg bg-slate-800 px-4 py-2 text-xs text-slate-300">
          {language}
        </div>
      )}

      <pre className="overflow-x-auto rounded-b-lg bg-slate-900 p-4 text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}