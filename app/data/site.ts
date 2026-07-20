export const site = {
  name: "רועי קליין — פיזיותרפיה",
  shortName: "רועי קליין",
  credential: "M.Sc.PT",
  tagline: "פיזיותרפיה לרצפת אגן, כאבי אגן ופציעות ספורט",
  intro:
    "פיזיותרפיה לרצפת אגן, כאבי אגן ופציעות ספורט — אבחון מדויק, תוכנית פעולה ברורה וחזרה לתפקוד שאתם רוצים.",
  phone: "052-6171312",
  phoneHref: "tel:+972526171312",
  whatsappHref: "https://wa.me/972526171312",
  email: "RoeiKleinPT@gmail.com",
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
