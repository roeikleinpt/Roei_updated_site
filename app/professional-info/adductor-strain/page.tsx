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

const article = getArticle("adductor-strain");

export const metadata: Metadata = {
  title: "מתיחה או קרע בשרירי המקרבים: אבחון, שיקום וחזרה לספורט",
  description:
    "כאב חד במפשעה אחרי בעיטה, ספרינט או שינוי כיוון עשוי להעיד על פציעת מקרבים. מה מרגישים, כיצד מאבחנים, מה כולל השיקום הפיזיותרפי ומתי אפשר לחזור לספורט — ברוב המקרים בלי ניתוח.",
  alternates: { canonical: "/professional-info/adductor-strain" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "מתיחה או קרע בשרירי המקרבים בירך | רועי קליין פיזיותרפיה",
    description:
      "פציעת מקרבים אקוטית — מנגנון, תסמינים, דרגות חומרה, אבחון, שיקום פיזיותרפי מבוסס העמסה וחזרה מדורגת לספורט.",
    url: "/professional-info/adductor-strain",
  },
};

const pClass = "mt-4 leading-8 text-black";
const h2Class = "mt-7 text-2xl font-bold text-slate-900";
const h3Class = "mt-6 text-xl font-bold text-slate-900";
const ulClass = "mt-3 list-disc space-y-2 pr-6 leading-8 text-black";

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
    q: "האם צריך לנוח עד שהכאב נעלם לחלוטין?",
    a: "בדרך כלל אין צורך להימנע מכל פעילות. יש להפחית זמנית פעולות שמעמיסות על האזור, אך במקביל לשמור על תנועה ולהתחיל העמסה מתאימה. מנוחה ממושכת ללא שיקום אינה מכינה את השריר לחזרה לספורט.",
  },
  {
    q: "האם פיזיותרפיה הוכחה כטיפול יעיל בפציעה במקרבים?",
    a: "פיזיותרפיה היא הטיפול המרכזי ברוב המתיחות והקרעים האקוטיים של שרירי המקרבים. היא מתבססת על הפעלה מוקדמת בהתאם ליכולת, חיזוק הדרגתי, ניהול עומסים והחזרה מסודרת לריצה ולדרישות הספורט. חשוב לדייק ברמת הראיות: אין כיום מספר גדול של מחקרים אקראיים המשווים פיזיותרפיה לטיפולים אחרים בפציעה אקוטית של המקרבים. עם זאת, הידע הקליני הקיים, סקירות מקצועיות ומחקרים פרוספקטיביים תומכים בשיקום מבוסס תרגול וקריטריונים תפקודיים.",
  },
  {
    q: "האם אפשר להמשיך להתאמן למרות הכאב?",
    a: "לעיתים ניתן להמשיך בפעילות חלופית שאינה מחמירה את הכאב, ומומלץ להתייעץ עם הפיזיותרפיסט/ית. יש להתאים את הפעילות כך שהעומס יהיה נסבל ולא יגרום להחמרה ברורה בזמן האימון או לאחריו.",
  },
  {
    q: "כמה זמן נמשכת ההחלמה?",
    a: "בפציעות קלות החזרה עשויה להתרחש בתוך מספר שבועות. בקרעים משמעותיים יותר התהליך עשוי להימשך כמה חודשים. הזמן תלוי במיקום הפציעה, בהיקפה, בדרישות הספורט ובהתקדמות הכוח והתפקוד. לכן נכון יותר להסתמך על מדדים תפקודיים מאשר על לוח זמנים קבוע.",
  },
];

