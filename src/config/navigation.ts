export interface NavLink {
  label: string;
  href: string;
  auth?: boolean;
}

export const NAVIGATION_LINKS: NavLink[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Parceiros', href: '/parceiros' },
  { label: 'Fornecedores', href: '/fornecedores' },
  { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
  { label: 'Contato', href: '/contato' },
];

export interface DashboardLink {
  label: string;
  href: string;
  icon: string;
}

export const DASHBOARD_LINKS: DashboardLink[] = [
  { label: 'Visão Geral', href: '/dashboard', icon: 'layout-dashboard' },
  { label: 'Clientes', href: '/dashboard/clientes', icon: 'users' },
  { label: 'Parceiros', href: '/dashboard/parceiros', icon: 'handshake' },
  { label: 'Fornecedores', href: '/dashboard/fornecedores', icon: 'truck' },
  { label: 'Currículos', href: '/dashboard/curriculos', icon: 'file-text' },
  { label: 'Usuários', href: '/dashboard/usuarios', icon: 'user-cog' },
  {
    label: 'Configurações',
    href: '/dashboard/configuracoes',
    icon: 'settings',
  },
];
