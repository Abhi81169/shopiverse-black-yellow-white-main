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
import ContactUsPage from './pages/ContactUsPage';
import FaqsPage from './pages/FaqsPage';
import ShippingReturnsPage from './pages/ShippingReturnsPage';
import SizeGuidePage from './pages/SizeGuidePage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import BestSellers from './pages/BestSellers';
import NewArrivals from './pages/NewArrivals';
import Sale from './pages/Sale';



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
      <Route path="/contact" element={<ContactUsPage/>} />
      <Route path="/faqs" element={<FaqsPage/>} />
      <Route path="/shipping-returns" element={<ShippingReturnsPage/>} />
      <Route path="/size-guide" element={<SizeGuidePage/>} />
      <Route path="/about" element={<AboutUsPage/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
      <Route path="/terms-and-conditions" element={<TermsAndConditionsPage/>} />
      <Route path="/best-sellers" element={<BestSellers/>} />
      <Route path="/new-arrivals" element={<NewArrivals/>} />
      <Route path="/sale" element={<Sale/>} />
    </Routes>
  );
}


export default App;
