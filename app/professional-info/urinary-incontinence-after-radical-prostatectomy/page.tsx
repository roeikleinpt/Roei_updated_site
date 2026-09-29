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

const article = getArticle("urinary-incontinence-after-radical-prostatectomy");

export const metadata: Metadata = {
  title: "בריחת שתן אחרי כריתת ערמונית: פיזיותרפיה ושיקום רצפת האגן",
  description:
    "בריחת שתן שכיחה לאחר כריתה רדיקלית של הערמונית. מה צפוי לאחר הניתוח, מתי מתחילים תרגול רצפת אגן, כיצד פיזיותרפיה יכולה לסייע ומתי כדאי לחזור לאורולוג?",
  alternates: { canonical: "/professional-info/urinary-incontinence-after-radical-prostatectomy" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "בריחת שתן אחרי כריתת ערמונית | רועי קליין פיזיותרפיה",
    description:
      "שיקום רצפת האגן לפני ואחרי כריתה רדיקלית של הערמונית: מה צפוי, מתי מתחילים, ומה הראיות אומרות.",
    url: "/professional-info/urinary-incontinence-after-radical-prostatectomy",
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
    q: "האם בריחת שתן אחרי כריתת ערמונית היא נורמלית?",
    a: "דליפת שתן שכיחה מאוד בתקופה הראשונה לאחר הוצאת הקטטר. אצל רוב הגברים חל שיפור הדרגתי במהלך החודשים שלאחר הניתוח, אך קצב ההחלמה משתנה מאדם לאדם.",
  },
  {
    q: "מתי כדאי להתחיל תרגילי רצפת אגן?",
    a: "אפשר ללמוד ולתרגל את הפעלת רצפת האגן עוד לפני הניתוח. לאחר הניתוח, החזרה לאימון פעיל נעשית בדרך כלל לאחר הוצאת הקטטר ובהתאם להנחיות המנתח והצוות המטפל.",
  },
  {
    q: "כמה תרגילי רצפת אגן צריך לעשות ביום?",
    a: "אין מספר חזרות אחד שמתאים לכל גבר. איכות הכיווץ, היכולת להרפות, הסבולת והתזמון בזמן שיעול, קימה או מאמץ חשובים לא פחות ממספר החזרות. לכן תוכנית האימון צריכה להיות מותאמת ליכולת ולתסמינים של המטופל.",
  },
  {
    q: "האם צריך לעשות תרגילי קיגל כמה שיותר חזק וכמה שיותר פעמים?",
    a: "לא. יותר תרגול אינו בהכרח טוב יותר. המטרה היא לבצע כיווץ נכון, בעוצמה ובמשך המתאימים, ולאפשר גם הרפיה בין הכיווצים. בחלק מהמצבים חשוב במיוחד ללמוד להפעיל את רצפת האגן בזמן הנכון ולא רק לחזק אותה.",
  },
  {
    q: "האם פיזיותרפיה יכולה למנוע לגמרי בריחת שתן אחרי הניתוח?",
    a: "לא ניתן להבטיח זאת. הראיות תומכות בעיקר בכך שאימון מתאים של רצפת האגן עשוי לזרז את החזרה לשליטה בשתן, במיוחד בחודשים הראשונים. פחות ברור האם הוא משנה את שיעור הגברים שיהיו יבשים בטווח הארוך.",
  },
  {
    q: "מתי צריך לחזור לאורולוג אם עדיין קיימת דליפה?",
    a: "שיפור יכול להימשך במשך חודשים. עם זאת, אם קיימת דליפה משמעותית שאינה משתפרת, כדאי לבצע הערכה מחודשת. לפי הנחיות ה-AUA, במקרים מתאימים ניתן לדון בטיפול ניתוחי כבר סביב שישה חודשים כאשר אין שיפור מספק, ולאחר שנה יש לדון באפשרויות ניתוחיות כאשר בריחת שתן במאמץ ממשיכה להיות מטרידה למרות טיפול שמרני.",
  },
];

export default function IncontinenceAfterProstatectomyArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            בריחת שתן אחרי כריתת ערמונית: שיקום רצפת האגן לפני ואחרי הניתוח
          </h1>
          <ArticleByline date={article.date} />

          <p className="mt-6 text-lg leading-8 text-black">
            בריחת שתן היא תופעה שכיחה בתקופה שלאחר כריתה רדיקלית של הערמונית (Radical
            Prostatectomy&rlm;). אצל רוב הגברים היא משתפרת בהדרגה בחודשים שלאחר הניתוח, ולעיתים
            השיפור משמעותי כבר בחודשים הראשונים. עם זאת, קצב ההחלמה משתנה מאדם לאדם, ובחלק
            מהמקרים הדליפה נמשכת זמן רב יותר.
          </p>
          <p className={pClass}>
            תרגול ואימון של שרירי רצפת האגן, באנגלית Pelvic Floor Muscle Training&rlm; ובקיצור
            PFMT&rlm;, הם חלק מקובל מהשיקום לאחר הניתוח. המטרה אינה רק &rdquo;לחזק את רצפת
            האגן&ldquo;, אלא ללמוד להפעיל את המערכת בצורה מדויקת, לתזמן את הכיווץ בזמן מאמץ ולשפר
            כוח, סבולת ושליטה בהתאם לצורך.
          </p>
          <p className={pClass}>
            הראיות מצביעות בעיקר על כך שאימון מתאים עשוי לזרז את החזרה לשליטה בשתן, במיוחד
            בתקופה המוקדמת לאחר הניתוח. לעומת זאת, פחות ברור האם הוא משנה את שיעור הגברים שיהיו
            יבשים בסופו של דבר לאחר שנה.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            העבודה על רצפת האגן אינה מתחילה רק אחרי הניתוח. אפשר ללמוד ולתרגל את הפעלת השרירים
            עוד לפניו, ומחקר אקראי מ-2024 מצא פחות דליפה ושיעור גבוה יותר של גברים ללא פדים
            בקרב מי שהחלו תוכנית מפוקחת חודשיים לפני הניתוח.
            <Ref n={3} />{" "}
            עם זאת, הראיות לגבי היתרון העצמאי של הטיפול הטרום-ניתוחי עדיין מוגבלות ואינן אחידות.
            <Ref n={1} />
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>למה עלולה להופיע בריחת שתן אחרי כריתת ערמונית?</h2>
          <p className={pClass}>מערכת השליטה בשתן בגבר אינה תלויה בשריר יחיד.</p>
          <p className={pClass}>
            לפני הניתוח משתתפים במנגנון הסגירה, בין היתר, צוואר שלפוחית השתן, השופכה הפרוסטטית,
            הסוגר החיצוני של השופכה ומבנים תומכים של רצפת האגן.
          </p>
          <p className={pClass}>
            בכריתה רדיקלית של הערמונית מוסרים הערמונית והשופכה העוברת בתוכה ונוצר חיבור חדש בין
            השלפוחית לשופכה. בעקבות השינוי האנטומי, השליטה בשתן נשענת במידה רבה יותר על הסוגר
            החיצוני ועל המערכת השרירית והתומכת שסביב השופכה.
            <Ref n={5} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            בריחת השתן לאחר הניתוח יכולה להיות קשורה למספר גורמים, בהם:
          </p>
          <ul className={ulClass}>
            <li>ירידה בתפקוד הסוגר של השופכה</li>
            <li>שינוי באורך השופכה התפקודית</li>
            <li>שינוי בתמיכה האנטומית סביב השופכה</li>
            <li>פגיעה עצבית או שינוי בתיאום השרירי</li>
            <li>שינויים בתפקוד שלפוחית השתן עצמה</li>
          </ul>
          <p className={pClass}>
            לכן, &rdquo;חולשה של רצפת האגן&ldquo; אינה הסבר מלא לכל מקרי בריחת השתן לאחר כריתת
            ערמונית.
          </p>

          <h2 className={h2Class}>איזה סוג של הפרעות בשתן יכול להופיע?</h2>
          <p className={pClass}>
            לא כל תסמין לאחר כריתת ערמונית נראה אותו דבר. אצל חלק מהגברים מדובר בעיקר בדליפה
            במאמץ, אצל אחרים בולטת יותר דחיפות, ולעיתים קיימים כמה מרכיבים יחד.
          </p>

          <p className={pClass}>
            <span className="font-semibold">בריחת שתן במאמץ:</span> זהו הסוג האופייני והשכיח ביותר לאחר כריתה
            רדיקלית של הערמונית. הדליפה מופיעה כאשר הלחץ בבטן עולה, למשל בזמן שיעול או עיטוש,
            קימה מכיסא, הליכה או שינוי תנוחה, הרמת משקל ופעילות גופנית.
          </p>

          <p className={pClass}>
            <span className="font-semibold">דחיפות ובריחת שתן מדחיפות:</span> חלק מהגברים חווים צורך פתאומי וחזק
            להשתין, תכיפות ולעיתים דליפה בדרך לשירותים. תסמינים אלה יכולים להיות קשורים לפעילות
            יתר של שלפוחית השתן, באנגלית Overactive Bladder&rlm; ובקיצור OAB&rlm;, או לשינויים
            אחרים בתפקוד השלפוחית לאחר הניתוח.
          </p>
          <p className={pClass}>
            להרחבה על התמונה הזו:{" "}
            <Link
              href="/professional-info/overactive-bladder-men"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שלפוחית רגיזה בגברים (OAB): תסמינים, בירור וטיפול
            </Link>
          </p>

          <p className={pClass}>
            <span className="font-semibold">בריחת שתן מעורבת:</span> אצל חלק מהגברים קיימים יחד גם מרכיב של דליפה
            במאמץ וגם דחיפות או דליפה הקשורה לדחיפות. ההבחנה בין המרכיבים חשובה, משום שהטיפול
            אינו בהכרח זהה.
          </p>

          <p className={pClass}>
            <span className="font-semibold">קושי בהתרוקנות:</span> זרם חלש, צורך ללחוץ כדי להשתין, זרם מקוטע או תחושה
            שהשלפוחית אינה מתרוקנת אינם פשוט &rdquo;עוד סוג של בריחת שתן&ldquo;. תסמינים כאלה
            מצדיקים הערכה רפואית, בין היתר כדי לשלול היצרות באזור החיבור בין השלפוחית לשופכה,
            היצרות של השופכה או הפרעה בתפקוד שריר השלפוחית.
            <Ref n={7} />
          </p>

          <ArticleFigure
            src="/professional-info/rp-urinary-dysfunction-types.webp"
            alt="ארבעה סוגי הפרעות במתן שתן לאחר כריתת ערמונית: דליפה במאמץ, דחיפות ודליפה מדחיפות, דליפה מעורבת וקושי בהתרוקנות"
            caption="לא כל הפרעה במתן שתן לאחר כריתת ערמונית נובעת מאותו מנגנון. הבחנה בין דליפה במאמץ, דחיפות, שילוב ביניהן וקושי בהתרוקנות חשובה לצורך התאמת הבירור והטיפול."
          />

          <h2 className={h2Class}>כמה זמן נמשכת בריחת השתן אחרי הניתוח?</h2>
          <p className={pClass}>
            מיד לאחר הוצאת הקטטר דליפה היא שכיחה מאוד ואינה מעידה שהניתוח או השיקום נכשלו.
          </p>
          <p className={pClass}>
            בחודשים הראשונים מתרחשת בדרך כלל ההתקדמות המשמעותית ביותר, ורבים מהגברים משיגים
            שליטה טובה יותר בשתן במהלך תקופה זו.
          </p>
          <p className={pClass}>
            לפי הנחיות ה-AUA&rlm;, לאחר כריתה רדיקלית יש לצפות לבריחת שתן בטווח הקצר, כאשר אצל
            מרבית הגברים השליטה מתקרבת לרמת הבסיס במהלך השנה הראשונה.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            גם לאחר מספר חודשים עדיין יכול להתרחש שיפור, אבל הקצב אינו זהה אצל כולם. במחקרים
            נמצאו גורמים שונים הקשורים להחלמה איטית יותר, ובהם גיל מבוגר יותר, אורך קצר יותר של
            השופכה הממברנוזית, מאפיינים אנטומיים שונים, מחלות רקע מסוימות, תסמיני שתן שהיו
            קיימים עוד לפני הניתוח וחומרת הדליפה בתקופה שלאחר הניתוח. גם גורמים הקשורים לניתוח
            עצמו יכולים להשפיע.
            <Ref n={5} />
            <Ref n={8} />
          </p>
          <p className={pClass}>
            חשוב לזכור שאין &rdquo;תאריך יעד&ldquo; אחד שבו כל גבר אמור להיות יבש. השוואה בין שני
            מטופלים שעברו אותו ניתוח יכולה להיות מטעה.
          </p>
          <p className={pClass}>
            עם זאת, אם הדליפה משמעותית ואינה מראה מגמת שיפור סביב שישה חודשים, כדאי לחזור להערכה
            אצל האורולוג. כאשר בריחת שתן במאמץ ממשיכה להיות מטרידה למרות טיפול שמרני, אפשר
            במקרים מתאימים לדון בטיפול ניתוחי כבר לאחר שישה חודשים. לאחר שנה, אם הבעיה נמשכת
            ומפריעה, מומלץ לדון באופן מסודר באפשרויות הניתוחיות.
            <Ref n={1} />
          </p>

          <ArticleFigure
            src="/professional-info/rp-recovery-timeline.webp"
            alt="ציר זמן של השיקום סביב כריתת ערמונית: שלושה עד ארבעה שבועות לפני הניתוח, הניתוח והקטטר, לאחר הוצאת הקטטר, ואז אחד עד שלושה, שלושה עד שישה ושישה עד שנים עשר חודשים"
            caption="ההחלמה לאחר כריתת ערמונית היא תהליך ולא נקודת זמן אחת. ניתן ללמוד ולהכיר את רצפת האגן עוד לפני הניתוח, לחזור בהדרגה לאימון לאחר הוצאת הקטטר ולעקוב אחר מגמת השיפור לאורך החודשים שלאחר הניתוח. הקצב משתנה מאדם לאדם."
          />

          <h2 className={h2Class}>פיזיותרפיה של רצפת האגן לפני הניתוח</h2>
          <p className={pClass}>
            אחת האפשרויות היא לפגוש פיזיותרפיסט המתמחה ברצפת האגן עוד לפני הניתוח.
          </p>
          <p className={pClass}>
            ה-AUA&rlm; מציין שניתן להציע PFMT&rlm; לפני כריתה רדיקלית, אך איכות הראיות לגבי
            היתרון העצמאי של טיפול טרום-ניתוחי מוגבלת.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            גם המחקרים אינם אחידים: חלקם מצאו חזרה מוקדמת יותר לשליטה, בעוד שבמחקרים ובסקירות
            אחרות ההבדלים קטנו או נעלמו בהמשך.
            <Ref n={4} />
          </p>
          <p className={pClass}>
            לכן המטרה של המפגש לפני הניתוח אינה להבטיח שלא תהיה דליפה לאחריו, אלא להכין את
            המטופל לתקופת השיקום.
          </p>

          <h3 className={h3Class}>מה אפשר לעשות לפני הניתוח?</h3>
          <ul className={ulClass}>
            <li>ללמוד לזהות את השרירים הרלוונטיים</li>
            <li>לוודא שהכיווץ מתבצע בצורה נכונה</li>
            <li>להבחין בין כיווץ של רצפת האגן לבין כיווץ מיותר של הישבן, הירכיים או הבטן</li>
            <li>לתרגל כיווץ קצר ומהיר לצד כיווץ ממושך יותר</li>
            <li>ללמוד לתאם כיווץ עם נשימה ותנועה</li>
            <li>לתרגל הפעלה מקדימה לפני שיעול, עיטוש, קימה או מאמץ</li>
            <li>להבין מראש כיצד ומתי חוזרים לתרגול לאחר הניתוח</li>
          </ul>
          <p className={pClass}>
            לעיתים נעזרים בבדיקה קלינית, אולטרסאונד או Biofeedback&rlm; כדי לוודא שהמטופל אכן
            מפעיל את השרירים שאליהם התכוון המטפל.
          </p>
          <p className={pClass}>
            היתרון המעשי הוא שניתן ללמוד מיומנות חדשה לפני תקופת ההחלמה מהניתוח, כאשר אין עדיין
            קטטר, דליפה חדשה או מגבלות הקשורות להחלמה.
          </p>

          <h2 className={h2Class}>ומה קורה אחרי הניתוח?</h2>

          <h3 className={h3Class}>בזמן שהקטטר עדיין נמצא</h3>
          <p className={pClass}>הימים הראשונים לאחר הניתוח מיועדים בראש ובראשונה להחלמה.</p>
          <p className={pClass}>
            אין צורך לבצע אימון מאומץ של רצפת האגן בזמן שהקטטר נמצא. בתקופה זו אפשר, בהתאם
            להנחיות הצוות המטפל, לשמור על מודעות לאזור ולהתרכז בניידות, הליכה הדרגתית, נשימה,
            מניעת עצירות והימנעות ממאמצים שאינם מתאימים לשלב ההחלמה.
          </p>
          <p className={pClass}>מועד החזרה לאימון פעיל צריך להתאים להנחיות המנתח.</p>

          <h3 className={h3Class}>לאחר הוצאת הקטטר</h3>
          <p className={pClass}>
            זהו בדרך כלל השלב שבו מתחילים או חוזרים לתוכנית האימון באופן מסודר.
          </p>
          <p className={pClass}>
            ה-AUA&rlm; ממליץ להציע תרגול שרירי רצפת אגן בתקופה המוקדמת לאחר הניתוח, והראיות
            מצביעות על כך שהתרגול עשוי לקצר את הזמן עד להשגת שליטה טובה יותר בשתן.
            <Ref n={1} />
          </p>
          <p className={pClass}>התוכנית יכולה לכלול שילוב של:</p>
          <ul className={ulClass}>
            <li>כיווצים קצרים ומהירים</li>
            <li>כיווצים ממושכים יותר</li>
            <li>תרגול בעמידה ובתנוחות תפקודיות</li>
            <li>תרגול בזמן מעבר מישיבה לעמידה</li>
            <li>הפעלה לפני שיעול, עיטוש והרמת משקל</li>
            <li>התקדמות הדרגתית בהתאם לתפקוד ולכמות הדליפה</li>
          </ul>
          <p className={pClass}>
            אין פרוטוקול אחד של מספר חזרות שמתאים לכל גבר. תוכנית שבה המטופל מבצע מאות כיווצים
            ביום אינה בהכרח טובה יותר מתוכנית קצרה ומדויקת.
          </p>
          <p className={pClass}>
            המטרה אינה רק לכווץ חזק יותר, אלא גם לדעת להפעיל את השרירים בזמן הנכון, למשל לפני
            שיעול, קימה או הרמת משקל.
          </p>

          <h2 className={h2Class}>האם פיזיותרפיה יכולה לעזור?</h2>
          <p className={pClass}>
            מחקרים שונים הגיעו לתוצאות שונות, בין היתר משום שקיימים הבדלים גדולים בין תוכניות
            האימון: מתי הן מתחילות, כיצד מלמדים את הכיווץ, מהי עצימות התרגול, האם יש פיקוח, כיצד
            מוגדרת &rdquo;שליטה בשתן&ldquo; ומה קיבלה קבוצת הביקורת.
          </p>
          <p className={pClass}>
            סקירת Cochrane&rlm; מ-2023 מצאה אי-ודאות משמעותית לגבי גודל ההשפעה של התערבויות
            שמרניות לאחר ניתוח ערמונית, בשל איכות מחקרים משתנה והטרוגניות רבה.
            <Ref n={9} />
          </p>
          <p className={pClass}>
            מצד שני, הנחיות קליניות ומחקרים נוספים מצביעים על כך ש-PFMT&rlm; עשוי לזרז את
            ההחלמה, במיוחד בתקופה המוקדמת.
            <Ref n={1} />
            <Ref n={10} />
          </p>
          <p className={pClass}>
            מחקר אקראי מ-2024, לדוגמה, השווה תוכנית PFMT&rlm; מפוקחת שהחלה חודשיים לפני הניתוח
            ונמשכה לאחריו להדרכה מילולית וחוברת. בקבוצת הפיזיותרפיה נמצאה פחות דליפה במבחן פד
            לאחר שלושה חודשים וכן שיעור גבוה יותר של גברים ללא פדים לאחר שנה. עם זאת, מדובר
            במחקר קטן יחסית, ולכן אין להסיק ממנו לבדו שכל תוכנית מפוקחת תשיג תוצאה דומה.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            <span className="font-bold">השורה התחתונה</span>: אימון מתאים של רצפת האגן עשוי לסייע
            בחזרה מוקדמת יותר לשליטה בשתן לאחר כריתת ערמונית.
          </p>

          <h2 className={h2Class}>מה לגבי Biofeedback, אולטרסאונד וגירוי חשמלי?</h2>
          <p className={pClass}>
            אמצעים אלה יכולים להיות חלק מתהליך הטיפול, אך אינם המטרה בפני עצמם.
          </p>
          <p className={pClass}>
            Biofeedback&rlm; יכול לתת למטופל מידע על פעילות השרירים ולעזור בחלק מהמקרים ללמוד
            כיווץ מדויק יותר. אולטרסאונד יכול לשמש ככלי להערכה ולהדרכה ולאפשר למטופל ולמטפל
            לראות בזמן אמת תנועה של מבנים הקשורים לרצפת האגן.
            <Ref n={11} />
            <Ref n={12} />
          </p>
          <p className={pClass}>
            גם גירוי חשמלי נבדק במחקרים, אך התוצאות אינן אחידות. בחלק מהמחקרים נמצאה תועלת
            אפשרית, בעוד שאחרים לא מצאו יתרון משמעותי כאשר גירוי חשמלי נוסף לטיפול התנהגותי או
            ל-PFMT&rlm;.
            <Ref n={9} />
            <Ref n={13} />
          </p>
          <p className={pClass}>
            נכון להיום, לא ברור שאמצעים אלה משפרים באופן עקבי את התוצאות מעבר ל-PFMT&rlm; איכותי
            בפני עצמו, ולכן הם אינם &rdquo;שלב חובה&ldquo; בשיקום לאחר כריתת ערמונית.
          </p>

          <h2 className={h2Class}>מה כולל מפגש פיזיותרפיה?</h2>
          <p className={pClass}>
            המפגש אינו מסתכם בבדיקת &rdquo;כוח&ldquo; של רצפת האגן. ההערכה מתייחסת גם לאופי
            הדליפה ולתסמיני השתן, ליכולת לכווץ ולהרפות את השרירים, לתזמון שלהם בזמן תנועה ומאמץ
            ולחזרה הדרגתית לפעילות.
          </p>

          <ArticleFigure
            src="/professional-info/rp-physiotherapy-assessment.webp"
            alt="ארבעה מרכיבים במפגש פיזיותרפיה לאחר כריתת ערמונית: הדליפה ותסמיני השתן, תפקוד רצפת האגן, תזמון ותנועה, ותוכנית אישית להמשך"
            caption="הערכת רצפת האגן לאחר כריתת ערמונית יכולה לכלול את מאפייני הדליפה ותסמיני השתן, תפקוד שרירי רצפת האגן, תזמון הכיווץ בזמן תנועה ומאמץ והתאמת תוכנית השיקום לצרכים ולמטרות של המטופל."
          />

          <p className={pClass}>
            בהתאם לצורך ולשיקול קליני, ההערכה וההדרכה יכולות להיעזר גם בבדיקה קלינית,
            באולטרסאונד או ב-Biofeedback&rlm;.
          </p>

          <h2 className={h2Class}>מתי כדאי לפנות שוב לאורולוג?</h2>
          <p className={pClass}>
            לא כל תסמין לאחר הניתוח הוא בעיה שניתן לפתור באמצעות תרגילי רצפת אגן.
          </p>
          <p className={pClass}>
            אם קיימים בעיקר דחיפות ותכיפות, הטיפול יכול לכלול גם התייחסות לתפקוד שלפוחית השתן.
            אם מופיעים זרם חלש, קושי להתחיל להשתין, צורך ללחוץ או תחושה שהשלפוחית אינה מתרוקנת,
            יש מקום לבירור רפואי.
          </p>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              כדאי לפנות לבדיקה במקרה של קושי חדש או הולך ומחמיר במתן שתן, זרם חלש מאוד או צורך
              ללחוץ כדי להתרוקן, תחושה משמעותית של שארית שתן, חוסר יכולת להשתין, דם משמעותי
              בשתן, חום, צריבה או חשד לזיהום, דחיפות קשה או שינוי חד בתסמינים, או דליפה משמעותית
              שאינה מראה מגמת שיפור.
            </p>
          </div>

          <h2 className={h2Class}>ומה אם בריחת השתן נשארת?</h2>
          <p className={pClass}>פיזיותרפיה אינה האפשרות היחידה.</p>
          <p className={pClass}>
            כאשר בריחת שתן במאמץ ממשיכה להיות משמעותית ומפריעה למרות טיפול שמרני, קיימים טיפולים
            אורולוגיים נוספים. בין האפשרויות המרכזיות:
          </p>
          <ul className={ulClass}>
            <li>Male Sling&rlm;, מתלה לגבר</li>
            <li>Artificial Urinary Sphincter&rlm;, סוגר שתן מלאכותי</li>
          </ul>
          <p className={pClass}>
            הבחירה תלויה בין היתר בחומרת הדליפה, טיפולים קודמים, הקרנות, ממצאי הבירור והעדפות
            המטופל.
          </p>
          <p className={pClass}>
            לפי הנחיות ה-AUA&rlm;, ניתן לשקול טיפול ניתוחי כבר לאחר שישה חודשים כאשר הדליפה
            משמעותית ואינה משתפרת. לאחר שנה, כאשר בריחת שתן במאמץ ממשיכה להיות מטרידה למרות
            טיפול שמרני, יש לדון באפשרויות הניתוחיות.
            <Ref n={1} />
          </p>

          <p className={pClass}>
            ואם הקימה בלילה היא חלק מהתמונה:{" "}
            <Link
              href="/professional-info/nocturia-men"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              קימה בלילה להשתין בגברים (Nocturia): גורמים ובירור
            </Link>
          </p>
          <p className={pClass}>
            להרחבה על ההערכה של רצפת האגן אצל גברים:{" "}
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
            heading="רוצה להגיע מוכן יותר לניתוח, או לשפר את השליטה אחריו?"
            intro="אם אתה לקראת כריתה רדיקלית של הערמונית, ניתן ללמוד עוד לפני הניתוח כיצד לזהות ולהפעיל נכון את שרירי רצפת האגן ולהתכונן לתקופת השיקום. ואם כבר עברת את הניתוח ואתה מתמודד עם דליפת שתן, דחיפות או קושי לחזור לשליטה, ניתן לבצע הערכה של התסמינים והתפקוד ולהתאים את השיקום לשלב שבו אתה נמצא."
            whatsappText="היי רועי, קראתי אצלך על שיקום רצפת האגן סביב כריתת ערמונית, ואשמח לבדוק אם הטיפול מתאים לי."
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
              American Urological Association. Incontinence after Prostate Treatment: AUA/SUFU/GURS
              Guideline. 2019; amended 2024.
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Yang JM, Ye H, Long Y, et al. Effect of pelvic floor muscle training on urinary
              incontinence after radical prostatectomy: an umbrella review of meta-analysis and
              systematic review. Clin Rehabil. 2023;37(4):494-515. doi:
              <a
                href="https://doi.org/10.1177/02692155221136046"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/02692155221136046
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Ouchi M, Kitta T, Chiba H, et al. Physiotherapy for continence and muscle function in
              prostatectomy: a randomised controlled trial. BJU Int. 2024;134(3):398-406. doi:
              <a
                href="https://doi.org/10.1111/bju.16369"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1111/bju.16369
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Chang JI, Lam V, Patel MI. Preoperative pelvic floor muscle exercise and
              postprostatectomy incontinence: a systematic review and meta-analysis. Eur Urol.
              2016;69(3):460-467. doi:
              <a
                href="https://doi.org/10.1016/j.eururo.2015.11.004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.eururo.2015.11.004
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Heesakkers J, Farag F, Bauer RM, Sandhu J, De Ridder D, Stenzl A. Pathophysiology and
              contributing factors in postprostatectomy incontinence: a review. Eur Urol.
              2017;71(6):936-944. doi:
              <a
                href="https://doi.org/10.1016/j.eururo.2016.09.031"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.eururo.2016.09.031
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Stafford RE, van den Hoorn W, Coughlin G, Hodges PW. Postprostatectomy incontinence is
              related to pelvic floor displacements observed with trans-perineal ultrasound imaging.
              Neurourol Urodyn. 2018;37(2):658-665. doi:
              <a
                href="https://doi.org/10.1002/nau.23371"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.23371
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Yao HH, Hoe V, Crump RT, et al. Impact of radical prostatectomy on bladder function as
              demonstrated on urodynamics study: a systematic review. Neurourol Urodyn.
              2021;40(2):582-603. doi:
              <a
                href="https://doi.org/10.1002/nau.24606"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.24606
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Barakat B, Hadaschik B, Al-Nader M, Schakaki S. Factors contributing to early recovery
              of urinary continence following radical prostatectomy: a narrative review. J Clin Med.
              2024;13(22):6780. doi:
              <a
                href="https://doi.org/10.3390/jcm13226780"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.3390/jcm13226780
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Johnson EE, Mamoulakis C, Stoniute A, et al. Conservative interventions for managing
              urinary incontinence after prostate surgery. Cochrane Database Syst Rev.
              2023;4(4):CD014799. doi:
              <a
                href="https://doi.org/10.1002/14651858.CD014799.pub2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/14651858.CD014799.pub2
              </a>
              .
            </li>
            <li id="ref-10" className="scroll-mt-24">
              European Association of Urology. EAU Guidelines on the Management of Non-neurogenic
              Male Lower Urinary Tract Symptoms. 2026.
            </li>
            <li id="ref-11" className="scroll-mt-24">
              Yoshida M, Matsunaga A, Igawa Y, et al. May perioperative ultrasound-guided pelvic
              floor muscle training promote early recovery of urinary continence after
              robot-assisted radical prostatectomy? Neurourol Urodyn. 2019;38(1):158-164. doi:
              <a
                href="https://doi.org/10.1002/nau.23811"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.23811
              </a>
              .
            </li>
            <li id="ref-12" className="scroll-mt-24">
              Huaqi Y, Zheng D, Yongkang M, et al. The significance of transrectal ultrasound and
              urologist-dually guided pelvic floor muscle exercise in improving urinary continence
              after radical prostatectomy. Eur J Med Res. 2023;28(1):171. doi:
              <a
                href="https://doi.org/10.1186/s40001-023-01133-3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1186/s40001-023-01133-3
              </a>
              .
            </li>
            <li id="ref-13" className="scroll-mt-24">
              Goode PS, Burgio KL, Johnson TM, et al. Behavioral therapy with or without biofeedback
              and pelvic floor electrical stimulation for persistent postprostatectomy incontinence:
              a randomized controlled trial. JAMA. 2011;305(2):151-159. doi:
              <a
                href="https://doi.org/10.1001/jama.2010.1972"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1001/jama.2010.1972
              </a>
              .
            </li>
          </ol>

          <AuthorBox />
        </div>
      </Container>
    </article>
  );
}
