import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import AllData from '../components/réalisation/AllData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, MapPin, CheckCircle2, ArrowRight, ChevronRight, FileText } from 'lucide-react';

export default function RealisationDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { t, dir, openQuoteModal } = useLanguage();
  const project = AllData.find((v) => v.id === parseInt(id));

  if (!project) {
    return (
      <div dir={dir} className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-36 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-display font-bold mb-4">Project Not Found</h2>
        <Link href="/realisation" className="btn-primary px-6 py-3 text-xs uppercase tracking-wider">Back to Portfolio</Link>
      </div>
    );
  }

  const related = AllData.filter((item) => item.id !== project.id && item.category === project.category).slice(0, 3);

  return (
    <div dir={dir} className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-28 pb-20">
      <Head>
        <title>{project.name} | Lucci Design</title>
        <meta name="description" content={project.desc} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/realisation" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-brown/60 hover:text-brand-dark transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t('nav.portfolio')}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="relative h-[420px] sm:h-[540px] w-full overflow-hidden bg-cream-200">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase bg-white/90 text-brand-dark">{project.category}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 bg-white p-8 sm:p-10 border border-cream-300">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-brand-warm font-semibold">Étude de Réalisation</p>
              <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-wider uppercase text-brand-dark mt-1">{project.name}</h1>
              {project.location && <div className="flex items-center gap-2 text-xs text-brand-brown/50 mt-2"><MapPin className="w-4 h-4 text-brand-warm" /><span>{project.location}</span></div>}
            </div>
            <p className="text-sm text-brand-brown/70 font-light leading-relaxed">{project.desc}</p>

            <div className="space-y-2.5 pt-4 border-t border-cream-300">
              <div className="flex items-start gap-2.5 text-xs text-brand-brown/70"><CheckCircle2 className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><span>Fabrication 100% sur-mesure d&apos;usine</span></div>
              <div className="flex items-start gap-2.5 text-xs text-brand-brown/70"><CheckCircle2 className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><span>Quincaillerie autrichienne Blum haute durabilité</span></div>
              <div className="flex items-start gap-2.5 text-xs text-brand-brown/70"><CheckCircle2 className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" /><span>Pose millimétrique par nos maîtres menuisiers</span></div>
            </div>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => openQuoteModal({ details: `Projet similaire à ${project.name}`, projectType: project.category || t('quote.types.kitchen') })}
                className="w-full btn-primary py-4 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t('home.btnQuote')}</span>
              </button>
              <Link href="/simulateur" className="w-full btn-outline py-3.5 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2">
                <span>{t('home.matSimBtn')}</span>
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24 pt-12 border-t border-cream-300 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-display font-bold tracking-wider uppercase text-brand-dark">Projets Similaires</h3>
              <Link href="/realisation" className="text-xs font-semibold text-brand-warm hover:text-brand-dark flex items-center gap-1">Voir Tout <ChevronRight className="w-4 h-4" /></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link key={rel.id} href={`/RealisationDetail?id=${rel.id}`} className="group">
                  <div className="relative h-48 overflow-hidden bg-cream-200"><img src={rel.image} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="pt-3 space-y-1">
                    <h4 className="font-display font-bold text-brand-dark text-sm tracking-wider uppercase group-hover:text-brand-warm transition-colors">{rel.name}</h4>
                    <p className="text-[11px] text-brand-brown/50 line-clamp-1">{rel.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
