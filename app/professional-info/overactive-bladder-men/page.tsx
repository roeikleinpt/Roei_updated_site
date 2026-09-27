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

const article = getArticle("overactive-bladder-men");

export const metadata: Metadata = {
  title: "שלפוחית רגיזה בגברים (OAB): תסמינים, בירור וטיפול פיזיותרפי",
  description:
    "דחיפות שקשה לדחות, תכיפות וקימה בלילה. מה מבדיל שלפוחית רגיזה מגורמים אחרים לתכיפות, מה הקשר לערמונית, מה נבדק בהערכה ומה באמת ידוע על הטיפול ההתנהגותי והפיזיותרפי.",
  alternates: { canonical: "/professional-info/overactive-bladder-men" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "שלפוחית רגיזה בגברים (OAB) | רועי קליין פיזיותרפיה",
    description:
      "תסמונת שמבוססת על תסמינים ולא על בדיקה אחת. אבחנה מבדלת, מה אומרים הנתונים על גברים צעירים, ומה מקומו של הטיפול ההתנהגותי.",
    url: "/professional-info/overactive-bladder-men",
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
    q: "האם שלפוחית רגיזה אומרת שיש לי בעיה בערמונית?",
    a: "לא. שלפוחית רגיזה יכולה להופיע גם ללא הגדלה של הערמונית וללא חסימה. אצל גברים מבוגרים השניים יכולים להופיע יחד, אבל הם אינם אותו דבר, ובגבר צעיר אין סיבה להניח שהערמונית היא המקור.",
  },
  {
    q: "האם צריך בדיקה אורודינמית כדי לאבחן?",
    a: "בדרך כלל לא. לפי ההנחיות, ההערכה הראשונית כוללת תשאול, בדיקה גופנית ובדיקת שתן. אורודינמיקה, ציסטוסקופיה והדמיה אינן חלק מבירור שגרתי של שלפוחית רגיזה לא מסובכת.",
  },
  {
    q: "האם כל תכיפות היא שלפוחית רגיזה?",
    a: "לא. שתייה מרובה, ייצור שתן מוגבר, זיהום, הפרעות שינה או חסימה במוצא השלפוחית יכולים כולם לגרום להשתנה תכופה. בשלפוחית רגיזה המרכיב המרכזי הוא הדחיפות, ולא מספר הפעמים בלבד.",
  },
  {
    q: "האם זה קיים גם אצל גברים צעירים?",
    a: "כן, אם כי פחות. בנתוני סקר לאומי בארצות הברית השכיחות בבני 20 עד 39 הייתה כ-4.5%, לעומת כ-13.5% בבני 40 עד 59 וכ-29.1% בבני 60 ומעלה.",
  },
  {
    q: "האם פיזיותרפיה עוזרת, או שצריך תרופות?",
    a: "בניסוי אקראי בגברים שתסמיני השלפוחית הרגיזה שלהם נמשכו למרות טיפול בחוסם אלפא, טיפול התנהגותי שכלל תרגול רצפת האגן, טכניקות לדיכוי דחיפות ודחיית השתנה היה שקול סטטיסטית לטיפול התרופתי. בשתי הקבוצות הטיפול ההתנהגותי או התרופתי ניתן בתוספת לחוסם אלפא ולא במקומו.",
  },
  {
    q: "האם הטיפול הוא חיזוק רצפת האגן?",
    a: "לא בהכרח. אין ראיות שגברים עם שלפוחית רגיזה סובלים באופן כללי מחולשה של רצפת האגן. אצל חלק מהמטופלים דווקא קושי בהרפיה או בתיאום הוא הרלוונטי, ולכן ההחלטה מתבססת על ההערכה ולא על הנחה.",
  },
];

