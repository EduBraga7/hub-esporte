import type { ReactNode } from 'react'

export function Card({
  children,
  hover = false,
  className = '',
}: {
  children: ReactNode
  hover?: boolean
  className?: string
}) {
  return <div className={`${hover ? 'card-hover' : 'card'} ${className}`}>{children}</div>
}
