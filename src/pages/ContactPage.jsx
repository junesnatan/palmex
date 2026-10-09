import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  ArrowUpRight
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Bonjour Palmex Agro-Industrielle SARL,\nJe souhaite échanger directement avec votre équipe :\n- Nom : ${formData.name || 'Client'}\n- Téléphone : ${formData.phone || ''}\n- Message : ${formData.message || 'Prise de contact'}`
    );
    window.open(`https://wa.me/2290199561499?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* Header Épuré */}
      <section className="bg-palm-950 text-white pt-16 pb-20 border-b border-palm-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
            Contact & Bureaux au Bénin
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl">
            Contactez Palmex Agro-Industrielle
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Joignez directement notre direction et nos ingénieurs agronomes à Abomey-Calavi et Za-Kpota.
          </p>
        </div>
      </section>

      {/* Section Principale de Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Colonne Gauche : Lignes Directes & Accès Immédiat (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Boîte Principale Ligne Directe & WhatsApp */}
            <div className="bg-palm-900 text-white p-7 sm:p-8 rounded-3xl border border-emerald-800/60 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Ligne Téléphonique Directe (Bénin)
                </span>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-2xl sm:text-3xl font-extrabold text-white hover:text-emerald-300 transition-colors block mt-2"
                >
                  {siteConfig.phone}
                </a>
                <p className="text-xs text-slate-300 mt-1">
                  Disponible pour appels et entretiens avec la direction technique.
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-800/80 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white text-palm-950 font-bold text-sm hover:bg-slate-100 transition-all shadow"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Appeler Directement</span>
                </a>

                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Échanger sur WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Implantation des Sièges Physiques */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Nos Sièges au Bénin
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Siège Administratif</h4>
                    <p className="text-slate-600 mt-0.5">Carrefour Arconville, Abomey-Calavi, Bénin</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Direction Technique & Palmeraies</h4>
                    <p className="text-slate-600 mt-0.5">Zone Agro-Industrielle, Za-Kpota (Zou), Bénin</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Email Officiel</h4>
                    <a href={`mailto:${siteConfig.email}`} className="text-slate-600 hover:text-emerald-700 transition-colors mt-0.5 block font-medium">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Horaires d'Ouverture</h4>
                    <p className="text-slate-600 mt-0.5">Du lundi au vendredi : 08h00 - 18h30</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Colonne Droite : Formulaire Direct et Épuré (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-display text-slate-900">
                Laisser un Message Direct
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Indiquez vos coordonnées et votre message. Notre équipe vous recontacte rapidement.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950">
                  Votre message a bien été envoyé
                </h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                  Merci <strong>{formData.name}</strong>. Nos ingénieurs prennent connaissance de votre demande et vous joindront au <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Nom & Prénoms *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Marcellin KPADONOU"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Numéro de téléphone joignable *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+229 01..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Adresse email (optionnel)
                  </label>
                  <input
                    type="email"
                    placeholder="contact@exemple.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Votre message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Indiquez l'objet de votre prise de contact..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-palm-900 hover:bg-palm-800 text-white font-bold py-4 px-6 rounded-xl text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Envoyer mon message</span>
                </button>

                <p className="text-xs text-slate-400 text-center">
                  Vos informations demeurent strictement confidentielles.
                </p>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
