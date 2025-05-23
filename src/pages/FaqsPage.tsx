import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is ShopiVerse?",
    answer: "ShopiVerse is your one-stop online store for the latest fashion trends in men's, women's, and kids' wear.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive an email with tracking information. You can also track orders in your account page.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide with a variety of shipping options available at checkout.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit/debit cards, UPI, net banking, and popular wallets.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 7-day return window for unused items in original packaging. Please check our Return Policy page for more info.",
  }
];

const FaqsPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

          <><><div className="w-full flex justify-between items-center px-6 py-4 absolute top-0 left-0 z-10 bg-blue-50 ">
      {/* Back Arrow Button */}
      <Link to="/index" className="text-3xl text-blue-600 hover:text-blue-800">
        ←
      </Link>
      {/* Centered ShopiVerse Title */}
      <h2 className="text-4xl font-bold text-center absolute mt-0 left-1/2 transform -translate-x-1/2">
        Shopi<span className="text-brand-yellow">Verse</span>
      </h2>
    </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto py-10 px-4"
      >
        <h1 className="text-4xl font-bold mt-16 text-center mb-8">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="border border-gray-300 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-4 font-medium text-left"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div></><div>
        {/* Footer for the scroll target */}
        <footer id="footer" className="bg-yellow-100 py-8 text-center mt-10">
          <p className="text-gray-600">© 2025 ShopiVerse. All rights reserved.</p>
        </footer>
      </div></>
  );
};

export default FaqsPage;
