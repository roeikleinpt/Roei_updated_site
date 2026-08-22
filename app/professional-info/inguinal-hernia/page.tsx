import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import ArticleFigure from "../../components/ArticleFigure";
import AnnotatedFigure from "../../components/AnnotatedFigure";
import AuthorBox from "../../components/AuthorBox";
import ArticleCta from "../../components/ArticleCta";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("inguinal-hernia");

const CREDIT = "Image used with permission from Pelvic Guru®, LLC as a Pelvic Global Member";

export const metadata: Metadata = {
  title: "בקע מפשעתי (Inguinal Hernia): תסמינים, אבחון ומה מקומה של הפיזיותרפיה",
  description:
    "בקע מפשעתי הוא פגם מבני בדופן הבטן, ולא כל כאב במפשעה נובע ממנו. מה מבדיל בין הסוגים, אילו תסמינים אופייניים, מתי נדרש בירור דחוף, ומה תפקידה של ההערכה הפיזיותרפית כשלא ברור אם הבקע הוא מקור הכאב.",
  alternates: { canonical: "/professional-info/inguinal-hernia" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "בקע מפשעתי | רועי קליין פיזיותרפיה",
    description:
      "ההבדל בין בקע עקיף, ישיר ופמורלי, מתי מספיקה בדיקה גופנית, למה לא כל כאב במפשעה הוא בקע, ואילו תסמינים מחייבים פנייה דחופה.",
    url: "/professional-info/inguinal-hernia",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const ulClass = "mt-4 list-disc space-y-2 pr-6 leading-8 text-black";
const h3Class = "mt-6 text-xl font-bold text-slate-900";
// scroll-mt כדי שהכותרת הדביקה לא תכסה את הפריט, ו-:target מדגיש את מה שהגיעו אליו
const liClass =
  "scroll-mt-24 rounded-lg px-3 py-1.5 leading-8 text-black transition-colors target:bg-teal-50 target:ring-1 target:ring-teal-200";

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
    q: "האם אפשר לחזק את השרירים וכך להעלים בקע?",
    a: "לא. בקע אמיתי הוא פגם מבני, ותרגול אינו סוגר את הפתח בדופן הבטן. חיזוק עשוי להיות רלוונטי לבעיות שריר־שלד אחרות באזור, אך אינו טיפול שמרפא את הבקע עצמו.",
  },
  {
    q: "מצאו לי בקע קטן באולטרסאונד. האם זה אומר שהוא גורם לכאב?",
    a: "לא בהכרח. יש צורך בהתאמה בין מיקום הבקע, התסמינים והבדיקה. כאשר ההתאמה אינה ברורה, כדאי לשקול גם מקורות אחרים לכאב במפשעה.",
  },
  {
    q: "האם בקע יכול להיות ללא כאב?",
    a: "כן. בערך שליש מהאנשים עם בקע במפשעה אינם מדווחים על תסמינים.",
  },
  {
    q: "האם הרמת משקולות גורמת לבקע?",
    a: "לא ניתן לומר זאת באופן גורף. מחקרים שבדקו את הקשר בין הרמה כבדה לבין התפתחות בקע לא נתנו תשובה חד־משמעית.",
  },
  {
    q: "אם יש לי בקע, האם תמיד צריך להפסיק להתאמן?",
    a: "עצם קיומו של בקע אינו נותן לבדו תשובה לגבי פעילות מותרת או אסורה. ההחלטה תלויה בתסמינים, בסוג הבקע ובבדיקה הרפואית. אם מאמץ מסוים גורם לכאב משמעותי, להגדלה ניכרת של הבליטה או לשינוי בתסמינים, כדאי להיבדק ולא להמשיך להתאמן דרך כאב חריג.",
  },
];

