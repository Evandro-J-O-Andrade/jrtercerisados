import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Clock,
  MessageSquare,
  Wrench,
  Handshake,
  Truck,
  Users,
  BookOpen,
  Send,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { COMPANY, WHATSAPP_MESSAGES, getWhatsAppUrl } from '@/config';
import { staggerReveal, revealUp } from '@/animations/scroll';
import { staggerItem } from '@/animations/fade';

const SUPPORT_CARDS = [
  {
    icon: MessageSquare,
    title: 'Comercial',
    description: 'Solicitar orçamento ou conhecer nossos serviços.',
    color: 'gold',
    message: WHATSAPP_MESSAGES.comercial,
  },
  {
    icon: Wrench,
    title: 'Suporte ao Cliente',
    description: 'Para quem já é cliente. Abra um atendimento.',
    color: 'navy',
    message: WHATSAPP_MESSAGES.suporte,
  },
  {
    icon: Handshake,
    title: 'Parceiros',
    description: 'Empresas interessadas em parceria comercial.',
    color: 'gold',
    message: WHATSAPP_MESSAGES.partners,
  },
  {
    icon: Truck,
    title: 'Fornecedores',
    description: 'Cadastro e contato comercial para fornecedores.',
    color: 'navy',
    message: WHATSAPP_MESSAGES.suppliers,
  },
  {
    icon: Users,
    title: 'Trabalhe Conosco',
    description: 'Envie seu currículo e conheça nossas oportunidades.',
    color: 'gold',
    message: WHATSAPP_MESSAGES.careers,
  },
  {
    icon: BookOpen,
    title: 'Documentação',
    description: 'LGPD, políticas e termos de uso.',
    color: 'navy',
    message: WHATSAPP_MESSAGES.contact,
  },
];

const CATEGORY_OPTIONS = [
  { value: '', label: 'Selecione uma categoria' },
  { value: 'comercial', label: 'Atendimento Comercial' },
  { value: 'financeiro', label: 'Financeiro' },
  { value: 'rh', label: 'RH' },
  { value: 'operacional', label: 'Operacional' },
  { value: 'supervisao', label: 'Supervisão' },
  { value: 'tecnologia', label: 'Tecnologia' },
  { value: 'contratos', label: 'Contratos' },
  { value: 'outros', label: 'Outros' },
];

const PRIORITY_OPTIONS = [
  { value: '', label: 'Selecione a prioridade' },
  { value: 'baixa', label: 'Baixa' },
  { value: 'media', label: 'Média' },
  { value: 'alta', label: 'Alta' },
  { value: 'urgente', label: 'Urgente' },
];

