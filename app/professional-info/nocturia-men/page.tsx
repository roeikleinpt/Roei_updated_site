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

const article = getArticle("nocturia-men");

export const metadata: Metadata = {
  title: "קימה בלילה להשתין בגברים (Nocturia): גורמים, בירור ומה מקום הפיזיותרפיה",
  description:
    "קם בלילה לשירותים? נוקטוריה היא סימפטום ולא אבחנה. ייצור מוגבר של שתן בלילה, יכולת אגירה מופחתת, הפרעות שינה ומחלות מערכתיות יכולים לגרום לאותה תלונה, ולכן הבירור מתחיל ביומן השתנה.",
  alternates: { canonical: "/professional-info/nocturia-men" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "קימה בלילה להשתין בגברים (Nocturia) | רועי קליין פיזיותרפיה",
    description:
      "למה קמים להשתין בלילה, מה יומן השתנה יכול לגלות, ומתי מדובר בגורם שאינו מתחיל כלל בשלפוחית.",
    url: "/professional-info/nocturia-men",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const h3Class = "mt-6 text-xl font-bold text-slate-900";
const ulClass = "mt-4 list-disc space-y-2 pr-6 leading-8 text-black";

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
    q: "האם קימה פעם אחת בלילה נחשבת נוקטוריה?",
    a: "כן. לפי הגדרת ה-ICS, גם יקיצה אחת במהלך תקופת השינה לצורך מתן שתן נחשבת נוקטוריה. עם זאת, יקיצה אחת יכולה להיות שכיחה ולא תמיד מצריכה טיפול. שתי יקיצות או יותר נוטות להיות משמעותיות ומטרידות יותר.",
  },
  {
    q: "האם נוקטוריה אצל גבר אומרת שיש בעיה בערמונית?",
    a: "לא. BPH או חסימה במוצא השלפוחית הן רק חלק מהאפשרויות. ייצור מוגבר של שתן בלילה, שלפוחית רגיזה, הפרעות שינה ומחלות מערכתיות יכולים לגרום לאותו סימפטום.",
  },
  {
    q: "למה צריך יומן השתנה?",
    a: "כי מספר הקימות לבדו אינו אומר מה גורם להן. יומן השתנה מאפשר לראות כמה שתן נוצר בלילה, כמה פעמים משתינים במהלך היום ומה דפוס ההשתנה הכללי.",
  },
  {
    q: "האם ההשתנה הראשונה בבוקר נחשבת לנוקטוריה?",
    a: "לא. היא אינה נספרת כיקיצה לילית, אך הכמות שלה כן נכללת בחישוב ייצור השתן הלילי, משום שהשתן נוצר במהלך שעות השינה.",
  },
  {
    q: "האם כדאי פשוט להפסיק לשתות בערב?",
    a: "לא בהכרח. אצל אדם ששותה כמויות גדולות סמוך לשינה שינוי בתזמון השתייה יכול לעזור, אך הגבלה מוגזמת של נוזלים אינה פתרון נכון ועלולה להיות בעייתית.",
  },
  {
    q: "האם פיזיותרפיה לרצפת האגן יכולה לעזור?",
    a: "כאשר קיימים במקביל דחיפות, תכיפות, שלפוחית רגיזה, דליפה או הפרעה בתפקוד רצפת האגן, ייתכן שיש לפיזיותרפיה תפקיד כחלק מהטיפול. כאשר מקור הנוקטוריה הוא ייצור מוגבר של שתן או מחלה מערכתית, נדרש טיפול בגורם המתאים ולא ברצפת האגן עצמה.",
  },
];

export default function NocturiaMenArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            קימה בלילה להשתין בגברים (Nocturia): גורמים, בירור ומה מקום הפיזיותרפיה
          </h1>
          <ArticleByline date={article.date} />

          <h2 className={h2Class}>קם בלילה לשירותים?</h2>
          <p className="mt-6 text-lg leading-8 text-black">
            אצל גברים קל לייחס את התופעה מיד לערמונית. לפעמים לערמונית אכן יש תפקיד, אבל נוקטוריה
            יכולה להופיע ממגוון סיבות: ייצור מוגבר של שתן בשעות הלילה, קושי של השלפוחית לאגור שתן,
            שלפוחית רגיזה, הפרעות שינה, דום נשימה בשינה, סוכרת, בצקות, מחלות לב או כליה, תרופות,
            ולעיתים שילוב של כמה גורמים.
          </p>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="leading-8 text-black">
              <span className="font-bold">נוקטוריה היא סימפטום, לא אבחנה.</span>
              <Ref n={1} />
              <Ref n={2} />
            </p>
          </div>

          <h2 className={h2Class}>מהי נוקטוריה?</h2>
          <p className={pClass}>
            לפי ה-International Continence Society&rlm;, בקיצור ICS&rlm;, נוקטוריה היא מצב שבו
            אדם מתעורר במהלך תקופת השינה העיקרית כדי לתת שתן.
            <Ref n={1} />
          </p>
          <p className={pClass}>גם יקיצה אחת לצורך השתנה עומדת בהגדרה של נוקטוריה.</p>
          <p className={pClass}>
            עם זאת, יש הבדל בין ההגדרה לבין המשמעות הקלינית. יקיצה אחת בלילה שכיחה למדי ולא תמיד
            מטרידה או מחייבת טיפול. כאשר מדובר בשתי יקיצות או יותר בלילה, עולה הסבירות לפגיעה
            משמעותית יותר באיכות השינה, בעייפות ביום ובאיכות החיים.
            <Ref n={2} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            כדי שאירוע ייחשב לנוקטוריה, צריך שהאדם יירדם קודם ולאחר מכן יתעורר לצורך השתנה. הליכה
            לשירותים לפני ההירדמות אינה אירוע של נוקטוריה.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>למה קמים להשתין בלילה?</h2>
          <p className={pClass}>
            בסופו של דבר, נוקטוריה מתרחשת כאשר במהלך השינה השלפוחית מגיעה לנקודה שבה יש צורך
            להתרוקן. שני מנגנונים מרכזיים יכולים להביא לכך.
          </p>

          <h3 className={h3Class}>הגוף מייצר יותר מדי שתן בלילה</h3>
          <p className={pClass}>
            ב-Nocturnal Polyuria&rlm;, נוקטורנל פוליאוריה, חלק גדול יחסית מייצור השתן היומי
            מתרחש במהלך שעות השינה. במקרה כזה השלפוחית עצמה יכולה לתפקד היטב, אבל היא פשוט
            מתמלאת שוב במהלך הלילה.
          </p>

          <h3 className={h3Class}>השלפוחית אוגרת פחות שתן</h3>
          <p className={pClass}>
            אפשרות אחרת היא שכמות השתן המיוצרת בלילה אינה חריגה במיוחד, אבל השלפוחית מגיעה לצורך
            בהתרוקנות בנפחים קטנים יחסית. הדבר יכול להיות קשור, בין היתר, לשלפוחית רגיזה
            (OAB&rlm;), פעילות יתר של שריר השלפוחית, חסימה במוצא השלפוחית (BOO&rlm;) או הגדלה
            שפירה של הערמונית (BPH&rlm;).
            <Ref n={3} />
            <Ref n={4} />
          </p>
          <p className={pClass}>לעיתים קיימים כמה מנגנונים במקביל.</p>

          <ArticleFigure
            src="/professional-info/nocturia-mechanisms.webp"
            alt="שני מנגנונים מרכזיים לנוקטוריה: ייצור מוגבר של שתן בלילה, ולצדו יכולת אגירה מופחתת של השלפוחית, עם הגורמים האפשריים לכל אחד מהם"
            caption="נוקטוריה יכולה לנבוע מייצור מוגבר של שתן בלילה, מיכולת אגירה מופחתת של השלפוחית, ולעיתים משילוב של שניהם."
          />

          <h2 className={h2Class}>ומה לגבי שינה?</h2>
          <p className={pClass}>שינה ונוקטוריה קשורות זו בזו, אבל חשוב לדייק.</p>
          <p className={pClass}>
            אם אדם מתעורר מסיבה אחרת, למשל כאב, רעש או אינסומניה, ורק מכיוון שהוא כבר ער מחליט
            ללכת לשירותים, לא בהכרח השלפוחית היא זו שגרמה ליקיצה.
          </p>
          <p className={pClass}>
            מצד שני, הפרעות שינה מסוימות יכולות להיות קשורות ישירות לנוקטוריה.
            <Ref n={3} />
            <Ref n={8} />
          </p>
          <p className={pClass}>
            הדוגמה החשובה ביותר היא דום נשימה חסימתי בשינה, באנגלית Obstructive Sleep
            Apnea&rlm; ובקיצור OSA&rlm;. מעבר ליקיצות ולפגיעה באיכות השינה, OSA&rlm; עשוי
            להשפיע גם על מאזן הנוזלים ועל ייצור השתן במהלך הלילה.
            <Ref n={7} />
          </p>
          <p className={pClass}>
            לכן נוקטוריה שמופיעה יחד עם נחירות משמעותיות, הפסקות נשימה שנצפו בזמן השינה, ישנוניות
            במהלך היום, כאבי ראש בבוקר או יתר לחץ דם מצדיקה לשקול גם בירור של הפרעת שינה.
          </p>

          <h2 className={h2Class}>פוליאוריה, כשהגוף מייצר הרבה שתן גם ביום וגם בלילה</h2>
          <p className={pClass}>לא כל ייצור מוגבר של שתן בלילה הוא נוקטורנל פוליאוריה.</p>
          <p className={pClass}>
            ב-Global Polyuria&rlm;, פוליאוריה כללית, כמות השתן גבוהה לאורך כל היממה. מקובל
            להשתמש בייצור של יותר מכ-40 מ&quot;ל שתן לכל ק&quot;ג משקל גוף ב-24 שעות כאחד המדדים
            לפוליאוריה.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            מצב כזה יכול להופיע, למשל, בסוכרת שאינה מאוזנת, ב-Diabetes Insipidus&rlm;, בשתייה
            בכמויות גדולות מאוד ובמצבים מטבוליים או כלייתיים מסוימים.
          </p>
          <p className={pClass}>
            במקרה כזה, טיפול בשלפוחית או בערמונית לבדן אינו מטפל במקור הבעיה.
          </p>

          <h2 className={h2Class}>האם הערמונית באמת אשמה?</h2>
          <p className={pClass}>לפעמים, אבל לא בהכרח.</p>
          <p className={pClass}>
            BPH&rlm; או חסימה במוצא השלפוחית יכולים להשפיע על תפקוד מערכת השתן ולתרום לנוקטוריה,
            במיוחד כאשר קיימים במקביל תסמינים כמו זרם חלש, היסוס בתחילת השתנה או תחושת התרוקנות
            לא מלאה. אבל נוקטוריה לבדה אינה הוכחה לבעיה בערמונית.
          </p>
          <p className={pClass}>
            הנחיות ה-EAU&rlm; מדגישות שבבירור נוקטוריה בגברים יש לשקול גם ייצור שתן מוגבר,
            הפרעות אגירה, הפרעות שינה ומחלות מערכתיות, וכי לעיתים כמה גורמים מתקיימים יחד.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            גם ההשפעה של תרופות המיועדות ל-BPH&rlm; ולתסמיני דרכי השתן התחתונות על מספר הקימות
            בלילה עשויה להיות מוגבלת, ולכן שיפור בתסמיני הערמונית אינו מבטיח שהנוקטוריה תיעלם.
            <Ref n={3} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            להרחבה על התמונה של שלפוחית רגיזה:{" "}
            <Link
              href="/professional-info/overactive-bladder-men"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שלפוחית רגיזה בגברים (OAB): תסמינים, בירור וטיפול
            </Link>
          </p>

          <h2 className={h2Class}>יומן השתנה, כלי מרכזי בבירור נוקטוריה</h2>
          <p className={pClass}>
            המשפט &rdquo;אני קם שלוש פעמים בלילה&ldquo; מספר לנו כמה פעמים קמת, אבל לא בהכרח
            למה. לכן אחד הכלים החשובים בבירור הוא יומן השתנה.
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            הנחיות ה-EAU&rlm; ממליצות להשתמש ביומן השתנה בבירור נוקטוריה ולתעד מספר ימים
            המייצגים את השגרה הרגילה. ביומן מתעדים בין היתר:
            <Ref n={3} />
          </p>
          <ul className={ulClass}>
            <li>שעת כל השתנה</li>
            <li>כמות השתן בכל פעם</li>
            <li>זמני שינה ויקיצה</li>
            <li>שתייה, כאשר נדרש</li>
            <li>ולעיתים דחיפות, דליפה או מידע נוסף בהתאם למטרה</li>
          </ul>

          <h3 className={h3Class}>מה אפשר ללמוד מיומן השתנה?</h3>
          <p className={pClass}>
            <span className="font-semibold">כמות השתן בלילה:</span> מחברים את כמויות השתן
            שהופרשו במהלך תקופת השינה. לצורך חישוב ייצור השתן הלילי, נכללת גם ההשתנה הראשונה של
            הבוקר, מאחר שהשתן שבה נוצר במהלך הלילה. כמות גדולה יחסית יכולה לכוון לייצור מוגבר של
            שתן בלילה.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            <span className="font-semibold">דפוס ההשתנה במהלך היום:</span> מספר ההשתנות לאורך
            שעות הערות, יחד עם הכמויות והתסמינים הנלווים, יכול לעזור לזהות תכיפות או הפרעה בתפקוד
            האגירה.
          </p>

          <ArticleFigure
            src="/professional-info/bladder-diary-example.webp"
            alt="דוגמה ליומן השתנה לילי עם שעות וכמויות, המדדים המרכזיים שנגזרים ממנו ומה כל ממצא יכול לרמז עליו"
            caption="יומן השתנה מאפשר לראות לא רק כמה פעמים קמים בלילה, אלא גם כמה שתן מיוצר בלילה ומה דפוס ההשתנה לאורך היום."
          />

          <h2 className={h2Class}>מתי כדאי לחשוב על גורם שאינו בשלפוחית?</h2>
          <p className={pClass}>
            נוקטוריה יכולה להיות ביטוי למצב רפואי שאינו מתחיל כלל בדרכי השתן.
            <Ref n={8} />
            <Ref n={10} />
          </p>

          <h3 className={h3Class}>נחירות או חשד לדום נשימה בשינה</h3>
          <p className={pClass}>
            נחירות משמעותיות, הפסקות נשימה, שינה לא מרעננת וישנוניות ביום מצדיקות בירור מתאים
            ל-OSA&rlm;.
            <Ref n={7} />
          </p>

          <h3 className={h3Class}>צמא וכמויות שתן גדולות</h3>
          <p className={pClass}>
            שתייה חריגה וכמות שתן גדולה גם ביום וגם בלילה מצריכות לשקול פוליאוריה ולברר, בין
            היתר, סוכרת וגורמים מטבוליים נוספים.
          </p>

          <h3 className={h3Class}>בצקות ברגליים</h3>
          <p className={pClass}>
            נוזלים שמצטברים ברגליים במהלך היום יכולים לחזור למחזור הדם בזמן שכיבה ולהגדיל את
            ייצור השתן בלילה.
            <Ref n={9} />
          </p>

          <h3 className={h3Class}>קוצר נשימה או מחלת לב</h3>
          <p className={pClass}>
            נוקטוריה שמלווה בבצקות, קוצר נשימה, קושי לנשום בשכיבה או סימנים לבביים אחרים מצריכה
            בירור רפואי.
            <Ref n={9} />
          </p>

          <h3 className={h3Class}>מחלות כליה</h3>
          <p className={pClass}>
            הכליות ממלאות תפקיד מרכזי בריכוז השתן ובוויסות מאזן הנוזלים, ולכן גם הפרעה בתפקודן
            יכולה להתבטא בנוקטוריה.
            <Ref n={3} />
            <Ref n={5} />
          </p>

          <h3 className={h3Class}>תרופות</h3>
          <p className={pClass}>
            משתנים ותרופות נוספות יכולים להשפיע על ייצור השתן ועל מועד הופעתו. אין לשנות טיפול
            תרופתי או את מועד נטילתו ללא התייעצות עם הרופא המטפל.
            <Ref n={3} />
            <Ref n={8} />
          </p>

          <h2 className={h2Class}>ומה התפקיד של פיזיותרפיה לרצפת האגן?</h2>
          <p className={pClass}>
            חשוב להפריד בין נוקטוריה כתסמין מבודד לבין נוקטוריה המופיעה כחלק מבעיה בתפקוד
            האגירה.
          </p>
          <p className={pClass}>
            אין כיום ראיות טובות לכך שתרגול רצפת האגן לבדו מטפל ישירות בנוקטוריה מבודדת או בייצור
            מוגבר של שתן בלילה. אם הגוף מייצר יותר מדי שתן בגלל OSA&rlm;, בצקות, מחלה מערכתית או
            שינוי בוויסות הנוזלים, תרגול רצפת האגן אינו משנה את ייצור השתן.
          </p>
          <p className={pClass}>
            לעומת זאת, פיזיותרפיה יכולה להיות רלוונטית כאשר קיימים במקביל:
          </p>
          <ul className={ulClass}>
            <li>דחיפות</li>
            <li>תכיפות</li>
            <li>שלפוחית רגיזה</li>
            <li>דליפת שתן</li>
            <li>קושי בשליטה בדחף</li>
            <li>או הפרעה אחרת בתפקוד רצפת האגן</li>
          </ul>
          <p className={pClass}>
            במחקר MOTIVE&rlm;, שכלל 143 גברים עם תסמיני OAB&rlm; למרות טיפול בחוסם אלפא, טיפול
            התנהגותי שכלל תרגול של רצפת האגן, טכניקות לדיכוי דחיפות ודחיית השתנה הפחית גם את מספר
            אירועי הנוקטוריה.
            <Ref n={12} />
          </p>
          <p className={pClass}>
            עם זאת, חשוב לדייק: מדובר בחבילת טיפול התנהגותית, ולכן אי אפשר לייחס את השיפור לתרגול
            רצפת האגן לבדו.
          </p>

          <h2 className={h2Class}>איך מטפלים בנוקטוריה?</h2>
          <p className={pClass}>
            הטיפול בנוקטוריה תלוי בסיבה שגורמת לה, ולכן אין טיפול אחד שמתאים לכולם.
            <Ref n={3} />
            <Ref n={10} />
          </p>

          <h3 className={h3Class}>התאמת הרגלי שתייה</h3>
          <p className={pClass}>
            כאשר קיימת שתייה רבה בשעות הערב, ניתן לעיתים להעביר חלק גדול יותר מהשתייה לשעות
            מוקדמות יותר. המטרה אינה להגביל נוזלים באופן קיצוני או לגרום להתייבשות. גם צמצום
            קפאין או אלכוהול בשעות הערב יכול להיות רלוונטי אצל חלק מהמטופלים.
            <Ref n={3} />
            <Ref n={5} />
          </p>

          <h3 className={h3Class}>בצקות והצטברות נוזלים ברגליים</h3>
          <p className={pClass}>
            כאשר קיים מרכיב של בצקת, פעולות כגון הרמת הרגליים במהלך היום ולעיתים גרבי לחץ עשויות
            להיות רלוונטיות בהתאם למצב הרפואי.
            <Ref n={5} />
            <Ref n={9} />
          </p>
          <p className={pClass}>
            אם נוטלים תרופות משתנות, לעיתים יש משמעות לשעת הנטילה, אך שינוי כזה צריך להיעשות רק
            בהתייעצות עם הרופא המטפל.
          </p>

          <h3 className={h3Class}>טיפול בהפרעת שינה</h3>
          <p className={pClass}>
            כאשר דום נשימה בשינה הוא חלק מהבעיה, טיפול מתאים ב-OSA&rlm; עשוי להפחית גם את
            הנוקטוריה אצל חלק מהמטופלים.
            <Ref n={7} />
          </p>

          <h3 className={h3Class}>טיפול בשלפוחית רגיזה או בהפרעת אגירה</h3>
          <p className={pClass}>
            כאשר קיימת שלפוחית רגיזה או בעיה אחרת בתפקוד האגירה, הטיפול יכול לכלול שינוי הרגלים,
            אימון שלפוחית, פיזיותרפיה וטיפול תרופתי בהתאם למקרה.
            <Ref n={3} />
            <Ref n={10} />
          </p>

          <h3 className={h3Class}>טיפול ב-BPH או בחסימה</h3>
          <p className={pClass}>
            כאשר חסימה במוצא השלפוחית תורמת לתסמינים, טיפול אורולוגי עשוי לסייע. עם זאת, השיפור
            בנוקטוריה אינו תמיד גדול אם קיימים במקביל מנגנונים אחרים.
            <Ref n={3} />
            <Ref n={6} />
          </p>

          <h3 className={h3Class}>טיפול תרופתי בייצור שתן לילי מוגבר</h3>
          <p className={pClass}>
            במטופלים נבחרים עם נוקטורנל פוליאוריה ניתן לשקול טיפול ב-Desmopressin&rlm;. הטיפול
            אינו מתאים לכל אדם ודורש הערכה רפואית ומעקב אחר רמת הנתרן בדם בגלל הסיכון
            ל-Hyponatremia&rlm;, במיוחד באוכלוסיות בסיכון.
            <Ref n={6} />
            <Ref n={11} />
          </p>
          <p className={pClass}>
            המטרה היא לא רק להפחית את מספר הקימות בלילה, אלא להבין ולטפל בסיבה שגורמת להן.
          </p>

          <h2 className={h2Class}>מתי צריך להפנות להמשך בירור?</h2>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              כדאי לפנות לבירור רפואי מתאים כאשר קיימים, בין היתר: כמות שתן גדולה לאורך כל
              היממה, חשד לייצור שתן לילי מוגבר ממקור מערכתי, צמא משמעותי או חשד לסוכרת, בצקות
              משמעותיות ברגליים, קוצר נשימה או תסמינים לבביים, חשד לדום נשימה בשינה, חשד לפגיעה
              בתפקוד הכלייתי, דם בשתן, זיהומים חוזרים בדרכי השתן, או חשד לאצירת שתן ולהתרוקנות לא
              תקינה.
              <Ref n={8} />
              <Ref n={10} />
            </p>
          </div>
          <p className={pClass}>
            במקרים כאלה ייתכן צורך בבירור אצל רופא משפחה, אורולוג, מומחה שינה, קרדיולוג, נפרולוג
            או אנדוקרינולוג, בהתאם לתמונה הקלינית.
          </p>

          <h2 className={h2Class}>נוקטוריה היא סימפטום, לא אבחנה</h2>
          <p className={pClass}>
            שני גברים שקמים שלוש פעמים בלילה יכולים לעשות זאת מסיבות שונות לחלוטין. אצל אחד הגוף
            מייצר הרבה שתן בשעות השינה. אצל אחר השלפוחית מתרוקנת כבר בנפחים קטנים. ואצל אדם נוסף
            יכולים להתקיים כמה מנגנונים במקביל.
          </p>
          <p className={pClass}>
            לכן טיפול נכון מתחיל לא במספר הפעמים שקמים, אלא בהבנה מדוע קמים.
          </p>
          <p className={pClass}>
            להרחבה על ההערכה של רצפת האגן אצל גברים:{" "}
            <Link
              href="/professional-info/mens-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              טיפול רצפת אגן לגבר: למי מתאים ומה הוא כולל
            </Link>
          </p>

          <ArticleCta
            heading="לא כל נוקטוריה מתחילה ברצפת האגן."
            intro="אם הקימה בלילה מופיעה יחד עם דחיפות, תכיפות, דליפת שתן או תסמינים נוספים הקשורים לתפקוד השלפוחית ורצפת האגן, הערכה מסודרת יכולה לסייע להבין האם לפיזיותרפיה יש מקום בטיפול, או האם נכון להפנות תחילה לבירור נוסף."
            whatsappText="היי רועי, קראתי אצלך הסבר על קימה בלילה להשתין, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Hashim H, Blanker MH, Drake MJ, et al. International Continence Society (ICS) report
              on the terminology for nocturia and nocturnal lower urinary tract function. Neurourol
              Urodyn. 2019;38(2):499-508. doi:
              <a
                href="https://doi.org/10.1002/nau.23917"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.23917
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Everaert K, Hervé F, Bosch R, et al. International Continence Society consensus on the
              diagnosis and treatment of nocturia. Neurourol Urodyn. 2019;38(2):478-498. doi:
              <a
                href="https://doi.org/10.1002/nau.23939"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.23939
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              European Association of Urology. EAU Guidelines on the Management of Non-neurogenic
              Male Lower Urinary Tract Symptoms. 2026. Sections: Diagnostic Evaluation; Medical
              Conditions and Sleep Disorders Shared Care Pathway; Treatment for Nocturia.
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Weiss JP, Everaert K. Management of nocturia and nocturnal polyuria. Urology.
              2019;133S:24-33. doi:
              <a
                href="https://doi.org/10.1016/j.urology.2019.09.022"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.urology.2019.09.022
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Nguyen LN, Randhawa H, Nadeau G, et al. Canadian Urological Association best practice
              report: diagnosis and management of nocturia. Can Urol Assoc J. 2022;16(7):E336-E349.
              doi:
              <a
                href="https://doi.org/10.5489/cuaj.7970"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.5489/cuaj.7970
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Sakalis VI, Karavitakis M, Bedretdinova D, et al. Medical treatment of nocturia in men
              with lower urinary tract symptoms: systematic review by the European Association of
              Urology Guidelines Panel for Male Lower Urinary Tract Symptoms. Eur Urol.
              2017;72(5):757-769. doi:
              <a
                href="https://doi.org/10.1016/j.eururo.2017.06.010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.eururo.2017.06.010
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Vrooman OPJ, van Kerrebroeck PEV, van Balken MR, van Koeveringe GA, Rahnama&apos;i MS.
              Nocturia and obstructive sleep apnoea. Nat Rev Urol. 2024;21(12):735-753. doi:
              <a
                href="https://doi.org/10.1038/s41585-024-00887-7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41585-024-00887-7
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Monaghan TF, Weiss JP, Wein AJ, et al. Sleep disorders, comorbidities, actions, lower
              urinary tract dysfunction, and medications (&quot;Sleep C.A.L.M.&quot;) in the
              evaluation and management of nocturia: a simple approach to a complex diagnosis.
              Neurourol Urodyn. 2023;42(3):562-572. doi:
              <a
                href="https://doi.org/10.1002/nau.25128"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.25128
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Verbakel I, Lazar J, Sinha S, et al. How should we assess the cardiovascular system in
              patients presenting with bothersome nocturia? ICI-RS 2023. Neurourol Urodyn.
              2024;43(6):1391-1399. doi:
              <a
                href="https://doi.org/10.1002/nau.25331"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.25331
              </a>
              .
            </li>
            <li id="ref-10" className="scroll-mt-24">
              Getaneh FW, Sussman RD, Iglesia CB. Nocturia: evaluation and management. Am Fam
              Physician. 2025;111(6):515-523B. PMID: 40531150.
            </li>
            <li id="ref-11" className="scroll-mt-24">
              Han J, Jung JH, Bakker CJ, Ebell MH, Dahm P. Desmopressin for treating nocturia in men.
              Cochrane Database Syst Rev. 2017;10(10):CD012059. doi:
              <a
                href="https://doi.org/10.1002/14651858.CD012059.pub2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/14651858.CD012059.pub2
              </a>
              .
            </li>
            <li id="ref-12" className="scroll-mt-24">
              Burgio KL, Goode PS, Johnson TM, et al. Behavioral versus drug treatment for
              overactive bladder in men: the Male Overactive Bladder Treatment in Veterans (MOTIVE)
              trial. J Am Geriatr Soc. 2011;59(12):2209-2216. doi:
              <a
                href="https://doi.org/10.1111/j.1532-5415.2011.03724.x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1111/j.1532-5415.2011.03724.x
              </a>
              .
            </li>
          </ol>

          <AuthorBox />
        </div>
      </Container>
    </article>
  );
}
