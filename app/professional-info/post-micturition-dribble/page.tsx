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

const article = getArticle("post-micturition-dribble");

export const metadata: Metadata = {
  title: "טפטוף לאחר השתנה בגברים (PMD): גורמים, בירור וטיפול פיזיותרפי",
  description:
    "כמה טיפות שמופיעות אחרי שההשתנה כבר הסתיימה. מה המנגנון, למה זה קורה גם בגברים צעירים, מה הקשר לרצפת האגן, מה אפשר לשנות בתזמון ובתנוחה ומתי צריך בירור רפואי.",
  alternates: { canonical: "/professional-info/post-micturition-dribble" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "טפטוף לאחר השתנה בגברים (PMD) | רועי קליין פיזיותרפיה",
    description:
      "שארית שתן בשופכה הבולברית, תפקוד רצפת האגן, נתוני שכיחות בגברים צעירים ומה נבדק בהערכה הפיזיותרפית.",
    url: "/professional-info/post-micturition-dribble",
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
    q: "האם טפטוף לאחר השתנה אומר שיש לי בעיה בערמונית?",
    a: "לא. בסקר יפני רחב נמצא טפטוף אצל 12.8% מהגברים עד גיל 50, בזמן שרק 2.3% מהם דיווחו על הגדלה שפירה של הערמונית. כאשר הטפטוף מופיע יחד עם זרם חלש, קושי בהתרוקנות או שינוי משמעותי בדפוסי ההשתנה, יש מקום לבירור רפואי.",
  },
  {
    q: "האם זה נפוץ גם אצל גברים צעירים?",
    a: "כן. במחקר שבדק 1,758 גברים בני 18 עד 35, כ-52% דיווחו על טפטוף לאחר השתנה, וכ-9% דיווחו שהוא מופיע כמעט בכל פעם. מדובר בתופעה שאינה שייכת רק לגיל מבוגר.",
  },
  {
    q: "מה ההבדל בין טפטוף בסוף ההשתנה לבין טפטוף לאחר ההשתנה?",
    a: "ההבדל הוא בתזמון. בטפטוף בסוף ההשתנה זרם השתן מאט והופך לטיפות, אבל ההשתנה עדיין נמשכת. בטפטוף לאחר השתנה הזרם כבר פסק לגמרי, ורק אחר כך מופיעות טיפות נוספות.",
  },
  {
    q: "האם זה סוג של בריחת שתן?",
    a: "מדובר בדליפה לא רצונית, אבל המנגנון שונה מבריחת שתן במאמץ או מדחיפות. כאן הטיפות מופיעות אחרי שההשתנה הסתיימה, ובמקרים רבים הן קשורות לשתן שנותר בתוך השופכה ומשתחרר בתנועה או בשינוי תנוחה.",
  },
  {
    q: "האם פיזיותרפיה של רצפת האגן יכולה לעזור?",
    a: "כן. תרגול מותאם של שרירי רצפת האגן הוא ההתערבות הפיזיותרפית שנבדקה הכי הרבה בהקשר הזה, אם כי בסך הכול מדובר במספר קטן של מחקרים. בהערכה נבדקים גם התזמון והקואורדינציה ולא רק הכוח.",
  },
  {
    q: "מתי כדאי לפנות לרופא או לאורולוג?",
    a: "כאשר הטפטוף מלווה בדם בשתן, קושי משמעותי בהתרוקנות, אצירת שתן, דלקות חוזרות בדרכי השתן, שינוי משמעותי בזרם, כאב משמעותי או סימנים נוירולוגיים חדשים.",
  },
];

