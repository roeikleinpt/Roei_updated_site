import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import PerinealMuscleFigure, { MuscleDetails } from "../../components/PerinealMuscleFigure";
import AuthorBox from "../../components/AuthorBox";
import ArticleCta from "../../components/ArticleCta";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("pelvic-floor-and-ejaculation");

const CREDIT = "Image used with permission from Pelvic Guru®, LLC as a Pelvic Global Member";

export const metadata: Metadata = {
  title: "רצפת האגן והשפיכה: מה תפקיד השרירים?",
  description:
    "שרירי רצפת האגן משתתפים בשלב הפליטה של השפיכה, אך הדגש אינו רק על כוח. מה עושים ה־Bulbospongiosus וה־Ischiocavernosus, מדוע הרפיה ותיאום חשובים לא פחות מכוח, וכיצד מעריכים את התפקוד בפועל.",
  alternates: { canonical: "/professional-info/pelvic-floor-and-ejaculation" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "רצפת האגן והשפיכה: מה תפקיד השרירים? | רועי קליין פיזיותרפיה",
    description:
      "שני שלבי השפיכה, Emission ו־Expulsion, מה עושים השרירים השטחיים בכל אחד מהם, ומדוע היכולת להרפות ולתזמן חשובה לא פחות מהכוח.",
    url: "/professional-info/pelvic-floor-and-ejaculation",
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
    q: "האם רצפת אגן חזקה יותר משפרת בהכרח את השפיכה?",
    a: "לא. תפקוד תקין של רצפת האגן תלוי לא רק בכוח, אלא גם ביכולת להרפות, בתזמון ובתיאום בין כיווץ להרפיה. אצל חלק מהאנשים דווקא פעילות יתר או קושי בהרפיה יכולים להיות חלק מהבעיה.",
  },
  {
    q: "האם כדאי לעשות תרגילי קגל כדי לשפר את השפיכה?",
    a: "לא באופן אוטומטי. תרגילי קגל הם תרגילי חיזוק, והם מתאימים כאשר נמצא צורך בחיזוק. אם הבעיה היא פעילות יתר או קושי בהרפיית רצפת האגן, חיזוק נוסף אינו בהכרח מתאים, והטיפול עשוי להתמקד דווקא בהרפיה ובתיאום.",
  },
  {
    q: "איך אפשר לבדוק אם רצפת האגן מתכווצת ומרפה בצורה תקינה?",
    a: "הערכה פיזיותרפית יכולה לכלול הסתכלות על דפוס הכיווץ וההרפיה, טונוס במנוחה, רגישות ותיאום. ניתן להשתמש גם באולטרסאונד כביופידבק כדי להמחיש את תנועת רצפת האגן במהלך התרגול. בדיקה פנימית אינה חובה; היא נשקלת לפי צורך, לאחר הסבר ובהסכמה.",
  },
];

export default function PelvicFloorAndEjaculationArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            רצפת האגן והשפיכה: מה תפקיד השרירים?
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            רצפת האגן בגברים משתתפת בשליטה במתן שתן וביציאות, בתמיכה באיברי האגן וגם בתפקוד המיני.
            בזמן השפיכה היא חלק מהמערכת העצבית־שרירית שמייצרת את שלב הפליטה הריתמי של נוזל הזרע.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            הדגש הוא לא רק על כוח. תפקוד תקין של רצפת האגן דורש יכולת לכווץ, להרפות ולתזמן את
            הפעולה כחלק מרפלקס השפיכה.
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>השפיכה מתרחשת בשני שלבים</h2>

          <h3 className={h3Class}>Emission&rlm;, העברת נוזל הזרע לשופכה</h3>
          <p className={pClass}>
            בשלב הראשון נוזלים מצינור הזרע, שלפוחיות הזרע והערמונית מועברים אל החלק הקרוב של
            השופכה. שלב זה נשלט בעיקר על ידי המערכת הסימפתטית, ובמקביל נסגר צוואר שלפוחית השתן.
            <Ref n={1} />
          </p>

          <h3 className={h3Class}>Expulsion&rlm;, פליטת נוזל הזרע</h3>
          <p className={pClass}>
            בשלב השני מתרחשים כיווצים ריתמיים של שרירי רצפת האגן. בין השרירים המשמעותיים בתהליך
            נמצאים ה־Bulbospongiosus&rlm; וה־Ischiocavernosus&rlm;. הפעילות מתואמת דרך מסלולים
            עצביים הכוללים את עצב הפודנדל ואת מקטעי S2–S4&rlm; בחוט השדרה.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>מה עושים השרירים?</h2>
          <p className={pClass}>
            הקישו על שריר באיור או על אחת התיבות שמתחתיו כדי לקרוא מה ידוע על תפקידו בשפיכה.
          </p>

          <PerinealMuscleFigure
            src="/professional-info/superficial-perineal-muscles.webp"
            alt="איור של רצפת האגן הגברית מלמטה, ובו השרירים השטחיים חשופים בצד אחד ומכוסים בפאסיה בצד השני, עם הדגשה של שריר ה־Ischiocavernosus הצדדי ושל שריר ה־Bulbospongiosus המדיאלי"
            caption="השרירים השטחיים של רצפת האגן הגברית. הצד השמאלי באיור מראה את השרירים עצמם, ובצד הימני הם מכוסים בפאסיה."
            credit={CREDIT}
            leads={{
              ischiocavernosus:
                "עוטף את שורשי הפין. פועל כחלק מהדפוס השרירי שמתרחש סביב האורגזמה והשפיכה.",
              bulbospongiosus:
                "עוטף את הבולבוס ואת הגוף הספוגי. השריר המרכזי בשלב הפליטה של נוזל הזרע.",
            }}
          >
            <MuscleDetails
              id="ischiocavernosus"
              n={1}
              name="Ischiocavernosus"
              lead="משתתף בתפקוד הזקפתי ופועל כחלק מהדפוס השרירי המתרחש סביב האורגזמה והשפיכה."
            >
              <p className="leading-8 text-black">
                שריר ה־Ischiocavernosus&rlm; עוטף את שורשי הפין. תפקידו המרכזי קשור לשלב הקשיחות של
                הזקפה, אך הוא פועל גם כחלק מהדפוס השרירי המתרחש סביב האורגזמה והשפיכה.
                <Ref n={1} />
                <Ref n={2} />
              </p>
              <p className="mt-4 leading-8 text-black">
                לכן כאשר בודקים את רצפת האגן בהקשר של שפיכה, לא מסתכלים על שריר בודד אלא על הדפוס
                כולו: כיצד השרירים מתגייסים, האם הם מצליחים להרפות ובאיזה תזמון.
                <Ref n={3} />
              </p>
            </MuscleDetails>

            <MuscleDetails
              id="bulbospongiosus"
              n={2}
              name="Bulbospongiosus"
              lead="משתתף ביצירת לחץ סביב בסיס הפין והשופכה, ומסייע בפליטת נוזל הזרע."
            >
              <p className="leading-8 text-black">
                שריר ה־Bulbospongiosus&rlm; נמצא סביב הבולבוס של הפין והחלק הפרוקסימלי של הגוף
                הספוגי. בשלב הפליטה הוא מתכווץ בקצב חוזר ומפעיל לחץ סביב השופכה, וכך מסייע להוצאת
                נוזל הזרע.
                <Ref n={1} />
              </p>
              <p className="mt-4 leading-8 text-black">
                זהו השריר שהקשר שלו לשלב הפליטה הוא הישיר ביותר. עם זאת, פעילותו אינה פעולה רצונית
                פשוטה, אלא חלק מרפלקס מתואם.
                <Ref n={1} />
                <Ref n={2} />
              </p>
            </MuscleDetails>
          </PerinealMuscleFigure>

          <p className={pClass}>
            הכיווצים אינם פעולה רצונית פשוטה כמו לכווץ רצפת אגן. הם חלק מרפלקס מורכב המתואם עם
            פעילות אוטונומית, תחושתית וסומטית.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>למה הרפיה חשובה לא פחות מכיווץ?</h2>
          <p className={pClass}>
            שריר שמתפקד היטב צריך לדעת גם לחזור למצב מנוחה. לכן בהערכת רצפת האגן מתייחסים לטונוס
            במנוחה, ליכולת לבצע כיווץ, ליכולת להרפות לאחריו ולתיאום בין השלבים.
            <Ref n={3} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            במחקר על גברים עם CP/CPPS&rlm; נמצאה אצל חלק מהמשתתפים יכולת מופחתת לחזור להרפיה לאחר
            כיווץ רצוני של רצפת האגן, והקושי היה בולט במיוחד אצל גברים שדיווחו על כאב הקשור לשפיכה.
            <Ref n={4} />{" "}
            הממצא אינו אומר שכל הפרעת שפיכה נגרמת מרצפת האגן, אך הוא מדגים מדוע בדיקה של הרפיה
            ותיאום יכולה להיות רלוונטית.
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
          <p className={pClass}>
            להרחבה:{" "}
            <Link
              href="/professional-info/painful-ejaculation-dysejaculation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב בזמן או אחרי שפיכה
            </Link>
          </p>

          <h2 className={h2Class}>ומה לגבי שפיכה מוקדמת?</h2>
          <p className={pClass}>
            יש עדות לכך שאימון של רצפת האגן עשוי לסייע לחלק מהגברים עם שפיכה מוקדמת. הנושא נדון
            במלואו, כולל הגדרה, אבחון, ראיות וטיפול, במאמר הייעודי.
          </p>
          <p className={pClass}>
            להרחבה:{" "}
            <Link
              href="/professional-info/premature-ejaculation-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שפיכה מוקדמת ופיזיותרפיה של רצפת האגן
            </Link>
          </p>

          <h2 className={h2Class}>איך מעריכים את רצפת האגן?</h2>
          <ul className={ulClass}>
            <li>פעילות ומתח השרירים במנוחה</li>
            <li>יכולת לבצע כיווץ רצוני נכון</li>
            <li>יכולת להרפות לאחר כיווץ</li>
            <li>תיאום בין כיווץ להרפיה</li>
            <li>רגישות או כאב באזור רצפת האגן</li>
            <li>הקשר בין פעולת השרירים לבין כאב, שתן, יציאות ותפקוד מיני</li>
          </ul>
          <p className={pClass}>
            בקליניקה ניתן להשתמש גם באולטרסאונד (US)&rlm; ככלי להדגמת תנועה וכביופידבק במהלך
            תרגול. בדיקה פנימית אינה חובה; היא נשקלת לפי צורך, לאחר הסבר ובהסכמה.
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>האם הטיפול תמיד כולל חיזוק?</h2>
          <p className={pClass}>
            לא. אם נמצא קושי ביצירת כוח, התרגול יכול לכלול חיזוק. כאשר הבעיה היא פעילות יתר, רגישות
            או קושי בהרפיה, ההתערבות יכולה להתמקד דווקא בזיהוי פעילות השרירים, הורדת מתח, שיפור
            הרפיה ותיאום, ולעיתים בטיפול מנואלי לפי הממצאים.
            <Ref n={3} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            המטרה היא להתאים את הטיפול למה שנמצא בבדיקה, ולא לתת את אותו תרגול לכל מטופל.
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

          <h2 className={h2Class}>מתי חשוב לפנות לבירור רפואי?</h2>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              לא כל שינוי בשפיכה מקורו ברצפת האגן. תרופות, סוכרת, פגיעה עצבית, ניתוחים באזור האגן
              או הערמונית ושינויים בשלב ההעברה יכולים לגרום לשינוי בנפח הזרע, בכיוון הפליטה או בכוח
              השפיכה. כאשר מופיע שינוי חדש או משמעותי, יש לשקול גם בירור רפואי מתאים.
              <Ref n={1} />
              <Ref n={6} />
            </p>
          </div>
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

          <ArticleCta
            intro="אם התסמין מפריע בחיי היומיום או בתפקוד המיני, ניתן לקבוע פגישת אבחון ולהתאים את הבירור והטיפול לממצאים."
            whatsappText="היי רועי, קראתי אצלך הסבר על רצפת אגן ושפיכה, ואשמח לבדוק אם הטיפול מתאים לי."
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
            <li id="ref-3" className="scroll-mt-24">
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
            <li id="ref-4" className="scroll-mt-24">
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
            <li id="ref-5" className="scroll-mt-24">
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
            <li id="ref-6" className="scroll-mt-24">
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
