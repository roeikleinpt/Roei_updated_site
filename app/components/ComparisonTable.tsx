// טבלת השוואה בין אבחנות — HTML אמיתי, לא תמונה: נגיש, ניתן לאינדוקס,
// ומתרגם לרספונסיביות אמיתית במקום גלילה אופקית.
//
// שתי התצוגות נבנות מאותו מקור נתונים אחד, כך שהן לא יכולות להתפצל בתוכן:
//   דסקטופ — table סמנטי (thead/tbody, th עם scope) שבו כל אבחנה היא עמודה.
//   נייד    — כרטיס לכל אבחנה, ובו dl של אותם חמישה מאפיינים.
//
// בכל רוחב מסך רק אחת מהן קיימת ב-DOM כ-display:block; השנייה היא display:none,
// ולכן מוסרת גם מעץ הנגישות. קורא מסך שומע את המידע פעם אחת בלבד.

export type ComparisonItem = {
  /** שם האבחנה — כותרת העמודה בדסקטופ וכותרת הכרטיס בנייד */
  name: string;
  /** ערך אחד לכל מאפיין, באותו סדר של characteristics */
  values: string[];
};

export default function ComparisonTable({
  caption,
  characteristics,
  items,
  note,
}: {
  /** תיאור הטבלה — מוצג לקוראי מסך ומסייע להבין את ההקשר לפני הקריאה */
  caption: string;
  /** שמות המאפיינים — שורות בדסקטופ, שורות ה-dl בנייד */
  characteristics: string[];
  items: ComparisonItem[];
  /** הסתייגות שמוצגת מתחת לשתי התצוגות */
  note: string;
}) {
  return (
    <div className="mt-8">
      {/* ---------- דסקטופ ---------- */}
      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 md:block">
        <table className="w-full border-collapse text-start">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-slate-50">
              <th
                scope="col"
                className="border-b border-slate-200 p-4 text-start text-sm font-bold text-slate-900"
              >
                מאפיין
              </th>
              {items.map((item) => (
                <th
                  key={item.name}
                  scope="col"
                  className="border-b border-slate-200 p-4 text-start text-sm font-bold text-slate-900"
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {characteristics.map((characteristic, row) => (
              <tr key={characteristic} className="border-b border-slate-200 last:border-b-0">
                <th
                  scope="row"
                  className="bg-slate-50/60 p-4 text-start align-top text-sm font-bold text-slate-900"
                >
                  {characteristic}
                </th>
                {items.map((item) => (
                  <td
                    key={item.name}
                    className="p-4 align-top text-sm leading-7 text-black"
                  >
                    {item.values[row]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------- נייד ---------- */}
      <div className="space-y-4 md:hidden">
        <p className="sr-only">{caption}</p>
        {items.map((item) => (
          <div key={item.name} className="rounded-2xl border border-slate-200">
            <h3 className="rounded-t-2xl border-b border-slate-200 bg-slate-50 px-5 py-3 text-base font-bold text-slate-900">
              {item.name}
            </h3>
            <dl className="divide-y divide-slate-200">
              {characteristics.map((characteristic, row) => (
                <div key={characteristic} className="px-5 py-3">
                  <dt className="text-sm font-bold text-slate-900">{characteristic}</dt>
                  <dd className="mt-1 text-sm leading-7 text-black">{item.values[row]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <p className="mt-3 text-sm leading-7 text-slate-500">{note}</p>
    </div>
  );
}
