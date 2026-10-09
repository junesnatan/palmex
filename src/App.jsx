import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GarantiesPage from './pages/GarantiesPage';
import RealisationsPage from './pages/RealisationsPage';
import MethodologiePage from './pages/MethodologiePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('accueil');

  // Synchronisation avec l'URL hash pour navigation multi-pages réelle
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['accueil', 'services', 'garanties', 'realisations', 'methodologie', 'contact'].includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('accueil');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'services':
        return <ServicesPage setActivePage={setActivePage} />;
      case 'garanties':
        return <GarantiesPage setActivePage={setActivePage} />;
      case 'realisations':
        return <RealisationsPage setActivePage={setActivePage} />;
      case 'methodologie':
        return <MethodologiePage setActivePage={setActivePage} />;
      case 'contact':
        return <ContactPage />;
      case 'accueil':
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-light text-slate-800 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Contenu de la Page Dédiée */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer Institutionnel */}
      <Footer />
    </div>
  );
}
