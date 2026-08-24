import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Data from '../components/réalisation/AllData';
import { ArrowRight, Maximize2, MapPin, X, ChevronRight } from 'lucide-react';

export default function RealisationPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalItem, setModalItem] = useState(null);

  const categories = [
    { key: 'All', label: 'All Projects' },
    { key: 'Cuisines', label: 'Kitchens' },
    { key: 'Dressings', label: 'Dressings' },
    { key: 'Salles de Bain', label: 'Bathrooms' },
    { key: 'Mobilier Sur-Mesure', label: 'Furniture' },
    { key: 'Aménagement Professionnel', label: 'Commercial' }
  ];

  const filteredData = selectedCategory === 'All' ? Data : Data.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-28 pb-20">
      <Head>
        <title>Portfolio | Lucci Design</title>
        <meta name="description" content="Explorez les projets haut de gamme de Lucci Design : cuisines, dressings, salles de bain et aménagements de prestige." />
      </Head>

      <section className="text-center max-w-4xl mx-auto px-4 mb-12 space-y-4">
        <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold">Portfolio</p>
        <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-wider uppercase text-brand-dark">Our Projects</h1>
        <div className="divider-warm mx-auto" />

        <div className="pt-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button key={cat.key} onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2 text-xs tracking-[0.1em] uppercase font-semibold transition-all duration-300 ${
                selectedCategory === cat.key ? 'bg-brand-dark text-cream-50' : 'bg-transparent text-brand-brown/60 border border-cream-300 hover:border-brand-dark hover:text-brand-dark'
              }`}
            >{cat.label}</button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((project) => (
            <div key={project.id} onClick={() => router.push(`/RealisationDetail?id=${project.id}`)} className="cursor-pointer group">
              <div className="relative h-72 overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-white/90 text-brand-dark">{project.category}</span>
                </div>
                <button onClick={(e) => { e.stopPropagation(); setModalItem(project); }} className="absolute top-3 right-3 w-8 h-8 bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" title="Zoom">
                  <Maximize2 className="w-4 h-4 text-brand-dark" />
                </button>
              </div>
              <div className="pt-4 space-y-2">
                <h3 className="text-lg font-display font-bold tracking-wider uppercase text-brand-dark group-hover:text-brand-warm transition-colors">{project.name}</h3>
                {project.location && <div className="flex items-center gap-1.5 text-xs text-brand-brown/50"><MapPin className="w-3 h-3" /><span>{project.location}</span></div>}
                <p className="text-xs text-brand-brown/60 font-light line-clamp-2">{project.desc}</p>
                <span className="text-xs tracking-[0.1em] uppercase font-semibold text-brand-warm inline-flex items-center gap-1 pt-1">View Details <ChevronRight className="w-3.5 h-3.5" /></span>
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="py-20 text-center text-brand-brown/50 space-y-3">
            <p className="text-lg font-display">No projects found.</p>
            <button onClick={() => setSelectedCategory('All')} className="btn-primary px-6 py-2 text-xs uppercase tracking-wider">Show All</button>
          </div>
        )}
      </section>

      {modalItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setModalItem(null)}>
          <button onClick={() => setModalItem(null)} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"><X className="w-6 h-6" /></button>
          <div className="relative max-w-4xl w-full bg-white p-4 space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[60vh] w-full overflow-hidden"><img src={modalItem.image} alt={modalItem.name} className="w-full h-full object-contain" /></div>
            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-brand-warm font-semibold">{modalItem.category}</span>
                <h3 className="text-xl font-display font-bold text-brand-dark">{modalItem.name}</h3>
              </div>
              <Link href={`/RealisationDetail?id=${modalItem.id}`} className="btn-primary px-5 py-2.5 text-xs uppercase tracking-wider inline-flex items-center gap-2">Full Details <ArrowRight className="w-3.5 h-3.5" /></Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
