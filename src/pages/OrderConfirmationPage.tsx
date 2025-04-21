import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import OrderSummary from '@/components/order-confirmation/OrderSummary';
import CancelOrderDialog from '@/components/order-confirmation/CancelOrderDialog';
import ReturnOrderDialog from '@/components/order-confirmation/ReturnOrderDialog';
import { useOrderConfirmation } from '@/hooks/use-order-confirmation';
import { getNextOrderNumber } from '@/hooks/use-order-confirmation'; // ✅ make sure this is exported from the hook file

const OrderConfirmationPage = () => {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    const number = getNextOrderNumber(); // ✅ generate once
    setOrderNumber(number);
  }, []);

  const {
    cancelDialogOpen,
    setCancelDialogOpen,
    returnDialogOpen,
    setReturnDialogOpen,
    handleCancelOrder,
    handleReturnOrder
  } = useOrderConfirmation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <OrderSummary 
          orderNumber={orderNumber}
          onCancelOrder={() => setCancelDialogOpen(true)}
          onReturnOrder={() => setReturnDialogOpen(true)}
        />
      </div>
      
      {/* Cancel Order Dialog */}
      <CancelOrderDialog
        open={cancelDialogOpen}
        onOpenChange={setCancelDialogOpen}
        onConfirm={handleCancelOrder}
      />
      
      {/* Return Order Dialog */}
      <ReturnOrderDialog
        open={returnDialogOpen}
        onOpenChange={setReturnDialogOpen}
        onConfirm={handleReturnOrder}
      />
    </Layout>
  );
};

export default OrderConfirmationPage;
