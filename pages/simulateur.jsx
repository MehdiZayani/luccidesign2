import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useLanguage } from '../context/LanguageContext';
import { Check, ArrowRight, FileText, Sparkles } from 'lucide-react';

import flouCuisine from "../placeholdercuisine.jpg";
import flouDressing from "../placeholderdressing.jpg";

export default function SimulatorPage() {
  const { t, dir, openQuoteModal } = useLanguage();
  const [roomType, setRoomType] = useState('kitchen');
  const [filters, setFilters] = useState({ type: 'All', classification: 'All', finition: 'All' });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Cashmire 2905", type: "Panneau mélaminé", classification: "Uni", finition: "Acrymatt", image: "https://i.ibb.co/V9xpg27/CASHMIRE-2905-150x150.jpg", rendus: "https://i.ibb.co/JxCq1sn/01-2.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2024/08/01-4.jpg" },
    { id: 2, name: "Beige 2886", type: "Panneau mélaminé", classification: "Uni", finition: "Acrymatt", image: "https://i.ibb.co/k5h3h4y/BEIGE-2886-150x150.jpg", rendus: "https://i.ibb.co/NLZ0XHg/cuisine-BEIGE-2886.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2024/05/dressing-ferme-BEIGE-2886.jpg" },
    { id: 3, name: "Frêne Blanc 2885", type: "Panneau mélaminé", classification: "Nodes", finition: "Acrymatt", image: "https://i.ibb.co/rbxr8P9/FRENE-BLANC-2885-150x150.jpg", rendus: "https://i.ibb.co/6PxXdgs/cuisine-FRENE-BLANC-2885.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2024/05/dressing-ferme-2-FRENE-BLANC-2885.jpg" },
    { id: 4, name: "Oxyde Red", type: "Panneau acrylique", finition: "Acrymatt", image: "https://i.ibb.co/d5K77pg/OXYDE-RED-150x150.jpg", rendus: "https://i.ibb.co/02VH40P/cuisine-OXYDE-RED.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2024/05/dressing-ferme-2-OXYDE-RED.jpg" },
    { id: 5, name: "Text Rid 2887", type: "Panneau mélaminé", classification: "Nodes", finition: "Acrymatt", image: "https://i.ibb.co/ccF37wD/TEXT-RID-2887-150x150.jpg", rendus: "https://i.ibb.co/MMs1qVr/cuisine-TEXT-RID-2887.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2024/05/dressing-ferme-TEXT-RID-2887.jpg" },
    { id: 6, name: "Gris Charbon Matt", type: "Panneau acrylique", finition: "Acrymatt", image: "https://i.ibb.co/mJ421P9/grey-85728-matt-150x150.jpg", rendus: "https://i.ibb.co/0C3SFmF/cuisine.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2022/05/dressing-ferme-2.jpg" },
    { id: 7, name: "Fir Green", type: "Panneau acrylique", finition: "Acrymatt", image: "https://i.ibb.co/9nNVvph/FIR-GREEN-150x150.jpg", rendus: "https://i.ibb.co/zH4frxB/cuisine-FIR-GREEN.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2024/05/dressing-ferme-2-FIR-GREEN.jpg" },
    { id: 8, name: "Blanc Matt", type: "Panneau acrylique", finition: "Acrymatt", image: "https://mpbs.com.tn/wp-content/uploads/2021/03/white-11082-matt_Logo-150x150.jpg", rendus: "https://mpbs.com.tn/wp-content/uploads/2021/03/white-11082-matt-1.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2021/03/white-11082-matt.jpg" },
    { id: 9, name: "Noir Matt", type: "Panneau acrylique", finition: "Acrymatt", image: "https://mpbs.com.tn/wp-content/uploads/2021/03/black-8421-matt_Logo-150x150.jpg", rendus: "https://mpbs.com.tn/wp-content/uploads/2021/03/black-8421-matt-3.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2021/03/black-8421-matt-4.jpg" },
    { id: 10, name: "Noir Acrygloss", type: "Panneau acrylique", finition: "Acrygloss", image: "https://mpbs.com.tn/wp-content/uploads/2021/06/black-8421_Logo1-150x150.jpg", rendus: "https://mpbs.com.tn/wp-content/uploads/2021/06/noir-6.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2021/06/noir-7.jpg" },
    { id: 11, name: "Blanc Acrygloss", type: "Panneau acrylique", finition: "Acrygloss", image: "https://mpbs.com.tn/wp-content/uploads/2021/03/white-1982_Logo-150x150.jpg", rendus: "https://mpbs.com.tn/wp-content/uploads/2021/03/blanc-6.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2021/03/blanc-7.jpg" },
    { id: 12, name: "Noyer 53600", type: "Panneau mélaminé", classification: "Hybrid", image: "https://mpbs.com.tn/wp-content/uploads/2021/06/NOYER-MC53600_1-150x150.jpg", rendus: "https://mpbs.com.tn/wp-content/uploads/2021/06/NOYER-53600-4.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2021/06/NOYER-53600-3.jpg" },
    { id: 13, name: "Chêne Light 2095", type: "Panneau mélaminé", classification: "Nodes", image: "https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-LIGHT-02095-150x150.jpg", rendus: "https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-LIGHT-02095-4.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-LIGHT-02095-3.jpg" },
    { id: 14, name: "Acier Métallisé", type: "Panneau acrylique", finition: "Acrygloss MET", image: "https://mpbs.com.tn/wp-content/uploads/2021/03/grey-8636-grey-met-150x150.jpg", rendus: "https://mpbs.com.tn/wp-content/uploads/2021/03/acier-6.jpg", dressingRendu: "https://mpbs.com.tn/wp-content/uploads/2021/03/acier-8.jpg" },
  ];

  useEffect(() => { setSelectedProduct(products[0]); }, []);

  const handleFilterChange = (category, value) => {
    let newFilters = { ...filters, [category]: value };
    if (category === 'type') {
      if (value === 'Panneau mélaminé') newFilters.finition = 'All';
      else if (value === 'Panneau acrylique') newFilters.classification = 'All';
    }
    setFilters(newFilters);
  };

  const filteredProducts = products.filter((p) => {
    const mt = filters.type === 'All' || p.type === filters.type;
    const mc = filters.classification === 'All' || p.classification === filters.classification;
    const mf = filters.finition === 'All' || p.finition === filters.finition;
    const ms = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return mt && mc && mf && ms;
  });

  const getCurrentSrc = () => {
    if (!selectedProduct) return roomType === 'dressing' ? flouDressing : flouCuisine;
    if (roomType === 'dressing') return selectedProduct.dressingRendu || selectedProduct.rendus || flouDressing;
    return selectedProduct.rendus || flouCuisine;
  };

  return (
    <div dir={dir} className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-28 pb-16">
      <Head>
        <title>3D Configurator | Lucci Design</title>
        <meta name="description" content="Visualize your kitchen and dressing finishes in our interactive 3D configurator." />
      </Head>

      {/* Header + Room Switch */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 border-b border-cream-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('home.simBadge')}</span>
            </p>
            <h1 className="text-2xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark">
              {t('home.simTitle')}
            </h1>
          </div>
          <div className="flex items-center border border-cream-300">
            <button onClick={() => setRoomType('kitchen')} className={`px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all ${roomType === 'kitchen' ? 'bg-brand-dark text-cream-50' : 'text-brand-brown/60 hover:text-brand-dark bg-white'}`}>{t('nav.kitchens')}</button>
            <button onClick={() => setRoomType('dressing')} className={`px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all ${roomType === 'dressing' ? 'bg-brand-dark text-cream-50' : 'text-brand-brown/60 hover:text-brand-dark bg-white'}`}>{t('nav.dressings')}</button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Filters */}
          <div className="lg:col-span-3 bg-white border border-cream-300 p-6 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-cream-300">
              <span className="font-display font-bold text-brand-dark text-sm tracking-wider uppercase">Filtres</span>
              <button onClick={() => { setFilters({ type: 'All', classification: 'All', finition: 'All' }); setSearchQuery(''); }} className="text-[11px] text-brand-warm hover:underline">Réinitialiser</button>
            </div>

            <input type="text" placeholder="Rechercher..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-3.5 py-2 border border-cream-300 text-xs text-brand-dark placeholder-brand-brown/40 focus:outline-none focus:border-brand-warm bg-cream-50" />

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-brand-warm font-bold">Type de Panneau</h4>
              {['All', 'Panneau mélaminé', 'Panneau acrylique'].map((tVal) => (
                <label key={tVal} className="flex items-center justify-between text-xs text-brand-brown/70 hover:text-brand-dark cursor-pointer py-1 px-2 hover:bg-cream-100">
                  <span>{tVal === 'All' ? 'Tous les types' : tVal}</span>
                  <input type="radio" name="type" checked={filters.type === tVal} onChange={() => handleFilterChange('type', tVal)} className="accent-brand-warm" />
                </label>
              ))}
            </div>

            {filters.type !== 'Panneau acrylique' && (
              <div className="space-y-2 pt-3 border-t border-cream-300">
                <h4 className="text-xs uppercase tracking-widest text-brand-warm font-bold">Grain & Veinage</h4>
                {['All', 'Nodes', 'Hybrid', 'Shady', 'Uni', 'Fancy'].map((c) => (
                  <label key={c} className="flex items-center justify-between text-xs text-brand-brown/70 hover:text-brand-dark cursor-pointer py-1 px-2 hover:bg-cream-100">
                    <span>{c === 'All' ? 'Tous les grains' : c}</span>
                    <input type="radio" name="class" checked={filters.classification === c} onChange={() => handleFilterChange('classification', c)} className="accent-brand-warm" />
                  </label>
                ))}
              </div>
            )}

            {filters.type !== 'Panneau mélaminé' && (
              <div className="space-y-2 pt-3 border-t border-cream-300">
                <h4 className="text-xs uppercase tracking-widest text-brand-warm font-bold">Finition</h4>
                {['All', 'Acrymatt', 'Acrygloss', 'Acrygloss MET'].map((f) => (
                  <label key={f} className="flex items-center justify-between text-xs text-brand-brown/70 hover:text-brand-dark cursor-pointer py-1 px-2 hover:bg-cream-100">
                    <span>{f === 'All' ? 'Toutes finitions' : f}</span>
                    <input type="radio" name="fin" checked={filters.finition === f} onChange={() => handleFilterChange('finition', f)} className="accent-brand-warm" />
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Center: Preview */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border border-cream-300 p-2 bg-white">
              {selectedProduct && (
                <div className="flex items-center gap-3 px-4 py-2 mb-2 bg-cream-100">
                  <div className="w-8 h-8 overflow-hidden border border-cream-300"><img src={selectedProduct.image} alt="" className="w-full h-full object-cover" /></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-warm font-semibold">Finition Active</p>
                    <p className="text-xs font-display font-bold text-brand-dark">{selectedProduct.name}</p>
                  </div>
                </div>
              )}
              <div className="relative h-[340px] sm:h-[480px] overflow-hidden bg-cream-200">
                <img src={getCurrentSrc()} alt="3D Preview" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white border border-cream-300">
              <div className="text-xs text-brand-brown/60">
                {selectedProduct ? <span>Configuration : <strong className="text-brand-dark">{selectedProduct.name}</strong></span> : <span>Cliquez sur une texture pour l&apos;appliquer</span>}
              </div>
              <button
                onClick={() => openQuoteModal({
                  details: `Simulateur 3D — ${selectedProduct ? selectedProduct.name : 'Config'}`,
                  projectType: roomType === 'dressing' ? t('quote.types.dressing') : t('quote.types.kitchen')
                })}
                className="btn-primary px-6 py-2.5 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t('home.btnQuote')}</span>
              </button>
            </div>
          </div>

          {/* Right: Swatch Selector */}
          <div className="lg:col-span-3 bg-white border border-cream-300 p-5 space-y-3 max-h-[640px] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-cream-300">
              <span className="font-display font-bold text-brand-dark text-sm tracking-wider">Échantillons ({filteredProducts.length})</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {filteredProducts.map((p) => {
                const isSelected = selectedProduct && selectedProduct.id === p.id;
                return (
                  <div key={p.id} onClick={() => setSelectedProduct(p)} className={`p-2 cursor-pointer flex flex-col items-center text-center group transition-all ${isSelected ? 'border-2 border-brand-dark bg-cream-100' : 'border border-cream-300 hover:border-brand-warm'}`}>
                    <div className="relative w-full aspect-square overflow-hidden mb-2 bg-cream-200">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      {isSelected && <div className="absolute top-1 right-1 w-5 h-5 bg-brand-dark text-white flex items-center justify-center"><Check className="w-3 h-3 stroke-[3]" /></div>}
                    </div>
                    <span className="text-[11px] font-semibold text-brand-dark line-clamp-1">{p.name}</span>
                    <span className="text-[9px] text-brand-brown/50 mt-0.5 line-clamp-1">{p.finition || p.classification || p.type}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}