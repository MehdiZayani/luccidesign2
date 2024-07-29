import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="fr">
 <Head>
        <meta property="og:title" content="Titre de la page" />
        <meta property="og:description" content="Description de la page" />
        <meta property="og:image" content="https://i.ibb.co/xq0yHHJ/logo-lucci-carre.jpg" />
        <meta property="og:url" content="https://luccidesign.tn" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
