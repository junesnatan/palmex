import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, ShieldCheck, Sprout } from 'lucide-react';
import { siteConfig, navLinks } from '../data/siteData';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('accueil')} 
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-palm-900 flex items-center justify-center text-emerald-400 shadow-sm group-hover:bg-palm-800 transition-colors">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xl font-bold font-display tracking-tight text-palm-950 group-hover:text-palm-700 transition-colors">
                PALMEX
              </span>
              <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider">
                Agro-Industrielle SARL
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-palm-800 bg-emerald-50/80 font-bold'
                      : 'text-slate-600 hover:text-palm-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Contact Direct & Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-palm-700 transition-colors py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{siteConfig.phone}</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-palm-900 text-white text-sm font-medium hover:bg-palm-800 transition-all shadow-sm active:scale-95"
            >
              <span>Investir sur 25 ans</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-2 text-palm-900 hover:bg-slate-100 rounded-lg"
              title="Appeler Palmex"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-palm-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-50 text-palm-800 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-slate-200 text-slate-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{siteConfig.phone}</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-palm-900 text-white font-semibold text-sm"
            >
              <span>Investir sur 25 ans</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
