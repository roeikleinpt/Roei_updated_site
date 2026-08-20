import { siteBaseUrl } from "../config/site";
import { medReviewsUrl } from "./testimonials";

// ישות הכותב הקנונית. אותו @id משמש גם כ-founder בסכמת העסק וגם כ-author
// וכ-reviewedBy בסכמת המאמר, כדי שמנועי החיפוש יזהו ישות אחת ולא כמה אנשים
// שונים באותו שם. הרישיון נמסר כ-EducationalOccupationalCredential — אות
// E-E-A-T ישיר לתוכן רפואי, שאפשר להצליב מול פנקס הפיזיותרפיסטים.
export const personId = `${siteBaseUrl}/#roei`;

export const personEntity = {
  "@type": "Person",
  "@id": personId,
  name: "רועי קליין",
  jobTitle: "פיזיותרפיסט מוסמך",
  honorificSuffix: "M.Sc.PT",
  url: `${siteBaseUrl}/#about`,
  sameAs: [medReviewsUrl],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    identifier: "10-163650",
    name: "רישיון פיזיותרפיסט",
  },
};

// הפניה בלבד — לשימוש כשהישות המלאה כבר מופיעה באותו מסמך JSON-LD.
export const personRef = { "@id": personId };
