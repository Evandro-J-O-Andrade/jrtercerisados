import { type ComponentType } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <Link
        to={`/servicos/${service.slug}`}
        className="group bg-card shadow-premium hover:shadow-elevated border-border/50 hover:border-primary/30 relative block h-full overflow-hidden rounded-2xl border transition-all duration-300"
      >
        {/* Top gradient accent */}
        <div className="bg-primary/5 absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Image area */}
        <div className="bg-surface-alt relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
            loading="lazy"
          />
          <div className="from-card via-card/50 absolute inset-0 bg-gradient-to-t to-transparent" />
          <div className="from-primary/10 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Icon overlay */}
          <div className="bg-primary/20 absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-sm">
            <Icon className="text-primary-foreground h-6 w-6" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-foreground group-hover:text-primary text-xl font-bold transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-muted-foreground mt-3 line-clamp-3 text-sm leading-relaxed">
            {service.description}
          </p>

          {/* Benefits preview */}
          <div className="mt-4 space-y-2">
            {service.benefits.slice(0, 2).map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="text-primary h-4 w-4 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-primary mt-6 flex items-center gap-2 text-sm font-medium transition-transform group-hover:translate-x-1">
            <span>Saiba mais</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Hover glow */}
        <div className="from-primary/5 absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
    </motion.div>
  );
}
