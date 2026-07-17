import type { Metadata } from "next";
import Container from "../components/Container";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של אתר רועי קליין פיזיותרפיה ודרכי פנייה בנושא נגישות.",
  alternates: { canonical: "/accessibility" },
};

const updatedAt = "16 ביולי 2026";

export default function AccessibilityPage() {
  return (
    <article className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">הצהרת נגישות</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            רועי קליין פיזיותרפיה פועל למתן שירות שוויוני, מכבד ונגיש לכלל הציבור,
            לרבות אנשים עם מוגבלות. אנו פועלים לשיפור הנגישות של האתר והשירות בהתאם לצורך.
          </p>

          <section aria-labelledby="website-accessibility" className="mt-10">
            <h2 id="website-accessibility" className="text-2xl font-bold text-slate-900">
              נגישות האתר
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              האתר הותאם במטרה לעמוד בדרישות תקן ישראלי ת״י 5568 חלק 1 ברמה AA. התקן
              הישראלי מבוסס על הנחיות WCAG 2.0 של ארגון W3C, בכפוף לשינויים הלאומיים בתקן.
            </p>
            <h3 className="mt-6 text-xl font-bold text-slate-900">התאמות שבוצעו באתר</h3>
            <ul className="mt-3 list-disc space-y-2 pr-6 leading-7 text-slate-600">
              <li>הגדרת שפת האתר כעברית וכיוון תצוגה מימין לשמאל.</li>
              <li>קישור דילוג לתוכן הראשי וניווט באמצעות מקלדת.</li>
              <li>מבנה כותרות, אזורי תוכן ורשימות המותאם לטכנולוגיות מסייעות.</li>
              <li>מיקוד מקלדת נראה, לרבות בתפריטים, בטופס ובחלונות מידע.</li>
              <li>תוויות לשדות, הוראות מילוי והודעות שגיאה נגישות בטופס יצירת הקשר.</li>
              <li>טקסט חלופי לתמונות תוכן והתעלמות מתמונות עיצוביות.</li>
              <li>התאמה למסכים בגדלים שונים ותמיכה בהפחתת תנועה לפי הגדרת המכשיר.</li>
              <li>אפשרות לסגור חלונות ותפריטים באמצעות מקש Escape.</li>
            </ul>
          </section>

          <section aria-labelledby="accessibility-tools" className="mt-10">
            <h2 id="accessibility-tools" className="text-2xl font-bold text-slate-900">
              כלי הנגישות באתר
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              כפתור הנגישות הצף מאפשר, בין היתר, שינוי גודל וריווח טקסט, הדגשת קישורים
              וכותרות, שינויי ניגודיות, הסתרת תמונות, ביטול אנימציות, מדריך קריאה,
              סמנים מוגדלים והקראת התוכן העיקרי. כלי זה הוא אמצעי עזר נוסף ואינו תחליף
              להתאמות הנגישות הבסיסיות באתר.
            </p>
          </section>

          <section aria-labelledby="physical-accessibility" className="mt-10">
            <h2 id="physical-accessibility" className="text-2xl font-bold text-slate-900">
              הסדרי נגישות במקום מתן השירות
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              הטיפול ניתן בתיאום מראש. לקבלת מידע עדכני ומפורט על חניה נגישה, דרך נגישה,
              כניסה, מעלית, שירותים נגישים או התאמה אחרת הנדרשת לקראת הביקור, יש לשאול על
              כך במועד תיאום התור הראשוני.
            </p>
          </section>

          <section aria-labelledby="accessibility-contact" className="mt-10">
            <h2 id="accessibility-contact" className="text-2xl font-bold text-slate-900">
              פנייה בנושא נגישות
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              אחראי לפניות נגישות: רועי קליין. אם נתקלתם בקושי בשימוש באתר או בקבלת
              השירות, אנא פנו אלינו. מומלץ לציין את כתובת הדף, הפעולה שניסיתם לבצע,
              סוג הדפדפן והטכנולוגיה המסייעת, ככל שנעשה בה שימוש.
            </p>
            <ul className="mt-3 space-y-2 leading-7 text-slate-600">
              <li>
                דוא״ל:{" "}
                <a className="font-semibold text-teal-600 underline" href={`mailto:${site.email}`}>
                  <span dir="ltr">{site.email}</span>
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="third-party" className="mt-10">
            <h2 id="third-party" className="text-2xl font-bold text-slate-900">
              שירותים חיצוניים
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              חלק מהקישורים והשירותים באתר עשויים להפנות לשירותים חיצוניים, כגון WhatsApp
              ושירות שליחת הטופס. אם שירות חיצוני אינו נגיש עבורכם, ניתן לפנות אלינו
              בטלפון או בדוא״ל ולקבל דרך חלופית לקבלת השירות.
            </p>
          </section>

          <p className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-600">
            הצהרת הנגישות עודכנה לאחרונה ביום {updatedAt}.
          </p>
        </div>
      </Container>
    </article>
  );
}
