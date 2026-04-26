import type { Dica } from '../types'

export const DICAS: Dica[] = [
  // ========== PERDER PESO ==========
  {
    id: 'pp-1',
    titulo: 'Déficit pequeno, resultado grande',
    texto:
      'Cortar 300–500 kcal por dia já é o suficiente para emagrecer de forma saudável. Cortes muito grandes te fazem desistir.',
    categoria: 'alimentacao',
    objetivos: ['perder-peso'],
  },
  {
    id: 'pp-2',
    titulo: 'Proteína em toda refeição',
    texto:
      'Proteína sacia, preserva massa magra e gasta mais calorias para ser digerida. Mire 1,6–2,0 g por kg de peso.',
    categoria: 'alimentacao',
    objetivos: ['perder-peso', 'ganhar-massa'],
  },
  {
    id: 'pp-3',
    titulo: 'Caminhar todo dia muda tudo',
    texto:
      '7–10 mil passos diários aumentam seu gasto calórico sem te deixar exausto. É o "treino invisível" do emagrecimento.',
    categoria: 'habito',
    objetivos: ['perder-peso', 'saude'],
  },
  {
    id: 'pp-4',
    titulo: 'Peso treinado emagrece',
    texto:
      'Musculação mantém sua massa magra durante a dieta. Sem ela, você perde peso mas também músculo, e fica flácido.',
    categoria: 'treino',
    objetivos: ['perder-peso'],
  },
  {
    id: 'pp-5',
    titulo: 'Líquido também tem caloria',
    texto:
      'Sucos, refrigerantes, cafés cremosos e álcool somam calorias rápido. Prefira água, café puro e chá.',
    categoria: 'alimentacao',
    objetivos: ['perder-peso'],
  },
  {
    id: 'pp-6',
    titulo: 'Não confie no espelho do dia',
    texto:
      'Peso e barriga oscilam por água, sal e ciclo. Tire foto e meça medidas a cada 2–4 semanas. Tendência > dia.',
    categoria: 'mito',
    objetivos: ['perder-peso'],
  },
  {
    id: 'pp-7',
    titulo: 'Cardio é bônus, não base',
    texto:
      'Cardio queima calorias, mas comida e força são a base. Use cardio para acelerar, não para "compensar" excessos.',
    categoria: 'mito',
    objetivos: ['perder-peso'],
  },
  {
    id: 'pp-8',
    titulo: 'Durma para emagrecer',
    texto:
      'Sono ruim aumenta fome, cortisol e gordura abdominal. Dormir 7–9h faz tanto quanto treinar.',
    categoria: 'habito',
    objetivos: ['perder-peso', 'saude'],
  },
  {
    id: 'pp-9',
    titulo: 'Comece pelo prato',
    texto:
      'Antes de academia ou suplemento, ajuste o prato: metade vegetais, um terço proteína, restante carbo bom.',
    categoria: 'alimentacao',
    objetivos: ['perder-peso', 'saude'],
  },
  {
    id: 'pp-10',
    titulo: 'Constância > intensidade',
    texto:
      'Treinar 4 vezes por semana por meses vence treinar todo dia por 2 semanas e desistir. Comece pequeno.',
    categoria: 'motivacao',
    objetivos: ['perder-peso', 'ganhar-massa', 'saude'],
  },

  // ========== GANHAR MASSA ==========
  {
    id: 'gm-1',
    titulo: 'Sobra calórica controlada',
    texto:
      'Para crescer, coma 200–400 kcal a mais por dia. Mais que isso vira gordura. Menos que isso, não estimula massa.',
    categoria: 'alimentacao',
    objetivos: ['ganhar-massa'],
  },
  {
    id: 'gm-2',
    titulo: 'Treino A/B é tudo que iniciante precisa',
    texto:
      'Dois treinos cobrindo o corpo todo, alternando 3–4x na semana. Simples, eficiente e progressivo.',
    categoria: 'treino',
    objetivos: ['ganhar-massa'],
  },
  {
    id: 'gm-3',
    titulo: 'Sobrecarga progressiva',
    texto:
      'Adicione carga, repetição ou qualidade de execução a cada semana. Sem progressão, sem hipertrofia.',
    categoria: 'treino',
    objetivos: ['ganhar-massa'],
  },
  {
    id: 'gm-4',
    titulo: 'Foco em compostos',
    texto:
      'Agachamento, supino, remada, levantamento terra e desenvolvimento entregam mais músculo por minuto.',
    categoria: 'treino',
    objetivos: ['ganhar-massa'],
  },
  {
    id: 'gm-5',
    titulo: 'Proteína é prioridade',
    texto:
      'Mire 1,6–2,2 g de proteína por kg de peso, distribuída em 3–5 refeições. Whey só ajuda se faltar.',
    categoria: 'alimentacao',
    objetivos: ['ganhar-massa'],
  },
  {
    id: 'gm-6',
    titulo: 'Carboidrato é seu amigo',
    texto:
      'Carbo dá energia para treinar pesado e poupa proteína. Arroz, batata, mandioca, aveia, frutas. Sem medo.',
    categoria: 'alimentacao',
    objetivos: ['ganhar-massa'],
  },
  {
    id: 'gm-7',
    titulo: 'Crescer demora',
    texto:
      'Iniciante ganha 0,5–1 kg de músculo por mês no melhor cenário. Foto a cada 4 semanas, não toda semana.',
    categoria: 'mito',
    objetivos: ['ganhar-massa'],
  },
  {
    id: 'gm-8',
    titulo: 'Suplemento não faz milagre',
    texto:
      'Whey é só proteína em pó prática. Creatina ajuda. Pré-treino é cafeína cara. Nada substitui treino + comida.',
    categoria: 'mito',
    objetivos: ['ganhar-massa'],
  },
  {
    id: 'gm-9',
    titulo: 'Descanse para crescer',
    texto:
      'Músculo cresce no descanso, não no treino. 48h por grupo muscular e 7–9h de sono são inegociáveis.',
    categoria: 'habito',
    objetivos: ['ganhar-massa'],
  },
  {
    id: 'gm-10',
    titulo: 'Forma antes de carga',
    texto:
      'Carga grande com forma ruim machuca e estimula menos. Aprenda o movimento leve, depois aumente.',
    categoria: 'treino',
    objetivos: ['ganhar-massa'],
  },

  // ========== SAÚDE EM GERAL ==========
  {
    id: 's-1',
    titulo: 'Mover é o novo remédio',
    texto:
      'Sair do sofá já reduz risco de quase toda doença crônica. Comece com 20 min/dia de algo que você gosta.',
    categoria: 'motivacao',
    objetivos: ['saude'],
  },
  {
    id: 's-2',
    titulo: 'Força protege a vida toda',
    texto:
      'Após os 30, perdemos massa muscular todo ano. Musculação 2x/semana freia esse processo e protege as articulações.',
    categoria: 'treino',
    objetivos: ['saude'],
  },
  {
    id: 's-3',
    titulo: 'Cardio Z2 é poderoso',
    texto:
      'Caminhada, bike leve ou trote em ritmo de "consigo conversar". 150 min/semana melhora coração e cabeça.',
    categoria: 'treino',
    objetivos: ['saude'],
  },
  {
    id: 's-4',
    titulo: 'Comida de verdade',
    texto:
      'Se sua avó reconheceria, provavelmente é boa. Reduza ultraprocessados sem precisar virar santo.',
    categoria: 'alimentacao',
    objetivos: ['saude', 'perder-peso'],
  },
  {
    id: 's-5',
    titulo: 'Hidratação simples',
    texto:
      '30–35 ml por kg de peso por dia. Use uma garrafa de 750 ml e preencha 3–4 vezes. Pronto.',
    categoria: 'habito',
    objetivos: ['saude', 'perder-peso', 'ganhar-massa'],
  },
  {
    id: 's-6',
    titulo: 'Sono é base',
    texto:
      'Dormir mal piora humor, fome, glicemia e treino. Horário regular e quarto escuro são o protocolo.',
    categoria: 'habito',
    objetivos: ['saude'],
  },
  {
    id: 's-7',
    titulo: 'Postura se treina',
    texto:
      'Não é "corrigir": é fortalecer. Prancha, remada e exercícios de mobilidade torácica resolvem 80% das dores.',
    categoria: 'treino',
    objetivos: ['saude'],
  },
  {
    id: 's-8',
    titulo: 'Stress mata mais que comida',
    texto:
      'Cortisol crônico aumenta gordura, doença e desânimo. Caminhar ao ar livre, respirar e falar com gente curam.',
    categoria: 'habito',
    objetivos: ['saude'],
  },
  {
    id: 's-9',
    titulo: 'Exames anuais',
    texto:
      'Glicose, colesterol, vitamina D, ferro e tireoide. 30 min de coleta por ano evitam anos de problema.',
    categoria: 'habito',
    objetivos: ['saude'],
  },
  {
    id: 's-10',
    titulo: 'Pequeno todo dia bate grande às vezes',
    texto:
      '10 min de caminhada todo dia > 1h só de domingo. Saúde é hábito, não evento.',
    categoria: 'motivacao',
    objetivos: ['saude'],
  },
]

export function getDicasPorObjetivo(objetivoId: string | null, limite?: number) {
  const lista = objetivoId
    ? DICAS.filter((d) => d.objetivos.includes(objetivoId as Dica['objetivos'][number]))
    : DICAS
  return typeof limite === 'number' ? lista.slice(0, limite) : lista
}
