import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import { useState,useCallback } from 'react'
import Image from 'next/image'
export default function Image2(src,className){
    const [isZoomed, setIsZoomed] = useState(false)
    const handleZoomChange = useCallback(shouldZoom => {
      setIsZoomed(shouldZoom)
    }, [])
    return(
        <>
            <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                <Image src={src} className={className}  alt="" height={33} width={34}/>
            </ControlledZoom>
        </>
    )
}