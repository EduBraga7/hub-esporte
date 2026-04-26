import { useMemo, useState } from 'react'
import { Dumbbell } from 'lucide-react'

export function Calc1RM() {
  const [carga, setCarga] = useState('40')
  const [reps, setReps] = useState('8')

  const resultado = useMemo(() => {
    const kg = parseFloat(carga)
    const r = parseFloat(reps)
    if (kg <= 0 || r <= 0 || r > 20) return null

    const oneRm = kg * (1 + r / 30)

    return {
      oneRm,
      faixaForca: oneRm * 0.85,
      faixaHipertrofiaMin: oneRm * 0.65,
      faixaHipertrofiaMax: oneRm * 0.75,
    }
  }, [carga, reps])

  return (
    <div className="card" id="1rm">
      <div className="flex items-center gap-2 mb-4">
        <Dumbbell className="h-5 w-5 text-accent" />
        <h3 className="font-bold text-text text-lg">Estimativa de 1RM</h3>
      </div>

      <p className="text-sm text-text-muted mb-4">
        Fórmula de Epley para estimar carga máxima de 1 repetição sem precisar testar no limite.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label>Carga usada (kg)</label>
          <input type="number" min="1" value={carga} onChange={(e) => setCarga(e.target.value)} />
        </div>
        <div>
          <label>Repetições feitas</label>
          <input type="number" min="1" max="20" value={reps} onChange={(e) => setReps(e.target.value)} />
        </div>
      </div>

      {resultado && (
        <div className="rounded-xl bg-surface2 border border-line p-4 space-y-1 animate-fade-in">
          <div className="text-text-muted text-sm">Seu 1RM estimado</div>
          <div className="h-display text-5xl text-accent">{Math.round(resultado.oneRm)} kg</div>
          <div className="text-xs text-text-muted pt-2 border-t border-line">
            Força (3–5 reps): ~{Math.round(resultado.faixaForca)} kg · Hipertrofia (8–12 reps): ~
            {Math.round(resultado.faixaHipertrofiaMin)}–{Math.round(resultado.faixaHipertrofiaMax)} kg
          </div>
        </div>
      )}
    </div>
  )
}
