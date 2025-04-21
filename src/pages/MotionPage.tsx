// src/pages/MotionPage.tsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const MotionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to <span className="text-yellow-500">Framer Motion Page</span>
      </motion.h1>

      {/* Section 1 */}
      <motion.section
        className="mb-16 bg-white shadow-xl border border-gray-200 p-8 rounded-lg"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Smooth Entrance</h2>
        <p className="text-gray-600">
          This section fades in from the left with a slide animation. You can use this pattern to reveal sections as the user scrolls.
        </p>
      </motion.section>

      {/* Section 2 - Image with Hover */}
      <motion.div
        className="mb-16 flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.img
          src="/about-image.jpg"
          alt="Demo Visual"
          className="rounded-lg shadow-lg w-full md:w-2/3 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Section 3 - Call to Action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4">Ready to Explore More?</h3>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-600 transition">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default MotionPage;
