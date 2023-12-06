
import Section from '../components/Home/section'
import Slideshow from '../components/Home/home/slideshow'
import Slideshow1 from '../components/Home/slideshow'
import Head from 'next/head'
import Realisation from '../components/Home/realisation'
export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Lucci Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Slideshow1/>
      <Section/>
      <Slideshow/>
    </div>
  )
}
