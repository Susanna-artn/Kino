import type { ReactNode } from 'react';
import { fontVars } from '@/lib/fonts';
import '../globals.css';

export default function RuRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={fontVars}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
