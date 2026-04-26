import { useState } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import type { Produto } from '../../types'
import { getOfertaPrincipal, getOfertasSecundarias } from '../../data/produtos'
import { LOJAS } from '../../data/lojas'
import { getObjetivo } from '../../data/objetivos'

const linkProps = { target: '_blank', rel: 'sponsored noopener noreferrer' as const }

export function ProdutoCard({ produto }: { produto: Produto }) {
  const [aberto, setAberto] = useState(false)
  const principal = getOfertaPrincipal(produto)
  const secundarias = getOfertasSecundarias(produto)
  const lojaPrincipal = LOJAS[principal.loja]

  return (
    <article className="card-hover flex flex-col">
      <div className="aspect-square -mx-5 -mt-5 mb-4 rounded-t-2xl border-b border-line bg-surface2/70 p-4">
        <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-line text-xs text-text-muted">
          Espaço para imagem
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-2">
        {produto.objetivos.map((o) => {
          const obj = getObjetivo(o)
          return (
            <span
              key={o}
              className="chip text-xs"
              style={{ borderColor: `${obj.cor}55`, color: obj.cor }}
            >
              {obj.emoji} {obj.nome}
            </span>
          )
        })}
      </div>

      <h3 className="font-bold text-text mb-1">{produto.nome}</h3>
      <p className="text-sm text-text-muted mb-3 line-clamp-3">{produto.descricao}</p>

      <p className="text-xs text-text-muted bg-surface2 border border-line rounded-lg p-2 mb-4">
        <strong className="text-text">Por que serve:</strong> {produto.porqueServe}
      </p>

      <div className="mt-auto flex flex-col gap-2">
        <a
          href={principal.url}
          {...linkProps}
          className="btn-primary justify-between"
          style={{ ['--accent-rgb' as never]: undefined }}
        >
          <span>Ver na {lojaPrincipal.nome}</span>
          <ExternalLink className="h-4 w-4" />
        </a>

        {secundarias.length > 0 && (
          <>
            <button
              onClick={() => setAberto((v) => !v)}
              className="text-xs text-text-muted hover:text-accent flex items-center justify-center gap-1"
            >
              <ChevronDown className={`h-3.5 w-3.5 transition ${aberto ? 'rotate-180' : ''}`} />
              {aberto ? 'Esconder' : `Ver em outras ${secundarias.length} loja${secundarias.length > 1 ? 's' : ''}`}
            </button>
            {aberto && (
              <div className="grid grid-cols-2 gap-2 animate-fade-in">
                {secundarias.map((o) => (
                  <a
                    key={o.loja}
                    href={o.url}
                    {...linkProps}
                    className="btn-secondary text-xs justify-between"
                  >
                    <span>{LOJAS[o.loja].nome}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </article>
  )
}
