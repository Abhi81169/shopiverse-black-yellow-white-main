
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
 

  return (
    <div className="min-h-screen flex flex-col bg-yellow-50 relative ">
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center px-6 py-4 absolute top-0 left-0 z-10 ">
         {/* Back Arrow Button */}
         <Link to="/index" className="text-3xl text-blue-600 hover:text-blue-800">
          ←
        </Link>
        {/* Centered ShopiVerse Title */}
        <h2 className="text-4xl font-bold text-center absolute mt-10 left-1/2 transform -translate-x-1/2">
        Shopi<span className="text-brand-yellow">Verse</span>

        </h2>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 py-8 shadow-md border rounded-xl bg-blue-50"
        >
          <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
          <p className="mb-4 text-center">
            At ShopiVerse, your privacy is important to us. We collect minimal information necessary for a smooth experience.
            We never share your personal data without your consent.
          </p>
          <p className="mb-4 text-center">
            Data such as your name, email, and shipping address is only used to process your order and communicate updates.
          </p>
          <p className="text-center">
            By using our website, you agree to our Privacy Policy. If you have any questions, feel free to contact us.
          </p>
        </motion.div>
      </div>

      {/* Footer for the scroll target */}
      <footer id="footer" className="bg-yellow-100 py-8 text-center mt-10">
        <p className="text-gray-600">© 2025 ShopiVerse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
