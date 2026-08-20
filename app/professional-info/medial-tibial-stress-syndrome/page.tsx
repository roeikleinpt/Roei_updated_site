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

const article = getArticle("medial-tibial-stress-syndrome");

export const metadata: Metadata = {
  title: "תסמונת עומס השוקה הפנימית (MTSS): שין ספלינט, אבחון וטיפול פיזיותרפי",
  description:
    "כאב לאורך הצד הפנימי של השוקה אצל רצים, חיילים ומתאמנים. מה מרגישים, למה זה מתפתח, כיצד מאבחנים, מה ההבדל משבר מאמץ ואיך נראית חזרה הדרגתית לפעילות.",
  alternates: { canonical: "/professional-info/medial-tibial-stress-syndrome" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "תסמונת עומס השוקה הפנימית (MTSS) | רועי קליין פיזיותרפיה",
    description:
      "שין ספלינט הוא מונח ישן ולא ספציפי. מה באמת עומד מאחורי כאב לאורך הצד הפנימי של השוקה, כיצד מבדילים משבר מאמץ ומה כוללת הפיזיותרפיה.",
    url: "/professional-info/medial-tibial-stress-syndrome",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";

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
    q: "האם שין ספלינט ו־MTSS הם אותו דבר?",
    a: "המונחים שין ספלינט ושין ספלינטס הם מונחים ישנים ולא ספציפיים ששימשו לאורך השנים לתיאור כאבים בשוק. כאשר התמונה הקלינית מתאימה לתסמונת עומס השוקה הפנימית, MTSS הוא המונח המקצועי המדויק יותר.",
  },
  {
    q: "האם תסמונת עומס השוקה הפנימית הופכת לשבר מאמץ?",
    a: "לא מדובר בשני שלבים של אותה אבחנה. עומס חוזר ומיקרו נזק יכולים להיות חלק מהתמונה של MTSS, אך מיקרו נזק אינו שקול לשבר מאמץ. אם אופי הכאב משתנה או שהבדיקה מעלה חשד לפציעת עומס בעצם, יש מקום לבצע הערכה מחדש.",
  },
  {
    q: "האם חייבים להפסיק לרוץ?",
    a: "לא בכל מקרה נדרשת הפסקה מוחלטת. ההחלטה תלויה בעוצמת הכאב, בהתנהגות שלו וביכולת להתאים את העומס. אצל חלק מהאנשים ניתן להמשיך בפעילות מותאמת ולבנות את העומס בהדרגה.",
  },
  {
    q: "כמה זמן לוקח לחזור לפעילות?",
    a: "אין משך זמן אחיד שמתאים לכולם. מהניסיון בקליניקה, לאחר שניים או שלושה טיפולים יש לרוב שיפור מורגש. קצב ההתקדמות משם תלוי באופי הפעילות ובדרישות שלה, במטרת הטיפול, במשך הזמן שבו קיימים הסימפטומים, וגם בגורמים כמו תזונה, שינה והתאוששות.",
  },
];

