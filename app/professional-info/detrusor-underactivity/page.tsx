import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import ComparisonTable from "../../components/ComparisonTable";
import AuthorBox from "../../components/AuthorBox";
import ArticleCta from "../../components/ArticleCta";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("detrusor-underactivity");

export const metadata: Metadata = {
  title: "תת־פעילות הדטרוזור (DU): מה זה, איך מאבחנים ומה מקום הפיזיותרפיה",
  description:
    "ממצא אורודינמי שמתאר התכווצות שאינה חזקה או ממושכת מספיק להתרוקנות תקינה. למה אי אפשר לאבחן אותו לפי זרם חלש או שארית שתן, מה כן קובע את האבחנה, ומה ידוע על הטיפול.",
  alternates: { canonical: "/professional-info/detrusor-underactivity" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "תת־פעילות הדטרוזור (Detrusor Underactivity) | רועי קליין פיזיותרפיה",
    description:
      "האבחנה נקבעת בבדיקת לחץ מול זרימה, לא לפי תסמינים. מה מבדיל אותה מחסימה ומהפרעת הרפיה, ומתי לפיזיותרפיה יש בכל זאת מקום.",
    url: "/professional-info/detrusor-underactivity",
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
    q: "אפשר לאבחן תת־פעילות של הדטרוזור לפי זרם חלש?",
    a: "לא. זרם חלש יכול להופיע גם כשהשלפוחית מתכווצת היטב אבל קיימת התנגדות במוצא. גם שארית שתן גבוהה ובדיקת זרימה חריגה אינן קובעות את האבחנה.",
  },
  {
    q: "מה כן קובע את האבחנה?",
    a: "בדיקת לחץ מול זרימה במסגרת אורודינמיקה, שבה מודדים במקביל את הלחץ שמייצר שריר השלפוחית ואת קצב זרימת השתן. זו הדרך להבחין בין שלפוחית שמתכווצת חלש לבין שלפוחית שמתכווצת כנגד התנגדות.",
  },
  {
    q: "זה אותו דבר כמו שלפוחית תת־פעילה?",
    a: "לא. שלפוחית תת־פעילה היא תסמונת שמבוססת על תסמינים. תת־פעילות הדטרוזור היא ממצא שנמדד בבדיקה. אפשר להציג את התסמינים בלי שהממצא יימצא.",
  },
  {
    q: "זה קורה גם בגברים צעירים?",
    a: "כן, אבל פחות ממה שנהוג לחשוב. במחקר אורודינמי בקרב 456 גברים בני 18 עד 40, תפקוד ירוד של השלפוחית נמצא ב-2.4% בלבד, ושלפוחית שאינה מתכווצת ב-10.5%. מנגנונים אחרים היו שכיחים יותר.",
  },
  {
    q: "פיזיותרפיה יכולה לחזק את שריר השלפוחית?",
    a: "לא. אין ראיות שתרגול רצפת האגן, ביופידבק או טכניקה פיזיותרפית אחרת מחזירים כוח התכווצות לשריר שלפוחית חלש. מקומה של הפיזיותרפיה הוא כאשר לצד הממצא קיימת גם בעיה של רצפת האגן או של מוצא השלפוחית.",
  },
];

