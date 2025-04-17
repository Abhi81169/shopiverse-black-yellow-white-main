
// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { CreditCard, Wallet } from 'lucide-react';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Label } from '@/components/ui/label';
// import { useToast } from '@/hooks/use-toast';

// // Import payment gateway logos
// import { creditCardLogo, paypalLogo, googlePayLogo, phonePayLogo, paytmLogo } from '@/lib/constants';

// interface PaymentGatewayProps {
//   onPaymentComplete?: () => void;
//   amount: number;
// }

// const PaymentGateway: React.FC<PaymentGatewayProps> = ({ 
//   onPaymentComplete, 
//   amount 
// }) => {
//   const [paymentMethod, setPaymentMethod] = React.useState('credit-card');
//   const [isProcessing, setIsProcessing] = React.useState(false);
//   const { toast } = useToast();

//   const handlePayment = () => {
//     setIsProcessing(true);
    
//     // Simulate payment processing
//     setTimeout(() => {
//       setIsProcessing(false);
//       toast({
//         title: "Payment Successful",
//         description: `Your payment of $${amount.toFixed(2)} has been processed successfully.`,
//       });
      
//       if (onPaymentComplete) {
//         onPaymentComplete();
//       }
//     }, 1500);
//   };

//   return (
//     <div className="border rounded-lg p-6 bg-white shadow-md">
//       <h3 className="text-lg font-semibold mb-4">Choose Payment Method</h3>
      
//       <RadioGroup 
//         value={paymentMethod} 
//         onValueChange={setPaymentMethod}
//         className="space-y-3"
//       >
//         <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
//           <RadioGroupItem value="credit-card" id="credit-card" />
//           <Label htmlFor="credit-card" className="flex-1 cursor-pointer flex items-center">
//             Credit/Debit Card
//             <span className="ml-auto">
//               <img src={creditCardLogo} alt="Credit Card" className="h-6" />
//             </span>
//           </Label>
//         </div>
        
//         <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
//           <RadioGroupItem value="paypal" id="paypal" />
//           <Label htmlFor="paypal" className="flex-1 cursor-pointer flex items-center">
//             PayPal
//             <span className="ml-auto">
//               <img src={paypalLogo} alt="PayPal" className="h-6" />
//             </span>
//           </Label>
//         </div>

//         <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
//           <RadioGroupItem value="google-pay" id="google-pay" />
//           <Label htmlFor="google-pay" className="flex-1 cursor-pointer flex items-center">
//             Google Pay
//             <span className="ml-auto">
//               <img src={googlePayLogo} alt="Google Pay" className="h-6" />
//             </span>
//           </Label>
//         </div>

//         <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
//           <RadioGroupItem value="phone-pay" id="phone-pay" />
//           <Label htmlFor="phone-pay" className="flex-1 cursor-pointer flex items-center">
//             PhonePe
//             <span className="ml-auto">
//               <img src={phonePayLogo} alt="PhonePe" className="h-6" />
//             </span>
//           </Label>
//         </div>

//         <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
//           <RadioGroupItem value="paytm" id="paytm" />
//           <Label htmlFor="paytm" className="flex-1 cursor-pointer flex items-center">
//             Paytm
//             <span className="ml-auto">
//               <img src={paytmLogo} alt="Paytm" className="h-6" />
//             </span>
//           </Label>
//         </div>
//       </RadioGroup>

//       {paymentMethod === 'credit-card' && (
//         <div className="mt-4 space-y-3">
//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <Label htmlFor="cardNumber">Card Number</Label>
//               <input 
//                 type="text" 
//                 id="cardNumber" 
//                 placeholder="1234 5678 9012 3456" 
//                 className="w-full p-2 border rounded" 
//               />
//             </div>
//             <div>
//               <Label htmlFor="cardName">Name on Card</Label>
//               <input 
//                 type="text" 
//                 id="cardName" 
//                 placeholder="John Doe" 
//                 className="w-full p-2 border rounded" 
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <Label htmlFor="expiry">Expiry Date</Label>
//               <input 
//                 type="text" 
//                 id="expiry" 
//                 placeholder="MM/YY" 
//                 className="w-full p-2 border rounded" 
//               />
//             </div>
//             <div>
//               <Label htmlFor="cvv">CVV</Label>
//               <input 
//                 type="text" 
//                 id="cvv" 
//                 placeholder="123" 
//                 className="w-full p-2 border rounded" 
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {(paymentMethod === 'phone-pay' || paymentMethod === 'paytm' || paymentMethod === 'google-pay') && (
//         <div className="mt-4 space-y-3">
//           <div>
//             <Label htmlFor="mobileNumber">Mobile Number</Label>
//             <input 
//               type="tel" 
//               id="mobileNumber" 
//               placeholder="Enter your mobile number" 
//               className="w-full p-2 border rounded" 
//             />
//           </div>
//         </div>
//       )}
      
//       <div className="mt-6">
//         <Button 
//           onClick={handlePayment} 
//           disabled={isProcessing}
//           className="w-full bg-brand-yellow text-black hover:bg-yellow-600 h-10"
//         >
//           {isProcessing ? (
//             <>Processing...</>
//           ) : (
//             <>
//               <CreditCard className="mr-2 h-4 w-4" />
//               Pay ${amount.toFixed(2)}
//             </>
//           )}
//         </Button>
//       </div>
      
//       <div className="mt-3 flex justify-center">
//         <p className="text-xs text-gray-500 flex items-center">
//           <Wallet className="mr-1 h-4 w-4" />
//           Secured by ShopiversePay
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PaymentGateway;
