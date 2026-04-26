import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Section } from '../ui/Section'
import { FAQS } from '../../data/faq'

export function FAQ() {
  const [aberto, setAberto] = useState<string | null>(FAQS[0]?.id ?? null)

  return (
    <Section
      eyebrow="Dúvidas comuns"
      titulo="Perguntas frequentes"
      descricao="As dúvidas mais batidas de quem está começando."
    >
      <div className="space-y-3">
        {FAQS.map((f) => {
          const isOpen = aberto === f.id
          return (
            <div key={f.id} className="card overflow-hidden p-0">
              <button
                onClick={() => setAberto(isOpen ? null : f.id)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-surface2"
              >
                <span className="font-semibold text-text">{f.pergunta}</span>
                <ChevronDown
                  className={`h-5 w-5 text-text-muted transition ${isOpen ? 'rotate-180 text-accent' : ''}`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-text-muted animate-fade-in">{f.resposta}</div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
