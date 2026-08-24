import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function FourOhFour() {
  return (
    <div className="bg-[#F8F6F1] text-[#2C2421] min-h-screen pt-36 pb-24 flex items-center justify-center px-4">
      <Head>
        <title>404 — Page Not Found | Lucci Design</title>
      </Head>
      <div className="max-w-md w-full text-center space-y-6 bg-white p-10 border border-cream-300">
        <span className="font-display text-6xl sm:text-7xl font-bold text-brand-warm block">404</span>
        <div className="space-y-2">
          <h1 className="text-2xl font-display font-bold text-brand-dark tracking-wider uppercase">Page Not Found</h1>
          <p className="text-xs text-brand-brown/60 font-light">The page you are looking for does not exist.</p>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary px-6 py-3 text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2"><Home className="w-4 h-4" /> Back Home</Link>
          <Link href="/cuisine" className="btn-outline px-6 py-3 text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2">Our Kitchens</Link>
        </div>
      </div>
    </div>
  );
}