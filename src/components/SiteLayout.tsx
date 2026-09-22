import type { Lang } from '@/content';
import { content } from '@/content';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { TechStack } from './TechStack';
import { CV } from './CV';
import { Education } from './Education';
import { Footer } from './Footer';

type Props = { lang: Lang };

export function SiteLayout({ lang }: Props) {
  const c = content[lang];
  return (
    <>
      <Header lang={lang} c={c} />
      <main>
        <Hero c={c} />
        <About c={c} />
        <Projects c={c} />
        <Skills c={c} />
        <TechStack c={c} />
        <CV c={c} />
        <Education c={c} />
      </main>
      <Footer c={c} />
    </>
  );
}
