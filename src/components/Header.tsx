import Link from 'next/link';
import type { Lang, SiteContent } from '@/content';
import { contactLinks } from '@/content';
import { LangToggle } from './ui/LangToggle';
import { MobileMenu } from './ui/MobileMenu';
import { TelegramIcon } from './ui/Icons';

type Props = { lang: Lang; c: SiteContent };

export function Header({ lang, c }: Props) {
  const items = [
    { href: '#about', label: c.nav.about },
    { href: '#projects', label: c.nav.projects },
    { href: '#skills', label: c.nav.skills },
    { href: '#stack', label: c.nav.stack },
    { href: '#cv', label: c.nav.cv },
    { href: '#education', label: c.nav.education },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg-base/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="#top"
          className="text-lg sm:text-xl font-extrabold tracking-[0.14em] text-accent"
        >
          SUSANNA
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-ink-muted">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="transition-colors hover:text-ink"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle current={lang} />
          <Link
            href={contactLinks.telegram}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-accent hover:bg-accent-strong"
          >
            <TelegramIcon size={16} /> {c.nav.telegramCta}
          </Link>
          <MobileMenu nav={c.nav} />
        </div>
      </div>
    </header>
  );
}
