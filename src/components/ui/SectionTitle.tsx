import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  children: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionTitle({ eyebrow, children, align = 'left', className = '' }: Props) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow ? (
        <div
          className={`text-[0.75rem] uppercase tracking-[0.18em] text-ink-muted mb-3 ${
            align === 'center' ? 'justify-center flex' : ''
          }`}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-tight">
        {children}
      </h2>
      <div
        className={`mt-4 h-1 w-[60px] rounded-full bg-accent ${
          align === 'center' ? 'mx-auto' : ''
        }`}
        aria-hidden
      />
    </div>
  );
}
