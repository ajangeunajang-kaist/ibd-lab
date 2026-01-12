import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "./components/FadeIn";

const news = [
  {
    title:
      "Dr. Kyung Hoon Hyun has been selected as a member of the Young Korean Academy of Science and Technology (YKAST)",
    description:
      "Information Landscapes opens at SeMA, exploring urban data through visual narratives.",
    date: "2024.12.15",
    category: "Exhibition",
  },
  {
    title: "New Research Partnership with KAIST",
    description:
      "Collaborative research initiative on computational design methodologies.",
    date: "2024.11.28",
    category: "Research",
  },
  {
    title: "Gibbeum Lee selected as a KAIST Jang Young-Sil Postdoctoral Fellow",
    description:
      "Seoul Urban Data Archive receives recognition at Korea Design Awards.",
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
        <section className="flex flex-col justify-end w-full h-screen mx-auto px-6 py-24 md:px-8 md:py-32">
          <div className="absolute top-0 right-0 pt-16 px-6">
            <FadeIn>
              <div className="font-medium text-[8vw] lg:text-[5vw] leading-none">
                GSCT KAIST
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <h1 className="text-[17vw] leading-[0.9] tracking-tight md:text-4xl lg:text-[13vw] font-normal">
              Information
              <br />
              <FadeIn delay={0.1} className="hidden sm:block">
                Based Design{" "}
              </FadeIn>
              <FadeIn delay={0.2}>Lab</FadeIn>
            </h1>
          </FadeIn>
        </section>

        {/* Intro Section */}
        <section id="intro" className="h-screen flex justify-center items-end">
          <div className="px-6 py-24">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="md:col-span-1"></div>
              <div className="md:col-span-2">
                <FadeInStagger className="grid gap-x-8">
                  <FadeInStaggerItem>
                    <div className="font-medium text-[8vw] lg:text-[5vw] leading-none mb-[1em]">
                      Research Areas
                    </div>
                  </FadeInStaggerItem>
                  <div className="border-l-2 pl-6">
                    <FadeInStaggerItem>
                      <h3 className="font-medium text-[8vw] lg:text-[5vw] leading-none">
                        Computational Design
                      </h3>
                    </FadeInStaggerItem>
                    <FadeInStaggerItem>
                      <h3 className="font-medium text-[8vw] lg:text-[5vw] leading-none">
                        AI in Design
                      </h3>
                    </FadeInStaggerItem>
                    <FadeInStaggerItem>
                      <h3 className="font-medium text-[8vw] lg:text-[5vw] leading-none">
                        HCI
                      </h3>
                    </FadeInStaggerItem>
                    <FadeInStaggerItem>
                      <h3 className="font-medium text-[8vw] lg:text-[5vw] leading-none">
                        Smart Cities
                      </h3>
                    </FadeInStaggerItem>
                  </div>
                </FadeInStagger>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section id="news" className="h-screen px-6 flex flex-col justify-end">
          <FadeIn>
            <div className="font-medium text-[8vw] lg:text-[5vw] leading-none mb-4">
              Latest News
            </div>
          </FadeIn>
          <FadeInStagger className="flex gap-6">
            {news.map((item) => (
              <FadeInStaggerItem
                key={item.title}
                className="group cursor-pointer"
              >
                <div className="w-[calc(33.3333vw-2rem)] bg-gray-300 p-4 aspect-square">
                  <h3 className="word-wrap group-hover:underline underline-offset-4 font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen flex items-center">
          <div className="px-6">
            <FadeIn>
              <div className="font-medium text-[8vw] lg:text-[5vw] leading-none mb-4">
                The essence of technology is by no means anything technological
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-right font-medium text-[8vw] lg:text-[5vw] leading-none mb-[1em]">
                Martin Heidegger
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 font-semibold">
              <div className="md:col-span-1 text-lg"></div>
              <div className="md:col-span-2 text-lg">
                <FadeIn>
                  <p className="leading-relaxed">
                    We focus on the Computational Design research field that
                    aims to explore ways of juxtaposing computational approaches
                    and applications with professional practice and theory in
                    design. Therefore, the researchers are investigating to make
                    the design environment more intelligent and easy to use
                    through applying computational approaches such as artificial
                    intelligence (AI) and human-computer interaction (HCI) on
                    the basis of three related foundation fields: cognitive
                    science, mathematics, and design theory. These explorations
                    result in computer-based frameworks or systems contributing
                    to the enhancement of calculability using algorithmic and/or
                    heuristic computational methods. In other words, the IBD
                    research focus is on 'computational culture' as an extension
                    of computational design.
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
                    If you are interested in our lab, please do not hesitate to
                    contact us.
                  </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <a
                    href="mailto:contact@ibdlab.kr"
                    className="mt-6 inline-block text-base underline underline-offset-4 transition-colors hover:text-[var(--muted)]"
                  >
                    jihyunlee@kaist.ac.kr
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
