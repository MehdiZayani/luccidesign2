import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Check, Maximize2, X, FileText } from 'lucide-react';

import c1 from '../images/Cuisine/1.jpg';
import c2 from '../images/Cuisine/2.jpg';
import c3 from '../images/Cuisine/3.jpg';
import c4 from '../images/Cuisine/4.jpg';
import c5 from '../images/Cuisine/5.jpg';
import c6 from '../images/Cuisine/6.jpg';

export default function CuisinePage() {
  const [modalImage, setModalImage] = useState(null);
  const { t, dir, openQuoteModal } = useLanguage();

  const models = [
    {
      id: "celeste",
      name: "Céleste",
      tagline: "Épure Minimaliste & Laque Mate",
      description: "La cuisine Céleste incarne le minimalisme haut de gamme. Ses façades laquées mates sans poignées s'ouvrent par système push-to-open, révélant un intérieur entièrement en Blum MERIVOBOX.",
      image: c1,
      specs: ["Façades laquées mates 6 faces", "Tiroirs Blum MERIVOBOX à sortie totale", "Plan de travail Quartz ou Dekton", "Éclairage LED sous meubles hauts"]
    },
    {
      id: "eden",
      name: "Eden",
      tagline: "Chaleur du Bois & Design Scandinave",
      description: "Eden marie la chaleur du placage chêne naturel à des lignes scandinaves épurées. Parfaite pour une cuisine ouverte conviviale avec îlot central.",
      image: c2,
      specs: ["Placage chêne texturé mat naturel", "Îlot avec espace repas intégré", "Gorges en aluminium anodisé", "Rangements d'angle optimisés"]
    },
    {
      id: "emilia",
      name: "Emilia",
      tagline: "High Gloss & Prestige Italien",
      description: "Emilia est notre cuisine de prestige aux façades High Gloss ultra-brillantes. Un jeu de reflets et de lumière qui magnifie chaque espace.",
      image: c3,
      specs: ["Façades acryliques High Gloss miroir", "Poignées intégrées profilées aluminium", "Épaisseur de porte de 22 mm", "Charnières Blum avec amortisseur"]
    },
    {
      id: "costa",
      name: "Costa",
      tagline: "Béton Ciré & Métal Brossé",
      description: "Costa emprunte au design industriel ses textures brutes sublimées par un savoir-faire artisanal. Façades effet béton associées à des accents métalliques.",
      image: c4,
      specs: ["Panneaux Digital Polylac effet béton", "Étagères métalliques ouvertes", "Plan de travail céramique grand format", "Évier encastré affleurant"]
    },
    {
      id: "carra",
      name: "Carra",
      tagline: "Marbre Calacatta & Bicolore",
      description: "Carra célèbre la pierre avec ses crédences et plans de travail effet marbre Calacatta. Le jeu de contrastes bicolores crée une harmonie visuelle saisissante.",
      image: c5,
      specs: ["Crédence pleine hauteur effet marbre", "Bicolore façades sombres et claires", "Colonnes de rangement toute hauteur", "Électroménagers 100% encastrés"]
    },
    {
      id: "divine",
      name: "Divine",
      tagline: "Noyer d'Amérique & Laiton Brossé",
      description: "Divine est un hommage à l'ébénisterie de luxe. Le noyer d'Amérique est sublimé par des accents en laiton brossé doré et des étagères suspendues en verre fumé.",
      image: c6,
      specs: ["Placage noyer d'Amérique massif", "Accents en laiton brossé doré", "Éclairage d'ambiance intégré", "Fabrication 100% d'usine"]
    }
  ];

  return (
    <div dir={dir} className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-28 pb-20">
      <Head>
        <title>Cuisines Sur-Mesure d&apos;Exception | Lucci Design</title>
        <meta name="description" content="Découvrez les cuisines sur-mesure Lucci Design. Modèles Céleste, Eden, Emilia, Costa, Carra et Divine avec quincaillerie Blum MERIVOBOX." />
      </Head>

      {/* Page Header */}
      <section className="text-center max-w-4xl mx-auto px-4 mb-16 space-y-4">
        <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold">Collections</p>
        <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-wider uppercase text-brand-dark">
          {t('home.kitchensTitle')}
        </h1>
        <div className="divider-warm mx-auto" />
        <p className="text-sm sm:text-base text-brand-brown/70 font-light leading-relaxed max-w-2xl mx-auto">
          Six collections distinctes conçues pour sublimer chaque style de vie. Chaque cuisine est fabriquée sur-mesure avec une précision millimétrique.
        </p>
      </section>

      {/* Models Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {models.map((model, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div key={model.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
              {/* Image */}
              <div
                className={`relative h-[350px] sm:h-[480px] overflow-hidden cursor-pointer group ${isReversed ? 'lg:order-2' : ''}`}
                onClick={() => setModalImage(model.image)}
              >
                <Image src={model.image} alt={model.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-brand-dark" />
                </div>
              </div>

              {/* Text */}
              <div className={`space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                <p className="text-xs tracking-[0.25em] uppercase text-brand-warm font-semibold">
                  Collection 0{idx + 1}
                </p>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark">
                  {model.name}
                </h2>
                <p className="text-sm text-brand-warm font-medium">{model.tagline}</p>
                <p className="text-sm text-brand-brown/70 font-light leading-relaxed">{model.description}</p>

                <div className="space-y-2 pt-3 border-t border-cream-300">
                  {model.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-brand-brown/70">
                      <Check className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => openQuoteModal({ details: `Cuisine ${model.name}`, projectType: t('quote.types.kitchen') })}
                    className="btn-primary px-8 py-3.5 text-xs tracking-[0.15em] uppercase font-bold inline-flex items-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{t('home.btnQuote')}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Lightbox */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setModalImage(null)}>
          <button onClick={() => setModalImage(null)} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl w-full max-h-[85vh] h-[75vh] overflow-hidden">
            <Image src={modalImage} alt="Cuisine Lucci Design" fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}