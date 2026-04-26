import type { Loja, LojaId } from '../types'

export const LOJAS: Record<LojaId, Loja> = {
  amazon: { id: 'amazon', nome: 'Amazon', cor: '#FF9900', dominio: 'amazon.com.br' },
  mercadolivre: {
    id: 'mercadolivre',
    nome: 'Mercado Livre',
    cor: '#FFE600',
    dominio: 'mercadolivre.com.br',
  },
  shopee: { id: 'shopee', nome: 'Shopee', cor: '#EE4D2D', dominio: 'shopee.com.br' },
  magalu: { id: 'magalu', nome: 'Magalu', cor: '#0086FF', dominio: 'magazineluiza.com.br' },
  centauro: { id: 'centauro', nome: 'Centauro', cor: '#E60012', dominio: 'centauro.com.br' },
  growth: { id: 'growth', nome: 'Growth', cor: '#9CFF00', dominio: 'gsuplementos.com.br' },
}

export const LOJAS_ARRAY: Loja[] = Object.values(LOJAS)

export function getLoja(id: LojaId): Loja {
  return LOJAS[id]
}
