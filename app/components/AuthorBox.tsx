import Link from "next/link";

// קופסת "על הכותב" בסוף כל מאמר — אות אמינות (E-E-A-T) לצד הנעה לפעולה.
export default function AuthorBox() {
  return (
    <aside className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-lg font-bold text-slate-900">על הכותב</h2>
      <p className="mt-3 leading-7 text-slate-600">
        רועי קליין הוא פיזיותרפיסט מוסמך, בעל תואר ראשון ותואר שני בפיזיותרפיה (M.Sc.PT). את
        עיקר ניסיונו הקליני צבר כקצין פיזיותרפיה בצה״ל, בטיפול באלפי מטופלים ומטופלות בתחומי
        פציעות ספורט, שיקום אורתופדי ורצפת האגן, והוא ממשיך להעמיק בהכשרות מקצועיות בארץ,
        באירופה ובארה״ב בתחומי בריאות הגבר, רצפת האגן, כאב ושיקום.
      </p>
      <p className="mt-2 text-sm text-slate-500">פיזיותרפיסט מוסמך · תעודה מס׳ 10-163650</p>
      <p className="mt-4 text-center text-base text-slate-600">
        <Link href="/#contact" className="font-semibold text-teal-700 hover:underline">
          ליצירת קשר עם רועי
        </Link>
      </p>
    </aside>
  );
}
