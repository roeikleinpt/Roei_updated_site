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

const article = getArticle("tennis-elbow-lateral-elbow-pain");

export const metadata: Metadata = {
  title: "מרפק טניס: כאב בצד החיצוני של המרפק — אבחון וטיפול פיזיותרפי",
  description:
    "כאב בצד החיצוני של המרפק מכונה לעיתים קרובות מרפק טניס, אך לא כל כאב באזור נובע מטנדינופתיה. מה מרגישים, כיצד מאבחנים, מתי צריך לחשוב על מקור אחר וכיצד פיזיותרפיה מבוססת העמסה יכולה לסייע.",
  alternates: { canonical: "/professional-info/tennis-elbow-lateral-elbow-pain" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "מרפק טניס: כאב בצד החיצוני של המרפק | רועי קליין פיזיותרפיה",
    description:
      "Lateral Epicondylalgia — מהם המונחים, מי עלול לפתח כאב בצד החיצוני של המרפק, כיצד מאבחנים, אילו מצבים אחרים מחקים מרפק טניס ומה כוללת הפיזיותרפיה.",
    url: "/professional-info/tennis-elbow-lateral-elbow-pain",
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
    q: "האם מרפק טניס הוא באמת דלקת?",
    a: "לא בהכרח. השם ההיסטורי Lateral Epicondylitis מרמז על דלקת, אך במקרים מתמשכים התמונה מורכבת יותר ויכולה לכלול שינויים בגיד, ירידה ביכולת להתמודד עם עומס ושינויים באופן שבו מערכת הכאב מגיבה. לכן המונחים Tendinopathy או Epicondylalgia מתאימים פעמים רבות יותר.",
  },
  {
    q: "האם פיזיותרפיה הוכחה כטיפול יעיל?",
    a: "כן. קיימות ראיות לכך שפיזיותרפיה הכוללת תרגול וטיפול מנואלי יכולה לסייע לחלק מהמטופלים, בעיקר בטווח הקצר. היתרון המרכזי של פיזיותרפיה הוא ביכולת להתאים את התרגול והעומסים לאדם, לעקוב אחר הכוח והתפקוד ולבדוק אם האבחנה אכן מתאימה לטנדינופתיה. פיזיותרפיה אינה מבטיחה החלמה מהירה, אך היא יכולה לספק דרך מסודרת ובטוחה לחזרה לפעילות.",
  },
  {
    q: "האם כדאי להפסיק להשתמש ביד?",
    a: "בדרך כלל אין צורך במנוחה מוחלטת. שימוש רגיל ביד אינו בהכרח גורם נזק לגיד, אך ייתכן שיהיה צורך להפחית זמנית פעולות שמעלות מאוד את הכאב. המטרה היא להתאים את העומס ולא לבטל אותו לחלוטין.",
  },
  {
    q: "האם חבק למרפק יכול לעזור?",
    a: "חבק עשוי להפחית כאב בזמן פעילות אצל חלק מהאנשים, במיוחד בפעולות אחיזה ועבודה ידנית. ההשפעה בדרך כלל זמנית, ולכן הוא יכול להשתלב ככלי עזר אך אינו מחליף בניית כוח והחזרה הדרגתית לעומס.",
  },
];

