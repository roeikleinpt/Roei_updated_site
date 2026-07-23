import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import ArticleFigure from "../../components/ArticleFigure";
import AuthorBox from "../../components/AuthorBox";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("sports-hernia-athletic-pubalgia");

export const metadata: Metadata = {
  title: "בקע ספורטאים: תסמינים, אבחון וטיפול פיזיותרפי",
  description:
    "בקע ספורטאים אינו בדרך כלל בקע מפשעתי רגיל. מה משמעות Sports Hernia ו־Athletic Pubalgia, כיצד מתבצע האבחון ומה כולל הטיפול?",
  alternates: { canonical: "/professional-info/sports-hernia-athletic-pubalgia" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "בקע ספורטאים (Sports Hernia, Athletic Pubalgia) | רועי קליין פיזיותרפיה",
    description: "מה עומד מאחורי המונח בקע ספורטאים, איך מאבחנים ומה כולל הטיפול השמרני.",
    url: "/professional-info/sports-hernia-athletic-pubalgia",
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
    q: "האם בקע ספורטאים הוא בקע מפשעתי?",
    a: "בדרך כלל לא. בבקע ספורטאים לרוב אין בליטה של רקמה דרך דופן הבטן. עם זאת, בקע מפשעתי רגיל יכול להופיע במקביל ויש לשלול אותו במסגרת הבירור.",
  },
  {
    q: "האם אפשר לטפל ללא ניתוח?",
    a: "כן. ברוב המקרים מתחילים בשיקום שמרני הכולל ניהול עומסים, תרגול פעיל וחזרה הדרגתית לספורט. ניתוח נשקל כאשר טיפול מתאים אינו מוביל לשיפור מספק.",
  },
  {
    q: "האם MRI מאבחן בקע ספורטאים?",
    a: "לא בפני עצמו. MRI יכול לסייע בזיהוי ממצאים ובשלילת גורמים אחרים, אך יש לפרש אותו יחד עם התסמינים והבדיקה הגופנית.",
  },
  {
    q: "האם כאב בשיעול אומר שיש בקע?",
    a: "לא בהכרח. כאב בשיעול יכול להופיע גם בכאב הקשור לתעלה המפשעתית ללא בקע אמיתי. בדיקה רפואית יכולה לסייע להבחין בין המצבים.",
  },
  {
    q: "האם דליפת שתן מוכיחה שהכאב מגיע מרצפת האגן?",
    a: "לא. דליפת שתן היא תסמין חשוב שניתן להעריך, אך היא אינה מוכיחה מה מקור כאב המפשעה. לעיתים נדרש בירור נפרד של כל אחת מהתלונות.",
  },
];

