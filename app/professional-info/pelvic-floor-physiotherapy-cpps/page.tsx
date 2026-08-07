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

const article = getArticle("pelvic-floor-physiotherapy-cpps");

export const metadata: Metadata = {
  title: "פיזיותרפיה של רצפת האגן בפרוסטטיטיס כרונית וב־CP/CPPS",
  description:
    "מתי רצפת האגן רלוונטית ב־CP/CPPS, מה כוללת ההערכה הפיזיותרפית, מה אומרות הנחיות ה־AUA על טיפול מנואלי ועל ביופידבק, מה מראה המחקר ולמי ההערכה עשויה להתאים.",
  alternates: { canonical: "/professional-info/pelvic-floor-physiotherapy-cpps" },
  openGraph: {
    type: "article",
    locale: "he_IL",
    siteName: siteConfig.name,
    publishedTime: article.dateISO,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "פיזיותרפיה של רצפת האגן ב־CP/CPPS | רועי קליין פיזיותרפיה",
    description:
      "Pelvic Floor Myalgia, טיפול מנואלי מיופסציאלי, הרפיה וקואורדינציה, ביופידבק וניהול עומסים — מה נכלל בהנחיות ה־AUA 2025 ומה רמת הראיות בפועל.",
    url: "/professional-info/pelvic-floor-physiotherapy-cpps",
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
    q: "האם פיזיותרפיה יכולה להחליף בירור אצל אורולוג?",
    a: "לא. לפני שמייחסים תסמינים ל־CP/CPPS חשוב לשלול זיהום ומצבים רפואיים אחרים. פיזיותרפיה משתלבת בטיפול כאשר הבירור והממצאים מצביעים על כך שיש לה תפקיד.",
  },
  {
    q: "האם חייבים לעבור בדיקה פנימית?",
    a: "לא. הבדיקה מתחילה בתשאול ובהערכה חיצונית. בדיקה פנימית נשקלת כאשר היא יכולה להוסיף מידע משמעותי, לאחר הסבר ובהסכמת המטופל.",
  },
  {
    q: "האם הטיפול כולל עיסוי של הערמונית?",
    a: "לא. טיפול פיזיותרפי פנימי, כאשר הוא מתאים, מכוון לשרירים ולרקמות של רצפת האגן ולא לעיסוי הערמונית.",
  },
  {
    q: "כמה טיפולים צריך?",
    a: "אין מספר קבוע שמתאים לכולם. במחקר המרכזי של טיפול מיופסציאלי ניתנו עד עשרה מפגשים שבועיים, אך זהו פרוטוקול מחקר ולא המלצה שכל מטופל זקוק לעשרה טיפולים. מספר המפגשים נקבע לפי משך התסמינים, הממצאים, התגובה לטיפול והמטרות האישיות.",
  },
];

