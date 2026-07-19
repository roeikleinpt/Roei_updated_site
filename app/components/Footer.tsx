import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import Container from "./Container";
import HexPattern from "./HexPattern";
import { homeNavLinks, pageLinks, footerLegalLinks } from "../data/nav";
import { site } from "../data/site";
import { asset } from "../basePath";

export default function Footer() {
  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-teal-700 text-white">
      {/* משושים מעל ה-footer (בהיר על הרקע הכהה), בצד שמאל, מאחורי התוכן */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-3/4 max-w-2xl"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 16%, transparent 70%)",
          maskImage:
            "linear-gradient(to right, black 0%, black 16%, transparent 70%)",
        }}
      >
        <HexPattern id="hex-footer" className="h-full w-full -scale-x-100 text-white/15" />
      </div>

      <Container className="relative py-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link href="/" className="flex items-center">
            <Image
              src={asset("/logo-silver.png")}
              alt="רועי קליין — פיזיותרפיסט"
              width={330}
              height={110}
              className="h-16 w-auto max-w-none shrink-0 sm:h-[99px]"
            />
          </Link>

          <nav aria-label="ניווט תחתון" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {homeNavLinks.map((link) => (
              <Link
                key={link.id}
                href={`/${link.href}`}
                className="inline-flex min-h-11 items-center text-sm text-teal-100 hover:text-white"
              >
                {link.longLabel ?? link.label}
              </Link>
            ))}
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center text-sm text-teal-100 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-teal-100">
            <a href={site.phoneHref} className="flex min-h-11 items-center gap-2 hover:text-white">
              <Icon name="phone" className="h-4 w-4" />
              <span dir="ltr">{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="flex min-h-11 items-center gap-2 hover:text-white">
              <Icon name="mail" className="h-4 w-4" />
              <span dir="ltr">{site.email}</span>
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 hover:text-white"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              וואטסאפ
            </a>
            {/* מיקומי הקליניקות — כל מיקום הוא קישור ניווט מלא ב-Waze */}
            {site.clinics.map((clinic) => (
              <a
                key={clinic.name}
                href={clinic.wazeHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`ניווט ב-Waze אל ${clinic.name}, ${clinic.city}`}
                className="flex min-h-11 items-center gap-2 hover:text-white"
              >
                <Image
                  src={asset("/icons/waze-icon.webp")}
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 brightness-0 invert"
                />
                {clinic.city} · {clinic.name}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/10 pt-6">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-sm text-teal-100/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-teal-100/80">
            © {new Date().getFullYear()} {site.shortName} — {site.credential}. כל הזכויות שמורות.
          </p>
        </div>
      </Container>
    </footer>
  );
}
