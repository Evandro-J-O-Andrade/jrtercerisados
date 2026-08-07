import { COMPANY } from './company';

export const SEO_CONFIG = {
  title: `${COMPANY.name} — Recrutamento, Seleção e Banco de Talentos`,
  description: COMPANY.description,
  keywords: [
    'recrutamento',
    'seleção de pessoas',
    'banco de talentos',
    'hunting de executivos',
    'mão de obra temporária',
    'agência de empregos',
    'RH',
    'vagas de emprego',
    'terceirização de serviços',
    'facilities',
    'segurança patrimonial',
    'limpeza profissional',
    'portaria',
    'zeladoria',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jrtelempregos.com.br',
    siteName: COMPANY.name,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jrtelempregos',
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
