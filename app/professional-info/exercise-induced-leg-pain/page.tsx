import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import ArticleFigure from "../../components/ArticleFigure";
import ComparisonTable from "../../components/ComparisonTable";
import AuthorBox from "../../components/AuthorBox";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("exercise-induced-leg-pain");

export const metadata: Metadata = {
  title: "כאב בשוק במאמץ (EILP): מה יכול לגרום לו וכיצד מבדילים",
  description:
    "כאב שמופיע בשוק בריצה או באימון אינו אבחנה בפני עצמה. תסמונת עומס השוקה הפנימית, שבר מאמץ, תסמונת מדור כרונית, מקור עצבי או וסקולרי — במה הם נבדלים, ואיך הערכה פיזיותרפית מצמצמת את האפשרויות.",
  alternates: { canonical: "/professional-info/exercise-induced-leg-pain" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "כאב בשוק במאמץ (EILP) | רועי קליין פיזיותרפיה",
    description:
      "מונח מטרייה לקבוצת מצבים הגורמים לכאב בשוק הקשור לפעילות. השוואה בין MTSS, שבר מאמץ ו־CECS, ומה שדפוס הסימפטומים מגלה.",
    url: "/professional-info/exercise-induced-leg-pain",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const h3Class = "mt-6 text-xl font-bold text-slate-900";

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
    q: "האם כל כאב בשוק במאמץ הוא MTSS?",
    a: "לא. MTSS היא אחת האבחנות השכיחות, אך כאב בשוק בזמן פעילות יכול להיגרם גם מפציעת עומס בעצם, מתסמונת מדור כרונית בשוק, ממקור עצבי, ממקור וסקולרי או ממצבים אחרים.",
  },
  {
    q: "מה ההבדל בין EILP ל־MTSS?",
    a: "EILP הוא מונח מטרייה המתאר כאב בשוק הקשור למאמץ. MTSS היא אבחנה ספציפית אחת בתוך הקבוצה הזאת.",
  },
  {
    q: "האם Shin splints הוא שם של אבחנה?",
    a: "המונח שין ספלינט (Shin splints) שימש לאורך השנים בצורה רחבה ולא תמיד עקבית לתיאור כאבים בשוק. כיום עדיף להשתמש באבחנה מדויקת יותר כאשר ניתן לקבוע אותה.",
  },
  {
    q: "מהי תסמונת מדור כרונית בשוק?",
    a: "תסמונת מדור כרונית בשוק היא מצב שבו כאב, לחץ ולעיתים תסמינים כמו שריפה או שינוי בתחושה מופיעים בזמן מאמץ. ההיסטוריה של הסימפטומים והאופן שבו הם מופיעים ונרגעים הם חלק חשוב מהאבחנה.",
  },
  {
    q: "אם הכאב חולף כשאני מפסיק לרוץ, זה אומר שאין בעיה?",
    a: "לא. דווקא הקשר בין תחילת הכאב למאמץ והאופן שבו הוא משתנה לאחר הפסקת הפעילות יכולים לספק מידע חשוב על מקור התסמינים.",
  },
];

const comparisonCharacteristics = [
  "אופי הכאב",
  "מתי מופיע",
  "אחרי עצירה",
  "תחושות נוספות",
  "אבחון",
];

const comparisonItems = [
  {
    name: "MTSS",
    values: [
      "כאב מפושט יחסית לאורך הצד הפנימי של השוקה",
      "בזמן או לאחר עומס",
      "יכול להישאר כואב או רגיש",
      "לרוב כאב ורגישות",
      "בעיקר קליני",
    ],
  },
  {
    name: "שבר מאמץ",
    values: [
      "כאב ממוקד יותר בעצם",
      "מחמיר עם העמסה",
      "יכול להמשיך לכאוב",
      "בעיקר כאב ורגישות מקומית",
      "לעיתים נדרשת הדמיה",
    ],
  },
  {
    name: "CECS",
    values: [
      "כאב, לחץ או תחושת מלאות",
      "מופיע באופן צפוי במהלך מאמץ",
      "לרוב נרגע בהדרגה תוך דקות",
      "לעיתים נימול, עקצוצים או חולשה",
      "דפוס הסימפטומים במאמץ מרכזי באבחנה",
    ],
  },
];

