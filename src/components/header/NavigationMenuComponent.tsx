

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import "@/components/Header";
interface Category {
  name: string;
  path: string;
}

interface NavigationMenuComponentProps {
  categories: Category[];
}

const NavigationMenuComponent = ({ categories }: NavigationMenuComponentProps) => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {categories.map((category) => (
          <NavigationMenuItem key={category.path}>
            <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 p-4 w-[200px] " >
                <li className="row-span-2 ">
                  <NavigationMenuLink asChild>
                    <Link
                      to={category.path}
                      // className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      className="absolute top-full left-0 mt-2 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-xl rounded-md z-20"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {category.name}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Browse {category.name.toLowerCase()} products
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <Link to={`/new-arrivals`} className="block p-2 hover:bg-accent rounded-md">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link to={`/best-sellers`} className="block p-2 hover:bg-accent rounded-md">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link to={`/sale`} className="block p-2 hover:bg-accent rounded-md">
                    Sale
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;

