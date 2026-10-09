import React from 'react';
import { 
  MapPin, 
  Calendar, 
  ArrowRight 
} from 'lucide-react';
import { projectsData } from '../data/siteData';

export default function RealisationsPage({ setActivePage }) {
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
            Réalisations de Terrain
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white max-w-2xl">
            Nos Palmeraies & Déploiements
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Parcelles aménagées, pépinières certifiées et unités de récolte active au Bénin.
          </p>
        </div>
      </section>

      {/* Métriques Clés */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-700 block">
              98.5%
            </span>
            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mt-0.5">
              Taux de Reprise
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-700 block">
              143 Pl/ha
            </span>
            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mt-0.5">
              Densité Triangle
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-700 block">
              &lt; 48 Heures
            </span>
            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mt-0.5">
              Livraison Usine
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-700 block">
              25 Ans
            </span>
            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mt-0.5">
              Suivi Garanti
            </span>
          </div>
        </div>
      </section>

      {/* Cartes de Projets Épurées */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-palm-950/80 backdrop-blur-md px-2.5 py-1 rounded text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  {project.status}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.zone}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs border-t border-slate-100">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Superficie</span>
                    <span className="font-bold text-slate-900">{project.surface}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Variété</span>
                    <span className="font-bold text-slate-900">{project.plants}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </span>
                  
                  <button
                    onClick={() => navigateTo('contact')}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>Nous contacter</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Simple */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <h3 className="text-xl font-bold font-display text-slate-900">
          Visitez nos palmeraies avec nos ingénieurs
        </h3>
        <button
          onClick={() => navigateTo('contact')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-palm-900 hover:bg-palm-800 text-white font-semibold text-xs transition-all"
        >
          <span>Planifier un échange</span>
          <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
        </button>
      </section>

    </div>
  );
}
