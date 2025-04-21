import { motion } from 'framer-motion';

const ShippingReturnsPage = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center mb-8">Shipping & Returns</h1>

      <section className="space-y-6 text-gray-700">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 border rounded-xl shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Shipping Policy</h2>
          <p>
            We offer standard and express delivery across all regions. Orders placed before 2 PM are shipped the same day. You’ll receive a tracking link once your order is shipped.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 border rounded-xl shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Return & Exchange Policy</h2>
          <p>
            Returns are accepted within 7 days of delivery. Items must be unused and in original packaging. To initiate a return, please visit your Orders page or contact our support team.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 border rounded-xl shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Refunds</h2>
          <p>
            Once we receive and inspect your return, your refund will be processed within 3-5 business days. Refunds are issued to the original payment method.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ShippingReturnsPage;
