import { asset } from "../basePath";

// איור עם סימונים ממוספרים ולחיצים. התמונה עצמה נשארת נקייה: הסימונים הם שכבת
// <svg> שקופה מעליה, עם viewBox התואם למידות הקובץ שאחרי trim. כך הם חדים בכל
// רוחב מסך, נצמדים לאיור, ותיקון מיקום עולה שינוי של מספר במקום יצירת תמונה מחדש.
//
// כל סימון עטוף ב-<a> שמוביל אל הפריט המתאים ברשימה שמתחת לאיור, כך שהתמונה
// משמשת גם כניווט. לצד הסימון מצויר עיגול שקוף גדול יותר — במובייל הסימון עצמו
// הוא יעד קטן מדי לאצבע. הרשימה שמתחת נשארת קריאה ולחיצה בפני עצמה, ולכן מי
// שגולש במקלדת או בקורא מסך אינו תלוי בפגיעה בצורה על התמונה.

export type FigureMarker = {
  /** המספר שמוצג על האיור */
  n: number;
  /** אליפסה שמקיפה את המבנה, בקואורדינטות ה-viewBox */
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  rot?: number;
  /**
   * חלופה לאליפסה עבור מבנה מוארך: נתיב שמודגש לאורכו במקום להיות מוקף.
   * כשהוא קיים, cx ו-cy משמשים רק כעוגן לקו ההובלה.
   */
  d?: string;
  /** צבע ההדגשה של הנתיב. ברירת המחדל היא הנייבי של שאר הסימונים */
  stroke?: string;
  /** מיקום העיגול הממוספר */
  bx: number;
  by: number;
  /** מזהה הפריט ברשימה שאליו הסימון מוביל */
  href: string;
  /** שם המבנה — משמש לתיאור הקישור לקוראי מסך */
  label: string;
};

const NAVY = "#0c2438";

// מידות הסימונים ביחידות viewBox. הערכים כוילו לאיור הבקע (1718 רוחב, מוצג
// ב-max-w-lg). תמונה עם viewBox צר יותר או שמוצגת רחבה יותר צריכה chrome נמוך
// יותר, אחרת אותו מספר יוצא גדול בהרבה על המסך.
const BASE = { badge: 80, hit: 150, font: 100, ellipse: 9, line: 6, baseline: 34, path: 19 };

// הנקודה שבה קו ההובלה פוגש את שפת האליפסה, כדי שלא ייכנס לתוכה
function edgePoint(m: FigureMarker) {
  const phi = Math.atan2(m.cy - m.by, m.cx - m.bx);
  const th = ((m.rot ?? 0) * Math.PI) / 180;
  const u = Math.cos(phi - th);
  const v = Math.sin(phi - th);
  const t = 1 / Math.sqrt((u / m.rx) ** 2 + (v / m.ry) ** 2);
  return [m.cx - t * Math.cos(phi), m.cy - t * Math.sin(phi)];
}

export default function AnnotatedFigure({
  src,
  alt,
  width,
  height,
  markers,
  caption,
  credit,
  maxWidth = "max-w-lg",
  chrome = 1,
}: {
  src: string;
  alt: string;
  /** מידות הקובץ — קובעות את ה-viewBox של שכבת הסימונים */
  width: number;
  height: number;
  markers: FigureMarker[];
  caption?: string;
  credit?: string;
  maxWidth?: string;
  /** מכפיל לגודל התגים, הגופן ועובי הקווים. ראו BASE למעלה */
  chrome?: number;
}) {
  const S = (v: number) => +(v * chrome).toFixed(1);
  return (
    <figure className="mt-8">
      <div className={`relative mx-auto ${maxWidth}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(src)} alt={alt} className="h-auto w-full rounded-2xl ring-1 ring-slate-200" />
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="absolute inset-0 h-full w-full"
          role="group"
          aria-label="סימון המבנים באיור"
        >
          {markers.map((m) => {
            const [ex, ey] = m.d ? [m.cx, m.cy] : edgePoint(m);
            return (
              <a key={m.n} href={`#${m.href}`} aria-label={`מעבר להסבר על ${m.label}`}>
                {m.d ? (
                  <>
                    {/* יעד מגע רחב ושקוף לאורך הנתיב */}
                    <path
                      d={m.d}
                      fill="none"
                      stroke="transparent"
                      strokeWidth={S(BASE.path * 2.4)}
                      strokeLinecap="round"
                    />
                    <path
                      d={m.d}
                      fill="none"
                      stroke={m.stroke ?? NAVY}
                      strokeWidth={S(BASE.path)}
                      strokeOpacity="0.85"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </>
                ) : (
                  <ellipse
                    cx={m.cx}
                    cy={m.cy}
                    rx={m.rx}
                    ry={m.ry}
                    transform={`rotate(${m.rot ?? 0} ${m.cx} ${m.cy})`}
                    fill="transparent"
                    stroke={NAVY}
                    strokeWidth={S(BASE.ellipse)}
                    strokeOpacity="0.95"
                  />
                )}
                <line
                  x1={m.bx}
                  y1={m.by}
                  x2={ex.toFixed(0)}
                  y2={ey.toFixed(0)}
                  stroke={NAVY}
                  strokeWidth={S(BASE.line)}
                  strokeOpacity="0.95"
                />
                {/* יעד מגע מוגדל, שקוף */}
                <circle cx={m.bx} cy={m.by} r={S(BASE.hit)} fill="transparent" />
                <circle cx={m.bx} cy={m.by} r={S(BASE.badge)} fill={NAVY} />
                <text
                  x={m.bx}
                  y={m.by + S(BASE.baseline)}
                  textAnchor="middle"
                  fontSize={S(BASE.font)}
                  fontWeight="bold"
                  fill="#ffffff"
                >
                  {m.n}
                </text>
              </a>
            );
          })}
        </svg>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-slate-500">{caption}</figcaption>
      )}
      {credit && <p className="mt-1 text-center text-xs text-slate-500">{credit}</p>}
    </figure>
  );
}
