import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "../components/FadeIn";

const team = [
  {
    name: "Kim Minjae",
    role: "Director",
    bio: "Founder and director of IBD Lab. Previously led the data visualization team at Seoul National University. Research interests include information architecture and systematic design methodologies.",
  },
  {
    name: "Lee Soojin",
    role: "Senior Researcher",
    bio: "Leads research initiatives at the intersection of design and data science. PhD in Information Design from KAIST. Specializes in temporal data visualization.",
  },
  {
    name: "Park Jihoon",
    role: "Designer",
    bio: "Focuses on publication design and typographic systems. Graduate of Hongik University. Works on editorial projects and visual identity systems.",
  },
  {
    name: "Choi Yuna",
    role: "Designer",
    bio: "Specializes in interactive data visualization and digital product design. Background in computer science and visual communication.",
  },
  {
    name: "Jung Hyunwoo",
    role: "Researcher",
    bio: "Research focus on cartographic design and geographic information systems. Masters in Urban Planning from Seoul National University.",
  },
  {
    name: "Kang Soyeon",
    role: "Designer",
    bio: "Exhibition and spatial design. Works on translating data into physical installations and environmental graphics.",
  },
];

const collaborators = [
  "Seoul National University",
  "KAIST",
  "Seoul Museum of Art",
  "National Archives of Korea",
  "Korea Design Foundation",
  "Hyundai Motor Company",
];

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
          <FadeIn>
            <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)] mb-4">
              People
            </p>
            <h1 className="max-w-3xl text-3xl font-normal leading-tight tracking-tight md:text-4xl">
              A multidisciplinary team of designers, researchers, and technologists.
            </h1>
          </FadeIn>
        </section>

        <section className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <FadeIn>
              <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)] mb-12">
                Team
              </p>
            </FadeIn>
            <FadeInStagger className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((person) => (
                <FadeInStaggerItem key={person.name}>
                  <div className="aspect-[3/4] bg-[var(--border)] mb-6" />
                  <h2 className="text-lg font-normal">{person.name}</h2>
                  <p className="mt-1 font-mono text-xs text-[var(--muted)]">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    {person.bio}
                  </p>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

        <section className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
            <div className="grid gap-12 md:grid-cols-12">
              <FadeIn className="md:col-span-4">
                <p className="font-mono text-xs tracking-wide uppercase text-[var(--muted)]">
                  Collaborators
                </p>
              </FadeIn>
              <div className="md:col-span-8">
                <FadeInStagger className="grid gap-4 sm:grid-cols-2">
                  {collaborators.map((org) => (
                    <FadeInStaggerItem key={org}>
                      <p className="text-base">{org}</p>
                    </FadeInStaggerItem>
                  ))}
                </FadeInStagger>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
