import { motion } from 'framer-motion';
import { Shield, Award, Users, Target } from 'lucide-react';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { staggerReveal, revealUp } from '@/animations/scroll';
import { staggerItem } from '@/animations/fade';

const valores = [
  {
    title: 'Excelência em Recrutamento',
    description:
      'Processos rigorosos de triagem e seleção para encontrar o profissional certo para cada vaga.',
    icon: Award,
  },
  {
    title: 'Inovação em RH',
    description:
      'Investimento constante em tecnologia e metodologias para otimizar o recrutamento.',
    icon: Shield,
  },
  {
    title: 'Foco no Resultado',
    description:
      'Alinhamento total com os objetivos da empresa: encontrar talentos e elevar padrões.',
    icon: Target,
  },
  {
    title: 'Equipe Qualificada',
    description:
      'Especialistas em recrutamento, seleção e gestão de pessoas com certificações reconhecidas.',
    icon: Users,
  },
];

export default function Sobre() {
  return (
    <div className="pt-20">
      <Section className="pt-20 md:pt-28">
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
              Sobre a J&S Terceirizados
            </motion.h1>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg"
            >
              A J&S Terceirizados Ltda. é especializada em oferecer soluções de
              terceirização de mão de obra temporária e efetiva e facilities,
              buscando otimizar gestão e eficiência operacional dos clientes.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="grid grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <motion.div variants={staggerItem('left')}>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                Nossa Missão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Conectar empresas aos profissionais certos e ajudar candidatos a
                conquistarem novas oportunidades, por meio de recrutamento,
                seleção e um banco de talentos sempre atualizado.
              </p>

              <h3 className="text-foreground mt-8 mb-4 text-2xl font-bold">
                Nossa Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a referência em soluções de RH e terceirização, reconhecida
                pela excelência no recrutamento e pela conexão humanizada entre
                empresas e talentos.
              </p>
            </motion.div>

            <motion.div variants={staggerItem('right')}>
              <div className="bg-card shadow-glass border-border/40 relative overflow-hidden rounded-3xl border">
                <div className="from-background/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                <div className="flex h-full items-center justify-center p-12">
                  <div className="text-center">
                    <p className="text-foreground text-xl font-semibold">
                      Mão de obra temporária, efetiva e facilities.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Soluções completas para sua empresa.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.2)}
            className="mt-16"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground mb-8 text-center text-3xl font-bold"
            >
              Nossos Valores
            </motion.h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        </Container>
      </Section>
    </div>
  );
}
