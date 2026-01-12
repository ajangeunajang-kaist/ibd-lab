import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "../components/FadeIn";

const projects = [
  {
    title: "Seoul Urban Data Archive",
    category: "Data Visualization",
    year: "2024",
    description: "A comprehensive visualization system documenting urban transformation patterns in Seoul metropolitan area.",
  },
  {
    title: "Temporal Mapping Project",
    category: "Research",
    year: "2024",
    description: "Interactive mapping platform exploring historical changes through layered temporal data.",
  },
  {
    title: "Information Landscapes",
    category: "Exhibition Design",
    year: "2023",
    description: "Spatial installation translating data flows into physical environments at Seoul Museum of Art.",
  },
  {
    title: "Systematic Typography",
    category: "Publication",
    year: "2023",
    description: "Editorial design system for academic publications focusing on information hierarchy.",
  },
  {
    title: "Climate Data Observatory",
    category: "Data Visualization",
    year: "2023",
    description: "Real-time visualization platform for environmental monitoring data across Korean peninsula.",
  },
  {
    title: "Archive Interface",
    category: "Digital Product",
    year: "2022",
    description: "Navigation system for the National Archives of Korea digital collection.",
  },
  {
    title: "Transit Flow Analysis",
    category: "Research",
    year: "2022",
    description: "Visual analysis of public transportation patterns and urban mobility in major Korean cities.",
  },
  {
    title: "Typography Specimens",
    category: "Publication",
    year: "2022",
    description: "Systematic documentation of Korean typeface characteristics and usage contexts.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
          <FadeIn>
            <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)] mb-4">
              Projects
            </p>
            <h1 className="max-w-3xl text-3xl font-normal leading-tight tracking-tight md:text-4xl">
              Selected work spanning data visualization, publication design, and research initiatives.
            </h1>
          </FadeIn>
        </section>

        <section className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <FadeInStagger className="grid gap-12 sm:grid-cols-2">
              {projects.map((project) => (
                <FadeInStaggerItem
                  key={project.title}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] bg-[var(--border)] mb-6 transition-colors group-hover:bg-[#d8d8d8]" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-normal group-hover:underline underline-offset-4">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                        {project.description}
                      </p>
                      <p className="mt-3 font-mono text-xs text-[var(--muted)]">
                        {project.category}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[var(--muted)] shrink-0">
                      {project.year}
                    </span>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
