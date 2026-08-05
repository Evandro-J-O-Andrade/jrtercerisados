import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Shield } from 'lucide-react';
import { cn } from '@/utils';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { NAVIGATION_LINKS } from '@/config/navigation';

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

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        scrolled ? 'bg-card/90 shadow-md backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
            <Shield className="text-primary-foreground h-6 w-6" />
          </div>
          <span className="text-foreground text-xl font-bold tracking-tight">
            JS<span className="text-primary">Terceirizados</span>
          </span>
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground hover:bg-muted inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-border bg-card border-t lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-3">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-base font-medium transition-colors',
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/login" className="pt-2">
                <Button variant="primary" className="w-full">
                  Login
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
