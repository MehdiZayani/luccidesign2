import Footeronly from './footeronly';
// import Map from './map';
import styles from'../styles/footer.module.css';

export default function Footer() {
    return(
        <div className={styles.mainfooter}>
            {/* <Map></Map> */}
            <Footeronly></Footeronly>
        </div>
    )
}