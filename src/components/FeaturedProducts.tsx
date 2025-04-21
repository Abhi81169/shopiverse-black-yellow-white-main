
// import { fetchFeaturedProducts } from '@/lib/api';
// import { Product } from '@/types';
// import { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';

// // Define our product sources
// // const PRODUCT_SOURCES = {
// //   SHOPIVERSE: 'Shopiverse',
// //   FLIPKART: 'Flipkart',
// //   MEESHO: 'Meesho'
// // };

// const FeaturedProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeSource, setActiveSource] = useState<string>('all');

//   useEffect(() => {
//     const loadProducts = async () => {
//       setIsLoading(true);
//       try {
//         let data = await fetchFeaturedProducts();
        
//         // Add source information to products
//         // data = data.map(product => ({
//         //   ...product,
//         //   source: product.id.includes('3') 
//         //     ? PRODUCT_SOURCES.FLIPKART 
//         //     : product.id.includes('1') 
//         //       ? PRODUCT_SOURCES.MEESHO 
//         //       : PRODUCT_SOURCES.SHOPIVERSE
//         // }));
        
//         setProducts(data);
//       } catch (error) {
//         console.error('Failed to fetch featured products:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     loadProducts();
//   }, []);

//   const filteredProducts = activeSource === 'all' 
//     ? products 
//     : products.filter(product => product.source === activeSource);

//   return (
//     <section className="py-8 bg-gray-50">
//       <div className="container  px-4">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold">Featured Products</h2>
//           <div className="flex space-x-2 text-xs">
//             {/* <button 
//               onClick={() => setActiveSource('all')}
//               className={`px-2 py-1 rounded ${activeSource === 'all' ? 'bg-brand-yellow text-black' : 'bg-gray-200'}`}
//             >
//               All
//             </button>
//             <button 
//               onClick={() => setActiveSource(PRODUCT_SOURCES.SHOPIVERSE)}
//               className={`px-2 py-1 rounded ${activeSource === PRODUCT_SOURCES.SHOPIVERSE ? 'bg-brand-yellow text-black' : 'bg-gray-200'}`}
//             >
//               Shopiverse
//             </button>
//             <button 
//               onClick={() => setActiveSource(PRODUCT_SOURCES.FLIPKART)}
//               className={`px-2 py-1 rounded ${activeSource === PRODUCT_SOURCES.FLIPKART ? 'bg-brand-yellow text-black' : 'bg-gray-200'}`}
//             >
//               Flipkart
//             </button>
//             <button 
//               onClick={() => setActiveSource(PRODUCT_SOURCES.MEESHO)}
//               className={`px-2 py-1 rounded ${activeSource === PRODUCT_SOURCES.MEESHO ? 'bg-brand-yellow text-black' : 'bg-gray-200'}`}
//             >
//               Meesho
//             </button> */}
//           </div>
//         </div>
        
//         {isLoading ? (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//             {Array.from({ length: 10 }).map((_, index) => (
//               <div key={index} className="rounded-md bg-gray-200 animate-pulse h-48"></div>
//             ))}
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} className="h-full" />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;


import { fetchFeaturedProducts } from '@/lib/api';
import { Product } from '@/types';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';


const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSource, setActiveSource] = useState<string>('all');

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        let data = await fetchFeaturedProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch featured products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = activeSource === 'all'
    ? products
    : products.filter(product => product.source === activeSource);

  return (
    <section className="py-9 bg-gray-50" >
      <div className="container mx-relative px-8">
        <div className="flex space around items-center mb-6">
          <h2 className="text-xl font-bold">Featured Products</h2>
          {/* <Link to="/feature">
                <Button variant="link" className="text-brand-yellow">
                  View All <FeaturedProducts className="ml-2 h-4 w-4" />
                </Button>
              </Link> */}
        </div>

        <div className="rounded-lg shadow-md  overflow-hidden-auto">
          {isLoading ? (
            <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="aspect-square overflow-hidden h-auto hover:shadow-md transition-shadow bg-gray-600 "></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 object-cover h-auto gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} className="object cover overflow-hidden hover:shadow  h-full w-full  " />
              ))}
            </div>
          )}
        </div>
    
 
      </div>
    </section>
  );
};

export default FeaturedProducts;
