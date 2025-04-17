// src/pages/HomePage.tsx
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-yellow-200 px-4">
      <div className="text-center max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to <span className="text-yellow-500">ShopiVerse</span>
        </h1>
        <p className="text-lg text-gray-600">
          Discover a universe of fashion and essentials. Your one-stop online shop.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/login">
            <Button className="px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl shadow">
              Login
            </Button>
          </Link>
          <Link to="/signuppage">
            <Button className="px-6 py-3 text-lg bg-white border border-yellow-500 text-yellow-500 hover:bg-yellow-50 rounded-xl shadow">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
