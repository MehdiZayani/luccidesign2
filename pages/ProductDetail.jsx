import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import AllData from '../components/echantilon/AllData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, CheckCircle2, ArrowRight, ChevronRight, FileText } from 'lucide-react';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { t, dir, openQuoteModal } = useLanguage();
  const product = AllData.find((v) => v.id === parseInt(id));

  if (!product) {
    return (
      <div dir={dir} className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-36 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-display font-bold mb-4">Material Not Found</h2>
        <Link href="/echantillon" className="btn-primary px-6 py-3 text-xs uppercase tracking-wider">Back to Library</Link>
      </div>
    );
  }

  const others = AllData.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 3);

  return (
    <div dir={dir} className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-28 pb-20">
      <Head><title>{product.name} | Lucci Design</title><meta name="description" content={product.desc} /></Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/echantillon" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-brown/60 hover:text-brand-dark"><ArrowLeft className="w-4 h-4" /> {t('home.btnSamples')}</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6"><div className="relative h-[380px] sm:h-[500px] overflow-hidden bg-cream-200"><img src={product.image} alt={product.name} className="w-full h-full object-cover" /><div className="absolute top-4 left-4"><span className="px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase bg-white/90 text-brand-dark">{product.category}</span></div></div></div>

          <div className="lg:col-span-6 space-y-6 bg-white p-8 sm:p-10 border border-cream-300">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-brand-warm font-semibold">Fiche Technique</p>
              <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark mt-1">{product.name}</h1>
            </div>

            <div className="grid grid-cols-2 gap-4 py-3 border-y border-cream-300">
              <div><p className="text-xs text-brand-brown/50 uppercase">Catégorie</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{product.category}</p></div>
              {product.finition && <div><p className="text-xs text-brand-brown/50 uppercase">Finition</p><p className="text-sm font-semibold text-brand-warm mt-0.5">{product.finition}</p></div>}
              {product.classification && <div><p className="text-xs text-brand-brown/50 uppercase">Norme</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{product.classification}</p></div>}
              <div><p className="text-xs text-brand-brown/50 uppercase">Usage</p><p className="text-sm font-semibold text-brand-dark mt-0.5">Cuisines, Dressings, Mobilier</p></div>
            </div>

            <p className="text-sm text-brand-brown/70 font-light leading-relaxed">{product.desc}</p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-brand-brown/70"><CheckCircle2 className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><span>Haute résistance aux rayures et à l&apos;humidité</span></div>
              <div className="flex items-start gap-2.5 text-xs text-brand-brown/70"><CheckCircle2 className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><span>Protection UV anti-jaunissement</span></div>
              <div className="flex items-start gap-2.5 text-xs text-brand-brown/70"><CheckCircle2 className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><span>Fabrication certifiée E1 faible émission</span></div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openQuoteModal({ details: product.name, projectType: t('quote.types.kitchen') })}
                className="flex-1 btn-primary py-4 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t('home.btnQuote')}</span>
              </button>
              <Link href="/simulateur" className="flex-1 btn-outline py-4 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2">
                <span>{t('home.matSimBtn')}</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-24 pt-12 border-t border-cream-300 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-display font-bold tracking-wider uppercase text-brand-dark">Échantillons Similaires</h3>
              <Link href="/echantillon" className="text-xs font-semibold text-brand-warm hover:text-brand-dark flex items-center gap-1">Voir Tout <ChevronRight className="w-4 h-4" /></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((mat) => (
                <Link key={mat.id} href={`/ProductDetail?id=${mat.id}`} className="group">
                  <div className="relative h-48 overflow-hidden bg-cream-200"><img src={mat.image} alt={mat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="pt-3"><h4 className="font-display font-bold text-brand-dark text-sm tracking-wider uppercase group-hover:text-brand-warm transition-colors">{mat.name}</h4><p className="text-[11px] text-brand-warm">{mat.finition}</p></div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
