import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Clock3, Flame, Beef } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { getReceita, REFEICOES_LABELS } from '../data/receitas'
import { OBJETIVOS } from '../data/objetivos'
import { getProdutosPorObjetivo } from '../data/produtos'

export default function ReceitaDetalhe() {
  const { id } = useParams<{ id: string }>()
  const receita = id ? getReceita(id) : undefined

  if (!receita) return <Navigate to="/receitas" replace />

  const produtosRelacionados = getProdutosPorObjetivo(receita.objetivos[0], 3)

  return (
    <Section>
      <Link to="/receitas" className="btn-ghost mb-6">
        <ArrowLeft className="h-4 w-4" /> Voltar para receitas
      </Link>

      <article className="grid lg:grid-cols-2 gap-6">
        <div>
          <div className="aspect-video rounded-2xl overflow-hidden border border-line mb-4">
            <img src={receita.imagem} alt={receita.nome} className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {receita.refeicao.map((r) => (
              <span key={r} className="chip">
                {REFEICOES_LABELS[r]}
              </span>
            ))}
          </div>

          <h1 className="h-display text-5xl text-text mb-2">{receita.nome}</h1>
          <p className="text-text-muted mb-4">{receita.descricao}</p>

          <div className="grid grid-cols-3 gap-2 text-xs text-text-muted mb-4">
            <div className="rounded-lg border border-line p-2 text-center">
              <Clock3 className="h-3.5 w-3.5 mx-auto mb-1 text-accent" />
              {receita.tempoMin} min
            </div>
            <div className="rounded-lg border border-line p-2 text-center">
              <Flame className="h-3.5 w-3.5 mx-auto mb-1 text-accent" />
              {receita.kcal} kcal
            </div>
            <div className="rounded-lg border border-line p-2 text-center">
              <Beef className="h-3.5 w-3.5 mx-auto mb-1 text-accent" />
              {receita.proteina} g prot
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {receita.objetivos.map((o) => {
              const obj = OBJETIVOS.find((x) => x.id === o)
              if (!obj) return null
              return (
                <span key={o} className="chip text-xs" style={{ borderColor: `${obj.cor}55`, color: obj.cor }}>
                  {obj.emoji} {obj.nome}
                </span>
              )
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="card">
            <h2 className="font-bold text-text text-xl mb-3">Ingredientes</h2>
            <ul className="space-y-2 text-sm text-text-muted">
              {receita.ingredientes.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2 className="font-bold text-text text-xl mb-3">Modo de preparo</h2>
            <ol className="space-y-3 text-sm text-text-muted list-decimal list-inside">
              {receita.passos.map((passo, i) => (
                <li key={i}>{passo}</li>
              ))}
            </ol>
          </div>

          {receita.dicas && receita.dicas.length > 0 && (
            <div className="card">
              <h2 className="font-bold text-text text-xl mb-3">Dicas para iniciante</h2>
              <ul className="space-y-2 text-sm text-text-muted">
                {receita.dicas.map((dica, i) => (
                  <li key={i}>• {dica}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      <div className="mt-8 card">
        <h2 className="font-bold text-text text-xl mb-2">Produtos que podem ajudar</h2>
        <p className="text-sm text-text-muted mb-4">
          Sugestões de itens úteis para manter sua rotina na prática.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {produtosRelacionados.map((p) => (
            <div key={p.id} className="rounded-xl border border-line bg-surface2 p-3">
              <div className="font-semibold text-text mb-1">{p.nome}</div>
              <p className="text-xs text-text-muted mb-2 line-clamp-2">{p.porqueServe}</p>
              <Link to="/produtos" className="text-accent text-xs font-medium hover:underline">
                Ver ofertas
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
