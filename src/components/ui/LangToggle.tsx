import Link from 'next/link';
import type { Lang } from '@/content';

type Props = { current: Lang; className?: string };

const items: { lang: Lang; label: string; href: string }[] = [
  { lang: 'ru', label: 'RU', href: '/' },
  { lang: 'en', label: 'EN', href: '/en/' },
];

export function LangToggle({ current, className = '' }: Props) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-line bg-bg-card p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      {items.map((it) => {
        const active = it.lang === current;
        return (
          <Link
            key={it.lang}
            href={it.href}
            aria-current={active ? 'page' : undefined}
            className={`px-2.5 py-1 rounded-full transition-colors ${
              active ? 'bg-accent text-white' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {it.label}
          </Link>
        );
      })}
    </div>
  );
}
