import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Sparkles, ChevronRight, FileText } from 'lucide-react';

import cuisineHero from '../images/photo cuisine.jpg';
import cuisine1 from '../images/Cuisine/1.jpg';
import cuisine4 from '../images/Cuisine/4.jpg';
import dressing2 from '../images/Dressing/u.jpg';
import salledebain4 from '../images/salledebain/4.jpg';
import section42 from '../images/sectionhome/section4-2.jpg';

export default function Home() {
  const { t, dir, openQuoteModal } = useLanguage();
  const [activeTab, setActiveTab] = useState('polylac');

  const featuredMaterials = {
    polylac: [
      {
        name: "8540 — Statuario Calacatta",
        cat: "Digital Polylac",
        finish: "Poli Miroir HD",
        image: "https://comachem.com/wp-content/uploads/2022/05/8540-300x450.webp"
      },
      {
        name: "8526 — Marbre Noir & Veines d'Or",
        cat: "Digital Polylac",
        finish: "Marbre Portoro",
        image: "https://comachem.com/wp-content/uploads/2021/11/749_8526-300x450.jpg"
      },
      {
        name: "8532 — Travertin Romain Sablé",
        cat: "Digital Polylac",
        finish: "Minéral Sablé",
        image: "https://comachem.com/wp-content/uploads/2022/05/8532-300x450.webp"
      },
      {
        name: "8535 — Béton Ciré Anthracite",
        cat: "Digital Polylac",
        finish: "Mat Industriel",
        image: "https://comachem.com/wp-content/uploads/2022/05/8535-300x450.webp"
      }
    ],
    melamine: [
      {
        name: "431 — Chêne Fil à Fil",
        cat: "Mélaminé",
        finish: "Mat Naturel",
        image: "https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-300x450.jpg"
      },
      {
        name: "2204 — Black Jack",
        cat: "Mélaminé",
        finish: "Toucher Velours Anti-Traces",
        image: "https://comachem.com/wp-content/uploads/2020/11/BLACK-JACK-2204-300x450.jpg"
      },
      {
        name: "713 — Forest Vert",
        cat: "Mélaminé",
        finish: "Vert Émeraude Mat",
        image: "https://comachem.com/wp-content/uploads/2020/11/FOREST-VERT-713-300x450.jpg"
      },
      {
        name: "612 — Frêne Blanc Scandinave",
        cat: "Mélaminé",
        finish: "Bois Texturé Lumineux",
        image: "https://comachem.com/wp-content/uploads/2020/11/FRENE-BLANC-612-300x450.jpg"
      }
    ],
    gloss: [
      {
        name: "6015 — Blanc Pur High Gloss",
        cat: "High Gloss",
        finish: "Brillant Miroir UV",
        image: "https://comachem.com/wp-content/uploads/2018/11/6015-300x450.jpg"
      },
      {
        name: "6045 — Gris Graphite Gloss",
        cat: "High Gloss",
        finish: "Reflet Profond",
        image: "https://comachem.com/wp-content/uploads/2018/11/6045-300x450.jpg"
      },
      {
        name: "HG 7089 — Miroir Graphique",
        cat: "High Gloss",
        finish: "Laque Haute Densité",
        image: "https://comachem.com/wp-content/uploads/2020/11/HG7089-300x450.jpg"
      },
      {
        name: "HG 11602 — Marron Chaleureux",
        cat: "High Gloss",
        finish: "Brillance Acrylique",
        image: "https://comachem.com/wp-content/uploads/2020/11/MARRON-TEXT-11602-300x450.jpg"
      }
    ]
  };

  return (
    <div dir={dir} className="bg-[#F8F6F1] text-[#2C2421] min-h-screen">
      <Head>
        <title>Lucci Design | Haute Menuiserie & Matériaux d&apos;Exception</title>
        <meta
          name="description"
          content="Lucci Design conçoit des cuisines d'exception, dressings sur-mesure et intérieurs de prestige. Découvrez notre matériauthèque de plus de 190 échantillons."
        />
      </Head>

      {/* ====== HERO SECTION ====== */}
      <section className="relative h-[85vh] lg:h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={cuisineHero}
            alt="Lucci Design Haute Menuiserie"
            fill
            priority
            className="object-cover object-center"
            quality={95}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 animate-fade-in">
          <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-white/80 font-light">
            {t('home.heroSub')}
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-wide leading-tight uppercase">
            {t('home.heroTitle1')}<br />
            {t('home.heroTitle2')}
          </h1>

          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            {t('home.heroDesc')}
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openQuoteModal({ projectType: t('quote.types.kitchen') })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2C2421] text-xs sm:text-sm tracking-[0.2em] uppercase font-bold hover:bg-brand-warm hover:text-white transition-all duration-300 shadow-md cursor-pointer"
            >
              <FileText className="w-4 h-4 text-brand-warm" />
              <span>{t('home.btnQuote')}</span>
            </button>
            <Link
              href="/echantillon"
              className="inline-block px-8 py-4 border-2 border-white text-white text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-[#2C2421] transition-all duration-300"
            >
              {t('home.btnSamples')}
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED MATERIAL LIBRARY (PROMINENT HIGHLIGHT)
      ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#FDFCFA] border-b border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-warm/10 text-brand-warm text-xs font-bold uppercase tracking-widest border border-brand-warm/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('home.matBadge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark">
                {t('home.matTitle')}
              </h2>
              <p className="text-sm text-brand-brown/70 max-w-2xl font-light leading-relaxed">
                {t('home.matDesc')}
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('polylac')}
                className={`px-4 py-2 text-xs uppercase font-semibold tracking-wider transition-all ${
                  activeTab === 'polylac'
                    ? 'bg-brand-dark text-white'
                    : 'border border-cream-300 text-brand-brown/70 hover:border-brand-dark'
                }`}
              >
                {t('home.matTabPolylac')}
              </button>
              <button
                onClick={() => setActiveTab('melamine')}
                className={`px-4 py-2 text-xs uppercase font-semibold tracking-wider transition-all ${
                  activeTab === 'melamine'
                    ? 'bg-brand-dark text-white'
                    : 'border border-cream-300 text-brand-brown/70 hover:border-brand-dark'
                }`}
              >
                {t('home.matTabMelamine')}
              </button>
              <button
                onClick={() => setActiveTab('gloss')}
                className={`px-4 py-2 text-xs uppercase font-semibold tracking-wider transition-all ${
                  activeTab === 'gloss'
                    ? 'bg-brand-dark text-white'
                    : 'border border-cream-300 text-brand-brown/70 hover:border-brand-dark'
                }`}
              >
                {t('home.matTabGloss')}
              </button>
            </div>
          </div>

          {/* Sample Swatches Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMaterials[activeTab].map((mat, idx) => (
              <div
                key={idx}
                onClick={() => openQuoteModal({ details: mat.name, projectType: t('quote.types.kitchen') })}
                className="group bg-white border border-cream-300 hover:border-brand-warm transition-all duration-300 p-3 block cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-cream-200">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase bg-white/95 text-brand-dark">
                      {mat.cat}
                    </span>
                  </div>
                </div>
                <div className="pt-4 space-y-1.5">
                  <h3 className="font-display text-sm font-bold tracking-wider uppercase text-brand-dark group-hover:text-brand-warm transition-colors line-clamp-1">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-brand-brown/60">
                    Finition : <span className="text-brand-warm font-medium">{mat.finish}</span>
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs text-brand-warm font-semibold border-t border-cream-200">
                    <span>{t('home.btnQuote')}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner inside Materials Section */}
          <div className="mt-12 p-6 sm:p-8 bg-cream-100 border border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-display font-bold text-brand-dark text-base uppercase tracking-wide">
                {t('home.matSearchPrompt')}
              </h4>
              <p className="text-xs text-brand-brown/70">
                {t('home.matSearchDesc')}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/echantillon"
                className="btn-primary px-6 py-3 text-xs uppercase tracking-widest font-semibold shrink-0"
              >
                {t('home.matAllBtn')}
              </Link>
              <Link
                href="/simulateur"
                className="btn-outline px-6 py-3 text-xs uppercase tracking-widest font-semibold shrink-0"
              >
                {t('home.matSimBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== EXQUISITE SPACES / COLLECTIONS ====== */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-[0.15em] uppercase text-brand-dark">
            {t('home.spacesTitle')}
          </h2>
          <div className="divider-warm mx-auto" />
        </div>

        {/* Collection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Card 1: Bespoke Kitchen */}
          <div className="group">
            <Link href="/cuisine" className="block">
              <div className="relative h-[350px] sm:h-[420px] overflow-hidden">
                <Image
                  src={cuisine1}
                  alt="Cuisines Sur-Mesure Lucci Design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold tracking-wider uppercase text-brand-dark">
                    {t('home.kitchensTitle')}
                  </h3>
                  <p className="text-sm text-brand-brown/60 mt-2 font-light max-w-md">
                    {t('home.kitchensDesc')}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs tracking-[0.15em] uppercase font-semibold text-brand-warm border-b border-brand-warm pb-1 hover:text-brand-dark hover:border-brand-dark transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                  {t('home.kitchensBtn')} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>

          {/* Card 2: Bespoke Dressing Room */}
          <div className="group">
            <Link href="/dressing" className="block">
              <div className="relative h-[350px] sm:h-[420px] overflow-hidden">
                <Image
                  src={dressing2}
                  alt="Dressings Sur-Mesure Lucci Design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold tracking-wider uppercase text-brand-dark">
                    {t('home.dressingsTitle')}
                  </h3>
                  <p className="text-sm text-brand-brown/60 mt-2 font-light max-w-md">
                    {t('home.dressingsDesc')}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-xs tracking-[0.15em] uppercase font-semibold text-brand-warm border-b border-brand-warm pb-1 hover:text-brand-dark hover:border-brand-dark transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                  {t('home.dressingsBtn')} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>

          {/* Card 3: Custom Furniture */}
          <div className="group">
            <Link href="/sallesdebain" className="block">
              <div className="relative h-[350px] sm:h-[420px] overflow-hidden">
                <Image
                  src={salledebain4}
                  alt="Mobilier Salle de Bain Lucci Design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold tracking-wider uppercase text-brand-dark">
                  {t('home.bathroomsTitle')}
                </h3>
                <p className="text-sm text-brand-brown/60 mt-2 font-light max-w-md">
                  {t('home.bathroomsDesc')}
                </p>
              </div>
              <div className="mt-4">
                <span className="text-xs tracking-[0.15em] uppercase font-semibold text-brand-warm border-b border-brand-warm pb-1 hover:text-brand-dark hover:border-brand-dark transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                  {t('home.bathroomsBtn')} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>

          {/* Card 4: Interior Doors & Partitions */}
          <div className="group">
            <Link href="/portes" className="block">
              <div className="relative h-[350px] sm:h-[420px] overflow-hidden">
                <Image
                  src={section42}
                  alt="Portes & Verrières Lucci Design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold tracking-wider uppercase text-brand-dark">
                  {t('home.doorsTitle')}
                </h3>
                <p className="text-sm text-brand-brown/60 mt-2 font-light max-w-md">
                  {t('home.doorsDesc')}
                </p>
              </div>
              <div className="mt-4">
                <span className="text-xs tracking-[0.15em] uppercase font-semibold text-brand-warm border-b border-brand-warm pb-1 hover:text-brand-dark hover:border-brand-dark transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                  {t('home.doorsBtn')} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ====== PROCESS / APPROACH SECTION ====== */}
      <section className="section-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] sm:h-[520px] overflow-hidden">
              <Image
                src={cuisine4}
                alt="Notre Processus"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold">
                {t('home.processBadge')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark leading-tight">
                {t('home.processTitle')}
              </h2>
              <div className="divider-warm" />
              <p className="text-sm sm:text-base text-brand-brown/70 font-light leading-relaxed max-w-lg">
                {t('home.processDesc')}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => openQuoteModal({ projectType: t('quote.types.full') })}
                  className="btn-primary px-8 py-3 text-xs tracking-[0.15em] uppercase inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{t('nav.quoteBtn')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href="/a-propos"
                  className="btn-outline px-8 py-3 text-xs tracking-[0.15em] uppercase inline-flex items-center gap-2"
                >
                  <span>{t('home.processBtn')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CONFIGURATOR CTA ====== */}
      <section className="py-20 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold">
          {t('home.simBadge')}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark">
          {t('home.simTitle')}
        </h2>
        <div className="divider-warm mx-auto" />
        <p className="text-sm sm:text-base text-brand-brown/70 font-light leading-relaxed max-w-2xl mx-auto">
          {t('home.simDesc')}
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/simulateur"
            className="btn-primary px-10 py-4 text-xs tracking-[0.15em] uppercase"
          >
            {t('home.simBtn1')}
          </Link>
          <Link
            href="/echantillon"
            className="btn-outline px-10 py-4 text-xs tracking-[0.15em] uppercase"
          >
            {t('home.simBtn2')}
          </Link>
        </div>
      </section>
    </div>
  );
}
