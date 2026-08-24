import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Tajawal:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Lucci Design — Menuiserie & Agencement d'Intérieur Haut de Gamme sur mesure en Tunisie. Cuisines d'exception, dressings personnalisés, salles de bains et portes d'intérieur." />
        <meta property="og:title" content="Lucci Design | Haute Menuiserie & Agencement Sur-Mesure" />
        <meta property="og:description" content="L'art de l'agencement d'intérieur et de la menuiserie haut de gamme. Cuisines, dressings, salles de bain et mobilier d'exception." />
        <meta property="og:image" content="https://i.ibb.co/xq0yHHJ/logo-lucci-carre.jpg" />
        <meta property="og:url" content="https://luccidesign.tn" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="bg-[#F8F6F1] text-[#2C2421] font-sans antialiased selection:bg-[#A08B6E] selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}