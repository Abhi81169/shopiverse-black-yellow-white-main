// src/components/Hero.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const images = [
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  "https://media.istockphoto.com/id/689331174/photo/traditional-bright-and-colourful-indian-fabric-for-sari.jpg?s=612x612&w=0&k=20&c=dI-vCAzR9qZvAh6dEA1RL2Ka2-NEDHVfOkzUiFIGsgo=",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* 📸 Sliding image container */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={images[index]}
            custom={direction}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* 🌫 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

      {/* 📝 Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl drop-shadow-lg">
          New Season <span className="text-yellow-400">Arrivals</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-md mt-4 mb-8 drop-shadow-md">
          Discover the latest trends for everyone in your family. Quality fashion at affordable prices.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-yellow-400 text-black font-semibold hover:bg-yellow-500 shadow-lg">
            <Link to="/feature">Shop Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-black hover:text-white shadow-lg">
            <Link to="/collections">View Collections</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;



// // src/components/Hero.tsx
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// const images = [
//   "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
//   "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
//   "https://media.istockphoto.com/id/689331174/photo/traditional-bright-and-colourful-indian-fabric-for-sari.jpg?s=612x612&w=0&k=20&c=dI-vCAzR9qZvAh6dEA1RL2Ka2-NEDHVfOkzUiFIGsgo=",
// ]; // 👈 Use wide 3000x800px or similar images

// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000); // ⏱ Change every 5s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-[500px] overflow-hidden">
//       {/* 📸 Background slideshow with fade */}
//       <div className="absolute inset-0 z-0">
//         <AnimatePresence>
//           <motion.div
//             key={images[index]}
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${images[index]})` }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5 }}
//           />
//         </AnimatePresence>
//       </div>

//       {/* 🌫 Gradient Overlay for readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

//       {/* 📝 Content */}
//       <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start z-20">
//         <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl drop-shadow-lg">
//           New Season <span className="text-yellow-400">Arrivals</span>
//         </h1>
//         <p className="text-lg md:text-xl text-white max-w-md mt-4 mb-8 drop-shadow-md">
//           Discover the latest trends for everyone in your family. Quality fashion at affordable prices.
//         </p>
//         <div className="space-x-4">
//           <Button asChild size="lg" className="bg-yellow-400 text-black font-semibold hover:bg-yellow-500 shadow-lg">
//             <Link to="/feature">Shop Now</Link>
//           </Button>
//           <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black shadow-lg">
//             <Link to="/collections">View Collections</Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


