import type { SiteContent, Skill } from '@/content';
import { SectionTitle } from './ui/SectionTitle';
import { Chip } from './ui/Chip';

type Props = { c: SiteContent };

function SkillCard({ s }: { s: Skill }) {
  const barPct = s.level === 'confident' ? '92%' : '35%';
  return (
    <article className="card p-6 h-full flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-white">{s.title}</h3>
        <Chip tone={s.level === 'confident' ? 'accent' : 'dim'}>{s.levelLabel}</Chip>
      </div>
      <div className="mt-4">
        <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
          <div
            className={`h-full rounded-full ${
              s.level === 'confident' ? 'bg-accent' : 'bg-accent/40'
            }`}
            style={{ width: barPct }}
            aria-hidden
          />
        </div>
        <div className="mt-2 text-xs text-ink-muted">{s.levelLabel}</div>
      </div>
      <ul className="mt-5 space-y-2 text-sm text-ink">
        {s.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span aria-hidden className="text-accent">→</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Skills({ c }: Props) {
  return (
    <section id="skills" className="section-band bg-bg-alt border-y border-line">
      <div className="container-page">
        <SectionTitle>{c.skillsTitle}</SectionTitle>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {c.skills.map((s) => (
            <SkillCard key={s.title} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
