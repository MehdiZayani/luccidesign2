import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Check, Maximize2, X, FileText } from 'lucide-react';

import sb1 from '../images/salledebain/1.jpg';
import sb2 from '../images/salledebain/2.jpg';
import sb3 from '../images/salledebain/3.png';
import sb4 from '../images/salledebain/4.jpg';
import sb5 from '../images/salledebain/5.jpg';
import sb6 from '../images/salledebain/6.jpg';
import sb7 from '../images/salledebain/7.jpg';
import sb8 from '../images/salledebain/8.jpg';
import sb9 from '../images/salledebain/9.jpg';
import sb11 from '../images/salledebain/11.jpg';
import sb12 from '../images/salledebain/12.jpg';
import sb14 from '../images/salledebain/14.jpg';

export default function SallesDeBainPage() {
  const [modalImage, setModalImage] = useState(null);
  const { t, dir, openQuoteModal } = useLanguage();

  const collections = [
    { id: "enaya", name: "Enaya", subtitle: "Élégance Suspendue", description: "Collection de meubles suspendus contemporains en 10 finitions. Caissons hydrofuges de 56 cm avec tiroirs Blum à amortisseurs silencieux.", images: [sb1, sb2, sb3], specs: ["Caissons hydrofuges haute résistance", "Tiroirs Blum à ouverture totale", "Plan vasque simple ou double", "Miroir LED anti-buée"] },
    { id: "adonis", name: "Adonis", subtitle: "Plateaux Marbre & Travertin", description: "Plateaux massifs en marbre de Carrare, travertin noble ou céramique Calacatta avec tiroirs sans poignées à prise de main profilée.", images: [sb4, sb5, sb7], specs: ["Marbre, Travertin, Quartz ou Céramique", "6 finitions de pierre décorative", "Vasques à poser ou semi-encastrées", "Profondeur optimale de 50 cm"] },
    { id: "emma", name: "Emma", subtitle: "Design Scandinave", description: "Atmosphère spa et bien-être. Façades en placage bois texturé résistant aux projections d'eau pour un cocon harmonieux.", images: [sb6, sb8, sb9], specs: ["Chêne clair, noyer ambré ou teck", "Robinetterie encastrée coordonnée", "Colonnes avec niches ouvertes", "Fabrication garantie longue durée"] },
    { id: "luna", name: "Luna", subtitle: "Lignes Organiques", description: "Façades incurvées et poignées laiton brossé. Une création d'exception pour les suites parentales et salles de bain d'architecte.", images: [sb11, sb12, sb14], specs: ["Façades laquées satinées sur mesure", "Organisation intérieure compartimentée", "Prises et chargeurs à induction intégrés", "Fabrication 100% sur-mesure"] },
  ];

  return (
    <div dir={dir} className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-28 pb-20">
      <Head>
        <title>Meubles de Salle de Bain | Lucci Design</title>
        <meta name="description" content="Meubles de salles de bain haut de gamme. Marbre, travertin, finitions hydrofuges et fabrication sur-mesure." />
      </Head>

      <section className="text-center max-w-4xl mx-auto px-4 mb-16 space-y-4">
        <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold">Collections</p>
        <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-wider uppercase text-brand-dark">
          {t('home.bathroomsTitle')}
        </h1>
        <div className="divider-warm mx-auto" />
        <p className="text-sm text-brand-brown/70 font-light leading-relaxed max-w-2xl mx-auto">
          Meubles vasques suspendus, colonnes et miroirs sculptés dans des matériaux hydrofuges nobles.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {collections.map((item, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div key={item.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className={`lg:col-span-7 grid grid-cols-3 gap-3 ${isReversed ? 'lg:order-2' : ''}`}>
                {item.images.map((img, i) => (
                  <div key={i} onClick={() => setModalImage(img)} className="relative h-60 sm:h-80 overflow-hidden cursor-pointer group">
                    <Image src={img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
              <div className={`lg:col-span-5 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                <p className="text-xs tracking-[0.25em] uppercase text-brand-warm font-semibold">Collection 0{idx + 1}</p>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark">{item.name}</h2>
                <p className="text-sm text-brand-warm font-medium">{item.subtitle}</p>
                <p className="text-sm text-brand-brown/70 font-light leading-relaxed">{item.description}</p>
                <div className="space-y-2 pt-3 border-t border-cream-300">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-brand-brown/70"><Check className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><span>{spec}</span></div>
                  ))}
                </div>
                <button
                  onClick={() => openQuoteModal({ details: `Salle de Bain ${item.name}`, projectType: t('quote.types.bathroom') })}
                  className="btn-primary px-8 py-3.5 text-xs tracking-[0.15em] uppercase font-bold inline-flex items-center gap-2 mt-4 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t('home.btnQuote')}</span>
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setModalImage(null)}>
          <button onClick={() => setModalImage(null)} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"><X className="w-6 h-6" /></button>
          <div className="relative max-w-5xl w-full max-h-[85vh] h-[75vh]"><Image src={modalImage} alt="Salle de Bain" fill className="object-contain" /></div>
        </div>
      )}
    </div>
  );
}