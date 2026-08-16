import { siteConfig, siteBaseUrl } from "../config/site";
import type { Article } from "../data/articles";

// Structured Data לעמוד "מידע מקצועי" עצמו — עד כה היה העמוד היחיד באתר ללא סימון.
// CollectionPage + ItemList מצהירים שזו ספריית תוכן מתוחזקת ולא עמוד אקראי עם
// קישורים, ו-BreadcrumbList נותן לו נתיב בתוצאות החיפוש כמו שיש לכל מאמר.
// הרשימה נגזרת מ-articles.ts, כמו ה-sitemap, ולכן אינה יכולה להתיישן.
export default function CollectionJsonLd({ articles }: { articles: Article[] }) {
  const url = `${siteBaseUrl}/professional-info/`;

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "מידע מקצועי",
    description:
      "מאמרים והסברים מקצועיים על פיזיותרפיה, בריאות הגבר, רצפת האגן, כאב ושיקום.",
    url,
    inLanguage: "he",
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: `${siteBaseUrl}/` },
    author: {
      "@type": "Person",
      name: "רועי קליין",
      jobTitle: "פיזיותרפיסט מוסמך",
      honorificSuffix: "M.Sc.PT",
      url: `${siteBaseUrl}/#about`,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: articles.map((article, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: article.title,
        url: `${siteBaseUrl}/professional-info/${article.slug}/`,
      })),
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: `${siteBaseUrl}/` },
      { "@type": "ListItem", position: 2, name: "מידע מקצועי" },
    ],
  };

  const serialize = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(collection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(breadcrumbs) }}
      />
    </>
  );
}
