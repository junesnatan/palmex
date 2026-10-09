import React from 'react';
import { Camera, FileText, Factory, ArrowRight } from 'lucide-react';
import { stepsMethodology, siteConfig } from '../data/siteData';

export default function MethodologiePage({ setActivePage }) {
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
            Processus en 5 Étapes
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white max-w-2xl">
            La Méthode Palmex
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Un protocole standardisé de la friche au plein rendement industriel.
          </p>
        </div>
      </section>

      {/* 5 Étapes Concises */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {stepsMethodology.map((stepItem) => (
            <div 
              key={stepItem.step}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-700 w-14 shrink-0">
                  #{stepItem.step}
                </span>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {stepItem.duration}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {stepItem.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-1">
                    {stepItem.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outils de Suivi (Concise) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <h2 className="text-xl font-bold font-display text-slate-900">
            Transparence & Suivi Investisseur
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <Camera className="w-5 h-5 text-emerald-700" />
              <h4 className="font-bold text-slate-900 text-sm">Photos & GPS</h4>
              <p className="text-slate-600 text-xs">Vidéos et clichés géolocalisés de l'évolution de la parcelle.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <FileText className="w-5 h-5 text-emerald-700" />
              <h4 className="font-bold text-slate-900 text-sm">Bulletins Agronomiques</h4>
              <p className="text-slate-600 text-xs">Rapports d'entretien et bilans phytosanitaires trimestriels.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <Factory className="w-5 h-5 text-emerald-700" />
              <h4 className="font-bold text-slate-900 text-sm">Bordereaux de Pesée</h4>
              <p className="text-slate-600 text-xs">Traçabilité complète des tonnages livrés à l'usine d'extraction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <button
          onClick={() => navigateTo('contact')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-palm-900 hover:bg-palm-800 text-white font-semibold text-xs transition-all"
        >
          <span>Démarrer votre projet</span>
          <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
        </button>
      </section>

    </div>
  );
}
