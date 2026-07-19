// הגדרת כתובת האתר וה-metadata המרכזיים ל-SEO.
// ניתן להחליף את הכתובת בבנייה באמצעות NEXT_PUBLIC_SITE_URL (מוגדר גם ב-Cloudflare Pages).
// ברירת המחדל היא הדומיין הרשמי של האתר.
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "רועי קליין פיזיותרפיה",
  siteUrl: configuredSiteUrl || "https://www.roeiklein.com",
  description:
    "רועי קליין, פיזיותרפיסט מוסמך, מטפל בחיפה ובקיבוץ גבת בתחומי בריאות הגבר, רצפת האגן, שיקום אורתופדי, פציעות ספורט וכאב.",
};

// כתובת בסיס נקייה (ללא / בסוף) לשימוש ב-sitemap / robots / JSON-LD.
export const siteBaseUrl = siteConfig.siteUrl.replace(/\/$/, "");
