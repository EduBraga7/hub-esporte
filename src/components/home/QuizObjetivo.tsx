import { Link } from 'react-router-dom'
import { ArrowRight, Coins, Clock3, House, Dumbbell } from 'lucide-react'
import { Section } from '../ui/Section'

export function QuizObjetivo() {
  return (
    <Section
      id="rotas"
      eyebrow="Passo 1"
      titulo="Qual é seu cenário hoje?"
      descricao="Sem academia, sem muito tempo ou começando em casa: escolha uma rota prática para iniciar ainda nesta semana."
      className="scroll-mt-24"
    >
      <div className="grid md:grid-cols-3 gap-4">
        <article className="rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/60 hover:bg-surface2">
          <div className="mb-3 inline-flex rounded-xl border border-accent/30 bg-accent/10 p-2.5">
            <Clock3 className="h-5 w-5 text-accent" />
          </div>
          <h3 className="h-display text-3xl text-text mb-2">Pouco tempo</h3>
          <p className="text-sm text-text-muted mb-5">
            Treinos curtos (10–20 min), priorização dos exercícios certos e rotina mínima para semana corrida.
          </p>
          <Link to="/calculadoras" className="btn-outline w-full justify-center">
            Montar metas rápidas <ArrowRight className="h-4 w-4" />
          </Link>
        </article>

        <article className="rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/60 hover:bg-surface2">
          <div className="mb-3 inline-flex rounded-xl border border-accent/30 bg-accent/10 p-2.5">
            <Coins className="h-5 w-5 text-accent" />
          </div>
          <h3 className="h-display text-3xl text-text mb-2">Pouca grana</h3>
          <p className="text-sm text-text-muted mb-5">
            Estratégias de baixo custo: comida de verdade, acessórios acessíveis e sem depender de suplemento caro.
          </p>
          <Link to="/produtos" className="btn-outline w-full justify-center">
            Ver opções econômicas <ArrowRight className="h-4 w-4" />
          </Link>
        </article>

        <article className="rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/60 hover:bg-surface2">
          <div className="mb-3 inline-flex rounded-xl border border-accent/30 bg-accent/10 p-2.5">
            <House className="h-5 w-5 text-accent" />
          </div>
          <h3 className="h-display text-3xl text-text mb-2">Treino em casa</h3>
          <p className="text-sm text-text-muted mb-5">
            Comece com calistenia e movimentos base em casa para ganhar condicionamento, força e confiança.
          </p>
          <Link to="/objetivos" className="btn-outline w-full justify-center">
            Explorar trilhas e guias <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </div>

      <div className="mt-6 rounded-2xl border border-accent/40 bg-surface p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="chip-accent mb-2">Próximo passo</div>
            <h3 className="h-display text-3xl text-text">Quer algo mais específico depois?</h3>
            <p className="text-text-muted mt-2 max-w-xl">
              Os guias por objetivo ficam em uma área separada para você entrar quando fizer sentido.
            </p>
          </div>
          <Link to="/objetivos" className="btn-primary">
            <Dumbbell className="h-4 w-4" /> Ver guias por objetivo
          </Link>
        </div>
      </div>
    </Section>
  )
}
