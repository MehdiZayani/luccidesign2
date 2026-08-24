import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Check, Maximize2, X, FileText } from 'lucide-react';

import section41 from '../images/sectionhome/section4-1.png';
import section42 from '../images/sectionhome/section4-2.jpg';
import cuisine1 from '../images/Cuisine/1.jpg';
import dressing5 from '../images/Dressing/sepa.jpg';

export default function PortesPage() {
  const [modalImage, setModalImage] = useState(null);
  const { t, dir, openQuoteModal } = useLanguage();

  const doors = [
    { id: "filomuro", name: "Portes Filomuro", subtitle: "Continuité Murale Parfaite", description: "Les portes Filomuro affleurent parfaitement le mur sans chambranle visible. Le dormant aluminium dissimulé s'intègre avec une discrétion absolue.", image: section42, specs: ["Dormant aluminium invisible à fleur de mur", "Charnières 3D invisibles réglables", "Hauteur jusqu'à 3 mètres", "Laque mate, placage bois ou prête à peindre"] },
    { id: "verrieres", name: "Verrières Atelier", subtitle: "Lumière & Élégance", description: "Verrières intérieures sur-mesure pour structurer vos espaces sans perdre la clarté. Profilés métalliques et verre de sécurité.", image: section41, specs: ["Acier thermolaqué noir ou bronze doré", "Vitrage trempé transparent ou dépoli", "Configurations fixes, coulissantes ou battantes", "Soudures invisibles, finition d'exception"] },
    { id: "pivotantes", name: "Portes Pivotantes", subtitle: "Majesté Architecturale", description: "Conçues pour les entrées de pièces maîtresses. Pivot intégré invisible au sol et au plafond pour une prestance architecturale incomparable.", image: dressing5, specs: ["Pivot avec amortisseur et arrêt à 90°", "Largeurs jusqu'à 1,80 m par vantail", "Âme acoustique isolante", "Poignées laiton ou cuir verticales"] },
    { id: "coulissantes", name: "Portes Coulissantes", subtitle: "Gain de Place", description: "Disparaissant dans les cloisons ou glissant sur rail suspendu, nos portes coulissantes optimisent 100% de votre surface utile.", image: cuisine1, specs: ["Galandage avec frein d'ouverture douce", "Rail suspendu sans seuil au sol", "Vantaux simples ou doubles synchronisés", "Isolation phonique par joints périphériques"] },
  ];

  return (
    <div dir={dir} className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-28 pb-20">
      <Head>
        <title>Portes d&apos;Intérieur & Verrières | Lucci Design</title>
        <meta name="description" content="Portes d'intérieur haut de gamme et verrières sur-mesure. Filomuro, pivotantes, coulissantes et verrières atelier." />
      </Head>

      <section className="text-center max-w-4xl mx-auto px-4 mb-16 space-y-4">
        <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold">Collections</p>
        <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-wider uppercase text-brand-dark">
          {t('home.doorsTitle')}
        </h1>
        <div className="divider-warm mx-auto" />
        <p className="text-sm text-brand-brown/70 font-light leading-relaxed max-w-2xl mx-auto">
          Portes invisibles filomuro, verrières d&apos;atelier et portes pivotantes façonnées sur-mesure.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {doors.map((door, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div key={door.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`relative h-[350px] sm:h-[460px] overflow-hidden cursor-pointer group ${isReversed ? 'lg:order-2' : ''}`} onClick={() => setModalImage(door.image)}>
                <Image src={door.image} alt={door.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className={`space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                <p className="text-xs tracking-[0.25em] uppercase text-brand-warm font-semibold">Solution 0{idx + 1}</p>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark">{door.name}</h2>
                <p className="text-sm text-brand-warm font-medium">{door.subtitle}</p>
                <p className="text-sm text-brand-brown/70 font-light leading-relaxed">{door.description}</p>
                <div className="space-y-2 pt-3 border-t border-cream-300">
                  {door.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-brand-brown/70"><Check className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><span>{spec}</span></div>
                  ))}
                </div>
                <button
                  onClick={() => openQuoteModal({ details: door.name, projectType: t('quote.types.doors') })}
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
          <div className="relative max-w-5xl w-full max-h-[85vh] h-[75vh]"><Image src={modalImage} alt="Porte" fill className="object-contain" /></div>
        </div>
      )}
    </div>
  );
}