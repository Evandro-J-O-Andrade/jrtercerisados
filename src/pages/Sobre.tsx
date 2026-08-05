import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';

export default function Sobre() {
  return (
    <div>
      <Section>
        <Container>
          <div className="mb-12 text-center">
            <h1 className="text-foreground text-3xl font-bold sm:text-4xl">
              Sobre Nós
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Somos uma empresa comprometida com a excelência em terceirização
              de serviços, oferecendo soluções completas em segurança, portaria,
              limpeza e facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                Nossa História
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Com mais de 15 anos de experiência no mercado de terceirização,
                construímos uma reputação sólida baseada em profissionalismo,
                comprometimento e resultados consistentes. Nossa equipe é
                formada por profissionais altamente treinados e preparados para
                atender às demandas mais exigentes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface-alt shadow-premium rounded-2xl p-8"
            >
              <h3 className="text-foreground mb-4 text-lg font-semibold">
                Nossos Valores
              </h3>
              <ul className="space-y-3">
                {[
                  'Profissionalismo em cada detalhe',
                  'Compromisso com a qualidade',
                  'Inovação contínua',
                  'Foco no cliente',
                  'Ética e transparência',
                  'Excelência operacional',
                ].map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <Shield className="text-primary h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
