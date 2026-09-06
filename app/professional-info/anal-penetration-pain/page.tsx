import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import AuthorBox from "../../components/AuthorBox";
import ArticleCta from "../../components/ArticleCta";
import AnalCanalFigure from "../../components/AnalCanalFigure";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("anal-penetration-pain");

export const metadata: Metadata = {
  title: "כאב בחדירה אנאלית: גורמים, בירור וטיפול פיזיותרפי",
  description:
    "כאב חוזר בחדירה אנאלית אינו הדרך שבה זה אמור להרגיש. מה תפקידם של הסוגרים ושרירי רצפת האגן, אילו גורמים משפיעים על הכאב, מה נבדק בהערכה ומה מקומה של הפיזיותרפיה.",
  alternates: { canonical: "/professional-info/anal-penetration-pain" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "כאב בחדירה אנאלית: גורמים, בירור וטיפול פיזיותרפי | רועי קליין פיזיותרפיה",
    description:
      "מעורבות שרירי רצפת האגן והסוגרים, גורמים שנבדקו בספרות, אבחנה מבדלת מול פיסורה ופרוקטיטיס, ומה כוללת ההערכה הפיזיותרפית.",
    url: "/professional-info/anal-penetration-pain",
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
    q: "האם כאב בחדירה אנאלית הוא דבר נורמלי?",
    a: "תחושת לחץ או אי־נוחות יכולה להופיע, במיוחד בתחילת ההתנסות. כאב משמעותי, או כאב שחוזר על עצמו, אינו הדרך שבה זה אמור להרגיש ומצדיק בירור.",
  },
  {
    q: "האם כאב חוזר אומר שפי הטבעת ”צר מדי“?",
    a: "לא. התחושה שהגוף נסגר יכולה להצביע על קושי בהרפיה או בתיאום של השרירים בזמן החדירה, ולא על מבנה צר. גם גורמים אחרים, כגון פיסורה או דלקת, יכולים לגרום לכאב.",
  },
  {
    q: "האם בדיקה פנימית היא חובה?",
    a: "בדיקה פנימית יכולה לספק מידע נוסף, בעיקר כאשר התלונה היא התנגדות או קושי בהרפיה. הבדיקה נעשית רק לאחר הסבר והסכמתך. לא חייבים לבצע את הבדיקה בטיפול הראשון, וגם אם בהמשך לא תהיה מעוניין, הטיפול מתקיים באזור הנוחות שלך.",
  },
  {
    q: "מתי כאב כזה מצריך בדיקה רפואית ולא פיזיותרפית?",
    a: "כאשר מופיעים דימום חוזר, הפרשות, כיבים, שינוי משמעותי בהרגלי היציאה או כאב חד ומתמשך. אלה מצריכים בירור רפואי, מפני שגורמים כמו פיסורה או דלקת אינם בעיה של שרירים.",
  },
];

