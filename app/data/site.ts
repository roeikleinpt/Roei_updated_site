export const site = {
  name: "רועי קליין — פיזיותרפיה",
  shortName: "רועי קליין",
  credential: "M.Sc.PT",
  tagline: "פיזיותרפיה לרצפת אגן, כאבי אגן ופציעות ספורט",
  intro:
    "פיזיותרפיה לרצפת אגן, כאבי אגן ופציעות ספורט — אבחון מדויק, תוכנית פעולה ברורה וחזרה לתפקוד שאתם רוצים.",
  phone: "052-6171312",
  phoneHref: "tel:+972526171312",
  // הודעה ממולאת מראש ("היי, הגעתי דרך האתר שלך, אשמח לשמוע פרטים על הטיפול") —
  // מורידה חיכוך למי שלא יודע איך לפתוח, ומאפשרת לזהות שהפנייה הגיעה מהאתר.
  // הכתובת המלאה נמצאת כאן ישירות ולא דרך ההפניה /wa-site שב-public/_redirects,
  // כי באתר אין מגבלת תווים ואין טעם בקפיצה מיותרת. שאר המקורות (אינסטגרם, גוגל,
  // MedReviews) כן משתמשים בהפניות הקצרות, שם המגבלה אמיתית.
  whatsappHref:
    "https://wa.me/972526171312?text=%D7%94%D7%99%D7%99%2C+%D7%94%D7%92%D7%A2%D7%AA%D7%99+%D7%93%D7%A8%D7%9A+%D7%94%D7%90%D7%AA%D7%A8+%D7%A9%D7%9C%D7%9A%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A9%D7%9E%D7%95%D7%A2+%D7%A4%D7%A8%D7%98%D7%99%D7%9D+%D7%A2%D7%9C+%D7%94%D7%98%D7%99%D7%A4%D7%95%D7%9C",
  email: "RoeiKleinPT@gmail.com",
  // קישור לפרופיל Google Business (משמש ל-sameAs בסכמת העסק).
  googleBusinessUrl: "https://share.google/F97ofdr71eOTLvaeC",
  // הקליניקות עם כתובת וקישורי ניווט Waze — מקור יחיד לתצוגת המיקומים (TopBar/Footer)
  // ולסכמת העסק (JSON-LD). street ריק = יישוב ללא שם רחוב (קיבוץ).
  clinics: [
    {
      name: "מרכז רפואי קולוני",
      city: "חיפה",
      street: "דרך העצמאות 134",
      wazeHref: "https://waze.com/ul/hsvbfsr1yx",
    },
    {
      name: "מדיקס",
      city: "חיפה",
      street: "פנחס ואברהם רוטנברג 2 (אצטדיון סמי עופר)",
      wazeHref: "https://waze.com/ul/hsvbfe859y",
    },
    {
      name: "סינרגיה פיזיותרפיה",
      city: "קיבוץ גבת",
      street: "",
      wazeHref: "https://waze.com/ul/hsvc1chxzv",
    },
  ],
  stats: [
    { value: "2,000+", label: "מטופלים בתחום האורתופדיה" },
    { value: "300+", label: "מטופלים בתחום רצפת האגן" },
    { value: "M.Sc.PT", label: "תואר שני בפיזיותרפיה" },
    { value: "Evidence Based", label: "טיפול מבוסס ידע עדכני" },
  ],
};
