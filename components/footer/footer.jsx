import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, dir, openQuoteModal } = useLanguage();

  return (
    <footer dir={dir} className="bg-[#FDFCFA] border-t border-cream-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Centered Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6">
          {/* Left: Contact Details */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-brand-brown/70">
            <button
              onClick={() => openQuoteModal()}
              className="text-brand-dark font-bold hover:text-brand-warm transition-colors underline"
            >
              {t('nav.quoteBtn')}
            </button>
            <span className="hidden sm:inline text-cream-400">|</span>
            <a href="tel:98400083" className="hover:text-brand-dark transition-colors font-medium">
              +216 98 400 083
            </a>
            <span className="hidden sm:inline text-cream-400">|</span>
            <span>{t('footer.address')}</span>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/luccizayani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-brown/50 hover:text-brand-dark transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/luccidesign_?igsh=cTVpc2tvOWUxcHp3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-brown/50 hover:text-brand-dark transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="https://www.tiktok.com/@lluccidesign"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-brown/50 hover:text-brand-dark transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.46V8.71a8.3 8.3 0 0 0 4.91 1.6V6.86a4.89 4.89 0 0 1-1-.17Z"/>
              </svg>
            </a>
          </div>

          {/* Right: Copyright */}
          <p className="text-xs text-brand-brown/50">
            © {currentYear} Lucci Design. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}