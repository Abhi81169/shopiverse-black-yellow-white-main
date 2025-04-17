
import Layout from '@/components/Layout';
import { fetchProductById, fetchProductsByCategory } from '@/lib/api';
import { Product } from '@/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Import our new component files
import LoadingState from '@/components/product-detail/LoadingState';
import NotFoundState from '@/components/product-detail/NotFoundState';
import ProductActions from '@/components/product-detail/ProductActions';
import ProductImageSection from '@/components/product-detail/ProductImageSection';
import ProductInfo from '@/components/product-detail/ProductInfo';
import SimilarProducts from '@/components/product-detail/SimilarProducts';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const data = await fetchProductById(id);
          setProduct(data);
          
          // Fetch similar products from the same category
          if (data) {
            const categoryProducts = await fetchProductsByCategory(data.category);
            // Filter out the current product and limit to 4 products
            const filtered = categoryProducts
              .filter(p => p.id !== data.id)
              .slice(0, 4);
            setSimilarProducts(filtered);
          }
        }
      } catch (error) {
        console.error(`Failed to fetch product with id ${id}:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <LoadingState />
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <NotFoundState />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <ProductImageSection imageUrl={product.imageUrl} productName={product.name} />
          <ProductInfo 
            product={product} 
            quantity={quantity} 
            setQuantity={setQuantity} 
          />
        </div>
        
        <SimilarProducts products={similarProducts} />
        
        <ProductActions product={product} quantity={quantity} />
        
        {/* Add padding at the bottom to prevent content from being hidden behind the fixed footer */}
        <div className="h-60" ></div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
