import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Menu, Filter, X } from 'lucide-react';
import flouCuisine from "../placeholdercuisine.jpg";
import flouDressing from "../placeholderdressing.jpg";
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const PreviewPanel = ({ selectedProduct, roomType }) => {
  const getDefaultImage = () => {
    switch(roomType) {
      case 'dressing':
        return {
          src: flouDressing,
          alt: "dressing flou"
        };
      default:
        return {
          src: flouCuisine,
          alt: "cuisine flou"
        };
    }
  };

  if (!selectedProduct) {
    const defaultImage = getDefaultImage();
    return (
      <div className="bg-white rounded-lg shadow flex items-center justify-center">
        <Image
          src={defaultImage.src}
          width={1280}
          height={720}
          alt={defaultImage.alt}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  const [isZoomed, setIsZoomed] = useState(false);
  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom);
  }, []);
  const getImageForRoomType = () => {
    if (roomType === 'dressing') {
      return selectedProduct.dressingRendu || getDefaultImage().src;
    }
    return selectedProduct.rendus || getDefaultImage().src;
  };
  return (
    <div className="bg-white rounded-lg shadow flex flex-col">
      <div className="p-4 flex-1 flex flex-col items-center bg-gray-50">
        <div className="bg-white rounded-lg shadow flex items-center justify-center">
          <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
            <Image
              src={getImageForRoomType()}
              width={1280}
              height={720}
              alt={`Panel ${selectedProduct.id}`}
              className="w-full h-full object-cover"
            />
          </ControlledZoom>
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
    let newFilters = { ...filters, [category]: value };

    // Gestion des réinitialisations en fonction du type de panneau
    if (category === 'type') {
      if (value === 'Panneau mélaminé') {
        newFilters.finition = 'All';
      } else if (value === 'Panneau acrylique') {
        newFilters.classification = 'All';
      }
    }

    setFilters(newFilters);
    
    const filteredProducts = products.filter(product => {
      return Object.entries(newFilters).every(([key, filterValue]) => {
        if (filterValue === 'All') return true;
        // Ignorer finition pour panneaux mélaminés
        if (key === 'finition' && product.type === 'Panneau mélaminé') return true;
        // Ignorer classification pour panneaux acryliques
        if (key === 'classification' && product.type === 'Panneau acrylique') return true;
        return product[key] === filterValue;
      });
    });
    onFilterChange(filteredProducts);
  };

  return (
    <div className="bg-white rounded-lg shadow h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-red-700">Filters</h2>
      </div>
      <div className="p-4 overflow-y-auto flex-1">
        {Object.entries(filterOptions).map(([category, options]) => {
          // Vérifier si la section doit être désactivée
          const isSectionDisabled = 
            (category === 'finition' && filters.type === 'Panneau mélaminé') ||
            (category === 'classification' && filters.type === 'Panneau acrylique');

          return (
            <div key={category} className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-red-700">
                {category === 'type' ? 'TYPES PANNEAUX' : category.toUpperCase()}
              </h3>
              <div className="space-y-2">
                {options.map((option) => {
                  const isDisabled = isSectionDisabled && option !== 'All';

                  return (
                    <label 
                      key={option} 
                      className={`flex items-center space-x-2 ${
                        isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                      }`}
                    >
                      <input
                        type="radio"
                        name={category}
                        value={option}
                        checked={filters[category] === option}
                        onChange={(e) => handleFilterChange(category, e.target.value)}
                        disabled={isDisabled}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>{option === 'All' ? 'Tous' : option}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function ProductPage() {
  const [roomType, setRoomType] = useState('kitchen');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showPanels, setShowPanels] = useState(false);

  // Utilise les mêmes données de produits que dans ton code original
  const products = [
    {
      id: 1,
      name: "Cashmire 2905",
      type: "Panneau mélaminé",
      classification: "Uni",
      finition: "Acrymatt",
      image:"https://i.ibb.co/V9xpg27/CASHMIRE-2905-150x150.jpg",
      rendus:"https://i.ibb.co/JxCq1sn/01-2.jpg",
      dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2024/08/01-4.jpg",
    },    {
        id: 2,
        name: "Beige 2886",
        type: "Panneau mélaminé",
        classification: "Uni",
        finition: "Acrymatt",
        image:"https://i.ibb.co/k5h3h4y/BEIGE-2886-150x150.jpg",
        rendus:"https://i.ibb.co/NLZ0XHg/cuisine-BEIGE-2886.jpg",
        dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2024/05/dressing-ferme-BEIGE-2886.jpg",
      },    {
        id: 3,
        name: "FRENE BLANC 2885",
        type: "Panneau mélaminé",
        classification: "Nodes",
        finition: "Acrymatt",
        image:"https://i.ibb.co/rbxr8P9/FRENE-BLANC-2885-150x150.jpg",
        rendus:"https://i.ibb.co/6PxXdgs/cuisine-FRENE-BLANC-2885.jpg",
        dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2024/05/dressing-ferme-2-FRENE-BLANC-2885.jpg",

      },    {
        id: 4,
        name: "OXYDE RED",
        type: "Panneau acrylique",
        finition: "Acrymatt",
        image:"https://i.ibb.co/d5K77pg/OXYDE-RED-150x150.jpg",
        rendus:"https://i.ibb.co/02VH40P/cuisine-OXYDE-RED.jpg",
        dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2024/05/dressing-ferme-2-OXYDE-RED.jpg",

      },
      {
      id: 5,
      name: "TEXT RID 2887",
      type: "Panneau mélaminé",
      classification: "Nodes",
      finition: "Acrymatt",
      image:"https://i.ibb.co/ccF37wD/TEXT-RID-2887-150x150.jpg",
      rendus:"https://i.ibb.co/MMs1qVr/cuisine-TEXT-RID-2887.jpg",
      dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2024/05/dressing-ferme-TEXT-RID-2887.jpg",
    },
    {
    id: 6,
    name: "GRIS CHARBON MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://i.ibb.co/mJ421P9/grey-85728-matt-150x150.jpg",
    rendus:"https://i.ibb.co/0C3SFmF/cuisine.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2022/05/dressing-ferme-2.jpg",

  },
  {
  id: 7,
  name: "FIR GREEN",
  type: "Panneau acrylique",
  finition: "Acrymatt",
  image:"https://i.ibb.co/9nNVvph/FIR-GREEN-150x150.jpg",
  rendus:"https://i.ibb.co/zH4frxB/cuisine-FIR-GREEN.jpg",
  dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2024/05/dressing-ferme-2-FIR-GREEN.jpg",

},  {
    id: 8,
    name: "GRIS CLAIR MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://i.ibb.co/MDVZFPH/grey-85384-matt-150x150.jpg",
    rendus:"https://ibb.co/rGcbGF9",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2022/05/dressing-ferme-2-1.jpg",

  },  {
    id: 9,
    name: "VERT MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2022/05/green-5357-matt-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2022/05/cuisine_-2.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2022/05/dressing-ferme-2-2.jpg",

  },  {
    id: 10,
    name: "BLEU MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2022/05/blue-4670-matt-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2022/05/cuisine_-3.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2022/05/dressing-ferme-2-3.jpg",

  },  {
    id: 11,
    name: "BLANC MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/white-11082-matt_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/white-11082-matt-1.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/white-11082-matt.jpg",

  },  {
    id: 12,
    name: "CHANVRE MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-8636-grey-met-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/chanvre-matt-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/chanvre-matt-3.jpg",

  },  {
    id: 13,
    name: "GRIS MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-85383_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-matt-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-matt-7.jpg",

  },
  {
    id: 14,
    name: "NOIR MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/black-8421-matt_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/black-8421-matt-3.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/black-8421-matt-4.jpg",

  },
  {
    id: 15,
    name: "GRIS MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7498_Logo-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/cappucino-matt-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-matt-7.jpg",

  },
  {
    id: 16,
    name: "CAPPUCINO MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-85383_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-matt-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/cappucino-matt-3.jpg",

  },
  {
    id: 17,
    name: "BEIGE MATT",
    type: "Panneau acrylique",
    finition: "Acrymatt",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7496-matt_Logo-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7496-matt-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7496-matt-7.jpg",

  },
  {
    id: 18,
    name: "FANTAZIA 2326",
    type: "Panneau mélaminé",
    classification: "Fancy",
    image:"https://mpbs.com.tn/wp-content/uploads/2020/12/2326-Fantazia--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2020/12/2326-Fantazia-1-2.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2020/12/2326-Fantazia.jpg",

  },
  {
    id: 19,
    name: "CHENE LIGHT 2095",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-LIGHT-02095-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-LIGHT-02095-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-LIGHT-02095-3.jpg",

  },
  {
    id: 20,
    name: "CHENE HONEY 2092",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-HONEY-02092-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-HONEY-02092-7.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-HONEY-02092-8.jpg",

  },
  {
    id: 21,
    name: "CHENE GREY 2093",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-GREY-02093-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-GREY-02093-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-GREY-02093-3.jpg",

  },
  {
    id: 22,
    name: "CHENE DARK 2090",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-DARK-02090-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-DARK-02090-7.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-DARK-02090-8.jpg",

  },
  {
    id: 23,
    name: "CHENE BROWN 2091",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BROWN-02091-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BROWN-02091-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BROWN-02091-3.jpg",

  },
  {
    id: 24,
    name: "CHENE BEIGE 2094",
    type: "Panneau mélaminé",
    classification: "Nodes",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BEIGE-02094-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BEIGE-02094-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-BEIGE-02094-7.jpg",

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
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/06/NOYER-53600-3.jpg",

  },
  {
    id: 27,
    name: "CHENE NATUREL 1704",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-NATUREL-01704-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-NATUREL-1704-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/CHENE-NATUREL-1704-3.jpg",

  },
  {
    id: 28,
    name: "STIRLING 2242",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2242-Strinling-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2242-Strinling-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/2242-Strinling-7.jpg",

  },
  {
    id: 29,
    name: "INDIAN 2242",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2243-Indian--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2243-Indian-1-3.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/2243-Indian-1-2.jpg",

  },
  {
    id: 30,
    name: "CANYON 2241",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2241-Canyon--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2241-Canyon-1-3.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/2241-Canyon-1-2.jpg",

  },
  {
    id: 31,
    name: "ARMAGNA 2186",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2186-Armagna--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2186-Armagna-1-5.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/2186-Armagna-1-6.jpg",

  },
  {
    id: 32,
    name: "RIVIERA 2184",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2184-Riviera--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2184-Riviera-1-3.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/2184-Riviera-1-2.jpg",

  },
  {
    id: 33,
    name: "SONO 2183",
    type: "Panneau mélaminé",
    classification: "Hybrid",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/2183-Sono--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/2183-Sono-1-5.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/2183-Sono-1-6.jpg",

  },
  {
    id: 34,
    name: "CEDRE ROUGE 1858",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/CEDRE-ROUGE-01858-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/CEDRE-ROUGE-1858-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/06/CEDRE-ROUGE-1858-7.jpg",

  },
  {
    id: 35,
    name: "NOYER TAUPE 1857",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/NOYER-TAUPE-01857-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/NOYER-TAUPE-1857-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/06/noyer-taupe-1857-3.jpg",

  },
  {
    id: 36,
    name: "FRENE SWEET 1697",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/FRENE-SWEET-01697-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/FRENE-SWEET-1697-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/06/FRENE-SWEET-1697-7.jpg",

  },
  {
    id: 37,
    name: "TECK SHAREN 1838",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/TECK-SHAREN-01838-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/TECK-SHAREN-1838-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/TECK-SHAREN-1838-7.jpg",

  },
  {
    id: 38,
    name: "NOYER TAXUS 1835",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/NOYER-TAXU01835-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/NOYER-TAXUS-1835-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/NOYER-TAXUS-1835-7.jpg",

  },
  {
    id: 39,
    name: "FRENE DESIRA 1851",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRENE-DESIRA-01851-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRENE-DESIRA-1851-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRENE-DESIRA-1851-3.jpg",

  },
  {
    id: 40,
    name: "FRENE ASTOR 1837",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRENE-ASTOR-01837-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRENE-ASTOR-1837-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRENE-ASTOR-1837-7.jpg",

  },
  {
    id: 41,
    name: "FRASSINO CLAIR 1702",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRASSINO-CLAIR-01702-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRASSINO-CLAIR-1702-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/FRASSINO-CLAIR-1702-3.jpg",

  },
  {
    id: 42,
    name: "CHENE SMART 1836",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-SMART-01836-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-SMART-1836-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-SMART-1836-3.jpg",

  },
  {
    id: 43,
    name: "CHENE RUSTIQUE 1726",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-RUSTIQUE-01726-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-RUSTIQUE-1726-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-SMART-1836-3.jpg",

  },
  {
    id: 44,
    name: "CHENE MADURA 1839",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-MADURA-01839-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-MADURA-1839-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-MADURA-1839-3.jpg",

  },
  {
    id: 45,
    name: "CHENE FUME 1727",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-FUME-01727-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-FUME-1727-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHENE-FUME-1727-7.jpg",

  },
  {
    id: 46,
    name: "CHATAIGNIER 1795",
    type: "Panneau mélaminé",
    classification: "Shady",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHATAIGNIER-01795-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHATAIGNIER-1795-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/CHATAIGNIER-1795-3.jpg",
  },
  {
    id: 47,
    name: "GRIS 2264",
    type: "Panneau mélaminé",
    classification: "Uni",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/GRIS-02264-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/GRIS-2264-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/06/GRIS-2264-7.jpg",

    
  },
  {
    id: 48,
    name: "MARRON 2262",
    type: "Panneau mélaminé",
    classification: "Uni",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/MARRON-02262-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/MARRON-2262-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/06/MARRON-2262-3.jpg",

  },
  {
    id: 49,
    name: "IVOIRE 2339",
    type: "Panneau mélaminé",
    classification: "Uni",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/ivoire-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/ivoire-2339-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/ivoire-2339-7.jpg",

  },
  {
    id: 50,
    name: "GRIS METALISE",
    type: "Panneau mélaminé",
    classification: "Uni",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/04/2263-Gris-metalise--150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/04/Gris-metalise-2263-1-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/Gris-metalise-2263-1-3.jpg",

  },
  {
    id: 51,
    name: "NOIR",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/06/black-8421_Logo1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/06/noir-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/06/noir-7.jpg",

    
  },
  {
    id: 52,
    name: "BLANC",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/white-1982_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/blanc-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/blanc-7.jpg",

  },
  {
    id: 53,
    name: "GRIS CLAIR",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-85384_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-clair-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-clair-3.jpg",

  },
  {
    id: 54,
    name: "GRIS ",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-85383_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-3.jpg",

  },
  {
    id: 55,
    name: "SILVER ",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-8855-silver-met-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/silver-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/silver-3.jpg",

  },
  {
    id: 56,
    name: "GRIS CHARBON",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/dark-grey-85382_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-charbon-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/gris-charbon-7.jpg",

  },
  {
    id: 57,
    name: "CAPPUCINO",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7498_Logo-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/cappucino-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/cappucino-7.jpg",

  },
  {
    id: 58,
    name: "BEIGE",
    type: "Panneau acrylique",
    finition: "Acrygloss",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7496_Logo-2-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-6.jpg",

  },
  {
    id: 59,
    name: "BLEU MET",
    type: "Panneau acrylique",
    finition: "Acrygloss MET",
    image:"https://mpbs.com.tn/wp-content/uploads/2022/05/blue-4670-matt-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2022/05/cuisine_-3.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/04/bleu-met-7.jpg",

  },
  {
    id: 60,
    name: "BEIGE MET",
    type: "Panneau acrylique",
    finition: "Acrygloss MET",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-7408-beige-met-1-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-met-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/beige-met-3.jpg",

  },
  {
    id: 61,
    name: "CHANVRE",
    type: "Panneau acrylique",
    finition: "Acrygloss MET",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-85468_Logo-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/chanvre-4.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/chanvre-3.jpg",

  },
  {
    id: 62,
    name: "ACIER",
    type: "Panneau acrylique",
    finition: "Acrygloss MET",
    image:"https://mpbs.com.tn/wp-content/uploads/2021/03/grey-8636-grey-met-150x150.jpg",
    rendus:"https://mpbs.com.tn/wp-content/uploads/2021/03/acier-6.jpg",
    dressingRendu:"https://mpbs.com.tn/wp-content/uploads/2021/03/acier-8.jpg",

  },

  
    // Ajoutez plus de produits ici
  ];
  useEffect(() => {
    // Initialise les produits filtrés avec tous les produits au chargement
    setFilteredProducts(products);
  }, []);
  useEffect(() => {
    if (showFilters || showPanels) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showFilters, showPanels]);
  const handleRoomChange = (value) => {
    setRoomType(value);
    setSelectedProduct(null);
  };
  const getRoomTitle = () => {
    switch(roomType) {
      case 'dressing':
        return 'Simulateur de Dressing';
      default:
        return 'Simulateur de Cuisine';
    }
  };
  return (
    <div className="min-h-full">
      <div className="text-center py-4">
        <h1 className="text-4xl text-red-700 mb-4">{getRoomTitle()}</h1>
        
        {/* Navigation Tabs */}
        <Tabs value={roomType} onValueChange={handleRoomChange} className="w-full max-w-md mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="kitchen"    className={`px-8 py-2 shadow ${
        roomType === "kitchen" ? "bg-gray-200 font-bold shadow-lg" : "bg-white"
      }`}>
              Cuisine
            </TabsTrigger>
            <TabsTrigger value="dressing" className={`px-8 py-2 shadow ${
        roomType === "dressing" ? "bg-gray-200 font-bold shadow-lg" : "bg-white"
      }`}>
              Dressing
            </TabsTrigger>
          </TabsList>
          
        </Tabs>
      </div>
      
      <div className="flex p-4 flex-wrap relative">
        {/* Boutons de toggle pour mobile */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`${showPanels ? "hidden" : "lg:hidden fixed left-4 bottom-56 z-50 bg-red-700 text-white p-2 rounded-full shadow-lg"}`}
        >
          {showFilters ? <X size={24} /> : <Filter size={24} />}
        </button>
        <button
          onClick={() => setShowPanels(!showPanels)}
          className={`${showFilters ? "hidden" : "lg:hidden fixed right-4 bottom-56 z-50 bg-red-700 text-white p-2 rounded-full shadow-lg"}`}
        >
          {showPanels ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Panneau des filtres */}
        <div className={`
          w-full lg:w-2/12 
          fixed lg:relative 
          left-0 top-0 h-full 
          bg-white z-40 
          transform transition-transform duration-300 ease-in-out
          ${showFilters ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0
          overflow-y-auto lg:overflow-visible
          shadow-lg lg:shadow-none
        `}>
          <ProductFilter products={products} onFilterChange={setFilteredProducts} />
        </div>

        {/* Panneau de prévisualisation */}
        <div className="w-full lg:w-9/12 px-4 mb-4 lg:mb-0">
          <PreviewPanel selectedProduct={selectedProduct} roomType={roomType} />
        </div>

        {/* Panneau des produits */}
        <div className={`
           lg:w-1/12
          fixed lg:relative 
          right-0 top-0 h-screen
          bg-white z-40 
          transform transition-transform duration-300 ease-in-out
          ${showPanels ? 'translate-x-0' : 'translate-x-full'}
          lg:translate-x-0
          overflow-y-auto 
          shadow-lg lg:shadow-none
        `}>
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-red-700">Panneaux</h2>
          </div>
          
          <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 p-4">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                onClick={() => setSelectedProduct(product)} 
                className="p-4 border rounded bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <Image 
                  src={product.image} 
                  width={100} 
                  height={100} 
                  alt={product.name}
                  className=" h-auto"
                />
                <p className="font-semibold uppercase text-sm mt-2 text-left">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}