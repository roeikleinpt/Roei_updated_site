import { Icon } from "./Icon";
import Container from "./Container";
import { site } from "../data/site";

// פס עליון כהה עם פרטי קשר — כמו ב-danrixphysio.com
export default function TopBar() {
  return (
    <div className="bg-teal-700 text-white">
      <Container>
        <div className="flex min-h-11 items-center justify-center gap-4 text-sm sm:justify-start sm:gap-6">
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
          <span className="flex items-center gap-2">
            <Icon name="mapPin" className="h-4 w-4" />
            {site.locationsShort}
          </span>
        </div>
      </Container>
    </div>
  );
}
