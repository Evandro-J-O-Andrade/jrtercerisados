export const APP_CONFIG = {
  name: 'JSTerceirizados',
  fullName:
    'JSTerceirizados — Plataforma SaaS para Gestão de Empresas de Terceirização',
  description:
    'Plataforma web moderna para empresas de prestação de serviços de segurança patrimonial, controle de acesso, portaria, zeladoria, limpeza e facilities.',
  version: '0.1.0',
  url: 'https://jstercerizados.com.br',
  locale: 'pt-BR',
} as const;

export const APP_ENV = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? '+5511910669810',
  gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID ?? '',
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? '',
  appUrl: import.meta.env.VITE_APP_URL ?? 'http://localhost:3000',
  isDevelopment: import.meta.env.VITE_APP_ENV === 'development',
  isProduction: import.meta.env.VITE_APP_ENV === 'production',
} as const;
