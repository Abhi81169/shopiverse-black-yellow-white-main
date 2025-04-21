import { motion } from 'framer-motion';

const TermsAndConditionsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-8 shadow-md border rounded-xl"
    >
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to ShopiVerse. By accessing or using our website, you agree to comply with these terms.
      </p>
      <p className="mb-4">
        You must not use our site for any unlawful purposes. All purchases are subject to our return and refund policies.
      </p>
      <p>
        We reserve the right to modify these terms at any time. Continued use of our services implies agreement.
      </p>
    </motion.div>
  );
};

export default TermsAndConditionsPage;
