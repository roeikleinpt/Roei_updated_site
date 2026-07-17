import type { ReactNode } from "react";

// מעטפת פריסה קלה. התוכן נשאר גלוי מיד כדי שלא ליצור רכיבים ממוקדים אך שקופים.
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  // תוכן אינו מוסתר לפני גלילה: כך הוא זמין מיד למקלדת ולקוראי מסך,
  // ובדיקות ניגודיות אינן מדלגות עליו בגלל opacity:0.
  return <div className={className}>{children}</div>;
}
