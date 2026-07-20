import { Icon } from "./Icon";

export type ArticleFaqItem = { q: string; a: string };

// חלק "שאלות נפוצות" בעמודי המאמרים — אקורדיון נפתח בסגנון דף הבית, מבוסס
// details/summary נייטיב: התוכן המלא קיים תמיד ב-HTML הסטטי (נגיש למנועי חיפוש,
// למערכות AI ולקוראי מסך) בלי JavaScript. name משותף פותח פריט אחד בכל רגע
// בדפדפנים תומכים. מלווה ב-FAQPage JSON-LD שמזהה כל שאלה ותשובה כיחידה עצמאית.
export default function ArticleFaq({ items }: { items: ArticleFaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <>
      <h2 className="mt-7 text-2xl font-bold text-slate-900">שאלות נפוצות</h2>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <details
            key={item.q}
            name="article-faq"
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-start [&::-webkit-details-marker]:hidden">
              <h3 className="text-lg font-bold text-slate-900">{item.q}</h3>
              <Icon
                name="chevronDown"
                className="h-5 w-5 shrink-0 text-teal-700 transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <p className="whitespace-pre-line px-6 pb-5 leading-7 text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialized }}
      />
    </>
  );
}
