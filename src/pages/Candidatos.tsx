import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { SEO } from '@/components/ui/SEO';
import { staggerReveal, revealUp } from '@/animations/scroll';
import { staggerItem } from '@/animations/fade';
import {
  ArrowRight,
  FileText,
  Search,
  ClipboardList,
  RefreshCw,
} from 'lucide-react';

export default function Candidatos() {
  return (
    <>
      <SEO
        title="Encontre seu Emprego — Cadastre seu Currículo | J&S"
        description="Cadastre seu currículo no Banco de Talentos e encontre as oportunidades compatíveis com seu perfil."
        keywords={[
          'empregos',
          'currículo',
          'banco de talentos',
          'candidatura',
          'vagas de emprego',
        ]}
        type="WebSite"
      />
      <div className="min-h-screen pt-16 lg:pt-20">
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
                Sua próxima oportunidade começa aqui
              </motion.h1>
              <motion.p
                variants={revealUp}
                className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
              >
                Cadastre seu currículo, encontre vagas compatíveis e participe
                dos nossos processos seletivos.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerReveal(0.1)}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  title: 'Cadastrar currículo',
                  desc: 'Cadastre seu currículo gratuitamente e entre no nosso banco de talentos.',
                  icon: FileText,
                  to: '/trabalhe-conosco',
                },
                {
                  title: 'Buscar vagas',
                  desc: 'Encontre oportunidades alinhadas ao seu perfil profissional.',
                  icon: Search,
                  to: '/vagas',
                },
                {
                  title: 'Acompanhar processos',
                  desc: 'Acompanhe o status dos seus processos seletivos em um só lugar.',
                  icon: ClipboardList,
                  to: '/candidatos',
                },
                {
                  title: 'Atualizar perfil',
                  desc: 'Mantenha seu currículo sempre atualizado para novas oportunidades.',
                  icon: RefreshCw,
                  to: '/trabalhe-conosco',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem('up')}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="bg-card shadow-premium group relative flex flex-col rounded-3xl p-8 transition-all duration-300"
                >
                  <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full transition-all duration-300">
                    <item.icon className="h-8 w-8 transition-transform group-hover:scale-110" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-foreground group-hover:text-primary mb-3 text-xl font-semibold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    <Link
                      to={item.to}
                      className="text-primary text-sm font-medium"
                    >
                      Acessar <ArrowRight className="ml-1 inline h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>
      </div>
    </>
  );
}
