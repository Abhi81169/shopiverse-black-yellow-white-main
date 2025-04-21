
// import { Button } from '@/components/ui/button';
// import { ChevronDown } from 'lucide-react';
// import { Link } from 'react-router-dom';

// interface Category {
//   name: string;
//   path: string;
// }

// interface MobileMenuProps {
//   isMenuOpen: boolean;
//   categories: Category[];
//   onClose: () => void;
// }

// const MobileMenu = ({ isMenuOpen, categories, onClose }: MobileMenuProps) => {
//   if (!isMenuOpen) return null;

//   return (
//     <nav className="md:hidden py-4 flex flex-col space-y-4">
//       {categories.map((category) => (
//         <div key={category.path} className="relative group">
//           <div className="flex items-center justify-between">
//             <Link 
//               to={category.path}
//               className="font-medium hover:text-brand-yellow transition-colors"
//               onClick={onClose}
//             >
//               {category.name}
//             </Link>
//             <Button 
//               variant="ghost" 
//               size="sm" 
//               className="p-0 h-auto"
//               onClick={(e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 const submenu = document.getElementById(`submenu-${category.name}`);
//                 if (submenu) {
//                   submenu.classList.toggle('hidden');
//                 }
//               }}
//             >
//               <ChevronDown className="h-4 w-4" />
//             </Button>
//           </div>
//           <div id={`submenu-${category.name}`} className="pl-4 mt-2 hidden space-y-2">
//             <Link 
//               to={`${category.path}/new-arrivals`}
//               className="block text-sm hover:text-brand-yellow"
//               onClick={onClose}
//             >
//               New Arrivals
//             </Link>
//             <Link 
//               to={`${category.path}/best-sellers`}
//               className="block text-sm hover:text-brand-yellow"
//               onClick={onClose}
//             >
//               Best Sellers
//             </Link>
//             <Link 
//               to={`${category.path}/sale`}
//               className="block text-sm hover:text-brand-yellow"
//               onClick={onClose}
//             >
//               Sale
//             </Link>
//           </div>
//         </div>
//       ))}
//     </nav>
//   );
// };

// export default MobileMenu;

import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Category {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isMenuOpen: boolean;
  categories: Category[];
  onClose: () => void;
}

const MobileMenu = ({ isMenuOpen, categories, onClose }: MobileMenuProps) => {
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const isMobile = useIsMobile();

  if (!isMenuOpen || !isMobile) return null;

  const toggleSubmenu = (categoryName: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  return (
    <nav className="md:hidden py-4 px-2 flex flex-col space-y-4 mobile-menu bg-background border-t border-border">
      {/* Account, Wishlist, Cart links */}
      <div className="flex justify-around border-b border-border pb-3 mb-1">
        <Link 
          to="/account" 
          className="flex flex-col items-center text-sm"
          onClick={onClose}
        >
          <span className="font-medium">Account</span>
        </Link>
        <Link 
          to="/wishlist" 
          className="flex flex-col items-center text-sm"
          onClick={onClose}
        >
          <span className="font-medium">Wishlist</span>
        </Link>
        <Link 
          to="/cart" 
          className="flex flex-col items-center text-sm"
          onClick={onClose}
        >
          <span className="font-medium">Cart</span>
        </Link>
      </div>

      {/* Categories with submenus */}
      {categories.map((category) => (
        <div key={category.path} className="relative group">
          <div className="flex items-center justify-between">
            <Link 
              to={category.path}
              className="font-medium hover:text-brand-yellow transition-colors text-base"
              onClick={onClose}
            >
              {category.name}
            </Link>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-0 h-auto"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSubmenu(category.name);
              }}
            >
              {openSubmenus[category.name] ? 
                <ChevronUp className="h-4 w-4" /> : 
                <ChevronDown className="h-4 w-4" />
              }
            </Button>
          </div>
          <div 
            className={`pl-4 mt-2 space-y-2 transition-all duration-200 ${
              openSubmenus[category.name] ? 'block max-h-56 opacity-100' : 'hidden max-h-0 opacity-0'
            }`}
          >
            <Link 
              to={`${category.path}/new-arrivals`}
              className="block text-sm py-1 hover:text-brand-yellow"
              onClick={onClose}
            >
              New Arrivals
            </Link>
            <Link 
              to={`${category.path}/best-sellers`}
              className="block text-sm py-1 hover:text-brand-yellow"
              onClick={onClose}
            >
              Best Sellers
            </Link>
            <Link 
              to={`${category.path}/sale`}
              className="block text-sm py-1 hover:text-brand-yellow"
              onClick={onClose}
            >
              Sale
            </Link>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default MobileMenu;