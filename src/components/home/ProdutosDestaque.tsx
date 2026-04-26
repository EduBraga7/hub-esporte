import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '../ui/Section'
import { ProdutoCard } from '../produtos/ProdutoCard'
import { getProdutosPorObjetivo } from '../../data/produtos'

export function ProdutosDestaque() {
  const produtos = getProdutosPorObjetivo(null, 4)

  return (
    <Section
      eyebrow="Produtos recomendados"
      titulo="Itens que valem a pena"
      descricao="Selecionados para iniciantes — só o essencial, sem hype."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {produtos.map((p) => (
          <ProdutoCard key={p.id} produto={p} />
        ))}
      </div>
      <div className="mt-8">
        <Link to="/produtos" className="btn-outline">
          Ver todos os produtos <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
