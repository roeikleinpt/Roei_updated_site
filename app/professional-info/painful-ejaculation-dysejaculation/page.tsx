import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import AnnotatedFigure from "../../components/AnnotatedFigure";
import AuthorBox from "../../components/AuthorBox";
import ArticleCta from "../../components/ArticleCta";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("painful-ejaculation-dysejaculation");

export const metadata: Metadata = {
  title: "כאב בזמן או אחרי שפיכה: גורמים, בירור וטיפול פיזיותרפי",
  description:
    "כאב בשפיכה הוא תסמין ולא אבחנה. איפה הכאב יכול להופיע, מה יכול לגרום לו, מה הקשר לתסמונת כאב אגני כרוני, כיצד נראה הבירור ומתי פיזיותרפיה של רצפת האגן רלוונטית.",
  alternates: { canonical: "/professional-info/painful-ejaculation-dysejaculation" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "כאב בזמן או אחרי שפיכה | רועי קליין פיזיותרפיה",
    description:
      "Painful Ejaculation ו־Dysejaculation: מיקום ותזמון הכאב, גורמים אפשריים, הקשר ל־CP/CPPS, תהליך הבירור ומקומה של פיזיותרפיה של רצפת האגן.",
    url: "/professional-info/painful-ejaculation-dysejaculation",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const h3Class = "mt-6 text-xl font-bold text-slate-900";
const ulClass = "mt-4 list-disc space-y-2 pr-6 leading-8 text-black";
// פריט ברשימת המיקומים — מודגש כשמגיעים אליו מהסימון על האיור
const liClass =
  "scroll-mt-24 rounded-lg px-3 py-1.5 leading-8 text-black transition-colors target:bg-teal-50 target:ring-1 target:ring-teal-200";

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
    q: "האם כאב בשפיכה תמיד אומר שיש דלקת בערמונית?",
    a: "לא. דלקת או מחלה של הערמונית הן רק חלק מהגורמים האפשריים. כאב בשפיכה יכול להופיע גם בתסמונת כאב אגני כרוני, לאחר ניתוחים או טראומה, בעקבות בעיות בדרכי הזרע או בשלפוחיות הזרע, במעורבות של רצפת האגן, ולעיתים ללא גורם ברור.",
  },
  {
    q: "האם CP/CPPS יכול לגרום לכאב בזמן או אחרי שפיכה?",
    a: "כן. כאב הקשור לשפיכה הוא תלונה שכיחה בקרב גברים עם תסמונת כאב אגני כרוני. אצל חלק מהגברים נמצאו גם רגישות או קושי בהרפיית שרירי רצפת האגן, אך זהו מצב רב־גורמי ולא כל כאב בשפיכה נובע מרצפת האגן.",
  },
  {
    q: "האם פיזיותרפיה יכולה לעזור לכאב בשפיכה?",
    a: "כאשר בבדיקה נמצאים רגישות מיופסציאלית, Pelvic Floor Myalgia או הפרעה אחרת בתפקוד שרירי רצפת האגן, פיזיותרפיה יכולה להיות חלק מהטיפול. הנחיות ה־AUA משנת 2025 מאפשרות להציע טיפול מנואלי מותאם במצבים אלה, בהמלצה מותנית וברמת ראיות Grade C.",
  },
  {
    q: "מתי כאב בשפיכה מצריך בירור רפואי?",
    a: "כאב חדש או מתמשך מצדיק בירור, במיוחד כאשר הוא מלווה בחום, דם בשתן או בנוזל הזרע, צריבה משמעותית, שינוי במתן שתן, נפיחות או כאב משמעותי באשך, או כאשר הוא הופיע לאחר ניתוח או טראומה. המטרה היא לשלול גורמים אורולוגיים, זיהומיים או אחרים לפני שמייחסים את הכאב לרצפת האגן בלבד.",
  },
];

