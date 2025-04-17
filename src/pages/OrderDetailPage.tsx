import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, ArrowLeft, AlertCircle } from "lucide-react";
import { useOrders } from "@/hooks/use-orders";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { formatDate, formatPrice } from "@/lib/formatters";

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-500';
    case 'processing':
      return 'bg-blue-500';
    case 'shipped':
      return 'bg-orange-500';
    case 'delivered':
      return 'bg-green-500';
    case 'cancelled':
      return 'bg-red-500';
    case 'returned':
      return 'bg-purple-500';
    default:
      return 'bg-gray-500';
  }
};

const OrderDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { orders, getOrderById, cancelOrder, returnOrder } = useOrders();
  
  const order = getOrderById(id || '');
  
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [returnDialogOpen, setReturnDialogOpen] = useState(false);
  const [cancellationReason, setCancellationReason] = useState('');
  const [returnReason, setReturnReason] = useState('');
  const [customCancellationReason, setCustomCancellationReason] = useState('');
  const [customReturnReason, setCustomReturnReason] = useState('');
  
  const handleCancelOrder = () => {
    if (!order) return;
    
    const finalReason = cancellationReason === 'other' 
      ? customCancellationReason 
      : cancellationReason;
      
    cancelOrder(order.id, finalReason);
    setCancelDialogOpen(false);
  };

  const handleReturnOrder = () => {
    if (!order) return;
    
    const finalReason = returnReason === 'other' 
      ? customReturnReason 
      : returnReason;
      
    returnOrder(order.id, finalReason);
    setReturnDialogOpen(false);
  };
  
  if (!order) {
    return (
      <Layout>
        <div className="container py-8">
          <div className="text-center py-12">
            <AlertCircle className="h-12 w-12 mx-auto text-red-500 mb-4" />
            <h3 className="text-lg font-medium">Order not found</h3>
            <p className="text-muted-foreground mb-4">
              The order you're looking for doesn't exist or has been removed.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/orders">Back to Orders</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const canCancel = ['pending', 'processing'].includes(order?.status || '');
  const canReturn = ['delivered'].includes(order?.status || '');

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate('/orders')} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Orders
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold">Order Details</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="bg-muted/50 flex flex-row justify-between items-center">
                <div>
                  <CardTitle className="text-xl">Order #{order?.id.substring(0, 8)}</CardTitle>
                  <p className="text-muted-foreground">
                    Placed on {formatDate(order?.createdAt || '')}
                  </p>
                </div>
                <Badge className={`${getStatusColor(order?.status || '')} text-white capitalize`}>
                  {order?.status}
                </Badge>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="font-medium text-lg mb-4">Items</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={order?.product.imageUrl}
                          alt={order?.product.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{order?.product.name}</h4>
                        <p className="text-muted-foreground">
                          Quantity: {order?.product.quantity}
                        </p>
                        <p className="font-medium">
                          {formatPrice((order?.product.price || 0) * (order?.product.quantity || 1))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium text-lg mb-4">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>{formatPrice((order?.total || 0) * 0.9)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>{formatPrice((order?.total || 0) * 0.1)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2">
                      <span>Total</span>
                      <span>{formatPrice(order?.total || 0)}</span>
                    </div>
                  </div>
                </div>
                
                {(order.cancellationReason || order.returnReason) && (
                  <div className="mt-6 pt-6 border-t">
                    {order.cancellationReason && (
                      <div className="mb-4">
                        <h3 className="font-medium text-lg mb-2">Cancellation Reason</h3>
                        <p className="text-muted-foreground">{order.cancellationReason}</p>
                      </div>
                    )}
                    
                    {order.returnReason && (
                      <div>
                        <h3 className="font-medium text-lg mb-2">Return Reason</h3>
                        <p className="text-muted-foreground">{order.returnReason}</p>
                      </div>
                    )}
                  </div>
                )}
                
                {(canCancel || canReturn) && (
                  <div className="mt-6 pt-6 border-t flex flex-wrap gap-3">
                    {canCancel && (
                      <Button 
                        variant="outline" 
                        className="border-red-300 text-red-600 hover:bg-red-50"
                        onClick={() => setCancelDialogOpen(true)}
                      >
                        Cancel Order
                      </Button>
                    )}
                    
                    {canReturn && (
                      <Button 
                        variant="outline"
                        onClick={() => setReturnDialogOpen(true)}
                      >
                        Return Order
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-medium">
                    {order?.shippingAddress.firstName} {order?.shippingAddress.lastName}
                  </p>
                  <p>{order?.shippingAddress.address}</p>
                  <p>{order?.shippingAddress.city}, {order?.shippingAddress.zipCode}</p>
                  <p>{order?.shippingAddress.country}</p>
                  <p className="pt-2">{order?.shippingAddress.phone}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="capitalize">{order?.paymentMethod.replace('-', ' ')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Order</DialogTitle>
            <DialogDescription>
              Please tell us why you're cancelling your order.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <RadioGroup value={cancellationReason} onValueChange={setCancellationReason}>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="changed_mind" id="cancel-changed-mind" />
                <Label htmlFor="cancel-changed-mind">Changed my mind</Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="found_better_price" id="cancel-better-price" />
                <Label htmlFor="cancel-better-price">Found better price elsewhere</Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="shipping_too_long" id="cancel-shipping" />
                <Label htmlFor="cancel-shipping">Shipping time too long</Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="other" id="cancel-other" />
                <Label htmlFor="cancel-other">Other reason</Label>
              </div>
            </RadioGroup>
            
            {cancellationReason === 'other' && (
              <div className="mt-4">
                <Label htmlFor="custom-reason">Please specify your reason</Label>
                <Textarea 
                  id="custom-reason" 
                  value={customCancellationReason} 
                  onChange={(e) => setCustomCancellationReason(e.target.value)}
                  placeholder="Tell us more about why you're cancelling..."
                  className="mt-2"
                />
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
              Never mind
            </Button>
            <Button 
              onClick={handleCancelOrder}
              disabled={cancellationReason === '' || (cancellationReason === 'other' && customCancellationReason === '')}
              className="bg-destructive hover:bg-destructive/90"
            >
              Cancel Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Dialog open={returnDialogOpen} onOpenChange={setReturnDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Return Order</DialogTitle>
            <DialogDescription>
              Please tell us why you're returning your order.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <RadioGroup value={returnReason} onValueChange={setReturnReason}>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="defective" id="return-defective" />
                <Label htmlFor="return-defective">Product is defective</Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="wrong_size" id="return-wrong-size" />
                <Label htmlFor="return-wrong-size">Wrong size/fit</Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="not_as_described" id="return-not-as-described" />
                <Label htmlFor="return-not-as-described">Not as described</Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="damaged" id="return-damaged" />
                <Label htmlFor="return-damaged">Arrived damaged</Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="other" id="return-other" />
                <Label htmlFor="return-other">Other reason</Label>
              </div>
            </RadioGroup>
            
            {returnReason === 'other' && (
              <div className="mt-4">
                <Label htmlFor="custom-return-reason">Please specify your reason</Label>
                <Textarea 
                  id="custom-return-reason" 
                  value={customReturnReason} 
                  onChange={(e) => setCustomReturnReason(e.target.value)}
                  placeholder="Tell us more about why you're returning..."
                  className="mt-2"
                />
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setReturnDialogOpen(false)}>
              Never mind
            </Button>
            <Button 
              onClick={handleReturnOrder}
              disabled={returnReason === '' || (returnReason === 'other' && customReturnReason === '')}
              className="bg-destructive hover:bg-destructive/90"
            >
              Return Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default OrderDetailPage;
