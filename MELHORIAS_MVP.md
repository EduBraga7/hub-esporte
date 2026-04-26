# Melhorias sugeridas para o MVP (Hub Esporte)

## 1) Validação técnica final
- Rodar `npm run build` e corrigir qualquer erro de tipagem/rota.
- Conferir links quebrados (`/receitas/:slug`, guias, produtos).

## 2) UX das páginas novas
- Melhorar estados vazios nos filtros (ex.: "nenhuma receita encontrada" com CTA).
- Padronizar feedback de validação nas calculadoras (mensagens mais claras).

## 3) SEO básico por página
- Ajustar `title` e `meta description` por rota (Calculadoras, Receitas, Receita).
- Melhorar compartilhamento com Open Graph mínimo.

## 4) Polimento de conversão (afiliados)
- Destacar melhor oferta principal no card de produto.
- CTA mais claro no detalhe da receita para produto relacionado.

## 5) Qualidade e manutenção
- Revisar acessibilidade rápida (labels, foco visível, contraste).
- Revisar `npm audit` (2 vulnerabilidades moderadas) e decidir se corrige agora ou após lançamento.

## Próximo pacote recomendado
- Executar pacote **1 + 2** primeiro (build + ajustes UX rápidos).
- Entregar para revisão visual/funcional.
- Depois avançar para SEO e conversão.
