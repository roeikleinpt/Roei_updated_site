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

const article = getArticle("cervicogenic-headache");

export const metadata: Metadata = {
  title: "כאב ראש ממקור צווארי: תפקיד הפיזיותרפיה באבחון ובטיפול",
  description:
    "כאב ראש ממקור צווארי (Cervicogenic Headache) הוא כאב ראש משני שמקורו בצוואר העליון ומורגש בראש. מה מאפיין אותו, כיצד מאבחנים ומה תפקיד הפיזיותרפיה בטיפול.",
  alternates: { canonical: "/professional-info/cervicogenic-headache" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "כאב ראש ממקור צווארי (Cervicogenic Headache) | רועי קליין פיזיותרפיה",
    description:
      "מה מאפיין כאב ראש ממקור צווארי, כיצד מבדילים אותו ממיגרנה ומכאב ראש מתחי, ומה כולל הטיפול הפיזיותרפי.",
    url: "/professional-info/cervicogenic-headache",
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
    q: "האם כאב שמתחיל בעורף הוא בהכרח כאב ראש ממקור צווארי?",
    a: "לא. כאב בעורף יכול להופיע בכאב ראש ממקור צווארי, אך גם במיגרנה, בכאב ראש מתחי, בכאב עצבי ובמצבים נוספים. האבחנה דורשת שילוב של מאפייני הכאב וממצאי בדיקה.",
  },
  {
    q: "האם כאב הראש חייב להופיע בצד אחד?",
    a: "כאב חד צדדי שאינו מחליף צד נחשב מאפיין טיפוסי, אך לא כל מקרה מתאים באופן מלא לתיאור הזה. כאב דו צדדי אינו שולל לחלוטין מעורבות של הצוואר, אך מחייב לבחון אבחנות נוספות.",
  },
  {
    q: "האם טיפול אחד בצוואר אמור להעלים את כאב הראש?",
    a: "לעיתים טיפול מסוים יכול להביא להקלה מהירה, אך שינוי מתמשך דורש בדרך כלל שילוב של תרגול, התאמת עומסים וניהול עצמי. מספר המפגשים וקצב השיפור משתנים בהתאם למשך התסמינים, לממצאים ולגורמים נוספים.",
  },
];

