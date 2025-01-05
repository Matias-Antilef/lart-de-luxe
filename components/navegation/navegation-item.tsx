import Link from "next/link";
import { Button } from "../ui/button";
import { Heart, ShoppingBag, User } from "lucide-react";
import { PublicRoutes } from "@/routes/routes";

function NavegationItem() {
  return (
    <div className="flex space-x-4">
      <Link href={PublicRoutes.FAVORITES}>
        <Button variant="ghost" size="icon">
          <Heart className="h-10 w-10" />
          <span className="sr-only">Favorites</span>
        </Button>
      </Link>
      <Link href={PublicRoutes.ACCOUNT}>
        <Button variant="ghost" size="icon">
          <User className="h-6 w-6" />
          <span className="sr-only">Account</span>
        </Button>
      </Link>
      <Link href={PublicRoutes.CART}>
        <Button variant="ghost" size="icon">
          <ShoppingBag className="h-6 w-6" />
          <span className="sr-only">Shopping bag</span>
        </Button>
      </Link>
    </div>
  );
}
export default NavegationItem;
