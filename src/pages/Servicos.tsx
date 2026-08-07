import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SEO } from '@/components/ui/SEO';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { staggerReveal, revealUp } from '@/animations/scroll';
import { staggerItem } from '@/animations/fade';
import { mockServices } from '@/services/mock/services';
import { SERVICE_CATEGORIES } from '@/constants/services';
import { SERVICE_ICONS } from '@/constants/icons';

export default function Servicos() {
  const rhServices = mockServices.filter((s) =>
    SERVICE_CATEGORIES.rh.includes(s.slug),
  );
  const facilitiesServices = mockServices.filter((s) =>
    SERVICE_CATEGORIES.facilities.includes(s.slug),
  );

  const ServiceIcon = ({ iconName }: { iconName: string }) => {
    const Icon = SERVICE_ICONS[iconName];
    if (!Icon) return null;
    return (
      <Icon className="h-8 w-8 transition-transform group-hover:scale-110" />
    );
  };

  return (
    <>
      <SEO
        title="Soluções em RH e Mão de Obra Temporária | J&S"
        description="Recrutamento, seleção, mão de obra temporária, efetiva e facilities para empresas."
        keywords={[
          'serviços de RH',
          'recrutamento',
          'mão de obra temporária',
          'mão de obra efetiva',
          'hunting',
          'facilities',
          'terceirização',
        ]}
        type="Service"
      />
      <div className="pt-16 lg:pt-20">
        <Section className="pt-20 md:pt-28">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerReveal(0.15)}
              className="mb-12 text-center"
            >
              <motion.h1
                variants={revealUp}
                className="text-foreground text-4xl font-bold sm:text-5xl"
              >
                Soluções em Recursos Humanos e Facilities
              </motion.h1>
              <motion.p
                variants={revealUp}
                className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
              >
                Estratégias inteligentes para conectar empresas aos melhores
                profissionais.
              </motion.p>
              <motion.p
                variants={revealUp}
                className="text-muted-foreground mx-auto mt-2 max-w-2xl text-base"
              >
                Oferecemos soluções em recrutamento, mão de obra temporária,
                efetiva e serviços especializados para apoiar o crescimento da
                sua empresa.
              </motion.p>
            </motion.div>

            {/* Recursos Humanos */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerReveal(0.15)}
              className="mb-16"
            >
              <motion.div variants={revealUp} className="mb-10 text-center">
                <motion.h2
                  variants={revealUp}
                  className="text-foreground text-3xl font-bold sm:text-4xl"
                >
                  Recursos Humanos
                </motion.h2>
                <motion.p
                  variants={revealUp}
                  className="text-muted-foreground mt-4 max-w-2xl text-lg"
                >
                  Assessoria em RH com foco em resultados para sua empresa.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerReveal(0.1)}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {rhServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={staggerItem('up')}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="bg-card shadow-premium group relative flex flex-col rounded-3xl p-8 transition-all duration-300"
                  >
                    <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full transition-all duration-300">
                      <ServiceIcon iconName={service.icon} />
                    </div>
                    <div className="mt-8">
                      <h3 className="text-foreground group-hover:text-primary mb-3 text-xl font-semibold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        to={`/servicos/${service.slug}`}
                        className="text-primary text-sm font-medium"
                      >
                        Saiba mais{' '}
                        <ArrowRight className="ml-1 inline h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 text-center"
              >
                <Link to="/servicos">
                  <Button variant="secondary" size="lg">
                    Ver todas as soluções de RH
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Facilities */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerReveal(0.15)}
            >
              <motion.div variants={revealUp} className="mb-10 text-center">
                <motion.h2
                  variants={revealUp}
                  className="text-foreground text-3xl font-bold sm:text-4xl"
                >
                  Serviços Operacionais
                </motion.h2>
                <motion.p
                  variants={revealUp}
                  className="text-muted-foreground mt-4 max-w-2xl text-lg"
                >
                  Soluções para manter sua operação funcionando com qualidade e
                  eficiência.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerReveal(0.1)}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                {facilitiesServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={staggerItem('up')}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="bg-card shadow-premium group relative flex flex-col rounded-3xl p-8 transition-all duration-300"
                  >
                    <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full transition-all duration-300">
                      <ServiceIcon iconName={service.icon} />
                    </div>
                    <div className="mt-8">
                      <h3 className="text-foreground group-hover:text-primary mb-3 text-xl font-semibold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        to={`/servicos/${service.slug}`}
                        className="text-primary text-sm font-medium"
                      >
                        Saiba mais{' '}
                        <ArrowRight className="ml-1 inline h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 text-center"
              >
                <Link to="/servicos">
                  <Button variant="outline" size="lg">
                    Ver todas as soluções de Facilities
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="bg-surface-alt">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative overflow-hidden rounded-3xl p-8 text-center sm:p-12"
            >
              <div className="animate-pulse-glow absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsla(var(--primary),0.15),transparent_60%)]" />
              <div className="bg-primary/5 animate-float-slow absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl" />
              <div className="bg-primary/5 animate-float-medium absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-3xl" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
                  Pronto para dar o próximo passo?
                </h2>
                <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                  Encontre os profissionais certos para sua empresa ou cadastre
                  seu currículo para novas oportunidades.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link to="/empresas">
                    <Button variant="secondary" size="lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Solicitar orçamento
                    </Button>
                  </Link>
                  <Link to="/trabalhe-conosco">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-border/30 text-foreground hover:bg-muted"
                    >
                      Cadastrar currículo
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </Container>
        </Section>
      </div>
    </>
  );
}
