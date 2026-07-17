import Container from "./Container";
import Reveal from "./Reveal";
import { medReviewsUrl, medReviewsWidgetUrl } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-4 py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            חוות דעת מטופלים
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-6 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <iframe
              title="חוות דעת מטופלים מאומתות — MedReviews"
              src={medReviewsWidgetUrl}
              className="block h-[228px] w-full sm:h-[210px]"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <a
            href={medReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press inline-block rounded-full bg-teal-700 px-7 py-3.5 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
          >
            לכל חוות הדעת ב־MedReviews
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
