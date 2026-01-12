import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FadeIn } from "../components/FadeIn";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
          <FadeIn>
            <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)] mb-4">
              Contact
            </p>
            <h1 className="max-w-3xl text-3xl font-normal leading-tight tracking-tight md:text-4xl">
              We are open to collaborations, research partnerships, and inquiries.
            </h1>
          </FadeIn>
        </section>

        <section className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <div className="grid gap-16 md:grid-cols-2">
              <FadeIn>
                <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)] mb-6">
                  General Inquiries
                </p>
                <a
                  href="mailto:contact@ibdlab.kr"
                  className="text-xl underline underline-offset-4 transition-colors hover:text-[var(--muted)]"
                >
                  contact@ibdlab.kr
                </a>
                <p className="mt-8 text-base leading-relaxed text-[var(--muted)]">
                  For project inquiries, collaboration proposals, or general questions about our work.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)] mb-6">
                  Press & Media
                </p>
                <a
                  href="mailto:press@ibdlab.kr"
                  className="text-xl underline underline-offset-4 transition-colors hover:text-[var(--muted)]"
                >
                  press@ibdlab.kr
                </a>
                <p className="mt-8 text-base leading-relaxed text-[var(--muted)]">
                  For press inquiries, interview requests, and media-related questions.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <div className="grid gap-16 md:grid-cols-2">
              <FadeIn>
                <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)] mb-6">
                  Location
                </p>
                <p className="text-base leading-relaxed">
                  Seoul, Korea
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  Studio visits by appointment only.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)] mb-6">
                  Social
                </p>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-base underline underline-offset-4 transition-colors hover:text-[var(--muted)]"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="block text-base underline underline-offset-4 transition-colors hover:text-[var(--muted)]"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="block text-base underline underline-offset-4 transition-colors hover:text-[var(--muted)]"
                  >
                    LinkedIn
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <FadeIn>
              <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)] mb-6">
                Careers
              </p>
              <p className="text-lg leading-relaxed max-w-2xl">
                We are always interested in meeting talented designers and researchers.
                Send your portfolio and a brief introduction to careers@ibdlab.kr
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
