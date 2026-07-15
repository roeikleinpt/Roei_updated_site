// הגדרת כתובת האתר וה-metadata המרכזיים ל-SEO.
// ניתן להחליף את הכתובת בבנייה באמצעות NEXT_PUBLIC_SITE_URL כשיחובר דומיין מותאם.
// ברירת המחדל היא כתובת GitHub Pages הפעילה של המאגר.
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "רועי קליין פיזיותרפיה",
  siteUrl: configuredSiteUrl || "https://idoo25.github.io/roei2",
  description:
    "רועי קליין, פיזיותרפיסט מוסמך, מטפל בחיפה ובקיבוץ גבת בתחומי בריאות הגבר, רצפת האגן, שיקום אורתופדי, פציעות ספורט וכאב.",
};

// כתובת בסיס נקייה (ללא / בסוף) לשימוש ב-sitemap / robots / JSON-LD.
export const siteBaseUrl = siteConfig.siteUrl.replace(/\/$/, "");
