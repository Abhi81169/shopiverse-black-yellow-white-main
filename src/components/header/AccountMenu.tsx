
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AccountMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link to="/account">My Account</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/orders">Orders</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/wishlist">Wishlist</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/login">Login</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/">Logout</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountMenu;
