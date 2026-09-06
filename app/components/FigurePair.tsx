import { asset } from "../basePath";

// זוג תמונות להשוואה. שתיהן נחתכו מאותה סדרה ומוצגות על קנבס זהה, כך שהן
// נקראות מיד כשני מצבים של אותו מבנה ולא כשני איורים שונים.
// בנייד הן נערמות זו מתחת לזו ושומרות על אותו רוחב.
export default function FigurePair({
  items,
  caption,
  credit,
}: {
  items: { src: string; alt: string; label: string }[];
  caption: string;
  credit: string;
}) {
  return (
    <figure className="mt-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.src} className="rounded-2xl border border-slate-200 p-3">
            <a
              href={asset(item.src)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`פתיחת התמונה בגודל מלא: ${item.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(item.src)} alt={item.alt} className="h-auto w-full" />
            </a>
            <p className="mt-2 text-center text-sm font-bold text-slate-900">{item.label}</p>
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-center text-sm text-slate-500">{caption}</figcaption>
      <p className="mt-1 text-center text-xs text-slate-500">{credit}</p>
    </figure>
  );
}
