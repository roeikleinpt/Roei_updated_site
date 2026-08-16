import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import ArticleSearch from "./ArticleSearch";
import CollectionJsonLd from "./CollectionJsonLd";
import { articles } from "../data/articles";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: "מידע מקצועי",
  description:
    "מאמרים והסברים מקצועיים על פיזיותרפיה, בריאות הגבר, רצפת האגן, כאב ושיקום.",
  alternates: { canonical: "/professional-info" },
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: siteConfig.name,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "מידע מקצועי | רועי קליין פיזיותרפיה",
    description:
      "מאמרים והסברים מקצועיים על פיזיותרפיה, בריאות הגבר, רצפת האגן, כאב ושיקום.",
    url: "/professional-info",
  },
};

export default function ProfessionalInfoPage() {
  return (
    <>
      <CollectionJsonLd articles={articles} />
      <section className="scroll-mt-4 py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">מידע מקצועי</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              הסברים מקצועיים בנושאי פיזיותרפיה בספורט, בריאות הגבר, רצפת האגן, כאב ושיקום.
            </p>
          </Reveal>
          <ArticleSearch articles={articles} />
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
