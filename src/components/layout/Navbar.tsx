import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Sun,
  Moon,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { cn } from '@/utils';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { NAVIGATION_LINKS } from '@/config/navigation';
import { IMAGES } from '@/config/images';
import {
  COMPANY,
  SOCIAL_LINKS,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '@/config';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M19.381 3.64c.004.023.017.044.021.066.393 2.383.36 4.784-.097 7.166-.457 2.391-2.318 4.443-4.578 5.291-2.26.848-4.675.796-6.899-.108-2.225-.904-3.964-2.713-4.535-4.925-.572-2.212-.266-4.532.95-6.445 1.216-1.913 3.146-3.256 5.334-3.737 2.188-.481 4.445-.173 6.49-1.077v3.022c-1.732.503-2.968 2-3.499 3.845-.532 1.843-.214 3.898 0 5.718h6.461c.166-2.188.158-4.38-.097-6.565-.255-2.183-1.173-4.242-2.682-5.822-1.51-1.581-3.333-2.57-5.262-2.856-1.929-.285-3.92-.08-5.732.644-1.814.726-3.25 2.115-4.068 3.967-1.24 2.85-.928 6.17.897 8.607 1.825 2.438 4.727 3.968 7.752 3.968h.094c.443.015.887.022 1.329.022h.01c1.937 0 3.898-.279 5.786-.829.983-.284 2.005-.664 2.917-1.207.296-.175.568-.379.822-.603a6.59 6.59 0 0 0-.693-1.203c-.686-.804-1.534-1.504-2.549-1.967-.955-.432-1.93-.66-2.932-.683h-.026c-.844-.011-1.692.097-2.513.324-1.547.376-2.894 1.296-3.786 2.57-.18.264-.346.536-.496.821-1.433-.594-2.896-1.18-4.335-1.751-1.44-.569-2.846-1.127-4.216-1.665-1.37-.538-2.704-1.053-4.003-1.547a10.46 10.46 0 0 1 0-6.538c0-.015.008-.03.008-.045a7.875 7.875 0 0 0 0-1.592c0-.034-.016-.067-.024-.101a9.556 9.556 0 0 1 2.015 1.355c.897.68 1.952 1.154 3.06.83.057-.013.114-.027.17-.04.625 1.103 1.543 1.978 2.597 2.556.962.53 2.017.727 3.061.564.256-.037.506-.095.749-.161-1.515-.83-3.196-1.29-4.912-1.348-.741-.023-.867-.894-1.67-1.051-1.26-.28-2.505-.217-3.717.091-1.213.308-2.372.993-3.398 2.004-1.026 1.011-1.814 2.255-2.306 3.647z" />
  </svg>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLButtonElement | null>(null);
  const { resolvedTheme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLButtonElement;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.getElementById('mobile-drawer-close')?.focus();
      }, 0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleDrawerKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>): void => {
      if (e.key !== 'Tab' || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [],
  );

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

  const drawerVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
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
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-4 pl-2">
          <motion.img
            src={IMAGES.logo.dark}
            alt={COMPANY.name}
            className="drop-shadow-glow h-12 w-auto"
            whileHover={{ scale: 1.05 }}
            loading="eager"
          />
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-primary drop-shadow-glow">J&amp;S</span>{' '}
            <span className="text-foreground">Terceirizados</span>
          </h1>
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
          <Button
            to="/trabalhe-conosco"
            variant="outline"
            size="sm"
            className="text-xs font-medium"
          >
            Cadastrar Currículo
          </Button>
          {isAuthenticated ? (
            <Link to="/dashboard">
              <Button variant="primary" size="sm">
                Painel
              </Button>
            </Link>
          ) : (
            <Link to="/clientes">
              <Button variant="primary" size="sm">
                Divulgar Vaga
              </Button>
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

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              key="mobile-drawer"
              ref={drawerRef}
              onKeyDown={handleDrawerKeyDown}
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-card fixed top-0 right-0 z-50 h-full w-[85%] max-w-md shadow-2xl lg:hidden"
              style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
              <div className="flex items-center justify-between p-4">
                <span className="text-foreground text-lg font-semibold">
                  Menu
                </span>
                <Button
                  id="mobile-drawer-close"
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex flex-col gap-1 px-4 py-2">
                {NAVIGATION_LINKS.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200',
                        location.pathname === link.href
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants}>
                  <Link
                    to="/trabalhe-conosco"
                    onClick={() => setIsOpen(false)}
                    className="bg-primary text-primary-foreground rounded-lg px-4 py-3 text-center text-base font-medium"
                  >
                    Cadastrar Currículo
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    to={isAuthenticated ? '/dashboard' : '/clientes'}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:bg-muted hover:text-foreground block rounded-lg px-4 py-3 text-base font-medium transition-colors"
                  >
                    {isAuthenticated ? 'Painel' : 'Divulgar Vaga'}
                  </Link>
                </motion.div>
              </nav>

              <div className="border-border mt-4 border-t px-4 py-6">
                <p className="text-muted-foreground mb-4 text-xs font-semibold tracking-wider uppercase">
                  Redes Sociais
                </p>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={getWhatsAppUrl(
                      COMPANY.whatsapp,
                      WHATSAPP_MESSAGES.whatsappButton,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                    aria-label="WhatsApp"
                  >
                    <Phone className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                    aria-label="TikTok"
                  >
                    <TikTokIcon className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
