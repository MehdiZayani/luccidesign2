import '../styles/globals.css'
import Nav from '../components/nav'
import Footer from '../components/footer/footeronly'
export default function App({ Component, pageProps }) {
  return (
    <>
    <Nav/>
  <Component {...pageProps} />   
  <Footer/> 
  </>
  )
}
