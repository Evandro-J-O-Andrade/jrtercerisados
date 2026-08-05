import type { Service } from '@/types/common';

export const mockServices: Service[] = [
  {
    id: '1',
    slug: 'seguranca-patrimonial',
    title: 'Segurança Patrimonial',
    description:
      'Serviço especializado de segurança patrimonial com profissionais treinados, monitoramento 24h e tecnologia de ponta para proteger seu patrimônio com excelência.',
    benefits: [
      'Monitoramento 24 horas',
      'Rondas programadas e aleatórias',
      'Controle de acesso inteligente',
      'Equipe uniformizada e treinada',
      'Comunicação integrada',
      'Relatórios detalhados',
    ],
    image: '/images/services/seguranca-patrimonial.svg',
    icon: 'shield',
  },
  {
    id: '2',
    slug: 'controle-de-acesso',
    title: 'Controle de Acesso',
    description:
      'Sistema completo de controle de acesso com biometria, catracas inteligentes e gestão digital para garantir a segurança das suas instalações.',
    benefits: [
      'Biometria facial e digital',
      'Catracas inteligentes',
      'Gestão digital de acessos',
      'Registro de entrada e saída',
      'Alertas em tempo real',
      'Integração com câmeras',
    ],
    image: '/images/services/controle-acesso.svg',
    icon: 'lock',
  },
  {
    id: '3',
    slug: 'portaria',
    title: 'Portaria',
    description:
      'Serviço de portaria profissional com recepção, controle de visitantes, gestão de correspondências e atendimento personalizado.',
    benefits: [
      'Recepção 24/7',
      'Controle de visitantes',
      'Gestão de correspondências',
      'Atendimento personalizado',
      'Comunicação com moradores',
      'Monitoramento de entregas',
    ],
    image: '/images/services/portaria.svg',
    icon: 'door-open',
  },
  {
    id: '4',
    slug: 'recepcao',
    title: 'Recepção',
    description:
      'Serviço de recepção executiva com atendimento cordial, organização de agenda e suporte administrativo para sua empresa.',
    benefits: [
      'Atendimento cordial e profissional',
      'Organização de agenda',
      'Suporte administrativo',
      'Gestão de salas de reunião',
      'Acolhimento de clientes',
      'Suporte multimídia',
    ],
    image: '/images/services/recepcao.svg',
    icon: 'user-check',
  },
  {
    id: '5',
    slug: 'limpeza',
    title: 'Limpeza',
    description:
      'Serviço de limpeza profissional com equipe treinada, produtos adequados e metodologia que garante a higiene e conservação do seu ambiente.',
    benefits: [
      'Equipe treinada e uniformizada',
      'Produtos profissionais',
      'Limpeza diária e periódica',
      'Conservação de ambientes',
      'Controle de qualidade',
      'Relatórios de limpeza',
    ],
    image: '/images/services/limpeza.svg',
    icon: 'sparkles',
  },
  {
    id: '6',
    slug: 'zeladoria',
    title: 'Zeladoria',
    description:
      'Serviço de zeladoria com manutenção preventiva, conservação de instalações e suporte operacional para condomínios e empresas.',
    benefits: [
      'Manutenção preventiva',
      'Conservação de instalações',
      'Suporte operacional',
      'Pequenos reparos',
      'Gestão de áreas comuns',
      'Inspeções regulares',
    ],
    image: '/images/services/zeladoria.svg',
    icon: 'wrench',
  },
  {
    id: '7',
    slug: 'facilities',
    title: 'Facilities',
    description:
      'Gestão completa de facilities com manutenção predial, gestão de contratos, monitoramento de indicadores e otimização de custos.',
    benefits: [
      'Gestão completa de instalações',
      'Manutenção predial',
      'Otimização de custos',
      'Gestão de contratos',
      'Indicadores de desempenho',
      'Relatórios gerenciais',
    ],
    image: '/images/services/facilities.svg',
    icon: 'building',
  },
  {
    id: '8',
    slug: 'monitoramento',
    title: 'Monitoramento',
    description:
      'Sistema de monitoramento 24h com câmeras, sensores e centro de comando para vigilância em tempo real do seu patrimônio.',
    benefits: [
      'Câmeras HD e IP',
      'Sensores de presença',
      'Centro de comando 24h',
      'Gravação em nuvem',
      'Alertas instantâneos',
      'Acesso remoto',
    ],
    image: '/images/services/monitoramento.svg',
    icon: 'monitor',
  },
];

export function mockGetServices(): Service[] {
  return mockServices;
}

export function mockGetServiceBySlug(slug: string): Service | undefined {
  return mockServices.find((s) => s.slug === slug);
}
