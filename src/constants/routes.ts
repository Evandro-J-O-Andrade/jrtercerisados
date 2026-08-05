export const ROUTES = {
  home: '/',
  sobre: '/sobre',
  servicos: '/servicos',
  servicoDetalhe: (slug: string) => `/servicos/${slug}`,
  clientes: '/clientes',
  parceiros: '/parceiros',
  fornecedores: '/fornecedores',
  trabalheConosco: '/trabalhe-conosco',
  contato: '/contato',
  login: '/login',
  dashboard: '/dashboard',
} as const;
