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

const article = getArticle("stress-fractures");

export const metadata: Metadata = {
  title: "שברי מאמץ: אבחון, שיקום וחזרה לפעילות",
  description:
    "שבר מאמץ (פציעת עומס בעצם) נוצר כשהעומס על העצם גדול מיכולת ההתאוששות שלה. מה מאפיין אותו, מי בסיכון מוגבר, כיצד מאבחנים, וכיצד פיזיותרפיה מלווה חזרה בטוחה לפעילות.",
  alternates: { canonical: "/professional-info/stress-fractures" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "שברי מאמץ: אבחון, שיקום וחזרה לפעילות | רועי קליין פיזיותרפיה",
    description:
      "מהו שבר מאמץ, מי נמצא בסיכון מוגבר, כיצד מאבחנים, ומה תפקיד הפיזיותרפיה בשיקום ובחזרה הדרגתית לפעילות ולספורט.",
    url: "/professional-info/stress-fractures",
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
    q: "האם אפשר להמשיך להתאמן עם שבר מאמץ?",
    a: "לא מומלץ להמשיך בפעילות שמפיקה כאב במקום הפציעה. עם זאת, לעיתים ניתן לשמור על הכושר באמצעות פעילות חלופית שאינה מכאיבה ואינה מסכנת את העצם. ההחלטה תלויה במיקום ובחומרת הפגיעה.",
  },
  {
    q: "האם צילום תקין שולל שבר מאמץ?",
    a: "תלוי בסוג הצילום ובשבר המשוער. כאשר יש חשד לשבר מאמץ בשוקה, לרוב לא יהיה ממצא בצילום רנטגן. מנגד, כאשר יש חשש לשבר מאמץ בצוואר הירך, אנו מצפים לממצאים במיפוי עצמות.",
  },
  {
    q: "האם “שין ספלינט” יכול להוביל לשבר מאמץ?",
    a: "לא. שין ספלינט (Medial Tibial Stress Syndrome) ושבר מאמץ בשוקה נחשבים לשתי אבחנות נפרדות, עם מנגנון פגיעה ותמונה קלינית שונים. אין עדות טובה ש-MTSS מתפתח מעצמו לשבר מאמץ כאשר הוא מטופל כראוי. עם זאת, שתיהן פציעות עומס בשוקה שחולקות גורמי סיכון דומים, בעיקר שימוש יתר או עומס שאינו מותאם ליכולת ולזמן ההתאוששות. מכיוון שהטיפול נבדל, חשוב להבחין ביניהן בבדיקה.",
  },
];

