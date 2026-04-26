import { Hero } from '../components/home/Hero'
import { QuizObjetivo } from '../components/home/QuizObjetivo'
import { ComoFunciona } from '../components/home/ComoFunciona'
import { DicasDestaque } from '../components/home/DicasDestaque'
import { ProdutosDestaque } from '../components/home/ProdutosDestaque'
import { CalculadorasDestaque } from '../components/home/CalculadorasDestaque'
import { FAQ } from '../components/home/FAQ'

export default function Home() {
  // Seções alternando entre bg escuro e surface (cinza mais claro)
  const secoes = [
    { key: 'beneficios', component: <ComoFunciona />, bg: 'bg-bg' },
    { key: 'calculadoras', component: <CalculadorasDestaque />, bg: 'bg-surface' },
    { key: 'dicas', component: <DicasDestaque />, bg: 'bg-bg' },
    { key: 'produtos', component: <ProdutosDestaque />, bg: 'bg-surface' },
    { key: 'faq', component: <FAQ />, bg: 'bg-bg' },
  ]

  return (
    <>
      <Hero />
      <div className="bg-surface">
        <QuizObjetivo />
      </div>
      {secoes.map((secao) => (
        <div
          key={secao.key}
          className={secao.bg}
        >
          {secao.component}
        </div>
      ))}
    </>
  )
}