export default function TennisElbowArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            מרפק טניס: כאב בצד החיצוני של המרפק
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאב בצד החיצוני של המרפק מכונה לעיתים קרובות &rdquo;מרפק טניס&ldquo; או &rdquo;טניס
            אלבו&ldquo;, גם אצל אנשים שמעולם לא שיחקו טניס. הכאב עשוי להופיע בזמן אחיזה, הרמת חפצים, עבודה עם כלי עבודה,
            אימוני כוח או שימוש ממושך ביד.
          </p>
          <p className={pClass}>
            בעבר כונה המצב אפיקונדיליטיס לטרלי, מונח שמשמעותו דלקת. כיום ידוע שברוב המקרים מדובר
            בשינויים ברקמת הגיד ולא בתהליך דלקתי, ולכן מקובל יותר להשתמש במונחים טנדינופתיה או
            Lateral Epicondylalgia&rlm;.
          </p>
          <p className={pClass}>
            חשוב לדעת שלא כל כאב באזור הזה נובע בהכרח מאותה רקמה. לעיתים התמונה מתאימה לטנדינופתיה
            של הגידים המיישרים את שורש כף היד, אך במקרים אחרים ייתכן שמעורבים מבנים נוספים באזור
            המרפק, האמה, מערכת העצבים או הצוואר.
          </p>
          <p className={pClass}>
            אבחון מדויק מאפשר להבין אילו עומסים משפיעים על התסמינים, להתאים את הפיזיותרפיה ולהימנע
            מטיפול בגיד כאשר מקור הכאב נמצא במקום אחר.
          </p>

          <h2 className={h2Class}>בואו נבין מה קורה</h2>
          <p className={pClass}>
            בצד החיצוני של המרפק נמצאת בליטה גרמית הנקראת האפיקונדיל החיצוני. אל האזור הזה מתחברים
            כמה מהשרירים המיישרים את שורש כף היד ואת האצבעות.
          </p>
          <p className={pClass}>
            אחד השרירים המקושרים במיוחד לתמונה הקלינית של מרפק טניס הוא המיישר הקצר של שורש כף היד
            החישורי, Extensor Carpi Radialis Brevis&rlm; או ECRB&rlm;. השריר משתתף בייצוב שורש כף
            היד בזמן אחיזה, הרמה, עבודה ידנית ופעילות ספורטיבית.
          </p>
          <p className={pClass}>
            כאשר הדרישה מהשרירים ומהגידים עולה מעבר ליכולת הנוכחית שלהם להתמודד עם העומס, עשויים
            להתפתח כאב, ירידה בכוח וקושי בפעולות שבעבר בוצעו ללא בעיה. התהליך אינו בהכרח
            &rdquo;דלקת&ldquo; במובן הקלאסי, ולכן המונח הישן Lateral Epicondylitis&rlm; אינו תמיד
            מתאר היטב את המצב.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>מרפק טניס, Epicondylalgia או Tendinopathy&rlm;?</h2>
          <p className={pClass}>המונחים האלה אינם זהים לחלוטין.</p>
          <ul className={ulClass}>
            <li>
              <span className="font-semibold">מרפק טניס</span> הוא השם המוכר והנפוץ לכאב בצד החיצוני
              של המרפק.
            </li>
            <li>
              <span className="font-semibold">Lateral Epicondylalgia&rlm;</span> מתארת כאב באזור
              האפיקונדיל החיצוני. זהו מונח תיאורי שאינו קובע מראש איזה מבנה אחראי לכאב.
            </li>
            <li>
              <span className="font-semibold">Lateral Elbow Tendinopathy&rlm;</span> מתארת מצב שבו
              הסיפור הקליני והבדיקה מתאימים למעורבות של מוצא הגידים המיישרים.
            </li>
          </ul>
          <p className={pClass}>
            ההבחנה חשובה משום שלעיתים מאבחנים כמעט כל כאב בצד החיצוני של המרפק כ&rdquo;מרפק
            טניס&ldquo;, גם כאשר לא ברור שהגיד הוא המבנה המרכזי המעורב. למעשה, במחקר רב מרכזי שכלל
            170 מטופלים שהופנו למרפאות אורתופדיות בשל כאב בצד החיצוני של המרפק,{" "}
            <span className="font-bold">
              46.5 אחוזים קיבלו לבסוף אבחנה אחרת מטנדינופתיה של הצד החיצוני
            </span>
            . אין להסיק מכך שכמחצית מכל המקרים בקהילה מאובחנים באופן שגוי, אך המחקר מדגים היטב שלא
            כל כאב חיצוני במרפק הוא טנדינופתיה.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            כאשר ידוע בעיקר היכן כואב, אך מקור התסמינים עדיין אינו ברור, המונח Epicondylalgia&rlm;
            עשוי להיות מדויק וזהיר יותר. לאחר בדיקה ניתן להעריך אם התמונה אכן מתאימה לטנדינופתיה או
            שיש צורך לבדוק אפשרויות אחרות.
          </p>

          <h2 className={h2Class}>מי עלול לפתח כאב בצד החיצוני של המרפק?</h2>
          <p className={pClass}>
            למרות השם, מרבית המטופלים אינם שחקני טניס. התסמינים יכולים להופיע אצל אנשים המבצעים
            פעולות חוזרות או מאומצות של אחיזה, סיבוב האמה והפעלת שורש כף היד.
          </p>

          <ArticleFigure
            src="/professional-info/tennis-elbow-common-activities.webp"
            alt="אינפוגרפיקה של ארבע פעילויות שכיחות המעוררות כאב בצד החיצוני של המרפק: אחיזה והרמה, עבודה ידנית עם כלי עבודה, אימון כוח וענפי מחבט"
            caption="פעילויות שכיחות המעוררות כאב בצד החיצוני של המרפק. פעולות המשלבות אחיזה חזקה, יישור של שורש כף היד או חזרה ממושכת על אותה תנועה עלולות להעמיס על האזור ולעורר תסמינים."
          />

          <p className={pClass}>
            הפעילויות המוצגות באיור הן דוגמאות בלבד. כאב יכול להופיע גם בטיפוס, חתירה, עבודה מול
            מחשב, שימוש ממושך בעכבר או כל פעילות אחרת הכוללת אחיזה חזקה או הפעלה חוזרת של שורש כף
            היד. לעיתים אין פעולה אחת ברורה שגרמה לכאב. התסמינים יכולים להתפתח לאחר שילוב של עלייה
            בעומס, התאוששות לא מספקת, שינוי בציוד או תקופה שבה היד נדרשה לבצע יותר מהרגיל.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>מה מרגישים?</h2>
          <p className={pClass}>
            התמונה האופיינית כוללת כאב ממוקד בצד החיצוני של המרפק, שלעיתים ממשיך מעט לאורך החלק
            העליון של האמה. הכאב עשוי להתגבר בפעולות כמו אחיזה חזקה, לחיצת יד, הרמת חפצים, פתיחת
            צנצנת, סחיטת מגבת או שימוש ממושך בעכבר. אצל מתאמנים וספורטאים הוא עשוי להופיע גם בהרמת
            משקולות, בתרגילי משיכה או בחבטות מחבט.
          </p>
          <p className={pClass}>
            לעיתים מופיעה גם תחושה של חולשת אחיזה. ברוב המקרים זו אינה חולשה הנובעת מנזק עצבי, אלא
            ירידה ביכולת להפעיל כוח כאשר הפעולה מכאיבה. התסמינים נוטים להתפתח בהדרגה, אך יכולים גם
            להופיע לאחר עלייה חדה בעומס. נעילה של המרפק, נפיחות משמעותית, טראומה ברורה או הופעה
            פתאומית מאוד פחות אופייניות לטנדינופתיה ומצריכות מחשבה על אבחנות אחרות.
            <Ref n={1} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>כיצד מאבחנים?</h2>
          <p className={pClass}>
            האבחון מתחיל בשיחה על מיקום הכאב, אופן הופעתו, הפעולות המחמירות אותו והשינויים שחלו
            לאחרונה בעבודה, באימון או בפעילות היומיומית.
          </p>

          <ArticleFigure
            src="/professional-info/tennis-elbow-assessment.webp"
            alt="אינפוגרפיקה של ארבעת שלבי האבחון בכאב בצד החיצוני של המרפק: סיפור הכאב, בדיקה מקומית, בדיקות נוספות והדמיה רק כשצריך"
            caption="כיצד מאבחנים כאב בצד החיצוני של המרפק? האבחנה מבוססת בעיקר על הסיפור הקליני, מיקום הכאב, הבדיקה המקומית ובדיקות נוספות לפי הצורך. הדמיה נשקלת בעיקר כאשר התמונה אינה אופיינית או כאשר נדרש בירור נוסף."
          />

          <p className={pClass}>
            במסגרת הבדיקה בוחנים בדרך כלל את מיקום הרגישות, את הכאב בזמן הפעלת שורש כף היד, את כוח
            האחיזה, את תנועת המרפק, האמה ושורש כף היד ואת השפעתן של פעולות שמחמירות את התסמינים.
            כאשר התמונה אינה חד משמעית, ניתן לבדוק גם את הצוואר, את מערכת העצבים ואת מבנים נוספים
            סביב המרפק.
          </p>
          <p className={pClass}>
            אין בדיקה יחידה שמוכיחה לבדה שהגיד הוא מקור הכאב. האבחנה מתקבלת משילוב של הסיפור, מיקום
            התסמינים ומספר ממצאים התואמים זה לזה.
            <Ref n={1} />
          </p>

          <h2 className={h2Class}>האם כל כאב בצד החיצוני הוא מרפק טניס?</h2>
          <p className={pClass}>לא.</p>
          <p className={pClass}>
            מצבים אחרים שעשויים לגרום לכאב באזור כוללים גירוי של העצב הרדיאלי, כאב שמקורו במפרק
            המרפק, פגיעה ברצועות, חוסר יציבות, שינויים סחוסיים, פציעה שרירית וכאב המושפע מהצוואר.
          </p>
          <p className={pClass}>
            כאב שממוקם כמה סנטימטרים מתחת לאפיקונדיל, לאורך החלק העליון של האמה, עשוי לעורר חשד
            למעורבות של העצב הרדיאלי או התעלה הרדיאלית. גם מצב זה אינו נקבע לפי נקודה אחת כואבת
            בלבד, ויש לבחון את התמונה הקלינית המלאה.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              סימנים שמצדיקים בירור רחב יותר כוללים נעילה או תחושת תפיסה בתוך המרפק, נפיחות ברורה,
              תחושת חוסר יציבות, הופעת הכאב לאחר טראומה משמעותית, נימול או שינוי בתחושה וחולשה
              שאינה מוסברת רק על ידי כאב. גם כאב שמושפע באופן ברור מתנועת הצוואר, או חוסר התאמה בין
              מיקום התסמינים לבין הבדיקות המקובלות לטנדינופתיה, עשויים להצביע על צורך לבדוק מקור
              אחר לכאב. ההכרה באפשרויות האלה חשובה במיוחד כאשר הטיפול המקובל ל&rdquo;מרפק
              טניס&ldquo; אינו מוביל לשיפור.
              <Ref n={1} />
              <Ref n={3} />
            </p>
          </div>

          <h2 className={h2Class}>האם הכאב יכול להגיע מהצוואר?</h2>
          <p className={pClass}>כן, אך לא כל כאב במרפק מגיע מהצוואר.</p>
          <p className={pClass}>
            כאב שמקורו בצוואר או בגירוי של שורש עצב עשוי להתבטא לאורך הכתף, הזרוע, המרפק והאמה.
            לעיתים קיימים במקביל גם כאב מקומי במרפק וגם רגישות של מערכת העצבים.
          </p>
          <p className={pClass}>
            ממצאים כמו כאב צוואר, הקרנה לאורך היד, נימול, שינוי ברפלקסים או חולשה במספר קבוצות
            שרירים יכולים לכוון לבדיקה נוירולוגית רחבה יותר. לעומת זאת, כאב מקומי המופיע בעיקר
            באחיזה ובהפעלת מיישרי שורש כף היד מתאים יותר לבעיה מקומית, אם כי אין להסתמך על סימן
            יחיד.
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/cervicogenic-headache"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב ראש ממקור צווארי
            </Link>
            .
          </p>

          <h2 className={h2Class}>כיצד פיזיותרפיה יכולה לסייע?</h2>
          <p className={pClass}>
            פיזיותרפיה אינה מבוססת על &rdquo;שחרור דלקת&ldquo; או על טיפול פסיבי בלבד. המטרה היא
            להבין אילו עומסים משפיעים על הכאב, לשמור ככל האפשר על פעילות ולבנות מחדש את יכולת היד
            להתמודד עם אחיזה, הרמה, עבודה וספורט.
          </p>

          <ArticleFigure
            src="/professional-info/tennis-elbow-physiotherapy.webp"
            alt="אינפוגרפיקה של ארבעת שלבי הפיזיותרפיה במרפק טניס: התאמת עומס, חיזוק הדרגתי, תרגול פעולה רלוונטית וחזרה לעבודה ולספורט"
            caption="תהליך הפיזיותרפיה במרפק טניס. הטיפול מתקדם מהתאמת הפעילות ובניית כוח אל תרגול המשימות הרלוונטיות וחזרה הדרגתית לעבודה או לספורט. המעבר בין השלבים נקבע לפי הכאב, הכוח והתפקוד ולא לפי מספר הימים שחלפו."
          />

          <h3 className={h3Class}>התאמת עומסים</h3>
          <p className={pClass}>
            בתחילת התהליך מתאימים את עוצמת האחיזה, המשקל, מספר החזרות ומשך הפעילות. המטרה אינה
            להפסיק להשתמש ביד, אלא למצוא רמת עומס שניתן לבצע בלי לגרום להחמרה משמעותית ומתמשכת.
          </p>

          <h3 className={h3Class}>חיזוק הדרגתי</h3>
          <p className={pClass}>
            בהמשך משלבים חיזוק הדרגתי של שורש כף היד, האמה והאחיזה, ולעיתים גם של הכתף והשכמה. אין
            תרגיל יחיד שמתאים לכולם; החשיבות היא בהתאמת העומס ובהעלאתו לפי התגובה.
          </p>

          <h3 className={h3Class}>תרגול הפעולה הרלוונטית</h3>
          <p className={pClass}>
            לאחר בניית יכולת בסיסית משלבים בהדרגה את הפעולות שהמטופל צריך לבצע בעבודה, באימון או
            בספורט.
          </p>

          <h3 className={h3Class}>טיפול מנואלי ואמצעים נוספים</h3>
          <p className={pClass}>
            טיפול מנואלי יכול להפחית זמנית כאב ולאפשר תנועה או תרגול נוחים יותר אצל חלק מהמטופלים.
            ניתן לשקול גם חבק למרפק או סד לשורש כף היד במצבים מסוימים, אך אלה משמשים כאמצעים
            משלימים ולא כתחליף לשיקום פעיל.
            <Ref n={1} />
            <Ref n={4} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>כמה זמן לוקח להשתפר?</h2>
          <p className={pClass}>
            מהלך ההחלמה משתנה מאוד. אצל חלק מהאנשים מדובר בתקופה קצרה יחסית, ואצל אחרים התסמינים
            עשויים להימשך חודשים או לחזור בתקופות של עומס.
          </p>
          <p className={pClass}>
            בסקירה קלינית של New England Journal of Medicine&rlm; צוין{" "}
            <span className="font-bold">
              שמקרים רבים משתפרים בתוך שישה עד שנים עשר חודשים, גם ללא טיפול מסוים
            </span>
            . עם זאת, אין משמעות הדבר שצריך פשוט להמתין כאשר הכאב מגביל עבודה, שינה, אימון או תפקוד
            יומיומי.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            השיפור אינו תמיד ליניארי. יכולות להיות עליות וירידות בהתאם לעומס, לשינה, להתאוששות
            ולמידת הרגישות של האזור.
          </p>

          <h2 className={h2Class}>מתי אפשר לחזור לאימון או לספורט?</h2>
          <p className={pClass}>
            לא חייבים לחכות להיעלמות מוחלטת של כל תחושה לפני שמתחילים להעמיס, אך החזרה צריכה להיות
            הדרגתית.
          </p>
          <p className={pClass}>רצוי לבחון:</p>
          <ul className={ulClass}>
            <li>האם ניתן לאחוז ולהרים בעומס סביר</li>
            <li>האם הכוח משתפר</li>
            <li>האם ניתן לבצע את התנועה הנדרשת בלי שינוי משמעותי בטכניקה</li>
            <li>האם הכאב נשאר ברמה נסבלת</li>
            <li>כיצד המרפק מגיב בשעות וביום שלאחר הפעילות</li>
            <li>האם ניתן להשלים אימון מדורג לפני חזרה מלאה</li>
          </ul>
          <p className={pClass}>
            בענפי מחבט או זריקה ניתן להתחיל בנפח ובעוצמה נמוכים יותר ולהעלות אותם בהדרגה. גם התאמת
            ידית, אחיזה, טכניקה או נפח האימונים עשויה להיות רלוונטית.
          </p>

          <h2 className={h2Class}>לסיכום</h2>
          <p className={pClass}>
            &rdquo;מרפק טניס&ldquo; הוא שם מוכר לכאב בצד החיצוני של המרפק, אך לא כל כאב באזור זה
            נובע בהכרח מטנדינופתיה. המונח Lateral Epicondylalgia&rlm; מתאים כאשר ידוע היכן כואב אך
            המבנה המעורב עדיין אינו ברור. כאשר הסיפור והבדיקה מתאימים למעורבות הגידים המיישרים,
            ניתן להשתמש במונח Lateral Elbow Tendinopathy&rlm;.
          </p>
          <p className={pClass}>
            ברוב המקרים הטיפול אינו ניתוחי. פיזיותרפיה יכולה לסייע בהתאמת העומס, בבניית כוח ובהחזרה
            הדרגתית לעבודה ולספורט, תוך בחינה מתמשכת של מקור התסמינים והתגובה לטיפול.
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/golfers-elbow-medial-elbow-pain"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              מרפק גולף: כאב בצד הפנימי של המרפק
            </Link>
            .
          </p>

          <ArticleCta
            intro="כאב בצד החיצוני של המרפק שמפריע לאחיזה, לעבודה או לאימון? הערכה מסודרת יכולה לברר מה מקור התסמינים ולכוון את הטיפול ואת החזרה לפעילות."
            whatsappText="היי רועי, קראתי אצלך הסבר על מרפק טניס, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Lucado AM, Day JM, Vincent JI, et al. Lateral Elbow Pain and Muscle Function
              Impairments. J Orthop Sports Phys Ther. 2022;52(12):CPG1-CPG111. doi:
              <a
                href="https://doi.org/10.2519/jospt.2022.0302"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.2519/jospt.2022.0302
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Bateman M, Evans JP, Vuvan V, et al. Development of a Core Outcome Set for Lateral
              Elbow Tendinopathy (COS-LET) Using Best Available Evidence and an International
              Consensus Process. Br J Sports Med. 2022;56(12):657-666. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2021-105044"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2021-105044
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Zwerus EL, Keijsers R, Colaris JW, et al. Clinical Diagnosis of Lateral-Sided Elbow
              Pain: Predictors for Recognizing a Diagnosis Other Than Tennis Elbow. J Shoulder Elbow
              Surg. 2026;35(5):1303-1308. doi:
              <a
                href="https://doi.org/10.1016/j.jse.2025.10.006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jse.2025.10.006
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Wallis JA, Bourne AM, Jessup RL, et al. Manual Therapy and Exercise for Lateral Elbow
              Pain. Cochrane Database Syst Rev. 2024;5(5):CD013042. doi:
              <a
                href="https://doi.org/10.1002/14651858.CD013042.pub2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/14651858.CD013042.pub2
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Coombes BK, Bisset L, Brooks P, Khan A, Vicenzino B. Effect of Corticosteroid
              Injection, Physiotherapy, or Both on Clinical Outcomes in Patients With Unilateral
              Lateral Epicondylalgia: A Randomized Controlled Trial. JAMA. 2013;309(5):461-469. doi:
              <a
                href="https://doi.org/10.1001/jama.2013.129"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1001/jama.2013.129
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Wolf JM. Lateral Epicondylitis. N Engl J Med. 2023;388(25):2371-2377. doi:
              <a
                href="https://doi.org/10.1056/NEJMcp2216734"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1056/NEJMcp2216734
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
