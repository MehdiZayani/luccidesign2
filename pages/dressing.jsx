import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Check, Maximize2, X, FileText } from 'lucide-react';

import d1 from '../images/Dressing/i.jpg';
import d2 from '../images/Dressing/u.jpg';
import d3 from '../images/Dressing/L.jpg';
import d4 from '../images/Dressing/p.jpg';
import d5 from '../images/Dressing/sepa.jpg';
import d6 from '../images/Dressing/dedier.jpg';
import d7 from '../images/Dressing/rang.jpg';

export default function DressingPage() {
  const [modalImage, setModalImage] = useState(null);
  const { t, dir, openQuoteModal } = useLanguage();

  const types = [
    { id: "u", name: "Walk-In en U", tagline: "Luxe & Grand Espace", description: "Le dressing en U est la quintessence du dressing sur-mesure. Occupant trois pans de mur, il offre une immersion totale avec une vision panoramique de votre garde-robe.", image: d2, specs: ["Penderies hautes et basses à élévateurs télescopiques", "Éclairage LED intégré sous chaque étagère", "Îlot central de rangement bijoux & montres", "Matériaux nobles : Noyer, Chêne fumé, Laques satinées"] },
    { id: "l", name: "Dressing en L", tagline: "Design & Fonctionnalité", description: "Conçu pour exploiter judicieusement deux murs contigus, le dressing en L transforme chaque recoin en volume utile grâce à des aménagements d'angle ingénieux.", image: d3, specs: ["Systèmes d'angles sans perte d'espace", "Tiroirs coulissants et niches éclairées", "Séparateurs de tiroirs gainés de tissu", "Finition ton sur ton ou bicolore contrastée"] },
    { id: "i", name: "Dressing Linéaire", tagline: "Épure & Compacité", description: "Le dressing en I s'étend majestueusement sur un mur unique du sol au plafond. Esthétique épurée idéale pour les chambres et couloirs larges.", image: d1, specs: ["Intégration murale discrète et élégante", "Portes coulissantes miroir bronze", "Tiroirs à amortisseurs Blum", "Hauteur ajustable jusqu'au plafond"] },
    { id: "portes", name: "Portes Vitrées Fumées", tagline: "Tendance Haute Couture", description: "Nos portes vitrées teintées bronze ou fumé gris avec cadres ultra-fins en aluminium anodisé révèlent subtilement vos vêtements tout en les protégeant.", image: d4, specs: ["Verre trempé fumé ou miroir sans tain", "Capteurs de présence pour LED automatique", "Poignées profilées intégrées au cadre", "Charnières invisibles à fermeture amortie"] },
    { id: "sep", name: "Séparateur de Pièce", tagline: "Architecture d'Intérieur", description: "Ce concept délimite l'espace nuit de l'espace dressing sans cloisonner ni bloquer la lumière. Une solution de prestige pour les lofts et grandes chambres.", image: d5, specs: ["Double face avec rangements côté dressing", "Association de verrières style atelier", "Continuité visuelle et flux de circulation", "Matériaux coordonnés avec le mobilier"] },
    { id: "dedie", name: "Suite Dressing Dédiée", tagline: "Le Sommet du Sur-Mesure", description: "Une pièce entièrement consacrée à l'art du vêtement. Îlot central de présentation, vitrines, coiffeuse intégrée et miroirs rétroéclairés.", image: d6, specs: ["Aménagement intégral 4 murs", "Îlot central avec tiroirs accessoires", "Espaces chaussures ventilés", "Atmosphère boudoir de luxe personnalisée"] },
  ];

  return (
    <div dir={dir} className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-28 pb-20">
      <Head>
        <title>Dressings Sur-Mesure & Walk-In | Lucci Design</title>
        <meta name="description" content="Dressings sur-mesure Lucci Design. Dressings en U, en L, en I, portes vitrées, séparateurs et pièces dédiées." />
      </Head>

      <section className="text-center max-w-4xl mx-auto px-4 mb-16 space-y-4">
        <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold">Collections</p>
        <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-wider uppercase text-brand-dark">
          {t('home.dressingsTitle')}
        </h1>
        <div className="divider-warm mx-auto" />
        <p className="text-sm text-brand-brown/70 font-light leading-relaxed max-w-2xl mx-auto">
          Organisez votre garde-robe avec distinction. Dressings ergonomiques, modulables et raffinés, adaptés au millimètre.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {types.map((item, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`relative h-[350px] sm:h-[460px] overflow-hidden cursor-pointer group ${isReversed ? 'lg:order-2' : ''}`} onClick={() => setModalImage(item.image)}>
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><Maximize2 className="w-4 h-4 text-brand-dark" /></div>
              </div>
              <div className={`space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                <p className="text-xs tracking-[0.25em] uppercase text-brand-warm font-semibold">Type 0{idx + 1}</p>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark">{item.name}</h2>
                <p className="text-sm text-brand-warm font-medium">{item.tagline}</p>
                <p className="text-sm text-brand-brown/70 font-light leading-relaxed">{item.description}</p>
                <div className="space-y-2 pt-3 border-t border-cream-300">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-brand-brown/70"><Check className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><span>{spec}</span></div>
                  ))}
                </div>
                <button
                  onClick={() => openQuoteModal({ details: `Dressing ${item.name}`, projectType: t('quote.types.dressing') })}
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

      {/* Accessories Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center section-cream p-10 sm:p-14">
          <div className="relative h-64 overflow-hidden">
            <Image src={d7} alt="Accessoires intelligents" fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-xs tracking-[0.25em] uppercase text-brand-warm font-semibold">Accessories</p>
            <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-wider uppercase text-brand-dark">Intelligent Storage Solutions</h3>
            <p className="text-sm text-brand-brown/70 font-light leading-relaxed">Porte-pantalons télescopiques, tiroirs à bijoux capitonnés, penderies basculantes, ranges-chaussures coulissants et miroirs pivotants.</p>
            <button
              onClick={() => openQuoteModal({ details: 'Accessoires Dressing sur-mesure', projectType: t('quote.types.dressing') })}
              className="btn-primary px-8 py-3 text-xs tracking-[0.15em] uppercase inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{t('nav.quoteBtn')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setModalImage(null)}>
          <button onClick={() => setModalImage(null)} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"><X className="w-6 h-6" /></button>
          <div className="relative max-w-5xl w-full max-h-[85vh] h-[75vh] overflow-hidden"><Image src={modalImage} alt="Dressing" fill className="object-contain" /></div>
        </div>
      )}
    </div>
  );
}