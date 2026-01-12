import Link from "next/link";

export function Footer() {
  return (
    <footer className="">
      <div className="text-sm font-semibold p-6 mt-40">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1">
            <p>Information Based Design Lab, GSCT Kaist</p>
            <p>
              3321, N25, 291 Daehak-ro, Yuseong-gu, Daejeon, Republic of Korea
            </p>
            <p>Copyright 2026 ibd Lab. All rights reserved.</p>
          </div>

          <div>
            <p>Contact</p>
            <address className="not-italic">
              <a
                href="mailto:contact@ibdlab.kr"
                className="block text-[var(--foreground)] transition-colors hover"
              >
                If you are interested in our lab, please do not hesitate to
                contact us.
              </a>
              <p>jihyunlee@kaist.ac.kr</p>
            </address>
          </div>

          <div className="flex flex-col">
            <Link
              href="https://www.youtube.com/channel/UC1EITs-W0fYgqrl819kKvvQ/featured"
              className=" transition-colors hover:text-[var(--foreground)]"
            >
              ibd Youtube
            </Link>
            <Link
              href="https://ct.kaist.ac.kr/"
              className=" transition-colors hover:text-[var(--foreground)]"
            >
              Graduate School of Culture Technology
            </Link>
            <Link
              href="https://www.kaist.ac.kr/"
              className=" transition-colors hover:text-[var(--foreground)]"
            >
              KAIST
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
