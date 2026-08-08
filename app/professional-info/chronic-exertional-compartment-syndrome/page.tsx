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

const article = getArticle("chronic-exertional-compartment-syndrome");

export const metadata: Metadata = {
  title: "תסמונת מדור כרונית בשוק (CECS): תסמינים, אבחון וטיפול",
  description:
    "כאב, לחץ או תחושת מלאות שמופיעים באופן צפוי בזמן ריצה ונרגעים לאחר עצירה. מה מאפיין CECS, מה מקומה של מדידת הלחץ התוך־מדורי, מה ההבדל מתסמונת מדור חריפה ומתי נשקל ניתוח.",
  alternates: { canonical: "/professional-info/chronic-exertional-compartment-syndrome" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "תסמונת מדור כרונית בשוק (CECS) | רועי קליין פיזיותרפיה",
    description:
      "דפוס הסימפטומים במאמץ, מגבלות מדידת הלחץ התוך־מדורי, ההבחנה מתסמונת מדור חריפה, טיפול שמרני ומתי נשקלת פסיוטומיה.",
    url: "/professional-info/chronic-exertional-compartment-syndrome",
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
    q: "האם CECS היא מצב מסוכן?",
    a: "CECS כשלעצמה אינה בדרך כלל מצב חירום ומאופיינת בתסמינים שחוזרים בזמן פעילות ונרגעים במנוחה. היא שונה מתסמונת מדור חריפה, שהיא מצב דחוף שעלול לגרום לנזק משמעותי אם אינו מטופל בזמן.",
  },
  {
    q: "האם חייבים למדוד לחץ בתוך המדור כדי לאבחן CECS?",
    a: "לא ניתן לענות על כך באופן מוחלט. מדידת לחץ תוך מדורי עדיין משמשת בבירור, אך הקריטריונים המקובלים אינם מבוססים מספיק כדי להתייחס לבדיקה לבדה כאל אמת מידה מוחלטת. הסיפור הקליני ועירור הסימפטומים בזמן מאמץ הם מרכיבים מרכזיים באבחנה.",
  },
  {
    q: "האם CECS מופיעה רק אצל רצים צעירים?",
    a: "לא. היא שכיחה במיוחד אצל אנשים פעילים העוסקים בריצה ובפעילות חוזרת של הגפה, אבל תוארה גם בענפי ספורט אחרים וגם באנשים מבוגרים יותר.",
  },
  {
    q: "האם חייבים ניתוח?",
    a: "לא. כיום מקובל לנסות במקרים מתאימים טיפול שמרני לפני ניתוח. ניתוח נשקל בעיקר כאשר הסימפטומים ממשיכים להגביל למרות שיקום מתאים.",
  },
  {
    q: "איך מבדילים בין CECS לשבר מאמץ או MTSS?",
    a: "אין סימן יחיד שמאפשר להבדיל ביניהם. ב־CECS הדפוס של הופעת כאב או לחץ במהלך מאמץ והקלה לאחר עצירה הוא מאפיין חשוב. ב־MTSS ובפציעות עומס בעצם מיקום ופיזור הרגישות וההתנהגות של הכאב יכולים להיות שונים. הבדיקה הקלינית וההיסטוריה משמשות יחד להבחנה.",
  },
];

