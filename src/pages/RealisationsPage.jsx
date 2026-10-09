import React, { useState } from 'react';
import { 
  MapPin, 
  Trees, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Sprout, 
  Factory, 
  Layers 
} from 'lucide-react';
import { projectsData, siteConfig } from '../data/siteData';

export default function RealisationsPage({ setActivePage }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* Header Épuré */}
      <section className="bg-palm-950 text-white pt-16 pb-20 border-b border-palm-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
            Réalisations de Terrain
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl">
            Nos Palmeraies Industrielles & Déploiements au Bénin
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Visitez virtuellement nos parcelles sous gestion déléguée, nos pépinières d'hybrides certifiés CRAPP et nos opérations d'approvisionnement industriel.
          </p>
        </div>
      </section>

      {/* Métriques de Déploiement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-3xl font-extrabold font-display text-emerald-700 block mb-1">
              98.5%
            </span>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
              Taux de Reprise en Terre
            </span>
            <p className="text-xs text-slate-500 mt-1">Plants hybrides CRAPP vigoureux</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-3xl font-extrabold font-display text-emerald-700 block mb-1">
              143 Pl/ha
            </span>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
              Densité Géométrique
            </span>
            <p className="text-xs text-slate-500 mt-1">Quinconce parfait 9m x 9m</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-3xl font-extrabold font-display text-emerald-700 block mb-1">
              &lt; 48 Heures
            </span>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
              Délai de Livraison Usine
            </span>
            <p className="text-xs text-slate-500 mt-1">Préservation de la qualité d'huile</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-3xl font-extrabold font-display text-emerald-700 block mb-1">
              25 Ans
            </span>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
              Suivi Agronomique Délégué
            </span>
            <p className="text-xs text-slate-500 mt-1">Engagement contractuel officiel</p>
          </div>
        </div>
      </section>

      {/* Grille des Projets & Réalisations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="text-emerald-700 font-bold text-sm tracking-wider uppercase">
              Chantiers & Domaines
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Parcelles et Unités de Production
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md">
            Chaque site fait l'objet d'un audit de sol, d'une sécurisation juridique complète et d'un reporting régulier à nos investisseurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-palm-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  {project.status}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{project.zone}</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs border-t border-slate-100">
                    <div>
                      <span className="text-slate-600 block">Superficie / Capacité</span>
                      <span className="font-bold text-slate-900">{project.surface}</span>
                    </div>
                    <div>
                      <span className="text-slate-600 block">Matériel Végétal</span>
                      <span className="font-bold text-slate-900">{project.plants}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-600 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{project.year}</span>
                  </span>
                  
                  <button
                    onClick={() => navigateTo('contact')}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                  >
                    <span>Visiter ou réserver une parcelle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visites de Parcelles sur le Terrain */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Immersion Terrain
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Planifiez une Visite de Nos Palmeraies avec Nos Ingénieurs
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Nous organisons des journées d'immersion technique pour les investisseurs et délégations afin d'observer concrètement la qualité de nos pépinières et le piquetage géométrique en conditions réelles.
            </p>
          </div>

          <button
            onClick={() => navigateTo('contact')}
            className="px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shrink-0"
          >
            Réserver une Visite de Terrain
          </button>
        </div>
      </section>

    </div>
  );
}