export default function PostMicturitionDribbleArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            טפטוף לאחר השתנה בגברים (PMD): גורמים, בירור וטיפול פיזיותרפי
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            סיימת להשתין, החזרת את האיבר למכנסיים, ואז מופיעות עוד טיפה או שתיים שמרטיבות את
            התחתונים. התופעה הזו נקראת טפטוף לאחר השתנה, ובאנגלית Post-Micturition Dribble&rlm;,
            ובקיצור PMD&rlm;. מדובר במספר טיפות שמשתחררות באופן לא רצוני מיד לאחר שההשתנה עצמה
            כבר הסתיימה.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            רוב הגברים פשוט מתרגלים לזה. מנערים עוד קצת, משתמשים בנייר, מחכים כמה שניות לפני
            שמתלבשים. פחות ידוע שבחלק מהמקרים אפשר לשפר את המצב, לעיתים בשינוי פשוט באופן שבו
            מסיימים את ההשתנה ולעיתים בתרגול מותאם של שרירי רצפת האגן.
          </p>

          <h2 className={h2Class}>מה בדיוק קורה כאן?</h2>
          <p className={pClass}>
            אחד המנגנונים המרכזיים המוצעים הוא שבסיום ההשתנה נשארת כמות קטנה של שתן בתוך השופכה
            הבולברית, החלק של השופכה שעובר באזור שבין שק האשכים לרצפת האגן. אחרי שההשתנה
            הסתיימה, שינוי תנוחה או תנועה יכולים לאפשר לשתן שנותר שם לצאת החוצה.
            <Ref n={1} />
            <Ref n={3} />
          </p>

          <ArticleFigure
            src="/professional-info/post-micturition-dribble-mechanism.webp"
            alt="חתך של שלפוחית השתן, הערמונית והשופכה, עם הגדלה של השופכה הבולברית ובה שארית שתן שנותרה לאחר סיום ההשתנה"
            caption="שארית שתן בשופכה הבולברית לאחר סיום ההשתנה, אחד המנגנונים המוצעים ל-PMD. הערמונית מופיעה כחלק מהאנטומיה ולא כגורם לתופעה."
          />

          <p className={pClass}>
            אחד השרירים שעשויים להשתתף בריקון הסופי של השופכה הוא Bulbospongiosus&rlm;, שריר
            ששייך למערכת שרירי רצפת האגן. בזמן כיווץ הוא יכול לסייע בדחיפת שארית השתן קדימה לאורך
            השופכה.
            <Ref n={1} />
            <Ref n={4} />
          </p>
          <p className={pClass}>
            <span className="font-bold">חשוב להדגיש</span>: ההסבר ש&rdquo;רצפת האגן
            חלשה&ldquo; נפוץ מאוד, אבל הוא לא מבוסס. לא הוכח ש-PMD&rlm; נגרם פשוט מחולשה של
            השרירים. לכן במקרים מסוימים הבעיה עשויה להיות קשורה דווקא לתזמון, לקואורדינציה
            וליכולת לבצע ריקון יעיל של השופכה בסיום ההשתנה, ולא לכוח. ברוב המקרים שבהם אין
            תסמינים נוספים שמצריכים בירור רפואי, נכון להתחיל בהערכה של רצפת האגן.
          </p>

          <h2 className={h2Class}>טפטוף בסוף ההשתנה או אחריה, מה ההבדל?</h2>
          <p className={pClass}>
            שני המצבים נשמעים דומים, וההבדל ביניהם הוא בתזמון.
          </p>
          <p className={pClass}>
            ב-PMD&rlm; זרם השתן כבר פסק וההשתנה הסתיימה, ולעיתים האדם כבר התרחק מהאסלה או החזיר
            את האיבר לתחתונים. לעומת זאת ב-Terminal Dribbling&rlm;, טפטוף בסוף ההשתנה, זרם השתן
            מאט בחלק האחרון של ההשתנה והופך לטיפות או לזרם דק ומטפטף, אך ההשתנה עדיין נמשכת.
            <Ref n={2} />
          </p>

          <ArticleFigure
            src="/professional-info/pmd-vs-terminal-dribbling.webp"
            alt="השוואה בין טפטוף בסוף ההשתנה, שבו הזרם עדיין נמשך, לבין טפטוף לאחר השתנה, שבו הטיפות מופיעות אחרי שההשתנה הסתיימה"
            caption="שני מצבים שונים שמובחנים זה מזה לפי התזמון, ולא לפי כמות הטיפות."
          />

          <p className={pClass}>
            גם שארית שתן בשלפוחית היא מושג אחר לגמרי. זו כמות שתן שנשארת בתוך השלפוחית לאחר
            ההתרוקנות, בעוד שב-PMD&rlm; מדובר בשתן שנותר בתוך השופכה עצמה.
            <Ref n={1} />
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="leading-8 text-black">
              הזרם עצמו נחלש והופך לטיפות לפני שהוא נפסק? ייתכן שמדובר דווקא בטפטוף בסוף
              ההשתנה.{" "}
              <Link
                href="/professional-info/terminal-dribbling"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:underline"
              >
                לקריאה על טפטוף בסוף ההשתנה
              </Link>
            </p>
          </div>

          <h2 className={h2Class}>האם זה קורה רק לגברים מבוגרים?</h2>
          <p className={pClass}>לא.</p>
          <p className={pClass}>
            במחקר שבדק 1,758 גברים בני 18 עד 35, בגיל ממוצע 21.7, כ-52% דיווחו על טפטוף לאחר
            השתנה. כשליש דיווחו שהוא מופיע בערך פעם מכל שלוש השתנות, וכ-9% דיווחו שהוא מופיע
            כמעט בכל פעם.
            <Ref n={5} /> גם במחקר אוכלוסייה מפינלנד נמצא{" "}
            <span className="font-bold">
              שטפטוף לאחר השתנה הוא התסמין שהפריע יותר מכולם דווקא בגילים הצעירים
            </span>. בקרב בני 30 ו-40, כ-25% דיווחו על הפרעה קלה וכ-4.5% על הפרעה בינונית עד
            משמעותית.
            <Ref n={7} />
          </p>
          <p className={pClass}>
            במחקר קוריאני שכלל 2,134 גברים מעל גיל 40 שהגיעו למרפאות עם תסמיני דרכי שתן תחתונות,
            51% דיווחו על טפטוף לאחר השתנה. חשוב לשים לב שמדובר בגברים שכבר פנו לבירור ולא
            באוכלוסייה הכללית, ולכן השיעור שם גבוה בהרבה.
            <Ref n={8} /> בסקר ארצי ביפן שכלל 3,122 גברים בני 20 עד 99, טפטוף לאחר השתנה נמצא
            אצל 15% מכלל המשתתפים. בקבוצת הגברים עד גיל 50 הוא נמצא אצל 12.8%, וזאת כאשר רק
            2.3% מהם דיווחו על הגדלה שפירה של הערמונית ו-7.1% על שלפוחית רגיזה.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            כלומר הופעת הטפטוף אצל גבר צעיר אינה מחייבת לחשוב קודם כל על הערמונית.
          </p>

          <h2 className={h2Class}>מה כן נמצא קשור לתופעה?</h2>
          <p className={pClass}>
            שני ממצאים מהשנים האחרונות נוגעים דווקא באופן שבו משתינים, ולא במבנה האנטומי.
          </p>
          <p className={pClass}>
            באותו סקר יפני נמצא שבגברים עד גיל 50, השתנה בישיבה נקשרה באופן עצמאי לטפטוף לאחר
            השתנה. הקשר נמצא גם אחרי התחשבות בתסמיני שתן אחרים.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            במחקר אחר לוו עשרים גברים בריאים בגיל ממוצע 36 באמצעות מד זרימה נייד במשך 48 שעות,
            ונמדדו 208 השתנות. הטפטוף הופיע ב-36% מההשתנות שבוצעו{" "}
            <span className="font-bold">ללא דחף אמיתי או עם דחף חלש</span>, לעומת 21%
            מההשתנות שבוצעו <span className="font-bold">עם דחף רגיל או חזק</span>. גם נפח השתנה
            נמוך מהרגיל נמצא כגורם סיכון.
            <Ref n={9} />
          </p>
          <p className={pClass}>
            שני המחקרים האלה קטנים יחסית ואינם מוכיחים סיבתיות, אבל הם מצביעים על כיוון מעשי:
            לא כל שינוי מחייב תרגול שרירים.
            <Ref n={6} />
            <Ref n={9} />
          </p>

          <h2 className={h2Class}>ומה לגבי ספורטאים ומתאמנים?</h2>
          <p className={pClass}>
            סקירת ספרות שבחנה תפקוד רצפת האגן אצל ספורטאים גברים מצאה בשישה מחקרים שכיחות של
            3.8% עד 18.8% של תסמיני דרכי שתן תחתונות או בריחת שתן, ודיווחה על קשר בין נפח
            האימון לבין שכיחות התסמינים. באותה סקירה, פעילות גופנית בנפח גבוה נמצאה דווקא מגנה
            מפני הפרעות זקפה וכאב אגן כרוני.
            <Ref n={10} />
          </p>
          <p className={pClass}>
            במחקר שכלל 204 מרימי כוח ומרימי משקולות אולימפיים גברים, 9.3% דיווחו על בריחת שתן.
            בנוסף, 74% מהם לא ידעו מדוע מתרגלים את שרירי רצפת האגן
            ו-<span className="font-bold">72.5% לא ידעו כיצד</span>.
            <Ref n={11} />
          </p>
          <p className={pClass}>
            עם זאת, המחקרים האלה לא בדקו PMD&rlm; כתסמין נפרד. נכון להיום אין נתונים שמראים
            שטפטוף לאחר השתנה שכיח יותר אצל ספורטאים, ואין ראיה שאימוני כוח או עלייה בלחץ
            התוך-בטני גורמים לו.
            <Ref n={10} />
            <Ref n={12} />
          </p>
          <p className={pClass}>
            ההבדל הזה חשוב, משום שבריחת שתן במאמץ וטפטוף לאחר השתנה הם שני מצבים שונים. ב-PMD&rlm;
            הדליפה מתרחשת אחרי שההשתנה כבר הסתיימה, והיא קשורה בעיקר לשתן שנותר בשופכה.
          </p>

          <h2 className={h2Class}>למה זה קורה?</h2>
          <p className={pClass}>במקרים רבים אין גורם יחיד וברור.</p>
          <ul className={ulClass}>
            <li>
              <span className="font-semibold">שארית שתן בשופכה:</span> כמות קטנה נשארת באזור
              השופכה הבולברית ומשתחררת לאחר שינוי תנוחה או תנועה.
              <Ref n={1} />
              <Ref n={3} />
            </li>
            <li>
              <span className="font-semibold">תפקוד לא יעיל של רצפת האגן:</span> הבעיה יכולה
              להיות בשליטה ובקואורדינציה ולא בהכרח בכוח.
              <Ref n={1} />
              <Ref n={4} />
            </li>
            <li>
              <span className="font-semibold">תסמיני שתן נוספים:</span>{" "}
              PMD&rlm; שכיח יותר אצל
              גברים שסובלים גם מזרם חלש, זרם מקוטע או צורך ללחוץ בסוף ההשתנה.
              <Ref n={6} />
              <Ref n={8} />
            </li>
            <li>
              <span className="font-semibold">גורם מבני או חסימה:</span>{" "}
              לעיתים PMD&rlm; מופיע
              יחד עם הגדלה שפירה של הערמונית, היצרות בשופכה או לאחר ניתוחים אורולוגיים.
              <Ref n={1} />
            </li>
          </ul>
          <p className={pClass}>לכן לא כל טפטוף לאחר השתנה הוא בעיה של רצפת האגן.</p>

          <h2 className={h2Class}>מה אפשר לעשות בפיזיותרפיה?</h2>
          <p className={pClass}>
            ההערכה מתחילה בבירור של התסמין עצמו: מתי הטיפות מופיעות, האם זה קורה בכל השתנה או
            רק לפעמים, מה קורה בדרך כלל ברגע שלפני, והאם קיימים תסמינים נוספים שמצריכים בירור
            רפואי.
          </p>
          <p className={pClass}>הטיפול עשוי לכלול:</p>
          <ul className={ulClass}>
            <li>הסבר על המנגנון עצמו, שלעיתים מפחית לבדו את העיסוק בתופעה</li>
            <li>הערכה של יכולת הכיווץ וההרפיה של שרירי רצפת האגן</li>
            <li>עבודה על תזמון וקואורדינציה של הכיווץ ולא רק על כוח</li>
            <li>תרגול מותאם של שרירי רצפת האגן</li>
            <li>טכניקה לריקון השופכה בסיום ההשתנה</li>
            <li>התאמות בהרגלי ההשתנה, למשל בתנוחה ובתזמון</li>
            <li>ביופידבק במקרים שבהם הוא מסייע ללמידת הכיווץ</li>
          </ul>
          <p className={pClass}>
            סקירה שיטתית שבחנה טיפולים ב-PMD&rlm; בגברים שלא עברו ניתוח בדרכי השתן מצאה ארבעה
            מחקרים בלבד, בסך הכול 344 משתתפים. בתוכם, תרגול שרירי רצפת האגן שיפר את התופעה יותר
            מריקון מכני של השופכה, ושניהם היו יעילים יותר מהסבר בלבד. הסקירה עצמה מגדירה את בסיס
            הראיות בתחום כדל.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            אצל ספורטאים ניתן להתייחס בהערכה גם לתפקוד רצפת האגן בזמן מאמץ ולדפוסי נשימה ולחיצה.
            עם זאת, הטיפול נבנה לפי הממצאים בבדיקה ולא מתוך הנחה שהאימון עצמו הוא הגורם.
            <Ref n={10} />
            <Ref n={12} />
          </p>

          <h2 className={h2Class}>תוך כמה זמן אפשר לראות שינוי?</h2>
          <p className={pClass}>
            במחקרים שבחנו תרגול של שרירי רצפת האגן, השיפור נמדד לאורך תקופה של מספר שבועות ולא
            תוך ימים.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            מצד שני, שינויים בהרגלי ההשתנה עצמם, כמו הימנעות מהשתנה כשהדחף עמום, הם דבר שאפשר
            לנסות מיד.
            <Ref n={9} /> בפועל, לרוב מורגש שינוי כבר בשבועות הראשונים.
          </p>

          <h2 className={h2Class}>האם יש קשר לתפקוד המיני?</h2>
          <p className={pClass}>
            במחקרים תצפיתיים נמצא קשר בין טפטוף לאחר השתנה לבין הפרעות זקפה. בסקר היפני הקשר
            נשמר גם אחרי התחשבות בגורמים אחרים.
            <Ref n={6} />
          </p>
          <p className={pClass}>
            הסיבה לקשר אינה ברורה. ייתכן שקיימים מנגנונים משותפים הקשורים לכלי דם, למערכת
            העצבים, לרצפת האגן או לתסמיני דרכי השתן. אחת ההשערות נוגעת ל-Bulbospongiosus&rlm;,
            שריר שמשתתף גם בריקון השופכה וגם בשלב הקשיחות של הזקפה, אם כי הקשר הזה לא נבדק
            ישירות. בכל מקרה, עצם קיומו של PMD&rlm; אינו אומר שקיימת בעיה בזקפה, ולהפך.
          </p>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/erectile-dysfunction-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              הפרעת זקפה ופיזיותרפיה של רצפת האגן
            </Link>
          </p>

          <h2 className={h2Class}>מתי כדאי להיבדק אצל רופא?</h2>
          <p className={pClass}>
            כאשר מדובר במספר טיפות לאחר השתנה ללא תסמינים נוספים, זהו לרוב מצב שאינו מסוכן.
            <Ref n={1} />
            <Ref n={3} />
          </p>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              דם בשתן, קושי משמעותי בהתרוקנות,{" "}
              <span className="font-bold">אצירת שתן</span> (חוסר יכולת להשתין), דלקות חוזרות
              בדרכי השתן, זרם חלש מאוד
              או שינוי משמעותי בזרם, כאב משמעותי או סימנים נוירולוגיים חדשים מצריכים בירור רפואי
              לפני שמניחים שמדובר בבעיה תפקודית בלבד.
              <Ref n={13} />
            </p>
          </div>
          <p className={pClass}>
            במצבים כאלה ייתכן צורך בבדיקות כגון בדיקת שתן, מדידת שארית שתן לאחר התרוקנות ובדיקת
            זרימת שתן.
            <Ref n={13} />
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
            heading="לא חייבים פשוט להתרגל לזה."
            intro="אם הטפטוף חוזר ואתה רוצה להבין מה עומד מאחוריו ומה ניתן לעשות, אפשר לבצע הערכה של תפקוד רצפת האגן ולהתאים טיפול בהתאם לממצאים."
            whatsappText="היי רועי, קראתי אצלך הסבר על PMD, ואשמח לבדוק אם הטיפול מתאים לי."
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
              Albakr A, El Ansari W, Mahdi M, et al. Postmicturition dribble in men with no previous
              urogenital surgery: systematic review and meta-analysis of treatment modalities.
              Neurourol Urodyn. 2024;43(7):1686-1698. doi:
              <a
                href="https://doi.org/10.1002/nau.25337"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.25337
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              D&apos;Ancona C, Haylen B, Oelke M, et al. The International Continence Society (ICS)
              report on the terminology for adult male lower urinary tract and pelvic floor symptoms
              and dysfunction. Neurourol Urodyn. 2019;38(2):433-477. doi:
              <a
                href="https://doi.org/10.1002/nau.23897"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/nau.23897
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Stephenson TP, Farrar DJ. Urodynamic study of 15 patients with postmicturition
              dribble. Urology. 1977;9(4):404-406.
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Siegel AL. Pelvic floor muscle training in males: practical applications. Urology.
              2014;84(1):1-7. doi:
              <a
                href="https://doi.org/10.1016/j.urology.2014.03.016"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.urology.2014.03.016
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Almaghlouth A, Almulla A, Alshebly A, Balghunaim A, Alwesali S. Prevalence of
              postmicturition dribble in young Saudi males: a mixed-methods study. Ann Afr Med.
              2025;24(4):916-921. doi:
              <a
                href="https://doi.org/10.4103/aam.aam_6_25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.4103/aam.aam_6_25
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Tomioka S, Matsukawa Y, Majima T, et al. Voiding posture as an associated factor of
              postmicturition dribble: insights from a nationwide epidemiological survey in Japanese
              men. World J Urol. 2026;44(1):545. doi:
              <a
                href="https://doi.org/10.1007/s00345-026-06662-0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s00345-026-06662-0
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Pöyhönen A, Auvinen A, Häkkinen JT, Koskimäki J, Tammela TL. Population-level and
              individual-level bother of lower urinary tract symptoms among 30- to 80-year-old men.
              Urology. 2016;95:164-170. doi:
              <a
                href="https://doi.org/10.1016/j.urology.2016.06.023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.urology.2016.06.023
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Jeong HC, Ko KT, Yang DY, et al. Development and validation of a symptom assessment
              tool for postmicturition dribble: a prospective, multicenter, observational study in
              Korea. PLoS One. 2019;14(10):e0223734. doi:
              <a
                href="https://doi.org/10.1371/journal.pone.0223734"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1371/journal.pone.0223734
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Tabata H, Kyoda Y, Nofuji S, et al. Voiding with less strength of desire to void is a
              risk factor for post micturition dribble. Urology. 2025;199:150-154. doi:
              <a
                href="https://doi.org/10.1016/j.urology.2025.02.022"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.urology.2025.02.022
              </a>
              .
            </li>
            <li id="ref-10" className="scroll-mt-24">
              Myers C, Doma K, Cooke J, Nahon I. Prevalence of pelvic floor dysfunction in male
              athletes and its dose-dependency in high-intensity exercise: a scoping review. J Sci
              Med Sport. 2026;29(4):351-359. doi:
              <a
                href="https://doi.org/10.1016/j.jsams.2025.10.008"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jsams.2025.10.008
              </a>
              .
            </li>
            <li id="ref-11" className="scroll-mt-24">
              Skaug KL, Engh ME, Frawley H, Bø K. Prevalence of pelvic floor dysfunction, bother,
              and risk factors and knowledge of the pelvic floor muscles in Norwegian male and
              female powerlifters and Olympic weightlifters. J Strength Cond Res.
              2022;36(10):2800-2807. doi:
              <a
                href="https://doi.org/10.1519/JSC.0000000000003919"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1519/JSC.0000000000003919
              </a>
              .
            </li>
            <li id="ref-12" className="scroll-mt-24">
              Courtaut García CI, Mateos Noblejas M, Romero Morales C, Martínez Pascual B. Thickness
              of the abdominal wall and pelvic floor dysfunctions in men who practice CrossFit vs no
              CrossFit: an observational study. PLoS One. 2024;19(7):e0296595. doi:
              <a
                href="https://doi.org/10.1371/journal.pone.0296595"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1371/journal.pone.0296595
              </a>
              .
            </li>
            <li id="ref-13" className="scroll-mt-24">
              Wei JT, Dauw CA, Brodsky CN. Lower urinary tract symptoms in men: a review. JAMA.
              2025;334(9):809-821. doi:
              <a
                href="https://doi.org/10.1001/jama.2025.7045"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1001/jama.2025.7045
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
