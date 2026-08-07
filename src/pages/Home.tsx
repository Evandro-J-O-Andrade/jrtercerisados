import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Users,
  Shield,
  ArrowRight,
  Phone,
  MapPin,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SafeImage } from '@/components/ui/SafeImage';
import { Section } from '@/components/sections/Section';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { NumberCounter } from '@/components/sections/NumberCounter';
import { HeroSlider } from '@/components/sections';
import type { HeroSlide } from '@/components/sections';
import { Container } from '@/components/common/Container';
import { staggerReveal, revealUp } from '@/animations/scroll';
import { staggerItem } from '@/animations/fade';
import { mockServices } from '@/services/mock/services';
import { mockGetVagas } from '@/services/mock/vagas';
import { PARTNERS_LOGOS } from '@/mock/partners';
import { COMPANY } from '@/config';
import { SERVICE_ICONS, FEATURE_ICONS } from '@/constants/icons';
import { IMAGES } from '@/config/images';

const heroSlides: HeroSlide[] = [
  {
    id: 'rh',
    title: <>Conectando talentos às melhores oportunidades.</>,
    subtitle:
      'Agência de Empregos e Assessoria em Recursos Humanos. Encontramos o profissional certo para sua empresa e ajudamos candidatos a conquistar novas oportunidades de trabalho.',
    image: IMAGES.hero.home.slides[0],
    fallback: IMAGES.hero.home.fallback,
    alt: 'Conectando talentos às melhores oportunidades',
  },
  {
    id: 'empresas',
    title: (
      <>
        <span className="text-primary">Mais eficiência em RH.</span> Mais
        resultados para sua empresa.
      </>
    ),
    subtitle:
      'Tenha um profissional de RH dedicado à sua empresa. Soluções eficientes para contratação e gestão de temporários e efetivos.',
    image: IMAGES.hero.home.slides[2],
    fallback: IMAGES.hero.home.fallback,
    alt: 'Soluções de RH para empresas',
  },
  {
    id: 'candidato',
    title: (
      <>
        <span className="text-primary">Encontre</span> sua próxima oportunidade.
      </>
    ),
    subtitle:
      'Cadastre seu currículo no Banco de Talentos e candidate-se às vagas que combinam com seu perfil.',
    image: IMAGES.hero.home.slides[1],
    fallback: IMAGES.hero.home.fallback,
    alt: 'Busca de vagas e cadastro de currículo',
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
      <span>Agência de Empregos desde 2010</span>
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
    label: 'Profissionais no Banco',
    value: COMPANY.professionals,
    suffix: '+',
    icon: Users,
  },
  {
    label: 'Empresas Parceiras',
    value: COMPANY.clientsServed,
    suffix: '+',
    icon: Briefcase,
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
    title: 'Cadastre seu currículo',
    description:
      'Preencha seus dados profissionais e faça upload do seu currículo em poucos minutos.',
  },
  {
    step: '02',
    title: 'Candidate-se às vagas',
    description:
      'Escolha as oportunidades que combinam com seu perfil e envie sua candidatura.',
  },
  {
    step: '03',
    title: 'Processo seletivo',
    description:
      'Nossa equipe de RH entra em contato para avaliar seu perfil e agendar etapas.',
  },
  {
    step: '04',
    title: 'Contratação',
    description:
      'Você recebe a proposta e inicia sua nova oportunidade profissional.',
  },
];

const diferenciais = [
  {
    title: 'Recrutamento Especializado',
    description:
      'Processos de triagem, seleção e avaliação técnica para encontrar o profissional certo para cada vaga.',
    icon: SERVICE_ICONS.shield,
  },
  {
    title: 'Banco de Talentos Atualizado',
    description:
      'Milhares de profissionais qualificados prontos para novas oportunidades, cadastrados e pré-avaliados.',
    icon: FEATURE_ICONS.users,
  },
  {
    title: 'Atendimento Humanizado',
    description:
      'Atendimento próximo e transparente para candidatos e empresas, com suporte em cada etapa.',
    icon: FEATURE_ICONS.phone,
  },
  {
    title: 'Processos Eficientes',
    description:
      'Metodologia de recrutamento ágil, reduzindo o tempo entre a abertura da vaga e a contratação.',
    icon: FEATURE_ICONS.clock,
  },
];

