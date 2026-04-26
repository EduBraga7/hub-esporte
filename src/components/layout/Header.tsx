import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Dumbbell, Menu, X } from 'lucide-react'
import { Container } from './Container'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/objetivos', label: 'Objetivos' },
  { to: '/calculadoras', label: 'Calculadoras' },
  { to: '/receitas', label: 'Receitas' },
  { to: '/produtos', label: 'Produtos' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-bold text-text"
        >
          <Dumbbell className="h-6 w-6 text-accent" strokeWidth={2.5} />
          <span className="h-display text-2xl tracking-wide">HUB ESPORTE</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? 'text-accent bg-accent/10' : 'text-text-muted hover:text-text hover:bg-surface2'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="lg:hidden btn-ghost p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg">
          <Container className="py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive ? 'text-accent bg-accent/10' : 'text-text hover:bg-surface2'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </Container>
        </div>
      )}
    </header>
  )
}
