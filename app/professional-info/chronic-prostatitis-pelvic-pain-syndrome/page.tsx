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

const article = getArticle("chronic-prostatitis-pelvic-pain-syndrome");

export const metadata: Metadata = {
  title: "פרוסטטיטיס כרונית ותסמונת כאב אגן כרוני (CP/CPPS): מה ההבדל וכיצד מטפלים",
  description:
    "אצל מרבית הגברים עם תסמינים כרוניים שמקבלים את הכותרת פרוסטטיטיס לא נמצא זיהום חיידקי. מה ההבדל בין דלקת ערמונית כרונית חיידקית לבין CP/CPPS, כיצד מאבחנים, מה אומרות הנחיות ה־AUA ומה מקומה של האנטיביוטיקה.",
  alternates: { canonical: "/professional-info/chronic-prostatitis-pelvic-pain-syndrome" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "פרוסטטיטיס כרונית ותסמונת כאב אגן כרוני | רועי קליין פיזיותרפיה",
    description:
      "ההבחנה בין NIH Type II ל־Type III, היכן מורגש הכאב, מה נבדק באבחון, גישת הטיפול המותאם לפי הנחיות ה־AUA 2025 ומדוע אנטיביוטיקה חוזרת אינה התשובה.",
    url: "/professional-info/chronic-prostatitis-pelvic-pain-syndrome",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
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
    q: "האם CP/CPPS היא דלקת בערמונית?",
    a: "לא. המונח Chronic Prostatitis נשאר בשם התסמונת, אך CP/CPPS מוגדרת ללא זיהום חיידקי שמסביר את התסמינים. קיימת תת־אבחנה של פרוסטטיטיס כרוני (שנקראת Chronic Bacterial Prostatitis) שבה מוצאים חיידקים בבדיקות, אך כשמדובר על CPPS אין ממצא חיידקי.",
  },
  {
    q: "האם תרבית שתן שלילית מספיקה כדי לקבוע שיש CP/CPPS?",
    a: "לא. התרבית עוזרת לשלול זיהום, אבל האבחנה מבוססת על מכלול התסמינים, הבדיקה והשלילה של גורמים אחרים. כאשר קיימת אי־ודאות, אורולוג יכול להחליט אם יש צורך בבירור נוסף.",
  },
  {
    q: "האם הכאב חייב להיות באזור הערמונית?",
    a: "לא. כאב יכול להיות מורגש בפרינאום, בפין, באשכים, במפשעה, מעל עצם החיק, באזור פי הטבעת ולעיתים גם באזורים סמוכים.",
  },
  {
    q: "האם רצפת האגן מעורבת אצל כל מי שיש לו CP/CPPS?",
    a: "לא. אצל חלק מהמטופלים נמצאים כאב, רגישות או תפקוד לקוי של שרירי רצפת האגן, אך CP/CPPS היא תסמונת הטרוגנית ולא לכל מטופל יש אותו מנגנון.",
  },
];

