"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

// כפתור צף לחזרה לראש העמוד.
// - מופיע רק לאחר גלילה של ~400px.
// - מובייל בלבד (lg:hidden): בדסקטופ יש כבר משקוף sticky + ניווט מלא, לכן מיותר.
// - ממוקם בתחתית שמאל כדי לא להתנגש עם ה-CTA/וואטסאפ שבתוכן.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 400;
      // מסתירים כשמגיעים לסקשן "צור קשר" (וממשיך גם בפוטר שאחריו) כדי שהכפתור
      // לא יעלה על הטקסט. בעמודים ללא #contact — התנאי פשוט לא מתקיים.
      const contact = document.getElementById("contact");
      const overContact = contact
        ? contact.getBoundingClientRect().top < window.innerHeight - 96
        : false;
      setVisible(scrolled && !overContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="חזרה לראש העמוד"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-teal-500 bg-teal-700 text-white shadow-lg transition duration-300 hover:bg-teal-600 active:scale-95 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <Icon name="arrowUp" className="h-5 w-5" strokeWidth={2} />
    </button>
  );
}
