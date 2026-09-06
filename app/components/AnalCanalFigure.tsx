import { asset } from "../basePath";

// איור התעלה האנאלית, עם שכבת הדגשה וסרגל עומק.
//
// התמונה המקורית לא נערכה מעבר להסרת התוויות באנגלית: ההדגשה, הסרגל והכיתובים
// הם <svg> שקוף שיושב מעליה ב-position:absolute, עם viewBox התואם למידות האיור
// (2800x1910). כך הכל חד בכל רוחב מסך, הטקסט נשאר טקסט חי לקוראי מסך, ותיקון
// מיקום עולה שינוי של מספר במקום יצירה מחדש של תמונה.
//
// גבולות שלושת השרירים לא צוירו ביד. הם עוקבים אחרי הצבע באיור המקורי שורה
// אחרי שורה, בדומה לאיור השרירים השטחיים: רקמה באיור הזה היא תמיד כחול מעל
// ירוק, וההילה הכתומה שסביב כל שריר היא תמיד ההפך, ולכן היא נשארת בחוץ.
//
// לחיצה על שריר או על העיגול הממוספר מובילה לפריט המתאים ברשימה שמתחת לאיור,
// והפריט מודגש דרך :target. הרשימה קריאה ולחיצה בפני עצמה, כי במובייל רצועת
// שריר היא יעד קטן מדי לאצבע, וגם גלישה במקלדת ובקורא מסך חייבת דרך כניסה
// שאינה תלויה בפגיעה בצורה על התמונה.

const VB = { w: 2800, h: 1910 };

// עוגני הסרגל נלקחו מהאיור עצמו: הקו המקווקו התחתון הוא פי הטבעת, והעליון הוא
// קו הפקטינט. המרחק ביניהם הוא שקובע את קנה המידה, ולא הערכה חיצונית.
const VERGE = 1672;
const PX_PER_CM = 303;
const yAt = (cm: number) => Math.round(VERGE - cm * PX_PER_CM);

// הגובה שבו רצפת האגן מוסרת את התפקיד לסוגר החיצוני. שני הצדדים דוהים אליו,
// כדי שהעין תקרא רצועה אחת רציפה ולא שתי צורות שנחתכות זו בזו.
const SEAM = 1000;

const NAVY = "#0c2438";

type Muscle = {
  id: string;
  n: number;
  name: string;
  lead: string;
  d: string;
  fill: string;
  stroke: string;
  badge: [number, number];
  fade?: { from: number; to: number };
};

