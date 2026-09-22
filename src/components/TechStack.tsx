import type { SiteContent } from '@/content';
import { SectionTitle } from './ui/SectionTitle';

type Props = { c: SiteContent };

// Элемент со звёздочкой в конце — «изучаю» (звёздочку не отображаем)
function parseItem(raw: string): { label: string; learning: boolean } {
  if (raw.endsWith('*')) return { label: raw.slice(0, -1), learning: true };
  return { label: raw, learning: false };
}

export function TechStack({ c }: Props) {
  return (
    <section id="stack" className="section-band">
      <div className="container-page">
        <SectionTitle>{c.stackTitle}</SectionTitle>
        <p className="mt-4 text-ink-muted">{c.stackSubtitle}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.stack.map((cat) => (
            <div key={cat.key} className="card p-6">
              <h3 className="text-[0.75rem] uppercase tracking-[0.18em] font-bold text-accent">
                {cat.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((raw) => {
                  const item = parseItem(raw);
                  return (
                    <li key={raw}>
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm ${
                          item.learning
                            ? 'border-line/70 bg-white/[0.02] text-ink-muted'
                            : 'border-line bg-white/[0.04] text-ink'
                        }`}
                      >
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