export default function DetrusorUnderactivityArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            תת־פעילות הדטרוזור (DU): מה זה, איך מאבחנים ומה מקום הפיזיותרפיה
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            תת־פעילות הדטרוזור, באנגלית Detrusor Underactivity&rlm; ובקיצור DU&rlm;, היא ממצא
            אורודינמי שמתאר התכווצות שאינה חזקה מספיק או אינה נמשכת מספיק זמן כדי לאפשר
            התרוקנות תקינה של שלפוחית השתן.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            חשוב להבדיל אותה משלפוחית תת־פעילה, Underactive Bladder&rlm; או UAB&rlm;. התסמונת
            מתארת תסמינים, והממצא מתאר את תפקוד שריר השלפוחית כפי שהוא נמדד בבדיקה.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            להרחבה על התסמונת ועל התסמינים שלה:{" "}
            <Link
              href="/professional-info/underactive-bladder"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שלפוחית תת־פעילה בגברים: תסמינים, גורמים ובירור
            </Link>
          </p>

          <h2 className={h2Class}>מהו הדטרוזור?</h2>
          <p className={pClass}>
            ה-Detrusor&rlm; הוא השריר בדופן שלפוחית השתן. בהשתנה תקינה הוא מתכווץ כדי לייצר את
            הלחץ הדרוש להוצאת השתן, ובמקביל מערכת המוצא אמורה להיפתח ולאפשר לשתן לעבור.
          </p>
          <p className={pClass}>
            כאשר ההתכווצות אינה מספקת, התרוקנות השלפוחית עלולה להיות איטית, ממושכת או לא מלאה.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>אי אפשר לאבחן את זה לפי תסמינים</h2>
          <p className={pClass}>
            זרם חלש, צורך ללחוץ, תחושת התרוקנות לא מלאה או שארית שתן גבוהה יכולים להופיע בתמונה
            הזו, אבל אף אחד מהם אינו ייחודי לה.
            <Ref n={1} />
            <Ref n={3} />
          </p>
          <p className={pClass}>
            זרם חלש יכול להיגרם גם כאשר השלפוחית מתכווצת היטב, אך קיימת חסימה או התנגדות במוצא.
            זו בדיוק הסיבה שהתסמינים לבדם אינם מספיקים.
            <Ref n={3} />
            <Ref n={4} />
          </p>

          <p className={pClass}>
            דוגמה לכך היא מחקר שבחן 212 גברים עם תת־פעילות של הדטרוזור שאינה נוירולוגית. אצל
            58% מהם נמצאה בבדיקה גם הפרעה בשלב האגירה, כלומר התכווצויות לא רצוניות של
            השלפוחית או ירידה ביכולת שלה להתמלא בלי שהלחץ בתוכה עולה. בקבוצה הזו מעל 80% ענו
            על הקריטריונים לשלפוחית רגיזה, לעומת 26% בקבוצה שבה נמצאה תת־פעילות של הדטרוזור
            בלבד, ודליפה מדחיפות דווחה אצל 65% לעומת 12%.
            <Ref n={10} />
          </p>
          <p className={pClass}>
            אצל 42% הנותרים התמונה הייתה הפוכה: קיבולת שלפוחית גדולה יותר, עלייה מזערית בלחץ
            בזמן ההתמלאות, ותסמיני התרוקנות חמורים יותר, ובהם מאמץ בזמן ההשתנה.
            <Ref n={10} />
          </p>
          <p className={pClass}>
            כלומר אותו ממצא אורודינמי עצמו מופיע בשתי תמונות קליניות שונות מאוד, ודחיפות אינה
            שוללת תפקוד ירוד של השלפוחית.
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


          <ComparisonTable
            caption="מה כל בדיקה יכולה להראות, והאם היא קובעת את האבחנה של תת־פעילות הדטרוזור"
            characteristics={["מה היא מראה", "האם היא קובעת את האבחנה?"]}
            items={[
              {
                name: "תסמינים והיסטוריה",
                values: ["מה האדם מרגיש ובאיזה דפוס", "לא"],
              },
              {
                name: "בדיקת זרימת שתן",
                values: ["מהירות זרימת השתן וצורת העקומה", "לא"],
              },
              {
                name: "שארית שתן",
                values: ["כמה שתן נותר בשלפוחית לאחר ההתרוקנות", "לא"],
              },
              {
                name: "אולטרסאונד",
                values: ["שארית שתן ומידע אנטומי", "לא"],
              },
              {
                name: "בדיקת לחץ מול זרימה",
                values: ["הלחץ שמייצרת השלפוחית ביחס לזרימת השתן", "כן"],
              },
            ]}
            note="הבדיקות הראשונות מספקות מידע חשוב על תפקוד ההתרוקנות, אך רק בדיקת הלחץ מול הזרימה מאפשרת להבחין בין התכווצות חלשה לבין התכווצות כנגד התנגדות."
          />

          <h2 className={h2Class}>איך מאבחנים?</h2>
          <p className={pClass}>
            האבחנה נעשית באמצעות בדיקת לחץ מול זרימה, Pressure-Flow Study&rlm;, במסגרת בדיקת
            אורודינמיקה. בבדיקה מודדים במקביל את הלחץ שמייצר שריר השלפוחית ואת קצב זרימת השתן.
            <Ref n={1} />
            <Ref n={3} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            השילוב הזה הוא שמאפשר להבחין בין מצב שבו הזרימה נמוכה מפני שההתכווצות אינה מספקת
            לבין מצב שבו השלפוחית מתכווצת היטב כנגד התנגדות גבוהה.
            <Ref n={3} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            נחקרו גם שיטות שמנסות לזהות את הממצא בלי בדיקה פולשנית, בין היתר באמצעות שילובים של
            תסמינים, בדיקת זרימה, שארית שתן ואולטרסאונד. חלקן עשויות לסייע בהערכת הסבירות, אך
            נכון להיום הן אינן מחליפות את הבדיקה האורודינמית לצורך אבחנה.
            <Ref n={3} />
            <Ref n={4} />
          </p>

          <h2 className={h2Class}>מה יכול לגרום לזה?</h2>
          <p className={pClass}>
            תפקוד תקין של הדטרוזור תלוי בשריר תקין, בעצבוב תקין ובמערכת תחושה ובקרה תקינה. לכן
            קיימים מספר מנגנונים אפשריים.
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={5} />
          </p>
          <ul className={ulClass}>
            <li>
              <span className="font-semibold">גורמים נוירולוגיים:</span>{" "}
              פגיעה במערכת העצבים המרכזית או ההיקפית יכולה להפריע להפעלת השלפוחית ולתחושת
              המילוי.
              <Ref n={3} />
              <Ref n={5} />
            </li>
            <li>
              <span className="font-semibold">סוכרת:</span>{" "}
              פגיעה בעצבוב השלפוחית עלולה להשפיע על יכולתה להתרוקן כראוי.
              <Ref n={3} />
              <Ref n={5} />
            </li>
            <li>
              <span className="font-semibold">לאחר ניתוחי אגן:</span>{" "}
              פגיעה בעצבים האוטונומיים במהלך ניתוחים מסוימים יכולה להפריע להתכווצות.
              <Ref n={5} />
            </li>
            <li>
              <span className="font-semibold">חסימה כרונית במוצא השלפוחית:</span>{" "}
              חסימה ממושכת עשויה להיות קשורה לשינויים בדופן השלפוחית ולירידה בתפקוד, אך הקשר
              אינו חד משמעי בכל המטופלים.
              <Ref n={3} />
              <Ref n={5} />
            </li>
            <li>
              <span className="font-semibold">תרופות:</span>{" "}
              תרופות מסוימות, בין היתר בעלות פעילות אנטיכולינרגית, יכולות להשפיע על יכולת
              ההתכווצות.
              <Ref n={5} />
            </li>
            <li>
              <span className="font-semibold">ללא גורם ברור:</span>{" "}
              בחלק מהמקרים לא נמצאת סיבה מזוהה.
              <Ref n={2} />
              <Ref n={5} />
            </li>
          </ul>

          <h2 className={h2Class}>מה נמצא בגברים מבוגרים?</h2>
          <p className={pClass}>
            במחקר גדול שכלל 1,329 גברים עם תסמיני דרכי שתן שלא הגיבו לטיפול ראשוני והופנו לבדיקת
            וידאו־אורודינמיקה, האבחנה הסופית הייתה הרפיה לקויה של הסוגר החיצוני אצל 525, חסימה
            במוצא השלפוחית אצל 501, תת־פעילות הדטרוזור אצל 165 ובדיקה תקינה אצל 138.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            שני סייגים חשובים: המחברים עצמם ממסגרים את המחקר סביב גברים מבוגרים, ומדובר
            באוכלוסייה שכבר נכשלה בטיפול ראשוני והופנתה לבירור. לכן המספרים אינם מייצגים שכיחות
            באוכלוסייה הכללית, אבל הם ממחישים היטב עד כמה תסמינים דומים יכולים לנבוע ממנגנונים
            שונים.
            <Ref n={6} />
          </p>

          <h2 className={h2Class}>ומה בגברים צעירים?</h2>
          <p className={pClass}>
            הממצא קיים גם בגברים צעירים, אבל פחות ממה שנהוג לחשוב.
          </p>
          <p className={pClass}>
            במחקר שכלל 456 גברים בני 18 עד 40 עם תסמינים מתמשכים, תפקוד ירוד של השלפוחית נמצא
            ב-2.4% בלבד ושלפוחית שאינה מתכווצת ב-10.5%. מנגנונים אחרים היו שכיחים יותר: הפרעה
            בפתיחת צוואר השלפוחית ב-21% והרפיה לא מתואמת ב-15.1%.
            <Ref n={7} />
          </p>
          <p className={pClass}>
            במחקר אחר, בקרב 87 גברים עד גיל 40, תפקוד ירוד של השלפוחית נמצא ב-11.5%, בעוד
            שחסימה נמצאה ב-42.5% והרפיה לא מתואמת ב-28.7%.
            <Ref n={8} />
          </p>
          <p className={pClass}>
            שני המחקרים בוצעו באוכלוסיות שהופנו לבדיקה אורודינמית ולכן אינם נותנים שכיחות
            כללית, והפער ביניהם ממחיש למה אי אפשר להציג מספר יחיד. מה שהם כן מלמדים הוא שבגבר
            צעיר עם תסמיני התרוקנות, תפקוד ירוד של השלפוחית הוא אחת האפשרויות ולרוב לא השכיחה
            שבהן.
            <Ref n={7} />
            <Ref n={8} />
          </p>

          <h2 className={h2Class}>איך מטפלים?</h2>
          <p className={pClass}>
            הטיפול תלוי בגורם, בחומרת ההפרעה, בכמות שארית השתן ובשאלה האם קיימת גם חסימה במוצא
            השלפוחית.
            <Ref n={3} />
            <Ref n={5} />
          </p>
          <ul className={ulClass}>
            <li>
              <span className="font-semibold">אסטרטגיות התרוקנות:</span>{" "}
              השתנה בזמנים קבועים או השתנה כפולה יכולות להתאים לחלק מהמטופלים.
              <Ref n={3} />
              <Ref n={5} />
            </li>
            <li>
              <span className="font-semibold">צנתור לסירוגין:</span>{" "}
              כאשר השלפוחית אינה מתרוקנת מספיק, הוא מאפשר התרוקנות מלאה ובטוחה יותר.
              <Ref n={3} />
              <Ref n={5} />
            </li>
            <li>
              <span className="font-semibold">טיפול בחסימה נלווית:</span>{" "}
              השניים יכולים להתקיים יחד, ובחלק מהגברים הפחתת ההתנגדות במוצא משפרת את ההתרוקנות.
              <Ref n={3} />
              <Ref n={5} />
            </li>
            <li>
              <span className="font-semibold">נוירומודולציה סקרלית:</span>{" "}
              נשקלת בחלק מהמטופלים עם אצירת שתן שאינה חסימתית.
              <Ref n={3} />
              <Ref n={5} />
            </li>
            <li>
              <span className="font-semibold">טיפול תרופתי:</span>{" "}
              היכולת לשפר באופן ישיר את כוח ההתכווצות עדיין מוגבלת.
              <Ref n={3} />
              <Ref n={5} />
            </li>
          </ul>

          <h2 className={h2Class}>ומה מקומה של הפיזיותרפיה?</h2>
          <p className={pClass}>
            כאשר קיימת גם בעיה של רצפת האגן או של מוצא השלפוחית, למשל הרפיה לא מתואמת של הסוגר
            ורצפת האגן בזמן ההשתנה, ניתן לעבוד על כך בפיזיותרפיה.
            <Ref n={3} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            פיזיותרפיה לרצפת אגן אינה מאבחנת את הממצא ואינה מודדת את כוח ההתכווצות של השלפוחית.
            בנוסף, אין עדויות טובות לכך שטיפול מחזיר כוח התכווצות לדטרוזור חלש.
            <Ref n={1} />
            <Ref n={3} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            <span className="font-bold">וכאן ההבחנה נעשית מעשית</span>: בסקירה שיטתית
            ומטא־אנליזה של גברים בני 18 עד 50, <span className="font-semibold">שילוב של שינוי
            התנהגותי וביופידבק היה האסטרטגיה היחידה שנבדקה כלל עבור הרפיה לא מתואמת, והשיגה
            שיפור של 50% ומעלה בתסמינים אצל 83% מהמטופלים לאחר שלושה חודשים</span>. מחברי
            הסקירה מדגישים שאיכות הראיות נמוכה: מעט מחקרים,
            מדגמים קטנים, עיצוב רטרוספקטיבי ומעקב קצר.
            <Ref n={9} />
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
            heading="אובחנת, ויש גם קושי בהרפיה או בתיאום?"
            intro="ניתן לבדוק בהערכה האם קיים מרכיב נוסף של רצפת האגן שניתן לטיפול פיזיותרפי, לצד המעקב והטיפול האורולוגי."
            whatsappText="היי רועי, קראתי אצלך הסבר על DU, ואשמח לבדוק אם הטיפול מתאים לי."
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
            <li id="ref-3" className="scroll-mt-24">
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
            <li id="ref-4" className="scroll-mt-24">
              Clement KD, Burden H, Warren K, et al. Invasive urodynamic studies for the management
              of lower urinary tract symptoms (LUTS) in men with voiding dysfunction. Cochrane
              Database Syst Rev. 2015;2015(4):CD011179. doi:
              <a
                href="https://doi.org/10.1002/14651858.CD011179.pub2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/14651858.CD011179.pub2
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Sinha S, Everaert K, Bou Kheir G, et al. Could a better understanding of the
              underlying pathophysiologies lead to more informed treatment choices in patients with
              lower urinary tract dysfunction due to an acontractile or underactive detrusor? ICI-RS
              2023. Neurourol Urodyn. 2024;43(6):1381-1390. doi:
              <a
                href="https://doi.org/10.1002/nau.25329"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.25329
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Jiang YH, Kuo HC. Video-urodynamic characteristics of non-neurogenic, idiopathic
              underactive bladder in men: a comparison of men with normal tracing and bladder outlet
              obstruction. PLoS One. 2017;12(4):e0174593. doi:
              <a
                href="https://doi.org/10.1371/journal.pone.0174593"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1371/journal.pone.0174593
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
            <li id="ref-10" className="scroll-mt-24">
              Matsukawa Y, Naito Y, Ishida S, et al. Two types of detrusor underactivity in men with nonneurogenic lower urinary tract
              symptoms. Neurourol Urodyn. 2023;42(1):73-79. doi:
              <a
                href="https://doi.org/10.1002/nau.25044"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.25044
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
