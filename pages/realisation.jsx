import Zoom from 'react-medium-image-zoom'
import { useRouter } from 'next/router';
import SlideShow from "../components/Home/slideshow";
import Image from 'next/image';

export default  function gallerie(params) {
    const router = useRouter();
    const navigateToProductDetail = (id) => {
        // Navigue vers la page ProductDetail avec l'ID du produit
        router.push(`/RealisationDetail?id=${id}`);
      };
    return(
        <div className="w-10/12 mx-auto">
            <h1 className="text-center text-4xl pb-10">Nos Réalisations</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/jkbHBwW/387138033-1034440444184057-6073216325373916084-n.jpg" alt="Nos Réalisations"onClick={() => navigateToProductDetail(1)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/HzsCGzg/385092073-1034440597517375-1652258695510063931-n.jpg" alt="Nos Réalisations"onClick={() => navigateToProductDetail(2)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/LQgYMy5/377261346-1017027369258698-4700546900861579941-n.jpg" alt=""onClick={() => navigateToProductDetail(3)}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/4N85vGn/291611404-721752505452854-8667886232204813275-n.jpg" alt="Nos Réalisations"onClick={() => navigateToProductDetail(4)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/Yh6X8CB/387756423-1034430300851738-737599587776877652-n.jpg" alt="Nos Réalisations"onClick={() => navigateToProductDetail(5)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/m80TKV3/387762377-1034430127518422-8217400377507618329-n.jpg" alt="Nos Réalisations"onClick={() => navigateToProductDetail(6)}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/tCpNwjR/savoy.jpg" alt="Nos Réalisations"onClick={() => navigateToProductDetail(7)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/G5SgWTW/437935006-1148092746152159-1368599009008750669-n.jpg" alt="Nos Réalisations"onClick={() => navigateToProductDetail(8)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/FBv4ygm/291706305-721753115452793-3989216911704670362-n.jpg" alt="Nos Réalisations"onClick={() => navigateToProductDetail(9)}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/L54QnxS/291778009-721752292119542-6586278338167329275-n.jpg" alt="Nos Réalisations"onClick={() => navigateToProductDetail(10)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/z2RyzJX/290529554-721607522134019-4911116115187140427-n.jpg" alt="Nos Réalisations"onClick={() => navigateToProductDetail(11)}/>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
        <div className="grid gap-4 mt-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/thFZdz7/387768656-1034432464184855-4640786195350991162-n.jpg" alt="Nos Réalisations" onClick={() => navigateToProductDetail(12)}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div className='pt-4'>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/D71xH2K/387807443-1034440310850737-6453343644879234128-n.jpg" alt="Nos Réalisations" onClick={() => navigateToProductDetail(13)}/>
                </div>
            </div>
        </div>
        <SlideShow></SlideShow>
        </div>
        
    )
}
