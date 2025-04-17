
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { CartProvider } from './hooks/use-cart'
import { WishlistProvider } from './hooks/use-wishlist'
import { AddressProvider } from './hooks/use-address'
import { OrdersProvider } from './hooks/use-orders'
import { Toaster } from './components/ui/toaster'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <AddressProvider>
            <OrdersProvider>
              <App />
              <Toaster />
            </OrdersProvider>
          </AddressProvider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
