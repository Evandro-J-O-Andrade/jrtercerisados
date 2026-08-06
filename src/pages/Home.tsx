import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  MapPin,
  Users,
  Award,
  ArrowRight,
  Phone,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SafeImage } from '@/components/ui/SafeImage';
import { Section } from '@/components/sections/Section';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { NumberCounter } from '@/components/sections/NumberCounter';
import { HeroSlider, Brand3D } from '@/components/sections';
import type { HeroSlide } from '@/components/sections';
import { Container } from '@/components/common/Container';
import { staggerReveal, revealUp } from '@/animations/scroll';
import { staggerItem } from '@/animations/fade';
import { mockServices } from '@/services/mock/services';
import { TESTIMONIALS_DEMO } from '@/mock/testimonials';
import { PARTNERS_LOGOS } from '@/mock/partners';
import { COMPANY, WHATSAPP_MESSAGES, getWhatsAppUrl } from '@/config';
import { SERVICE_ICONS, FEATURE_ICONS } from '@/constants/icons';
import { IMAGES } from '@/config/images';

const heroSlides: HeroSlide[] = [
  {
    id: 'security',
    title: (
      <>
        Segurança, Zeladoria e <span className="text-primary">Facilities</span>{' '}
        com tecnologia e{' '}
        <span className="text-primary">excelência operacional</span>.
      </>
    ) as any,
    subtitle:
      'Plataforma integrada para gestão de serviços de terceirização. Proteja seu patrimônio, otimize suas instalações e eleve o padrão de vida dos seus colaboradores.',
    image: IMAGES.hero.home.slides[0],
    fallback: IMAGES.hero.home.fallback,
    alt: 'Segurança e facilities corporativos',
  },
  {
    id: 'cleaning',
    title: (
      <>
        Soluções de <span className="text-primary">Limpeza Profissional</span>{' '}
        para seu negócio.
      </>
    ) as any,
    subtitle:
      'Equipes certificadas, produtos ecológicos e monitoramento em tempo real. Qualidade que você pode ver e comprovar.',
    image: IMAGES.hero.home.slides[1],
    fallback: IMAGES.hero.home.fallback,
    alt: 'Equipe de limpeza corporativa profissional',
  },
  {
    id: 'portaria',
    title: (
      <>
        <span className="text-primary">Portaria Inteligente</span> e Controle de
        Acesso 24h.
      </>
    ) as any,
    subtitle:
      'Controle total de acesso, fluxo de visitantes e integração com sua plataforma. Tecnologia de ponta ao seu serviço.',
    image: IMAGES.hero.home.slides[2],
    fallback: IMAGES.hero.home.fallback,
    alt: 'Controlador de acesso e portaria 24h',
  },
];

function HeroSlideBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-primary/10 text-primary border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur"
    >
      <Shield className="h-4 w-4" />
      <span>Gestão de Terceirização desde 2010</span>
    </motion.div>
  );
}

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
    title: 'Tecnologia Integrada',
    description:
      'Plataforma únida de monitoramento, controle de acesso e gestão em tempo real — tudo conectado.',
    icon: SERVICE_ICONS.shield,
  },
  {
    title: 'Profissionais Especializados',
    description:
      'Equipe certificada e continuamente treinada para cada segmento de serviço.',
    icon: FEATURE_ICONS.users,
  },
  {
    title: 'Garantia de Qualidade',
    description:
      'Gestão de performance com SLA, KPIs e compliance total das normas do setor.',
    icon: SERVICE_ICONS.sparkles,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Slider Premium */}
      <HeroSlider
        slides={heroSlides.map((s) => ({
          ...s,
          badge: <HeroSlideBadge />,
          cta: (
            <>
              <motion.a
                href={getWhatsAppUrl(
                  COMPANY.whatsapp,
                  WHATSAPP_MESSAGES.home.proposal,
                )}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="secondary"
                  size="xl"
                  className="shadow-glow-lg h-14 rounded-[18px] px-8 py-4 text-base"
                >
                  Solicitar Proposta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.a>
              <motion.a
                href={getWhatsAppUrl(
                  COMPANY.whatsapp,
                  WHATSAPP_MESSAGES.home.whatsapp,
                )}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="xl"
                  className="border-border/30 text-foreground hover:bg-muted h-14 rounded-[18px] px-8 py-4 text-base backdrop-blur"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </motion.a>
            </>
          ),
        }))}
      ></HeroSlider>

      {/* Brand3D floating element (desktop only) */}
      <div className="pointer-events-none absolute top-80 right-1/2 hidden lg:block lg:translate-x-1/2">
        <Brand3D className="h-32 w-32" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="text-muted-foreground mb-2 text-xs font-medium">
          Role para descer
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-muted-foreground h-5 w-5 rotate-90" />
        </motion.div>
      </motion.div>

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
                className="bg-card shadow-premium group relative rounded-3xl p-8 pt-14 text-center transition-all duration-300"
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
            className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
            variants={staggerReveal(0.1)}
          >
            {PARTNERS_LOGOS.map((partner) => (
              <motion.div
                key={partner.name}
                variants={staggerItem('up')}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <SafeImage
                    src={partner.photo}
                    fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23111'%3E%3Crect width='400' height='300' fill='%232a2a2a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='16'%3EEmpresa&lt;/text%3E%3C/svg%3E"
                    alt={partner.name}
                    className="h-full w-full object-cover contrast-125 grayscale-[40%] transition-all duration-500 group-hover:contrast-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(5,9,20,0.6)_100%)]" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full">
                      <span className="text-primary text-xs font-semibold">
                        Ver
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <span className="text-foreground group-hover:text-primary text-xs font-semibold transition-colors">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
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
            <div className="animate-pulse-glow absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsla(var(--primary),0.15),transparent_60%)]" />
            <div className="bg-primary/5 animate-float-slow absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl" />
            <div className="bg-primary/5 animate-float-medium absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-3xl" />

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
                Solicite uma proposta gratuita e descubra como podemos elevar o
                padrão dos seus serviços.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <motion.a
                  href={getWhatsAppUrl(
                    COMPANY.whatsapp,
                    WHATSAPP_MESSAGES.home.proposal,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="secondary" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Orçamento no WhatsApp
                  </Button>
                </motion.a>
                <motion.a
                  href={getWhatsAppUrl(
                    COMPANY.whatsapp,
                    WHATSAPP_MESSAGES.home.whatsapp,
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
