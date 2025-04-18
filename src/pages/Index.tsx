
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/use-wishlist';
import { formatPrice } from '@/lib/formatters';

// now it's updated

const Index = () => {
  const { wishlistItems } = useWishlist();
  
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      
      {wishlistItems.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Your Wishlist</h2>
              <Link to="/wishlist">
                <Button variant="link" className="text-brand-yellow">
                  View All <Heart className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="text-gray-600 mb-8">
              You have {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} in your wishlist
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
              {wishlistItems.slice(0, 6).map(item => (
                <Link key={item.id} to={`/product/${item.id}`} className="block">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-square overflow-hidden h-auto">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-xs line-clamp-3">{item.name}</h3>
                      <p className="text-brand-yellow font-bold mt-1 text-sm">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Index;
