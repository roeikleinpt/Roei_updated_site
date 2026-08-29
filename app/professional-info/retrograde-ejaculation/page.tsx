import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import ComparisonTable from "../../components/ComparisonTable";
import AuthorBox from "../../components/AuthorBox";
import ArticleCta from "../../components/ArticleCta";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("retrograde-ejaculation");

export const metadata: Metadata = {
  title: "שפיכה אחורית: כשהאורגזמה מגיעה בלי פליטת זרע",
  description:
    "בשפיכה אחורית נוזל הזרע זורם אל שלפוחית השתן במקום לצאת דרך השופכה. מה המנגנון, מה הגורמים השכיחים, איך מבררים, ולמה זו אינה בעיה של שרירי רצפת האגן.",
  alternates: { canonical: "/professional-info/retrograde-ejaculation" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "שפיכה אחורית ואורגזמה יבשה | רועי קליין פיזיותרפיה",
    description:
      "שפיכה אחורית: מנגנון סגירת צוואר השלפוחית, חוסמי אלפא, סוכרת וניתוחי ערמונית, בדיקת השתן שלאחר שפיכה, וההבדל מהיעדר פליטה מסיבה אחרת.",
    url: "/professional-info/retrograde-ejaculation",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
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
    q: "מהי אורגזמה יבשה?",
    a: "זהו תיאור של מצב שבו קיימת תחושת אורגזמה אך אין פליטה נראית של נוזל זרע, או שכמותו קטנה מאוד. זהו תיאור של מה שהגבר חווה, ולא אבחנה. שפיכה אחורית היא אחד ההסברים האפשריים.",
  },
  {
    q: "האם אורגזמה יבשה תמיד נובעת משפיכה אחורית?",
    a: "לא. שפיכה אחורית היא סיבה אפשרית, אך היעדר פליטה או ירידה משמעותית בנפח יכולים לנבוע גם מכשל בשלב ההעברה, מחסימה בצינורות השפיכה, מהשפעת תרופות או ממצבים אחרים. בירור רפואי הוא שקובע.",
  },
  {
    q: "האם שפיכה אחורית משפיעה על פוריות?",
    a: "כאשר רוב נוזל הזרע מגיע לשלפוחית, הדבר יכול להקשות על השגת הריון באופן טבעי. קיימות אפשרויות טיפול, והן נקבעות לפי הסיבה. הבירור והטיפול נעשים אצל אורולוג או אנדרולוג.",
  },
  {
    q: "האם שפיכה אחורית מזיקה לבריאות?",
    a: "המצב עצמו אינו מסוכן. המשמעות המרכזית שלו היא בהקשר של פוריות, ולעיתים בהקשר של שינוי בחוויה המינית.",
  },
];

