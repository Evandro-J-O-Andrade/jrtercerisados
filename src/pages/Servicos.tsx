import { motion } from 'framer-motion';
import { staggerReveal, revealUp } from '@/animations/scroll';
import { Section } from '@/components/sections/Section';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { Container } from '@/components/common/Container';
import { mockServices } from '@/services/mock/services';

export default function Servicos() {
  return (
    <div className="pt-20">
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="mb-12 text-center"
          >
            <motion.h1
              variants={revealUp}
              className="text-foreground text-4xl font-bold sm:text-5xl"
            >
              Nossos Serviços
            </motion.h1>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Soluções integradas de terceirização para condomínios, empresas e
              indústrias. Cada serviço é entregue com tecnologia, pessoas
              qualificadas e gestão de resultados.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal(0.1)}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {mockServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
