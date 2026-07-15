"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "./Icon";
import Container from "./Container";
import { homeNavLinks, pageLinks } from "../data/nav";
import { asset } from "../basePath";

// קישור עוגן — מרנדר <a> בדף הבית (גלילה חלקה + scroll-spy) ו-<Link> בעמוד פנימי
// (חזרה לדף הבית וגלילה לסקשן; Link מוסיף את ה-basePath).
function SectionLink({
  isHome,
  href,
  className,
  onClick,
  children,
}: {
  isHome: boolean;
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return isHome ? (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const pathname = usePathname();
  const isHome = pathname === "/";

  // מתוך דף הבית: עוגן רגיל (#about) — גלילה חלקה + scroll-spy.
  // מתוך עמוד פנימי: "/#about" — חזרה לדף הבית וגלילה לסקשן (Link מוסיף basePath).
  const anchorHref = (href: string) => (isHome ? href : `/${href}`);

  // המשקוף נחשף בגלילה כלפי מעלה ונעלם בגלילה כלפי מטה
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // deadzone — מתעלמים מתזוזות זעירות (אינרציה/jitter) כדי למנוע היפוכי כיוון
      if (Math.abs(y - last) < 10) return;
      if (y > last && y > 160) setHidden(true);
      else setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onDesktop);
    };
  }, [menuOpen]);

  // scroll-spy — הדגשת הטאב של הסקשן הנוכחי (רלוונטי רק בדף הבית)
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const logoImg = (
    <Image
      src={asset("/logo-rk.webp")}
      alt="רועי קליין — פיזיותרפיסט"
      width={600}
      height={200}
      preload
      fetchPriority="high"
      className="h-[77px] w-auto max-w-none shrink-0 sm:h-[102px] lg:h-[88px]"
    />
  );

  return (
    <header
      onFocusCapture={() => setHidden(false)}
      className={`sticky top-0 z-50 bg-white transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "border-b border-slate-200 shadow-sm" : "border-b border-transparent"}`}
    >
      <Container>
        <div className="flex h-24 flex-row-reverse items-center justify-between gap-4 sm:h-[120px] lg:flex-row">

          {/* לוגו — חוזר לראש דף הבית */}
          {isHome ? (
            <a href="#hero" className="flex items-center">
              {logoImg}
            </a>
          ) : (
            <Link href="/" className="flex items-center">
              {logoImg}
            </Link>
          )}

          {/* ניווט דסקטופ */}
          <nav aria-label="ניווט ראשי" className="hidden items-center gap-1 lg:flex">
            {homeNavLinks.map((link) => (
              <SectionLink
                key={link.id}
                isHome={isHome}
                href={anchorHref(link.href)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  isHome && active === link.id
                    ? "font-bold text-teal-600"
                    : "text-slate-600 hover:font-bold hover:text-slate-900"
                }`}
              >
                {link.label}
              </SectionLink>
            ))}

            {/* עמוד פנימי בניווט הדסקטופ — רק "מידע מקצועי" (השאר נשאר בפוטר/המבורגר) */}
            {pageLinks
              .filter((link) => link.href === "/professional-info")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    pathname === link.href
                      ? "font-bold text-teal-600"
                      : "text-slate-600 hover:font-bold hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          {/* CTA דסקטופ */}
          <SectionLink
            isHome={isHome}
            href={anchorHref("#contact")}
            className="btn-press hidden rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700 lg:inline-block"
          >
            קביעת תור
          </SectionLink>

          {/* כפתור מובייל */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-100 lg:hidden"
            aria-label={menuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* תפריט מובייל */}
      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-3">
            <nav aria-label="ניווט למובייל" className="flex flex-col gap-1">
              {homeNavLinks.map((link) => (
                <SectionLink
                  key={link.id}
                  isHome={isHome}
                  href={anchorHref(link.href)}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium transition-all ${
                    isHome && active === link.id
                      ? "bg-teal-50 font-bold text-teal-600"
                      : "text-slate-700 hover:font-bold hover:bg-slate-100"
                  }`}
                >
                  {link.longLabel ?? link.label}
                </SectionLink>
              ))}

              {/* עמודים פנימיים */}
              <span className="my-1 h-px bg-slate-200" />
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 transition-all hover:font-bold hover:bg-slate-100"
                >
                  {link.label}
                </Link>
              ))}

              <SectionLink
                isHome={isHome}
                href={anchorHref("#contact")}
                onClick={() => setMenuOpen(false)}
                className="btn-press mt-2 rounded-full bg-teal-700 px-4 py-2.5 text-center text-sm font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
              >
                קביעת תור
              </SectionLink>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
