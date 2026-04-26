import { useMemo, useState } from 'react'
import { Activity } from 'lucide-react'
import type { ObjetivoId } from '../../types'

const OBJETIVOS: { id: ObjetivoId; label: string }[] = [
  { id: 'perder-peso', label: 'Perder peso' },
  { id: 'ganhar-massa', label: 'Ganhar massa' },
  { id: 'saude', label: 'Saúde em geral' },
]

export function CalcMacros() {
  const [peso, setPeso] = useState('70')
  const [calorias, setCalorias] = useState('2200')
  const [objetivo, setObjetivo] = useState<ObjetivoId>('saude')

  const macros = useMemo(() => {
    const p = parseFloat(peso)
    const kcal = parseFloat(calorias)
    if (p <= 0 || kcal <= 0) return null

    const proteinaPorKg = objetivo === 'ganhar-massa' ? 2 : 1.8
    const gorduraPorKg = objetivo === 'perder-peso' ? 0.8 : 1

    const protG = p * proteinaPorKg
    const gordG = p * gorduraPorKg

    const protKcal = protG * 4
    const gordKcal = gordG * 9
    const carboKcal = Math.max(kcal - protKcal - gordKcal, 0)
    const carboG = carboKcal / 4

    return {
      protG,
      gordG,
      carboG,
      protKcal,
      gordKcal,
      carboKcal,
    }
  }, [calorias, objetivo, peso])

  return (
    <div className="card" id="macros">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="h-5 w-5 text-accent" />
        <h3 className="font-bold text-text text-lg">Distribuição de Macros</h3>
      </div>

      <p className="text-sm text-text-muted mb-4">
        Defina calorias e peso para estimar proteína, carboidrato e gordura por dia.
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        <div>
          <label>Peso (kg)</label>
          <input type="number" min="1" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <div>
          <label>Calorias diárias</label>
          <input type="number" min="1" value={calorias} onChange={(e) => setCalorias(e.target.value)} />
        </div>
        <div>
          <label>Objetivo</label>
          <select value={objetivo} onChange={(e) => setObjetivo(e.target.value as ObjetivoId)}>
            {OBJETIVOS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {macros && (
        <div className="grid sm:grid-cols-3 gap-3 animate-fade-in">
          <div className="rounded-xl bg-surface2 border border-line p-3">
            <div className="text-xs text-text-muted">Proteína</div>
            <div className="h-display text-3xl text-accent">{Math.round(macros.protG)}g</div>
            <div className="text-xs text-text-muted">{Math.round(macros.protKcal)} kcal</div>
          </div>
          <div className="rounded-xl bg-surface2 border border-line p-3">
            <div className="text-xs text-text-muted">Carboidrato</div>
            <div className="h-display text-3xl text-accent">{Math.round(macros.carboG)}g</div>
            <div className="text-xs text-text-muted">{Math.round(macros.carboKcal)} kcal</div>
          </div>
          <div className="rounded-xl bg-surface2 border border-line p-3">
            <div className="text-xs text-text-muted">Gordura</div>
            <div className="h-display text-3xl text-accent">{Math.round(macros.gordG)}g</div>
            <div className="text-xs text-text-muted">{Math.round(macros.gordKcal)} kcal</div>
          </div>
        </div>
      )}
    </div>
  )
}
