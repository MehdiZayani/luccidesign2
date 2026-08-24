import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MaterialCatalog from '../components/echantilon/App-image';
import { ArrowRight } from 'lucide-react';

export default function EchantillonPage() {
  return (
    <div className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-28 pb-20">
      <Head>
        <title>Materials & Finishes | Lucci Design</title>
        <meta name="description" content="Explore our premium material library: melamine panels, High Gloss finishes, and Digital Polylac textures." />
      </Head>

      <section className="text-center max-w-4xl mx-auto px-4 mb-16 space-y-4">
        <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold">Material Library</p>
        <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-wider uppercase text-brand-dark">Finishes & Textures</h1>
        <div className="divider-warm mx-auto" />
        <p className="text-sm text-brand-brown/70 font-light leading-relaxed max-w-2xl mx-auto">
          Each surface tells a story. Discover our high-gloss lacquers, anti-scratch Digital Polylac coatings, and certified textured wood veneers.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MaterialCatalog />
      </section>

      <section className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 section-cream py-16">
        <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-wider uppercase text-brand-dark">Visualize These Materials</h3>
        <p className="text-sm text-brand-brown/70 font-light max-w-2xl mx-auto">
          Test our samples directly in our interactive 3D simulator and compose your dream kitchen or dressing room.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link href="/simulateur" className="btn-primary px-10 py-4 text-xs tracking-[0.15em] uppercase inline-flex items-center gap-2">Open Configurator <ArrowRight className="w-3.5 h-3.5" /></Link>
          <Link href="/contact" className="btn-outline px-10 py-4 text-xs tracking-[0.15em] uppercase">Order Physical Samples</Link>
        </div>
      </section>
    </div>
  );
}