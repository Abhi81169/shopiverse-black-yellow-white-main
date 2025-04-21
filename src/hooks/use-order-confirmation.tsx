
import { useCart } from '@/hooks/use-cart';
import { useOrders } from '@/hooks/use-orders';
import { CartItem } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ✅ Place this at the top or bottom, but OUTSIDE of the hook
export function getNextOrderNumber(): string {
  const key = "orderNumber";
  const lastNumber = parseInt(localStorage.getItem(key) || "9999", 10); // Get the last number or use 9999 as fallback
  const newNumber = lastNumber + 1; // Increment the number
  localStorage.setItem(key, String(newNumber)); // Save the new number back to localStorage
  return `ORD-${newNumber}`; // Return the string in the format "ORD-10001"
}


export const useOrderConfirmation = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const { addOrder, cancelOrder, returnOrder } = useOrders();
  //const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  var orderNumber = 100000; // Start from this number

function getNextOrderNumber() {
  orderNumber += 1;
  return `ORD-${orderNumber}`;
}
  // State for dialogs
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [returnDialogOpen, setReturnDialogOpen] = useState(false);
  const [orderId] = useState<string | null>(null);
  
  useEffect(() => {
    // Create mock order when component loads
    const mockProduct: CartItem = {
      id: "Mock Product",
      name: "T-Shirt",
      description: "This is a mock product for demonstration",
      price: 150.99,
      category: "clothing",
      imageUrl: "/placeholder.svg",
      inStock: true,
      createdAt: new Date().toISOString(),
      quantity: 1
    };
    const timestamp = Date.now(); // milliseconds since epoch

    // Generate a unique ID for tracking this order

    // const newOrderId = `order-${Date.now()}-${Math.random().toString(36).substring(0, 9)}`;
    // setOrderId(newOrderId);
//     const shortId = Date.now().toString().slice(-6); // last 6 digits
// const orderId = `ORD-${shortId}`;

    // Add order to orders context (without passing id since it's generated within addOrder)


    // dummy order  but it shows many times
    // addOrder({
    //   product: mockProduct,
    //   total: 150.99,
    //   shippingAddress: {
    //     firstName: "John",
    //     lastName: "Doe",
    //     address: "123 Main St",
    //     city: "Anytown",
    //     zipCode: "12345",
    //     country: "USA",
    //     phone: "555-123-4567"
    //   },
    //   paymentMethod: "Credit Card",
    //   status: 'pending'
    // });


    
    // Clear cart after order is placed
    clearCart();
    
    // If user refreshes page, redirect to home since there's no actual order
    const handleBeforeUnload = () => {
      sessionStorage.setItem('redirectToHome', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    const shouldRedirect = sessionStorage.getItem('redirectToHome');
    if (shouldRedirect === 'true') {
      sessionStorage.removeItem('redirectToHome');
      navigate('/');
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate, addOrder, clearCart]);

  const handleCancelOrder = (reason: string) => {
    if (!orderId) return;
    
    cancelOrder(orderId, reason);
    setCancelDialogOpen(false);
    setTimeout(() => navigate('/orders'), 1500);
  };

  const handleReturnOrder = (reason: string) => {
    if (!orderId) return;
    
    returnOrder(orderId, reason);
    setReturnDialogOpen(false);
    setTimeout(() => navigate('/orders'), 1500);
  };

  return {
    orderNumber,
    cancelDialogOpen,
    setCancelDialogOpen,
    returnDialogOpen,
    setReturnDialogOpen,
    handleCancelOrder,
    handleReturnOrder
  };
};



// import { useCart } from '@/hooks/use-cart';
// import { useOrders } from '@/hooks/use-orders';
// import { CartItem } from '@/types';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const useOrderConfirmation = () => {
//   const navigate = useNavigate();
//   const { clearCart } = useCart();
//   const { addOrder, cancelOrder, returnOrder } = useOrders();

//   // 🔥 Generate unique order ID
//   const generatedOrderId = `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;

//   // 🔧 Set orderId in state so we can use it later for cancel/return
//   const [orderId, setOrderId] = useState<string | null>(null);

//   const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
//   const [returnDialogOpen, setReturnDialogOpen] = useState(false);

//   useEffect(() => {
//     const mockProduct: CartItem = {
//       id: "mock-product-1",
//       name: "T-Shirt",
//       description: "This is a mock product for demonstration",
//       price: 150.99,
//       category: "clothing",
//       imageUrl: "/placeholder.svg",
//       inStock: true,
//       createdAt: new Date().toISOString(),
//       quantity: 1
//     };

//     // 👉 Set the generated ID in state
//     setOrderId(generatedOrderId);

//     // ✅ Pass the ID into addOrder
//     addOrder({
//       id: generatedOrderId,
//       orderNumber: generatedOrderId, // optional if you use both
//       product: mockProduct,
//       total: 150.99,
//       shippingAddress: {
//         firstName: "John",
//         lastName: "Doe",
//         address: "123 Main St",
//         city: "Anytown",
//         zipCode: "12345",
//         country: "USA",
//         phone: "555-123-4567"
//       },
//       paymentMethod: "Credit Card",
//       status: 'pending'
//     });

//     clearCart();

//     const handleBeforeUnload = () => {
//       sessionStorage.setItem('redirectToHome', 'true');
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     const shouldRedirect = sessionStorage.getItem('redirectToHome');
//     if (shouldRedirect === 'true') {
//       sessionStorage.removeItem('redirectToHome');
//       navigate('/');
//     }

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, [navigate, addOrder, clearCart, generatedOrderId]);

//   const handleCancelOrder = (reason: string) => {
//     if (!orderId) return;
//     cancelOrder(orderId, reason);
//     setCancelDialogOpen(false);
//     setTimeout(() => navigate('/orders'), 1500);
//   };

//   const handleReturnOrder = (reason: string) => {
//     if (!orderId) return;
//     returnOrder(orderId, reason);
//     setReturnDialogOpen(false);
//     setTimeout(() => navigate('/orders'), 1500);
//   };

//   return {
//     orderNumber: generatedOrderId, // optional export
//     cancelDialogOpen,
//     setCancelDialogOpen,
//     returnDialogOpen,
//     setReturnDialogOpen,
//     handleCancelOrder,
//     handleReturnOrder
//   };
// };

// import { useCart } from '@/hooks/use-cart';
// import { useOrders } from '@/hooks/use-orders';
// import { CartItem } from '@/types';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const useOrderConfirmation = () => {
//   const navigate = useNavigate();
//   const { clearCart } = useCart();
//   const { addOrder, cancelOrder, returnOrder } = useOrders();

//   const [orderId] = useState<string | null>(null);
//   const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
//   const [returnDialogOpen, setReturnDialogOpen] = useState(false);

//    // 🔥 Generate unique order ID

//    //🔧 Set orderId in state so we can use it later for cancel/return
//  // const [orderId, setOrderId] = useState<string | null>(null);
//   useEffect(() => {
//     // ✅ Generate truly unique order ID
//     const generatedId = `ORD-${Date.now()}-${Math.random().toString(36).substr(0, 6)}`;
//     setorderId(generatedId);

//     const mockProduct: CartItem = {
//       id: "mock-product-1",
//       name: "T-Shirt",
//       description: "This is a mock product for demonstration",
//       price: 150.99,
//       category: "clothing",
//       imageUrl: "/placeholder.svg",
//       inStock: true,
//       createdAt: new Date().toISOString(),
//       quantity: 1
//     };

//     addOrder({
//       id: generatedId,
//       orderNumber: orderId, // You can rename it if needed
//       product: mockProduct,
//       total: 150.99,
//       shippingAddress: {
//         firstName: "John",
//         lastName: "Doe",
//         address: "123 Main St",
//         city: "Anytown",
//         zipCode: "12345",
//         country: "USA",
//         phone: "555-123-4567"
//       },
//       paymentMethod: "Credit Card",
//       status: 'pending'
//     });

//     clearCart();

//     const handleBeforeUnload = () => {
//       sessionStorage.setItem('redirectToHome', 'true');
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     const shouldRedirect = sessionStorage.getItem('redirectToHome');
//     if (shouldRedirect === 'true') {
//       sessionStorage.removeItem('redirectToHome');
//       navigate('/');
//     }

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, [navigate, addOrder, clearCart]);

//   const handleCancelOrder = (reason: string) => {
//     if (!orderId) return;
//     cancelOrder(orderId, reason);
//     setCancelDialogOpen(false);
//     setTimeout(() => navigate('/orders'), 1500);
//   };

//   const handleReturnOrder = (reason: string) => {
//     if (!orderId) return;
//     returnOrder(orderId, reason);
//     setReturnDialogOpen(false);
//     setTimeout(() => navigate('/orders'), 100);
//   };

//   return {
//     orderNumber: orderId, // now returning from state
//     cancelDialogOpen,
//     setCancelDialogOpen,
//     returnDialogOpen,
//     setReturnDialogOpen,
//     handleCancelOrder,
//     handleReturnOrder
//   };
// };
