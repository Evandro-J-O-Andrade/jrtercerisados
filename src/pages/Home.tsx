import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, MapPin, Users, Award, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/sections/Section';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { NumberCounter } from '@/components/sections/NumberCounter';
import { Container } from '@/components/common/Container';
import { staggerReveal, revealUp } from '@/animations/scroll';
import { staggerItem } from '@/animations/fade';
import { mockServices } from '@/services/mock/services';
import { TESTIMONIALS_DEMO } from '@/mock/testimonials';
import { PARTNERS_LOGOS } from '@/mock/partners';
import { COMPANY, getWhatsAppUrl, getWhatsAppMessage } from '@/config';
import { SERVICE_ICONS, FEATURE_ICONS } from '@/constants/icons';

const stats = [
  {
    label: 'Anos de Experiência',
    value: COMPANY.yearsOfExperience,
    suffix: '+',
    icon: Award,
  },
  {
    label: 'Clientes Atendidos',
    value: COMPANY.clientsServed,
    suffix: '+',
    icon: Users,
  },
  {
    label: 'Profissionais',
    value: COMPANY.professionals,
    suffix: '+',
    icon: Shield,
  },
  {
    label: 'Cidades Atendidas',
    value: COMPANY.citiesCovered,
    suffix: '+',
    icon: MapPin,
  },
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

const diferenciais = [
  {
    title: 'Tecnologia de Ponta',
    description:
      'Sistemas de monitoramento e controle de acesso de última geração.',
    icon: SERVICE_ICONS.shield,
  },
  {
    title: 'Profissionais Qualificados',
    description: 'Equipe treinada e certificada para cada segmento de serviço.',
    icon: FEATURE_ICONS.users,
  },
  {
    title: 'Garantia de Qualidade',
    description: 'Processos rigorosos e conformidade com as normas do setor.',
    icon: SERVICE_ICONS.sparkles,
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, -60]);
  const parallaxOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.05]);

  return (
    <div>
      {/* Hero Premium */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(var(--primary),0.1),transparent_50%)]" />

        <motion.div
          style={{ y: parallaxY, opacity: parallaxOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <img
            src="/images/hero/hero-main.webp"
            alt="Profissionais de segurança em ação"
            className="h-full w-full object-cover"
            loading="eager"
            width="1920"
            height="1080"
          />
          <img
            src="/images/hero/hero-overlay.svg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            aria-hidden="true"
          />
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="bg-primary/20 absolute top-20 left-10 hidden h-3 w-3 rounded-full md:block"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="bg-primary/20 absolute top-40 right-20 hidden h-4 w-4 rounded-full md:block"
          animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 5,
            delay: 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="bg-primary/15 absolute bottom-32 left-40 hidden h-5 w-5 rounded-full md:block"
          animate={{ y: [0, 15, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration: 7,
            delay: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
              >
                <Shield className="h-4 w-4" />
                <span>Excelência em Terceirização desde 2010</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="text-foreground text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Segurança, Zeladoria e{' '}
                <span className="text-primary">Facilities</span> para empresas
                que exigem excelência.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed"
              >
                Soluções completas em terceirização de serviços para
                condomínios, empresas e indústrias. Profissionais treinados,
                atendimento 24 horas e cobertura regional.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link to="/clientes">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="secondary" size="lg">
                      Solicitar Proposta
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/trabalhe-conosco">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-border/30 text-foreground hover:bg-muted"
                    >
                      Trabalhe Conosco
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero image card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="hidden lg:block"
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-muted/50 border-border relative aspect-[4/3] overflow-hidden rounded-3xl border"
                >
                  <img
                    src="/images/hero/hero-security.webp"
                    alt="Equipe de segurança patrimonial"
                    className="h-full w-full object-cover opacity-80"
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(var(--primary),0.15),transparent_60%)]" />
                </motion.div>

                <motion.div
                  className="bg-card shadow-elevated absolute -bottom-8 -left-8 rounded-2xl p-6"
                  whileHover={{ scale: 1.03, y: -2 }}
                >
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
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem('up')}>
                <NumberCounter
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  icon={stat.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-surface-alt">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-3xl font-bold sm:text-4xl"
            >
              Nossos Serviços
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Soluções completas para a gestão de suas instalações e segurança
              patrimonial.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal(0.1)}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {mockServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link to="/servicos">
              <Button variant="secondary" size="lg">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* How it works */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.2)}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-3xl font-bold sm:text-4xl"
            >
              Como Funciona
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Processo simples e eficiente para contratar nossos serviços.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative text-center"
              >
                {index < steps.length - 1 && (
                  <div className="bg-border absolute top-8 right-[-3rem] left-[calc(50%+3rem)] hidden h-0.5 md:block" />
                )}
                <div className="bg-muted text-foreground mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    {step.step}
                  </motion.span>
                </div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.1 }}
                  className="text-foreground mb-2 text-lg font-semibold"
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.15 }}
                  className="text-muted-foreground text-sm"
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Diferenciais */}
      <Section className="bg-surface-alt">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-3xl font-bold sm:text-4xl"
            >
              Nossos Diferenciais
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              O que torna a JSTerceirizados a escolha certa para sua empresa.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal(0.1)}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {diferenciais.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem('up')}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-card shadow-premium group relative overflow-hidden rounded-3xl p-8 text-center transition-all duration-300"
              >
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full transition-all duration-300">
                  <item.icon className="h-8 w-8 transition-transform group-hover:scale-110" />
                </div>
                <div className="mt-8">
                  <h3 className="text-foreground group-hover:text-primary mb-3 text-xl font-semibold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-3xl font-bold sm:text-4xl"
            >
              O que nossos clientes dizem
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Depoimentos de empresas que confiam nosso trabalho.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerReveal(0.1)}
          >
            {TESTIMONIALS_DEMO.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={staggerItem('up')}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-card shadow-premium group relative overflow-hidden rounded-3xl p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,hsla(var(--primary),0.03),transparent_50%)]" />
                <div className="relative">
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="bg-muted h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Partners */}
      <Section className="bg-surface-alt">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-3xl font-bold sm:text-4xl"
            >
              Empresas Atendidas
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Mais de {COMPANY.clientsServed} clientes confiam em nosso
              trabalho.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8"
            variants={staggerReveal(0.1)}
          >
            {PARTNERS_LOGOS.map((partner) => (
              <motion.a
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem('up')}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex h-12 w-36 items-center justify-center opacity-60 grayscale transition-all hover:grayscale-0"
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
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-muted">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative overflow-hidden rounded-3xl p-8 text-center sm:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsla(var(--primary),0.1),transparent_60%)]" />
            <div className="bg-primary/5 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl" />
            <div className="bg-primary/5 absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
                Solicite um Orçamento Agora
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                Preencha o formulário e receba uma proposta personalizada em até
                24 horas.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/clientes">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="secondary" size="lg">
                      Solicitar Proposta
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <motion.a
                  href={getWhatsAppUrl(
                    COMPANY.whatsapp,
                    getWhatsAppMessage({
                      Serviço: 'Solicitação de orçamento pelo site',
                    }),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border/30 text-foreground hover:bg-muted"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
