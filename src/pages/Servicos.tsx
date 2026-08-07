import { motion } from 'framer-motion';
import { staggerReveal, revealUp } from '@/animations/scroll';
import { staggerItem } from '@/animations/fade';
import { Section } from '@/components/sections/Section';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { Container } from '@/components/common/Container';
import { mockServices } from '@/services/mock/services';
import { SERVICE_CATEGORIES } from '@/constants/services';

export default function Servicos() {
  const rhServices = mockServices.filter((s) =>
    SERVICE_CATEGORIES.rh.includes(s.slug),
  );
  const facilitiesServices = mockServices.filter((s) =>
    SERVICE_CATEGORIES.facilities.includes(s.slug),
  );

  return (
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
              Soluções para Empresas e Candidatos
            </motion.h1>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Da captação de talentos à gestão de profissionais — tudo em um só
              lugar.
            </motion.p>
          </motion.div>

          {/* Para Empresas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-2xl font-bold"
            >
              Para Empresas
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mt-2 mb-6 max-w-2xl text-sm"
            >
              Soluções em recrutamento, seleção e gestão de pessoas para
              encontrar o profissional certo para sua equipe.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerReveal(0.1)}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {rhServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Para Candidatos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="mt-16"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-2xl font-bold"
            >
              Para Candidatos
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mt-2 mb-6 max-w-2xl text-sm"
            >
              Cadastre seu currículo, encontre oportunidades e faça parte do
              nosso banco de talentos.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerReveal(0.1)}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              <motion.div variants={staggerItem('up')}>
                <div className="bg-card shadow-premium group hover:y-[-4] relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300">
                  <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-foreground mb-3 text-xl font-semibold">
                    Cadastro de Currículo
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm">
                    Cadastre seu currículo gratuitamente e entre no nosso banco
                    de talentos.
                  </p>
                  <a href="/trabalhe-conosco">
                    <span className="text-primary text-sm font-medium">
                      Cadastrar agora →
                    </span>
                  </a>
                </div>
              </motion.div>
              <motion.div variants={staggerItem('up')}>
                <div className="bg-card shadow-premium group hover:y-[-4] relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300">
                  <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-foreground mb-3 text-xl font-semibold">
                    Busca de Vagas
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm">
                    Encontre oportunidades alinhadas ao seu perfil profissional.
                  </p>
                  <a href="/vagas">
                    <span className="text-primary text-sm font-medium">
                      Ver vagas disponíveis →
                    </span>
                  </a>
                </div>
                <motion.div variants={staggerItem('up')}>
                  <div className="bg-card shadow-premium group hover:y-[-4] relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300">
                    <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5a2 2 0 012 2v1a2 2 0 11-2 2h-2a2 2 0 01-2-2v-1a2 2 0 112-2h.5"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-foreground mb-3 text-xl font-semibold">
                      Alertas de Emprego
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1 text-sm">
                      Receba notificações de novas vagas compatíveis com seu
                      perfil diretamente pelo WhatsApp.
                    </p>
                    <a href="/trabalhe-conosco">
                      <span className="text-primary text-sm font-medium">
                        Configurar alertas →
                      </span>
                    </a>
                  </div>
                </motion.div>
                <motion.div variants={staggerItem('up')}>
                  <div className="bg-card shadow-premium group hover:y-[-4] relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300">
                    <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.25v6.5m0 0l2.5 2.5M12 12.75l-2.5 2.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-foreground mb-3 text-xl font-semibold">
                      Orientação Profissional
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1 text-sm">
                      Receba dicas de carreira, CV e preparação para processos
                      seletivos da nossa equipe de RH.
                    </p>
                    <a href="/suporte">
                      <span className="text-primary text-sm font-medium">
                        Fale com um especialista →
                      </span>
                    </a>
                  </div>
                </motion.div>
                <motion.div variants={staggerItem('up')}>
                  <div className="bg-card shadow-premium group hover:y-[-4] relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300">
                    <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 17h2M9 15h6M7 7h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-foreground mb-3 text-xl font-semibold">
                      Atualização de Currículo
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1 text-sm">
                      Mantenha seu currículo sempre atualizado e destaque-se
                      para nossas empresas parceiras.
                    </p>
                    <a href="/trabalhe-conosco">
                      <span className="text-primary text-sm font-medium">
                        Atualizar agora →
                      </span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Para Empresas (Facilities) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="mt-16"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-2xl font-bold"
            >
              Soluções Operacionais (Facilities)
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mt-2 mb-6 max-w-2xl text-sm"
            >
              Como solução complementar, oferecemos terceirização de serviços
              operacionais: limpeza, segurança, portaria e zeladoria.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerReveal(0.1)}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {facilitiesServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
