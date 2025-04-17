
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown } from 'lucide-react';
// import { Button } from '@/components/ui/button';

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

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
interface MobileMenuProps {
  isMenuOpen: boolean;
  categories: { name: string; path: string }[];
  onClose: () => void;
  children?: ReactNode;
}

const MobileMenu = ({ isMenuOpen, categories, onClose, children }: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="bg-background shadow-md rounded-md mt-2 p-4 md:hidden">
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category.name}>
            <Link
              to={category.path}
              className="block text-lg font-medium hover:text-brand"
              onClick={onClose}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Additional Mobile Actions (Wishlist, Cart, Account) */}
      {children && <div className="mt-6 border-t pt-4">{children}</div>}
    </div>
  );
};

export default MobileMenu;
