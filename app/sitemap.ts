import type { MetadataRoute } from "next";
import { siteBaseUrl } from "./config/site";
import { articles } from "./data/articles";

// נדרש עם output: export כדי שהקובץ ייווצר סטטית בזמן build.
export const dynamic = "force-static";

// נוצר סטטית בזמן build (תואם output: export) → out/sitemap.xml.
// הכתובות מבוססות על siteConfig.siteUrl — יתעדכנו אוטומטית עם החלפת הדומיין.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${siteBaseUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteBaseUrl}/professional-info/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // עמודי המאמרים — נגזרים אוטומטית מרשימת המאמרים, כך שכל מאמר חדש נכנס לבד.
    ...articles.map((article) => ({
      url: `${siteBaseUrl}/professional-info/${article.slug}/`,
      lastModified: new Date(article.dateISO),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    {
      url: `${siteBaseUrl}/terms/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteBaseUrl}/privacy/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteBaseUrl}/accessibility/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
