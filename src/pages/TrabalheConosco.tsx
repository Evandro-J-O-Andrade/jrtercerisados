import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Send, Briefcase } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { mockSubmitCandidate } from '@/services/mock/curriculos';
import { COMPANY, getWhatsAppUrl, getWhatsAppMessage } from '@/config';
import { cn } from '@/utils';

const positionOptions = [
  { value: 'auxiliar-limpeza', label: 'Auxiliar de Limpeza' },
  { value: 'controlador-acesso', label: 'Controlador de Acesso' },
  { value: 'zelador', label: 'Zelador' },
  { value: 'porteiro', label: 'Porteiro' },
  { value: 'vigilante', label: 'Vigilante' },
  { value: 'recepcionista', label: 'Recepcionista' },
  { value: 'supervisor', label: 'Supervisor' },
  { value: 'fiscal-piso', label: 'Fiscal de Piso' },
];

const candidateSchema = z
  .object({
    name: z.string().min(2, 'Nome é obrigatório'),
    cpf: z.string().optional(),
    rg: z.string().optional(),
    phone: z.string().min(10, 'Telefone deve ter pelo menos 10 caracteres'),
    email: z.string().email('E-mail inválido'),
    city: z.string().min(2, 'Cidade é obrigatória'),
    position: z.string().min(1, 'Selecione uma vaga'),
    experience: z.string().min(2, 'Experiência é obrigatória'),
    courses: z.string().optional(),
    availability: z.string().optional(),
    schedule: z.string().optional(),
    resume: z.string().min(2, 'Currículo é obrigatório'),
  })
  .superRefine((data, ctx) => {
    if (data.position === 'auxiliar-limpeza') {
      if (!data.cpf || data.cpf.length < 11) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'CPF deve ter 11 dígitos',
          path: ['cpf'],
        });
      }
      if (!data.rg || data.rg.length < 5) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'RG é obrigatório',
          path: ['rg'],
        });
      }
    }
    if (data.position === 'controlador-acesso' || data.position === 'zelador') {
      if (!data.courses || data.courses.length < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Cursos são obrigatórios',
          path: ['courses'],
        });
      }
    }
    if (data.position === 'controlador-acesso') {
      if (!data.schedule || data.schedule.length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Escala é obrigatória',
          path: ['schedule'],
        });
      }
    }
    if (data.position === 'zelador') {
      if (!data.availability || data.availability.length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Disponibilidade é obrigatória',
          path: ['availability'],
        });
      }
    }
  });

type CandidateFormData = z.infer<typeof candidateSchema>;

export default function TrabalheConosco() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CandidateFormData>({
    resolver: zodResolver(candidateSchema),
    defaultValues: {
      position: '',
    },
  });

  const onSubmit = async (data: CandidateFormData): Promise<void> => {
    mockSubmitCandidate({
      name: data.name,
      cpf: data.cpf ?? '',
      rg: data.rg ?? '',
      phone: data.phone,
      email: data.email,
      city: data.city,
      experience: data.experience,
      position: data.position,
      resume: data.resume,
      availability: data.availability ?? '',
      courses: data.courses ?? '',
      status: 'received',
    });
    setSubmitted(true);
    reset();
    setSelectedPosition('');
  };

  if (submitted) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center"
        >
          <div className="bg-success/10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
            <CheckCircle2 className="text-success h-10 w-10" />
          </div>
          <h2 className="text-foreground mb-4 text-2xl font-bold">
            Currículo Enviado!
          </h2>
          <p className="text-muted-foreground mb-8">
            Seu currículo foi recebido. A equipe de RH analisará seu perfil e
            entrará em contato caso haja interesse.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={getWhatsAppUrl(
                COMPANY.whatsapp,
                getWhatsAppMessage({ Origem: 'Candidatura pelo site' }),
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Continuar no WhatsApp
              </Button>
            </a>
            <Link to="/">
              <Button variant="outline" size="lg">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <Section>
        <Container>
          <div className="mb-12 text-center">
            <h1 className="text-foreground text-3xl font-bold sm:text-4xl">
              Trabalhe Conosco
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Escolha a vaga desejada e envie seu currículo.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                  <Briefcase className="h-4 w-4" />
                  Vagas Abertas
                </div>
                <p className="text-muted-foreground">
                  Selecione a vaga desejada e preencha o formulário com seus
                  dados e anexe seu currículo.
                </p>

                <div className="mt-6 space-y-3">
                  {positionOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        'flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors',
                        selectedPosition === opt.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary',
                      )}
                    >
                      <input
                        type="radio"
                        name="position"
                        value={opt.value}
                        checked={selectedPosition === opt.value}
                        onChange={(e) => setSelectedPosition(e.target.value)}
                        className="text-primary focus:ring-primary h-4 w-4"
                      />
                      <span className="text-muted-foreground text-sm font-medium">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              {selectedPosition && (
                <motion.form
                  key={selectedPosition}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-card shadow-premium rounded-2xl p-8"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <Input
                        label="Nome Completo *"
                        placeholder="Seu nome completo"
                        error={errors.name?.message}
                        {...register('name')}
                      />
                    </div>

                    {selectedPosition === 'auxiliar-limpeza' && (
                      <>
                        <div>
                          <Input
                            label="CPF *"
                            placeholder="000.000.000-00"
                            error={errors.cpf?.message}
                            {...register('cpf')}
                          />
                        </div>
                        <div>
                          <Input
                            label="RG *"
                            placeholder="00.000.000-0"
                            error={errors.rg?.message}
                            {...register('rg')}
                          />
                        </div>
                      </>
                    )}

                    {selectedPosition === 'controlador-acesso' && (
                      <>
                        <div className="md:col-span-2">
                          <Input
                            label="Cursos Realizados *"
                            placeholder="Ex: Curso de Controle de Acesso, NR-10..."
                            error={errors.courses?.message}
                            {...register('courses')}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Input
                            label="Escala Desejada *"
                            placeholder="Ex: 12x36, Diurno, Noturno..."
                            error={errors.schedule?.message}
                            {...register('schedule')}
                          />
                        </div>
                      </>
                    )}

                    {selectedPosition === 'zelador' && (
                      <>
                        <div className="md:col-span-2">
                          <Input
                            label="Cursos Realizados *"
                            placeholder="Ex: Zeladoria, Limpeza Predial..."
                            error={errors.courses?.message}
                            {...register('courses')}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Input
                            label="Disponibilidade *"
                            placeholder="Ex: Integral, Manhã, Tarde..."
                            error={errors.availability?.message}
                            {...register('availability')}
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <Input
                        label="Telefone *"
                        placeholder="(11) 99999-9999"
                        error={errors.phone?.message}
                        {...register('phone')}
                      />
                    </div>
                    <div>
                      <Input
                        label="E-mail *"
                        type="email"
                        placeholder="seu@email.com"
                        error={errors.email?.message}
                        {...register('email')}
                      />
                    </div>
                    <div>
                      <Input
                        label="Cidade *"
                        placeholder="São Paulo"
                        error={errors.city?.message}
                        {...register('city')}
                      />
                    </div>
                    <div>
                      <Input
                        label="Experiência *"
                        placeholder="Ex: 2 anos na área..."
                        error={errors.experience?.message}
                        {...register('experience')}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Textarea
                        label="Currículo *"
                        placeholder="Descreva sua experiência profissional..."
                        rows={4}
                        error={errors.resume?.message}
                        {...register('resume')}
                      />
                    </div>
                  </div>

                  <input type="hidden" {...register('position')} />

                  <div className="mt-8">
                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      className="w-full"
                      loading={isSubmitting}
                      leftIcon={<Send className="h-5 w-5" />}
                    >
                      Enviar Currículo
                    </Button>
                  </div>
                </motion.form>
              )}

              {!selectedPosition && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-card shadow-premium rounded-2xl p-8 text-center"
                >
                  <Briefcase className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                  <p className="text-muted-foreground">
                    Selecione uma vaga acima para preencher o formulário.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
