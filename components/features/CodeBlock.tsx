"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "lucide-react";

interface CodeBlockProps {
  title: string;
  code: string;
  language?: string;
}

export function CodeBlock({ title, code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900">
      <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2">
        <span className="text-sm font-medium text-neutral-400">{title}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors"
        >
          {copied ? (
            <>
              <CheckIcon className="h-3.5 w-3.5 text-green-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className={`text-sm text-neutral-100 language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
