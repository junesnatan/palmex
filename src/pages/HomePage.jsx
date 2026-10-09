import React from 'react';
import { 
  ShieldCheck, 
  Sprout, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Compass, 
  Building2, 
  Scale, 
  Trees, 
  ArrowUpRight 
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function HomePage({ setActivePage }) {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION - Inspirée des maquettes Aarone & Butore */}
      <section className="relative bg-palm-950 text-white overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Motif d'arrière-plan discret */}
        <div className="absolute inset-0 bg-palm-grid opacity-25"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texte Hero */}
            <div className="lg:col-span-7 space-y-8">
              <div className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
                Cabinet d'Ingénierie Agronomique au Bénin
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12]">
                Sécurisez et Optimisez Vos Investissements en Palmeraies Industrielles
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Palmex Agro-Industrielle SARL assure la création et la gestion déléguée clés en main de votre patrimoine agricole sur 25 ans : sécurisation sous titre foncier, plants hybrides certifiés CRAPP, aménagement géométrique et débouchés industriels garantis.
              </p>

              {/* Boutons d'Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => navigateTo('contact')}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-lg shadow-emerald-950/40 active:scale-95"
                >
                  <span>Prendre Contact</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => navigateTo('garanties')}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-500 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-all"
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>Nos Garanties 25 Ans</span>
                </button>
              </div>

              {/* Coordonnées rapides */}
              <div className="flex items-center gap-4 pt-4 text-xs text-slate-400 border-t border-slate-800">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Abomey-Calavi & Za-Kpota (Bénin)</span>
                </div>
              </div>
            </div>

            {/* Visuel Hero interactif avec image réaliste */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-emerald-900/60 shadow-2xl bg-palm-900 group">
                <img
                  src="/images/palm_hero_estate.jpg"
                  alt="Palmeraie Industrielle au Bénin gérée par Palmex"
                  className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-palm-950 via-palm-950/20 to-transparent"></div>
                
                {/* Cartouche d'information bas de photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-palm-950/90 backdrop-blur-md border border-emerald-800/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-emerald-400 block uppercase tracking-wider">
                        Palmeraie Industrielle Élite
                      </span>
                      <span className="text-sm font-bold text-white">
                        Conduite Déléguée & Débouchés Usines
                      </span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-emerald-900/80 text-emerald-300 font-semibold border border-emerald-700/50">
                      Bénin
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* BARRE DE MÉTRIQUES / STATS - Inspirée directement de la maquette Butore */}
          <div className="mt-16 pt-8 border-t border-slate-800/80">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 transition-all"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 leading-snug">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 1 : POURQUOI INVESTIR DANS LE PALMIER À HUILE INDUSTRIEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <img
                src="/images/piquetage_topographie.jpg"
                alt="Ingénieur géomètre et piquetage de palmeraie"
                className="w-full h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
                  Ingénierie de précision
                </span>
                <p className="text-lg font-bold">
                  Piquetage au cordeau en triangle équilatéral : 143 plants utiles/ha.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="text-emerald-700 font-semibold text-sm tracking-wider uppercase">
              Sécurité Patrimoniale & Agronomie
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 leading-tight">
              L'Or Vert du Bénin : Un Actif Rentable, Tangible et Sécurisé
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Le palmier à huile constitue l'une des cultures pérennes les plus rentables d'Afrique de l'Ouest. Face aux aléas des marchés boursiers et à l'inflation, l'investissement en palmeraie industrielle offre un rendement économique continu pendant 25 ans, alimenté par la demande industrielle croissante en huile brute et dérivés.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Sécurisation Foncière Certifiée</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Acquisition et immatriculation sous seing privé et délivrance de Titre Foncier (TF) inattaquable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Sprout className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Hybrides Homologués CRAPP</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Plants certifiés à haute productivité, garantissant des grappes riches en pulpe et un taux d'huile élevé.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Débouchés Industriels Directs</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Conventions d'enlèvement direct avec les usines et huileries pour un écoulement instantané de votre récolte.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => navigateTo('services')}
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Découvrir l'ensemble de nos pôles d'ingénierie</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 2 : LES 4 GRANDS PILIERS DE PALMEX (Cartes sobres) */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="text-emerald-700 font-semibold text-sm tracking-wider uppercase">
              Nos Domaines d'Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
              Une Prise en Charge Complète de la Terre à l'Usine
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Palmex déploie une méthodologie intégrée pour que chaque hectare planté devienne une unité de production agricole hautement performante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Carte 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500/50 transition-all flex flex-col group">
              <div className="h-44 overflow-hidden relative">
                <img 
                  src="/images/piquetage_topographie.jpg" 
                  alt="Ingénierie foncière" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">
                    Ingénierie Foncière
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Sécurisation sous seing privé et sous Titre Foncier. Bornage contradictoire géoréférencé et purge des droits coutumiers.
                  </p>
                </div>
                <button
                  onClick={() => navigateTo('services')}
                  className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Détails foncier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Carte 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500/50 transition-all flex flex-col group">
              <div className="h-44 overflow-hidden relative">
                <img 
                  src="/images/nursery_crapp.jpg" 
                  alt="Pépinière CRAPP" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">
                    Plants Hybrides CRAPP
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Matériel végétal certifié par les stations de recherche agronomique. Richesse en pulpe, rusticité et haut rendement en huile.
                  </p>
                </div>
                <button
                  onClick={() => navigateTo('services')}
                  className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Détails semences</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Carte 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500/50 transition-all flex flex-col group">
              <div className="h-44 overflow-hidden relative">
                <img 
                  src="/images/ingenieurs_terrain.jpg" 
                  alt="Gestion déléguée" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">
                    Gestion Déléguée
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Formule clés en main : nos ingénieurs s'occupent de la fertilisation, de l'entretien et du suivi phytosanitaire au quotidien.
                  </p>
                </div>
                <button
                  onClick={() => navigateTo('services')}
                  className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Détails conduite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Carte 4 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500/50 transition-all flex flex-col group">
              <div className="h-44 overflow-hidden relative">
                <img 
                  src="/images/usine_transformation.jpg" 
                  alt="Débouchés industriels" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">
                    Débouchés Industriels
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Rachat garanti des régimes frais auprès des usines d'extraction partenaires. Évacuation rapide sous 48h et paiements directs.
                  </p>
                </div>
                <button
                  onClick={() => navigateTo('services')}
                  className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Détails débouchés</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 3 : RENTABILITÉ SUR 25 ANS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-palm-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-emerald-900/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-palm-grid opacity-20 pointer-events-none"></div>

          <div className="relative z-10 space-y-12">
            
            <div className="max-w-3xl space-y-4">
              <div className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
                Cycle Économique 25 Ans
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Un Modèle de Revenus Récurrents à Très Long Terme
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contrairement aux investissements éphémères, la palmeraie industrielle sélectionnée par Palmex entre en production dès la 4e année et assure une rente continue pendant plus de deux décennies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Phase 1 • Années 0 à 3
                </div>
                <h3 className="text-xl font-bold text-white">
                  Investissement & Croissance
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Préparation du sol, piquetage géométrique, plantation des hybrides CRAPP et soins intensifs sous gestion déléguée.
                </p>
                <div className="text-xs text-slate-400 pt-2 border-t border-white/10">
                  Croissance végétative & renforcement racinaire
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Phase 2 • Année 4
                </div>
                <h3 className="text-xl font-bold text-white">
                  Entrée en Production
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Premières récoltes de régimes de fruits frais (6 à 10 tonnes par hectare). Premiers encaissements industriels.
                </p>
                <div className="text-xs text-slate-400 pt-2 border-t border-white/10">
                  Début de la rentabilité opérationnelle
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 space-y-3">
                <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Phase 3 • Années 5 à 25
                </div>
                <h3 className="text-xl font-bold text-white">
                  Plein Régime Industriel
                </h3>
                <p className="text-emerald-100/90 text-xs leading-relaxed">
                  Pic de production continu : 20 à 25 tonnes de régimes par hectare et par an livrées directement aux huileries.
                </p>
                <div className="text-xs text-emerald-300 font-semibold pt-2 border-t border-emerald-500/30">
                  Rente agricole stable sur 20 années consécutives
                </div>
              </div>

            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm text-slate-300">
                  Contrats de gestion déléguée et conventions de débouché rédigés sous supervision juridique.
                </span>
              </div>

              <button
                onClick={() => navigateTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shrink-0"
              >
                <span>Nous Contacter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 4 : ANCRAGE TERRITORIAL AU BÉNIN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-emerald-700 font-semibold text-sm tracking-wider uppercase">
              Présence Locale
            </div>

            <h2 className="text-3xl font-bold font-display text-slate-900">
              Deux Sièges Opérationnels au Bénin
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Pour assurer une réactivité totale, Palmex dispose d'une double implantation stratégique : un pôle administratif et investisseurs à Abomey-Calavi, et un centre technique agronomique directement basé à Za-Kpota dans le bassin agricole du Zou.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h4 className="font-bold text-slate-900 text-sm">Siège Abomey-Calavi</h4>
                <p className="text-xs text-slate-600 mt-1">Carrefour Arconville, Abomey-Calavi</p>
                <p className="text-xs text-emerald-700 font-semibold mt-1">Accueil des investisseurs & formalités juridiques</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h4 className="font-bold text-slate-900 text-sm">Centre Technique Za-Kpota</h4>
                <p className="text-xs text-slate-600 mt-1">Zone Agro-Industrielle, Département du Zou</p>
                <p className="text-xs text-emerald-700 font-semibold mt-1">Pépinières élites, matériel géométrique & déploiement de terrain</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Nous Joindre : {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="/images/ingenieurs_terrain.jpg"
                alt="Équipe d'ingénieurs agronomes Palmex au Bénin"
                className="w-full h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
                  Sur le terrain
                </span>
                <p className="text-lg font-bold">
                  Nos ingénieurs agronomes analysent chaque parcelle pour garantir un rendement optimal.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION CTA FINALE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white max-w-2xl mx-auto">
            Prêt à Bâtir Votre Palmeraie Industrielle au Bénin ?
          </h2>
          <p className="text-emerald-100 max-w-xl mx-auto text-sm sm:text-base">
            Que vous résidiez au Bénin ou au sein de la diaspora, nos ingénieurs vous accompagnent dès l'acquisition foncière jusqu'à la première récolte industrielle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => navigateTo('contact')}
              className="px-8 py-4 rounded-xl bg-white text-emerald-950 font-bold text-base hover:bg-slate-100 transition-all shadow-md active:scale-95"
            >
              Prendre Contact avec Nos Experts
            </button>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-8 py-4 rounded-xl border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all"
            >
              Appel Direct : {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
