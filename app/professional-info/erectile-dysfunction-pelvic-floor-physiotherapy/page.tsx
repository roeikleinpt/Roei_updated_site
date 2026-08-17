import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import ArticleBreadcrumb from "../../components/ArticleBreadcrumb";
import ArticleByline from "../../components/ArticleByline";
import ArticleJsonLd from "../../components/ArticleJsonLd";
import ArticleFaq from "../../components/ArticleFaq";
import ArticleFigure from "../../components/ArticleFigure";
import FigurePair from "../../components/FigurePair";
import PerinealMuscleFigure, { MuscleDetails } from "../../components/PerinealMuscleFigure";
import AuthorBox from "../../components/AuthorBox";
import { getArticle } from "../../data/articles";
import { siteConfig } from "../../config/site";

const article = getArticle("erectile-dysfunction-pelvic-floor-physiotherapy");

const CREDIT = "Image used with permission from Pelvic Guru®, LLC as a Pelvic Global Member";

export const metadata: Metadata = {
  title: "הפרעת זקפה (Erectile Dysfunction) ופיזיותרפיה של רצפת האגן",
  description:
    "הפרעת זקפה היא מצב רב־גורמי, ורצפת האגן היא רק אחד המרכיבים האפשריים. כיצד נוצרת זקפה, מה תפקידם של שרירי רצפת האגן בשלב הקשיחות, מה מצאו המחקרים על תרגול, ומדוע הבירור הרפואי נשאר חיוני.",
  alternates: {
    canonical: "/professional-info/erectile-dysfunction-pelvic-floor-physiotherapy",
  },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "הפרעת זקפה ופיזיותרפיה של רצפת האגן | רועי קליין פיזיותרפיה",
    description:
      "המנגנון הווסקולרי והשרירי של הזקפה, ההבדל בין Ischiocavernosus ל־Bulbospongiosus, מה מצאו המחקרים על אימון רצפת אגן, ומדוע פיזיותרפיה אינה מחליפה בירור רפואי.",
    url: "/professional-info/erectile-dysfunction-pelvic-floor-physiotherapy",
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
    q: "האם צריך פשוט לעשות תרגילי קיגל?",
    a: "לא. תרגילי קיגל הם תרגילי כיווץ וחיזוק של רצפת האגן, ותפקוד תקין דורש יותר מכוח בלבד: גם זיהוי השרירים הנכונים, גיוס מדויק שלהם, שמירה על כיווץ, תזמון והרפיה. תוכנית התרגול נקבעת לפי הממצאים בהערכה ולא לפי הנחה מראש.",
  },
  {
    q: "האם בדיקה פנימית היא חובה?",
    a: "לא. בדיקה פנימית יכולה לספק מידע נוסף במקרים מסוימים, אך היא אינה חובה. אם נשקלת בדיקה כזו, היא נעשית רק לאחר הסבר ובהסכמה.",
  },
  {
    q: "האם פיזיותרפיה מחליפה טיפול תרופתי?",
    a: "לא. בהנחיות האירופיות תרופות ממשפחת PDE5 inhibitors, הכוללות בין היתר סילדנפיל (ויאגרה) וטדלאפיל (סיאליס), נחשבות טיפול קו ראשון כאשר הן מתאימות למטופל. פיזיותרפיה של רצפת האגן יכולה להשתלב בתוכנית הטיפול כאשר ההערכה מצביעה על מרכיב שרירי מתאים.",
  },
  {
    q: "האם ביופידבק הכרחי כדי להתקדם?",
    a: "לא בהכרח. במחקרים שבהם נעשה שימוש בביופידבק הוא ניתן כחלק מתוכנית שכללה גם תרגול והדרכה, ולכן לא ניתן לקבוע שהוא אחראי לשיפור בפני עצמו. מטרתו הקלינית היא בעיקר לסייע בזיהוי השרירים ובדיוק הביצוע.",
  },
];

export default function ErectileDysfunctionPelvicFloorArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            הפרעת זקפה ופיזיותרפיה של רצפת האגן
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            הפרעת זקפה, המכונה גם אין אונות או אימפוטנציה, היא קושי מתמשך להשיג או לשמור על זקפה
            המספיקה לפעילות מינית. הסיבה אינה
            תמיד אחת: הפרעת זקפה יכולה להיות קשורה לגורמים וסקולריים, נוירולוגיים, הורמונליים,
            פסיכולוגיים, לתרופות או לשילוב של מספר גורמים.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            לשרירי רצפת האגן יש תפקיד בתפקוד המיני ובשמירה על קשיחות הזקפה. לכן, אצל חלק מהגברים,
            הערכה וטיפול פיזיותרפי של רצפת האגן יכולים להשתלב לצד הבירור והטיפול הרפואי.
          </p>

          <h2 className={h2Class}>איך נוצרת ונשמרת זקפה?</h2>
          <p className={pClass}>
            הזקפה מתחילה בעיקר כתהליך וסקולרי ועצבי. הרפיית השריר החלק בעורקי הפין וברקמה הזקפתית
            מאפשרת כניסת דם אל הגופים המחילתיים (Corpora cavernosa)&rlm;. עם התמלאותם עולה הלחץ
            בתוך הפין ומופעל מנגנון שמפחית את יציאת הדם ממנו.
            <Ref n={1} />
            <Ref n={2} />
          </p>

          <ArticleFigure
            src="/professional-info/penis-cross-section-anatomy.webp"
            alt="איור אנטומי של חתך רוחב בפין ובו הגופים המחילתיים, הגוף הספוגי, השופכה, הטוניקה אלבוגינאה, העורק המחילתי, העורק והווריד הגביים והעצב הגבי"
            caption="חתך רוחב בפין: שני הגופים המחילתיים מעל, הגוף הספוגי עם השופכה מתחת, והמבנים הנוירו־וסקולריים בצד הגבי."
            credit={CREDIT}
          />

          <p className={pClass}>
            אך כדי לעבור מזקפה למצב של קשיחות גבוהה נדרשת גם פעילות שרירית. שרירי רצפת האגן
            השטחיים נמצאים סביב בסיס הפין ויכולים להשפיע על הלחצים ברקמות הזקפתיות. מבין השרירים
            האלה, שניים חשובים במיוחד להבנת התפקוד המיני הגברי: Ischiocavernosus&rlm;
            ו־Bulbospongiosus&rlm;, המכונה גם Bulbocavernosus&rlm;.
            <Ref n={2} />
            <Ref n={3} />
          </p>

          <h2 className={h2Class}>מה משתנה ברקמות הזקפתיות בזמן זקפה?</h2>
          <p className={pClass}>
            במצב רפוי חללי הדם בגופים המחילתיים קטנים יחסית. בעקבות גירוי עצבי מתרחבים כלי הדם
            ונכנסת כמות גדולה יותר של דם אל הגופים המחילתיים. הרקמה מתרחבת, הלחץ בתוכה עולה ויציאת
            הדם הוורידית מצטמצמת. מנגנון זה מאפשר את התפתחות הזקפה ושמירתה.
          </p>

          <FigurePair
            items={[
              {
                src: "/professional-info/penis-cross-section-flaccid.webp",
                alt: "חתך רוחב בפין במצב רפוי: הגופים המחילתיים חיוורים וחללי הדם שבהם קטנים יחסית",
                label: "במצב רפוי",
              },
              {
                src: "/professional-info/penis-cross-section-erect.webp",
                alt: "חתך רוחב באותו פין בזמן זקפה: הגופים המחילתיים אדומים ומורחבים וחללי הדם שבהם מלאים",
                label: "בזמן זקפה",
              },
            ]}
            caption="אותו חתך בשני מצבים. בזמן זקפה חללי הדם בגופים המחילתיים מתמלאים ומתרחבים, הרקמה נמתחת והלחץ בתוכה עולה."
            credit={CREDIT}
          />

          <p className={pClass}>
            מעבר למנגנון העצבי־וסקולרי, גם לשרירים השטחיים של רצפת האגן יש תפקיד בתפקוד המיני
            ובשלב הקשיחות.
          </p>

          <h2 className={h2Class}>השרירים השטחיים של רצפת האגן הגברית</h2>
          <p className={pClass}>
            הקישו על שריר באיור או על אחת התיבות שמתחתיו כדי לקרוא מה ידוע על תפקידו.
          </p>

          <PerinealMuscleFigure
            src="/professional-info/superficial-perineal-muscles.webp"
            alt="איור של רצפת האגן הגברית מלמטה, ובו השרירים השטחיים חשופים בצד אחד ומכוסים בפאסיה בצד השני, עם הדגשה של שריר ה־Ischiocavernosus הצדדי ושל שריר ה־Bulbospongiosus המדיאלי"
            caption="השרירים השטחיים של רצפת האגן הגברית. הצד השמאלי באיור מראה את השרירים עצמם, ובצד הימני הם מכוסים בפאסיה."
            credit={CREDIT}
          >
            <MuscleDetails
              id="ischiocavernosus"
              n={1}
              name="Ischiocavernosus"
              lead="עוטף את שורשי הפין (crura). בזמן זקפה כיווצו יכול להעלות את הלחץ בתוך הגופים המחילתיים ולתרום לשלב הקשיחות המרבית."
            >
              <p className="leading-8 text-black">
                שריר ה־Ischiocavernosus&rlm; עוטף את ה־crura&rlm;, החלקים המקורבים של הגופים
                המחילתיים. כאשר הוא מתכווץ במהלך זקפה הוא מפעיל לחץ על ה־crura ומעלה את הלחץ בתוך
                ה־corpora cavernosa&rlm;.
              </p>
              <p className="mt-4 leading-8 text-black">
                במחקרים פיזיולוגיים בבני אדם נמצא שכיווץ השריר יכול להביא את הלחץ התוך־מחילתי לרמות
                העולות על לחץ הדם הסיסטולי. שלב זה תורם למעבר מזקפה למצב של קשיחות מלאה.
                <Ref n={2} />
                <Ref n={4} />
                <Ref n={5} />{" "}
                לכן זהו השריר שעבורו קיימת כיום העדות הישירה ביותר לקשר בין פעילות שרירי רצפת האגן
                לבין קשיחות הזקפה.
              </p>
            </MuscleDetails>

            <MuscleDetails
              id="bulbospongiosus"
              n={2}
              name="Bulbospongiosus"
              lead="נמצא סביב ה־bulb וה־corpus spongiosum. הוא משתתף בתפקוד המיני ובולט במיוחד בכיווצים הקשורים לשלב הפליטה של השפיכה."
            >
              <p className="leading-8 text-black">
                שריר ה־Bulbospongiosus&rlm; נמצא סביב ה־bulb של הפין והחלק הפרוקסימלי של
                ה־corpus spongiosum&rlm;. גם הוא חלק ממערכת השרירים הפעילה בזמן תפקוד מיני, אך
                תפקידו אינו זהה לזה של ה־Ischiocavernosus&rlm;.
              </p>
              <p className="mt-4 leading-8 text-black">
                במחקרי אדם, גירוי של ה־Bulbospongiosus&rlm; העלה בעיקר את הלחץ ב־bulbar urethra
                וב־corpus spongiosum&rlm;, בעוד גירוי ה־Ischiocavernosus&rlm; העלה באופן משמעותי
                את הלחץ ב־corpora cavernosa&rlm;.
                <Ref n={3} />{" "}
                ל־Bulbospongiosus&rlm; תפקיד משמעותי במיוחד גם בשלב הפליטה של השפיכה, שבו כיווצים
                קצביים של השריר מסייעים להוצאת נוזל הזרע.
                <Ref n={2} />
              </p>
            </MuscleDetails>
          </PerinealMuscleFigure>

          <p className={pClass}>
            כלומר, שני השרירים הם חלק מהמערכת המינית של רצפת האגן, אך כאשר מדברים באופן ספציפי על
            יצירת קשיחות הזקפה, העדות הפיזיולוגית הישירה חזקה יותר עבור ה־Ischiocavernosus&rlm;.
          </p>

          <h2 className={h2Class}>האם חולשה של רצפת האגן קשורה להפרעת זקפה?</h2>
          <p className={pClass}>
            קיים קשר בין כוח שרירי רצפת האגן לבין תפקוד זקפתי. במחקר תצפיתי שכלל 247 גברים, כוח
            מרבי נמוך יותר של רצפת האגן היה קשור באופן עצמאי לתפקוד זקפתי ירוד יותר. כוח הנמוך
            מ־1.9 kgf היה קשור לסיכוי גבוה יותר לציון IIEF-5 של 12 ומטה.
            <Ref n={6} />{" "}
            עם זאת, מדובר בקשר סטטיסטי ולא בהוכחה שחולשת רצפת האגן היא הסיבה להפרעת הזקפה. הפרעת
            זקפה היא מצב רב־גורמי, ולכן אין להסיק שכל גבר עם הפרעת זקפה זקוק לחיזוק של רצפת האגן.
          </p>

          <h2 className={h2Class}>מה המקום של פיזיותרפיה בטיפול בהפרעת זקפה?</h2>
          <p className={pClass}>
            פיזיותרפיה של רצפת האגן מהווה מרכיב משלים בתוכנית הטיפול, כאשר קיימת הצדקה לכך לפי
            ההערכה. כאשר אין רצון להתחיל בטיפול תרופתי, היא יכולה גם להוות קו טיפול ראשון.
            <Ref n={7} />{" "}
            עם זאת, במחקר שבו נבדק שילוב של תרגול לצד טיפול תרופתי, השילוב הניב תוצאות טובות יותר
            מהטיפול התרופתי בלבד.
            <Ref n={8} />{" "}
            מטרת ההערכה אינה להניח שרצפת האגן היא מקור הבעיה, אלא לבדוק האם היא מהווה חלק מהתמונה
            והאם קיים מרכיב שניתן להשפיע עליו. מטרת הטיפול אינה רק לתת תרגילי כיווץ, אלא להעריך את
            יכולת הגיוס והשליטה בשרירי רצפת האגן ולבנות תוכנית תרגול בהתאם לממצאים.
          </p>
          <p className={pClass}>
            מקומו של הטיפול הוא בעיקר כאשר ההערכה מצביעה על כך שגם לתפקוד שרירי רצפת האגן עשוי
            להיות חלק בתמונה. שרירים אלה, ובמיוחד ה־Ischiocavernosus&rlm;, משתתפים במנגנון שמעלה
            את הלחץ בתוך הגופים המחילתיים ותורם לקשיחות הזקפה.
            <Ref n={4} />
            <Ref n={5} />
          </p>
          <p className={pClass}>
            פיזיותרפיה של רצפת האגן אינה טיפול שמתאים לכל מקרה של הפרעת זקפה, ואינה מחליפה בירור
            רפואי או טיפול תרופתי כאשר הם נדרשים.
          </p>

          <h2 className={h2Class}>מה מצאו המחקרים על תרגול רצפת האגן?</h2>
          <p className={pClass}>
            מחקרים מצביעים על כך שאימון שרירי רצפת האגן (Pelvic Floor Muscle Training – PFMT)&rlm;
            עשוי לשפר את התפקוד הזקפתי אצל חלק מהגברים.
            <Ref n={9} />
          </p>
          <p className={pClass}>
            במחקר אקראי שכלל 55 גברים עם הפרעת זקפה, המשתתפים קיבלו הדרכה לתרגול שרירי רצפת האגן
            על ידי פיזיותרפיסט, יחד עם ביופידבק מנומטרי ושינויים באורח החיים. לאחר שלושה חודשים
            נמצא שיפור משמעותי במדד התפקוד הזקפתי.
            <Ref n={10} />{" "}
            בהערכה עיוורת לאחר שישה חודשים, 40% מהגברים חזרו לתפקוד זקפתי שהוגדר תקין ו־35.5%
            נוספים השתפרו.
            <Ref n={7} />
          </p>
          <p className={pClass}>
            מחקרים נוספים מצאו שיפור במדדים פיזיולוגיים הקשורים לתפקוד הזקפתי לאחר אימון המכוון
            בין היתר ל־Ischiocavernosus&rlm;.
            <Ref n={11} />{" "}
            במחקר אקראי מ־2026 בגברים בני 35–55 עם סוכרת מסוג 2 והפרעת זקפה עורקית, PFMT&rlm; ביתי
            שניתן בנוסף לסילדנפיל שיפר הן את ציון ה־IIEF-5 והן את מהירות זרימת הדם בעורק הקברנוזלי
            בהשוואה לסילדנפיל בלבד. טיפול בגלי הלם בעוצמה נמוכה הביא לשיפור גדול יותר מ־PFMT באותה
            אוכלוסייה.
            <Ref n={8} />
          </p>
          <p className={pClass}>
            המחקר על PFMT מתייחס בעיקר לגברים שבהם קיים מרכיב שעשוי להיות מושפע מתפקוד שרירי רצפת
            האגן, ובפרט לחלק מהגברים עם הפרעת זקפה וסקולרית. קיימים גם מחקרים על PFMT לאחר כריתת
            ערמונית, אך איכות המחקרים והפרוטוקולים משתנה.
            <Ref n={9} />
            <Ref n={12} />{" "}
            ובחלק מהמחקרים התרגול ניתן לצד טיפול רפואי ולא במקומו.
          </p>
          <p className={pClass}>
            נכון להיום אין דרך מבוססת לקבוע מראש אילו גברים עם הפרעת זקפה יגיבו בצורה הטובה ביותר
            לפיזיותרפיה, וגם לא הוגדר פרוטוקול PFMT אחד שהוכח כעדיף. בין המחקרים קיימים הבדלים
            בתדירות האימון, בעוצמתו, במשך התוכנית, במספר המפגשים עם הפיזיותרפיסט ובשימוש באמצעי
            משוב נוספים.
            <Ref n={9} />
            <Ref n={12} />{" "}
            המשותף להם הוא שהתרגול ניתן במסגרת תוכנית מובנית. לעומת זאת &rdquo;קיגל&rdquo; הוא שם
            גנרי לתרגול רצפת אגן שרבים מתחילים על דעת עצמם, ולרוב הוא מתבצע ככיווץ כללי של רצפת
            האגן ולא ככיווץ ממוקד של השרירים השטחיים.
          </p>

          <h2 className={h2Class}>מה כוללת הערכה פיזיותרפית?</h2>
          <p className={pClass}>
            ההערכה מתחילה בשיחה על אופי הקושי: האם הבעיה היא בהשגת הזקפה, בשמירה עליה או בקשיחות,
            האם היא מופיעה בכל מצב או רק בחלק מהמצבים, והאם קיימים במקביל כאב, שינויים בשפיכה,
            תסמינים שתניים או בעיות נוספות בתפקוד המיני.
          </p>
          <p className={pClass}>בבדיקה ניתן להעריך את היכולת:</p>
          <ul className={ulClass}>
            <li>לזהות ולגייס את שרירי רצפת האגן</li>
            <li>לבצע כיווץ ללא פיצוי מוגזם של הבטן, הישבן או שרירים אחרים</li>
            <li>לייצר ולשמור על כוח</li>
            <li>לבצע כיווצים חוזרים</li>
            <li>להרפות לאחר הכיווץ</li>
            <li>לשלוט ולתזמן את הפעילות השרירית בהתאם למשימה</li>
          </ul>
          <p className={pClass}>
            בהתאם לצורך ניתן להשתמש באולטרסאונד כביופידבק כדי לסייע למטופל לראות בזמן אמת את
            פעילות האזור ולתרגל שליטה מדויקת יותר. בדיקה פנימית אינה חובה; היא נשקלת לפי צורך,
            לאחר הסבר ובהסכמה.
          </p>

          <h2 className={h2Class}>מה לגבי ביופידבק?</h2>
          <p className={pClass}>
            בחלק מהמחקרים על PFMT והפרעת זקפה נעשה שימוש בביופידבק מנומטרי. במחקר של Dorey&rlm;,
            לדוגמה, תרגול בהדרכת פיזיותרפיסט שולב עם מדידת לחץ אנאלית שנתנה למטופל משוב על הכיווץ.
            <Ref n={10} />{" "}
            עם זאת, הביופידבק ניתן כחלק מתוכנית שכללה גם תרגול והדרכה. לכן אי אפשר לקבוע מהמחקרים
            האלה שהביופידבק בפני עצמו אחראי לשיפור או שהוא עדיף על תרגול איכותי ללא ביופידבק.
            <Ref n={9} />{" "}
            המטרה הקלינית של משוב היא בעיקר לסייע בזיהוי השרירים, בשיפור הדיוק ובתרגול השליטה בהם.
          </p>

          <h2 className={h2Class}>חשוב לא לוותר על בירור רפואי</h2>
          <p className={pClass}>
            הפרעת זקפה אינה רק עניין של שרירי רצפת האגן. היא יכולה להיות קשורה בין היתר לסוכרת,
            יתר לחץ דם, שומנים בדם, מחלות כלי דם, הפרעות הורמונליות, מחלות נוירולוגיות, תרופות
            וגורמים פסיכולוגיים.
            <Ref n={1} />
          </p>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <p className="leading-8 text-amber-950">
              קיימת זיקה בין הפרעת זקפה לבין מחלות לב וכלי דם, ולכן בירור רפואי יכול להיות חשוב גם
              לצורך זיהוי גורמי סיכון שאינם קשורים ישירות לתפקוד המיני.
              <Ref n={1} />
            </p>
          </div>
          <p className={pClass}>
            לקריאה נוספת:{" "}
            <Link
              href="/professional-info/mens-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              טיפול רצפת אגן לגבר
            </Link>{" "}
            ו־
            <Link
              href="/professional-info/premature-ejaculation-pelvic-floor-physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              שפיכה מוקדמת ופיזיותרפיה של רצפת האגן
            </Link>
            .
          </p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              אם קיים קושי בזקפה ורוצים לבדוק האם גם לתפקוד רצפת האגן יש חלק בתמונה, הערכה
              פיזיותרפית יכולה לעזור להבין האם קיים מרכיב שניתן לטפל בו.
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
              European Association of Urology. EAU Guidelines on Sexual and Reproductive Health:
              Management of Erectile Dysfunction. 2026 Edition. Arnhem, The Netherlands: EAU
              Guidelines Office.{" "}
              <a
                href="https://uroweb.org/guidelines/sexual-and-reproductive-health"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                uroweb.org
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Gratzke C, Angulo J, Chitaley K, et al. Anatomy, Physiology, and Pathophysiology of
              Erectile Dysfunction. J Sex Med. 2010;7(1 Pt 2):445-475. doi:
              <a
                href="https://doi.org/10.1111/j.1743-6109.2009.01624.x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1111/j.1743-6109.2009.01624.x
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Shafik A. Response of the Urethral and Intracorporeal Pressures to Cavernosus Muscle
              Stimulation: Role of the Muscles in Erection and Ejaculation. Urology.
              1995;46(1):85-88. doi:
              <a
                href="https://doi.org/10.1016/S0090-4295(99)80165-4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/S0090-4295(99)80165-4
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Lavoisier P, Courtois F, Barres D, Blanchard M. Correlation Between Intracavernous
              Pressure and Contraction of the Ischiocavernosus Muscle in Man. J Urol.
              1986;136(4):936-939. doi:
              <a
                href="https://doi.org/10.1016/S0022-5347(17)45135-4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/S0022-5347(17)45135-4
              </a>
              .
            </li>
            <li id="ref-5" className="scroll-mt-24">
              Schmidt MH, Schmidt HS. The Ischiocavernosus and Bulbospongiosus Muscles in Mammalian
              Penile Rigidity. Sleep. 1993;16(2):171-183. doi:
              <a
                href="https://doi.org/10.1093/sleep/16.2.171"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1093/sleep/16.2.171
              </a>
              .
            </li>
            <li id="ref-6" className="scroll-mt-24">
              Kim JK, Lee YJ, Kim H, et al. A Prospectively Collected Observational Study of Pelvic
              Floor Muscle Strength and Erectile Function Using a Novel Personalized Extracorporeal
              Perineometer. Sci Rep. 2021;11(1):18389. doi:
              <a
                href="https://doi.org/10.1038/s41598-021-97230-6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1038/s41598-021-97230-6
              </a>
              .
            </li>
            <li id="ref-7" className="scroll-mt-24">
              Dorey G, Speakman MJ, Feneley RC, Swinkels A, Dunn CD. Pelvic Floor Exercises for
              Erectile Dysfunction. BJU Int. 2005;96(4):595-597. doi:
              <a
                href="https://doi.org/10.1111/j.1464-410X.2005.05690.x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1111/j.1464-410X.2005.05690.x
              </a>
              .
            </li>
            <li id="ref-8" className="scroll-mt-24">
              Ahmad AM, Abosteit EH, Said Kadah A, Draz RS. Low-Intensity Shockwave Therapy and
              Pelvic Floor Muscle Training Each Mitigate Erectile Dysfunction in Men With Diabetes:
              A Randomised Controlled Trial. J Physiother. 2026;72(2):122-127. doi:
              <a
                href="https://doi.org/10.1016/j.jphys.2026.03.009"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jphys.2026.03.009
              </a>
              .
            </li>
            <li id="ref-9" className="scroll-mt-24">
              Myers C, Smith M. Pelvic Floor Muscle Training Improves Erectile Dysfunction and
              Premature Ejaculation: A Systematic Review. Physiotherapy. 2019;105(2):235-243. doi:
              <a
                href="https://doi.org/10.1016/j.physio.2019.01.002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.physio.2019.01.002
              </a>
              .
            </li>
            <li id="ref-10" className="scroll-mt-24">
              Dorey G, Speakman M, Feneley R, et al. Randomised Controlled Trial of Pelvic Floor
              Muscle Exercises and Manometric Biofeedback for Erectile Dysfunction. Br J Gen Pract.
              2004;54(508):819-825.
            </li>
            <li id="ref-11" className="scroll-mt-24">
              Lavoisier P, Roy P, Dantony E, et al. Pelvic-Floor Muscle Rehabilitation in Erectile
              Dysfunction and Premature Ejaculation. Phys Ther. 2014;94(12):1731-1743. doi:
              <a
                href="https://doi.org/10.2522/ptj.20130354"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.2522/ptj.20130354
              </a>
              .
            </li>
            <li id="ref-12" className="scroll-mt-24">
              Wong C, Louie DR, Beach C. A Systematic Review of Pelvic Floor Muscle Training for
              Erectile Dysfunction After Prostatectomy and Recommendations to Guide Further
              Research. J Sex Med. 2020;17(4):737-748. doi:
              <a
                href="https://doi.org/10.1016/j.jsxm.2020.01.008"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.jsxm.2020.01.008
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
