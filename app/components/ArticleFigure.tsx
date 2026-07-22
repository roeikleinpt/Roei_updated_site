import { asset } from "../basePath";

// תמונת מאמר: הקשה פותחת את הקובץ בגודל מלא בלשונית חדשה — חשוב בעיקר בנייד,
// שבו אינפוגרפיקה צפופה מוצגת ברבע מגודלה המקורי. כיתוב ההכוונה מוצג במסכים
// קטנים בלבד; בדסקטופ אין שינוי ויזואלי.
export default function ArticleFigure({ src, alt }: { src: string; alt: string }) {
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
          className="mx-auto h-auto w-full rounded-2xl ring-1 ring-slate-200"
        />
      </a>
      <figcaption className="mt-2 text-center text-xs text-slate-400 sm:hidden">
        להגדלה הקישו על התמונה
      </figcaption>
    </figure>
  );
}
