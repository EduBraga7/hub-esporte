import { useState } from 'react'
import { ArrowRight, ChevronDown, Check, X, Lightbulb, Dumbbell, Apple, Heart } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { OBJETIVOS } from '../data/objetivos'
import { getGuia } from '../data/guias'
import type { ObjetivoId } from '../types'

export default function Objetivos() {
  const [expandido, setExpandido] = useState<ObjetivoId | null>(null)

  const toggleExpand = (id: ObjetivoId) => {
    setExpandido(expandido === id ? null : id)
  }

  return (
    <Section
      eyebrow="Objetivos"
      titulo="Escolha seu objetivo"
      descricao="Clique em um objetivo para ver o guia completo com treinos, alimentação e hábitos."
    >
      {/* Cards de Objetivos - sempre visíveis lado a lado */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {OBJETIVOS.map((o) => {
          const isExpanded = expandido === o.id
          return (
            <button
              key={o.id}
              onClick={() => toggleExpand(o.id)}
              className={`rounded-2xl border p-6 text-left transition ${
                isExpanded 
                  ? 'border-accent bg-accent/5' 
                  : 'border-line bg-surface hover:border-accent/40 hover:bg-surface2'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">{o.emoji}</span>
                <ChevronDown className={`h-5 w-5 text-text-muted transition ${isExpanded ? 'rotate-180' : ''}`} />
              </div>
              <h3 className="h-display text-3xl text-text mb-2">{o.nome}</h3>
              <p className="text-sm text-text-muted mb-3">{o.tagline}</p>
              <p className="text-sm text-text">{o.resumo}</p>
            </button>
          )
        })}
      </div>

      {/* Painel de Conteúdo - aparece abaixo de todos os cards */}
      {expandido && (
        <div className="rounded-2xl border border-accent/50 bg-surface overflow-hidden animate-fade-in">
          {(() => {
            const guia = getGuia(expandido)
            return (
              <div className="p-6">
                {/* Header do Guia */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-line">
                  <div>
                    <h2 className="h-display text-4xl text-text mb-2">{guia.titulo}</h2>
                    <p className="text-text-muted">{guia.resumo}</p>
                  </div>
                  <button
                    onClick={() => setExpandido(null)}
                    className="btn-outline"
                  >
                    Fechar
                  </button>
                </div>

                {/* Passos */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="rounded-lg bg-accent/10 p-2">
                      <ArrowRight className="h-4 w-4 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg text-text">Passo a passo</h4>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {guia.passos.map((p, i) => (
                      <div key={i} className="rounded-xl border border-line bg-bg p-4">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="h-display text-2xl text-accent">0{i + 1}</span>
                          <h5 className="font-semibold text-text">{p.titulo}</h5>
                        </div>
                        <p className="text-sm text-text-muted">{p.descricao}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treino */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="rounded-lg bg-accent/10 p-2">
                      <Dumbbell className="h-4 w-4 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg text-text">Treino sugerido</h4>
                  </div>
                  <p className="text-sm text-text-muted mb-4">{guia.treino.introducao}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {guia.treino.blocos.map((b, i) => (
                      <div key={i} className="rounded-xl border border-line bg-bg p-4">
                        <h5 className="font-semibold text-text mb-3">{b.nome}</h5>
                        <ul className="space-y-2">
                          {b.itens.map((item, j) => (
                            <li key={j} className="flex items-start justify-between gap-2 text-sm">
                              <span className="text-text">{item.exercicio}</span>
                              <span className="text-accent font-mono whitespace-nowrap">{item.series}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alimentação */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="rounded-lg bg-accent/10 p-2">
                      <Apple className="h-4 w-4 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg text-text">Alimentação</h4>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-line bg-bg p-4">
                      <h5 className="font-semibold text-text mb-3 flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" /> Princípios
                      </h5>
                      <ul className="space-y-2">
                        {guia.alimentacao.principios.map((p, i) => (
                          <li key={i} className="text-sm text-text-muted flex gap-2">
                            <span>•</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-line bg-bg p-4">
                      <h5 className="font-semibold text-text mb-3 flex items-center gap-2">
                        <X className="h-4 w-4 text-objetivo-peso" /> Evitar
                      </h5>
                      <ul className="space-y-2">
                        {guia.alimentacao.evitar.map((e, i) => (
                          <li key={i} className="text-sm text-text-muted flex gap-2">
                            <span>•</span> {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3 mt-4">
                    {guia.alimentacao.exemplos.map((ex, i) => (
                      <div key={i} className="rounded-xl border border-line bg-bg p-3">
                        <div className="chip-accent mb-2 text-xs">{ex.refeicao}</div>
                        <ul className="space-y-1">
                          {ex.ideias.map((idea, j) => (
                            <li key={j} className="text-xs text-text-muted">• {idea}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hábitos */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="rounded-lg bg-accent/10 p-2">
                      <Heart className="h-4 w-4 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg text-text">Hábitos essenciais</h4>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {guia.habitos.map((h, i) => (
                      <div key={i} className="rounded-xl border border-line bg-bg p-4">
                        <h5 className="font-semibold text-text mb-1">{h.titulo}</h5>
                        <p className="text-sm text-text-muted">{h.descricao}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mitos */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="rounded-lg bg-accent/10 p-2">
                      <Lightbulb className="h-4 w-4 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg text-text">Mitos comuns</h4>
                  </div>
                  <div className="space-y-3">
                    {guia.mitos.map((m, i) => (
                      <div key={i} className="rounded-xl border border-line bg-bg p-4">
                        <div className="flex gap-2 text-text mb-1">
                          <X className="h-4 w-4 text-objetivo-peso flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>Mito:</strong> {m.mito}</span>
                        </div>
                        <div className="flex gap-2 text-text-muted">
                          <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{m.verdade}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      )}
    </Section>
  )
}