const MUSCLES: Muscle[] = [
  {
    id: "internal-anal-sphincter",
    n: 1,
    name: "הסוגר הפנימי",
    lead: "שריר חלק שנמצא בעיקר תחת בקרה אוטונומית, כלומר אינו נשלט ברצון.",
    d: "M1525 830 Q1468 830 1468 845 Q1468 860 1468 875 Q1467 890 1467 905 Q1467 920 1467 935 Q1467 950 1468 965 Q1469 980 1470 995 Q1471 1010 1473 1025 Q1474 1040 1476 1060 Q1477 1080 1479 1095 Q1480 1110 1481 1125 Q1482 1140 1484 1155 Q1485 1170 1487 1185 Q1489 1200 1491 1215 Q1492 1230 1493 1245 Q1493 1260 1494 1275 Q1494 1290 1495 1305 Q1495 1320 1494 1335 Q1493 1350 1493 1365 Q1492 1380 1492 1395 Q1491 1410 1491 1425 Q1490 1440 1491 1455 Q1491 1470 1494 1485 Q1497 1500 1498 1508 Q1498 1515 1567 1515 Q1636 1515 1640 1500 Q1644 1485 1648 1470 Q1651 1455 1653 1440 Q1655 1425 1656 1410 Q1656 1395 1656 1380 Q1655 1365 1655 1350 Q1654 1335 1653 1320 Q1652 1305 1652 1290 Q1651 1275 1650 1260 Q1648 1245 1646 1230 Q1643 1215 1640 1200 Q1637 1185 1634 1170 Q1631 1155 1627 1140 Q1623 1125 1619 1110 Q1615 1095 1610 1075 Q1605 1055 1600 1040 Q1595 1025 1592 1010 Q1589 995 1587 980 Q1585 965 1584 950 Q1582 935 1582 920 Q1582 905 1582 890 Q1582 875 1582 860 Q1582 845 1582 838 Q1582 830 1525 830 Z",
    fill: "#2563EB",
    stroke: "#1e40af",
    badge: [1320, 1290],
  },
  {
    id: "pelvic-floor-muscles",
    n: 2,
    name: "שרירי רצפת האגן",
    lead: "עוטפים את התעלה מלמעלה ומשפיעים על הזווית שבה היא יושבת.",
    d: "M1861 490 Q1813 490 1809 500 Q1804 510 1795 520 Q1785 530 1777 540 Q1768 550 1761 560 Q1753 570 1747 580 Q1741 590 1736 600 Q1730 610 1725 620 Q1720 630 1715 640 Q1710 650 1706 660 Q1701 670 1697 680 Q1693 690 1689 700 Q1685 710 1681 720 Q1677 730 1674 740 Q1671 750 1668 760 Q1665 770 1663 780 Q1660 790 1658 800 Q1656 810 1654 820 Q1652 830 1651 840 Q1650 850 1649 860 Q1648 870 1648 880 Q1647 890 1647 900 Q1646 910 1646 920 Q1646 930 1647 940 Q1647 950 1649 960 Q1650 970 1651 980 Q1651 990 1651 990 Q1651 990 1757 990 Q1863 990 1863 980 Q1862 970 1861 960 Q1859 950 1856 940 Q1852 930 1847 920 Q1842 910 1837 900 Q1832 890 1830 880 Q1828 870 1829 860 Q1830 850 1832 840 Q1833 830 1833 820 Q1833 810 1833 800 Q1832 790 1831 780 Q1829 770 1827 760 Q1825 750 1825 740 Q1825 730 1828 720 Q1830 710 1835 700 Q1839 690 1845 680 Q1850 670 1857 660 Q1863 650 1871 640 Q1879 630 1887 620 Q1894 610 1902 600 Q1910 590 1919 580 Q1928 570 1932 560 Q1936 550 1933 540 Q1929 530 1923 520 Q1916 510 1913 500 Q1909 490 1909 490 Q1909 490 1861 490 Z",
    fill: "#B45309",
    stroke: "#7c3d06",
    badge: [2130, 610],
    fade: { from: SEAM - 240, to: SEAM },
  },
  {
    id: "external-anal-sphincter",
    n: 3,
    name: "הסוגר החיצוני",
    lead: "שריר שלד שניתן להשפיע עליו באופן רצוני, ויורד עד פי הטבעת עצמו.",
    d: "M475 895 Q378 895 372 915 Q365 935 360 955 Q355 975 354 995 Q353 1015 356 1035 Q358 1055 359 1075 Q359 1095 351 1115 Q343 1135 335 1155 Q327 1175 321 1195 Q315 1215 312 1235 Q308 1255 306 1275 Q304 1295 305 1315 Q305 1335 303 1355 Q300 1375 296 1395 Q291 1415 289 1435 Q287 1455 287 1475 Q286 1495 287 1515 Q288 1535 291 1555 Q294 1575 302 1595 Q309 1615 318 1635 Q327 1655 364 1675 Q400 1695 436 1715 Q471 1735 488 1755 Q505 1775 507 1778 Q508 1780 567 1780 Q626 1780 642 1760 Q657 1740 671 1720 Q685 1700 668 1680 Q651 1660 686 1640 Q720 1620 690 1600 Q660 1580 609 1560 Q558 1540 544 1520 Q529 1500 521 1480 Q513 1460 508 1440 Q503 1420 501 1400 Q498 1380 498 1360 Q497 1340 498 1320 Q499 1300 502 1280 Q505 1260 508 1240 Q511 1220 516 1200 Q521 1180 526 1160 Q530 1140 535 1120 Q539 1100 544 1080 Q549 1060 554 1040 Q559 1020 563 1000 Q566 980 569 960 Q571 940 571 920 Q571 900 571 898 Q571 895 475 895 Z",
    fill: "#7C3AED",
    stroke: "#5b21b6",
    badge: [175, 1430],
    fade: { from: SEAM + 240, to: SEAM },
  },
];