export default function InguinalHerniaArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            בקע מפשעתי: תסמינים, אבחון ומה מקומה של הפיזיותרפיה
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            בקע מפשעתי, המכונה לעיתים גם &rdquo;הרניה&rdquo;, הוא מצב שבו רקמה מחלל הבטן בולטת דרך
            אזור חלש בדופן הבטן באזור המפשעה.
            לעיתים הוא נראה כבליטה ברורה, ולעיתים הוא קטן או סמוי ומתגלה רק בבדיקה. בקע יכול להיות
            כמעט ללא תסמינים, אך הוא גם עשוי לגרום לתחושת כובד, משיכה או כאב במפשעה.
          </p>
          <p className={pClass}>
            חשוב להבדיל בין בקע מפשעתי אמיתי, שהוא פגם מבני בדופן הבטן, לבין מצבים אחרים שיכולים
            לגרום לכאב באותו אזור, כגון פגיעה באדוקטורים, בעיה במפרק הירך או Athletic
            Pubalgia&rlm;, המכונה לעיתים באופן מטעה &rdquo;Sports Hernia&rdquo;&rlm;.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className="mt-4 text-xl font-bold leading-9 text-slate-900">
            לא כל כאב במפשעה הוא בקע, ולא כל בקע שנמצא בבדיקה הוא בהכרח הסיבה לכאב.
          </p>

          <h2 className={h2Class}>מהו בעצם בקע?</h2>
          <p className={pClass}>
            בקע כולל פתח או אזור חולשה בדופן הבטן, שק הנוצר מקרום הצפק ותוכן שיכול לבלוט דרכו.
          </p>
          <p className={pClass}>
            באזור המפשעה נהוג להבחין בין שני סוגים עיקריים של בקע מפשעתי.
            <Ref n={1} />
          </p>

          <h3 className={h3Class}>סוגי בקע באזור המפשעה</h3>

          <AnnotatedFigure
            src="/professional-info/inguinal-hernia-types.webp"
            alt="איור של דופן הבטן התחתונה מלפנים, ובו מסומנות שלוש בליטות באזור המפשעה: בקע מפשעתי ישיר, בקע מפשעתי עקיף ובקע פמורלי"
            width={1718}
            height={2278}
            markers={[
              { n: 1, cx: 673, cy: 1482, rx: 80, ry: 42, rot: 74.1, bx: 960, by: 1420, href: "hernia-direct", label: "בקע מפשעתי ישיר" },
              { n: 2, cx: 685, cy: 1680, rx: 81, ry: 50, rot: 48.4, bx: 990, by: 1810, href: "hernia-indirect", label: "בקע מפשעתי עקיף" },
              { n: 3, cx: 553, cy: 1692, rx: 80, ry: 35, rot: 39.2, bx: 275, by: 1830, href: "hernia-femoral", label: "בקע פמורלי" },
            ]}
            caption="הקישו על המספר או האזור המוקף באיור כדי לעבור להסבר על אותו סוג בקע."
            credit={CREDIT}
          />

          <ol className="mt-6 space-y-1">
            <li>
              <div id="hernia-direct" className={liClass}>
              <span className="font-bold">1. בקע מפשעתי ישיר (Direct Inguinal Hernia)&rlm;</span>{" "}
              בולט דרך דופן התעלה המפשעתית ונמצא בצד הפנימי של כלי הדם האפיגסטריים התחתונים.
              </div>
            </li>
            <li>
              <div id="hernia-indirect" className={liClass}>
              <span className="font-bold">
                2. בקע מפשעתי עקיף (Indirect Inguinal Hernia)&rlm;
              </span>{" "}
              עובר דרך הטבעת המפשעתית הפנימית ונמצא בצד החיצוני של כלי הדם האפיגסטריים התחתונים.
              לעיתים הוא יכול להתקדם לאורך התעלה המפשעתית ועד שק האשכים.
              </div>
            </li>
            <li>
              <div id="hernia-femoral" className={liClass}>
              <span className="font-bold">3. בקע פמורלי (Femoral Hernia)&rlm;</span> אינו בקע
              מפשעתי במובן האנטומי המדויק, אך הוא מופיע באותו אזור כללי ולכן חשוב להכיר אותו. הוא
              נמצא מתחת לרצועה המפשעתית, ושכיחותו היחסית גבוהה יותר בנשים. לבקע פמורלי גם סיכון
              גבוה יותר להסתבכות.
              <Ref n={1} />
              <Ref n={3} />
              </div>
            </li>
          </ol>

          <h2 className={h2Class}>עד כמה בקע מפשעתי שכיח?</h2>
          <p className={pClass}>
            בקע במפשעה שכיח משמעותית יותר בגברים. הערכות אפידמיולוגיות מקובלות מצביעות על סיכון
            לאורך החיים של כ־27% בגברים לעומת כ־3% בנשים. השכיחות עולה עם הגיל, ובקע מפשעתי עקיף
            שכיח יותר מבקע ישיר.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            גם היסטוריה משפחתית קשורה לסיכון מוגבר. גורמים נוספים שנמצאו קשורים לבקע כוללים בין
            היתר עישון, מחלות רקמת חיבור ומצבים מסוימים המלווים בלחץ תוך־בטני מוגבר.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            למרות האמונה הנפוצה, הקשר בין הרמת משקל לבין היווצרות בקע אינו פשוט. הספרות אינה
            מאפשרת לקבוע שכל אירוע של הרמת משקל כבד, או אפילו עיסוק בהרמת משקולות, הוא כשלעצמו
            הגורם לבקע.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>אילו תסמינים יכולים להופיע?</h2>
          <p className={pClass}>
            כשליש מהאנשים עם בקע במפשעה עשויים להיות ללא תסמינים כלל. התסמינים יכולים לכלול:
            <Ref n={1} />
            <Ref n={3} />
          </p>

          <ArticleFigure
            src="/professional-info/inguinal-hernia-symptoms.webp"
            alt="אינפוגרפיקה של התסמינים האפשריים בבקע מפשעתי, בהם בליטה במפשעה, תחושת כובד או משיכה, כאב מקומי והחמרה במאמץ"
          />

          <p className={pClass}>
            לעיתים יכולה להיות גם אי־נוחות בזמן יציאה, מתן שתן או יחסי מין. בחלק מהמקרים התסמינים
            מחמירים ככל שהיום מתקדם ומשתפרים בשכיבה. בקע שניתן להחזרה עשוי גם להצטמצם או להיעלם
            בשכיבה ולחזור בעמידה או במאמץ.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>כיצד מאבחנים בקע מפשעתי?</h2>
          <p className={pClass}>
            ברוב המקרים האבחנה מתחילה באנמנזה ובבדיקה גופנית. מחפשים בליטה במפשעה ובודקים אם היא
            מופיעה או משתנה בזמן שיעול או מאמץ שמעלה את הלחץ בתוך הבטן.
            <Ref n={1} />
            <Ref n={3} />{" "}
            לא תמיד יש צורך בבדיקת הדמיה. כאשר הסיפור והבדיקה הגופנית אופייניים והבקע ברור, לעיתים
            האבחנה הקלינית מספיקה.
          </p>
          <p className={pClass}>
            כאשר קיימים תסמינים המתאימים לבקע אך לא ניתן למשש או לראות אותו, ניתן להיעזר בהדמיה כדי
            לחפש בקע סמוי או סיבה אחרת לכאב. אולטרסאונד הוא בדיקה זמינה ושימושית אך תלויה במידה
            רבה במי שמבצע אותה. במקרים מסוימים נעשה שימוש גם ב־CT&rlm; או ב־MRI&rlm;.
            <Ref n={1} />
            <Ref n={3} />
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>האם כל כאב במפשעה הוא בקע?</h2>
          <p className={pClass}>
            <span className="font-bold">לא.</span> כאב במפשעה יכול להגיע ממספר רב של מבנים, ולעיתים אפילו יותר מגורם אחד קיים באותו אדם.
            בין האפשרויות נמצאות:
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <ul className={ulClass}>
            <li>
              פגיעה או טנדינופתיה של{" "}
              <Link
                href="/professional-info/adductor-strain"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:underline"
              >
                שרירי המקרבים
              </Link>
            </li>
            <li>
              <Link
                href="/professional-info/sports-hernia-athletic-pubalgia"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:underline"
              >
                Athletic Pubalgia
              </Link>
            </li>
            <li>
              <Link
                href="/professional-info/femoroacetabular-impingement"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:underline"
              >
                פגיעה במפרק הירך, כולל תסמונת צביטה (Femoroacetabular Impingement)
              </Link>
            </li>
            <li>
              <Link
                href="/professional-info/groin-pain-athletes"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:underline"
              >
                כאב הקשור לעצם החיק (Osteitis Pubis)
              </Link>
            </li>
            <li>גירוי או לחץ על עצבים באזור המפשעה</li>
            <li>
              בעיות אורולוגיות או{" "}
              <Link
                href="/professional-info/chronic-testicular-pain-orchialgia-cscp"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:underline"
              >
                כאב באשך
              </Link>
            </li>
            <li>כאב מוקרן מהגב או ממבנים אחרים</li>
          </ul>
          <p className={pClass}>
            אצל ספורטאים ההבחנה הזאת חשובה במיוחד. המונח Sports Hernia יוצר לעיתים בלבול, משום
            שבמקרים רבים לא קיים כלל בקע אמיתי. בספרות נעשה כיום שימוש גם במונחים Athletic
            Pubalgia&rlm;, Core Muscle Injury או Groin Pain Syndrome לתיאור חלק מהמצבים האלה.
            <Ref n={2} />
          </p>
          <p className={pClass}>
            לכן מציאת בקע קטן בבדיקת הדמיה אינה בהכרח סוף הבירור. צריך לשאול אם מיקום הכאב, אופי
            התסמינים והבדיקה אכן מתאימים לכך שהבקע הוא המקור לכאב.
          </p>
          <h2 className={h2Class}>מה התפקיד של פיזיותרפיה בבקע מפשעתי?</h2>
          <p className={pClass}>
            כאשר קיים כאב במפשעה ולא ברור אם הבקע שנמצא הוא אכן מקורו, ההערכה הפיזיותרפית בודקת
            דברים נוספים שעשויים להסביר את התסמינים:
          </p>
          <ul className={ulClass}>
            <li>מפרק הירך: שרירים, רצועות ומבנים גרמיים</li>
            <li>שרירי הבטן והחיבור שלהם לאגן</li>
            <li>העומס בזמן ריצה, שינויי כיוון או פעילות ספורטיבית</li>
            <li>מאפיינים שעשויים להתאים לכאב ממקור עצבי</li>
          </ul>
          <p className={pClass}>
            אם מתברר שמקור הכאב הוא תסמונת כאב מפשעה, טיפול מבוסס תרגול יכול להיות קו טיפול ראשון
            יעיל.
            <Ref n={2} />{" "}
            הטיפול מכוון אז למקור שנמצא ולא לבקע עצמו.
          </p>
          <p className={pClass}>
            חשוב לציין, פיזיותרפיה אינה סוגרת בקע מפשעתי ואינה מתקנת את הפגם המבני בדופן הבטן. אין
            כיום בסיס לכך שחיזוק שרירי הבטן, רצפת האגן או כל קבוצת שרירים אחרת יגרום לבקע אמיתי
            להיעלם.
            <Ref n={1} />
            <Ref n={3} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>האם כל בקע צריך ניתוח?</h2>
          <p className={pClass}>לא בהכרח.</p>
          <p className={pClass}>
            בגברים עם בקע מפשעתי שאינו גורם לתסמינים, או גורם לתסמינים קלים שאינם מגבילים פעילות
            ושניתן להחזירו, ניתן במקרים מתאימים לבחור במעקב במקום בניתוח מיידי. מחקרים ארוכי טווח
            מצאו שהסיכון לאירוע חירום בתקופת המעקב נמוך, אך חלק ניכר מהמטופלים בוחר בסופו של דבר
            לעבור ניתוח, בדרך כלל בעקבות הופעת כאב או החמרה בתסמינים.
            <Ref n={1} />
            <Ref n={3} />
            <Ref n={5} />{" "}
            כאשר הבקע גורם לכאב משמעותי או מגביל פעילות, בדרך כלל עולה האפשרות של תיקון ניתוחי.
          </p>
          <p className={pClass}>
            אצל נשים ההתייחסות שונה, בין היתר משום שקיימת שכיחות יחסית גבוהה יותר של בקע פמורלי
            וקשה לעיתים להבדיל בינו לבין בקע מפשעתי בבדיקה בלבד. לכן חשד לבקע באזור המפשעה אצל
            אישה מצדיק הערכה רפואית מתאימה ולא כדאי להניח שמדובר בבקע מפשעתי פשוט שניתן רק לעקוב
            אחריו.
            <Ref n={3} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>האם גודל הבקע קובע אם צריך ניתוח?</h2>
          <p className={pClass}>
            לא בפני עצמו. אין ערך סף פשוט בסנטימטרים שממנו כל בקע מחייב ניתוח. בהחלטה מתחשבים
            בעיקר בתסמינים, ביכולת להחזיר את הבקע, בהשפעה על הפעילות, בסוג הבקע ובמאפיינים של
            האדם. בקע קטן יכול להיות סימפטומטי מאוד, ובקע גדול יותר יכול כמעט שלא להפריע.
            <Ref n={3} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>דגלים אדומים: מתי צריך לפנות בדחיפות?</h2>
          <p className={pClass}>
            ברוב המקרים בקע מפשעתי אינו מצב חירום. עם זאת, שינוי חד באופי הבקע או בתסמינים מחייב
            התייחסות אחרת. יש לפנות בדחיפות להערכה רפואית כאשר מופיע אחד מהמצבים הבאים, ובמיוחד
            כאשר כמה מהם מופיעים יחד:
          </p>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <ul className="list-disc space-y-2 pr-6 leading-8 text-amber-950">
              <li>כאב חזק ופתאומי במפשעה או בבקע</li>
              <li>בקע שהיה ניתן להחזרה ופתאום אינו חוזר פנימה</li>
              <li>בליטה שהפכה קשה, מתוחה או רגישה מאוד</li>
              <li>החמרה מהירה בכאב</li>
              <li>הקאות או בחילות משמעותיות</li>
              <li>נפיחות בטנית או סימנים לחסימת מעי</li>
              <li>חום, חולשה משמעותית או הידרדרות כללית</li>
            </ul>
          </div>
          <p className={pClass}>
            בקע שהופך באופן חד לבלתי ניתן להחזרה עלול לכלוא בתוכו מעי או רקמה אחרת. אם נפגעת גם
            אספקת הדם לרקמה מדובר במצב של חנק של תוכן הבקע (strangulation)&rlm;, שעלול לדרוש ניתוח
            חירום.
            <Ref n={1} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            חשוב להבדיל זאת מבקע שהיה בלתי ניתן להחזרה במשך זמן רב ללא שינוי חד וללא תסמינים
            חדשים. עצם העובדה שבקע אינו חוזר פנימה אינה מוכיחה שקיים חנק, אך שינוי חד, כאב משמעותי
            או תסמינים מערכתיים הם סיבה להיבדק בדחיפות.
            <Ref n={6} />
          </p>

          <ArticleCta
            intro="כאשר נמצא בקע אך התמונה הקלינית אינה מתאימה באופן ברור לכך שהוא מקור הכאב, הערכה פיזיותרפית יכולה לסייע בבדיקת מקורות שריר־שלדיים נוספים באזור הירך, האדוקטורים, הבטן והאגן."
            whatsappText="היי רועי, קראתי אצלך הסבר על בקע מפשעתי, ואשמח לבדוק אם הטיפול מתאים לי."
          />

          <ArticleFaq items={faqItems} />

          <h2 id="references" className={`${h2Class} scroll-mt-24`}>
            מקורות
          </h2>
          <ol
            dir="ltr"
            className="mt-4 list-decimal space-y-3 pl-6 text-left text-sm leading-7 text-black"
          >
            <li id="ref-1" className="scroll-mt-24">
              Fitzgibbons RJ Jr, Forse RA. Clinical Practice. Groin Hernias in Adults. N Engl J
              Med. 2015;372(8):756-763. doi:
              <a
                href="https://doi.org/10.1056/NEJMcp1404068"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1056/NEJMcp1404068
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Zuckerbraun BS, Cyr AR, Mauro CS. Groin Pain Syndrome Known as Sports Hernia: A
              Review. JAMA Surg. 2020;155(4):340-348. doi:
              <a
                href="https://doi.org/10.1001/jamasurg.2019.5863"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1001/jamasurg.2019.5863
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Shakil A, Aparicio K, Barta E, Munez K. Inguinal Hernias: Diagnosis and Management.
              Am Fam Physician. 2020;102(8):487-492.
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Miller J, Cho J, Michael MJ, Saouaf R, Towfigh S. Role of Imaging in the Diagnosis of
              Occult Hernias. JAMA Surg. 2014;149(10):1077-1080. doi:
              <a
                href="https://doi.org/10.1001/jamasurg.2014.484"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1001/jamasurg.2014.484
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              HerniaSurge Group. International Guidelines for Groin Hernia Management. Hernia.
              2018;22(1):1-165. doi:
              <a
                href="https://doi.org/10.1007/s10029-017-1668-x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s10029-017-1668-x
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Stabilini C, van Veenendaal N, Aasvang E, et al. Update of the International
              HerniaSurge Guidelines for Groin Hernia Management. BJS Open. 2023;7(5):zrad080. doi:
              <a
                href="https://doi.org/10.1093/bjsopen/zrad080"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/bjsopen/zrad080
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
