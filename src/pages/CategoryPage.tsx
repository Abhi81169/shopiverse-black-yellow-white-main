
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import { fetchProductsByCategory } from '@/lib/api';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { formatPrice } from '@/lib/formatters';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('recommended');

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        if (category) {
          const data = await fetchProductsByCategory(category);
          setProducts(data);
        }
      } catch (error) {
        console.error(`Failed to fetch ${category} products:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [category]);

  const getCategoryTitle = () => {
    if (!category) return 'Products';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const sortProducts = () => {
    const sortedProducts = [...products];
    
    switch (sortBy) {
      case 'price-low-high':
        return sortedProducts.sort((a, b) => a.price - b.price);
      case 'price-high-low':
        return sortedProducts.sort((a, b) => b.price - a.price);
      case 'newest':
        return sortedProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      default:
        return sortedProducts;
    }
  };

  const sortedProducts = sortProducts();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">{getCategoryTitle()}</h1>
          
          <div className="w-full md:w-48">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="rounded-md bg-gray-200 animate-pulse h-80"></div>
            ))}
          </div>
        ) : (
          <>
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium">No products found</h2>
                <p className="text-muted-foreground mt-2">Try a different category or check back later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
