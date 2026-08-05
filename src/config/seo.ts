export const SEO_CONFIG = {
  title: 'JSTerceirizados — Segurança, Zeladoria e Facilities',
  description:
    'Plataforma SaaS para empresas de terceirização de serviços: segurança patrimonial, controle de acesso, portaria, limpeza, zeladoria e facilities.',
  keywords: [
    'terceirização',
    'segurança patrimonial',
    'portaria',
    'zeladoria',
    'limpeza',
    'facilities',
    'controle de acesso',
    'recrutamento',
    'SaaS',
    'empresa de terceirização',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jstercerizados.com.br',
    siteName: 'JSTerceirizados',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jstercerizados',
  },
  robots: {
    index: true,
    follow: true,
  },
} as const;

export interface SeoMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
}

export function getSeoMeta(meta: SeoMeta): Record<string, string> {
  const base = SEO_CONFIG;
  return {
    title: meta.title ?? base.title,
    description: meta.description ?? base.description,
    keywords: (meta.keywords ?? base.keywords).join(', '),
    'og:title': meta.title ?? base.title,
    'og:description': meta.description ?? base.description,
    'og:type': base.openGraph.type,
    'og:locale': base.openGraph.locale,
    'og:url': base.openGraph.url,
    'og:site_name': base.openGraph.siteName,
    'twitter:card': base.twitter.card,
    'twitter:site': base.twitter.site,
  };
}
