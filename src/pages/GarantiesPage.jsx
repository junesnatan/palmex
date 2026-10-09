import React from 'react';
import { 
  ShieldCheck, 
  FileCheck2, 
  Award, 
  Scale, 
  Clock, 
  Building2, 
  CheckCircle2, 
  XCircle, 
  ArrowRight 
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function GarantiesPage({ setActivePage }) {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const comparisonRows = [
    {
      criteria: "Sécurisation Foncière",
      traditional: "Accords informels ou conventions villageoises fragiles.",
      palmex: "Actes notariés et procédure de Titre Foncier (TF) inattaquable."
    },
    {
      criteria: "Qualité Génétique",
      traditional: "Graines tout-venant à productivité faible ou incertaine.",
      palmex: "100% Hybrides Tenera certifiés CRAPP (>20 t/ha)."
    },
    {
      criteria: "Disposition Spatiale",
      traditional: "Plantation anarchique et perte d'ensoleillement.",
      palmex: "Piquetage géométrique en triangle équilatéral (143 pl/ha)."
    },
    {
      criteria: "Gestion Culturale",
      traditional: "Entretien irrégulier et manque d'expertise technique.",
      palmex: "Gestion déléguée 100% clés en main par des ingénieurs diplômés."
    },
    {
      criteria: "Écoulement Récolte",
      traditional: "Dépendance au marché local informel et risque de perte.",
      palmex: "Enlèvement direct garanti vers les huileries sous 48h."
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Épuré */}
      <section className="bg-palm-950 text-white pt-14 pb-16 border-b border-palm-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase block">
            Engagements Contractuels
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white max-w-2xl">
            Nos Garanties pour Votre Palmeraie
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Une protection juridique et agronomique rigoureuse pour éliminer les risques agricoles.
          </p>
        </div>
      </section>

      {/* Grille des 5 Garanties (Cartes Courtes) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Garantie Foncier Sécurisé</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Actes sous seing privé enregistrés et délivrance de Titre Foncier (TF) inattaquable.
            </p>
            <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Zéro risque juridique</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Garantie Génétique CRAPP</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Plants hybrides issus des stations agréées (INERA), garantissant une haute teneur en huile.
            </p>
            <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Hybrides certifiés</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Garantie Géométrique</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Piquetage en triangle équilatéral assurant 143 plants utiles/ha et ensoleillement optimal.
            </p>
            <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Densité optimale (9m x 9m)</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Gestion Clés en Main</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Conduite agronomique totale par nos ingénieurs avec rapports de suivi réguliers.
            </p>
            <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Contrat suivi sur 25 ans</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 md:col-span-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Débouchés Industriels Assurés</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Rachat de la production sous convention avec les usines et huileries d'extraction partenaires au Bénin.
            </p>
            <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Évacuation garantie sous 48h</span>
            </div>
          </div>

        </div>
      </section>

      {/* Tableau Comparatif Concis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Modèle Palmex vs Modèle Traditionnel
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-300 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-3 pr-4">Critère</th>
                  <th className="py-3 px-4 text-red-700 bg-red-50/50 rounded-t-lg">Agriculture Informelle</th>
                  <th className="py-3 px-4 text-emerald-800 bg-emerald-50 rounded-t-lg">Palmeraie Palmex</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-3 pr-4 font-bold text-slate-900">{row.criteria}</td>
                    <td className="py-3 px-4 text-slate-600 bg-red-50/20">{row.traditional}</td>
                    <td className="py-3 px-4 font-medium text-slate-900 bg-emerald-50/40">{row.palmex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Léger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-xl font-bold font-display text-slate-900">
          Échangez avec nos experts sur votre contrat
        </h3>
        <button
          onClick={() => navigateTo('contact')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-palm-900 hover:bg-palm-800 text-white font-semibold text-xs transition-all"
        >
          <span>Nous Contacter</span>
          <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
        </button>
      </section>

    </div>
  );
}
