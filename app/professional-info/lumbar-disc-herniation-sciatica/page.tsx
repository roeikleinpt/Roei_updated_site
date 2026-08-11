import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import AuthorBox from "../../components/AuthorBox";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("lumbar-disc-herniation-sciatica");

export const metadata: Metadata = {
  title: "פריצת דיסק מותנית וסיאטיקה (Lumbar Disc Herniation and Sciatica)",
  description:
    "פריצת דיסק אינה תמיד מקור הכאב, ולא כל כאב שמקרין לרגל נובע ממנה. מה ההבדל בין בלט לפריצה, האם המצב משתפר בלי ניתוח, מה תפקידה של פיזיותרפיה ומתי נדרש בירור רפואי דחוף.",
  alternates: { canonical: "/professional-info/lumbar-disc-herniation-sciatica" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "פריצת דיסק מותנית וסיאטיקה | רועי קליין פיזיותרפיה",
    description:
      "ההבדל בין bulge, protrusion ו־extrusion, מדוע פריצת דיסק אינה מסבירה תמיד את הכאב, מה כוללת הגישה השמרנית ואילו תסמינים מחייבים בירור רפואי דחוף.",
    url: "/professional-info/lumbar-disc-herniation-sciatica",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
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
    q: "האם כל פריצת דיסק גורמת לסיאטיקה?",
    a: "לא. ניתן למצוא פריצות דיסק גם אצל אנשים ללא תסמינים. סיאטיקה מתפתחת כאשר קיימת מעורבות של שורש עצב המתאימה לתמונה הקלינית.",
  },
  {
    q: "האם MRI קובע אם צריך ניתוח?",
    a: "לא בפני עצמו. ההחלטה תלויה בשילוב בין התסמינים, הבדיקה, משך הבעיה וממצאי ההדמיה.",
  },
  {
    q: 'האם הפריצה חייבת "להיעלם" כדי שהכאב ישתפר?',
    a: "לא. שיפור בכאב ובתפקוד אינו מחייב שהממצא ב־MRI ישתנה. ההתקדמות בטיפול נבחנת בעיקר לפי התסמינים, התפקוד והבדיקה הקלינית, ולא לפי שינוי בהדמיה בלבד.",
  },
];

export default function LumbarDiscHerniationSciaticaArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            פריצת דיסק מותנית וסיאטיקה
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            פריצת דיסק מותנית היא מצב שבו חומר מתוך הדיסק בולט מעבר לגבולותיו הרגילים. כאשר השינוי
            בדיסק מגרה או לוחץ על שורש עצב, הוא עשוי להיות מלווה בכאב שמקרין לרגל ובתסמינים
            נוירולוגיים, מצב המכונה לעיתים סיאטיקה (Sciatica)&rlm;.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            חשוב להבחין בין שני הדברים: ניתן למצוא פריצות דיסק גם אצל אנשים ללא כאב, ולא כל כאב גב
            או כאב ברגל נגרם מפריצת דיסק.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>מה ההבדל בין בלט דיסק לפריצת דיסק?</h2>
          <p className={pClass}>
            בפענוח הדמיה מופיעים מונחים שונים, ובהם bulge&rlm;, protrusion ו־extrusion&rlm;. עצם
            הופעתו של אחד המונחים בפענוח אינה מספיקה כדי לקבוע שהממצא הוא מקור התסמינים. יש צורך
            בהתאמה בין מיקום הממצא, התסמינים והבדיקה הקלינית.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            המונח &rdquo;ruptured disc&rdquo; או &rdquo;דיסק קרוע&rdquo; אינו בהכרח התיאור המועדף.
            בספרות הרפואית משתמשים בדרך כלל במונחים כמו herniation או protrusion&rlm;, בין היתר
            משום שהמהלך הטבעי של המצב לעיתים קרובות טוב יותר מכפי שהמילה &rdquo;קרע&rdquo; עשויה
            לרמוז.
            <Ref n={1} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            במטה־אנליזה שכללה 2,233 מטופלים בטיפול שמרני נמצא שכ־70% מהפריצות נספגות באופן ספונטני,
            וששיעור הספיגה גבוה יותר דווקא בפריצות הגדולות: כ־67% ב־extrusion לעומת כ־13% בבלט
            דיסק.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/disc-bulge-mri-findings"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              בלט דיסק וממצאי MRI בגב התחתון: מה הם באמת אומרים?
            </Link>
            .
          </p>

          <h2 className={h2Class}>האם סימפטומים של פריצת דיסק יכולים להשתפר ללא ניתוח?</h2>
          <p className={pClass}>
            כן. אנשים רבים עם פריצת דיסק סימפטומטית משתפרים כבר במהלך השבועות הראשונים, והשיעור
            עולה בהמשך.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            בהיעדר חולשה נוירולוגית משמעותית או מתקדמת, טיפול שמרני במשך מספר שבועות הוא בדרך כלל
            השלב הראשון, ופיזיותרפיה היא אחד המרכיבים המרכזיים שלו.
            <Ref n={1} />
            <Ref n={4} />{" "}
            לצידה הטיפול עשוי לכלול התאמת פעילות וטיפול תרופתי בהתאם להמלצה רפואית.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>מה תפקידה של פיזיותרפיה?</h2>
          <p className={pClass}>
            מטרת הטיפול אינה &rdquo;להחזיר את הדיסק למקום&rdquo;, אלא לעזור למטופל לחזור בהדרגה
            לתנועה ולתפקוד ולהתמודד עם התסמינים בזמן שהמצב משתפר.
          </p>
          <p className={pClass}>בהתאם לממצאי הבדיקה, הטיפול עשוי לכלול:</p>
          <ul className={ulClass}>
            <li>הדרכה לגבי תנועה ופעילות</li>
            <li>התאמת עומסים</li>
            <li>תרגול הדרגתי</li>
            <li>עבודה על כוח ויכולת תפקודית</li>
            <li>מעקב אחר שינויים בכוח, בתחושה ובתסמינים ברגל</li>
          </ul>
          <p className={pClass}>
            הטיפול מותאם למצבו של המטופל ולא רק לתיאור ה־MRI&rlm;.
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>האם צריך לנוח עד שהפריצה עוברת?</h2>
          <p className={pClass}>
            לא מומלצת מנוחה ממושכת במיטה. הגישה השמרנית המקובלת מעודדת פעילות בהתאם ליכולת, תוך
            הפחתה זמנית של פעולות שמחמירות באופן משמעותי את התסמינים.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>האם פריצת דיסק תמיד מסבירה את הכאב?</h2>
          <p className={pClass}>
            לא. ממצאים בדיסק מופיעים גם אצל אנשים ללא כאב. במחקר MRI קלאסי של אנשים ללא כאבי גב,
            52% נמצאו עם בלט דיסק ול־27% הייתה פרוטרוזיה לפחות ברמה אחת.
            <Ref n={2} />
          </p>
          <p className={pClass}>
            לכן כאשר יש פריצת דיסק בהדמיה, השאלה החשובה אינה רק &rdquo;האם קיימת פריצה?&rdquo;,
            אלא גם האם היא מתאימה למיקום הכאב, לתסמינים הנוירולוגיים ולבדיקה.
          </p>

          <h2 className={h2Class}>מתי צריך לפנות לבדיקה רפואית דחופה?</h2>
          <p className={pClass}>יש לפנות בדחיפות כאשר מופיעים, בין היתר:</p>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <ul className="list-disc space-y-2 pr-6 leading-8 text-amber-950">
              <li>חולשה חדשה או מתקדמת ברגל</li>
              <li>קושי חדש במתן שתן או אצירת שתן</li>
              <li>אובדן שליטה על שתן או צואה</li>
              <li>ירידה חדשה בתחושה באזור המפשעה, איברי המין או סביב פי הטבעת (אזור האוכף)</li>
              <li>תסמינים משמעותיים בשתי הרגליים</li>
              <li>החמרה נוירולוגית מהירה</li>
            </ul>
            <p className="mt-4 leading-8 text-amber-950">
              תסמינים אלו עשויים להצביע על פגיעה משמעותית בשורשי העצבים ודורשים בירור רפואי דחוף.
              <Ref n={1} />
            </p>
          </div>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/low-back-pain"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאבי גב תחתון
            </Link>
            .
          </p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              כאב שמקרין לרגל מצדיק בירור מסודר. בהערכה בודקים האם קיימת מעורבות של שורש עצב, אילו
              תנועות ועומסים משפיעים על התסמינים וכיצד לבנות חזרה הדרגתית לתנועה ולתפקוד.
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
              Deyo RA, Mirza SK. Herniated Lumbar Intervertebral Disk. N Engl J Med.
              2016;374(18):1763-1772. doi:
              <a
                href="https://doi.org/10.1056/NEJMcp1512658"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1056/NEJMcp1512658
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Jensen MC, Brant-Zawadzki MN, Obuchowski N, et al. Magnetic Resonance Imaging of the
              Lumbar Spine in People Without Back Pain. N Engl J Med. 1994;331(2):69-73. doi:
              <a
                href="https://doi.org/10.1056/NEJM199407143310201"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1056/NEJM199407143310201
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Zou T, Liu XY, Wang PC, et al. Incidence of Spontaneous Resorption of Lumbar Disc
              Herniation: A Meta-analysis. Clin Spine Surg. 2024;37(6):256-269. doi:
              <a
                href="https://doi.org/10.1097/BSD.0000000000001490"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/BSD.0000000000001490
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Kreiner DS, Hwang SW, Easa JE, et al. An Evidence-Based Clinical Guideline for the
              Diagnosis and Treatment of Lumbar Disc Herniation With Radiculopathy. Spine J.
              2014;14(1):180-191. doi:
              <a
                href="https://doi.org/10.1016/j.spinee.2013.08.003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.spinee.2013.08.003
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
