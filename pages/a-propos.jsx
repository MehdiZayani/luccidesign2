import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, Compass, Layers, ArrowRight } from 'lucide-react';

import cuisineHero from '../images/photo cuisine.jpg';
import cuisine1 from '../images/Cuisine/1.jpg';

export default function AProposPage() {
  return (
    <div className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-28 pb-20">
      <Head>
        <title>About Us | Lucci Design</title>
        <meta name="description" content="Discover the story, values, and craftsmanship of Lucci Design. Premium custom carpentry and Blum hardware." />
      </Head>

      <section className="text-center max-w-4xl mx-auto px-4 mb-16 space-y-4">
        <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold">Our Story</p>
        <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-wider uppercase text-brand-dark">The Art of Crafting Spaces</h1>
        <div className="divider-warm mx-auto" />
        <p className="text-sm text-brand-brown/70 font-light leading-relaxed max-w-2xl mx-auto">
          Founded in 2019, Lucci Design revolutionizes premium custom carpentry in Tunisia with uncompromising artisanal and technological excellence.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] sm:h-[500px] overflow-hidden">
            <Image src={cuisineHero} alt="Our Workshop" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-xs tracking-[0.25em] uppercase text-brand-warm font-semibold">Our Vision</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark leading-tight">Emotion Meets Precision</h2>
            <div className="divider-warm" />
            <p className="text-sm text-brand-brown/70 font-light leading-relaxed">
              Drawing inspiration from the finest Italian and Scandinavian design traditions, we create configurations that elevate your daily life. Our modern industrial facility and rigorously selected craftsmen handle every aspect of your project.
            </p>
            <p className="text-sm text-brand-brown/70 font-light leading-relaxed">
              From 3D design to custom fabrication of kitchens, prestigious dressings, bathrooms, interior doors and studio partitions — every detail is meticulously considered.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-cream-300">
              <div><p className="font-display text-3xl font-bold text-brand-warm">100%</p><p className="text-xs text-brand-brown/50 mt-0.5">Custom millimeter-precise</p></div>
              <div><p className="font-display text-3xl font-bold text-brand-warm">Blum</p><p className="text-xs text-brand-brown/50 mt-0.5">Exclusive MERIVOBOX range</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="section-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs tracking-[0.3em] uppercase text-brand-warm font-semibold">Quality Commitments</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark">Four Pillars of Excellence</h2>
            <div className="divider-warm mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Noble Materials", desc: "Walnut and oak veneers, Italian lacquers, natural marble, travertine, and tempered glass." },
              { icon: ShieldCheck, title: "Austrian Hardware", desc: "Exclusive Blum MERIVOBOX ultra-silent damping hinges and drawer systems." },
              { icon: Compass, title: "3D Modeling", desc: "Photorealistic visualization to validate every detail before manufacturing." },
              { icon: Layers, title: "Expert Installation", desc: "Millimeter-perfect installation by our internally trained teams." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-cream-300 p-6 space-y-4">
                <div className="w-12 h-12 flex items-center justify-center text-brand-warm"><item.icon className="w-6 h-6" /></div>
                <h3 className="font-display text-base font-bold tracking-wider uppercase text-brand-dark">{item.title}</h3>
                <p className="text-xs text-brand-brown/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark">Ready to Start Your Project?</h2>
        <div className="divider-warm mx-auto" />
        <p className="text-sm text-brand-brown/70 font-light max-w-2xl mx-auto">Visit our showroom or contact our architects for a personalized consultation.</p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary px-10 py-4 text-xs tracking-[0.15em] uppercase inline-flex items-center gap-2">Book Appointment <ArrowRight className="w-3.5 h-3.5" /></Link>
          <Link href="/cuisine" className="btn-outline px-10 py-4 text-xs tracking-[0.15em] uppercase">Explore Kitchens</Link>
        </div>
      </section>
    </div>
  );
}