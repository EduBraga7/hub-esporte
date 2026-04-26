# Hub Esporte

Site para iniciantes em saúde, fitness, esportes e musculação. O conteúdo se adapta ao objetivo escolhido (Perder peso, Ganhar massa, Saúde geral) e inclui guias completos, calculadoras, receitas e produtos com link de afiliado.

## Stack
- Vite + React 18 + TypeScript
- TailwindCSS (dark-first, acento dinâmico via CSS variables)
- react-router-dom
- lucide-react (ícones)
- localStorage (apenas para o objetivo escolhido)

## Páginas
- `/` Home
- `/guia/perder-peso` · `/guia/ganhar-massa` · `/guia/saude`
- `/calculadoras` (IMC, TMB, Macros, Água, 1RM, FC alvo)
- `/receitas` e `/receitas/:id`
- `/produtos`

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Como cadastrar conteúdo

Tudo é estático em `src/data/`:

- `objetivos.ts` — copy e cor de cada objetivo.
- `dicas.ts` — dicas curtas (categorizadas por objetivo e tipo).
- `guias.ts` — conteúdo completo de cada guia.
- `receitas.ts` — receitas (ingredientes, passos, macros).
- `produtos.ts` — produtos com `ofertas[]` (links de afiliado).
- `lojas.ts` — metadados das lojas suportadas (Amazon, ML, Shopee, Magalu, Centauro, Growth).
- `faq.ts` — perguntas frequentes.

Para adicionar um novo produto, basta criar um item em `produtos.ts` com pelo menos uma `Oferta`. O card mostra automaticamente o CTA principal e expande as outras lojas.

## Aviso

Os links de produto são de afiliado: ao comprar por eles, podemos receber comissão sem custo extra para você. O conteúdo é informativo e não substitui orientação médica ou profissional.
