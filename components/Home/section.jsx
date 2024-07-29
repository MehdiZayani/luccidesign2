import styles from './section.module.css'
import section21 from '../../images/sectionhome/section2-1.jpg'
import section22 from '../../images/sectionhome/section2-2.jpg'
import section31 from '../../images/sectionhome/section31.jpg'
import section32 from '../../images/sectionhome/section32.jpg'
import section41 from '../../images/sectionhome/section4-1.png'
import section42 from '../../images/sectionhome/section4-2.jpg'
import section51 from '../../images/sectionhome/section5-1.jpg'
import section52 from '../../images/sectionhome/section5-2.jpg'
import Link from 'next/link'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import react,{useEffect} from 'react'
export default function section() {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className={styles.section}>
            <div className={styles.section1}>
                <div className={styles.image1}>
                    <div className={styles.divtxt}>
                        <a className={styles.imgtxt}>DES CUISINES HAUT DE GAMME</a>
                        <div className={styles.imgfaza}></div>
                    </div>
                </div>
                <div className={styles.responsive}>
                    <div className={styles.image2} data-aos="fade-left"data-aos-duration="3000"></div>
                <div className={styles.text} data-aos="fade-right"data-aos-duration="3000">
                    <a className={styles.title}>Cuisines Sur-Mesure</a>
                    <br/>
                    <a className={styles.para}>Des cuisines haut de gamme conçues avec des matériaux nobles. Des meubles entièrement faits sur-mesure avec un style modelé en fonction de vos désirs. </a>
                </div></div>
                <Link href="cuisine" className={styles.btn} data-aos="zoom-out"data-aos-duration="3000">VOIR LES MODÈLES</Link>
            </div>
            <div className={styles.section21}>
            <div className={styles.section2}>
                <a className={styles.sectiontitle}>Nos solutions de rangements</a>
                <div className={styles.table}>
                    <div className={styles.card} data-aos="fade-right"data-aos-duration="3000">
                        <Image className={styles.cardimg} src={section21} width={450}/>
                        <a className={styles.cardtxt}>Optimisez votre espace en créant des rangements correspondants exactement à vos besoins.</a>
                    </div>
                    <div className={styles.card} data-aos="fade-left"data-aos-duration="3000">
                        <Image className={styles.cardimg} src={section22}width={450}/>
                        <a className={styles.cardtxt}>Les rangements sur-mesure vous permettent de concevoir des espaces uniques avec un vaste panel de possibilités.</a>
                    </div>
                </div>
                <Link href="dressing" className={styles.btn2} data-aos="zoom-out"data-aos-duration="3000">VOIR LES MODÈLES</Link>
            </div>
            <div className={styles.section2}>
                <a className={styles.sectiontitle}>Nos meubles de salles de bains</a>
                <div className={styles.table}>
                    <div className={styles.card} data-aos="fade-right"data-aos-duration="3000">
                        <Image className={styles.cardimg} src={section31} width={450}/>
                        <a className={styles.cardtxt}>Pour votre salle de bain, différents styles, coloris et matériaux s'offrent à vous.</a>
                    </div>
                    <div className={styles.card} data-aos="fade-left"data-aos-duration="3000">
                        <Image className={styles.cardimg} src={section32}width={450}/>
                        <a className={styles.cardtxt}>Moderne, contemporain, scandinave ? Optez pour le style que vous préférez.</a>
                    </div>
                </div>
                <Link href="sallesdebain" className={styles.btn2} data-aos="zoom-out"data-aos-duration="3000">VOIR LES MODÈLES</Link>
            </div>
            <div className={styles.section2}>
                <a className={styles.sectiontitle}>Nos séparations de pièces</a>
                <div className={styles.table}>
                    <div className={styles.card} data-aos="fade-right"data-aos-duration="3000">
                        <Image className={styles.cardimg} src={section41} width={450} height={300}/>
                        <a className={styles.cardtxt}>Des verrières totalement adaptées à vos besoins et aux mesures de votre logement.</a>
                    </div>
                    <div className={styles.card} data-aos="fade-left"data-aos-duration="3000">
                        <Image className={styles.cardimg} src={section42}width={450}height={300}/>
                        <a className={styles.cardtxt}>Décidez de la mise en forme, du nombre de vitrines c'est à vous de choisir !</a>
                    </div>
                </div>
                <Link href="separation" className={styles.btn2} data-aos="zoom-out"data-aos-duration="3000">VOIR LES MODÈLES</Link>
            </div>
            <div className={styles.section2}>
                <a className={styles.sectiontitle}>Nos accessoires</a>
                <div className={styles.table}>
                    <div className={styles.card} data-aos="fade-right"data-aos-duration="3000">
                        <Image className={styles.cardimg} src={section51} width={450}/>
                        <a className={styles.cardtxt}>Des systèmes et solutions fonctionnelles mises à votre disposition afin d'améliorer vos espaces.</a>
                    </div>
                    <div className={styles.card} data-aos="fade-left"data-aos-duration="3000">
                        <Image className={styles.cardimg} src={section52}width={450}/>
                        <a className={styles.cardtxt}>Nos accessoires vous permettent de jouir d'un intérieur unique et pratique.</a>
                    </div>
                </div>
                <Link href="accessoires" className={styles.btn2} data-aos="zoom-out"data-aos-duration="3000">VOIR LES MODÈLES</Link>
            </div>
            </div>
        </div>
    )
}