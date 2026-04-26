import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '../layout/Container'

const HERO_VISUALS = [
  {
    src: '/images/consultafit-couple-7437534_1920.jpg',
    alt: 'Casal treinando junto em academia',
    className: 'col-span-4 row-span-4',
  },
  {
    src: '/images/alexlhunt93-weights-3942914_1920.jpg',
    alt: 'Pessoa levantando pesos',
    className: 'col-span-2 row-span-2',
  },
  {
    src: '/images/moveprivatefitness-woman-6888634_1920.jpg',
    alt: 'Mulher em treino funcional',
    className: 'col-span-2 row-span-2',
  },
] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg">
      {/* Gradientes sutis de fundo */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-bg via-bg to-surface" />
      <div className="absolute -top-32 -right-32 z-0 h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 z-0 h-[400px] w-[400px] rounded-full bg-accent-secondary/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />

      <Container className="relative z-20 min-h-[calc(100svh-4rem)] py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 chip-accent mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Para quem está começando do zero
          </div>
          <h1 className="h-display text-5xl sm:text-7xl leading-none text-text mb-5">
            Comece do zero.
            <br />
            <span className="text-accent">Treine do seu jeito</span>
          </h1>
          <p className="text-lg text-text-muted max-w-xl mb-8">
            Musculação, calistenia, esporte ou treino em casa: você não precisa de rotina perfeita para
            começar. Aqui você encontra o básico que funciona, mesmo com pouco tempo e pouca grana.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#rotas" className="btn-primary">
              Ver por onde começar
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/objetivos" className="btn-outline">
              Ver objetivos específicos
            </Link>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="aspect-square rounded-3xl border border-accent/35 bg-gradient-to-br from-accent/28 via-accent/8 to-surface/40 p-4 shadow-glow backdrop-blur-sm">
            <div className="grid h-full grid-cols-6 grid-rows-6 gap-3">
              <div className="col-span-6 row-span-1 grid grid-cols-2 gap-3">
                <Tile titulo="3 objetivos" sub="Você escolhe" />
                <Tile titulo="6 calculadoras" sub="Resposta na hora" />
              </div>

              {HERO_VISUALS.map((media) => (
                <div
                  key={media.src}
                  className={`group relative overflow-hidden rounded-2xl border border-line/80 bg-surface2 ${media.className}`}
                >
                  <img
                    src={media.src}
                    alt={media.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/58 via-bg/6 to-transparent" />
                </div>
              ))}

              <div className="col-span-6 row-span-1 grid grid-cols-2 gap-3">
                <Tile titulo="+18 receitas" sub="Comida de verdade" />
                <Tile titulo="Produtos" sub="Que valem a pena" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Tile({ titulo, sub }: { titulo: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-line/90 bg-surface/75 p-4 backdrop-blur-sm">
      <div className="h-display text-2xl text-accent">{titulo}</div>
      <div className="text-text-muted text-sm">{sub}</div>
    </div>
  )
}
