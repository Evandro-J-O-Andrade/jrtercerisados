import type { Service } from '@/types/common';

export const mockServices: Service[] = [
  // ── Recursos Humanos ───────────────────────────────────
  {
    id: '1',
    slug: 'recrutamento-selecao',
    title: 'Recrutamento & Seleção',
    description:
      'Serviço completo de recrutamento e seleção de profissionais qualificados para sua empresa. Encontramos os melhores talentos para as posições estratégicas da sua organização.',
    benefits: [
      'Acesso ao nosso banco de talentos',
      'Triagem inicial qualificada',
      'Avaliação de competências técnicas',
      'Processo seletivo agile',
      'Garantia de contratação',
      'Suporte até a contratação',
    ],
    image: '/images/services/recrutamento.svg',
    icon: 'users',
  },
  {
    id: '2',
    slug: 'banco-de-talentos',
    title: 'Banco de Talentos',
    description:
      'Base de currículos qualificados disponíveis para suas vagas. Acesso a profissionais pré-selecionados e prontos para novos desafios.',
    benefits: [
      'Currículos pré-qualificados',
      'Busca por competências',
      'Filtragem avançada',
      'Contato direto com candidatos',
      'Agilidade no recrutamento',
      'Redução de custos',
    ],
    image: '/images/services/banco-talentos.svg',
    icon: 'database',
  },
  {
    id: '3',
    slug: 'avaliacao-perfil',
    title: 'Avaliação de Perfil',
    description:
      'Avaliação psicométrica, testes técnicos e entrevistas estruturadas para garantir que o candidato certo esteja no lugar certo.',
    benefits: [
      'Testes técnicos online',
      'Avaliação comportamental',
      'Entrevistas estruturadas',
      'Análise de competências',
      'Score de adequação',
      'Recomendações personalizadas',
    ],
    image: '/images/services/avaliacao-perfil.svg',
    icon: 'target',
  },
  {
    id: '4',
    slug: 'hunting',
    title: 'Executive Search (Hunting)',
    description:
      'Busca discreta e direcionada para cargos de alta performance e liderança. Encontramos profissionais que não estão no mercado, mas que são ideais para sua vaga.',
    benefits: [
      'Busca discreta e confidencial',
      'Headhunting especializado',
      'Acesso a perfis raros',
      'Validação de competências',
      'Oferta personalizada',
      'Garantia de resultado',
    ],
    image: '/images/services/hunting.svg',
    icon: 'search',
  },
  {
    id: '9',
    slug: 'mao-de-obra-temporaria',
    title: 'Mão de Obra Temporária',
    description:
      'Solução rápida e flexível para picos de demanda. Conectamos sua empresa a profissionais qualificados para períodos específicos, sem custos de contratação CLT.',
    benefits: [
      'Contratação flexível por período',
      'Profissionais pré-qualificados',
      'Redução de custos trabalhistas',
      'Escalabilidade sob demanda',
      'Compliance total',
      'Gestão completa incluída',
    ],
    image: '/images/services/recrutamento.svg',
    icon: 'users',
  },
  {
    id: '10',
    slug: 'terceirizacao-de-servicos',
    title: 'Terceirização de Serviços',
    description:
      'Como solução complementar, oferecemos terceirização de serviços operacionais: limpeza, segurança, portaria e zeladoria. Tudo com gestão profissional e conformidade legal.',
    benefits: [
      'Redução de custos operacionais',
      'Profissionais treinados e certificados',
      'Gestão completa de equipes',
      'Conformidade legal garantida',
      'SLA e KPIs de qualidade',
      'Suporte 24h dedicado',
    ],
    image: '/images/services/facilities.svg',
    icon: 'building',
  },

  // ── Terceirização (mantida) ─────────────────────────────
  {
    id: '5',
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
    id: '6',
    slug: 'limpeza',
    title: 'Limpeza Profissional',
    description:
      'Serviço de limpeza profissional com equipe treinada, produtos ecológicos e metodologia que garante higiene e conservação do seu ambiente.',
    benefits: [
      'Equipe treinada e uniformizada',
      'Produtos ecológicos',
      'Limpeza diária e periódica',
      'Conservação de ambientes',
      'Controle de qualidade',
      'Relatórios de limpeza',
    ],
    image: '/images/services/limpeza.svg',
    icon: 'sparkles',
  },
  {
    id: '7',
    slug: 'portaria',
    title: 'Portaria Inteligente',
    description:
      'Serviço de portaria profissional com recepção, controle de visitantes, gestão de correspondências e atendimento personalizado com tecnologia de ponta.',
    benefits: [
      'Recepção 24/7',
      'Controle de visitantes digital',
      'Gestão de correspondências',
      'Atendimento personalizado',
      'Integração com controle de acesso',
      'Monitoramento de entregas',
    ],
    image: '/images/services/portaria.svg',
    icon: 'door-open',
  },
  {
    id: '8',
    slug: 'zeladoria',
    title: 'Zeladoria Preventiva',
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
];

export function mockGetServices(): Service[] {
  return mockServices;
}

export function mockGetServiceBySlug(slug: string): Service | undefined {
  return mockServices.find((s) => s.slug === slug);
}
