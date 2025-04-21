
// // src/pages/FeaturedProducts.tsx
// import { motion } from "framer-motion";
// import React from "react";

// interface Product {
//   name: string;
//   category: string;
//   imageUrl: string;
//   price: string;
// }

// const featuredProducts: Product[] = [
//   { name: "Men's Denim Jacket", category: "Men", imageUrl: "https://via.placeholder.com/300x400?text=Men+Jacket", price: "$49.99" },
//   { name: "Women's Blazer", category: "Women", imageUrl: "https://via.placeholder.com/300x400?text=Women+Blazer", price: "$59.99" },
//   { name: "Boy's Graphic Tee", category: "Boys", imageUrl: "https://via.placeholder.com/300x400?text=Boys+Tee", price: "$19.99" },
//   { name: "Girl's Floral Dress", category: "Girls", imageUrl: "https://via.placeholder.com/300x400?text=Girls+Dress", price: "$29.99" },
//   { name: "Men's Sneakers", category: "Men", imageUrl: "https://via.placeholder.com/300x400?text=Men+Sneakers", price: "$69.99" },
//   { name: "Women's Handbag", category: "Women", imageUrl: "https://via.placeholder.com/300x400?text=Handbag", price: "$39.99" },
//   { name: "Boy's Shorts", category: "Boys", imageUrl: "https://via.placeholder.com/300x400?text=Boys+Shorts", price: "$14.99" },
//   { name: "Girl's Hoodie", category: "Girls", imageUrl: "https://via.placeholder.com/300x400?text=Girls+Hoodie", price: "$24.99" },
//   { name: "Men's Hoodie", category: "Men", imageUrl: "https://via.placeholder.com/300x400?text=Hoodie", price: "$39.99" },
//   { name: "Women's Boots", category: "Women", imageUrl: "https://via.placeholder.com/300x400?text=Boots", price: "$79.99" },
//   { name: "Boy's Sneakers", category: "Boys", imageUrl: "https://via.placeholder.com/300x400?text=Boy+Sneakers", price: "$29.99" },
//   { name: "Girl's Leggings", category: "Girls", imageUrl: "https://via.placeholder.com/300x400?text=Girls+Leggings", price: "$19.99" },
//   { name: "Men's Polo", category: "Men", imageUrl: "https://via.placeholder.com/300x400?text=Men+Polo", price: "$24.99" },
//   { name: "Women's Jeans", category: "Women", imageUrl: "https://via.placeholder.com/300x400?text=Women+Jeans", price: "$44.99" },
//   { name: "Unisex Cap", category: "Accessories", imageUrl: "https://via.placeholder.com/300x400?text=Cap", price: "$9.99" },
// ];

// const FeaturedProducts = () => {
//   return (
//     <div className="px-6 py-10 bg-white text-gray-900">
//       <h1 className="text-4xl font-bold text-center mb-10">🌟 Featured Products</h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//         {featuredProducts.map((product, index) => (
//           <motion.div
//             key={index}
//             className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.05 }}
//           >
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-sm text-gray-500">{product.category}</p>
//               <p className="text-red-600 font-bold mt-2">{product.price}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;


import { fetchFeaturedProducts } from '@/lib/api';
import { Product } from '@/types';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { motion } from "framer-motion";


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
    <section className="py-8 bg-gray-50">
      <div className="container mx-relative px-8">
        <div className="px-6 py-10 bg-white text-gray-900">
          <h2 className="text-4xl font-bold text-center mb-10">Featured Products</h2>
        </div>
        
        <div className="overflow-y-hidden">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="overflow-hidden h-full hover:shadow-md transition-shadow bg-gray-700 "></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} className="overflow-hidden hover:shadow  h-full w-full  " />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
