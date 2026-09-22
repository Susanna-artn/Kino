import type { SiteContent, CvEntry } from '@/content';
import { SectionTitle } from './ui/SectionTitle';
import { Chip } from './ui/Chip';

type Props = { c: SiteContent };

function ResultBar({ items, label }: { items: string[]; label: string }) {
  return (
    <div className="mt-5 rounded-2xl border border-success/25 bg-success-soft px-4 py-3 text-sm">
      <span className="font-bold text-success">{label}: </span>
      <span className="text-ink">
        {items.map((t, i) => (
          <span key={i}>
            {t}
            {i < items.length - 1 ? (
              <span aria-hidden className="mx-2 text-success/60">
                ·
              </span>
            ) : null}
          </span>
        ))}
      </span>
    </div>
  );
}

function TimelineDot() {
  return (
    <span
      aria-hidden
      className="absolute -left-[7px] top-6 h-3 w-3 rounded-full bg-accent ring-4 ring-bg-base"
    />
  );
}

function EntryCard({ e, resultLabel }: { e: CvEntry; resultLabel: string }) {
  return (
    <article className="relative card p-6">
      <TimelineDot />
      <header className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
          {e.company}
        </h3>
        {e.duration ? (
          <span className="text-xs text-ink-muted">{e.duration}</span>
        ) : null}
      </header>

      <div className="mt-3 flex flex-wrap gap-2">
        <Chip tone="outline">{e.dates}</Chip>
        <Chip tone="accent">{e.role}</Chip>
      </div>

      {e.description ? (
        <p className="mt-4 text-ink leading-relaxed">{e.description}</p>
      ) : null}

      {e.bullets ? (
        <ul className="mt-4 space-y-2 text-ink">
          {e.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden className="text-accent">–</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {e.subproject ? (
        <div className="mt-5 rounded-2xl border border-line bg-bg-alt p-5">
          <h4 className="text-accent font-semibold">{e.subproject.title}</h4>
          <p className="mt-2 text-ink leading-relaxed">{e.subproject.body}</p>
          <p className="mt-3 text-success text-sm">
            → {e.subproject.outcome}
          </p>
        </div>
      ) : null}

      {e.result ? <ResultBar items={e.result} label={resultLabel} /> : null}
    </article>
  );
}

function CompactCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <article className="relative card p-6">
      <TimelineDot />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-ink">
        {items.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="text-accent">–</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function CV({ c }: Props) {
  return (
    <section id="cv" className="section-band bg-bg-alt border-y border-line">
      <div className="container-page">
        <SectionTitle>{c.cvTitle}</SectionTitle>

        <div className="mt-10 relative pl-6 sm:pl-8">
          <span
            aria-hidden
            className="absolute left-1 top-2 bottom-2 w-px bg-line"
          />
          <div className="space-y-6">
            {c.cv.map((e) => (
              <EntryCard key={e.id} e={e} resultLabel={c.resultLabel} />
            ))}
            <CompactCard title={c.parallelTitle} items={c.parallelItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