export default function ChronicProstatitisArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            פרוסטטיטיס כרונית ותסמונת כאב אגן כרוני
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            פרוסטטיטיס כרונית, דלקת ערמונית כרונית, הוא מונח שמשמש לעיתים לתיאור כמה מצבים שונים,
            אף שלא בכולם קיימת דלקת חיידקית של הערמונית. בחלק קטן מהמקרים מדובר בדלקת ערמונית
            כרונית חיידקית, Chronic Bacterial Prostatitis&rlm;, שבה קיים זיהום חיידקי מתמשך של
            הערמונית ולעיתים זיהומים חוזרים בדרכי השתן. לעומת זאת, אצל מרבית הגברים עם תסמינים
            כרוניים שמקבלים את הכותרת &rdquo;פרוסטטיטיס&ldquo;, לא נמצא זיהום חיידקי שמסביר את
            הכאב. מצב זה נקרא Chronic Prostatitis / Chronic Pelvic Pain Syndrome&rlm;, או
            CP/CPPS&rlm;, ובעברית: תסמונת כאב אגן כרוני.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            ההבחנה חשובה, משום שמדובר בשני מצבים שונים מבחינת הבירור והטיפול.
          </p>

          <h2 className={h2Class}>פרוסטטיטיס חיידקית ו־CP/CPPS אינם אותו מצב</h2>
          <p className={pClass}>
            לפי הסיווג של ה־National Institutes of Health&rlm;, דלקת ערמונית כרונית חיידקית מוגדרת
            כ־NIH Type II&rlm;. מדובר בזיהום חיידקי של הערמונית, שלרוב מתבטא בזיהומים חוזרים בדרכי
            השתן ולעיתים ניתן לזהות את אותו חיידק שוב ושוב בתרביות.
            <Ref n={1} />
            <Ref n={4} /> לעומתה, CP/CPPS&rlm; מוגדרת כ־NIH Type III&rlm;. התסמין המרכזי הוא כאב
            או אי־נוחות באזור האגן או מערכת השתן והמין שנמשכים לאורך זמן, ללא עדות לזיהום חיידקי
            שמסביר אותם.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            חשוב לדייק: CP/CPPS&rlm; אינה בהכרח מצב &rdquo;ללא דלקת&ldquo;. הסיווג ההיסטורי מחלק
            אותה לשתי קבוצות:
          </p>
          <ul className={ulClass}>
            <li>
              <span className="font-semibold">Type IIIa&rlm;</span>, שבה נמצאים תאי דלקת בדגימות
              מסוימות.
            </li>
            <li>
              <span className="font-semibold">Type IIIb&rlm;</span>, שבה לא נמצאים תאים כאלה.
            </li>
          </ul>
          <p className={pClass}>
            לכן{" "}
            <span className="font-bold">
              ההבדל המרכזי בין CP/CPPS&rlm; לבין Chronic Bacterial Prostatitis&rlm; הוא קיומו של
              זיהום חיידקי מוכח, ולא עצם קיומה או היעדרה של דלקת
            </span>
            .<Ref n={4} />
            <Ref n={5} />
          </p>

          <ArticleFigure
            src="/professional-info/cpps-vs-bacterial-prostatitis.webp"
            alt="טבלת השוואה בין דלקת ערמונית כרונית חיידקית (NIH Type II) לבין תסמונת כאב אגן כרוני CP/CPPS (NIH Type III), לפי גורם עיקרי, בדיקות, תסמינים אופייניים, שכיחות וטיפול עיקרי"
            caption="בדלקת ערמונית כרונית חיידקית קיים זיהום חיידקי של הערמונית. ב־CP/CPPS התסמינים מופיעים ללא זיהום חיידקי שמסביר אותם, ולכן גם הגישה לטיפול שונה."
          />

          <h2 className={h2Class}>כיצד CP/CPPS יכולה להתבטא?</h2>
          <p className={pClass}>
            התסמינים משתנים מאדם לאדם ולא חייבים להופיע כולם יחד. כאב הוא המאפיין המרכזי, והוא
            עשוי להיות מורגש באזורים שונים: בפרינאום, האזור שבין שק האשכים לפי הטבעת; בפין; באשכים
            או בשק האשכים; באזור המפשעה; פי הטבעת; גב תחתון; בטן תחתונה ועוד.
          </p>
          <p className={pClass}>
            הכאב יכול להיות קבוע או להופיע לסירוגין. אצל חלק מהגברים הוא קשור לישיבה, למתן שתן,
            ליציאה או לפעילות מינית.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            בנוסף לכאב, עשויים להופיע תסמינים במערכת השתן, כגון תכיפות, דחיפות, זרם שתן חלש, קושי
            להתחיל להטיל שתן או תחושה שהשלפוחית אינה מתרוקנת במלואה. גם תסמינים הקשורים לתפקוד
            המיני יכולים להופיע. כאב בזמן או לאחר שפיכה הוא תסמין מוכר של CP/CPPS&rlm;, ובחלק
            מהמטופלים קיימים גם קשיים בזקפה או שינויים אחרים בתפקוד המיני.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <ArticleFigure
            src="/professional-info/cpps-anatomy-and-symptoms.webp"
            alt="איור אנטומי של אגן הגבר עם סימון שלפוחית השתן, הערמונית, השופכה, הפין והאשך, ולצידו חמישה תסמינים נפוצים ב־CP/CPPS: כאב בפרינאום, כאב בזמן או לאחר שפיכה, כאב או צריבה במתן שתן, כאב בפין או באשכים ותכיפות או דחיפות במתן שתן"
            caption="מבנה האגן הגברי והתסמינים השכיחים ב־CP/CPPS."
          />

          <h2 className={h2Class}>אז מה גורם לכאב אם אין זיהום?</h2>
          <p className={pClass}>
            אין כיום מנגנון יחיד שמסביר את כל המקרים של CP/CPPS&rlm;. המחקר מצביע על כך שמדובר
            בתסמונת הטרוגנית: אצל מטופלים שונים עשויים להיות מעורבים
            מנגנונים שונים, ולעיתים כמה מנגנונים יחד. בין הגורמים שנחקרו נמצאים שינויים בתפקוד
            מערכת העצבים ועיבוד הכאב, תגובות דלקתיות או חיסוניות, רגישות של מערכת השתן, גורמים
            שריריים ושלדיים ותפקוד לקוי של שרירי רצפת האגן.
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            אצל חלק מהגברים נמצאים כאב או רגישות בשרירי רצפת האגן, מצב המכונה Pelvic Floor
            Myalgia&rlm;. שרירים אלה יכולים להיות רגישים, לפעול בטונוס מוגבר או להתקשות בהרפיה
            ובקואורדינציה.
            <Ref n={2} />
            <Ref n={3} /> מציאת ממצא כזה אינה אומרת שרצפת האגן היא בהכרח הסיבה היחידה לכאב. היא כן
            יכולה להשפיע על בחירת הטיפול.
          </p>

          <h2 className={h2Class}>כיצד מאבחנים CP/CPPS&rlm;?</h2>
          <p className={pClass}>
            אין בדיקה אחת שמאבחנת את התסמונת. השלב הראשון הוא לוודא שאין מצב אחר שמסביר את
            התסמינים. ההערכה יכולה לכלול תשאול רפואי,
            בדיקה גופנית, בדיקת שתן ותרבית שתן. בהתאם לתסמינים ולממצאים ניתן לבדוק גם שארית שתן
            לאחר התרוקנות ולבצע בדיקות נוספות.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            כאשר יש קושי להבחין בין Chronic Bacterial Prostatitis&rlm; לבין CP/CPPS&rlm;, האורולוג
            יכול לשקול בדיקות המנסות לזהות האם החיידקים מקורם בערמונית, כגון בדיקת שתי כוסות או
            ארבע כוסות סביב עיסוי הערמונית.
            <Ref n={2} /> ציסטוסקופיה, אורודינמיקה או הדמיה אינן בדיקות שחייבים לבצע לכל אדם עם
            CP/CPPS&rlm;. הן נשקלות כאשר התמונה אינה ברורה או כאשר קיימת סיבה לחשוד בבעיה נוספת.
            <Ref n={2} />
          </p>
          <p className={pClass}>
            בבדיקה ניתן להעריך גם את שרירי רצפת האגן. הנחיות ה־American Urological Association&rlm;
            משנת 2025 כוללות מישוש של שרירי רצפת האגן דרך פי הטבעת כאשר יש צורך להעריך רגישות
            המתאימה ל־Pelvic Floor Myalgia&rlm;.
            <Ref n={2} /> בדיקה פנימית אינה בדיקה שפיזיותרפיסט חייב לבצע לכל מטופל. במסגרת טיפול
            פיזיותרפי היא נשקלת לפי הצורך הקליני, לאחר הסבר ובהסכמת המטופל.
          </p>

          <h2 className={h2Class}>כיצד מטפלים?</h2>
          <p className={pClass}>
            מאחר ש־CP/CPPS&rlm; אינה מחלה אחת עם גורם יחיד, גם הטיפול אינו אחיד.
          </p>
          <p className={pClass}>
            ה־AUA&rlm; ממליץ על גישה מותאמת לתסמינים ולממצאים של כל מטופל, ולעיתים על שילוב של כמה
            תחומי טיפול.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            לדוגמה, כאשר קיימים תסמיני השתנה מסוימים ניתן לשקול טיפול תרופתי מתאים דרך הרופא. כאשר
            קיימת מעורבות של מערכת הכאב או כאב נוירופתי ניתן לשקול אפשרויות טיפול אחרות. אצל גברים
            עם כאב, רגישות או תפקוד לקוי של שרירי רצפת האגן, פיזיותרפיה של רצפת האגן יכולה להיות
            חלק משמעותי מתוכנית הטיפול.
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            הטיפול עשוי לכלול גם התאמות בפעילות ובהרגלים, טיפול בהפרעות שינה, התייחסות למתח ולמצוקה
            כאשר הם משפיעים על הכאב, וגישות נוספות בהתאם לתמונה הקלינית.
            <Ref n={3} /> אין בכך לומר שהכאב &rdquo;פסיכולוגי&ldquo;. כאב כרוני מושפע ממערכות רבות
            בגוף, והערכת
            הגורמים הפסיכולוגיים והחברתיים היא חלק מהערכה רחבה של כאב כרוני, לצד הבירור האורולוגי,
            הנוירולוגי והשרירי־שלדי.
          </p>
          <p className={pClass}>
            להרחבה על תפקיד הפיזיותרפיה:{" "}
            <Link
              href="/professional-info/pelvic-floor-physiotherapy-cpps"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              פיזיותרפיה של רצפת האגן בפרוסטטיטיס כרונית וב־CP/CPPS
            </Link>
            .
          </p>

          <h2 className={h2Class}>ומה לגבי אנטיביוטיקה?</h2>
          <p className={pClass}>
            כאשר קיימת Chronic Bacterial Prostatitis&rlm;, אנטיביוטיקה היא חלק מרכזי מהטיפול
            הרפואי.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            ב־CP/CPPS&rlm;, לעומת זאת, אין זיהום חיידקי מוכח שמסביר את התסמינים.{" "}
            <span className="font-bold">
              הנחיות ה־AUA&rlm; אינן ממליצות על טיפול אנטיביוטי ממושך או חוזר באופן אמפירי כאשר
              התרביות שליליות
            </span>
            .<Ref n={3} /> מטופלים רבים מגיעים לאבחנה של CP/CPPS&rlm; לאחר מספר סבבי אנטיביוטיקה
            שלא הביאו לשיפור
            ממושך. במצב כזה חשוב לבדוק מחדש אם מדובר בכלל בזיהום ולא להניח שכל כאב באזור הערמונית
            הוא &rdquo;דלקת&ldquo;.
            <Ref n={1} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>מתי חשוב לפנות לבירור רפואי?</h2>
          <p className={pClass}>
            CP/CPPS&rlm; היא אבחנה שנקבעת לאחר הערכה ושלילת גורמים אחרים. תסמינים מסוימים מחייבים
            בירור רפואי ולא נכון לייחס אותם באופן אוטומטי לתסמונת כאב כרוני.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              יש לפנות לבירור ללא דיחוי במקרה של חום או צמרמורות עם תסמיני שתן או כאב אגני, חוסר
              יכולת להטיל שתן, דם נראה לעין בשתן, מסה או נפיחות חדשה באשך, חולשה או ירידה חדשה
              בתחושה ברגליים, אובדן שליטה חדש על שתן או צואה, או החמרה מהירה ולא מוסברת.
            </p>
          </div>

          <h2 className={h2Class}>שורה תחתונה</h2>
          <p className={pClass}>
            המונח &rdquo;פרוסטטיטיס כרונית&ldquo; עלול ליצור רושם שכל כאב כרוני באזור האגן נובע
            מדלקת של הערמונית. בפועל קיימת הבחנה חשובה בין Chronic Bacterial Prostatitis&rlm;, שבה
            יש זיהום חיידקי של
            הערמונית, לבין Chronic Prostatitis / Chronic Pelvic Pain Syndrome&rlm; (CP/CPPS&rlm;),
            שבה קיימים כאב ותסמינים נוספים ללא זיהום חיידקי שמסביר אותם.
          </p>
          <p className={pClass}>
            ב־CP/CPPS&rlm; הטיפול נקבע לפי התסמינים והממצאים של כל מטופל. כאשר נמצאים כאב, רגישות
            או תפקוד לקוי של שרירי רצפת האגן, יש מקום לשקול הערכה וטיפול פיזיותרפי כחלק מהגישה
            הכוללת.
          </p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              כאב אגני שנמשך חודשים, אחרי שהתרביות חזרו נקיות ומספר סבבי אנטיביוטיקה לא עזרו, מצדיק
              הערכה מסוג אחר. בבדיקה בוחנים אם שרירי רצפת האגן מעורבים בתמונה ומה יכול להשתלב
              בתוכנית הטיפול.
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
              Borgert BJ, Wallen EM, Pham MN. Prostatitis: A Review. JAMA. 2025;334(11):1003-1013.
              doi:
              <a
                href="https://doi.org/10.1001/jama.2025.11499"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1001/jama.2025.11499
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Lai HH, Pontari MA, Argoff CE, et al. Male Chronic Pelvic Pain: AUA Guideline: Part I
              Evaluation and Management Approach. J Urol. 2025;214(2):116-126. doi:
              <a
                href="https://doi.org/10.1097/JU.0000000000004564"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/JU.0000000000004564
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Lai HH, Pontari MA, Argoff CE, et al. Male Chronic Pelvic Pain: AUA Guideline: Part II
              Treatment of Chronic Prostatitis/Chronic Pelvic Pain Syndrome. J Urol.
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
            <li id="ref-4" className="scroll-mt-24">
              Krieger JN, Nyberg L Jr, Nickel JC. NIH Consensus Definition and Classification of
              Prostatitis. JAMA. 1999;282(3):236-237. doi:
              <a
                href="https://doi.org/10.1001/jama.282.3.236"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1001/jama.282.3.236
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Krieger JN, Ross SO, Penson DF, Riley DE. Symptoms and Inflammation in Chronic
              Prostatitis/Chronic Pelvic Pain Syndrome. Urology. 2002;60(6):959-963. doi:
              <a
                href="https://doi.org/10.1016/S0090-4295(02)01963-5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/S0090-4295(02)01963-5
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
