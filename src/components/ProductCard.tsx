
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useWishlist } from '@/hooks/use-wishlist';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { formatPrice } from '@/lib/formatters';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = '' }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };
  
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist`,
      });
    }
  };
  
  // Generate a random rating between 3 and 5 stars
  const rating = Math.floor(Math.random() * 2) + 3;
  
  return (
    <Link to={`/product/${product.id}`} className={`group block ${className}`}>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square h-48 md:h-56">
        {/* Purchase Tag Badge */}
        {product.inStock && (
          <Badge className="absolute top-2 right-2 bg-green-500 text-white uppercase text-xs px-1.5 py-0.5">
            in Stock
          </Badge>
        )}
        
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
        
        <div className="absolute bottom-2 left-2 right-2 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Button
            variant="default"
            size="sm"
            className="flex-1 bg-white text-black hover:bg-gray-200 h-8 text-xs"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="mr-1 h-3 w-3" />
            Add
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className={`bg-white ${
              isInWishlist(product.id) ? "text-red-500" : "text-black"
            } hover:bg-gray-200 border-none h-8 w-8`}
            onClick={handleToggleWishlist}
          >
            <Heart
              className={`h-3 w-3 ${
                isInWishlist(product.id) ? "fill-current" : ""
              }`}
            />
          </Button>
        </div>
      </div>
      
      <div className="mt-2">
        <div className="flex items-center">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < rating ? "fill-current" : ""}`}
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">
            {(Math.random() * 200 + 50).toFixed(0)}
          </span>
        </div>
        <h3 className="mt-1 text-sm font-medium line-clamp-1">{product.name}</h3>
        <p className="mt-1 text-sm font-medium">{formatPrice(product.price)}</p>
        {/* <p className="text-xs text-gray-500">{product.source || 'Shopiverse'}</p> */}
      </div>
    </Link>
  );
};

export default ProductCard;
