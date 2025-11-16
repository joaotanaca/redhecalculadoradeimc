import { IMCClassification } from './types';

export const IMC_CLASSIFICATIONS: Record<string, IMCClassification> = {
  underweight: {
    label: 'Peso baixo',
    range: 'Abaixo de 18,5',
    color: '#3b82f6',
    explanation: 'IMC abaixo do recomendado para sua altura.',
    supportText: 'Seu IMC indica peso abaixo do recomendado. Considere consultar um(a) nutricionista para avaliar sua alimentação e saúde — pequenas mudanças podem ajudar.',
  },
  normal: {
    label: 'Peso normal',
    range: '18,5 a 24,9',
    color: '#10b981',
    explanation: 'Você está na faixa saudável de IMC.',
    supportText: 'Você está na faixa saudável. Mantenha hábitos equilibrados e rotina de bem-estar.',
  },
  overweight: {
    label: 'Sobrepeso',
    range: '25,0 a 29,9',
    color: '#f59e0b',
    explanation: 'IMC na faixa de sobrepeso.',
    supportText: 'IMC na faixa de sobrepeso. Ajustes alimentares e mais movimento podem reduzir riscos. Busque orientação profissional.',
  },
  obesity1: {
    label: 'Obesidade I',
    range: '30,0 a 34,9',
    color: '#f97316',
    explanation: 'Obesidade grau I.',
    supportText: 'Obesidade grau I. Procure acompanhamento médico e nutricional para montar um plano seguro.',
  },
  obesity2: {
    label: 'Obesidade II',
    range: '35,0 a 39,9',
    color: '#ef4444',
    explanation: 'Obesidade grau II.',
    supportText: 'Obesidade grau II. Recomendado acompanhamento médico e plano multidisciplinar para reduzir riscos.',
  },
  obesity3: {
    label: 'Obesidade III',
    range: '40,0 ou mais',
    color: '#dc2626',
    explanation: 'Obesidade grau III.',
    supportText: 'Obesidade grau III. Procure avaliação médica com prioridade. Existe suporte profissional e tratamentos — você não precisa enfrentar isso sozinho(a).',
  },
};

export const TIPS = [
  'Procure um(a) nutricionista para orientação personalizada',
  'Aumente a atividade física gradualmente',
  'Faça uma checagem médica regular',
];

export const SAFETY_MESSAGE = 'Essas informações são de caráter educativo. Consulte um profissional de saúde para aconselhamento personalizado.';

export const IMC_INFO = 'IMC = peso ÷ (altura²). Mede a relação entre peso e altura.';



