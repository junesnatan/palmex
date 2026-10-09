import React from 'react';
import { Phone, MapPin, Mail, ArrowUpRight, Sprout, ShieldCheck } from 'lucide-react';
import { siteConfig, navLinks } from '../data/siteData';

export default function Footer({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-palm-950 text-white border-t border-palm-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Colonne 1 : Identité & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-palm-800 flex items-center justify-center text-emerald-400">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xl font-bold font-display tracking-tight text-white">
                  PALMEX
                </span>
                <span className="block text-xs font-medium text-emerald-400 uppercase tracking-wider">
                  Agro-Industrielle SARL
                </span>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Cabinet d'ingénierie agronomique et de gestion déléguée de palmeraies industrielles au Bénin. Notre mission est de sécuriser et optimiser vos investissements agricoles sur 25 ans.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garanties sous seing foncier, titre foncier & plants hybrides certifiés CRAPP.</span>
            </div>
          </div>

          {/* Colonne 2 : Navigation directe */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Coordonnées & Présence Territoriale */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-slate-200">
              Sièges & Contact (Bénin)
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-start gap-3 hover:text-emerald-400 transition-colors group"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-white group-hover:text-emerald-400">
                    {siteConfig.phone}
                  </span>
                  <span className="text-xs text-slate-400">Direction & Relations Investisseurs</span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{siteConfig.email}</span>
              </a>

              <div className="pt-2 border-t border-palm-900/80 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white block">Siège Abomey-Calavi</span>
                    <span className="text-xs text-slate-400">Carrefour Arconville, Abomey-Calavi</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white block">Direction Technique Za-Kpota</span>
                    <span className="text-xs text-slate-400">Zone Agro-Industrielle, Dép. du Zou</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Ligne inférieure de Copyright */}
        <div className="mt-12 pt-8 border-t border-palm-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Palmex Agro-Industrielle SARL. Tous droits réservés.</p>
          <p className="text-slate-400">Ingénierie Agronomique & Palmeraies Industrielles au Bénin</p>
        </div>
      </div>
    </footer>
  );
}
