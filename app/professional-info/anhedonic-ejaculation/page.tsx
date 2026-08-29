import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import ArticleFigure from "../../components/ArticleFigure";
import AuthorBox from "../../components/AuthorBox";
import ArticleCta from "../../components/ArticleCta";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("anhedonic-ejaculation");

export const metadata: Metadata = {
  title: "שפיכה או אורגזמה ללא תחושת הנאה: למה זה יכול לקרות?",
  description:
    "אצל חלק מהגברים השפיכה מתרחשת אך תחושת ההנאה חלשה מאוד או חסרה. אילו מערכות יכולות להיות מעורבות, מה מקומן של תרופות וניתוחים, והאם לרצפת האגן יש קשר לכך.",
  alternates: { canonical: "/professional-info/anhedonic-ejaculation" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "שפיכה או אורגזמה ללא תחושת הנאה | רועי קליין פיזיותרפיה",
    description:
      "אורגזמה אנהדונית: מערכת העצבים, תרופות, ניתוחים באגן, גורמים הורמונליים ורגשיים, ומה מקומה של הערכת רצפת האגן.",
    url: "/professional-info/anhedonic-ejaculation",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const h3Class = "mt-6 text-xl font-bold text-slate-900";
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
    q: "האם אפשר לשפוך כרגיל אבל כמעט לא להרגיש הנאה?",
    a: "כן. במצב של אורגזמה או שפיכה אנהדונית השפיכה עצמה יכולה להתרחש, אך תחושת ההנאה המלווה אותה חלשה מאוד או חסרה. חשוב להבדיל זאת מקושי להגיע לשפיכה או לאורגזמה, שאלו מצבים אחרים.",
  },
  {
    q: "האם תרופות יכולות להפחית את תחושת האורגזמה?",
    a: "כן. תרופות שונות, ובמיוחד תרופות המשפיעות על מערכת העצבים כגון תרופות ממשפחת SSRI ותרופות פסיכיאטריות נוספות, יכולות לשנות את זמן השפיכה, את עוצמת האורגזמה או את התחושה המלווה אותה. גם אופיואידים, תרופות מסוימות ללחץ דם ותרופות לטיפול בתסמיני ערמונית תוארו בהקשר זה.",
  },
  {
    q: "האם רצפת אגן מכווצת יכולה לגרום לאורגזמה ללא הנאה?",
    a: "ייתכן שרצפת האגן תהיה חלק מהתמונה אצל חלק מהגברים, במיוחד כאשר קיימים גם כאב אגני, כאב בשפיכה או קושי בהרפיית השרירים. עם זאת, נכון להיום אין ראיות מספיקות כדי לקבוע שרצפת אגן היפרטונית היא גורם ישיר ומוכח לאורגזמה ללא הנאה.",
  },
  {
    q: "האם שינוי חדש בתחושת האורגזמה מצריך בירור?",
    a: "שינוי חדש ומתמשך בהחלט מצדיק בירור, במיוחד אם הוא הופיע לאחר התחלת תרופה, ניתוח, מחלה נוירולוגית או שינוי אחר בתפקוד המיני. הבירור נועד לזהות האם מקור השינוי עצבי, תרופתי, הורמונלי, אורולוגי או קשור לגורמים נוספים.",
  },
];

