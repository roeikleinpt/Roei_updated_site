import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import AuthorBox from "../../components/AuthorBox";
import ArticleCta from "../../components/ArticleCta";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("low-back-pain");

export const metadata: Metadata = {
  title: "כאבי גב תחתון (Low Back Pain): גורמים, אבחון וטיפול פיזיותרפי",
  description:
    "כאב גב תחתון הוא מהבעיות השכיחות במערכת השריר והשלד, ולרוב לא ניתן להצביע על מבנה יחיד שאחראי לו. מדוע הכאב מתפתח, מה אומרים ממצאי הדמיה, מה כוללת ההערכה, כיצד פיזיותרפיה עוזרת ומתי נדרש בירור רפואי.",
  alternates: { canonical: "/professional-info/low-back-pain" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "כאבי גב תחתון | רועי קליין פיזיותרפיה",
    description:
      "מהו כאב גב תחתון לא־ספציפי, מדוע ממצא בהדמיה אינו מוכיח לבדו מהו מקור הכאב, מה כוללת ההערכה הפיזיותרפית, האם צריך להפסיק להתאמן ואילו תסמינים מחייבים בירור רפואי דחוף.",
    url: "/professional-info/low-back-pain",
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
    q: "האם חייבים לדעת בדיוק איזה מבנה גורם לכאב?",
    a: "לא. בחלק גדול מכאבי הגב לא ניתן לזהות מבנה יחיד שאחראי לתסמינים. עדיין ניתן להעריך אילו תנועות ועומסים משפיעים על הכאב ולבנות תוכנית טיפול בהתאם.",
  },
  {
    q: "האם צריך MRI כדי להתחיל פיזיותרפיה?",
    a: "ברוב המקרים של כאב גב ללא סימני אזהרה, לא. ההחלטה לגבי הדמיה מתקבלת לפי הסיפור הקליני והבדיקה ולא רק לפי עצם קיומו של כאב.",
  },
  {
    q: "האם מנוחה עוזרת?",
    a: "מנוחה קצרה עשויה להיות נחוצה לעיתים כשהכאב משמעותי, אך מנוחה ממושכת במיטה אינה נחשבת טיפול מומלץ. בדרך כלל מעודדים חזרה הדרגתית לתנועה ולפעילות.",
  },
  {
    q: "האם טיפול מנואלי מספיק בפני עצמו?",
    a: "בדרך כלל לא. כאשר משתמשים בטיפול מנואלי, הוא מתאים יותר כחלק מתוכנית רחבה הכוללת פעילות, תרגול והדרכה.",
  },
];