export default function Home() {
  const destaques = mockGetVagas().slice(0, 3);

  return (
    <div>
      {/* Hero Slider Premium */}
      <HeroSlider
        slides={heroSlides.map((s) => ({
          ...s,
          badge: <HeroSlideBadge />,
          cta: (
            <>
              <Link to="/trabalhe-conosco">
                <Button
                  variant="secondary"
                  size="xl"
                  className="shadow-glow-lg h-14 rounded-[18px] px-8 py-4 text-base"
                >
                  Quero uma Vaga
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/empresas">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-border/30 text-foreground hover:bg-muted h-14 rounded-[18px] px-8 py-4 text-base backdrop-blur"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contratar Funcionários
                </Button>
              </Link>
              <Link to="/servicos">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-border/30 text-foreground hover:bg-muted h-14 rounded-[18px] px-8 py-4 text-base backdrop-blur"
                >
                  Nossos Serviços
                </Button>
              </Link>
            </>
          ),
        }))}
      />

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
              Nossas Principais Soluções
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Soluções completas em recrutamento, seleção, mão de obra e
              facilities.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal(0.1)}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {mockServices.slice(0, 4).map((service, index) => (
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

      {/* Vagas em Destaque */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="mb-12 flex items-end justify-between"
          >
            <motion.div variants={revealUp}>
              <motion.h2
                variants={revealUp}
                className="text-foreground text-3xl font-bold sm:text-4xl"
              >
                Vagas em Destaque
              </motion.h2>
              <motion.p
                variants={revealUp}
                className="text-muted-foreground mt-4 max-w-2xl text-lg"
              >
                Confira as oportunidades disponíveis no momento.
              </motion.p>
            </motion.div>
            <Link to="/vagas">
              <Button variant="outline" size="sm">
                Ver todas as vagas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal(0.1)}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {destaques.map((vaga) => (
              <motion.div
                key={vaga.id}
                variants={staggerItem('up')}
                className="bg-card shadow-premium group relative flex flex-col rounded-2xl p-6 transition-all duration-300"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-foreground group-hover:text-primary mb-1 text-xl font-bold transition-colors">
                      {vaga.titulo}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {vaga.empresa}
                    </p>
                  </div>
                  <span className="bg-primary/10 text-primary rounded-full px-2.5 py-1 text-xs font-medium">
                    {vaga.tipoContrato}
                  </span>
                </div>

                <div className="text-muted-foreground mb-4 space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {vaga.cidade}, {vaga.estado}
                    </span>
                  </div>
                  {vaga.salarioMin && (
                    <div className="flex items-center gap-2">
                      <span>R$</span>
                      <span>
                        {vaga.salarioMin.toLocaleString('pt-BR')}
                        {vaga.salarioMax
                          ? ' – ' + vaga.salarioMax.toLocaleString('pt-BR')
                          : ' a combinar'}
                      </span>
                    </div>
                  )}
                  <span className="inline-block text-xs">
                    {vaga.modalidade === 'PRESENCIAL'
                      ? 'Presencial'
                      : vaga.modalidade === 'HIBRIDO'
                        ? 'Híbrido'
                        : 'Remoto'}
                  </span>
                </div>

                {vaga.beneficios && vaga.beneficios.length > 0 && (
                  <div className="mb-4">
                    <p className="text-muted-foreground mb-2 text-xs font-medium">
                      Benefícios
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {vaga.beneficios.slice(0, 3).map((beneficio) => (
                        <span
                          key={beneficio}
                          className="bg-muted rounded-full px-2 py-0.5 text-xs"
                        >
                          {beneficio}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto flex gap-2">
                  <Link to={`/vagas/${vaga.slug}`} className="flex-1">
                    <Button variant="primary" size="sm" className="w-full">
                      Ver vaga
                    </Button>
                  </Link>
                  <Link to="/trabalhe-conosco" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      Candidatar-se
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="bg-surface-alt">
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
              Cadastre seu currículo, candidate-se às vagas e conquiste sua nova
              oportunidade.
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
              Por que escolher a JS Empregos?
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              O que torna nossa agência a escolha certa para sua empresa.
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

      {/* Clients / Partners */}
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
              Empresas que confiam em nossas soluções
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Mais de {COMPANY.clientsServed} empresas utilizam nossos serviços
              de RH e facilities.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
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
                    fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23111'%3E%3Crect width='400' height='300' fill='%232a2a2a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='16'%3EEmpresa%3C/text%3E%3C/svg%3E"
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

      {/* CTA Final */}
      <Section>
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
                Mais eficiência em RH. Mais resultados para sua empresa.
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                Encontramos o profissional certo para sua empresa e ajudamos
                candidatos a conquistar novas oportunidades de trabalho.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/trabalhe-conosco">
                  <Button variant="secondary" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Cadastrar Currículo
                  </Button>
                </Link>
                <Link to="/empresas">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border/30 text-foreground hover:bg-muted"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Contratar Funcionários
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
