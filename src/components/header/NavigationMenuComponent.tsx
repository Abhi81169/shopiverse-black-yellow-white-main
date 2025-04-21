
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
interface Category {
  name: string;
  path: string;
}

interface NavigationMenuComponentProps {
  categories: Category[];
}

const NavigationMenuComponent = ({ categories }: NavigationMenuComponentProps) => {
  return (
    <>
      {/* Desktop Navigation Menu (larger screens) */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="flex-wrap">
          {categories.map((category) => (
            <NavigationMenuItem key={category.path}>
              <NavigationMenuTrigger className="text-sm lg:text-base">{category.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[200px] md:w-[220px] lg:w-[250px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        to={category.path}
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-base lg:text-lg font-medium">
                          {category.name}
                        </div>
                        <p className="text-xs lg:text-sm leading-tight text-muted-foreground">
                          Browse {category.name.toLowerCase()} products
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link to={`${category.path}/new-arrivals`} className="block p-2 hover:bg-accent rounded-md text-sm">
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link to={`${category.path}/best-sellers`} className="block p-2 hover:bg-accent rounded-md text-sm">
                      Best Sellers
                    </Link>
                  </li>
                  <li>
                    <Link to={`${category.path}/sale`} className="block p-2 hover:bg-accent rounded-md text-sm">
                      Sale
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Tablet Menubar (medium screens) */}
      <Menubar className="hidden md:flex lg:hidden border-none bg-transparent">
        {categories.map((category) => (
          <MenubarMenu key={category.path}>
            <MenubarTrigger className="text-sm font-medium px-2">{category.name}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link to={category.path}>All {category.name}</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link to={`${category.path}/new-arrivals`}>New Arrivals</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link to={`${category.path}/best-sellers`}>Best Sellers</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link to={`${category.path}/sale`}>Sale</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        ))}
      </Menubar>
    </>
  );
};

export default NavigationMenuComponent;

