
// import React, { useState } from 'react';
// import { Product } from '@/types';
// import { Button } from '@/components/ui/button';
// import { ShoppingCart, X } from 'lucide-react';
// import { useCart } from '@/hooks/use-cart';
// import { useToast } from '@/components/ui/use-toast';
// import PaymentGateway from '@/components/payment/PaymentGateway';

// interface ProductActionsProps {
//   product: Product;
//   quantity: number;
// }

// const ProductActions = ({ product, quantity }: ProductActionsProps) => {
//   const { addToCart } = useCart();
//   const { toast } = useToast();
//   const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  
//   const handleAddToCart = () => {
//     addToCart(product, quantity);
//     toast({
//       title: "Added to cart",
//       description: `${quantity} x ${product.name} added to your cart`,
//     });
//   };

//   const handleBuyNow = () => {
//     setShowPaymentGateway(true);
//   };

//   const handlePaymentComplete = () => {
//     setShowPaymentGateway(false);
//     // Navigate to checkout page
//     window.location.href = '/order-confirmation';
//   };

//   return (
//     <>
//       {/* Payment Gateway Modal */}
//       {showPaymentGateway && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="relative w-full max-w-md">
//             <Button 
//               variant="outline" 
//               size="icon" 
//               className="absolute -top-2 -right-2 h-6 w-6 bg-white rounded-full z-10"
//               onClick={() => setShowPaymentGateway(false)}
//             >
//               <X className="h-3 w-3" />
//             </Button>
            
//             <PaymentGateway 
//               amount={product.price * quantity} 
//               onPaymentComplete={handlePaymentComplete} 
//             />
//           </div>
//         </div>
//       )}

//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 z-40">
//         <div className="container mx-auto flex gap-2">
//           <Button 
//             className="flex-1 bg-brand-yellow text-black hover:bg-yellow-600 text-xs py-1 h-10"
//             onClick={handleAddToCart}
//           >
//             <ShoppingCart className="mr-1 h-4 w-4" /> Add to Cart
//           </Button>
//           <Button 
//             className="flex-1 bg-black hover:bg-gray-800 text-white text-xs py-1 h-10"
//             onClick={handleBuyNow}
//           >
//             Buy Now
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductActions;

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/hooks/use-cart';
import { useIsMobile } from '@/hooks/use-mobile';
import { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductActionsProps {
  product: Product;
  quantity: number;
}

const ProductActions = ({ product, quantity }: ProductActionsProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart`,
    });
  };

  const handleBuyNow = () => {
    // Add the product to cart
    addToCart(product, quantity);
    
    // Navigate to the multi-step checkout page
    navigate('/checkout');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 z-40 md:p-4">
      <div className="container mx-auto flex gap-2 max-w-xl">
        <Button 
          className="flex-1 bg-brand-yellow text-black hover:bg-yellow-600 text-xs py-1 h-10 md:text-sm md:h-12"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-1 h-4 w-4" /> 
          {isMobile ? 'Add' : 'Add to Cart'}
        </Button>
        <Button 
          className="flex-1 bg-black hover:bg-gray-800 text-white text-xs py-1 h-10 md:text-sm md:h-12"
          onClick={handleBuyNow}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductActions;