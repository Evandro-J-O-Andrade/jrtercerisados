import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Users,
  Briefcase,
  ArrowRight,
  Phone,
  MapPin,
  Award,
  FileText,
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
      'Encontramos o profissional certo para sua empresa e ajudamos candidatos a conquistar novas oportunidades de trabalho.',
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

const steps = [
  {
    step: '01',
    title: 'Cadastre seu currículo',
    description: 'Preencha seus dados em poucos minutos.',
  },
  {
    step: '02',
    title: 'Candidate-se',
    description: 'Escolha as vagas que combinam com seu perfil.',
  },
  {
    step: '03',
    title: 'Processo Seletivo',
    description: 'Nossa equipe entra em contato quando houver compatibilidade.',
  },
  {
    step: '04',
    title: 'Contratação',
    description: 'Você inicia sua nova oportunidade.',
  },
];

const diferenciais = [
  {
    title: 'Banco de talentos atualizado',
    description:
      'Profissionais qualificados e pré-avaliados prontos para novas oportunidades.',
    icon: FEATURE_ICONS.users,
  },
  {
    title: 'Atendimento rápido',
    description: 'Canais diretos e resposta ágil para candidatos e empresas.',
    icon: FEATURE_ICONS.phone,
  },
  {
    title: 'Empresas parceiras',
    description: 'Rede de empresas que confiam na nossa seleção e agilidade.',
    icon: FEATURE_ICONS.briefcase,
  },
  {
    title: 'Equipe especializada em RH',
    description:
      'Profissionais de recrutamento com experiência e conhecimento de mercado.',
    icon: SERVICE_ICONS.shield,
  },
  {
    title: 'Processos seletivos eficientes',
    description:
      'Metodologia ágil para reduzir o tempo entre a vaga e a contratação.',
    icon: FEATURE_ICONS.clock,
  },
  {
    title: 'Atendimento humanizado',
    description:
      'Acompanhamento próximo, transparente e respeitoso em cada etapa.',
    icon: FEATURE_ICONS.users,
  },
];

const blogPosts = [
  {
    title: 'Como fazer um currículo vencedor',
    href: '/blog',
  },
  {
    title: 'Como se preparar para entrevistas',
    href: '/blog',
  },
  {
    title: 'Tendências do mercado de trabalho',
    href: '/blog',
  },
  {
    title: 'Dicas para conquistar seu primeiro emprego',
    href: '/blog',
  },
];

