import { useMemo, useState } from 'react'
import { Flame } from 'lucide-react'

const FATORES_ATIVIDADE = [
  { id: 'sedentario', label: 'Sedentário (pouco ou nenhum exercício)', fator: 1.2 },
  { id: 'leve', label: 'Levemente ativo (1–3 treinos/semana)', fator: 1.375 },
  { id: 'moderado', label: 'Moderadamente ativo (3–5 treinos/semana)', fator: 1.55 },
  { id: 'alto', label: 'Muito ativo (6–7 treinos/semana)', fator: 1.725 },
]

export function CalcTMB() {
  const [sexo, setSexo] = useState<'masculino' | 'feminino'>('masculino')
  const [idade, setIdade] = useState('25')
  const [peso, setPeso] = useState('70')
  const [altura, setAltura] = useState('170')
  const [atividadeId, setAtividadeId] = useState(FATORES_ATIVIDADE[1].id)

  const resultado = useMemo(() => {
    const i = parseFloat(idade)
    const p = parseFloat(peso)
    const a = parseFloat(altura)
    const atividade = FATORES_ATIVIDADE.find((x) => x.id === atividadeId)

    if (!atividade || i <= 0 || p <= 0 || a <= 0) return null

    const tmb = sexo === 'masculino' ? 10 * p + 6.25 * a - 5 * i + 5 : 10 * p + 6.25 * a - 5 * i - 161
    const gasto = tmb * atividade.fator

    return {
      tmb,
      gasto,
      perdaLeve: gasto - 300,
      ganhoLeve: gasto + 250,
    }
  }, [atividadeId, altura, idade, peso, sexo])

  return (
    <div className="card" id="tmb">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="h-5 w-5 text-accent" />
        <h3 className="font-bold text-text text-lg">TMB + Gasto Calórico Diário</h3>
      </div>

      <p className="text-sm text-text-muted mb-4">
        Estimativa baseada na fórmula Mifflin-St Jeor. Use como ponto de partida e ajuste conforme seu progresso.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label>Sexo</label>
          <select value={sexo} onChange={(e) => setSexo(e.target.value as 'masculino' | 'feminino')}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>
        <div>
          <label>Idade</label>
          <input type="number" min="1" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>
        <div>
          <label>Peso (kg)</label>
          <input type="number" min="1" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <div>
          <label>Altura (cm)</label>
          <input type="number" min="1" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </div>
      </div>

      <div className="mb-4">
        <label>Nível de atividade</label>
        <select value={atividadeId} onChange={(e) => setAtividadeId(e.target.value)}>
          {FATORES_ATIVIDADE.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {resultado && (
        <div className="rounded-xl bg-surface2 border border-line p-4 space-y-2 animate-fade-in">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">TMB (repouso)</span>
            <strong className="text-text">{Math.round(resultado.tmb)} kcal</strong>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">Gasto diário estimado</span>
            <strong className="text-accent">{Math.round(resultado.gasto)} kcal</strong>
          </div>
          <div className="border-t border-line pt-2 text-xs text-text-muted">
            Meta rápida: perder peso (~{Math.round(resultado.perdaLeve)} kcal) · ganhar massa (~
            {Math.round(resultado.ganhoLeve)} kcal)
          </div>
        </div>
      )}
    </div>
  )
}