export default function AnhedonicEjaculationArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            שפיכה או אורגזמה ללא תחושת הנאה: למה זה יכול לקרות?
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            אצל חלק מהגברים השפיכה מתרחשת, אך תחושת ההנאה שאמורה ללוות אותה חלשה מאוד או אינה
            מופיעה כלל. בספרות משתמשים בין היתר במונחים Anhedonic Orgasm&rlm; או Anhedonic
            Ejaculation&rlm; לתיאור מצב שבו החוויה ההדונית של האורגזמה או השפיכה מופחתת, למרות
            שתהליך השפיכה עצמו עשוי להתרחש.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            חשוב להבדיל בין מצב כזה לבין קושי להגיע לשפיכה או לאורגזמה. אורגזמה ושפיכה הן תהליכים
            שונים, ולכן יש לברר בנפרד מה קורה לפליטת הזרע ומה קורה לתחושת ההנאה.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            להרחבה:{" "}
            <Link
              href="/professional-info/orgasm-vs-ejaculation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              אורגזמה ושפיכה: מה ההבדל?
            </Link>
          </p>

          <h2 className={h2Class}>למה זה יכול לקרות?</h2>
          <p className={pClass}>
            מספר מערכות יכולות להשפיע על תחושת האורגזמה או על השפיכה, ולעיתים קיימים כמה גורמים
            במקביל.
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <ArticleFigure
            src="/professional-info/anhedonic-ejaculation-causes.webp"
            alt="אינפוגרפיקה בחמישה חלקים של גורמים אפשריים לשפיכה או אורגזמה ללא תחושת הנאה: מערכת העצבים, תרופות, ניתוחים וטיפולים, הורמונים ובריאות כללית וגורמים רגשיים, וכאב אגני או רצפת האגן"
            caption="חמש קבוצות של גורמים אפשריים. לעיתים קרובות פועלים כמה מהם במקביל."
          />

          <h3 className={h3Class}>מערכת העצבים</h3>
          <p className={pClass}>
            תחושת האורגזמה תלויה בעיבוד עצבי מרכזי ובהעברת מידע תחושתי מאזור איברי המין והאגן.
            פגיעה בחוט השדרה, טרשת נפוצה, נוירופתיה סוכרתית, שבץ, טראומה או פגיעה עצבית לאחר
            ניתוחים יכולים לשנות את תחושת האורגזמה, את השפיכה או את שתיהן.
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h3 className={h3Class}>תרופות</h3>
          <p className={pClass}>
            תרופות שונות יכולות להשפיע על זמן השפיכה, על נפח או כוח הפליטה ועל תחושת האורגזמה. בין
            התרופות שתוארו בהקשר זה נמצאות תרופות ממשפחת SSRI&rlm;, תרופות פסיכיאטריות נוספות,
            אופיואידים, תרופות מסוימות ללחץ דם וכן תרופות המשמשות לטיפול בתסמיני ערמונית.
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h3 className={h3Class}>ניתוחים וטיפולים באזור האגן</h3>
          <p className={pClass}>
            ניתוחים בערמונית, בצוואר שלפוחית השתן או באזור האגן יכולים לשנות את מנגנון השפיכה. בחלק
            מהמקרים נפח נוזל הזרע פוחת או נעלם, ובחלקם מתרחשת{" "}
            <Link
              href="/professional-info/retrograde-ejaculation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שפיכה אחורית
            </Link>
            , גם כאשר תחושת האורגזמה עצמה נשמרת.
            <Ref n={2} />
            <Ref n={4} />
          </p>

          <h3 className={h3Class}>גורמים הורמונליים ורגשיים</h3>
          <p className={pClass}>
            היפוגונדיזם, סוכרת, שינויים הקשורים לגיל ומצבים רפואיים נוספים עשויים להשפיע על התפקוד
            המיני. גם דיכאון, מתח, חרדת ביצוע וקושי בתוך מערכת היחסים יכולים להשפיע על החוויה
            הסובייקטיבית של פעילות מינית ואורגזמה.
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>האם רצפת האגן יכולה להיות קשורה?</h2>
          <p className={pClass}>
            ייתכן, אך נכון להיום אין בסיס לקבוע שרצפת אגן היפרטונית היא גורם ישיר ומוכח לאורגזמה
            ללא הנאה. שרירי רצפת האגן משתתפים בשלב הפליטה של השפיכה, ולכן שינוי בתיאום, בכיווץ או
            בהרפיה עשוי להיות רלוונטי אצל חלק מהמטופלים, במיוחד כאשר קיימים גם כאב אגני, כאב בשפיכה
            או תסמינים נוספים של רצפת האגן.
            <Ref n={5} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            במחקר על גברים עם CP/CPPS&rlm; נמצאה יכולת מופחתת להרפות את רצפת האגן לאחר כיווץ,
            והקושי היה בולט במיוחד בקרב גברים שדיווחו על כאב הקשור לשפיכה.
            <Ref n={5} />{" "}
            זהו קשר מעניין, אך הוא אינו מוכיח שרצפת האגן היא הסיבה לאורגזמה אנהדונית.
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
            </Link>{" "}
            ו־<Link
              href="/professional-info/mens-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              פיזיותרפיה לרצפת האגן בגברים
            </Link>
          </p>

          <p className={pClass}>
            כאשר השפיכה עצמה כואבת, מדובר בתסמין נפרד:{" "}
            <Link
              href="/professional-info/painful-ejaculation-dysejaculation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב בזמן או אחרי שפיכה
            </Link>
          </p>

          <h2 className={h2Class}>מה כוללת ההערכה?</h2>
          <ul className={ulClass}>
            <li>האם קיימת פליטת זרע, ומה הכמות והאופי שלה</li>
            <li>האם תחושת האורגזמה קיימת אך חלשה, או שאינה מורגשת כלל</li>
            <li>האם מדובר במצב שהיה קיים תמיד או בשינוי חדש</li>
            <li>האם קיימים כאב בזמן או אחרי שפיכה, כאב אגני או תסמיני שתן</li>
            <li>האם קיימות תרופות, מחלות רקע, ניתוחים או טראומה שיכולים להסביר את השינוי</li>
            <li>אם עולה חשד למעורבות שרירית: כיצד רצפת האגן מתכווצת, נרפית ומתואמת</li>
          </ul>
          <p className={pClass}>
            כאשר עולה חשד למעורבות של רצפת האגן, ההערכה יכולה להתייחס לטונוס במנוחה, רגישות, יכולת
            כיווץ ויכולת הרפיה. בדיקה פנימית אינה חובה; היא נשקלת לפי צורך, לאחר הסבר ובהסכמה.
            <Ref n={6} />
          </p>

          <h2 className={h2Class}>מתי חשוב לפנות לבירור רפואי?</h2>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              שינוי חדש ומתמשך בתחושת האורגזמה או בשפיכה, במיוחד לאחר התחלת תרופה, ניתוח, מחלה
              נוירולוגית, או כאשר יש שינוי משמעותי בכמות או בכיוון פליטת הזרע, מצדיק בירור רפואי.
              <Ref n={2} />
              <Ref n={3} />
            </p>
          </div>
          <p className={pClass}>
            כאשר קיימים במקביל כאב אגני או סימנים של הפרעה בתפקוד רצפת האגן, ניתן לשלב גם הערכה
            פיזיותרפית.
          </p>

          <ArticleCta
            intro="אם התסמין מפריע בחיי היומיום או בתפקוד המיני, ניתן לקבוע פגישת אבחון ולהתאים את הבירור והטיפול לממצאים."
            whatsappText="היי רועי, קראתי אצלך הסבר על AE, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Alwaal A, Breyer BN, Lue TF. Normal male sexual function: emphasis on orgasm and
              ejaculation. Fertil Steril. 2015;104(5):1051-1060. doi:
              <a
                href="https://doi.org/10.1016/j.fertnstert.2015.08.033"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.fertnstert.2015.08.033
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
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
            <li id="ref-3" className="scroll-mt-24">
              Hentzen C, Musco S, Amarenco G, et al. Approach and management to patients with
              neurological disorders reporting sexual dysfunction. Lancet Neurol.
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
            <li id="ref-4" className="scroll-mt-24">
              Practice Committee of the American Society for Reproductive Medicine in collaboration
              with the Society for Male Reproduction and Urology. Diagnostic evaluation of sexual
              dysfunction in the male partner in the setting of infertility: a committee opinion.
              Fertil Steril. 2023;120(5):967-972. doi:
              <a
                href="https://doi.org/10.1016/j.fertnstert.2023.07.001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.fertnstert.2023.07.001
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
              D&apos;Ancona C, Haylen B, Oelke M, et al. The International Continence Society (ICS)
              report on the terminology for adult male lower urinary tract and pelvic floor symptoms
              and dysfunction. Neurourol Urodyn. 2019;38(2):433-477. doi:
              <a
                href="https://doi.org/10.1002/nau.23897"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.23897
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
