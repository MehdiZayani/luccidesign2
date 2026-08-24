import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const router = useRouter();
  const { modele, projet, type, collection, materiau, config } = router.query;
  const defaultSubject = modele || projet || type || collection || materiau || config || '';
  const { t, lang, dir } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: defaultSubject || t('quote.types.kitchen'),
    details: defaultSubject || '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMsg(data.error || 'Erreur lors de l’envoi.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Erreur de connexion.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "21698400083";
    let text = "";

    if (lang === 'ar') {
      text = `مرحباً لوتشي ديزاين، أود التواصل معكم وحجز موعد:\n- الاسم: ${formData.name || 'غير محدد'}\n- الهاتف: ${formData.phone || 'غير محدد'}\n- نوع المشروع: ${formData.projectType}\n- رسالة: ${formData.message || 'لا يوجد'}`;
    } else if (lang === 'en') {
      text = `Hello Lucci Design, I would like to book a consultation:\n- Name: ${formData.name || 'N/A'}\n- Phone: ${formData.phone || 'N/A'}\n- Project: ${formData.projectType}\n- Message: ${formData.message || 'None'}`;
    } else {
      text = `Bonjour Lucci Design, je souhaite prendre rendez-vous / demander un devis :\n- Nom : ${formData.name || 'Non renseigné'}\n- Téléphone : ${formData.phone || 'Non renseigné'}\n- Projet : ${formData.projectType}\n- Message : ${formData.message || 'Aucun'}`;
    }

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div dir={dir} className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-28 pb-20">
      <Head>
        <title>Contact & Showroom | Lucci Design</title>
        <meta name="description" content="Prenez rendez-vous au showroom Lucci Design à Sousse. Demandez votre devis pour cuisines, dressings et mobilier." />
      </Head>

      <section className="text-center max-w-4xl mx-auto px-4 mb-16 space-y-4">
        <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold">
          {t('nav.showroom')}
        </p>
        <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-wider uppercase text-brand-dark">
          {t('nav.contact')}
        </h1>
        <div className="divider-warm mx-auto" />
        <p className="text-sm text-brand-brown/70 font-light leading-relaxed max-w-2xl mx-auto">
          {t('quote.modalSubtitle')}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-cream-300 p-8 sm:p-12">
            <div className="space-y-2 mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-brand-warm font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Private Consultation</span>
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-wider uppercase text-brand-dark">
                {t('quote.modalTitle')}
              </h2>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 text-xs bg-red-50 border border-red-200 text-red-700">
                {errorMsg}
              </div>
            )}

            {submitted ? (
              <div className="p-8 text-center space-y-6 bg-cream-100 border border-cream-300">
                <CheckCircle2 className="w-12 h-12 text-brand-warm mx-auto stroke-[2.5]" />
                <div className="space-y-1">
                  <h3 className="text-2xl font-display font-bold text-brand-dark">{t('quote.successTitle')}</h3>
                  <p className="text-sm text-brand-brown/70">{t('quote.successDesc')}</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                  <button
                    onClick={handleWhatsApp}
                    className="px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 hover:bg-[#1EBE5D]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t('quote.whatsappBtn')}</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline px-6 py-3 text-xs uppercase tracking-wider font-semibold"
                  >
                    {t('quote.anotherBtn')}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-brand-brown/70 font-bold">{t('quote.nameLabel')}</label>
                    <input type="text" required placeholder="Mohamed Ben Salem" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-cream-300 text-sm text-brand-dark placeholder-brand-brown/30 focus:outline-none focus:border-brand-warm bg-cream-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-brand-brown/70 font-bold">{t('quote.phoneLabel')}</label>
                    <input type="tel" required placeholder="+216 98 400 083" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-cream-300 text-sm text-brand-dark placeholder-brand-brown/30 focus:outline-none focus:border-brand-warm bg-cream-50" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-brand-brown/70 font-bold">{t('quote.emailLabel')}</label>
                    <input type="email" placeholder="email@domaine.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-cream-300 text-sm text-brand-dark placeholder-brand-brown/30 focus:outline-none focus:border-brand-warm bg-cream-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-brand-brown/70 font-bold">{t('quote.projectTypeLabel')}</label>
                    <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full px-4 py-3 border border-cream-300 text-sm text-brand-dark focus:outline-none focus:border-brand-warm bg-cream-50">
                      <option value={t('quote.types.kitchen')}>{t('quote.types.kitchen')}</option>
                      <option value={t('quote.types.dressing')}>{t('quote.types.dressing')}</option>
                      <option value={t('quote.types.bathroom')}>{t('quote.types.bathroom')}</option>
                      <option value={t('quote.types.doors')}>{t('quote.types.doors')}</option>
                      <option value={t('quote.types.full')}>{t('quote.types.full')}</option>
                      <option value={t('quote.types.pro')}>{t('quote.types.pro')}</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-brand-brown/70 font-bold">{t('quote.messageLabel')}</label>
                  <textarea rows={4} placeholder="Décrivez votre projet, vos dimensions approximatives, vos préférences..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-cream-300 text-sm text-brand-dark placeholder-brand-brown/30 focus:outline-none focus:border-brand-warm bg-cream-50 resize-none" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="submit" disabled={isSubmitting} className="flex-1 btn-primary py-4 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> {isSubmitting ? 'Envoi...' : t('quote.submitBtn')}
                  </button>
                  <button type="button" onClick={handleWhatsApp} className="px-6 py-4 bg-[#25D366] text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors">
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Showroom Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-cream-300 p-8 space-y-6">
              <p className="text-xs tracking-[0.2em] uppercase text-brand-warm font-semibold">Lucci Design</p>
              <h3 className="text-2xl font-display font-bold tracking-wider uppercase text-brand-dark">{t('nav.showroom')}</h3>

              <div className="space-y-4 text-sm text-brand-brown/70">
                <div className="flex items-start gap-3.5"><MapPin className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><div><strong className="text-brand-dark block">Adresse</strong><span className="text-xs">{t('footer.address')}</span></div></div>
                <div className="flex items-start gap-3.5"><Phone className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><div><strong className="text-brand-dark block">Téléphone</strong><a href="tel:98400083" className="text-xs text-brand-warm hover:underline">+216 98 400 083</a></div></div>
                <div className="flex items-start gap-3.5"><Mail className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><div><strong className="text-brand-dark block">Email</strong><span className="text-xs">contact@luccidesign.tn</span></div></div>
                <div className="flex items-start gap-3.5"><Clock className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><div><strong className="text-brand-dark block">Horaires</strong><span className="text-xs">{t('footer.hours')}</span></div></div>
              </div>
            </div>

            <div className="border border-cream-300 p-2 bg-white">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.137418774795!2d10.584531051111249!3d35.87014912709735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b8966df1c95%3A0x26f7d2d817d3a25f!2sLucci%20Design!5e0!3m2!1sfr!2stn!4v1673791045124!5m2!1sfr!2stn" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Map" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}