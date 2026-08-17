import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import ArticleFigure from "../../components/ArticleFigure";
import AuthorBox from "../../components/AuthorBox";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("sacroiliac-joint-pain");

export const metadata: Metadata = {
  title: "כאב במפרק העצה והכסל (Sacroiliac Joint Pain): אבחון וטיפול פיזיותרפי",
  description:
    "כאב בצד אחד של הגב התחתון או הישבן עשוי להיות קשור למפרק העצה והכסל. כיצד הכאב מרגיש, מדוע הוא מתפתח, כיצד מאבחנים אותו, מה כוללת הפיזיותרפיה ומתי חשוב לפנות לבירור רפואי.",
  alternates: { canonical: "/professional-info/sacroiliac-joint-pain" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "כאב במפרק העצה והכסל | רועי קליין פיזיותרפיה",
    description:
      "מפרק ה־SIJ, האבחנה המבדלת מול הגב המותני והירך, בדיקות הפרובוקציה, מה אומרים המחקרים על טיפול מנואלי ותרגול, ודגלים אדומים שמחייבים בירור.",
    url: "/professional-info/sacroiliac-joint-pain",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";

function Ref({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#ref-${n}`} className="mx-0.5 font-semibold text-teal-600 hover:underline">
        [{n}]
      </a>
    </sup>
  );
}

const faqItems = [
  {
    q: "האם המפרק יכול לצאת מהמקום?",
    a: "ברוב המקרים לא. התנועה במפרק קטנה מאוד והוא נתמך ברצועות חזקות. תחושה של חוסר סימטריה, נעילה או תזוזה אינה מעידה בהכרח שהמפרק יצא ממקומו.",
  },
  {
    q: "האם צריך לבצע צילום או MRI?",
    a: "לרוב לא בתחילת הדרך. ההדמיה משמשת בעיקר כאשר קיים חשד לחבלה, למחלה דלקתית, לזיהום או למקור אחר המחייב בירור. ממצאים בהדמיה אינם תמיד מסבירים את הכאב.",
  },
  {
    q: "האם מנוחה מלאה יכולה לעזור?",
    a: "מנוחה קצרה או הפחתת עומס עשויות לעזור בהתלקחות חריפה, אך הימנעות ממושכת מפעילות אינה מומלצת בדרך כלל. עדיף להתאים את רמת הפעילות ולהחזיר עומס בהדרגה בהתאם לתגובה.",
  },
];

export default function SacroiliacJointPainArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            כאב במפרק העצה והכסל: אבחון וטיפול פיזיותרפי
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            מפרק העצה והכסל, המכונה גם מפרק SIJ&rlm; או המפרק הסקרואיליאק, מחבר בין עצם העצה שבתחתית עמוד השדרה לבין
            עצמות האגן. הוא מעביר עומסים בין הגו לרגליים ומאפשר תנועה קטנה יחסית, אך משמעותית בזמן
            הליכה, קימה, ריצה ושינויי תנוחה.
          </p>
          <p className={pClass}>
            כאב המיוחס למפרק ולרקמות שסביבו עשוי להסביר חלק ממקרי כאב הגב התחתון, בעיקר כאשר הכאב
            ממוקם מתחת לגובה החוליות המותניות ובצד אחד של הגוף. ההערכות במחקרים משתנות, אך מדובר{" "}
            <span className="font-bold">בכ־15 עד 30 אחוזים</span> ממקרי כאב הגב התחתון הכרוני שאינו
            נובע מלחץ על שורש עצב.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>כיצד הכאב עשוי להרגיש?</h2>
          <p className={pClass}>
            הכאב מופיע לרוב בצד אחד, באזור הגב התחתון או הישבן, סמוך לשקע שמעל האגן. לעיתים הוא
            מקרין לצד הירך, לחלק האחורי שלה או למפשעה.
          </p>
          <p className={pClass}>
            הכאב עשוי להתגבר בקימה מכיסא, בהתהפכות במיטה, בעלייה במדרגות, בעמידה ממושכת על רגל אחת
            או לאחר הליכה וריצה. אצל חלק מהאנשים הוא מופיע לאחר חבלה, נפילה או עלייה חדה בעומס
            הפעילות.
          </p>
          <p className={pClass}>
            תסמינים אלה אינם ייחודיים למפרק העצה והכסל. כאב שמקורו בגב המותני, במפרקי הירך, בשרירים
            או במערכת העצבים יכול להרגיש באופן דומה.
          </p>

          <h2 className={h2Class}>מדוע עלול להתפתח כאב באזור?</h2>
          <p className={pClass}>
            כאב באזור מפרק העצה והכסל עשוי להתפתח בעקבות כמה גורמים. לעיתים קיים גורם ברור, כמו
            חבלה או שינוי חד בעומס, ובמקרים אחרים מדובר בשילוב של כמה גורמים.
          </p>

          <ArticleFigure
            src="/professional-info/sacroiliac-joint-pain-causes.webp"
            alt="אינפוגרפיקה של חמישה גורמים אפשריים לכאב במפרק העצה והכסל: עומס או חבלה, היריון ולאחר לידה, תנועה והעברת עומס, מקור דלקתי ולאחר ניתוח גב, סביב איור אגן עם הדגשת המפרקים"
            caption="הגורמים המוצגים באיור אינם מעידים בהכרח שמפרק העצה והכסל הוא מקור הכאב. לעיתים קיימת חפיפה עם כאב שמקורו בגב המותני, בירך או ברקמות אחרות באזור, ולכן יש לבחון את התמונה הקלינית המלאה."
          />

          <h2 className={h2Class}>כיצד מאבחנים?</h2>
          <p className={pClass}>
            אין תסמין יחיד, צילום או בדיקה גופנית שמוכיחים לבדם כי המפרק הוא מקור הכאב. גם שינויים
            הנראים בצילום, ב־CT&rlm; או ב־MRI&rlm; אינם בהכרח קשורים לתסמינים.
          </p>
          <p className={pClass}>
            ההערכה מתחילה בשיחה על מיקום הכאב, מועד הופעתו, הפעולות המחמירות אותו והיסטוריה של
            חבלות, היריון, ניתוחים או מחלות דלקתיות. לאחר מכן נבדקים הגב, האגן, הירכיים, מערכת
            העצבים והאופן שבו הגוף מעביר עומס בתנועה.
          </p>
          <p className={pClass}>
            אפשר להשתמש במספר בדיקות המעוררות עומס מבוקר על אזור המפרק. בדיקה חיובית אחת אינה
            מספיקה לאבחנה.{" "}
            <span className="font-bold">
              שילוב של מספר בדיקות חיוביות יכול להגביר את החשד, בעוד שמספר בדיקות שליליות מסייע
              יותר לשלול את המפרק כמקור העיקרי לכאב
            </span>
            .<Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            כאשר נדרשת ודאות גבוהה לפני טיפול פולשני, ניתן להשתמש בהזרקה אבחנתית מונחית הדמיה.
            בדיקה זו אינה נדרשת בדרך כלל בתחילת הטיפול.
          </p>

          <h2 className={h2Class}>כיצד פיזיותרפיה יכולה לעזור?</h2>
          <p className={pClass}>
            פיזיותרפיה היא חלק מהטיפול השמרני הראשוני בכאב באזור מפרק העצה והכסל. מטרת הטיפול אינה
            &rdquo;להחזיר את האגן למקום&ldquo;, אלא לזהות אילו תנועות, עומסים או מגבלות קשורים
            לתסמינים ולבנות חזרה הדרגתית לפעילות ולתפקוד.
          </p>

          <ArticleFigure
            src="/professional-info/sacroiliac-joint-physiotherapy.webp"
            alt="אינפוגרפיקה של חמישה מרכיבים בטיפול הפיזיותרפי בכאב במפרק העצה והכסל: התאמת עומס, תרגול מותאם אישית, שיפור תנועה, טיפול מנואלי כתוספת ולעיתים חגורת אגן"
            caption="הטיפול עשוי לכלול התאמת עומס, תרגול מותאם אישית, שיפור תנועה, טיפול מנואלי ולעיתים גם חגורת אגן, בהתאם לממצאי הבדיקה ולמאפייני הכאב."
          />

          <p className={pClass}>
            המחקרים מצביעים על כך שפיזיותרפיה עשויה להביא לשיפור, בעיקר בטווח הקצר והבינוני. טיפול
            מנואלי עשוי לתרום לשיפור בתפקוד, ובחלק מהמחקרים שילוב שלו עם תרגול הניב תוצאות עקביות
            או ממושכות יותר מתרגול בלבד. עם זאת, איכות הראיות מוגבלת, המחקרים שונים זה מזה ואין כיום
            שיטת טיפול אחת שמתאימה לכל אדם.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>מתי חשוב לפנות לבירור רפואי?</h2>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              יש לפנות לבדיקה רפואית בהקדם כאשר הכאב מלווה בחום, ירידה בלתי מוסברת במשקל, חבלה
              משמעותית, חולשה מתקדמת ברגליים, שינוי בשליטה על שתן או צואה, ירידה בתחושה באזור
              המפשעה או כאב חזק שאינו משתפר.
            </p>
          </div>
          <p className={pClass}>
            גם כאב המלווה בנוקשות בוקר ממושכת, יקיצות תכופות בלילה, מחלת מעי דלקתית, פסוריאזיס או
            דלקות עיניים חוזרות מצדיק הערכה של אפשרות למחלה דלקתית. בכלל זה סקרואילאיטיס, דלקת של
            המפרק עצמו על רקע ראומטי, שהיא אבחנה שונה מכאב מכני באזור.
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/coccydynia-tailbone-pain"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאבים בעצם הזנב
            </Link>{" "}
            ו־
            <Link
              href="/professional-info/low-back-pain"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאבי גב תחתון
            </Link>
            .
          </p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              כאב שחוזר בצד אחד של הגב התחתון או הישבן מצדיק בירור מסודר. בהערכה בודקים אילו מבנים
              מעורבים, אילו עומסים מעוררים את הכאב וכיצד לבנות חזרה הדרגתית לתנועה ולפעילות.
            </p>
            <Link
              href="/#contact"
              className="btn-press mt-4 inline-block rounded-full bg-teal-700 px-6 py-3 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
            >
              לקביעת פגישת אבחון
            </Link>
          </div>

          <ArticleFaq items={faqItems} />

          <h2 id="references" className={`${h2Class} scroll-mt-24`}>
            מקורות
          </h2>
          <ol
            dir="ltr"
            className="mt-4 list-decimal space-y-3 pl-6 text-left text-sm leading-7 text-black"
          >
            <li id="ref-1" className="scroll-mt-24">
              McCormick ZL, Hurley RW, Anitescu M, et al. Consensus Practice Guidelines on
              Sacroiliac Joint Complex Pain From a Multispecialty, International Working Group. Pain
              Med. 2025;26(12):817-917. doi:
              <a
                href="https://doi.org/10.1093/pm/pnaf129"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/pm/pnaf129
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Newman DP, Soto AT. Sacroiliac Joint Dysfunction: Diagnosis and Treatment. Am Fam
              Physician. 2022;105(3):239-245.
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Javadov A, Ketenci A, Aksoy C. The Efficiency of Manual Therapy and Sacroiliac and
              Lumbar Exercises in Patients With Sacroiliac Joint Dysfunction Syndrome. Pain
              Physician. 2021;24(3):223-233.
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Yan H, Zhao P, Guo X, Zhou X. The Effects of Core Stability Exercises and Mulligan&apos;s
              Mobilization With Movement Techniques on Sacroiliac Joint Dysfunction. Front Physiol.
              2024;15:1337754. doi:
              <a
                href="https://doi.org/10.3389/fphys.2024.1337754"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.3389/fphys.2024.1337754
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Sayed D, Deer TR, Tieppo Francio V, et al. American Society of Pain and Neuroscience
              Best Practice Guideline for the Treatment of Sacroiliac Disorders. J Pain Res.
              2024;17:1601-1638. doi:
              <a
                href="https://doi.org/10.2147/JPR.S464393"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.2147/JPR.S464393
              </a>
              .
            </li>
          </ol>
          <p className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
            המידע בדף זה נועד להרחבת הידע ואינו מחליף בדיקה רפואית, אבחון אישי או טיפול רפואי.
          </p>
          <AuthorBox />
        </div>
      </Container>
    </article>
  );
}