export default function Home() {
  const destaques = mockGetVagas().slice(0, 4);

  return (
    <div>
      {/* Hero */}
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

      {/* Dois caminhos */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.2)}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <Link to="/trabalhe-conosco">
              <motion.div
                variants={revealUp}
                className="group bg-card border-border hover:border-primary/30 shadow-premium relative flex flex-col items-center rounded-2xl p-10 text-center transition-all duration-300"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-6 flex h-20 w-20 items-center justify-center rounded-full text-3xl transition-all duration-300">
                  <Users className="text-primary h-10 w-10" />
                </div>
                <h3 className="text-foreground group-hover:text-primary mb-3 text-2xl font-bold transition-colors">
                  Encontre sua próxima oportunidade
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xs text-sm">
                  Cadastre seu currículo, encontre vagas compatíveis e participe
                  dos nossos processos seletivos.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="mt-auto rounded-[14px] px-6"
                >
                  Quero uma Vaga
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/empresas">
              <motion.div
                variants={revealUp}
                className="group bg-card border-border hover:border-primary/30 shadow-premium relative flex flex-col items-center rounded-2xl p-10 text-center transition-all duration-300"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-6 flex h-20 w-20 items-center justify-center rounded-full text-3xl transition-all duration-300">
                  <Briefcase className="text-primary h-10 w-10" />
                </div>
                <h3 className="text-foreground group-hover:text-primary mb-3 text-2xl font-bold transition-colors">
                  Preciso contratar
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xs text-sm">
                  Encontre os profissionais certos para sua empresa. Soluções de
                  recrutamento e seleção.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="mt-auto rounded-[14px] px-6"
                >
                  Contratar Funcionários
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* Nossas Principais Soluções */}
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
              Soluções completas para empresas e candidatos.
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

      {/* Mais eficiência em RH */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="text-center"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-3xl font-bold sm:text-4xl"
            >
              Mais eficiência em RH. Mais resultados para sua empresa.
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Mais eficiência em Recursos Humanos, mais agilidade para sua
              empresa.
            </motion.p>
            <motion.div variants={revealUp} className="mt-8">
              <Link to="/servicos">
                <Button variant="secondary" size="lg">
                  Conhecer nossas soluções
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Mão de Obra Temporária + Efetiva */}
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
              Mão de obra temporária e efetiva
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Soluções flexíveis para atender demandas específicas da sua
              operação.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal(0.1)}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <motion.div
              variants={staggerItem('up')}
              className="bg-card shadow-premium rounded-3xl p-8"
            >
              <h3 className="text-foreground mb-3 text-xl font-semibold">
                Mão de Obra Temporária
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Profissionais para atender demandas sazonais, substituições e
                necessidades específicas da operação.
              </p>
              <Link to="/servicos/mao-de-obra-temporaria">
                <Button variant="secondary" size="sm">
                  Conhecer mão de obra temporária
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              variants={staggerItem('up')}
              className="bg-card shadow-premium rounded-3xl p-8"
            >
              <h3 className="text-foreground mb-3 text-xl font-semibold">
                Mão de Obra Efetiva
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Encontre profissionais para posições permanentes, com apoio
                especializado no processo de recrutamento e seleção.
              </p>
              <Link to="/servicos/mao-de-obra-efetiva">
                <Button variant="secondary" size="sm">
                  Conhecer mão de obra efetiva
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
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
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
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

      {/* Como Funciona */}
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

      {/* Para Empresas */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
          >
            <motion.div variants={revealUp}>
              <motion.h2
                variants={revealUp}
                className="text-foreground text-3xl font-bold sm:text-4xl"
              >
                Precisa contratar?
              </motion.h2>
              <motion.p
                variants={revealUp}
                className="text-muted-foreground mt-4 text-lg"
              >
                Encontramos profissionais qualificados para sua necessidade.
              </motion.p>
              <div className="mt-8">
                <Link to="/empresas">
                  <Button variant="secondary" size="lg">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={revealUp}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {mockServices.slice(0, 4).map((service) => (
                <Link key={service.id} to="/servicos" className="block">
                  <div className="bg-card shadow-premium rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-foreground mb-2 text-base font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Para Candidatos */}
      <Section className="bg-surface-alt">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
          >
            <motion.div variants={revealUp} className="order-2 md:order-none">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {mockServices.slice(0, 4).map((service) => (
                  <Link
                    key={service.id}
                    to="/trabalhe-conosco"
                    className="block"
                  >
                    <div className="bg-card shadow-premium rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1">
                      <h3 className="text-foreground mb-2 text-base font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div variants={revealUp}>
              <motion.h2
                variants={revealUp}
                className="text-foreground text-3xl font-bold sm:text-4xl"
              >
                Construa sua próxima oportunidade
              </motion.h2>
              <motion.p
                variants={revealUp}
                className="text-muted-foreground mt-4 text-lg"
              >
                Cadastre seu currículo, encontre vagas e participe dos nossos
                processos seletivos.
              </motion.p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/trabalhe-conosco">
                  <Button variant="secondary" size="lg">
                    Cadastrar Currículo
                  </Button>
                </Link>
                <Link to="/vagas">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border/30 text-foreground hover:bg-muted"
                  >
                    Ver Vagas
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Facilities */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="mb-10 text-center"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-3xl font-bold sm:text-4xl"
            >
              Facilities
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Soluções complementares para apoiar a operação da sua empresa.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal(0.1)}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {[
              'Limpeza',
              'Conservação',
              'Controle de Acesso',
              'Portaria',
              'Jardinagem',
              'Recepção',
            ].map((item) => (
              <motion.div
                key={item}
                variants={staggerItem('up')}
                className="bg-card shadow-premium rounded-2xl p-4 text-center text-sm font-medium"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link to="/servicos">
              <Button variant="outline" size="lg">
                Conhecer Facilities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* Empresas / Clientes */}
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

      {/* Números da Empresa */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              { label: 'Currículos', value: 10000, suffix: '+' },
              {
                label: 'Empresas Parceiras',
                value: COMPANY.clientsServed,
                suffix: '+',
              },
              { label: 'Contratações', value: 2000, suffix: '+' },
              { label: 'Satisfação', value: 95, suffix: '%' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={staggerItem('up')}>
                <NumberCounter
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  icon={Award}
                />
              </motion.div>
            ))}
          </motion.div>
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

      {/* Blog */}
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
              Blog
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Últimos artigos.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal(0.1)}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.title}
                variants={staggerItem('up')}
                className="bg-card shadow-premium rounded-2xl p-6 transition-all duration-300"
              >
                <div className="bg-primary/10 text-primary mb-4 flex h-10 w-10 items-center justify-center rounded-xl">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-foreground mb-2 text-base font-semibold">
                  {post.title}
                </h3>
                <Link
                  to={post.href}
                  className="text-primary text-sm font-medium"
                >
                  Ler artigo <ArrowRight className="ml-1 inline h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section className="bg-surface-alt">
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
                Pronto para dar o próximo passo?
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                Encontre sua próxima oportunidade ou encontre os profissionais
                certos para sua empresa.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/vagas">
                  <Button variant="secondary" size="lg">
                    Encontrar uma vaga
                  </Button>
                </Link>
                <Link to="/empresas">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border/30 text-foreground hover:bg-muted"
                  >
                    Contratar profissionais
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
