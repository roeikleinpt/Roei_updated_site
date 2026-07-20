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

const article = getArticle("saddle-area-pain-cyclists");

export const metadata: Metadata = {
  title: "כאב באזור האוכף ונימול באיבר המין אצל רוכבי אופניים",
  description:
    "מה אנחנו יודעים על כאב באזור האוכף ונימול באיבר המין אצל רוכבי אופניים — הקשר לרצפת האגן, לתפקוד המיני ולנפח הרכיבה, ומתי כדאי לפנות להערכה.",
  alternates: { canonical: "/professional-info/saddle-area-pain-cyclists" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "כאב באזור האוכף ונימול באיבר המין אצל רוכבי אופניים | רועי קליין פיזיותרפיה",
    description: "מה אנחנו יודעים על כאב ונימול באזור האוכף אצל רוכבי אופניים.",
    url: "/professional-info/saddle-area-pain-cyclists",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const ulClass = "mt-4 list-disc space-y-1 pr-6 leading-8 text-black";

// שאלות נפוצות לעמוד — מוצגות לפני המקורות וגם כ-FAQPage schema.
const faqItems = [
  {
    q: "האם נימול באיבר המין במהלך רכיבה גורם לנזק קבוע?",
    a: "נימול חד פעמי שחולף זמן קצר לאחר הרכיבה בדרך כלל אינו מעיד על נזק קבוע, שהוא ממצא נדיר וקשור בדרך כלל ללחץ ממושך שחוזר לאורך זמן. כדאי לפנות לבדיקה אם הנימול חוזר, מופיע מוקדם יותר מרכיבה לרכיבה, נמשך לאחר הירידה מהאופניים או מלווה בכאב או בשינוי בתפקוד.",
  },
  {
    q: "האם החלפת אוכף תפתור את הבעיה?",
    a: "התאמת אוכף או שינוי בתנוחת הרכיבה עשויים להפחית את הלחץ ולהקל על הנימול. עם זאת, החלפת אוכפים ללא בירור של מקור התסמין לא תמיד עוזרת. כאשר הנימול חוזר או נמשך, מומלץ לבדוק גם את מנח הרכיבה, העומס והגורמים הגופניים האפשריים.",
  },
  {
    q: "מתי כדאי לפנות לבדיקה בגלל נימול או כאב באזור האוכף?",
    a: "מומלץ לפנות להערכה כאשר הנימול או הכאב חוזרים, מתחילים מוקדם ברכיבה, נמשכים לאחר סיומה או מלווים בכאב באגן ובפרינאום, בשינוי במתן שתן או בפגיעה בתפקוד המיני.",
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

export default function SaddleAreaPainCyclistsArticle() {
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
            כאב באזור האוכף ונימול באיבר המין אצל רוכבי אופניים: מה ידוע?
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאב, לחץ או נימול באזור האוכף (מפשעה, איבר המין, אשכים, פי הטבעת ועוד) הן תלונות
            שרוכבי אופניים רבים מכירים. לעיתים התחושה חולפת זמן קצר לאחר סיום הרכיבה, אך אצל
            חלק מהרוכבים היא חוזרת שוב ושוב, מתחילה מוקדם יותר במהלך הרכיבה או מלווה בתסמינים
            נוספים. במקרים מסוימים, אנשים אפילו מפסיקים לרכב בגלל חומרת התסמינים.
          </p>
          <p className={pClass}>
            למרות שכיחות התופעה, חשוב לא לקפוץ מיד למסקנה שנגרם נזק קבוע. המחקר בתחום מציג
            תמונה מורכבת: קיימים קשרים בין תסמינים מסוימים לבין נפח הרכיבה או התפקוד המיני, אך
            אין הוכחה שרכיבה כשלעצמה פוגעת ברצפת האגן.
          </p>
          <h2 className={h2Class}>עד כמה כאב ונימול נפוצים אצל רוכבים?</h2>
          <p className={pClass}>
            במחקר אמריקאי שכלל 1,635 רוכבים גברים, 57% דיווחו על נימול גניטלי ו־30% דיווחו על
            כאב באזור איבר המין. כ־22% מהמשתתפים עמדו בהגדרת המחקר להפרעת זקפה.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            המספרים אמנם גבוהים, אך חשוב להבין מי השתתף במחקר: רוב המשתתפים היו רוכבי כביש
            מנוסים, 63% רכבו במשך יותר מעשר שנים ו־58% היו בני יותר מ־50. לכן אין להניח
            שהשיעורים האלה מייצגים באותה מידה כל רוכב צעיר, מתחיל או רוכב פנאי.
          </p>
          <h2 className={h2Class}>האם נימול קשור להפרעה בתפקוד המיני?</h2>
          <p className={pClass}>
            באותו מחקר, גברים שדיווחו על נימול בפין היו בעלי סיכוי גבוה יותר לדווח גם על הפרעה
            בתפקוד הזקפתי. הקשר היה בולט יותר כאשר הנימול התחיל בשלב מוקדם של הרכיבה:
          </p>
          <p className="mt-4 text-xl font-bold leading-8 text-black">
            הופעת נימול בתוך פחות משעה הייתה קשורה לסיכוי גבוה בערך פי שניים להפרעה בזקפה,
            בהשוואה לנימול שהופיע לאחר חמש שעות רכיבה.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            גם כאב גניטלי שהחל במהלך השעה הראשונה היה קשור לסיכוי גבוה יותר להפרעה בזקפה.
          </p>
          <p className={pClass}>
            חשוב לציין כי מדובר במחקר חתך. כלומר, התסמינים והרגלי הרכיבה נמדדו בנקודת זמן אחת.
            המחקר אינו יכול לקבוע מה הופיע קודם או להוכיח שהנימול הוא שגרם להפרעה בתפקוד המיני.
            גם החוקרים עצמם הדגישו שכיוון הקשר והסיבתיות אינם ידועים.
          </p>
          <p className={pClass}>
            מחקר רב־לאומי אחר, שכלל 2,774 רוכבים גברים, מצא תמונה מרגיעה יותר. לאחר התאמה
            לגיל, BMI והיקף הרכיבה המצטבר, לא נמצא הבדל בציון התפקוד המיני הממוצע בין רוכבים עם
            נימול גניטלי לבין רוכבים שלא דיווחו על נימול.
            <Ref n={2} /> ממצא חריג באותו מחקר היה שרוכבים שדיווחו דווקא על נימול בישבן קיבלו
            ציוני תפקוד מיני נמוכים יותר. קשר כזה לא נמצא בקרב מי שדיווחו על נימול בפין, בשק
            האשכים או בפרינאום.
          </p>
          <figure className="mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/professional-info/nerve-innervation-saddle.webp")}
              alt="מיפוי עצבי של אזור העצבוב העורי (Cutaneous Innervation) באגן ובאזור האוכף — אבחון סימפטומים לפי אזורי עצבוב"
              className="mx-auto h-auto w-full rounded-2xl ring-1 ring-slate-200"
            />
          </figure>
          <h2 className={h2Class}>האם כמות הרכיבה משנה?</h2>
          <p className={pClass}>
            במחקר של Baradaran ועמיתיו (2019) נמצאה עלייה בשיעור הנימול ככל שעלו:
          </p>
          <ul className={ulClass}>
            <li>מספר שנות הרכיבה.</li>
            <li>תדירות הרכיבה השבועית.</li>
            <li>
              המרחק בכל רכיבה.
              <Ref n={2} />
            </li>
          </ul>
          <p className={pClass}>
            גיל ו־BMI, לעומת זאת, לא נמצאו קשורים לנימול לאחר שקלול המשתנים האחרים.
          </p>
          <p className={pClass}>
            ממצאים אלו מצביעים על קשר בין החשיפה המצטברת לרכיבה לבין הופעת נימול. עם זאת, הם
            אינם מוכיחים שכל תוספת בקילומטרים תגרום לתסמינים או שקיים סף קבוע שמתאים לכל
            הרוכבים.
          </p>
          <h2 className={h2Class}>רכיבה ותסמינים בדרכי השתן</h2>
          <p className={pClass}>
            מחקר תצפיתי קטן שכלל 58 גברים בני 25–70 מצא קשר קל בין מספר שנות הרכיבה לבין
            תסמינים בדרכי השתן התחתונות, ללא תלות בגיל.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            החוקרים העלו את האפשרות שרכיבה בעצימות גבוהה עשויה להשפיע לרעה על תפקוד רצפת האגן
            אצל חלק מהגברים. עם זאת, זהו מחקר שמטרתו המוצהרת הייתה יצירת השערה למחקרים עתידיים,
            ולא הוכחת קשר סיבתי. המדגם היה קטן, ולכן יש להתייחס לתוצאה כנקודת פתיחה למחקר נוסף
            ולא כמסקנה גורפת.
          </p>
          <h2 className={h2Class}>מה כדאי לעשות כאשר מופיע נימול?</h2>
          <p className={pClass}>
            אירוע חד־פעמי וקצר אינו בהכרח סימן לנזק. עם זאת, רצוי לא להתעלם מדפוס שחוזר על עצמו.
          </p>
          <p className={pClass}>כדאי לשים לב ל:</p>
          <ul className={ulClass}>
            <li>המקום המדויק שבו מופיעה התחושה.</li>
            <li>הזמן שעובר מתחילת הרכיבה עד להופעת הנימול.</li>
            <li>משך הזמן שנדרש לתחושה לחלוף.</li>
            <li>קשר בין התסמין לרכיבות ארוכות, עצימות גבוהה או שינוי בציוד.</li>
            <li>הופעת כאב באגן או בפרינאום.</li>
            <li>שינויים במתן שתן או בתפקוד המיני.</li>
            <li>החמרה הדרגתית או הופעה מוקדמת יותר מרכיבה לרכיבה.</li>
          </ul>
          <p className={pClass}>
            הפחתה זמנית של העומס, שינוי תנוחה במהלך הרכיבה ובחינה של התאמת האוכף והאופניים
            עשויים להיות חלק מהפתרון. כאשר התסמין חוזר, נמשך גם לאחר הרכיבה או מלווה בתסמינים
            נוספים, כדאי לבצע{" "}
            <Link
              href="/professional-info/pelvic-floor-physiotherapy-cyclists"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              הערכה מקצועית
            </Link>{" "}
            ולא להסתפק בהחלפת אוכף באופן אקראי.
          </p>
          <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              נימול שחוזר מרכיבה לרכיבה הוא סיבה טובה לבדיקה מסודרת. אם חלק מהתיאור מוכר לכם,
              מומלץ לפנות לבירור.
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
            נימול וכאב באזור האוכף נפוצים בקרב רוכבים, בעיקר באוכלוסיות שרוכבות בהיקפים גבוהים.
            בחלק מהמחקרים נמצא קשר בין הופעה מוקדמת של התסמין לבין הפרעה בתפקוד הזקפתי, אך מחקר
            גדול אחר לא מצא קשר בין נימול גניטלי כללי לבין תפקוד מיני ירוד.
          </p>
          <p className={pClass}>
            לכן, אין מקום להיבהל מכל תחושת נימול – אך גם לא נכון לקבל תסמין חוזר כחלק בלתי נמנע
            מהרכיבה. המטרה היא להבין מדוע הוא מופיע אצל הרוכב המסוים, אילו גורמים ניתנים לשינוי
            והאם קיימת מעורבות של רצפת האגן או של מערכות נוספות.
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
              Balasubramanian A, Yu J, Breyer BN, Minkow R, Eisenberg ML. The Association Between
              Pelvic Discomfort and Erectile Dysfunction in Adult Male Bicyclists. J Sex Med.
              2020;17(5):919-929. doi:
              <a
                href="https://doi.org/10.1016/j.jsxm.2020.01.022"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jsxm.2020.01.022
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Baradaran N, Awad M, Gaither TW, et al. The Association of Bicycle-Related Genital
              Numbness and Sexual Health Inventory for Men (SHIM) Score: Results From a Large,
              Multinational, Cross-Sectional Study. BJU Int. 2019;124(2):336-341. doi:
              <a
                href="https://doi.org/10.1111/bju.14396"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1111/bju.14396
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Molina-Torres G, Ochandorena-Acha M, Echazarreta-Aparicio Y, et al. Is Cycling
              Practice Related to Men’s Pelvic Floor Dysfunctions? A Hypothesis-Generating
              Observational Study. Int J Environ Res Public Health. 2021;18(4):1923. doi:
              <a
                href="https://doi.org/10.3390/ijerph18041923"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.3390/ijerph18041923
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
