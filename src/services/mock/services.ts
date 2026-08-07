import type { Service } from '@/types/common';

export const mockServices: Service[] = [
  // ── Para Empresas (Recursos Humanos) ───────────────────
  {
    id: '1',
    slug: 'recrutamento-selecao',
    title: 'Recrutamento e Seleção',
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
    id: '9',
    slug: 'mao-de-obra-temporaria',
    title: 'Mão de Obra Temporária',
    description:
      'Solução rápida e flexível para picos de demanda, substituições e projetos. Conectamos sua empresa a profissionais qualificados para períodos específicos.',
    benefits: [
      'Contratação flexível por período',
      'Profissionais pré-qualificados',
      'Redução de custos trabalhistas',
      'Escalabilidade sob demanda',
      'Compliance total com a Lei 6.019/74',
      'Gestão completa incluída',
    ],
    image: '/images/services/temporaria.svg',
    icon: 'clock',
  },
  {
    id: '11',
    slug: 'mao-de-obra-efetiva',
    title: 'Mão de Obra Efetiva',
    description:
      'Contratação de profissionais para posições permanentes com um processo seletivo completo e acompanhamento pós-contratação para garantir a adaptação.',
    benefits: [
      'Processo seletivo completo',
      'Acompanhamento pós-contratação',
      'Garantia de substituição',
      'Redução de turnover',
      'Alinhamento com a cultura da empresa',
    ],
    image: '/images/services/efetiva.svg',
    icon: 'award',
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
    id: '12',
    slug: 'assessoria-rh',
    title: 'Assessoria em RH',
    description:
      'Tenha um profissional de RH dedicado à sua empresa para cuidar de processos seletivos, gestão de pessoas e consultoria estratégica.',
    benefits: [
      'Profissional de RH dedicado',
      'Otimização de processos internos',
      'Consultoria em gestão de pessoas',
      'Redução de custos com departamento de RH',
      'Suporte em legislação trabalhista',
    ],
    image: '/images/services/assessoria.svg',
    icon: 'briefcase',
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

  // ── Soluções Operacionais (Facilities - Secundário) ─────
  {
    id: '10',
    slug: 'facilities',
    title: 'Facilities',
    description:
      'Como solução complementar, oferecemos terceirização de serviços operacionais: limpeza, segurança, portaria, jardinagem, recepção e zeladoria.',
    benefits: [
      'Redução de custos operacionais',
      'Profissionais treinados e certificados',
      'Gestão completa de equipes',
      'Conformidade legal garantida',
      'SLA e KPIs de qualidade',
      'Foco no seu core business',
    ],
    image: '/images/services/facilities.svg',
    icon: 'building',
  },

  // ── Terceirização (mantida) ─────────────────────────────
  {
    id: '5',
    slug: 'seguranca-patrimonial',
    title: 'Controle de Acesso e Portaria',
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
    slug: 'limpeza-conservacao',
    title: 'Limpeza e Conservação',
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
    id: '8',
    slug: 'zeladoria-manutencao',
    title: 'Zeladoria e Manutenção',
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

  // ── Para Candidatos ──────────────────────────────────────
  {
    id: '20',
    slug: 'cadastro-curriculo',
    title: 'Cadastro de Currículo',
    description:
      'Cadastre seu currículo gratuitamente e entre no nosso banco de talentos. Mantenha seus dados sempre atualizados.',
    benefits: [
      'Cadastro rápido e gratuito',
      'Currículo visível para empresas parceiras',
      'Atualização de dados',
      'Alertas de novas vagas',
      'Acesso ao banco de talentos',
    ],
    image: '/images/services/banco-talentos.svg',
    icon: 'users',
  },
  {
    id: '21',
    slug: 'busca-vagas',
    title: 'Busca de Vagas',
    description:
      'Encontre oportunidades alinhadas ao seu perfil profissional. Filtre por área, cidade e tipo de contrato.',
    benefits: [
      'Busca por cargo e cidade',
      'Filtros avançados',
      'Vagas atualizadas diariamente',
      'Candidatura simplificada',
      'Notificações via WhatsApp',
    ],
    image: '/images/services/recrutamento.svg',
    icon: 'search',
  },
  {
    id: '22',
    slug: 'alertas-emprego',
    title: 'Alertas de Emprego',
    description:
      'Receba notificações de novas vagas compatíveis com seu perfil diretamente pelo WhatsApp.',
    benefits: [
      'Alertas personalizados',
      'Notificação via WhatsApp',
      'Oportunidades em tempo real',
      'Filtros por preferência',
      'Sem spam',
    ],
    image: '/images/services/banco-talentos.svg',
    icon: 'phone',
  },
  {
    id: '23',
    slug: 'orientacao-profissional',
    title: 'Orientação Profissional',
    description:
      'Receba dicas de carreira, CV e preparação para processos seletivos da nossa equipe de RH.',
    benefits: [
      'Revisão de currículo',
      'Dicas de entrevista',
      'Orientação de carreira',
      'Preparação para processos',
      'Equipe especializada',
    ],
    image: '/images/services/avaliacao-perfil.svg',
    icon: 'award',
  },
  {
    id: '24',
    slug: 'atualizacao-curriculo',
    title: 'Atualização de Currículo',
    description:
      'Mantenha seu currículo sempre atualizado e destaque-se para nossas empresas parceiras.',
    benefits: [
      'Atualização contínua',
      'Destaque no banco de talentos',
      'Maior visibilidade',
      'Notificações de vagas compatíveis',
      'Suporte da equipe',
    ],
    image: '/images/services/banco-talentos.svg',
    icon: 'clipboard-check',
  },
];

export function mockGetServices(): Service[] {
  return mockServices;
}

export function mockGetServiceBySlug(slug: string): Service | undefined {
  return mockServices.find((s) => s.slug === slug);
}