export default function SportsHerniaArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            בקע ספורטאים (Sports Hernia, Athletic Pubalgia): מה עומד מאחורי המונח ואיך מטפלים?
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            בקע ספורטאים הוא שם נפוץ ל
            <Link
              href="/professional-info/groin-pain-athletes"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב באזור המפשעה
            </Link>{" "}
            והבטן התחתונה אצל ספורטאים ואנשים פעילים. למרות השם, ברוב המקרים לא מדובר בבקע
            מפשעתי רגיל שניתן לראות או למשש.
          </p>
          <p className={pClass}>
            בספרות נעשה שימוש גם במונחים כאב אתלטי באזור החיק (Athletic Pubalgia) ופגיעת שרירי
            הליבה (Core Muscle Injury). הבעיה היא שאין למונחים האלה הגדרה אחידה, ולעיתים אותו
            שם משמש לתיאור מצבים שונים.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <ArticleFigure
            src="/professional-info/sports-hernia-athletic-pubalgia.webp"
            alt="אינפוגרפיקה המשווה בין בקע ספורטאים לבקע מפשעתי רגיל ומציגה את תהליך ההערכה, השיקום וסימנים שמצריכים בדיקה רפואית"
          />

          <h2 className={h2Class}>האם בקע ספורטאים הוא בקע אמיתי?</h2>
          <p className={pClass}>
            בקע מפשעתי רגיל (Inguinal Hernia) נוצר כאשר רקמה בולטת דרך נקודת חולשה בדופן הבטן.
            לעיתים ניתן לראות או למשש בליטה, במיוחד בזמן שיעול או מאמץ.
          </p>
          <p className={pClass}>
            לעומת זאת, במצב המכונה בקע ספורטאים בדרך כלל אין בליטה ואין בקע שניתן למשש. הכאב
            מיוחס למבנים באזור החיבור בין שרירי הבטן, עצם החיק, המקרבים והתעלה המפשעתית, אך אין
            מבנה אחד שמעורב באופן אחיד בכל המקרים.
            <Ref n={2} />
            <Ref n={4} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            מסיבה זו במאמר מ־2015 המליצו להשתמש במונחים קליניים ברורים יותר, כגון כאב הקשור
            לתעלה המפשעתית (Inguinal Related Groin Pain), כאב הקשור למקרבים (Adductor Related
            Groin Pain) וכאב הקשור לעצם החיק (Pubic Related Groin Pain).
            <Ref n={1} />
          </p>
          <p className={pClass}>
            המונח בקע ספורטאים עדיין שימושי מפני שהוא מוכר למטופלים ומופיע בהפניות רפואיות
            ובחיפושים באינטרנט, אך חשוב להבין שהוא אינו אבחנה אנטומית.
          </p>

          <h2 className={h2Class}>האם בקע מפשעתי רגיל יכול להופיע במקביל?</h2>
          <p className={pClass}>כן. בקע מפשעתי אמיתי ומקור נוסף לכאב במפשעה יכולים להתקיים באותו אדם.</p>
          <p className={pClass}>
            בסדרת מקרים רטרוספקטיבית ממרכז רפואת ספורט, בקע מפשעתי נמצא אצל 9 מתוך 43 מטופלים
            שאובחנו עם Athletic Pubalgia, ואצל חלק מהמטופלים התסמינים נמשכו גם לאחר תיקון הבקע.
            מדובר במדגם קטן ומסונן ממרכז מומחים, ולכן אין לפרש את הנתון כשכיחות באוכלוסייה, אך
            הוא ממחיש שמציאת בקע אינה תמיד מסבירה את כל הכאב.
            <Ref n={6} />
          </p>

          <h2 className={h2Class}>אילו תסמינים יכולים להתאים?</h2>
          <p className={pClass}>
            הכאב עשוי להתחיל בזמן בעיטה, ספרינט, שינוי כיוון או מאמץ משמעותי. במקרים אחרים הוא
            מתפתח בהדרגה, מופיע באימון, פוחת במנוחה וחוזר כאשר מנסים להעלות שוב את העומס.
          </p>
          <p className={pClass}>
            התסמינים יכולים לכלול כאב במפשעה או בבטן התחתונה, החמרה בזמן האצה או בעיטה, כאב
            בהפעלת שרירי הבטן, החמרה בשיעול או בעיטוש, רגישות סמוך לתעלה המפשעתית או לחיבור שרירי
            הבטן לעצם החיק, והשלכה למקרבי הירך או לפרינאום (Perineum).
            <Ref n={3} />
            <Ref n={4} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>איך מתבצע האבחון?</h2>
          <p className={pClass}>
            אין בדיקה אחת שמאשרת בקע ספורטאים באופן מוחלט. ההערכה מתבססת על סיפור התלונה, מיקום
            הכאב, הפעולות שמחמירות אותו והבדיקה הגופנית. הבדיקה עשויה לכלול מישוש של אזור התלונה
            ושרירים רלוונטיים, הפעלה של שרירי הבטן והמקרבים, בדיקת תגובת הכאב למאמץ בטני והערכת
            מפרק הירך והאגן.
          </p>
          <p className={pClass}>
            חשוב לשלול מצבים אחרים שיכולים להרגיש דומים, כגון בקע מפשעתי אמיתי, כאב הקשור
            למקרבים, בעיה במפרק הירך, כאב הקשור לעצם החיק, פגיעת עצם, מקור עצבי או מצב אורולוגי.
            <Ref n={1} />
            <Ref n={3} />
            <Ref n={7} />
          </p>
          <p className={pClass}>
            אולטרסאונד דינמי (Dynamic Ultrasound) עשוי לסייע בשלילת בקע אמיתי ובהערכת דופן
            התעלה המפשעתית. בדיקת תהודה מגנטית (MRI) יכולה לזהות ממצאים בשרירי הבטן, במקרבים,
            בעצם החיק ובמפרק הירך. עם זאת, אין בדיקת הדמיה יחידה שמוכיחה או שוללת את האבחנה, ויש
            לפרש כל ממצא לפי התסמינים והבדיקה.
            <Ref n={3} />
            <Ref n={5} />
            <Ref n={7} />
          </p>

          <h2 className={h2Class}>מה כולל הטיפול השמרני?</h2>
          <p className={pClass}>
            ברוב המקרים נכון להתחיל בשיקום שמרני מותאם. אין תוכנית אחת שמתאימה לכל אדם שקיבל את
            הכותרת בקע ספורטאים.
          </p>
          <p className={pClass}>
            השיקום עשוי לכלול ניהול עומסים, חיזוק מדורג של שרירי הבטן, הגו והמקרבים, תרגול
            נוירו-מסקולרי והתקדמות לריצה, שינויי כיוון ובעיטות.
          </p>
          <p className={pClass}>
            הטיפול צריך להתבסס על ממצאי ההערכה ולא על ניסיון לחזק באופן כללי את כל אזור
            ה&quot;ליבה&quot;. סקירות מקצועיות מציינות שטיפול מבוסס תרגול יכול לשמש טיפול ראשוני,
            אך איכות המחקר בתחום מוגבלת והאבחנות ותוכניות הטיפול אינן אחידות.
            <Ref n={2} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>איך חוזרים לספורט?</h2>
          <p className={pClass}>
            החזרה לפעילות צריכה להיות הדרגתית ולהתאים לענף הספורט. ניתן להתחיל בתרגילי כוח
            ובריצה מבוקרת, ובהמשך להתקדם להאצות, בלימות, שינויי כיוון, קפיצות ובעיטות.
          </p>
          <p className={pClass}>
            חשוב לבדוק לא רק את הכאב בזמן הפעילות, אלא גם את התגובה בשעות וביום שלאחריה. שיפור
            אמיתי כולל יכולת לעמוד בעומסים חוזרים ולא רק לבצע פעולה אחת בהצלחה.
          </p>
          <p className={pClass}>
            סקירה שיטתית שכללה עשרה מחקרים ו־468 ספורטאים בחנה את משך החזרה לספורט.{" "}
            <span className="font-bold">
              במחקרים על טיפול שמרני, החזרה לפעילות נעה בטווח רחב, בין כתשעה שבועות
              לכשמונה־עשר שבועות וחצי, ושיעורי ההצלחה השתנו מאוד בין המחקרים.
            </span>
            <Ref n={8} /> השונות הגדולה ממחישה שקצב ההחלמה תלוי במטופל, במקור הכאב ובענף, ואינו
            אחיד.
          </p>

          <h2 className={h2Class}>האם רצפת האגן קשורה לבקע ספורטאים?</h2>
          <p className={pClass}>
            במחקרים הישירים על בקע ספורטאים, Athletic Pubalgia ופגיעת שרירי הליבה, לא נבדקה
            פיזיותרפיה ייעודית לרצפת האגן כטיפול מרכזי. תוכניות השיקום מתמקדות בעיקר בשרירי
            הבטן, הגו, הירך והמקרבים. לכן אין כיום בסיס להציג פיזיותרפיה לרצפת האגן כטיפול שגרתי
            בבקע ספורטאים.
          </p>
          <p className={pClass}>
            עם זאת, אדם עם כאב במפשעה עשוי לדווח גם על דליפת שתן, דחיפות, תכיפות, כאב בפרינאום,
            כאב באשכים או בפין, כאב סביב שפיכה או שינויים ביציאות. מחקרים מראים שתסמיני רצפת אגן
            יכולים להופיע גם אצל ספורטאים צעירים וגברים פעילים, אך הם לא הוכיחו שהתסמינים
            נגרמים מבקע ספורטאים.
            <Ref n={9} /> כאשר התסמינים מופיעים יחד, חשוב לציין את כולם במהלך ההערכה. ייתכן
            שמדובר בשני מצבים מקבילים, וייתכן שנדרש בירור רפואי או אורולוגי נוסף.
          </p>
          <p className={pClass}>
            לאחר שלילת גורמים רפואיים רלוונטיים, ואם נמצאים כאב, רגישות, קושי בהרפיה או הפרעה
            בתיאום של רצפת האגן, ניתן לשקול{" "}
            <Link
              href="/professional-info/mens-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              טיפול פיזיותרפי מותאם
            </Link>{" "}
            לתסמינים שנמצאו. ההנחיות לכאב אגני כרוני בגברים מדגישות הערכה רחבה ושלילת מצבים
            רפואיים אחרים לפני ייחוס התסמינים לרצפת האגן.
            <Ref n={10} />
          </p>

          <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              מוזמן ליצור קשר לבירור התאמה להערכה פיזיותרפית.
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
            בקע ספורטאים הוא מונח מוכר, אך הוא אינו מתאר בהכרח בקע אמיתי או אבחנה אחת וברורה.
          </p>
          <p className={pClass}>
            הערכה טובה צריכה להבחין בין כאב הקשור לתעלה המפשעתית, למקרבים, לעצם החיק, למפרק הירך
            ולגורמים נוספים. ברוב המקרים מתחילים בשיקום פעיל ומותאם, ורק כאשר אין התקדמות מספקת
            שוקלים אפשרויות נוספות.
          </p>
          <p className={pClass}>
            כאשר קיימים גם תסמיני שתן, כאב אגני, כאב באשכים, שינויים בתפקוד המיני או תסמינים
            ביציאות, חשוב לציין אותם. הם עשויים לדרוש הערכה נפרדת וטיפול בהתאם לגורם שנמצא.
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
              Weir A, Brukner P, Delahunt E, et al. Doha agreement meeting on terminology and
              definitions in groin pain in athletes. Br J Sports Med. 2015;49(12):768-774. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2015-094869"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2015-094869
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Zuckerbraun BS, Cyr AR, Mauro CS. Groin Pain Syndrome Known as Sports Hernia: A
              Review. JAMA Surg. 2020;155(4):340-348. doi:
              <a
                href="https://doi.org/10.1001/jamasurg.2019.5863"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1001/jamasurg.2019.5863
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Forlizzi JM, Ward BD, Whalen J, et al. Core Muscle Injury: Evaluation and
              Treatment in the Athlete. Am J Sports Med. 2023;51(4):1087-1095. doi:
              <a
                href="https://doi.org/10.1177/03635465211062321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/03635465211062321
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Drager J, Rasio J, Newhouse A. Athletic Pubalgia (Sports Hernia): Presentation and
              Treatment. Arthroscopy. 2020;36(12):2952-2953. doi:
              <a
                href="https://doi.org/10.1016/j.arthro.2020.09.006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.arthro.2020.09.006
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Kopscik M, Delgado GA, Batten SV, et al. Sports Hernias: A Comprehensive Review
              for Clinicians. Cureus. 2023;15(8):e43283. doi:
              <a
                href="https://doi.org/10.7759/cureus.43283"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.7759/cureus.43283
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              de Oliveira AL, Andreoli CV, Ejnisman B, et al. Epidemiological profile of patients
              diagnosed with athletic pubalgia. Rev Bras Ortop. 2016;51(6):692-696. doi:
              <a
                href="https://doi.org/10.1016/j.rboe.2016.10.006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.rboe.2016.10.006
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Maloy W, Merrigan B, Hulsopple CD. Groin Pain and Injuries: Evaluation and
              Management. Am Fam Physician. 2025;111(4):337-343.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/40258222/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                PMID: 40258222
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Serafim TT, de Oliveira ES, Maffulli N, et al. Return to sport after conservative
              versus surgical treatment for pubalgia in athletes: a systematic review. J Orthop
              Surg Res. 2022;17(1):484. doi:
              <a
                href="https://doi.org/10.1186/s13018-022-03376-y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1186/s13018-022-03376-y
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Giagio S, Adami PE, Bermon S, et al. Nearly half of 325 athletes reported pelvic
              floor symptoms: a cross-sectional study at the Lima 2024 World Athletics U20
              Championships. BMJ Open Sport Exerc Med. 2025;11(3):e002564. doi:
              <a
                href="https://doi.org/10.1136/bmjsem-2025-002564"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bmjsem-2025-002564
              </a>
              .
            </li>
            <li id="ref-10" className="scroll-mt-24">
              Lai HH, Pontari MA, Argoff CE, et al. Male Chronic Pelvic Pain: AUA Guideline,
              Parts I and II. J Urol. 2025;214(2):116-137. doi:
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
