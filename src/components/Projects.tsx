import Link from 'next/link';
import type { SiteContent } from '@/content';
import { SectionTitle } from './ui/SectionTitle';
import { Chip } from './ui/Chip';
import { ClockIcon, ArrowUpRight } from './ui/Icons';

type Props = { c: SiteContent };

export function Projects({ c }: Props) {
  return (
    <section id="projects" className="section-band">
      <div className="container-page">
        <SectionTitle>{c.projectsTitle}</SectionTitle>
      </div>
      <div className="mt-10">
        <div className="container-page">
          <ul
            className="thin-scrollbar flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory"
            role="list"
          >
            {c.projects.map((p) => (
              <li
                key={p.title}
                className="snap-start shrink-0 w-[270px] card p-5 flex flex-col gap-3"
              >
                <h3 className="font-display text-[1.05rem] font-semibold text-white leading-tight tracking-tight min-h-[2.5rem]">
                  {p.title}
                </h3>
                <p className="text-sm text-ink leading-relaxed flex-1">
                  {p.description}
                </p>
                {p.tech ? (
                  <p className="text-xs text-ink-muted">{p.tech}</p>
                ) : null}

                <div className="mt-2 flex flex-wrap gap-2">
                  {p.liveUrl ? (
                    <Link
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-ink hover:border-accent/50 hover:text-white"
                    >
                      Open <ArrowUpRight size={12} />
                    </Link>
                  ) : null}
                  {p.repoUrl ? (
                    <Link
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-ink hover:border-accent/50 hover:text-white"
                    >
                      GitHub <ArrowUpRight size={12} />
                    </Link>
                  ) : null}
                  <Chip tone="dim">
                    <ClockIcon />
                    {p.statusLabel}
                  </Chip>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
