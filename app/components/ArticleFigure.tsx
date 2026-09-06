import { asset } from "../basePath";

// תמונת מאמר: הקשה פותחת את הקובץ בגודל מלא בלשונית חדשה — חשוב בעיקר בנייד,
// שבו אינפוגרפיקה צפופה מוצגת ברבע מגודלה המקורי. כיתוב ההכוונה מוצג במסכים
// קטנים בלבד; בדסקטופ אין שינוי ויזואלי.
// caption — כיתוב הסבר קבוע מתחת לתמונה (מוצג בכל המסכים).
// credit — שורת ייחוס/רישיון (למשל לתמונות מורשות מצד שלישי).
// maxWidth — מחלקת רוחב מרבי (למשל "max-w-md"). נדרש רק לתמונות לאורך: ברוחב
// מלא הן מתפרסות לגובה כפול מאינפוגרפיקה לרוחב ומשתלטות על העמוד.
export default function ArticleFigure({
  src,
  alt,
  caption,
  credit,
  maxWidth,
}: {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  maxWidth?: string;
}) {
  const url = asset(src);

  return (
    <figure className="mt-8">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`פתיחת התמונה בגודל מלא: ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt={alt}
          className={`mx-auto h-auto w-full rounded-2xl ring-1 ring-slate-200${
            maxWidth ? ` ${maxWidth}` : ""
          }`}
        />
      </a>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-slate-500">{caption}</figcaption>
      )}
      {credit && <p className="mt-1 text-center text-xs text-slate-500">{credit}</p>}
      <p className="mt-2 text-center text-xs text-slate-400 sm:hidden">
        להגדלה הקישו על התמונה
      </p>
    </figure>
  );
}
