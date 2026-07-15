"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-[rgba(215,226,234,0.6)]">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-[#D7E2EA] px-6 py-3 text-sm font-medium text-[#0C0C0C] transition-colors hover:bg-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(215,226,234,0.25)] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[rgba(215,226,234,0.1)]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}