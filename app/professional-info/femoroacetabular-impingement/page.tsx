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

const article = getArticle("femoroacetabular-impingement");

export const metadata: Metadata = {
  title: "תסמונת צביטה בירך (FAI Syndrome): תסמינים, אבחון וטיפול פיזיותרפי",
  description:
    "מבנה קאם או פינסר בצילום אינו מספיק לבדו כדי לאבחן תסמונת צביטה בירך, והוא שכיח מאוד גם אצל אנשים ללא כאב. מה מרגישים, כיצד מאבחנים, מה מצאו המחקרים על טיפול שמרני ומתי נשקל ניתוח.",
  alternates: { canonical: "/professional-info/femoroacetabular-impingement" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "תסמונת צביטה בירך | רועי קליין פיזיותרפיה",
    description:
      "ההבדל בין מבנה קאם, פינסר ומשולב, כמה הם שכיחים אצל אנשים ללא כאב, שלושת מרכיבי האבחנה, ומה מצאו המחקרים על פיזיותרפיה מול ארתרוסקופיה.",
    url: "/professional-info/femoroacetabular-impingement",
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
    q: "האם תסמונת צביטה בירך היא אבחנה אמיתית או רק ממצא בצילום?",
    a: "היא אבחנה קלינית מוכרת, אך מבנה קאם או פינסר בפני עצמו אינו מספיק לאבחנה. נדרשת התאמה בין תסמינים, בדיקה קלינית וממצאי הדמיה.",
  },
  {
    q: "מצאו אצלי מבנה קאם בצילום. האם זה אומר שיש בעיה?",
    a: "לא בהכרח. מבנה קאם שכיח מאוד גם אצל אנשים ללא כאב, ובמיוחד אצל ספורטאים.",
  },
  {
    q: "האם פיזיותרפיה יכולה להעלים את מבנה הקאם?",
    a: "לא. פיזיותרפיה אינה משנה את צורת העצם, אלא מסייעת בהפחתת תסמינים, בשיפור התפקוד ובחזרה לפעילות.",
  },
  {
    q: "האם FADIR חיובי אומר שיש לי תסמונת צביטה בירך?",
    a: "לא. זהו מבחן שיכול לתמוך בחשד, אך אינו מאבחן את התסמונת בפני עצמו והוא חלק מבדיקה רחבה יותר.",
  },
  {
    q: "האם קרע בלברום מחייב ניתוח?",
    a: "לא. ממצאים בלברום שכיחים מאוד גם אצל אנשים ללא כאב, ולכן יש לבדוק האם הממצא מתאים לתמונה הקלינית.",
  },
];

export default function FemoroacetabularImpingementArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            תסמונת צביטה בירך: תסמינים, אבחון וטיפול פיזיותרפי
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            תסמונת צביטה בירך (Femoroacetabular Impingement Syndrome &ndash; FAIS)&rlm;, המכונה
            לעיתים גם אימפינג&rsquo;מנט של הירך, היא אחת הסיבות האפשריות לכאב בירך ובמפשעה, בעיקר
            אצל צעירים, אנשים פעילים וספורטאים.
          </p>
          <p className={pClass}>
            בתסמונת הזאת קיימת התאמה בין תסמינים מתאימים, ממצאים בבדיקה הקלינית וממצאי הדמיה
            מתאימים.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className="mt-4 text-xl font-bold leading-9 text-slate-900">
            מבנה קאם או פינסר בהדמיה אינו מספיק בפני עצמו כדי לאבחן תסמונת צביטה בירך.
          </p>

          <h2 className={h2Class}>מה קורה במפרק הירך?</h2>
          <p className={pClass}>
            מפרק הירך בנוי מראש עצם הירך, שצורתו דומה לכדור, ומשקע באגן הנקרא אצטבולום
            (Acetabulum)&rlm;. סביב שפת האצטבולום נמצא לברום הירך, טבעת רקמה התורמת ליציבות המפרק.
          </p>
          <p className={pClass}>בתסמונת צביטה בירך מתוארים בעיקר שלושה מבנים אפשריים:</p>
          <ul className={ulClass}>
            <li>
              <span className="font-bold">מבנה קאם (Cam morphology)&rlm;</span>, בליטה גרמית באזור
              המפגש בין ראש עצם הירך לצוואר עצם הירך
            </li>
            <li>
              <span className="font-bold">מבנה פינסר (Pincer morphology)&rlm;</span>, כיסוי יתר של
              האצטבולום על ראש עצם הירך
            </li>
            <li>
              <span className="font-bold">מבנה משולב</span>, שילוב של קאם ופינסר יחד
            </li>
          </ul>

          <ArticleFigure
            src="/professional-info/fai-hip-morphology.webp"
            alt="איור השוואתי של ארבעה מצבי מפרק ירך: מבנה תקין, מבנה קאם עם בליטה גרמית בצוואר עצם הירך, מבנה פינסר עם כיסוי יתר של האצטבולום, ומבנה משולב"
            caption="מורפולוגיה של מפרק הירך: תקין, מבנה קאם, מבנה פינסר ומבנה משולב."
          />

          <p className={pClass}>
            המבנים האלה יכולים להופיע גם אצל אנשים ללא כאב. לכן יש להבדיל בין מבנה בהדמיה לבין
            תסמונת צביטה בירך.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>מה המשמעות של מבנה קאם או פינסר בצילום?</h2>
          <p className={pClass}>
            ממצאי הדמיה המתאימים ל־Cam או ל־Pincer שכיחים גם אצל אנשים שאין להם תסמינים כלל.
            בסקירה שיטתית שכללה 2,114 ירכיים של אנשים ללא תסמינים נמצא מבנה קאם בכ־37%, ובקרב
            ספורטאים השיעור היה כמעט כפול מזה שבאוכלוסייה הכללית: כ־55% לעומת כ־23%.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            באותה סקירה נמצא מבנה פינסר בכ־67% מהירכיים ללא תסמינים, וקרע בלברום נמצא בכ־68%
            מהירכיים שנבדקו ב־MRI&rlm;.
            <Ref n={3} />{" "}
            לכן MRI או צילום צריכים תמיד להתפרש יחד עם התמונה הקלינית, ולא לבדם.
            <Ref n={2} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            ממצא כזה שהתגלה במקרה, בצילום שנעשה מסיבה אחרת ואצל אדם ללא תסמינים,{" "}
            <span className="font-bold">אינו מחייב בירור נוסף, טיפול או הגבלת פעילות</span>.
            <Ref n={1} />
            <Ref n={2} />{" "}
            במחקר מעקב ארוך טווח נמצא שמבנה פינסר לבדו אינו מנבא התפתחות שחיקה במפרק הירך, והקשר
            הופיע רק כאשר היה גם כאב.
            <Ref n={5} />
          </p>
          <p className="mt-4 font-bold leading-8 text-slate-900">
            כלומר מציאת מבנה קאם או פינסר אינה אומרת בהכרח שהוא מקור הכאב, גם כאשר יש כאב.
          </p>

          <h2 className={h2Class}>אילו תסמינים יכולים להופיע?</h2>
          <p className={pClass}>
            התסמין השכיח ביותר הוא כאב עמוק במפשעה או בירך, בדרך כלל בחלק הקדמי. לעיתים הכאב מוחמר
            בישיבה ממושכת, בכיפוף עמוק, בסקוואט, בסיבוב של הירך או בזמן פעילות ספורטיבית.
            <Ref n={6} />
          </p>
          <p className={pClass}>אצל חלק מהאנשים מופיעים גם:</p>
          <ul className={ulClass}>
            <li>קליקים</li>
            <li>תחושת תפיסה במפרק</li>
            <li>נוקשות</li>
            <li>ירידה בטווח התנועה</li>
            <li>כאב שאינו מורגש רק במפשעה, אלא גם בצד הירך</li>
          </ul>

          <ArticleFigure
            src="/professional-info/fai-symptoms.webp"
            alt="אינפוגרפיקה של שישה תסמינים אפשריים בתסמונת צביטה בירך: כאב במפשעה או בירך, החמרה בישיבה, כאב בכיפוף עמוק, קליקים או תחושת תפיסה, נוקשות או ירידה בטווח, וכאב שאינו תמיד רק במפשעה"
          />

          <h2 className={h2Class}>אצל מי תסמונת צביטה בירך שכיחה יותר?</h2>
          <p className={pClass}>
            התסמונת מאובחנת בעיקר אצל אנשים צעירים ובגיל הביניים, ובמיוחד אצל אנשים פעילים
            וספורטאים. מבנה קאם תואר בשכיחות גבוהה יותר אצל ספורטאים בענפים שבהם מופעל עומס חוזר על
            הירך בתקופת גיל ההתבגרות, כגון כדורגל, הוקי קרח, כדורסל וענפים נוספים הכוללים שינויי
            כיוון ועומסים גבוהים על הירך.
            <Ref n={7} />
          </p>
          <p className={pClass}>
            עם זאת, גם כאן חשוב לזכור: לא כל ספורטאי עם מבנה קאם סובל מתסמונת צביטה בירך.
          </p>

          <h2 className={h2Class}>כיצד מאבחנים תסמונת צביטה בירך?</h2>
          <p className={pClass}>
            אין בדיקה אחת שמאבחנת את התסמונת. לפי הקונצנזוס הבינלאומי, האבחנה מבוססת על שלושה
            מרכיבים שצריכים להתאים זה לזה: תסמינים מתאימים, בדיקה קלינית מתאימה והדמיה מתאימה.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>הבדיקה הקלינית כוללת בין היתר:</p>
          <ul className={ulClass}>
            <li>מיקום ואופי הכאב</li>
            <li>הפעילויות שמחמירות אותו</li>
            <li>טווחי תנועה של הירך</li>
            <li>כוח ושליטה של שרירי הירך, האגן והגו</li>
            <li>מבחנים ספציפיים כמו FADIR&rlm;, כחלק מהבדיקה הכוללת</li>
          </ul>
          <p className={pClass}>
            <Ref n={2} />
            <Ref n={4} />
          </p>

          <ArticleFigure
            src="/professional-info/fai-diagnosis.webp"
            alt="אינפוגרפיקה של שלושת מרכיבי האבחנה בתסמונת צביטה בירך: תסמינים מתאימים, בדיקה קלינית והדמיה מתאימה, עם הדגשה שמבנה קאם או פינסר בצילום בלבד אינו אבחנה"
            caption="האבחנה מבוססת על שילוב של שלושת המרכיבים יחד, ולא על אחד מהם בלבד."
          />

          <h2 className={h2Class}>מה התפקיד של פיזיותרפיה?</h2>
          <p className={pClass}>
            פיזיותרפיה היא אחת מאפשרויות הטיפול המרכזיות בתסמונת צביטה בירך.
            <Ref n={1} />
            <Ref n={8} />{" "}
            המטרה אינה לשנות באמצעות תרגילים את צורת העצם, אלא:
          </p>
          <ul className={ulClass}>
            <li>להפחית תסמינים</li>
            <li>לשפר שליטה ועומסים</li>
            <li>לחזק את שרירי הירך, האגן והגו</li>
            <li>לשפר תפקוד</li>
            <li>לסייע בחזרה לפעילות ולספורט</li>
          </ul>
          <p className={pClass}>
            הטיפול צריך להיות פעיל, הדרגתי ומותאם אישית, ולא פרוטוקול אחיד לכל אדם עם מבנה קאם או
            פינסר בצילום.
            <Ref n={8} />
            <Ref n={9} />
          </p>

          <h2 className={h2Class}>האם פיזיותרפיה יכולה לעזור?</h2>
          <p className={pClass}>כן.</p>
          <p className={pClass}>
            מחקרים אקראיים הראו שאנשים עם תסמונת צביטה בירך יכולים להשתפר בעקבות טיפול פיזיותרפי
            מובנה.
            <Ref n={8} />
            <Ref n={9} />
            <Ref n={10} />
            <Ref n={11} />
          </p>
          <p className={pClass}>
            בחלק מהמחקרים ניתוח ארתרוסקופי השיג בממוצע תוצאות טובות יותר במדדי תפקוד לאחר מספר
            חודשים, אך גם קבוצות הטיפול השמרני השתפרו. לכן ההחלטה על ניתוח אינה צריכה להתבסס רק על
            צילום, אלא על התמונה הקלינית הכוללת.
            <Ref n={10} />
            <Ref n={11} />
          </p>

          <h2 className={h2Class}>כמה זמן נמשך טיפול שמרני?</h2>
          <p className={pClass}>
            במחקר UK FASHIoN תוארה תוכנית טיפול שכללה בדרך כלל 6 עד 10 מפגשים לאורך 12 עד 24
            שבועות, יחד עם תרגול עצמאי והתקדמות הדרגתית.
            <Ref n={8} />
            <Ref n={10} />{" "}
            זה אינו מספר מחייב לכל מטופל, אבל הוא מדגיש שטיפול שמרני בתסמונת צביטה בירך הוא בדרך
            כלל תהליך של מספר חודשים.
          </p>

          <h2 className={h2Class}>מתי נשקל ניתוח?</h2>
          <p className={pClass}>
            ניתוח ארתרוסקופי של מפרק הירך עשוי להישקל כאשר קיימת תסמונת צביטה מאובחנת והתסמינים
            ממשיכים להגביל את האדם למרות טיפול שמרני מתאים.
          </p>
          <p className={pClass}>
            ההחלטה אינה אמורה להתבסס על גודל הקאם, על זווית אלפא בצילום, על מבנה פינסר או על קרע
            בלברום ב־MRI בלבד, אלא על התמונה הקלינית הכוללת ועל התגובה לטיפול שמרני.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={11} />
          </p>

          <h2 className={h2Class}>דגלים אדומים: מתי כאב בירך מצריך בירור רפואי?</h2>
          <p className={pClass}>
            תסמונת צביטה בירך עצמה אינה בדרך כלל מצב חירום, אבל כאב בירך או במפשעה יכול לעיתים
            לנבוע ממצבים אחרים שחלקם דורשים בירור מהיר. יש לפנות להערכה רפואית כאשר מופיעים סימנים
            כגון:
          </p>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <ul className="list-disc space-y-2 pr-6 leading-8 text-amber-950">
              <li>כאב משמעותי לאחר חבלה, במיוחד כאשר קשה או בלתי אפשרי לדרוך על הרגל</li>
              <li>כאב בירך המלווה בחום או בתחושת מחלה כללית</li>
              <li>כאב חזק שמחמיר במהירות ללא הסבר ברור</li>
              <li>
                כאב עמוק שהופיע או החמיר לאחר עלייה חדה בעומסי ריצה או אימונים, במיוחד כאשר קיים
                חשד לשבר מאמץ
              </li>
              <li>צליעה חדשה או כאב משמעותי בירך אצל ילד או מתבגר</li>
              <li>כאב מתמשך המלווה בירידה לא מוסברת במשקל או בתסמינים מערכתיים אחרים</li>
            </ul>
          </div>
          <p className={pClass}>
            לפני שמייחסים כאב לתסמונת צביטה בירך יש לשקול לפי הצורך גורמים אחרים כגון{" "}
            <Link
              href="/professional-info/stress-fractures"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שבר מאמץ
            </Link>
            , זיהום, מחלה של העצם או מצבים אחרים לפי גיל המטופל.
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/groin-pain-athletes"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאבים במפשעה אצל ספורטאים
            </Link>{" "}
            ו־
            <Link
              href="/professional-info/hip-groin-pain-cyclists"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאבים בירך ובמפשעה אצל רוכבי אופניים
            </Link>
            .
          </p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              כאב מתמשך בירך או במפשעה מצדיק בירור מסודר. בהערכה בודקים אילו תנועות ועומסים מעוררים
              את הכאב, מה מצב הכוח והשליטה סביב הירך והאגן, וכיצד לבנות חזרה הדרגתית לפעילות
              ולספורט.
            </p>
            <Link
              href="/#contact"
              className="btn-press mt-4 inline-block rounded-full bg-teal-700 px-6 py-3 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
            >
              לקביעת פגישת אבחון
            </Link>
          </div>

          <ArticleFaq items={faqItems} />

          <h2 id="references" className={`${h2Class} scroll-mt-24`}>
            מקורות
          </h2>
          <ol
            dir="ltr"
            className="mt-4 list-decimal space-y-3 pl-6 text-left text-sm leading-7 text-black"
          >
            <li id="ref-1" className="scroll-mt-24">
              Griffin DR, Dickenson EJ, O&apos;Donnell J, et al. The Warwick Agreement on
              Femoroacetabular Impingement Syndrome (FAI Syndrome): An International Consensus
              Statement. Br J Sports Med. 2016;50(19):1169-1176. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2016-096743"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2016-096743
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Reiman MP, Agricola R, Kemp JL, et al. Consensus Recommendations on the
              Classification, Definition and Diagnostic Criteria of Hip-Related Pain in Young and
              Middle-Aged Active Adults From the International Hip-Related Pain Research Network,
              Zurich 2018. Br J Sports Med. 2020;54(11):631-641. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2019-101453"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2019-101453
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Frank JM, Harris JD, Erickson BJ, et al. Prevalence of Femoroacetabular Impingement
              Imaging Findings in Asymptomatic Volunteers: A Systematic Review. Arthroscopy.
              2015;31(6):1199-1204. doi:
              <a
                href="https://doi.org/10.1016/j.arthro.2014.11.042"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.arthro.2014.11.042
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Wong SE, Cogan CJ, Zhang AL. Physical Examination of the Hip: Assessment of
              Femoroacetabular Impingement, Labral Pathology, and Microinstability. Curr Rev
              Musculoskelet Med. 2022;15(2):38-52. doi:
              <a
                href="https://doi.org/10.1007/s12178-022-09745-8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s12178-022-09745-8
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Riedstra NS, Boel F, van Buuren M, et al. Pincer Morphology Is Not Associated With
              Hip Osteoarthritis Unless Hip Pain Is Present: Follow-Up Data From a Prospective
              Cohort Study. Arthritis Care Res (Hoboken). 2024;76(5):644-651. doi:
              <a
                href="https://doi.org/10.1002/acr.25285"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/acr.25285
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Hamula MJ, Ryan MK, Baron SL, Bloom DA, Youm T. Atypical Hip Pain in Femoroacetabular
              Impingement: A Comparison of Outcomes Based on Primary Hip Pain Location. Am J Sports
              Med. 2020;48(1):167-172. doi:
              <a
                href="https://doi.org/10.1177/0363546519887733"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/0363546519887733
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Nepple JJ, Vigdorchik JM, Clohisy JC. What Is the Association Between Sports
              Participation and the Development of Proximal Femoral Cam Deformity? A Systematic
              Review and Meta-analysis. Am J Sports Med. 2015;43(11):2833-2840. doi:
              <a
                href="https://doi.org/10.1177/0363546514563909"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/0363546514563909
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Ish&oslash;i L, Nielsen MF, Krommes K, et al. Femoroacetabular Impingement Syndrome
              and Labral Injuries: Grading the Evidence on Diagnosis and Non-operative Treatment. Br
              J Sports Med. 2021;55(22):1301-1310. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2021-104060"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2021-104060
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Hoit G, Whelan DB, Dwyer T, Ajrawat P, Chahal J. Physiotherapy as an Initial Treatment
              Option for Femoroacetabular Impingement: A Systematic Review and Meta-analysis of 5
              Randomized Controlled Trials. Am J Sports Med. 2020;48(8):2042-2050. doi:
              <a
                href="https://doi.org/10.1177/0363546519882668"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/0363546519882668
              </a>
              .
            </li>
            <li id="ref-10" className="scroll-mt-24">
              Griffin DR, Dickenson EJ, Wall PDH, et al. Hip Arthroscopy Versus Best Conservative
              Care for the Treatment of Femoroacetabular Impingement Syndrome (UK FASHIoN): A
              Multicentre Randomised Controlled Trial. Lancet. 2018;391(10136):2225-2235. doi:
              <a
                href="https://doi.org/10.1016/S0140-6736(18)31202-9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/S0140-6736(18)31202-9
              </a>
              .
            </li>
            <li id="ref-11" className="scroll-mt-24">
              Palmer AJR, Ayyar Gupta V, Fernquest S, et al. Arthroscopic Hip Surgery Compared With
              Physiotherapy and Activity Modification for the Treatment of Symptomatic
              Femoroacetabular Impingement: Multicentre Randomised Controlled Trial. BMJ.
              2019;364:l185. doi:
              <a
                href="https://doi.org/10.1136/bmj.l185"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bmj.l185
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
