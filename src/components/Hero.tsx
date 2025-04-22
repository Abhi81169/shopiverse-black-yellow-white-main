// export default Hero;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import '@/index.css'; // or wherever you added the slideshow CSS

const Hero = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* 🔁 Animated background slideshow */}
      <div className="absolute inset-0 bg-black bg-slideshow opacity-70 z-0"></div>

      {/* 🔤 Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl">
          New Season <span className="text-brand-yellow">Arrivals</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-md mt-4 mb-8">
          Discover the latest trends for everyone in your family. Quality fashion at affordable prices.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-brand-yellow text-black font-semibold hover:bg-yellow-600">
            <Link to="/feature">Shop Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-black hover:text-white">
            <Link to="/collections">View Collections</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
