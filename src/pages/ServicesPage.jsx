import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData, siteConfig } from '../data/siteData';

export default function ServicesPage({ setActivePage }) {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Épuré */}
      <section className="bg-palm-950 text-white pt-14 pb-16 border-b border-palm-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase block">
            Ingénierie & Compétences
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white max-w-2xl">
            Nos Pôles d'Ingénierie Agronomique
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Une prise en charge technique complète : du foncier à la commercialisation industrielle.
          </p>
        </div>
      </section>

      {/* Liste des Volets Techniques (Légers et Aérés) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div 
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Photo */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[320px] object-cover"
                  />
                </div>
              </div>

              {/* Texte Concis */}
              <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : ''}`}>
                <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase block">
                  Volet #{service.num}
                </span>

                <h2 className="text-2xl font-bold font-display text-slate-900">
                  {service.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => navigateTo('contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-palm-900 hover:bg-palm-800 text-white font-semibold text-xs transition-all"
                  >
                    <span>Nous consulter sur ce volet</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* CTA Léger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-display text-white">
              Une question technique sur votre parcelle ?
            </h3>
            <p className="text-slate-400 text-xs">
              Nos ingénieurs sont joignables directement au {siteConfig.phone}.
            </p>
          </div>

          <button
            onClick={() => navigateTo('contact')}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shrink-0"
          >
            Nous Contacter
          </button>
        </div>
      </section>

    </div>
  );
}
