import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { cn } from '@/utils';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { NAVIGATION_LINKS } from '@/config/navigation';
import {
  COMPANY,
  SOCIAL_LINKS,
  getWhatsAppUrl,
  getWhatsAppMessage,
} from '@/config';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const menuVariants = {
    hidden: {
      opacity: 0,
      maxHeight: 0,
      transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] as const },
    },
    visible: {
      opacity: 1,
      maxHeight: 600,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1] as const,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        scrolled ? 'bg-card/85 shadow-lg backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src={
              resolvedTheme === 'dark'
                ? '/images/brand/logo-white.svg'
                : '/images/brand/logo.svg'
            }
            alt={COMPANY.name}
            className="h-10 w-auto"
            whileHover={{ scale: 1.05 }}
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                location.pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {resolvedTheme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          {isAuthenticated ? (
            <Link to="/dashboard">
              <Button variant="primary">Painel</Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="primary">Login</Button>
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {resolvedTheme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'inline-flex items-center justify-center rounded-md p-2 transition-colors',
              isOpen
                ? 'text-foreground hover:bg-muted'
                : 'text-muted-foreground hover:bg-muted',
            )}
            aria-expanded={isOpen}
            aria-label="Abrir menu"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="border-border bg-card/95 shadow-lg backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <nav className="flex flex-col gap-2 py-4">
                {NAVIGATION_LINKS.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block text-base font-medium transition-colors duration-200',
                        location.pathname === link.href
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-primary',
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={itemVariants}
                  className="border-border mt-4 border-t pt-4"
                >
                  <p className="text-muted-foreground mb-3 text-xs font-semibold uppercase">
                    Fale Conosco
                  </p>
                  <div className="flex gap-3">
                    <motion.a
                      href={getWhatsAppUrl(
                        COMPANY.whatsapp,
                        getWhatsAppMessage({ Serviço: 'Contato pelo site' }),
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="bg-primary text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                      aria-label="WhatsApp"
                    >
                      <Phone className="h-5 w-5" />
                    </motion.a>
                    {SOCIAL_LINKS.email && (
                      <motion.a
                        href={SOCIAL_LINKS.email}
                        whileHover={{ scale: 1.1 }}
                        className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                        aria-label="E-mail"
                      >
                        <span className="text-xs">@</span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-4">
                  <Link to="/login">
                    <Button variant="primary" className="w-full">
                      Login
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
