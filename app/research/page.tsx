import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "../components/FadeIn";

const research = [
  {
    title: "Data Narratives",
    description:
      "Exploring how information can be structured to reveal meaningful patterns and stories. This ongoing research investigates the intersection of data science and narrative design, examining how visual systems can make complex datasets accessible and meaningful to diverse audiences.",
    year: "2024",
    status: "Ongoing",
  },
  {
    title: "Systems Thinking in Design",
    description:
      "Investigating the relationship between complex systems and visual representation. We examine how designers can adopt systems thinking methodologies to address interconnected challenges in information architecture and user experience.",
    year: "2024",
    status: "Ongoing",
  },
  {
    title: "Typography as Information",
    description:
      "Examining the role of typographic systems in organizing and communicating data. This research explores how letterforms, spacing, and hierarchical arrangements can serve as information-bearing elements beyond their semantic content.",
    year: "2023",
    status: "Completed",
  },
  {
    title: "Temporal Data Visualization",
    description:
      "Studying methods for representing time-based data in static and interactive formats. The research addresses challenges of scale, granularity, and human perception in temporal information design.",
    year: "2023",
    status: "Completed",
  },
  {
    title: "Cartographic Abstraction",
    description:
      "Investigating levels of abstraction in map-based information design. This project explores how geographic data can be simplified, stylized, and transformed while maintaining navigational and informational utility.",
    year: "2022",
    status: "Completed",
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
          <FadeIn>
            <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)] mb-4">
              Research
            </p>
            <h1 className="max-w-3xl text-3xl font-normal leading-tight tracking-tight md:text-4xl">
              Our research explores the foundations of information design through systematic inquiry and practice.
            </h1>
          </FadeIn>
        </section>

        <section className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <FadeInStagger className="space-y-16">
              {research.map((item, index) => (
                <FadeInStaggerItem
                  key={item.title}
                  className="grid gap-8 md:grid-cols-12"
                >
                  <div className="md:col-span-3">
                    <p className="font-mono text-xs text-[var(--muted)]">
                      {item.year}
                    </p>
                    <p className="font-mono text-xs text-[var(--muted)] mt-1">
                      {item.status}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="text-xl font-normal">{item.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                  {index < research.length - 1 && (
                    <div className="md:col-span-12 mt-8">
                      <div className="h-px bg-[var(--border)]" />
                    </div>
                  )}
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
