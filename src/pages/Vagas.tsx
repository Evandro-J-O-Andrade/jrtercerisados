import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { SafeImage } from '@/components/ui/SafeImage';
import { IMAGES } from '@/config/images';

export default function Vagas() {
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
              Vagas Disponíveis
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Encontre a oportunidade ideal para o seu perfil profissional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 rounded-3xl border border-dashed border-white/10 bg-white/5 p-12 text-center"
          >
            <p className="text-muted-foreground text-sm">
              Área em desenvolvimento — Em breve as vagas serão listadas aqui.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Link to="/cadastro/candidato">
              <Button variant="primary">Cadastrar Currículo</Button>
            </Link>
            <Link to="/contato">
              <Button variant="outline">Falar com um recrutador</Button>
            </Link>
          </motion.div>

          <div className="mt-16">
            <SafeImage
              src={IMAGES.hero.servicos.src}
              fallbackSrc={IMAGES.hero.servicos.fallback}
              alt="Vagas em destaque"
              className="aspect-[16/9] w-full rounded-3xl"
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}