export default function MtssArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            תסמונת עומס השוקה הפנימית
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            תסמונת עומס השוקה הפנימית (Medial Tibial Stress Syndrome&rlm; &ndash; MTSS&rlm;) היא
            סיבה שכיחה לכאב לאורך הצד הפנימי של השוקה, בעיקר אצל רצים, חיילים ואנשים שעוסקים
            בפעילות הכוללת ריצה, קפיצות או צעידות ממושכות. הכאב קשור בדרך כלל למאמץ ומורגש על פני
            אזור יחסית רחב לאורך השוקה, ולא בנקודה אחת בלבד.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            המונח שין ספלינט (Shin splints&rlm;) עדיין שגור מאוד בקרב חיילים, רצים ואנשים פעילים.
            עם זאת, זהו מונח ישן ולא ספציפי, ששימש לאורך השנים לתיאור מגוון של כאבים בשוק. כאשר
            התמונה הקלינית מתאימה, המונח המדויק יותר הוא תסמונת עומס השוקה הפנימית.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>מה מרגישים?</h2>
          <p className={pClass}>
            הכאב מופיע בדרך כלל לאורך החלק הפנימי של השוקה ומתגבר בזמן פעילות או לאחריה. במישוש
            ניתן לרוב למצוא רגישות על פני מקטע יחסית ארוך של השוקה. בספרות קיימים קריטריונים שונים
            לגבי אורך אזור הרגישות, אך העיקרון הוא שמדובר בדרך כלל{" "}
            <span className="font-bold">ברגישות מפושטת יחסית ולא בכאב נקודתי מאוד</span>.
            <Ref n={2} />
            <Ref n={3} />{" "}בתחילת הדרך הכאב עשוי להופיע רק בזמן ריצה, צעידה או פעילות מאומצת. אצל
            חלק מהאנשים הוא מורגש גם לאחר הפעילות, במיוחד כאשר העומס ממשיך לעלות.
          </p>
          <p className={pClass}>
            אם כאב לאורך הצד הפנימי של השוק חוזר בכל פעם שאתם רצים, צועדים או מעלים עומס באימונים,
            כדאי להבין מה מקורו ולא להסתפק בהגדרה כללית של &rdquo;כאבי שוק&ldquo;.
          </p>
          <p className={pClass}>
            נפיחות משמעותית, אודם בולט, כאב ממוקד מאוד או תסמינים כמו נימול ותחושת לחץ משמעותית
            אינם התמונה הטיפוסית, ויכולים להעלות חשד למקור אחר לכאב.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>למה זה מתפתח?</h2>
          <p className={pClass}>
            המנגנון המדויק של MTSS&rlm; עדיין אינו מוסכם לחלוטין. אחת ההשערות מתייחסת לעומס חוזר על
            עצם השוקה ולמיקרו נזק הנוצר כחלק מתגובת העצם לעומס. השערה נוספת מתייחסת לכוחות שמפעילים
            השרירים, הגידים והפאשיה באזור החלק הפנימי של השוקה. ייתכן שבפועל מדובר בשילוב בין מספר
            מנגנונים.
            <Ref n={1} />
            <Ref n={4} />{" "}חשוב להבחין בין מיקרו נזק לבין שבר מאמץ. גם אם עומס חוזר ומיקרו נזק
            עשויים להיות חלק מהמנגנון של MTSS&rlm;, אין פירוש הדבר שמדובר בשבר מאמץ. אלו שתי
            אבחנות שונות.
          </p>
          <p className={pClass}>
            נחקרו עשרות גורמי סיכון אפשריים להתפתחות התסמונת. בין הגורמים שנמצאו קשורים אליה בחלק
            מהמחקרים ניתן למצוא היסטוריה קודמת של MTSS&rlm;, ניסיון ריצה מועט יותר, מאפיינים
            מסוימים של כף הרגל והגפה, טווחי תנועה ומאפיינים מסוימים של תנועה בזמן ריצה.
            <Ref n={5} />
            <Ref n={6} />
            <Ref n={7} />
          </p>
          <p className={pClass}>
            עם זאת, אין גורם יחיד שמסביר מדוע אדם מסוים מפתח את התסמונת. עלייה חדה בעומס שכיחה במיוחד
            בתחילת טירונות, במסעות ובחזרה לריצה אחרי הפסקה. לכן בבדיקה חשוב להתייחס גם לעומסי
            האימון, לשינויים האחרונים בפעילות, ליכולת ההתאוששות ולדרישות הספציפיות של האדם.
          </p>

          <h2 className={h2Class}>כיצד מאבחנים?</h2>
          <p className={pClass}>
            האבחנה של MTSS&rlm; היא בעיקר קלינית. מתחילים מהסיפור של הכאב: היכן הוא נמצא, מתי הוא
            מופיע, מה קורה בזמן הפעילות ולאחריה ואיך הוא השתנה לאורך הזמן. בבדיקה ממששים את הגבול
            הפנימי של השוקה ומנסים לשחזר את הכאב המוכר. במקביל מחפשים מאפיינים שאינם מתאימים לתמונה
            הטיפוסית ועלולים להצביע על מקור אחר לכאב.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            <span className="font-bold">
              אין צורך בהדמיה, לרבות MRI&rlm;, על מנת לאבחן MTSS&rlm;
            </span>
            . מחקר שבוצע בקרב מגויסים ליחידת כוחות מיוחדים מצא שכיחות לא מבוטלת של ממצאים ב־MRI&rlm;
            גם בנבדקים ללא תסמינים. לכן, ממצא בהדמיה אינו מעיד בהכרח על קיומה של התסמונת או על מקור
            הכאב, ויש לפרשו יחד עם הסיפור הקליני והבדיקה.
            <Ref n={8} />
          </p>

          <h2 className={h2Class}>תסמונת עומס השוקה הפנימית או שבר מאמץ?</h2>
          <p className={pClass}>
            תסמונת עומס השוקה הפנימית ושבר מאמץ בשוקה הן שתי אבחנות שונות.
          </p>
          <p className={pClass}>
            ב־MTSS&rlm; הכאב והרגישות נוטים להיות מפושטים יחסית לאורך הצד הפנימי של השוקה. כאשר
            הכאב ממוקד יותר, כאשר התנהגות הכאב משתנה או כאשר בבדיקה עולים ממצאים שמחשידים לפציעת
            עומס בעצם, יש צורך לשקול אבחנה אחרת ובהתאם לכך גם בירור נוסף.
            <Ref n={3} />
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
            </Link>{" "}
            ·{" "}
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

          <h2 className={h2Class}>מהשירות הצבאי אל עבודת המחקר</h2>
          <div className="mt-4 rounded-2xl border border-slate-200 border-r-4 border-r-teal-600 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-teal-700">מהניסיון האישי</p>
            <p className="mt-2 leading-8 text-black">
              אי אפשר לשרת כפיזיותרפיסט בצבא בלי לפגוש כאבי שוקיים על בסיס יומי. הבדיקות הקליניות,
              הפער מול הספרות המקצועית וחוסר האחידות בהגדרות הן חלק מהסיבה שכאבי שוק במאמץ ותסמונת
              עומס השוקה הפנימית היו נושא עבודת המחקר שלי בתואר השני.
            </p>
            <p className="mt-4 leading-8 text-black">
              במסגרת העבודה עסקתי בתרגום ובהתאמה לעברית של שני שאלוני הערכה לכאבי שוק, וביצעתי מחקר
              קליני שעסק באבחנה הקלינית של MTSS&rlm;. אחד מהשאלונים המתורגמים כבר פורסם בספרות
              המקצועית; השאלון השני והמחקר הקליני נמצאים כיום בתהליך הערכת עמיתים בכתבי עת.
            </p>
          </div>

          <h2 className={h2Class}>כיצד פיזיותרפיה יכולה לעזור?</h2>
          <p className={pClass}>
            הטיפול מתחיל בהבנה מדויקת של דפוס הכאב, של דרישות הפעילות ושל העומס שהשוק נדרשת
            להתמודד איתו. משם בונים תוכנית: טיפול סימפטומטי, התאמת נפח ועצימות הפעילות, העמסה
            הדרגתית של השוק והגפה, עבודה על כוח וסבולת ותכנון חזרה מדורגת לריצה, לצעידות או לאימון.
            <Ref n={2} />
            <Ref n={9} />
          </p>
          <p className={pClass}>
            חשוב לומר במפורש: אין כיום טיפול יחיד שהוכח כפתרון לכל האנשים עם MTSS&rlm;.{" "}
            <span className="font-bold">
              זו בדיוק הסיבה שהתוכנית נבנית לפי ממצאי הבדיקה ולא לפי פרוטוקול אחיד
            </span>
            .
          </p>
          <p className={pClass}>
            אצל חלק מהמטופלים יש מקום להתייחס גם למאפייני הריצה, לטווחי תנועה או לגורמים אחרים
            שנמצאו בבדיקה. המטרה אינה לתקן כל מאפיין מבני או תנועתי, אלא לזהות אילו גורמים רלוונטיים
            בפועל לתלונה ולדרישות של אותו אדם.
          </p>

          <ArticleCta
            intro="אם הכאב בשוק חוזר בכל ניסיון לרוץ, להתאמן או להעלות עומס, הערכה פיזיותרפית יכולה לעזור לזהות את דפוס הכאב, להבדיל בין הסיבות האפשריות ולבנות דרך הדרגתית לחזרה לפעילות."
            whatsappText="היי רועי, קראתי אצלך הסבר על MTSS, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Winters M. The Diagnosis and Management of Medial Tibial Stress Syndrome: An Evidence
              Update. Unfallchirurg. 2020;123(Suppl 1):15-19. doi:
              <a
                href="https://doi.org/10.1007/s00113-019-0667-z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s00113-019-0667-z
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Milgrom C, Zloczower E, Fleischmann C, Spitzer E, Landau R, Bader T, Finestone AS.
              Medial Tibial Stress Fracture Diagnosis and Treatment Guidelines. J Sci Med Sport.
              2021;24(6):526-530. doi:
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
            <li id="ref-4" className="scroll-mt-24">
              Magnusson HI, Ahlborg HG, Karlsson C, Nyquist F, Karlsson MK. Low Regional Tibial Bone
              Density in Athletes With Medial Tibial Stress Syndrome Normalizes After Recovery From
              Symptoms. Am J Sports Med. 2003;31(4):596-600. doi:
              <a
                href="https://doi.org/10.1177/03635465030310042001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/03635465030310042001
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Hamstra-Wright KL, Bliven KCH, Bay C. Risk Factors for Medial Tibial Stress Syndrome
              in Physically Active Individuals Such as Runners and Military Personnel: A Systematic
              Review and Meta-Analysis. Br J Sports Med. 2015;49(6):362-369. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2014-093462"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2014-093462
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Reinking MF, Austin TM, Richter RR, Krieger MM. Medial Tibial Stress Syndrome in
              Active Individuals: A Systematic Review and Meta-Analysis of Risk Factors. Sports
              Health. 2017;9(3):252-261. doi:
              <a
                href="https://doi.org/10.1177/1941738116673299"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/1941738116673299
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Willwacher S, Kurz M, Robbin J, et al. Running-Related Biomechanical Risk Factors for
              Overuse Injuries in Distance Runners: A Systematic Review Considering Injury
              Specificity and the Potentials for Future Research. Sports Med. 2022;52(8):1863-1877.
              doi:
              <a
                href="https://doi.org/10.1007/s40279-022-01666-3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s40279-022-01666-3
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Milgrom C, Tsur N, Eshed I, et al. Significance of Tibial MRI Findings of Special
              Forces Recruits at the Onset of Their Training. BMJ Mil Health. 2024;170(1):9-14. doi:
              <a
                href="https://doi.org/10.1136/bmjmilitary-2021-002041"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bmjmilitary-2021-002041
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Winters M, Eskes M, Weir A, Moen MH, Backx FJG, Bakker EWP. Treatment of Medial Tibial
              Stress Syndrome: A Systematic Review. Sports Med. 2013;43(12):1315-1333. doi:
              <a
                href="https://doi.org/10.1007/s40279-013-0087-0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s40279-013-0087-0
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
