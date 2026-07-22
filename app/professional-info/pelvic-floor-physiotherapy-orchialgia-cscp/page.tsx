import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import AuthorBox from "../../components/AuthorBox";
import ArticleFaq from "../../components/ArticleFaq";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";
import ArticleFigure from "../../components/ArticleFigure";

const article = getArticle("pelvic-floor-physiotherapy-orchialgia-cscp");

export const metadata: Metadata = {
  title: "פיזיותרפיה לכאב אשכים כרוני: Orchialgia ו-CSCP",
  description:
    "מתי רצפת האגן עשויה להיות קשורה לכאב אשכים כרוני, מה כוללת הערכה פיזיותרפית ומה ידוע על טיפול, EMG וביופידבק.",
  alternates: { canonical: "/professional-info/pelvic-floor-physiotherapy-orchialgia-cscp" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "פיזיותרפיה לרצפת האגן בכאב אשכים כרוני | רועי קליין פיזיותרפיה",
    description: "מתי רצפת האגן קשורה לכאב אשכים כרוני ומה כוללים ההערכה והטיפול.",
    url: "/professional-info/pelvic-floor-physiotherapy-orchialgia-cscp",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const ulClass = "mt-4 list-disc space-y-1 pr-6 leading-8 text-black";

// שאלות נפוצות לעמוד — מוצגות לפני המקורות וגם כ-FAQPage schema.
const faqItems = [
  {
    q: "האם פיזיותרפיה לרצפת האגן מתאימה לכל כאב אשכים?",
    a: "לא. פיזיותרפיה אינה מתאימה כטיפול ראשוני בכאב חד או פתאומי. היא עשויה להתאים לכאב מתמשך לאחר שנשללו גורמים רפואיים אחרים, במיוחד כאשר קיימים מתח או רגישות ברצפת האגן, הקרנת כאב לשק האשכים או תסמינים במתן שתן, ביציאות או בתפקוד המיני.",
  },
  {
    q: "האם הטיפול כולל תרגילי חיזוק או קיגל?",
    a: "לא בהכרח. כאשר קיימים מתח מוגבר, רגישות או קושי בהרפיית השרירים, הטיפול עשוי להתמקד בהרפיה, בקואורדינציה ובטיפול מנואלי ולא בחיזוק. תוכנית הטיפול נקבעת לפי ממצאי ההערכה.",
  },
  {
    q: "האם בדיקה או טיפול ברצפת האגן מחייבים בדיקה פנימית?",
    a: "לא. ההערכה כוללת תחילה תשאול ובדיקה של הגב, הבטן, הירכיים והאגן. בדיקה או טיפול פנימיים נשקלים רק כאשר קיימת הצדקה קלינית, לאחר הסבר ובהסכמת המטופל, ועל ידי איש מקצוע שעבר הכשרה מתאימה.",
  },
];

function Ref({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#ref-${n}`} className="mx-0.5 font-semibold text-teal-600 hover:underline">
        [{n}]
      </a>
    </sup>
  );
}

export default function PelvicFloorPhysiotherapyOrchialgiaArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/professional-info"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:underline"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            חזרה למידע מקצועי
          </Link>
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            פיזיותרפיה לרצפת האגן בכאב אשכים כרוני
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאב אשכים כרוני, המתואר בספרות במונחים Orchialgia או Chronic Orchialgia, ובמונח
            הרחב יותר Chronic Scrotal Content Pain, או CSCP, אינו נובע תמיד מבעיה באשך עצמו.
          </p>
          <p className={pClass}>
            הסבר מלא על המונחים, הגורמים שיש לשלול ומסלול הבירור מופיע במאמר:{" "}
            <Link
              href="/professional-info/chronic-testicular-pain-orchialgia-cscp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב אשכים כרוני: סיבות אפשריות, בדיקה ודרכי טיפול
            </Link>
            .
          </p>
          <p className={pClass}>
            אצל חלק מהמטופלים קיימת מעורבות של שרירי רצפת האגן או של שרירים, עצבים ורקמות
            באזור הבטן, האגן, הגב והירכיים.
          </p>
          <p className={pClass}>
            במקרים המתאימים, פיזיותרפיה של רצפת האגן יכולה להיות חלק מהטיפול השמרני בכאב
            כרוני. היא אינה מתאימה באופן אוטומטי לכל כאב אשכים, ולכן יש צורך בבירור רפואי
            ובהערכה מותאמת.
          </p>

          {/* תיבת אזהרה רפואית — דגלים אדומים שאינם מתאימים להמתנה לטיפול שמרני */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-bold text-slate-900">חשוב לדעת</h2>
            <p className="mt-3 leading-7 text-slate-700">
              המידע בעמוד זה הוא כללי ואינו מהווה ייעוץ רפואי, אבחון או תחליף לבדיקה רפואית.
            </p>
            <p className="mt-2 leading-7 text-slate-700">
              פיזיותרפיה של רצפת האגן רלוונטית למצבים כרוניים נבחרים בלבד ואינה טיפול ראשוני
              בכאב חד או פתאומי באשך.
            </p>
            <p className="mt-2 leading-7 text-slate-700">
              כאב פתאומי, נפיחות חדשה, בחילה או הקאה, חום, שינוי במנח האשך, מסה חדשה או החמרה
              מהירה מחייבים פנייה מיידית למוקד רפואי דחוף או לחדר מיון, ולא המתנה לתור
              במרפאה.
            </p>
            <p className="mt-2 leading-7 text-slate-700">
              כאשר הכאב מתמשך ואינו חריף, ולאחר שנשללו מצבים רפואיים הדורשים טיפול אחר, ניתן
              לפנות לבירור התאמה להערכה פיזיותרפית.
            </p>
          </div>

          <h2 className={h2Class}>מה אומרות הנחיות האגודה האמריקאית לאורולוגיה?</h2>
          <p className={pClass}>
            בהנחיות האגודה האמריקאית לאורולוגיה (AUA) משנת 2025 מצוין שניתן להציע פיזיותרפיה
            של רצפת האגן למטופלים עם CSCP&rlm;.
            <Ref n={1} /> אצל גברים שנמצאו אצלם{" "}
            <Link
              href="/professional-info/pelvic-floor-physiotherapy-cyclists"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב ורגישות בשרירי רצפת האגן
            </Link>{" "}
            (pelvic floor myalgia), הטיפול עשוי לכלול שחרור מיופסציאלי חיצוני ופנימי של
            הרקמות המעורבות. זוהי המלצה מותנית ברמת ראיות Grade C&rlm;.
            <Ref n={2} />
          </p>
          <p className={pClass}>
            המלצה זו אינה אומרת שטיפול פנימי נדרש בכל מקרה של כאב אשכים. יש להתאים את הבדיקה
            והטיפול לממצאים ולמטופל.
          </p>
          <h2 className={h2Class}>כיצד רצפת האגן עשויה להיות קשורה לכאב באשך?</h2>
          <p className={pClass}>
            רצפת האגן היא חלק ממערכת רחבה הכוללת את הבטן, הגב, הירכיים והאגן.
          </p>
          <p className={pClass}>
            כאשר קיימים כאב, מתח או תפקוד לקוי בשרירים אלה, הכאב עשוי להיות מורגש גם באזור
            האשך ושק האשכים. מנגד, עצם מיקום הכאב באשך אינו מוכיח שמקורו ברצפת האגן.
          </p>
          <p className={pClass}>
            לכן יש לשלול תחילה גורמים רפואיים אחרים ולבדוק אם קיימים ממצאים התומכים במעורבות
            שרירית או עצבית.
          </p>
          <h2 className={h2Class}>מה נמצא בבדיקות EMG של רצפת האגן?</h2>
          <p className={pClass}>
            במחקר רטרוספקטיבי שכלל 41 גברים עם כאב אשכים כרוני, לאחר שנשללו גורמים רפואיים
            אחרים, 88% הציגו טונוס מנוחה מוגבר של שרירי רצפת האגן בבדיקת אלקטרומיוגרפיה,
            EMG, המודדת את הפעילות החשמלית של השרירים.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            נוסף על כך, 93% מהמשתתפים דיווחו על לפחות תסמין אחד נוסף המחשיד לתפקוד לקוי של
            רצפת האגן, כגון תסמינים במתן שתן, ביציאות או בתפקוד המיני.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            המחקר נערך במחלקת רצפת אגן במרכז רפואי שלישוני. לכן המשתתפים היו אוכלוסייה שנבחרה
            לבירור ייעודי, ואין להסיק של־88% מכלל הגברים עם כאב אשכים קיימת פעילות מוגברת של
            רצפת האגן.
          </p>
          <p className={pClass}>
            הממצא כן מחזק את החשיבות של הערכת רצפת האגן כאשר הבירור הרפואי אינו מסביר את הכאב
            במלואו, או כאשר קיימים תסמינים נוספים הקשורים למערכות האגן.
          </p>
          <h2 className={h2Class}>מה כוללת הערכה פיזיותרפית?</h2>
          <ul className={ulClass}>
            <li>מיקום הכאב ואופיו.</li>
            <li>משך התסמינים.</li>
            <li>גורמים שמחמירים או מקלים.</li>
            <li>השפעת ישיבה, הליכה, פעילות וספורט.</li>
            <li>תפקוד מערכת השתן.</li>
            <li>תפקוד מערכת העיכול וההתרוקנות.</li>
            <li>התפקוד המיני.</li>
            <li>כאבים בגב, בבטן, בירך או במפשעה.</li>
            <li>היסטוריה של חבלה או ניתוח.</li>
          </ul>
          <p className={pClass}>
            בהמשך ניתן לבדוק את טווחי התנועה של הגב והירכיים, את שרירי הבטן והאגן ואת היכולת
            לכווץ ולהרפות את שרירי רצפת האגן. בדיקה חיצונית או פנימית נשקלת בהתאם לצורך
            הקליני, לאחר הסבר ובהסכמת המטופל.
          </p>
          <h2 className={h2Class}>האם הבעיה היא תמיד חולשה?</h2>
          <p className={pClass}>לא.</p>
          <p className={pClass}>
            פיזיותרפיה של רצפת האגן אינה מסתכמת בתרגילי חיזוק. אצל חלק מהמטופלים עשויים
            להימצא מתח מוגבר, רגישות או קושי בהרפיה ובתיאום השרירים.
          </p>
          <p className={pClass}>בהתאם לממצאים, התוכנית עשויה לכלול:</p>
          <ul className={ulClass}>
            <li>תרגול הרפיה.</li>
            <li>שיפור הקואורדינציה.</li>
            <li>תרגול כיווץ והרפיה.</li>
            <li>חיזוק כאשר נמצא צורך בכך.</li>
            <li>טיפול מנואלי.</li>
            <li>ביופידבק.</li>
            <li>תרגול ביתי ומתיחות.</li>
          </ul>
          <p className={pClass}>מתן תרגילי כיווץ אחידים ללא בדיקה אינו מתאים לכל מטופל.</p>
          <ArticleFigure
            src="/professional-info/cscp-pelvic-floor-physiotherapy.webp"
            alt="אינפוגרפיקה: פיזיותרפיה של רצפת האגן בכאב אשכים כרוני — טיפול מנואלי, ביופידבק ועבודה על הרפיה ושליטה שרירית"
          />
          <h2 className={h2Class}>טיפול מנואלי פנימי וחיצוני</h2>
          <p className={pClass}>
            הטיפול המנואלי עשוי להתמקד בשרירי רצפת האגן וברקמות נוספות באזור:
          </p>
          <ul className={ulClass}>
            <li>דופן הבטן.</li>
            <li>הגב התחתון.</li>
            <li>הישבן.</li>
            <li>הירכיים.</li>
            <li>אזור עצם החיק.</li>
            <li>צלקות או מגבלות ברקמות החיבור.</li>
          </ul>
          <p className={pClass}>
            טיפול פנימי אינו מבוצע באופן אוטומטי. הוא נשקל כאשר קיימת הצדקה קלינית, לאחר הסבר
            ובהסכמת המטופל, ועליו להתבצע על ידי איש מקצוע שעבר הכשרה מתאימה.
            <Ref n={2} />
          </p>
          <h2 className={h2Class}>מה ידוע על תוצאות הפיזיותרפיה?</h2>
          <p className={pClass}>
            מחקר רטרוספקטיבי בחן 30 גברים עם כאב כרוני באזור האשך ושק האשכים. אצל כל
            המשתתפים נמצאו כאב או מתח ברצפת האגן בבדיקה פנימית דרך פי הטבעת, ורק לאחר מכן הם
            הופנו לפיזיותרפיה.
            <Ref n={4} />
          </p>
          <p className={pClass}>לאחר חציון של 12 מפגשים:</p>
          <ul className={ulClass}>
            <li>אצל 50% מהמטופלים חל שיפור בכאב.</li>
            <li>13.3% דיווחו על היעלמות מלאה של הכאב.</li>
            <li>44% דיווחו שלא נותר כאב או שנותר כאב קל בלבד.</li>
            <li>שיעור המשתמשים בתרופות נגד כאב ירד מ־73.3% ל־44%.</li>
          </ul>
          <p className={pClass}>
            הנתונים אינם בהכרח קבוצות נפרדות, ולכן אין לחבר את שיעורי התוצאות זה לזה.
          </p>
          <p className={pClass}>
            מדובר במחקר קטן ורטרוספקטיבי ללא קבוצת ביקורת. נוסף על כך, המטופלים נבחרו משום
            שכבר נמצאו אצלם ממצאים ברצפת האגן. לכן אי אפשר להסיק שפיזיותרפיה תועיל באותה מידה
            לכל אדם עם כאב אשכים כרוני.
            <Ref n={4} />
          </p>
          <h2 className={h2Class}>מה ניתן ללמוד מדיווחי מקרה?</h2>
          <p className={pClass}>
            בדיווח מקרה משנת 2021 תואר גבר בן 46 שסבל מכאב בפרינאום, בבטן התחתונה, בשופכה
            ובשק האשכים.
          </p>
          <p className={pClass}>
            הטיפול כלל טיפול מנואלי באזור הגב, האגן והירך וכן טיפול מנואלי פנימי דרך פי הטבעת.
            במהלך המפגש העשירי דווח על שיפור, ובמעקב לאחר חודש דווח על היעלמות הכאב.
            <Ref n={5} />
          </p>
          <p className={pClass}>
            זהו דיווח על מטופל יחיד ואינו מוכיח את יעילות הטיפול באופן כללי. הוא מדגים אפשרות
            קלינית שבה הערכה וטיפול רחבים יותר היו רלוונטיים לתסמינים.
          </p>
          <h2 className={h2Class}>מהקליניקה</h2>
          <p className={pClass}>
            לאורך השנים טיפלתי בעשרות לוחמים שסבלו מכאבים באשכים. רובם הגיעו אליי לאחר שעברו
            בירור רפואי שכלל בדיקת אורולוג ואולטרסאונד אשכים, ולעיתים גם התייעצות נוספת עם
            אורולוג או כירורג כדי לקבוע אם נדרש בירור נוסף.
          </p>
          <p className={pClass}>
            אחד המקרים הזכורים לי הוא של מפקד ביחידה לוחמת באחד מבסיסי ההכשרה. הוא הגיע
            לטיפול לאחר ניתוח לתיקון בקע מפשעתי שלא הביא לשיפור בכאב. במשך כמה חודשים הוא סבל
            מכאבים ומהגבלה בתפקוד היומיומי.
          </p>
          <p className={pClass}>
            לאחר מספר מצומצם של טיפולים הוא הצליח לצאת עם חייליו למסע כומתה, ללא כאב במהלך
            המסע או לאחריו. גם בביקורת שערכנו מספר שבועות לאחר סיום סדרת הטיפולים, הכאב לא
            חזר.
          </p>
          <p className={pClass}>
            זהו כמובן מקרה אישי, וקצב ההתקדמות משתנה בהתאם למקור הכאב, למשך התסמינים ולממצאים
            בבדיקה.
          </p>
          <h2 className={h2Class}>למי הטיפול עשוי להתאים?</h2>
          <ul className={ulClass}>
            <li>הכאב נמשך לאחר שנשללו גורמים רפואיים אחרים.</li>
            <li>נמצאים כאב או מתח בשרירי רצפת האגן.</li>
            <li>קיימת הקרנת כאב לשק האשכים.</li>
            <li>הכאב קשור גם לגב, לבטן, לאגן או לירך.</li>
            <li>קיימת רגישות בצלקות או ברקמות באזור.</li>
            <li>קיים קושי בכיווץ, בהרפיה או בקואורדינציה.</li>
            <li>קיימים גם תסמינים במתן שתן, ביציאות או בתפקוד המיני.</li>
          </ul>
          <p className={pClass}>
            ההתאמה נקבעת לפי מכלול התסמינים וממצאי הבדיקה, ולא לפי מיקום הכאב בלבד.
          </p>
          <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              כאשר הכאב מתמשך, לאחר שנשללו גורמים רפואיים אחרים, ובמיוחד כאשר קיימים גם
              תסמינים במתן שתן, ביציאות, בתפקוד המיני או באזור האגן, מוזמן ליצור קשר לבירור
              התאמה להערכה פיזיותרפית.
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
            פיזיותרפיה של רצפת האגן היא אפשרות טיפול שמרנית מוכרת במקרים נבחרים של כאב אשכים
            כרוני, במיוחד כאשר נמצאים כאב, מתח או תפקוד לקוי של שרירי רצפת האגן.
          </p>
          <p className={pClass}>
            הטיפול אינו כולל בהכרח חיזוק ואינו מחייב טיפול פנימי. מטרתו לזהות את הגורמים
            הרלוונטיים לכל מטופל ולבנות תוכנית הכוללת הרפיה, קואורדינציה, חיזוק, טיפול מנואלי
            או ביופידבק בהתאם לצורך.
          </p>
          <ArticleFaq items={faqItems} />
          <h2 id="references" className={`${h2Class} scroll-mt-24`}>
            מקורות
          </h2>
          <ol
            dir="ltr"
            className="mt-4 list-decimal space-y-3 pl-6 text-left text-sm leading-7 text-black"
          >
            <li id="ref-1" className="scroll-mt-24">
              Lai HH, Pontari MA, Argoff CE, et al. Male Chronic Pelvic Pain: AUA Guideline:
              Part III Treatment of Chronic Scrotal Content Pain. J Urol. 2025;214(2):138-146.
              doi:
              <a
                href="https://doi.org/10.1097/JU.0000000000004566"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/JU.0000000000004566
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Lai HH, Pontari MA, Argoff CE, et al. Male Chronic Pelvic Pain: AUA Guideline:
              Part II Treatment of Chronic Prostatitis/Chronic Pelvic Pain Syndrome. J Urol.
              2025;214(2):127-137. doi:
              <a
                href="https://doi.org/10.1097/JU.0000000000004565"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/JU.0000000000004565
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Planken E, Voorham-van der Zalm PJ, Lycklama à Nijeholt AAB, Elzevier HW.
              Chronic testicular pain as a symptom of pelvic floor dysfunction. J Urol.
              2010;183(1):177-181. doi:
              <a
                href="https://doi.org/10.1016/j.juro.2009.08.147"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.juro.2009.08.147
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Farrell MR, Dugan SA, Levine LA. Physical therapy for chronic scrotal content
              pain with associated pelvic floor pain on digital rectal exam. Can J Urol.
              2016;23(6):8546-8550.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/27995849/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                PMID: 27995849
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Burzynski B, Jurys T, Burzynski K, Cempa K, Paradysz A. Physiotherapeutic
              assessment and management of chronic pelvic pain syndrome: a case report.
              Medicine (Baltimore). 2021;100(15):e25525. doi:
              <a
                href="https://doi.org/10.1097/MD.0000000000025525"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/MD.0000000000025525
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
