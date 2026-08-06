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
const Clientes = lazy(() => import('@/pages/Clientes'));
const Parceiros = lazy(() => import('@/pages/Parceiros'));
const Fornecedores = lazy(() => import('@/pages/Fornecedores'));
const TrabalheConosco = lazy(() => import('@/pages/TrabalheConosco'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Suporte = lazy(() => import('@/pages/Suporte'));
const ProcessoSeletivo = lazy(() => import('@/pages/ProcessoSeletivo'));
const Contato = lazy(() => import('@/pages/Contato'));
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
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/servicos/:slug" element={<ServicoDetalhe />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/fornecedores" element={<Fornecedores />} />
            <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
            <Route path="/processo-seletivo" element={<ProcessoSeletivo />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
