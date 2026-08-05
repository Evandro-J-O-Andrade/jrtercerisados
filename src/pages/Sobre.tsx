import { motion } from 'framer-motion';
import { Shield, Award, Users, Target } from 'lucide-react';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { COMPANY, CONTACTS } from '@/config';
import { staggerReveal, revealUp } from '@/animations/scroll';
import { staggerItem } from '@/animations/fade';

const valores = [
  {
    title: 'Excelência Operacional',
    description:
      'Processos rigorosos de gestão de qualidade para garantir resultados consistentes em cada serviço entregue.',
    icon: Award,
  },
  {
    title: 'Inovação Contínua',
    description:
      'Investimento constante em tecnologia e metodologias para elevar a eficiência dos nossos serviços.',
    icon: Shield,
  },
  {
    title: 'Foco no Resultado',
    description:
      'Alinhamento total com os objetivos do cliente: segurança, conforto e operacionalidade.',
    icon: Target,
  },
  {
    title: 'Equipe Qualificada',
    description:
      'Profissionais seletos, certificados e em constante atualização de conhecimentos.',
    icon: Users,
  },
];

export default function Sobre() {
  return (
    <div className="pt-20">
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.2)}
            className="mb-16 text-center"
          >
            <motion.h1
              variants={revealUp}
              className="text-foreground text-4xl font-bold sm:text-5xl"
            >
              Sobre a JSTerceirizados
            </motion.h1>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg"
            >
              Há mais de {COMPANY.yearsOfExperience} anos, transformamos a
              gestão de serviços de terceirização para empresas e condomínios.
              Nossa plataforma combina tecnologia, pessoas e processos para
              elevar padrões de segurança, operacionalidade e experiência.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            <motion.div variants={staggerItem('left')}>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                Nossa Missão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer soluções integradas de terceirização que protegem o
                patrimônio, otimizam instalações e elevam o padrão de vida,
                utilizando tecnologia de ponta e profissionais altamente
                capacitados.
              </p>

              <h3 className="text-foreground mt-8 mb-4 text-2xl font-bold">
                Nossa Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a referência nacional em serviços de terceirização,
                reconhecida pela excelência operacional, inovação e resultados
                mensuráveis para nossos clientes.
              </p>
            </motion.div>

            <motion.div variants={staggerItem('right')} className="space-y-6">
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                Nossos Valores
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {valores.map((valor) => (
                  <motion.div
                    key={valor.title}
                    variants={staggerItem('up')}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="bg-card shadow-premium rounded-2xl p-6 text-center transition-all"
                  >
                    <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                      <valor.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      {valor.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {valor.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.2)}
            className="mt-16 text-center"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground mb-4 text-2xl font-bold"
            >
              Estatísticas
            </motion.h2>
            <motion.div
              variants={staggerReveal(0.15)}
              className="flex flex-wrap justify-center gap-8 text-center"
            >
              <motion.div variants={staggerItem('up')}>
                <p className="text-primary text-3xl font-bold">
                  +{COMPANY.professionals.toLocaleString('pt-BR')}
                </p>
                <p className="text-muted-foreground text-sm">
                  Profissionais ativos
                </p>
              </motion.div>
              <motion.div variants={staggerItem('up')}>
                <p className="text-primary text-3xl font-bold">
                  +{COMPANY.yearsOfExperience}
                </p>
                <p className="text-muted-foreground text-sm">
                  Anos de experiência
                </p>
              </motion.div>
              <motion.div variants={staggerItem('up')}>
                <p className="text-primary text-3xl font-bold">
                  +{COMPANY.clientsServed}
                </p>
                <p className="text-muted-foreground text-sm">
                  Clientes atendidos
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-surface-alt">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
          >
            <motion.div variants={staggerItem('left')}>
              <h2 className="text-foreground mb-6 text-3xl font-bold">
                Atendimento Regional
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Operamos em mais de {COMPANY.citiesCovered} cidades, com
                cobertura completa para garantir agilidade e presença onde você
                precisa.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="text-primary h-5 w-5" />
                  <span className="text-foreground font-medium">
                    Cobertura nacional
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-primary h-5 w-5" />
                  <span className="text-foreground font-medium">
                    Equipe 24/7
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem('right')}
              className="bg-card shadow-premium rounded-3xl p-8"
            >
              <h3 className="text-foreground mb-4 text-lg font-semibold">
                Contato Comercial
              </h3>
              <div className="space-y-4">
                <div className="text-muted-foreground flex items-center gap-3">
                  <span className="text-primary font-semibold">Telefone:</span>
                  <span>{CONTACTS.phone}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-3">
                  <span className="text-primary font-semibold">E-mail:</span>
                  <span>{COMPANY.email}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-3">
                  <span className="text-primary font-semibold">Horário:</span>
                  <span>{CONTACTS.businessHours.weekday}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
