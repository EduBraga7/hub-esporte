import { Link } from 'react-router-dom'
import { Calculator, ArrowRight, Flame, Activity, Droplets, Dumbbell, Heart, Scale } from 'lucide-react'
import { Section } from '../ui/Section'

const CALCS = [
  { id: 'imc', nome: 'IMC', desc: 'Peso vs altura', icon: Scale },
  { id: 'tmb', nome: 'TMB e gasto', desc: 'Suas calorias diárias', icon: Flame },
  { id: 'macros', nome: 'Macros', desc: 'Proteína, carbo, gordura', icon: Activity },
  { id: 'agua', nome: 'Água', desc: 'Quanto beber por dia', icon: Droplets },
  { id: '1rm', nome: '1RM', desc: 'Sua carga máxima', icon: Dumbbell },
  { id: 'fc', nome: 'FC alvo', desc: 'Cardio na zona certa', icon: Heart },
]

export function CalculadorasDestaque() {
  return (
    <Section
      eyebrow="Ferramentas"
      titulo="Calculadoras práticas"
      descricao="Tire as dúvidas mais comuns em segundos."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CALCS.map((c) => {
          const Icon = c.icon
          return (
            <Link key={c.id} to={`/calculadoras#${c.id}`} className="card-hover flex items-center gap-4">
              <div className="rounded-xl bg-accent/10 p-3">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-text">{c.nome}</div>
                <div className="text-sm text-text-muted">{c.desc}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-text-muted" />
            </Link>
          )
        })}
      </div>
      <div className="mt-8">
        <Link to="/calculadoras" className="btn-outline">
          <Calculator className="h-4 w-4" /> Abrir todas
        </Link>
      </div>
    </Section>
  )
}
