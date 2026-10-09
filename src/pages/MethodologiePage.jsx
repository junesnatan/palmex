import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Sprout, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Camera, 
  Calendar, 
  Factory 
} from 'lucide-react';
import { stepsMethodology, siteConfig } from '../data/siteData';

export default function MethodologiePage({ setActivePage }) {
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
            Processus Opérationnel
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl">
            La Méthode Palmex : De la Friche au Plein Rendement Industriel
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Un protocole agronomique et contractuel en 5 étapes standardisées pour sécuriser votre investissement et transformer chaque hectare en une rente durable sur 25 ans.
          </p>
        </div>
      </section>

      {/* Les 5 Étapes du Processus */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {stepsMethodology.map((stepItem, index) => (
            <div 
              key={stepItem.step}
              className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm hover:border-emerald-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Colonne Numéro et Chronologie */}
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-8 gap-4">
                <span className="text-5xl sm:text-6xl font-extrabold font-display text-emerald-700">
                  #{stepItem.step}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Période estimée
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {stepItem.duration}
                  </span>
                </div>
              </div>

              {/* Colonne Description et Enjeux */}
              <div className="lg:col-span-9 space-y-3">
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  {stepItem.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Transparence & Outils de Suivi pour l'Investisseur */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="text-emerald-700 font-bold text-sm tracking-wider uppercase">
              Gouvernance & Suivi
            </div>
            <h2 className="text-3xl font-bold font-display text-slate-900">
              Une Transparence Totale Tout au Long du Contrat
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Même à des milliers de kilomètres, les investisseurs résidents et de la diaspora bénéficient d'un suivi millimétré de leur patrimoine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Rapports Photographiques & GPS
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Photos géolocalisées et vidéos trimestrielles de l'évolution de chaque parcelle, de l'état des couronnes foliaires et de la floraison.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Bulletins d'Analyses Agronomiques
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Suivi des apports d'engrais, bilans des diagnostics phytosanitaires et recommandations techniques signés par nos ingénieurs agréés.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Bordereaux de Pesée d'Usine
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Copies certifiées des tickets de pesée délivrés par les huileries partenaires pour chaque rotation de camions lors des récoltes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
          Initiez dès aujourd'hui l'étape #01 de votre projet
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Contactez notre équipe pour valider l'éligibilité de votre terrain ou réserver une parcelle déjà auditée et sécurisée par Palmex.
        </p>
        <button
          onClick={() => navigateTo('contact')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-palm-900 hover:bg-palm-800 text-white font-semibold text-sm transition-all"
        >
          <span>Lancer Mon Diagnostic Foncier & Agronomique</span>
          <ArrowRight className="w-4 h-4 text-emerald-400" />
        </button>
      </section>

    </div>
  );
}
