import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "./components/FadeIn";

const news = [
  {
    title: "Exhibition at Seoul Museum of Art",
    description: "Information Landscapes opens at SeMA, exploring urban data through visual narratives.",
    date: "2024.12.15",
    category: "Exhibition",
  },
  {
    title: "New Research Partnership with KAIST",
    description: "Collaborative research initiative on computational design methodologies.",
    date: "2024.11.28",
    category: "Research",
  },
  {
    title: "Design Award 2024",
    description: "Seoul Urban Data Archive receives recognition at Korea Design Awards.",
    date: "2024.10.05",
    category: "Award",
  },
];

const researchPreview = [
  { title: "Data Narratives", year: "2024" },
  { title: "Systems Thinking in Design", year: "2024" },
  { title: "Typography as Information", year: "2023" },
];

const projectsPreview = [
  { title: "Seoul Urban Data Archive", category: "Data Visualization", year: "2024" },
  { title: "Temporal Mapping Project", category: "Research", year: "2024" },
];

const peoplePreview = [
  { name: "Kim Minjae", role: "Director" },
  { name: "Lee Soojin", role: "Senior Researcher" },
  { name: "Park Jihoon", role: "Designer" },
  { name: "Choi Yuna", role: "Designer" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
          <FadeIn>
            <h1 className="max-w-4xl text-3xl font-normal leading-tight tracking-tight md:text-4xl lg:text-5xl">
              We are a research-based design studio focused on the systematic
              exploration of information, data, and visual communication.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              Our work investigates how information can be organized, visualized,
              and understood through design methodology.
            </p>
          </FadeIn>
        </section>

        {/* Latest News Section */}
        <section id="news">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <div className="grid gap-12 md:grid-cols-12">
              <FadeIn className="md:col-span-4">
                <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)]">
                  Latest News
                </p>
              </FadeIn>
              <div className="md:col-span-8">
                <FadeInStagger className="space-y-8">
                  {news.map((item) => (
                    <FadeInStaggerItem
                      key={item.title}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono text-xs text-[var(--muted)]">
                              {item.date}
                            </span>
                            <span className="font-mono text-xs text-[var(--muted)]">
                              {item.category}
                            </span>
                          </div>
                          <h3 className="text-base font-normal group-hover:underline underline-offset-4">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </FadeInStaggerItem>
                  ))}
                </FadeInStagger>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <div className="grid gap-12 md:grid-cols-12">
              <FadeIn className="md:col-span-4">
                <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)]">
                  About
                </p>
              </FadeIn>
              <div className="md:col-span-8">
                <FadeIn>
                  <p className="text-lg leading-relaxed">
                    Information Based Design Lab operates at the intersection of
                    research and practice. We believe that design is a method of
                    inquiry, a way of understanding complex systems through
                    making.
                  </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                    Founded in Seoul, our studio brings together designers,
                    researchers, and technologists who share a commitment to
                    rigorous, concept-driven work.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Research Preview Section */}
        <section id="research">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <div className="grid gap-12 md:grid-cols-12">
              <FadeIn className="md:col-span-4">
                <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)]">
                  Research
                </p>
              </FadeIn>
              <div className="md:col-span-8">
                <FadeInStagger className="space-y-6">
                  {researchPreview.map((item) => (
                    <FadeInStaggerItem
                      key={item.title}
                      className="flex items-center justify-between"
                    >
                      <p className="text-base">{item.title}</p>
                      <span className="font-mono text-xs text-[var(--muted)]">
                        {item.year}
                      </span>
                    </FadeInStaggerItem>
                  ))}
                </FadeInStagger>
                <FadeIn delay={0.3}>
                  <Link
                    href="/research"
                    className="mt-8 inline-block font-mono text-xs tracking-wide underline underline-offset-4 transition-colors hover:text-[var(--muted)]"
                  >
                    View all research
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
        <section id="projects">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <div className="grid gap-12 md:grid-cols-12">
              <FadeIn className="md:col-span-4">
                <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)]">
                  Selected Projects
                </p>
              </FadeIn>
              <div className="md:col-span-8">
                <FadeInStagger className="grid gap-8 sm:grid-cols-2">
                  {projectsPreview.map((project) => (
                    <FadeInStaggerItem
                      key={project.title}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-[4/3] bg-[var(--border)] mb-4 transition-colors group-hover:bg-[#d8d8d8]" />
                      <h3 className="text-sm font-normal">{project.title}</h3>
                      <p className="mt-1 font-mono text-xs text-[var(--muted)]">
                        {project.category}
                      </p>
                    </FadeInStaggerItem>
                  ))}
                </FadeInStagger>
                <FadeIn delay={0.3}>
                  <Link
                    href="/projects"
                    className="mt-8 inline-block font-mono text-xs tracking-wide underline underline-offset-4 transition-colors hover:text-[var(--muted)]"
                  >
                    View all projects
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Preview Section */}
        <section id="contact">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <div className="grid gap-12 md:grid-cols-12">
              <FadeIn className="md:col-span-4">
                <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)]">
                  Contact
                </p>
              </FadeIn>
              <div className="md:col-span-8">
                <FadeIn>
                  <p className="text-lg leading-relaxed">
                    We are open to collaborations, research partnerships, and
                    inquiries.
                  </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <a
                    href="mailto:contact@ibdlab.kr"
                    className="mt-6 inline-block text-base underline underline-offset-4 transition-colors hover:text-[var(--muted)]"
                  >
                    contact@ibdlab.kr
                  </a>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <Link
                    href="/contact"
                    className="mt-8 block font-mono text-xs tracking-wide underline underline-offset-4 transition-colors hover:text-[var(--muted)]"
                  >
                    More contact info
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
