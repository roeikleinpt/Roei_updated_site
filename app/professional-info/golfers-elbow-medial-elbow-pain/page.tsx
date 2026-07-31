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

const article = getArticle("golfers-elbow-medial-elbow-pain");

export const metadata: Metadata = {
  title: "מרפק גולף: כאב בצד הפנימי של המרפק — אבחון מבדל וטיפול פיזיותרפי",
  description:
    "כאב בצד הפנימי של המרפק מכונה מרפק גולף, אך באזור עוברים גם העצב האולנרי והרצועה האולנרית. מה מרגישים, כיצד מאבחנים, מתי צריך לחשוד במקור אחר ומה כוללת הפיזיותרפיה — כולל ספורטאי זריקה.",
  alternates: { canonical: "/professional-info/golfers-elbow-medial-elbow-pain" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "מרפק גולף: כאב בצד הפנימי של המרפק | רועי קליין פיזיותרפיה",
    description:
      "Medial Epicondylalgia — מונחים, אבחנה מבדלת רחבה הכוללת את העצב האולנרי והרצועה האולנרית, תהליך האבחון והחזרה ההדרגתית לעומס ולספורט.",
    url: "/professional-info/golfers-elbow-medial-elbow-pain",
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
    q: "האם מרפק גולף מופיע רק אצל שחקני גולף?",
    a: "לא. הוא יכול להופיע בכל פעילות הכוללת אחיזה, משיכה, כיפוף שורש כף היד או סיבוב של האמה. עבודה ידנית, אימוני כוח, טיפוס וענפי זריקה יכולים להיות רלוונטיים לא פחות מגולף.",
  },
  {
    q: "האם כל כאב פנימי הוא טנדינופתיה?",
    a: "לא. כאשר לא ברור איזה מבנה מעורב, המונח Medial Epicondylalgia עשוי להיות מדויק יותר. כאב פנימי יכול להיות קשור לגיד, לעצב האולנרי, לרצועה, לשריר או למפרק, ולעיתים יותר ממבנה אחד מעורב.",
  },
  {
    q: "האם פיזיותרפיה הוכחה כטיפול יעיל?",
    a: "פיזיותרפיה ותרגול הם חלק מרכזי מהטיפול השמרני, אך המחקר על מרפק גולף עדיין מוגבל. קיימות עדויות לשיפור בעקבות חיזוק הדרגתי, כולל תרגול אקסצנטרי, אך ודאות הראיות נמוכה. לכן התרגול צריך להיות מותאם למטופל ולא מבוסס על פרוטוקול קשיח.",
  },
  {
    q: "האם נימול באצבעות הוא חלק ממרפק גולף?",
    a: "נימול אינו תסמין טיפוסי של טנדינופתיה מבודדת. נימול באצבע הקטנה ובקמיצה עשוי להתאים למעורבות של העצב האולנרי, העובר בצד הפנימי של המרפק. במקרה כזה חשוב לבדוק את העצב ולא להסתפק באבחנה של מרפק גולף.",
  },
];