export default function CervicogenicHeadacheArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            כאב ראש ממקור צווארי: תפקיד הפיזיותרפיה באבחון ובטיפול
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            כאבי ראש עשויים לנבוע מסיבות שונות. לעיתים מקור הכאב אינו בראש עצמו, אלא במפרקים,
            בשרירים או במבנים אחרים באזור הצוואר העליון. מצב כזה נקרא כאב ראש ממקור צווארי, או
            Cervicogenic Headache&rlm;. זהו כאב ראש משני, כלומר כאב שנוצר בעקבות הפרעה אחרת.
            במקרה זה מדובר בהפרעה במערכת השריר והשלד של הצוואר, שהכאב ממנה מורגש באזור הראש.
            <Ref n={1} />
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>מהו כאב ראש ממקור צווארי?</h2>
          <p className={pClass}>
            כאב ראש ממקור צווארי הוא כאב שמקורו בצוואר, אך הוא מורגש באזור הראש. המקורות האפשריים
            כוללים בעיקר מפרקים, שרירים, דיסקים, רצועות ועצבים המעוצבבים על ידי שלושת העצבים
            הצוואריים העליונים C1-C3&rlm;.
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            הכאב מתואר לרוב כחד צדדי, ללא מעבר קבוע מצד לצד. הוא עשוי להתחיל בצוואר או בבסיס
            הגולגולת ולהתקדם לעבר הרקה, המצח, הקודקוד או האזור שמאחורי העין. אצל חלק מהאנשים הכאב
            בצוואר בולט, ואצל אחרים כאב הראש הוא התלונה המרכזית.
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            לא כל כאב ראש שמלווה בכאב צוואר הוא בהכרח כאב ראש ממקור צווארי. כאב ונוקשות בצוואר
            שכיחים גם אצל אנשים עם מיגרנה וכאב ראש מתחי. לכן האבחנה אינה נקבעת רק לפי נוכחות כאב
            בצוואר, אלא לפי שילוב של סיפור המקרה, דפוס התסמינים וממצאי הבדיקה.
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={4} />
            <Ref n={5} />
            <Ref n={6} />
          </p>

          <h2 className={h2Class}>כיצד כאב מהצוואר מורגש בראש?</h2>
          <p className={pClass}>
            העצבים המעבירים מידע תחושתי מהחלק העליון של הצוואר נפגשים במערכת העצבים עם סיבים של
            העצב המשולש (עצב קרניאלי V&rlm;), העצב שאחראי על חלק גדול מהתחושה בפנים ובראש. אזור
            החיבור הזה מכונה המערכת הטריגמינו־צווארית.
          </p>
          <p className={pClass}>
            כאשר אותות כאב מגיעים ממפרק, משריר או ממבנה אחר בצוואר העליון, המוח עשוי לפרש אותם
            כאילו הגיעו מהראש. תהליך זה נקרא כאב מושלך. הוא מסביר כיצד הפרעה בצוואר יכולה לגרום
            לכאב בעורף, ברקה, במצח או סביב העין, אף שהמקור נמצא במקום אחר.
            <Ref n={3} />
            <Ref n={4} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>מאיפה הכאב עשוי להשליך?</h2>
          <p className={pClass}>
            דפוס הכאב משתנה מאדם לאדם, אך לעיתים קרובות הוא מתחיל באזור הצוואר העליון או בסיס
            הגולגולת ומתקדם קדימה.
          </p>

          <ArticleFigure
            src="/professional-info/cervicogenic-headache-referred-pain.webp"
            alt="איור פרופיל של ראש וצוואר המסמן אזורי כאב מושלך אפשרי — עורף, רקה ומצח, סביב העין, לחי ולסת, וצוואר וכתף — עם חצים היוצאים משרירי הצוואר העליון, לצד רשימת מאפיינים שכיחים"
            caption="דפוסי השלכה אפשריים של כאב שמקורו בצוואר העליון. האיור מציג אזורים שבהם הכאב עשוי להיות מורגש, אך דפוסי השלכה לבדם אינם מספיקים כדי לקבוע את מקור הכאב [3,5,7]."
          />

          <p className={pClass}>
            במחקר שבו נעשה שימוש בחסימות אבחנתיות מבוקרות בקרב 166 אנשים עם חשד לכאב ראש ממקור
            צווארי, ניתן היה לזהות מקור מפרקי לכאב אצל מרבית המשתתפים. המפרק C2–C3 היה המקור השכיח
            ביותר, אך לא המקור היחיד.
            <Ref n={7} />
          </p>
          <p className={pClass}>
            חשוב להדגיש שמפת ההשלכה אינה מאפשרת לזהות בוודאות איזה מפרק או שריר אחראי לכאב. דפוסי
            ההשלכה של מבנים שונים חופפים זה לזה, ולכן מיקום הכאב הוא רק חלק מההערכה.
          </p>

          <h2 className={h2Class}>אילו מאפיינים עשויים להתאים לכאב ראש ממקור צווארי?</h2>
          <p className={pClass}>המאפיינים השכיחים כוללים:</p>
          <ul className={ulClass}>
            <li>כאב ראש בצד אחד, שבדרך כלל אינו עובר מצד לצד</li>
            <li>כאב שמתחיל בצוואר או בבסיס הגולגולת ומתקדם קדימה</li>
            <li>החמרה בעת תנועה של הצוואר או לאחר שהייה ממושכת בתנוחה מסוימת</li>
            <li>הפקת כאב הראש בלחיצה או בתנועה של אזור הצוואר העליון</li>
            <li>ירידה בטווח התנועה של הצוואר</li>
            <li>כאב בצוואר, בשכמה, בכתף או בזרוע באותו צד</li>
            <li>כאב בעל אופי לוחץ או עמום, ולא בהכרח פועם</li>
            <li>
              התקפים באורך משתנה או כאב מתמשך שעוצמתו עולה ויורדת
              <Ref n={2} />
              <Ref n={3} />
              <Ref n={4} />
              <Ref n={5} />
              <Ref n={6} />
            </li>
          </ul>
          <p className={pClass}>
            בחילה, רגישות לאור או לרעש ותסמינים המזוהים עם מיגרנה יכולים להופיע גם בכאב ראש ממקור
            צווארי, אך בדרך כלל הם פחות דומיננטיים. נוכחותם אינה שוללת מקור צווארי, אך מחייבת
            אבחנה מבדלת זהירה.
            <Ref n={2} />
            <Ref n={3} />
            <Ref n={5} />
          </p>

          <h2 className={h2Class}>כיצד מאבחנים כאב ראש ממקור צווארי?</h2>
          <p className={pClass}>
            אין בדיקה אחת שמאבחנת את המצב בכל המקרים. ההערכה מתחילה בשיחה על מיקום הכאב, האופן שבו
            הוא מתחיל, פעילויות שמחמירות או מקלות עליו, משך ההתקפים ותסמינים נוספים.
          </p>

          <ArticleFigure
            src="/professional-info/cervicogenic-headache-physical-examination.webp"
            alt="אינפוגרפיקה בשמונה חלקים של מרכיבי הבדיקה בכאב ראש ממקור צווארי: טווחי תנועת הצוואר, הפקת הכאב, תנועתיות ורגישות מפרקי הצוואר העליון, תפקוד שרירי הצוואר העמוקים, כוח וסבולת, נקודות רגישות, סימנים עצביים ובדיקת הלסת לפי הצורך"
            caption="הערכת כאב ראש ממקור צווארי מבוססת על שילוב של סיפור המקרה וממצאי הבדיקה. הבדיקה אינה מסתמכת על ממצא יחיד, אלא על צירוף של מאפייני הכאב, תנועת הצוואר, תפקוד השרירים וממצאים נוספים לפי הצורך [2–6]."
          />

          <p className={pClass}>
            מחקרים מצאו ששילוב של ירידה בתנועת הצוואר, ממצאים במפרקי הצוואר העליון ופגיעה בתפקוד
            שרירי הכיפוף העמוקים מבחין טוב יותר בין כאב ראש ממקור צווארי לבין מיגרנה או כאב ראש
            מתחי מאשר כל בדיקה בנפרד.
            <Ref n={4} />
            <Ref n={6} />
          </p>
          <p className={pClass}>
            לפי הסיווג הבינלאומי של כאבי הראש, האבחנה מתחזקת כאשר כאב הראש הופיע בסמוך להפרעה
            בצוואר, משתנה בהתאם לשיפור או להחמרה שלה, מוגבל יחד עם טווחי הצוואר או מופק בתנועות
            צוואריות. במקרים נבחרים ניתן להשתמש בחסימה אבחנתית של עצב או מפרק, אך זו בדיקה פולשנית
            ואינה חלק מההערכה הרגילה בפיזיותרפיה.
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>מה תפקידם של השרירים ונקודות רגישות?</h2>
          <p className={pClass}>
            אצל חלק מהאנשים ניתן למצוא רגישות מוגברת או אזורים בשרירי הצוואר והכתפיים שבהם לחיצה
            משחזרת כאב מוכר בראש. שרירים שעשויים להיות מעורבים כוללים את השרירים הקטנים שמתחת
            לבסיס הגולגולת, שריר הטרפז העליון ושרירים בצדי הצוואר.
          </p>
          <p className={pClass}>
            מחקרים מוקדמים מצאו יותר נקודות רגישות בצד שבו הופיע כאב הראש, ולעיתים הלחיצה עליהן
            שחזרה את דפוס הכאב.
            <Ref n={13} /> עם זאת, רגישות שרירית מופיעה גם במיגרנה, בכאב ראש מתחי ובכאבי צוואר
            אחרים. לכן מציאת “טריגר פוינט” אינה מספיקה כדי לקבוע שכאב הראש נובע מהצוואר.
            <Ref n={6} />
            <Ref n={13} />
          </p>
          <p className={pClass}>
            השריר עשוי להיות מקור אפשרי לכאב, אך לעיתים הוא מגיב לכאב או לעומס ממבנה אחר. ההערכה
            צריכה לבדוק את תפקוד הצוואר כולו ולא להתמקד בנקודה רגישה אחת.
          </p>

          <h2 className={h2Class}>כיצד פיזיותרפיה עשויה לסייע?</h2>
          <p className={pClass}>
            מטרת הפיזיותרפיה היא לזהות אילו גורמים בצוואר ובחגורת הכתפיים קשורים לכאב, לשפר את
            היכולת לנוע ולתפקד ולהפחית את תדירות ועוצמת כאבי הראש. תוכנית הטיפול מותאמת לממצאי
            הבדיקה ויכולה לכלול כמה מרכיבים.
          </p>

          <h3 className={h3Class}>תרגול תנועה ושליטה</h3>
          <p className={pClass}>
            התרגול עשוי להתמקד בשיפור טווח התנועה, השליטה בתנועת הראש והצוואר ותפקוד שרירי הצוואר
            העמוקים. תרגילים אלה מבוצעים בתחילה בעומס נמוך ומתקדמים בהדרגה בהתאם ליכולת ולתגובה.
          </p>
          <p className={pClass}>
            המטרה אינה בהכרח “ליישר את היציבה”, אלא לשפר את היכולת של הצוואר להתמודד עם תנועה,
            עומס ושהייה בתנוחות שונות.
          </p>

          <h3 className={h3Class}>חיזוק וסבולת</h3>
          <p className={pClass}>
            כאשר קיימת ירידה בכוח או בסבולת, ניתן לתרגל את שרירי הצוואר, השכמות וחגורת הכתפיים.
            תוכנית התרגול יכולה לכלול עבודה על שרירי הכיפוף והיישור של הצוואר, תרגילי כתפיים
            ותרגול כללי.
          </p>
          <p className={pClass}>
            מתיחות בלבד אינן תמיד מספיקות. מחקרים מצביעים על כך ששילוב של תרגילי סבולת, כוח
            ושליטה עשוי להיות יעיל יותר מתוכנית שמבוססת רק על מתיחות.
            <Ref n={8} />
            <Ref n={9} />
            <Ref n={10} />
          </p>

          <h3 className={h3Class}>טיפול מנואלי</h3>
          <p className={pClass}>
            טיפול מנואלי יכול לכלול הנעה עדינה של מפרקי הצוואר, מוביליזציה ולעיתים מניפולציה.
            מטרתו לשפר תנועה ולהפחית כאב בטווח הקצר, באופן שמאפשר להתקדם בתרגול ובפעילות.
          </p>
          <p className={pClass}>
            כאשר קיימת רגישות שרירית משמעותית, ניתן לשלב טיפול מנואלי לשרירים, תנועה, תרגול
            ומתיחות מותאמות. ההשפעה של טיפול ברקמות רכות עשויה להיות זמנית, ולכן רצוי לשלב אותו עם
            תרגול וחזרה לפעילות.
          </p>
          <p className={pClass}>
            סקירות שיטתיות מצאו שטיפול מנואלי עשוי להפחית את תדירות ועוצמת כאבי הראש בטווח הקצר.
            התוצאות לטווח הארוך פחות עקביות, ולכן טיפול מנואלי אינו אמור להיות המרכיב היחיד
            בתוכנית.
            <Ref n={9} />
            <Ref n={10} />
            <Ref n={11} />
          </p>
          <p className={pClass}>
            מניפולציה צווארית אינה הכרחית לטיפול בכאב ראש ממקור צווארי. ניתן לבחור במוביליזציה,
            תרגול או גישות אחרות בהתאם למצב הרפואי, להעדפות המטופל ולשיקולי בטיחות.
          </p>

          <h3 className={h3Class}>תרגול עצמי לצוואר העליון</h3>
          <p className={pClass}>
            במקרים מסוימים ניתן ללמד תרגיל עצמי המשלב תנועה עם תמיכה באזור הצוואר העליון, המכונה
            לעיתים Self-SNAG&rlm;. התרגיל עשוי להתאים כאשר תנועה מסוימת מוגבלת או קשורה לכאב, אך
            יש להתאים את הכיוון והמינון באופן אישי.
            <Ref n={8} />
          </p>

          <h3 className={h3Class}>דיקור יבש</h3>
          <p className={pClass}>
            דיקור יבש עשוי להפחית כאב או מוגבלות בטווח הקצר אצל חלק מהמטופלים, בעיקר כאשר קיימת
            רגישות שרירית בולטת. עם זאת, איכות הראיות מוגבלת והתוצאות אינן מוכיחות שהטיפול נחוץ או
            עדיף על כל חלופה אחרת.
            <Ref n={11} />
            <Ref n={12} /> לכן דיקור יבש הוא אפשרות טיפולית ולא תנאי להצלחת הטיפול. אפשר לבנות
            תוכנית יעילה גם ללא דיקור.
          </p>

          <h3 className={h3Class}>התאמת עומסים והרגלים</h3>
          <p className={pClass}>
            ניתן לבחון האם הכאב מושפע משהייה ממושכת מול מחשב, נהיגה, עומסי עבודה, אימון גופני,
            שינה או פעילויות אחרות. ההתאמה אינה חייבת לכלול הימנעות מלאה, אלא שינוי זמני במינון,
            הפסקות תנועה וחזרה הדרגתית לעומס.
          </p>

          <h2 className={h2Class}>מה אומר המחקר על יעילות הפיזיותרפיה?</h2>
          <p className={pClass}>
            הראיות תומכות בעיקר בגישה המשלבת תרגול וטיפול מנואלי, ולא בהישענות על טכניקה יחידה.
            טיפול מנואלי עשוי להועיל במיוחד בטווח הקצר, בעוד שתרגול צווארי עשוי לתרום יותר לשיפור
            מתמשך.
            <Ref n={8} />
            <Ref n={9} />
            <Ref n={10} />
            <Ref n={11} />
          </p>
          <p className={pClass}>
            סקירת רשת משנת 2024 מצאה שכמה שילובים שכללו טיפול מנואלי, תרגול, טכניקות שריריות או
            דיקור יבש דורגו גבוה בהפחתת כאב ותדירות כאבי הראש. עם זאת, המחקרים היו שונים מאוד זה
            מזה וחלק גדול מההשוואות התבסס על ראיות עקיפות. לכן לא ניתן לקבוע שטכניקה אחת היא “הטיפול
            הטוב ביותר” לכל מטופל.
            <Ref n={11} />
          </p>

          <h2 className={h2Class}>מתי חשוב לפנות לבדיקה רפואית?</h2>
          <p className={pClass}>
            כאב ראש חדש או שינוי משמעותי בדפוס כאבי הראש מצדיקים הערכה רפואית, במיוחד כאשר לא
            בוצע בעבר בירור מתאים.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-amber-900">יש לפנות בדחיפות כאשר מופיע:</p>
            <ul className="mt-3 list-disc space-y-2 pr-6 leading-8 text-amber-950">
              <li>כאב ראש פתאומי וחזק מאוד שמגיע לשיא בתוך דקות</li>
              <li>חולשה, נימול, צניחה של צד בפנים או קושי בדיבור</li>
              <li>בלבול, עילפון, פרכוס או קושי חדש בהליכה</li>
              <li>אובדן ראייה, כפל ראייה או שינוי ראייה פתאומי</li>
              <li>חום גבוה, נוקשות חריגה בצוואר או פריחה</li>
              <li>כאב ראש חדש לאחר חבלת ראש</li>
              <li>
                כאב ראש חדש או מתקדם המלווה בהקאות, בירידה במצב הכללי או בתסמינים עצביים
                <Ref n={14} />
              </li>
            </ul>
          </div>
          <p className={pClass}>
            אין להניח שכאב ראש נובע מהצוואר לפני שנשללו מצבים אחרים כאשר קיימים סימני אזהרה.
          </p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-xl font-bold text-slate-900">בואו נבין מה קורה</p>
            <p className="mt-3 leading-8 text-black">
              כאבי ראש חוזרים אינם תמיד נובעים מהצוואר, וגם נוכחות כאב או נוקשות בצוואר אינה
              מספיקה כדי לקבוע את המקור. הערכה מסודרת יכולה לסייע לזהות האם קיימים ממצאים צוואריים
              משמעותיים, אילו פעילויות משפיעות על הכאב ואיזו תוכנית טיפול עשויה להתאים.
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
              Robinson CL, Christensen RH, Al-Khazali HM, et al. Prevalence and relative
              frequency of cervicogenic headache in population- and clinic-based studies: a
              systematic review and meta-analysis. Cephalalgia. 2025;45(3). doi:
              <a
                href="https://doi.org/10.1177/03331024251322446"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1177/03331024251322446
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Headache Classification Committee of the International Headache Society. 11.2.1
              Cervicogenic headache. International Classification of Headache Disorders, 3rd
              edition.{" "}
              <a
                href="https://ichd-3.org/11-2-1-cervicogenic-headache/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                ichd-3.org
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Bogduk N, Govind J. Cervicogenic headache: an assessment of the evidence on clinical
              diagnosis, invasive tests, and treatment. Lancet Neurol. 2009;8(10):959-968. doi:
              <a
                href="https://doi.org/10.1016/S1474-4422(09)70209-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/S1474-4422(09)70209-1
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Jull G. Cervicogenic headache. Musculoskelet Sci Pract. 2023;66:102787. doi:
              <a
                href="https://doi.org/10.1016/j.msksp.2023.102787"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.msksp.2023.102787
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Piovesan EJ, Utiumi MAT, Grossi DB. Cervicogenic headache: how to recognize and
              treat. Best Pract Res Clin Rheumatol. 2024;38(1):101931. doi:
              <a
                href="https://doi.org/10.1016/j.berh.2024.101931"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.berh.2024.101931
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Zito G, Jull G, Story I. Clinical tests of musculoskeletal dysfunction in the
              diagnosis of cervicogenic headache. Man Ther. 2006;11(2):118-129. doi:
              <a
                href="https://doi.org/10.1016/j.math.2005.04.007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.math.2005.04.007
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Govind J, Bogduk N. Sources of cervicogenic headache among the upper cervical
              synovial joints. Pain Med. 2022;23(6):1059-1065. doi:
              <a
                href="https://doi.org/10.1093/pm/pnaa469"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/pm/pnaa469
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Blanpied PR, Gross AR, Elliott JM, et al. Neck pain: revision 2017. J Orthop Sports
              Phys Ther. 2017;47(7):A1-A83. doi:
              <a
                href="https://doi.org/10.2519/jospt.2017.0302"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.2519/jospt.2017.0302
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Demont A, Lafrance S, Gaska C, et al. Efficacy of physiotherapy interventions for the
              management of adults with cervicogenic headache: a systematic review and
              meta-analyses. PM R. 2023;15(5):613-628. doi:
              <a
                href="https://doi.org/10.1002/pmrj.12856"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1002/pmrj.12856
              </a>
              .
            </li>
            <li id="ref-10" className="scroll-mt-24">
              Bini P, Hohenschurz-Schmidt D, Masullo V, Pitt D, Draper-Rodi J. The effectiveness of
              manual and exercise therapy on headache intensity and frequency among patients with
              cervicogenic headache: a systematic review and meta-analysis. Chiropr Man Therap.
              2022;30:49. doi:
              <a
                href="https://doi.org/10.1186/s12998-022-00459-9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1186/s12998-022-00459-9
              </a>
              .
            </li>
            <li id="ref-11" className="scroll-mt-24">
              Jung A, Carvalho GF, Szikszay TM, Pawlowsky V, Gabler T, Luedtke K. Physical therapist
              interventions to reduce headache intensity, frequency, and duration in patients with
              cervicogenic headache: a systematic review and network meta-analysis. Phys Ther.
              2024;104(2):pzad154. doi:
              <a
                href="https://doi.org/10.1093/ptj/pzad154"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/ptj/pzad154
              </a>
              .
            </li>
            <li id="ref-12" className="scroll-mt-24">
              Pourahmadi M, Dommerholt J, Fernández-de-Las-Peñas C, et al. Dry needling for the
              treatment of tension-type, cervicogenic, or migraine headaches: a systematic review
              and meta-analysis. Phys Ther. 2021;101(5):pzab068. doi:
              <a
                href="https://doi.org/10.1093/ptj/pzab068"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/ptj/pzab068
              </a>
              .
            </li>
            <li id="ref-13" className="scroll-mt-24">
              Jaeger B. Are &quot;cervicogenic&quot; headaches due to myofascial pain and cervical
              spine dysfunction? Cephalalgia. 1989;9(3):157-164. doi:
              <a
                href="https://doi.org/10.1046/j.1468-2982.1989.0903157.x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1046/j.1468-2982.1989.0903157.x
              </a>
              .
            </li>
            <li id="ref-14" className="scroll-mt-24">
              National Institute for Health and Care Excellence. Headaches in over 12s: diagnosis
              and management. Clinical guideline CG150.{" "}
              <a
                href="https://www.nice.org.uk/guidance/cg150"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                nice.org.uk
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
