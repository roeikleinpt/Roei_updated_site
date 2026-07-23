import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import ArticleFigure from "../../components/ArticleFigure";
import AuthorBox from "../../components/AuthorBox";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("groin-pain-athletes");

export const metadata: Metadata = {
  title: "כאבים במפשעה אצל ספורטאים: גורמים, הערכה וטיפול",
  description:
    "כאבים במפשעה אצל ספורטאים אינם אבחנה אחת. הכירו את הגורמים האפשריים, תהליך ההערכה, אפשרויות הטיפול והקשר האפשרי לתסמיני רצפת האגן.",
  alternates: { canonical: "/professional-info/groin-pain-athletes" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "כאבים במפשעה אצל ספורטאים: גורמים, הערכה וטיפול | רועי קליין פיזיותרפיה",
    description: "כאב מפשעה אצל ספורטאים — גורמים אפשריים, הערכה, טיפול והקשר לרצפת האגן.",
    url: "/professional-info/groin-pain-athletes",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const h3Class = "mt-6 text-lg font-bold text-slate-900";

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
    q: "האם צריך להפסיק להתאמן?",
    a: "לא תמיד. לעיתים ניתן להמשיך בפעילות מותאמת ולהפחית זמנית רק את העומסים שמעוררים החמרה. ההחלטה תלויה בסוג הכאב, בעוצמתו ובתגובה לאחר האימון.",
  },
  {
    q: "האם כאב במפשעה הוא בהכרח מתיחה?",
    a: "לא. כאב במפשעה יכול להיות קשור למקרבים, למכופפי הירך, למפרק הירך, לעצם החיק, לתעלה המפשעתית או לגורמים רפואיים אחרים.",
  },
  {
    q: "האם דליפת שתן יכולה להופיע אצל ספורטאים גברים?",
    a: "כן. מחקרים מצאו תסמיני רצפת אגן ודליפת שתן גם בקרב ספורטאים גברים. עם זאת, אין להסיק מכך שכאב המפשעה הוא שגורם לדליפה.",
  },
];

