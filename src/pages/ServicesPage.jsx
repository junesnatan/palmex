import React from 'react';
import { 
  ShieldCheck, 
  Sprout, 
  Compass, 
  Building2, 
  Factory, 
  CheckCircle2, 
  ArrowRight, 
  Phone 
} from 'lucide-react';
import { servicesData, siteConfig } from '../data/siteData';

export default function ServicesPage({ setActivePage }) {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* Header de Page Épuré */}
      <section className="bg-palm-950 text-white pt-16 pb-20 border-b border-palm-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
            Nos Pôles d'Intervention
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl">
            Ingénierie Agronomique & Gestion Déléguée de Pointe
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Une expertise technique intégrée, de la sélection foncière initiale jusqu'à la commercialisation industrielle des régimes de palme au Bénin.
          </p>
        </div>
      </section>

      {/* Liste des Volets Techniques avec Présentation Grand Format */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div 
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Image d'illustration réaliste */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-palm-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    Volet {service.num}
                  </div>
                </div>
              </div>

              {/* Contenu textuel */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                <div className="text-emerald-700 font-bold text-sm tracking-widest uppercase">
                  Pôle Technique #{service.num}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-tight">
                  {service.title}
                </h2>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {service.fullDesc}
                </p>

                {/* Liste des spécifications */}
                <div className="space-y-3 pt-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => navigateTo('contact')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-palm-900 hover:bg-palm-800 text-white font-semibold text-sm transition-all"
                  >
                    <span>Consulter nos ingénieurs sur ce volet</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </button>
                </div>

              </div>

            </div>
          );
        })}
      </section>

      {/* Bannière de Synthèse & Prise de Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Besoin d'un accompagnement personnalisé pour votre projet ?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Nos ingénieurs agronomiques réalisent l'étude préalable de votre sol, le dimensionnement de vos parcelles et l'estimation de rentabilité sur 25 ans.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={() => navigateTo('contact')}
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all text-center"
            >
              Démarrer Mon Projet
            </button>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm transition-all text-center"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
