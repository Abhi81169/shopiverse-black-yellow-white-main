
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/use-wishlist';
import { formatPrice } from '@/lib/formatters';
import { motion } from 'framer-motion';
import { Star, Truck, Flame } from 'lucide-react';
import WishlistButton from '@/components/header/WishlistButton';
import WishlistPage from './WishlistPage';

// now it's updated

const Index = () => {
  const { wishlistItems } = useWishlist();
  
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <WhyChooseUs/>
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


const features = [
  {
    title: 'Premium Quality',
    icon: <Star className="text-yellow-500 w-8 h-8" />,
    description: 'We provide only the best quality products for our customers.',
  },
  {
    title: 'Fast Delivery',
    icon: <Truck className="text-green-500 w-8 h-8" />,
    description: 'Quick and reliable delivery to your doorstep.',
  },
  {
    title: 'Trending Product',
    icon: <Flame className="text-red-500 w-8 h-8" />,
    description: 'Stay ahead with the latest fashion and trends.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg p-6 text-center border transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Index;
