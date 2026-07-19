import { Icon } from "./Icon";
import Container from "./Container";
import { site } from "../data/site";

// פס עליון כהה עם פרטי קשר — כמו ב-danrixphysio.com
export default function TopBar() {
  const haifaClinics = site.clinics.filter((clinic) => clinic.city === "חיפה");
  const gvatClinic = site.clinics.find((clinic) => clinic.city === "קיבוץ גבת");

  return (
    <div className="bg-teal-700 text-white">
      <Container>
        <div className="flex min-h-11 flex-wrap items-center justify-center gap-x-4 gap-y-1 py-1 text-sm sm:justify-start sm:gap-x-6">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`פתיחת שיחה בוואטסאפ עם רועי קליין, ${site.phone}`}
            className="flex min-h-11 items-center gap-2 hover:text-teal-200"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            <span dir="ltr">{site.phone}</span>
          </a>
          <a href={`mailto:${site.email}`} className="hidden min-h-11 items-center gap-2 hover:text-teal-200 sm:flex">
            <Icon name="mail" className="h-4 w-4" />
            <span dir="ltr">{site.email}</span>
          </a>
          {/* מיקומי הקליניקות — כל שם הוא קישור ניווט ב-Waze */}
          <span className="flex items-center gap-2">
            <Icon name="mapPin" className="h-4 w-4" />
            <span>
              {"חיפה ("}
              {haifaClinics.map((clinic, i) => (
                <span key={clinic.name}>
                  {i > 0 && ", "}
                  <a
                    href={clinic.wazeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`ניווט ב-Waze אל ${clinic.name}`}
                    className="hover:text-teal-200"
                  >
                    {clinic.name}
                  </a>
                </span>
              ))}
              {") · "}
              {gvatClinic ? (
                <a
                  href={gvatClinic.wazeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ניווט ב-Waze אל ${gvatClinic.name}, קיבוץ גבת`}
                  className="hover:text-teal-200"
                >
                  גבת
                </a>
              ) : (
                "גבת"
              )}
            </span>
          </span>
        </div>
      </Container>
    </div>
  );
}
