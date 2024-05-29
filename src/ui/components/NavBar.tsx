import {
  Minus,
  MinusIcon,
  MoreVerticalIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "../../application/context/CartContext";
import { CartItem } from "src/domain/entities/CartItem";
import { Card, CardContent } from "./ui/card";

function NavBar() {
  const { cart, addProductToCart, decreaseProductToCart } = useCart();
  return (
    <header className="w-full h-20 flex justify-between items-center bg-[#0F52BA] px-[128px] ">
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
        <SheetContent className="bg-[#0F52BA] border-0">
          <SheetTitle className="text-white">Carrinho de Compra</SheetTitle>

          {cart?.map((cartItem: CartItem) => {
            return (
              <div
                key={cartItem.product.id}
                className="w-full h-[90px] flex justify-center mt-6"
              >
                <Card className="w-full">
                  <CardContent className="p-3 flex items-center">
                    <img
                      className="h-[57px]"
                      src={cartItem.product.photo}
                      alt={cartItem.product.name}
                    ></img>
                    {cartItem.product.name}
                    <div className="flex items-center w-full mx-auto justify-center">
                      <button
                        onClick={() => addProductToCart(cartItem.product)}
                        className="group rounded-l-full px-1 py-[6px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <PlusIcon size={22}></PlusIcon>
                      </button>
                      <input
                        type="text"
                        disabled
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[30px] min-w-[20px] placeholder:text-gray-900 py-[3px] text-center bg-transparent"
                        value={cartItem.quantity}
                      />
                      <button
                        onClick={() => decreaseProductToCart(cartItem.product)}
                        className="group rounded-r-full px-1 py-[6px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <MinusIcon size={22}></MinusIcon>
                      </button>
                    </div>
                    <p className="font-bold">
                      {" "}
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(Number(cartItem.product.price))}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default NavBar;
