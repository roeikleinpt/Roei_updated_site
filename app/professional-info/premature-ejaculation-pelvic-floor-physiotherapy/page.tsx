import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import ArticleFigure from "../../components/ArticleFigure";
import AuthorBox from "../../components/AuthorBox";
import ArticleCta from "../../components/ArticleCta";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("premature-ejaculation-pelvic-floor-physiotherapy");

export const metadata: Metadata = {
  title: "שפיכה מוקדמת ופיזיותרפיה של רצפת האגן: מה ידוע וכיצד הטיפול עשוי לסייע",
  description:
    "שפיכה מוקדמת אינה מוגדרת לפי שעון בלבד. מה כוללת ההגדרה, כיצד מאבחנים, מה תפקידם של שרירי רצפת האגן בשפיכה, מה מצאו המחקרים על תרגול רצפת אגן ומתי נכון לשלב אותו לצד טיפול תרופתי.",
  alternates: {
    canonical: "/professional-info/premature-ejaculation-pelvic-floor-physiotherapy",
  },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "שפיכה מוקדמת ופיזיותרפיה של רצפת האגן | רועי קליין פיזיותרפיה",
    description:
      "הגדרה, אבחון, תפקיד רצפת האגן בשפיכה, ממצאי המחקר על תרגול רצפת אגן וההשוואה לטיפול תרופתי — הסבר מקצועי ולא שיפוטי.",
    url: "/professional-info/premature-ejaculation-pelvic-floor-physiotherapy",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const h3Class = "mt-6 text-xl font-bold text-slate-900";
const ulClass = "mt-3 list-disc space-y-2 pr-6 leading-8 text-black";

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
    q: "כמה זמן נחשב לשפיכה מוקדמת?",
    a: "אין מספר אחד שמכריע לבדו. בשפיכה מוקדמת מלידה מדובר בדרך כלל בשפיכה לפני החדירה או בתוך כדקה, ובשפיכה מוקדמת נרכשת בירידה משמעותית מהמצב הקודם, לעיתים לכשלוש דקות או פחות. לצד הזמן בודקים גם את מידת השליטה ואת המצוקה שנגרמת.",
  },
  {
    q: "האם תרגילי קיגל יכולים להחמיר את המצב?",
    a: "כן. תרגול שאינו מתאים לממצאים עלול להחמיר את התסמינים. כאשר הקושי הוא בהרפיה או בתזמון, הוספת כיווצים חוזרים אינה המענה הנכון ועלולה להגביר את המתח באזור. לכן אין מקום להמליץ על תרגול מסוים ללא הערכה.",
  },
  {
    q: "האם הטיפול מחייב בדיקה פנימית?",
    a: "לא. אפשר להתחיל את ההערכה בתשאול ובבדיקה חיצונית. בדיקה פנימית נשקלת רק כאשר היא עשויה לתרום, לאחר הסבר ובהסכמה. מידע מפורט מופיע בעמוד טיפול רצפת אגן לגבר.",
  },
  {
    q: "האם פיזיותרפיה יכולה לעזור בלי תרופות?",
    a: "מחקרים מצאו שיפור אצל חלק מהמטופלים. פיזיותרפיה יכולה להתאים למי שאינו יכול או אינו מעוניין להשתמש בתרופות, וכן כחלק מטיפול משולב.",
  },
];

