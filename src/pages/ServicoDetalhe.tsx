import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MapPin,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { mockGetServiceBySlug } from '@/services/mock/services';
import { COMPANY, getWhatsAppUrl, getWhatsAppMessage } from '@/config';

export default function ServicoDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const service = mockGetServiceBySlug(slug ?? '');

  if (!service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-foreground mb-4 text-2xl font-bold">
            Serviço não encontrado
          </h2>
          <Link to="/servicos">
            <Button variant="primary">Voltar aos Serviços</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-muted relative py-20">
        <div className="from-background via-background/95 to-background/80 absolute inset-0 bg-gradient-to-r" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/servicos"
            className="text-primary hover:text-primary/80 mb-6 inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar aos Serviços
          </Link>
          <h1 className="text-foreground text-4xl font-bold sm:text-5xl">
            {service.title}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-3xl text-lg">
            {service.description}
          </p>
        </div>
      </section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-foreground mb-6 text-2xl font-bold">
                Benefícios
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/clientes">
                  <Button variant="secondary" size="lg">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a
                  href={getWhatsAppUrl(
                    COMPANY.whatsapp,
                    getWhatsAppMessage({
                      Serviço: service.title,
                      Origem: 'Página de serviços',
                    }),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    <Shield className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface-alt shadow-premium rounded-2xl p-8"
            >
              <h3 className="text-foreground mb-6 text-lg font-semibold">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="text-muted-foreground flex items-center gap-3">
                  <Phone className="text-primary h-5 w-5" />
                  <span>{COMPANY.phone}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-3">
                  <Mail className="text-primary h-5 w-5" />
                  <span>{COMPANY.email}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-3">
                  <Clock className="text-primary h-5 w-5" />
                  <span>Segunda a Sexta, 08h às 18h</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <span>
                    {COMPANY.address.city}, {COMPANY.address.state} — Brasil
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
