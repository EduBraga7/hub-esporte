import type { Guia, ObjetivoId } from '../types'

export const GUIAS: Record<ObjetivoId, Guia> = {
  'perder-peso': {
    objetivo: 'perder-peso',
    titulo: 'Guia para perder peso (sem sofrer)',
    resumo:
      'Emagrecer é matemática + hábito. Aqui você aprende o caminho realista, sem dieta milagrosa nem treino impossível.',
    passos: [
      {
        titulo: 'Defina sua meta de calorias',
        descricao:
          'Use a calculadora de TMB e tire 300–500 kcal por dia. Esse é seu déficit calórico sustentável.',
      },
      {
        titulo: 'Coma proteína em todas as refeições',
        descricao:
          'Mire 1,6–2,0 g por kg de peso. Proteína mata fome e protege seus músculos durante a perda de peso.',
      },
      {
        titulo: 'Movimente-se todo dia',
        descricao:
          '7–10 mil passos diários é o "treino invisível" que mais entrega resultado. Conte com o celular ou relógio.',
      },
      {
        titulo: 'Treine força 3x por semana',
        descricao:
          'Musculação preserva massa magra e mantém o metabolismo lá em cima. Treino A/B básico já basta.',
      },
      {
        titulo: 'Durma 7–9 horas',
        descricao:
          'Sono ruim sabota fome, hormônios e treino. Sem sono, dieta perfeita e treino pesado rendem metade.',
      },
      {
        titulo: 'Acompanhe a tendência',
        descricao:
          'Pese semanalmente em jejum. O número oscila — o que importa é a média indo para baixo ao longo de 4 semanas.',
      },
    ],
    treino: {
      introducao:
        'Treino A/B três vezes por semana (ex.: seg/qua/sex). Alternando A-B-A em uma semana e B-A-B na seguinte. Foque em executar com calma, com forma boa.',
      blocos: [
        {
          nome: 'Treino A (puxar + perna)',
          itens: [
            { exercicio: 'Agachamento livre ou guiado', series: '3x10', obs: 'Desça até a coxa ficar paralela ao chão.' },
            { exercicio: 'Remada baixa', series: '3x10' },
            { exercicio: 'Puxada alta (pulley)', series: '3x10' },
            { exercicio: 'Rosca direta', series: '2x12' },
            { exercicio: 'Prancha frontal', series: '3x30s' },
          ],
        },
        {
          nome: 'Treino B (empurrar + perna)',
          itens: [
            { exercicio: 'Leg press', series: '3x12' },
            { exercicio: 'Cadeira extensora + flexora', series: '3x12 cada' },
            { exercicio: 'Supino reto com halteres', series: '3x10' },
            { exercicio: 'Desenvolvimento com halteres', series: '3x10' },
            { exercicio: 'Tríceps na polia', series: '2x12' },
          ],
        },
      ],
      notas: [
        'Comece com cargas leves: você deve sentir dificuldade nas duas últimas reps, não nas duas primeiras.',
        'Aumente carga ou repetições gradualmente, de semana em semana.',
        'Caminhe 20–30 min nos dias sem treino — entra como cardio leve.',
      ],
    },
    alimentacao: {
      principios: [
        'Metade do prato em vegetais, um quarto em proteína magra, um quarto em carbo bom (arroz, batata, mandioca).',
        'Proteína em todas as refeições principais (frango, ovo, peixe, carne magra, iogurte natural, feijão).',
        'Reduza líquido com caloria: refrigerante, suco, álcool, café cremoso. Prefira água, café puro e chá.',
        'Coma devagar e sente para comer. Comer assistindo TV/celular faz comer mais sem perceber.',
      ],
      exemplos: [
        {
          refeicao: 'Café da manhã',
          ideias: [
            'Ovos mexidos + pão integral + fruta',
            'Iogurte natural + aveia + banana',
            'Tapioca com queijo branco e tomate',
          ],
        },
        {
          refeicao: 'Almoço',
          ideias: [
            'Arroz + feijão + frango grelhado + salada grande',
            'Macarrão integral com molho de tomate + atum + brócolis',
            'Wrap de frango com vegetais e iogurte como molho',
          ],
        },
        {
          refeicao: 'Jantar',
          ideias: [
            'Omelete recheado com legumes + salada',
            'Sopa caseira de legumes com frango desfiado',
            'Peixe assado + batata-doce + salada',
          ],
        },
      ],
      evitar: [
        'Dietas que cortam grupos inteiros sem motivo (sem carbo, sem gordura, sem sal).',
        'Detox e shakes substitutos por dias seguidos — não ensinam você a comer.',
        'Trocar refeição por suplemento. Suplemento é "extra", não é base.',
      ],
    },
    habitos: [
      {
        titulo: 'Caminhe diariamente',
        descricao: 'Mire 7–10 mil passos. Use uma podcast/lista nova como recompensa.',
      },
      {
        titulo: 'Durma com horário regular',
        descricao: 'Mesmo horário para deitar e acordar, mesmo no fim de semana. Evita "ressaca social".',
      },
      {
        titulo: 'Hidrate-se',
        descricao: '30–35 ml por kg/dia. Garrafa visível na mesa de trabalho ajuda.',
      },
      {
        titulo: 'Pese 1x por semana',
        descricao: 'Mesmo dia, mesmo horário, em jejum, depois de ir ao banheiro. Não pese todo dia.',
      },
    ],
    mitos: [
      {
        mito: 'Comer carboidrato à noite engorda.',
        verdade:
          'O que engorda é o total de calorias do dia. Se sua janta tem carbo dentro da meta, está tudo bem.',
      },
      {
        mito: 'Cardio em jejum queima mais gordura.',
        verdade:
          'A diferença prática é mínima. O melhor cardio é o que você consegue manter por meses.',
      },
      {
        mito: 'Cintas e cremes redutores funcionam.',
        verdade:
          'Não dá para "queimar" gordura em região específica. Reduza gordura geral; o corpo escolhe de onde tirar.',
      },
    ],
  },

  'ganhar-massa': {
    objetivo: 'ganhar-massa',
    titulo: 'Guia para ganhar massa muscular',
    resumo:
      'Hipertrofia depende de três pilares: estímulo (treino), matéria-prima (comida) e recuperação (sono). Acertou os três, cresce. Erra um, trava.',
    passos: [
      {
        titulo: 'Estabeleça uma sobra calórica leve',
        descricao:
          'Some 200–400 kcal acima do seu gasto. Excesso vira gordura, falta trava o crescimento.',
      },
      {
        titulo: 'Treine força 3–4x por semana',
        descricao:
          'Treino A/B ou A/B/C alternados. Foque em compostos: agachamento, supino, remada, terra, desenvolvimento.',
      },
      {
        titulo: 'Sobrecarga progressiva',
        descricao:
          'Cada semana, aumente carga, repetições ou qualidade da execução. Sem progressão não há hipertrofia.',
      },
      {
        titulo: 'Coma proteína suficiente',
        descricao:
          '1,6–2,2 g de proteína por kg de peso, distribuída em 3–5 refeições. Whey só se a comida não der conta.',
      },
      {
        titulo: 'Durma como prioridade',
        descricao:
          'Músculo cresce no descanso. 7–9h de sono e 48h por grupo muscular antes de treinar de novo.',
      },
      {
        titulo: 'Tenha paciência',
        descricao:
          'Iniciante ganha 0,5–1 kg de músculo por mês no melhor cenário. Foto a cada 4 semanas, não toda semana.',
      },
    ],
    treino: {
      introducao:
        'Treino A/B alternado, 3 a 4 vezes por semana. Foque na execução antes da carga: aprenda o movimento leve, depois progrida.',
      blocos: [
        {
          nome: 'Treino A (peito, ombro, tríceps, abdômen)',
          itens: [
            { exercicio: 'Supino reto com barra ou halteres', series: '4x8' },
            { exercicio: 'Supino inclinado com halteres', series: '3x10' },
            { exercicio: 'Desenvolvimento com halteres', series: '3x10' },
            { exercicio: 'Elevação lateral', series: '3x12' },
            { exercicio: 'Tríceps testa', series: '3x10' },
            { exercicio: 'Prancha frontal', series: '3x40s' },
          ],
        },
        {
          nome: 'Treino B (costas, perna, bíceps)',
          itens: [
            { exercicio: 'Agachamento livre', series: '4x8' },
            { exercicio: 'Levantamento terra romeno', series: '3x10' },
            { exercicio: 'Puxada alta (pulley)', series: '4x10' },
            { exercicio: 'Remada curvada', series: '3x10' },
            { exercicio: 'Rosca direta', series: '3x10' },
            { exercicio: 'Panturrilha em pé', series: '3x15' },
          ],
        },
      ],
      notas: [
        'Descanse 90–120 segundos entre séries de exercícios pesados (compostos) e 60–90s nos isoladores.',
        'Anote cargas e repetições — você precisa enxergar a progressão para mantê-la.',
        'Aqueça com 5 min de caminhada ou bike + 1–2 séries leves do primeiro exercício.',
      ],
    },
    alimentacao: {
      principios: [
        'Coma a cada 3–5 horas, com proteína em todas as refeições.',
        'Não tenha medo de carboidrato: ele dá energia para treinar pesado e poupa proteína.',
        'Inclua gordura boa (azeite, abacate, castanhas, peixe) — ajuda hormônios e dá densidade calórica.',
        'Suplementos úteis (em ordem): creatina (3–5 g/dia), whey (se faltar proteína), cafeína pré-treino.',
      ],
      exemplos: [
        {
          refeicao: 'Café da manhã',
          ideias: [
            'Aveia + leite + ovos mexidos + banana',
            'Pão integral + ovos + queijo branco + suco de laranja',
            'Iogurte + granola + whey',
          ],
        },
        {
          refeicao: 'Almoço',
          ideias: [
            'Arroz + feijão + 2 filés de frango + legumes + azeite',
            'Macarrão + carne moída magra + molho de tomate + parmesão',
            'Batata-doce + ovos + brócolis + azeite',
          ],
        },
        {
          refeicao: 'Pré e pós-treino',
          ideias: [
            'Pré (1h antes): banana com pasta de amendoim + café',
            'Pós: shake de whey + 1 fruta ou refeição completa em até 2h',
            'Tapioca com peito de peru também funciona',
          ],
        },
      ],
      evitar: [
        'Pular refeições "para compensar" um excesso — atrapalha o estímulo.',
        'Achar que precisa de cada suplemento da loja. 80% do resultado vem de comida e treino.',
        'Comer só "fit" sem variedade. Arroz, batata, pão e frutas são amigos da hipertrofia.',
      ],
    },
    habitos: [
      {
        titulo: 'Anote cada treino',
        descricao: 'Caderno ou app: exercício, carga, séries e reps. Você só progride se medir.',
      },
      {
        titulo: 'Durma 7–9h por noite',
        descricao: 'Crescer é privilégio de quem dorme. Quarto escuro e horário regular.',
      },
      {
        titulo: 'Tire foto a cada 4 semanas',
        descricao: 'Mesma luz, mesma pose, mesmo horário. Mostra evolução que o espelho diário esconde.',
      },
      {
        titulo: 'Hidrate-se bem',
        descricao: '35 ml por kg de peso. Músculo é cerca de 75% água.',
      },
    ],
    mitos: [
      {
        mito: 'Sem suplemento não cresce.',
        verdade:
          'Suplemento é praticidade, não mágica. Frango, ovo, arroz e feijão constroem músculo igual a qualquer outra fonte.',
      },
      {
        mito: 'Mulher fica "grandona" treinando pesado.',
        verdade:
          'Mulheres têm hormônios diferentes e ganham massa muito mais devagar. Treino pesado define o corpo, não "incha".',
      },
      {
        mito: 'Tem que sentir muita dor pra crescer.',
        verdade:
          'Dor muscular tardia (DOMS) é só sinal de novidade, não de eficiência. Bom treino pode não doer no dia seguinte.',
      },
      {
        mito: 'Precisa treinar todo dia.',
        verdade:
          'Sem descanso o músculo não cresce. 3–4 sessões bem feitas batem 6 sessões medianas.',
      },
    ],
  },

  saude: {
    objetivo: 'saude',
    titulo: 'Guia de saúde em geral para iniciantes',
    resumo:
      'Saúde de verdade é simples e rotineira: mover-se, comer comida, dormir bem e se relacionar. Não precisa ser atleta — precisa não ser sedentário.',
    passos: [
      {
        titulo: 'Inclua movimento todo dia',
        descricao:
          'Caminhar, subir escada, andar de bike. O alvo é 7–10 mil passos e pelo menos 150 min de cardio leve por semana.',
      },
      {
        titulo: 'Treine força 2x por semana',
        descricao:
          'Musculação ou exercícios com peso do corpo. Protege articulação, postura, ossos e metabolismo.',
      },
      {
        titulo: 'Coma comida de verdade',
        descricao:
          'Arroz, feijão, ovo, frango, peixe, frutas, legumes. Reduza ultraprocessados, sem cortar 100%.',
      },
      {
        titulo: 'Hidrate-se',
        descricao:
          '30–35 ml por kg/dia. Use uma garrafa visível e estabeleça horários de "completar".',
      },
      {
        titulo: 'Durma com horário regular',
        descricao:
          '7–9h por noite, mesmo no fim de semana. Sono é o pilar mais barato e mais ignorado.',
      },
      {
        titulo: 'Faça check-up anual',
        descricao:
          'Glicose, colesterol, vitamina D, ferro, tireoide. Detecta cedo o que pode te custar caro depois.',
      },
    ],
    treino: {
      introducao:
        'Plano simples: 2 sessões de força + 3 caminhadas/cardio leve por semana. Mobilidade no aquecimento. Treino dura 30–45 min.',
      blocos: [
        {
          nome: 'Treino de força (corpo todo) — 2x por semana',
          itens: [
            { exercicio: 'Agachamento (livre ou na parede)', series: '3x12' },
            { exercicio: 'Remada com halteres ou elástico', series: '3x12' },
            { exercicio: 'Flexão (joelho ou pé)', series: '3x10' },
            { exercicio: 'Afundo / passada', series: '3x10 cada perna' },
            { exercicio: 'Prancha frontal', series: '3x30s' },
            { exercicio: 'Glúteo elevado (pelvic bridge)', series: '3x15' },
          ],
        },
        {
          nome: 'Cardio leve (Z2) — 3x por semana',
          itens: [
            { exercicio: 'Caminhada rápida', series: '30–45 min', obs: 'Ritmo de "consigo conversar".' },
            { exercicio: 'Bike leve / ergométrica', series: '30 min' },
            { exercicio: 'Trote leve / corrida intervalada', series: '20 min', obs: 'Quando estiver mais condicionado.' },
          ],
        },
      ],
      notas: [
        'Aqueça 5 min e termine com alongamentos curtos.',
        'Aumente a carga/dificuldade aos poucos. Doer joelho ou coluna não é normal.',
        'Treinar com música, podcast ou um amigo aumenta muito a aderência.',
      ],
    },
    alimentacao: {
      principios: [
        'Prato colorido: vegetais, proteína, carbo integral, gordura boa.',
        'Reduza ultraprocessados (biscoito recheado, salgadinho, embutido) sem proibir.',
        'Inclua peixe 2x por semana. Castanhas, sementes e azeite são bons aliados.',
        'Cozinhe mais em casa — você controla óleo, sal e qualidade.',
      ],
      exemplos: [
        {
          refeicao: 'Café da manhã',
          ideias: [
            'Pão integral + queijo branco + ovo + fruta',
            'Aveia com leite + banana + canela',
            'Iogurte natural + frutas + sementes',
          ],
        },
        {
          refeicao: 'Almoço',
          ideias: [
            'Arroz + feijão + frango/peixe + salada colorida + azeite',
            'Estrogonofe leve com peito de frango + arroz + legumes',
            'Bowl: quinoa + grão-de-bico + atum + folhas + tomate',
          ],
        },
        {
          refeicao: 'Lanches',
          ideias: [
            'Fruta + castanhas',
            'Iogurte + aveia',
            'Sanduíche de pão integral com queijo e tomate',
          ],
        },
      ],
      evitar: [
        'Dieta da moda da semana. Adote o que cabe na sua rotina por anos.',
        'Refrigerante todo dia. Troque aos poucos por água com gás + limão, chá gelado, suco diluído.',
        'Beliscar de pé na cozinha. Sente para comer e perceba o que está comendo.',
      ],
    },
    habitos: [
      {
        titulo: 'Caminhe ao ar livre',
        descricao: 'Sol da manhã + 20 min de caminhada melhoram humor, vitamina D e sono.',
      },
      {
        titulo: 'Sono é prioridade',
        descricao: 'Quarto escuro, sem celular na cama, horário regular.',
      },
      {
        titulo: 'Cozinhe mais',
        descricao: 'Uma vez por semana, prepare 2–3 refeições congeladas. Salva você dos delivery.',
      },
      {
        titulo: 'Cuide da cabeça',
        descricao: 'Conversar, terapia, hobby, espiritualidade. Saúde mental é parte do "fitness".',
      },
    ],
    mitos: [
      {
        mito: 'Idoso não pode pegar peso.',
        verdade:
          'Pelo contrário: musculação é o que mais protege ossos, equilíbrio e independência depois dos 50.',
      },
      {
        mito: 'Suar muito = treino bom.',
        verdade:
          'Suor é só termorregulação. Tem dias quentes e dias frios. O que importa é o estímulo correto.',
      },
      {
        mito: 'Saúde é genética, não dá pra mudar.',
        verdade:
          'Genética é tendência, não destino. Hábitos respondem por boa parte do risco de doenças crônicas.',
      },
    ],
  },
}

export function getGuia(objetivo: ObjetivoId): Guia {
  return GUIAS[objetivo]
}
