// מאמרים במקטע "מידע מקצועי". כל מאמר הוא route בנתיב /professional-info/<slug>/.
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  // תאריך הפרסום בפורמט ISO — משמש את ה-sitemap ואת ה-JSON-LD של המאמר.
  dateISO: string;
};
export const articles: Article[] = [
  {
    slug: "saddle-area-pain-cyclists",
    title: "כאב באזור האוכף ונימול באיבר המין אצל רוכבי אופניים: מה ידוע?",
    excerpt:
      "כאב, לחץ או נימול באזור האוכף הם תלונות נפוצות בקרב רוכבים. ההסבר עוסק בקשר האפשרי לרצפת האגן, לתפקוד המיני ולמנח הרכיבה, ובמקרים שבהם כדאי לפנות להערכה מקצועית.",
    date: "יולי 2026",
    dateISO: "2026-07-19",
  },
  {
    slug: "hip-groin-pain-cyclists",
    title: "כאבים בירך ובמפשעה אצל רוכבי אופניים",
    excerpt:
      "כאב בירך או במפשעה אינו אבחנה בפני עצמה. ההסבר סוקר גורמים אפשריים, בהם מפרק הירך, השרירים המקרבים, עומסי האימון ורצפת האגן, ומציג מה כולל תהליך ההערכה ומהן אפשרויות הטיפול.",
    date: "יולי 2026",
    dateISO: "2026-07-19",
  },
  {
    slug: "pelvic-floor-physiotherapy-cyclists",
    title: "פיזיותרפיה לרצפת האגן אצל רוכבי אופניים: מה כוללים ההערכה והטיפול?",
    excerpt:
      "מה קורה בהערכה של רצפת האגן, אילו גורמים נבדקים ואילו אפשרויות טיפול עשויות להתאים לרוכבים? הסבר ברור למי שמתמודד עם כאב, נימול, הפרעות במתן שתן או תסמינים הקשורים לתפקוד המיני.",
    date: "יולי 2026",
    dateISO: "2026-07-19",
  },
];

// שליפת מאמר לפי slug — נכשל בזמן build אם ה-slug אינו קיים ברשימה,
// כך שעמוד מאמר לא יכול להתנתק בטעות מהנתונים שלו.
export function getArticle(slug: string): Article {
  const article = articles.find((a) => a.slug === slug);
  if (!article) throw new Error(`Unknown article slug: ${slug}`);
  return article;
}
