
import { toast } from '@/hooks/use-toast';
import { Order } from '@/types';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface OrdersContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'createdAt'>) => void;
  getOrderById: (id: string) => Order | undefined;
  cancelOrder: (id: string, reason: string) => void;
  returnOrder: (id: string, reason: string) => void;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  
  // Load orders from localStorage on component mount
  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      try {
        setOrders(JSON.parse(storedOrders));
      } catch (error) {
        console.error('Failed to parse orders:', error);
      }
    }
  }, []);
  
  // Save orders to localStorage when they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);
  
  const addOrder = (order: Omit<Order, 'id' | 'createdAt'>) => {
    const generatedOrderId: Order = {
      ...order,
      id: `orders-${Date.now()}-${Math.random().toString(36).substr(0, 9)}`,
      createdAt: new Date().toISOString(),
    };
    
    setOrders(prev => [generatedOrderId, ...prev]);
  };
  
  const getOrderById = (id: string) => {
    return orders.find(order => order.id === id);
  };
  
  const cancelOrder = (id: string, reason: string) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === id 
          ? { 
              ...order, 
              status: 'cancelled', 
              cancellationReason: reason,
              updatedAt: new Date().toISOString()
            } 
          : order
      )
    );
    
    toast({
      title: "Order Cancelled",
      description: "Your order has been cancelled successfully."
    });
  };
  
  const returnOrder = (id: string, reason: string) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === id 
          ? { 
              ...order, 
              status: 'returned', 
              returnReason: reason,
              updatedAt: new Date().toISOString()
            } 
          : order
      )
    );
    
    toast({
      title: "Return Requested",
      description: "Your return request has been processed successfully."
    });
  };
  
  return (
    <OrdersContext.Provider value={{ 
      orders, 
      addOrder, 
      getOrderById,
      cancelOrder,
      returnOrder
    }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
};


