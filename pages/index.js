
import Section from '../components/Home/section'
import Slideshow from '../components/Home/slideshow'
import Head from 'next/head'
import Realisation from '../components/Home/realisation'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Lucci Design</title>
      </Head>
      <Slideshow/>
      <Realisation/>
      <Section/>
    </div>
  )
}
