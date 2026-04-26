import { Route, Routes } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home'
import Guia from './pages/Guia'
import Calculadoras from './pages/Calculadoras'
import Receitas from './pages/Receitas'
import ReceitaDetalhe from './pages/ReceitaDetalhe'
import Produtos from './pages/Produtos'
import Objetivos from './pages/Objetivos'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guia/:objetivo" element={<Guia />} />
          <Route path="/calculadoras" element={<Calculadoras />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/receitas/:id" element={<ReceitaDetalhe />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/objetivos" element={<Objetivos />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
