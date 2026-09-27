"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// קישורים פנימיים במאמרים נושאים target="_blank" כדי שהקורא לא יאבד את המאמר
// שהוא באמצע. במסך צר זה מתהפך: כל קישור פותח לשונית, והגולש נשאר עם ערימה
// שהוא צריך לסגור. הרכיב הזה מסיר את ה-target מקישורים פנימיים בלבד כשהמסך צר.
//
// קישורים חיצוניים (DOI, ווטסאפ, Waze, Scholar) לא נוגעים בהם — שם לשונית חדשה
// היא ההתנהגות הנכונה בכל רוחב מסך.
//
// ההחלטה נקבעת פעם אחת לכל מעבר עמוד ולא מאזינה לשינוי גודל חלון. מי שמשנה
// רוחב באמצע הקריאה פשוט ימשיך עם ההתנהגות הקודמת עד רענון — אי-נוחות קלה,
// ולא תקלה. מאזין resize היה מוסיף מורכבות עבור תרחיש נדיר.

const NARROW = "(max-width: 767px)";

export default function MobileSameTabLinks() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    if (!window.matchMedia(NARROW).matches) return;

    for (const a of document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]')) {
      let sameSite = false;
      try {
        sameSite = new URL(a.href, window.location.href).origin === window.location.origin;
      } catch {
        sameSite = false;
      }
      if (sameSite) a.removeAttribute("target");
    }
  }, [pathname]);

  return null;
}
