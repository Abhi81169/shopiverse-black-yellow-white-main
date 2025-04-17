
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/hooks/use-wishlist';
import { useCart } from '@/hooks/use-cart';
import ProductCard from '@/components/ProductCard';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const WishlistPage = () => {
  const { wishlistItems, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const addAllToCart = () => {
    wishlistItems.forEach(item => {
      addToCart(item);
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
        
        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Start adding items to your wishlist as you shop</p>
            <Link to="/">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-between items-center mb-6">
              <p className="text-gray-600">{wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''}</p>
              <div className="flex gap-4">
                <Button 
                  onClick={addAllToCart} 
                  variant="outline"
                  className="flex items-center"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add All to Cart
                </Button>
                <Button 
                  onClick={clearWishlist} 
                  variant="outline"
                  className="flex items-center text-red-500 border-red-300 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Wishlist
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <ProductCard 
                  key={item.id} 
                  product={item} 
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default WishlistPage;
