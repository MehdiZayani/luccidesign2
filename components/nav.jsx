import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Menu as MenuIcon, X, ChevronRight, Calendar, Sparkles } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { lang, setLang, t, dir, openQuoteModal } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  // Perfectly balanced left (4 items) and right (2 links + lang + quote)
  const leftLinks = [
    { title: t('nav.kitchens'), path: "/cuisine" },
    { title: t('nav.dressings'), path: "/dressing" },
    { title: t('nav.samples'), path: "/echantillon", badge: "190+" },
    { title: t('nav.portfolio'), path: "/realisation" },
  ];

  const rightLinks = [
    { title: t('nav.simulator'), path: "/simulateur" },
    { title: t('nav.contact'), path: "/contact" },
  ];

  const allLinks = [
    { title: t('nav.home'), path: "/" },
    { title: `${t('nav.samples')} (190+)`, path: "/echantillon", highlight: true },
    { title: t('nav.kitchens'), path: "/cuisine" },
    { title: t('nav.dressings'), path: "/dressing" },
    { title: t('nav.bathrooms'), path: "/sallesdebain" },
    { title: t('nav.doors'), path: "/portes" },
    { title: t('nav.portfolio'), path: "/realisation" },
    { title: t('nav.simulator'), path: "/simulateur" },
    { title: t('nav.about'), path: "/a-propos" },
    { title: t('nav.contact'), path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === '/' && router.pathname === '/') return true;
    if (path !== '/' && router.pathname.startsWith(path)) return true;
    return false;
  };

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' }
  ];

  return (
    <>
      <header
        dir={dir}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#F8F6F1] border-b border-[#E2DDD3] ${
          scrolled ? 'py-2.5 shadow-md bg-[#F8F6F1]/98 backdrop-blur-md' : 'py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative h-12 flex items-center justify-between">
          
          {/* =========================================================
              DESKTOP LEFT NAVIGATION (4 Links)
          ========================================================= */}
          <nav className="hidden lg:flex items-center justify-start gap-4 xl:gap-7 z-10">
            {leftLinks.map((item, idx) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={idx}
                  href={item.path}
                  className={`relative whitespace-nowrap text-[12px] xl:text-[13px] tracking-[0.08em] xl:tracking-[0.12em] uppercase font-semibold transition-colors duration-200 py-1 flex items-center gap-1.5 ${
                    active
                      ? 'text-[#1E1715] font-bold'
                      : 'text-[#4A3E38] hover:text-[#1E1715]'
                  }`}
                >
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="text-[8.5px] px-1.5 py-0.5 font-bold bg-[#A08B6E] text-white rounded">
                      {item.badge}
                    </span>
                  )}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#A08B6E]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =========================================================
              DESKTOP DEAD-CENTER LOGO
          ========================================================= */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
            <Link href="/" className="flex flex-col items-center justify-center group text-center select-none py-1">
              <span className="font-display tracking-[0.25em] text-2xl xl:text-3xl font-extrabold text-[#1E1715] group-hover:text-[#A08B6E] transition-colors leading-none">
                LUCCI
              </span>
              <span className="text-[9px] tracking-[0.45em] text-[#8B7355] uppercase font-medium mt-1">
                DESIGN
              </span>
            </Link>
          </div>

          {/* =========================================================
              DESKTOP RIGHT NAVIGATION & ACTIONS (2 Links + Lang + Quote)
          ========================================================= */}
          <nav className="hidden lg:flex items-center justify-end gap-3.5 xl:gap-6 z-10">
            {rightLinks.map((item, idx) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={idx}
                  href={item.path}
                  className={`relative whitespace-nowrap text-[12px] xl:text-[13px] tracking-[0.08em] xl:tracking-[0.12em] uppercase font-semibold transition-colors duration-200 py-1 ${
                    active
                      ? 'text-[#1E1715] font-bold'
                      : 'text-[#4A3E38] hover:text-[#1E1715]'
                  }`}
                >
                  <span>{item.title}</span>
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#A08B6E]" />
                  )}
                </Link>
              );
            })}

            {/* Language Switcher */}
            <div className="flex items-center border border-[#D5CFBF] bg-white p-0.5 shrink-0 rounded-none ml-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-1.5 py-0.5 text-[10px] font-bold tracking-wider transition-colors cursor-pointer ${
                    lang === l.code
                      ? 'bg-[#1E1715] text-white'
                      : 'text-[#6A5E55] hover:text-[#1E1715]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Quote CTA Button */}
            <button
              onClick={() => openQuoteModal()}
              className="btn-primary px-3.5 xl:px-4 py-2 text-[11px] uppercase tracking-wider font-bold rounded-none shrink-0 whitespace-nowrap cursor-pointer shadow-xs ml-1"
            >
              {t('nav.quoteBtn')}
            </button>
          </nav>

          {/* =========================================================
              MOBILE HEADER (Below lg)
          ========================================================= */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <Link href="/" className="flex flex-col items-start">
              <span className="font-display tracking-[0.25em] text-lg font-extrabold text-[#1E1715]">
                LUCCI
              </span>
              <span className="text-[8.5px] tracking-[0.4em] text-[#8B7355] uppercase font-medium -mt-0.5">
                DESIGN
              </span>
            </Link>

            <div className="flex items-center gap-2">
              {/* Language toggle on mobile */}
              <div className="flex items-center border border-[#D5CFBF] bg-white p-0.5">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-1.5 py-0.5 text-[9px] font-bold ${
                      lang === l.code ? 'bg-[#1E1715] text-white' : 'text-[#6A5E55]'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => openQuoteModal()}
                className="btn-primary px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider"
              >
                Devis
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 text-[#1E1715] hover:text-[#8B7355] transition-colors"
                aria-label="Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        dir={dir}
        className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} bottom-0 w-4/5 max-w-sm z-50 bg-[#FDFCFA] border-l border-cream-300 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isOpen ? 'translate-x-0' : dir === 'rtl' ? '-translate-x-full' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-cream-300">
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-brand-dark tracking-[0.2em]">LUCCI</span>
              <span className="text-[10px] tracking-[0.4em] text-brand-warm uppercase font-medium">DESIGN</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1.5 text-brand-brown hover:text-brand-dark">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-1">
            {allLinks.map((item, idx) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={idx}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-md text-sm tracking-wide font-semibold transition-colors ${
                    item.highlight
                      ? 'bg-brand-warm/15 text-brand-dark border-l-3 border-brand-warm font-bold'
                      : active
                      ? 'bg-brand-dark/8 text-brand-dark font-bold'
                      : 'text-brand-brown hover:bg-cream-200 hover:text-brand-dark'
                  }`}
                >
                  <span>{item.title}</span>
                  <ChevronRight className={`w-4 h-4 ${active ? 'text-brand-dark' : 'text-cream-400'}`} />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-cream-300 flex flex-col gap-3">
          <button
            onClick={() => {
              setIsOpen(false);
              openQuoteModal();
            }}
            className="w-full btn-primary py-3 rounded-md text-center text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{t('nav.quoteBtn')}</span>
          </button>

          <a
            href="tel:98400083"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-md border border-brand-dark/20 text-sm font-semibold text-brand-dark hover:bg-cream-200"
          >
            <Phone className="w-4 h-4 text-brand-warm" />
            <span>+216 98 400 083</span>
          </a>
        </div>
      </div>
    </>
  );
}