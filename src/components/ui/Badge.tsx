import type { ReactNode } from 'react'

export function Badge({
  children,
  tone = 'neutral',
  className = '',
}: {
  children: ReactNode
  tone?: 'neutral' | 'accent' | 'objetivo'
  color?: string
  className?: string
}) {
  const cls =
    tone === 'accent'
      ? 'chip-accent'
      : tone === 'objetivo'
      ? 'chip border-accent/40 text-accent bg-accent/10'
      : 'chip'
  return <span className={`${cls} ${className}`}>{children}</span>
}