export default function OveractiveBladderMenArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            שלפוחית רגיזה בגברים (OAB): תסמינים, בירור וטיפול פיזיותרפי
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            שלפוחית רגיזה, באנגלית Overactive Bladder&rlm; ובקיצור OAB&rlm;, היא תסמונת
            שהמאפיין המרכזי שלה הוא דחיפות: צורך פתאומי וקשה להתאפק להשתין. הדחיפות מלווה
            בדרך כלל בתכיפות, לעיתים גם בקימה בלילה, ויכולה להופיע עם דליפת שתן או בלעדיה.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            נקודה אחת חשובה כבר בהתחלה: זו אבחנה שמבוססת על תסמינים. בדיקה אורודינמית אינה
            נדרשת כדי לקבוע שאדם סובל מ-OAB&rlm;, וממצא של התכווצויות לא רצוניות של שריר
            השלפוחית בבדיקה, Detrusor Overactivity&rlm;, אינו זהה ל-OAB&rlm;.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            האבחנה נעשית לאחר ששוללים זיהום בדרכי השתן או גורם ברור אחר שיכול להסביר את
            התסמינים.
            <Ref n={2} />
          </p>

          <ArticleFigure
            src="/professional-info/oab-symptoms.webp"
            alt="תרשים של שלפוחית רגיזה בגברים: דחיפות כתסמין המרכזי, ולצדה תכיפות, נוקטוריה ודליפה מדחיפות"
            caption="הדחיפות היא התסמין המרכזי בשלפוחית רגיזה. תכיפות, קימה בלילה ודליפת שתן יכולות להתלוות אליה, אך אינן חייבות להופיע כולן."
          />

          <h2 className={h2Class}>האם זה קיים גם אצל גברים צעירים?</h2>
          <p className={pClass}>כן, אם כי פחות.</p>
          <p className={pClass}>
            מחקר שהתבסס על נתוני סקר לאומי בארצות הברית וכלל 18,386 גברים בני 20 ומעלה מצא
            שבשנים 2015 עד 2020 השכיחות בכלל הגברים הייתה כ-14.5%. בחלוקה לפי גיל היא הייתה
            כ-4.5% בבני 20 עד 39, כ-13.5% בבני 40 עד 59 וכ-29.1% בבני 60 ומעלה.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            כלומר השכיחות עולה משמעותית עם הגיל, אבל התופעה קיימת גם בגברים צעירים. לאורך תקופת
            המחקר נצפתה עלייה בולטת במיוחד בקבוצת בני 40 עד 59.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            בהקשר רחב יותר, סקירה שהתמקדה בתסמיני דרכי שתן תחתונות בגברים צעירים מצאה שכמחצית
            מהם מדווחים על תסמינים כלשהם, ושתסמיני אגירה כמו תכיפות ודחיפות שכיחים אצלם כמעט
            פי שניים מתסמיני חסימה. חשוב לא לתרגם את זה אוטומטית לאבחנה: תסמיני אגירה אינם שווי
            ערך ל-OAB&rlm;, ולכן האבחנה המבדלת נשארת רלוונטית.
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>האם זו פשוט בעיה בערמונית?</h2>
          <p className={pClass}>לא.</p>
          <p className={pClass}>
            אצל גברים, תסמינים של שלפוחית רגיזה יכולים להופיע יחד עם הגדלה שפירה של הערמונית או
            עם חסימה במוצא השלפוחית, בעיקר בגיל מבוגר יותר. חסימה כזו יכולה לגרום גם לתסמיני
            אגירה כמו דחיפות ותכיפות.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            אבל השניים אינם אותו דבר. OAB&rlm; יכולה להופיע גם ללא הגדלת ערמונית וללא חסימה,
            ובגבר צעיר אין סיבה להניח מראש שהערמונית היא מקור התסמינים.
            <Ref n={1} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>לא כל תכיפות היא שלפוחית רגיזה</h2>
          <p className={pClass}>
            השתנה תכופה יכולה לנבוע ממגוון סיבות. שתייה מרובה, ייצור מוגבר של שתן, זיהום בדרכי
            השתן, הפרעות שינה או חסימה במוצא השלפוחית יכולים כולם לגרום לכך שאדם משתין לעיתים
            קרובות יותר.
          </p>
          <p className={pClass}>
            גם קימה בלילה כדי להשתין, נוקטוריה או Nocturia&rlm;, אינה מעידה בפני עצמה על
            שלפוחית רגיזה.
          </p>
          <p className={pClass}>
            להרחבה על הקימה בלילה ועל הגורמים לה:{" "}
            <Link
              href="/professional-info/nocturia-men"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              קימה בלילה להשתין בגברים (Nocturia): גורמים ובירור
            </Link>
          </p>
          <p className={pClass}>
            אצל גבר שמתאר בעיקר זרם חלש, קושי להתחיל להשתין, צורך ללחוץ בזמן ההשתנה או תחושת
            התרוקנות לא מלאה, יש מקום לשקול גם בעיית התרוקנות או חסימה ולא לייחס את התסמינים
            אוטומטית לשלפוחית רגיזה.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            להרחבה על תמונת התסמינים הזו:{" "}
            <Link
              href="/professional-info/underactive-bladder"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שלפוחית תת־פעילה בגברים: תסמינים, גורמים ובירור
            </Link>
          </p>

          <ArticleFigure
            src="/professional-info/oab-differential-diagnosis.webp"
            alt="טבלה שמשווה בין שלפוחית רגיזה, שתייה מרובה, נוקטוריה, חסימה או הגדלת ערמונית וזיהום בדרכי השתן, ומה בולט בכל אחד מהם"
            caption="תכיפות יכולה לנבוע ממספר גורמים. בשלפוחית רגיזה הדחיפות היא המרכיב המרכזי, ולכן חשוב להסתכל על מכלול התסמינים ולא רק על מספר הפעמים."
          />

          <p className={pClass}>
            עד כמה קשה להבחין ביניהם לפי התיאור בלבד? במחקר שבחן 128 גברים צעירים עם תסמיני דרכי
            שתן שהופנו לבדיקה אורודינמית, האבחנה הקלינית השתנתה אצל 52.3% מהם לאחר הבדיקה.
            מדובר באוכלוסייה נבחרת שכבר הופנתה לבירור, ולכן אי אפשר להסיק מכך שיעור כללי, אבל זה
            ממחיש שהתסמינים לבדם אינם מזהים היטב את המנגנון.
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>מה גורם לשלפוחית רגיזה?</h2>
          <p className={pClass}>לא תמיד ניתן לזהות סיבה אחת.</p>
          <p className={pClass}>
            התופעה יכולה להיות קשורה למגוון גורמים ומצבים, ובהם גיל, חסימה במוצא השלפוחית, מצבים
            נוירולוגיים, סוכרת וגורמים מטבוליים. גם הרגלי שתייה יכולים להשפיע על חומרת
            התסמינים: צריכה גדולה של נוזלים או של קפאין יכולה להגביר תכיפות ודחיפות אצל חלק
            מהאנשים.
            <Ref n={1} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            במצבים נוירולוגיים כגון טרשת נפוצה, מחלת פרקינסון או פגיעה בחוט השדרה, תסמיני
            הדחיפות מסווגים במסגרת הפרעה נוירוגנית של דרכי השתן ולא כ-OAB&rlm; אידיופתי.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>האם ישיבה ממושכת ועבודה משרדית קשורות ל-OAB?</h2>
          <p className={pClass}>
            עבודה ממושכת בישיבה היא חלק מהיום-יום של רבים מהעובדים במקצועות משרדיים, בהייטק
            ובהנדסה. כיום אין מחקרים שמראים שעבודה במקצועות אלה כשלעצמה גורמת לשלפוחית רגיזה,
            אך קיימות עדויות לכך שזמן ישיבה ממושך ואורח חיים יושבני קשורים לתסמינים של דרכי
            השתן בגברים.
          </p>
          <p className={pClass}>
            במחקר עוקבה גדול שכלל 69,795 גברים קוריאנים בגיל העמידה, ללא תסמינים משמעותיים
            בתחילת המעקב, ישיבה של 5 עד 9 שעות ביום הייתה קשורה לעלייה של כ-8% בסיכון להתפתחות
            תסמיני דרכי שתן תחתונות, בקיצור LUTS&rlm;, ו<span className="font-semibold">ישיבה
            של 10 שעות ומעלה</span> לעלייה של כ-15%, בהשוואה לפחות מחמש שעות ישיבה ביום. גם
            רמה נמוכה של פעילות גופנית הייתה קשורה לסיכון גבוה יותר.
            <Ref n={11} />{" "}
            חשוב לציין שהמחקר בחן LUTS&rlm; באופן כללי ולא OAB&rlm; באופן ספציפי.
          </p>
          <p className={pClass}>
            נתונים ישירים יותר ל-OAB&rlm; מגיעים ממחקר בקרב 923 עובדי מערכת בריאות, שבו עבודה
            יושבנית וגישה מוגבלת לשירותים נמצאו בין הגורמים שנקשרו באופן עצמאי ל-OAB&rlm; לאחר
            התאמה למשתנים נוספים.
            <Ref n={12} />{" "}
            עם זאת, מדובר במחקר חתך, ולכן הוא מצביע על קשר ואינו מוכיח שישיבה ממושכת או דחיית
            השתנה הן הגורם ל-OAB&rlm;. בנוסף, האוכלוסייה שנבדקה אינה מייצגת באופן ספציפי גברים
            צעירים העובדים בהייטק או במקצועות הנדסיים.
          </p>
          <p className={pClass}>
            עבור מי שמבלה שעות רבות מול מחשב, הפחתת זמן ישיבה רצוף, פעילות גופנית סדירה
            והימנעות מהרגל קבוע של דחיית השתנה למשך זמן ממושך הן התאמות סבירות באורח החיים, אך
            אינן מחליפות בירור כאשר קיימים דחיפות, תכיפות או תסמינים נוספים.
          </p>

          <h2 className={h2Class}>ומה לגבי רצפת האגן?</h2>
          <p className={pClass}>
            הקשר בין רצפת האגן לתסמיני שלפוחית רגיזה מורכב יותר מהאמירה ש&rdquo;רצפת האגן
            חלשה&ldquo;.
          </p>
          <p className={pClass}>
            שרירי רצפת האגן משתתפים בשליטה על מתן השתן, ובין היתר אפשר להשתמש בכיווץ שלהם כחלק
            מטכניקות להפחתת דחיפות ולעיכוב ההשתנה. עם זאת, אין כיום ראיות שמראות שגברים עם
            OAB&rlm; סובלים באופן כללי מחולשה של רצפת האגן.
          </p>
          <p className={pClass}>
            גם פעילות יתר של השרירים, קושי בהרפיה או תיאום לקוי יכולים להיות רלוונטיים בחלק
            מהמטופלים. קיים מחקר שמצא קשר בין פעילות יתר מיופאסציאלית של רצפת האגן לבין תכיפות
            ותחושת צורך מתמשכת להשתין, אך הוא בוצע בנשים בלבד ולכן אי אפשר להסיק ממנו שכל גבר עם
            תכיפות סובל מרצפת אגן מכווצת.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            המשמעות המעשית היא שטיפול ברצפת האגן אינו בהכרח חיזוק. לפני שמחליטים כיצד לטפל, יש
            להבין מה קורה אצל המטופל הספציפי מבחינת כוח, סבולת, תיאום, יכולת הרפיה ודפוסי
            השתנה.
          </p>

          <h2 className={h2Class}>איך מאבחנים?</h2>
          <p className={pClass}>
            ברוב המקרים אין צורך בבדיקות מורכבות כדי להתחיל. לפי הנחיות האיגוד האורולוגי
            האמריקאי, ההערכה הראשונית כוללת בראש ובראשונה שיחה מפורטת על התסמינים ועל ההיסטוריה
            הרפואית, בדיקה גופנית ובדיקת שתן.
            <Ref n={2} />
          </p>

          <h3 className={h3Class}>יומן שתייה והשתנה</h3>
          <p className={pClass}>
            אחד הכלים השימושיים ביותר הוא יומן של מספר ימים, שבו מתועדים זמני השתייה וההשתנה,
            נפחי השתן כאשר אפשר למדוד אותם, אירועי דחיפות או דליפה וקימות בלילה.
          </p>
          <p className={pClass}>
            היומן מסייע להבדיל בין תכיפות שנובעת מהרגלי שתייה או מייצור שתן מוגבר לבין דפוס
            שמתאים יותר ל-OAB&rlm;, וגם מאפשר לעקוב אחר השינוי במהלך הטיפול.
            <Ref n={2} />
          </p>

          <h3 className={h3Class}>שארית שתן לאחר התרוקנות</h3>
          <p className={pClass}>
            בחלק מהגברים יש מקום למדוד כמה שתן נותר בשלפוחית לאחר ההשתנה. הבדיקה רלוונטית במיוחד
            כאשר קיימים גם קושי בהתרוקנות, זרם חלש, היסטוריה של אצירת שתן, הגדלת ערמונית, מחלה
            נוירולוגית או גורמי סיכון אחרים.
            <Ref n={2} />
          </p>

          <h3 className={h3Class}>האם צריך אורודינמיקה?</h3>
          <p className={pClass}>
            בדרך כלל לא. אורודינמיקה, ציסטוסקופיה והדמיה אינן חלק מבירור שגרתי ראשוני של
            שלפוחית רגיזה לא מסובכת. בדיקות נוספות עשויות להיות רלוונטיות כאשר האבחנה אינה
            ברורה, כאשר קיימים סימני אזהרה או כאשר הטיפול אינו משיג את התוצאה הרצויה.
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>איך מטפלים?</h2>
          <p className={pClass}>
            אין טיפול אחד שמתאים לכל אדם. הטיפול יכול לכלול גישות התנהגותיות ושמרניות,
            פיזיותרפיה, טיפול תרופתי ובמקרים מסוימים טיפולים רפואיים נוספים.
          </p>

          <ArticleFigure
            src="/professional-info/oab-physiotherapy.webp"
            alt="ארבעה מרכיבים אפשריים בטיפול פיזיותרפי בשלפוחית רגיזה: דיכוי דחיפות, אימון שלפוחית, תפקוד רצפת האגן והתאמת הרגלי שתייה והשתנה"
            caption="פיזיותרפיה בשלפוחית רגיזה אינה מסתכמת בחיזוק. בהתאם לממצאים היא יכולה לכלול אימון שלפוחית, טכניקות לדיכוי דחיפות, עבודה על כיווץ והרפיה והתאמת הרגלים."
          />

          <h3 className={h3Class}>אימון שלפוחית</h3>
          <p className={pClass}>
            המטרה היא לשנות בהדרגה את התגובה לדחיפות ואת דפוסי ההשתנה. במקום ללכת לשירותים
            אוטומטית עם התחושה הראשונה, אפשר ללמוד אסטרטגיות לשליטה בדחיפות ולהגדיל בהדרגה את
            המרווח בין השתנות כאשר הדבר מתאים.
          </p>
          <p className={pClass}>
            סקירת Cochrane מצאה שאימון שלפוחית עשוי לשפר את התסמינים, אך איכות הראיות בחלק
            מההשוואות נמוכה או נמוכה מאוד.
            <Ref n={7} />
          </p>

          <h3 className={h3Class}>טכניקות לדיכוי דחיפות</h3>
          <p className={pClass}>
            כשמופיעה דחיפות חזקה, המטרה אינה בהכרח להגיע לשירותים מהר ככל האפשר. אפשר ללמוד
            אסטרטגיות שמפחיתות את עוצמת הדחיפות ומאפשרות תגובה מבוקרת יותר, ובהן שימוש מתאים
            בשרירי רצפת האגן ושינוי התגובה ההתנהגותית.
          </p>
          <p className={pClass}>
            בניסוי אקראי בגברים שתסמיני השלפוחית הרגיזה שלהם נמשכו למרות טיפול בחוסם אלפא,
            וללא חסימה במוצא השלפוחית, טיפול התנהגותי שכלל תרגול רצפת האגן, דיכוי דחיפות
            ודחיית השתנה היה שקול סטטיסטית לטיפול התרופתי.
            <Ref n={8} />{" "}
            מחקר אקראי נוסף מצא תועלת בהוספת תרגול שרירי רצפת האגן וטכניקות לדיכוי דחיפות
            לטיפול התרופתי, בגברים שסבלו במקביל מהגדלה שפירה של הערמונית ומשלפוחית רגיזה.
            <Ref n={9} />
          </p>

          <h3 className={h3Class}>ומה לגבי תרופות</h3>
          <p className={pClass}>
            כאשר הטיפול השמרני אינו מספיק, קיימות מספר אפשרויות תרופתיות, ובהן אנטימוסקריניים
            ואגוניסטים של קולטני בטא 3. בגברים עם תסמיני ערמונית או חסימה אפשר לשלב את הטיפול
            בהתאם לממצאים.
            <Ref n={2} />
            <Ref n={10} />
          </p>
          <p className={pClass}>
            במצבים שאינם משתפרים קיימות גם אפשרויות נוספות, כגון הזרקת בוטוליניום לשלפוחית, גירוי
            עצב הטיביאליס ונוירומודולציה סקרלית. בחירת הטיפול נעשית על ידי הרופא בהתאם לתסמינים,
            לממצאים, למחלות הרקע ולתופעות הלוואי האפשריות.
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>מתי כדאי לפנות לבירור רפואי?</h2>
          <p className={pClass}>תכיפות ודחיפות אינן תמיד שלפוחית רגיזה.</p>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              דם בשתן, זיהומים חוזרים בדרכי השתן, קושי משמעותי להתרוקן, אצירת שתן או שארית שתן
              גבוהה, זרם חלש משמעותית או צורך להתאמץ בהשתנה, שינוי נוירולוגי חדש, היסטוריה של
              ניתוח או קרינה באזור האגן, או שינוי משמעותי ובלתי מוסבר בדפוסי השתן, כל אלה
              מצדיקים בירור רפואי.
              <Ref n={2} />
            </p>
          </div>
          <p className={pClass}>
            גם כשאין סימן אזהרה, תסמינים שמפריעים לשינה, לעבודה, לספורט, לנסיעות או לחיי היום
            יום יכולים להצדיק הערכה וטיפול.
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
            heading="הדחיפות מכתיבה לך את היום?"
            intro="אם התכיפות והדחיפות מפריעות לשינה, לעבודה או לפעילות, ניתן לבצע הערכה של תפקוד רצפת האגן ושל דפוסי ההשתנה, ולבחון מה מתאים במקרה שלך."
            whatsappText="היי רועי, קראתי אצלך הסבר על OAB, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Cameron AP, Chung DE, Dielubanza EJ, et al. The AUA/SUFU guideline on the diagnosis
              and treatment of idiopathic overactive bladder. J Urol. 2024;212(1):11-20. doi:
              <a
                href="https://doi.org/10.1097/JU.0000000000003985"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/JU.0000000000003985
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Cheng Y, Chen T, Zheng G, et al. Prevalence and trends in overactive bladder among men
              in the United States, 2005-2020. Sci Rep. 2024;14(1):16284. doi:
              <a
                href="https://doi.org/10.1038/s41598-024-66758-8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41598-024-66758-8
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Beland L, Martin C, Han JS. Lower urinary tract symptoms in young men: causes and
              management. Curr Urol Rep. 2022;23(2):29-37. doi:
              <a
                href="https://doi.org/10.1007/s11934-022-01087-9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s11934-022-01087-9
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Manohar CS, Rajawat MS, Keshavamurthy R, Chouhan PK, Poonawala A. Urodynamic profile
              of lower urinary tract symptoms in young men: a testimony of the truth? Urol Ann.
              2022;14(3):215-217. doi:
              <a
                href="https://doi.org/10.4103/ua.ua_9_21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.4103/ua.ua_9_21
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Ackerman AL, Jackson NJ, Caron AT, et al. Myofascial urinary frequency syndrome is a
              novel syndrome of bothersome lower urinary tract symptoms associated with myofascial
              pelvic floor dysfunction. Sci Rep. 2023;13(1):18412. doi:
              <a
                href="https://doi.org/10.1038/s41598-023-44862-5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41598-023-44862-5
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Funada S, Yoshioka T, Luo Y, et al. Bladder training for treating overactive bladder
              in adults. Cochrane Database Syst Rev. 2023;10(10):CD013571. doi:
              <a
                href="https://doi.org/10.1002/14651858.CD013571.pub2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/14651858.CD013571.pub2
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
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
            <li id="ref-9" className="scroll-mt-24">
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
            <li id="ref-10" className="scroll-mt-24">
              Stoniute A, Madhuvrata P, Still M, et al. Oral anticholinergic drugs versus placebo or
              no treatment for managing overactive bladder syndrome in adults. Cochrane Database
              Syst Rev. 2023;5(5):CD003781. doi:
              <a
                href="https://doi.org/10.1002/14651858.CD003781.pub3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/14651858.CD003781.pub3
              </a>
              .
            </li>
            <li id="ref-11" className="scroll-mt-24">
              Park HJ, Park CH, Chang Y, Ryu S. Sitting time, physical activity and the risk of
              lower urinary tract symptoms: a cohort study. BJU Int. 2018;122(2):293-299. doi:
              <a
                href="https://doi.org/10.1111/bju.14147"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1111/bju.14147
              </a>
              .
            </li>
            <li id="ref-12" className="scroll-mt-24">
              Charnviboon P, Siriboonrid S, Binsri N, et al. Prevalence and risk factors of
              overactive bladder among military healthcare workers in an academic hospital in
              Thailand: implications for workplace productivity. Neurourol Urodyn.
              2026;45(1):137-144. doi:
              <a
                href="https://doi.org/10.1002/nau.70153"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.70153
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
