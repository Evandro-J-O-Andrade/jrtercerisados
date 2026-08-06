import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Send,
  Linkedin,
  Youtube,
  Heart,
  Globe,
  Map,
} from 'lucide-react';
import { COMPANY, SOCIAL_LINKS } from '@/config';
import { IMAGES } from '@/config/images';

const footerEcosystem = [
  {
    label: 'Empresa',
    links: [
      { label: 'Sobre Nós', href: '/sobre' },
      { label: 'Clientes', href: '/clientes' },
      { label: 'Parceiros', href: '/parceiros' },
      { label: 'Fornecedores', href: '/fornecedores' },
    ],
  },
  {
    label: 'Atendimento',
    links: [
      { label: 'Suporte', href: '/suporte' },
      { label: 'FAQ', href: '/faq' },
      { label: 'WhatsApp', href: SOCIAL_LINKS.whatsapp },
      { label: 'E-mail', href: `mailto:${COMPANY.email}` },
    ],
  },
  {
    label: 'Trabalhe Conosco',
    links: [
      { label: 'Cadastro Profissional', href: '/trabalhe-conosco' },
      { label: 'Processo Seletivo', href: '/processo-seletivo' },
    ],
  },
];

const socialLinks = [
  {
    label: 'WhatsApp',
    href: SOCIAL_LINKS.whatsapp,
    icon: Phone,
    color: '#25D366',
    glow: 'rgba(37,211,102,0.4)',
  },
  {
    label: 'Instagram',
    href: SOCIAL_LINKS.instagram,
    icon: Instagram,
    color: '#E4405F',
    glow: 'rgba(228,64,95,0.4)',
  },
  {
    label: 'Facebook',
    href: SOCIAL_LINKS.facebook,
    icon: Facebook,
    color: '#1877F2',
    glow: 'rgba(24,119,242,0.4)',
  },
  {
    label: 'TikTok',
    href: SOCIAL_LINKS.tiktok,
    icon: Send,
    color: '#FE2C55',
    glow: 'rgba(254,44,85,0.4)',
  },
  {
    label: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: Linkedin,
    color: '#0A66C2',
    glow: 'rgba(10,102,194,0.4)',
  },
  {
    label: 'YouTube',
    href: SOCIAL_LINKS.youtube,
    icon: Youtube,
    color: '#FF0000',
    glow: 'rgba(255,0,0,0.4)',
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border/50 bg-surface relative border-t dark:bg-[#050914]">
      {/* Decorative top glow */}
      <div className="via-primary/40 via-primary/40 dark:via-primary/40 absolute -top-px right-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent" />

      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        {/* Top section with brand, ecosystem, and contact */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="space-y-5 lg:col-span-3">
            <Link to="/" className="flex items-center gap-4">
              <div className="border-border/50 shadow-glow bg-primary/10 relative rounded-2xl border p-2 dark:border-white/10 dark:bg-white/5">
                <img
                  src={IMAGES.logo.dark}
                  alt={COMPANY.name}
                  className="drop-shadow-glow dark:drop-shadow-glow h-14 w-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  <span className="text-primary drop-shadow-glow">JS</span>{' '}
                  <span className="text-foreground">Tercerizados</span>
                </h2>
                <p className="text-muted-foreground mt-1 text-xs">
                  SaaS para Gestão de Terceirização
                </p>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              {COMPANY.description}
            </p>

            {/* Social Section */}
            <div className="mt-6">
              <h4 className="text-foreground mb-2 text-sm font-bold">
                Siga a JS Terceirizados
              </h4>
              <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
                Acompanhe nossas soluções, bastidores e novidades.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.15,
                      y: -6,
                      boxShadow: `0 0 30px ${social.glow}`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="light:border-black/10 light:bg-black/5 relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 dark:border-white/10 dark:bg-white/5"
                    aria-label={social.label}
                  >
                    <social.icon
                      className="h-6 w-6 transition-colors duration-300"
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Ecosystem Map */}
          <div className="lg:col-span-5">
            <h4 className="text-primary mb-6 text-sm font-bold tracking-wider uppercase">
              Mapa do Ecossistema
            </h4>
            <div className="space-y-6">
              {footerEcosystem.map((section) => (
                <div key={section.label}>
                  <h5 className="text-foreground mb-3 text-sm font-semibold">
                    {section.label}
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors duration-200"
                      >
                        <span className="text-primary/50 h-1.5 w-1.5 rounded-full bg-current" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-primary mb-6 text-sm font-bold tracking-wider uppercase">
              Fale Conosco
            </h4>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}
                className="border-border/50 bg-primary/5 hover:border-primary/30 group flex items-center gap-4 rounded-xl border p-4 transition-all duration-300"
              >
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-foreground text-sm font-semibold">
                    Comercial
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {COMPANY.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="border-border/50 bg-primary/5 hover:border-primary/30 group flex items-center gap-4 rounded-xl border p-4 transition-all duration-300"
              >
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-foreground text-sm font-semibold">
                    E-mail Comercial
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {COMPANY.email}
                  </p>
                </div>
              </a>

              <div className="border-border/50 bg-primary/5 flex items-center gap-4 rounded-xl border p-4">
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-foreground text-sm font-semibold">
                    Endereço
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {COMPANY.address.street}, {COMPANY.address.number}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {COMPANY.address.neighborhood}, {COMPANY.address.city}
                    /SP
                    {COMPANY.address.complement &&
                      `, ${COMPANY.address.complement}`}
                  </p>
                </div>
              </div>

              {/* Map Card */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${COMPANY.address.street}, ${COMPANY.address.number}, ${COMPANY.address.city}, ${COMPANY.address.state}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border/50 bg-primary/5 hover:border-primary/30 group flex items-center gap-4 rounded-xl border p-4 transition-all duration-300"
              >
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                  <Map className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground text-sm font-semibold">
                    Ver no Mapa
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {COMPANY.address.city} - SP
                  </p>
                </div>
                <Globe className="text-primary h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Hours */}
            <div className="border-border/50 bg-primary/5 mt-6 rounded-xl border p-4">
              <h5 className="text-foreground mb-3 text-sm font-bold">
                Horário de Atendimento
              </h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="text-primary h-4 w-4" />
                  <span className="text-muted-foreground">
                    Seg a Sex, 08h às 18h
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="text-primary h-4 w-4" />
                  <span className="text-muted-foreground">Sáb, 08h às 12h</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="text-muted-foreground h-4 w-4" />
                  <span className="text-muted-foreground">
                    Domingo — Fechado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-border mt-16 flex flex-col items-center justify-between gap-6 border-t pt-10 sm:flex-row">
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Heart className="text-primary h-3.5 w-3.5" />
            <span>
              © {currentYear} JSTerceirizados. Todos os direitos reservados.
            </span>
          </div>
          <div className="text-muted-foreground flex flex-wrap justify-center gap-4 text-xs">
            <Link
              to="/privacidade"
              className="hover:text-primary transition-colors"
            >
              Privacidade
            </Link>
            <Link to="/termos" className="hover:text-primary transition-colors">
              Termos
            </Link>
            <Link to="/lgpd" className="hover:text-primary transition-colors">
              LGPD
            </Link>
            <Link
              to="/cookies"
              className="hover:text-primary transition-colors"
            >
              Cookies
            </Link>
          </div>
          <p className="text-muted-foreground text-xs">
            Desenvolvido por{' '}
            <span className="text-foreground font-medium">
              New Wave Sistemas Digital Solutions
            </span>
          </p>
        </div>
      </div>

      {/* Decorative SVG wave at bottom */}
      <div className="absolute right-0 bottom-0 left-0">
        <svg
          viewBox="0 0 1440 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 10 C360 0 720 20 1080 10 C1260 4 1380 16 1440 8 L1440 20 L0 20 Z"
            fill="hsl(43,74%,40%)"
            opacity="0.05"
          />
        </svg>
      </div>
    </footer>
  );
}
