import Image from 'next/image'
import {initLightboxJS} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { useEffect } from 'react'
import styles from './realisation.module.css'
import {SlideshowLightbox} from 'lightbox.js-react'

export default function Realisation() {
    useEffect(() => {
        initLightboxJS("Insert your License Key here", "Insert plan type here");
      }, []);
    return(
        <>
            <div>
                <div className={styles.sectitle}>
                    <h1 className="text-3xl lg:text-[40px] text-center">Nos Realisations </h1>
                </div>
                {/* <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
                    <img className="w-full rounded" src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200" />
                    <img className="w-full rounded" src="https://source.unsplash.com/AYS2sSAMyhc/1400x1200" />  
                    <img className="w-full rounded" src="https://source.unsplash.com/Kk8mEQAoIpI/1600x1200" />
                    <img className="w-full rounded" src="https://source.unsplash.com/HF3X2TWv1-w/1600x1200" />
                </SlideshowLightbox>  */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-9/12">
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                        </div>
                        <div>
                            <img clasNames="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://images.ctfassets.net/7rldri896b2a/4BPRFvvgspEZJ1VSH38xkH/b79caa38646dddf33a907d91ba82f71c/KI-HERO-DreamKitchenDSKsat.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                        </div>
                    </div>
                </div>

                <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
            </div>
        </>
    )
}