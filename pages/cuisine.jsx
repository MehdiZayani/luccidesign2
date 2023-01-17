import Nav from "../components/nav";
import styles from '../styles/kitchen.module.css';
import cuisine1 from '../images/Cuisine/1.jpg';
import cuisine2 from '../images/Cuisine/2.jpg';
import cuisine3 from '../images/Cuisine/3.jpg';
import cuisine4 from '../images/Cuisine/4.jpg';
import cuisine5 from '../images/Cuisine/5.jpg';
import cuisine6 from '../images/Cuisine/6.jpg';
import cuisine7 from '../images/Cuisine/7.jpg';
import cuisine8 from '../images/Cuisine/8.jpg';
import cuisine9 from '../images/Cuisine/9.jpg';
import cuisine10 from '../images/Cuisine/10.jpg';
import cuisine11 from '../images/Cuisine/11.jpg';
import cuisine12 from '../images/Cuisine/12.jpg';
import Image from "next/image";
import Head from "next/head";
import Footer from '../components/footer/footeronly'
import AOS from 'aos'
import 'aos/dist/aos.css'
import react,{useEffect} from 'react'
export default function kitchen(params) {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div>
            {/* <Nav/> */}
            <Head>
                <title>Cuisine</title>
            </Head>
            <div className={styles.kitchen}>
                    <p className={styles.title}>NOS COLLECTIONS</p>
                <div className={styles.txt}>
                    <p>Cuisinistes haut de gamme, Déco & Designs vous présente ses cuisines dont le style se décline en fonction de vos envies. Conçues avec des matériaux nobles, nos cuisines présentent des caractéristiques que vous ne trouverez pas ailleurs. </p>
                    <br/>
                    <p>Montées d’usine, les cuisines sont entièrement réalisées sur-mesure. Profitez d’une configuration parfaitement ajustée à votre espace, à vos besoins. C’est ici la hauteur, la largeur mais également la profondeur qui vous seront ajustable. </p>
                    <br/>
                    <p>Pour votre confort, sept manières différentes d’ouvrir les portes ainsi que les tiroirs s’offriront à vous. De plus, nous vous donnons la possibilité d’opter entre cinq types de caissons différents afin que ceux-ci soient adaptés à votre style. Les façades des caissons atteignent jusqu’à 24mm d’épaisseur.</p>
                    <br/>
                    <p>Quant aux tiroirs et charnières, nous détenons l’exclusivité sur la gemme MERIVOBOX de la marque Blum.</p>
                </div>
                <div className={styles.table}>
                    <div className={styles.model11}>
                        <div className={styles.card1} data-aos="fade-right"data-aos-duration="3000">
                            <Image src={cuisine1} className={styles.card1}/>
                        </div>
                        <div className={styles.card6} data-aos="fade-left"data-aos-duration="3000">
                            <Image src={cuisine2} className={styles.card12}/>
                            <h2 className={styles.cardtitle}>Céleste</h2>
                            <p className={styles.cardpara}>La cuisine Céleste est une cuisine contemporaine. Distinguée, elle met en avant un design raffiné en alliant divers matériaux naturels tels que la pierre et le bois. </p>

                            <p className={styles.cardpara}>Ses façades couvertes des deux côtés d’une feuille mélaminée sont d’une épaisseur de 22 millimètres. Personnalisable, Céleste se décline en différentes teintes neutres (marron, beige, blanc, gris, crème etc.) et vives (rouge, bleu, vert etc.). Différents types de matières et de finitions sont également disponibles. Il en est de même pour les différents types de poignées ou de gorges. </p>
                        </div>
                    </div>
                    <div className={styles.model12}>
                        <div className={styles.card3} data-aos="fade-right"data-aos-duration="3000">
                            <Image src={cuisine3} className={styles.card33}/>
                            <h2 className={styles.cardtitle}>Eden</h2>
                            <p className={styles.cardpara}>Eden est une cuisine multi-style au design gracieux, soigné et distingué. Elle se fond aussi bien au sein d’un intérieur moderne, qu’au sein d’un intérieur contemporain ou même industriel. </p>
                            <p className={styles.cardpara}>Ses façades laquées brillantes sur leurs 6 côtés sont d’une épaisseur de 22mm. </p>
                            <p className={styles.cardpara}>Plusieurs types d’ouverture s’offrent à vous dont des gorges et des poignées.</p>
                            <p className={styles.cardpara}>Multi-facette, Eden se décline en de multiple coloris en passant d’une palette de couleurs neutres telles que le blanc, beige, crème, gris, marron, noir, à une palette de couleurs beaucoup plus vives telles que différentes teintes de rouge, vert ou encore de bleu.</p>
                        </div>
                        <div className={styles.card4} data-aos="fade-left"data-aos-duration="3000">
                            <Image src={cuisine4} className={styles.card44}/>
                        </div>
                    </div>
                    <div className={styles.model11}>
                        <div className={styles.card1} data-aos="fade-right"data-aos-duration="3000">
                            <Image src={cuisine5} className={styles.card1}/>
                        </div>
                        <div className={styles.card6} data-aos="fade-left"data-aos-duration="3000">
                            <Image src={cuisine6} className={styles.card12}/>
                            <h2 className={styles.cardtitle}>Emilia</h2>
                            <p className={styles.cardpara}>La cuisine Emilia est une cuisine moderne au style simple, épuré, et minimaliste.</p>
                            <p className={styles.cardpara}>Ses façades sont couvertes des deux côtés d’une feuille mélaminé ainsi que d’un chant ABS ton sur ton. L’épaisseur de celles-ci est de 20mm.</p>
                            <p className={styles.cardpara}>Plusieurs types d’ouvertures s’offrent à vous dont différents types de gorges et différents types de poignées.</p>
                            <p className={styles.cardpara}>Pour cette cuisine, différentes couleurs et finitions de matériaux sont disponibles.</p>
                        </div>
                    </div>
                    <div className={styles.model12}>
                        <div className={styles.card3} data-aos="fade-right"data-aos-duration="3000">
                            <Image src={cuisine7} className={styles.card33}/>
                            <h2 className={styles.cardtitle}>Costa</h2>
                            <p className={styles.cardpara}>Costa arbore un design se fondant entre le traditionnel japonais et le contemporain. Grâce à ses finitions en bois naturel, celle-ci dégage une esthétique chaleureuse. </p>
                            <p className={styles.cardpara}>Ses portes sont réalisées avec une finition en bois naturel de chêne, de noyer ou de frêne plaqué et vernie. De plus, les façades de celles-ci font 22mm d’épaisseur. </p>
                            <p className={styles.cardpara}>Plusieurs types d’ouverture s’offrent à vous dont des gorges et des poignées.</p>
                            <p className={styles.cardpara}>Les différents types de bois naturel qui s’offrent à vous se déclinent en différents types de teintes allant du bois très clair au bois foncé.</p>
                        </div>
                        <div className={styles.card4} data-aos="fade-left"data-aos-duration="3000">
                            <Image src={cuisine8} className={styles.card44}/>
                        </div>
                    </div>
                    <div className={styles.model1}>
                        <div className={styles.card1} data-aos="fade-right"data-aos-duration="3000">
                            <Image src={cuisine9} className={styles.card1}/>
                        </div>
                        <div className={styles.card2} data-aos="fade-left"data-aos-duration="3000">
                            <Image src={cuisine10} className={styles.card12}/>
                            <h2 className={styles.cardtitle}>Carra</h2>
                            <p className={styles.cardpara}>La cuisine Carra adopte un design japonais ainsi que contemporain. Son bois naturel lisse apporte à la cuisine un caractère brut. </p>
                            <p className={styles.cardpara}>Ses portes sont réalisées avec un verre d’une épaisseur de 4mm, soutenues par un cadre en aluminium d’une épaisseur de 18mm (façades de 22mm au total).</p>
                            <p className={styles.cardpara}>Le design particulier et noble de ses portes vous permet de disposer de différents types de gorges.</p>
                            <p className={styles.cardpara}>Le verre présent sur la façade est disponible en version brillante mais également en version mat. Celui-ci se décline en 5 couleurs différentes, le noir, le gris anthracite, le beige, le gris ainsi que le blanc.</p>
                        </div>
                    </div>
                    <div className={styles.model12}>
                        <div className={styles.card3} data-aos="fade-right"data-aos-duration="3000">
                            <Image src={cuisine11} className={styles.card33}/>
                            <h2 className={styles.cardtitle}>Divine</h2>
                            <p className={styles.cardpara}>Divine est une cuisine au design moderne. Sophistiquée, elle revête une esthétique élégante, raffinée et noble. </p>
                            <p className={styles.cardpara}>Concernant ses portes, elles ont de faibles émissions de formaldéhyde et elles sont laquées sur ses 6 faces. Ses façades dont l’épaisseur est de 22mm comportent toutes un fraisage horizontal placé à 4cm du bord supérieur. Plusieurs types d’ouvertures s’offrent à vous dont des gorges et des poignées élégantes.</p>
                            <p className={styles.cardpara}>Las façades de la cuisine ici vert émeraude sont disponibles en de multiples coloris dont : différentes teintes de beige et de blanc, différentes déclinaisons de vert, du gris foncé comme clair, du rouge, du bleu ou encore du noir. </p>
                        </div>
                        <div className={styles.card4} data-aos="fade-left"data-aos-duration="3000">
                            <Image src={cuisine12} className={styles.card44}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}