import Image from 'next/image';
import React, { useState, useEffect,useCallback } from 'react';
import cuisine from"../media.webp";
import flou from "../placeholdercuisine.jpg";
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import mediumZoom from 'medium-zoom'
const PreviewPanel = ({ selectedProduct }) => {
    if (!selectedProduct) {
      return (
        <div className=" bg-white rounded-lg shadow flex items-center justify-center">
          <Image
              src={flou}
              width={1280}
              height={720}
              alt="cuisine flou"
              className="w-full h-full object-cover"
            />
        </div>
      );
    }
    const [isZoomed, setIsZoomed] = useState(false)
  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])
    return (
      <div className=" bg-white rounded-lg shadow  flex flex-col">
        <div className="p-4 flex-1 flex flex-col items-center bg-gray-50">
          <div className="bg-white rounded-lg shadow flex items-center justify-center">
          <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
            <Image
              src={selectedProduct.rendus}
              width={1280}
              height={720}
              alt={`Panel ${selectedProduct.id}`}
              className="w-full h-full object-cover"
            /></ControlledZoom>
          </div>

        </div>
      </div>
    );
  };
const ProductFilter = ({ products, onFilterChange }) => {
  const [filters, setFilters] = useState({
    type: 'All',
    classification: 'All',
    finition: 'All'
  });

  const filterOptions = {
    type: ['All', 'Panneau mélaminé', 'Panneau acrylique'],
    classification: ['All', 'Shady', 'Hybrid', 'Nodes', 'Uni', 'Fancy'],
    finition: ['All', 'Acrymatt', 'Acrygloss', 'Acrygloss MET']
  };

  useEffect(() => {
    handleFilterChange('type', 'All');
  }, []);

  const handleFilterChange = (category, value) => {
    const newFilters = { ...filters, [category]: value };
    setFilters(newFilters);
    
    const filteredProducts = products.filter(product => {
      return Object.entries(newFilters).every(([key, value]) => {
        if (value === 'All') return true;
        return product[key] === value;
      });
    });
    
    onFilterChange(filteredProducts);
  };

  return (
    <div className="w-64 bg-white rounded-lg shadow h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-red-700">Filters</h2>
      </div>
      
      <div className="p-4 overflow-y-auto flex-1">
        {/* Type Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-red-700">TYPES PANNEAUX</h3>
          <div className="space-y-2">
            {filterOptions.type.map((option) => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value={option}
                  checked={filters.type === option}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span>{option === 'All' ? 'Tous' : option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Classification Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-red-700">CLASSIFICATION</h3>
          <div className="space-y-2">
            {filterOptions.classification.map((option) => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="classification"
                  value={option}
                  checked={filters.classification === option}
                  onChange={(e) => handleFilterChange('classification', e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span>{option === 'All' ? 'Tous' : option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Finition Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-red-700">FINITION</h3>
          <div className="space-y-2">
            {filterOptions.finition.map((option) => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="finition"
                  value={option}
                  checked={filters.finition === option}
                  onChange={(e) => handleFilterChange('finition', e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span>{option === 'All' ? 'Tous' : option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductPage() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Example products data with many items
  const products = [
    {
      id: 1,
      name: "Cashmire 2905",
      type: "Panneau mélaminé",
      classification: "Uni",
      finition: "Acrymatt",
      image:"https://i.ibb.co/V9xpg27/CASHMIRE-2905-150x150.jpg",
      rendus:"https://i.ibb.co/JxCq1sn/01-2.jpg",
    },    {
        id: 2,
        name: "Beige 2886",
        type: "Panneau mélaminé",
        classification: "Uni",
        finition: "Acrymatt",
        image:"https://i.ibb.co/k5h3h4y/BEIGE-2886-150x150.jpg",
        rendus:"https://i.ibb.co/NLZ0XHg/cuisine-BEIGE-2886.jpg",
      },    {
        id: 3,
        name: "FRENE BLANC 2885",
        type: "Panneau mélaminé",
        classification: "Nodes",
        finition: "Acrymatt",
        image:"https://i.ibb.co/rbxr8P9/FRENE-BLANC-2885-150x150.jpg",
        rendus:"https://i.ibb.co/6PxXdgs/cuisine-FRENE-BLANC-2885.jpg",
      },    {
        id: 4,
        name: "OXYDE RED",
        type: "Panneau acrylique",
        finition: "Acrymatt",
        image:"https://i.ibb.co/d5K77pg/OXYDE-RED-150x150.jpg",
        rendus:"https://i.ibb.co/02VH40P/cuisine-OXYDE-RED.jpg",
      },
      {
      id: 5,
      name: "TEXT RID 2887",
      type: "Panneau mélaminé",
      classification: "Nodes",
      finition: "Acrymatt",
      image:"https://i.ibb.co/ccF37wD/TEXT-RID-2887-150x150.jpg",
      rendus:"https://i.ibb.co/MMs1qVr/cuisine-TEXT-RID-2887.jpg",
    },
    {
    id: 6,
    name: "GRIS CHARBON MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://i.ibb.co/mJ421P9/grey-85728-matt-150x150.jpg",
    rendus:"https://i.ibb.co/0C3SFmF/cuisine.jpg",
  },
  {
  id: 7,
  name: "FIR GREEN",
  type: "Panneau acrylique",
  finition: "Acrymatt",
  image:"https://i.ibb.co/9nNVvph/FIR-GREEN-150x150.jpg",
  rendus:"https://i.ibb.co/zH4frxB/cuisine-FIR-GREEN.jpg",
},  {
    id: 8,
    name: "GRIS CLAIR MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://i.ibb.co/MDVZFPH/grey-85384-matt-150x150.jpg",
    rendus:"https://ibb.co/rGcbGF9",
  },  {
    id: 9,
    name: "VERT MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2022/05/green-5357-matt-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2022/05/cuisine_-2.jpg",
  },  {
    id: 10,
    name: "BLEU MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2022/05/blue-4670-matt-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2022/05/cuisine_-3.jpg",
  },  {
    id: 11,
    name: "BLANC MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/white-11082-matt_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/white-11082-matt-1.jpg",
  },  {
    id: 12,
    name: "CHANVRE MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-8636-grey-met-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/chanvre-matt-4.jpg",
  },  {
    id: 13,
    name: "GRIS MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-85383_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-matt-6.jpg",
  },
  {
    id: 14,
    name: "NOIR MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/black-8421-matt_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/black-8421-matt-3.jpg",
  },
  {
    id: 15,
    name: "GRIS MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7498_Logo-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/cappucino-matt-4.jpg",
  },
  {
    id: 16,
    name: "CAPPUCINO MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-85383_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-matt-6.jpg",
  },
  {
    id: 17,
    name: "BEIGE MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7496-matt_Logo-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7496-matt-6.jpg",
  },
  {
    id: 18,
    name: "FANTAZIA 2326",
    type: "Panneau mélaminé",
    classification: "Fancy",
    image:"https://mpbs.com.tn/wp-content/uploads/2020/12/2326-Fantazia--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2020/12/2326-Fantazia-1-2.jpg",
  },
  {
    id: 19,
    name: "CHENE LIGHT 2095",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-LIGHT-02095-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-LIGHT-02095-4.jpg",
  },
  {
    id: 20,
    name: "CHENE HONEY 2092",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-HONEY-02092-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-HONEY-02092-7.jpg",
  },
  {
    id: 21,
    name: "CHENE GREY 2093",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-GREY-02093-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-GREY-02093-4.jpg",
  },
  {
    id: 22,
    name: "CHENE DARK 2090",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-DARK-02090-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-DARK-02090-7.jpg",
  },
  {
    id: 23,
    name: "CHENE BROWN 2091",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BROWN-02091-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BROWN-02091-4.jpg",
  },
  {
    id: 24,
    name: "CHENE BEIGE 2094",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BEIGE-02094-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BEIGE-02094-6.jpg",
  },
  {
    id: 25,
    name: "CHENE BEIGE 2094",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BEIGE-02094-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BEIGE-02094-6.jpg",
  },
  {
    id: 26,
    name: "NOYER 53600",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/NOYER-MC53600_1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/NOYER-53600-4.jpg",
  },
  {
    id: 27,
    name: "CHENE NATUREL 1704",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-NATUREL-01704-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-NATUREL-1704-4.jpg",
  },
  {
    id: 28,
    name: "STIRLING 2242",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2242-Strinling-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2242-Strinling-6.jpg",
  },
  {
    id: 29,
    name: "INDIAN 2242",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2243-Indian--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2243-Indian-1-3.jpg",
  },
  {
    id: 30,
    name: "CANYON 2241",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2241-Canyon--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2241-Canyon-1-3.jpg",
  },
  {
    id: 31,
    name: "ARMAGNA 2186",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2186-Armagna--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2186-Armagna-1-5.jpg",
  },
  {
    id: 32,
    name: "RIVIERA 2184",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2184-Riviera--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2184-Riviera-1-3.jpg",
  },
  {
    id: 33,
    name: "SONO 2183",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2183-Sono--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2183-Sono-1-5.jpg",
  },
  {
    id: 34,
    name: "CEDRE ROUGE 1858",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/CEDRE-ROUGE-01858-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/CEDRE-ROUGE-1858-6.jpg",
  },
  {
    id: 35,
    name: "NOYER TAUPE 1857",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/NOYER-TAUPE-01857-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/NOYER-TAUPE-1857-4.jpg",
  },
  {
    id: 36,
    name: "FRENE SWEET 1697",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/FRENE-SWEET-01697-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/FRENE-SWEET-1697-6.jpg",
  },
  {
    id: 37,
    name: "TECK SHAREN 1838",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/TECK-SHAREN-01838-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/TECK-SHAREN-1838-6.jpg",
  },
  {
    id: 38,
    name: "NOYER TAXUS 1835",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/NOYER-TAXU01835-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/NOYER-TAXUS-1835-6.jpg",
  },
  {
    id: 39,
    name: "FRENE DESIRA 1851",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRENE-DESIRA-01851-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRENE-DESIRA-1851-4.jpg",
  },
  {
    id: 40,
    name: "FRENE ASTOR 1837",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRENE-ASTOR-01837-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRENE-ASTOR-1837-6.jpg",
  },
  {
    id: 41,
    name: "FRASSINO CLAIR 1702",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRASSINO-CLAIR-01702-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRASSINO-CLAIR-1702-4.jpg",
  },
  {
    id: 42,
    name: "CHENE SMART 1836",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-SMART-01836-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-SMART-1836-4.jpg",
  },
  {
    id: 43,
    name: "CHENE RUSTIQUE 1726",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-RUSTIQUE-01726-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-RUSTIQUE-1726-6.jpg",
  },
  {
    id: 44,
    name: "CHENE MADURA 1839",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-MADURA-01839-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-MADURA-1839-4.jpg",
  },
  {
    id: 45,
    name: "CHENE FUME 1727",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-FUME-01727-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-FUME-1727-6.jpg",
  },
  {
    id: 46,
    name: "CHATAIGNIER 1795",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHATAIGNIER-01795-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHATAIGNIER-1795-4.jpg",
  },
  {
    id: 47,
    name: "GRIS 2264",
    type: "Panneau mélaminé",
    classification: "Uni",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/GRIS-02264-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/GRIS-2264-6.jpg",
  },
  {
    id: 48,
    name: "MARRON 2262",
    type: "Panneau mélaminé",
    classification: "Uni",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/MARRON-02262-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/MARRON-2262-4.jpg",
  },
  {
    id: 49,
    name: "IVOIRE 2339",
    type: "Panneau mélaminé",
    classification: "Uni",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/ivoire-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/ivoire-2339-6.jpg",
  },
  {
    id: 50,
    name: "GRIS METALISE",
    type: "Panneau mélaminé",
    classification: "Uni",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/2263-Gris-metalise--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/Gris-metalise-2263-1-4.jpg",
  },
  {
    id: 51,
    name: "NOIR",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/black-8421_Logo1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/noir-6.jpg",
  },
  {
    id: 52,
    name: "BLANC",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/white-1982_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/blanc-6.jpg",
  },
  {
    id: 53,
    name: "GRIS CLAIR",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-85384_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-clair-4.jpg",
  },
  {
    id: 54,
    name: "GRIS ",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-85383_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-4.jpg",
  },
  {
    id: 55,
    name: "SILVER ",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-8855-silver-met-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/silver-4.jpg",
  },
  {
    id: 56,
    name: "GRIS CHARBON",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/dark-grey-85382_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-charbon-6.jpg",
  },
  {
    id: 57,
    name: "CAPPUCINO",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7498_Logo-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/cappucino-6.jpg",
  },
  {
    id: 58,
    name: "BEIGE",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7496_Logo-2-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-4.jpg",
  },
  {
    id: 59,
    name: "BLEU MET",
    type: "Panneau acrylique",
    finition: "Acrygloss MET",
    image:"https://mpbs.com.tn/wp-content/uploads/2022/05/blue-4670-matt-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2022/05/cuisine_-3.jpg",
  },
  {
    id: 60,
    name: "BEIGE MET",
    type: "Panneau acrylique",
    finition: "Acrygloss MET",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7408-beige-met-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-met-4.jpg",
  },
  {
    id: 61,
    name: "CHANVRE",
    type: "Panneau acrylique",
    finition: "Acrygloss MET",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-85468_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/chanvre-4.jpg",
  },
  {
    id: 62,
    name: "ACIER",
    type: "Panneau acrylique",
    finition: "Acrygloss MET",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-8636-grey-met-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/acier-6.jpg",
  },

  
    // Ajoutez plus de produits ici
  ];

  return (
    <div>
        <h1 className='text-center text-4xl text-red-700'>Simulateur de Cuisine</h1>
        <div className="flex gap-8 p-8 flex-wrap">
        {/* Filters column */}
        <ProductFilter 
            products={products} 
            onFilterChange={setFilteredProducts} 
        />
        {/* Preview panel */}
        <PreviewPanel selectedProduct={selectedProduct} />
        {/* Products column */}
        <div className="flex-1 flex flex-col h-screen bg-white rounded-lg shadow">
            <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-red-700">Panneaux</h2>
            </div>
            
            <div className="flex flex-row flex-wrap overflow-y-auto p-4">
            <div className="grid md:grid-cols-1 gap-4 md:w-28 grid-cols-2">
                {filteredProducts.map(product => (
                <div key={product.id} onClick={() => setSelectedProduct(product)} className="p-4 border rounded bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Image src={product.image}width={100} height={100} alt={product.finition}/>
                        <p className='font-semibold uppercase'>{product.name}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}