export default function PelvicFloorPhysiotherapyCppsArticle() {
  return (
    <article className="py-16 sm:py-20">
      <ArticleJsonLd article={article} />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ArticleBreadcrumb title={article.title} />
          <h1 className="mt-5 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            פיזיותרפיה של רצפת האגן בפרוסטטיטיס כרונית וב־CP/CPPS
          </h1>
          <ArticleByline date={article.date} />
          <p className="mt-6 text-lg leading-8 text-black">
            פיזיותרפיה של רצפת האגן יכולה להיות חלק משמעותי מהטיפול בגברים עם Chronic Prostatitis /
            Chronic Pelvic Pain Syndrome&rlm; (CP/CPPS&rlm;) כאשר בהערכה נמצאים כאב, רגישות או
            תפקוד לקוי של שרירי רצפת האגן. חשוב להבחין בין מצב זה לבין Chronic Bacterial
            Prostatitis&rlm;, דלקת ערמונית כרונית חיידקית. פיזיותרפיה אינה טיפול בזיהום חיידקי של
            הערמונית. כאשר מדובר בזיהום, הטיפול הרפואי מכוון בראש ובראשונה לזיהום עצמו.
            <Ref n={1} />
          </p>
          <p className={pClass}>
            לעומת זאת, ב־CP/CPPS&rlm; אין זיהום חיידקי שמסביר את התסמינים, ובחלק מהמטופלים קיימת
            מעורבות של שרירי רצפת האגן, דופן הבטן, הירכיים, הגב ורקמות נוספות באזור האגן.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            רקע מלא על ההבחנה בין שני המצבים, על האבחון ועל גישת הטיפול הכוללת מופיע בעמוד{" "}
            <Link
              href="/professional-info/chronic-prostatitis-pelvic-pain-syndrome"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              פרוסטטיטיס כרונית ותסמונת כאב אגן כרוני
            </Link>
            .
          </p>

          <h2 className={h2Class}>מתי רצפת האגן יכולה להיות רלוונטית?</h2>
          <p className={pClass}>
            אחד הממצאים האפשריים אצל גברים עם CP/CPPS&rlm; הוא Pelvic Floor Myalgia&rlm;, כלומר כאב
            או רגישות של שרירי רצפת האגן. אצל חלק מהמטופלים ניתן למצוא גם טונוס מנוחה מוגבר, קושי
            להרפות את השרירים או קושי בתיאום בין כיווץ להרפיה. במקרים אחרים הכאב עשוי להיות משוחזר
            בלחיצה על שרירים מסוימים באזור האגן.
            <Ref n={2} />
          </p>
          <p className={pClass}>
            מעורבות של רצפת האגן יכולה להתאים במיוחד כאשר לצד כאב האגן קיימים תסמינים כמו כאב
            בפרינאום, בפין או באשכים, כאב בזמן או לאחר שפיכה, קושי או אי־נוחות במתן שתן, תחושת לחץ
            באזור האגן או תסמינים שמושפעים מישיבה ממושכת.
            <Ref n={2} /> התסמינים עצמם אינם מוכיחים שהבעיה נובעת מרצפת האגן. ההחלטה מתקבלת לפי
            התמונה הכוללת וממצאי הבדיקה.
          </p>

          <h2 className={h2Class}>רצפת האגן כחלק ממערכת רחבה יותר</h2>
          <p className={pClass}>
            הערכה פיזיותרפית אינה מתמקדת רק ברצפת האגן. בהתאם לתסמינים ניתן לבדוק גם את דופן הבטן,
            הגב, האגן, הישבן והירכיים, מאחר שכאב ותפקוד לקוי באזורים אלה יכולים להופיע יחד.
          </p>

          <h2 className={h2Class}>מה אומרות הנחיות ה־AUA&rlm;?</h2>
          <p className={pClass}>
            בהנחיות ה־American Urological Association&rlm; משנת 2025 מצוין כי אצל גברים עם Pelvic
            Floor Myalgia&rlm; או Abdominopelvic Muscle Myalgia&rlm; ניתן להציע טיפול פיזיותרפי
            מנואלי מותאם אישית, לרבות שחרור מיופסציאלי של הרקמות המעורבות באופן חיצוני או פנימי.
            <Ref n={2} />
          </p>
          <p className={pClass}>
            זוהי{" "}
            <span className="font-bold">
              Conditional Recommendation&rlm;, Evidence Level Grade C&rlm;
            </span>
            . המשמעות היא שההמלצה קיימת, אך בסיס הראיות עדיין מוגבל ואינו מאפשר לקבוע שכל מטופל עם
            CP/CPPS&rlm; יגיב לטיפול באותה צורה. ההנחיות מציינות גם כי אצל מטופלים עם טונוס מוגבר
            של שרירי רצפת האגן ניתן להשתמש ב־Electromyography Biofeedback&rlm;, או EMG
            Biofeedback&rlm;, כדי לשפר את היכולת להפחית טונוס מנוחה ולהרפות את השרירים.
            <Ref n={2} />
          </p>
          <p className={pClass}>
            הדגש הוא על התאמת הטיפול לממצאים. פיזיותרפיה אינה ניתנת באופן זהה לכל מי שקיבל אבחנה של
            CP/CPPS&rlm;.
          </p>

          <h2 className={h2Class}>מה כוללת הערכה פיזיותרפית?</h2>

          <ArticleFigure
            src="/professional-info/cpps-physiotherapy-assessment.webp"
            maxWidth="max-w-md"
            alt="אינפוגרפיקה של ההערכה הפיזיותרפית ב־CP/CPPS: בצד אחד תשעה נושאים שנבדקים בתשאול — מיקום הכאב ואופיו, משך התסמינים, מה מחמיר ומה מקל, השפעת ישיבה והליכה, תסמינים במתן שתן, תפקוד מערכת העיכול, כאב בפעילות מינית, כאבים בבטן ובגב וניתוחים קודמים; ובצד השני מה שנבדק בבדיקה הגופנית — הגב והירכיים, דופן הבטן והאגן, הנשימה והיכולת לכווץ ולהרפות את רצפת האגן"
            caption="ההערכה משלבת תשאול ובדיקה גופנית במטרה לזהות גורמים שעשויים לתרום לתסמינים ולכוון את תוכנית הטיפול."
          />

          <p className={pClass}>
            בהתאם לצורך ניתן להציע גם בדיקה פנימית דרך פי הטבעת לצורך הערכת שרירי רצפת האגן. הבדיקה
            עשויה לסייע בזיהוי רגישות, כאב או קושי בהרפיה של שרירים עמוקים שאינם ניתנים לבדיקה מלאה
            מבחוץ.
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <p className={pClass}>
            בדיקה פנימית אינה חובה. היא מבוצעת רק כאשר יש לה הצדקה קלינית, לאחר הסבר ובהסכמת
            המטופל. ניתן לבצע הערכה ולטפל גם ללא בדיקה פנימית.
          </p>

          <h2 className={h2Class}>כיצד פיזיותרפיה יכולה לעזור?</h2>
          <p className={pClass}>
            תוכנית הטיפול נקבעת לפי מה שנמצא בהערכה. אצל מטופל אחד הדגש יכול להיות על הרפיה
            וקואורדינציה, ואצל אחר על טיפול בכאב, תנועה, עומסים או אזורים נוספים מחוץ לרצפת האגן.
          </p>

          <ArticleFigure
            src="/professional-info/cpps-pelvic-floor-physiotherapy.webp"
            alt="אינפוגרפיקה של שישה מרכיבים בטיפול הפיזיותרפי ב־CP/CPPS: טיפול מנואלי, הרפיה וקואורדינציה, ביופידבק באמצעות אולטרסאונד, תרגול ותנועה, הדרכה וניהול עצמי ושיתוף פעולה רב־תחומי"
            caption="הטיפול מותאם לממצאי ההערכה ועשוי לשלב טיפול מנואלי, תרגול הרפיה וקואורדינציה, ביופידבק, תנועה והדרכה לניהול עצמי. אין פרוטוקול אחד שמתאים לכל מטופל."
          />

          <h3 className={h3Class}>טיפול מנואלי</h3>
          <p className={pClass}>
            אצל גברים עם Pelvic Floor Myalgia&rlm;, ה־AUA&rlm; מציין טיפול מנואלי מיופסציאלי כאחת
            מאפשרויות הטיפול.
            <Ref n={2} /> בהתאם לממצאים, הטיפול יכול לכלול עבודה על שרירי ורקמות האגן והאזורים
            הסמוכים, באופן חיצוני ולעיתים גם פנימי.
          </p>

          <h3 className={h3Class}>הרפיה וקואורדינציה</h3>
          <p className={pClass}>
            כאשר קיימים טונוס מוגבר או קושי בהרפיה, התרגול יכול להתמקד בזיהוי מתח, נשימה, הרפיה
            ושיפור הקואורדינציה של שרירי רצפת האגן.
          </p>

          <h3 className={h3Class}>Biofeedback&rlm;</h3>
          <p className={pClass}>
            ביופידבק מאפשר לקבל משוב על פעילות רצפת האגן ולתרגל באופן מדויק יותר כיווץ, הרפיה
            וקואורדינציה. בקליניקה ניתן להשתמש לשם כך גם באולטרסאונד כמשוב חזותי בזמן אמת.
          </p>

          <h3 className={h3Class}>תנועה ותרגול</h3>
          <p className={pClass}>
            בהתאם לממצאים ניתן לשלב תרגול של הגב, האגן והירכיים, נשימה וחזרה הדרגתית לפעילות. אין
            תרגיל אחד שמתאים לכל אדם עם CP/CPPS&rlm;.
          </p>

          <h3 className={h3Class}>ניהול עצמי</h3>
          <p className={pClass}>
            הטיפול יכול לכלול התאמת עומסים והרגלים, הפסקות מישיבה ממושכת, חזרה הדרגתית לפעילות
            וכלים להתמודדות עם תקופות של החמרה.
          </p>

          <h2 className={h2Class}>מה המחקר מראה?</h2>
          <p className={pClass}>
            הראיות לפיזיותרפיה ב־CP/CPPS&rlm; עדיין אינן מושלמות, אך קיימים מחקרים התומכים בשימוש
            בה אצל מטופלים נבחרים, בעיקר כאשר נמצאים ממצאים ברצפת האגן.
          </p>
          <p className={pClass}>
            במחקר תצפיתי שכלל גברים עם CP/CPPS&rlm; ו־Pelvic Floor Muscle Spasm&rlm;, שיעורי השיפור
            היו גבוהים יותר בקרב מטופלים שטופלו במרכז שהתמחה בפיזיותרפיה של רצפת האגן לעומת טיפול
            במקומות אחרים. המחקר אינו מחקר אקראי ולכן אינו יכול להוכיח שהבדל זה נגרם רק מהטיפול או
            מהכשרת המטפלים.
            <Ref n={3} />
          </p>
          <p className={pClass}>
            סקירה שיטתית ומטה־אנליזה משנת 2022 שבחנה טיפולים מנואלים מיופסציאליים בכאב אגן כרוני{" "}
            <span className="font-bold">
              לא מצאה יתרון ברור ועקבי על פני טיפול רגיל בכל התוצאים, ואיכות הראיות הוגדרה נמוכה
              מאוד
            </span>
            .<Ref n={4} /> כלומר, הפיזיותרפיה אינה &rdquo;טיפול מוכח לכולם&ldquo;, אך כאשר קיימת
            מעורבות שרירית ברורה של רצפת האגן היא טיפול שמכוון ישירות לממצא קליני מוכר ונכלל
            בהנחיות המקצועיות.
          </p>

          <h2 className={h2Class}>למי הערכה פיזיותרפית עשויה להתאים?</h2>
          <p className={pClass}>
            ניתן לשקול הערכה כאשר קיימת אבחנה או חשד ל־CP/CPPS&rlm; ובנוסף:
          </p>
          <ul className={ulClass}>
            <li>יש כאב או רגישות באזור רצפת האגן</li>
            <li>קיים קושי להרפות את שרירי רצפת האגן</li>
            <li>הכאב קשור לישיבה, לפעילות או לשפיכה</li>
            <li>קיימים במקביל תסמיני שתן, יציאות או תפקוד מיני</li>
            <li>קיימים כאבים או מגבלות גם באזור הגב, האגן, המפשעה או הירכיים</li>
            <li>
              טיפול רפואי קודם לא נתן מענה מלא והבירור אינו מצביע על זיהום פעיל או מצב אחר הדורש
              טיפול שונה
            </li>
          </ul>
          <p className={pClass}>
            ההתאמה לטיפול נקבעת לפי הבירור הרפואי, התסמינים וממצאי ההערכה, ולא לפי השם
            &rdquo;פרוסטטיטיס&ldquo; בלבד.
          </p>

          <h2 className={h2Class}>שורה תחתונה</h2>
          <p className={pClass}>
            ב־CP/CPPS&rlm; אין זיהום חיידקי שמסביר את התסמינים, ובחלק מהמטופלים קיימים כאב, רגישות
            או תפקוד לקוי של שרירי רצפת האגן.
          </p>
          <p className={pClass}>
            במקרים אלה פיזיותרפיה של רצפת האגן יכולה להיות מרכיב משמעותי בתוכנית הטיפול. היא עשויה
            לכלול טיפול מנואלי, תרגול הרפיה וקואורדינציה, ביופידבק, תנועה וניהול עומסים, בהתאם
            לממצאים.
          </p>
          <p className={pClass}>
            הטיפול אינו מחייב בדיקה פנימית ואינו מבוסס באופן אוטומטי על חיזוק שרירי רצפת האגן.
          </p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
            <p className="text-base font-semibold text-slate-900">
              אם הבירור האורולוגי כבר נעשה והתסמינים נמשכים, שווה לבדוק אם שרירי רצפת האגן מעורבים
              בתמונה. ההערכה מתחילה בתשאול ובבדיקה חיצונית, ומתקדמת רק לפי מה שנמצא.
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
              Borgert BJ, Wallen EM, Pham MN. Prostatitis: A Review. JAMA. 2025;334(11):1003-1013.
              doi:
              <a
                href="https://doi.org/10.1001/jama.2025.11499"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1001/jama.2025.11499
              </a>
              .
            </li>
            <li id="ref-2" className="scroll-mt-24">
              Lai HH, Pontari MA, Argoff CE, et al. Male Chronic Pelvic Pain: AUA Guideline: Part II
              Treatment of Chronic Prostatitis/Chronic Pelvic Pain Syndrome. J Urol.
              2025;214(2):127-137. doi:
              <a
                href="https://doi.org/10.1097/JU.0000000000004565"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1097/JU.0000000000004565
              </a>
              .
            </li>
            <li id="ref-3" className="scroll-mt-24">
              Polackwich AS, Li J, Shoskes DA. Patients With Pelvic Floor Muscle Spasm Have a
              Superior Response to Pelvic Floor Physical Therapy at Specialized Centers. J Urol.
              2015;194(4):1002-1006. doi:
              <a
                href="https://doi.org/10.1016/j.juro.2015.03.130"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1016/j.juro.2015.03.130
              </a>
              .
            </li>
            <li id="ref-4" className="scroll-mt-24">
              Dal Farra F, Aquino A, Tarantino AG, Origo D. Effectiveness of Myofascial Manual
              Therapies in Chronic Pelvic Pain Syndrome: A Systematic Review and Meta-Analysis. Int
              Urogynecol J. 2022;33(11):2963-2976. doi:
              <a
                href="https://doi.org/10.1007/s00192-022-05173-x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                10.1007/s00192-022-05173-x
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
