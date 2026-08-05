export const COMPANY_STATS = {
  label: 'Anos de experiência',
  value: 15,
} as const;

export const COMPANY_STATS_LIST = [
  { label: 'Anos de experiência', value: 15 },
  { label: 'Profissionais ativos', value: 500 },
  { label: 'Clientes atendidos', value: 200 },
  { label: 'Cidades atendidas', value: 50 },
] as const;

export const SERVICES_STATS = [
  { label: 'Profissionais capacitados', value: 500 },
  { label: 'Contratos ativos', value: 200 },
  { label: 'Taxa de satisfação', value: '98%' },
] as const;

export interface Step {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export const WORK_STEPS: Step[] = [
  {
    step: '01',
    title: 'Avaliação',
    description:
      'Analisamos suas necessidades e avaliamos o melhor plano para sua empresa.',
    icon: 'clipboard-check',
  },
  {
    step: '02',
    title: 'Planejamento',
    description:
      'Elaboramos um plano personalizado com cronograma e recursos definidos.',
    icon: 'calendar',
  },
  {
    step: '03',
    title: 'Execução',
    description:
      'Implementamos os serviços com profissionais treinados e monitoramento constante.',
    icon: 'play',
  },
  {
    step: '04',
    title: 'Monitoramento',
    description:
      'Acompanhamento contínuo e relatórios periódicos para garantir resultados.',
    icon: 'activity',
  },
] as const;

export const TRUST_BADGES = [
  { label: 'Selo de Qualidade', icon: 'award', color: 'gold' },
  { label: 'Certificação ISO', icon: 'shield-check', color: 'navy' },
  { label: '15+ Anos de Mercado', icon: 'clock', color: 'navy' },
] as const;

export const FEATURED_STATS = {
  clients: 200,
  projects: 500,
  professionals: 500,
  cities: 50,
} as const;
