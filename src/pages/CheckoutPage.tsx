// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Layout from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { useCart } from '@/hooks/use-cart';
// import { useAddress, Address } from '@/hooks/use-address';
// import { useOrders } from '@/hooks/use-orders';
// import { useToast } from '@/components/ui/use-toast';
// import { 
//   Select, 
//   SelectContent, 
//   SelectItem, 
//   SelectTrigger, 
//   SelectValue 
// } from '@/components/ui/select';
// import { creditCardLogo, paypalLogo, googlePayLogo, phonePayLogo, paytmLogo } from '@/lib/constants';
// import { CreditCard, Wallet, WalletCards, Plus, MapPin } from 'lucide-react';

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const { cartItems, cartTotal, clearCart } = useCart();
//   const { savedAddresses, saveAddress, defaultAddress, setDefaultAddress } = useAddress();
//   const { addOrder } = useOrders();
//   const { toast } = useToast();
  
//   const [paymentMethod, setPaymentMethod] = useState('credit-card');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [checkoutStep, setCheckoutStep] = useState<'address' | 'payment'>('address');
//   const [selectedAddress, setSelectedAddress] = useState<Address | null>(defaultAddress);
//   const [showNewAddressForm, setShowNewAddressForm] = useState(savedAddresses.length === 0);
  
//   const [addressForm, setAddressForm] = useState<Address>({
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: '',
//     zipCode: '',
//     country: '',
//     phone: '',
//   });
  
//   useEffect(() => {
//     if (defaultAddress && !selectedAddress) {
//       setSelectedAddress(defaultAddress);
//     }
//   }, [defaultAddress, selectedAddress]);
  
//   useEffect(() => {
//     if (cartItems.length === 0) {
//       navigate('/cart');
//     }
//   }, [cartItems, navigate]);
  
//   const handleAddressSelect = (addressIndex: string) => {
//     if (addressIndex === 'new') {
//       setShowNewAddressForm(true);
//       setSelectedAddress(null);
//     } else {
//       const index = parseInt(addressIndex);
//       setSelectedAddress(savedAddresses[index]);
//       setShowNewAddressForm(false);
//     }
//   };
  
//   const handleAddressFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setAddressForm(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handleSaveAddress = () => {
//     if (!addressForm.firstName || !addressForm.lastName || !addressForm.address || 
//         !addressForm.city || !addressForm.zipCode || !addressForm.country || !addressForm.phone) {
//       toast({
//         title: "Error",
//         description: "Please fill in all address fields",
//         variant: "destructive"
//       });
//       return;
//     }
    
//     saveAddress(addressForm);
//     setSelectedAddress(addressForm);
//     setShowNewAddressForm(false);
    
//     toast({
//       title: "Address saved",
//       description: "Your shipping address has been saved",
//     });
    
//     setCheckoutStep('payment');
//   };
  
//   const handleProceedToPayment = () => {
//     if (!selectedAddress) {
//       toast({
//         title: "Error",
//         description: "Please select or add a shipping address",
//         variant: "destructive"
//       });
//       return;
//     }
    
//     setCheckoutStep('payment');
//   };
  
//   const handleSubmitOrder = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!selectedAddress) {
//       toast({
//         title: "Error",
//         description: "Please select or add a shipping address",
//         variant: "destructive"
//       });
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // If there are items in cart, take the first one as the product for this order
//     if (cartItems.length > 0) {
//       setTimeout(() => {
//         addOrder({
//           product: cartItems[0], // Use the first cart item as the product
//           total: cartTotal + (cartTotal * 0.1),
//           shippingAddress: selectedAddress,
//           paymentMethod,
//           status: 'pending',
//         });
        
//         clearCart();
        
//         toast({
//           title: "Order placed successfully!",
//           description: "Your order has been confirmed. Thank you for shopping with us.",
//         });
        
//         navigate('/order-confirmation');
//         setIsSubmitting(false);
//       }, 1500);
//     } else {
//       toast({
//         title: "Cart is empty",
//         description: "Please add items to your cart before checking out",
//         variant: "destructive"
//       });
//       setIsSubmitting(false);
//     }
//   };
  
//   if (cartItems.length === 0) {
//     return null;
//   }
  
