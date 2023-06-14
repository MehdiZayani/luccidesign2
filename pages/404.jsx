import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/404.module.css'
import Head from 'next/head'
export default function FourOhFour() {
  return <>
  <Head>
    <title>404 page introuvable</title>
  </Head>
  <div className={styles.main}>
    <p className={styles.maintitle}>Page introuvable</p>
    <br/>
    <Link className={styles.mainlink} href="/">Retourner à l'acceuil</Link>
  </div>
  </>
}