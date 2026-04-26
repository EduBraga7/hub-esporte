import { useState } from 'react'
import { Scale } from 'lucide-react'

export function CalcIMC() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const p = parseFloat(peso)
  const a = parseFloat(altura)
  const valido = p > 0 && a > 0
  const imc = valido ? p / (a / 100) ** 2 : 0

  let categoria = ''
  let cor = ''
  if (valido) {
    if (imc < 18.5) {
      categoria = 'Abaixo do peso'
      cor = 'text-objetivo-saude'
    } else if (imc < 25) {
      categoria = 'Peso saudável'
      cor = 'text-objetivo-massa'
    } else if (imc < 30) {
      categoria = 'Sobrepeso'
      cor = 'text-objetivo-peso'
    } else {
      categoria = 'Obesidade'
      cor = 'text-red-400'
    }
  }

  return (
    <div className="card" id="imc">
      <div className="flex items-center gap-2 mb-4">
        <Scale className="h-5 w-5 text-accent" />
        <h3 className="font-bold text-text text-lg">IMC — Índice de Massa Corporal</h3>
      </div>
      <p className="text-sm text-text-muted mb-4">
        Relação simples entre peso e altura. Útil como referência, mas não considera massa muscular.
      </p>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label>Peso (kg)</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="70" />
        </div>
        <div>
          <label>Altura (cm)</label>
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="170" />
        </div>
      </div>
      {valido && (
        <div className="rounded-xl bg-surface2 border border-line p-4 animate-fade-in">
          <div className="text-text-muted text-sm">Seu IMC</div>
          <div className="h-display text-5xl text-accent">{imc.toFixed(1)}</div>
          <div className={`font-semibold mt-1 ${cor}`}>{categoria}</div>
        </div>
      )}
    </div>
  )
}
