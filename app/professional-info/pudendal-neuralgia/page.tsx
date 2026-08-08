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

const article = getArticle("pudendal-neuralgia");

export const metadata: Metadata = {
  title: "נוירלגיה של עצב הפודנדל: כאב אגן שמחמיר בישיבה — אבחון וטיפול",
  description:
    "כאב עצבי בפרינאום, בפין, בשק האשכים או סביב פי הטבעת, שמחמיר בדרך כלל בישיבה. מה מאפיין את המצב, מהם קריטריוני Nantes, במה הוא נבדל ממצבי כאב אגן אחרים ומה מקומה של הפיזיותרפיה.",
  alternates: { canonical: "/professional-info/pudendal-neuralgia" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "נוירלגיה של עצב הפודנדל | רועי קליין פיזיותרפיה",
    description:
      "Pudendal Neuralgia — מסלול העצב, קריטריוני Nantes, אבחנה מבדלת מול CP/CPPS וכאב אשכים, ומה כוללת ההערכה הפיזיותרפית.",
    url: "/professional-info/pudendal-neuralgia",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const ulClass = "mt-3 list-disc space-y-2 pr-6 leading-8 text-black";
const olClass = "mt-3 list-decimal space-y-2 pr-6 leading-8 text-black";

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
    q: "האם כאב שמחמיר בישיבה אומר שיש Pudendal Neuralgia?",
    a: "לא. החמרה בישיבה היא מאפיין טיפוסי, אך היא יכולה להופיע גם במצבים אחרים. האבחנה מבוססת על מכלול התסמינים והבדיקה.",
  },
  {
    q: "האם Pudendal Neuralgia אומרת שהעצב לכוד?",
    a: "לא בהכרח. לכידה היא אחת האפשרויות, אך המונח Pudendal Neuralgia מתייחס לכאב הקשור לעצב ואינו מחייב הוכחה של לכידה אנטומית.",
  },
  {
    q: "האם הכאב יכול להיות מורגש באשך או בפין?",
    a: "כן. ענפים של עצב הפודנדל מספקים תחושה לפין, לפרינאום ולחלק מאזור שק האשכים, ולכן כאב עצבי יכול להיות מורגש באזורים אלה. עם זאת, קיימות סיבות רבות נוספות לכאב בפין או באשכים ולכן חשוב לבצע אבחנה מבדלת.",
  },
  {
    q: "האם בדיקה פנימית היא חובה?",
    a: "לא. בדיקה פנימית יכולה לספק מידע נוסף במקרים מסוימים, אך היא אינה חובה. אם נשקלת בדיקה כזו, היא נעשית רק לאחר הסבר ובהסכמה.",
  },
];