export default function CecsArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            תסמונת מדור כרונית בשוק
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            תסמונת מדור כרונית בשוק (Chronic Exertional Compartment Syndrome&rlm; &ndash;
            CECS&rlm;) היא אחת הסיבות האפשריות לכאב שמופיע בזמן ריצה או פעילות גופנית. התסמינים
            נוטים להופיע באופן יחסית צפוי במהלך המאמץ, ולעיתים כוללים כאב, תחושת לחץ או התכווצות
            בשוק. לאחר הפסקת הפעילות הם בדרך כלל נרגעים בהדרגה.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            CECS&rlm; היא אחת האבחנות בקבוצת כאב בשוק במאמץ (Exercise-Induced Leg Pain&rlm; &ndash;
            EILP&rlm;), לצד תסמונת עומס השוקה הפנימית, פציעות עומס בעצם ומצבים נוספים.
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/exercise-induced-leg-pain"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב בשוק במאמץ
            </Link>
            .
          </p>

          <h2 className={h2Class}>מהי תסמונת מדור?</h2>
          <p className={pClass}>
            שרירי השוק מחולקים למספר מדורים המוקפים ברקמת חיבור חזקה הנקראת פאשיה. בזמן פעילות
            השרירים מתמלאים יותר בדם ונפחם עולה. ב־CECS&rlm; מופיעים במהלך המאמץ תסמינים הקשורים
            לעלייה בלחץ בתוך אחד המדורים. עם זאת, המנגנון המדויק של התסמונת עדיין אינו מוסכם
            לחלוטין.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            התסמונת מופיעה לרוב במדור הקדמי של השוק, ואז הכאב או תחושת הלחץ מורגשים בדרך כלל בקדמת
            השוק. התסמינים יכולים להתעורר בריצה, צעידה, הליכה ממושכת או פעילות אחרת הכוללת הפעלה
            חוזרת של אותם השרירים.
          </p>

          <h2 className={h2Class}>מה מרגישים?</h2>
          <p className={pClass}>
            התיאור הטיפוסי הוא של כאב או תחושת לחץ שמופיעים לאחר פרק זמן מסוים של פעילות וחוזרים
            בתנאים דומים. אנשים יכולים לתאר:
          </p>
          <ul className={ulClass}>
            <li>כאב עמום או מתגבר בשוק</li>
            <li>תחושת לחץ או &rdquo;התפוצצות&ldquo; בתוך השריר</li>
            <li>התכווצות או כבדות</li>
            <li>נימול או עקצוצים</li>
            <li>לעיתים חולשה שמופיעה במהלך הפעילות</li>
          </ul>
          <p className={pClass}>
            אחד המאפיינים החשובים הוא{" "}
            <span className="font-bold">
              הקשר הברור למאמץ: התסמינים נוטים להתגבר כל עוד הפעילות נמשכת ולרדת לאחר שמפסיקים
            </span>
            . הבדיקה במנוחה יכולה להיות תקינה לחלוטין.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>איך מאבחנים?</h2>
          <p className={pClass}>
            הסיפור הקליני הוא חלק מרכזי באבחנה. חשוב להבין מתי התסמינים מתחילים, האם הם חוזרים לאחר
            זמן או מרחק דומים, מה מרגישים בזמן המאמץ ומה קורה לאחר שמפסיקים. לעיתים מבצעים גם בדיקה
            לאחר פעילות שמצליחה לעורר את התסמינים.
            <Ref n={1} />
            <Ref n={2} />{" "}מכיוון שכאב בשוק בזמן מאמץ יכול להיגרם מסיבות שונות, יש צורך לשקול גם
            אבחנות אחרות, כגון תסמונת עומס השוקה הפנימית, פציעת עומס בעצם, מקור עצבי או הפרעה
            וסקולרית.
          </p>

          <h2 className={h2Class}>ומה לגבי מדידת לחץ בתוך המדור?</h2>
          <p className={pClass}>
            מדידת לחץ תוך מדורי משמשת כבר שנים כחלק מהבירור של CECS&rlm;. קיימים קריטריונים מוכרים,
            ובהם ערכי לחץ שנמדדים לפני או לאחר מאמץ, אך כיום ידוע שהבדיקה אינה פשוטה כפי שחשבו
            בעבר.
          </p>
          <p className={pClass}>
            מחקרים הראו חפיפה בין ערכי הלחץ של אנשים עם תסמינים לבין אנשים בריאים, וקיימת שונות
            משמעותית לפי שיטת המדידה, פרוטוקול הפעילות ומועד המדידה. גם קבוצת מומחים בינלאומית לא
            הגיעה להסכמה מלאה לגבי התפקיד והערכים המדויקים של מדידת הלחץ באבחנה.
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            לכן כיום{" "}
            <span className="font-bold">
              לא נכון להציג ערך לחץ יחיד כבדיקה ש&rdquo;מוכיחה&ldquo; או שוללת CECS&rlm;
            </span>
            . הסקירה העדכנית מ־2026 מדגישה שההיסטוריה הקלינית ויכולת לעורר את הסימפטומים נשארות
            מרכזיות, בעוד ערכה של מדידת הלחץ עדיין שנוי במחלוקת.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>תסמונת מדור כרונית לעומת תסמונת מדור חריפה</h2>
          <p className={pClass}>
            חשוב מאוד להבדיל בין תסמונת מדור כרונית במאמץ (CECS&rlm;) לבין תסמונת מדור חריפה (Acute
            Compartment Syndrome&rlm; &ndash; ACS&rlm;).
          </p>
          <p className={pClass}>
            CECS&rlm; מתפתחת בקשר לפעילות, חוזרת בדרך כלל בדפוס דומה ונרגעת לאחר הפסקת המאמץ. היא
            אינה בדרך כלל מצב חירום.
          </p>
          <p className={pClass}>
            לעומתה, תסמונת מדור חריפה היא מצב רפואי דחוף שעלול להתפתח לאחר שבר, חבלה משמעותית,
            פציעת מעיכה או מצבים אחרים. הכאב בה נמשך ומחמיר, ולעיתים אינו תואם את חומרת הפציעה
            שנראית מבחוץ. יכולים להופיע גם כאב במתיחה פסיבית של השרירים, נימול, חולשה ומדור נוקשה
            ומתוח. ללא טיפול מהיר עלול להיגרם נזק בלתי הפיך לשרירים ולעצבים.
            <Ref n={5} />
          </p>
          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              אם לאחר חבלה מופיעים כאב חריג שממשיך להחמיר, שינוי תחושה או חולשה, אין להמתין לבדיקה
              פיזיותרפית רגילה ויש לפנות בדחיפות להערכה רפואית.
            </p>
          </div>

          <h2 className={h2Class}>כיצד מטפלים ב־CECS&rlm;?</h2>
          <p className={pClass}>
            בשנים האחרונות קיימת מגמה להציע תחילה טיפול שמרני, במיוחד כאשר התמונה הקלינית מתאימה
            ואין סיבה המחייבת התערבות אחרת. הטיפול יכול לכלול התאמת פעילות, שיקום מובנה ולעיתים
            שינוי של מאפייני הריצה בהתאם לממצאים.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            המטרה היא לבדוק האם ניתן להפחית את התסמינים ולאפשר חזרה לפעילות באמצעות שינוי הדרישות
            המוטלות על השוק ובנייה הדרגתית של היכולת להתמודד איתן. אין כיום פרוטוקול שמרני יחיד
            שהוכח כמתאים לכל המטופלים.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>מתי נשקל ניתוח?</h2>
          <p className={pClass}>
            כאשר הסימפטומים טיפוסיים, ממשיכים להגביל את הפעילות למרות ניסיון טיפול שמרני מתאים,
            והאבחנה נחשבת סבירה, ניתן לשקול fasciotomy&rlm;, ניתוח שבו משחררים את הפאשיה של המדור
            המעורב. מחקרים מדווחים על שיפור אצל חלק משמעותי מהמטופלים לאחר ניתוח, אך{" "}
            <span className="font-bold">
              שיעורי שביעות הרצון והחזרה לספורט משתנים מאוד בין המחקרים
            </span>
            . לכן גם ניתוח אינו פתרון שמבטיח חזרה מלאה לפעילות לכל אדם.
            <Ref n={1} />
            <Ref n={6} />
          </p>

          <h2 className={h2Class}>מה כוללת הערכה פיזיותרפית?</h2>
          <p className={pClass}>
            הערכה מתחילה בתיאור מדויק של דפוס הסימפטומים: איזה מאמץ מעורר אותם, אחרי כמה זמן הם
            מתחילים, האם הם מופיעים בשתי הרגליים, מה מרגישים בנוסף לכאב וכמה מהר הם משתנים לאחר
            עצירה. בהמשך נבדקים גורמים נוספים שיכולים להסביר כאב בשוק במאמץ, ונעשית הערכה תפקודית
            בהתאם לפעילות שהאדם רוצה לבצע.
          </p>
          <p className={pClass}>
            כאשר התמונה מתאימה ל־CECS&rlm;, ניתן לנסות תוכנית שמרנית הכוללת התאמת עומסים ושיקום. אם
            האבחנה אינה ברורה, אם הטיפול אינו מתקדם כמצופה או אם יש חשד למצב אחר, יש מקום להמשך
            בירור רפואי.
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/medial-tibial-stress-syndrome"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              תסמונת עומס השוקה הפנימית
            </Link>{" "}
            ·{" "}
            <Link
              href="/professional-info/stress-fractures"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שברי מאמץ
            </Link>
            .
          </p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              אם כאב או לחץ בשוק מופיעים באופן חוזר בזמן ריצה או פעילות ונרגעים לאחר עצירה, הערכה
              יכולה לעזור להבין האם דפוס הסימפטומים מתאים ל־CECS או למקור אחר של כאב בשוק.
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
              Vogels S, Zimmermann WO. Diagnostic and Therapeutic Dilemmas in Chronic Exertional
              Compartment Syndrome. Br Med Bull. 2026;159(1):ldag020. doi:
              <a
                href="https://doi.org/10.1093/bmb/ldag020"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/bmb/ldag020
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Vogels S, Ritchie ED, Borger van der Burg BLS, et al. Clinical Consensus on Diagnosis
              and Treatment of Patients With Chronic Exertional Compartment Syndrome of the Leg: A
              Delphi Analysis. Sports Med. 2022;52(12):3055-3064. doi:
              <a
                href="https://doi.org/10.1007/s40279-022-01729-5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s40279-022-01729-5
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Roberts A, Franklyn-Miller A. The Validity of the Diagnostic Criteria Used in Chronic
              Exertional Compartment Syndrome: A Systematic Review. Scand J Med Sci Sports.
              2012;22(5):585-595. doi:
              <a
                href="https://doi.org/10.1111/j.1600-0838.2011.01386.x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1111/j.1600-0838.2011.01386.x
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Aweid O, Del Buono A, Malliaras P, et al. Systematic Review and Recommendations for
              Intracompartmental Pressure Monitoring in Diagnosing Chronic Exertional Compartment
              Syndrome of the Leg. Clin J Sport Med. 2012;22(4):356-370. doi:
              <a
                href="https://doi.org/10.1097/JSM.0b013e3182580e1d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/JSM.0b013e3182580e1d
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              von Keudell AG, Weaver MJ, Appleton PT, et al. Diagnosis and Treatment of Acute
              Extremity Compartment Syndrome. Lancet. 2015;386(10000):1299-1310. doi:
              <a
                href="https://doi.org/10.1016/S0140-6736(15)00277-9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/S0140-6736(15)00277-9
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Elsenosy AM, Elnewishy A, Hassan E, Delewar RA. Outcomes of Fasciotomy Versus
              Conservative Management for Chronic Exertional Compartment Syndrome: A Systematic
              Review and Meta-Analysis. Cureus. 2024;16(12):e75803. doi:
              <a
                href="https://doi.org/10.7759/cureus.75803"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.7759/cureus.75803
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
