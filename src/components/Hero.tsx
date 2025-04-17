
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt="Fashion collection"
          className="w-full h-full object-cover object-center opacity-70"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl">
          New Season <span className="text-brand-yellow">Arrivals</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-md mt-4 mb-8">
          Discover the latest trends for everyone in your family. Quality fashion at affordable prices.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-brand-yellow text-black font-semibold hover:bg-yellow-600">
            <Link to="/category/new-arrivals">Shop Now</Link>
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
