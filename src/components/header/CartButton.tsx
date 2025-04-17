
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';

const CartButton = () => {
  const { cartItems } = useCart();
  
  return (
    <Link to="/cart">
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {cartItems.length > 0 && (
          <Badge className="absolute -top-1 -right-1 bg-brand-yellow text-black px-1.5 min-w-[1.25rem] h-5 flex items-center justify-center">
            {cartItems.length}
          </Badge>
        )}
      </Button>
    </Link>
  );
};

export default CartButton;
