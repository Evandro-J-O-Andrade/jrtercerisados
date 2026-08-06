import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { COMPANY, getWhatsAppUrl, getWhatsAppMessage } from '@/config';
import { staggerReveal, revealUp } from '@/animations/scroll';
import { staggerItem } from '@/animations/fade';

const faqData = [
  {
    question: 'Como funciona a terceirização de serviços?',
    answer:
      'Nossa terceirização segue um processo estruturado: você solicita um orçamento pelo site ou WhatsApp, nossa equipe analisa suas necessidades, elaboramos uma proposta personalizada e, após aprovação, iniciamos a operação com profissionais treinados e equipados.',
  },
  {
    question: 'Vocês atendem condomínios?',
    answer:
      'Sim. Atendemos condomínios residenciais e comerciais de todos os portes, com serviços de segurança patrimonial, portaria, zeladoria, limpeza e facilities personalizados para cada necessidade.',
  },
  {
    question: 'Trabalham com empresas?',
    answer:
      'Sim. Nossos serviços são voltados para empresas de todos os segmentos, incluindo corporações, indústrias, shoppings, hospitais, escolas e órgãos públicos.',
  },
  {
    question: 'Como solicitar orçamento?',
    answer:
      'Você pode solicitar um orçamento pelo site através do formulário de contato ou diretamente pelo WhatsApp. Nossa equipe responde em até 24 horas úteis com uma proposta personalizada.',
  },
  {
    question: 'Como enviar currículo?',
    answer:
      'Acesse a página "Trabalhe Conosco", preencha o formulário com seus dados e anexe seu currículo em PDF ou DOC. Nossa equipe de recrutamento analisa o perfil e entra em contato se houver compatibilidade.',
  },
  {
    question: 'Como funciona a supervisão dos serviços?',
    answer:
      'Utilizamos uma plataforma integrada de monitoramento e gestão em tempo real. Cada operação conta com supervisores dedicados, relatórios periódicos de desempenho e KPIs alinhados às necessidades do cliente.',
  },
  {
    question: 'Quais regiões atendem?',
    answer: `Atendemos em mais de ${COMPANY.citiesCovered} cidades, com cobertura completa para garantir agilidade e presença onde você precisa. Consulte sua região pelo WhatsApp.`,
  },
  {
    question: 'Quais são os diferenciais da empresa?',
    answer:
      'Nossos diferenciais incluem: tecnologia integrada de monitoramento, profissionais certificados e continuamente treinados, garantia de qualidade com SLA e KPIs, suporte 24/7 e gestão de performance em tempo real.',
  },
  {
    question: 'Qual o prazo para início do serviço?',
    answer:
      'Após a aprovação da proposta, iniciamos a operação em até 7 dias úteis, com profissionais treinados e equipados para garantir a continuidade do serviço.',
  },
  {
    question: 'Vocês oferecem garantia de qualidade?',
    answer:
      'Sim. Trabalhamos com SLA, KPIs e compliance total das normas do setor, com gestão de performance em tempo real e relatórios periódicos de avaliação.',
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      <Section className="bg-surface-alt">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              Perguntas Frequentes
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Respostas para as dúvidas mais comuns sobre nossos serviços e
              processos de terceirização.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal(0.1)}
            className="mx-auto max-w-3xl space-y-4"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.question}
                variants={staggerItem('up')}
                className="bg-card shadow-premium border-border overflow-hidden rounded-2xl border"
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="text-foreground text-sm font-semibold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-primary h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground px-6 pb-6 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl p-8 text-center sm:p-12"
          >
            <div className="bg-primary/5 animate-float-slow absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl" />
            <div className="bg-primary/5 animate-float-medium absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-3xl" />

            <motion.div className="relative">
              <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
                Ainda tem dúvidas?
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                Nossa equipe está pronta para atender você. Entre em contato
                pelo WhatsApp ou preencha o formulário.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <motion.a
                  href={getWhatsAppUrl(
                    COMPANY.whatsapp,
                    getWhatsAppMessage({
                      Origem: 'FAQ - Falar no WhatsApp',
                    }),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="secondary" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                </motion.a>
                <Link to="/contato">
                  <Button variant="outline" size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar E-mail
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
