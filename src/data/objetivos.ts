import type { Objetivo, ObjetivoId } from '../types'

export const OBJETIVOS: Objetivo[] = [
  {
    id: 'perder-peso',
    nome: 'Perder peso',
    slug: 'perder-peso',
    emoji: '🔥',
    accentRgb: '251 146 60',
    cor: '#FB923C',
    tagline: 'Queimar gordura sem sofrer',
    resumo:
      'Crie um déficit calórico sustentável combinando treino simples, comida de verdade e hábitos do dia a dia.',
    copyHero:
      'Você não precisa passar fome nem virar atleta. Vamos te mostrar o caminho do peso saudável sem dietas malucas.',
  },
  {
    id: 'ganhar-massa',
    nome: 'Ganhar massa',
    slug: 'ganhar-massa',
    emoji: '💪',
    accentRgb: '163 230 53',
    cor: '#A3E635',
    tagline: 'Hipertrofia para iniciante',
    resumo:
      'Estímulo certo + comida na medida + descanso. A musculação é menos sobre talento e mais sobre constância.',
    copyHero:
      'Hipertrofia não é mistério: treinar pesado dentro do seu nível, comer proteína suficiente e dormir bem. Bora começar.',
  },
  {
    id: 'saude',
    nome: 'Saúde em geral',
    slug: 'saude',
    emoji: '🌱',
    accentRgb: '45 212 191',
    cor: '#2DD4BF',
    tagline: 'Mais energia e menos dor',
    resumo:
      'Foco em mover o corpo, comer melhor e cuidar do sono. Resultado: mais disposição, menos dor, vida longa.',
    copyHero:
      'Treinar para a saúde é o melhor investimento que existe. Nada extremo: passos diários, treino leve e comida boa.',
  },
]

export function getObjetivo(id: ObjetivoId): Objetivo {
  const o = OBJETIVOS.find((x) => x.id === id)
  if (!o) throw new Error(`Objetivo desconhecido: ${id}`)
  return o
}

export function getObjetivoBySlug(slug: string): Objetivo | undefined {
  return OBJETIVOS.find((o) => o.slug === slug)
}
