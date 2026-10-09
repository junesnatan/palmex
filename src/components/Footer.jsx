import React from 'react';
import { Phone, MapPin, Mail, Sprout } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-palm-950 text-white border-t border-palm-900/80 py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ligne unique compacte et épurée */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          
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

          {/* Coordonnées directes */}
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

          {/* Copyright sobre (Zéro lien de navigation) */}
          <div className="text-[11px] text-slate-500 text-center md:text-right">
            © {new Date().getFullYear()} Palmex. Tous droits réservés.
          </div>

        </div>

      </div>
    </footer>
  );
}
