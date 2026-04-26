import type { ReactNode } from 'react'
import { Container } from '../layout/Container'

export function Section({
  id,
  eyebrow,
  titulo,
  descricao,
  background,
  children,
  className = '',
}: {
  id?: string
  eyebrow?: string
  titulo?: ReactNode
  descricao?: ReactNode
  background?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`section ${background ? 'relative overflow-hidden' : ''} ${className}`}>
      {background && <div className="absolute inset-0 z-0">{background}</div>}
      <Container>
        <div className="relative z-20">
          {(eyebrow || titulo || descricao) && (
            <div className="mb-10 max-w-2xl">
              {eyebrow && <div className="chip-accent mb-3">{eyebrow}</div>}
              {titulo && (
                <h2 className="h-display text-4xl sm:text-5xl text-text mb-3">{titulo}</h2>
              )}
              {descricao && <p className="text-text-muted text-lg">{descricao}</p>}
            </div>
          )}
          {children}
        </div>
      </Container>
    </section>
  )
}
