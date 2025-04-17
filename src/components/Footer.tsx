
import { Link } from 'react-router-dom';
 
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Shopi<span className="text-brand-yellow">Verse</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for fashion needs across all categories.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/category/men" className="text-gray-400 hover:text-brand-yellow transition-colors">Men</Link></li>
              <li><Link to="/category/women" className="text-gray-400 hover:text-brand-yellow transition-colors">Women</Link></li>
              <li><Link to="/category/boys" className="text-gray-400 hover:text-brand-yellow transition-colors">Boys</Link></li>
              <li><Link to="/category/girls" className="text-gray-400 hover:text-brand-yellow transition-colors">Girls</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-yellow transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-brand-yellow transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-brand-yellow transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/size-guide" className="text-gray-400 hover:text-brand-yellow transition-colors">Size Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-yellow transition-colors">About Us</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-brand-yellow transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-brand-yellow transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ShopiVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
