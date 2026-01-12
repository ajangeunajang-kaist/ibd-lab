"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/people", label: "People" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-8">
        <Link href="/" className="group">
          <span className="text-xs uppercase">
            IBD
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-xs text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xs">
            {isMenuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px]  md:hidden"
          >
            <ul className="flex flex-col px-6 py-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 text-sm text-[var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-6xl px-6 md:px-8">
      </div>
    </header>
  );
}
