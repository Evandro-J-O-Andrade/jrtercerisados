export const APP_CONFIG = {
  name: 'JR Agência de Empregos',
  fullName:
    'JR Agência de Empregos — Recrutamento, Seleção e Banco de Talentos',
  description:
    'Agência de Empregos e Assessoria em Recursos Humanos. Conectamos empresas aos melhores profissionais através de recrutamento, seleção, banco de talentos e hunting. Facilities e terceirização de serviços como solução complementar.',
  version: '1.0.0',
  url: 'https://jrtelempregos.com.br',
  locale: 'pt-BR',
} as const;

export const APP_ENV = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? '+5511968380592',
  gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID ?? '',
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? '',
  appUrl: import.meta.env.VITE_APP_URL ?? 'http://localhost:3000',
  isDevelopment: import.meta.env.VITE_APP_ENV === 'development',
  isProduction: import.meta.env.VITE_APP_ENV === 'production',
} as const;
