import { createContext, useContext, useMemo } from 'react'
import type { ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { Objetivo, ObjetivoId } from '../types'
import { OBJETIVOS, getObjetivo } from '../data/objetivos'

type Ctx = {
  objetivoId: ObjetivoId | null
  objetivo: Objetivo | null
  setObjetivo: (id: ObjetivoId | null) => void
  todos: Objetivo[]
}

const ObjetivoContext = createContext<Ctx | undefined>(undefined)

export function ObjetivoProvider({ children }: { children: ReactNode }) {
  const [objetivoId, setObjetivoId] = useLocalStorage<ObjetivoId | null>(
    'hub-esporte:objetivo',
    null,
  )

  const objetivo = useMemo(() => (objetivoId ? getObjetivo(objetivoId) : null), [objetivoId])

  const value: Ctx = {
    objetivoId,
    objetivo,
    setObjetivo: setObjetivoId,
    todos: OBJETIVOS,
  }

  return <ObjetivoContext.Provider value={value}>{children}</ObjetivoContext.Provider>
}

export function useObjetivo() {
  const ctx = useContext(ObjetivoContext)
  if (!ctx) throw new Error('useObjetivo precisa estar dentro de ObjetivoProvider')
  return ctx
}
