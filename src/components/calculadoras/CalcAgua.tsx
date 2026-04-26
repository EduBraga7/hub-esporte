import { useMemo, useState } from 'react'
import { Droplets } from 'lucide-react'

export function CalcAgua() {
  const [peso, setPeso] = useState('70')
  const [minTreino, setMinTreino] = useState('45')

  const resultado = useMemo(() => {
    const p = parseFloat(peso)
    const treino = parseFloat(minTreino)
    if (p <= 0 || treino < 0) return null

    const baseMl = p * 35
    const extraTreinoMl = (treino / 30) * 350
    const totalMl = baseMl + extraTreinoMl

    return {
      baseMl,
      extraTreinoMl,
      totalMl,
      totalL: totalMl / 1000,
    }
  }, [minTreino, peso])

  return (
    <div className="card" id="agua">
      <div className="flex items-center gap-2 mb-4">
        <Droplets className="h-5 w-5 text-accent" />
        <h3 className="font-bold text-text text-lg">Água diária</h3>
      </div>

      <p className="text-sm text-text-muted mb-4">
        Referência simples: 35 ml por kg + ajuste de treino (aprox. 350 ml a cada 30 minutos).
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label>Peso (kg)</label>
          <input type="number" min="1" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <div>
          <label>Minutos de treino/dia</label>
          <input type="number" min="0" value={minTreino} onChange={(e) => setMinTreino(e.target.value)} />
        </div>
      </div>

      {resultado && (
        <div className="rounded-xl bg-surface2 border border-line p-4 animate-fade-in">
          <div className="text-text-muted text-sm mb-1">Meta diária de hidratação</div>
          <div className="h-display text-5xl text-accent">{resultado.totalL.toFixed(2)} L</div>
          <div className="mt-2 text-xs text-text-muted">
            Base: {Math.round(resultado.baseMl)} ml · extra treino: {Math.round(resultado.extraTreinoMl)} ml
          </div>
        </div>
      )}
    </div>
  )
}
