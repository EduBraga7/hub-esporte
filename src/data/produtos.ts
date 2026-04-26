import type { Produto } from '../types'

/**
 * Produtos placeholder. Substitua os URLs pelos seus links de afiliado reais
 * conforme for sendo aprovado em cada programa.
 *
 * Convencao:
 *  - `principal: true` em UMA das ofertas (CTA grande do card).
 *  - se nenhuma for marcada, a primeira eh tratada como principal.
 */
export const PRODUTOS: Produto[] = [
  {
    id: 'whey-iso',
    nome: 'Whey Protein Isolado (900g)',
    descricao:
      'Proteína em pó pratica para complementar a meta diária. Boa para quem nao consegue atingir proteina so com comida.',
    porqueServe:
      'Ajuda a fechar a meta de proteína sem precisar comer mais um prato de frango. Pós-treino ou lanche.',
    imagem: '/images/Gemini_Generated_Image_987t0v987t0v987t.png',
    categoria: 'suplemento',
    objetivos: ['ganhar-massa', 'perder-peso'],
    ofertas: [
      { loja: 'amazon', url: 'https://www.amazon.com.br/s?k=whey+isolado&tag=SUA_TAG-20', principal: true },
      { loja: 'mercadolivre', url: 'https://lista.mercadolivre.com.br/whey-isolado' },
      { loja: 'growth', url: 'https://www.gsuplementos.com.br/whey-protein' },
    ],
  },
  {
    id: 'creatina',
    nome: 'Creatina Monohidratada (300g)',
    descricao:
      'Suplemento mais estudado do mundo. Aumenta força, volume muscular e até cognição.',
    porqueServe:
      'Tomar 3–5 g por dia (todo dia). Resultado consistente em força e hipertrofia em poucas semanas.',
    imagem: '/images/Gemini_Generated_Image_dcp6d6dcp6d6dcp6.png',
    categoria: 'suplemento',
    objetivos: ['ganhar-massa'],
    ofertas: [
      { loja: 'amazon', url: 'https://www.amazon.com.br/s?k=creatina&tag=SUA_TAG-20', principal: true },
      { loja: 'mercadolivre', url: 'https://lista.mercadolivre.com.br/creatina' },
      { loja: 'growth', url: 'https://www.gsuplementos.com.br/creatina' },
    ],
  },
  {
    id: 'multivitaminico',
    nome: 'Multivitamínico Diário',
    descricao:
      'Cobertura básica de vitaminas e minerais que costumam ficar baixos na alimentação moderna.',
    porqueServe:
      'Bom seguro nutricional para quem nao come variado o suficiente. Nao substitui exames anuais.',
    imagem: '/images/Gemini_Generated_Image_o8qdo7o8qdo7o8qd.png',
    categoria: 'suplemento',
    objetivos: ['saude'],
    ofertas: [
      { loja: 'amazon', url: 'https://www.amazon.com.br/s?k=multivitaminico&tag=SUA_TAG-20', principal: true },
      { loja: 'mercadolivre', url: 'https://lista.mercadolivre.com.br/multivitaminico' },
    ],
  },
  {
    id: 'halter-ajustavel',
    nome: 'Halter Ajustável (até 24kg)',
    descricao:
      'Substitui um rack inteiro de halteres em casa. Muda a carga em segundos com um sistema de pinos.',
    porqueServe:
      'Solução compacta para treinar em casa com progressão de carga real. Ideal para iniciante e intermediário.',
    imagem:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=70',
    categoria: 'equipamento',
    objetivos: ['ganhar-massa', 'saude', 'perder-peso'],
    ofertas: [
      { loja: 'mercadolivre', url: 'https://lista.mercadolivre.com.br/halter-ajustavel', principal: true },
      { loja: 'amazon', url: 'https://www.amazon.com.br/s?k=halter+ajustavel&tag=SUA_TAG-20' },
      { loja: 'magalu', url: 'https://www.magazineluiza.com.br/busca/halter+ajustavel/' },
    ],
  },
  {
    id: 'corda-pular',
    nome: 'Corda de Pular Profissional',
    descricao:
      'Cardio rápido, barato e portátil. 10 min de corda equivalem a uns 30 min de caminhada.',
    porqueServe:
      'Excelente para queimar calorias rápido em pouco espaço. Comece com séries curtas para evitar dor na panturrilha.',
    imagem:
      'https://images.unsplash.com/photo-1600026453205-49d4f1f96edd?w=600&auto=format&fit=crop&q=70',
    categoria: 'acessorio',
    objetivos: ['perder-peso', 'saude'],
    ofertas: [
      { loja: 'shopee', url: 'https://shopee.com.br/search?keyword=corda%20de%20pular', principal: true },
      { loja: 'amazon', url: 'https://www.amazon.com.br/s?k=corda+de+pular&tag=SUA_TAG-20' },
      { loja: 'mercadolivre', url: 'https://lista.mercadolivre.com.br/corda-de-pular' },
    ],
  },
  {
    id: 'tapete-yoga',
    nome: 'Tapete de Yoga / Treino',
    descricao:
      'Conforto para abdômen, alongamento, mobilidade e treinos no chão. 6 mm é o ideal.',
    porqueServe:
      'Faz toda diferença para treinar em casa sem machucar joelho/coluna. Dura anos.',
    imagem:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=70',
    categoria: 'acessorio',
    objetivos: ['saude', 'perder-peso'],
    ofertas: [
      { loja: 'amazon', url: 'https://www.amazon.com.br/s?k=tapete+yoga&tag=SUA_TAG-20', principal: true },
      { loja: 'mercadolivre', url: 'https://lista.mercadolivre.com.br/tapete-yoga' },
      { loja: 'shopee', url: 'https://shopee.com.br/search?keyword=tapete%20yoga' },
    ],
  },
  {
    id: 'garrafa-2l',
    nome: 'Garrafa de Água 2L',
    descricao:
      'Garrafa motivacional de 2 litros com marcação de horários. Hidratar fica automático.',
    porqueServe:
      'Lembrete visual constante. Quem usa garrafa grande bebe muito mais água sem esforço.',
    imagem:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=70',
    categoria: 'acessorio',
    objetivos: ['saude', 'perder-peso', 'ganhar-massa'],
    ofertas: [
      { loja: 'shopee', url: 'https://shopee.com.br/search?keyword=garrafa%202l', principal: true },
      { loja: 'amazon', url: 'https://www.amazon.com.br/s?k=garrafa+2l&tag=SUA_TAG-20' },
      { loja: 'mercadolivre', url: 'https://lista.mercadolivre.com.br/garrafa-2l-motivacional' },
    ],
  },
  {
    id: 'tenis-treino',
    nome: 'Tênis Cross Training',
    descricao:
      'Tênis com sola firme e estável, bom para musculação, funcional e caminhada. Versátil.',
    porqueServe:
      'Tênis de corrida pode atrapalhar agachamento (sola macia). Cross training resolve treino + cardio leve.',
    imagem:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=70',
    categoria: 'roupa',
    objetivos: ['saude', 'ganhar-massa', 'perder-peso'],
    ofertas: [
      { loja: 'centauro', url: 'https://www.centauro.com.br/busca?Ntt=cross+training', principal: true },
      { loja: 'amazon', url: 'https://www.amazon.com.br/s?k=tenis+cross+training&tag=SUA_TAG-20' },
      { loja: 'mercadolivre', url: 'https://lista.mercadolivre.com.br/tenis-cross-training' },
    ],
  },
  {
    id: 'faixas-elasticas',
    nome: 'Kit de Faixas Elásticas',
    descricao:
      'Kit com 5 intensidades. Substitui muito equipamento e cabe em qualquer mochila.',
    porqueServe:
      'Perfeito para começar em casa, viajar ou ativar músculo antes de pegar peso. Custo-benefício gigante.',
    imagem:
      'https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=600&auto=format&fit=crop&q=70',
    categoria: 'equipamento',
    objetivos: ['saude', 'perder-peso', 'ganhar-massa'],
    ofertas: [
      { loja: 'shopee', url: 'https://shopee.com.br/search?keyword=faixas%20elasticas', principal: true },
      { loja: 'amazon', url: 'https://www.amazon.com.br/s?k=faixas+elasticas&tag=SUA_TAG-20' },
      { loja: 'mercadolivre', url: 'https://lista.mercadolivre.com.br/faixa-elastica' },
    ],
  },
  {
    id: 'livro-iniciante',
    nome: 'Livro: Maior, Mais Forte, Mais Magro',
    descricao:
      'Clássico para iniciantes em musculação. Sem mistério, sem suplemento mágico, com base em ciência.',
    porqueServe:
      'Guia direto para quem quer entender por que treinar e comer assim funciona. Leitura única que dura uma vida.',
    imagem:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=70',
    categoria: 'livro',
    objetivos: ['ganhar-massa', 'saude'],
    ofertas: [
      { loja: 'amazon', url: 'https://www.amazon.com.br/s?k=maior+mais+forte+mais+magro&tag=SUA_TAG-20', principal: true },
      { loja: 'mercadolivre', url: 'https://lista.mercadolivre.com.br/livros-musculacao' },
    ],
  },
]

export function getProdutosPorObjetivo(objetivoId: string | null, limite?: number) {
  const lista = objetivoId
    ? PRODUTOS.filter((p) => p.objetivos.includes(objetivoId as Produto['objetivos'][number]))
    : PRODUTOS
  return typeof limite === 'number' ? lista.slice(0, limite) : lista
}

export function getOfertaPrincipal(p: Produto) {
  return p.ofertas.find((o) => o.principal) ?? p.ofertas[0]
}

export function getOfertasSecundarias(p: Produto) {
  const principal = getOfertaPrincipal(p)
  return p.ofertas.filter((o) => o !== principal)
}
