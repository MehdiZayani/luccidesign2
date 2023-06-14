import Styles from "../styles/echantillon.module.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import react,{useEffect} from 'react'
import { useState } from "react"
import Echantillon from "../components/echantillon"
export default function echant() {
    useEffect(() => {
        AOS.init();
      }, [])
      const [planches,setPlanches]= useState([{
                "nom":"2190 — VERTEX",
                "image":"https://comachem.com/wp-content/uploads/2020/11/VERTEX-2190-scaled.jpg",
                "dimension":"250 x 185 et 366 x 185",
                "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
                "type":"Panneaux mélaminé"
            },
            {
                "nom":"2222 — VENISE",
                "image":"https://comachem.com/wp-content/uploads/2020/11/VENICE-2222-scaled.jpg",
                "dimension":"250 x 185 et 366 x 185",
                "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
                "type":"Panneaux mélaminé"    
            },
            {                
                "nom":"2221 — RAMBALA",
                "image":"https://comachem.com/wp-content/uploads/2020/11/RAMBALA-2221-scaled.jpg",
                "dimension":"250 x 185 et 366 x 185",
                "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
                "type":"Panneaux mélaminé"
        },
        {                
            "nom":"111 — PERLA BLANCHI",
            "image":"https://comachem.com/wp-content/uploads/2020/11/PERLA-BLANCHI-111-scaled.jpg",
            "dimension":"250 x 185 et 366 x 185",
            "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
            "type":"Panneaux mélaminé"
    },
    {                
        "nom":"708 — OXYDE",
        "image":"https://comachem.com/wp-content/uploads/2020/11/OXYDE-708-scaled.jpg",
        "dimension":"250 x 185 et 366 x 185",
        "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
        "type":"Panneaux mélaminé"
},
{                
    "nom":"OSB",
    "image":"https://comachem.com/wp-content/uploads/2020/11/OSB-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"587 — NOIR STONE",
    "image":"https://comachem.com/wp-content/uploads/2020/11/NOIR-STONE-587-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"2188 — MAROQUIN",
    "image":"https://comachem.com/wp-content/uploads/2020/11/MAROQUIN-2188-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"905 — LUCENTA",
    "image":"https://comachem.com/wp-content/uploads/2020/11/LUCENTA-905-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"1851 — FRENE DESIRA",
    "image":"https://comachem.com/wp-content/uploads/2018/11/FRENE-DESIRA-1851-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"346 — HETRE",
    "image":"https://comachem.com/wp-content/uploads/2020/11/HETRE-346-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"612 — FRENE BLANC",
    "image":"https://comachem.com/wp-content/uploads/2020/11/FRENE-BLANC-612-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"713 — FOREST VERT",
    "image":"https://comachem.com/wp-content/uploads/2020/11/FOREST-VERT-713-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"113 — FIGURA",
    "image":"https://comachem.com/wp-content/uploads/2020/11/FIGURA-113-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"710 — CIMENT",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CIMENT-710-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"472 — CHENE ROCK",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-ROCK-472-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"464 — CHENE ODEON",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-ODEON-464-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"2095 — CHENE LIGHT",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-LIGHT-2095-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"2092 — CHENE HONEY",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-HONEY-2092-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"1727 — CHENE FUME",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FUME-1727-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},            
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"300 — CHENE CERUSE",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-CERUSE-300-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"629 — CHENE",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-629-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"627 — CHENE",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-627-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"1795 — CHATAIGNIER",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHATAIGNIER-1795-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"711 — CASPIO GRIS",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CASPLO-GRIS-711-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"709 — BLEU SIDI BOU SAID",
    "image":"https://comachem.com/wp-content/uploads/2020/11/BLEU-SIDI-BOU-SAID-0709-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"2204 — BLACK JACK",
    "image":"https://comachem.com/wp-content/uploads/2020/11/BLACK-JACK-2204-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},
{                
    "nom":"431 — CHENE FIL A FIL",
    "image":"https://comachem.com/wp-content/uploads/2020/11/CHENE-FIL-A-FIL-431-scaled.jpg",
    "dimension":"250 x 185 et 366 x 185",
    "epaisseur":"5mm, 8mm, 10mm, 16mm, 18mm",
    "type":"Panneaux mélaminé"
},

        ]);
    return(
        <>
        <div className={Styles.echant}>
            <Echantillon planches={planches}/>
        </div>
        </>
    )
}