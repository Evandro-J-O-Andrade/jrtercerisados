import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, LogIn, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SafeImage } from '@/components/ui/SafeImage';
import { useAuth } from '@/contexts/AuthContext';
import { IMAGES } from '@/config/images';

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData): Promise<void> => {
    setError('');
    const success = await login(data.email, data.password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('E-mail ou senha inválidos');
    }
  };

  if (isAuthenticated) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center"
        >
          <div className="bg-success/10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
            <Shield className="text-success h-10 w-10" />
          </div>
          <h2 className="text-foreground mb-4 text-2xl font-bold">
            Você já está logado!
          </h2>
          <p className="text-muted-foreground mb-8">
            Redirecionando para o painel administrativo...
          </p>
          <Link to="/dashboard">
            <Button variant="primary" size="lg">
              Ir para o Painel
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <SafeImage
        src={IMAGES.hero.login.src}
        fallbackSrc={IMAGES.hero.login.fallback}
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-[hsl(215,35%,8%)]/85 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="border-border/40 bg-card/70 shadow-glass rounded-3xl border p-8 backdrop-blur-xl">
          <div className="mb-8 text-center">
            <div className="bg-primary/20 text-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-sm">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-foreground text-3xl font-bold">
              Painel Administrativo
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
              Acesse sua conta para gerenciar cadastros e relatórios.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {error && (
              <div className="bg-destructive/10 text-destructive rounded-xl p-4 text-sm">
                {error}
              </div>
            )}

            <Input
              label="E-mail"
              type="email"
              placeholder="admin@jstercerizados.com.br"
              error={errors.email?.message}
              {...register('email')}
            />

            <div className="relative">
              <Input
                label="Senha"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                error={errors.password?.message}
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground absolute top-9 right-3"
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="border-input text-primary focus:ring-primary h-4 w-4 rounded"
                />
                <span className="text-muted-foreground text-sm">
                  Lembrar de mim
                </span>
              </label>
              <a
                href="#"
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                Esqueceu a senha?
              </a>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="xl"
              className="w-full"
              loading={isSubmitting}
              leftIcon={<LogIn className="h-5 w-5" />}
            >
              Entrar
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground/80 text-xs">
              Área restrita — Acesso autorizado apenas.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
