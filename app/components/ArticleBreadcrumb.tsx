import Link from "next/link";

// נתיב ניווט (breadcrumb) בראש עמוד המאמר: בית / מידע מקצועי / <כותרת נוכחית>.
// משלים את סכמת ה-BreadcrumbList (שנוצרת ב-ArticleJsonLd) בנתיב נראה למשתמש.
// הכותרת הארוכה נחתכת לשורה אחת (truncate) כדי לשמור על מראה נקי.
export default function ArticleBreadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="ניווט מסלול" className="text-sm text-slate-500">
      <ol className="flex items-center gap-x-2">
        <li className="shrink-0">
          <Link href="/" className="hover:text-teal-700 hover:underline">
            בית
          </Link>
        </li>
        <li aria-hidden="true" className="shrink-0 text-slate-300">
          /
        </li>
        <li className="shrink-0">
          <Link href="/professional-info" className="hover:text-teal-700 hover:underline">
            מידע מקצועי
          </Link>
        </li>
        <li aria-hidden="true" className="shrink-0 text-slate-300">
          /
        </li>
        <li aria-current="page" className="min-w-0 truncate text-slate-600">
          {title}
        </li>
      </ol>
    </nav>
  );
}
