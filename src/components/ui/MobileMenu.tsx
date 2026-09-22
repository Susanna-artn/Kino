'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MenuIcon, CloseIcon, TelegramIcon } from './Icons';
import type { Nav } from '@/content';
import { contactLinks } from '@/content';

type Props = { nav: Nav };

const links = (nav: Nav) => [
  { href: '#about', label: nav.about },
  { href: '#projects', label: nav.projects },
  { href: '#skills', label: nav.skills },
  { href: '#stack', label: nav.stack },
  { href: '#cv', label: nav.cv },
  { href: '#education', label: nav.education },
];

export function MobileMenu({ nav }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted hover:text-ink"
      >
        <MenuIcon />
      </button>
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-bg-base/95 backdrop-blur"
        >
          <div className="container-page flex h-16 items-center justify-between">
            <span className="font-extrabold tracking-wider text-accent">SUSANNA</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted hover:text-ink"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="container-page mt-6 flex flex-col gap-1 text-lg">
            {links(nav).map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-ink hover:bg-white/[0.04]"
              >
                {l.label}
              </a>
            ))}
            <Link
              href={contactLinks.telegram}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 font-semibold text-white shadow-accent"
            >
              <TelegramIcon /> {nav.telegramCta}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
