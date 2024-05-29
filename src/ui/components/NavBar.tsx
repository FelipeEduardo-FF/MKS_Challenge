import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "../../application/context/CartContext";
import { CartItem } from "src/domain/entities/CartItem";

import ItemCartCard from "./ProductComponents/ItemCartCard";

function NavBar() {
  const { cart, Price } = useCart();
  return (
    <header className="w-full h-20 flex justify-between items-center bg-[#0F52BA] sm:px-[128px] ">
      <div className="flex items-end text-white">
        <h1 className="font-bold text-4xl">MKS</h1>
        <span className="text-slate">Sistemas</span>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="px-4 font-bold">
            <ShoppingCartIcon className="mr-4" size={20} /> {cart.length}
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#0F52BA] border-0 h-full flex flex-col justify-between">
          <div>
            <SheetTitle className="text-white">Carrinho de Compra</SheetTitle>
            {cart?.map((cartItem: CartItem) => {
              return <ItemCartCard cartItem={cartItem}></ItemCartCard>;
            })}
          </div>

          <div>
            <div className="flex mb-5 justify-between">
              <h1 className="text-3xl font-bold text-white">Total: </h1>
              <h1 className="text-3xl font-bold text-white">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(Price))}
              </h1>
            </div>
            <div className="flex h-[65px] bg-black w-full text-white justify-center items-center">
              <h1 className="text-xl font-bold">Finalizar</h1>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default NavBar;
