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

const article = getArticle("terminal-dribbling");

export const metadata: Metadata = {
  title: "טפטוף בסוף ההשתנה בגברים (Terminal Dribbling): גורמים, בירור ומקום הפיזיותרפיה",
  description:
    "כשהזרם נחלש לקראת הסוף והופך לטיפות. מה ההבדל מטפטוף לאחר השתנה, מתי זה קשור לערמונית, מה תפקידה של פעילות ירודה של שריר השלפוחית ומתי יש מקום לפיזיותרפיה.",
  alternates: { canonical: "/professional-info/terminal-dribbling" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "טפטוף בסוף ההשתנה בגברים (Terminal Dribbling) | רועי קליין פיזיותרפיה",
    description:
      "תסמין של שלב ההתרוקנות ולא אבחנה. מה עומד מאחוריו, מתי נדרש בירור אורולוגי ומתי פיזיותרפיה של רצפת האגן רלוונטית.",
    url: "/professional-info/terminal-dribbling",
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
    q: "האם טפטוף בסוף ההשתנה הוא אותו דבר כמו טפטוף לאחר השתנה?",
    a: "לא. בטפטוף בסוף ההשתנה זרם השתן עצמו הולך ונחלש והופך לטיפות כאשר ההשתנה עדיין נמשכת. בטפטוף לאחר השתנה הזרם כבר פסק לחלוטין, ורק לאחר מכן משתחררות טיפות נוספות.",
  },
  {
    q: "האם זה אומר שיש לי ערמונית מוגדלת?",
    a: "לא בהכרח. הגדלה שפירה של הערמונית היא אחת האפשרויות, בעיקר בגברים מבוגרים, אבל תסמינים דומים יכולים להופיע גם מסיבות אחרות המשפיעות על מוצא השלפוחית, על השופכה או על תפקוד שריר השלפוחית.",
  },
  {
    q: "אפשר לדעת לפי התסמינים אם מדובר בחסימה או בפעילות ירודה של השלפוחית?",
    a: "לא. שני המצבים יכולים לגרום לתמונה דומה של זרם חלש, התרוקנות ממושכת וטפטוף בסוף ההשתנה. פעילות ירודה של שריר השלפוחית היא אבחנה אורודינמית ואי אפשר לקבוע אותה לפי התסמינים בלבד.",
  },
  {
    q: "האם טפטוף בסוף ההשתנה אומר שיש לי Underactive Bladder?",
    a: "לא. זהו תסמין אחד בלבד. Underactive Bladder מתארת תמונה רחבה יותר של תסמיני התרוקנות, ולכן אי אפשר לקבוע אותה על סמך הטפטוף לבדו.",
  },
  {
    q: "האם Underactive Bladder ו-Detrusor Underactivity הם אותו דבר?",
    a: "לא. Underactive Bladder היא תסמונת שמבוססת על תסמינים, ואילו Detrusor Underactivity מתייחסת לתפקוד שריר השלפוחית ונקבעת בבדיקת אורודינמיקה.",
  },
  {
    q: "האם פיזיותרפיה של רצפת האגן יכולה לעזור?",
    a: "בחלק מהמקרים, בעיקר כאשר קיימים במקביל גם טפטוף לאחר השתנה, דחיפות, תכיפות או תסמיני רצפת אגן נוספים. הראיות לטיפול בטפטוף בסוף ההשתנה כתסמין מבודד עדיין מוגבלות.",
  },
  {
    q: "האם כל טפטוף בסוף ההשתנה מצריך בירור?",
    a: "לא בהכרח. כאשר מדובר בתופעה קלה ויציבה בלי תסמינים נוספים, לא תמיד יש לה משמעות קלינית מיוחדת. כאשר היא חדשה, מחמירה או מלווה בתסמיני התרוקנות נוספים, יש מקום להערכה רפואית.",
  },
  {
    q: "מתי חשוב במיוחד להיבדק?",
    a: "כאשר מופיעים בנוסף דם בשתן, אצירת שתן, קושי משמעותי בהתרוקנות, דלקות חוזרות בדרכי השתן, שינוי משמעותי בזרם או החמרה מתמשכת בתסמינים.",
  },
];

