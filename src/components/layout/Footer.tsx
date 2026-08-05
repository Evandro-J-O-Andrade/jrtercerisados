import { Link } from 'react-router-dom';
import { Shield, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY, SOCIAL_LINKS, CONTACTS, NAVIGATION_LINKS } from '@/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-border border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
                <Shield className="text-primary-foreground h-6 w-6" />
              </div>
              <span className="text-foreground text-xl font-bold tracking-tight">
                JS<span className="text-primary">Terceirizados</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {COMPANY.description}
            </p>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded-full p-3 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded-full p-3 transition-colors"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary mb-4 text-sm font-semibold tracking-wider uppercase">
              Serviços
            </h4>
            <ul className="space-y-2">
              {COMPANY.businessAreas.map((service) => (
                <li key={service}>
                  <Link
                    to="/servicos"
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary mb-4 text-sm font-semibold tracking-wider uppercase">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary mb-4 text-sm font-semibold tracking-wider uppercase">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground flex items-start gap-3 text-sm">
                <MapPin className="text-primary mt-1 h-4 w-4 flex-shrink-0" />
                <span>
                  {COMPANY.address.city}, {COMPANY.address.state} — Brasil
                </span>
              </li>
              <li className="text-muted-foreground flex items-center gap-3 text-sm">
                <Phone className="text-primary h-4 w-4 flex-shrink-0" />
                <span>{CONTACTS.phone}</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-3 text-sm">
                <Mail className="text-primary h-4 w-4 flex-shrink-0" />
                <span>{COMPANY.email}</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-3 text-sm">
                <Clock className="text-primary h-4 w-4 flex-shrink-0" />
                <span>{CONTACTS.businessHours.weekday}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-muted-foreground text-xs">
            © {currentYear} JSTerceirizados. Todos os direitos reservados.
          </p>
          <div className="text-muted-foreground flex gap-6 text-xs">
            <Link to="/" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <Link to="/" className="hover:text-primary transition-colors">
              LGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