export default function AnalPenetrationPainArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            כאב בחדירה אנאלית: גורמים, בירור וטיפול פיזיותרפי
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            חדירה אנאלית לא אמורה להיות מבחן סיבולת. תחושת לחץ או אי־נוחות יכולה להופיע, במיוחד
            בתחילת ההתנסות, אבל כאב משמעותי, או כאב שחוזר על עצמו, אינו הדרך שבה זה אמור
            להרגיש. מחקרים בקרב גברים שמקיימים יחסי מין עם גברים ובקרב נשים הטרוסקסואליות מצאו
            קבוצה ברורה של אנשים שחווים כאב חוזר או משמעותי בחדירה אנאלית, מצב המכונה
            Anodyspareunia&rlm;.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            כאשר הכאב חוזר על עצמו, אחת האפשרויות שכדאי לשקול היא מעורבות של שרירי רצפת האגן
            והסוגרים סביב פי הטבעת. עם זאת, כאב באזור יכול להגיע גם מהרקמה עצמה, מפיסורה,
            מדלקת או מסיבות אחרות, ולכן לא כל כאב הוא בהכרח בעיה של רצפת האגן.
            <Ref n={1} />
            <Ref n={5} />
            <Ref n={6} />
          </p>

          <h2 className={h2Class}>מה קורה לשרירים בזמן חדירה?</h2>
          <p className={pClass}>
            התעלה האנאלית מוקפת בסוגר פנימי ובסוגר חיצוני ומשולבת במערכת שרירי רצפת האגן. הסוגר
            הפנימי מורכב משריר חלק ונמצא בעיקר תחת בקרה אוטונומית, בעוד שהסוגר החיצוני הוא שריר
            שלד וניתן להשפיע עליו באופן רצוני.
            <Ref n={1} />
          </p>

          <AnalCanalFigure
            src="/professional-info/anal-canal-anatomy.webp"
            alt="חתך קורונלי של התעלה האנאלית, עם הסוגר הפנימי, הסוגר החיצוני ושרירי רצפת האגן מודגשים בצבע, ולצדם סרגל עומק בסנטימטרים"
            caption='חתך קורונלי של התעלה האנאלית. העומק נמדד מפי הטבעת כלפי פנים, והקו המקווקו העליון הוא קו הפקטינט, בגובה של כשני סנטימטרים.'
            credit={
              <>
                איור: Congedo A ואחרים, Tomography 2023;9(5):1694-1710, איור 2A. רישיון{" "}
                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-600"
                >
                  CC BY 4.0
                </a>
                . התוויות באנגלית הוסרו, ונוספו סימון השרירים וסרגל העומק.
              </>
            }
          />
          <p className={pClass}>
            מערכת זו אינה טבעת קשיחה. היא משנה את הפעילות שלה בתגובה למילוי, לחץ ומתיחה.
            במחקר פיזיולוגי בנבדקים בריאים, מתיחה איטית של התעלה האנאלית יצרה תחילה התנגדות
            ולאחר מכן הרפיה, בעוד שבמתיחה מהירה יותר לא נצפתה אותה הרפיה.
            <Ref n={7} />
          </p>
          <p className={pClass}>
            המחקר הזה בוצע באמצעות בלון מעבדתי ולא במהלך פעילות מינית, ולכן אי אפשר לתרגם אותו
            ישירות לטכניקת חדירה. הוא כן מדגים עיקרון חשוב: תגובת הסוגר תלויה לא רק במידת
            המתיחה אלא גם באופן שבו היא מתרחשת.
            <Ref n={7} />
          </p>

          <h2 className={h2Class}>למה לפעמים מרגישים שהגוף נסגר?</h2>
          <p className={pClass}>
            כאב ודריכות יכולים להיות מלווים בעלייה בפעילות השרירים ובקושי להרפות אותם. בספרות
            המקצועית על כאב בחדירה, חוסר יכולת להרפות, חרדה הקשורה לביצוע ואי־נוחות רגשית נקשרו
            לכאב, אם כי רוב המחקרים הם תצפיתיים ולכן אינם מוכיחים סיבתיות.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            במחקר בקרב נשים צעירות שקיימו חדירה אנאלית, חוסר יכולת להרפות היה ההסבר העצמי השכיח
            ביותר לכאב.
            <Ref n={2} /> במחקר גדול יותר בקרב גברים הומואים וביסקסואלים נמצא קשר בין חרדת ביצוע
            לבין עוצמת הכאב.
            <Ref n={4} />
          </p>
          <p className={pClass}>
            לכן התחושה שהגוף נסגר אינה אומרת שפי הטבעת &rdquo;צר מדי&ldquo;. אצל חלק מהאנשים ייתכן
            שקיים קושי בהרפיה או בתיאום של השרירים בזמן החדירה.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>אילו גורמים משפיעים על הכאב?</h2>
          <p className={pClass}>
            במחקרים על כאב במהלך חדירה אנאלית נמצאו קשרים למספר גורמים שיכולים להשפיע על
            החוויה: קוטר, סיכוך לא מספק, תדירות, מתח וקושי בהרפיה.
            <Ref n={1} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            עומק ומהירות התנועה מוכרים בקליניקה כגורמים שמשנים את התחושה, אבל הם לא נבדקו
            ישירות במחקרים האלה. חשוב להדגיש: מדובר בעיקר במחקרי שאלונים ובמחקר פיזיולוגי
            עקיף. אין כיום מחקר שמאפשר לומר שמהירות מסוימת, עומק מסוים או קוטר מסוים הם
            בטוחים או לא בטוחים.
          </p>
          <p className={pClass}>
            בפועל, כאב שמתגבר כאשר ממשיכים הוא סיבה טובה לעצור, לא להוסיף כוח מתוך ניסיון לגרום
            לגוף &rdquo;להתרגל&ldquo;.
          </p>
          <p className={pClass}>
            נושא נפרד שנבדק באותה אוכלוסייה הוא שליטה על יציאות. בסקר מקוון בקרב 21,762 גברים
            שמקיימים יחסי מין עם גברים, 8% דיווחו על דליפה לא רצונית של צואה בחודש שקדם לסקר.
            השיעור עלה עם תדירות היחסים, מ-5.7% בקרב מי שלא קיימו יחסים אנאליים ל-12.7% בקרב מי
            שקיימו לפחות פעם בשבוע, וגורמים נוספים שנקשרו לכך היו כימסקס ופיסטינג.
            <Ref n={10} />
          </p>
          <p className={pClass}>
            מדובר בסקר חד־פעמי, במדגם נוחות ולא במדגם אקראי, ובדיווח עצמי על חודש אחד בלבד. הוא
            מראה קשר ולא סיבתיות.
            <Ref n={10} />
          </p>

          <h2 className={h2Class}>מתי רצפת האגן יכולה להיות חלק מהתמונה?</h2>
          <ul className={ulClass}>
            <li>תחושה שהשרירים נסגרים בזמן ניסיון לחדירה</li>
            <li>קושי להרפות גם כאשר ההתקדמות איטית ויש מספיק חומר סיכה</li>
            <li>כאב שחוזר במרבית ניסיונות החדירה</li>
            <li>מתח או כאב באזור פי הטבעת, הפרינאום או האגן גם בהקשרים נוספים</li>
            <li>דריכות משמעותית לקראת החדירה</li>
            <li>קושי לשלוט בכיווץ ובהרפיה של האזור</li>
          </ul>
          <p className={pClass}>
            פעילות יתר של רצפת האגן מתוארת כאחד הגורמים האפשריים לכאב בחדירה, אך הספרות
            הספציפית בנושא עדיין מצומצמת.
            <Ref n={1} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>אבל לא כל כאב מגיע מהשרירים</h2>
          <p className={pClass}>
            פיסורה אנאלית היא קרע ברירית התעלה האנאלית ויכולה לגרום לכאב חד ולעיתים לדימום.
            הנחיות ה־American Society of Colon and Rectal Surgeons&rlm; מתארות כאב אנאלי ודימום
            אדום בהיר כתסמינים אופייניים של פיסורה.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            כאב יכול להופיע גם בעקבות גירוי או טראומה לרירית. בנוסף, proctitis&rlm; יכול לגרום
            לכאב אנורקטלי, תחושת צורך ביציאה, הפרשה או דימום, וחלק מהמקרים קשורים לזיהומים
            המועברים במגע מיני.
            <Ref n={8} />
          </p>
          <p className={pClass}>
            לכן כאב שמלווה בדימום חוזר, הפרשות, כיבים, שינוי משמעותי בהרגלי היציאה או תסמינים
            אחרים אינו משהו שכדאי להניח שהוא רק שריר מכווץ.
            <Ref n={6} />
            <Ref n={8} />
          </p>

          <h2 className={h2Class}>מה בודקים בפיזיותרפיה של רצפת האגן?</h2>
          <p className={pClass}>
            ההערכה מתחילה בשיחה: איפה הכאב מופיע, מתי הוא מתחיל, האם הוא נמצא בכניסה או עמוק
            יותר, האם הוא חולף מיד או נשאר לאחר מכן, ומה מקל או מחמיר אותו.
          </p>
          <p className={pClass}>
            בהתאם למקרה אפשר להעריך את היכולת לכווץ ולהרפות את רצפת האגן, את התיאום עם הנשימה
            ואת הרגישות של הרקמות והשרירים.
            <Ref n={1} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            בדיקה פנימית יכולה לספק מידע נוסף, בעיקר כאשר התלונה היא התנגדות או קושי בהרפיה.
            הבדיקה נעשית רק לאחר הסבר והסכמתך. לא חייבים לבצע את הבדיקה בטיפול הראשון, וגם אם
            בהמשך לא תהיה מעוניין, הטיפול מתקיים באזור הנוחות שלך.
          </p>

          <h2 className={h2Class}>איך פיזיותרפיה יכולה לעזור?</h2>
          <p className={pClass}>
            סקירה שפורסמה ב־2024 מתארת מספר כלים המשמשים בפיזיותרפיה של רצפת האגן במקרים של
            כאב בחדירה אנאלית, בהם הדרכה, עבודה על פעילות שרירי רצפת האגן, biofeedback&rlm;,
            טיפול מנואלי ומאמנים טיפוליים.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            עם זאת, חשוב לשים את איכות הראיות בפרופורציה: המחברים מציינים שלא נמצאו מחקרים
            אקראיים מבוקרים שבדקו פיזיותרפיה באופן ספציפי לכאב בחדירה אנאלית. חלק מהגישה
            הטיפולית מבוסס על פיזיולוגיה של רצפת האגן ועל ידע שנצבר מטיפול בכאבי חדירה אחרים.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            לכן הטיפול אינו פרוטוקול לחדירה אנאלית. הוא מותאם למה שנמצא בבדיקה ויכול לכלול
            עבודה על הרפיה, קואורדינציה, נשימה, רגישות וחשיפה הדרגתית כאשר היא מתאימה.
          </p>
          <p className={pClass}>
            להרחבה:{" "}
            <Link
              href="/professional-info/anal-trainers-pelvic-floor"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שימוש במאמנים טיפוליים אנאליים בפיזיותרפיה של רצפת האגן
            </Link>
          </p>

          <h2 className={h2Class}>אין צורך להתקדם דרך כאב</h2>
          <p className={pClass}>
            אין יעד של עומק או גודל שצריך להגיע אליו. אם חדירה כואבת באופן עקבי, אם התחושה היא
            שהגוף ננעל או אם נשאר כאב משמעותי לאחר מכן, יש מקום להבין מה גורם לכך במקום להמשיך
            לנסות בכוח.
          </p>

          <h2 className={h2Class}>מתי צריך בירור רפואי דחוף יותר?</h2>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              כאב חריג בעוצמתו, דימום משמעותי, כאב בטן חזק, חולשה משמעותית או חשד לפציעה עמוקה
              דורשים הערכה רפואית.
              <Ref n={9} />
            </p>
          </div>
          <p className={pClass}>
            להרחבה:{" "}
            <Link
              href="/professional-info/mens-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              טיפול רצפת אגן לגבר: למי מתאים ומה הוא כולל
            </Link>
          </p>

          <ArticleCta
            intro="אם הכאב חוזר על עצמו גם כאשר ההתקדמות איטית ויש מספיק חומר סיכה, ניתן לבדוק בהערכה האם קיים מרכיב שרירי שניתן לעבוד עליו."
            whatsappText="היי רועי, קראתי אצלך הסבר על APP, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Chen AB, Kalichman L. Pelvic floor disorders due to anal sexual activity in men and
              women: a narrative review. Arch Sex Behav. 2024;53(10):4089-4098. doi:
              <a
                href="https://doi.org/10.1007/s10508-024-02995-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s10508-024-02995-2
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Štulhofer A, Ajduković D. Should we take anodyspareunia seriously? A descriptive
              analysis of pain during receptive anal intercourse in young heterosexual women. J
              Sex Marital Ther. 2011;37(5):346-358. doi:
              <a
                href="https://doi.org/10.1080/0092623X.2011.607039"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1080/0092623X.2011.607039
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Damon W, Rosser BRS. Anodyspareunia in men who have sex with men: prevalence,
              predictors, consequences and the development of DSM diagnostic criteria. J Sex
              Marital Ther. 2005;31(2):129-141. doi:
              <a
                href="https://doi.org/10.1080/00926230590477989"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1080/00926230590477989
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Grabski B, Kasparek K. Sexual anal pain in gay and bisexual men: in search of
              explanatory factors. J Sex Med. 2020;17(4):716-730. doi:
              <a
                href="https://doi.org/10.1016/j.jsxm.2020.01.020"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jsxm.2020.01.020
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Dickstein DR, Edwards CR, Rowan CR, et al. Pleasurable and problematic receptive
              anal intercourse and diseases of the colon, rectum and anus. Nat Rev Gastroenterol
              Hepatol. 2024;21(6):377-405. doi:
              <a
                href="https://doi.org/10.1038/s41575-024-00932-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41575-024-00932-1
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Davids JS, Hawkins AT, Bhama AR, et al. The American Society of Colon and Rectal
              Surgeons clinical practice guidelines for the management of anal fissures. Dis Colon
              Rectum. 2023;66(2):190-199. doi:
              <a
                href="https://doi.org/10.1097/DCR.0000000000002664"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/DCR.0000000000002664
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Bouchoucha M, Faye A, Arsac M, Rocaries F. Anal sphincter response to distension.
              Int J Colorectal Dis. 2001;16(2):119-125. doi:
              <a
                href="https://doi.org/10.1007/s003840000284"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s003840000284
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Workowski KA, Bachmann LH, Chan PA, et al. Sexually transmitted infections treatment
              guidelines, 2021. MMWR Recomm Rep. 2021;70(4):1-187.
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Tarasconi A, Perrone G, Davies J, et al. Anorectal emergencies: WSES-AAST guidelines.
              World J Emerg Surg. 2021;16(1):48. doi:
              <a
                href="https://doi.org/10.1186/s13017-021-00384-x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1186/s13017-021-00384-x
              </a>
              .
            </li>
            <li id="ref-10" className="scroll-mt-24">
              Garros A, Bourrely M, Sagaon-Teyssier L, et al. Risk of fecal incontinence following
              receptive anal intercourse: survey of 21,762 men who have sex with men. J Sex Med.
              2021;18(11):1880-1890. doi:
              <a
                href="https://doi.org/10.1016/j.jsxm.2021.07.014"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jsxm.2021.07.014
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
