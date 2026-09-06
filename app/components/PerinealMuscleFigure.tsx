import { asset } from "../basePath";

// איור השרירים השטחיים של רצפת האגן, עם שכבת הדגשה אינטראקטיבית.
//
// התמונה עצמה לא נערכה: ההדגשה היא <svg> שקוף שיושב מעליה ב-position:absolute,
// עם viewBox התואם למידות ה-WebP שאחרי trim (2211x2682). כך ההדגשה נצמדת לאיור
// בכל רוחב מסך, ותיקון מיקום עולה שינוי של מספר בלבד — במקום יצירה מחדש של תמונה.
//
// זרימת הלחיצה, כולה CSS ו-HTML בלי JavaScript:
//   לחיצה על שריר או על העיגול הממוספר -> #<id>-card, וכרטיס קצר עולה על התמונה
//   דרך :target. הכרטיס נושא את שם השריר ומשפט אחד, ומקשר להסבר המלא שנשאר
//   ב-<details> מתחת לאיור. ההסבר המלא לא מוצג מעל התמונה בכוונה: הוא שתי
//   פסקאות, ובנייד הוא היה מכסה בדיוק את האזור שהקורא בא לראות.
//
// שתי התיבות שמתחת נשארות גלויות ולחיצות בעצמן. במובייל רצועת שריר היא יעד של
// כ-15px, הרבה מתחת למינימום הסביר, וגם גלישה במקלדת ובקורא מסך חייבת דרך
// כניסה שאינה תלויה בפגיעה בצורה על התמונה.

const VB = { w: 2211, h: 2682, nc: 24, nr: 30 };
const X = (c: number) => ((c - 0.5) * VB.w) / VB.nc;
const Y = (r: number) => ((r - 0.5) * VB.h) / VB.nr;

// מסלול סגור וחלק דרך נקודות שסומנו על גבי רשת 24x30 מעל האיור
function closedPath(points: [number, number][]) {
  const p = points.map(([c, r]) => [X(c), Y(r)] as [number, number]);
  const mid = (a: [number, number], b: [number, number]) =>
    [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] as [number, number];
  const start = mid(p[p.length - 1], p[0]);
  let d = `M${start[0].toFixed(0)} ${start[1].toFixed(0)}`;
  for (let i = 0; i < p.length; i++) {
    const next = mid(p[i], p[(i + 1) % p.length]);
    d += ` Q${p[i][0].toFixed(0)} ${p[i][1].toFixed(0)} ${next[0].toFixed(0)} ${next[1].toFixed(0)}`;
  }
  return `${d} Z`;
}

const ISCHIOCAVERNOSUS: [number, number][] = [
  [7.5, 12.2], [7.2, 14.0], [6.9, 15.8], [6.2, 17.2], [5.3, 18.6], [4.3, 19.8], [3.6, 20.6],
  [5.0, 20.7], [5.9, 19.7], [6.9, 18.6], [7.6, 17.3], [8.2, 15.6], [8.5, 13.8], [8.5, 12.2],
];
const BULBOSPONGIOSUS: [number, number][] = [
  [9.0, 12.2], [9.9, 12.6], [9.9, 14.5], [9.85, 16.3], [9.72, 17.7], [9.5, 18.3],
  [8.95, 18.2], [8.78, 17.2], [8.65, 15.6], [8.6, 13.6], [8.7, 12.6],
];

const MUSCLES = [
  {
    id: "ischiocavernosus",
    n: 1,
    name: "Ischiocavernosus",
    lead: "עוטף את שורשי הפין ויכול להעלות את הלחץ בתוך הגופים המחילתיים בזמן זקפה.",
    points: ISCHIOCAVERNOSUS,
    badge: [2.8, 20.8] as [number, number],
    fill: "#1d4165",
    stroke: "#0c2438",
  },
  {
    id: "bulbospongiosus",
    n: 2,
    name: "Bulbospongiosus",
    lead: "עוטף את הבולבוס ואת הגוף הספוגי, ובולט במיוחד בשלב הפליטה של השפיכה.",
    points: BULBOSPONGIOSUS,
    badge: [12.4, 12.6] as [number, number],
    fill: "#2F6196",
    stroke: "#12365c",
  },
];

const FIGURE_ID = "perineal-muscle-figure";