//   return (
//     <Layout>
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="w-full lg:w-2/3">
//             {checkoutStep === 'address' ? (
//               <div className="border rounded-md p-6 mb-6">
//                 <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                
//                 {savedAddresses.length > 0 && (
//                   <div className="mb-6">
//                     <Label htmlFor="addressSelect">Select a saved address</Label>
//                     <Select 
//                       onValueChange={handleAddressSelect}
//                       value={showNewAddressForm ? 'new' : savedAddresses.findIndex(a => a === selectedAddress).toString()}
//                     >
//                       <SelectTrigger className="w-full">
//                         <SelectValue placeholder="Choose an address" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {savedAddresses.map((address, index) => (
//                           <SelectItem key={index} value={index.toString()}>
//                             <div className="flex items-center">
//                               <MapPin className="mr-2 h-4 w-4" />
//                               <span>
//                                 {address.firstName} {address.lastName}, {address.address}, {address.city}
//                               </span>
//                             </div>
//                           </SelectItem>
//                         ))}
//                         <SelectItem value="new">
//                           <div className="flex items-center text-primary">
//                             <Plus className="mr-2 h-4 w-4" />
//                             <span>Add a new address</span>
//                           </div>
//                         </SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 )}
                
//                 {(showNewAddressForm || savedAddresses.length === 0) && (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="firstName">First Name</Label>
//                       <Input 
//                         id="firstName" 
//                         name="firstName"
//                         value={addressForm.firstName}
//                         onChange={handleAddressFormChange}
//                         required 
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="lastName">Last Name</Label>
//                       <Input 
//                         id="lastName" 
//                         name="lastName"
//                         value={addressForm.lastName}
//                         onChange={handleAddressFormChange}
//                         required 
//                       />
//                     </div>
//                     <div className="md:col-span-2">
//                       <Label htmlFor="address">Address</Label>
//                       <Input 
//                         id="address" 
//                         name="address"
//                         value={addressForm.address}
//                         onChange={handleAddressFormChange}
//                         required 
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="city">City</Label>
//                       <Input 
//                         id="city" 
//                         name="city"
//                         value={addressForm.city}
//                         onChange={handleAddressFormChange}
//                         required 
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="zipCode">ZIP Code</Label>
//                       <Input 
//                         id="zipCode" 
//                         name="zipCode"
//                         value={addressForm.zipCode}
//                         onChange={handleAddressFormChange}
//                         required 
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="country">Country</Label>
//                       <Input 
//                         id="country" 
//                         name="country"
//                         value={addressForm.country}
//                         onChange={handleAddressFormChange}
//                         required 
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="phone">Phone</Label>
//                       <Input 
//                         id="phone" 
//                         name="phone"
//                         type="tel"
//                         value={addressForm.phone}
//                         onChange={handleAddressFormChange}
//                         required 
//                       />
//                     </div>
                    
//                     <div className="md:col-span-2 mt-2">
//                       <Button 
//                         onClick={handleSaveAddress}
//                         className="bg-brand-yellow text-black hover:bg-yellow-600"
//                       >
//                         Save & Continue
//                       </Button>
//                     </div>
//                   </div>
//                 )}
                
//                 {!showNewAddressForm && selectedAddress && (
//                   <div className="mt-4">
//                     <div className="border p-4 rounded-md bg-gray-50">
//                       <div className="font-medium">
//                         {selectedAddress.firstName} {selectedAddress.lastName}
//                       </div>
//                       <div>{selectedAddress.address}</div>
//                       <div>{selectedAddress.city}, {selectedAddress.zipCode}</div>
//                       <div>{selectedAddress.country}</div>
//                       <div>{selectedAddress.phone}</div>
//                     </div>
                    
//                     <div className="mt-4 flex gap-2">
//                       <Button 
//                         onClick={handleProceedToPayment}
//                         className="bg-brand-yellow text-black hover:bg-yellow-600"
//                       >
//                         Continue to Payment
//                       </Button>
                      
