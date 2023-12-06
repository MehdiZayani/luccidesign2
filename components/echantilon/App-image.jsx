import React, { useState } from 'react';
import AllData from './AllData';
import Image from 'next/image';
import { useRouter } from 'next/router';

function App() {
  const [images, setImage] = useState(AllData);
  const [activeCategory, setActiveCategory] = useState('All');

  const allItem = () => {
    setImage(AllData);
    setActiveCategory('All');
  };

  const filterByCategory = (categoryItem) => {
    const finalData = AllData.filter((value) => value.category === categoryItem);
    setImage(finalData);
    setActiveCategory(categoryItem);
  };
  const router = useRouter();
  const navigateToProductDetail = (id) => {
    // Navigue vers la page ProductDetail avec l'ID du produit
    router.push(`/ProductDetail?id=${id}`);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="text-base h-22 sm:h-32  top-0 flex flex-col ">
          <div className="bg-white shadow-lg rounded-xl text-sm mx-auto relative">
            <ul className="px-3 relative pb-3 flex">
              <li className="flex items-center text-gray-900 text-sm sm:text-lg py-4">
                <span className="text-gray-400 ml-2">
                  <svg
                    className={`w-7 h-7 ${activeCategory === 'All' ? 'text-indigo-600' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012 2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    ></path>
                  </svg>
                </span>
                <button
                  className={`btn btn-primary ${activeCategory === 'All' ? 'active text-indigo-600' : ''}`}
                  onClick={allItem}
                >
                  All
                </button>
              </li>
              <li className="flex items-center text-gray-900 text-sm sm:text-lg py-4">
                <span className="text-gray-400 ml-2">
                  <svg
                    className={`w-6 h-6 ${activeCategory === 'highgloss' ? 'text-indigo-600' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
                <button
                  className={`btn btn-primary ${activeCategory === 'highgloss' ? 'active text-indigo-600' : ''}`}
                  onClick={() => filterByCategory('highgloss')}
                >
                  High Gloss
                </button>
              </li>
              <li className="flex items-center text-gray-900 text-sm py-4 sm:text-lg">
                <span className="text-gray-400 ml-2">
                  <svg
                    className={`w-6 h-6 ${activeCategory === 'digitalpolylac' ? 'text-indigo-600' : ''}`}
                    fill={`${activeCategory === 'digitalpolylac' ? "#5046e5" : 'none'}`}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </span>
                <button
                  className={`btn btn-primary ${activeCategory === 'digitalpolylac' ? 'active text-indigo-600' : ''}`}
                  onClick={() => filterByCategory('digitalpolylac')}
                >
                  DIGITAL Polylac
                </button>
              </li>
              <li className="flex items-center text-gray-900 text-sm py-4 sm:text-lg">
                <span className="text-gray-400 ml-2 ">
                  <svg
                    className={`w-6 h-6 ${activeCategory === 'React' ? 'text-indigo-600' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </span>
                <button
                  className={`btn btn-primary ${activeCategory === 'React' ? 'active text-indigo-600' : ''}`}
                  onClick={() => filterByCategory('React')}
                >
                  React
                </button>
              </li>
              <li className="flex items-center text-gray-900 text-sm py-4 sm:text-lg">
                <span className="text-gray-400 ml-2">
                  <svg
                    className={`w-6 h-6 ${activeCategory === 'mélaminé' ? 'text-indigo-600' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </span>
                <button
                  className={`btn btn-primary ${activeCategory === 'mélaminé' ? 'active text-indigo-600' : ''}`}
                  onClick={() => filterByCategory('mélaminé')}
                >
                  Mélaminé
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap w-5/6 mx-auto justify-evenly">
          {images.map((value) => (
            <div className="flex mt-4" key={value.id} onClick={() => navigateToProductDetail(value.id)}>
              <Image
                src={value.image}
                className="img-fluid flex"
                alt="image"
                width={300}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
