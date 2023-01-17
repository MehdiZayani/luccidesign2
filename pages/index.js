
import Section from '../components/Home/section'
import Slideshow from '../components/Home/slideshow'
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Lucci Design</title>
      </Head>
      <Slideshow/>
      <Section/>
    </div>
  )
}
