import React from 'react';
import { Phone, MapPin, Mail, Sprout } from 'lucide-react';
import { siteConfig, navLinks } from '../data/siteData';

export default function Footer({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-palm-950 text-white border-t border-palm-900/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ligne principale compacte */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-palm-900/60">
          
          {/* Logo compact */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-palm-800 flex items-center justify-center text-emerald-400">
              <Sprout className="w-4 h-4" />
            </div>
            <div>
              <span className="text-base font-bold font-display tracking-tight text-white block">
                PALMEX SARL
              </span>
              <span className="text-[11px] text-slate-400 block -mt-0.5">
                Ingénierie agronomique & palmeraies industrielles au Bénin
              </span>
            </div>
          </div>

          {/* Coordonnées rapides en ligne */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-300">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{siteConfig.phone}</span>
            </a>

            <span className="text-slate-600 hidden sm:inline">•</span>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{siteConfig.email}</span>
            </a>

            <span className="text-slate-600 hidden sm:inline">•</span>

            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Abomey-Calavi & Za-Kpota</span>
            </div>
          </div>

        </div>

        {/* Liens rapides & Copyright compact */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex flex-wrap gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Palmex Agro-Industrielle. Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
}