export default function AdductorStrainArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            מתיחה או קרע בשרירי המקרבים בירך
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאב חד במפשעה לאחר בעיטה, שינוי כיוון, החלקה או תנועה מתפרצת עשוי להעיד על פציעה
            בשרירי המקרבים. הפציעה יכולה לנוע ממתיחה קלה ועד לקרע מלא, אך חומרתה אינה נקבעת רק
            לפי עוצמת הכאב ברגע שבו התרחשה.
          </p>
          <p className={pClass}>
            אבחון נכון ופיזיותרפיה המבוססת על העמסה הדרגתית ועל התאמה לדרישות הפעילות מאפשרים
            ברוב המקרים חזרה מלאה לספורט, בלי צורך בניתוח.
          </p>

          <h2 className={h2Class}>בואו נבין מה קורה</h2>
          <p className={pClass}>
            שרירי המקרבים נמצאים בחלק הפנימי של הירך ומחברים בין אזור האגן לעצם הירך. הקבוצה
            כוללת את המקרב הארוך (Adductor longus&rlm;), המקרב הקצר (Adductor brevis&rlm;),
            המקרב הגדול (Adductor magnus&rlm;), השריר העדין (Gracilis&rlm;) ושריר המסרק
            (Pectineus&rlm;).
          </p>
          <p className={pClass}>
            למרות שמם, תפקידם אינו מסתכם בקירוב הרגליים זו לזו. הם מסייעים לייצב את האגן ואת
            הירך, לבלום את תנועת הגוף ולייצר כוח במהלך ריצה, בעיטה, שינוי כיוון והעברת משקל מצד
            לצד.
          </p>
          <p className={pClass}>
            השריר שנפגע בתדירות הגבוהה ביותר הוא המקרב הארוך, Adductor longus&rlm;. הפגיעה יכולה
            להתרחש באזור החיבור שבין השריר לגיד, בתוך השריר עצמו או סמוך לחיבור הגיד לעצם החיק
            (Pubis&rlm;).
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>כיצד הפציעה מתרחשת?</h2>
          <p className={pClass}>
            פציעה אקוטית של המקרבים מתרחשת בדרך כלל כאשר השריר נדרש לייצר כוח רב בזמן שהוא מתארך
            או כאשר מופעל עליו עומס מהיר שהוא אינו מוכן לספוג.
          </p>

          <ArticleFigure
            src="/professional-info/adductor-strain-common-causes.webp"
            alt="אינפוגרפיקה של חמישה מנגנוני פציעה שכיחים במקרבים: בעיטה, שינוי כיוון, ספרינט או האצה, פישוק פתאומי והחלקה — עם הדגשה של אזור המפשעה הפנימי"
            caption="מנגנונים שכיחים של פציעה אקוטית במקרבים. הפציעה מופיעה לרוב במהלך תנועה מהירה או עוצמתית, כגון בעיטה, האצה, שינוי כיוון, פישוק פתאומי או החלקה."
          />

          <p className={pClass}>
            המנגנון המדויק משתנה בין ענפי הספורט. במחקר שכלל 110 ספורטאים עם פציעת מפשעה אקוטית,
            בעיטה הייתה מנגנון הפציעה השכיח ביותר בקרב שחקני כדורגל, ואילו בענפי ספורט אחרים שינוי
            כיוון היה המנגנון השכיח ביותר.{" "}
            <span className="font-bold">
              כשני שלישים מהפציעות בקבוצה זו סווגו קלינית כפציעות של המקרבים
            </span>
            .<Ref n={3} />
          </p>
          <p className={pClass}>
            הפציעות שכיחות במיוחד בכדורגל ובהוקי קרח, אך מופיעות גם בכדורסל, פוטבול, רוגבי,
            כדוריד, פוטסל וענפים הכוללים ריצה מהירה, בעיטות ותנועה רב־כיוונית.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>מה מרגישים בזמן הפציעה?</h2>
          <p className={pClass}>
            התיאור האופייני הוא כאב פתאומי בחלק הפנימי של הירך או באזור המפשעה. לעיתים הספורטאי
            מרגיש משיכה חדה, דקירה או תחושה שמשהו נקרע.
          </p>

          <ArticleFigure
            src="/professional-info/adductor-strain-sensation.webp"
            alt="אינפוגרפיקה של תסמינים אפשריים בזמן פציעת מקרבים: כאב חד במפשעה, תחושת משיכה או דקירה, כאב בבעיטה או בריצה, צליעה או חולשה, קושי להמשיך בפעילות ונפיחות או שטף דם"
            caption="תסמינים אפשריים בזמן פציעה אקוטית במקרבים. התסמינים משתנים בהתאם למיקום הפגיעה ולחומרתה, ויכולים לכלול כאב חד, חולשה, צליעה, קושי להמשיך בפעילות ולעיתים נפיחות או שטף דם."
          />

          <p className={pClass}>
            הכאב עשוי להופיע גם כאשר מנסים לקרב את הרגליים זו לזו, בזמן מתיחה של החלק הפנימי של
            הירך או בלחיצה על אזור השריר והגיד. בקרע משמעותי יותר עשויים להופיע שטף דם נרחב, חולשה
            ברורה ולעיתים שינוי במבנה השריר. שטף הדם אינו תמיד מופיע מיד ויכול להתפתח במהלך היום
            או היומיים שלאחר הפציעה.
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>מתיחה, קרע חלקי או קרע מלא</h2>
          <p className={pClass}>
            נהוג לתאר פציעות שריר בשלוש דרגות כלליות, אך חשוב לדעת שקיימות כמה שיטות סיווג והחלוקה
            אינה תמיד אחידה בין מטפלים ומכוני הדמיה.
          </p>

          <h3 className={h3Class}>פציעה קלה</h3>
          <p className={pClass}>
            נפגע מספר קטן יחסית של סיבי שריר. הכאב ממוקד, הירידה בכוח קטנה ולעיתים עדיין ניתן
            ללכת כמעט כרגיל. עם זאת, ריצה מהירה, בעיטה או שינוי כיוון עלולים לכאוב.
          </p>

          <h3 className={h3Class}>קרע חלקי</h3>
          <p className={pClass}>
            הפגיעה נרחבת יותר ועשויה לגרום לכאב משמעותי, חולשה, נפיחות, שטף דם וצליעה. הפעילות
            הספורטיבית נעצרת בדרך כלל מיד.
          </p>

          <h3 className={h3Class}>קרע מלא או הינתקות</h3>
          <p className={pClass}>
            קיימת הפרדה מלאה של השריר או הגיד, ולעיתים הינתקות של גיד המקרב הארוך מאזור החיבור
            לעצם. מדובר בפציעה פחות שכיחה, אך היא אינה מחייבת ניתוח בכל מקרה. גם חלק מהספורטאים עם
            קרע מלא יכולים להשתקם בהצלחה באמצעות טיפול שמרני.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            הדרגה בהדמיה היא רק חלק מהתמונה. ההחלטות בשיקום צריכות להביא בחשבון גם את מיקום
            הפגיעה, הכוח, רמת הכאב, התפקוד ודרישות הספורט.
          </p>

          <h2 className={h2Class}>כיצד מאבחנים פציעה במקרבים?</h2>
          <p className={pClass}>
            האבחון מתחיל בשיחה על מנגנון הפציעה: מה הייתה התנועה, האם הכאב הופיע מיד, האם ניתן
            היה להמשיך לשחק ומה קרה בשעות שלאחר מכן. בבדיקה ניתן להעריך את מיקום הרגישות, את
            היכולת להפעיל את המקרבים, את הכאב בעת קירוב הרגליים ואת התגובה למתיחה מבוקרת. חשוב
            לבדוק גם מבנים נוספים באזור, משום שכאב חד במפשעה אינו נובע תמיד משרירי המקרבים.
          </p>
          <p className={pClass}>
            בדיקה קלינית המתאימה לפציעת המקרב הארוך כוללת בדרך כלל כאב מוכר בעת הפעלת המקרבים כנגד
            התנגדות יחד עם רגישות לאורך השריר או הגיד. עם זאת, יש להביא בחשבון גם פגיעה בשרירים
            אחרים,{" "}
            <Link
              href="/professional-info/femoroacetabular-impingement"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              פציעה או צביטה במפרק הירך
            </Link>,{" "}
            <Link
              href="/professional-info/stress-fractures"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שבר מאמץ
            </Link>
            , שבר תלישה ומקורות נוספים לכאב במפשעה.
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>מה עושים בימים הראשונים?</h2>
          <p className={pClass}>
            בשלב הראשון המטרה היא להגן על הרקמה הפגועה, להפחית את העומס שמחמיר את הכאב ולשמור ככל
            האפשר על תנועה ועל הפעלה שרירית מתאימה. בדרך כלל אין צורך להפסיק כל תנועה. הליכה
            ופעילות יומיומית יכולות להימשך בהתאם ליכולת, כל עוד הן אינן גורמות לכאב משמעותי או
            להחמרה מתמשכת לאחר הפעילות.
          </p>
          <p className={pClass}>
            קירור מקומי או לחץ יכולים לסייע בהפחתת כאב ונפיחות אצל חלק מהאנשים, אך אינם תחליף
            לשיקום. רצוי להימנע בימים הראשונים ממתיחות חזקות, מעיסוי אגרסיבי של אזור הקרע
            ומניסיונות חוזרים לבדוק האם כבר ניתן לרוץ או לבעוט.
          </p>
          <p className={pClass}>
            כאשר ההליכה קשה מאוד, מופיע שטף דם נרחב או קיימת חולשה משמעותית, מומלץ לפנות מוקדם
            לבדיקה רפואית או פיזיותרפית. ההערכה מסייעת להבין את חומרת הפציעה, לקבוע אם יש צורך
            בהדמיה ולהתחיל העמסה המתאימה לשלב ההחלמה.
          </p>

          <h2 className={h2Class}>כיצד נראה השיקום לאחר פציעה במקרבים?</h2>
          <p className={pClass}>
            פיזיותרפיה היא המרכיב המרכזי בטיפול ברוב הפציעות האקוטיות של שרירי המקרבים. הטיפול
            אינו מבוסס על מנוחה בלבד, אלא על החזרה הדרגתית של תנועה, כוח ויכולת להתמודד עם העומסים
            הנוצרים בריצה, בבעיטה ובשינויי כיוון. תוכנית הפיזיותרפיה מותאמת למיקום הפגיעה, לחומרתה,
            לתגובה לעומס ולדרישות הפעילות של המטופל. ההתקדמות נקבעת לפי התפקוד ולא רק לפי מספר
            הימים שחלפו מאז הפציעה.
          </p>

          <ArticleFigure
            src="/professional-info/adductor-strain-rehabilitation.webp"
            alt="אינפוגרפיקה של ארבעת שלבי השיקום בפציעת מקרבים: הרגעת הכאב והפעלה, בניית כוח, חזרה לריצה וחזרה לספורט"
            caption="השלבים המרכזיים בתהליך הפיזיותרפיה. השיקום מתקדם מהפעלה מבוקרת ובניית כוח אל ריצה ופעילות ספורטיבית. המעבר בין השלבים נקבע לפי הכאב, הכוח והתפקוד ולא לפי לוח זמנים קבוע."
          />

          <h3 className={h3Class}>החזרת תנועה והפעלה</h3>
          <p className={pClass}>
            בשלב הראשון משלבים תנועה בטווח נוח והפעלה עדינה של המקרבים. העומס צריך להיות נסבל ולא
            לגרום להחמרה משמעותית או ממושכת לאחר התרגול.
          </p>

          <h3 className={h3Class}>בניית כוח ויכולת ספיגת עומס</h3>
          <p className={pClass}>
            בהמשך מעלים בהדרגה את ההתנגדות, את טווח התנועה ואת דרגת הקושי. החיזוק כולל את המקרבים
            לצד שרירי הירך, הישבן והגו. אין תרגיל יחיד שחייב להופיע בכל תוכנית; החשיבות היא בהתאמת
            העומס ובהתקדמות הדרגתית.
          </p>

          <h3 className={h3Class}>חזרה לריצה ולפעילות ספורטיבית</h3>
          <p className={pClass}>
            החזרה מתחילה בריצה ובעומס נשלט, ומתקדמת בהדרגה למהירות גבוהה יותר, להאצות, לבלימות
            ולשינויי כיוון. לאחר מכן משלבים את הדרישות הייחודיות לענף, כגון בעיטות, החלקה, תנועה
            תחת לחץ ואימון מלא.
          </p>
          <p className={pClass}>
            פיזיותרפיה המבוססת על חיזוק מתקדם, ניהול עומסים והחזרה מדורגת לפעילות נתמכת יותר
            מהסתמכות על טיפולים פסיביים בלבד. טיפולים ידניים או אמצעים להפחתת כאב יכולים להשתלב
            לפי הצורך, אך אינם מחליפים את תהליך ההעמסה והתרגול.
            <Ref n={2} />
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>מתי אפשר לחזור לספורט?</h2>
          <p className={pClass}>
            החזרה אינה צריכה להתבסס רק על כך שכבר לא כואב בהליכה. לפני חזרה מלאה רצוי לבדוק
            שהספורטאי מסוגל לבצע ללא כאב משמעותי. במסגרת הפיזיותרפיה ניתן לבחון באופן הדרגתי את
            הכוח, את איכות התנועה ואת היכולת לבצע את דרישות הספורט:
          </p>
          <ul className={ulClass}>
            <li>קירוב חזק של הרגל</li>
            <li>תרגילי כוח בעומס גבוה</li>
            <li>ריצה והאצה</li>
            <li>שינויי כיוון</li>
            <li>קפיצה ונחיתה בהתאם לענף</li>
            <li>בעיטה או החלקה, כאשר הן חלק מהספורט</li>
            <li>אימון ספורטיבי בעצימות המתקרבת לעצימות מלאה</li>
          </ul>
          <p className={pClass}>
            יש להעריך גם את הכוח ביחס לצד השני, את הביטחון בתנועה ואת התגובה במהלך 24 השעות שלאחר
            האימון.
          </p>
          <p className={pClass}>
            במחקר על 81 ספורטאים גברים שעברו שיקום מבוסס קריטריונים,{" "}
            <span className="font-bold">
              ספורטאים עם פציעות בדרגות MRI אפס עד שתיים חזרו בממוצע לאימון קבוצתי מלא בתוך כשלושה
              שבועות. בפציעות מדרגה שלוש זמן החזרה החציוני היה כ־11 שבועות
            </span>
            . עם זאת, טווחי ההחלמה היו רחבים ואין להשתמש בנתונים האלה כהבטחה או כתאריך יעד אישי.
            <Ref n={4} />
          </p>
          <p className={pClass}>
            באותו מחקר, שיעור הפציעה החוזרת במהלך שנה היה נמוך יותר בקרב מי שהשלימו את הקריטריונים
            הקליניים ללא כאב לפני החזרה. ממצא זה מחזק את החשיבות של חזרה המבוססת על תפקוד ולא רק
            על זמן.
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>כיצד מפחיתים את הסיכון לפציעה חוזרת?</h2>
          <p className={pClass}>
            היסטוריה של פציעת מפשעה או מקרבים היא אחד מגורמי הסיכון המשמעותיים לפציעה נוספת. גם
            חולשה של המקרבים, פערים בכוח, ירידה בטווחי התנועה ועלייה מהירה בעומסי האימון עשויים
            לתרום לסיכון.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            גם לאחר סיום הפיזיותרפיה והחזרה לספורט מומלץ להמשיך בתוכנית טיפול הכוללת חיזוק של
            המקרבים ושאר שרירי הירך והאגן, חשיפה הדרגתית לריצה מהירה ולשינויי כיוון וניהול מתאים
            של עומסי האימון.
          </p>
          <p className={pClass}>
            תוכניות חיזוק מקרבים הפחיתו את השכיחות הכוללת של בעיות מפשעה בחלק מהמחקרים, אך הראיות
            לגבי מניעה ספציפית של כל הקרעים האקוטיים אינן חד־משמעיות. לכן אין לראות בתרגיל אחד
            ביטוח מפני פציעה.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>ומה אם הכאב לא התחיל באירוע חד?</h2>
          <p className={pClass}>
            לא כל כאב באזור המפשעה הוא מתיחה או קרע בשרירי המקרבים.
          </p>
          <p className={pClass}>
            כאשר הכאב התפתח בהדרגה, נמשך לאורך זמן, חוזר שוב ושוב או אינו מתאים למנגנון של פציעת
            שריר אקוטית, יש לבחון אפשרויות נוספות. כאב במפשעה ובאשכים עשוי להיות קשור למקרבים,
            לאזור המפשעתי, לעצם החיק, למכופפי הירך, למפרק הירך או למקורות אחרים.
            <Ref n={5} />
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/groin-pain-athletes"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב במפשעה אצל ספורטאים
            </Link>{" "}
            ·{" "}
            <Link
              href="/professional-info/sports-hernia-athletic-pubalgia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              בקע ספורטאים
            </Link>{" "}
            ·{" "}
            <Link
              href="/professional-info/chronic-testicular-pain-orchialgia-cscp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב אשכים כרוני
            </Link>
            .
          </p>

          <h2 className={h2Class}>מתי חשוב לפנות לבדיקה רפואית?</h2>
          <p className={pClass}>
            מומלץ לפנות לבדיקה כאשר הכאב משמעותי, כאשר קשה ללכת או לדרוך, כאשר מופיעים שטף דם נרחב
            או נפיחות, כאשר קיימת חולשה ברורה או כאשר אין שיפור הדרגתי.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              כאב באשך או נפיחות באשך, כאב בטן משמעותי, חום, תחושת מחלה כללית או כאב שאינו קשור
              בבירור לתנועה — דורשים בירור רפואי ואין לייחס אותם אוטומטית לשרירי המקרבים.
            </p>
          </div>

          <h2 className={h2Class}>לסיכום</h2>
          <p className={pClass}>
            פציעה אקוטית של שרירי המקרבים מתרחשת בדרך כלל במהלך תנועה מהירה ועוצמתית וגורמת לכאב
            פתאומי במפשעה או בחלק הפנימי של הירך.
          </p>
          <p className={pClass}>
            ברוב המקרים אין צורך בניתוח, ופיזיותרפיה היא המרכיב המרכזי בטיפול. התהליך מתבסס על
            אבחון מדויק, ניהול עומסים, חיזוק הדרגתי והחזרה מסודרת לריצה ולדרישות הספורט. היעלמות
            הכאב בפעילות היומיומית היא שלב חשוב, אך אינה מעידה לבדה שהשריר כבר מוכן לריצה מהירה,
            לבעיטה או לשינויי כיוון.
          </p>

          <ArticleCta
            intro="כאב פתאומי במפשעה או קושי לחזור לספורט אחרי פציעת מקרבים? הערכה מסודרת יכולה לכוון את השיקום ואת החזרה הבטוחה לפעילות."
            whatsappText="היי רועי, קראתי אצלך הסבר על פציעת מקרבים, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Farrell SG, Hatem M, Bharam S. Acute Adductor Muscle Injury: A Systematic Review on
              Diagnostic Imaging, Treatment, and Prevention. Am J Sports Med.
              2023;51(13):3591-3603. doi:
              <a
                href="https://doi.org/10.1177/03635465221140923"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/03635465221140923
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Thorborg K. Current Clinical Concepts: Exercise and Load Management of Adductor
              Strains, Adductor Ruptures, and Long-Standing Adductor-Related Groin Pain. J Athl
              Train. 2023;58(7-8):589-601. doi:
              <a
                href="https://doi.org/10.4085/1062-6050-0496.21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.4085/1062-6050-0496.21
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Serner A, Tol JL, Jomaah N, et al. Diagnosis of Acute Groin Injuries: A Prospective
              Study of 110 Athletes. Am J Sports Med. 2015;43(8):1857-1864. doi:
              <a
                href="https://doi.org/10.1177/0363546515585123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/0363546515585123
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Serner A, Weir A, Tol JL, et al. Return to Sport After Criteria-Based Rehabilitation
              of Acute Adductor Injuries in Male Athletes: A Prospective Cohort Study. Orthop J
              Sports Med. 2020;8(1):2325967119897247. doi:
              <a
                href="https://doi.org/10.1177/2325967119897247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/2325967119897247
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Weir A, Brukner P, Delahunt E, et al. Doha Agreement Meeting on Terminology and
              Definitions in Groin Pain in Athletes. Br J Sports Med. 2015;49(12):768-774. doi:
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
