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

const article = getArticle("underactive-bladder");

export const metadata: Metadata = {
  title: "שלפוחית תת־פעילה בגברים (UAB): תסמינים, גורמים ובירור",
  description:
    "זרם חלש, קושי להתחיל, צורך ללחוץ ותחושה שהשלפוחית לא התרוקנה. למה אותם תסמינים יכולים לנבוע ממנגנונים שונים לגמרי, מה ההבדל מ-Detrusor Underactivity ומה מקומה של הפיזיותרפיה.",
  alternates: { canonical: "/professional-info/underactive-bladder" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "שלפוחית תת־פעילה בגברים (UAB) | רועי קליין פיזיותרפיה",
    description:
      "תסמונת של תסמיני התרוקנות, לא אבחנה של מנגנון. מה נמצא בגברים צעירים, ואיך מבדילים בין חסימה, הפרעת הרפיה ותפקוד ירוד של השלפוחית.",
    url: "/professional-info/underactive-bladder",
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
    q: "שלפוחית תת־פעילה ותת־פעילות הדטרוזור, זה אותו דבר?",
    a: "לא. שלפוחית תת־פעילה היא תסמונת שמבוססת על מה שהאדם חווה. תת־פעילות הדטרוזור היא ממצא שנמדד בבדיקה אורודינמית. אפשר להציג תסמינים שמתאימים לתסמונת בלי שבבדיקה יימצא תפקוד ירוד של השריר.",
  },
  {
    q: "האם זרם חלש אומר שהשלפוחית חלשה?",
    a: "לא. זרם חלש יכול להופיע גם כשהשלפוחית מתכווצת היטב אבל קיימת התנגדות במוצא, למשל חסימה, היצרות או קושי בהרפיית הסוגר ורצפת האגן. התסמין לבדו אינו מספר מה המנגנון.",
  },
  {
    q: "זה קורה גם לגברים צעירים?",
    a: "כן. במחקרים אורודינמיים בגברים צעירים עם תסמינים מתמשכים נמצאו מגוון מנגנונים, ובהם הפרעה בפתיחת צוואר השלפוחית, קושי בהרפיה מתואמת בזמן ההשתנה, חסימה ותפקוד ירוד של השלפוחית. אלה אוכלוסיות שהופנו לבירור ולכן אי אפשר להסיק מהן שכיחות כללית.",
  },
  {
    q: "צריך בדיקה אורודינמית?",
    a: "לא תמיד. הבירור מתחיל בתשאול, בבדיקה גופנית ובבדיקת שתן, ולעיתים ביומן השתנה, בדיקת זרימה ומדידת שארית שתן. אורודינמיקה נדרשת כאשר צריך להבחין בין המנגנונים, במיוחד בגבר צעיר עם תסמינים מתמשכים.",
  },
  {
    q: "פיזיותרפיה יכולה לחזק את שריר השלפוחית?",
    a: "לא. אין ראיות שתרגול רצפת האגן או ביופידבק מחזירים כוח לשריר השלפוחית. הרלוונטיות של הפיזיותרפיה היא כאשר בבירור מתברר שהתמונה קשורה להרפיה ולתיאום של רצפת האגן ומוצא השלפוחית.",
  },
];

