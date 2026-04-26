import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { CalcIMC } from '../components/calculadoras/CalcIMC'
import { CalcTMB } from '../components/calculadoras/CalcTMB'
import { CalcMacros } from '../components/calculadoras/CalcMacros'
import { CalcAgua } from '../components/calculadoras/CalcAgua'
import { Calc1RM } from '../components/calculadoras/Calc1RM'
import { CalcFCAlvo } from '../components/calculadoras/CalcFCAlvo'

export default function Calculadoras() {
  return (
    <Section
      eyebrow="Calculadoras"
      titulo="Ferramentas para ajustar seu plano"
      descricao="Resultados rápidos para te ajudar a decidir treino, alimentação e rotina com mais clareza."
    >
      <div className="grid lg:grid-cols-2 gap-4">
        <CalcIMC />
        <CalcTMB />
        <CalcMacros />
        <CalcAgua />
        <Calc1RM />
        <CalcFCAlvo />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <Link to="/guia/perder-peso" className="card-hover">
          <h3 className="font-bold text-text mb-1">Quer secar com estratégia?</h3>
          <p className="text-sm text-text-muted mb-3">
            Use TMB e macros para montar seu déficit sem dieta maluca.
          </p>
          <span className="text-accent text-sm font-medium inline-flex items-center gap-1">
            Ver guia de perder peso <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        <Link to="/produtos" className="card-hover">
          <h3 className="font-bold text-text mb-1">Monte seu kit inicial</h3>
          <p className="text-sm text-text-muted mb-3">
            Veja produtos úteis para treino, hidratação e consistência diária.
          </p>
          <span className="text-accent text-sm font-medium inline-flex items-center gap-1">
            Ver produtos <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </Section>
  )
}
