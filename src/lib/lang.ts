import type { Lang } from '@/content';

export const isLang = (v: unknown): v is Lang => v === 'ru' || v === 'en';

export const anchor = (id: string) => `#${id}`;

export const sectionIds = {
  hero: 'top',
  about: 'about',
  projects: 'projects',
  skills: 'skills',
  stack: 'stack',
  cv: 'cv',
  education: 'education',
} as const;
