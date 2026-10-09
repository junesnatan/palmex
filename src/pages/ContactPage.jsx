import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare 
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: 'Bénin',
    projectType: 'Création de palmeraie clés en main (Foncier + Plantation + Gestion)',
    surface: '5 à 10 Hectares',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* Header Épuré */}
      <section className="bg-palm-950 text-white pt-16 pb-20 border-b border-palm-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
            Relations Investisseurs & Partenariats
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl">
            Contactez Palmex Agro-Industrielle
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Échangez directement avec notre direction technique et nos ingénieurs agronomes pour structurer votre investissement en palmeraie au Bénin.
          </p>
        </div>
      </section>

      {/* Formulaire & Coordonnées */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Colonne Gauche : Coordonnées Officielles */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-emerald-700 font-bold text-sm tracking-wider uppercase">
                Nos Coordonnées
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-2">
                Échangez avec Nos Experts
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Nos bureaux au Bénin sont ouverts du lundi au vendredi de 8h00 à 18h30. Nous traitons les demandes d'investisseurs du Bénin et de la diaspora internationale.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Téléphone direct */}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-500/50 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Ligne Directe Officielle
                  </span>
                  <span className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors block">
                    {siteConfig.phone}
                  </span>
                  <span className="text-xs text-slate-500">Appels & Assistance directe</span>
                </div>
              </a>

              {/* WhatsApp direct */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-500/50 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    WhatsApp Professionnel
                  </span>
                  <span className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors block">
                    {siteConfig.phone}
                  </span>
                  <span className="text-xs text-slate-500">Échange rapide par messagerie</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-500/50 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Courrier Électronique
                  </span>
                  <span className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors block">
                    {siteConfig.email}
                  </span>
                  <span className="text-xs text-slate-500">Réponse sous 24h ouvrées</span>
                </div>
              </a>

            </div>

            {/* Implantation des Sièges */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Implantations Physiques au Bénin
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Siège Administratif</span>
                    <span className="text-slate-600">Carrefour Arconville, Abomey-Calavi, Bénin</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Direction Technique & Palmeraies</span>
                    <span className="text-slate-600">Zone Agro-Industrielle, Za-Kpota (Zou), Bénin</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Colonne Droite : Formulaire d'Investissement & Devis */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900">
                    Votre Demande a été Transmise avec Succès
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Un ingénieur agronome de Palmex prendra contact avec vous sous 24 heures pour analyser vos objectifs et préparer l'étude de faisabilité.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="text-emerald-700 font-bold text-sm tracking-wider uppercase">
                      Étude de Projet
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 mt-1">
                      Formulaire d'Investissement & Cotation
                    </h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Remplissez ces informations préalables pour une prise en charge sur mesure par notre équipe.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Nom & Prénoms *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Jean-Baptiste DOSSOU"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Téléphone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: +229 01 99 56 14 99"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Adresse Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Ex: contact@exemple.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Pays de Résidence *
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                      >
                        <option value="Bénin">Bénin</option>
                        <option value="France">France (Diaspora)</option>
                        <option value="États-Unis">États-Unis (Diaspora)</option>
                        <option value="Canada">Canada (Diaspora)</option>
                        <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                        <option value="Sénégal">Sénégal</option>
                        <option value="Togo">Togo</option>
                        <option value="Autre Pays">Autre Pays</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Nature du Projet Souhaité *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                    >
                      <option value="Création de palmeraie clés en main (Foncier + Plantation + Gestion)">
                        Création intégrale clés en main (Foncier + Hybrides CRAPP + Gestion 25 ans)
                      </option>
                      <option value="Gestion déléguée d'une palmeraie existante">
                        Gestion déléguée d'une palmeraie déjà plantée
                      </option>
                      <option value="Sécurisation foncière & Titre Foncier uniquement">
                        Ingénierie foncière & démarche de Titre Foncier
                      </option>
                      <option value="Achat de plants hybrides certifiés CRAPP">
                        Achat de plants hybrides certifiés CRAPP (Pépinière)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Superficie Envisagée (Hectares) *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['2 à 5 Ha', '5 à 10 Ha', '10 à 25 Ha', 'Plus de 25 Ha'].map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setFormData({...formData, surface: s})}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold border text-center transition-all ${
                            formData.surface === s
                              ? 'bg-palm-900 text-white border-palm-900'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Détails ou Questions Particulières
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Indiquez vos préférences géographiques (ex: Zou, Atlantique), votre calendrier d'investissement ou vos questions juridiques..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-palm-900 hover:bg-palm-800 text-white font-semibold text-base transition-all shadow-md active:scale-95"
                    >
                      <Send className="w-5 h-5 text-emerald-400" />
                      <span>Transmettre Ma Demande d'Investissement</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Données confidentielles protégées par le secret professionnel.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
