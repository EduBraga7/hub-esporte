import { useMemo, useState } from 'react'
import { Info } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { FiltroProdutos } from '../components/produtos/FiltroProdutos'
import { ProdutoCard } from '../components/produtos/ProdutoCard'
import { PRODUTOS } from '../data/produtos'
import type { CategoriaProduto, LojaId, ObjetivoId } from '../types'

export default function Produtos() {
  const [filtros, setFiltros] = useState<{
    objetivo: ObjetivoId | null
    categoria: CategoriaProduto | null
    loja: LojaId | null
  }>({
    objetivo: null,
    categoria: null,
    loja: null,
  })

  const lista = useMemo(() => {
    return PRODUTOS.filter((p) => {
      if (filtros.objetivo && !p.objetivos.includes(filtros.objetivo)) return false
      if (filtros.categoria && p.categoria !== filtros.categoria) return false
      if (filtros.loja && !p.ofertas.some((o) => o.loja === filtros.loja)) return false
      return true
    })
  }, [filtros])

  return (
    <Section
      eyebrow="Produtos"
      titulo="O que vale a pena para iniciante"
      descricao="Itens selecionados para complementar seu treino e dieta. Filtre por objetivo, categoria ou loja."
    >
      <div className="rounded-xl border border-accent/35 bg-surface/85 backdrop-blur-sm p-4 mb-6 flex gap-3 text-sm">
        <Info className="h-5 w-5 text-accent flex-shrink-0" />
        <p className="text-text-muted">
          <strong className="text-text">Contém links de afiliado:</strong> ao comprar pelos links
          indicados, podemos receber comissão sem custo extra para você. Não recomendamos nada que
          não usaríamos. Como Associado da Amazon, ganho com compras qualificadas.
        </p>
      </div>

      <FiltroProdutos filtros={filtros} setFiltros={setFiltros} />

      {lista.length === 0 ? (
        <div className="card text-center text-text-muted">
          Nenhum produto com esses filtros. Tente afrouxar a busca.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {lista.map((p) => (
            <ProdutoCard key={p.id} produto={p} />
          ))}
        </div>
      )}
    </Section>
  )
}
