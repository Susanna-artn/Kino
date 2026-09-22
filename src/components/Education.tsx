import type { SiteContent } from '@/content';
import { SectionTitle } from './ui/SectionTitle';
import { Chip } from './ui/Chip';
import { CheckIcon } from './ui/Icons';

type Props = { c: SiteContent };

export function Education({ c }: Props) {
  const e = c.education;
  return (
    <section id="education" className="section-band">
      <div className="container-page">
        <SectionTitle>{e.title}</SectionTitle>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* University */}
          <article className="card p-6">
            <div className="text-3xl leading-none">{e.uniCardTitle}</div>
            <h3 className="mt-3 text-lg font-bold text-white leading-snug">
              {e.uniName}
            </h3>
            <p className="mt-1 text-ink-muted">{e.uniInstitute}</p>
            <ul className="mt-5 space-y-4">
              {e.degrees.map((d) => (
                <li key={d.title}>
                  <div className="text-ink">{d.title}</div>
                  <div className="mt-1.5">
                    <Chip tone="outline">{d.years}</Chip>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* Additional education */}
          <article className="card p-6">
            <h3 className="text-lg font-bold text-white">{e.extraTitle}</h3>
            <ul className="mt-4 space-y-3 text-ink">
              {e.extraItems.map((x) => (
                <li key={x.title} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-accent">
                    <CheckIcon />
                  </span>
                  <span>{x.title}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Languages + about me */}
          <article className="card p-6">
            <h3 className="text-lg font-bold text-white">{e.languagesTitle}</h3>
            <ul className="mt-4 divide-y divide-line">
              {e.languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between py-2.5 text-ink"
                >
                  <span>{l.name}</span>
                  <Chip tone="outline">{l.level}</Chip>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-line pt-4">
              <h4 className="text-sm font-semibold text-ink-muted">
                {e.aboutMeTitle}
              </h4>
              <p className="mt-1 text-ink">{e.aboutMeText}</p>
            </div>
          </article>

          {/* Interests — full width */}
          <article className="card p-6 lg:col-span-2">
            <h3 className="text-lg font-bold text-white">{e.interestsTitle}</h3>
            <div className="mt-3 text-[0.75rem] uppercase tracking-[0.18em] text-accent font-bold">
              {e.interestsCategory}
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {e.interests.map((i) => (
                <li key={i}>
                  <Chip tone="default">{i}</Chip>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
