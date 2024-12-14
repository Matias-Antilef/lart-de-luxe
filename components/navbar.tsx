"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, User, ShoppingBag, Menu, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { PublicRoutes } from "../routes/routes";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-background text-black">
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav>
                <SheetTitle>Hello</SheetTitle>
                <SheetDescription className="flex flex-col space-y-4">
                  <Link href="/" className="text-lg font-medium">
                    Inicio
                  </Link>
                  <Link href="/products" className="text-lg font-medium">
                    Hombre
                  </Link>
                  <Link href="/about" className="text-lg font-medium">
                    Mujer
                  </Link>
                  <Link href="/contact" className="text-lg font-medium">
                    Regalos
                  </Link>
                </SheetDescription>
              </nav>
            </SheetContent>
          </Sheet>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-6 w-6" />
            <span className="sr-only">Toggle search</span>
          </Button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-2xl font-bold">
            L&apos;art De Luxe
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href={`/${PublicRoutes.PAGES}/${PublicRoutes.FAVORITES}`}>
            <Button variant="ghost" size="icon">
              <Heart className="h-6 w-6" />
              <span className="sr-only">Favorites</span>
            </Button>
          </Link>
          <Link href={`/${PublicRoutes.PAGES}/${PublicRoutes.ACCOUNT}`}>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <Link href={`/${PublicRoutes.PAGES}/${PublicRoutes.CART}`}>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-6 w-6" />
              <span className="sr-only">Shopping bag</span>
            </Button>
          </Link>
        </div>
      </div>
      {isSearchOpen && (
        <div className="border-t py-2 px-4">
          <div className="max-w-md mx-auto">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
