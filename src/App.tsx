import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { PageLoader } from '@/components/ui/PageLoader';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

const Home = lazy(() => import('@/pages/Home'));
const Sobre = lazy(() => import('@/pages/Sobre'));
const Servicos = lazy(() => import('@/pages/Servicos'));
const ServicoDetalhe = lazy(() => import('@/pages/ServicoDetalhe'));
const Vagas = lazy(() => import('@/pages/Vagas'));
const VagaDetalhe = lazy(() => import('@/pages/VagaDetalhe'));
const Empresas = lazy(() => import('@/pages/Empresas'));
const Candidatos = lazy(() => import('@/pages/Candidatos'));
const Cadastro = lazy(() => import('@/pages/Cadastro'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Contato = lazy(() => import('@/pages/Contato'));
const Blog = lazy(() => import('@/pages/Blog'));
const Login = lazy(() => import('@/pages/Login'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pb-20 lg:pb-0">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vagas" element={<Vagas />} />
            <Route path="/vagas/:slug" element={<VagaDetalhe />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/candidatos" element={<Candidatos />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/servicos/:slug" element={<ServicoDetalhe />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}

export default App;