export default function PerinealMuscleFigure({
  src,
  alt,
  caption,
  credit,
  leads,
  children,
}: {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  /**
   * משפט הפתיחה בכרטיס הצף, לפי מזהה השריר. אותו איור משמש יותר מעמוד אחד,
   * ולכן העמוד יכול להחליף את המשפט כדי שיתאים להקשר שלו (זקפה מול שפיכה).
   * שרירים שלא הועברו עבורם מקבלים את משפט ברירת המחדל.
   */
  leads?: Partial<Record<string, string>>;
  /** תיבות ה-details המלאות — נמסרות מהעמוד כדי שהטקסט הרפואי יישאר שם */
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <figure>
        <div id={FIGURE_ID} className="relative mx-auto max-w-lg scroll-mt-24">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(src)}
            alt={alt}
            className="h-auto w-full rounded-2xl ring-1 ring-slate-200"
          />
          <svg
            viewBox={`0 0 ${VB.w} ${VB.h}`}
            className="absolute inset-0 h-full w-full"
            role="group"
            aria-label="הדגשת שני השרירים השטחיים באיור"
          >
            {MUSCLES.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}-card`}
                aria-label={`הצגת ההסבר על שריר ה־${m.name}`}
              >
                <path
                  d={closedPath(m.points)}
                  fill={m.fill}
                  fillOpacity="0.3"
                  stroke={m.stroke}
                  strokeWidth="10"
                  strokeOpacity="0.8"
                  strokeLinejoin="round"
                />
                {/* עיגול שקוף גדול יותר — יעד המגע בפועל */}
                <circle cx={X(m.badge[0])} cy={Y(m.badge[1])} r="160" fill="transparent" />
                <circle cx={X(m.badge[0])} cy={Y(m.badge[1])} r="96" fill={m.stroke} />
                <text
                  x={X(m.badge[0])}
                  y={Y(m.badge[1]) + 40}
                  textAnchor="middle"
                  fontSize="112"
                  fontWeight="bold"
                  fill="#ffffff"
                >
                  {m.n}
                </text>
              </a>
            ))}
          </svg>

          {/* כרטיס צף — מוצג רק כשהוא היעד בכתובת */}
          {MUSCLES.map((m) => (
            <div
              key={m.id}
              id={`${m.id}-card`}
              className="absolute inset-x-2 bottom-2 hidden scroll-mt-24 rounded-xl bg-white/95 p-3 text-start shadow-lg ring-1 ring-slate-200 backdrop-blur-sm [&:target]:block sm:inset-x-4 sm:bottom-4 sm:p-4"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm"
                >
                  {m.n}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-900 sm:text-base">{m.name}</p>
                  <p className="mt-1 text-xs leading-6 text-black sm:text-sm sm:leading-7">
                    {leads?.[m.id] ?? m.lead}
                  </p>
                  <a
                    href={`#${m.id}-detail`}
                    className="mt-1.5 inline-block text-xs font-semibold text-teal-700 hover:underline sm:mt-2 sm:text-sm"
                  >
                    להסבר המלא
                  </a>
                </div>
                <a
                  href={`#${FIGURE_ID}`}
                  aria-label="סגירת ההסבר הקצר"
                  className="-mt-1 -ml-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg leading-none text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  ✕
                </a>
              </div>
            </div>
          ))}
        </div>
        <figcaption className="mt-2 text-center text-sm text-slate-500">{caption}</figcaption>
        <p className="mt-1 text-center text-xs text-slate-500">{credit}</p>
      </figure>

      <div className="mt-5 space-y-4">{children}</div>
    </div>
  );
}

// תיבת שריר: הכותרת היא ה-summary, וההסבר המלא נפתח מתחתיה.
// ה-id של התוכן הפנימי הוא יעד הקישור — דפדפנים פותחים <details> סגור כשהיעד
// נמצא בתוכו, אך לא כאשר היעד הוא ה-<details> עצמו.
export function MuscleDetails({
  id,
  n,
  name,
  lead,
  children,
}: {
  id: string;
  n: number;
  name: string;
  lead: string;
  children: React.ReactNode;
}) {
  return (
    <details
      id={id}
      name="perineal-muscle"
      className="group scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white"
    >
      <summary className="cursor-pointer list-none px-5 py-4 hover:bg-slate-50">
        <span className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white"
          >
            {n}
          </span>
          <span className="flex-1">
            <span className="block text-base font-bold text-slate-900">{name}</span>
            <span className="mt-1 block text-sm leading-7 text-black">{lead}</span>
            <span className="mt-2 block text-xs font-semibold text-teal-700 group-open:hidden">
              להסבר המלא הקישו כאן
            </span>
          </span>
        </span>
      </summary>
      <div id={`${id}-detail`} className="scroll-mt-24 border-t border-slate-200 px-5 py-4">
        {children}
      </div>
    </details>
  );
}

export { MUSCLES };
