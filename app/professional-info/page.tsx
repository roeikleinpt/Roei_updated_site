import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import { articles } from "../data/articles";

export const metadata: Metadata = {
  title: "מידע מקצועי",
  description:
    "מאמרים והסברים מקצועיים על פיזיותרפיה, בריאות הגבר, רצפת האגן, כאב ושיקום.",
  alternates: { canonical: "/professional-info" },
  openGraph: {
    title: "מידע מקצועי | רועי קליין פיזיותרפיה",
    description:
      "מאמרים והסברים מקצועיים על פיזיותרפיה, בריאות הגבר, רצפת האגן, כאב ושיקום.",
    url: "/professional-info",
  },
};

export default function ProfessionalInfoPage() {
  return (
    <>
      <section className="scroll-mt-4 py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">מידע מקצועי</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              הסברים מקצועיים בנושאי פיזיותרפיה בספורט, בריאות הגבר, רצפת האגן, כאב ושיקום.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 70}>
                <Link
                  href={`/professional-info/${article.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50"
                >
                  <span className="text-xs font-semibold text-teal-600">{article.date}</span>
                  <h2 className="mt-2 text-lg font-bold leading-7 text-slate-900">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {article.excerpt}
                  </p>
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
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      {/* CTA — רלוונטי גם בזמן שהתוכן עדיין מתרחב */}
      <section className="bg-slate-50/80 py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              יש לכם שאלה או מתלבטים אם פיזיותרפיה מתאימה למצב שלכם?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              אפשר להשאיר פרטים או לשלוח הודעה, ונבדוק יחד האם פגישת אבחון יכולה
              להיות רלוונטית.
            </p>
            <Link
              href="/#contact"
              className="btn-press mt-8 inline-block rounded-full bg-teal-700 px-7 py-3.5 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
            >
              יצירת קשר
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
