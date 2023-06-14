import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import Styles from "../styles/echantillon.module.css"
import Image from "next/image"

export default function echantillon(props) {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        {props.planches.map((planche)=>            
            <div className={Styles.card}>
                <img className={Styles.cardimg} src={planche.image} height={300}width={300}style={{border: "solid 2px black"}}/>
                <p className={Styles.cardtitle}>{planche.nom}</p>
            </div>)}
        </>
    )
}