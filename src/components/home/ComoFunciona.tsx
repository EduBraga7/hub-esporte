import { HeartPulse, Brain, BatteryCharging, Moon, ShieldCheck, Smile } from 'lucide-react'
import { Section } from '../ui/Section'

const BENEFICIOS = [
  {
    icon: BatteryCharging,
    titulo: 'Mais energia no dia a dia',
    descricao:
      'Treinar com frequência melhora disposição para trabalho, estudos e rotina da casa.',
  },
  {
    icon: HeartPulse,
    titulo: 'Coração e corpo mais fortes',
    descricao:
      'Movimento regular ajuda no condicionamento físico e reduz o sedentarismo.',
  },
  {
    icon: Moon,
    titulo: 'Sono com mais qualidade',
    descricao:
      'Atividade física bem dosada pode melhorar seu descanso e recuperação.',
  },
  {
    icon: Brain,
    titulo: 'Mente mais leve',
    descricao:
      'O esporte ajuda a aliviar o estresse e cria momentos de pausa no dia corrido.',
  },
  {
    icon: Smile,
    titulo: 'Humor e autoestima',
    descricao:
      'Perceber sua evolução aumenta confiança e melhora a relação com o próprio corpo.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Consistência e disciplina',
    descricao:
      'Criar uma rotina de treino fortalece hábitos que impactam outras áreas da vida.',
  },
]

export function ComoFunciona() {
  return (
    <Section
      eyebrow="Benefícios do esporte"
      titulo="Seu corpo e sua mente agradecem"
      descricao="Com constância, musculação, calistenia e outros esportes melhoram saúde física e mental sem extremos."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {BENEFICIOS.map((b) => {
          const Icon = b.icon
          return (
            <div key={b.titulo} className="card-hover h-full">
              <div className="inline-flex items-center justify-center rounded-xl bg-accent/10 border border-accent/30 p-2.5 mb-3">
                <Icon className="h-5 w-5 text-accent" strokeWidth={2.2} />
              </div>
              <h3 className="font-bold text-xl text-text mb-2">{b.titulo}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{b.descricao}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
