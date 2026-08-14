"use client";

import { useState } from "react";
import Link from "next/link";
import { articleCategories, type Article, type ArticleCategory } from "../data/articles";

// חיפוש/סינון מאמרים בצד הלקוח לעמוד "מידע מקצועי". מסנן את הכרטיסים בזמן אמת
// לפי קטגוריה ולפי התאמה של מילת המפתח לכותרת, לתקציר ולמילות המפתח הנסתרות.
// הכל בצד הלקוח וללא כתובות חדשות — עמוד תגית נפרד היה מוסיף לאתר עמודים שכל
// תוכנם רשימת קישורים.
export default function ArticleSearch({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArticleCategory | null>(null);
  const q = query.trim().toLowerCase();
  const results = articles
    .filter((a) => !category || a.categories.includes(category))
    .filter(
      (a) =>
        !q ||
        `${a.title} ${a.excerpt} ${(a.keywords ?? []).join(" ")}`.toLowerCase().includes(q),
    );

  const chip = (active: boolean) =>
    `btn-press rounded-full px-4 py-2 text-sm font-semibold ring-1 transition-colors ${
      active
        ? "bg-teal-700 text-white ring-teal-700"
        : "bg-white text-slate-700 ring-slate-300 hover:text-teal-700 hover:ring-teal-600"
    }`;

  return (
    <div className="mx-auto mt-8 max-w-5xl">
      <div
        role="group"
        aria-label="סינון מאמרים לפי תחום"
        className="flex flex-wrap justify-center gap-2"
      >
        <button type="button" onClick={() => setCategory(null)} className={chip(!category)}>
          הכל
        </button>
        {articleCategories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(category === c ? null : c)}
            className={chip(category === c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="relative mx-auto mt-6 max-w-xl">
        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </span>
        <label htmlFor="article-search" className="sr-only">
          חיפוש מאמרים לפי מילת מפתח
        </label>
        <input
          id="article-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="חיפוש לפי מילת מפתח, למשל: מקרבים, כאב ראש, רצפת אגן"
          className="w-full rounded-full border border-slate-300 bg-white py-3 pr-12 pl-5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-teal-600"
        />
      </div>

      {results.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((article) => (
            <Link
              key={article.slug}
              href={`/professional-info/${article.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50"
            >
              <span className="text-xs font-semibold text-teal-600">{article.date}</span>
              <h2 className="mt-2 text-lg font-bold leading-7 text-slate-900">{article.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{article.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                להסבר המלא
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center leading-8 text-slate-500">
          לא נמצאו מאמרים התואמים לסינון. אפשר לנסות מילת מפתח אחרת, למשל שם של אזור בגוף או
          תסמין, או לבחור &rdquo;הכל&rdquo;.
        </p>
      )}
    </div>
  );
}
