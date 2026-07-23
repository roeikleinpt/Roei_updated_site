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

const article = getArticle("mens-pelvic-floor-physiotherapy");

// ── דף המאסטר (hub) לנושא רצפת האגן ─────────────────────────────────
// כשמעלים הסבר/מאמר חדש שקשור לטיפול ברצפת האגן, יש לקשר אותו גם מכאן:
//   1) ברשימת "למי הטיפול עשוי להתאים" (אם רלוונטי כמצב), ו/או
//   2) בפסקת "מקורות ולקריאה נוספת".
// ────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "טיפול רצפת אגן לגבר: למי מתאים ומה הוא כולל",
  description:
    "מהי רצפת האגן אצל גברים, אילו תסמינים עשויים להיות קשורים אליה, מה כוללת ההערכה הפיזיותרפית, והאם נדרשת בדיקה פנימית. הסבר ברור, מקצועי ולא שיפוטי.",
  alternates: { canonical: "/professional-info/mens-pelvic-floor-physiotherapy" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "טיפול רצפת אגן לגבר: למי מתאים ומה הוא כולל | רועי קליין פיזיותרפיה",
    description: "רצפת האגן אצל גברים — תסמינים, מה כוללת ההערכה ומקומה של הבדיקה הפנימית.",
    url: "/professional-info/mens-pelvic-floor-physiotherapy",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const ulClass = "mt-4 list-disc space-y-1 pr-6 leading-8 text-black";

const faqItems = [
  {
    q: "האם הטיפול ברצפת האגן מחייב בדיקה פנימית?",
    a: "לא. ההערכה מתחילה בתשאול, ובהתאם לצורך יכולה לכלול בדיקה חיצונית של אזור רצפת האגן, לרבות הפין, האשכים ופי הטבעת. כל בדיקה מתבצעת רק לאחר הסבר ובהסכמת המטופל. בדיקה או טיפול פנימי נשקלים כאשר הם עשויים לתרום להערכה או לטיפול, אך אינם חובה. ניתן להתחיל בתהליך גם בלעדיהם.",
  },
  {
    q: "רצפת אגן זה לא נושא של נשים?",
    a: "לא. גם לגברים יש רצפת אגן, והיא יכולה להיות מעורבת בכאב, בתסמיני שתן ויציאות ובתפקוד המיני. מדובר בנושא שפחות מדובר בקרב גברים, ולכן רבים אינם יודעים שקיים מענה פיזיותרפי מותאם.",
  },
  {
    q: "האם תרגילי קיגל יכולים לעזור?",
    a: "לפעמים, אך הם אינם מתאימים לכל מצב. כאשר השרירים מתוחים, רגישים או מתקשים להירפות, תרגילי כיווץ חוזרים עלולים שלא להתאים ולעיתים גם להחמיר את התסמינים. הטיפול נקבע לפי ממצאי ההערכה ועשוי לכלול הרפיה, קואורדינציה ונשימה, ולא רק חיזוק.",
  },
  {
    q: "האם אפשר לקבל החזר מקופת החולים או מביטוח פרטי?",
    a: "הטיפול ניתן באופן פרטי. בחלק מביטוחי הבריאות הפרטיים ניתן לקבל החזר עבור טיפולי פיזיותרפיה, בהתאם לתנאי הפוליסה האישית. מומלץ לבדוק מול חברת הביטוח או סוכן הביטוח מה מגיע לך ומה נדרש לצורך הגשת הבקשה.",
  },
];

export default function MensPelvicFloorArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            טיפול רצפת אגן לגבר: למי יכול להתאים ומה הטיפול כולל?
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            רצפת האגן היא אחד האזורים הפחות מוכרים והפחות מדוברים בגוף הגבר, למרות שהיא בעלת
            השפעה אדירה. היא עובדת מאחורי הקלעים בכל ישיבה, בכל פעילות ספורטיבית, ובתפקודים
            היומיומיים הבסיסיים ביותר: שליטה על שתן ויציאות, ותפקוד מיני.
          </p>
          <p className={pClass}>
            כשמשהו שם לא עובד כמו שצריך, זה יכול להתבטא בכאב או בתסמינים שקשה לחבר אליה, ורבים
            אפילו לא יודעים שקיים לכך מענה פיזיותרפי מותאם.
          </p>
          <p className={pClass}>
            בדף הזה אפשר להבין מהי רצפת האגן, באילו תסמינים היא עשויה להיות מעורבת, מה כוללת
            ההערכה והאם נדרשת בדיקה פנימית.
          </p>

          <h2 className={h2Class}>מהי רצפת האגן?</h2>
          <p className={pClass}>
            רצפת האגן אינה שריר בודד, אלא קומפלקס שרירי, עצבי ושלדי. היא כוללת את עצמות האגן,
            הרצועות והשרירים באזור, שכל אחד מהם נאחז לפחות בקצה אחד באחד ממבני האגן. יחד הם
            יוצרים את בסיס האגן. השרירים האלה תומכים באיברי האגן, משתתפים בשליטה על מתן שתן
            ויציאות, ומעורבים בתפקוד המיני, בתיאום עם הנשימה, הבטן, הגב והירכיים.
          </p>

          <ArticleFigure
            src="/professional-info/pelvic-floor-muscles-color-coded.webp"
            alt="תרשים אנטומי מקודד-צבע של שרירי רצפת האגן העמוקים אצל הגבר, מבט מלמעלה"
            caption="שרירי רצפת האגן העמוקים, מבט מלמעלה. כל צבע מסמן שריר."
            credit="Image used with permission from Pelvic Guru®, LLC as a Pelvic Global Member"
          />

          <p className={pClass}>
            כאב, מתח או קושי בתפקוד השרירים יכולים להתבטא באזורים שונים סביב האגן. עם זאת, לא
            כל תסמין באזור נובע מרצפת האגן, ולכן ההערכה בוחנת גם מבנים ומערכות נוספים.
          </p>

          <h2 className={h2Class}>למי הטיפול עשוי להתאים?</h2>
          <p className={pClass}>
            פיזיותרפיה של רצפת האגן עשויה להיות רלוונטית לגברים עם תסמינים כרוניים, לאחר שנשללו
            גורמים רפואיים אחרים. בין המצבים האפשריים:
          </p>
          <ul className={ulClass}>
            <li>תסמינים במתן שתן, כגון תכיפות, דחיפות, דליפה או קושי בהתרוקנות.</li>
            <li>תסמינים ביציאות, כגון עצירות או תחושת התרוקנות לא מלאה.</li>
            <li>
              כאב אגן כרוני, המכונה באנגלית Chronic Pelvic Pain Syndrome (CPPS)&rlm;, ולעיתים
              מוכר בשם פרוסטטיטיס כרוני.
            </li>
            <li>
              <Link
                href="/professional-info/chronic-testicular-pain-orchialgia-cscp"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:underline"
              >
                כאב אשכים כרוני
              </Link>{" "}
              או כאב באגן, בפרינאום או סביב תפקוד מיני.
            </li>
            <li>
              <Link
                href="/professional-info/groin-pain-athletes"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:underline"
              >
                כאב במפשעה
              </Link>{" "}
              אצל ספורטאים, כאשר קיימת מעורבות אפשרית של רצפת האגן.
            </li>
            <li>
              <Link
                href="/professional-info/coccydynia-tailbone-pain"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:underline"
              >
                כאבים בעצם הזנב
              </Link>{" "}
              שאינם משתפרים בטיפול הממוקד באזור.
            </li>
            <li>תסמינים מתמשכים לאחר ניתוחי ערמונית.</li>
            <li>מצבים לאחר ניתוח באזור האגן, המפשעה והבטן.</li>
          </ul>

          <h2 className={h2Class}>מה כוללת ההערכה?</h2>
          <p className={pClass}>
            לפני הכול, חשוב לדעת שהמפגש מתקיים בדיסקרטיות ובגישה לא שיפוטית. אפשר להעלות גם
            תסמינים אינטימיים או נושאים שלא תמיד קל לדבר עליהם, לשאול שאלות ולהתקדם בקצב שנוח
            לך.
          </p>

          <ArticleFigure
            src="/professional-info/pelvic-floor-assessment.webp"
            alt="אינפוגרפיקה: מרכיבי ההערכה הראשונית בפיזיותרפיה של רצפת האגן — תשאול על מערכת השתן, מערכת העיכול והתפקוד המיני, טווחי תנועה, בדיקה חיצונית ופנימית בהסכמה, והתאמת טיפול"
          />

          <p className={pClass}>
            ההערכה מתחילה בשיחה על התסמינים ועל השפעתם על חיי היום-יום. לאחר מכן, בהתאם לצורך,
            מתבצעת בדיקה חיצונית של האזור ושל המבנים הסמוכים:
          </p>
          <ul className={ulClass}>
            <li>מיקום התסמין, משך הזמן וגורמים שמחמירים או מקלים.</li>
            <li>תסמינים הקשורים למתן שתן, ליציאות ולתפקוד המיני.</li>
            <li>טווחי תנועה של הגב והירכיים, ובחינת הבטן, האגן והנשימה.</li>
            <li>הערכה של יכולת השרירים לכווץ, להרפות ולתאם את פעולתם.</li>
          </ul>
          <p className={pClass}>
            מטרת ההערכה היא להבין אילו מבנים ומערכות מעורבים בתלונה, ולבנות על בסיסה תוכנית
            טיפול מותאמת אישית ולא פרוטוקול אחיד.
          </p>

          <h2 className={h2Class}>האם צריך בדיקה פנימית?</h2>
          <p className={pClass}>
            לא. בדיקה פנימית אינה חובה, ואפשר להתחיל בהערכה גם בלעדיה. כאשר בדיקה או טיפול פנימי
            עשויים להיות רלוונטיים, אסביר מה הם יכולים לתרום ומה עשויה להיות המשמעות של הבחירה
            שלא לבצע אותם. הם מתקיימים רק בהסכמתך, וניתן לעצור, לדחות או לבקש להתאים אותם בכל
            שלב. ההחלטה מתקבלת יחד, לאחר הסבר מלא, ורק כאשר קיימת לכך הצדקה קלינית.
          </p>

          <h2 className={h2Class}>מה הטיפול עשוי לכלול?</h2>
          <p className={pClass}>
            הטיפול נקבע לפי ממצאי ההערכה, ואינו זהה לכל אדם. פיזיותרפיה של רצפת האגן אינה
            מסתכמת בתרגילי קיגל: אצל חלק מהמטופלים דווקא מתח מוגבר, רגישות או קושי בהרפיה הם
            הבעיה, ותרגול כיווץ חוזר עלול שלא להתאים.
          </p>
          <p className={pClass}>בהתאם לממצאים, התוכנית עשויה לכלול:</p>
          <ul className={ulClass}>
            <li>תרגול נשימה, הרפיה ומודעות לאזור.</li>
            <li>שיפור הקואורדינציה בין נשימה, בטן ורצפת האגן.</li>
            <li>תרגול כיווץ והרפיה, וחיזוק כאשר נמצא בכך צורך.</li>
            <li>טיפול מנואלי חיצוני, ובמקרים המתאימים גם פנימי, בהסכמה.</li>
            <li>ביופידבק, הדרכה והתאמת עומסים בחזרה לפעילות.</li>
          </ul>

          <h2 className={h2Class}>האם אפשר לקבל החזר מהקופה או מביטוח פרטי?</h2>
          <p className={pClass}>
            הטיפול ניתן באופן פרטי. בחלק מהביטוחים הפרטיים, ובמקרים מסוימים גם במסגרת כללית
            מושלם, עשויה להיות זכאות להחזר בהתאם לתנאים האישיים. מומלץ לבדוק מראש מול הקופה או
            חברת הביטוח אם קיימת זכאות ואילו מסמכים נדרשים.
          </p>

          <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              אם אחד מהתסמינים שתוארו כאן מוכר לך, אפשר ליצור קשר בשיחה דיסקרטית ולברר אם הערכה
              פיזיותרפית עשויה להתאים.
            </p>
            <Link
              href="/#contact"
              className="btn-press mt-4 inline-block rounded-full bg-teal-700 px-6 py-3 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
            >
              לקביעת פגישת אבחון
            </Link>
          </div>

          <h2 className={h2Class}>שורה תחתונה</h2>
          <p className={pClass}>
            רצפת האגן יכולה להיות חלק מהתמונה, אך לא כל כאב או תסמין באזור נובע ממנה. ההערכה
            נועדה להבין מה רלוונטי במקרה שלך ולהתאים את הטיפול לממצאים. בדיקה פנימית אינה חובה,
            והטיפול אינו מסתכם בחיזוק בלבד.
          </p>

          <ArticleFaq items={faqItems} />

          <h2 id="references" className={`${h2Class} scroll-mt-24`}>
            מקורות ולקריאה נוספת
          </h2>
          <p className={pClass}>
            הסברים מפורטים ומבוססי מקורות על מצבים ספציפיים מופיעים במאמרים הייעודיים:{" "}
            <Link
              href="/professional-info/pelvic-floor-physiotherapy-orchialgia-cscp"
              className="font-semibold text-teal-700 hover:underline"
            >
              פיזיותרפיה לרצפת האגן בכאב אשכים כרוני
            </Link>
            ,{" "}
            <Link
              href="/professional-info/pelvic-floor-physiotherapy-cyclists"
              className="font-semibold text-teal-700 hover:underline"
            >
              רצפת האגן אצל רוכבי אופניים
            </Link>{" "}
            ו
            <Link
              href="/professional-info/coccydynia-tailbone-pain"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאבים בעצם הזנב
            </Link>
            .
          </p>
          <ol
            dir="ltr"
            className="mt-4 list-decimal space-y-3 pl-6 text-left text-sm leading-7 text-black"
          >
            <li id="ref-1" className="scroll-mt-24">
              Academy of Pelvic Health Physical Therapy. What to Expect During Pelvic Health
              Physical Therapy. American Physical Therapy Association; 2025.{" "}
              <a
                href="https://www.aptapelvichealth.org/info/what-to-expect-during-pelvic-health-physical-therapy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                aptapelvichealth.org
              </a>
              .
            </li>
          </ol>
          <p className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
            המידע במאמר אינו מחליף הערכה רפואית או פיזיותרפית אישית.
          </p>
          <AuthorBox />
        </div>
      </Container>
    </article>
  );
}
