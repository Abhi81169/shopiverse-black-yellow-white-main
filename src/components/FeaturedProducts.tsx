
import { fetchFeaturedProducts } from '@/lib/api';
import { Product } from '@/types';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-center justify-center">Featured Products</h2>
        </div>

        <div className="overflow-y-hidden">
          {isLoading ? (
            <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="overflow-hidden h-auto w-auto hover:shadow-md transition-shadow "></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 object-cover h-auto w-auto gap-12">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} className="object cover overflow-hidden hover:shadow  h-45 w-full  " />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