//                       <Button 
//                         variant="outline"
//                         onClick={() => setShowNewAddressForm(true)}
//                       >
//                         Use a Different Address
//                       </Button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <form onSubmit={handleSubmitOrder}>
//                 <div className="border rounded-md p-6">
//                   <h2 className="text-xl font-bold mb-4">Payment Method</h2>
//                   <RadioGroup 
//                     value={paymentMethod} 
//                     onValueChange={setPaymentMethod}
//                     className="space-y-4"
//                   >
//                     <div className="flex items-center space-x-2 border rounded-md p-3">
//                       <RadioGroupItem value="credit-card" id="credit-card" />
//                       <Label htmlFor="credit-card" className="flex-1 cursor-pointer flex items-center">
//                         Credit Card
//                         <span className="ml-auto">
//                           <CreditCard className="h-5 w-5" />
//                         </span>
//                       </Label>
//                     </div>
                    
//                     <div className="flex items-center space-x-2 border rounded-md p-3">
//                       <RadioGroupItem value="paypal" id="paypal" />
//                       <Label htmlFor="paypal" className="flex-1 cursor-pointer flex items-center">
//                         PayPal
//                         <span className="ml-auto">
//                           <img src={paypalLogo} alt="PayPal" className="h-8" />
//                         </span>
//                       </Label>
//                     </div>

//                     <div className="flex items-center space-x-2 border rounded-md p-3">
//                       <RadioGroupItem value="google-pay" id="google-pay" />
//                       <Label htmlFor="google-pay" className="flex-1 cursor-pointer flex items-center">
//                         Google Pay
//                         <span className="ml-auto">
//                           <img src={googlePayLogo} alt="Google Pay" className="h-8" />
//                         </span>
//                       </Label>
//                     </div>

//                     <div className="flex items-center space-x-2 border rounded-md p-3">
//                       <RadioGroupItem value="phone-pay" id="phone-pay" />
//                       <Label htmlFor="phone-pay" className="flex-1 cursor-pointer flex items-center">
//                         PhonePe
//                         <span className="ml-auto">
//                           <img src={phonePayLogo} alt="PhonePe" className="h-8" />
//                         </span>
//                       </Label>
//                     </div>

//                     <div className="flex items-center space-x-2 border rounded-md p-3">
//                       <RadioGroupItem value="paytm" id="paytm" />
//                       <Label htmlFor="paytm" className="flex-1 cursor-pointer flex items-center">
//                         Paytm
//                         <span className="ml-auto">
//                           <img src={paytmLogo} alt="Paytm" className="h-8" />
//                         </span>
//                       </Label>
//                     </div>
//                   </RadioGroup>
                  
//                   {paymentMethod === 'credit-card' && (
//                     <div className="mt-4 space-y-4">
//                       <div>
//                         <Label htmlFor="cardNumber">Card Number</Label>
//                         <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <Label htmlFor="expiryDate">Expiry Date</Label>
//                           <Input id="expiryDate" placeholder="MM/YY" required />
//                         </div>
//                         <div>
//                           <Label htmlFor="cvc">CVC</Label>
//                           <Input id="cvc" placeholder="123" required />
//                         </div>
//                       </div>
//                       <div>
//                         <Label htmlFor="nameOnCard">Name on Card</Label>
//                         <Input id="nameOnCard" required />
//                       </div>
//                     </div>
//                   )}

//                   {(paymentMethod === 'google-pay' || paymentMethod === 'phone-pay' || paymentMethod === 'paytm') && (
//                     <div className="mt-4 space-y-4">
//                       <div>
//                         <Label htmlFor="mobileNumber">Mobile Number</Label>
//                         <Input id="mobileNumber" placeholder="10-digit mobile number" required />
//                       </div>
//                       <div>
//                         <Label htmlFor="upiId">UPI ID (Optional)</Label>
//                         <Input id="upiId" placeholder="yourname@upi" />
//                       </div>
//                     </div>
//                   )}
                  
//                   <div className="mt-6">
//                     <Button 
//                       type="button"
//                       variant="outline"
//                       onClick={() => setCheckoutStep('address')}
//                       className="mr-2"
//                     >
//                       Back to Address
//                     </Button>
                    
//                     <Button 
//                       type="submit"
//                       className="bg-brand-yellow text-black hover:bg-yellow-600"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? 'Processing...' : 'Complete Order'}
//                     </Button>
//                   </div>
//                 </div>
//               </form>
//             )}
//           </div>
          
