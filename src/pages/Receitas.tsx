import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock3, Flame, Beef } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { RECEITAS, REFEICOES_LABELS } from '../data/receitas'
import { OBJETIVOS } from '../data/objetivos'
import type { ObjetivoId, Refeicao } from '../types'

type TempoFiltro = 'todos' | 'ate5' | 'ate10' | 'ate20' | 'mais20'

const TEMPO_LABEL: Record<TempoFiltro, string> = {
  todos: 'Todos os tempos',
  ate5: 'Até 5 min',
  ate10: 'Até 10 min',
  ate20: 'Até 20 min',
  mais20: '20+ min',
}

const REF_LABEL_ENTRADA = [
  { id: 'todas', label: 'Todas' },
  ...Object.entries(REFEICOES_LABELS).map(([id, label]) => ({ id, label })),
] as const

function tempoMatch(tempo: TempoFiltro, valor: number) {
  if (tempo === 'todos') return true
  if (tempo === 'ate5') return valor <= 5
  if (tempo === 'ate10') return valor <= 10
  if (tempo === 'ate20') return valor <= 20
  return valor > 20
}

export default function Receitas() {
  const [objetivoFiltro, setObjetivoFiltro] = useState<ObjetivoId | 'todos'>('todos')
  const [refeicaoFiltro, setRefeicaoFiltro] = useState<Refeicao | 'todas'>('todas')
  const [tempoFiltro, setTempoFiltro] = useState<TempoFiltro>('todos')

  const receitas = useMemo(() => {
    const base = RECEITAS.filter((r) => {
      if (objetivoFiltro !== 'todos' && !r.objetivos.includes(objetivoFiltro)) return false
      if (refeicaoFiltro !== 'todas' && !r.refeicao.includes(refeicaoFiltro)) return false
      if (!tempoMatch(tempoFiltro, r.tempoMin)) return false
      return true
    })

    return base
  }, [objetivoFiltro, refeicaoFiltro, tempoFiltro])

  return (
    <Section
      eyebrow="Receitas"
      titulo="Comida de verdade para quem está começando"
      descricao="Filtre por objetivo, refeição e tempo de preparo. Simples, rápido e sem terrorismo nutricional."
    >
      <div className="card mb-6 grid gap-4 md:grid-cols-3">
        <div>
          <label>Objetivo</label>
          <select value={objetivoFiltro} onChange={(e) => setObjetivoFiltro(e.target.value as ObjetivoId | 'todos')}>
            <option value="todos">Todos</option>
            {OBJETIVOS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.emoji} {o.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Refeição</label>
          <select value={refeicaoFiltro} onChange={(e) => setRefeicaoFiltro(e.target.value as Refeicao | 'todas')}>
            {REF_LABEL_ENTRADA.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Tempo de preparo</label>
          <select value={tempoFiltro} onChange={(e) => setTempoFiltro(e.target.value as TempoFiltro)}>
            {Object.entries(TEMPO_LABEL).map(([id, label]) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {receitas.length === 0 ? (
        <div className="card text-center text-text-muted">Nenhuma receita encontrada com esses filtros.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {receitas.map((r) => (
            <article key={r.id} className="card-hover flex flex-col">
              <div className="aspect-video -mx-5 -mt-5 mb-4 overflow-hidden rounded-t-2xl bg-surface2">
                <img src={r.imagem} alt={r.nome} loading="lazy" className="h-full w-full object-cover" />
              </div>

              <div className="flex flex-wrap gap-1 mb-2">
                {r.objetivos.map((o) => {
                  const obj = OBJETIVOS.find((x) => x.id === o)
                  if (!obj) return null
                  return (
                    <span key={o} className="chip text-xs" style={{ borderColor: `${obj.cor}55`, color: obj.cor }}>
                      {obj.emoji} {obj.nome}
                    </span>
                  )
                })}
              </div>

              <h3 className="font-bold text-text mb-1">{r.nome}</h3>
              <p className="text-sm text-text-muted mb-3 line-clamp-2">{r.descricao}</p>

              <div className="grid grid-cols-3 gap-2 text-xs text-text-muted mb-4">
                <div className="rounded-lg border border-line p-2 text-center">
                  <Clock3 className="h-3.5 w-3.5 mx-auto mb-1 text-accent" />
                  {r.tempoMin} min
                </div>
                <div className="rounded-lg border border-line p-2 text-center">
                  <Flame className="h-3.5 w-3.5 mx-auto mb-1 text-accent" />
                  {r.kcal} kcal
                </div>
                <div className="rounded-lg border border-line p-2 text-center">
                  <Beef className="h-3.5 w-3.5 mx-auto mb-1 text-accent" />
                  {r.proteina} g prot
                </div>
              </div>

              <div className="mt-auto">
                <Link to={`/receitas/${r.id}`} className="btn-primary w-full justify-center">
                  Ver receita completa
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}
