import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import AuthorBox from "../../components/AuthorBox";
import ArticleFaq from "../../components/ArticleFaq";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";
import { asset } from "../../basePath";

const article = getArticle("chronic-testicular-pain-orchialgia-cscp");

export const metadata: Metadata = {
  title: "כאב אשכים כרוני: Orchialgia ו-CSCP",
  description:
    "כאב אשכים כרוני, Orchialgia או CSCP, עשוי להיות מקומי או מוקרן. מה בודקים, אילו גורמים יש לשלול ומתי הערכת רצפת האגן עשויה להתאים.",
  alternates: { canonical: "/professional-info/chronic-testicular-pain-orchialgia-cscp" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "כאב אשכים כרוני: Orchialgia ו-CSCP | רועי קליין פיזיותרפיה",
    description: "כאב אשכים כרוני: סיבות אפשריות, בדיקה ודרכי טיפול.",
    url: "/professional-info/chronic-testicular-pain-orchialgia-cscp",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const ulClass = "mt-4 list-disc space-y-1 pr-6 leading-8 text-black";

// שאלות נפוצות לעמוד — מוצגות לפני המקורות וגם כ-FAQPage schema.
const faqItems = [
  {
    q: "מה עושים כאשר הבדיקות אצל האורולוג לא מצאו סיבה לכאב באשך?",
    a: "בכ־25% עד 50% מהמקרים של כאב אשכים כרוני לא נמצאת סיבה מקומית ברורה. מצב זה אינו אומר שהכאב אינו אמיתי או שאינו ניתן לטיפול. לאחר שנשללו גורמים רפואיים אחרים, ניתן לבדוק גם את הגב, הבטן, האגן, הירכיים ורצפת האגן.",
  },
  {
    q: "מתי כאב באשך מחייב פנייה דחופה?",
    a: "כאב חד, פתאומי או חזק באשך מחייב בדיקה רפואית דחופה. יש לפנות למוקד או לחדר מיון גם כאשר מופיעים נפיחות חדשה, בחילה או הקאה, חום, שינוי במנח האשך, מסה חדשה או החמרה מהירה.",
  },
  {
    q: "האם כאב באשך לאחר ווסקטומי (vasectomy) או ניתוח בקע יכול להיות קשור לניתוח?",
    a: "כן. כאב מתמשך לאחר ווסקטומי, ניתוח בקע מפשעתי או ניתוח אחר באזור עשוי להיות קשור לצלקת, לעצבים במפשעה או לשרירי רצפת האגן. לצד הבירור הרפואי, לעיתים נדרשת הערכה רחבה של האזור ולא רק של האשך.",
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

export default function ChronicTesticularPainArticle() {
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
            כאב אשכים כרוני: סיבות אפשריות, בדיקה ודרכי טיפול
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאב מתמשך באשך או בשק האשכים יכול להשפיע על ישיבה, הליכה, פעילות גופנית, עבודה,
            שינה ותפקוד מיני.
          </p>
          <p className={pClass}>
            לעיתים קיימת סיבה רפואית ברורה. במקרים אחרים הכאב נמשך גם לאחר שלא נמצאה בעיה
            מקומית שמסבירה אותו במלואו. לכן הערכת כאב כרוני צריכה להיות רחבה ולכלול, לצד
            הבירור האורולוגי, גם את המפשעה, הבטן, הגב, האגן, מערכת העצבים ורצפת האגן.
          </p>

          {/* תיבת אזהרה רפואית — דגלים אדומים שאינם מתאימים להמתנה לטיפול שמרני */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-bold text-slate-900">חשוב לדעת</h2>
            <p className="mt-3 leading-7 text-slate-700">
              המידע בעמוד זה הוא כללי ואינו מהווה ייעוץ רפואי, אבחון או תחליף לבדיקה רפואית.
            </p>
            <p className="mt-2 leading-7 text-slate-700">
              כאב חד, פתאומי או חזק באשך אינו נחשב לכאב כרוני ואין להמתין איתו לתור
              לפיזיותרפיה.
            </p>
            <p className="mt-2 leading-7 text-slate-700">
              במקרה של כאב חריף, נפיחות חדשה, בחילה, הקאה, שינוי במנח האשך, חום, מסה חדשה או
              החמרה מהירה, יש לפנות ללא דיחוי למרפאתך או למוקד רפואי דחוף.
            </p>
            <p className="mt-2 leading-7 text-slate-700">
              כאשר מדובר בכאב מתמשך שאינו חריף (אקוטי), לאחר בדיקה רפואית ושלילת מצבים
              הדורשים טיפול אחר, ניתן ליצור קשר לבירור התאמה להערכה פיזיותרפית.
            </p>
          </div>

          <h2 className={h2Class}>מהו כאב כרוני באזור האשך ושק האשכים?</h2>
          <p className={pClass}>
            כאב באשך מתואר בספרות במונח Orchialgia. כאשר הכאב ממושך, נעשה שימוש גם במונח
            Chronic Orchialgia, כלומר כאב אשך כרוני.
          </p>
          <p className={pClass}>
            מונח רחב יותר הוא Chronic Scrotal Content Pain, או CSCP, המתייחס לכאב כרוני שעשוי
            להיות מורגש באשך, באפידידימיס או בחבל הזרע (המבנה שבו עוברים צינור הזרע, כלי הדם
            והעצבים). ההגדרה המקובלת מתייחסת לכאב שנמשך
            לפחות שלושה חודשים ומפריע לפעילות היום־יומית.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            הכאב יכול להיות קבוע או להופיע לסירוגין. בספרות דווח כי כאב כרוני באזור זה אחראי
            לכ־2.5% עד 4.8% מהפניות למרפאות אורולוגיות.
            <Ref n={3} />
          </p>
          <h2 className={h2Class}>כיצד הכאב עשוי להתבטא?</h2>
          <ul className={ulClass}>
            <li>כאב באשך או בשק האשכים.</li>
            <li>רגישות באפידידימיס.</li>
            <li>רגישות לאורך חבל הזרע.</li>
            <li>כאב שמופיע ונעלם.</li>
            <li>כאב המוחמר בישיבה, במגע או בפעילות.</li>
            <li>רגישות יתר באזור המפשעה.</li>
            <li>תחושת שריפה, דקירה או גירוי.</li>
            <li>כאב המוקרן מאזור אחר.</li>
          </ul>
          <p className={pClass}>
            אופי הכאב ומיקומו אינם מספיקים לבדם לקביעת המקור. ההערכה צריכה לכלול תשאול ובדיקה
            גופנית, ובדיקות נוספות בהתאם לתסמינים ולממצאים.
            <Ref n={1} />
            <Ref n={3} />
          </p>
          <h2 className={h2Class}>אילו גורמים צריך לשלול?</h2>
          <ul className={ulClass}>
            <li>דלקת באפידידימיס או באשך.</li>
            <li>וריקוצלה, הרחבת ורידים בשק האשכים.</li>
            <li>הידרוצלה, הצטברות נוזל סביב האשך.</li>
            <li>מסה באשך.</li>
            <li>כאב לאחר חבלה.</li>
            <li>
              כאב לאחר כריתת צינור הזרע, ניתוח לתיקון בקע מפשעתי או התערבות ניתוחית אחרת
              באזור.
            </li>
            <li>חסימה או ציסטה באפידידימיס.</li>
            <li>כאב מוקרן ממערכת השתן, מהבטן, מהמפשעה או מהגב.</li>
          </ul>
          <p className={pClass}>
            הבירור צריך להיות מותאם להיסטוריה הרפואית ולבדיקה. לא כל מטופל נדרש לעבור את כל
            הבדיקות האפשריות.
            <Ref n={1} />
            <Ref n={3} />
          </p>
          <h2 className={h2Class}>עד כמה שכיח שלא נמצאת סיבה ברורה בבירור הרפואי?</h2>
          <p className={pClass}>
            סקירה שעסקה בשכיחות (כמה נפוצה התופעה) ובהערכה של כאב אשכים כרוני העריכה כי
            בכ־25% עד 50% מהמקרים לא נמצאת סיבה ברורה. מקרים כאלה מתוארים לעיתים ככאב
            אידיופתי.
            <Ref n={3} /> המונח &quot;אידיופתי&quot; אינו אומר שהכאב אינו אמיתי או שאין אפשרות לטפל
            בו. הוא מציין שלא זוהתה בעיה שמסבירה את מלוא התסמינים.
          </p>
          <figure className="mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/professional-info/chronic-scrotal-content-pain-cscp.webp")}
              alt="אינפוגרפיקה: תסמונת Chronic Scrotal Content Pain ‏(CSCP) — ההקשר האנטומי והתמונה הקלינית של כאב אשכים כרוני"
              className="mx-auto h-auto w-full rounded-2xl ring-1 ring-slate-200"
            />
          </figure>
          <h2 className={h2Class}>מה נמצא בקרב גברים צעירים?</h2>
          <p className={pClass}>
            מחקר ישראלי בחן את תיקיהם של 382,036 גברים צעירים. אצל 3,084 מהם, כ־0.8%, תועד
            כאב בשק האשכים שנמשך יותר מ־14 יום.
            <Ref n={4} /> וריקוצלה הייתה הממצא השכיח ביותר ונמצאה אצל 54.1% מהמטופלים. ממצאים
            נוספים כללו בקע מפשעתי, זיהום באיברי המין, הידרוצלה וכאב מוקרן. ב־34.4% מהמקרים
            לא זוהתה סיבה מסוימת.
            <Ref n={4} />
          </p>
          <p className={`${pClass} font-bold`}>
            כל מטופל פנה לרופא בממוצע 5.3 פעמים בשל התלונה, בטווח של פנייה אחת עד 37 פניות.
            <Ref n={4} />
          </p>
          <p className={pClass}>
            המחקר הגדיר כאב שנמשך יותר מ־14 יום, בעוד שהגדרת CSCP המקובלת מתייחסת בדרך כלל
            לשלושה חודשים. לכן הנתונים אינם מתארים בדיוק את אותה אוכלוסייה, אך הם ממחישים את
            האופי החוזר והמורכב של התלונה.
          </p>
          <h2 className={h2Class}>הדרך לבירור עלולה להיות ארוכה</h2>
          <p className={pClass}>
            סקירה שפורסמה בשנת 2016 דיווחה כי במחקרים קודמים מטופלים עם כאב אשכים כרוני עברו
            בממוצע 4.7 עד 7.2 הליכי בירור וכ־1.6 הליכים ניתוחיים.
            <Ref n={5} /> הנתונים נשענים בין היתר על מחקרים ישנים משנות התשעים, ולכן אין
            להציגם כתיאור מדויק של מסלול הטיפול כיום. הם כן ממחישים כיצד כאב מתמשך ללא ממצא
            ברור עלול להוביל לבדיקות ולהתערבויות חוזרות.
            <Ref n={5} />
            <Ref n={6} />
          </p>
          <h2 className={h2Class}>האם הכאב תמיד מגיע מהאשך?</h2>
          <p className={pClass}>לא בהכרח.</p>
          <p className={pClass}>
            כאב המורגש באשך יכול להיות כאב מוקרן שמקורו באזור אחר. בספרות תוארו מקורות
            אפשריים בעמוד השדרה, בבטן, במערכת השתן, במפשעה וברקמות האגן.
            <Ref n={1} />
            <Ref n={3} />
            <Ref n={7} /> גם השרירים והעצבים באזור רצפת האגן עשויים להיות מעורבים אצל חלק
            מהמטופלים. לכן, כאשר הבירור המקומי אינו מסביר את התסמינים במלואם, עשויה להיות
            חשיבות לבחינת הגב, הירכיים, הבטן, האגן ורצפת האגן.
            <Ref n={1} />
            <Ref n={7} />
          </p>
          <h2 className={h2Class}>מה כוללת הערכה מקיפה?</h2>
          <ul className={ulClass}>
            <li>מיקום הכאב והאזורים שאליהם הוא משליך.</li>
            <li>מועד תחילת הכאב והשינויים שחלו בו.</li>
            <li>האם הכאב קבוע או מופיע לסירוגין.</li>
            <li>השפעת ישיבה, הליכה, ספורט ופעילות מינית.</li>
            <li>היסטוריה של חבלה, ניתוח, בקע או כריתת צינור הזרע.</li>
            <li>תסמינים במתן שתן.</li>
            <li>תסמינים הקשורים ליציאות.</li>
            <li>שינויים בתפקוד המיני.</li>
            <li>כאבים בגב, בבטן, בירך או באגן.</li>
            <li>רגישות מקומית או שינויים בתחושה.</li>
          </ul>
          <p className={pClass}>
            בהערכה פיזיותרפית ניתן לבדוק גם את טווחי התנועה של הגב והירכיים, את הבטן, המפשעה
            והאגן ואת תפקוד שרירי רצפת האגן.
          </p>
          <p className={pClass}>
            בדיקה חיצונית או פנימית נשקלת בהתאם לצורך הקליני, לאחר הסבר ובהסכמת המטופל.
          </p>
          <h2 className={h2Class}>כיצד מטפלים?</h2>
          <p className={pClass}>
            הטיפול נקבע בהתאם לגורמים שנמצאו בבירור ובהערכה, ועשוי לדרוש גישה רב־תחומית
            והתאמת ציפיות במהלך הטיפול.
            <Ref n={2} />
          </p>
          <p className={pClass}>
            להרחבה על הטיפול השמרני:{" "}
            <Link
              href="/professional-info/pelvic-floor-physiotherapy-orchialgia-cscp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              פיזיותרפיה לרצפת האגן בכאב אשכים כרוני
            </Link>
            .
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
            כאב אשכים כרוני הוא תסמין מורכב שיכול לנבוע ממקור מקומי, מכאב מוקרן או משילוב של
            כמה גורמים.
          </p>
          <p className={pClass}>
            השלב הראשון הוא בירור רפואי ושלילת מצבים הדורשים טיפול אחר. כאשר הכאב נמשך ואין
            הסבר מקומי מלא, יש מקום להערכה אצל פיזיותרפיסט רצפת אגן.
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
              Part I Evaluation and Management Approach. J Urol. 2025;214(2):116-126. doi:
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
            <li id="ref-2" className="scroll-mt-24">
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
            <li id="ref-3" className="scroll-mt-24">
              Sigalos JT, Pastuszak AW. Chronic orchialgia: epidemiology, diagnosis and
              evaluation. Transl Androl Urol. 2017;6(Suppl 1):S37-S43. doi:
              <a
                href="https://doi.org/10.21037/tau.2017.05.23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.21037/tau.2017.05.23
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Rottenstreich M, Glick Y, Gofrit ON. Chronic scrotal pain in young adults. BMC
              Res Notes. 2017;10:241. doi:
              <a
                href="https://doi.org/10.1186/s13104-017-2590-0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1186/s13104-017-2590-0
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Tojuola B, Layman J, Kartal I, Gudelogul A, Brahmbhatt J, Parekattil S. Chronic
              orchialgia: review of treatments old and new. Indian J Urol. 2016;32(1):21-26.
              doi:
              <a
                href="https://doi.org/10.4103/0970-1591.173110"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.4103/0970-1591.173110
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Costabile RA, Hahn M, McLeod DG. Chronic orchialgia in the pain prone patient:
              the clinical perspective. J Urol. 1991;146(6):1571-1574. doi:
              <a
                href="https://doi.org/10.1016/S0022-5347(17)38169-7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/S0022-5347(17)38169-7
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Ziegelmann MJ, Farrell MR, Levine LA. Evaluation and management of chronic
              scrotal content pain: a common yet poorly understood condition. Rev Urol.
              2019;21(2-3):74-84.{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6864917/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                PMC6864917
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
