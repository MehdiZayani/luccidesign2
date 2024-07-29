import { Html, Head, Main, NextScript } from 'next/document'
import Logo from "../images/website/logo lucci carre.jpg"
export default function Document() {
  return (
    <Html lang="fr">
 <Head>
        <meta property="og:title" content="Titre de la page" />
        <meta property="og:description" content="Description de la page" />
        <meta property="og:image" content={logo} />
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
