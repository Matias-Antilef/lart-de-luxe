import Link from "next/link";
import { SheetDescription, SheetTitle } from "../ui/sheet";

function NavegationSheetItem() {
  return (
    <nav className="pt-[55px] z-[9999] ">
      <SheetTitle>Menu</SheetTitle>
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
  );
}
export default NavegationSheetItem;
