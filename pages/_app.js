import '../styles/globals.css';
import Nav from '../components/nav';
import Footer from '../components/footer/footer';
import { LanguageProvider } from '../context/LanguageContext';
import QuoteModal from '../components/QuoteModal';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <QuoteModal />
    </LanguageProvider>
  );
}
