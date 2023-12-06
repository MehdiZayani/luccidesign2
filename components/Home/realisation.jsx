
import styles from './realisation.module.css'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import mediumZoom from 'medium-zoom'
import { useState,useCallback } from 'react'
export default function Realisation() {
      const [isZoomed, setIsZoomed] = useState(false)
      const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
      }, [])
    return(
        <>
            <div>
                <div className={styles.sectitle}>
                    <h1 className="text-3xl lg:text-[40px] text-center">Nos Realisations </h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-10/12 mx-auto my-24">
                    <div className="grid gap-4">
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img width="500" className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                        </ControlledZoom>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img  width="500"className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                        </ControlledZoom>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img  width="500"className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                        </ControlledZoom>
                    </div>
                    <div className="grid gap-4">
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img  width="500"className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                        </ControlledZoom>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img width="500" className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                        </ControlledZoom>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img width="500" clasNames="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                        </ControlledZoom>
                    </div>
                    <div className="grid gap-4">
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img  width="500"className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                        </ControlledZoom>
                        <div className=''>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img  width="500"className="" src="https://images.woodenstreet.de/image/data/modular%20kitchen/22.jpg" alt=""/>
                        </ControlledZoom></div>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img  width="500"className="h-auto max-w-full rounded-lg" src="https://images.ctfassets.net/7rldri896b2a/4BPRFvvgspEZJ1VSH38xkH/b79caa38646dddf33a907d91ba82f71c/KI-HERO-DreamKitchenDSKsat.jpg" alt=""/>
                        </ControlledZoom>
                    </div>
                    <div className="grid gap-4">
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img width="500" className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                        </ControlledZoom>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img width="500" className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                        </ControlledZoom>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img width="500" className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                        </ControlledZoom>
                    </div>
                    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                        <img width="500" className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                    </ControlledZoom>
                </div>

            </div>
        </>
    )
}