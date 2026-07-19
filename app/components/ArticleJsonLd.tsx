import { siteConfig, siteBaseUrl } from "../config/site";
import { medReviewsUrl } from "../data/testimonials";
import type { Article } from "../data/articles";

// Structured Data (JSON-LD) לעמוד מאמר — מסווג את התוכן כ-MedicalWebPage ומקשר את
// הכותב לישות מקצועית מאומתת (sameAs → פרופיל MedReviews). חלק מאותות E-E-A-T.
export default function ArticleJsonLd({ article }: { article: Article }) {
  const url = `${siteBaseUrl}/professional-info/${article.slug}/`;
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: article.title,
    description: article.excerpt,
    url,
    inLanguage: "he",
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: {
      "@type": "Person",
      name: "רועי קליין",
      jobTitle: "פיזיותרפיסט מוסמך",
      honorificSuffix: "M.Sc.PT",
      url: `${siteBaseUrl}/#about`,
      sameAs: [medReviewsUrl],
    },
    publisher: {
      "@type": "MedicalBusiness",
      name: siteConfig.name,
      url: siteBaseUrl,
    },
    mainEntityOfPage: url,
  };
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}