export default function StressFracturesArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            שברי מאמץ: אבחון, שיקום וחזרה לפעילות
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            שברי מאמץ מזוהים בדרך כלל עם רצים, חיילים וספורטאים, אך הם יכולים להופיע אצל כל אדם
            כאשר העומס המופעל על העצם גדול מהיכולת שלה להסתגל ולהתאושש. לעיתים התהליך מתחיל בכאב
            מקומי ללא קו שבר נראה, ואם העומס נמשך הוא עלול להתקדם לפגיעה משמעותית יותר ואף לשבר
            מלא.
          </p>
          <p className={pClass}>
            זיהוי מוקדם חשוב לא רק כדי להפחית את משך ההיעדרות מפעילות, אלא גם כדי לנסות למנוע
            הדרדרות בחומרת השבר ולהתוות תוכנית שיקום.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>מהו שבר מאמץ?</h2>
          <p className={pClass}>
            המונח הרחב יותר הוא פציעת עומס בעצם (Bone Stress Injury&rlm;). מדובר ברצף של שינויים
            הנוצרים כאשר עומסים חוזרים גורמים לנזק מיקרוסקופי בקצב מהיר יותר מהקצב שבו העצם
            מסוגלת לתקן אותו. בשלבים מוקדמים עשויה להופיע תגובת עומס בעצם, ללא ממצאים בצילום.
          </p>
          <p className={pClass}>
            שבר מאמץ מתאר פגיעה מתקדמת יותר, שבה עשויים להופיע שינויים מבניים או קו שבר בבדיקת
            הדמיה. ללא התאמת העומס, הפגיעה עלולה להתקדם לשבר מלא.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>נהוג להבחין בין שני מנגנונים:</p>
          <p className={pClass}>
            <span className="font-bold">שבר עייפות</span> נוצר כאשר עומסים חוזרים פועלים על עצם
            שמבנהּ תקין בדרך כלל. זהו המנגנון הנפוץ אצל ספורטאים, רקדנים וחיילים, במיוחד בתקופות של עלייה חדה בעומס כמו תחילת טירונות, מסעות ומסע אלונקות.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            <span className="font-bold">שבר אי־ספיקה</span> נוצר כאשר עומס רגיל יחסית פועל על עצם
            שחוזקה או איכותה ירודים, למשל בגלל אוסטאופורוזיס, מחלה או טיפול רפואי מסוים.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>כיצד הפציעה מתפתחת?</h2>
          <p className={pClass}>
            עצם היא רקמה חיה שמגיבה לעומס. פעילות גופנית מספקת יכולה לחזק אותה, אך לאחר עלייה
            בעומס נדרש זמן להסתגלות ולבנייה מחדש. כאשר מספר מחזורי העומס, עוצמתם או תדירותם גדלים
            מהר מדי, נוצר נזק מיקרוסקופי.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            לכן הפציעה אינה נוצרת בדרך כלל מאימון יחיד, אלא מהיחס בין:
          </p>
          <ul className={ulClass}>
            <li>העומס שהופעל</li>
            <li>זמן ההתאוששות בין האימונים</li>
            <li>זמינות האנרגיה והמצב התזונתי</li>
            <li>בריאות העצם והמצב ההורמונלי</li>
            <li>היסטוריית האימונים והפציעות</li>
          </ul>

          <h2 className={h2Class}>היכן שברי מאמץ מופיעים בדרך כלל?</h2>
          <p className={pClass}>
            מרבית פציעות העומס אצל ספורטאים מופיעות בגפיים התחתונות, ובעיקר בשוקה, בעצמות המסרק
            בכף הרגל, בשוקית ובכף הרגל. עם זאת, דפוס הפציעה משתנה בהתאם לענף הספורט ולעומס
            האופייני לו. חשוב לציין כי גם בירך ובאגן יכולים להתפתח שברי מאמץ.
          </p>
          <p className={pClass}>
            במחקר בקרב ספורטאי תיכון בארצות הברית,{" "}
            <span className="font-bold">
              כ־40% משברי המאמץ הופיעו בשוק, כ־35% בכף הרגל וכ־15% בגב התחתון או באגן
            </span>
            .<Ref n={6} />{" "}בקרב ספורטאי מכללות במחקר מוקדם יותר,{" "}
            <span className="font-bold">
              עצמות המסרק היוו 37.9% מהמקרים, השוקה 21.9% והגב התחתון, עמוד השדרה המותני או האגן
              12.1%
            </span>
            .<Ref n={5} />
          </p>
          <p className={pClass}>
            בענפי ריצה וקפיצה נפוצות בעיקר פציעות בגפיים התחתונות. לעומת זאת, בענפים כמו חתירה,
            שחייה, קפיצה למים וחלק מענפי ההטלה עשויות להופיע גם פציעות באגן, בצלעות או בעמוד
            השדרה.
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>מי נמצא בסיכון מוגבר?</h2>
          <p className={pClass}>
            שברי מאמץ יכולים להופיע גם אצל מתאמנים חדשים וגם אצל ספורטאים מנוסים. לעיתים הם
            מופיעים לאחר שינוי שנראה קטן יחסית, למשל תוספת של אימון שבועי, מעבר למשטח אחר, חזרה
            מהפסקה או שילוב פתאומי של ריצה מהירה ועליות.
          </p>

          <ArticleFigure
            src="/professional-info/stress-fracture-risk-factors.webp"
            alt="אינפוגרפיקה בשישה חלקים של גורמי סיכון לשבר מאמץ: עומס אימונים, התאוששות לא מספקת, תזונה וזמינות אנרגיה, בריאות העצם והמערכת ההורמונלית, היסטוריה ויכולת גופנית, ואוכלוסיות בסיכון גבוה יותר"
            caption="גורמים ואוכלוסיות הקשורים לסיכון מוגבר לפציעת עומס בעצם. נוכחות של גורם סיכון אחד אינה אומרת בהכרח שתתפתח פציעה, והערכת הסיכון מתבססת על התמונה הכוללת [1,2,10,11]."
          />

          <p className={pClass}>
            שבר מאמץ קודם הוא גורם סיכון משמעותי להישנות. לכן לאחר פציעה חשוב לא רק לאפשר לעצם
            להחלים, אלא גם לבחון את התקדמות האימונים, ההתאוששות, זמינות האנרגיה וגורמים רפואיים או
            הורמונליים רלוונטיים.
            <Ref n={1} />
            <Ref n={10} />
            <Ref n={11} />
          </p>

          <h2 className={h2Class}>האם שברי מאמץ שכיחים יותר אצל נשים?</h2>
          <p className={pClass}>
            במחקרים רבים שיעור הפציעות גבוה יותר אצל נשים, אך המין כשלעצמו אינו מסביר את כל
            ההבדל.
            <Ref n={8} />
          </p>
          <p className={pClass}>
            במחקר ספורטאי מכללות בענפים שבהם השתתפו נשים וגברים,{" "}
            <span className="font-bold">
              שיעור שברי המאמץ אצל נשים היה מעט יותר מכפול מזה שנמצא אצל גברים
            </span>
            .<Ref n={5} />{" "}בקרב ספורטאי תיכון,{" "}
            <span className="font-bold">השיעור בקרב נערות היה גבוה פי 1.75 מזה שבקרב נערים</span>.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            סקירה שכללה אוכלוסיות ספורטיביות וצבאיות העריכה שכיחות של{" "}
            <span className="font-bold">כ־9.7% אצל ספורטאיות לעומת 6.5% אצל ספורטאים</span>, וכ־
            <span className="font-bold">9.2% אצל נשים באוכלוסיות צבאיות לעומת כ־3% אצל גברים</span>
            . מדובר במחקרים הטרוגניים מתקופות וממסגרות שונות, ולכן המספרים הם אומדן ולא שיעור אחיד
            שמתאים לכל אוכלוסייה.
            <Ref n={7} />
          </p>

          <h2 className={h2Class}>מהם התסמינים האפשריים?</h2>
          <p className={pClass}>
            התסמין האופייני הוא כאב מקומי שמופיע במהלך פעילות נושאת משקל או פעילות חוזרנית. בתחילת
            התהליך הכאב עשוי להופיע רק לקראת סוף האימון ולהיעלם במנוחה. ככל שהפציעה מתקדמת, הוא
            עשוי להתחיל מוקדם יותר, להופיע בהליכה ולעיתים גם במנוחה.
            <Ref n={2} />
          </p>

          <ArticleFigure
            src="/professional-info/stress-fracture-signs.webp"
            alt="אינפוגרפיקה בשישה חלקים של תסמינים אפשריים בשבר מאמץ: כאב מקומי בזמן פעילות, כאב שמופיע מוקדם יותר, כאב גם בהליכה או במנוחה, רגישות ממוקדת מעל העצם, כאב בקפיצה או בהעברת משקל, ולעיתים נפיחות או קשר לשינוי עומס"
            caption="תסמינים שעשויים להופיע בפציעת עומס בעצם. לא כל אדם יחווה את כולם, וחומרת הכאב אינה משקפת תמיד במדויק את דרגת הפגיעה [2]."
          />

          <p className={pClass}>
            רגישות ממוקדת מעל העצם וכאב שחוזר בעקביות תחת עומס מעלים את רמת החשד, אך בדיקה גופנית
            לבדה אינה יכולה לאשר או לשלול פציעת עומס בעצם. כאשר הסיפור והבדיקה מתאימים, יש לשקול
            הערכה רפואית ולעיתים גם הדמיה.
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>שברי מאמץ בסיכון נמוך ובסיכון גבוה</h2>
          <p className={pClass}>
            לא כל שבר מאמץ מתנהג באותה צורה. הסיווג לסיכון נמוך או גבוה מתייחס למיקום הפגיעה,
            לכוחות הפועלים עליה, לאספקת הדם ולסיכון להתקדמות לשבר מלא או לאיחוי לקוי.
          </p>
          <p className={pClass}>
            פציעות בסיכון נמוך, כמו בחלק האחורי־פנימי של גוף השוקה או בשוקית, מחלימות בדרך כלל
            היטב באמצעות התאמת עומס והתקדמות הדרגתית.
          </p>
          <p className={pClass}>
            מיקומים בסיכון גבוה כוללים בין היתר את צוואר הירך, עצם הסירה בכף הרגל, החלק הקדמי של
            השוקה ובסיס עצם המסרק החמישית. פציעות אלה מחייבות מעקב הדוק יותר ולעיתים הגבלת נשיאת
            משקל, קיבוע או טיפול ניתוחי.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={9} />
          </p>
          <p className={pClass}>
            חשוב במיוחד להבחין בין אזורים שונים באותה עצם: לדוגמה, חלק מהפציעות בשוקה נחשבות
            בסיכון נמוך, בעוד שפגיעה בקליפה הקדמית שלה נחשבת בסיכון גבוה.
            <Ref n={2} />
          </p>

          <h2 className={h2Class}>כיצד מאבחנים שבר מאמץ?</h2>
          <p className={pClass}>
            ההערכה מתחילה בשיחה על אופי הכאב, השינויים האחרונים באימונים, היסטוריית פציעות,
            תזונה, התאוששות ומצב רפואי. בבדיקה מעריכים את מיקום הרגישות, ההליכה, טווחי התנועה, כוח
            השרירים ותגובה לעומס, בהתאם למיקום ולרמת החשד.
          </p>
          <p className={pClass}>
            כאשר הכאב ממוקם בשוק ומופיע בעיקר בזמן מאמץ, יש לשקול גם אבחנות אחרות מאותה קבוצה.
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/exercise-induced-leg-pain"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              כאב בשוק במאמץ
            </Link>{" "}
            ·{" "}
            <Link
              href="/professional-info/medial-tibial-stress-syndrome"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              תסמונת עומס השוקה הפנימית
            </Link>
            .
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 border-r-4 border-r-teal-600 bg-slate-50 p-6">
            <p className="text-sm font-bold text-teal-700">מהניסיון האישי</p>
            <p className="mt-2 leading-8 text-black">
              כפיזיותרפיסט צבאי בדקתי מאות חיילים וחיילות עם חשד לשבר מאמץ, מהאגן ועד עצמות כף
              הרגל. סדרת בדיקות מסודרת ומותאמת לכל אזור, המגובה בספרות, מסייעת לחדד את רמת החשד
              ומאפשרת לתת ייעוץ מדויק יותר על המשך הטיפול או בירור.
            </p>
          </div>

          <h2 className={h2Class}>כיצד פיזיותרפיה עשויה לסייע?</h2>
          <p className={pClass}>
            תפקיד הפיזיותרפיה אינו להאיץ בכוח את איחוי העצם, אלא ליצור תנאים שבהם היא יכולה
            להחלים, לשמור ככל האפשר על הכושר ולבנות מחדש את יכולת העומס באופן מבוקר.
          </p>

          <h3 className={h3Class}>התאמת העומס</h3>
          <p className={pClass}>
            בשלב הראשון מצמצמים את הפעילויות שמייצרות כאב מקומי. כאשר גם הליכה כואבת, ייתכן צורך
            זמני בקביים, במגף או באמצעי אחר להפחתת העומס, בהתאם למיקום הפגיעה ולהנחיה רפואית.
          </p>
          <p className={pClass}>
            המטרה אינה מנוחה מוחלטת. פעילות שאינה מכאיבה ואינה מסכנת את מקום הפציעה יכולה לעזור
            לשמור על הכושר ועל תחושת המסוגלות.
          </p>

          <h3 className={h3Class}>שמירה על הכושר</h3>
          <p className={pClass}>
            בהתאם למיקום הפציעה ניתן לשלב רכיבה, שחייה, פעילות במים או מכשיר אליפטי. הבחירה תלויה
            בתגובה של האזור ולא רק בשאלה אם הפעילות מוגדרת כ״ללא אימפקט״.
          </p>
          <p className={pClass}>
            ניתן להמשיך גם בתרגילי כוח שאינם מעמיסים באופן מזיק על העצם הפגועה, תוך שמירה על שאר
            חלקי הגוף.
          </p>

          <h3 className={h3Class}>חיזוק והכנה לעומס</h3>
          <p className={pClass}>
            בהמשך ניתן לעבוד על כוח וסבולת של השרירים הרלוונטיים, על שליטה בתנועה ועל היכולת לספוג
            ולייצר כוח. התרגול עשוי לכלול עבודה על השוק, הירך, האגן, כף הרגל או הגו, בהתאם למיקום
            הפציעה ולדרישות הפעילות.
          </p>
          <p className={pClass}>
            לא כל הבדל בתנועה או בטכניקת הריצה הוא בהכרח גורם לפציעה. ההתערבות מתמקדת בממצאים
            שנראים רלוונטיים לאדם המסוים ולא בניסיון להגיע לתנועה ״מושלמת״.
          </p>

          <h3 className={h3Class}>חזרה הדרגתית לפעילות ולספורט</h3>
          <p className={pClass}>
            לאחר שהפעילות היומיומית וההליכה אינן גורמות כאב, ניתן להתקדם לעומסים תפקודיים כגון
            עלייה במדרגות, חיזוק בעמידה ולעיתים קפיצות, בהתאם למיקום ולסיווג הסיכון.
          </p>
          <p className={pClass}>
            החזרה לריצה מתבצעת בדרך כלל באמצעות שילוב של הליכה וריצה קלה, בימים שאינם רצופים.
            בהמשך מגדילים בהדרגה את משך הריצה, ולאחר מכן את המהירות, העליות והאימונים הספורטיביים
            הייחודיים.
          </p>
          <p className={pClass}>
            ההתקדמות אינה נקבעת לפי לוח זמנים בלבד, אלא לפי מיקום הפציעה, חומרתה, תגובת האזור
            לעומס והיעדר החמרה במהלך הפעילות או ביום שאחריה.
            <Ref n={2} />
            <Ref n={9} />
          </p>

          <h2 className={h2Class}>כמה זמן נמשכת ההחלמה?</h2>
          <p className={pClass}>
            פציעות בסיכון נמוך עשויות להחלים בתוך מספר שבועות, ולעיתים מצוין טווח של שישה עד
            שמונה שבועות. עם זאת, החזרה המלאה לפעילות יכולה להיות קצרה או ארוכה יותר בהתאם לעצם
            שנפגעה, דרגת הפציעה, משך הזמן עד האבחון וגורמי הסיכון האישיים. פציעות בסיכון גבוה
            עשויות לדרוש כמה חודשים ולעיתים טיפול ניתוחי.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={9} />
          </p>

          <ArticleCta
            intro="כאב מקומי שמופיע שוב ושוב בזמן ריצה, הליכה או פעילות נושאת משקל אינו בהכרח שבר מאמץ, אך לא כדאי להמשיך להעמיס עליו בלי להבין את המקור. הערכה מסודרת יכולה לסייע לזהות את רמת החשד, להחליט האם נדרש בירור רפואי או הדמיה, ולבנות תוכנית הדרגתית שתאפשר לעצם להחלים ולגוף לחזור לפעילות."
            whatsappText="היי רועי, קראתי אצלך הסבר על שברי מאמץ, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Hoenig T, Ackerman KE, Beck BR, et al. Bone stress injuries. Nat Rev Dis Primers.
              2022;8:26. doi:
              <a
                href="https://doi.org/10.1038/s41572-022-00352-y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41572-022-00352-y
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Schroeder JD, Trigg SD, Capo Dosal GE. Bone stress injuries: diagnosis and
              management. Am Fam Physician. 2024;110(6):592-600.{" "}
              <a
                href="https://www.aafp.org/pubs/afp/issues/2024/1200/bone-stress-injuries.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                aafp.org
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Morrison WB, Deely D, Fox MG, et al. ACR Appropriateness Criteria Stress
              (Fatigue-Insufficiency) Fracture Including Sacrum Excluding Other Vertebrae: 2024
              Update. J Am Coll Radiol. 2024;21(11S):S490-S503. doi:
              <a
                href="https://doi.org/10.1016/j.jacr.2024.08.019"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jacr.2024.08.019
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Wainwright KF, Whelan BM, Fahy KE, Harmon KG. Epidemiology of bone stress injury in
              Division I National Collegiate Athletic Association athletes from 2016 to 2022. Br J
              Sports Med. 2026;60(11):780-787. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2025-110888"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2025-110888
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Rizzone KH, Ackerman KE, Roos KG, Dompier TP, Kerr ZY. The epidemiology of stress
              fractures in collegiate student-athletes, 2004-2005 through 2013-2014 academic
              years. J Athl Train. 2017;52(10):966-975. doi:
              <a
                href="https://doi.org/10.4085/1062-6050-52.8.01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.4085/1062-6050-52.8.01
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Changstrom BG, Brou L, Khodaee M, Braund C, Comstock RD. Epidemiology of stress
              fracture injuries among US high school athletes, 2005-2006 through 2012-2013. Am J
              Sports Med. 2015;43(1):26-33. doi:
              <a
                href="https://doi.org/10.1177/0363546514562739"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/0363546514562739
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Wentz L, Liu PY, Haymes E, Ilich JZ. Females have a greater incidence of stress
              fractures than males in both military and athletic populations: a systematic review.
              Mil Med. 2011;176(4):420-430. doi:
              <a
                href="https://doi.org/10.7205/MILMED-D-10-00322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.7205/MILMED-D-10-00322
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Kale NN, Wang CX, Wu VJ, Miskimin C, Mulcahey MK. Age and female sex are important
              risk factors for stress fractures: a nationwide database analysis. Sports Health.
              2022;14(6):805-811. doi:
              <a
                href="https://doi.org/10.1177/19417381221080440"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/19417381221080440
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Hoenig T, Eissele J, Strahl A, et al. Return to sport following low-risk and
              high-risk bone stress injuries: a systematic review and meta-analysis. Br J Sports
              Med. 2023;57(7):427-432. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2022-106328"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2022-106328
              </a>
              .
            </li>
            <li id="ref-10" className="scroll-mt-24">
              Mountjoy M, Ackerman KE, Bailey DM, et al. 2023 International Olympic Committee&apos;s
              consensus statement on Relative Energy Deficiency in Sport (REDs). Br J Sports Med.
              2023;57(17):1073-1097. doi:
              <a
                href="https://doi.org/10.1136/bjsports-2023-106994"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1136/bjsports-2023-106994
              </a>
              .
            </li>
            <li id="ref-11" className="scroll-mt-24">
              Campbell PG, Pope R, Simas V, et al. Incidence and risk factors for the development
              of stress fractures in military recruits and qualified personnel: a systematic
              review. Int J Environ Res Public Health. 2025;22(11):1760. doi:
              <a
                href="https://doi.org/10.3390/ijerph22111760"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.3390/ijerph22111760
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
