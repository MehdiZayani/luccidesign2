// pages/ProductDetail.js
import { useRouter } from 'next/router';
import AllData from '../components/echantilon/AllData';
import Image from 'next/image';
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Récupère les détails du produit en fonction de l'ID
  const product = AllData.find((value) => value.id === parseInt(id));

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center w-9/12 mx-auto'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
              <Zoom>
                <img src={product.image}  alt="" className='w-full h-full aspect-square object-cover rounded-xl'/></Zoom>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>{product.category}</span>
                    <h1 className='text-3xl font-bold'>{product.name}</h1>
                </div>
                <p className='text-gray-700'>
                {product.desc}
                </p>
            </div>
        </div>
    </div>
  );
};

export default ProductDetail;
