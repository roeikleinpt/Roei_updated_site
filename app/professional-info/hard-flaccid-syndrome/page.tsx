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

const article = getArticle("hard-flaccid-syndrome");

export const metadata: Metadata = {
  title: "Hard Flaccid Syndrome: מה ידוע וכיצד פיזיותרפיה עשויה לסייע",
  description:
    "תסמונת שבה הפין נשאר נוקשה או קשיח חלקית גם במנוחה, לצד שינויים בתחושה, כאב ומצוקה. מה ידוע על הגורמים, האבחון, הקשר לרצפת האגן וכיצד פיזיותרפיה עשויה לסייע.",
  alternates: { canonical: "/professional-info/hard-flaccid-syndrome" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "Hard Flaccid Syndrome: מה אנחנו יודעים וכיצד פיזיותרפיה עשויה לסייע | רועי קליין פיזיותרפיה",
    description:
      "מה ידוע על Hard Flaccid Syndrome, ממה היא עשויה להיגרם, כיצד מאבחנים, מה הקשר לרצפת האגן ומה כולל הטיפול הפיזיותרפי.",
    url: "/professional-info/hard-flaccid-syndrome",
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
    q: "האם Hard Flaccid Syndrome היא אבחנה רפואית מוכרת?",
    a: "התסמונת מתוארת כיום בספרות הרפואית, כולל דיווחי מקרה, סקרים וסקירה שיטתית. עם זאת, אין עדיין קריטריונים אבחנתיים מוסכמים או הנחיות קליניות רשמיות. לכן מדויק יותר להתייחס אליה כתסמונת קלינית מתפתחת ולא כאבחנה סגורה בעלת בדיקה מאשרת.",
  },
  {
    q: "האם בדיקות תקינות אומרות שאין שום בעיה?",
    a: "לא. בדיקות דם, דופלר או הדמיה בודקות גורמים מסוימים ושוללות חלק מהאבחנות האפשריות. תוצאה תקינה אינה שוללת שינוי בתפקוד השרירים, מערכת העצבים או ויסות הכאב, ואינה מבטלת את חוויית התסמינים.",
  },
  {
    q: "האם כל מי שסובל מהתסמונת צריך טיפול פנימי ברצפת האגן?",
    a: "לא. בדיקה וטיפול פנימיים עשויים לספק מידע נוסף במקרים מסוימים, אך אינם חובה ואינם מתאימים לכל אדם. ניתן להתחיל בשיחה ובהערכה חיצונית, ולהחליט יחד האם בדיקה נוספת נחוצה.",
  },
  {
    q: "האם פיזיותרפיה יכולה לרפא את התסמונת?",
    a: "פיזיותרפיה עשויה לסייע כאשר קיימים כיווץ יתר, קושי בהרפיה, כאב, רגישות עצבית, דפוסי נשימה לא יעילים או קושי לחזור לפעילות. הראיות הישירות ליעילותה ב־Hard Flaccid Syndrome עדיין מוגבלות, ולכן אין אפשרות להבטיח ריפוי. הטיפול צריך להיות מותאם לממצאים ולעיתים להשתלב עם הערכה וטיפול רפואיים או רגשיים.",
  },
];

export default function HardFlaccidSyndromeArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            <span dir="ltr">Hard Flaccid Syndrome</span>: מה אנחנו יודעים וכיצד פיזיותרפיה עשויה
            לסייע
          </h1>
          <ArticleByline date={article.date} />

          <h2 className={h2Class}>מה ידוע על התסמונת?</h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Hard Flaccid Syndrome היא תסמונת המתארת מצב שבו הפין מרגיש נוקשה, מכווץ או קשיח
            חלקית גם כאשר אין זקפה או גירוי מיני. לצד השינוי במצב הרפוי עשויים להופיע שינויים
            בתחושה, כאב, הפרעה בזקפה, תסמינים במערכת השתן ומצוקה רגשית משמעותית. לתסמונת הזאת יש
            סיפור מעט יוצא דופן. היא לא הוגדרה תחילה בספרי הרפואה או בידי ארגון רפואי. אנשים שחוו
            שילוב דומה של תסמינים מצאו זה את זה בפורומים ובקהילות אינטרנטיות, תיארו את החוויה
            ונתנו לה שם. רק לאחר מכן החלה הספרות הרפואית לבחון את התופעה באופן מסודר.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <ArticleFigure
            src="/professional-info/hard-flaccid-origin.webp"
            alt="ציר זמן בארבעה שלבים: מקהילות ופורומים ברשת, לתיאורים הראשונים בספרות הרפואית ב־2020, למחקרים נוספים ב־2025 עד 2026, ועד היום — כך התגבשה ההכרה ב־Hard Flaccid Syndrome"
            caption="התפתחות ההכרה ב־Hard Flaccid Syndrome: מתיאורי מטופלים בקהילות מקוונות אל המחקרים הרפואיים הראשונים [1-3]."
          />

          <p className={pClass}>
            במובן הזה, הרפואה עדיין מנסה להדביק את הידע והניסיון שהצטברו בקרב המטופלים. העובדה
            שהתסמונת צמחה מתוך קהילות אינטרנטיות אינה הופכת את התסמינים לפחות אמיתיים. עם זאת,
            חשוב גם להכיר בכך שעדיין אין הגדרה רפואית אחידה, בדיקה אבחנתית ייעודית או מנגנון אחד
            שהוכח כמסביר את כל המקרים.
            <Ref n={1} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>מהי Hard Flaccid Syndrome&rlm;?</h2>
          <p className={pClass}>
            המאפיין המרכזי הוא פין שנשאר נוקשה או קשיח חלקית במצב שבו הוא אמור להיות רפוי. חלק
            מהאנשים מתארים אותו כמכווץ, קטן מהרגיל, קשה למגע או בעל מרקם גמיש־נוקשה, “כמו גומי”.
            אחרים מתארים תחושה שהפין חלול, מנותק או פשוט אינו מרגיש כפי שהרגיש בעבר. לעיתים
            התחושה משתנה בהתאם לתנוחה, למתח, לפעילות גופנית או לפעילות מינית. לא מדובר בזקפה
            ממושכת. בדרך כלל אין זקפה מלאה או עוררות מינית, אלא שינוי בתחושה ובמרקם של הפין במצב
            הרפוי.
          </p>
          <p className={pClass}>
            Hard Flaccid Syndrome היא למעשה שם שניתן לצבר של תסמינים. לא כל אדם יחווה את כל
            התסמינים, והאופן שבו הם מתבטאים עשוי להשתנות מאוד מאדם לאדם.
            <Ref n={1} />
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>אילו תסמינים עשויים להופיע?</h2>
          <p className={pClass}>
            התסמינים עשויים לערב את המרקם והתחושה בפין, את התפקוד המיני, את אזור האגן ומערכת
            השתן, וכן את ההשפעה הרגשית של המצב.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
          </p>

          <ArticleFigure
            src="/professional-info/hard-flaccid-symptoms.webp"
            alt="ארבע קבוצות תסמינים אפשריים של Hard Flaccid Syndrome — שינויים בפין ובתחושה, תפקוד מיני, אגן ומערכת השתן והשפעה רגשית — לצד נתוני סקר מקוון של 143 משתתפים: 92.3% דיווחו על שינוי בצורה או בגודל הפין ו־90.9% על פין נוקשה במצב הרפוי"
            caption="תסמינים אפשריים של Hard Flaccid Syndrome כפי שתוארו בספרות הרפואית ובדיווחי מטופלים. נתוני האחוזים המופיעים באיור מבוססים על סקר מקוון של 143 משתתפים שהגדירו את עצמם כסובלים מהתסמונת [1–4]."
          />

          <p className={pClass}>
            משתתפי הסקר גויסו דרך רשתות חברתיות, הגדירו את האבחנה בעצמם ולא עברו תהליך אבחון
            אחיד. לכן אין להסיק מהנתונים מהי שכיחות התסמונת באוכלוסייה, והם אינם בהכרח מייצגים את
            כל האנשים שחווים תסמינים דומים.
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>ממה התסמונת נגרמת?</h2>
          <p className={pClass}>
            אין כיום תשובה אחת מוכחת לשאלה מה גורם ל־Hard Flaccid Syndrome&rlm;. בחלק מהמקרים
            התסמינים מתחילים לאחר פעילות מינית אינטנסיבית, אוננות אגרסיבית, חבלה במהלך יחסי מין
            או תרגילי מתיחה ועיסוי של הפין כגון Jelqing&rlm;. עם זאת, בסקר הגדול ביותר שפורסם רק
            58% מהמשתתפים זכרו אירוע מסוים שקדם להופעת התסמינים.
            <Ref n={4} />
          </p>
          <p className={pClass}>
            הוצעו מנגנונים המערבים את מערכת העצבים, רצפת האגן, ויסות זרימת הדם, הגב והאגן והתגובה
            הרגשית לתסמינים. בשלב זה מדובר בהשערות ולא במנגנון יחיד שהוכח.
            <Ref n={1} />
            <Ref n={3} />
          </p>

          <ArticleFigure
            src="/professional-info/hard-flaccid-cycle.webp"
            alt="מודל מעגלי בחמישה שלבים המדגים כיצד אירוע מקדים, כאב וחשש, דריכות של מערכת העצבים וכיווץ רצפת האגן, שינוי בתפקוד ובדיקה עצמית חוזרת עשויים להזין זה את זה, לצד מערכות שעשויות להיות מעורבות"
            caption="מודל אפשרי לשימור התסמינים ב־Hard Flaccid Syndrome — השערה קלינית המשלבת כמה מערכות, ולא מנגנון יחיד שהוכח [1,3]."
          />

          <p className={pClass}>
            אחת ההשערות היא שאירוע ראשוני גורם לגירוי של עצבים, כלי דם או רקמות באזור הפין והאגן.
            בעקבות זאת עשויים להתפתח כאב, שינוי בתחושה, עלייה בפעילות מערכת העצבים הסימפתטית וכיווץ
            מתמשך של שרירי רצפת האגן. פעילות מוגברת של השרירים עשויה בתורה להשפיע על תחושת הפין,
            על תפקוד מערכת השתן ועל התפקוד המיני.
            <Ref n={1} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            לכן נכון יותר לחשוב על Hard Flaccid Syndrome כתוצאה אפשרית של שילוב בין כמה מערכות:
            מערכת העצבים והתחושה, רצפת האגן, ויסות זרימת הדם, הגב והאגן, והתגובה הרגשית
            וההתנהגותית.
          </p>

          <h2 className={h2Class}>האם חרדה היא הגורם לתסמונת?</h2>
          <p className={pClass}>
            חרדה ומצוקה עשויות להופיע כתגובה טבעית לשינוי פתאומי בפין, בתחושה או בתפקוד המיני.
            כאשר אדם חושש שנגרם נזק קבוע, הוא עשוי לבדוק שוב ושוב את מצב הפין, להתמקד בכל שינוי
            קטן ולהימנע מפעילות מינית או גופנית. המתח שנוצר עלול להגביר את פעילות מערכת העצבים
            הסימפתטית ואת הכיווץ השרירי, וכך להחמיר חלק מהתסמינים. התסמינים מגבירים את החרדה,
            והחרדה עשויה להגביר את התסמינים. כך יכול להיווצר מעגל שמזין את עצמו.
            <Ref n={1} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            התייחסות למתח, לחשש ולפגיעה בביטחון המיני אינה מבטלת את המרכיב הגופני. היא חלק מטיפול
            רחב יותר במערכת שבה הגוף והתגובה הרגשית משפיעים זה על זה.
          </p>

          <h2 className={h2Class}>כיצד מאבחנים Hard Flaccid Syndrome&rlm;?</h2>
          <p className={pClass}>
            אין כיום בדיקת דם, בדיקת הדמיה או ממצא גופני יחיד שמאשרים את האבחנה. ההערכה מתחילה
            בשיחה מפורטת על התסמינים:
          </p>
          <ul className={ulClass}>
            <li>כיצד ומתי הם התחילו</li>
            <li>האם היה אירוע מקדים</li>
            <li>מה משפר ומה מחמיר אותם</li>
            <li>האם קיימים כאב, שינוי בתחושה או הפרעה בזקפה</li>
            <li>האם קיימים תסמינים במתן שתן או בהתרוקנות</li>
            <li>האם קיימים כאבי גב, הקרנה לרגל או תסמינים עצביים</li>
            <li>כיצד המצב משפיע על הפעילות המינית, על השינה ועל איכות החיים</li>
          </ul>
          <p className={pClass}>
            בהתאם לתסמינים, רופא משפחה או אורולוג עשוי לבצע בדיקה גופנית, בדיקות דם, בדיקת
            אולטרסאונד דופלר של הפין או בדיקות נוספות. מטרת הבדיקות היא לשלול מצבים אחרים שעשויים
            להסביר את התסמינים.
            <Ref n={1} />
            <Ref n={7} />
          </p>

          <h2 className={h2Class}>מה הקשר לרצפת האגן?</h2>
          <p className={pClass}>
            רצפת האגן היא מערכת של שרירים, עצבים ורקמות חיבור המשתתפת בשליטה במתן שתן וצואה,
            בתפקוד המיני, ביציבות האגן ובוויסות הלחצים בגוף. היא צריכה לדעת להתכווץ, אך גם להרפות
            ולשנות את רמת הפעילות בהתאם לצורך.
            <Ref n={8} />
          </p>
          <p className={pClass}>
            אצל חלק מהאנשים עם Hard Flaccid Syndrome מתוארים שרירי רצפת אגן מתוחים, רגישים או
            פעילים מדי. בסקר של אנשי מקצוע בתחום הרפואה המינית דווחו בין הממצאים האפשריים שרירי
            פרינאום מכווצים ונקודות רגישות באזור, אך אצל חלק גדול מהמטופלים הבדיקה הגופנית הייתה
            תקינה.
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>מה כולל טיפול פיזיותרפיה ברצפת האגן ב־Hard Flaccid Syndrome&rlm;?</h2>
          <p className={pClass}>
            הטיפול מבוסס על העקרונות של{" "}
            <Link
              href="/professional-info/mens-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              פיזיותרפיה לרצפת האגן אצל גברים
            </Link>{" "}
            ומותאם לממצאי ההערכה של כל מטופל. הוא עשוי לכלול כמה מרכיבים:
          </p>

          <h3 className={h3Class}>למידה של הרפיית רצפת האגן</h3>
          <p className={pClass}>
            כאשר רצפת האגן נמצאת בפעילות מוגברת, המטרה אינה לחזק אותה יותר אלא לשפר את היכולת
            להפחית פעילות ולחזור למצב מנוחה. הדבר עשוי לכלול מודעות שרירית, נשימה, תנוחות ותנועה
            עדינה.
          </p>

          <h3 className={h3Class}>תרגול נשימה וויסות לחצים</h3>
          <p className={pClass}>
            הנשימה, דופן הבטן ורצפת האגן פועלות יחד. תרגול נשימה יכול לסייע לשינוי דפוסי כיווץ,
            להפחתת מאמץ מיותר ולשיפור היכולת להרפות.
          </p>

          <h3 className={h3Class}>שיפור התנועה והשליטה</h3>
          <p className={pClass}>
            הטיפול עשוי לכלול תרגול של הגב, האגן, הירכיים, שרירי הבטן והישבן. המטרה אינה למצוא
            “שריר חלש אחד” שגרם לתסמונת, אלא לשפר את חלוקת העומס ואת הביטחון בתנועה.
          </p>

          <h3 className={h3Class}>טיפול מנואלי</h3>
          <p className={pClass}>
            כאשר הבדיקה מזהה רגישות, הגבלה או פעילות שרירית מוגברת, ניתן לשקול טיפול מנואלי
            חיצוני ולעיתים פנימי. טיפול כזה אינו הכרחי בכל מקרה ואינו עומד בפני עצמו, אלא משתלב
            עם תרגול, הסבר וחזרה לפעילות.
          </p>
          <p className={pClass}>
            בדיקה או טיפול פנימיים אינם חובה. בדרך כלל ניתן להתחיל בהערכה חיצונית. לפני בדיקה
            פנימית יש להסביר מה היא עשויה להוסיף ומה המשמעות של בחירה שלא לבצע אותה. ההחלטה
            מתקבלת יחד ובהסכמה, וניתן לסרב או לעצור בכל שלב.
          </p>

          <h3 className={h3Class}>חזרה הדרגתית לפעילות</h3>
          <p className={pClass}>
            הימנעות ממושכת מכל פעילות גופנית או מינית עלולה להגביר פחד ורגישות. מצד שני, חזרה
            מהירה מדי לפעילות שמחמירה את התסמינים עלולה ליצור התלקחות נוספת. לכן החזרה מתבצעת
            בהדרגה ובהתאם לתגובה.
          </p>

          <h3 className={h3Class}>הבנת התסמינים והפחתת &quot;מעגל האיום&quot;</h3>
          <p className={pClass}>
            כאשר אין הסבר ברור, קל לפרש כל שינוי כסימן לנזק. הסבר של הממצאים, הבנת הפעילויות
            שמשפיעות על התסמינים ותכנון מסודר של חזרה לתפקוד יכולים להפחית את תחושת האיום ואת
            הצורך בבדיקה עצמית חוזרת.
          </p>
          <p className={pClass}>
            המקור הקליני של London Men&apos;s Health Physiotherapy מדגיש באופן דומה הרפיה ואימון
            מחדש של רצפת האגן, תרגול נשימה, תנועתיות וחזרה הדרגתית לפעילות, במקום חיזוק אוטומטי
            ואגרסיבי.
            <Ref n={9} />{" "}מדובר בניסיון קליני מקצועי ולא במחקר מבוקר, ולכן יש להתאים את העקרונות
            לממצאי הבדיקה של כל מטופל.
          </p>

          <h2 className={h2Class}>ממה כדאי להימנע?</h2>
          <p className={pClass}>
            אין רשימת איסורים שמתאימה לכולם, אך בדרך כלל לא מומלץ להתחיל באופן עצמאי בתרגול
            אגרסיבי או בטיפולים שמגבירים את התסמינים. כדאי להיזהר במיוחד מ:
          </p>
          <ul className={ulClass}>
            <li>מתיחות חזקות או משיכה אגרסיבית של הפין</li>
            <li>תרגילי חיזוק מרביים וחוזרים לרצפת האגן ללא הערכה</li>
            <li>בדיקה חוזרת של הזקפה או מצב הפין לאורך היום</li>
            <li>מעבר מתוכנית תרגול אחת לאחרת בהתאם להמלצות אקראיות בפורומים</li>
            <li>הימנעות מוחלטת וממושכת מכל פעילות מתוך פחד מנזק</li>
            <li>המשך פעילות שמייצרת החמרה משמעותית ומתמשכת ללא התאמת עומס</li>
          </ul>
          <p className={pClass}>
            המטרה אינה להתעלם מהתסמינים, אלא למצוא את המינון ואת סוג הפעילות שמתאימים למצב הנוכחי.
          </p>

          <h2 className={h2Class}>האם התסמונת עוברת?</h2>
          <p className={pClass}>
            קיימים דיווחים על אנשים שהשתפרו באופן משמעותי ואף חזרו לתפקוד מלא.
            <Ref n={6} />
            <Ref n={7} />{" "}עם זאת, אין כיום מחקרים שמאפשרים לקבוע מה שיעור ההחלמה, כמה זמן היא
            אורכת או איזה טיפול מנבא הצלחה. משך התסמינים עשוי להיות שונה מאוד מאדם לאדם. גם
            ההגדרה עצמה אינה אחידה, ולכן ייתכן שאנשים שונים שמקבלים את אותו השם מתמודדים למעשה עם
            מנגנונים שונים.
          </p>
          <p className={pClass}>
            ממצאים תקינים בבדיקות הדמיה או דופלר יכולים להיות מרגיעים משום שהם מפחיתים את הסבירות
            לחלק מהפגיעות המבניות והווסקולריות. הם אינם מבטיחים שההחלמה תהיה מיידית, אך גם אינם
            מעידים שהתסמינים דמיוניים.
          </p>

          <h2 className={h2Class}>מתי חשוב לפנות לבדיקה רפואית?</h2>
          <p className={pClass}>
            מומלץ לפנות לרופא כאשר מופיע שינוי חדש ומתמשך במצב הפין, ירידה בתחושה, כאב, שינוי
            בזקפה או תסמינים במתן שתן. הערכה רפואית חשובה במיוחד כאשר התסמינים התחילו לאחר חבלה.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900">יש לפנות בדחיפות במקרים כגון:</p>
            <ul className="mt-3 list-disc space-y-2 pr-6 leading-8 text-amber-950">
              <li>
                זקפה מלאה וכואבת שנמשכת מעל שלוש עד ארבע שעות
                <Ref n={10} />
              </li>
              <li>
                קול פקיעה או קריעה בזמן זקפה, ולאחריו כאב, ירידה מיידית בזקפה, נפיחות או שטף דם
                <Ref n={11} />
              </li>
              <li>חוסר יכולת להטיל שתן</li>
              <li>
                כאב גב חדש המלווה בחולשה ברגליים, אובדן שליטה על שתן או צואה, או ירידה בתחושה
                באזור איברי המין והירכיים הפנימיות
                <Ref n={12} />
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-xl font-bold text-slate-900">בואו נבין מה קורה</p>
            <p className="mt-3 leading-8 text-black">
              שינוי בתחושה, במראה או בתפקוד של הפין יכול לעורר חשש משמעותי, במיוחד כאשר הבדיקות
              תקינות ואין הסבר ברור. הערכה מסודרת יכולה לסייע להבין אילו מערכות עשויות להיות
              מעורבות, מה כדאי לבדוק ומה ניתן לשנות בהדרגה.
            </p>
            <Link
              href="/#contact"
              className="btn-press mt-5 inline-block rounded-full bg-teal-700 px-6 py-3 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
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
              Pang KH, Feng J, Zhang Y. Hard-flaccid syndrome: a systematic review of
              aetiopathophysiology, clinical presentation and management. Int J Impot Res.
              2026;38(6):393-403. doi:
              <a
                href="https://doi.org/10.1038/s41443-025-01118-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41443-025-01118-2
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Gul M, Huynh LM, El-Khatib FM, Yafi FA, Serefoglu EC. A qualitative analysis of
              Internet forum discussions on hard flaccid syndrome. Int J Impot Res.
              2020;32(5):503-509. doi:
              <a
                href="https://doi.org/10.1038/s41443-019-0151-x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41443-019-0151-x
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Gul M, Towe M, Yafi FA, Serefoglu EC. Hard flaccid syndrome: initial report of four
              cases. Int J Impot Res. 2020;32(2):176-179. doi:
              <a
                href="https://doi.org/10.1038/s41443-019-0133-z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41443-019-0133-z
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Niedenfuehr J, Stevens DM. Hard flaccid syndrome symptoms, comorbidities, and
              self-reported efficacy and satisfaction of treatments: a cross-sectional survey.
              Int J Impot Res. 2025;37(4):458-464. doi:
              <a
                href="https://doi.org/10.1038/s41443-024-00853-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41443-024-00853-2
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Gryzinski GM, Hammad MAM, Alzweri L, et al. Hard-Flaccid syndrome: a survey of
              sexual medicine practitioners&apos; knowledge and experience. Int J Impot Res.
              2025;37(4):446-447. doi:
              <a
                href="https://doi.org/10.1038/s41443-024-00917-3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41443-024-00917-3
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Billis E, Kontogiannis S, Tsounakos S, Konstantinidou E, Giannitsas K. Hard Flaccid
              Syndrome: a biopsychosocial management approach with emphasis on pain management,
              exercise therapy and education. Healthcare (Basel). 2023;11(20):2793. doi:
              <a
                href="https://doi.org/10.3390/healthcare11202793"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.3390/healthcare11202793
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Yazar RO, Hammad MAM, Barham DW, Azad B, Yafi FA. Successful treatment of hard
              flaccid syndrome with multimodal therapy: a case report study. Int J Impot Res.
              2025;37(4):448-450. doi:
              <a
                href="https://doi.org/10.1038/s41443-024-00955-x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41443-024-00955-x
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Quaghebeur J, Petros P, Wyndaele JJ, De Wachter S. Pelvic-floor function,
              dysfunction, and treatment. Eur J Obstet Gynecol Reprod Biol. 2021;265:143-149.
              doi:
              <a
                href="https://doi.org/10.1016/j.ejogrb.2021.08.026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.ejogrb.2021.08.026
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              London Men&apos;s Health Physiotherapy. Hard Flaccid Syndrome: What Men Need to
              Know. Professional clinical resource. Accessed July 2026.
            </li>
            <li id="ref-10" className="scroll-mt-24">
              NHS. Priapism (painful erections). Accessed July 2026.{" "}
              <a
                href="https://www.nhs.uk/conditions/priapism-painful-erections/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                nhs.uk
              </a>
              .
            </li>
            <li id="ref-11" className="scroll-mt-24">
              Cleveland Clinic. Penile Fracture: Causes, Symptoms and Treatment. Reviewed 2024.{" "}
              <a
                href="https://my.clevelandclinic.org/health/diseases/penile-fracture"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                clevelandclinic.org
              </a>
              .
            </li>
            <li id="ref-12" className="scroll-mt-24">
              Mayo Clinic. Herniated disk: Symptoms and causes. Accessed July 2026.{" "}
              <a
                href="https://www.mayoclinic.org/diseases-conditions/herniated-disk/symptoms-causes/syc-20354095"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                mayoclinic.org
              </a>
              .
            </li>
          </ol>
          <p className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
            המידע בדף זה נועד להרחבת הידע ואינו מחליף בדיקה רפואית או אבחון אישי.
          </p>
          <AuthorBox />
        </div>
      </Container>
    </article>
  );
}