export default function GolfersElbowArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            מרפק גולף: כאב בצד הפנימי של המרפק
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאב בצד הפנימי של המרפק מכונה לעיתים קרובות &rdquo;מרפק גולף&ldquo;, אך רוב האנשים
            הסובלים ממנו אינם בהכרח שחקני גולף. התסמינים יכולים להופיע בעקבות אימוני כוח, עבודה
            ידנית, טיפוס, זריקה, אחיזה ממושכת או פעולות חוזרות של שורש כף היד והאמה.
          </p>
          <p className={pClass}>
            גם כאן חשוב לא למהר להניח שכל כאב פנימי הוא טנדינופתיה. בצד הפנימי של המרפק עוברים
            גידים, שרירים, רצועות ועצבים, וכמה מהם יכולים לגרום לתסמינים דומים. אצל ספורטאי זריקה
            האבחנה המבדלת חשובה במיוחד.
          </p>

          <h2 className={h2Class}>בואו נבין מה קורה</h2>
          <p className={pClass}>
            בצד הפנימי של המרפק נמצאת בליטה גרמית הנקראת האפיקונדיל הפנימי. אליה מתחבר מוצא משותף
            של כמה מהשרירים המכופפים את שורש כף היד והאצבעות ומסובבים את האמה פנימה.
          </p>
          <p className={pClass}>
            השרירים האלה משתתפים באחיזה, בנשיאת חפצים, במשיכה, בזריקה ובייצוב שורש כף היד בזמן
            הפעלת כוח.
          </p>
          <p className={pClass}>
            כאשר העומס המופעל על האזור עולה מעבר ליכולת הנוכחית שלו, עשויים להתפתח כאב וירידה
            בתפקוד. בטנדינופתיה התהליך אינו נחשב בדרך כלל לדלקת חריפה פשוטה, ולכן המונח Medial
            Epicondylitis&rlm; אינו תמיד מדויק מבחינה ביולוגית.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>מרפק גולף, Epicondylalgia או Tendinopathy&rlm;?</h2>
          <ul className={ulClass}>
            <li>
              <span className="font-semibold">מרפק גולף</span> הוא השם הנפוץ לכאב בצד הפנימי של
              המרפק.
            </li>
            <li>
              <span className="font-semibold">Medial Epicondylalgia&rlm;</span> היא הגדרה תיאורית של
              כאב באזור האפיקונדיל הפנימי, בלי לקבוע איזה מבנה אחראי לתסמינים.
            </li>
            <li>
              <span className="font-semibold">Medial Elbow Tendinopathy&rlm;</span> מתאימה כאשר
              הסיפור והבדיקה מצביעים על מעורבות של מוצא הגידים המכופפים ומסובבי האמה.
            </li>
          </ul>
          <p className={pClass}>
            ההבחנה חשובה במיוחד בצד הפנימי של המרפק. באזור נמצאים גם העצב האולנרי, הרצועה הצידית
            האולנרית, שרירי המכופפים ומסובבי האמה, החלק הפנימי של מפרק המרפק ולעיתים גם החלק הפנימי
            של שריר הזרוע התלת ראשי. כאב מכל אחד מהמבנים האלה עלול לקבל בטעות את הכותרת
            &rdquo;מרפק גולף&ldquo;.
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            כאשר ידוע רק שהכאב נמצא בצד הפנימי, אך עדיין לא ברור מהו המבנה המעורב,
            Epicondylalgia&rlm; עשויה להיות הגדרה נכונה יותר מטנדינופתיה.
          </p>

          <h2 className={h2Class}>מי עלול לפתח כאב בצד הפנימי של המרפק?</h2>
          <p className={pClass}>
            התסמינים עשויים להופיע בפעילויות הכוללות אחיזה חזקה, כיפוף של שורש כף היד, סיבוב האמה
            או העברת כוח דרך היד.
          </p>
          <p className={pClass}>
            כאב בצד הפנימי של המרפק יכול להופיע אצל מתאמנים, מטפסים, עובדים בעבודה ידנית, שחקני
            גולף וספורטאי זריקה. הפעילויות המעורבות כוללות לעיתים קרובות אחיזה חזקה, נשיאת משאות,
            משיכה, כיפוף של שורש כף היד, סיבוב האמה, עבודה עם כלי עבודה, תרגילי מתח וטיפוס, חבטות
            וזריקה. לעיתים הכאב מתפתח לאחר עלייה מהירה בנפח האימון או העבודה, ובמקרים אחרים הוא
            מופיע בעקבות הצטברות הדרגתית של עומס ללא אירוע יחיד וברור.
          </p>
          <p className={pClass}>
            אצל ספורטאי זריקה, ובעיקר בבייסבול ובענפים שבהם מתבצעת זריקה מעל הראש, כאב פנימי במרפק
            מחייב תשומת לב מיוחדת גם לרצועה האולנרית ולעצב האולנרי ולא רק לגידים.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>מה מרגישים?</h2>
          <p className={pClass}>
            בטנדינופתיה של הצד הפנימי הכאב מופיע בדרך כלל סביב האפיקונדיל הפנימי ולעיתים ממשיך מעט
            לאורך החלק הפנימי של האמה.
          </p>

          <ArticleFigure
            src="/professional-info/golfers-elbow-symptoms.webp"
            alt="אינפוגרפיקה של תסמינים אפשריים בכאב בצד הפנימי של המרפק: כאב מקומי, חולשת אחיזה, החמרה בפעילות ונימול אפשרי באצבע הקטנה ובקמיצה"
            caption="תסמינים אפשריים בכאב בצד הפנימי של המרפק. כאב מקומי, ירידה בכוח האחיזה והחמרה בפעילות יכולים להתאים למעורבות הגידים. נימול באצבע הקטנה ובקמיצה עשוי להצביע על מעורבות של העצב האולנרי."
          />

          <p className={pClass}>
            הכאב עשוי להתגבר באחיזה, בנשיאת משקל, במשיכה, בכיפוף שורש כף היד או בסיבוב האמה. אצל
            ספורטאים הוא עשוי להופיע גם בטיפוס, בחבטה או בזריקה. לעיתים מופיעה ירידה בכוח האחיזה או
            תחושת עייפות מוקדמת של האמה.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              נימול, זרמים או שינוי בתחושה באצבע הקטנה ובקמיצה אינם אופייניים לטנדינופתיה מבודדת
              ומצריכים בדיקה של העצב האולנרי. תחושת חוסר יציבות, כאב עמוק בזמן זריקה, קליקים או
              &rdquo;קפיצה&ldquo; בצד הפנימי מצריכים גם הם הערכה של מבנים נוספים.
              <Ref n={2} />
              <Ref n={3} />
            </p>
          </div>

          <h2 className={h2Class}>כיצד מאבחנים?</h2>
          <p className={pClass}>
            האבחון מתחיל בשיחה על מיקום הכאב, הפעולות המעוררות אותו, אופן הופעתו וסוגי הפעילות שהיד
            מבצעת.
          </p>

          <ArticleFigure
            src="/professional-info/golfers-elbow-assessment.webp"
            alt="אינפוגרפיקה של ארבעת שלבי האבחון בכאב בצד הפנימי של המרפק: סיפור הכאב, בדיקה מקומית, בדיקות נוספות של כוח אחיזה, עצב אולנרי ויציבות, והדמיה רק כשצריך"
            caption="כיצד מאבחנים כאב בצד הפנימי של המרפק? האבחנה מתבססת על הסיפור הקליני, הבדיקה המקומית ובדיקות נוספות לפי הצורך, במיוחד כאשר עולה חשד למעורבות של העצב האולנרי, של הרצועה האולנרית או של מבנים נוספים."
          />

          <p className={pClass}>
            בבדיקה בוחנים בדרך כלל את מיקום הרגישות, את הכאב בזמן כיפוף שורש כף היד או סיבוב האמה,
            את כוח האחיזה ואת תנועת המרפק ושורש כף היד. כאשר יש נימול, כאב בזמן זריקה, תחושת חוסר
            יציבות או סימנים שאינם מתאימים לטנדינופתיה פשוטה, יש מקום לבדוק גם את העצב האולנרי, את
            יציבות הרצועה האולנרית, את הכתף ואת מערכת העצבים.
          </p>
          <p className={pClass}>
            אין בדיקה יחידה שמבדילה באופן מוחלט בין טנדינופתיה לבין כל הגורמים האחרים לכאב פנימי.
            האבחנה מבוססת על שילוב בין הסיפור, מיקום הכאב, הפעולות המעוררות אותו וממצאי הבדיקה.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>האם כל כאב בצד הפנימי הוא מרפק גולף?</h2>
          <p className={pClass}>
            לא. כפי שמודגם גם בבדיקה הקלינית, בצד הפנימי של המרפק קיימת אבחנה מבדלת רחבה, הכוללת
            בין היתר:
          </p>

          <h3 className={h3Class}>מעורבות של העצב האולנרי</h3>
          <p className={pClass}>
            העצב עובר מאחורי האפיקונדיל הפנימי. גירוי שלו עשוי לגרום לנימול, זרמים, כאב לאורך האמה
            וחולשה בשרירי כף היד.
          </p>

          <h3 className={h3Class}>פגיעה ברצועה הצידית האולנרית</h3>
          <p className={pClass}>
            הרצועה חשובה במיוחד ביציבות המרפק בזמן זריקה. כאב אצל זורק אינו צריך להיות מיוחס
            אוטומטית ל&rdquo;מרפק גולף&ldquo;.
          </p>

          <h3 className={h3Class}>פציעה שרירית</h3>
          <p className={pClass}>
            כאב שהופיע באופן חד בזמן משיכה, זריקה או הרמת משקל עשוי להתאים לפציעה של השרירים
            המכופפים או מסובבי האמה ולא לטנדינופתיה שהתפתחה בהדרגה.
          </p>

          <h3 className={h3Class}>תסמונת הטרייספס הקופץ</h3>
          <p className={pClass}>
            לעיתים חלק משריר הטרייספס או העצב האולנרי נע קדימה ואחורה מעל האפיקונדיל בזמן כיפוף
            המרפק וגורם לתחושת קפיצה, קליק או אי נוחות.
          </p>

          <h3 className={h3Class}>מקור מפרקי או גרמי</h3>
          <p className={pClass}>
            שינויים בתוך מפרק המרפק, פגיעה סחוסית או פציעה גרמית יכולים גם הם לגרום לכאב באזור.
          </p>
          <p className={pClass}>
            ההבחנה חשובה משום שתרגול המיועד לגיד לא בהכרח יפתור בעיה עצבית, רצועתית או מפרקית.
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>האם הכאב יכול להגיע מהצוואר?</h2>
          <p className={pClass}>
            כן. כאב שמקורו בצוואר או במערכת העצבים יכול להופיע גם בצד הפנימי של הזרוע והמרפק.
          </p>
          <p className={pClass}>
            כאשר קיימים גם כאב צוואר, הקרנה לאורך היד, נימול, שינוי בתחושה או חולשה במספר שרירים,
            יש מקום לבדיקה של הצוואר ומערכת העצבים.
          </p>
          <p className={pClass}>
            עם זאת, נימול באצבע הקטנה ובקמיצה עשוי לנבוע גם מגירוי מקומי של העצב האולנרי סביב
            המרפק. לכן חשוב לבדוק את מהלך העצב ולא להניח מראש שהבעיה נמצאת בצוואר או במרפק בלבד.
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/cervicogenic-headache"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב ראש ממקור צווארי
            </Link>
            .
          </p>

          <h2 className={h2Class}>כיצד פיזיותרפיה יכולה לסייע?</h2>
          <p className={pClass}>
            במקרה שהתמונה מתאימה לטנדינופתיה, הפיזיותרפיה מתמקדת בהתאמת העומסים ובבניית היכולת של
            השרירים והגידים לבצע את הפעולות הנדרשות.
          </p>

          <ArticleFigure
            src="/professional-info/golfers-elbow-return-to-load.webp"
            alt="אינפוגרפיקה של חמישה שלבי חזרה הדרגתית לעומס בכאב בצד הפנימי של המרפק: שלב ראשוני, חיזוק בסיסי, נשיאת עומס ומשיכה, תרגול תפקודי וחזרה לספורט או לעבודה מלאה"
            caption="חזרה הדרגתית לעומס. התהליך מתקדם מאחיזה ותרגול בסיסי אל נשיאת משקל, משיכה, תרגול תפקודי וחזרה לספורט או לעבודה מלאה. ההתקדמות נקבעת לפי הכאב, הכוח והתגובה לאחר הפעילות."
          />

          <h3 className={h3Class}>התאמת הפעילות</h3>
          <p className={pClass}>
            בשלב הראשון מתאימים זמנית את המשקל, מספר החזרות, עוצמת האחיזה וטכניקת התנועה. המטרה
            אינה להימנע מכל שימוש ביד, אלא להפחית עומס שאינו נסבל ולהחזירו בהדרגה.
          </p>

          <h3 className={h3Class}>חיזוק הדרגתי</h3>
          <p className={pClass}>
            בהמשך משלבים חיזוק הדרגתי של מכופפי שורש כף היד, מסובבי האמה והאחיזה. ניתן להשתמש
            בסוגים שונים של כיווץ ותרגול; אין הוכחה שתרגול אקסצנטרי הוא הפתרון היחיד או המתאים לכל
            מטופל. סקירה שיטתית משנת 2026, שכללה חמישה מחקרים ו־143 מטופלים, מצאה שתרגול אקסצנטרי
            עשוי להפחית כאב ולשפר תפקוד, אך המחקרים היו קטנים ושונים זה מזה{" "}
            <span className="font-bold">ורמת הוודאות הכוללת נותרה נמוכה</span>.<Ref n={4} />
          </p>

          <h3 className={h3Class}>טיפול במרכיבים נוספים</h3>
          <p className={pClass}>
            כאשר קיימת מעורבות עצבית, חוסר יציבות או ליקוי בטכניקת זריקה, תוכנית הטיפול צריכה
            להתייחס גם אליהם. לא נכון להתמקד רק בגיד אם הבדיקה מצביעה על מקור נוסף.
          </p>

          <h3 className={h3Class}>חזרה לפעילות</h3>
          <p className={pClass}>
            בשלבים המתקדמים חוזרים בהדרגה לנשיאת משקל, משיכה ולדרישות הייחודיות של העבודה או
            הספורט. טיפול ידני, חבק או אמצעים להפחתת כאב יכולים להשתלב לפי הצורך, אך אינם מחליפים
            החזרה הדרגתית לעומס.
          </p>

          <h2 className={h2Class}>האם פיזיותרפיה הוכחה כטיפול יעיל?</h2>
          <p className={pClass}>
            מרפק גולף נחקר הרבה פחות ממרפק טניס. קיימים מחקרים התומכים בשיפור בעקבות תרגול
            ופיזיותרפיה, אך איכות הראיות נמוכה ואין עדיין פרוטוקול אחד שהוכח כעדיף. לכן נכון לומר
            שפיזיותרפיה היא טיפול שמרני מקובל והגיוני, המבוסס על התאמת עומסים וחיזוק הדרגתי, אך לא
            להבטיח שהיא תפתור כל מקרה או שתרגיל מסוים הוא הפתרון היחיד.
          </p>
          <p className={pClass}>
            חשיבות הפיזיותרפיה היא גם באבחון. כאשר התמונה אינה מתאימה לטנדינופתיה, הבדיקה יכולה
            לזהות סימנים המכוונים לעצב, לרצועה, לפציעה שרירית או למקור אחר ולשנות בהתאם את תוכנית
            הטיפול.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>כמה זמן לוקח להשתפר?</h2>
          <p className={pClass}>
            אין לוח זמנים אחיד. משך ההחלמה תלוי במשך הזמן שבו קיימים התסמינים, בדרישות העבודה או
            הספורט, במעורבות של מבנים נוספים וביכולת להתאים את העומס.
          </p>
          <p className={pClass}>
            כאב שהופיע לאחר תקופה קצרה של עומס עשוי להשתפר מהר יותר, בעוד שתסמינים ממושכים או כאב
            אצל ספורטאי זריקה יכולים לדרוש תהליך ארוך יותר ובירור רחב יותר. ההתקדמות צריכה להתבסס
            על שיפור בכוח, ביכולת האחיזה ובביצוע הפעולות הרלוונטיות, ולא רק על מספר השבועות שחלפו.
          </p>

          <h2 className={h2Class}>מתי אפשר לחזור לאימון או לספורט?</h2>
          <p className={pClass}>החזרה מתבצעת בהדרגה, בהתאם לדרישות הפעילות.</p>
          <p className={pClass}>לפני חזרה מלאה רצוי לבדוק:</p>
          <ul className={ulClass}>
            <li>יכולת לאחוז ולשאת עומס</li>
            <li>כוח של שורש כף היד והאמה</li>
            <li>ביצוע הפעולה בלי פיצוי משמעותי</li>
            <li>תגובת המרפק במהלך האימון ולאחריו</li>
            <li>יכולת להשלים מספר אימונים מדורגים</li>
            <li>אצל זורקים, יכולת להשלים תוכנית זריקה הדרגתית</li>
          </ul>
          <p className={pClass}>
            בספורטאי זריקה יש לבחון גם את הכתף, טווחי התנועה, טכניקת הזריקה וניהול נפח הזריקות.
            כאב בצד הפנימי בזמן זריקה בעוצמה גבוהה אינו מצב שבו כדאי פשוט &rdquo;לדחוף דרך
            הכאב&ldquo;.
          </p>

          <h2 className={h2Class}>לסיכום</h2>
          <p className={pClass}>
            &rdquo;מרפק גולף&ldquo; הוא שם נפוץ לכאב בצד הפנימי של המרפק, אך האזור כולל כמה מבנים
            שיכולים לייצר תסמינים דומים. Medial Epicondylalgia&rlm; מתארת את מיקום הכאב בלי לקבוע
            מראש מהו מקורו. Medial Elbow Tendinopathy&rlm; מתאימה כאשר הסיפור והבדיקה מצביעים על
            מעורבות של מוצא הגידים המכופפים ומסובבי האמה.
          </p>
          <p className={pClass}>
            פיזיותרפיה יכולה לסייע בהתאמת עומסים, בבניית כוח ובהחזרה הדרגתית לעבודה ולספורט. כאשר
            קיימים נימול, חוסר יציבות, כאב בזמן זריקה או סימנים שאינם מתאימים לטנדינופתיה, יש
            להרחיב את הבירור ולא לטפל בכל כאב פנימי כאילו היה &rdquo;מרפק גולף&ldquo;.
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/tennis-elbow-lateral-elbow-pain"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              מרפק טניס: כאב בצד החיצוני של המרפק
            </Link>
            .
          </p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              כאב בצד הפנימי של המרפק שמפריע לאחיזה, לאימון או לזריקה? הערכה מסודרת יכולה לברר האם
              מדובר בגיד, בעצב או במבנה אחר ולכוון את הטיפול בהתאם.
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
              Amin NH, Kumar NS, Schickendantz MS. Medial Epicondylitis: Evaluation and Management.
              J Am Acad Orthop Surg. 2015;23(6):348-355. doi:
              <a
                href="https://doi.org/10.5435/JAAOS-D-14-00145"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.5435/JAAOS-D-14-00145
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Prabhakar G, Kanawade V, Ghali AN, et al. Medial Elbow Pain Syndrome: Current
              Treatment Strategies. Orthopedics. 2023;46(2):e81-e88. doi:
              <a
                href="https://doi.org/10.3928/01477447-20220719-06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.3928/01477447-20220719-06
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Cho MJ, Chai JW, Kim DH, Kim HJ, Seo J. Ultrasonographic Differential Diagnosis of
              Medial Elbow Pain. Ultrasonography. 2024;43(5):299-313. doi:
              <a
                href="https://doi.org/10.14366/usg.24102"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.14366/usg.24102
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              See ZH, Loo CE, Jaafar Z. Eccentric Exercise Therapy for Medial Epicondylitis: A
              Systematic Review of Clinical Outcomes. Complement Ther Med. 2026;98:103364. doi:
              <a
                href="https://doi.org/10.1016/j.ctim.2026.103364"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.ctim.2026.103364
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