export default function Suporte() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    cliente: '',
    contrato: '',
    categoria: '',
    prioridade: '',
    assunto: '',
    descricao: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <Section className="bg-surface-alt">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerReveal(0.15)}
            className="text-center"
          >
            <motion.h2
              variants={revealUp}
              className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              Central de Atendimento
            </motion.h2>
            <motion.p
              variants={revealUp}
              className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
            >
              Estamos prontos para ajudar você. Escolha a opção que melhor
              atende sua necessidade.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Service Cards */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal(0.1)}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SUPPORT_CARDS.map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItem('up')}
                className="bg-card border-border hover:border-primary/30 group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300"
              >
                <div className="bg-primary/5 animate-float-slow absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl" />
                <div className="bg-primary/5 animate-float-medium absolute -bottom-10 -left-10 h-32 w-32 rounded-full blur-2xl" />

                <div className="relative">
                  <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-foreground text-xl font-bold">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {card.description}
                  </p>
                  <a
                    href={getWhatsAppUrl(COMPANY.whatsapp, card.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:gap-3"
                  >
                    <Phone className="h-4 w-4" />
                    Falar agora
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Support Form */}
      <Section className="bg-surface-alt">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              Formulário de Atendimento
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Preencha o formulário e nossa equipe entrará em contato o mais
              breve possível.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border-border mt-8 rounded-2xl border p-8 text-center"
              >
                <CheckCircle2 className="text-primary mx-auto h-16 w-16" />
                <h3 className="text-foreground mt-4 text-xl font-bold">
                  Solicitação recebida!
                </h3>
                <p className="text-muted-foreground mt-2">
                  Nossa equipe analisará sua solicitação e entrará em contato em
                  até 24 horas úteis.
                </p>
                <a
                  href={getWhatsAppUrl(
                    COMPANY.whatsapp,
                    WHATSAPP_MESSAGES.contactForm,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex"
                >
                  <Button variant="secondary" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Abrir WhatsApp
                  </Button>
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Nome <span className="text-danger">*</span>
                    </label>
                    <Input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Empresa
                    </label>
                    <Input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Telefone <span className="text-danger">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(11) 91234-5678"
                    />
                  </div>
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      E-mail <span className="text-danger">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Já é cliente?
                    </label>
                    <Select
                      name="cliente"
                      value={formData.cliente}
                      onChange={handleChange}
                    >
                      <option value="">Selecione</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </Select>
                  </div>
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Nº do contrato (opcional)
                    </label>
                    <Input
                      type="text"
                      name="contrato"
                      value={formData.contrato}
                      onChange={handleChange}
                      placeholder="Número do contrato"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Categoria <span className="text-danger">*</span>
                    </label>
                    <Select
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleChange}
                      required
                    >
                      {CATEGORY_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Prioridade <span className="text-danger">*</span>
                    </label>
                    <Select
                      name="prioridade"
                      value={formData.prioridade}
                      onChange={handleChange}
                      required
                    >
                      {PRIORITY_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    Assunto <span className="text-danger">*</span>
                  </label>
                  <Input
                    type="text"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    placeholder="Assunto da sua solicitação"
                  />
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    Descrição <span className="text-danger">*</span>
                  </label>
                  <Textarea
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    required
                    placeholder="Descreva sua necessidade em detalhes..."
                    rows={4}
                  />
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    Existe alguma necessidade específica que não foi listada
                    acima?
                  </label>
                  <Textarea
                    name="observacoes"
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder="Conte um pouco sobre sua necessidade..."
                    rows={3}
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="flex-1"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Solicitação
                  </Button>
                  <a
                    href={getWhatsAppUrl(
                      COMPANY.whatsapp,
                      WHATSAPP_MESSAGES.contactForm,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="secondary" size="lg" className="w-full">
                      <Phone className="mr-2 h-5 w-5" />
                      Falar no WhatsApp
                    </Button>
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </Container>
      </Section>

      {/* Horário de Atendimento */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border-border mx-auto max-w-2xl rounded-2xl border p-8"
          >
            <h3 className="text-foreground text-xl font-bold">
              Horário de Atendimento
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="text-primary h-5 w-5" />
                <span className="text-foreground">
                  Segunda a Sexta, 08:00 às 18:00
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-primary h-5 w-5" />
                <span className="text-foreground">Sábado, 08:00 às 12:00</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-muted-foreground h-5 w-5" />
                <span className="text-muted-foreground">Domingo — Fechado</span>
              </div>
            </div>
            <div className="border-border mt-6 border-t pt-4">
              <p className="text-muted-foreground text-sm">
                Tempo médio de resposta: até 15 minutos
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-surface-alt">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Respostas rápidas para as dúvidas mais comuns.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerReveal(0.1)}
            className="mx-auto mt-12 max-w-3xl space-y-4"
          >
            {[
              {
                question: 'Como solicitar um orçamento?',
                answer:
                  'Preencha o formulário de atendimento acima ou entre em contato pelo WhatsApp. Nossa equipe responde em até 24 horas úteis com uma proposta personalizada.',
              },
              {
                question: 'Qual o tempo de resposta?',
                answer:
                  'Nosso tempo médio de resposta é de até 15 minutos durante o horário de atendimento. Fora do horário, respondemos no próximo dia útil.',
              },
              {
                question: 'Vocês atendem emergências?',
                answer:
                  'Sim. Para situações urgentes, utilize o canal de WhatsApp e selecione a prioridade "Urgente". nossa equipe de plantão será acionada imediatamente.',
              },
              {
                question: 'Qual a área de atendimento?',
                answer: `Atendemos em mais de ${COMPANY.citiesCovered} cidades. Consulte sua região pelo formulário ou WhatsApp.`,
              },
              {
                question: 'Como acompanhar minha solicitação?',
                answer:
                  'Após o envio do formulário, você receberá um número de protocolo por e-mail. Use-o para acompanhar o status da sua solicitação.',
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                variants={staggerItem('up')}
                className="bg-card border-border overflow-hidden rounded-2xl border"
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => {
                    const el = document.getElementById(`faq-suporte-${index}`);
                    if (el) {
                      el.classList.toggle('hidden');
                    }
                  }}
                  aria-expanded="false"
                >
                  <span className="text-foreground text-sm font-semibold">
                    {faq.question}
                  </span>
                  <ChevronDown className="text-primary h-5 w-5 flex-shrink-0 transition-transform" />
                </button>
                <div id={`faq-suporte-${index}`} className="hidden px-6 pb-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