export default function PudendalNeuralgiaArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            נוירלגיה של עצב הפודנדל
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            נוירלגיה של עצב הפודנדל (Pudendal Neuralgia&rlm;) היא מצב של כאב עצבי באזור האגן
            והפרינאום, הקשור לגירוי, רגישות או לעיתים לחץ על עצב הפודנדל. אצל גברים הכאב יכול להיות
            מורגש בפרינאום, בפין, בשק האשכים או סביב פי הטבעת.{" "}
            <span className="font-bold">
              אחד המאפיינים המזוהים ביותר עם המצב הוא החמרה בישיבה
            </span>
            , אם כי כאב שמוחמר בישיבה אינו בהכרח נוירלגיה של עצב הפודנדל.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            התסמינים יכולים להידמות למצבים אחרים של כאב אגן, כאב באיברי המין או כאב אשכים, ולכן
            האבחנה מבוססת על התמונה הקלינית כולה ולא על סימפטום יחיד.
          </p>

          <h2 className={h2Class}>מהו עצב הפודנדל?</h2>
          <p className={pClass}>
            עצב הפודנדל הוא עצב פריפרי שיוצא משורשי העצבים S2&ndash;S4&rlm; ועובר דרך האגן בדרכו אל
            הפרינאום. ממנו יוצאים ענפים מוטוריים ותחושתיים המעצבבים אזורים שונים, בהם הפין,
            הפרינאום, שק האשכים והאזור האנאלי. לכן גירוי של העצב יכול להתבטא בכאב או בתחושות
            עצביות במקומות שונים לאורך האזור.
            <Ref n={4} />
            <Ref n={5} />
          </p>

          <ArticleFigure
            src="/professional-info/pudendal-nerve-anatomy.webp"
            alt="איור אנטומי של אגן הגבר בתצוגה צדית עם מהלך עצב הפודנדל משורשי העצבים S2, S3 ו-S4 דרך האגן, לצד שרירי האגן והרצועות הסמוכות"
            caption="מהלך עצב הפודנדל משורשי S2–S4 דרך האגן והמבנים האנטומיים הסמוכים לו."
            credit="Image used with permission from Pelvic Guru®, LLC as a Pelvic Global Member"
          />

          <h2 className={h2Class}>איך נוירלגיה של עצב הפודנדל יכולה להרגיש?</h2>
          <p className={pClass}>
            הכאב מתואר לעיתים כשורף, דוקר, חד או בעל אופי &rdquo;חשמלי&ldquo;. הוא עשוי להיות חד
            צדדי או דו צדדי ולהופיע באחד או יותר מהאזורים הבאים:
            <Ref n={1} />
            <Ref n={4} />
            <Ref n={5} />
          </p>
          <ul className={ulClass}>
            <li>הפרינאום, האזור שבין שק האשכים לפי הטבעת</li>
            <li>הפין</li>
            <li>שק האשכים</li>
            <li>סביב פי הטבעת או באזור הרקטלי</li>
          </ul>
          <p className={pClass}>
            יכולות להופיע גם תחושות כמו נימול, רגישות יתר או תחושה לא רגילה באזור. אצל חלק מהאנשים
            פעילות מינית או שפיכה מחמירות את הכאב.
            <Ref n={4} />{" "}אחד המאפיינים הטיפוסיים הוא החמרה בישיבה והקלה יחסית בעמידה או בשכיבה.
            בחלק מהמקרים יש פחות כאב בישיבה על אסלה מאשר על כיסא רגיל.
            <Ref n={1} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>כיצד מאבחנים?</h2>
          <p className={pClass}>
            אין בדיקה אחת שמאבחנת לבדה Pudendal Neuralgia&rlm;. האבחנה היא בעיקרה קלינית ומבוססת על
            מיקום הכאב, אופי התסמינים, הגורמים שמחמירים או מקלים ועל ממצאי הבדיקה.
            <Ref n={1} />
            <Ref n={3} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            מסגרת מוכרת המשמשת להערכת החשד למצב היא קריטריוני Nantes&rlm;. הקריטריונים העיקריים
            שתוארו כוללים:
            <Ref n={3} />
          </p>
          <ol className={olClass}>
            <li>כאב באזור המעוצבב על ידי עצב הפודנדל</li>
            <li>כאב שמוחמר בעיקר בישיבה</li>
            <li>הכאב אינו מעיר את האדם משינה</li>
            <li>אין חסר תחושתי אובייקטיבי בבדיקה</li>
            <li>הקלה בכאב לאחר חסימה אבחנתית של עצב הפודנדל</li>
          </ol>
          <p className={pClass}>
            מאפיינים נוספים שיכולים לתמוך בחשד כוללים כאב שורף או דוקר, רגישות יתר למגע, החמרה
            לאורך היום ולעיתים רגישות באזור שבו העצב עובר סמוך ל־ischial spine&rlm;.
            <Ref n={3} />
            <Ref n={6} />{" "}חשוב לזכור שהקריטריונים נועדו לסייע באבחנה קלינית.{" "}
            <span className="font-bold">
              הופעת כאב באחד מהאזורים האלה לבדה אינה מספיקה כדי לקבוע שמקורו בעצב הפודנדל
            </span>
            .
          </p>

          <h2 className={h2Class}>למה זה עלול להתפתח?</h2>
          <p className={pClass}>
            לא תמיד ניתן לזהות סיבה אחת ברורה. בספרות תוארו בין השאר קשרים לישיבה ממושכת, רכיבת
            אופניים, טראומה באזור האגן וניתוחים קודמים באגן. במקרים מסוימים עולה חשד ללחץ על העצב
            בנקודות מסוימות לאורך המסלול שלו, למשל באזור שבין הרצועות sacrospinous&rlm;
            ו־sacrotuberous&rlm; או באזור Alcock&rsquo;s canal&rlm;.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={5} />{" "}עם זאת, נוירלגיה של עצב הפודנדל אינה בהכרח זהה ל&rdquo;לכידה של
            העצב&ldquo;. כאב עצבי יכול להתקיים גם כאשר לא הודגמה לכידה אנטומית ברורה.
          </p>

          <h2 className={h2Class}>
            לא כל כאב באגן או באיברי המין הוא כאב מעצב הפודנדל
          </h2>
          <p className={pClass}>
            קיימת חפיפה משמעותית בין תסמיני Pudendal Neuralgia&rlm; לבין מצבים אחרים.
          </p>
          <p className={pClass}>
            כאב בפין, באשך או בפרינאום יכול להיות קשור גם ל־
            <Link
              href="/professional-info/chronic-prostatitis-pelvic-pain-syndrome"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              תסמונת כאב אגן כרוני
            </Link>{" "}
            (CP/CPPS&rlm;),{" "}
            <Link
              href="/professional-info/chronic-testicular-pain-orchialgia-cscp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב כרוני של תוכן שק האשכים
            </Link>
            , רגישות של שרירי רצפת האגן, כאב שמקורו בגב או באגן, או מעורבות של עצבים אחרים כמו
            ilioinguinal&rlm; או genitofemoral&rlm;. קיימים גם גורמים אורולוגיים ומבניים שצריך
            לשלול בהתאם לתמונה.
            <Ref n={4} />
            <Ref n={7} />
          </p>
          <p className={pClass}>
            לכן בבירור של כאב כזה חשוב לא להסתפק בשאלה &rdquo;איפה כואב&ldquo;, אלא לבדוק גם מה
            מחמיר את הכאב, מה מקל עליו, האם קיימים תסמיני שתן או תסמינים נוספים ומה נמצא בבדיקה
            הגופנית.
          </p>

          <h2 className={h2Class}>מה כוללת ההערכה?</h2>
          <ul className={ulClass}>
            <li>מיקום ואופי הכאב</li>
            <li>הקשר בין הכאב לישיבה ולפעילות גופנית</li>
            <li>תסמינים הקשורים למתן שתן, יציאות או פעילות מינית</li>
            <li>הגב התחתון, האגן והירכיים</li>
            <li>תפקוד ורגישות של שרירי רצפת האגן</li>
            <li>גורמים נוספים שעשויים להסביר כאב באגן או באיברי המין</li>
          </ul>
          <p className={pClass}>
            הנחיות ה־American Urological Association&rlm; לכאב אגן כרוני בגברים מדגישות גם הערכה
            נוירולוגית ומוסקולוסקלטלית של האגן, הירך והגב התחתון, וכן בדיקה של רצפת האגן כאשר היא
            רלוונטית.
            <Ref n={7} />{" "}בחלק מהמקרים הבירור יכלול גם אורולוג, הדמיה או חסימה אבחנתית של עצב
            הפודנדל.
          </p>

          <h2 className={h2Class}>מתי כדאי להשלים בירור רפואי נוסף?</h2>
          <p className={pClass}>
            יש מאפיינים שאינם אופייניים לתמונה הקלאסית ודורשים בירור נוסף, למשל:
          </p>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <ul className="list-disc space-y-2 pr-6 leading-8 text-amber-950">
              <li>כאב שמעיר משינה</li>
              <li>ירידה ברורה בתחושה</li>
              <li>חולשה או חסר נוירולוגי אחר</li>
              <li>כאב מאוד ממוקד שאינו מתאים לפיזור הרגיל של העצב</li>
              <li>ממצאים נוספים שאינם מוסברים על ידי התמונה הקלינית</li>
            </ul>
            <p className="mt-4 leading-8 text-amber-950">
              במצבים כאלה ייתכן צורך בהדמיה או בבירור רפואי נוסף כדי לשלול סיבות אחרות לכאב.
              <Ref n={1} />
              <Ref n={6} />
            </p>
          </div>

          <h2 className={h2Class}>כיצד פיזיותרפיה יכולה לעזור?</h2>
          <p className={pClass}>
            פיזיותרפיה היא הבחירה הראשונה לטיפול השמרני, במיוחד כאשר בבדיקה נמצאים גורמים שניתן
            להשפיע עליהם כמו רגישות של רצפת האגן, עומס מקומי, קושי בהרפיה או דפוסי תנועה וישיבה
            שמחמירים את התסמינים.
            <Ref n={2} />
            <Ref n={8} />
          </p>
          <p className={pClass}>הטיפול כולל:</p>
          <ul className={ulClass}>
            <li>התאמת עומסים והרגלי ישיבה</li>
            <li>עבודה על הרפיה ותיאום של רצפת האגן</li>
            <li>טיפול ברגישות של שרירים ורקמות באזור האגן</li>
            <li>תנועה ותרגול של הגב, האגן והירכיים בהתאם לממצאים</li>
            <li>עבודה על נשימה ושליטה בלחץ באזור הבטן והאגן</li>
            <li>חזרה הדרגתית לפעילות</li>
          </ul>
          <p className={pClass}>
            להרחבה על ההערכה והטיפול ברצפת האגן:{" "}
            <Link
              href="/professional-info/mens-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              טיפול רצפת אגן לגבר
            </Link>
            .
          </p>

          <h2 className={h2Class}>מה קורה אם טיפול שמרני אינו מספיק?</h2>
          <p className={pClass}>
            כאשר התסמינים נמשכים למרות טיפול שמרני, קיימות אפשרויות נוספות בהתאם לאבחנה ולחומרת
            התסמינים. הן יכולות לכלול טיפול תרופתי, חסימות עצביות ובמקרים נבחרים טיפולים פולשניים
            יותר כמו neuromodulation&rlm;, pulsed radiofrequency&rlm; או ניתוח לשחרור העצב.
            <Ref n={2} />
            <Ref n={6} />
            <Ref n={9} />
          </p>
          <p className={pClass}>
            הבחירה בטיפולים אלה נעשית במסגרת רפואית ובהתאם למקרה הספציפי.
          </p>

          <h2 className={h2Class}>למי יכולה להתאים הערכה פיזיותרפית?</h2>
          <ul className={ulClass}>
            <li>יש כאב מתמשך בפרינאום, בפין, בשק האשכים או סביב פי הטבעת</li>
            <li>הכאב מחמיר באופן ברור בישיבה</li>
            <li>קיימת תחושת שריפה, נימול או רגישות עצבית באזור</li>
            <li>יש שילוב של כאב אגן ורגישות או מתח ברצפת האגן</li>
            <li>בירור קודם לא הסביר באופן מלא את מקור התסמינים</li>
            <li>
              רוצים לבדוק האם קיימים גורמים מוסקולוסקלטליים שניתן להשפיע עליהם כחלק מהטיפול
            </li>
          </ul>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              אם כאב באזור האגן או איברי המין מחמיר בישיבה או מפריע לפעילות היומיומית, בדיקה
              פיזיותרפית יכולה לעזור להבין האם קיימים גורמים של רצפת האגן, מערכת השריר והשלד או
              ניהול עומסים שיכולים להיות חלק מהתמונה, ולבנות תוכנית טיפול בהתאם.
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
              Ploteau S, Cardaillac C, Perrouin-Verbe MA, Riant T, Labat JJ. Pudendal Neuralgia Due
              to Pudendal Nerve Entrapment: Warning Signs Observed in Two Cases and Review of the
              Literature. Pain Physician. 2016;19(3):E449-E454.
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Pérez-López FR, Hita-Contreras F. Management of Pudendal Neuralgia. Climacteric.
              2014;17(6):654-656. doi:
              <a
                href="https://doi.org/10.3109/13697137.2014.912263"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.3109/13697137.2014.912263
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Labat JJ, Riant T, Robert R, Amarenco G, Lefaucheur JP, Rigaud J. Diagnostic Criteria
              for Pudendal Neuralgia by Pudendal Nerve Entrapment (Nantes Criteria). Neurourol
              Urodyn. 2008;27(4):306-310. doi:
              <a
                href="https://doi.org/10.1002/nau.20505"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.20505
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Hentzen C, Musco S, Amarenco G, Del Popolo G, Panicker JN. Approach and Management to
              Patients With Neurological Disorders Reporting Sexual Dysfunction. Lancet Neurol.
              2022;21(6):551-562. doi:
              <a
                href="https://doi.org/10.1016/S1474-4422(22)00036-9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/S1474-4422(22)00036-9
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Pereira A, Pérez-Medina T, Rodríguez-Tapia A, Chiverto Y, Lizarraga S. Correlation
              Between Anatomical Segments of the Pudendal Nerve and Clinical Findings of the Patient
              With Pudendal Neuralgia. Gynecol Obstet Invest. 2018;83(6):593-599. doi:
              <a
                href="https://doi.org/10.1159/000489497"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1159/000489497
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Ahmed M, Zavridis P, Hadjiconstanti D, Zis P. The Diagnosis and Management of Pudendal
              Neuralgia. Pain Ther. 2026;15(1):97-129. doi:
              <a
                href="https://doi.org/10.1007/s40122-025-00803-w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s40122-025-00803-w
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
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
            <li id="ref-8" className="scroll-mt-24">
              Levesque A, Bautrant E, Quistrebert V, et al. Recommendations on the Management of
              Pudendal Nerve Entrapment Syndrome: A Formalised Expert Consensus. Eur J Pain.
              2022;26(1):7-17. doi:
              <a
                href="https://doi.org/10.1002/ejp.1861"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/ejp.1861
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Tricard T, Munier P, Story F, Lang H, Saussine C. The Drug-Resistant Pudendal
              Neuralgia Management: A Systematic Review. Neurourol Urodyn. 2019;38(1):13-21. doi:
              <a
                href="https://doi.org/10.1002/nau.23824"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.23824
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
