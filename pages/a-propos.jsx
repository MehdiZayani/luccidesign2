import styles from '../styles/propos.module.css'
import Head from 'next/head'
export default function apropos(params) {
    return(
        <>
        <Head>
            <title>QUI SOMMES-NOUS ?</title>
        </Head>
        <div className={styles.propos}>
            <p className={styles.title}>QUI SOMMES-NOUS ?</p>
            <div className={styles.table}>
                <div className={styles.table1}>
                    <p>Forts d’une expérience de qualité dans le domaine de l’aménagement intérieur, nous nous inspirons de toutes les nouvelles tendances pour vous accompagner dans la réalisation de vos projets. En effet, notre défi est de concevoir la meilleure configuration possible de votre aménagement.</p>
                    <br/>
                    <p>Créée en 2019 par un homme de passionné d’aménagement intérieur et tout particulièrement du monde des cuisines Lucci Designs est une entreprise qui a pour but principal d’apporter un nouveau souffle à votre intérieur.</p>
                </div>
                <div className={styles.table2}>
                    <p>Grâce au réseau de professionnels que nous avons développé et soigneusement sélectionné, nous vous offrons la possibilité de nous confier l’intégralité de votre projet, à savoir la fabrication de cuisine, la rénovation de salle de bain, l’installation de dressings, de verrières et d’accessoires en tous genres, le design et la  décoration d’intérieur ainsi que les divers travaux de plomberie, d’électricité et de maçonnerie. </p>
                    <br/>
                    <p>Nos meubles sont conçus en usine avec des matériaux nobles dont la qualité ne diffère point au fil du temps. Notre particularité ? Le sur-mesure ! Notre but ? Révolutionner le monde du haut de gamme avec des prix défiants toute concurrence.</p>
                </div>
            </div>
        </div>
        </>
    )
}