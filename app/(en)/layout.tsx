import type { ReactNode } from 'react';
import { fontVars } from '@/lib/fonts';
import '../globals.css';

export default function EnRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