const TICKS = [
  { cm: 0, label: "0" },
  { cm: 2, label: '2 ס"מ' },
  { cm: 3, label: '3 ס"מ' },
];
const RULER_X = 2470;

export default function AnalCanalFigure({
  src,
  alt,
  caption,
  credit,
}: {
  src: string;
  alt: string;
  caption: string;
  credit: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <figure>
        <div className="relative mx-auto max-w-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(src)}
            alt={alt}
            className="h-auto w-full rounded-2xl ring-1 ring-slate-200"
          />
          <svg
            viewBox={`0 0 ${VB.w} ${VB.h}`}
            className="absolute inset-0 h-full w-full"
            role="group"
            aria-label="הדגשת שרירי הסוגר ורצפת האגן, וסרגל עומק"
          >
            <defs>
              {MUSCLES.filter((m) => m.fade).map((m) => (
                <linearGradient
                  key={m.id}
                  id={`fade-${m.id}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1={m.fade!.from}
                  x2="0"
                  y2={m.fade!.to}
                >
                  <stop offset="0" stopColor={m.fill} stopOpacity="0.32" />
                  <stop offset="1" stopColor={m.fill} stopOpacity="0.05" />
                </linearGradient>
              ))}
            </defs>

            {/* סרגל העומק */}
            <g aria-hidden="true">
              <line
                x1={RULER_X}
                y1={yAt(3)}
                x2={RULER_X}
                y2={yAt(0)}
                stroke={NAVY}
                strokeWidth="8"
              />
              {TICKS.map((t) => (
                <g key={t.cm}>
                  <line
                    x1={RULER_X - 20}
                    y1={yAt(t.cm)}
                    x2={RULER_X + 20}
                    y2={yAt(t.cm)}
                    stroke={NAVY}
                    strokeWidth="8"
                  />
                  <line
                    x1={RULER_X - 20}
                    y1={yAt(t.cm)}
                    x2={2300}
                    y2={yAt(t.cm)}
                    stroke={NAVY}
                    strokeWidth="5"
                    strokeDasharray="22 18"
                    opacity="0.4"
                  />
                  <text
                    x={RULER_X + 140}
                    y={yAt(t.cm) + 34}
                    textAnchor="middle"
                    fontSize="96"
                    fill={NAVY}
                    direction="rtl"
                  >
                    {t.label}
                  </text>
                </g>
              ))}
              <text
                x={RULER_X + 140}
                y={yAt(3) - 70}
                textAnchor="middle"
                fontSize="78"
                fill="#64748b"
                direction="rtl"
              >
                עומק
              </text>
            </g>

            {MUSCLES.map((m) => (
              <a key={m.id} href={`#${m.id}`} aria-label={`מעבר להסבר על ${m.name}`}>
                <path
                  d={m.d}
                  fill={m.fade ? `url(#fade-${m.id})` : m.fill}
                  fillOpacity={m.fade ? 1 : 0.32}
                  stroke={m.stroke}
                  strokeWidth="7"
                  strokeOpacity="0.8"
                  strokeLinejoin="round"
                />
                {/* עיגול שקוף גדול יותר — יעד המגע בפועל */}
                <circle cx={m.badge[0]} cy={m.badge[1]} r="200" fill="transparent" />
                <circle cx={m.badge[0]} cy={m.badge[1]} r="96" fill={m.stroke} />
                <text
                  x={m.badge[0]}
                  y={m.badge[1] + 40}
                  textAnchor="middle"
                  fontSize="116"
                  fontWeight="bold"
                  fill="#ffffff"
                >
                  {m.n}
                </text>
              </a>
            ))}
          </svg>
        </div>
        <figcaption className="mt-2 text-center text-sm text-slate-500">{caption}</figcaption>
        <p className="mt-1 text-center text-xs text-slate-500">{credit}</p>
      </figure>

      <ol className="mt-5 space-y-2">
        {MUSCLES.map((m) => (
          <li
            key={m.id}
            id={m.id}
            className="flex scroll-mt-24 items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 [&:target]:border-teal-600 [&:target]:bg-teal-50"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: m.stroke }}
            >
              {m.n}
            </span>
            <span className="flex-1">
              <span className="block text-base font-bold text-slate-900">{m.name}</span>
              <span className="mt-1 block text-sm leading-7 text-black">{m.lead}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
