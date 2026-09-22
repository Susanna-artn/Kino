import type { SiteContent } from '@/content';
import { SectionTitle } from './ui/SectionTitle';

type Props = { c: SiteContent };

export function About({ c }: Props) {
  return (
    <section id="about" className="section-band bg-bg-alt border-y border-line">
      <div className="container-page">
        <SectionTitle>{c.about.title}</SectionTitle>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5 text-ink leading-relaxed">
            {c.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <blockquote className="relative mt-6 card px-5 py-4 pl-6">
              <span
                aria-hidden
                className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-accent"
              />
              <p className="italic text-ink">«{c.about.quote}»</p>
            </blockquote>
          </div>
          <aside className="card p-6">
            <h3 className="text-lg font-bold text-white">{c.about.besidesTitle}</h3>
            <ul className="mt-4 space-y-3 text-ink">
              {c.about.besidesItems.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
