// src/pages/NewArrivals.tsx
import ProductList from "../components/ProductList";

const newArrivalProducts = [
  { name: "Stylish Jacket", imageUrl: "https://via.placeholder.com/300x400?text=Jacket", price: "₹499.99" },
  { name: "Classic Sneakers", imageUrl: "https://via.placeholder.com/300x400?text=Sneakers", price: "₹599.99" },
  { name: "Denim Jeans", imageUrl: "https://via.placeholder.com/300x400?text=Jeans", price: "₹399.99" },
  { name: "Tote Bag", imageUrl: "https://via.placeholder.com/300x400?text=Bag", price: "₹299.99" },
];

const NewArrivals = () => {
  return <ProductList title="New Arrivals" products={newArrivalProducts} />;
};

export default NewArrivals;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Product } from '@/types';
// import { formatPrice } from '@/lib/formatters';
// import { Star } from 'lucide-react';

// interface NewArrivalsProps {
//   products: Product[];
// }

// const NewArrivals: React.FC<NewArrivalsProps> = ({ products }) => {
//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-3xl font-bold text-center mb-10">🆕 New Arrivals</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
//           >
//             <Link to={`/product/${product.id}`}>
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="w-full h-64 object-cover rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold line-clamp-1">{product.name}</h2>
//                 <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <span className="text-brand-yellow font-semibold">{formatPrice(product.price)}</span>
//                   <span className="text-xs text-green-600">
//                     {product.inStock ? 'In Stock' : 'Out of Stock'}
//                   </span>
//                 </div>

//                 {/* Star Rating (Random) */}
//                 <div className="flex items-center text-yellow-400 mt-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className={`h-4 w-4 ${i < Math.floor(Math.random() * 3 + 3) ? 'fill-current' : ''}`} />
//                   ))}
//                 </div>

//                 <Link
//                   to={`/product/${product.id}`}
//                   className="mt-4 inline-block text-sm text-brand-yellow hover:underline"
//                 >
//                   View Details →
//                 </Link>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewArrivals;