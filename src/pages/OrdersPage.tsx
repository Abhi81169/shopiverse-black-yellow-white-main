
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useOrders } from "@/hooks/use-orders";
import { formatDate, formatPrice } from "@/lib/formatters";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

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

const OrdersPage = () => {
  const { orders } = useOrders();

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My Orders</h1>
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/index">Continue Shopping</Link>
          </Button>
        </div>

        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders
            .filter((order) => order.total !== 151) // 👈 hide orders where total is 151
            .map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">Order #{order.id.substring(0, 8)}</CardTitle>
                      <CardDescription>
                        Placed on {formatDate(order.createdAt)}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={`${getStatusColor(order.status)} text-white capitalize`}>
                        {order.status}
                      </Badge>
                      <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                        <Link to={`/orders/${order.id}`}>
                          Details <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={order.product.imageUrl}
                          alt={order.product.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{order.product.name}</h3>
                        <p className="text-muted-foreground">
                          Quantity: {order.product.quantity}
                        </p>
                        <p className="font-medium">
                          {formatPrice(order.product.price * order.product.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total</span>
                      <span className="text-xl font-bold">{formatPrice(order.total)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No orders yet</h3>
            <p className="text-muted-foreground mb-4">
              When you place an order, they will appear here.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/index">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OrdersPage;
