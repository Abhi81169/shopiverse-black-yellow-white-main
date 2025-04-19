// src/pages/HomePage.tsx
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <Link to="/shop">
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{
          backgroundImage: "url('/assets/bg.jpg')"
        }}
      >
        {/* ✅ Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* ✅ Animated content */}
        <div className="relative z-10 text-center max-w-2xl space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Welcome to <span className="text-yellow-400">ShopiVerse</span>
          </h1>
          <p className="text-lg text-gray-200">
            Discover a universe of fashion and essentials. Your one-stop online shop.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/login">
              <button className="px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl shadow">
                Login
              </button>
            </Link>
            <Link to="/signuppage">
              <button className="px-6 py-3 text-lg bg-white border border-yellow-500 text-yellow-500 hover:bg-yellow-50 rounded-xl shadow">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomePage;
