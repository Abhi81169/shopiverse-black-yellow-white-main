import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-8 shadow-md border rounded-xl"
    >
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At ShopiVerse, your privacy is important to us. We collect minimal information necessary for a smooth experience.
        We never share your personal data without your consent.
      </p>
      <p className="mb-4">
        Data such as your name, email, and shipping address is only used to process your order and communicate updates.
      </p>
      <p>
        By using our website, you agree to our Privacy Policy. If you have any questions, feel free to contact us.
      </p>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
