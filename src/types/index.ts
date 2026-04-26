export type ObjetivoId = 'perder-peso' | 'ganhar-massa' | 'saude'

export type Objetivo = {
  id: ObjetivoId
  nome: string
  slug: string
  emoji: string
  /** RGB triplet "r g b" para usar em --accent-rgb */
  accentRgb: string
  /** Hex (apenas para previews/badges estáticos) */
  cor: string
  tagline: string
  resumo: string
  copyHero: string
}

export type CategoriaDica = 'treino' | 'alimentacao' | 'habito' | 'mito' | 'motivacao'

export type Dica = {
  id: string
  titulo: string
  texto: string
  categoria: CategoriaDica
  objetivos: ObjetivoId[]
}

export type Guia = {
  objetivo: ObjetivoId
  titulo: string
  resumo: string
  passos: { titulo: string; descricao: string }[]
  treino: {
    introducao: string
    blocos: {
      nome: string
      itens: { exercicio: string; series: string; obs?: string }[]
    }[]
    notas: string[]
  }
  alimentacao: {
    principios: string[]
    exemplos: { refeicao: string; ideias: string[] }[]
    evitar: string[]
  }
  habitos: { titulo: string; descricao: string }[]
  mitos: { mito: string; verdade: string }[]
}

export type LojaId = 'amazon' | 'mercadolivre' | 'shopee' | 'magalu' | 'centauro' | 'growth'

export type Loja = {
  id: LojaId
  nome: string
  cor: string
  dominio: string
}

export type Oferta = {
  loja: LojaId
  url: string
  preco?: string
  principal?: boolean
}

export type CategoriaProduto = 'suplemento' | 'equipamento' | 'roupa' | 'livro' | 'acessorio'

export type Produto = {
  id: string
  nome: string
  descricao: string
  porqueServe: string
  imagem: string
  categoria: CategoriaProduto
  objetivos: ObjetivoId[]
  ofertas: Oferta[]
}

export type Refeicao = 'cafe' | 'almoco' | 'lanche' | 'jantar' | 'pre-treino' | 'pos-treino'

export type Receita = {
  id: string
  nome: string
  descricao: string
  imagem: string
  refeicao: Refeicao[]
  objetivos: ObjetivoId[]
  tempoMin: number
  porcoes: number
  kcal: number
  proteina: number
  carbo: number
  gordura: number
  ingredientes: string[]
  passos: string[]
  dicas?: string[]
  utensilios?: { nome: string; produtoId?: string }[]
}

export type FAQ = {
  id: string
  pergunta: string
  resposta: string
}
