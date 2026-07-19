import Link from "next/link";

// שורת מחבר מתחת לכותרת המאמר — חלק מאותות E-E-A-T לתוכן רפואי (YMYL).
export default function ArticleByline({ date }: { date: string }) {
  return (
    <p className="mt-3 text-sm text-slate-500">
      מאת{" "}
      <Link href="/#about" className="font-semibold text-teal-700 hover:underline">
        רועי קליין
      </Link>
      , פיזיותרפיסט מוסמך (M.Sc.PT) · {date}
    </p>
  );
}
