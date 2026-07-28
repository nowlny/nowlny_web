"use client";

export default function MenuError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-panel max-w-md w-full p-8 text-center">
        <h1 className="text-xl font-bold mb-2">Something went wrong</h1>
        <p className="text-sm text-text-muted mb-2">
          We couldn&apos;t load this menu. Please try again.
        </p>
        <p className="text-sm text-text-muted mb-6" dir="rtl" lang="ar">
          تعذّر تحميل هذه القائمة. حاول مرة أخرى.
        </p>
        <button type="button" onClick={reset} className="btn-primary">
          Try again · إعادة المحاولة
        </button>
      </div>
    </div>
  );
}
