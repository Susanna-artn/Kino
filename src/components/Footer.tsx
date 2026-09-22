import Link from 'next/link';
import type { SiteContent } from '@/content';
import { contactLinks } from '@/content';
import { TelegramIcon, MailIcon, GithubIcon, VkIcon } from './ui/Icons';

type Props = { c: SiteContent };

export function Footer({ c }: Props) {
  const items = [
    { key: 'telegram', label: c.footer.telegram, href: contactLinks.telegram, Icon: TelegramIcon },
    { key: 'email', label: c.footer.email, href: contactLinks.email, Icon: MailIcon },
    { key: 'github', label: c.footer.github, href: contactLinks.github, Icon: GithubIcon },
    { key: 'vk', label: c.footer.vk, href: contactLinks.vk, Icon: VkIcon },
  ];
  return (
    <footer className="border-t border-line bg-bg-alt py-12">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="#top"
          className="text-2xl sm:text-3xl font-extrabold tracking-[0.14em] text-accent"
        >
          SUSANNA
        </Link>
        <nav>
          <ul className="flex flex-wrap gap-2">
            {items.map(({ key, label, href, Icon }) => (
              <li key={key}>
                <Link
                  href={href}
                  target={key === 'email' ? undefined : '_blank'}
                  rel={key === 'email' ? undefined : 'noreferrer noopener'}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-card px-3.5 py-2 text-sm text-ink hover:border-accent/50 hover:text-white"
                >
                  <Icon size={16} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
