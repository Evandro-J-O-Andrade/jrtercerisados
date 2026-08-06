import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';

export default function Empresas() {
  return (
    <div className="min-h-screen">
      <Section className="pt-24 md:pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
              Empresas Parceiras
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Empresas de diferentes setores que confiam na JR Terceirizados
              para suas necessidades de recrutamento e gestão de pessoas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 rounded-3xl border border-dashed border-white/10 bg-white/5 p-12 text-center"
          >
            <p className="text-muted-foreground text-sm">
              Lista de empresas parceiras em desenvolvimento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Link to="/cadastro/empresa">
              <Button variant="primary">Divulgar Vaga</Button>
            </Link>
            <Link to="/contato">
              <Button variant="outline">Falar com um consultor</Button>
            </Link>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
