
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useWishlist } from '@/hooks/use-wishlist';

const WishlistButton = () => {
  const { wishlistItems } = useWishlist();
  
  return (
    <Link to="/wishlist">
      <Button variant="ghost" size="icon" className="relative">
        <Heart className="h-5 w-5" />
        {wishlistItems.length > 0 && (
          <Badge className="absolute -top-1 -right-1 bg-red-500 text-white px-1.5 min-w-[1.25rem] h-5 flex items-center justify-center">
            {wishlistItems.length}
          </Badge>
        )}
      </Button>
    </Link>
  );
};

export default WishlistButton;
