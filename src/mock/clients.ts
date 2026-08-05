export const CLIENTS_LIST = [
  {
    id: 'client-01',
    name: 'Empresa Alpha',
    logo: '/images/clients/alpha.svg',
    segment: 'Financeiro',
  },
  {
    id: 'client-02',
    name: 'Centro Empresarial Beta',
    logo: '/images/clients/beta.svg',
    segment: 'Imobiliário',
  },
  {
    id: 'client-03',
    name: 'Indústria Gama',
    logo: '/images/clients/gama.svg',
    segment: 'Manufatura',
  },
  {
    id: 'client-04',
    name: 'Shopping Delta',
    logo: '/images/clients/delta.svg',
    segment: 'Varejo',
  },
  {
    id: 'client-05',
    name: 'Corp Epslon',
    logo: '/images/clients/epslon.svg',
    segment: 'Tecnologia',
  },
  {
    id: 'client-06',
    name: 'Conjunto Zeta',
    logo: '/images/clients/zeta.svg',
    segment: 'Condomínio',
  },
] as const;

export const CLIENT_TESTIMONIALS = [
  {
    id: 'testimonial-01',
    name: 'Carlos Silva',
    role: 'Diretor de Segurança',
    company: 'Empresa Alpha',
    image: '/images/team/carlos-silva.svg',
    quote:
      'A JSTerceirizados transformou nossa operação de segurança. Redução de 80% em incidentes.',
    rating: 5,
  },
  {
    id: 'testimonial-02',
    name: 'Ana Costa',
    role: 'Gerente de Facilities',
    company: 'Corp Epslon',
    image: '/images/team/ana-costa.svg',
    quote:
      'Profissionais altamente capacitados e tecnologia de ponta. Recomendamos sem hesitar.',
    rating: 5,
  },
  {
    id: 'testimonial-03',
    name: 'Marcos Lima',
    role: 'Sindico',
    company: 'Conjunto Zeta',
    image: '/images/team/marcos-lima.svg',
    quote:
      'Excelente serviço de portaria e zeladoria. Nossa comunidade nunca esteve tão segura.',
    rating: 5,
  },
] as const;

export const CLIENT_STATS = [
  { label: 'Clientes Premium', value: 200 },
  { label: 'Taxa de Retenção', value: '95%' },
  { label: 'Projetos Concluídos', value: 500 },
] as const;
