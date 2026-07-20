import { siteConfig, siteBaseUrl } from "../config/site";
import { site } from "../data/site";
import { medReviewsUrl } from "../data/testimonials";

// Structured Data (JSON-LD) לדף הבית — עוזר למנועי חיפוש להבין שמדובר בקליניקת
// פיזיותרפיה מקומית. כולל רק פרטים אמיתיים: מיקומי הקליניקות (כתובת + ניווט),
// התמחות ופרופיל MedReviews (sameAs). לא כולל שעות פעילות (בהחלטת בעל האתר)
// ולא דירוגים. TODO: להוסיף ל-sameAs את פרופיל Google Business כשייפתח.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteBaseUrl,
    logo: `${siteBaseUrl}/logo-rk.png`,
    image: `${siteBaseUrl}/logo-rk.png`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    areaServed: ["חיפה", "קיבוץ גבת"],
    medicalSpecialty: "Physiotherapy",
    sameAs: [medReviewsUrl],
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
    })),
    founder: {
      "@type": "Person",
      name: "רועי קליין",
      jobTitle: "פיזיותרפיסט",
    },
  };
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}
