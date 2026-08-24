import React, { useState, useMemo } from 'react';
import AllData from './AllData';
import { useRouter } from 'next/router';
import { ChevronRight, Search, Sparkles, Filter } from 'lucide-react';

export default function MaterialCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(24);
  const router = useRouter();

  const categories = [
    { key: 'All', label: 'Tous les Matériaux' },
    { key: 'Panneaux Mélaminés', label: 'Mélaminés' },
    { key: 'Digital Polylac', label: 'Digital Polylac' },
    { key: 'High Gloss', label: 'High Gloss' },
    { key: 'Panneaux Placage', label: 'Placage Bois' }
  ];

  const categoryCounts = useMemo(() => {
    const counts = { All: AllData.length };
    AllData.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredData = useMemo(() => {
    return AllData.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.finition && item.finition.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.classification && item.classification.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const visibleData = filteredData.slice(0, displayCount);

  const handleCategoryChange = (key) => {
    setSelectedCategory(key);
    setDisplayCount(24);
  };

  return (
    <div className="space-y-10">
      {/* Category Pills and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-6 border-b border-cream-300">
        <div className="flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => {
            const count = categoryCounts[cat.key] || 0;
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`px-4 py-2.5 text-xs tracking-[0.08em] uppercase font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-brand-dark text-cream-50 shadow-sm'
                    : 'text-brand-brown/70 border border-cream-300 hover:border-brand-dark hover:text-brand-dark bg-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-cream-200 text-brand-brown/70'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-brown/40" />
          <input
            type="text"
            placeholder="Rechercher par référence, teinte, texture..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setDisplayCount(24);
            }}
            className="w-full pl-10 pr-4 py-2.5 border border-cream-300 text-xs text-brand-dark placeholder-brand-brown/40 focus:outline-none focus:border-brand-warm bg-white"
          />
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-brand-brown/60">
        <p>
          Affichage de <strong className="text-brand-dark">{visibleData.length}</strong> sur{' '}
          <strong className="text-brand-dark">{filteredData.length}</strong> échantillons
        </p>
        {selectedCategory !== 'All' && (
          <button
            onClick={() => handleCategoryChange('All')}
            className="text-brand-warm hover:text-brand-dark font-medium underline"
          >
            Réinitialiser le filtre
          </button>
        )}
      </div>

      {/* Grid of Samples */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {visibleData.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/ProductDetail?id=${item.id}`)}
            className="cursor-pointer group bg-white border border-cream-300 hover:border-brand-warm transition-all duration-300 p-3"
          >
            <div className="relative h-64 overflow-hidden bg-cream-200">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase bg-white/95 text-brand-dark shadow-sm">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="pt-4 space-y-2">
              <h3 className="font-display text-sm font-bold tracking-wider uppercase text-brand-dark group-hover:text-brand-warm transition-colors line-clamp-1">
                {item.name}
              </h3>
              {item.finition && (
                <p className="text-xs text-brand-brown/60 line-clamp-1">
                  Finition : <span className="text-brand-warm font-medium">{item.finition}</span>
                </p>
              )}
              <div className="flex items-center justify-between pt-2 border-t border-cream-300 text-xs">
                <span className="text-[11px] font-semibold text-brand-warm">Fiche Technique</span>
                <ChevronRight className="w-3.5 h-3.5 text-brand-warm group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {displayCount < filteredData.length && (
        <div className="pt-8 text-center">
          <button
            onClick={() => setDisplayCount((prev) => prev + 24)}
            className="btn-outline px-10 py-3.5 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2 hover:bg-brand-dark hover:text-white"
          >
            <span>Charger plus d&apos;échantillons</span>
            <span className="text-[10px] opacity-75">
              (+{Math.min(24, filteredData.length - displayCount)})
            </span>
          </button>
        </div>
      )}

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="py-20 text-center text-brand-brown/60 space-y-4 bg-white border border-cream-300 p-8">
          <p className="text-lg font-display text-brand-dark">Aucun échantillon ne correspond à votre recherche.</p>
          <p className="text-xs text-brand-brown/50">Essayez un autre mot-clé ou réinitialisez les filtres.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setDisplayCount(24);
            }}
            className="btn-primary px-6 py-2.5 text-xs uppercase tracking-wider"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
}
