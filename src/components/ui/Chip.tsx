import type { ReactNode } from 'react';

type Tone = 'default' | 'accent' | 'success' | 'dim' | 'outline';

type ChipProps = {
  children: ReactNode;
  tone?: Tone;
  size?: 'sm' | 'md';
  className?: string;
};

const toneClasses: Record<Tone, string> = {
  default: 'bg-white/[0.04] text-ink border border-line',
  accent: 'bg-accent-soft text-white border border-accent/40',
  success: 'bg-success-soft text-success border border-success/30',
  dim: 'bg-white/[0.02] text-ink-muted border border-line/70',
  outline: 'bg-transparent text-ink-muted border border-line',
};

export function Chip({ children, tone = 'default', size = 'sm', className = '' }: ChipProps) {
  const pad = size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium ${pad} ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function StatusDot({ tone = 'success' }: { tone?: 'success' | 'accent' }) {
  const color = tone === 'success' ? 'bg-success' : 'bg-accent';
  return (
    <span
      className={`relative inline-flex h-2 w-2 rounded-full ${color} animate-pulseDot`}
      aria-hidden
    />
  );
}
