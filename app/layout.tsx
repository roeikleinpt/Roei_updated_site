import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import "./a11y.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HexBackground from "./components/HexBackground";
import BackToTop from "./components/BackToTop";
import AccessibilityWidget from "./components/AccessibilityWidget";
import { siteConfig } from "./config/site";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

// תיאור דף הבית (ספציפי יותר מ-siteConfig.description שמשמש ל-JSON-LD ולעמודים אחרים).
const homeTitle = "רועי קליין | פיזיותרפיה בחיפה ובקיבוץ גבת";
const homeDescription =
  "רועי קליין, פיזיותרפיסט מוסמך, מטפל בחיפה ובקיבוץ גבת בתחומי בריאות הגבר ורצפת האגן, פציעות ספורט, כאבי גב וצוואר, כאבי מפרקים ושיקום לאחר ניתוחים.";

export const metadata: Metadata = {
  // metadataBase מרכז את פתרון ה-URL היחסי (canonical / OG) — יתעדכן עם הדומיין הסופי.
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: homeTitle,
    template: "%s | רועי קליין פיזיותרפיה",
  },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: siteConfig.name,
    title: homeTitle,
    description: homeDescription,
    url: "/",
    // TODO: להוסיף app/opengraph-image.png (1200×630) לכרטיס שיתוף עשיר יותר.
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-700">
        {/* קישור דילוג לתוכן — נגלה רק בפוקוס מקלדת (Tab ראשון) */}
        <a href="#main-content" className="a11y-skip">
          דילוג לתוכן הראשי
        </a>
        {/* עוגן התוכן: אפקטים של כלי הנגישות (פילטרים וכד') מוחלים עליו,
            כך שהווידג'ט וכפתורי הצף שמחוצה לו נשארים תקינים (fixed + לא מסוננים) */}
        <div id="a11y-root" className="flex min-h-full flex-1 flex-col">
          <TopBar />
          <Header />
          <HexBackground />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
        </div>
        <BackToTop />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
