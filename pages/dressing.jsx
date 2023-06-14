import Nav from "../components/nav";
import Footer from '../components/footer/footeronly'
import styles from '../styles/dressing.module.css'
import dressing1 from '../images/Dressing/i.jpg'
import dressing2 from '../images/Dressing/u.jpg'
import dressing3 from '../images/Dressing/L.jpg'
import dressing4 from '../images/Dressing/p.jpg'
import dressing5 from '../images/Dressing/sepa.jpg'
import dressing6 from '../images/Dressing/dedier.jpg'
import dressing7 from '../images/Dressing/rang.jpg'
import Image from "next/image"
import Head from "next/head";
export default function dressing() {
    return(
        <div>
            <Head>
                <title>Dressing</title>
            </Head>
            {/* <Nav/> */}
            <div className={styles.dressing}>
                <p className={styles.title}>NOS SOLUTIONS DE RANGEMENTS</p>
                <div className={styles.txt}>
                    <p>Déco & Designs se met à votre disposition pour vous offrir des systèmes de rangements ergonomiques et fonctionnels. Afin d’organiser votre espace au mieux, différents types de dressings et de solutions de rangements s’offrent à vous.</p>
                    <br/>
                    <p>Nos rangements sur-mesure s’adaptent à vos envies, vous pouvez en décliner les matières, les couleurs, les tailles. Pour les dressings, optez pour le nombre de penderies, de niches, de tiroirs ou encore de placards que vous voulez. Faites vous plaisir sans vous restreindre.</p>
                </div>
                <div className={styles.section1}>
                    <div className={styles.card1}>                   
                        <Image src={dressing1} className={styles.img}/>
                    </div>
                    <div className={styles.card2}>
                        <p className={styles.cardtitle}>Le dressing en I</p>
                        <p className={styles.cardpara}>Le dressing en i est parfait pour les personnes qui ne disposent pas d’énormément de place. Celui-ci occupe la place uniquement sur un mur. Moins spacieux, il est parfait en meuble d’entrée et il vous permet tout de même de disposer de niches, penderies ainsi que tiroirs. </p>
                    </div>
                </div>
                     <div className={styles.section1}>
                        <div className={styles.card1}>
                            <p className={styles.cardtitle}>Le dressing en U</p>
                            <p className={styles.cardpara}>Le dressing en U lui est destiné au personnes qui disposent d’un espace un peu plus grand. Il prend trois murs et forme un U, comme son nom l’indique. Spacieux, celui-ci vous permettra de ranger tout ce que vous avez envie. Il peut également être composé d’autant de penderies ou tiroirs que vous le souhaitez. Privilégiez l’espace du haut pour les objets que vous n’utilisez pas quotidiennement.</p>
                        </div>
                        <div className={styles.card2}>                   
                            <Image src={dressing2} className={styles.img}/>
                        </div>
                    </div>
                    <div className={styles.section1}>
                        <div className={styles.card1}>                   
                            <Image src={dressing3} className={styles.img}/>
                        </div>
                        <div className={styles.card2}>
                            <p className={styles.cardtitle}>Le dressing en L</p>
                            <p className={styles.cardpara}>Le dressing en L se situe sur la surface de deux murs. Il est également parfait pour les petits espaces car il peut être beaucoup plus grand qu’un dressing en I mais également plus petit ou de la même taille que certains. Celui-ci est design et tendance. </p>
                        </div>
                    </div>
                    <div className={styles.section1}>
                        <div className={styles.card1}>
                            <p className={styles.cardtitle}>Le dressing avec portes</p>
                            <p className={styles.cardpara}>Pour tout types de dressing, vous avez la possibilité d’optez pour un dressing avec portes ou d’un dressing sans portes. Les portes peuvent être coulissantes, pliantes ou alors battantes. Les portes coulissantes sont généralement les plus designs.</p>
                        </div>
                        <div className={styles.card2}>                   
                            <Image src={dressing4} className={styles.img}/>
                        </div>
                    </div>
                    <div className={styles.section1}>
                        <div className={styles.card1}>                   
                            <Image src={dressing5} className={styles.img}/>
                        </div>
                        <div className={styles.card2}>
                            <p className={styles.cardtitle}>Le séparateur de pièce</p>
                            <p className={styles.cardpara}>Ce type de dressing qui n’est pas considéré comme faisant partie d’une pièce à part entière permet de délimiter une zone destinée au dressing ainsi qu’un autre espace qui est généralement la chambre. Celui-ci n’est pas exclusivement réservé aux personnes disposants d’un grand espaces mais afin qu’il sois optimal, il vaux mieux disposer d’un espace assez conséquent. </p>
                        </div>
                    </div>
                    <div className={styles.section1}>
                        <div className={styles.card1}>
                            <p className={styles.cardtitle}>La pièce dédiée</p>
                            <p className={styles.cardpara}>La pièce dédiée est une pièce exclusivement réservé à l’aménagement d’un dressing. Cette pièce peut être aménagée d’un dressing qui prend l’ensemble des murs, de dressing en U, en L ou encore en I (en fonction des préférences). Elle peut y comporter des meubles à chaussures, différents placards pour vos vêtements et de multiples aménagements.</p>
                        </div>
                        <div className={styles.card2}>                   
                            <Image src={dressing6} className={styles.img}/>
                        </div>
                    </div>
                    <div className={styles.section1}>
                        <div className={styles.card1}>                   
                            <Image src={dressing7} className={styles.img}/>
                        </div>
                        <div className={styles.card2}>
                            <p className={styles.cardtitle}>Les espaces de rangements</p>
                            <p className={styles.cardpara}>Déco & Designs met à votre disposition différents types de meubles de rangements pour tous vos espaces. Profitez de solutions fonctionnelles pour vous faciliter la vie. Ces solutions ont pour but d’apporter un peu d’ordre dans votre intérieur mais également de gagner de l’espace en étant le plus ergonomique possible. </p>
                        </div>
                    </div>
                </div>
            {/* <Footer/> */}
        </div>
    )
}