import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SafeImage } from '@/components/ui/SafeImage';
import { Link } from 'react-router-dom';

const cinematicVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
} as const;

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
} as const;

const ctaVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
} as const;

export function CinematicIntro({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<'intro' | 'content' | 'exit'>('intro');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('content');
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setPhase('exit');
    setTimeout(() => {
      onFinish();
    }, 600);
  };

  if (phase === 'exit') {
    return (
      <motion.div
        variants={cinematicVariants}
        initial="hidden"
        animate="exit"
        className="bg-background fixed inset-0 z-[60]"
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <motion.div
        variants={cinematicVariants}
        initial="hidden"
        animate={phase === 'intro' ? 'hidden' : 'visible'}
        transition={phase === 'intro' ? { duration: 0 } : undefined}
        className="absolute inset-0"
      >
        <SafeImage
          src="/images/hero/cardheros.png"
          alt="J&S Terceirizados"
          className="h-full w-full object-cover"
          fallbackSrc="/images/hero/home/fallback.svg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </motion.div>

      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={phase === 'intro' ? 'hidden' : 'visible'}
        transition={phase === 'intro' ? { duration: 0 } : undefined}
        className="relative z-10 max-w-2xl px-6 text-left"
      >
        <span className="text-primary mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
          <Shield className="h-4 w-4" />
          Assessoria em Recursos Humanos
        </span>
        <h1 className="text-foreground text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Mais eficiência em Recursos Humanos, mais agilidade para sua empresa.
        </h1>
        <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
          Simplifique processos operacionais, reduza encargos e dedique seu
          tempo ao que realmente importa: o crescimento do seu negócio.
        </p>

        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate={phase === 'intro' ? 'hidden' : 'visible'}
          transition={phase === 'intro' ? { duration: 0 } : undefined}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link to="/empresas">
            <Button variant="secondary" size="xl">
              Contratar Funcionários
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/vagas">
            <Button
              variant="outline"
              size="xl"
              className="border-border/30 text-foreground hover:bg-muted"
            >
              Quero uma Vaga
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <button
        type="button"
        onClick={dismiss}
        className="absolute right-8 bottom-8 z-20 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur transition-colors hover:text-white"
      >
        Pular introdução
      </button>
    </div>
  );
}
