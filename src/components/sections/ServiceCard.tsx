import { type ComponentType } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/types/common';
import { SERVICE_ICONS } from '@/constants/icons';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon: ComponentType<{ className?: string }> =
    SERVICE_ICONS[service.icon] || SERVICE_ICONS.shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
        delay: index * 0.08,
      }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Link
        to={`/servicos/${service.slug}`}
        className="group bg-card shadow-premium hover:shadow-elevated hover:border-primary/30 relative block h-full overflow-hidden rounded-2xl p-6 transition-all duration-300"
      >
        <div className="bg-primary/5 group-hover:bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground absolute -top-6 left-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
          <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
        </div>

        <div className="mt-6">
          <h3 className="text-foreground group-hover:text-primary text-xl font-semibold transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground mt-3 line-clamp-3 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-medium transition-transform group-hover:translate-x-1">
          <span>Saiba mais</span>
          <ArrowRight className="h-4 w-4" />
        </div>

        <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
    </motion.div>
  );
}
