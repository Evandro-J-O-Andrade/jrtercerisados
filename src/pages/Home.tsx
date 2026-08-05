import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  MapPin,
  Users,
  Award,
  ArrowRight,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { mockServices } from '@/services/mock/services';
import { TESTIMONIALS_DEMO } from '@/mock/testimonials';
import { PARTNERS_LOGOS } from '@/mock/partners';
import { COMPANY, getWhatsAppUrl, getWhatsAppMessage } from '@/config';

const stats = [
  { label: 'Anos de Experiência', value: '15+', icon: Award },
  { label: 'Clientes Atendidos', value: '200+', icon: Users },
  { label: 'Profissionais', value: '500+', icon: Shield },
  { label: 'Cidades Atendidas', value: '50+', icon: MapPin },
];

const steps = [
  {
    step: '01',
    title: 'Solicite Orçamento',
    description:
      'Preencha o formulário com suas necessidades e dados de contato.',
  },
  {
    step: '02',
    title: 'Nossa Equipe Analisa',
    description:
      'Avaliamos seu perfil e preparamos uma proposta personalizada.',
  },
  {
    step: '03',
    title: 'Elaboramos a Proposta',
    description: 'Apresentamos a solução ideal com custos e prazos detalhados.',
  },
  {
    step: '04',
    title: 'Implantação',
    description:
      'Iniciamos a operação com profissionais treinados e equipados.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-muted relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="from-background via-background/95 to-background/80 absolute inset-0 bg-gradient-to-r" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(var(--primary),0.15),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>Excelência em Terceirização</span>
              </div>

              <h1 className="text-foreground text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Segurança, Zeladoria e{' '}
                <span className="text-primary">Facilities</span> para empresas
                que exigem excelência.
              </h1>

              <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
                Soluções completas em terceirização de serviços para
                condomínios, empresas e indústrias. Profissionais treinados,
                atendimento 24 horas e cobertura regional.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/clientes">
                  <Button variant="secondary" size="lg">
                    Solicitar Proposta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/trabalhe-conosco">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border/30 text-foreground hover:bg-muted"
                  >
                    Trabalhe Conosco
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="bg-muted/50 border-border aspect-[4/3] overflow-hidden rounded-2xl border">
                  <img
                    src="/images/hero/hero-01.webp"
                    alt="Equipe de segurança patrimonial"
                    className="h-full w-full object-cover opacity-80"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="bg-card shadow-elevated absolute -bottom-6 -left-6 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                      <Shield className="text-primary-foreground h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold">
                        Segurança Total
                      </p>
                      <p className="text-muted-foreground text-xs">
                        24h • Rondas • Monitoramento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="from-background absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
      </section>

      {/* Stats */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card shadow-premium rounded-2xl p-6 text-center"
              >
                <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                  <stat.icon className="h-7 w-7" />
                </div>
                <p className="text-foreground text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-surface-alt">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              Nossos Serviços
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Soluções completas para a gestão de suas instalações e segurança
              patrimonial.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mockServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card shadow-premium hover:shadow-elevated rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                  {service.description}
                </p>
                <Link
                  to={`/servicos/${service.slug}`}
                  className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/servicos">
              <Button variant="secondary" size="lg">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section>
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              Como Funciona
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Processo simples e eficiente para contratar nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {index < steps.length - 1 && (
                  <div className="bg-border absolute top-8 right-[-3rem] left-[calc(50%+3rem)] hidden h-0.5 md:block" />
                )}
                <div className="bg-muted text-foreground mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Differentiators */}
      <Section className="bg-surface-alt">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              Nossos Diferenciais
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              O que torna a JSTerceirizados a escolha certa para sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Tecnologia de Ponta',
                description:
                  'Sistemas de monitoramento e controle de acesso de última geração.',
                icon: Shield,
              },
              {
                title: 'Profissionais Qualificados',
                description:
                  'Equipe treinada e certificada para cada segmento de serviço.',
                icon: Users,
              },
              {
                title: 'Garantia de Qualidade',
                description:
                  'Processos rigorosos e conformidade com as normas do setor.',
                icon: CheckCircle2,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card shadow-premium rounded-2xl p-6 text-center"
              >
                <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              O que nossos clientes dizem
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Depoimentos de empresas que confiam nosso trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS_DEMO.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card shadow-premium rounded-2xl p-6"
              >
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-muted h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role} — {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Partners */}
      <Section className="bg-surface-alt">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              Empresas Atendidas
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Mais de {COMPANY.clientsServed} clientes confiam em nosso
              trabalho.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {PARTNERS_LOGOS.map((partner) => (
              <motion.a
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex h-12 w-36 items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                aria-label={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-full object-contain"
                  loading="lazy"
                />
              </motion.a>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-muted">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-8 text-center sm:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsla(var(--primary),0.1),transparent_60%)]" />
            <div className="relative">
              <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
                Solicite um Orçamento Agora
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                Preencha o formulário e receba uma proposta personalizada em até
                24 horas.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/clientes">
                  <Button variant="secondary" size="lg">
                    Solicitar Proposta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a
                  href={getWhatsAppUrl(
                    COMPANY.whatsapp,
                    getWhatsAppMessage({
                      Serviço: 'Solicitação de orçamento pelo site',
                    }),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border/30 text-foreground hover:bg-muted"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
