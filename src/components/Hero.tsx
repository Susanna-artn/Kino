import Link from 'next/link';
import Image from 'next/image';
import type { SiteContent } from '@/content';
import { Chip, StatusDot } from './ui/Chip';
import { TelegramIcon, MailIcon, GithubIcon } from './ui/Icons';

type Props = { c: SiteContent };

const iconFor = (kind: 'telegram' | 'email' | 'github' | 'vk') => {
  switch (kind) {
    case 'telegram':
      return <TelegramIcon size={16} />;
    case 'email':
      return <MailIcon size={16} />;
    case 'github':
      return <GithubIcon size={16} />;
    default:
      return null;
  }
};

export function Hero({ c }: Props) {
  return (
    <section id="top" className="section-band pt-10 sm:pt-14 lg:pt-16">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16 items-center">
        {/* Photo (moves above on mobile) */}
        <div className="order-first lg:order-last flex flex-col items-center gap-5">
          <div className="relative aspect-square w-64 sm:w-72 lg:w-[280px]">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full border-[3px] border-accent"
            />
            <div className="absolute inset-[6px] overflow-hidden rounded-full bg-bg-card">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/photo.jpg`}
                alt={c.hero.photoAlt}
                fill
                priority
                sizes="(max-width: 1024px) 280px, 280px"
                style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {c.hero.contacts.map((p) => (
              <Link
                key={p.kind}
                href={p.href}
                target={p.kind === 'email' ? undefined : '_blank'}
                rel={p.kind === 'email' ? undefined : 'noreferrer noopener'}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-card px-3.5 py-2 text-sm text-ink hover:border-accent/50 hover:text-white"
              >
                {iconFor(p.kind)}
                {p.label}
              </Link>
            ))}
          </div>
          {c.hero.contacts.find((c) => c.kind === 'github' && c.note) ? (
            <p className="text-xs text-ink-faint -mt-2 text-center max-w-[280px]">
              {c.hero.contacts.find((c) => c.kind === 'github')?.note}
            </p>
          ) : null}
        </div>

        {/* Text column */}
        <div className="order-last lg:order-first">
          <Chip tone="success" size="md" className="gap-2">
            <StatusDot /> {c.hero.statusBadge}
          </Chip>
          <h1 className="mt-6 text-[2.6rem] sm:text-6xl lg:text-[5.25rem] font-extrabold leading-[1.02] tracking-tight">
            <span className="block text-white">{c.hero.firstName}</span>
            <span className="block text-accent">{c.hero.lastName}</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-ink-muted">{c.hero.role}</p>
          <p className="mt-4 max-w-xl text-ink leading-relaxed">{c.hero.intro}</p>

          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
            {c.hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-[0.8rem] text-ink-muted leading-snug">
                    {s.label}
                  </div>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cv"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-accent hover:bg-accent-strong"
            >
              {c.hero.ctaPrimary}
            </a>
            <Link
              href={c.hero.contacts[0].href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink hover:border-accent/50 hover:text-white"
            >
              {c.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
