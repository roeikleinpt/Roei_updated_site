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

const article = getArticle("orgasm-vs-ejaculation");

export const metadata: Metadata = {
  title: "אורגזמה ושפיכה: מה ההבדל?",
  description:
    "אורגזמה ושפיכה מתרחשות בדרך כלל יחד, אך אלו שני תהליכים שונים. מהם שני שלבי השפיכה, מדוע יכולה להיות אורגזמה בלי פליטת זרע או שפיכה בלי תחושת הנאה, ומה תפקידה של רצפת האגן.",
  alternates: { canonical: "/professional-info/orgasm-vs-ejaculation" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "אורגזמה ושפיכה: מה ההבדל? | רועי קליין פיזיותרפיה",
    description:
      "החוויה התחושתית מול התהליך העצבי־שרירי, שני שלבי השפיכה, ומה מקומם של שרירי רצפת האגן.",
    url: "/professional-info/orgasm-vs-ejaculation",
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
    q: "האם עוצמת האורגזמה קשורה לנפח הזרע?",
    a: "לא בהכרח. תחושת האורגזמה והפליטה עצמה הם שני היבטים שונים של אותו אירוע. אצל חלק מהגברים ירידה בנפח מלווה גם בשינוי בתחושה, ואצל אחרים התחושה נשארת דומה. שינוי מתמשך באחד מהם מצדיק בירור.",
  },
  {
    q: "האם אורגזמה ושפיכה תמיד מתרחשות יחד?",
    a: "לא בהכרח. הן מתרחשות יחד ברוב המקרים, ולכן קל לחשוב שמדובר בתהליך אחד. בפועל יכולה להתרחש אורגזמה ללא פליטת זרע, וגם שפיכה כאשר תחושת האורגזמה חלשה מאוד או אינה מורגשת כרגיל.",
  },
  {
    q: "האם שרירי רצפת האגן משתתפים בשפיכה?",
    a: "כן. בשלב הפליטה של השפיכה מתרחשים כיווצים ריתמיים של שרירים ובהם ה־Bulbospongiosus וה־Ischiocavernosus. הכיווצים האלה הם חלק מהמנגנון המסייע בפליטת נוזל הזרע דרך השופכה.",
  },
];

export default function OrgasmVsEjaculationArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            אורגזמה ושפיכה: מה ההבדל?
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            אורגזמה ושפיכה מתרחשות בדרך כלל יחד, ולכן קל לחשוב שמדובר באותו תהליך. בפועל אלו שני
            תהליכים שונים: אורגזמה (Orgasm)&rlm; היא החוויה התחושתית והסובייקטיבית של השיא המיני,
            ואילו שפיכה (Ejaculation)&rlm; היא תהליך עצבי־שרירי שבו נוזל הזרע מועבר ונפלט דרך
            השופכה.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            ההבחנה ביניהם חשובה, משום שבמצבים מסוימים יכולה להתרחש אורגזמה ללא פליטת זרע, או
            לחלופין יכולה להתרחש שפיכה כאשר תחושת האורגזמה חלשה מאוד או אינה מורגשת כרגיל.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>מהי אורגזמה?</h2>
          <p className={pClass}>
            האורגזמה היא חוויה סובייקטיבית המערבת את מערכת העצבים המרכזית והאוטונומית. היא מלווה
            בדרך כלל בעלייה זמנית בדופק, בלחץ הדם ובקצב הנשימה, ובפעילות שרירית ריתמית של רצפת
            האגן.
            <Ref n={1} />
            <Ref n={3} />{" "}
            עוצמת האורגזמה והאופן שבו היא נחווית יכולים להשתנות בין אנשים וגם אצל אותו אדם בתקופות
            שונות. לכן עצם קיומה של פליטת זרע אינה אומרת בהכרח שתחושת האורגזמה הייתה תקינה או
            מספקת.
          </p>

          <h2 className={h2Class}>ומה קורה בזמן השפיכה?</h2>
          <p className={pClass}>
            מקובל לחלק את השפיכה לשני שלבים עיקריים.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <ArticleFigure
            src="/professional-info/ejaculation-two-phases.webp"
            alt="תרשים בשני שלבים של תהליך השפיכה: שלב ההעברה, Emission, שבו המערכת הסימפתטית מעבירה נוזלים אל השופכה וצוואר שלפוחית השתן נסגר, ושלב הפליטה, Expulsion, שבו רפלקס דרך עצב הפודנדל ומקטעי S2 עד S4 מפעיל כיווצים ריתמיים של שרירי רצפת האגן"
            caption="שני שלבי השפיכה. אורגזמה היא החוויה התחושתית, ושפיכה היא התהליך העצבי־שרירי."
          />

          <h3 className={h3Class}>שלב ראשון, Emission&rlm;</h3>
          <p className={pClass}>
            בשלב זה נוזלים מצינור הזרע, שלפוחיות הזרע והערמונית מועברים אל החלק הקרוב של השופכה.
            התהליך נשלט בעיקר על ידי המערכת הסימפתטית, ובמקביל מתרחשת סגירה של צוואר שלפוחית השתן,
            המסייעת לכוון את נוזל הזרע קדימה.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h3 className={h3Class}>שלב שני, Expulsion&rlm;</h3>
          <p className={pClass}>
            לאחר מכן מופעל רפלקס הגורם לכיווצים ריתמיים של שרירי רצפת האגן, ובמיוחד של
            ה־Bulbospongiosus&rlm; וה־Ischiocavernosus&rlm;. הכיווצים מתואמים באמצעות מסלולים
            עצביים הכוללים את עצב הפודנדל ומקטעי S2–S4&rlm; בחוט השדרה, ומסייעים בפליטת נוזל הזרע
            דרך השופכה.
            <Ref n={1} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>האם יכולה להיות אורגזמה בלי שפיכה?</h2>
          <p className={pClass}>
            כן. לדוגמה, בשפיכה אחורית (Retrograde Ejaculation)&rlm; נוזל הזרע עובר אל שלפוחית השתן
            במקום לצאת דרך השופכה. במצבים אחרים יכולה להיות פליטה מועטה מאוד או היעדר פליטה, בעוד
            שתחושת האורגזמה נשמרת. מצב כזה מתואר לעיתים גם כאורגזמה יבשה.
            <Ref n={2} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            להרחבה:{" "}
            <Link
              href="/professional-info/retrograde-ejaculation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שפיכה אחורית: כשהאורגזמה מגיעה בלי פליטת זרע
            </Link>
          </p>

          <h2 className={h2Class}>והאם יכולה להיות שפיכה בלי תחושת אורגזמה תקינה?</h2>
          <p className={pClass}>
            גם זה אפשרי. אצל חלק מהגברים תהליך השפיכה מתרחש, אך תחושת ההנאה המלווה אותו חלשה מאוד
            או חסרה. מכיוון שהחוויה האורגזמית ורפלקס השפיכה אינם אותו מסלול פיזיולוגי, שינוי באחד
            מהם אינו מחייב בהכרח שינוי מקביל בשני.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            להרחבה:{" "}
            <Link
              href="/professional-info/anhedonic-ejaculation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שפיכה או אורגזמה ללא תחושת הנאה: למה זה יכול לקרות?
            </Link>
          </p>

          <h2 className={h2Class}>מה התפקיד של רצפת האגן?</h2>
          <p className={pClass}>
            שרירי רצפת האגן משתתפים בעיקר בשלב הפליטה של השפיכה. התפקוד התקין אינו תלוי רק בכוח
            השרירים, אלא גם ביכולת לתזמן כיווץ והרפיה כחלק מהדפוס הריתמי של השפיכה.
            <Ref n={1} />
            <Ref n={3} />
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
            כאשר השפיכה מלווה בכאב, מדובר בתסמין נפרד שדורש בירור משלו:{" "}
            <Link
              href="/professional-info/painful-ejaculation-dysejaculation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב בזמן או אחרי שפיכה
            </Link>
          </p>

          <h2 className={h2Class}>מתי חשוב לפנות לבירור רפואי?</h2>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              שינוי חדש או משמעותי בשפיכה או בתחושת האורגזמה מצדיק בירור, במיוחד אם הופיע לאחר
              התחלת תרופה חדשה, ניתוח או טיפול באזור האגן, או במקביל למחלה נוירולוגית או לסוכרת.
              מטרת הבירור היא להבין האם השינוי קשור לתחושת האורגזמה, לשלב ההעברה, לשלב הפליטה או
              לשילוב ביניהם.
              <Ref n={2} />
              <Ref n={3} />
              <Ref n={4} />
            </p>
          </div>

          <ArticleCta
            intro="אם קיים שינוי בשפיכה או בתחושת האורגזמה ורוצים להבין האם גם לתפקוד רצפת האגן יש חלק בתמונה, הערכה פיזיותרפית יכולה לעזור להבין האם קיים מרכיב שניתן לטפל בו."
            whatsappText="היי רועי, קראתי אצלך הסבר על OMG, ואשמח לבדוק אם הטיפול מתאים לי."
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
