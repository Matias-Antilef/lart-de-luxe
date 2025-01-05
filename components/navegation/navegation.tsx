"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import NavegationSheetItem from "./navegation-sheet-item";
import NavegationItem from "./navegation-item";
import styles from "./navegation.module.css";
import { PublicRoutes } from "@/routes/routes";
import { useRouter } from "next/navigation";
function Navegation() {
  const router = useRouter();

  return (
    <div className={styles.navegation}>
      <div className="flex items-center h-full justify-between px-[8vw] mx-auto">
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <NavegationSheetItem />
            </SheetContent>
          </Sheet>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push(PublicRoutes.SEARCH)}
          >
            <Search className="h-6 w-6" />
            <span className="sr-only">Toggle search</span>
          </Button>
        </div>

        <div className={styles.logo}>
          <Link href="/" className={styles.logo_link}>
            L&apos;art De Luxe
          </Link>
        </div>

        <NavegationItem />
      </div>
    </div>
  );
}
export default Navegation;
