import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';

export default function Candidatos() {
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
              Área do Candidato
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Cadastre seu currículo,Candidate-se às vagas e acompanhe seus
              processos seletivos em um só lugar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="border-border bg-card rounded-2xl border p-6 text-center"
            >
              <h3 className="text-foreground mb-2 text-xl font-bold">
                Currículo
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Crie e mantenha seu currículo atualizado com experiências,
                formação e habilidades.
              </p>
              <Link to="/candidato/cv">
                <Button variant="outline" size="sm">
                  Acessar
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="border-border bg-card rounded-2xl border p-6 text-center"
            >
              <h3 className="text-foreground mb-2 text-xl font-bold">
                Candidaturas
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Veja todas as vagas às quais você se candidatou e seu status.
              </p>
              <Link to="/candidato/candidaturas">
                <Button variant="outline" size="sm">
                  Acessar
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="border-border bg-card rounded-2xl border p-6 text-center"
            >
              <h3 className="text-foreground mb-2 text-xl font-bold">
                Vagas Favoritas
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Salve as vagas de interesse e receba notificações de novas
                oportunidades.
              </p>
              <Link to="/candidato/preferencias">
                <Button variant="outline" size="sm">
                  Acessar
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <Link to="/login">
              <Button variant="primary">Entrar na sua conta</Button>
            </Link>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