export default function GroinPainAthletesArticle() {
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
            כאבים במפשעה אצל ספורטאים: גורמים אפשריים, הערכה וטיפול
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאבים במפשעה שכיחים בענפי ספורט הכוללים ריצה, בעיטות, האצות ושינויי כיוון, אך
            המיקום שבו מורגש הכאב אינו בהכרח המקור שלו. המפשעה היא אזור שבו נפגשים שרירים,
            גידים, מפרק הירך, עצמות האגן, התעלה המפשעתית, עצבים ומערכות נוספות.
          </p>
          <p className={pClass}>
            לכן כאב במפשעה הוא תסמין ולא אבחנה. אצל אדם אחד הוא עשוי להיות קשור למקרבים, אצל
            אחר למפרק הירך, ולעיתים יותר מגורם אחד מעורב באותה תלונה. הסכמת דוחא לכאבי מפשעה
            אצל ספורטאים (Doha Agreement) מציעה סיווג קליני המבוסס על מיקום הכאב, התסמינים
            והבדיקה הגופנית, ולא רק על שם של מבנה אנטומי או ממצא בהדמיה.
            <Ref n={1} />
          </p>

          <ArticleFigure
            src="/professional-info/groin-pain-athletes.webp"
            alt="אינפוגרפיקה המציגה מקורות אפשריים לכאבים במפשעה אצל ספורטאים, מרכיבי ההערכה ותסמינים נלווים שחשוב לציין"
          />

          <h2 className={h2Class}>מה יכול לגרום לכאב במפשעה?</h2>
          <p className={pClass}>
            הסיווג הקליני המקובל כולל כאב הקשור למקרבים (Adductor Related Groin Pain), כאב
            הקשור למכופפי הירך ובפרט לשריר הכסל והמותניים (Iliopsoas Related Groin Pain), כאב
            הקשור לתעלה המפשעתית (Inguinal Related Groin Pain), כאב הקשור לעצם החיק (Pubic
            Related Groin Pain), כאב שמקורו במפרק הירך (Hip Related Groin Pain) וגורמים נוספים
            שאינם בהכרח ממערכת השריר והשלד.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h3 className={h3Class}>כאב הקשור למקרבים</h3>
          <p className={pClass}>
            כאב הקשור למקרבים מורגש בדרך כלל בחלק הפנימי של הירך או סמוך לחיבור המקרבים לעצם
            החיק. בבדיקה מחפשים רגישות מקומית והופעה של הכאב המוכר בזמן הפעלת השרירים כנגד
            התנגדות.
          </p>
          <p className={pClass}>
            הכאב יכול להופיע בבעיטה, בריצה מהירה, בשינויי כיוון, בהחלקה לצדדים או בתנועה שבה
            הרגל מתרחקת מהגוף. לא כל כאב כזה מעיד על קרע, ובמקרים רבים מדובר בתגובה לעומס
            מצטבר.
          </p>

          <h3 className={h3Class}>כאב הקשור למכופפי הירך</h3>
          <p className={pClass}>
            כאב הקשור למכופפי הירך, ובפרט לשריר הכסל והמותניים (Iliopsoas), מורגש לעיתים בעומק
            החלק הקדמי של המפשעה. הוא עשוי להחמיר בהרמת הברך, בריצה בעלייה, בכיפוף חוזר של הירך
            או במתיחת האזור.
          </p>
          <p className={pClass}>
            בגלל הקרבה למפרק הירך, תסמינים ממכופפי הירך ומתוך המפרק יכולים להרגיש דומים, ולכן
            הבדיקה אינה מסתכמת במישוש של נקודה אחת.
          </p>

          <h3 className={h3Class}>כאב הקשור לתעלה המפשעתית</h3>
          <p className={pClass}>
            כאב הקשור לתעלה המפשעתית יכול להופיע ללא בקע מפשעתי שניתן לראות או למשש. הוא עשוי
            להחמיר בשיעול, בעיטוש, במאמץ בטני או בפעילות ספורטיבית עצימה.
          </p>
          <p className={pClass}>
            חלק מהמקרים האלה מקבלים את הכינוי בקע ספורטאים (Sports Hernia), אף שהמונח אינו
            מתאר בהכרח בקע אמיתי. מידע מורחב מופיע בדף הנפרד על{" "}
            <Link
              href="/professional-info/sports-hernia-athletic-pubalgia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              בקע ספורטאים (Sports Hernia, Athletic Pubalgia)
            </Link>
            .
          </p>

          <h3 className={h3Class}>כאב הקשור לעצם החיק</h3>
          <p className={pClass}>
            כאב הקשור לעצם החיק, פיוביס (Pubic Related Groin Pain), מתאפיין ברגישות סביב מאחה
            עצמות החיק (Pubic Symphysis) והעצם הסמוכה. הוא יכול להופיע יחד עם כאב במקרבים או
            באזור הבטן התחתונה.
          </p>

          <h3 className={h3Class}>כאב שמקורו במפרק הירך</h3>
          <p className={pClass}>
            מפרק הירך עשוי לגרום לכאב עמוק במפשעה. קליקים, תחושת תפיסה, נעילה, הגבלה בטווח
            התנועה או כאב בכיפוף ובסיבוב יכולים לעורר חשד למעורבות מפרקית.
          </p>
          <p className={pClass}>
            ממצאים בצילום או בבדיקת תהודה מגנטית (MRI) אינם מוכיחים לבדם מה גורם לכאב. שינויים
            מבניים מסוימים נמצאים גם אצל ספורטאים ללא תסמינים, ולכן יש לפרש אותם יחד עם התמונה
            הקלינית והבדיקה.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>מה כוללת ההערכה?</h2>
          <p className={pClass}>
            ההערכה מתחילה בהבנת מיקום הכאב ודפוס הופעתו. חשוב לברר האם הכאב התחיל בבת אחת או
            התפתח בהדרגה, אילו פעולות מחמירות אותו, מה השתנה בעומס האימונים והאם קיימים תסמינים
            נוספים.
          </p>
          <p className={pClass}>
            הבדיקה עשויה לכלול מישוש של אזור התלונה ושרירים רלוונטיים, בדיקת כוח, תנועה ותפקוד,
            הערכת מפרק הירך והאגן ושחזור מבוקר של פעולות המעוררות את הכאב.
          </p>
          <p className={pClass}>
            בהתאם לענף הספורט ניתן לבדוק גם ריצה, עמידה על רגל אחת, קפיצה, שינוי כיוון, בעיטה
            או פעולות אחרות הרלוונטיות לתלונה.
          </p>

          <h2 className={h2Class}>איך מטפלים בכאבים במפשעה?</h2>
          <p className={pClass}>
            הטיפול נקבע לפי מקור הכאב, משך התסמינים, רמת הפעילות והממצאים בבדיקה. אין תרגיל אחד
            או פרוטוקול אחיד שמתאים לכל כאב במפשעה.
          </p>
          <p className={pClass}>
            ברוב המצבים הקשורים למערכת השריר והשלד, השיקום כולל ניהול עומסים, תרגול פעיל
            והתקדמות הדרגתית לפעולות הנדרשות בספורט. בהתאם לממצאים ניתן לעבוד על כוח המקרבים,
            מכופפי הירך, שרירי הבטן והגו, שליטה עצבית שרירית (Neuromuscular Control), טווחי
            תנועה ועוד.
          </p>
          <p className={pClass}>
            במחקר השוואתי על ספורטאים עם כאב ממושך הקשור למקרבים, תוכנית תרגול פעילה הייתה
            יעילה יותר מטיפול שלא כלל אימון פעיל. חשוב להדגיש שהמחקר עסק בכאב הקשור למקרבים ולא
            בכל סוג של כאב במפשעה.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            סקירה קלינית משנת 2025 ממליצה על פיזיותרפיה פעילה ומפוקחת כטיפול ראשוני בכאב הקשור
            למקרבים ובכאב הקשור לעצם החיק. בכאב הקשור לתעלה המפשעתית, לאחר שנשלל בקע אמיתי,
            הטיפול עשוי להתמקד בחיזוק ובשיקום עצבי שריר.
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>חזרה לספורט</h2>
          <p className={pClass}>
            החזרה לספורט אינה נקבעת רק לפי מספר השבועות שעברו. היא צריכה להתבסס על השיפור בכאב,
            בכוח, בטווחי התנועה וביכולת לבצע את דרישות הענף.
          </p>
          <p className={pClass}>
            שחקן כדורגל עשוי להזדקק להתקדמות מריצה קלה להאצות, בלימות, שינויי כיוון ובעיטות.
            אצל רץ הדגש עשוי להיות על נפח הריצה, קצב, עליות ותגובה ביום שלאחר האימון.
          </p>
          <p className={pClass}>
            המטרה היא לא רק לבצע תרגיל ללא כאב בטיפול, אלא לחזור בהדרגה לפעילות שבה התלונה
            הופיעה.
          </p>

          <h2 className={h2Class}>מה הקשר לרצפת האגן?</h2>
          <p className={pClass}>
            כאב במפשעה יכול להופיע לצד דליפת שתן (Urinary Incontinence), דחיפות או תכיפות במתן
            שתן (Urinary Urgency and Frequency), קושי להתחיל להשתין (&quot;הססנות&quot;), תחושת
            התרוקנות לא מלאה (Incomplete Emptying), כאב באגן או בפרינאום, כאב באשכים או בפין,
            כאב בזמן או לאחר שפיכה או זקפה.
          </p>
          <p className={pClass}>
            הופעת התסמינים באותה תקופה אינה מוכיחה שיש להם מקור משותף. עם זאת, הם פרט שיש לשים
            אליו לב, ואין להתעלם ממנו או להסתירו בגלל מבוכה.
          </p>
          <p className={pClass}>
            במחקר שנערך בקרב 325 ספורטאי עילית צעירים, 29.3% מהגברים דיווחו על לפחות תסמין אחד
            הקשור לרצפת האגן. פעילות יתר של שלפוחית השתן (Overactive Bladder) וכאב אגני היו בין
            התלונות הנפוצות במדגם. המחקר לא התמקד בספורטאים עם כאבי מפשעה ולכן אינו מוכיח קשר
            בין התופעות.
            <Ref n={4} /> במחקר נוסף שכלל 299 ספורטאים גברים ברמת עילית, 14.7% דיווחו על דליפת
            שתן. גם מחקר זה לא בדק קשר לכאב במפשעה.
            <Ref n={5} />
          </p>
          <p className={pClass}>
            כאשר תסמיני שתן, מין או יציאות מופיעים לצד כאב במפשעה, נכון לכלול אותם בהערכה.
            בהתאם לתמונה הקלינית, ייתכן שיידרש בירור רפואי או אורולוגי, ובהמשך גם{" "}
            <Link
              href="/professional-info/mens-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              הערכה פיזיותרפית של רצפת האגן
            </Link>
            . הנחיות איגוד האורולוגים האמריקאי לכאב אגני כרוני בגברים מדגישות תשאול רחב, בדיקה
            של תסמיני שתן ומין, הערכת האגן ושלילת גורמים רפואיים אחרים לפני שמייחסים את התסמינים
            לרצפת האגן.
            <Ref n={6} />
          </p>

          <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              מוזמן ליצור קשר לבירור התאמה להערכה פיזיותרפית.
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
            כאבים במפשעה אצל ספורטאים אינם אבחנה אחת. הערכה מסודרת מסייעת להבין אילו מבנים
            ומערכות עשויים להיות מעורבים ולהתאים את השיקום לדרישות האדם והספורט.
          </p>
          <p className={pClass}>
            כאשר קיימים גם תסמיני שתן, כאב באגן, כאב באשכים, שינויים בתפקוד המיני או תסמינים
            ביציאות, חשוב לציין אותם. הם אינם מוכיחים שמקור הכאב הוא ברצפת האגן, אך הם עשויים
            להשפיע על הבירור ועל הטיפול המתאים.
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
              Weir A, Brukner P, Delahunt E, et al. Doha agreement meeting on terminology and
              definitions in groin pain in athletes. Br J Sports Med. 2015;49(12):768-774. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2015-094869"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2015-094869
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Maloy W, Merrigan B, Hulsopple CD. Groin Pain and Injuries: Evaluation and
              Management. Am Fam Physician. 2025;111(4):337-343.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/40258222/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                PMID: 40258222
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Hölmich P, Uhrskou P, Ulnits L, et al. Effectiveness of active physical training
              as treatment for long-standing adductor-related groin pain in athletes: randomised
              trial. Lancet. 1999;353(9151):439-443. doi:
              <a
                href="https://doi.org/10.1016/S0140-6736(98)03340-6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/S0140-6736(98)03340-6
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Giagio S, Adami PE, Bermon S, et al. Nearly half of 325 athletes reported pelvic
              floor symptoms: a cross-sectional study at the Lima 2024 World Athletics U20
              Championships. BMJ Open Sport Exerc Med. 2025;11(3):e002564. doi:
              <a
                href="https://doi.org/10.1136/bmjsem-2025-002564"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bmjsem-2025-002564
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Rodríguez-López ES, Calvo-Moreno SO, Basas-García Á, et al. Prevalence of urinary
              incontinence among elite athletes of both sexes. J Sci Med Sport.
              2021;24(4):338-344. doi:
              <a
                href="https://doi.org/10.1016/j.jsams.2020.09.017"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jsams.2020.09.017
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Lai HH, Pontari MA, Argoff CE, et al. Male Chronic Pelvic Pain: AUA Guideline,
              Parts I and II. J Urol. 2025;214(2):116-137. doi:
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