export default function PainfulEjaculationArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            כאב בזמן או אחרי שפיכה: גורמים, בירור וטיפול פיזיותרפי
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאב בזמן השפיכה או לאחריה נקרא Painful Ejaculation&rlm; או Dysejaculation&rlm;. בספרות
            מופיעים גם המונחים Odynorgasmia&rlm;, Dysorgasmia&rlm; ו־Orgasmalgia&rlm;. הכאב יכול
            להופיע בזמן האורגזמה או פליטת הזרע, מיד לאחריהן ולעיתים להימשך גם לאחר סיום הפעילות
            המינית.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            מדובר בתסמין ולא באבחנה בפני עצמה. ה־AUA/SMSNA&rlm; מתאר כאב בשפיכה כמצב שעדיין אינו
            מובן במלואו ושיכול לכלול גורמים אורגניים ופסיכוגניים, ולעיתים להופיע יחד עם מצבים אחרים
            של כאב אגני כרוני.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>איפה הכאב יכול להופיע?</h2>
          <p className={pClass}>
            המיקום משתנה מאדם לאדם, והוא רק חלק מהתמונה.
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <AnnotatedFigure
            src="/professional-info/painful-ejaculation-overview.webp"
            alt="איור אנטומי של אגן הגבר בתצוגה צדית ובו מסומנים ששת האזורים שבהם עשוי להופיע כאב בזמן או אחרי שפיכה: פרינאום, הפין והשופכה, ראש הפין, האזור שמעל עצם החיק, האשכים ואזור פי הטבעת"
            width={1443}
            height={1091}
            maxWidth="max-w-2xl"
            chrome={0.62}
            markers={[
              { n: 1, cx: 411, cy: 599, rx: 52, ry: 24, rot: -18, bx: 250, by: 718, href: "pain-perineum", label: "פרינאום" },
              // השופכה מודגשת לאורכה במקום להיות מוקפת. cx ו-cy הם עוגן קו ההובלה בלבד
              { n: 2, cx: 558, cy: 556, rx: 0, ry: 0, stroke: "#2F6196", d: "M344 565 Q364 577 378 575.5 Q392 574 408 567 Q424 560 440 552.5 Q456 545 472 538.5 Q488 532 502 531.5 Q516 531 528 535 Q540 539 549 547.5 Q558 556 564.5 569 Q571 582 574 598.5 Q577 615 579.5 635 Q582 655 583 675 Q584 695 584.5 715 Q585 735 586 748.5 L587 762", bx: 700, by: 495, href: "pain-penis-urethra", label: "הפין והשופכה" },
              { n: 3, cx: 594, cy: 733, rx: 44, ry: 61, bx: 690, by: 830, href: "pain-glans", label: "ראש הפין" },
              { n: 4, cx: 525, cy: 457, rx: 48, ry: 42, bx: 648, by: 372, href: "pain-suprapubic", label: "מעל עצם החיק" },
              { n: 5, cx: 478, cy: 725, rx: 57, ry: 73, bx: 372, by: 830, href: "pain-testicles", label: "האשכים" },
              { n: 6, cx: 323, cy: 595, rx: 31, ry: 30, bx: 214, by: 600, href: "pain-rectum", label: "פי הטבעת" },
            ]}
            caption="הקישו על המספר או על האזור המוקף באיור כדי לעבור להסבר על אותו מיקום."
          />

          <ol className="mt-6 space-y-1">
            <li>
              <div id="pain-perineum" className={liClass}>
                <span className="font-bold">1. פרינאום (Perineum)&rlm;</span> האזור שבין שק
                האשכים לפי הטבעת.
              </div>
            </li>
            <li>
              <div id="pain-penis-urethra" className={liClass}>
                <span className="font-bold">2. הפין ולאורך השופכה</span> הכאב עשוי להיות מורגש
                לאורך התעלה שדרכה עוברים השתן ונוזל הזרע.
              </div>
            </li>
            <li>
              <div id="pain-glans" className={liClass}>
                <span className="font-bold">3. ראש הפין</span> לעיתים הכאב ממוקד דווקא בקצה.
              </div>
            </li>
            <li>
              <div id="pain-suprapubic" className={liClass}>
                <span className="font-bold">4. מעל עצם החיק או שלפוחית השתן</span> תחושת לחץ או כאב
                בתחתית הבטן.
              </div>
            </li>
            <li>
              <div id="pain-testicles" className={liClass}>
                <span className="font-bold">5. האשכים או שק האשכים</span> כאב שיכול להיות בצד אחד
                או בשני הצדדים.
              </div>
            </li>
            <li>
              <div id="pain-rectum" className={liClass}>
                <span className="font-bold">6. אזור פי הטבעת והרקטום</span> כאב עמוק שמורגש לעיתים
                בישיבה.
              </div>
            </li>
          </ol>
          <p className={pClass}>
            גם התזמון חשוב: האם הכאב מתחיל בזמן השפיכה, מיד לאחריה או נמשך במשך זמן. מיקום ותזמון
            יכולים לעזור לכוון את הבירור, אך אינם מספיקים לבדם כדי לקבוע מהו המקור האנטומי או
            האבחנה.
          </p>

          <h2 className={h2Class}>מה יכול לגרום לכאב בשפיכה?</h2>
          <p className={pClass}>
            יש מספר גורמים אפשריים, ולא תמיד נמצא גורם יחיד וברור.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
          </p>
          <ul className={ulClass}>
            <li>תסמונת כאב אגני כרוני, CP/CPPS&rlm;</li>
            <li>דלקת חיידקית חריפה או כרונית של הערמונית</li>
            <li>דלקת בשופכה או זיהומים במערכת המין והשתן</li>
            <li>הגדלה שפירה של הערמונית (BPH)&rlm; ותסמיני דרכי שתן תחתונות</li>
            <li>חסימה של צינורות השפיכה</li>
            <li>פתולוגיה של שלפוחיות הזרע, לרבות דלקת או אבנים</li>
            <li>ניתוחים או טראומה באזור הערמונית והאגן</li>
            <li>גורמים עצביים, לרבות פגיעה אפשרית במסלולים תחושתיים באגן</li>
            <li>מעורבות מיופסציאלית או רגישות של שרירי רצפת האגן</li>
          </ul>
          <p className={pClass}>
            גם לאחר בירור, בחלק מהמקרים לא מזוהה סיבה חד־משמעית.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            להרחבה על מצבים שיכולים להופיע באותו אזור:{" "}
            <Link
              href="/professional-info/chronic-testicular-pain-orchialgia-cscp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב אשכים כרוני
            </Link>{" "}
            ו־<Link
              href="/professional-info/pudendal-neuralgia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              נוירלגיה של עצב הפודנדל
            </Link>
          </p>

          <h2 className={h2Class}>לא כל תסמין אחרי אורגזמה הוא כאב בשפיכה</h2>
          <p className={pClass}>
            Post-Orgasmic Illness Syndrome (POIS)&rlm; הוא מצב שונה. הוא מתאפיין בעיקר בתסמינים
            כלליים לאחר אורגזמה, כגון עייפות, תחושת מחלה, כאבי שרירים או קושי קוגניטיבי, ולא רק
            בכאב מקומי באגן. זהו מצב נדיר ולא מובן היטב, והראיות לגבי הטיפול בו מוגבלות.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>מה הקשר ל־CP/CPPS?</h2>
          <p className={pClass}>
            כאב הקשור לשפיכה הוא תלונה שכיחה בקרב גברים עם תסמונת כאב אגני כרוני. בסקירות ובמחקרים
            שונים דווח על שיעורים גבוהים של כאב בזמן או לאחר שפיכה באוכלוסייה זו.
            <Ref n={3} />
            <Ref n={5} />{" "}
            במחקר שבדק את יכולת ההרפיה של רצפת האגן בגברים עם CP/CPPS&rlm; נמצא קושי גדול יותר
            להרפות את השרירים לאחר כיווץ, והממצא היה בולט במיוחד בקרב גברים שדיווחו על כאב הקשור
            לשפיכה.
            <Ref n={5} />
          </p>
          <p className={pClass}>
            אין בכך הוכחה שכל כאב בשפיכה נובע מרצפת האגן. CP/CPPS&rlm; הוא מצב רב־גורמי, והכאב יכול
            להופיע לצד תסמיני שתן, כאב באזורים נוספים באגן ושינויים בתפקוד המיני.
          </p>
          <p className={pClass}>
            להרחבה:{" "}
            <Link
              href="/professional-info/chronic-prostatitis-pelvic-pain-syndrome"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              תסמונת כאב אגני כרוני (CP/CPPS)
            </Link>{" "}
            ו־<Link
              href="/professional-info/pelvic-floor-physiotherapy-cpps"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              פיזיותרפיה של רצפת האגן ב־CP/CPPS
            </Link>
          </p>

          <h2 className={h2Class}>מה הקשר לרצפת האגן?</h2>
          <p className={pClass}>
            אצל חלק מהגברים עם כאב אגני ניתן למצוא רגישות מיופסציאלית, כאב במישוש, פעילות יתר או
            קושי בהרפיה של שרירי רצפת האגן. בהנחיות AUA&rlm; משנת 2025 מצוין כי בגברים עם Pelvic
            Floor Myalgia&rlm; או Abdominopelvic Muscle Myalgia&rlm; ניתן להציע טיפול מנואלי
            פיזיותרפי מותאם. זוהי המלצה מותנית, ברמת ראיות Grade C&rlm;.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            לכן כאשר כאב בשפיכה מופיע יחד עם כאב בפרינאום, כאב אגני, תסמיני שתן או רגישות שרירית,
            הערכת רצפת האגן יכולה להיות חלק מהבירור.
          </p>
          <p className={pClass}>
            להרחבה:{" "}
            <Link
              href="/professional-info/pelvic-floor-and-ejaculation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              רצפת האגן והשפיכה: מה תפקיד השרירים?
            </Link>
          </p>

          <h2 className={h2Class}>איך בודקים כאב בשפיכה?</h2>
          <p className={pClass}>
            הבירור מתחיל בהיסטוריה מפורטת ובניסיון להבין את דפוס התסמין.
            <Ref n={1} />
            <Ref n={3} />
            <Ref n={4} />
          </p>

          <h3 className={h3Class}>מאפייני הכאב</h3>
          <ul className={ulClass}>
            <li>מתי הכאב התחיל, והאם הוא מופיע בכל שפיכה או רק לעיתים</li>
            <li>איפה בדיוק הוא מורגש</li>
            <li>האם הוא מתחיל בזמן השפיכה או לאחריה, וכמה זמן הוא נמשך</li>
            <li>האם קיים כאב גם בזמנים אחרים</li>
          </ul>

          <h3 className={h3Class}>תסמינים נלווים</h3>
          <ul className={ulClass}>
            <li>צריבה, תכיפות, זרם חלש או תסמינים אחרים במתן שתן</li>
            <li>דם בשתן או בנוזל הזרע</li>
            <li>חום, צמרמורות או הרגשה כללית רעה</li>
          </ul>

          <h3 className={h3Class}>רקע רפואי</h3>
          <ul className={ulClass}>
            <li>זיהומים, ניתוחים או טראומה באזור האגן</li>
            <li>תסמינים מיניים נוספים, כגון שפיכה מוקדמת או הפרעה בזקפה</li>
          </ul>

          <p className={pClass}>
            בהתאם לתמונה, הבירור הרפואי יכול לכלול בדיקת שתן ותרבית, בדיקה של איברי המין והערמונית,
            הערכת שארית שתן ובדיקות נוספות לפי הצורך. כאשר עולה חשד ל־CP/CPPS&rlm; או למעורבות
            שרירית, ניתן להעריך גם רגישות, טונוס ויכולת כיווץ והרפיה של רצפת האגן.
            <Ref n={3} />
            <Ref n={4} />
            <Ref n={6} />{" "}
            בדיקה פנימית אינה חובה; היא נשקלת לפי צורך, לאחר הסבר ובהסכמה.
          </p>

          <h2 className={h2Class}>מה כוללת הפיזיותרפיה של רצפת האגן?</h2>
          <p className={pClass}>
            הטיפול יכול לכלול, בהתאם לממצאים, טיפול מנואלי חיצוני ולעיתים פנימי, עבודה על רקמות
            האגן, הבטן והירכיים, שיפור הרפיה ותיאום של רצפת האגן, תרגול מותאם וביופידבק. ה־AUA&rlm;
            מאפשר להציע טיפול מנואלי מותאם במצבים אלה, אך מדגיש שמדובר בהמלצה מותנית וברמת ראיות
            Grade C&rlm;.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            פיזיותרפיה אינה הטיפול המתאים לכל אדם עם כאב בשפיכה. היא רלוונטית במיוחד כאשר בבדיקה
            נמצאים רגישות מיופסציאלית, Pelvic Floor Myalgia&rlm;, קושי בהרפיה או הפרעה אחרת בתפקוד
            שרירי האגן.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            להרחבה:{" "}
            <Link
              href="/professional-info/mens-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              פיזיותרפיה לרצפת האגן בגברים
            </Link>
          </p>
          <p className={pClass}>
            הראיות לטיפול פיזיותרפי בכאב אגני כרוני עדיין מוגבלות ואינן מאפשרות להבטיח תוצאה. לכן
            הטיפול צריך להיות מותאם לממצאים ולעיתים להשתלב עם בירור וטיפול אורולוגי או רפואי נוסף.
            <Ref n={6} />
            <Ref n={7} />
          </p>

          <h2 className={h2Class}>מתי חשוב לפנות לבירור רפואי?</h2>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              כאב חדש או מתמשך בשפיכה מצדיק בירור רפואי, במיוחד כאשר קיימים חום או צמרמורות, דם
              בשתן, קושי משמעותי במתן שתן, נפיחות או כאב חריף באשך, או כאשר יש חשד לזיהום או לממצא
              אורולוגי אחר.
              <Ref n={3} />
              <Ref n={4} />
            </p>
          </div>
          <p className={pClass}>
            דם בשתן או ממצא חריג בבדיקת הערמונית אינם צריכים להיות מיוחסים אוטומטית ל־CP/CPPS&rlm;
            ודורשים הערכה מתאימה.
            <Ref n={3} />
            <Ref n={4} />
          </p>

          <ArticleCta
            intro="אם התסמין מפריע בחיי היומיום או בתפקוד המיני, ניתן לקבוע פגישת אבחון ולהתאים את הבירור והטיפול לממצאים."
            whatsappText="היי רועי, קראתי אצלך הסבר על כאב סביב E, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Shindel AW, Althof SE, Carrier S, et al. Disorders of Ejaculation: An AUA/SMSNA
              Guideline. J Urol. 2022;207(3):504-512. doi:
              <a
                href="https://doi.org/10.1097/JU.0000000000002392"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/JU.0000000000002392
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Ilie CP, Mischianu DL, Pemberton RJ. Painful ejaculation. BJU Int.
              2007;99(6):1335-1339. doi:
              <a
                href="https://doi.org/10.1111/j.1464-410X.2007.06664.x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1111/j.1464-410X.2007.06664.x
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Borgert BJ, Wallen EM, Pham MN. Prostatitis: A Review. JAMA. 2025;334(11):1003-1013.
              doi:
              <a
                href="https://doi.org/10.1001/jama.2025.11499"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1001/jama.2025.11499
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Lam JC, Stokes W. Acute and Chronic Prostatitis. Am Fam Physician. 2024;110(1):45-51.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/39028781/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                PMID: 39028781
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Yani MS, Eckel SP, Kirages DJ, et al. Impaired Ability to Relax Pelvic Floor Muscles
              in Men With Chronic Prostatitis/Chronic Pelvic Pain Syndrome. Phys Ther.
              2022;102(7):pzac059. doi:
              <a
                href="https://doi.org/10.1093/ptj/pzac059"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/ptj/pzac059
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Lai HH, Pontari MA, Argoff CE, et al. Male Chronic Pelvic Pain: AUA Guideline: Part II
              Treatment of Chronic Prostatitis/Chronic Pelvic Pain Syndrome. J Urol.
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
            <li id="ref-7" className="scroll-mt-24">
              Franco JVA, Turk T, Jung JH, et al. Non-pharmacological interventions for treating
              chronic prostatitis/chronic pelvic pain syndrome. Cochrane Database Syst Rev.
              2018;5(5):CD012551. doi:
              <a
                href="https://doi.org/10.1002/14651858.CD012551.pub3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/14651858.CD012551.pub3
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