export default function EilpArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            כאב בשוק במאמץ
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאב שמופיע בשוק בזמן ריצה, צעידה, אימון או פעילות גופנית אינו אבחנה בפני עצמה. מספר
            מצבים שונים יכולים לגרום לכאב באזור דומה, ולכן המיקום של הכאב הוא רק חלק מהתמונה.
          </p>
          <p className={pClass}>
            המונח כאב בשוק במאמץ (Exercise-Induced Leg Pain&rlm; &ndash; EILP&rlm;) משמש כמונח
            מטרייה לקבוצה של מצבים הגורמים לכאב בשוק הקשור לפעילות. בין הסיבות האפשריות ניתן למצוא
            תסמונת עומס השוקה הפנימית, פציעות עומס בעצם, תסמונת מדור כרונית בשוק, גירוי עצבי ומצבים
            וסקולריים. קיימות גם אבחנות נוספות שיכולות ליצור תמונה דומה.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            המונח שין ספלינט (Shin splints&rlm;) עדיין שגור מאוד בקרב חיילים, רצים ואנשים פעילים,
            אך מדובר במונח ישן ולא ספציפי. הוא אינו אומר מה מקור הכאב ולכן עדיף, ככל שניתן, להגיע
            לאבחנה מדויקת יותר.
            <Ref n={1} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>מה יכול לגרום לכאב בשוק במאמץ?</h2>

          <h3 className={h3Class}>תסמונת עומס השוקה הפנימית</h3>
          <p className={pClass}>
            תסמונת עומס השוקה הפנימית (Medial Tibial Stress Syndrome&rlm; &ndash; MTSS&rlm;) היא
            אחת האבחנות השכיחות בקבוצה זו. הכאב מורגש בדרך כלל לאורך הצד הפנימי של השוקה, על פני
            אזור יחסית רחב, ומופיע או מחמיר בעקבות פעילות.
            <Ref n={1} />
            <Ref n={4} />
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
            </Link>
            .
          </p>

          <h3 className={h3Class}>פציעת עומס בעצם ושבר מאמץ</h3>
          <p className={pClass}>
            עומס חוזר על העצם יכול להוביל לפציעת עומס בעצם ובמקרים מסוימים לשבר מאמץ. כאב ממוקד
            יותר ורגישות נקודתית בעצם יכולים להעלות חשד לאבחנה מסוג זה, אך האבחנה אינה נקבעת לפי
            סימן יחיד.
            <Ref n={4} />
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
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

          <h3 className={h3Class}>תסמונת מדור כרונית בשוק</h3>
          <p className={pClass}>
            תסמונת מדור כרונית בשוק (Chronic Exertional Compartment Syndrome&rlm; &ndash;
            CECS&rlm;) יכולה לגרום לכאב או לתחושת לחץ שמופיעים בזמן מאמץ. לעיתים מתלווים לכך תחושת
            שריפה, נימול, עקצוצים או תסמינים תחושתיים אחרים. דפוס הופעת התסמינים במהלך הפעילות
            והתגובה להפסקת המאמץ הם חלק חשוב מההערכה.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            חשוב להבדיל בין תסמונת מדור כרונית הקשורה למאמץ לבין תסמונת מדור חריפה (Acute
            Compartment Syndrome&rlm;), שהיא מצב שונה ודחוף.
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/chronic-exertional-compartment-syndrome"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              תסמונת מדור כרונית בשוק
            </Link>
            .
          </p>

          <h3 className={h3Class}>מקור עצבי</h3>
          <p className={pClass}>
            לחץ או גירוי של עצב יכולים גם הם לגרום לכאב בשוק בזמן מאמץ. במקרים כאלה עשויים להופיע
            לצד הכאב גם נימול, עקצוצים, שריפה או שינוי בתחושה.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h3 className={h3Class}>מקור וסקולרי</h3>
          <p className={pClass}>
            בחלק קטן יותר מהמקרים, כאב בזמן מאמץ יכול להיות קשור גם להפרעה זמנית באספקת הדם לגפה.
            גם כאן דפוס הופעת התסמינים והבדיקה הקלינית מסייעים להחליט האם יש צורך בבירור נוסף.
            <Ref n={1} />
          </p>

          <ComparisonTable
            caption="השוואה בין שלוש אבחנות שכיחות של כאב בשוק במאמץ: תסמונת עומס השוקה הפנימית, שבר מאמץ ותסמונת מדור כרונית בשוק, לפי אופי הכאב, מועד ההופעה, ההתנהגות לאחר עצירה, תחושות נלוות ואופן האבחון."
            characteristics={comparisonCharacteristics}
            items={comparisonItems}
            note="קיימת חפיפה בין המצבים, ואין מאפיין יחיד שמאפשר לקבוע את האבחנה. הטבלה מתארת דפוסים אופייניים ואינה מיועדת לאבחון עצמי."
          />

          <h2 className={h2Class}>איך אפשר להבדיל בין הסיבות השונות?</h2>
          <p className={pClass}>
            אין סימן יחיד שמאפשר לקבוע מה מקור הכאב. אחד הדברים החשובים ביותר הוא דפוס הסימפטומים
            לאורך הפעילות: היכן הכאב מורגש, מתי הוא מתחיל, איך הוא משתנה ככל שהמאמץ נמשך, ומה קורה
            לאחר שמפסיקים.
          </p>
          <p className={pClass}>
            גם אופי התחושה חשוב. כאב מפושט לאורך השוק, כאב ממוקד, תחושת לחץ, שריפה, נימול או כאב
            שנמשך גם לאחר הפעילות יכולים לכוון לאפשרויות שונות. המידע הזה משתלב עם הבדיקה הגופנית,
            ובמידת הצורך עם בירור נוסף.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <ArticleFigure
            src="/professional-info/eilp-differential-diagnosis.webp"
            alt="אינפוגרפיקה של ציר הזמן באבחנה המבדלת של כאב בשוק במאמץ: לפני הפעילות, תחילת הפעילות, במהלך המאמץ, אחרי עצירה ומאוחר יותר, ולצידו שש שאלות מנחות — איפה בדיוק כואב, האם הכאב מפושט או ממוקד, מתי הכאב מתחיל, האם יש גם לחץ שריפה או נימול, מה קורה כשעוצרים וכמה זמן לוקח לכאב להירגע"
            caption="דפוס הופעת הסימפטומים הוא חלק חשוב מהאבחנה. כדאי לשים לב לא רק למקום הכאב, אלא גם למועד הופעתו, לתחושות הנלוות ולזמן שלוקח לו להירגע לאחר הפסקת הפעילות."
          />

          <h2 className={h2Class}>למה חשוב להגיע לאבחנה מדויקת?</h2>
          <p className={pClass}>
            שתי תלונות שנשמעות דומות יכולות לדרוש התייחסות שונה מאוד.
          </p>
          <p className={pClass}>
            אדם עם תסמונת עומס השוקה הפנימית, אדם עם שבר מאמץ ואדם עם תסמונת מדור כרונית יכולים
            כולם להגיע עם המשפט &rdquo;כואבת לי השוק כשאני רץ&ldquo;, אבל מקור הכאב, הבירור והדרך
            לחזרה לפעילות אינם בהכרח זהים.
          </p>
          <p className={pClass}>
            לכן הגדרה כללית כמו &rdquo;שין ספלינט&ldquo; אינה מספיקה כדי להחליט מה נכון לעשות.
          </p>

          <h2 className={h2Class}>כאבי שוק גם במחקר שלי</h2>
          <p className={pClass}>
            כאבי שוק במאמץ ותסמונת עומס השוקה הפנימית היו נושא עבודת המחקר שלי בתואר השני, שעסקה
            בתרגום ובהתאמה לעברית של שאלוני הערכה לכאבי שוק ובאבחנה הקלינית של MTSS&rlm;. שאלונים
            כאלה נבחנו גם בסקירה שיטתית של כלי הערכה מדווחי־מטופל עבור כאב בשוק במאמץ.
            <Ref n={5} />
          </p>
          <p className={pClass}>
            הרחבה על הרקע ועל העבודה מופיעה בעמוד{" "}
            <Link
              href="/professional-info/medial-tibial-stress-syndrome"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              תסמונת עומס השוקה הפנימית
            </Link>
            .
          </p>

          <h2 className={h2Class}>מה כוללת הערכה פיזיותרפית?</h2>
          <p className={pClass}>
            ההערכה מתחילה בשיחה על אופי הכאב והפעילות שמעוררת אותו. חשוב להבין האם מדובר בשינוי חדש
            בעומס, כמה זמן ניתן לבצע את הפעילות לפני הופעת הסימפטומים, היכן בדיוק הכאב מורגש ומה
            קורה לאחר הפסקת המאמץ.
          </p>
          <p className={pClass}>
            הבדיקה הגופנית מותאמת לאבחנות האפשריות ויכולה לכלול מישוש של השוקה והרקמות הסמוכות,
            הערכת כוח, טווחי תנועה ותפקוד, ובמידת הצורך גם בחינה של הפעילות שמעלה את הכאב. המטרה
            אינה רק למצוא מקום רגיש, אלא להבין לאיזה דפוס קליני התלונה מתאימה.
          </p>
          <p className={pClass}>
            כאשר התמונה מתאימה לבעיה שניתן לנהל בפיזיותרפיה, ניתן להתאים את העומס ולבנות תוכנית
            חזרה הדרגתית לפעילות. כאשר עולים סימנים שמחשידים לפציעת עומס משמעותית בעצם, למקור עצבי
            או וסקולרי או למצב אחר שדורש בירור נוסף, יש מקום להפנות להמשך בדיקה.
          </p>

          <h2 className={h2Class}>מתי כדאי לפנות לבדיקה?</h2>
          <p className={pClass}>
            כדאי לפנות לבדיקה כאשר הכאב חוזר באופן עקבי, מגביל את הפעילות, מחמיר עם הזמן או כאשר לא
            ברור מה מקורו. כאב שמופיע גם מחוץ לפעילות, רגישות נקודתית משמעותית, חולשה, נימול מתמשך
            או תסמינים חריגים אחרים מצדיקים גם הם בירור.
          </p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              אם כאב בשוק חוזר בכל פעם שאתם רצים, צועדים או מתאמנים ולא ברור מה מקורו, הערכה
              פיזיותרפית יכולה לעזור לזהות את דפוס הסימפטומים, לצמצם את האפשרויות ולבחור את דרך
              ההמשך המתאימה.
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
              Lohrer H, Malliaropoulos N, Korakakis V, Padhiar N. Exercise-Induced Leg Pain in
              Athletes: Diagnostic, Assessment, and Management Strategies. Phys Sportsmed.
              2019;47(1):47-59. doi:
              <a
                href="https://doi.org/10.1080/00913847.2018.1537861"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1080/00913847.2018.1537861
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Edwards PH Jr, Wright ML, Hartman JF. A Practical Approach for the Differential
              Diagnosis of Chronic Leg Pain in the Athlete. Am J Sports Med. 2005;33(8):1241-1249.
              doi:
              <a
                href="https://doi.org/10.1177/0363546505278305"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/0363546505278305
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Reinking MF. Exercise Related Leg Pain (ERLP): A Review of the Literature. N Am J
              Sports Phys Ther. 2007;2(3):170-180.
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Milgrom C, Zloczower E, Fleischmann C, et al. Medial Tibial Stress Fracture Diagnosis
              and Treatment Guidelines. J Sci Med Sport. 2021;24(6):526-530. doi:
              <a
                href="https://doi.org/10.1016/j.jsams.2020.11.015"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jsams.2020.11.015
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Castillo-Domínguez A, García-Romero JC, Alvero-Cruz JR, et al. Systematic Review of
              Patient-Reported Outcome Measures for Patients With Exercise-Induced Leg Pain.
              Medicina (Kaunas). 2022;58(7):841. doi:
              <a
                href="https://doi.org/10.3390/medicina58070841"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.3390/medicina58070841
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
