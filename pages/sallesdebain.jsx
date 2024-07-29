import Image from 'next/image'
import styles from '../styles/sallesdebain.module.css'
import salledebain from '../images/salledebain/1.jpg'
import salledebain2 from '../images/salledebain/2.jpg'
import salledebain3 from '../images/salledebain/3.png'
import salledebain4 from '../images/salledebain/4.jpg'
import salledebain5 from '../images/salledebain/5.jpg'
import salledebain6 from '../images/salledebain/6.jpg'
import salledebain7 from '../images/salledebain/7.jpg'
import salledebain8 from '../images/salledebain/8.jpg'
import salledebain9 from '../images/salledebain/9.jpg'
import salledebain10 from '../images/salledebain/10.png'
import salledebain11 from '../images/salledebain/11.jpg'
import salledebain12 from '../images/salledebain/12.jpg'
import salledebain13 from '../images/salledebain/13.jpg'
import salledebain14 from '../images/salledebain/14.jpg'
import Head from 'next/head'
export default function Salledebain(params) {
    return(
        <>
        <Head>
            <title>Meuble salle de bains</title>
        </Head>
            <div className={styles.salledebain}>
                <p className={styles.title}>NOS COLLECTIONS</p>
                <div className={styles.txt}>
                    <p>Chez Déco & Designs, nous considérons que toute pièce doit être conçue afin que vous vous sentiez bien à l’intérieur. C’est pour cela que notre objectif est que vous puissiez bénéficier d’une salle de bain pratique et fonctionnelle. </p>
                    <br/>
                    <p>Aménagez votre salle de bain de sorte à ce que tous vos biens du quotidien y trouvent leur place. Bien que vous ne passiez pas la majorité de votre temps dans cette pièce, c’est un des espaces primordiales avant d’entamer votre journée mais également pour y mettre fin. </p>
                    <br/>
                    <p>Votre bien-être au sein de cette pièce est donc primordial et c’est pourquoi Déco & Designs accordera un point essentiel à satisfaire vos envies et vos besoins. </p>
                </div>
                <p className={styles.title2}>Salle de Bains Premium</p>
                <div className={styles.section1}>
                    <div className={styles.card1}>
                        <p className={styles.sectitle}>ENAYA</p>
                        <Image src={salledebain} className={styles.image1} />
                        <Image src={salledebain3} className={styles.image2}/>
                    </div>
                    <div className={styles.card2}>
                        <Image src={salledebain2} className={styles.image1}/>
                        <p className={styles.cardpara}>Enaya est une salle de bain aux multiples facettes disponible en 10 finitions et coloris ! Sur-mesure, le nombre et l’emplacement des tiroirs est personnalisable et différents plans vasques sont disponibles. Ergonomique, ses meubles de 56cm de profondeurs vous offriront tout l’espace dont vous avez besoin. </p>
                    </div>
                </div>
                <div className={styles.section1}>
                    <div className={styles.card2}>
                        <Image src={salledebain4} className={styles.image1}/>
                        <p className={styles.cardpara}>Adonis vous offre un plateau entièrement en pierre décorative parmi lesquelles vous retrouverez le marbre, le travertin, la céramique … Avec la salle de bain adonis, un large choix de vasque accordés aux finitions des tiroir s’offrent à vous. Sans poignées, ses meubles vous offrent un design sans pareil. D’une profondeur de 50cm, 5 coloris mat et 6 plateau en pierre décorative sont disponibles.</p>
                    </div>
                    <div className={styles.card1}>
                        <p className={styles.sectitle}>ADONIS</p>
                        <Image src={salledebain5} className={styles.image1} />
                    </div>
                </div>
                <div className={styles.section1}>
                    <div className={styles.card1}>
                        <p className={styles.sectitle}>EMMA</p>
                        <Image src={salledebain6} className={styles.image4} />
                    </div>
                    <div className={styles.card2}>
                        <Image src={salledebain7} className={styles.image1}/>
                        <p className={styles.cardpara}>Bois de hêtre marié à du noir ou du blanc mat, Emma a tout d’une salle de bain industrielle. Elégante et soignée, ses meubles adaptés aux petites salles de bains occupent le moins d’espace possible avec seulement 46cm de profondeur. Les meubles de rangement ouverts lui donne un aspect épuré et ses accessoires tels que l’échelle porte-serviette ou encore ses appliques murales lui confèrent un charme sans égal. </p>
                    </div>
                </div>
                <div className={styles.section1}>
                    <div className={styles.card2}>
                        <Image src={salledebain8} className={styles.image1}/>
                        <p className={styles.cardpara}>Eli vous offre un plateau entièrement en pierre décorative parmi lesquelles vous retrouverez le marbre, le travertin, la céramique … Avec la salle de bain adonis, un large choix de vasque accordés aux finitions des tiroir s’offrent à vous. Sans poignées, ses meubles vous offrent un design sans pareil. D’une profondeur de 50cm, 5 coloris mat et 6 plateau en pierre décorative sont disponibles.</p>
                    </div>
                    <div className={styles.card1}>
                        <p className={styles.sectitle}>ELI</p>
                        <Image src={salledebain9} className={styles.image1} />
                        <Image src={salledebain10} className={styles.image3} />

                    </div>
                </div>
                <div className={styles.section1}>
                    <div className={styles.card1}>
                        <p className={styles.sectitle}>MIDOLI</p>
                        <Image src={salledebain11} className={styles.image4} />
                    </div>
                    <div className={styles.card2}>
                        <Image src={salledebain12} className={styles.image1}/>
                        <p className={styles.cardpara}>Le bois allié à l’acier noir ajoute une note de charme à vos intérieur. C’est pour cette raison que la salle de bain Midoli se différencie des salles de bain classique. Ses colonne déclinées en différentes manières dont le bois avec une porte en verre fumé lui apporte de l’originalité. Ses meubles d’une profondeur de 46cm sont disponible avec les deux différents vasques présentés sur les photos ci-dessus.</p>
                    </div>
                </div>
                <div className={styles.section1}>
                    <div className={styles.card2}>
                        <Image src={salledebain4} className={styles.image1}/>
                        <p className={styles.cardpara}>D’une profondeur de 52cm, Molina arbore des meubles entièrement laqués avec une finition au choix brillante ou satinée. Les modèles de la salle de bain Molina sont disponibles avec ou sans poignées et avec une déclinaison de 5 plans vasques différents. Faites votre choix parmi 24 coloris pour obtenir une salle de bain au plus proche de vos envies. </p>
                    </div>
                    <div className={styles.card1}>
                        <p className={styles.sectitle}>MOLINA</p>
                        <Image src={salledebain5} className={styles.image1} />
                    </div>
                </div>
            </div>
        </>
    )
}