//           <div className="w-full lg:w-1/3">
//             <div className="border rounded-md p-6 bg-gray-50 sticky top-24">
//               <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
//               <div className="space-y-4 mb-4">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex gap-3">
//                     <div className="w-16 h-16 rounded overflow-hidden bg-gray-100">
//                       <img 
//                         src={item.imageUrl} 
//                         alt={item.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <p className="font-medium">{item.name}</p>
//                       <p className="text-sm text-muted-foreground">Qty: {item.quantity || 1}</p>
//                       <p className="font-medium">${((item.price * (item.quantity || 1))).toFixed(2)}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="border-t pt-4 space-y-2">
//                 <div className="flex justify-between">
//                   <span>Subtotal</span>
//                   <span>${cartTotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Shipping</span>
//                   <span>$0.00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Tax</span>
//                   <span>${(cartTotal * 0.1).toFixed(2)}</span>
//                 </div>
//               </div>
              
//               <div className="border-t mt-4 pt-4">
//                 <div className="flex justify-between font-bold text-lg">
//                   <span>Total</span>
//                   <span>${(cartTotal + (cartTotal * 0.1)).toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CheckoutPage;



import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Address, useAddress } from '@/hooks/use-address';
import { useCart } from '@/hooks/use-cart';
import { useOrders } from '@/hooks/use-orders';
import { ChevronsLeft, ChevronsRight, CreditCardIcon, Landmark, MapPin, Plus, Wallet, WalletCards } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const { savedAddresses, saveAddress, defaultAddress, setDefaultAddress } = useAddress();
  const { addOrder } = useOrders();
  const { toast } = useToast();
  
  // State for multi-step checkout
  const [checkoutStep, setCheckoutStep] = useState<'address' | 'summary' | 'payment'>('address');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [selectedBank, setSelectedBank] = useState('');
  
  // Address states
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(defaultAddress);
  const [showNewAddressForm, setShowNewAddressForm] = useState(savedAddresses.length === 0);
  
  const [addressForm, setAddressForm] = useState<Address>({
       firstName: '',
       lastName: '',
       address: '',
       city: '',
       zipCode: '',
       country: '',
       phone: '',
  });
  
  useEffect(() => {
    if (defaultAddress && !selectedAddress) {
      setSelectedAddress(defaultAddress);
    }
  }, [defaultAddress, selectedAddress]);
  
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);
  
  const handleAddressSelect = (addressIndex: string) => {
    if (addressIndex === 'new') {
      setShowNewAddressForm(true);
      setSelectedAddress(null);
    } else {
      const index = parseInt(addressIndex);
      setSelectedAddress(savedAddresses[index]);
      setShowNewAddressForm(false);
    }
  };
  
  const handleAddressFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSaveAddress = () => {
    if (!addressForm.firstName || !addressForm.lastName || !addressForm.address || 
        !addressForm.city || !addressForm.zipCode || !addressForm.country || !addressForm.phone) {
      toast({
        title: "Error",
        description: "Please fill in all address fields",
        variant: "destructive"
      });
      return;
    }
    
    saveAddress(addressForm);
    setSelectedAddress(addressForm);
    setShowNewAddressForm(false);
    
    toast({
      title: "Address saved",
      description: "Your shipping address has been saved",
    });
    
    // Move to the next step after saving address
    setCheckoutStep('summary');
  };
  
  const handleProceedToSummary = () => {
    if (!selectedAddress) {
      toast({
        title: "Error",
        description: "Please select or add a shipping address",
        variant: "destructive"
      });
      return;
    }
    
    setCheckoutStep('summary');
  };
  
  const handleProceedToPayment = () => {
    setCheckoutStep('payment');
  };
  
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedAddress) {
      toast({
        title: "Error",
        description: "Please select or add a shipping address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // If there are items in cart, take the first one as the product for this order
    if (cartItems.length > 0) {
      setTimeout(() => {
        addOrder({
          product: cartItems[0], // Use the first cart item as the product
          total: cartTotal + (cartTotal * 0.1),
          shippingAddress: selectedAddress,
          paymentMethod,
          status: 'pending',
        });
        
        clearCart();
        
        toast({
          title: "Order placed successfully!",
          description: "Your order has been confirmed. Thank you for shopping with us.",
        });
        
        navigate('/order-confirmation');
        setIsSubmitting(false);
      }, 1500);
    } else {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };
  
  if (cartItems.length === 0) {
    return null;
  }
  
  // Helper function to render step indicator
  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${checkoutStep === 'address' ? 'bg-brand-yellow text-black' : 'bg-gray-200'}`}>
            1
          </div>
          <div className="h-1 w-16 bg-gray-200 mx-2"></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${checkoutStep === 'summary' ? 'bg-brand-yellow text-black' : 'bg-gray-200'}`}>
            2
          </div>
          <div className="h-1 w-16 bg-gray-200 mx-2"></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${checkoutStep === 'payment' ? 'bg-brand-yellow text-black' : 'bg-gray-200'}`}>
            3
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        
        {renderStepIndicator()}
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            {/* Step 1: Address */}
            {checkoutStep === 'address' && (
              <div className="border rounded-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Step 1: Shipping Information</h2>
                
                {savedAddresses.length > 0 && (
                  <div className="mb-6">
                    <Label htmlFor="addressSelect">Select a saved address</Label>
                    <Select 
                      onValueChange={handleAddressSelect}
                      value={showNewAddressForm ? 'new' : savedAddresses.findIndex(a => a === selectedAddress).toString()}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose an address" />
                      </SelectTrigger>
                      <SelectContent>
                        {savedAddresses.map((address, index) => (
                          <SelectItem key={index} value={index.toString()}>
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-4 w-4" />
                              <span>
                                {address.firstName} {address.lastName}, {address.address}, {address.city}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                        <SelectItem value="new">
                          <div className="flex items-center text-primary">
                            <Plus className="mr-2 h-4 w-4" />
                            <span>Add a new address</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                
                {(showNewAddressForm || savedAddresses.length === 0) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        value={addressForm.firstName}
                        onChange={handleAddressFormChange}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        value={addressForm.lastName}
                        onChange={handleAddressFormChange}
                        required 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        name="address"
                        value={addressForm.address}
                        onChange={handleAddressFormChange}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        name="city"
                        value={addressForm.city}
                        onChange={handleAddressFormChange}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input 
                        id="zipCode" 
                        name="zipCode"
                        value={addressForm.zipCode}
                        onChange={handleAddressFormChange}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">State Name</Label>
                      <Input 
                        id="country" 
                        name="country"
                        value={addressForm.country}
                        onChange={handleAddressFormChange}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel"
                        value={addressForm.phone}
                        onChange={handleAddressFormChange}
                        required 
                      />
                    </div>
                    
                    <div className="md:col-span-2 mt-2">
                      <Button 
                        onClick={handleSaveAddress}
                        className="bg-brand-yellow text-black hover:bg-yellow-600"
                      >
                        Save & Continue <ChevronsRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
                
                {!showNewAddressForm && selectedAddress && (
                  <div className="mt-4">
                    <div className="border p-4 rounded-md bg-gray-50">
                      <div className="font-medium">
                        {selectedAddress.firstName} {selectedAddress.lastName}
                      </div>
                      <div>{selectedAddress.address}</div>
                      <div>{selectedAddress.city}, {selectedAddress.zipCode}</div>
                      <div>{selectedAddress.country}</div>
                      <div>{selectedAddress.phone}</div>
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <Button 
                        onClick={handleProceedToSummary}
                        className="bg-brand-yellow text-black hover:bg-yellow-600"
                      >
                        Continue to Order Summary <ChevronsRight className="ml-1 h-4 w-4" />
                      </Button>
                      
                      <Button 
                        variant="outline"
                        onClick={() => setShowNewAddressForm(true)}
                      >
                        Use a Different Address
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Step 2: Order Summary */}
            {checkoutStep === 'summary' && (
              <div className="border rounded-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Step 2: Order Summary</h2>
                
                {selectedAddress && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Shipping Address</h3>
                    <div className="border p-4 rounded-md bg-gray-50">
                      <div className="font-medium">
                        {selectedAddress.firstName} {selectedAddress.lastName}
                      </div>
                      <div>{selectedAddress.address}</div>
                      <div>{selectedAddress.city}, {selectedAddress.zipCode}</div>
                      <div>{selectedAddress.country}</div>
                      <div>{selectedAddress.phone}</div>
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Items</h3>
                  <div className="border rounded-md divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex p-4 items-center">
                        <div className="w-16 h-16 rounded overflow-hidden bg-gray-100">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity || 1}</p>
                        </div>
                        <div>
                          <p className="font-medium">₹{((item.price * (item.quantity || 1))).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹{(cartTotal * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>₹{(cartTotal + (cartTotal * 0.1)).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-2">
                  <Button 
                    onClick={() => setCheckoutStep('address')}
                    variant="outline"
                  >
                    <ChevronsLeft className="mr-1 h-4 w-4" /> Back to Address
                  </Button>
                  
                  <Button 
                    onClick={handleProceedToPayment}
                    className="bg-brand-yellow text-black hover:bg-yellow-600"
                  >
                    Continue to Payment <ChevronsRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 3: Payment */}
            {checkoutStep === 'payment' && (
              <form onSubmit={handleSubmitOrder}>
                <div className="border rounded-md p-6">
                  <h2 className="text-xl font-bold mb-4">Step 3: Payment Method</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <RadioGroup 
                        value={paymentMethod} 
                        onValueChange={setPaymentMethod}
                        className="space-y-4"
                      >
                        {/* Credit/Debit Card */}
                        <div className="border rounded-md p-4 hover:bg-gray-50">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="credit-card" id="credit-card" />
                            <Label htmlFor="credit-card" className="flex-1 cursor-pointer flex items-center">
                              <CreditCardIcon className="h-5 w-5 mr-2" />
                              Credit/Debit Card
                            </Label>
                          </div>
                          
                          {paymentMethod === 'credit-card' && (
                            <div className="mt-4 pl-6 space-y-4">
                              <div>
                                <Label htmlFor="cardNumber">Card Number</Label>
                                <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="expiryDate">Expiry Date</Label>
                                  <Input id="expiryDate" placeholder="MM/YY" required />
                                </div>
                                <div>
                                  <Label htmlFor="cvc">CVV</Label>
                                  <Input id="cvc" placeholder="123" required />
                                </div>
                              </div>
                              <div>
                                <Label htmlFor="nameOnCard">Name on Card</Label>
                                <Input id="nameOnCard" required />
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* UPI */}
                        <div className="border rounded-md p-4 hover:bg-gray-50">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="upi" id="upi" />
                            <Label htmlFor="upi" className="flex-1 cursor-pointer flex items-center">
                              <WalletCards className="h-5 w-5 mr-2" />
                              UPI
                            </Label>
                          </div>
                          
                          {paymentMethod === 'upi' && (
                            <div className="mt-4 pl-6">
                              <div>
                                <Label htmlFor="upiId">UPI ID</Label>
                                <Input id="upiId" placeholder="yourname@upi" required />
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Netbanking */}
                        <div className="border rounded-md p-4 hover:bg-gray-50">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="netbanking" id="netbanking" />
                            <Label htmlFor="netbanking" className="flex-1 cursor-pointer flex items-center">
                              <Landmark className="h-5 w-5 mr-2" />
                              Netbanking
                            </Label>
                          </div>
                          
                          {paymentMethod === 'netbanking' && (
                            <div className="mt-4 pl-6">
                              <div>
                                <Label htmlFor="bankSelect">Select Bank</Label>
                                <Select onValueChange={setSelectedBank} value={selectedBank}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your bank" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="sbi">State Bank of India</SelectItem>
                                    <SelectItem value="hdfc">HDFC Bank</SelectItem>
                                    <SelectItem value="icici">ICICI Bank</SelectItem>
                                    <SelectItem value="axis">Axis Bank</SelectItem>
                                    <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Cash on Delivery */}
                        <div className="border rounded-md p-4 hover:bg-gray-50">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cod" id="cod" />
                            <Label htmlFor="cod" className="flex-1 cursor-pointer flex items-center">
                              <Wallet className="h-5 w-5 mr-2" />
                              Cash on Delivery
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-2">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setCheckoutStep('summary')}
                    >
                      <ChevronsLeft className="mr-1 h-4 w-4" /> Back to Summary
                    </Button>
                    
                    <Button 
                      type="submit"
                      className="bg-brand-yellow text-black hover:bg-yellow-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Complete Order'}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="border rounded-md p-6 bg-gray-50 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 rounded overflow-hidden bg-gray-100">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity || 1}</p>
                      <p className="font-medium">₹{((item.price * (item.quantity || 1))).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹{(cartTotal * 0.1).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{(cartTotal + (cartTotal * 0.1)).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
