import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import AuthorBox from "../../components/AuthorBox";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";
import { asset } from "../../basePath";

const article = getArticle("hip-groin-pain-cyclists");

export const metadata: Metadata = {
  title: "כאבים בירך ובמפשעה אצל רוכבי אופניים",
  description:
    "כאב בירך או במפשעה אצל רוכבי אופניים — הגורמים האפשריים (מפרק הירך, מקרבים, עומס אימונים ורצפת האגן), מה כוללת הערכה פיזיותרפית וכיצד מטפלים.",
  alternates: { canonical: "/professional-info/hip-groin-pain-cyclists" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "כאבים בירך ובמפשעה אצל רוכבי אופניים | רועי קליין פיזיותרפיה",
    description: "כאב ירך ומפשעה אצל רוכבים — גורמים, הערכה וטיפול מבוסס ראיות.",
    url: "/professional-info/hip-groin-pain-cyclists",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const ulClass = "mt-4 list-disc space-y-1 pr-6 leading-8 text-black";

function Ref({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#ref-${n}`} className="mx-0.5 font-semibold text-teal-600 hover:underline">
        [{n}]
      </a>
    </sup>
  );
}

export default function HipGroinPainCyclistsArticle() {
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
            כאבים בירך ובמפשעה אצל רוכבי אופניים
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאב בירך או במפשעה בזמן רכיבה יכול להופיע בהדרגה, לאחר עלייה בעומס או בעקבות פציעה.
            אצל חלק מהרוכבים הוא מופיע רק לאחר זמן ממושך על האופניים, ואצל אחרים הוא מורגש גם
            בישיבה, בהליכה או בפעולות יום־יומיות.
          </p>
          <p className={pClass}>
            האתגר הוא שהמונח ״כאב בירך״ אינו מתאר אבחנה אחת. הכאב עשוי להיות קשור למפרק הירך,
            לשרירים ולגידים שסביבו, לאזור המקרבים ועצם החיק, לגב התחתון או לרצפת האגן.
          </p>
          <p className={pClass}>
            לכן הערכה טובה מתחילה בתפקוד ובהתנהגות של התסמין, ולא רק בשם של ממצא בהדמיה.
          </p>
          <h2 className={h2Class}>איפה כואב ומתי?</h2>
          <p className={pClass}>
            המיקום המדויק והפעילויות המעוררות את הכאב מספקים מידע חשוב.
          </p>
          <p className={pClass}>
            כאב עמוק בחלק הקדמי של הירך או במפשעה עשוי להתנהג אחרת מכאב בצד הירך, בישבן או סביב
            עצם החיק. גם ההבדל בין כאב שמופיע רק ברכיבה מאומצת לבין כאב המופיע בהליכה, בישיבה
            ממושכת או בלילה עשוי להשפיע על תהליך הבדיקה.
          </p>
          <p className={pClass}>במהלך הערכה חשוב לברר:</p>
          <ul className={ulClass}>
            <li>באיזה שלב של הרכיבה מתחיל הכאב.</li>
            <li>האם הוא משתנה עם עצימות, עליות או הילוך כבד.</li>
            <li>האם תנוחה נמוכה או כיפוף רב של הירך מחמירים אותו.</li>
            <li>האם הוא נמשך גם לאחר הירידה מהאופניים.</li>
            <li>האם קיימים קליקים, תפיסה, נעילה או תחושת חוסר יציבות.</li>
            <li>האם חלה ירידה בטווח התנועה או שינוי בדפוס ההליכה.</li>
          </ul>
          <h2 className={h2Class}>לא כל כאב במפשעה מגיע מאותו מבנה</h2>
          <p className={pClass}>
            בסקירה של 894 ספורטאים עם כאב כרוני בירך ובמפשעה נמצאו 24 שילובים שונים של אבחנות
            קליניות.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            פתולוגיה הקשורה למפרק הירך הייתה הקטגוריה השכיחה ביותר, אך כאבים הקשורים למקרבים
            ולעצם החיק הופיעו פעמים רבות יחד עם בעיות נוספות ולא כאבחנה מבודדת.
          </p>
          <p className={pClass}>
            המחקר עסק בעיקר בשחקני כדור וברצים, ולא ברוכבי אופניים. עם זאת, הוא מדגים עיקרון
            קליני חשוב: כאב באזור המפשעה יכול להיות רב־גורמי, ולעיתים קיימת מעורבות של יותר
            ממערכת אחת.
          </p>
          <figure className="mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/professional-info/groin-pain-cycling-biomechanics.webp")}
              alt="ביומכניקה של האגן ורצפת האגן ברכיבה על אופניים והקשר לכאב מפשעה — שקופית קלינית"
              className="mx-auto h-auto w-full rounded-2xl ring-1 ring-slate-200"
            />
          </figure>
          <h2 className={h2Class}>מה תפקידו של עומס האימונים?</h2>
          <p className={pClass}>
            רכיבה כוללת אלפי חזרות על תנועה דומה של הירך. הרקמות נדרשות להתמודד לא רק עם עצימות
            האימון, אלא גם עם משך הרכיבה, תדירותה, ההילוכים, העליות ופעילויות נוספות המתבצעות
            במקביל.
          </p>
          <p className={pClass}>
            סקירה שיטתית על פציעות שימוש־יתר אצל רוכבים מצאה ראיות בדרגה בינונית לקשר בין עומס
            האימונים לבין תסמינים.
            <Ref n={2} /> לעומת זאת, לא נמצא קשר ברור בין רבים ממדדי ה־Bike Fit המקובלים לבין
            פציעות שימוש־יתר, והראיות לגבי גובה האוכף היו סותרות.
          </p>
          <p className={pClass}>
            המסר המעשי הוא שיש להסתכל על כלל העומס השבועי, ולא רק על מספר הקילומטרים על
            האופניים.
          </p>
          <h2 className={h2Class}>מה כוללת הערכה פיזיותרפית?</h2>
          <p className={pClass}>
            ההערכה אינה מסתכמת בבדיקה אם קיימת פתולוגיה מסוימת. המטרה היא להבין אילו פעולות
            מוגבלות ומה משפיע על הכאב.
          </p>
          <p className={pClass}>הבדיקה כוללת:</p>
          <ul className={ulClass}>
            <li>ניתוח הליכה.</li>
            <li>בדיקות למפרק הירך והאם מופק הכאב הרלוונטי.</li>
            <li>כוח וסבולת של שרירי הירך, האגן והבטן.</li>
            <li>שליטה של האגן בזמן תנועה ונשיאת משקל.</li>
            <li>תגובת הכאב לתנועות ולמטלות שונות.</li>
            <li>בחינת השינויים האחרונים בעומס ובציוד.</li>
            <li>לפי הצורך, התבוננות בתנוחת הרכיבה ובדפוס הדיווש.</li>
          </ul>
          <p className={pClass}>
            תוצאות הבדיקה משמשות להחליט אם הבעיה מתאימה לניהול שמרני או שיש צורך בבירור רפואי
            נוסף.
          </p>
          <h2 className={h2Class}>כיצד מטפלים?</h2>
          <p className={pClass}>
            המלצות קונצנזוס בינלאומיות לאנשים פעילים עם כאב הקשור לירך תומכות בטיפול מבוסס
            תרגול הנמשך לפחות שלושה חודשים.
            <Ref n={3} /> מדובר בהמלצה כללית ולא במשך טיפול קבוע לכל אדם.
          </p>
          <p className={pClass}>התוכנית עשויה לכלול:</p>
          <ul className={ulClass}>
            <li>שינוי זמני בנפח או בעצימות הרכיבה.</li>
            <li>חיזוק שרירי הירך והאגן.</li>
            <li>שיפור כוח וסבולת של שרירי הבטן והגו.</li>
            <li>תרגול קואורדינציה ושליטה בתנועה.</li>
            <li>עבודה על טווח תנועה כאשר קיימת מגבלה רלוונטית.</li>
            <li>חזרה הדרגתית לרכיבות ארוכות או מאומצות.</li>
            <li>התאמות ממוקדות באופניים, בהתאם לממצאים.</li>
          </ul>
          <p className={`${pClass} font-bold`}>
            סקירת Cochrane מצאה ראיות באיכות נמוכה לכך שטיפול אקטיבי, שכלל חיזוק שרירי הירך
            והבטן ותרגול קואורדינציה, השיג תוצאות טובות יותר מטיפולים פסיביים בלבד בכאב מפשעה
            הקשור לפעילות גופנית.
            <Ref n={4} />
          </p>
          <p className={pClass}>
            המחקרים לא נערכו דווקא ברוכבי אופניים, אך הם תומכים בכך שתרגול הדרגתי צריך להיות
            מרכיב מרכזי בטיפול.
          </p>
          <h2 className={h2Class}>האם רצפת האגן יכולה להיות קשורה לכאב ירך ומפשעה?</h2>
          <p className={pClass}>
            קיימים דיווחים קליניים שלפיהם רצפת האגן עשויה להיות מעורבת גם כאשר המטופל אינו
            מתלונן על תסמיני שתן או תפקוד מיני.
          </p>
          <p className={pClass}>
            בדיווח מקרה תואר רוכב מקצועי בן 32 שסבל מכאב בירך ובמפשעה בזמן רכיבה ובישיבה ממושכת
            לאחר חבלה משמעותית בירך. טיפולים קודמים הביאו להקלה חלקית בלבד. לאחר{" "}
            <Link
              href="/professional-info/pelvic-floor-physiotherapy-cyclists"
              className="font-semibold text-teal-700 hover:underline"
            >
              הערכה של שרירי ורקמות החיבור של רצפת האגן
            </Link>{" "}
            ושני טיפולים של Pelvic Floor Fascial Mobilization דווח על החלמה מלאה.
            <Ref n={5} />
          </p>
          <p className={pClass}>
            זהו דיווח על אדם אחד בלבד, ולכן אינו מוכיח שהטיפול יעיל לכל רוכב. עם זאת, הוא מדגים
            שלעיתים כדאי להרחיב את הבדיקה מעבר למפרק הירך עצמו, במיוחד כאשר התסמינים אינם
            משתפרים כמצופה.
          </p>
          <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              כאב שנמשך מצדיק הערכה מסודרת. אם חלק מהתיאור מוכר לכם, מומלץ לפנות לבירור.
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
            כאב ירך או מפשעה אצל רוכב אינו אבחנה בפני עצמה. גם כאשר קיימים ממצאים בהדמיה,
            ההחלטות הטיפוליות צריכות להתבסס על תפקוד, מגבלות, תגובת הכאב לעומס ומטרות הרוכב.
          </p>
          <p className={pClass}>
            שינוי בהליכה, ירידה בטווח התנועה, כאב שנמשך מחוץ לרכיבה או חוסר שיפור לאחר שינוי
            עומס מצדיקים הערכה מסודרת. ברוב המקרים, הטיפול השמרני צריך לכלול ניהול עומס ותרגול
            אקטיבי, תוך בחינה רחבה של הירך, האגן, הגב ולעיתים גם רצפת האגן.
          </p>
          <h2 id="references" className={`${h2Class} scroll-mt-24`}>
            מקורות
          </h2>
          <ol
            dir="ltr"
            className="mt-4 list-decimal space-y-3 pl-6 text-left text-sm leading-7 text-black"
          >
            <li id="ref-1" className="scroll-mt-24">
              Rankin AT, Bleakley CM, Cullen M. Hip Joint Pathology as a Leading Cause of Groin
              Pain in the Sporting Population: A 6-Year Review of 894 Cases. Am J Sports Med.
              2015;43(7):1698-1703. doi:
              <a
                href="https://doi.org/10.1177/0363546515582031"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/0363546515582031
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Visentini PJ, McDowell AH, Pizzari T. Factors Associated With Overuse Injury in
              Cyclists: A Systematic Review. J Sci Med Sport. 2022;25(5):391-398. doi:
              <a
                href="https://doi.org/10.1016/j.jsams.2021.12.008"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jsams.2021.12.008
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Kemp JL, Risberg MA, Mosler A, et al. Physiotherapist-Led Treatment for Young to
              Middle-Aged Active Adults With Hip-Related Pain: Consensus Recommendations From the
              International Hip-Related Pain Research Network, Zurich 2018. Br J Sports Med.
              2020;54(9):504-511. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2019-101458"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2019-101458
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Almeida MO, Silva BNG, Andriolo RB, Atallah AN, Peccin MS. Conservative
              Interventions for Treating Exercise-Related Musculotendinous, Ligamentous and
              Osseous Groin Pain. Cochrane Database Syst Rev. 2013;(6). doi:
              <a
                href="https://doi.org/10.1002/14651858.CD009565.pub2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/14651858.CD009565.pub2
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Navot S, Kalichman L. Hip and Groin Pain in a Cyclist Resolved After Performing a
              Pelvic Floor Fascial Mobilization. J Bodyw Mov Ther. 2016;20(3):604-609. doi:
              <a
                href="https://doi.org/10.1016/j.jbmt.2016.04.005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jbmt.2016.04.005
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
