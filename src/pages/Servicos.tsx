import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { mockServices } from '@/services/mock/services';

export default function Servicos() {
  return (
    <div>
      <Section>
        <Container>
          <div className="mb-12 text-center">
            <h1 className="text-foreground text-3xl font-bold sm:text-4xl">
              Nossos Serviços
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Soluções completas em terceirização para condomínios, empresas e
              indústrias.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card shadow-premium hover:shadow-elevated overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-muted relative aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                    loading="lazy"
                    width="600"
                    height="340"
                  />
                  <div className="from-background/60 absolute inset-0 bg-gradient-to-t to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4">
                    <h3 className="text-foreground text-xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                    {service.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <span
                        key={benefit}
                        className="bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium"
                      >
                        <CheckCircle2 className="text-primary h-3 w-3" />
                        {benefit}
                      </span>
                    ))}
                    {service.benefits.length > 3 && (
                      <span className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-3 py-1 text-xs font-medium">
                        +{service.benefits.length - 3}
                      </span>
                    )}
                  </div>
                  <Link
                    to={`/servicos/${service.slug}`}
                    className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  >
                    Ver detalhes
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
