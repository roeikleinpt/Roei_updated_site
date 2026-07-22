import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import AuthorBox from "../../components/AuthorBox";
import ArticleFaq from "../../components/ArticleFaq";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";
import ArticleFigure from "../../components/ArticleFigure";

const article = getArticle("pelvic-floor-physiotherapy-cyclists");

export const metadata: Metadata = {
  title: "פיזיותרפיה לרצפת האגן אצל רוכבי אופניים: מה כוללים ההערכה והטיפול?",
  description:
    "מתי רצפת האגן מעורבת בכאב או בנימול אצל רוכבים, מה כוללת הערכה פיזיותרפית של רצפת האגן אצל גברים, ומדוע הטיפול אינו מסתכם בתרגילי קיגל? על בסיס הנחיות איגוד האורולוגים האמריקאי 2025.",
  alternates: { canonical: "/professional-info/pelvic-floor-physiotherapy-cyclists" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "פיזיותרפיה לרצפת האגן אצל רוכבי אופניים | רועי קליין פיזיותרפיה",
    description: "מעורבות רצפת האגן בכאב אצל רוכבים — הערכה וטיפול מבוססי ראיות.",
    url: "/professional-info/pelvic-floor-physiotherapy-cyclists",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const ulClass = "mt-4 list-disc space-y-1 pr-6 leading-8 text-black";

// שאלות נפוצות לעמוד — מוצגות לפני המקורות וגם כ-FAQPage schema.
const faqItems = [
  {
    q: "האם תרגילי קיגל יעזרו לכאב או לנימול שקשורים לרכיבה?",
    a: "לא תמיד. כאשר שרירי רצפת האגן מתוחים, רגישים או מתקשים להרפות, תרגילי קיגל עלולים להחמיר את התסמינים. בהתאם לממצאי הבדיקה, הטיפול עשוי לכלול חיזוק או דווקא נשימה, הרפיה, מודעות ושיפור הקואורדינציה.",
  },
  {
    q: "האם בדיקה של רצפת האגן תמיד כוללת בדיקה פנימית?",
    a: "לא. ההערכה כוללת תשאול ובדיקה של הנשימה, הבטן, הגב, הירכיים והאגן. בדיקה פנימית נשקלת רק כאשר היא עשויה לתרום לאבחון, לאחר הסבר ובהסכמת המטופל.",
  },
  {
    q: "יש לי כאב במפשעה או בירך ללא תסמיני שתן או תפקוד מיני. האם רצפת האגן יכולה להיות קשורה?",
    a: "כן, לעיתים רצפת האגן מעורבת גם ללא תסמינים במתן שתן או בתפקוד המיני. אין משמעות הדבר שכל כאב במפשעה או בירך מקורו ברצפת האגן, אך כאשר הכאב אינו משתפר כמצופה, כדאי לשקול בדיקה רחבה יותר.",
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

export default function PelvicFloorPhysiotherapyCyclistsArticle() {
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
            פיזיותרפיה לרצפת האגן אצל רוכבי אופניים: מה כוללים ההערכה והטיפול?
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            <Link
              href="/professional-info/saddle-area-pain-cyclists"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב או נימול באזור האוכף
            </Link>{" "}
            אינם נובעים תמיד רק מהאוכף. אצל חלק מהרוכבים קיימת מעורבות של שרירי רצפת האגן,
            ולעיתים היא מתבטאת בכאב באגן או בפרינאום, קושי בישיבה, תסמיני שתן או שינוי בתפקוד
            המיני.
          </p>
          <p className={pClass}>
            גם כאשר רצפת האגן מעורבת, אין פירוש הדבר שהיא בהכרח ״חלשה״. אצל גברים עם כאב אגן
            יכולה להופיע רגישות שרירית, מתח מוגבר, קושי בהרפיה או חוסר תיאום בין כיווץ להרפיה.
            לכן מתן תרגילי חיזוק אחידים (״קיגל״) ללא בדיקה אינו נכון.
          </p>
          <h2 className={h2Class}>מה אומרות הנחיות איגוד האורולוגים האמריקאי?</h2>
          <p className={pClass}>בשנת 2025 פרסמה האגודה האמריקאית לאורולוגיה את ההנחיות:</p>
          <p className="mt-2 text-left italic leading-7 text-slate-700" dir="ltr">
            American Urological Association – Diagnosis and Management of Male Chronic Pelvic
            Pain: Chronic Prostatitis/Chronic Pelvic Pain Syndrome and Chronic Scrotal Content
            Pain Guideline.
          </p>
          <p className={pClass}>
            ההנחיות מדגישות שכאב אגן כרוני אצל גברים יכול להופיע בצורות שונות ודורש הערכה רחבה
            ורב־מקצועית.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>במסגרת ההערכה הראשונית מומלץ לבצע:</p>
          <ul className={ulClass}>
            <li>תשאול מקיף וסקירת כלל התסמינים.</li>
            <li>בדיקה גופנית ובדיקות נוספות לפי הצורך.</li>
            <li>הערכה של השפעת הכאב על תפקוד ואיכות החיים.</li>
            <li>
              בדיקה של גורמים נוירולוגיים, שריריים־שלדיים ואורתופדיים באזור האגן, הירך והגב
              התחתון.
            </li>
            <li>
              בדיקה פנימית של שרירי רצפת האגן, כדי לזהות רגישות המתאימה ל־pelvic floor myalgia.
            </li>
          </ul>
          <p className={pClass}>
            הבדיקה הפנימית אינה מבוצעת אוטומטית לכל אדם. היא נשקלת כאשר היא עשויה לתרום לאבחון,
            לאחר הסבר מלא ובהסכמת המטופל.
          </p>
          <h2 className={h2Class}>מהי Pelvic Floor Myalgia?</h2>
          <p className={pClass}>
            המונח myalgia מורכב משני חלקים – myo = שריר, algia = כאב.
          </p>
          <p className={pClass}>
            מדובר במצב בו שרירי רצפת האגן ״כאובים״ – מישוש שלהם מפיק כאב רלוונטי או מגלה רגישות
            משמעותית. הרגישות יכולה להופיע גם כאשר מתח השריר במנוחה אינו גבוה במיוחד.
          </p>
          <p className={pClass}>
            מונח נוסף המופיע בהנחיות הוא abdominopelvic muscle myalgia – כאב ורגישות בשרירים
            באזור הבטן והאגן, שיכולים להיות חלק מהתמונה הכוללת.
          </p>
          <p className={pClass}>
            מצבים אלה עשויים להתקיים לצד chronic prostatitis/chronic pelvic pain syndrome, כאב
            כרוני בשק האשכים או תסמינים אורולוגיים אחרים. לכן הטיפול אינו צריך להתמקד רק באיבר
            שבו מורגש הכאב, אלא במערכת כולה.
          </p>
          <ArticleFigure
            src="/professional-info/pelvic-floor-myalgia-muscles.webp"
            alt="שרירי רצפת האגן ומיאלגיה של רצפת האגן (pelvic floor myalgia) — שקופית קלינית"
          />
          <h2 className={h2Class}>כיצד מתבצעת הערכה פיזיותרפית?</h2>
          <p className={pClass}>הבדיקה מתחילה בשיחה על דפוס התסמינים:</p>
          <ul className={ulClass}>
            <li>היכן מורגש הכאב או הנימול.</li>
            <li>האם הוא מתחיל רק ברכיבה או גם בישיבה רגילה.</li>
            <li>כמה זמן עובר עד להופעתו.</li>
            <li>כמה זמן הוא נמשך לאחר הרכיבה.</li>
            <li>האם קיימים תסמינים במתן שתן.</li>
            <li>האם קיימת השפעה על התפקוד המיני.</li>
            <li>האם חלו שינויים בנפח הרכיבה, באוכף או בתנוחה.</li>
            <li>
              האם קיימים{" "}
              <Link
                href="/professional-info/hip-groin-pain-cyclists"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:underline"
              >
                כאבי גב, ירך או מפשעה
              </Link>
              .
            </li>
          </ul>
          <p className={pClass}>
            לאחר מכן ניתן להעריך את הנשימה, הבטן, הגב, הירכיים, האגן ושרירי רצפת האגן. מטרת
            הבדיקה אינה רק למדוד כוח, אלא לבדוק אם המטופל מסוגל לכווץ, להרפות ולתאם את פעולת
            השרירים בהתאם למשימה.
          </p>
          <h2 className={h2Class}>האם הטיפול כולל חיזוק?</h2>
          <p className={pClass}>לעיתים כן, אך לא תמיד.</p>
          <p className={pClass}>
            אצל מטופל שמתקשה לייצר כיווץ יעיל, חיזוק עשוי להיות חלק מהתוכנית. לעומת זאת, אצל
            מטופל עם רגישות, מתח מוגבר או קושי בהרפיה, תרגול חוזר של כיווצים עלול שלא להתאים ואף
            להחמיר את התסמינים.
          </p>
          <p className={pClass}>לכן תרגול רצפת האגן עשוי לכלול:</p>
          <ul className={ulClass}>
            <li>מודעות לאזור ולתנועת השרירים.</li>
            <li>תרגול נשימה והרפיה.</li>
            <li>שיפור הקואורדינציה בין נשימה, בטן ורצפת האגן.</li>
            <li>תרגול כיווץ והרפיה מלאים.</li>
            <li>חיזוק הדרגתי כאשר נמצא צורך בכך.</li>
            <li>שילוב התרגול בפעולות יום־יומיות ובחזרה לרכיבה.</li>
          </ul>
          <h2 className={h2Class}>טיפול מנואלי פנימי וחיצוני</h2>
          <p className={pClass}>
            המלצות איגוד האורולוגים האמריקאי קובעות כי אצל גברים עם pelvic floor myalgia או
            abdominopelvic muscle myalgia ניתן להציע טכניקות טיפול מנואלי מותאמות אישית, כולל
            שחרור מיופסציאלי של רקמות מעורבות באופן חיצוני ופנימי.
            <Ref n={2} /> המלצה זו מבוססת על ראיות מוגבלות, ובדומה לכל טיפול אחר, הטיפול יהיה
            מבוסס על ממצאי הבדיקה ומותאם למטרות הטיפול שנציב.
          </p>
          <h2 className={h2Class}>מה ניתן ללמוד מדיווחי מקרה?</h2>
          <p className={pClass}>
            דיווחי מקרה אינם מספקים הוכחה ברמה גבוהה, אך הם יכולים להדגים מצבים קליניים שבהם
            בדיקה רחבה יותר שינתה את כיוון הטיפול.
          </p>
          <p className={pClass}>
            בדיווח אחד תואר גבר בן 46 שסבל במשך כשנה מכאב בפרינאום, בבטן התחתונה, בשופכה ובשק
            האשכים. לאחר הערכה שכללה בדיקה של הגב, הירכיים ורצפת האגן, הוא טופל בטיפול מנואלי
            חיצוני ופנימי. שיפור דווח עד המפגש העשירי, ובמעקב לאחר חודש דווח על היעלמות הכאב.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            בדיווח אחר תואר רוכב מקצועי עם כאב בירך ובמפשעה, ללא תלונות על תפקוד רצפת האגן. לאחר
            שיפור חלקי בטיפולים קודמים, בוצעה הערכת רצפת האגן ושני מפגשי Pelvic Floor Fascial
            Mobilization, שלאחריהם דווח על החלמה מלאה.
            <Ref n={4} />
          </p>
          <p className={pClass}>
            אין להסיק משני המקרים שכל כאב אצל רוכב דורש טיפול פנימי. הם כן מדגישים שמעורבות רצפת
            האגן יכולה להתקיים גם כאשר התלונה הראשונית נמצאת בירך, במפשעה או באזור אחר.
          </p>
          <h2 className={h2Class}>כיצד הידע הזה חל על רוכבי אופניים?</h2>
          <p className={pClass}>
            רוב המחקר על טיפול פיזיותרפי ברצפת האגן נעשה בגברים עם כאב אגן כרוני, ולא במחקרים
            ייעודיים לרוכבים.
          </p>
          <p className={pClass}>
            לכן אי אפשר להניח שכל פרוטוקול שנחקר ב־CP/CPPS מתאים אוטומטית לכל רוכב עם נימול. עם
            זאת, כאשר בבדיקה נמצאים רגישות, מתח מוגבר, קושי בהרפיה או חוסר קואורדינציה של רצפת
            האגן, ניתן להשתמש בעקרונות הטיפול הקיימים תוך התאמה לדרישות הרכיבה.
          </p>
          <ArticleFigure
            src="/professional-info/cycling-pelvic-clinical-care.webp"
            alt="ביומכניקה של האגן ורצפת האגן ורצף הטיפול הקליני ברוכבי אופניים — שקופית קלינית"
          />
          <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              אם חלק מהתיאור מוכר לכם, מומלץ לפנות לבירור.
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
            פיזיותרפיה לרצפת האגן אינה מסתכמת בתרגילי קיגל, ואינה מבוססת על טיפול פנימי לכל
            מטופל.
          </p>
          <p className={pClass}>
            המטרה היא לזהות אם רצפת האגן אכן מעורבת, להבין מה הבעיה, ולהתאים את הטיפול לממצאים
            ולמטרות הרוכב.
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
              Lai HH, Pontari MA, Argoff CE, et al. Male Chronic Pelvic Pain: AUA Guideline: Part
              I Evaluation and Management Approach. J Urol. 2025;214(2):116-126. doi:
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
              Lai HH, Pontari MA, Argoff CE, et al. Male Chronic Pelvic Pain: AUA Guideline: Part
              II Treatment of Chronic Prostatitis/Chronic Pelvic Pain Syndrome. J Urol.
              2025;214(2):127-137. doi:
              <a
                href="https://doi.org/10.1097/JU.0000000000004565"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/JU.0000000000004565
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Burzynski B, Jurys T, Burzynski K, Cempa K, Paradysz A. Physiotherapeutic
              Assessment and Management of Chronic Pelvic Pain Syndrome: A Case Report. Medicine.
              2021;100(15). doi:
              <a
                href="https://doi.org/10.1097/MD.0000000000025525"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/MD.0000000000025525
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
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
