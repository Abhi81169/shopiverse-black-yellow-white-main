
// import { useLocation } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';
  
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-grow">
//         {children}
//       </main>
//       {isHomePage && <Footer />}
//     </div>
//   );
// };

// export default Layout;



import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Define routes where Header should be hidden
  const hideHeaderOnRoutes = ['/login', '/signuppage'];

  const shouldHideHeader = hideHeaderOnRoutes.includes(location.pathname);

  return (
    <>
    <div className="flex flex-col min-h-screen">
      {!shouldHideHeader && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {isHomePage && <Footer />}
    </div>
    </>
  );
};

export default Layout;