export default function RetrogradeEjaculationArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            שפיכה אחורית: כשהאורגזמה מגיעה בלי פליטת זרע
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            בשפיכה אחורית (Retrograde Ejaculation&rlm;) נוזל הזרע אינו יוצא דרך השופכה בזמן
            השפיכה, אלא זורם בחלקו או במלואו לאחור אל שלפוחית השתן. הכמות הנפלטת יכולה להיות
            קטנה מאוד, ולעיתים לא נפלט זרע כלל.
            <Ref n={1} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            המצב עצמו אינו מסוכן ואינו כואב, וברוב המקרים יש לו סיבה שניתן לזהות. תחושת האורגזמה
            בדרך כלל נשמרת, מאחר שאורגזמה ופליטת הזרע הן תהליכים קשורים אך אינם זהים, אם כי אצל
            חלק מהגברים התחושה משתנה.
            <Ref n={1} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            חשוב לומר מראש: ירידה בנפח הזרע לבדה אינה מספיקה כדי להסיק שמדובר בשפיכה אחורית. יש
            לכך סיבות נוספות, וההבחנה ביניהן נעשית בבירור רפואי.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>מה קורה בשפיכה אחורית?</h2>
          <p className={pClass}>
            בשפיכה תקינה אזור צוואר שלפוחית השתן נסגר, וכך נוזל הזרע מכוון קדימה דרך השופכה.
            כאשר מנגנון הסגירה הזה אינו פועל כראוי, חלק מנוזל הזרע או כולו זורם אל תוך השלפוחית,
            מתערבב שם בשתן ויוצא בהשתנה הבאה.
            <Ref n={1} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            השפיכה האחורית יכולה להיות מלאה, כלומר כמעט ללא זרע שנפלט קדימה, או חלקית, כאשר
            עדיין נפלטת כמות מסוימת. בשפיכה אחורית חלקית התלונה היא לרוב נפח נמוך ולא היעדר
            פליטה.
            <Ref n={1} />
            <Ref n={6} />
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

          <h2 className={h2Class}>מה גורם לשפיכה אחורית?</h2>
          <ul className={ulClass}>
            <li>
              <span className="font-bold">תרופות, ובעיקר חוסמי אלפא</span> המשמשים לטיפול
              בתסמיני ערמונית. הן עלולות לפגוע בסגירת צוואר השלפוחית, וכאשר השינוי הופיע בסמוך
              לתחילת הטיפול נכון לפנות עם זה לרופא המשפחה או לרופא שרשם את התרופה.
              <Ref n={2} />
            </li>
            <li>
              <span className="font-bold">פגיעה עצבית</span>, למשל על רקע סוכרת, פגיעה בחוט
              השדרה או מחלות נוירולוגיות.
              <Ref n={1} />
              <Ref n={6} />
            </li>
            <li>
              <span className="font-bold">ניתוחים לטיפול בהגדלה שפירה של הערמונית</span>, כגון
              כריתה דרך השופכה (TURP&rlm;) ואנוקלאציה בלייזר הולמיום (HoLEP&rlm;). בניתוחים אלה
              מוסרת רקמת האדנומה מתוך הבלוטה בעוד הקופסית ושלפוחיות הזרע נשארות במקומן, ומה
              שנפגע הוא סגירת צוואר השלפוחית. שינוי בשפיכה הוא התוצאה השכיחה אחריהם.
              <Ref n={4} />
            </li>
            <li>
              <span className="font-bold">ניתוחים אחרים באזור צוואר השלפוחית או האגן</span>.
              <Ref n={1} />
              <Ref n={6} />
            </li>
          </ul>

          <h2 className={h2Class}>לאיזה גורם רפואי עליי לפנות?</h2>
          <p className={pClass}>
            מומלץ תמיד להתחיל בירור אצל רופא המשפחה. במידת הצורך, ימליצו על בדיקות או ייעוץ
            אורולוג (אנדרולוג).
          </p>
          <p className={pClass}>
            הבירור מתחיל בשיחה: מתי השתנה נפח הזרע, האם מדובר בשינוי פתאומי או הדרגתי, אילו
            תרופות נלקחות, ואילו מחלות רקע וניתוחים קדמו לכך.
          </p>
          <p className={pClass}>
            כאשר עולה חשד, נבדק השתן שנאסף לאחר אורגזמה (Post Ejaculatory Urine&rlm;) לצד בדיקת
            זרע. מציאת זרע בכמות משמעותית בשתן, יחד עם נפח זרע נמוך או היעדר זרע ועם הקשר קליני
            מתאים, תומכת באבחנה.
            <Ref n={1} />
            <Ref n={3} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            כאן נדרשת זהירות: כמעט תשעה מכל עשרה גברים פוריים הפרישו זרע בשתן שלאחר שפיכה.
            <Ref n={7} /> לכן הממצא הזה אינו אבחנה בפני עצמו, והוא נשקל תמיד יחד עם נפח הזרע ועם
            התמונה הקלינית. מסיבה דומה, שתן עכור אחרי אורגזמה מתואר בספרות כתחושה שגברים מדווחים
            עליה, אך הוא אינו סימן אמין בפני עצמו. הוא רלוונטי רק אצל מי שכבר חווה אורגזמה עם
            מעט זרע או בלעדיו, ורק בדיקת מעבדה קובעת.
            <Ref n={6} />
          </p>

          <h2 className={h2Class}>שפיכה אחורית או היעדר פליטה מסיבה אחרת?</h2>
          <p className={pClass}>
            לא כל אורגזמה בלי פליטת זרע היא שפיכה אחורית, וההבחנה משנה את המשך הבירור.
          </p>

          <ComparisonTable
            caption="השוואה בין שפיכה אחורית, מצב שלאחר כריתה רדיקלית של הערמונית וחסימת צינורות השפיכה, לפי תחושת האורגזמה והכיווצים הריתמיים, הפליטה הנראית, נוכחות זרע בשתן שלאחר אורגזמה והרקע האופייני."
            characteristics={[
              "תחושת האורגזמה והכיווצים הריתמיים",
              "פליטה נראית",
              "זרע בשתן שלאחר אורגזמה",
              "הרקע האופייני",
            ]}
            items={[
              {
                name: "שפיכה אחורית",
                values: [
                  "בדרך כלל נשמרים",
                  "מועטה או אין",
                  "כן, בכמות משמעותית",
                  "חוסמי אלפא, סוכרת, TURP או HoLEP",
                ],
              },
              {
                name: "אחרי כריתה רדיקלית של הערמונית",
                values: [
                  "בדרך כלל נשמרים",
                  "אין",
                  "לא",
                  "הוסרו הערמונית ושלפוחיות הזרע ונחתכו צינורות הזרע",
                ],
              },
              {
                name: "חסימת צינורות השפיכה",
                values: ["בדרך כלל נשמרים", "מועטה או אין", "לא", "חסימה מבנית"],
              },
            ]}
            note="הטבלה מתארת דפוסים אופייניים ואינה מחליפה בירור רפואי. ההבחנה נקבעת על סמך בדיקת הזרע, בדיקת השתן שלאחר אורגזמה וההקשר הקליני."
          />

          <p className={pClass}>
            השורה הראשונה בטבלה זהה בשלושת המצבים, וזה לא במקרה. בשפיכה אחורית שני שלבי השפיכה
            מתרחשים כרגיל, גם שלב ההעברה וגם שלב הפליטה על הכיווצים הריתמיים שבו, ורק הכיוון
            שאליו זורם הנוזל שגוי. גם במצבים האחרים מנגנון הכיווצים עצמו נשאר, ולכן התחושה
            נשמרת.
            <Ref n={8} />
          </p>
          <p className={pClass}>
            להרחבה על שני השלבים:{" "}
            <Link
              href="/professional-info/orgasm-vs-ejaculation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              אורגזמה ושפיכה: מה ההבדל?
            </Link>
          </p>
          <p className={pClass}>
            בכריתה רדיקלית של הערמונית לא מדובר בשפיכה אחורית כלל. שם מוסרים הערמונית ושלפוחיות
            הזרע, ולכן צפוי היעדר פליטה ולא זרימה לאחור.
            <Ref n={1} />
          </p>

          <h2 id="pelvic-floor-physiotherapy" className={`${h2Class} scroll-mt-24`}>
            האם פיזיותרפיה של רצפת האגן עוזרת בשפיכה אחורית?
          </h2>
          <p className={pClass}>לא, ולא מדובר בפער מחקרי בלבד.</p>
          <p className={pClass}>
            ההנחיות המקצועיות והסקירות העוסקות בטיפול בשפיכה אחורית אינן כוללות פיזיותרפיה של
            רצפת האגן בין אפשרויות הטיפול.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            גם חיפוש ממוקד בספרות אינו מעלה מחקר שבדק את השאלה הזו ישירות.
          </p>
          <p className={pClass}>
            הסיבה נעוצה באנטומיה. צוואר שלפוחית השתן בנוי משריר חלק הנמצא תחת בקרה אוטונומית,
            ואילו שרירי רצפת האגן הם שרירי שלד שניתן להפעיל באופן רצוני. מדובר בשני שרירים
            שונים, ותרגול של רצפת האגן אינו פונה לשריר שקובע את הכיוון שאליו זורם הזרע.
          </p>
          <p className={pClass}>
            פיזיותרפיה כן רלוונטית כאשר קיימת במקביל בעיה אחרת שרצפת האגן מעורבת בה, למשל{" "}
            <Link
              href="/professional-info/chronic-prostatitis-pelvic-pain-syndrome"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב באגן
            </Link>
            , דליפת שתן או{" "}
            <Link
              href="/professional-info/mens-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              קושי בשליטה בשרירי האזור
            </Link>
            . במצבים כאלה הטיפול מכוון לבעיה הנלווית, ולא לשפיכה האחורית עצמה.
          </p>

          <h2 className={h2Class}>מתי לפנות לבירור?</h2>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <ul className="list-disc space-y-2 pr-6 leading-8 text-amber-950">
              <li>שינוי חדש או מתמשך בנפח הזרע או היעדר פליטה</li>
              <li>שינוי שהופיע לאחר התחלת תרופה חדשה</li>
              <li>שינוי שהופיע לאחר ניתוח באזור הערמונית או צוואר השלפוחית</li>
              <li>כאשר מופיעים גם כאב, דם בזרע או תסמינים בשליטה על מתן שתן</li>
            </ul>
          </div>

          <ArticleCta
            heading={null}
            intro="אם לצד השינוי בשפיכה קיימים גם כאב באגן, דליפת שתן או קושי בשליטה בשרירי האזור, אלה כן שייכים להערכה פיזיותרפית, והטיפול מכוון אליהם ולא לשפיכה האחורית עצמה."
            whatsappText="היי רועי, קראתי אצלך הסבר על RE, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Mehta A, Sigman M. Management of the dry ejaculate: a systematic review of aspermia
              and retrograde ejaculation. Fertil Steril. 2015;104(5):1074-1081. doi:
              <a
                href="https://doi.org/10.1016/j.fertnstert.2015.09.024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.fertnstert.2015.09.024
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Schlegel PN, Sigman M, Collura B, et al. Diagnosis and Treatment of Infertility in
              Men: AUA/ASRM Guideline Part II. J Urol. 2021;205(1):44-51. doi:
              <a
                href="https://doi.org/10.1097/JU.0000000000001520"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/JU.0000000000001520
              </a>
              . Updates to Male Infertility: AUA/ASRM Guideline (2024). J Urol.
              2024;212(6):789-799.
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Practice Committee of the American Society for Reproductive Medicine. Diagnostic
              evaluation of sexual dysfunction in the male partner in the setting of infertility:
              a committee opinion. Fertil Steril. 2023;120(5):967-972. doi:
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
            <li id="ref-4" className="scroll-mt-24">
              Roper C, Slade A, Caras R, Shelton T, Rivera M. Ejaculatory and erectile function
              outcomes following holmium laser enucleation of the prostate. Prostate.
              2024;84(9):791-796. doi:
              <a
                href="https://doi.org/10.1002/pros.24697"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/pros.24697
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Veiga Álvarez E, et al. Sperm recovery from urine in men with retrograde
              ejaculation. Adv Lab Med. 2024;5(4):356-365. doi:
              <a
                href="https://doi.org/10.1515/almed-2024-0109"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1515/almed-2024-0109
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Konstantinidis C, Zachariou A, Evgeni E, et al. Recent advances in the diagnosis and
              management of retrograde ejaculation: a narrative review. Diagnostics (Basel).
              2025;15(6):726. doi:
              <a
                href="https://doi.org/10.3390/diagnostics15060726"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.3390/diagnostics15060726
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Mehta A, Jarow JP, Maples P, Sigman M. Defining the &quot;normal&quot;
              post-ejaculate urinalysis. J Androl. 2012;33(5):917-920. doi:
              <a
                href="https://doi.org/10.2164/jandrol.111.015974"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.2164/jandrol.111.015974
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Revenig L, Leung A, Hsiao W. Ejaculatory physiology and pathophysiology: assessment
              and treatment in male infertility. Transl Androl Urol. 2014;3(1):41-49. doi:
              <a
                href="https://doi.org/10.3978/j.issn.2223-4683.2014.02.02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.3978/j.issn.2223-4683.2014.02.02
              </a>
              .
            </li>
          </ol>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            המידע בדף זה נועד להרחבת הידע ואינו מחליף בדיקה רפואית, אבחון אישי או טיפול רפואי.
          </p>

          <AuthorBox />
        </div>
      </Container>
    </article>
  );
}
