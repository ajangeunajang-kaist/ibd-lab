import Link from "next/link";

export function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-xs uppercase text-[var(--muted)]">
              Information Based Design Lab
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              A research-based design studio exploring the intersection of
              information systems, visual communication, and human experience.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-[var(--muted)] mb-4">
              Contact
            </p>
            <address className="not-italic space-y-2">
              <a
                href="mailto:contact@ibdlab.kr"
                className="block text-sm text-[var(--foreground)] transition-colors hover:text-[var(--muted)]"
              >
                contact@ibdlab.kr
              </a>
              <p className="text-sm text-[var(--muted)]">
                Seoul, Korea
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8  flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--muted)]">
            {new Date().getFullYear()} IBD Lab
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
