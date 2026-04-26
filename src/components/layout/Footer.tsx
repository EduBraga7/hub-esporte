import { Link } from 'react-router-dom'
import { Dumbbell } from 'lucide-react'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface mt-10">
      <Container className="py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-bold text-text mb-3">
            <Dumbbell className="h-5 w-5 text-accent" strokeWidth={2.5} />
            <span className="h-display text-xl tracking-wide">HUB ESPORTE</span>
          </div>
          <p className="text-sm text-text-muted max-w-md">
            Conteúdo, calculadoras e produtos para quem está começando em saúde, fitness
            e musculação. Sem fórmula mágica — só o que funciona.
          </p>
          <p className="mt-4 text-xs text-text-muted">
            <strong className="text-text">Contém links de afiliado.</strong> Ao comprar pelos
            links indicados, podemos receber comissão sem custo extra para você. Como Associado
            da Amazon, ganho com compras qualificadas.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-text mb-3">Objetivos</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li><Link to="/objetivos" className="hover:text-accent">Ver todos os objetivos</Link></li>
            <li><Link to="/guia/perder-peso" className="hover:text-accent">Guia de perder peso</Link></li>
            <li><Link to="/guia/ganhar-massa" className="hover:text-accent">Guia de ganhar massa</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-text mb-3">Ferramentas</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li><Link to="/calculadoras" className="hover:text-accent">Calculadoras</Link></li>
            <li><Link to="/receitas" className="hover:text-accent">Receitas</Link></li>
            <li><Link to="/produtos" className="hover:text-accent">Produtos</Link></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-muted">
          <span>&copy; {new Date().getFullYear()} Hub Esporte. Conteúdo informativo, não substitui orientação médica ou profissional.</span>
          <span>Feito com ☕ e treino.</span>
        </Container>
      </div>
    </footer>
  )
}
