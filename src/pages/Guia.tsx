import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Check, X, Lightbulb, Dumbbell, Apple, Heart } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { ProdutoCard } from '../components/produtos/ProdutoCard'
import { Container } from '../components/layout/Container'
import { getObjetivoBySlug } from '../data/objetivos'
import { getGuia } from '../data/guias'
import { getProdutosPorObjetivo } from '../data/produtos'

export default function Guia() {
  const { objetivo: slug } = useParams<{ objetivo: string }>()
  const objetivo = slug ? getObjetivoBySlug(slug) : undefined

  if (!objetivo) return <Navigate to="/" replace />

  const guia = getGuia(objetivo.id)
  const produtos = getProdutosPorObjetivo(objetivo.id, 4)

  return (
    <div style={{ ['--accent-rgb' as string]: objetivo.accentRgb }}>
      {/* Hero do guia */}
      <section className="relative overflow-hidden border-b border-line bg-bg">
        {/* Gradientes sutis com a cor do objetivo */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bg via-bg to-surface" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl -z-10" />
        <Container className="py-16 sm:py-24">
          <div className="chip-accent mb-4">
            {objetivo.emoji} Guia de {objetivo.nome.toLowerCase()}
          </div>
          <h1 className="h-display text-5xl sm:text-7xl text-text mb-4">{guia.titulo}</h1>
          <p className="text-text-muted text-lg max-w-2xl">{guia.resumo}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#passos" className="btn-primary">
              Por onde começar <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#produtos" className="btn-outline">
              Produtos recomendados
            </a>
          </div>
        </Container>
      </section>

      {/* Passos */}
      <Section id="passos" eyebrow="Passo a passo" titulo="Por onde começar">
        <div className="grid md:grid-cols-2 gap-4">
          {guia.passos.map((p, i) => (
            <div key={i} className="card-hover">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="h-display text-4xl text-accent">0{i + 1}</span>
                <h3 className="font-bold text-text text-lg">{p.titulo}</h3>
              </div>
              <p className="text-text-muted">{p.descricao}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Treino */}
      <Section
        eyebrow="Treino"
        titulo="Treino base do iniciante"
        descricao={guia.treino.introducao}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {guia.treino.blocos.map((b, i) => (
            <div key={i} className="card">
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="h-5 w-5 text-accent" />
                <h3 className="font-bold text-text">{b.nome}</h3>
              </div>
              <ul className="space-y-2">
                {b.itens.map((item, j) => (
                  <li key={j} className="flex items-start justify-between gap-3 py-2 border-b border-line last:border-0">
                    <div className="flex-1">
                      <div className="text-text">{item.exercicio}</div>
                      {item.obs && <div className="text-xs text-text-muted mt-0.5">{item.obs}</div>}
                    </div>
                    <span className="text-sm font-mono text-accent">{item.series}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ul className="mt-6 space-y-2">
          {guia.treino.notas.map((n, i) => (
            <li key={i} className="flex gap-2 text-sm text-text-muted">
              <Lightbulb className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Alimentação */}
      <Section eyebrow="Alimentação" titulo="Comida na prática">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="card">
            <div className="flex items-center gap-2 mb-3">
              <Apple className="h-5 w-5 text-accent" />
              <h3 className="font-bold text-text">Princípios</h3>
            </div>
            <ul className="space-y-2">
              {guia.alimentacao.principios.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm text-text">
                  <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="font-bold text-text mb-3">O que evitar</h3>
            <ul className="space-y-2">
              {guia.alimentacao.evitar.map((e, i) => (
                <li key={i} className="flex gap-2 text-sm text-text">
                  <X className="h-4 w-4 text-objetivo-peso flex-shrink-0 mt-0.5" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {guia.alimentacao.exemplos.map((ex, i) => (
            <div key={i} className="card">
              <div className="chip-accent mb-3">{ex.refeicao}</div>
              <ul className="space-y-1.5">
                {ex.ideias.map((idea, j) => (
                  <li key={j} className="text-sm text-text-muted">• {idea}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Hábitos */}
      <Section eyebrow="Hábitos" titulo="O que destrava o objetivo">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guia.habitos.map((h, i) => (
            <div key={i} className="card-hover">
              <Heart className="h-5 w-5 text-accent mb-2" />
              <h4 className="font-bold text-text mb-1">{h.titulo}</h4>
              <p className="text-sm text-text-muted">{h.descricao}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mitos */}
      <Section eyebrow="Mitos" titulo="Mitos comuns">
        <div className="space-y-3">
          {guia.mitos.map((m, i) => (
            <div key={i} className="card">
              <div className="flex gap-2 text-text mb-1">
                <X className="h-5 w-5 text-objetivo-peso flex-shrink-0 mt-0.5" />
                <strong>Mito: {m.mito}</strong>
              </div>
              <div className="flex gap-2 text-text-muted">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>{m.verdade}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Produtos */}
      <Section
        id="produtos"
        eyebrow="Produtos"
        titulo="Recomendações para esse objetivo"
        descricao="Selecionados para complementar o que você está construindo aqui."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {produtos.map((p) => (
            <ProdutoCard key={p.id} produto={p} />
          ))}
        </div>
        <div className="mt-6">
          <Link to="/produtos" className="btn-outline">
            Ver todos os produtos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Próximos passos */}
      <Section eyebrow="Próximos passos" titulo="Continue explorando">
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/calculadoras" className="card-hover">
            <h3 className="font-bold text-text mb-1">Calcule suas metas</h3>
            <p className="text-sm text-text-muted mb-3">IMC, calorias, macros e mais.</p>
            <span className="text-accent text-sm font-medium inline-flex items-center gap-1">
              Abrir <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link to="/receitas" className="card-hover">
            <h3 className="font-bold text-text mb-1">Veja receitas práticas</h3>
            <p className="text-sm text-text-muted mb-3">Comida fácil que cabe na rotina.</p>
            <span className="text-accent text-sm font-medium inline-flex items-center gap-1">
              Abrir <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link to="/" className="card-hover">
            <h3 className="font-bold text-text mb-1">Trocar objetivo</h3>
            <p className="text-sm text-text-muted mb-3">Mudou de ideia? Volte para as rotas iniciais.</p>
            <span className="text-accent text-sm font-medium inline-flex items-center gap-1">
              Abrir <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </Section>
    </div>
  )
}