export default function UnderactiveBladderArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            שלפוחית תת־פעילה בגברים (UAB): תסמינים, גורמים ובירור
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            זרם שתן חלש, קושי להתחיל להשתין, צורך ללחוץ או תחושה שהשלפוחית לא התרוקנה לגמרי.
            קל להסיק מזה שהשלפוחית פשוט &rdquo;חלשה&ldquo;, אבל אותם תסמינים בדיוק יכולים
            לנבוע ממנגנונים שונים לגמרי.
          </p>
          <p className={pClass}>
            שלפוחית תת־פעילה, באנגלית Underactive Bladder&rlm; ובקיצור UAB&rlm;, היא מונח
            שמתאר תסמונת של תסמינים. היא אינה אבחנה שמספרת לנו מה גורם להם.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            לפי ה-International Continence Society&rlm;, התסמונת מאופיינת בדרך כלל בזרם שתן
            איטי, בהיסוס בתחילת ההשתנה ובצורך ללחוץ, עם או בלי תחושת התרוקנות לא מלאה וטפטוף.
            לעיתים קרובות מופיעים גם תסמיני אגירה.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <ArticleFigure
            src="/professional-info/uab-symptoms.webp"
            alt="תרשים של שלפוחית תת־פעילה: זרם חלש או איטי, קושי להתחיל להשתין, צורך ללחוץ, השתנה ממושכת או מקוטעת, תחושת התרוקנות לא מלאה וטפטוף בסיום"
            caption="התסמינים שבאיור אינם ייחודיים לשלפוחית תת־פעילה. אותה תמונה יכולה להופיע גם בחסימה, בהפרעה בפתיחת מוצא השלפוחית או בקושי בהרפיית הסוגר ורצפת האגן."
          />

          <p className={pClass}>
            אם הטפטוף בסוף ההשתנה הוא התסמין הבולט:{" "}
            <Link
              href="/professional-info/terminal-dribbling"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              טפטוף בסוף ההשתנה בגברים: גורמים, בירור ומקום הפיזיותרפיה
            </Link>
          </p>

          <h2 className={h2Class}>התסמונת והממצא, שני דברים שונים</h2>
          <p className={pClass}>
            אחד הבלבולים הנפוצים הוא שימוש במונחים UAB&rlm; ו-Detrusor Underactivity&rlm;,
            בקיצור DU&rlm;, כאילו הם מתארים את אותו מצב. הם לא.
          </p>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="leading-8 text-black">
              <span className="font-bold">UAB</span> הוא מה שהאדם מרגיש.{" "}
              <span className="font-bold">DU</span> הוא מה שנמדד בבדיקה של תפקוד השלפוחית.
            </p>
          </div>
          <p className={pClass}>
            אדם יכול להציג תסמינים שמתאימים ל-UAB&rlm; בלי שבבדיקה אורודינמית יימצא DU&rlm;.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            להרחבה על הממצא עצמו ועל אופן האבחנה שלו:{" "}
            <Link
              href="/professional-info/detrusor-underactivity"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              תת־פעילות הדטרוזור: מה זה ואיך מאבחנים
            </Link>
          </p>

          <h2 className={h2Class}>ומה אם יש גם דחיפות ותכיפות?</h2>
          <p className={pClass}>
            זה נפוץ, וזה לא סותר את התמונה. ההגדרה של UAB&rlm; כוללת במפורש גם תסמיני אגירה
            לצד תסמיני ההתרוקנות, כלומר תכיפות, דחיפות וקימה בלילה.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            בסקר מקוון בקרב 3,112 גברים ביפן, שבו שתי התסמונות הוגדרו לפי שאלונים ולא לפי
            בדיקה אורודינמית, נמצאה חפיפה גדולה ביניהן: כ-47% מהגברים שענו על ההגדרה של
            UAB&rlm; ענו גם על הקריטריונים לשלפוחית רגיזה, וכ-31% מהגברים עם שלפוחית רגיזה ענו
            גם על ההגדרה של UAB&rlm;. שיעורי החפיפה לא עלו עם הגיל.
            <Ref n={10} />
          </p>
          <p className={pClass}>
            מכאן שדחיפות ותכיפות אינן מפרידות בין השתיים. גבר שמתאר זרם חלש וגם צורך דחוף
            להגיע לשירותים יכול להיות בכל אחת מהתמונות, או בשתיהן.
          </p>
          <p className={pClass}>
            להרחבה על התמונה של שלפוחית רגיזה:{" "}
            <Link
              href="/professional-info/overactive-bladder-men"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שלפוחית רגיזה בגברים (OAB): תסמינים, בירור וטיפול
            </Link>
          </p>

          <h2 className={h2Class}>למה תסמינים כאלה יכולים להופיע?</h2>
          <p className={pClass}>
            כדי שהשלפוחית תתרוקן כראוי נדרש שילוב של שני דברים: התרחבות והתכווצות מתאימה של
            שריר השלפוחית, ובמקביל פתיחה והרפיה תקינה של הסוגרים הקדמיים. כשאחד מהם אינו פועל
            כשורה, התוצאה הנראית לעין דומה מאוד.
            <Ref n={2} />
            <Ref n={4} />
          </p>

          <h3 className={h3Class}>הרפיה לא מתואמת של הסוגר ורצפת האגן</h3>
          <p className={pClass}>
            במצב שנקרא Dysfunctional Voiding&rlm;, הסוגר או רצפת האגן אינם נרפים כראוי ובתיאום
            בזמן ההשתנה, ונוצרת התנגדות תפקודית לזרימה. התוצאה יכולה להיות זרם חלש או מקוטע,
            צורך ללחוץ ותחושת התרוקנות לא מלאה.
            <Ref n={5} />
            <Ref n={6} />
          </p>

          <h3 className={h3Class}>הפרעה בפתיחת צוואר השלפוחית</h3>
          <p className={pClass}>
            במצב שנקרא Primary Bladder Neck Obstruction&rlm;, צוואר השלפוחית אינו נפתח כראוי
            בזמן ההשתנה. זהו מצב חשוב במיוחד באבחנה המבדלת אצל גברים צעירים עם תסמיני
            התרוקנות.
            <Ref n={5} />
          </p>

          <h3 className={h3Class}>חסימה במוצא השלפוחית</h3>
          <p className={pClass}>
            התנגדות לזרימת השתן יכולה לגרום לזרם חלש, להשתנה ממושכת ולתחושת התרוקנות לא מלאה.
            אצל גברים, הגדלה שפירה של הערמונית היא אחת הסיבות האפשריות, אך אינה היחידה: גם
            היצרות אנטומית של השופכה יוצרת התנגדות לזרימה ומייצרת תסמיני התרוקנות דומים.
            <Ref n={4} />
          </p>

          <h3 className={h3Class}>תפקוד ירוד של שריר השלפוחית</h3>
          <p className={pClass}>
            גם DU&rlm; יכול ליצור תסמינים שמתאימים ל-UAB&rlm;, אבל אי אפשר לקבוע שזה המנגנון על
            סמך התסמינים בלבד.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            גורמים נוספים, נוירולוגיים ומבניים, יכולים להשתלב בתמונה. פגיעה במערכת העצבים,
            למשל, משפיעה על התחושה מהשלפוחית, על הפעלת השריר ועל התיאום בין השלפוחית למערכת
            המוצא.
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>מה נמצא בגברים צעירים?</h2>
          <p className={pClass}>
            במחקר שכלל 456 גברים בני 18 עד 40 עם תסמינים מתמשכים, בגיל ממוצע 25.8, הבדיקה
            האורודינמית מצאה הפרעה בפתיחת צוואר השלפוחית ב-21%, <span className="font-semibold">הרפיה
            לא מתואמת ב-15.1%, פעילות יתר של השלפוחית ב-13.6%</span>, שלפוחית שאינה מתכווצת
            ב-10.5% ותפקוד ירוד של השלפוחית
            ב-2.4% בלבד. אצל 18.6% הבדיקה הייתה תקינה.
            <Ref n={7} />
          </p>
          <p className={pClass}>
            במחקר אחר, שכלל 87 גברים עד גיל 40 עם תסמינים מעל חצי שנה, ההתפלגות הייתה שונה:
            חסימה במוצא השלפוחית ב-42.5%, הרפיה לא מתואמת ב-28.7%, תפקוד ירוד של השלפוחית
            ב-11.5% ופעילות יתר ב-8.1%.
            <Ref n={8} />
          </p>
          <p className={pClass}>
            הפער בין שני המחקרים הוא עצמו הממצא החשוב. שניהם בוצעו באוכלוסיות שכבר הופנו לבדיקה
            אורודינמית, כלומר בקבוצות נבחרות, ולכן אינם נותנים שכיחות באוכלוסייה הכללית. מה
            שהם כן מראים הוא שבגבר צעיר עם תסמיני התרוקנות יש מגוון רחב של מנגנונים אפשריים,
            ושתפקוד ירוד של השלפוחית אינו בהכרח השכיח שבהם.
            <Ref n={7} />
            <Ref n={8} />
          </p>
          <p className={pClass}>
            עד כמה קשה לזהות את המנגנון בלי בדיקה? במחקר שכלל 128 גברים צעירים שהופנו לבדיקה
            אורודינמית, האבחנה הקלינית השתנתה אצל 52.3% מהם לאחריה.
            <Ref n={9} />
          </p>
          <p className={pClass}>
            לכן בגבר צעיר עם זרם חלש או צורך ללחוץ לא נכון להניח אוטומטית שמדובר בערמונית
            מוגדלת, אבל גם לא נכון להניח שמדובר ב&rdquo;שלפוחית חלשה&ldquo;.
            <Ref n={4} />
            <Ref n={7} />
          </p>

          <h2 className={h2Class}>מה הקשר לרצפת האגן?</h2>
          <p className={pClass}>
            בהשתנה תקינה השלפוחית מתכווצת, ובמקביל רצפת האגן והסוגר צריכים לאפשר לשתן לעבור.
            כאשר רצפת האגן אינה נרפית היטב, או כאשר התיאום בזמן ההשתנה אינו תקין, נוצרת התנגדות
            תפקודית לזרימה.
            <Ref n={5} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            התוצאה יכולה להיות זרם חלש או מקוטע, צורך ללחוץ ותחושת התרוקנות לא מלאה, כלומר
            בדיוק התסמינים שנכללים בתמונה של UAB&rlm;.
            <Ref n={6} />
          </p>

          <h2 className={h2Class}>מה מקומה של הפיזיותרפיה?</h2>
          <p className={pClass}>
            פיזיותרפיה מכוונת לתלונה התפקודית, ולא לשם התסמונת. היא רלוונטית כאשר בבירור
            עולה חשד למרכיב של:
          </p>
          <ul className={ulClass}>
            <li>הרפיה לא מתואמת של הסוגר ורצפת האגן בזמן ההשתנה</li>
            <li>קושי בהרפיית רצפת האגן</li>
            <li>פעילות יתר של רצפת האגן</li>
            <li>הרגלי לחיצה או נשימה שאינם יעילים בזמן ההתרוקנות</li>
          </ul>
          <p className={pClass}>
            בהתאם לממצאים, הטיפול עשוי לכלול עבודה על הרפיה, על תיאום בזמן ההשתנה, על מנח
            ונשימה, ובמקרים המתאימים גם ביופידבק.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            עד כמה זה מבוסס? בסקירה שיטתית ומטא־אנליזה של גברים בני 18 עד 50 עם הפרעה בפתיחת
            צוואר השלפוחית או עם הרפיה לא מתואמת, <span className="font-semibold">שילוב של שינוי
            התנהגותי וביופידבק היה האסטרטגיה היחידה שנבדקה כלל עבור הרפיה לא מתואמת, והיא הביאה
            לשיפור של 50% ומעלה בתסמינים אצל 83% מהמטופלים לאחר שלושה חודשים</span>. עם זאת, מחברי הסקירה מדגישים שאיכות
            הראיות נמוכה: מעט מחקרים, מדגמים קטנים, עיצוב רטרוספקטיבי ומעקב קצר.
            <Ref n={5} />
          </p>
          <p className={pClass}>
            <span className="font-bold">וזו בדיוק הנקודה המעשית</span>: אם הבירור מגלה שהתמונה
            נובעת מהרפיה לא מתואמת ולא מתפקוד ירוד של השלפוחית, מקומה של הפיזיותרפיה משתנה
            מהותית.
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>איך מתקדמים בבירור?</h2>
          <p className={pClass}>
            הבירור מתחיל בדרך כלל בהיסטוריה רפואית והשתנתית, בבדיקה גופנית ובבדיקת שתן. בהתאם
            למקרה אפשר להוסיף יומן השתנה, בדיקת זרימת שתן ומדידת שארית שתן לאחר ההתרוקנות.
            <Ref n={4} />
          </p>
          <p className={pClass}>
            הבדיקות האלה מספקות מידע חשוב, אבל הן אינן אומרות לבדן מהו המנגנון שגורם לתסמינים.
            כאשר יש צורך לקבוע האם מדובר בתפקוד ירוד של השלפוחית, בחסימה או במנגנון אחר, ייתכן
            שיידרש בירור אורולוגי ובדיקה אורודינמית.
            <Ref n={1} />
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>מתי כדאי לפנות לבירור רפואי?</h2>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              דם בשתן, חוסר יכולת להשתין, שארית שתן משמעותית, זיהומים חוזרים בדרכי השתן, אבנים,
              סימנים נוירולוגיים חדשים או תסמינים משמעותיים שאינם משתפרים מצריכים בירור רפואי.
              <Ref n={4} />
            </p>
          </div>
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
            heading="לא כל קושי בהתרוקנות אומר שהשלפוחית חלשה."
            intro="כאשר עולה חשד למרכיב של רצפת האגן, ניתן לבצע הערכה פיזיותרפית ולבחון האם יש מקום לטיפול או להמשך בירור רפואי."
            whatsappText="היי רועי, קראתי אצלך הסבר על UAB, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Chapple CR, Osman NI, Birder L, et al. Terminology report from the International
              Continence Society (ICS) Working Group on Underactive Bladder (UAB). Neurourol Urodyn.
              2018;37(8):2928-2931. doi:
              <a
                href="https://doi.org/10.1002/nau.23701"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.23701
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Tarcan T, Rademakers K, Arlandis S, et al. Do the definitions of the underactive
              bladder and detrusor underactivity help in managing patients? ICI-RS Think Tank 2017.
              Neurourol Urodyn. 2018;37(S4):S60-S68. doi:
              <a
                href="https://doi.org/10.1002/nau.23570"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.23570
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Smith PP, Birder LA, Abrams P, Wein AJ, Chapple CR. Detrusor underactivity and the
              underactive bladder: symptoms, function, cause, what do we mean? ICI-RS Think Tank
              2014. Neurourol Urodyn. 2016;35(2):312-317. doi:
              <a
                href="https://doi.org/10.1002/nau.22807"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.22807
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Drake MJ, Williams J, Bijos DA. Voiding dysfunction due to detrusor underactivity: an
              overview. Nat Rev Urol. 2014;11(8):454-464. doi:
              <a
                href="https://doi.org/10.1038/nrurol.2014.156"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/nrurol.2014.156
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Creta M, Baboudjian M, Sakalis V, et al. Management of primary bladder neck
              obstruction and dysfunctional voiding in young men: a systematic review and
              meta-analysis. Eur Urol Focus. 2025;11(3):496-507. doi:
              <a
                href="https://doi.org/10.1016/j.euf.2025.01.011"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.euf.2025.01.011
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Tarcan T, von Gontard A, Apostolidis A, Mosiello G, Abrams P. Can we improve our
              management of dysfunctional voiding in children and adults: ICI-RS 2018? Neurourol
              Urodyn. 2019;38(Suppl 5):S82-S89. doi:
              <a
                href="https://doi.org/10.1002/nau.24088"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.24088
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Karami H, Valipour R, Lotfi B, Mokhtarpour H, Razi A. Urodynamic findings in young men
              with chronic lower urinary tract symptoms. Neurourol Urodyn. 2011;30(8):1580-1585.
              doi:
              <a
                href="https://doi.org/10.1002/nau.21095"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.21095
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Jamzadeh AE, Xie D, Laudano M, et al. Urodynamic characterization of lower urinary
              tract symptoms in men less than 40 years of age. World J Urol. 2014;32(2):469-473.
              doi:
              <a
                href="https://doi.org/10.1007/s00345-013-1134-z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s00345-013-1134-z
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Manohar CS, Rajawat MS, Keshavamurthy R, Chouhan PK, Poonawala A. Urodynamic profile
              of lower urinary tract symptoms in young men: a testimony of the truth? Urol Ann.
              2022;14(3):215-217. doi:
              <a
                href="https://doi.org/10.4103/ua.ua_9_21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.4103/ua.ua_9_21
              </a>
              .
            </li>
            <li id="ref-10" className="scroll-mt-24">
              Sekido N, Omae K, Haga N, et al. Prevalence, impact on quality of life, and predictive factors of coexistence of
              overactive bladder and underactive bladder in men. Sci Rep. 2025;15(1):21313. doi:
              <a
                href="https://doi.org/10.1038/s41598-025-06299-w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41598-025-06299-w
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
