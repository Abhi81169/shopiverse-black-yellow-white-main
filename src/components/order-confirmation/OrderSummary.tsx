
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OrderSummaryProps {
  orderNumber:string;
  onCancelOrder: () => void;
  onReturnOrder: () => void;
}

const OrderSummary = ({ orderNumber, onCancelOrder, onReturnOrder }: OrderSummaryProps) => {
  return (
    <div className="max-w-md mx-auto text-center">
      <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
      <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
      <p className="text-muted-foreground mb-6">
        Thank you for your purchase. Your order has been confirmed and will be shipped soon.
      </p>
      
      <div className="bg-gray-50 border rounded-md p-6 text-left mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Order Number:</span>
          <span>{orderNumber}</span>
          </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium">Date:</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Email:</span>
          <span>customer@example.com</span>
        </div>
      </div>
      
      <div className="flex flex-col space-y-4">
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={onCancelOrder}
          >
            Cancel Order
          </Button>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={onReturnOrder}
          >
            Return Order
          </Button>
        </div>
        
        <Button asChild className="bg-brand-yellow text-black hover:bg-yellow-600">
          <Link to="/index">Continue Shopping</Link>
        </Button>
        
        <Button asChild variant="outline">
          <Link to="/orders">View Orders</Link>
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
