import { siteConfig, siteBaseUrl } from "../config/site";
import { personEntity, personRef } from "../data/person";
import type { Article } from "../data/articles";

// Structured Data (JSON-LD) לעמוד מאמר — מסווג את התוכן כ-MedicalWebPage ומקשר את
// הכותב לישות הקנונית (app/data/person.ts), אותה ישות שמופיעה כ-founder בסכמת
// העסק. חלק מאותות E-E-A-T.
//
// reviewedBy הוא הפניה ב-@id בלבד ולא שכפול של הישות: היא כבר מופיעה במלואה
// תחת author באותו מסמך, ו-JSON-LD פותר את ההפניה בתוך המסמך.
//
// dateModified נלקח מ-dateModifiedISO אם הוא קיים, אחרת שווה לתאריך הפרסום.
// לפי החלטת בעל האתר כל עריכה בתוכן הדף נספרת כעדכון, כולל תיקון ניסוח.
export default function ArticleJsonLd({ article }: { article: Article }) {
  const url = `${siteBaseUrl}/professional-info/${article.slug}/`;
  const dateModified = article.dateModifiedISO ?? article.dateISO;
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: article.title,
    description: article.excerpt,
    url,
    inLanguage: "he",
    image: article.image ? `${siteBaseUrl}${article.image}` : `${siteBaseUrl}/opengraph-image.png`,
    datePublished: article.dateISO,
    dateModified,
    lastReviewed: dateModified,
    author: personEntity,
    reviewedBy: personRef,
    publisher: {
      "@type": "MedicalBusiness",
      "@id": `${siteBaseUrl}/#business`,
      name: siteConfig.name,
      url: siteBaseUrl,
    },
    mainEntityOfPage: url,
  };
  // BreadcrumbList — מציג בתוצאות החיפוש נתיב (בית › מידע מקצועי › מאמר) במקום URL גולמי.
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: `${siteBaseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "מידע מקצועי",
        item: `${siteBaseUrl}/professional-info/`,
      },
      { "@type": "ListItem", position: 3, name: article.title },
    ],
  };
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");
  const serializedBreadcrumbs = JSON.stringify(breadcrumbs).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialized }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializedBreadcrumbs }}
      />
    </>
  );
}
