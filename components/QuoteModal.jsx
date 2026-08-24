import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Send, CheckCircle2, MessageSquare, Sparkles, Phone, Mail, User, Layers, Maximize } from 'lucide-react';

export default function QuoteModal() {
  const { isQuoteOpen, closeQuoteModal, quoteInitialData, t, lang, dir } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    details: '',
    dimensions: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isQuoteOpen) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: quoteInitialData.projectType || t('quote.types.kitchen'),
        details: quoteInitialData.details || quoteInitialData.name || quoteInitialData.modele || '',
        dimensions: quoteInitialData.dimensions || '',
        message: quoteInitialData.message || ''
      });
      setSubmitted(false);
      setErrorMsg('');
    }
  }, [isQuoteOpen, quoteInitialData, t]);

  if (!isQuoteOpen) return null;

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

      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Erreur lors de l’envoi. Veuillez réessayer.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Erreur de connexion. Vous pouvez aussi nous contacter directement par WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "21698400083";
    let text = "";

    if (lang === 'ar') {
      text = `مرحباً لوتشي ديزاين، أرغب في الحصول على عرض سعر:\n- الاسم: ${formData.name || 'غير محدد'}\n- الهاتف: ${formData.phone || 'غير محدد'}\n- نوع المشروع: ${formData.projectType}\n- النموذج / الخامة: ${formData.details || 'عام'}\n- المقاسات: ${formData.dimensions || 'غير محددة'}\n- ملاحظات: ${formData.message || 'لا يوجد'}`;
    } else if (lang === 'en') {
      text = `Hello Lucci Design, I would like to request a quote:\n- Name: ${formData.name || 'N/A'}\n- Phone: ${formData.phone || 'N/A'}\n- Project: ${formData.projectType}\n- Model/Finish: ${formData.details || 'General'}\n- Dimensions: ${formData.dimensions || 'N/A'}\n- Message: ${formData.message || 'None'}`;
    } else {
      text = `Bonjour Lucci Design, je souhaite demander un devis personnalisé :\n- Nom : ${formData.name || 'Non renseigné'}\n- Téléphone : ${formData.phone || 'Non renseigné'}\n- Projet : ${formData.projectType}\n- Modèle / Finition : ${formData.details || 'Général'}\n- Dimensions : ${formData.dimensions || 'Non renseignées'}\n- Message : ${formData.message || 'Aucun'}`;
    }

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={closeQuoteModal}
      dir={dir}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FDFCFA] border border-cream-300 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeQuoteModal}
          className={`absolute top-5 ${dir === 'rtl' ? 'left-5' : 'right-5'} p-2 text-brand-brown/60 hover:text-brand-dark transition-colors`}
          aria-label={t('quote.closeBtn')}
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-brand-warm/15 text-brand-warm rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark uppercase tracking-wide">
                {t('quote.successTitle')}
              </h3>
              <p className="text-sm text-brand-brown/70 max-w-md mx-auto font-light leading-relaxed">
                {t('quote.successDesc')}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="px-6 py-3.5 bg-[#25D366] text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t('quote.whatsappBtn')}</span>
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline px-6 py-3.5 text-xs uppercase tracking-widest font-semibold"
              >
                {t('quote.anotherBtn')}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-1.5 border-b border-cream-300 pb-5">
              <div className="flex items-center gap-2 text-brand-warm text-xs uppercase font-bold tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Lucci Design</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark uppercase tracking-wide">
                {t('quote.modalTitle')}
              </h2>
              <p className="text-xs text-brand-brown/60 font-light">
                {t('quote.modalSubtitle')}
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 text-xs bg-red-50 border border-red-200 text-red-700">
                {errorMsg}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-brand-brown/70 flex items-center gap-1.5">
                    <User className="w-3 h-3 text-brand-warm" />
                    <span>{t('quote.nameLabel')}</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Mohamed Ben Salem"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-cream-300 text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-warm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-brand-brown/70 flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-brand-warm" />
                    <span>{t('quote.phoneLabel')}</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+216 98 400 083"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-cream-300 text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-warm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-brand-brown/70 flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-brand-warm" />
                    <span>{t('quote.emailLabel')}</span>
                  </label>
                  <input
                    type="email"
                    placeholder="client@domaine.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-cream-300 text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-warm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-brand-brown/70 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-brand-warm" />
                    <span>{t('quote.projectTypeLabel')}</span>
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-cream-300 text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-warm"
                  >
                    <option value={t('quote.types.kitchen')}>{t('quote.types.kitchen')}</option>
                    <option value={t('quote.types.dressing')}>{t('quote.types.dressing')}</option>
                    <option value={t('quote.types.bathroom')}>{t('quote.types.bathroom')}</option>
                    <option value={t('quote.types.doors')}>{t('quote.types.doors')}</option>
                    <option value={t('quote.types.full')}>{t('quote.types.full')}</option>
                    <option value={t('quote.types.pro')}>{t('quote.types.pro')}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-brand-brown/70">
                    {t('quote.detailsLabel')}
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Modèle Céleste, Chêne Fil à Fil 431..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-cream-300 text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-warm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-brand-brown/70 flex items-center gap-1.5">
                    <Maximize className="w-3 h-3 text-brand-warm" />
                    <span>{t('quote.dimensionsLabel')}</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 4m x 3m ou 15 m²"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-cream-300 text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-warm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-brand-brown/70">
                  {t('quote.messageLabel')}
                </label>
                <textarea
                  rows={3}
                  placeholder="Précisez votre calendrier souhaité, vos exigences d'agencement ou vos questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-cream-300 text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-warm resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 btn-primary py-3.5 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Envoi en cours...' : t('quote.submitBtn')}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="px-5 py-3.5 bg-[#25D366] text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors shrink-0"
                  title="Ouvrir directement sur WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
