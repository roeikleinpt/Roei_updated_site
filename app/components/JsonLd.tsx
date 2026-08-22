import { siteConfig, siteBaseUrl } from "../config/site";
import { site } from "../data/site";
import { personEntity } from "../data/person";
import { medReviewsUrl } from "../data/testimonials";

// Structured Data (JSON-LD) לדף הבית — עוזר למנועי חיפוש להבין שמדובר בקליניקת
// פיזיותרפיה מקומית. כולל רק פרטים אמיתיים: מיקומי הקליניקות (כתובת, קואורדינטות
// וניווט), התמחות ופרופיל MedReviews (sameAs). לא כולל שעות פעילות (בהחלטת בעל
// האתר) ולא דירוגים.
//
// הסיווג נמסר כ-@type מרובה: Physiotherapy הוא תת-סוג חוקי של MedicalBusiness
// ב-schema.org, ולכן הוא מדויק יותר מ-medicalSpecialty ומחליף אותה.
//
// ה-NAP הראשי (שם, כתובת, טלפון) הוא של הקליניקה הראשונה במערך — קולוני, זו
// שמופיעה בפרופיל Google Business. הוא מופיע גם ברמת-העסק וגם ב-location[],
// כדי שגוגל יידע איזו כתובת היא הראשית כששלוש רשומות. מיקוד לא נמסר: אין נתון
// ודאי, ועדיף חסר על שגוי כשמדובר בעקביות NAP.
export default function JsonLd() {
  const primary = site.clinics[0];

  const data = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physiotherapy"],
    "@id": `${siteBaseUrl}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteBaseUrl,
    logo: `${siteBaseUrl}/logo-rk.png`,
    image: `${siteBaseUrl}/logo-rk.png`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    areaServed: ["חיפה", "קיבוץ גבת"],
    address: {
      "@type": "PostalAddress",
      streetAddress: primary.street,
      addressLocality: primary.city,
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: primary.geo.lat,
      longitude: primary.geo.lng,
    },
    sameAs: [medReviewsUrl, site.googleBusinessUrl, site.instagramUrl],
    location: site.clinics.map((clinic) => ({
      "@type": "Place",
      name: clinic.name,
      hasMap: clinic.wazeHref,
      address: {
        "@type": "PostalAddress",
        ...(clinic.street ? { streetAddress: clinic.street } : {}),
        addressLocality: clinic.city,
        addressCountry: "IL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: clinic.geo.lat,
        longitude: clinic.geo.lng,
      },
    })),
    founder: personEntity,
  };
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}
