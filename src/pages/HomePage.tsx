//src/pages/HomePage.tsx
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


  
  const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Link to="/">
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhlcyUyMHdpdGglMjBsaWdodCUyMGNvdmVyJTIwcGhvdG98ZW58MHx8MHx8fDA%3D')"
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
          <div className="flex flex-col sm:flex-row justify-center gap-12">
            <Link to="/login">
              <button className="px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl shadow">
                Login
              </button>
            </Link>
            <Link to="/signuppage">
              <button className="px-6 py-3 text-lg bg-white border border-yellow-500 text-yellow-500 hover:bg-black  rounded-xl shadow">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
           {/* Featured Photos */}
      <section className="py-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Looks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.pexels.com/photos/3772506/pexels-photo-3772506.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.unsplash.com/photo-1685875018148-6ac6d41b7c4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
            "https://images.pexels.com/photos/4046313/pexels-photo-4046313.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
          ].map((url, i) => (
            <img
              key={i}
              src={`${url}?auto=format&fit=crop&w=600&q=80`}
              alt="Featured"
              className="w-full h-72 object-cover rounded shadow-lg  hover:scale-105 hover:shadow-2xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            />
          ))}
        </div>
      </section>

      {/* About Brand */}
      <section className="py-16 bg-gray-100 text-center px-6">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg mb-6">
            At <strong>ShopiVarse</strong>, we believe fashion is more than clothes—it's
            confidence, expression, and identity. Whether you're shopping for streetwear
            or classic essentials, we have something for every vibe.
          </p>
          <Link to="/login"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            View Best Sellers
          </Link>
        </div>
      </section> 

    </Link>
  );
};

export default HomePage;
