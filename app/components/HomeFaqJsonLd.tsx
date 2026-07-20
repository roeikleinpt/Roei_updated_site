import { faq } from "../data/content";

// FAQPage JSON-LD לשאלות הנפוצות של דף הבית — סקריפט בלתי-נראה בלבד, נגזר
// מאותם נתונים שמציג האקורדיון. אין שום שינוי בתצוגה או בחוויית המשתמש.
export default function HomeFaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}
