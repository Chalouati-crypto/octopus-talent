"use client";

import Link from "next/link";
import { useState } from "react";

const MENU_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/expertises", label: "Expertises" },
  { href: "/talents", label: "Talents" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-border/40 bg-background/95 sticky top-0 z-50 border-b backdrop-blur-md">
      <nav className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <div className="from-primary to-accent flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
            <span className="text-primary-foreground text-sm font-bold">
              OT
            </span>
          </div>
          <span className="text-foreground hidden font-bold md:inline">
            Octopus Talent
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Contact Button */}
          <Link
            href="/contact"
            className="from-primary to-accent text-primary-foreground hidden items-center justify-center rounded-lg bg-gradient-to-r px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Nous contacter
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="text-foreground h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="border-border/40 bg-background border-t md:hidden">
          <div className="space-y-2 px-4 py-4">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:bg-primary/10 hover:text-primary text-foreground block rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="from-primary to-accent text-primary-foreground mt-4 block w-full rounded-lg bg-gradient-to-r px-4 py-2 text-center text-sm font-medium transition-opacity hover:opacity-90"
              onClick={() => setIsOpen(false)}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
