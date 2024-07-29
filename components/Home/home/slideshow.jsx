"use client";
import style from './slideshow.module.scss'
import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link';
const buttonStyle = {
    width: "50px",
    height:"50px",
    background: 'none',
    border: '0px',
    color:"white"
};


const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></button>
}
const Example = () => {
    const images = [
        "https://static.wixstatic.com/media/654887_4c379563f99c476cbff734548168c3ca~mv2.jpeg/v1/fill/w_1024,h_511,al_c,q_85,enc_auto/654887_4c379563f99c476cbff734548168c3ca~mv2.jpeg",
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/444752253_1179950989633001_7510010655393659894_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wGimkxSglk8Q7kNvgEz3JAW&_nc_ht=scontent.ftun8-1.fna&oh=00_AYBkZJdzuCZAF3iCn-FjDJ4o2eX2qS0K5OLUa4az1FpRMA&oe=66AD4BF4",
        "https://i.ibb.co/3hG3XKP/savoy.jpg",
    ];

    return (
        <div className={style.main}>
            <Fade className={style.slide} {...properties}>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <div className={style.card}>
                        </div>
                        <div className={style.subcard}>
                            <p className={style.title}>FABRICATION</p>
                            <div className={style.para}>
                                <Link href="./cuisine" className={style.link}>Voir Cuisine</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <div className={style.card}>
                        </div>
                        <div className={style.subcard}>
                            <p className={style.title}>POSE</p>
                            <div className={style.para}>
                                <Link  href="./gallerie" className={style.link}>Nos Réalisations</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <div className={style.card}>
                        </div>
                        <div className={style.subcard}>
                            <p className={style.title}>CONCEPTION</p>
                            <div className={style.para}>
                                <Link href="./echantillon"className={style.link}>Échantillon</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Example;