export default function PrematureEjaculationArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            שפיכה מוקדמת ופיזיותרפיה של רצפת האגן
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            שפיכה מוקדמת היא מצב שבו השפיכה מתרחשת מוקדם מהרצוי, קשה לעכב אותה והיא גורמת לתסכול,
            למצוקה או לפגיעה בחיים המיניים. אצל חלק מהגברים הקושי קיים מתחילת חיי המין, ואצל אחרים
            הוא מופיע לאחר תקופה שבה השליטה בשפיכה הייתה מספקת.
          </p>
          <p className={pClass}>
            משך הזמן עד לשפיכה הוא חלק מהתמונה, אך אינו המדד היחיד. גם תחושת השליטה וההשפעה של המצב
            על האדם ועל מערכת היחסים חשובות לצורך ההגדרה והבחירה בטיפול.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>מהי שפיכה מוקדמת?</h2>
          <p className={pClass}>
            האיגוד הבין־לאומי לרפואה מינית, International Society for Sexual Medicine&rlm;, מתאר
            שלושה מאפיינים מרכזיים של שפיכה מוקדמת:
          </p>
          <ul className={ulClass}>
            <li>שפיכה המתרחשת מוקדם מאוד או לאחר ירידה משמעותית במשך הזמן שהיה רגיל בעבר.</li>
            <li>קושי לעכב את השפיכה.</li>
            <li>
              השלכות שליליות כגון תסכול, מצוקה או הימנעות מאינטימיות.
              <Ref n={1} />
            </li>
          </ul>
          <p className={pClass}>
            בשפיכה מוקדמת מלידה מדובר בדרך כלל בשפיכה המתרחשת{" "}
            <span className="font-bold">לפני החדירה או בתוך כדקה מתחילתה</span>, ברוב המפגשים
            המיניים. בשפיכה מוקדמת נרכשת מדובר בשינוי ברור לעומת העבר, ולעיתים בירידה{" "}
            <span className="font-bold">למשך של כשלוש דקות או פחות</span>.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            המספרים האלה מסייעים למחקר ולהגדרה, אך אינם עומדים בפני עצמם. גבר יכול להיות מוטרד
            מקושי בשליטה גם כאשר הזמן ארוך יותר, ולעומת זאת זמן קצר אינו בהכרח בעיה כאשר הוא אינו
            גורם למצוקה.
          </p>
          <p className={pClass}>
            חשוב גם לדעת שהגדרות הזמן מבוססות בעיקר על מחקרים שבדקו את משך הזמן מחדירה וגינלית ועד
            לשפיכה. הן אינן מספקות הגדרה מלאה לכל סוג של פעילות מינית.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>שפיכה מוקדמת מלידה ושפיכה מוקדמת נרכשת</h2>

          <h3 className={h3Class}>שפיכה מוקדמת מלידה</h3>
          <p className={pClass}>
            הקושי קיים מתחילת חיי המין או כמעט מתחילתם. השפיכה מתרחשת בדרך כלל בפרק זמן קצר וקיים
            קושי עקבי לעכב אותה.
          </p>

          <h3 className={h3Class}>שפיכה מוקדמת נרכשת</h3>
          <p className={pClass}>
            הקושי מופיע לאחר תקופה שבה משך הזמן ותחושת השליטה היו מספקים. השינוי עשוי להיות הדרגתי
            או פתאומי.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              כאשר מופיע שינוי חדש, במיוחד אם הוא מלווה בקושי בזקפה, כאב, שינוי בתחושה או תסמינים
              במתן שתן, נכון לפנות לבירור רפואי. מטרת הבירור היא לבדוק אם קיימים גורמים נוספים
              שדורשים התייחסות.
              <Ref n={2} />
            </p>
          </div>

          <h2 className={h2Class}>איך מאבחנים שפיכה מוקדמת?</h2>
          <p className={pClass}>
            האבחנה מבוססת בעיקר על שיחה ועל תיאור החוויה, ולא רק על מדידת זמן. במהלך הבירור אפשר
            להתייחס ל:
          </p>
          <ul className={ulClass}>
            <li>מועד הופעת הקושי והאם היה קיים מתחילת חיי המין</li>
            <li>מידת היכולת לעכב את השפיכה</li>
            <li>השפעת המצב על ההנאה, הביטחון והקשר הזוגי</li>
            <li>תפקוד הזקפה</li>
            <li>כאב או תסמינים אחרים באזור האגן</li>
            <li>טיפולים, תרופות ומצבים רפואיים שעשויים להיות רלוונטיים</li>
          </ul>
          <p className={pClass}>
            לעיתים נעשה שימוש בשאלונים כגון Premature Ejaculation Diagnostic Tool&rlm;, או
            PEDT&rlm;, כדי להעריך את מידת השליטה וההשפעה של הקושי. השאלון מסייע בבירור ובמעקב, אך
            אינו מחליף הערכה קלינית.
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>אילו טיפולים קיימים?</h2>
          <p className={pClass}>
            הטיפול בשפיכה מוקדמת יכול לכלול טיפול תרופתי, טיפול מיני או פסיכולוגי, טכניקות
            התנהגותיות ופיזיותרפיה של רצפת האגן. בחלק מהמקרים משלבים בין כמה אפשרויות.
            <Ref n={2} />
          </p>
          <p className={pClass}>
            אחת הטכניקות ההתנהגותיות המוכרות, לא בהכרח מומלצת, היא טכניקת &rdquo;עצור
            והתחל&ldquo;. במהלך התרגול מפסיקים את הגירוי כאשר מתקרבים לנקודה שבה קשה לעכב את
            השפיכה, ממתינים לירידה בעוררות ולאחר מכן ממשיכים. המטרה היא לזהות מוקדם יותר את העלייה
            בעוררות ולפתח שליטה הדרגתית.
            <Ref n={2} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            בחירת הטיפול תלויה בסוג השפיכה המוקדמת, בהעדפות המטופל, בתרופות שהוא יכול או מעוניין
            ליטול ובגורמים נוספים שעולים בבירור.
          </p>

          <h2 className={h2Class}>כיצד רצפת האגן משתתפת בשפיכה?</h2>
          <p className={pClass}>
            שרירים הנמצאים בבסיס האגן ובסביבת בסיס הפין משתתפים בתהליך הזקפה והשפיכה. בזמן השפיכה
            מתרחשת פעילות מתואמת של שרירים אלה ושל הסוגר החיצוני של השופכה.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            מעורבות השרירים ברפלקס השפיכה היא הבסיס לניסיון לשפר את השליטה באמצעות פיזיותרפיה.
            המטרה אינה בהכרח להפוך את השרירים לחזקים יותר. לעיתים העבודה מתמקדת בזיהוי השרירים,
            בתזמון הכיווץ, ביכולת להרפות ובשליטה בהם כאשר רמת העוררות עולה.
          </p>
          <p className={pClass}>
            שפיכה מוקדמת אינה מעידה כשלעצמה על כך שרצפת האגן חלשה, מתוחה או אינה מתפקדת כראוי. יש
            לבדוק את תפקוד השרירים ואת שאר הגורמים הרלוונטיים לפני שבוחרים תרגול.
          </p>

          <h2 className={h2Class}>כיצד פיזיותרפיה עשויה לעזור?</h2>
          <p className={pClass}>
            פיזיותרפיה של רצפת האגן יכולה להתמקד בשיפור המודעות, השליטה והתיאום של השרירים
            המשתתפים בתהליך השפיכה. מטרת הטיפול אינה בהכרח לחזק את השרירים, אלא לשפר גם את היכולת
            לזהות אותם, לכווץ ולהרפות, לתאם אותם עם הנשימה ולהשתמש בהם בתזמון מתאים.
          </p>

          <ArticleFigure
            src="/professional-info/premature-ejaculation-physiotherapy-process.webp"
            alt="אינפוגרפיקה של ארבעת שלבי הפיזיותרפיה בשפיכה מוקדמת: הערכה, זיהוי ושליטה בשרירים, נשימה וויסות מתח, ויישום בזמן עלייה בעוררות"
            caption="הטיפול מותאם לממצאי ההערכה ועשוי לשלב עבודה על מודעות, כיווץ והרפיה, נשימה, תיאום ותזמון. אין פרוטוקול אחד שמתאים לכל מטופל."
          />

          <p className={pClass}>
            בהתאם לממצאי ההערכה, אפשר להיעזר גם בביופידבק כדי לתת משוב חזותי או קולי על פעילות
            השרירים ולעזור בתרגול של כיווץ, הרפיה ותזמון. השימוש בו אינו נדרש בכל טיפול. בחלק
            מהמחקרים נעשה שימוש גם בגירוי חשמלי. אין פירוש הדבר שהגירוי נדרש בכל טיפול או שהוא
            מתאים לכל מטופל.
          </p>
          <p className={pClass}>
            הסבר רחב יותר על מבנה רצפת האגן, אופן ההערכה והאפשרויות שעשויות להיכלל בטיפול מופיע
            בעמוד{" "}
            <Link
              href="/professional-info/mens-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              טיפול רצפת אגן לגבר
            </Link>
            .
          </p>

          <h2 className={h2Class}>מה מצאו המחקרים?</h2>
          <p className={pClass}>
            מחקרים שונים מצאו שיפור במשך הזמן עד לשפיכה, בתחושת השליטה ובשאלונים לאחר תרגול של רצפת
            האגן. עם זאת, שיטות הטיפול היו שונות מאוד בין המחקרים, ולא נקבע עד היום פרוטוקול אחיד.
            <Ref n={3} />
            <Ref n={5} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            במחקר שכלל 122 גברים שסיימו תוכנית שיקום בת 12 שבועות,{" "}
            <span className="font-bold">111 מהם השיגו בתחילת המעקב שליטה טובה יותר בשפיכה</span>.
            שיעור הגברים ששמרו על השליטה ירד ל־<span className="font-bold">64 אחוזים</span> לאחר
            שנתיים ול־<span className="font-bold">56 אחוזים</span> לאחר שלוש שנים. המחקר היה מחקר
            עוקבה ללא קבוצת ביקורת, וחלק מהמשתתפים לא השלימו את התוכנית או את המעקב. לכן התוצאות
            מעודדות, אך אינן מוכיחות שכל אדם צפוי להגיב באופן דומה.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            שתי סקירות שיטתיות ומטא־אנליזות שפורסמו בשנת 2026, שכללו חמישה מחקרים אקראיים עם 236
            משתתפים ושישה מחקרים עם 416 משתתפים, מצאו שפיזיותרפיה ותרגול שליטה בסוגרים עשויים לשפר
            את משך הזמן עד לשפיכה.{" "}
            <span className="font-bold">
              בהשוואה ישירה, דפוקסטין היה יעיל יותר מפיזיותרפיה כטיפול יחיד
            </span>
            . בין המחקרים הייתה שונות ניכרת בסוג התרגול, במשך הטיפול ובטיפולים הנוספים שניתנו.
            <Ref n={5} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            מטא־אנליזה נוספת, שכללה שמונה מחקרים אקראיים ו־656 משתתפים, מצאה{" "}
            <span className="font-bold">
              שטיפול ששילב דפוקסטין עם התערבות שאינה תרופתית היה יעיל יותר מדפוקסטין בלבד
            </span>
            . ההתערבויות שנכללו היו מגוונות וכללו תרגול רצפת אגן, ביופידבק, גירוי חשמלי, טיפול
            התנהגותי, טיפול פסיכולוגי ואפשרויות נוספות. לכן אי אפשר להסיק ממנה שכל אחד מהמרכיבים
            יעיל באותה מידה.
            <Ref n={7} />
          </p>
          <p className={pClass}>
            במחקר אקראי משנת 2025, שכלל 62 גברים, קיבלו שתי הקבוצות טיפול התנהגותי ותרגול רצפת אגן
            במשך שמונה שבועות. קבוצה אחת הוסיפה תרגול נשימה סרעפתית. שתי הקבוצות השתפרו, אך בקבוצה
            שביצעה גם תרגילי נשימה נצפה שיפור גדול ועמיד יותר במעקב של שנה. מדובר במחקר יחיד ובמדגם
            קטן, ולכן נדרש מחקר נוסף לפני שאפשר לקבוע מהו פרוטוקול הנשימה המתאים.
            <Ref n={8} />
          </p>

          <h2 className={h2Class}>האם פיזיותרפיה מחליפה טיפול תרופתי?</h2>
          <p className={pClass}>
            לא בהכרח. לפי המחקרים הקיימים, טיפול תרופתי בדפוקסטין מאריך את משך הזמן עד לשפיכה יותר
            מפיזיותרפיה כאשר כל אחד מהם ניתן לבדו. טיפול משולב עשוי להשיג תוצאה טובה יותר מטיפול
            תרופתי בלבד.
            <Ref n={5} />
            <Ref n={6} />
            <Ref n={7} />
          </p>
          <p className={pClass}>
            פיזיותרפיה יכולה להישקל כטיפול נוסף על הטיפול התרופתי, או כאפשרות למי שמעדיף להימנע
            מתרופות, אינו יכול ליטול אותן או סובל מתופעות לוואי. ההחלטה צריכה להתקבל לפי המקרה ולא
            מתוך הנחה שקיימת אפשרות אחת שמתאימה לכולם.
          </p>

          <h2 className={h2Class}>האם מספיק לבצע תרגילי קיגל?</h2>
          <p className={pClass}>
            <span className="text-xl font-bold">לא</span>. המונח &rdquo;תרגילי רצפת אגן&ldquo; כולל
            יותר מכיווץ חוזר של השרירים. המחקרים על שפיכה מוקדמת השתמשו בפרוטוקולים שונים. חלקם
            שילבו חיזוק, הרפיה, ביופידבק, תרגול שליטה בסוגרים, נשימה וטכניקות התנהגותיות.
            <Ref n={5} />
            <Ref n={6} />
            <Ref n={8} />
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>כמה זמן נמשך הטיפול?</h2>
          <p className={pClass}>
            במחקרים נבדקו בדרך כלל תוכניות שנמשכו בין שמונה לשנים עשר שבועות. בחלקן בוצע תרגול ביתי
            בתדירות גבוהה, ובחלקן שולבו מפגשים עם ביופידבק או גירוי חשמלי.
            <Ref n={3} />
            <Ref n={8} />
          </p>
          <p className={pClass}>
            אלה פרוטוקולים מחקריים ולא הוראות טיפול קבועות. משך התהליך ותדירות המפגשים נקבעים לפי
            ממצאי ההערכה, יכולת התרגול והתגובה לאורך הדרך.
          </p>
          <p className={pClass}>
            פיזיותרפיה אינה פתרון מיידי. היא מבוססת על לימוד ותרגול של מיומנויות, ולכן נדרש זמן כדי
            לבדוק אם חל שינוי בשליטה ובחוויה המינית.
          </p>

          <h2 className={h2Class}>למי יכולה להתאים הערכה פיזיותרפית?</h2>

          <ArticleFigure
            src="/professional-info/premature-ejaculation-who-may-benefit.webp"
            alt="אינפוגרפיקה של שישה מצבים שבהם הערכה פיזיותרפית עשויה להיות רלוונטית בשפיכה מוקדמת: קושי עקבי בשליטה, קושי בזיהוי או בשליטה בשרירים, מתח רב באזור האגן, רצון לשלב טיפול שאינו תרופתי, טיפול קודם שלא נתן מענה מספק, ותסמינים נלווים"
            caption="הערכה פיזיותרפית אינה מניחה שרצפת האגן היא הסיבה לשפיכה המוקדמת. מטרתה לבדוק אם תפקוד השרירים רלוונטי למקרה ואם יש מקום לשלב פיזיותרפיה בתוכנית הטיפול."
          />

          <h2 className={h2Class}>מתי כדאי לפנות לבירור?</h2>
          <p className={pClass}>
            כדאי לפנות לבירור כאשר הקושי חוזר על עצמו, גורם למצוקה או משפיע על הקשר ועל החיים
            המיניים. בירור רפואי חשוב במיוחד כאשר השינוי הופיע לאחר תקופה של תפקוד רגיל, או כאשר
            קיימים במקביל כאב, קושי בזקפה, שינוי בתחושה, תסמיני שתן או תסמינים רפואיים חדשים.
          </p>

          <h2 className={h2Class}>שורה תחתונה</h2>
          <p className={pClass}>
            שפיכה מוקדמת אינה מוגדרת לפי שעון בלבד. הקושי לעכב את השפיכה וההשפעה על האדם ועל הקשר
            הם חלק מרכזי מהתמונה.
          </p>
          <p className={pClass}>
            פיזיותרפיה של רצפת האגן עשויה לסייע בשיפור המודעות, התזמון והשליטה בשרירים המשתתפים
            בשפיכה. המחקרים מצביעים על תועלת אפשרית, אך אין עדיין פרוטוקול אחיד, ופיזיותרפיה כטיפול
            יחיד נמצאה פחות יעילה מדפוקסטין. במקרים רבים נכון לראות בה חלק מתוכנית רחבה שיכולה
            לכלול טיפול רפואי, התנהגותי או מיני.
          </p>

          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/erectile-dysfunction-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              הפרעת זקפה ופיזיותרפיה של רצפת האגן
            </Link>{" "}
            ו־<Link
              href="/professional-info/pelvic-floor-and-ejaculation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              רצפת האגן והשפיכה: מה תפקיד השרירים?
            </Link>
            .
          </p>

          <ArticleCta
            intro="זה נושא שקשה להעלות, וגם נושא שאפשר לברר. בהערכה בודקים אם תפקוד רצפת האגן רלוונטי למקרה שלך, ומה יכול להשתלב בתוכנית הטיפול."
            whatsappText="היי רועי, קראתי אצלך הסבר על PE, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Serefoglu EC, McMahon CG, Waldinger MD, et al. An Evidence-Based Unified Definition of
              Lifelong and Acquired Premature Ejaculation: Report of the Second International Society
              for Sexual Medicine Ad Hoc Committee for the Definition of Premature Ejaculation. J Sex
              Med. 2014;11(6):1423-1441. doi:
              <a
                href="https://doi.org/10.1111/jsm.12524"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1111/jsm.12524
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Shindel AW, Althof SE, Carrier S, et al. Disorders of Ejaculation: An AUA/SMSNA
              Guideline. J Urol. 2022;207(3):504-512. doi:
              <a
                href="https://doi.org/10.1097/JU.0000000000002392"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/JU.0000000000002392
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Pastore AL, Palleschi G, Fuschi A, et al. Pelvic Muscle Floor Rehabilitation as a
              Therapeutic Option in Lifelong Premature Ejaculation: Long-Term Outcomes. Asian J
              Androl. 2018;20(6):572-575. doi:
              <a
                href="https://doi.org/10.4103/aja.aja_30_18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.4103/aja.aja_30_18
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Doğan K, Keçe C. Comparison of the Results of Stop-Start Technique With Stop-Start
              Technique and Sphincter Control Training Applied in Premature Ejaculation Treatment.
              PLoS One. 2023;18(8):e0283091. doi:
              <a
                href="https://doi.org/10.1371/journal.pone.0283091"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1371/journal.pone.0283091
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              de Oliveira FA, Lima LB, da Costa MO, et al. Efficacy of Pelvic Floor Muscle Training
              in the Management of Premature Ejaculation: A Systematic Review and Meta-Analysis of
              Randomized Controlled Trials. J Sex Med. 2026;23(6):qdag131. doi:
              <a
                href="https://doi.org/10.1093/jsxmed/qdag131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/jsxmed/qdag131
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Medrano-Sánchez EM, López-del-Castillo A, Boisseau M, Fernández-Domínguez JC,
              Díaz-Mohedo E. Effectiveness of Physiotherapy in Male Premature Ejaculation: A
              Systematic Review and Meta-Analysis. J Sex Med. 2026;23(5):qdag096. doi:
              <a
                href="https://doi.org/10.1093/jsxmed/qdag096"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/jsxmed/qdag096
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Nieves Martín M, Marín Novoa P, Avendaño-Coy J. Dapoxetine Combined With
              Non-Pharmacological Approaches for Lifelong Premature Ejaculation: A Systematic Review
              and Meta-Analysis. J Sex Med. 2025;22(11):1948-1957. doi:
              <a
                href="https://doi.org/10.1093/jsxmed/qdaf238"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/jsxmed/qdaf238
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Erkut U, Karagozoglu Coskunsu D, Erkut K, Ozden AV. The Effects of Diaphragmatic
              Breathing Exercises on Individuals With Premature Ejaculation: A Randomized Controlled
              Trial. J Sex Med. 2025;22(8):1422-1429. doi:
              <a
                href="https://doi.org/10.1093/jsxmed/qdaf107"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/jsxmed/qdaf107
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
