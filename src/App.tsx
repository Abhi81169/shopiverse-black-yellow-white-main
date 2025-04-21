import AccountPage from '@/pages/AccountPage';
import CartPage from '@/pages/CartPage';
import CategoryPage from '@/pages/CategoryPage';
import CheckoutPage from '@/pages/CheckoutPage';
import HomePage from '@/pages/HomePage';
import Index from '@/pages/Index';
import LoginPage from '@/pages/LoginPage';
import NotFound from '@/pages/NotFound';
import OrderConfirmationPage from '@/pages/OrderConfirmationPage';
import OrderDetailPage from '@/pages/OrderDetailPage';
import OrdersPage from '@/pages/OrdersPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import SearchResultsPage from '@/pages/SearchResultsPage';
import SignupPage from '@/pages/SignupPage';
import WishlistPage from '@/pages/WishlistPage';
import { Route, Routes } from 'react-router-dom';
import FeaturedProducts from './components/FeaturedProducts';



function App() {
  return (
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/feature" element={<FeaturedProducts />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/orders/:id" element={<OrderDetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signuppage" element={<SignupPage />} />
      <Route path="/search" element={<SearchResultsPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


export default App;