export default function LowBackPainArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            כאבי גב תחתון
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאבי גב תחתון, שנקראים לעיתים גם לומבגו, הם אחת הבעיות השכיחות ביותר במערכת השריר
            והשלד. במקרים רבים אי אפשר
            להצביע על מבנה יחיד שאחראי לכאב, ולכן משתמשים לעיתים במונח &rdquo;כאב גב תחתון
            לא־ספציפי&rdquo; (Non-Specific Low Back Pain)&rlm;.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            המשמעות אינה שאין סיבה לכאב, אלא שהבדיקה אינה מצביעה על נזק יחיד בדיסק, במפרק, בשריר
            או ברצועה שמסביר באופן מלא את התסמינים.
          </p>
          <p className={pClass}>
            הכאב יכול להיות חריף, כלומר להופיע לזמן קצר ולחלוף, או כרוני כאשר הוא נמשך מעבר לשלושה
            חודשים. עקרונות ההערכה דומים בשני המצבים.
          </p>

          <h2 className={h2Class}>מדוע עלול להתפתח כאב גב תחתון?</h2>
          <p className={pClass}>
            כאב גב יכול להופיע על רקע שילוב של עומסים מכניים, פעילות גופנית, עבודה, שינויים ברמת
            הפעילות וגורמים נוספים. אצל מבוגרים בגיל העבודה, עומסים הכוללים הרמה, סיבוב, תנוחות
            ממושכות או חשיפה חוזרת לרטט עשויים להיות קשורים להתפתחות כאב.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            בספורטאים התמונה עשויה להיות שונה בהתאם לענף ולאופי העומס. בסקירה שיטתית נמצא שכאב גב
            שכיח מאוד בקרב ספורטאים, כאשר אחד מגורמי הסיכון הבולטים ביותר הוא מופע קודם של כאב גב.
            גם נפח אימון גבוה, עלייה מהירה בעומס ושנים רבות של חשיפה לאותו ספורט נקשרו לסיכון
            מוגבר.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            שינויים ניווניים בדיסקים ובמפרקי עמוד השדרה נעשים שכיחים יותר עם הגיל, אך חשוב לזכור
            שממצאים כאלה קיימים גם אצל אנשים שאין להם כאב כלל. לכן לא ניתן לקבוע על סמך ממצא בהדמיה
            בלבד שהוא מקור הכאב.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>האם כאב גב אומר שיש נזק בעמוד השדרה?</h2>
          <p className={pClass}>ברוב המקרים, לא.</p>
          <p className={pClass}>
            אצל כ־85% מהאנשים שמגיעים עם כאב גב תחתון בלבד לא ניתן להצביע על מבנה מסוים אחד כמקור
            הכאב, בין אם דיסק, מפרק, שריר או רצועה.
            <Ref n={1} />{" "}
            גם ממצאים כמו בלט דיסק, פרוטרוזיה או שינויים ניווניים שכיחים באוכלוסייה ללא כאב. לכן
            הבדיקה הקלינית חשובה לא פחות, ולעיתים יותר, מעצם קיומו של ממצא ב־MRI&rlm;.
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

          <h2 className={h2Class}>כיצד מאבחנים כאב גב תחתון?</h2>
          <p className={pClass}>ההערכה מתחילה בסיפור הקליני ובבדיקה. בין היתר חשוב להבין:</p>
          <ul className={ulClass}>
            <li>מתי הכאב התחיל וכיצד הוא משתנה</li>
            <li>אילו פעולות מחמירות או מקלות עליו</li>
            <li>האם קיימת הקרנה לרגל</li>
            <li>האם יש שינוי בכוח, בתחושה או בתפקוד</li>
            <li>אילו עומסים קיימים בעבודה, בספורט ובחיי היומיום</li>
            <li>האם קיימים סימנים שמחייבים בירור רפואי נוסף</li>
          </ul>

          <h2 className={h2Class}>כיצד פיזיותרפיה יכולה לעזור?</h2>
          <p className={pClass}>
            הטיפול הפיזיותרפויטי המקובל כיום לכאב גב תחתון מדגיש טיפול פעיל ולא הימנעות ממושכת
            מתנועה.
            <Ref n={2} />
            <Ref n={4} />{" "}
            הטיפול יכול לכלול התאמה הדרגתית של פעילות ותרגול למצבו של המטופל. אין שיטת תרגול אחת
            שהוכחה כטובה ביותר עבור כל האנשים עם כאב גב, ולכן התרגול מותאם לתסמינים, ליכולת
            ולמטרות האישיות.
            <Ref n={2} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            בהתאם לבדיקה, ניתן לשלב גם טיפול מנואלי כחלק מתוכנית רחבה יותר, ולא כטיפול יחיד בפני
            עצמו.
            <Ref n={2} />
            <Ref n={5} />{" "}
            הדרכה היא חלק חשוב מהטיפול. במקרים רבים מומלץ להמשיך בתנועה ובפעילות ככל שניתן
            ולהימנע ממנוחה ממושכת במיטה.
            <Ref n={2} />
            <Ref n={4} />
            <Ref n={6} />
          </p>

          <h2 className={h2Class}>האם צריך להפסיק להתאמן?</h2>
          <p className={pClass}>
            לא בהכרח. בדרך כלל המטרה היא למצוא רמת פעילות שניתן לבצע בלי לגרום להחמרה משמעותית ומתמשכת,
            ולא להפסיק לחלוטין פעילות.
          </p>
          <p className={pClass}>
            בספורטאים יש חשיבות גם לבחינת עומסי האימון. עלייה מהירה בנפח או בעצימות האימון עשויה
            להיות קשורה להופעת כאב, ולכן לעיתים נדרש שינוי זמני בעומס ולא הפסקה מלאה של הפעילות.
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>דגלים אדומים: מתי כאב גב מחייב בדיקה רפואית?</h2>
          <p className={pClass}>
            רוב כאבי הגב אינם נגרמים ממצב מסוכן. עם זאת, קיימים מצבים שבהם נדרש בירור רפואי מהיר.
            יש לפנות להערכה רפואית דחופה במיוחד כאשר מופיעים תסמינים חדשים כגון:
          </p>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <ul className="list-disc space-y-2 pr-6 leading-8 text-amber-950">
              <li>קושי חדש במתן שתן או אצירת שתן</li>
              <li>אובדן שליטה על שתן או צואה</li>
              <li>ירידה חדשה בתחושה באזור המפשעה, איברי המין או סביב פי הטבעת (אזור האוכף)</li>
              <li>חולשה משמעותית או מתקדמת ברגליים</li>
              <li>חום יחד עם כאב גב, במיוחד בנוכחות גורמי סיכון לזיהום</li>
              <li>כאב לאחר טראומה משמעותית</li>
              <li>כאב חדש אצל אדם עם היסטוריה של מחלה ממאירה</li>
              <li>ירידה נוירולוגית שממשיכה להתקדם</li>
            </ul>
            <p className="mt-4 leading-8 text-amber-950">
              מצבים אלה אינם מיועדים לטיפול פיזיותרפי בלבד ודורשים בירור רפואי מתאים.
              <Ref n={7} />
              <Ref n={8} />
            </p>
          </div>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/lumbar-disc-herniation-sciatica"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              פריצת דיסק מותנית וסיאטיקה
            </Link>{" "}
            ו־
            <Link
              href="/professional-info/sacroiliac-joint-pain"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב במפרק העצה והכסל
            </Link>
            .
          </p>

          <ArticleCta
            intro="כאב גב שחוזר או שאינו משתפר מצדיק בירור מסודר. בהערכה בודקים אילו תנועות ועומסים מעוררים את הכאב, מה מקל עליו וכיצד לבנות חזרה הדרגתית לתנועה, לעבודה ולספורט."
            whatsappText="היי רועי, קראתי אצלך הסבר על LBP, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Deyo RA, Weinstein JN. Low Back Pain. N Engl J Med. 2001;344(5):363-370. doi:
              <a
                href="https://doi.org/10.1056/NEJM200102013440508"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1056/NEJM200102013440508
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Maher C, Underwood M, Buchbinder R. Non-Specific Low Back Pain. Lancet.
              2017;389(10070):736-747. doi:
              <a
                href="https://doi.org/10.1016/S0140-6736(16)30970-9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/S0140-6736(16)30970-9
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Wilson F, Ardern CL, Hartvigsen J, et al. Prevalence and Risk Factors for Back Pain
              in Sports: A Systematic Review With Meta-Analysis. Br J Sports Med.
              2021;55(11):601-607. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2020-102537"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2020-102537
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Foster NE, Anema JR, Cherkin D, et al. Prevention and Treatment of Low Back Pain:
              Evidence, Challenges, and Promising Directions. Lancet. 2018;391(10137):2368-2383.
              doi:
              <a
                href="https://doi.org/10.1016/S0140-6736(18)30489-6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/S0140-6736(18)30489-6
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Wang XQ, Wang YL, Witchalls J, et al. Physical Therapy for Acute and Sub-Acute Low
              Back Pain: A Systematic Review and Expert Consensus. Clin Rehabil.
              2024;38(6):715-731. doi:
              <a
                href="https://doi.org/10.1177/02692155241229398"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/02692155241229398
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Maharty DC, Hines SC, Brown RB. Chronic Low Back Pain in Adults: Evaluation and
              Management. Am Fam Physician. 2024;109(3):233-244.
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Cashin AG, Chou R, Weimer MB, McAuley JH. Low Back Pain: A Review. JAMA.
              2026;336(2):144-158. doi:
              <a
                href="https://doi.org/10.1001/jama.2026.9631"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1001/jama.2026.9631
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Department of Veterans Affairs, Department of Defense. VA/DoD Clinical Practice
              Guideline for the Diagnosis and Treatment of Low Back Pain. Version 3.0. Washington,
              DC: 2022.{" "}
              <a
                href="https://www.healthquality.va.gov/guidelines/Pain/lbp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                healthquality.va.gov
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
