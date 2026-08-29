import Link from "next/link";
import { Icon } from "./Icon";
import { site } from "../data/site";

// CTA בתוך ההקשר של המאמר — הנעה לפעולה בוואטסאפ עם הודעה ממולאת מראש התואמת
// למצב שבו עוסק המאמר. מטרתו לתפוס את המבקר בנקודה שבה הוא מזדהה עם התסמינים,
// בלי לזרוק אותו לדף הבית ולאבד את ההקשר.
//
// whatsappText = ההודעה שתיכנס אוטומטית לוואטסאפ ("היי רועי, קראתי אצלך על ...").
// intro        = משפט מקדים אחראי (למשל "אם הכאב נמשך לאחר שנשללו גורמים אחרים").
// heading      = הכותרת. ברירת המחדל מתאימה למאמר על מצב שרועי מטפל בו. במאמר שאומר
//                במפורש שאין לו מה להציע למצב עצמו, "חווה חלק מהתסמינים שתוארו?" סותר
//                את הטקסט שמעליו — ולכן אפשר להעביר null ולוותר עליה. במקרה כזה ה-intro
//                עצמו נושא את המשקל ומקבל את העיצוב של הכותרת.
export default function ArticleCta({
  whatsappText,
  intro,
  heading = "חווה חלק מהתסמינים שתוארו?",
}: {
  whatsappText: string;
  intro?: string;
  heading?: string | null;
}) {
  // site.whatsappHref כבר כולל ?text= גנרי — חותכים אותו ומוסיפים טקסט מותאם למאמר.
  const base = site.whatsappHref.split("?")[0];
  const href = `${base}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
      {heading ? <p className="text-lg font-bold text-slate-900">{heading}</p> : null}
      {intro ? (
        <p
          className={
            heading
              ? "mt-2 leading-7 text-slate-600"
              : "text-lg font-semibold leading-8 text-slate-900"
          }
        >
          {intro}
        </p>
      ) : null}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-press mt-5 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
      >
        <Icon name="whatsapp" className="h-5 w-5" />
        בדיקת התאמה לטיפול — בוואטסאפ
      </a>
      <p className="mt-3 text-sm text-slate-500">
        או{" "}
        <Link href="/#contact" className="font-semibold text-teal-700 hover:underline">
          השאירו פרטים ואחזור אליכם
        </Link>
      </p>
    </div>
  );
}
