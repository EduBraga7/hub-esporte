import { Lightbulb } from 'lucide-react'
import { Section } from '../ui/Section'
import { getDicasPorObjetivo } from '../../data/dicas'
import type { CategoriaDica } from '../../types'

const CATEGORIA_LABEL: Record<CategoriaDica, string> = {
  treino: 'Treino',
  alimentacao: 'Alimentação',
  habito: 'Hábito',
  mito: 'Mito x Verdade',
  motivacao: 'Motivação',
}

export function DicasDestaque() {
  const dicas = getDicasPorObjetivo(null, 8)

  return (
    <Section
      eyebrow="Dicas em destaque"
      titulo="Dicas para iniciantes"
      descricao="Estratégias simples para treinar melhor, comer bem e manter constância na rotina."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dicas.map((d) => (
          <div key={d.id} className="card-hover h-full flex flex-col">
            <Lightbulb className="h-5 w-5 text-accent mb-3" />
            <div className="text-xs font-medium uppercase tracking-wide text-text-muted mb-1">
              {CATEGORIA_LABEL[d.categoria]}
            </div>
            <h3 className="font-bold text-text mb-2">{d.titulo}</h3>
            <p className="text-sm text-text-muted">{d.texto}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
