import type { Metadata } from 'next';
import { content } from '@/content';
import { SiteLayout } from '@/components/SiteLayout';

const c = content.ru;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: c.meta.title,
  description: c.meta.description,
  alternates: {
    canonical: '/',
    languages: {
      ru: '/',
      en: '/en/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    title: c.meta.title,
    description: c.meta.description,
    images: ['/photo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: c.meta.title,
    description: c.meta.description,
    images: ['/photo.jpg'],
  },
};

export default function RuPage() {
  return <SiteLayout lang="ru" />;
}
