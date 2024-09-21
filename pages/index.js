
import Section from '../components/Home/section'
import Slideshow from '../components/Home/home/slideshow'
import Slideshow1 from '../components/Home/slideshow'
import Head from 'next/head'
import Realisation from '../components/Home/realisation'
import cuisine from "../images/photo cuisine.jpg"
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Lucci Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
          <section className="relative ">
          <div className=" inset-0">
            <Image
              src={cuisine}
              alt="Background"
              fill
              objectfit="cover"
              quality={100}
            />
          </div>
          <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-900/95 sm:to-gray-900/25"></div>
          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                Avec Lucci Design
                <strong className="block font-extrabold text-rose-500"> Votre réve devient réalite. </strong>
              </h1>
              <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                La menuiserie rafinée.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <Link
                  href="contact"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Prendre rendez-vous
                </Link>
                <Link
                  href="a-propos"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </section>

      <Slideshow/>
      <Section/>
    </div>
  )
}
