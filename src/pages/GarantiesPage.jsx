import React from 'react';
import { 
  ShieldCheck, 
  FileCheck2, 
  Award, 
  Scale, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Clock, 
  Building2 
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
      criteria: "Sécurisation Juridique du Foncier",
      traditional: "Accords verbaux ou conventions villageoises précaires sujets aux contestations familiales.",
      palmex: "Actes sous seing privé notariés et procédure d'immatriculation pour délivrance du Titre Foncier (TF) inattaquable."
    },
    {
      criteria: "Sélection du Matériel Végétal",
      traditional: "Graines tout-venant ou plants non certifiés donnant des arbres peu productifs ou stériles.",
      palmex: "100% Plants hybrides certifiés CRAPP (INERA) issus de lignées d'élite à très haut rendement en huile."
    },
    {
      criteria: "Disposition & Piquetage Spatial",
      traditional: "Plantation anarchique sans calcul d'ombre, étouffement foliaire et perte de 30% d'espace.",
      palmex: "Aménagement géométrique rigoureux au cordeau en triangle équilatéral (densité optimale de 143 plants/ha)."
    },
    {
      criteria: "Conduite Culturale & Entretien",
      traditional: "Gestion aléatoire par des métayers non formés, retards de désherbage et carences nutritives.",
      palmex: "Gestion déléguée 100% clés en main assurée par des ingénieurs agronomes avec rapports trimestriels."
    },
    {
      criteria: "Commercialisation & Écoulement",
      traditional: "Vente artisanale aux bords des routes avec décotes importantes et risque de pourrissement.",
      palmex: "Conventions directes d'enlèvement industriel avec les usines d'extraction partenaires sous 48h."
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* Header Épuré */}
      <section className="bg-palm-950 text-white pt-16 pb-20 border-b border-palm-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
            Protection de Votre Capital
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl">
            Nos Garanties Contractuelles & Sécurité sur 25 Ans
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Investir dans l'agriculture ne doit pas être un jeu de hasard. Découvrez comment Palmex élimine les risques structurels pour offrir un placement pérenne, légal et rentable.
          </p>
        </div>
      </section>

      {/* Les 5 Piliers de Garantie Formelle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-emerald-700 font-bold text-sm tracking-wider uppercase">
            Engagements Contractuels
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
            5 Piliers de Sécurisation Inconditionnels
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Chaque contrat signé avec Palmex Agro-Industrielle SARL s'appuie sur des garanties juridiques et techniques formelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Garantie 1 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Garantie Foncier Sécurisé
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Toutes les terres acquises font l'objet d'actes sous seing privé enregistrés et d'une procédure d'immatriculation pour l'obtention du Titre Foncier (TF). Vous êtes le propriétaire légal inattaquable.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sous seing & Titre Foncier</span>
            </div>
          </div>

          {/* Garantie 2 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Garantie Génétique CRAPP
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Certificat de conformité fourni pour chaque lot de plants hybrides Tenera issu des stations de recherche agronomique partenaires (CRAPP / INERA). Rendement en huile et rusticité prouvés.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Semences élites 100% certifiées</span>
            </div>
          </div>

          {/* Garantie 3 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Garantie Géométrique
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Piquetage topographique rigoureux en quinconce équilatéral garantissant 143 plants effectifs par hectare. Zéro déperdition d'espace, ensoleillement parfait et aération foliaire maximale.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Triangle équilatéral 9m x 9m</span>
            </div>
          </div>

          {/* Garantie 4 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Gestion Déléguée Clés en Main
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Contrat de gestion de 25 ans garantissant l'intervention continue d'ouvriers qualifiés et d'ingénieurs agronomes : trouaison, fertilisation, ronds, santé des arbres et récoltes régulières.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Accompagnement continu sur 25 ans</span>
            </div>
          </div>

          {/* Garantie 5 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between lg:col-span-2">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Garantie Débouchés & Écoulement Industriel
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Palmex contractualise l'évacuation de la totalité de votre production dès l'entrée en production. Les régimes sont acheminés sous 48h vers les huileries partenaires du Bénin et payés au cours du marché. Zéro stock d'invendus, zéro perte de marchandise.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Partenariats industriels avec huileries d'extraction</span>
            </div>
          </div>

        </div>
      </section>

      {/* TABLEAU COMPARATIF : SÉCURITÉ PALMEX VS MODÈLE INFORMEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="text-emerald-700 font-bold text-sm tracking-wider uppercase">
              Analyse Comparative
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Pourquoi le Modèle Palmex Protège Votre Investissement
            </h2>
            <p className="text-slate-600 text-sm">
              Comparatif direct entre une plantation agricole informelle et le protocole d'ingénierie agro-industrielle Palmex.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-4 pr-6">Critères d'Évaluation</th>
                  <th className="py-4 px-6 text-red-700 bg-red-50/50 rounded-t-xl">Agriculture Traditionnelle Informelle</th>
                  <th className="py-4 px-6 text-emerald-800 bg-emerald-50 rounded-t-xl">Palmeraie Industrielle Palmex</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/50 transition-colors">
                    <td className="py-5 pr-6 font-bold text-slate-900 align-top">
                      {row.criteria}
                    </td>
                    <td className="py-5 px-6 text-slate-600 bg-red-50/30 align-top">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 font-medium text-slate-900 bg-emerald-50/50 align-top">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.palmex}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
          Consultez nos conventions de gestion déléguée
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Nos conseillers juridiques et ingénieurs agronomes vous transmettent le dossier complet de sécurisation foncière et les modèles de contrats d'exploitation sur 25 ans.
        </p>
        <button
          onClick={() => navigateTo('contact')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-palm-900 hover:bg-palm-800 text-white font-semibold text-sm transition-all"
        >
          <span>Prendre Rendez-vous avec la Direction</span>
          <ArrowRight className="w-4 h-4 text-emerald-400" />
        </button>
      </section>

    </div>
  );
}
