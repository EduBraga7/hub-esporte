import { useMemo, useState } from 'react'
import { Heart } from 'lucide-react'

export function CalcFCAlvo() {
  const [idade, setIdade] = useState('30')
  const [fcRepouso, setFcRepouso] = useState('65')

  const resultado = useMemo(() => {
    const i = parseFloat(idade)
    const repouso = parseFloat(fcRepouso)
    if (i <= 0 || repouso <= 0) return null

    const fcMax = 220 - i
    const reserva = fcMax - repouso

    const leveMin = repouso + reserva * 0.5
    const leveMax = repouso + reserva * 0.6
    const moderadoMin = repouso + reserva * 0.6
    const moderadoMax = repouso + reserva * 0.75

    return {
      fcMax,
      leveMin,
      leveMax,
      moderadoMin,
      moderadoMax,
    }
  }, [fcRepouso, idade])

  return (
    <div className="card" id="fc">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="h-5 w-5 text-accent" />
        <h3 className="font-bold text-text text-lg">Frequência cardíaca alvo</h3>
      </div>

      <p className="text-sm text-text-muted mb-4">
        Método de Karvonen simplificado para ajustar seu cardio por intensidade.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label>Idade</label>
          <input type="number" min="1" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>
        <div>
          <label>FC de repouso (bpm)</label>
          <input type="number" min="1" value={fcRepouso} onChange={(e) => setFcRepouso(e.target.value)} />
        </div>
      </div>

      {resultado && (
        <div className="rounded-xl bg-surface2 border border-line p-4 animate-fade-in">
          <div className="text-xs text-text-muted mb-3">FC máxima estimada: {Math.round(resultado.fcMax)} bpm</div>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg border border-line p-3">
              <div className="text-text-muted">Zona leve (50–60%)</div>
              <div className="text-accent font-semibold">
                {Math.round(resultado.leveMin)}–{Math.round(resultado.leveMax)} bpm
              </div>
            </div>
            <div className="rounded-lg border border-line p-3">
              <div className="text-text-muted">Zona moderada (60–75%)</div>
              <div className="text-accent font-semibold">
                {Math.round(resultado.moderadoMin)}–{Math.round(resultado.moderadoMax)} bpm
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
