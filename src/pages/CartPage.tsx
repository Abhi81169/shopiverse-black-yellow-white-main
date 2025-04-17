
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity, clearCart, cartTotal } = useCart();
  const isMobile = useIsMobile();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold mb-6`}>Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingBag className="w-14 h-14 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-lg font-medium">Your cart is empty</h2>
            <p className="text-muted-foreground mt-2 mb-6 text-sm">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild className="bg-brand-yellow text-black hover:bg-yellow-600">
              <Link to="/index">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3">
              <div className="border rounded-md overflow-hidden overflow-x-auto">
                {isMobile ? (
                  // Mobile view - Cards instead of table
                  <div className="space-y-4 p-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="border rounded-md p-3 flex flex-col">
                        <div className="flex items-center mb-3">
                          <div className="w-16 h-16 rounded overflow-hidden bg-gray-100 mr-3">
                            <img 
                              src={item.imageUrl} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <Link 
                              to={`/product/${item.id}`}
                              className="font-medium text-sm hover:text-brand-yellow transition-colors"
                            >
                              {item.name}
                            </Link>
                            <p className="text-xs text-muted-foreground">
                              Category: {item.category}
                            </p>
                            <p className="font-medium text-sm mt-1">₹{item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex border rounded-md overflow-hidden w-24">
                            <button 
                              className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-sm"
                              onClick={() => updateCartItemQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                            >
                              -
                            </button>
                            <span className="px-2 py-1 border-x flex-1 text-center text-sm">
                              {item.quantity || 1}
                            </span>
                            <button 
                              className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-sm"
                              onClick={() => updateCartItemQuantity(item.id, (item.quantity || 1) + 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <div className="flex items-center">
                            <p className="font-medium text-sm mr-3">
                              ${((item.price * (item.quantity || 1))).toFixed(2)}
                            </p>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Desktop view - Table
                  <table className="w-full">
                    <thead className="bg-gray-50 text-left">
                      <tr>
                        <th className="py-4 px-6">Product</th>
                        <th className="py-4 px-6">Price</th>
                        <th className="py-4 px-6">Quantity</th>
                        <th className="py-4 px-6">Total</th>
                        <th className="py-4 px-6 sr-only">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id} className="border-t">
                          <td className="py-4 px-6">
                            <div className="flex items-center">
                              <div className="w-16 h-16 rounded overflow-hidden bg-gray-100 mr-4">
                                <img 
                                  src={item.imageUrl} 
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <Link 
                                  to={`/product/${item.id}`}
                                  className="font-medium hover:text-brand-yellow transition-colors"
                                >
                                  {item.name}
                                </Link>
                                <p className="text-sm text-muted-foreground">
                                  Category: {item.category}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">${item.price.toFixed(2)}</td>
                          <td className="py-4 px-6">
                            <div className="flex border rounded-md overflow-hidden w-24">
                              <button 
                                className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                                onClick={() => updateCartItemQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                              >
                                -
                              </button>
                              <span className="px-2 py-1 border-x flex-1 text-center">
                                {item.quantity || 1}
                              </span>
                              <button 
                                className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                                onClick={() => updateCartItemQuantity(item.id, (item.quantity || 1) + 1)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4 px-6 font-medium">
                            ${((item.price * (item.quantity || 1))).toFixed(2)}
                          </td>
                          <td className="py-4 px-6">
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
              
              <div className="flex justify-between mt-4">
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  size={isMobile ? "sm" : "default"}
                >
                  Clear Cart
                </Button>
                <Button 
                  asChild
                  size={isMobile ? "sm" : "default"}
                >
                  <Link to="/index">Continue Shopping</Link>
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="border rounded-md p-4 lg:p-6 bg-gray-50">
                <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold mb-4`}>Order Summary</h2>
                
                <div className="space-y-2 mb-4 text-sm lg:text-base">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-xs lg:text-sm">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="text-xs lg:text-sm">Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between font-bold text-base lg:text-lg">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-brand-yellow text-black hover:bg-yellow-600"
                  asChild
                  size={isMobile ? "sm" : "default"}
                >
                  <Link to="/checkout">
                    Proceed to Checkout <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