export default function TerminalDribblingArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            טפטוף בסוף ההשתנה בגברים (Terminal Dribbling): גורמים, בירור ומקום הפיזיותרפיה
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            זרם השתן מתחיל כרגיל, אבל לקראת הסוף הוא הולך ונחלש, הופך לטיפות או לזרם דק ומטפטף,
            ולוקח עוד זמן עד שההשתנה מסתיימת. התופעה הזו נקראת טפטוף בסוף ההשתנה, ובאנגלית
            Terminal Dribbling&rlm;.
          </p>
          <p className={pClass}>
            לפי ה-International Continence Society&rlm;, מדובר במצב שבו בחלק הסופי של ההשתנה
            קיימת האטה ניכרת של זרם השתן, עד שהוא הופך לטיפות או לזרם דק ומטפטף. כלומר ההשתנה
            עדיין נמשכת והשתן עדיין זורם, גם אם באיטיות רבה.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            הוא מוגדר כתסמין של שלב ההתרוקנות, ולא כאבחנה בפני עצמו. זהו תסמין שיכול להופיע
            במצבים שונים המשפיעים על זרימת השתן ועל התרוקנות השלפוחית.
            <Ref n={1} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>טפטוף בסוף ההשתנה או לאחריה, מה ההבדל?</h2>
          <p className={pClass}>קל לבלבל בין שני המצבים, אבל התזמון שונה.</p>
          <p className={pClass}>
            בטפטוף בסוף ההשתנה זרם השתן עצמו הולך ונחלש בחלק האחרון של ההשתנה והופך לטיפות או
            לזרם דק ומטפטף, וההשתנה עדיין לא הסתיימה. בטפטוף לאחר השתנה, לעומת זאת, זרם השתן
            כבר פסק לחלוטין וההשתנה הסתיימה, ורק לאחר מכן מופיעות טיפות נוספות.
            <Ref n={1} />
            <Ref n={6} />
          </p>

          <ArticleFigure
            src="/professional-info/pmd-vs-terminal-dribbling.webp"
            alt="השוואה בין טפטוף בסוף ההשתנה, שבו הזרם עדיין נמשך, לבין טפטוף לאחר השתנה, שבו הטיפות מופיעות אחרי שההשתנה הסתיימה"
            caption="שני מצבים שונים שמובחנים זה מזה לפי התזמון, ולא לפי כמות הטיפות."
          />

          <p className={pClass}>
            ההבדל הזה חשוב, משום ששני התסמינים יכולים להיות קשורים למנגנונים שונים ולכן גם
            ההערכה והטיפול אינם בהכרח זהים.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="leading-8 text-black">
              הטיפות מופיעות דווקא אחרי שסיימת להשתין? אם זרם השתן כבר נפסק ורק לאחר מכן מופיעות
              טיפות, ייתכן שמדובר בטפטוף לאחר השתנה.{" "}
              <Link
                href="/professional-info/post-micturition-dribble"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:underline"
              >
                לקריאה על טפטוף לאחר השתנה
              </Link>
            </p>
          </div>

          <h2 className={h2Class}>למה זה יכול לקרות?</h2>
          <p className={pClass}>
            טפטוף בסוף ההשתנה אינו מספר לנו בפני עצמו מה גורם לתופעה.
          </p>
          <p className={pClass}>
            תסמיני התרוקנות מהסוג הזה יכולים להופיע כאשר קיימת התנגדות לזרימת השתן, כאשר
            השלפוחית אינה מצליחה לשמר התרוקנות יעילה לאורך כל ההשתנה, או בשילוב של מספר גורמים.
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            אחת האפשרויות היא Bladder Outlet Obstruction&rlm;, חסימה או התנגדות במוצא השלפוחית.
            היא יכולה להיות קשורה, בין היתר, להגדלה שפירה של הערמונית, להיצרות של השופכה או
            להפרעה באזור צוואר השלפוחית.
            <Ref n={3} />
            <Ref n={5} />
            <Ref n={8} />
          </p>
          <p className={pClass}>
            אפשרות אחרת קשורה לתמונה של Underactive Bladder&rlm; או ל-Detrusor
            Underactivity&rlm;, וכאן חשוב להבדיל בין שני המושגים.
          </p>

          <h3 className={h3Class}>Underactive Bladder ו-Detrusor Underactivity, לא אותו דבר</h3>
          <p className={pClass}>
            Underactive Bladder&rlm;, בקיצור UAB&rlm;, מתאר תסמונת קלינית של תסמיני התרוקנות.
            היא יכולה לכלול זרם איטי או ממושך, קושי בהתרוקנות, צורך ללחוץ ותחושה שהשלפוחית אינה
            מתרוקנת היטב.
            <Ref n={2} />
          </p>
          <p className={pClass}>
            לעומת זאת, Detrusor Underactivity&rlm;, בקיצור DU&rlm;, מתארת תפקוד ירוד של שריר
            השלפוחית בזמן ההתרוקנות. ה-Detrusor&rlm; הוא השריר בדופן השלפוחית שאחראי ליצירת
            הלחץ הדרוש להתרוקנות, וב-DU&rlm; הכיווץ שלו אינו חזק מספיק או אינו נמשך מספיק זמן.
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            ההבדל משמעותי: אפשר לסבול מתסמינים שמתאימים ל-UAB&rlm; בלי שאפשר להסיק מכך שקיימת
            DU&rlm;. זרם חלש, השתנה ממושכת, צורך ללחוץ וטפטוף בסוף ההשתנה יכולים להופיע גם
            בחסימה של מוצא השלפוחית וגם ב-DU&rlm;, ולכן אי אפשר לאבחן DU&rlm; לפי התסמינים
            בלבד.
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            DU&rlm; היא אבחנה אורודינמית. כאשר נדרשת הבחנה בין חסימה של מוצא השלפוחית לבין
            DU&rlm;, הבדיקה הרלוונטית היא Pressure-Flow Study&rlm; במסגרת בדיקת אורודינמיקה,
            שבה מעריכים את הלחץ שנוצר בשלפוחית ביחס לזרימת השתן.
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            טפטוף בסוף ההשתנה יכול אפוא להיות אחד מתסמיני ההתרוקנות בתמונה רחבה יותר, אבל הוא
            אינו מספיק בפני עצמו כדי לקבוע UAB&rlm;, ובוודאי לא DU&rlm;.
          </p>
          <p className={pClass}>
            להרחבה על התסמונת:{" "}
            <Link
              href="/professional-info/underactive-bladder"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שלפוחית תת־פעילה בגברים: תסמינים, גורמים ובירור
            </Link>
          </p>
          <p className={pClass}>
            ולהרחבה על הממצא ועל אופן האבחנה שלו:{" "}
            <Link
              href="/professional-info/detrusor-underactivity"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              תת־פעילות הדטרוזור: מה זה ואיך מאבחנים
            </Link>
          </p>

          <h2 className={h2Class}>האם זה אומר שיש בעיה בערמונית?</h2>
          <p className={pClass}>לא בהכרח.</p>
          <p className={pClass}>
            הגדלה שפירה של הערמונית יכולה להיות קשורה לתסמיני התרוקנות, במיוחד בגברים מבוגרים,
            אבל היא אינה הסיבה היחידה.
            <Ref n={5} />
            <Ref n={8} />
          </p>
          <p className={pClass}>
            טפטוף בסוף ההשתנה יכול להופיע גם במצבים אחרים המשפיעים על מוצא השלפוחית, על השופכה
            או על תפקוד שריר השלפוחית. לכן עצם העובדה שהזרם הופך לטיפות בסוף ההשתנה אינה מספיקה
            כדי לקבוע שמקור הבעיה הוא הערמונית.
          </p>

          <h2 className={h2Class}>מתי כדאי לבצע בירור רפואי?</h2>
          <p className={pClass}>
            כאשר מדובר בתופעה קלה, יציבה ולא מטרידה, היא אינה בהכרח מצביעה על בעיה משמעותית.
          </p>
          <p className={pClass}>עם זאת, יש מקום לבירור כאשר הטפטוף:</p>
          <ul className={ulClass}>
            <li>חדש או הולך ומחמיר</li>
            <li>מופיע יחד עם זרם שתן חלש</li>
            <li>מלווה בקושי להתחיל להשתין</li>
            <li>מופיע עם זרם שנקטע ומתחדש</li>
            <li>דורש לחיצה כדי להתרוקן</li>
            <li>מלווה בתחושה שהשלפוחית אינה מתרוקנת</li>
            <li>מופיע יחד עם דם בשתן</li>
            <li>מלווה בדלקות חוזרות בדרכי השתן</li>
            <li>מופיע יחד עם אצירת שתן או קושי משמעותי בהתרוקנות</li>
          </ul>
          <p className={pClass}>
            המטרה של הבירור אינה לאבחן את הטפטוף, אותו מזהים לפי התיאור, אלא להבין האם קיים
            גורם שמשפיע על תפקוד ההתרוקנות.
            <Ref n={4} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>האם יש מקום לפיזיותרפיה של רצפת האגן?</h2>
          <p className={pClass}>כן, בחלק מהמקרים.</p>
          <p className={pClass}>
            חשוב רק לא להניח שכל טפטוף בסוף ההשתנה הוא בהכרח בעיה של רצפת האגן. בניגוד לטפטוף
            לאחר השתנה, שבו קיים קשר ישיר יותר לשתן שנותר בשופכה אחרי סיום ההשתנה, כאן הזרם עדיין
            נמשך ולכן ייתכנו גם גורמים הקשורים לשלפוחית או למוצא שלה.
            <Ref n={3} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            עם זאת, תסמיני מערכת השתן אינם תמיד מופיעים בבידוד. פיזיותרפיה יכולה להיות רלוונטית
            במיוחד כאשר קיימים במקביל:
          </p>
          <ul className={ulClass}>
            <li>טפטוף לאחר השתנה</li>
            <li>דחיפות או תכיפות</li>
            <li>קושי בתיאום שרירי רצפת האגן</li>
            <li>תסמיני רצפת אגן נוספים</li>
            <li>תמונה משולבת של תסמיני השתנה ותפקוד לא מיטבי של רצפת האגן</li>
          </ul>
          <p className={pClass}>
            במסגרת ההערכה ניתן לבדוק את יכולת הכיווץ וההרפיה של רצפת האגן, את הקואורדינציה של
            השרירים ואת הקשר בין תפקוד רצפת האגן לשאר התסמינים.
          </p>
          <p className={pClass}>
            במחקר אקראי שכלל 158 גברים עם הגדלה שפירה של הערמונית ועם שלפוחית רגיזה, הוספת תרגול
            שרירי רצפת האגן וטכניקת דיכוי דחיפות לטיפול התרופתי שיפרה את התסמינים יותר מהטיפול
            התרופתי לבדו. עם זאת, מדובר בשיפור בתסמיני אחסון ובציון הכללי, והראיות הישירות
            לטיפול בטפטוף בסוף ההשתנה כתסמין מבודד עדיין מוגבלות.
            <Ref n={6} />
            <Ref n={7} />
          </p>
          <p className={pClass}>
            לכן הטיפול מותאם לתמונה הקלינית ולא לעצם קיומו של הטפטוף.
          </p>

          <h2 className={h2Class}>אז מה קודם, בירור אורולוגי או פיזיותרפיה?</h2>
          <p className={pClass}>זה תלוי בתמונה.</p>
          <p className={pClass}>
            כאשר טפטוף בסוף ההשתנה הוא התסמין המרכזי, במיוחד אם הוא מלווה בזרם חלש, בקושי
            בהתרוקנות, בצורך ללחוץ או בתחושה שהשלפוחית אינה מתרוקנת, יש מקום לבירור רפואי של
            תפקוד מערכת ההתרוקנות.
          </p>
          <p className={pClass}>
            כאשר קיימים במקביל גם תסמינים שמתאימים למעורבות של רצפת האגן, פיזיותרפיה יכולה
            להשתלב כחלק מההערכה והטיפול.
          </p>
          <p className={pClass}>
            המטרה אינה לבחור אוטומטית בין אורולוגיה לפיזיותרפיה, אלא להבין מהו התסמין, אילו
            תסמינים נוספים קיימים ומהם הגורמים שעשויים להיות רלוונטיים.
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
            intro="אם הטפטוף מלווה בתסמיני השתנה נוספים, ניתן לבדוק בהערכה האם קיים מרכיב של רצפת האגן, ומה כדאי לברר לפני כן."
            whatsappText="היי רועי, קראתי אצלך הסבר על TD, ואשמח לבדוק אם הטיפול מתאים לי."
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
              D&apos;Ancona C, Haylen B, Oelke M, et al. The International Continence Society (ICS)
              report on the terminology for adult male lower urinary tract and pelvic floor symptoms
              and dysfunction. Neurourol Urodyn. 2019;38(2):433-477. doi:
              <a
                href="https://doi.org/10.1002/nau.23897"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.23897
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Chapple CR, Osman NI, Birder L, et al. Terminology report from the International
              Continence Society (ICS) Working Group on Underactive Bladder (UAB). Neurourol Urodyn.
              2018;37(8):2928-2931. doi:
              <a
                href="https://doi.org/10.1002/nau.23701"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.23701
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Drake MJ, Williams J, Bijos DA. Voiding dysfunction due to detrusor underactivity: an
              overview. Nat Rev Urol. 2014;11(8):454-464. doi:
              <a
                href="https://doi.org/10.1038/nrurol.2014.156"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/nrurol.2014.156
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Clement KD, Burden H, Warren K, et al. Invasive urodynamic studies for the management
              of lower urinary tract symptoms (LUTS) in men with voiding dysfunction. Cochrane
              Database Syst Rev. 2015;2015(4):CD011179. doi:
              <a
                href="https://doi.org/10.1002/14651858.CD011179.pub2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/14651858.CD011179.pub2
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Takeda M, Araki I, Kamiyama M, et al. Diagnosis and treatment of voiding symptoms.
              Urology. 2003;62(5 Suppl 2):11-19.
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Albakr A, El Ansari W, Mahdi M, et al. Postmicturition dribble in men with no previous
              urogenital surgery: systematic review and meta-analysis of treatment modalities.
              Neurourol Urodyn. 2024;43(7):1686-1698. doi:
              <a
                href="https://doi.org/10.1002/nau.25337"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.25337
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Hagovska M, Svihra J Sr, Macko L, et al. The effect of pelvic floor muscle training in
              men with benign prostatic hyperplasia and overactive bladder. World J Urol.
              2024;42(1):287. doi:
              <a
                href="https://doi.org/10.1007/s00345-024-04974-7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s00345-024-04974-7
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Thorpe A, Neal D. Benign prostatic hyperplasia. Lancet. 2003;361(9366):1359-1367.
            </li>
          </ol>

          <AuthorBox />
        </div>
      </Container>
    </article>
  );
}
