import React from 'react';
import { 
  ShieldCheck, 
  Sprout, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function HomePage({ setActivePage }) {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION - Style Agritech Épuré (Inspiration Aarone & Butore) */}
      <section className="relative bg-palm-950 text-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="absolute inset-0 bg-palm-grid opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Texte Hero */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase block">
                Cabinet d'Ingénierie Agronomique • Bénin
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                Sécurisez Vos Palmeraies Industrielles sur 25 Ans
              </h1>

              <p className="text-base text-slate-300 max-w-xl leading-relaxed">
                Gestion déléguée clés en main au Bénin : sécurisation sous Titre Foncier, plants hybrides certifiés CRAPP et débouchés industriels assurés.
              </p>

              {/* Actions Rapides */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigateTo('contact')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md active:scale-95"
                >
                  <span>Nous Contacter</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigateTo('garanties')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-white/5 text-white font-semibold text-sm transition-all"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Nos Garanties</span>
                </button>
              </div>

              {/* Coordonnées Rapides */}
              <div className="flex items-center gap-4 pt-3 text-xs text-slate-400 border-t border-slate-800/80">
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{siteConfig.phone}</span>
                </a>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Abomey-Calavi & Za-Kpota</span>
                </span>
              </div>
            </div>

            {/* Photo Hero */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-emerald-900/50 shadow-xl bg-palm-900">
                <img
                  src="/images/palm_hero_estate.jpg"
                  alt="Palmeraie Industrielle Palmex"
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>

          </div>

          {/* KPI / Métriques Épurées (Style Butore) */}
          <div className="mt-14 pt-8 border-t border-slate-800/80">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {siteConfig.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/10"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-white mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 1 : EXPERTISE DE TERRAIN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="/images/piquetage_topographie.jpg"
                alt="Piquetage topographique"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase block">
              Précision Agronomique
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-tight">
              L'Or Vert du Bénin : Un Actif Rentable et Garanti
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Le palmier à huile assure une rente continue pendant un quart de siècle. Palmex sécurise chaque étape, du foncier au contrat d'usine.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800">
                  Sécurisation foncière : actes notariés & Titre Foncier
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Sprout className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800">
                  Plants certifiés CRAPP : variété élite Tenera à haut rendement
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800">
                  Débouchés assurés : contrats d'enlèvement direct avec huileries
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('services')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Voir nos pôles d'ingénierie</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 : LES 4 DOMAINES D'EXPERTISE (Cartes Épurées) */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase block">
              Nos Compétences
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              De la Terre à l'Usine
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Une chaîne technique maîtrisée pour valoriser votre investissement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="h-40 overflow-hidden">
                <img src="/images/piquetage_topographie.jpg" alt="Foncier" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Foncier & Bornage</h3>
                <p className="text-slate-600 text-xs">Purge coutumière et démarche de Titre Foncier inattaquable.</p>
                <button onClick={() => navigateTo('services')} className="pt-2 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="h-40 overflow-hidden">
                <img src="/images/nursery_crapp.jpg" alt="Pépinière" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Hybrides CRAPP</h3>
                <p className="text-slate-600 text-xs">Semences d'élite homologuées pour un rendement maximal en huile.</p>
                <button onClick={() => navigateTo('services')} className="pt-2 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="h-40 overflow-hidden">
                <img src="/images/ingenieurs_terrain.jpg" alt="Gestion déléguée" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Gestion Déléguée</h3>
                <p className="text-slate-600 text-xs">Conduite agronomique totale par nos ingénieurs sur le terrain.</p>
                <button onClick={() => navigateTo('services')} className="pt-2 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="h-40 overflow-hidden">
                <img src="/images/usine_transformation.jpg" alt="Débouchés" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Débouchés Usines</h3>
                <p className="text-slate-600 text-xs">Évacuation rapide sous 48h vers les huileries d'extraction partenaires.</p>
                <button onClick={() => navigateTo('services')} className="pt-2 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3 : RENTABILITÉ 25 ANS (Compacte) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-palm-950 text-white rounded-3xl p-8 sm:p-10 border border-emerald-900/40">
          <div className="max-w-xl mb-8 space-y-2">
            <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase block">
              Cycle sur 25 Ans
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Une Rente Durable et Prévisible
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Entrée en production dès l'année 4 et récoltes continues sur deux décennies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-emerald-400 font-bold text-xs uppercase block">Années 0 à 3</span>
              <h3 className="text-base font-bold text-white">Croissance & Conduite</h3>
              <p className="text-slate-300 text-xs">Plantation, fertilisation et entretien intensif.</p>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-emerald-400 font-bold text-xs uppercase block">Année 4</span>
              <h3 className="text-base font-bold text-white">Première Récolte</h3>
              <p className="text-slate-300 text-xs">6 à 10 t/ha de régimes et premiers revenus.</p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 space-y-2">
              <span className="text-emerald-300 font-bold text-xs uppercase block">Années 5 à 25</span>
              <h3 className="text-base font-bold text-white">Plein Régime Industriel</h3>
              <p className="text-emerald-100 text-xs">20 à 25 t/ha/an livrées aux huileries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CTA FINALE (Légère) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
          Envie d'échanger sur votre projet de palmeraie ?
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
          Nos ingénieurs sont disponibles pour étudier votre besoin à Abomey-Calavi et Za-Kpota.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
          <button
            onClick={() => navigateTo('contact')}
            className="px-6 py-3 rounded-xl bg-palm-900 hover:bg-palm-800 text-white font-semibold text-sm transition-all"
          >
            Nous Contacter
          </button>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-all"
          >
            Appel direct : {siteConfig.phone}
          </a>
        </div>
      </section>

    </div>
  );
}
