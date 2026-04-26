import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

const map: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  outline: 'btn-outline',
}

export function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  return (
    <button className={`${map[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}
