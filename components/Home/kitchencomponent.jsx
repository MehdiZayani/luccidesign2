import styles from './kitchen.module.css'
import Link from 'next/link'
import logo from '../../images/website/logo txt.jpg'
import Image from 'next/image'
function configurator() {    
    return(
        <div className={styles.configurator}>
            <div className={styles.textconfigurator}>
                <Image src={logo} className={styles.logo}/>
                <h2 className={styles.txt}>Le créateur de vos envies !</h2>
            </div>
        </div>
    )
}
export default configurator