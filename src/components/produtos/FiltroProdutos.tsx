import type { CategoriaProduto, LojaId, ObjetivoId } from '../../types'
import { OBJETIVOS } from '../../data/objetivos'
import { LOJAS_ARRAY } from '../../data/lojas'

const CATEGORIAS: { id: CategoriaProduto; label: string }[] = [
  { id: 'suplemento', label: 'Suplementos' },
  { id: 'equipamento', label: 'Equipamentos' },
  { id: 'roupa', label: 'Roupas' },
  { id: 'acessorio', label: 'Acessórios' },
  { id: 'livro', label: 'Livros' },
]

type Filtros = {
  objetivo: ObjetivoId | null
  categoria: CategoriaProduto | null
  loja: LojaId | null
}

export function FiltroProdutos({
  filtros,
  setFiltros,
}: {
  filtros: Filtros
  setFiltros: (f: Filtros) => void
}) {
  return (
    <div className="card mb-8 grid gap-4 md:grid-cols-3">
      <div>
        <label>Objetivo</label>
        <div className="flex flex-wrap gap-2">
          <Pill ativo={!filtros.objetivo} onClick={() => setFiltros({ ...filtros, objetivo: null })}>
            Todos
          </Pill>
          {OBJETIVOS.map((o) => (
            <Pill
              key={o.id}
              ativo={filtros.objetivo === o.id}
              onClick={() => setFiltros({ ...filtros, objetivo: o.id })}
            >
              {o.emoji} {o.nome}
            </Pill>
          ))}
        </div>
      </div>

      <div>
        <label>Categoria</label>
        <div className="flex flex-wrap gap-2">
          <Pill ativo={!filtros.categoria} onClick={() => setFiltros({ ...filtros, categoria: null })}>
            Todas
          </Pill>
          {CATEGORIAS.map((c) => (
            <Pill
              key={c.id}
              ativo={filtros.categoria === c.id}
              onClick={() => setFiltros({ ...filtros, categoria: c.id })}
            >
              {c.label}
            </Pill>
          ))}
        </div>
      </div>

      <div>
        <label>Loja</label>
        <div className="flex flex-wrap gap-2">
          <Pill ativo={!filtros.loja} onClick={() => setFiltros({ ...filtros, loja: null })}>
            Todas
          </Pill>
          {LOJAS_ARRAY.map((l) => (
            <Pill
              key={l.id}
              ativo={filtros.loja === l.id}
              onClick={() => setFiltros({ ...filtros, loja: l.id })}
            >
              {l.nome}
            </Pill>
          ))}
        </div>
      </div>
    </div>
  )
}

function Pill({
  children,
  ativo,
  onClick,
}: {
  children: React.ReactNode
  ativo: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`chip text-xs transition ${
        ativo ? 'border-accent text-accent bg-accent/10' : 'hover:border-accent/50 hover:text-text'
      }`}
    >
      {children}
    </button>
  )
}
