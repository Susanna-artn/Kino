import type { Metadata } from 'next';
import { content } from '@/content';
import { SiteLayout } from '@/components/SiteLayout';

const c = content.en;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: c.meta.title,
  description: c.meta.description,
  alternates: {
    canonical: '/en/',
    languages: {
      ru: '/',
      en: '/en/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/en/',
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

export default function EnPage() {
  return <SiteLayout lang="en" />;
}
