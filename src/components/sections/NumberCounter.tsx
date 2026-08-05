import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface NumberCounterProps {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function NumberCounter({
  value,
  label,
  suffix = '+',
  icon: Icon,
}: NumberCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const duration = 2000;
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setDisplayCount(Math.round(progress * value));
        if (progress >= 1) clearInterval(interval);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isInView, hasAnimated, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="bg-card/30 shadow-glass group border-border/20 hover:shadow-glow-lg relative overflow-hidden rounded-3xl border p-8 text-center transition-all duration-500 hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(var(--primary),0.05),transparent_60%)]" />

      <div className="relative">
        <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
          <Icon className="h-7 w-7" />
        </div>

        <motion.p
          className="text-foreground text-4xl font-bold"
          key={displayCount}
          initial={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          {displayCount.toLocaleString('pt-BR')}
          {suffix}
        </motion.p>

        <p className="text-muted-foreground mt-2 text-sm">{label}</p>
      </div>
    </motion.div>
  );
}
