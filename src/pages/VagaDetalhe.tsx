import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { ArrowLeft, MapPin, Clock, Calendar } from 'lucide-react';

export default function VagaDetalhe() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen">
      <Section className="pt-24 md:pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/vagas"
              className="text-muted-foreground hover:text-primary mb-6 flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para vagas
            </Link>

            <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
              Vaga: {slug?.replace(/-/g, ' ') || 'Detalhes'}
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-12 rounded-3xl border border-dashed border-white/10 bg-white/5 p-12 text-center"
            >
              <p className="text-muted-foreground text-sm">
                Página de detalhes da vaga em desenvolvimento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex items-center gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <MapPin className="text-primary h-4 w-4" />
                <span className="text-muted-foreground">São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-primary h-4 w-4" />
                <span className="text-muted-foreground">CLT</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-primary h-4 w-4" />
                <span className="text-muted-foreground">Há 3 dias</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <Button to="/trabalhe-conosco" variant="secondary" size="lg">
                Candidatar-se agora
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
