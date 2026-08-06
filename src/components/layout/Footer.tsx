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
  Briefcase,
  Shield,
  Users,
  Wrench,
  Heart,
} from 'lucide-react';
import { COMPANY, SOCIAL_LINKS } from '@/config';
import { IMAGES } from '@/config/images';

const footerServices = [
  { label: 'Segurança Patrimonial', icon: Shield, href: '/servicos' },
  { label: 'Controle de Acesso', icon: Shield, href: '/servicos' },
  { label: 'Portaria', icon: Users, href: '/servicos' },
  { label: 'Limpeza', icon: Wrench, href: '/servicos' },
  { label: 'Zeladoria', icon: Wrench, href: '/servicos' },
  { label: 'Facilities', icon: Briefcase, href: '/servicos' },
  { label: 'Recepção', icon: Users, href: '/servicos' },
  { label: 'Monitoramento', icon: Shield, href: '/servicos' },
];

const footerCompany = [
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Nossos Serviços', href: '/servicos' },
  { label: 'Carreira', href: '/trabalhe-conosco' },
  { label: 'Processo Seletivo', href: '/processo-seletivo' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];

const footerContact = [
  {
    icon: MapPin,
    text: `${COMPANY.address.city}, ${COMPANY.address.state} — Brasil`,
  },
  { icon: Phone, text: COMPANY.phone, href: `tel:${COMPANY.phone}` },
  { icon: Mail, text: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Clock, text: 'Seg a Sex, 08h às 18h' },
];

const socialLinks = [
  { label: 'WhatsApp', href: SOCIAL_LINKS.whatsapp, icon: Phone },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, icon: Instagram },
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, icon: Facebook },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: Linkedin },
  { label: 'YouTube', href: SOCIAL_LINKS.youtube, icon: Youtube },
  { label: 'TikTok', href: SOCIAL_LINKS.tiktok, icon: Send },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-border relative border-t">
      {/* SVG decorative top border */}
      <div className="absolute -top-px right-0 left-0">
        <svg
          viewBox="0 0 1440 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <defs>
            <linearGradient id="ftg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(43,74%,40%)" stopOpacity="0" />
              <stop
                offset="30%"
                stopColor="hsl(43,74%,40%)"
                stopOpacity="0.6"
              />
              <stop offset="50%" stopColor="hsl(43,74%,40%)" stopOpacity="1" />
              <stop
                offset="70%"
                stopColor="hsl(43,74%,40%)"
                stopOpacity="0.6"
              />
              <stop offset="100%" stopColor="hsl(43,74%,40%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 2 Q360 0 720 2 Q1080 4 1440 2"
            stroke="url(#ftg)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        {/* Top section with brand and 4 columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="space-y-5 lg:col-span-2">
            <Link to="/" className="flex items-center gap-4">
              <img
                src={IMAGES.logo.dark}
                alt={COMPANY.name}
                className="drop-shadow-glow h-20 w-auto"
              />
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
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded-full p-2.5 shadow-sm transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-primary mb-5 text-sm font-bold tracking-wider uppercase">
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors duration-200"
                  >
                    <service.icon className="h-3.5 w-3.5 flex-shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-primary mb-5 text-sm font-bold tracking-wider uppercase">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-primary mb-5 text-sm font-bold tracking-wider uppercase">
              Contato
            </h4>
            <ul className="space-y-4">
              {footerContact.map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm">
                  <item.icon className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h5 className="text-foreground mb-3 text-sm font-bold">
                Atendimento
              </h5>
              <p className="text-muted-foreground text-sm">
                Segunda a Sexta, 08h às 18h
              </p>
              <p className="text-muted-foreground text-sm">
                Sábado, 08h às 12h
              </p>
              <p className="text-muted-foreground text-sm">Domingo — Fechado</p>
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
