
// import { Button } from '@/components/ui/button';
// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import AccountMenu from './header/AccountMenu';
// import CartButton from './header/CartButton';
// import MobileMenu from './header/MobileMenu';
// import NavigationMenuComponent from './header/NavigationMenuComponent';
// import SearchComponent from './header/SearchComponent';
// import WishlistButton from './header/WishlistButton';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   const categories = [
//     { name: 'Men', path: '/category/men' },
//     { name: 'Women', path: '/category/women' },
//     { name: 'Boys', path: '/category/boys' },
//     { name: 'Girls', path: '/category/girls' },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-background border-b border-border">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="text-2xl font-bold">
//             Shopi<span className="text-brand-yellow">Verse</span>
//           </Link>

//           <div className="flex items-center space-x-4">
//             <SearchComponent />
//             <NavigationMenuComponent categories={categories} />
//           </div>

//           <div className="flex items-center space-x-4">
//             <WishlistButton />
//             <CartButton />
//             <AccountMenu />
            
//             <Button 
//               variant="ghost" 
//               size="icon"
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>
        
//         <MobileMenu 
//           isMenuOpen={isMenuOpen} 
//           categories={categories} 
//         onClose={() => setIsMenuOpen(false)} 
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountMenu from './header/AccountMenu';
import CartButton from './header/CartButton';
import MobileMenu from './header/MobileMenu';
import NavigationMenuComponent from './header/NavigationMenuComponent';
import SearchComponent from './header/SearchComponent';
import WishlistButton from './header/WishlistButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: 'Men', path: '/category/men' },
    { name: 'Women', path: '/category/women' },
    { name: 'Boys', path: '/category/boys' },
    { name: 'Girls', path: '/category/girls' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/index" className="text-2xl font-bold">
            Shopi<span className="text-brand-yellow">Verse</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <SearchComponent />
            <NavigationMenuComponent categories={categories} />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <WishlistButton />
            <CartButton />
            <AccountMenu />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <MobileMenu
          isMenuOpen={isMenuOpen}
          categories={categories}
          onClose={() => setIsMenuOpen(false)}
        >
          <div className="flex justify-around items-center mt-4 px-4">
            <WishlistButton />
            <CartButton />
            <AccountMenu />
          </div>
        </MobileMenu>
      </div>
    </header>
  );
};

export default Header;

// import { Button } from '@/components/ui/button';
// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import AccountMenu from './header/AccountMenu';
// import CartButton from './header/CartButton';
// import MobileMenu from './header/MobileMenu';
// import NavigationMenuComponent from './header/NavigationMenuComponent';
// import SearchComponent from './header/SearchComponent';
// import WishlistButton from './header/WishlistButton';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const categories = [
//     { name: 'Men', path: '/category/men' },
//     { name: 'Women', path: '/category/women' },
//     { name: 'Boys', path: '/category/boys' },
//     { name: 'Girls', path: '/category/girls' },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-background border-b border-border">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <Link to="/index" className="text-2xl font-bold">
//             Shopi<span className="text-brand-yellow">Verse</span>
//           </Link>

//           <div className="hidden md:flex items-center space-x-4">
//             <SearchComponent />
//             <NavigationMenuComponent categories={categories} />
//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             <WishlistButton />
//             <CartButton />
//             <AccountMenu />
//           </div>

//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </Button>
//         </div>

//         <MobileMenubutto
//           isMenuOpen={isMenuOpen}
//           categories={categories}
//           onClose={() => setIsMenuOpen(false)}
//         >
//           <div className="flex justify-around items-center mt-4 px-4">
//             <WishlistButton />
//             <CartButton />
//             <AccountMenu />
//           </div>
//         </MobileMenubutto>
//       </div>
//     </header>
//   );
// };

// export default Header;